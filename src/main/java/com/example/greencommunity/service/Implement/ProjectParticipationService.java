package com.example.greencommunity.service.Implement;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

import com.example.greencommunity.Entity.EnvironmentalProject;
import com.example.greencommunity.Entity.ProjectParticipation;
import com.example.greencommunity.Exception.DuplicateResourceException;
import com.example.greencommunity.Exception.ResourceNotFoundException;
import com.example.greencommunity.dto.ProjectParticipationDTO;
import com.example.greencommunity.model.User;
import com.example.greencommunity.repository.EnvironmentalProjectRepository;
import com.example.greencommunity.repository.ProjectParticipationRepository;
import com.example.greencommunity.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class ProjectParticipationService {
    
    @Autowired
    private ProjectParticipationRepository participationRepository;
    
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private EnvironmentalProjectRepository projectRepository;
    
    @Transactional
    public ProjectParticipationDTO joinProject(ProjectParticipationDTO participationDTO) {
        User user = userRepository.findById(participationDTO.getUserId())
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + participationDTO.getUserId()));
        
        EnvironmentalProject project = projectRepository.findById(participationDTO.getProjectId())
                .orElseThrow(() -> new ResourceNotFoundException("Project not found with id: " + participationDTO.getProjectId()));
        
        if (participationRepository.existsByUserAndProject(user, project)) {
            throw new DuplicateResourceException("User already participating in this project");
        }
        
        ProjectParticipation participation = ProjectParticipation.builder()
                .user(user)
                .project(project)
                .role(participationDTO.getRole() != null ? participationDTO.getRole() : "participant")
                .build();
        
        ProjectParticipation savedParticipation = participationRepository.save(participation);
        return convertToDTO(savedParticipation);
    }
    
    @Transactional
    public ProjectParticipationDTO updateParticipationRole(UUID userId, UUID projectId, String newRole) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
        
        EnvironmentalProject project = projectRepository.findById(projectId)
                .orElseThrow(() -> new ResourceNotFoundException("Project not found with id: " + projectId));
        
        ProjectParticipation participation = participationRepository.findByUserAndProject(user, project)
                .orElseThrow(() -> new ResourceNotFoundException("Participation not found for user and project"));
        
        participation.setRole(newRole);
        
        ProjectParticipation updatedParticipation = participationRepository.save(participation);
        return convertToDTO(updatedParticipation);
    }
    
    @Transactional
    public void leaveProject(UUID userId, UUID projectId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
        
        EnvironmentalProject project = projectRepository.findById(projectId)
                .orElseThrow(() -> new ResourceNotFoundException("Project not found with id: " + projectId));
        
        ProjectParticipation participation = participationRepository.findByUserAndProject(user, project)
                .orElseThrow(() -> new ResourceNotFoundException("Participation not found for user and project"));
        
        participationRepository.delete(participation);
    }
    
    @Transactional(readOnly = true)
    public List<ProjectParticipationDTO> getProjectParticipants(UUID projectId) {
        EnvironmentalProject project = projectRepository.findById(projectId)
                .orElseThrow(() -> new ResourceNotFoundException("Project not found with id: " + projectId));
        
        return participationRepository.findByProject(project)
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }
    
    @Transactional(readOnly = true)
    public List<ProjectParticipationDTO> getUserProjects(UUID userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
        
        return participationRepository.findByUser(user)
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }
    
    @Transactional(readOnly = true)
    public long getProjectParticipantCount(UUID projectId) {
        EnvironmentalProject project = projectRepository.findById(projectId)
                .orElseThrow(() -> new ResourceNotFoundException("Project not found with id: " + projectId));
        
        return participationRepository.countByProject(project);
    }
    
    private ProjectParticipationDTO convertToDTO(ProjectParticipation participation) {
        return ProjectParticipationDTO.builder()
                .id(participation.getId())
                .userId(participation.getUser().getId())
                .username(participation.getUser().getUsername())
                .projectId(participation.getProject().getId())
                .projectName(participation.getProject().getName())
                .role(participation.getRole())
                .joinedAt(participation.getJoinedAt())
                .build();
    }
}
