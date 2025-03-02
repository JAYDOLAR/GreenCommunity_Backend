package com.example.greencommunity.service;

import com.example.greencommunity.dto.EnvironmentalProjectRequest;
import com.example.greencommunity.dto.EnvironmentalProjectResponse;

import java.util.List;
import java.util.UUID;

public interface EnvironmentalProjectService {
    EnvironmentalProjectResponse createProject(EnvironmentalProjectRequest request, UUID userId);
    EnvironmentalProjectResponse updateProject(UUID projectId, EnvironmentalProjectRequest request, UUID userId);
    EnvironmentalProjectResponse getProjectById(UUID projectId);
    List<EnvironmentalProjectResponse> getAllProjects();
    void deleteProject(UUID projectId, UUID userId);
}
