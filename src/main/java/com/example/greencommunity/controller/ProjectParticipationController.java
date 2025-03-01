package com.example.greencommunity.controller;

import java.util.List;
import java.util.UUID;

import com.example.greencommunity.Response.ApiResponse;
import com.example.greencommunity.dto.ProjectParticipationDTO;
import com.example.greencommunity.service.Implement.ProjectParticipationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/project-participation")
public class ProjectParticipationController {
    
    @Autowired
    private ProjectParticipationService participationService;
    
    @PostMapping("/join")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<ProjectParticipationDTO> joinProject(
            @Valid @RequestBody ProjectParticipationDTO participationDTO) {
        ProjectParticipationDTO joinedProject = participationService.joinProject(participationDTO);
        return new ResponseEntity<>(joinedProject, HttpStatus.CREATED);
    }
    
    @PutMapping("/role")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<ProjectParticipationDTO> updateRole(
            @RequestParam UUID userId,
            @RequestParam UUID projectId,
            @RequestParam String role) {
        ProjectParticipationDTO updatedParticipation = 
                participationService.updateParticipationRole(userId, projectId, role);
        return ResponseEntity.ok(updatedParticipation);
    }
    
    @DeleteMapping("/leave")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<ApiResponse> leaveProject(
            @RequestParam UUID userId,
            @RequestParam UUID projectId) {
        participationService.leaveProject(userId, projectId);
        return ResponseEntity.ok(new ApiResponse(true, "Successfully left the project"));
    }
    
    @GetMapping("/project/{projectId}/participants")
    public ResponseEntity<List<ProjectParticipationDTO>> getProjectParticipants(
            @PathVariable UUID projectId) {
        List<ProjectParticipationDTO> participants = participationService.getProjectParticipants(projectId);
        return ResponseEntity.ok(participants);
    }
    
    @GetMapping("/user/{userId}/projects")
    public ResponseEntity<List<ProjectParticipationDTO>> getUserProjects(
            @PathVariable UUID userId) {
        List<ProjectParticipationDTO> userProjects = participationService.getUserProjects(userId);
        return ResponseEntity.ok(userProjects);
    }
    
    @GetMapping("/project/{projectId}/count")
    public ResponseEntity<Long> getProjectParticipantCount(
            @PathVariable UUID projectId) {
        long count = participationService.getProjectParticipantCount(projectId);
        return ResponseEntity.ok(count);
    }
}