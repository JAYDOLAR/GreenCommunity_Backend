package com.example.greencommunity.controller;

import com.example.greencommunity.dto.ApiResponse;
import com.example.greencommunity.dto.EnvironmentalProjectRequest;
import com.example.greencommunity.dto.EnvironmentalProjectResponse;
import com.example.greencommunity.service.EnvironmentalProjectService;
import com.example.greencommunity.service.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/projects")
public class EnvironmentalProjectController {

    @Autowired
    private EnvironmentalProjectService projectService;

    @PostMapping
    public ResponseEntity<?> createProject(@RequestBody EnvironmentalProjectRequest request, Authentication authentication) {
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        EnvironmentalProjectResponse response = projectService.createProject(request, userDetails.getId());
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getProject(@PathVariable("id") UUID id) {
        EnvironmentalProjectResponse response = projectService.getProjectById(id);
        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity<List<EnvironmentalProjectResponse>> getAllProjects() {
        List<EnvironmentalProjectResponse> responses = projectService.getAllProjects();
        return ResponseEntity.ok(responses);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateProject(@PathVariable("id") UUID id,
                                           @RequestBody EnvironmentalProjectRequest request,
                                           Authentication authentication) {
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        EnvironmentalProjectResponse response = projectService.updateProject(id, request, userDetails.getId());
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProject(@PathVariable("id") UUID id, Authentication authentication) {
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        projectService.deleteProject(id, userDetails.getId());
        return ResponseEntity.ok(new ApiResponse(true, "Project deleted successfully"));
    }
}
