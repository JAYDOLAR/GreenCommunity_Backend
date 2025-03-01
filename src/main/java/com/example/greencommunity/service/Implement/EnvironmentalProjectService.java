package com.example.greencommunity.service.Implement;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

import com.example.greencommunity.Entity.EnvironmentalProject;
import com.example.greencommunity.Exception.ResourceNotFoundException;
import com.example.greencommunity.dto.ProjectDTO;
import com.example.greencommunity.model.User;
import com.example.greencommunity.repository.EnvironmentalProjectRepository;
import com.example.greencommunity.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class EnvironmentalProjectService {
    
    @Autowired
    private EnvironmentalProjectRepository projectRepository;
    
    @Autowired
    private UserRepository userRepository;
    
    @Transactional(readOnly = true)
    public Page<ProjectDTO> getAllProjects(Pageable pageable) {
        return projectRepository.findAll(pageable)
                .map(this::convertToDTO);
    }
    
    @Transactional(readOnly = true)
    public ProjectDTO getProjectById(UUID id) {
        return projectRepository.findById(id)
                .map(this::convertToDTO)
                .orElseThrow(() -> new ResourceNotFoundException("Project not found with id: " + id));
    }
    
    @Transactional
    public ProjectDTO createProject(ProjectDTO projectDTO) {
        User creator = userRepository.findById(projectDTO.getCreatedById())
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + projectDTO.getCreatedById()));
        
        EnvironmentalProject project = EnvironmentalProject.builder()
                .name(projectDTO.getName())
                .description(projectDTO.getDescription())
                .location(projectDTO.getLocation())
                .startDate(projectDTO.getStartDate())
                .endDate(projectDTO.getEndDate())
                .category(projectDTO.getCategory())
                .createdBy(creator)
                .build();
        
        EnvironmentalProject savedProject = projectRepository.save(project);
        return convertToDTO(savedProject);
    }
    
    @Transactional
    public ProjectDTO updateProject(UUID id, ProjectDTO projectDTO) {
        EnvironmentalProject existingProject = projectRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Project not found with id: " + id));
        
        existingProject.setName(projectDTO.getName());
        existingProject.setDescription(projectDTO.getDescription());
        existingProject.setLocation(projectDTO.getLocation());
        existingProject.setStartDate(projectDTO.getStartDate());
        existingProject.setEndDate(projectDTO.getEndDate());
        existingProject.setCategory(projectDTO.getCategory());
        
        EnvironmentalProject updatedProject = projectRepository.save(existingProject);
        return convertToDTO(updatedProject);
    }
    
    @Transactional
    public void deleteProject(UUID id) {
        if (!projectRepository.existsById(id)) {
            throw new ResourceNotFoundException("Project not found with id: " + id);
        }
        projectRepository.deleteById(id);
    }
    
    @Transactional(readOnly = true)
    public Page<ProjectDTO> getProjectsByUser(UUID userId, Pageable pageable) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
        
        return projectRepository.findByCreatedBy(user, pageable)
                .map(this::convertToDTO);
    }
    
    @Transactional(readOnly = true)
    public Page<ProjectDTO> getProjectsByCategory(String category, Pageable pageable) {
        return projectRepository.findByCategory(category, pageable)
                .map(this::convertToDTO);
    }
    
    @Transactional(readOnly = true)
    public Page<ProjectDTO> getProjectsByLocation(String location, Pageable pageable) {
        return projectRepository.findByLocationContainingIgnoreCase(location, pageable)
                .map(this::convertToDTO);
    }
    
    @Transactional(readOnly = true)
    public Page<ProjectDTO> searchProjects(String keyword, Pageable pageable) {
        return projectRepository.searchProjects(keyword, pageable)
                .map(this::convertToDTO);
    }
    
    @Transactional(readOnly = true)
    public List<ProjectDTO> getActiveProjects() {
        LocalDate currentDate = LocalDate.now();
        return projectRepository.findByStartDateBeforeAndEndDateAfter(currentDate, currentDate)
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }
    
    private ProjectDTO convertToDTO(EnvironmentalProject project) {
        return ProjectDTO.builder()
                .id(project.getId())
                .name(project.getName())
                .description(project.getDescription())
                .location(project.getLocation())
                .startDate(project.getStartDate())
                .endDate(project.getEndDate())
                .category(project.getCategory())
                .createdById(Optional.ofNullable(project.getCreatedBy())
                        .map(User::getId)
                        .orElse(null))
                .createdByUsername(Optional.ofNullable(project.getCreatedBy())
                        .map(User::getUsername)
                        .orElse(null))
                .build();
    }
}