package com.example.greencommunity.controller;

import java.util.List;
import java.util.UUID;

import com.example.greencommunity.Response.ApiResponse;
import com.example.greencommunity.dto.ProjectDTO;
import com.example.greencommunity.service.Implement.EnvironmentalProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
@RequestMapping("/api/projects")
public class EnvironmentalProjectController {
    
    @Autowired
    private EnvironmentalProjectService projectService;
    
    @GetMapping
    public ResponseEntity<Page<ProjectDTO>> getAllProjects(Pageable pageable) {
        Page<ProjectDTO> projects = projectService.getAllProjects(pageable);
        return ResponseEntity.ok(projects);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<ProjectDTO> getProjectById(@PathVariable UUID id) {
        ProjectDTO project = projectService.getProjectById(id);
        return ResponseEntity.ok(project);
    }
    
    @PostMapping
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<ProjectDTO> createProject(@Valid @RequestBody ProjectDTO projectDTO) {
        ProjectDTO createdProject = projectService.createProject(projectDTO);
        return new ResponseEntity<>(createdProject, HttpStatus.CREATED);
    }
    
    @PutMapping("/{id}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<ProjectDTO> updateProject(
            @PathVariable UUID id, 
            @Valid @RequestBody ProjectDTO projectDTO) {
        ProjectDTO updatedProject = projectService.updateProject(id, projectDTO);
        return ResponseEntity.ok(updatedProject);
    }
    
    @DeleteMapping("/{id}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<ApiResponse> deleteProject(@PathVariable UUID id) {
        projectService.deleteProject(id);
        return ResponseEntity.ok(new ApiResponse(true, "Project deleted successfully"));
    }
    
    @GetMapping("/user/{userId}")
    public ResponseEntity<Page<ProjectDTO>> getProjectsByUser(
            @PathVariable UUID userId,
            Pageable pageable) {
        Page<ProjectDTO> projects = projectService.getProjectsByUser(userId, pageable);
        return ResponseEntity.ok(projects);
    }
    
    @GetMapping("/category/{category}")
    public ResponseEntity<Page<ProjectDTO>> getProjectsByCategory(
            @PathVariable String category,
            Pageable pageable) {
        Page<ProjectDTO> projects = projectService.getProjectsByCategory(category, pageable);
        return ResponseEntity.ok(projects);
    }
    
    @GetMapping("/location")
    public ResponseEntity<Page<ProjectDTO>> getProjectsByLocation(
            @RequestParam String location,
            Pageable pageable) {
        Page<ProjectDTO> projects = projectService.getProjectsByLocation(location, pageable);
        return ResponseEntity.ok(projects);
    }
    
    @GetMapping("/search")
    public ResponseEntity<Page<ProjectDTO>> searchProjects(
            @RequestParam String keyword,
            Pageable pageable) {
        Page<ProjectDTO> projects = projectService.searchProjects(keyword, pageable);
        return ResponseEntity.ok(projects);
    }
    
    @GetMapping("/active")
    public ResponseEntity<List<ProjectDTO>> getActiveProjects() {
        List<ProjectDTO> activeProjects = projectService.getActiveProjects();
        return ResponseEntity.ok(activeProjects);
    }
}
