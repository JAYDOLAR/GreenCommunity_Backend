package com.example.greencommunity.service;

import com.example.greencommunity.dto.EnvironmentalProjectRequest;
import com.example.greencommunity.dto.EnvironmentalProjectResponse;
import com.example.greencommunity.model.EnvironmentalProject;
import com.example.greencommunity.model.User;
import com.example.greencommunity.repository.EnvironmentalProjectRepository;
import com.example.greencommunity.repository.UserRepository;
import com.example.greencommunity.service.EnvironmentalProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@Transactional
public class EnvironmentalProjectServiceImpl implements EnvironmentalProjectService {

    @Autowired
    private EnvironmentalProjectRepository projectRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public EnvironmentalProjectResponse createProject(EnvironmentalProjectRequest request, UUID userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        EnvironmentalProject project = new EnvironmentalProject();
        project.setName(request.getName());
        project.setDescription(request.getDescription());
        project.setLocation(request.getLocation());
        project.setStartDate(request.getStartDate());
        project.setEndDate(request.getEndDate());
        project.setCategory(request.getCategory());
        project.setCreatedBy(user);
        project.setCreatedAt(Instant.now());
        project.setUpdatedAt(Instant.now());

        EnvironmentalProject savedProject = projectRepository.save(project);
        return convertToResponse(savedProject);
    }

    @Override
    public EnvironmentalProjectResponse updateProject(UUID projectId, EnvironmentalProjectRequest request, UUID userId) {
        EnvironmentalProject project = projectRepository.findById(projectId)
                .orElseThrow(() -> new RuntimeException("Project not found"));

        // Only allow update if the current user is the creator
        if (!project.getCreatedBy().getId().equals(userId)) {
            throw new RuntimeException("Unauthorized: You are not the creator of this project");
        }

        project.setName(request.getName());
        project.setDescription(request.getDescription());
        project.setLocation(request.getLocation());
        project.setStartDate(request.getStartDate());
        project.setEndDate(request.getEndDate());
        project.setCategory(request.getCategory());
        project.setUpdatedAt(Instant.now());

        EnvironmentalProject updatedProject = projectRepository.save(project);
        return convertToResponse(updatedProject);
    }

    @Override
    public EnvironmentalProjectResponse getProjectById(UUID projectId) {
        EnvironmentalProject project = projectRepository.findById(projectId)
                .orElseThrow(() -> new RuntimeException("Project not found"));
        return convertToResponse(project);
    }

    @Override
    public List<EnvironmentalProjectResponse> getAllProjects() {
        List<EnvironmentalProject> projects = projectRepository.findAll();
        return projects.stream()
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public void deleteProject(UUID projectId, UUID userId) {
        EnvironmentalProject project = projectRepository.findById(projectId)
                .orElseThrow(() -> new RuntimeException("Project not found"));
        // Only allow deletion if the current user is the creator
        if (!project.getCreatedBy().getId().equals(userId)) {
            throw new RuntimeException("Unauthorized: You are not the creator of this project");
        }
        projectRepository.delete(project);
    }

    private EnvironmentalProjectResponse convertToResponse(EnvironmentalProject project) {
        EnvironmentalProjectResponse response = new EnvironmentalProjectResponse();
        response.setId(project.getId());
        response.setName(project.getName());
        response.setDescription(project.getDescription());
        response.setLocation(project.getLocation());
        response.setStartDate(project.getStartDate());
        response.setEndDate(project.getEndDate());
        response.setCategory(project.getCategory());
        response.setCreatedBy(project.getCreatedBy().getId());
        response.setCreatedAt(project.getCreatedAt());
        response.setUpdatedAt(project.getUpdatedAt());
        return response;
    }
}
