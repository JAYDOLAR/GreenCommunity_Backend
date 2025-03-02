package com.example.greencommunity.service;

import com.example.greencommunity.dto.EducationalResourceRequest;
import com.example.greencommunity.dto.EducationalResourceResponse;
import com.example.greencommunity.model.EducationalResource;
import com.example.greencommunity.repository.EducationalResourceRepository;
import com.example.greencommunity.service.EducationalResourceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@Transactional
public class EducationalResourceServiceImpl implements EducationalResourceService {

    @Autowired
    private EducationalResourceRepository resourceRepository;

    @Override
    public EducationalResourceResponse createResource(EducationalResourceRequest request) {
        EducationalResource resource = new EducationalResource();
        resource.setTitle(request.getTitle());
        resource.setDescription(request.getDescription());
        resource.setResourceType(request.getResourceType());
        resource.setLink(request.getLink());
        resource.setTopic(request.getTopic());
        resource.setLanguage(request.getLanguage() != null ? request.getLanguage() : "en");
        resource.setCreatedAt(Instant.now());
        resource.setUpdatedAt(Instant.now());

        EducationalResource saved = resourceRepository.save(resource);
        return convertToResponse(saved);
    }

    @Override
    public EducationalResourceResponse updateResource(UUID resourceId, EducationalResourceRequest request) {
        EducationalResource resource = resourceRepository.findById(resourceId)
                .orElseThrow(() -> new RuntimeException("Resource not found"));
        resource.setTitle(request.getTitle());
        resource.setDescription(request.getDescription());
        resource.setResourceType(request.getResourceType());
        resource.setLink(request.getLink());
        resource.setTopic(request.getTopic());
        resource.setLanguage(request.getLanguage() != null ? request.getLanguage() : "en");
        resource.setUpdatedAt(Instant.now());

        EducationalResource updated = resourceRepository.save(resource);
        return convertToResponse(updated);
    }

    @Override
    public EducationalResourceResponse getResourceById(UUID resourceId) {
        EducationalResource resource = resourceRepository.findById(resourceId)
                .orElseThrow(() -> new RuntimeException("Resource not found"));
        return convertToResponse(resource);
    }

    @Override
    public List<EducationalResourceResponse> getAllResources() {
        return resourceRepository.findAll().stream()
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public void deleteResource(UUID resourceId) {
        EducationalResource resource = resourceRepository.findById(resourceId)
                .orElseThrow(() -> new RuntimeException("Resource not found"));
        resourceRepository.delete(resource);
    }

    private EducationalResourceResponse convertToResponse(EducationalResource resource) {
        EducationalResourceResponse response = new EducationalResourceResponse();
        response.setId(resource.getId());
        response.setTitle(resource.getTitle());
        response.setDescription(resource.getDescription());
        response.setResourceType(resource.getResourceType());
        response.setLink(resource.getLink());
        response.setTopic(resource.getTopic());
        response.setLanguage(resource.getLanguage());
        response.setCreatedAt(resource.getCreatedAt());
        response.setUpdatedAt(resource.getUpdatedAt());
        return response;
    }
}
