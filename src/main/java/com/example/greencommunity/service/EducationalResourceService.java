package com.example.greencommunity.service;

import com.example.greencommunity.dto.EducationalResourceRequest;
import com.example.greencommunity.dto.EducationalResourceResponse;

import java.util.List;
import java.util.UUID;

public interface EducationalResourceService {
    EducationalResourceResponse createResource(EducationalResourceRequest request);
    EducationalResourceResponse updateResource(UUID resourceId, EducationalResourceRequest request);
    EducationalResourceResponse getResourceById(UUID resourceId);
    List<EducationalResourceResponse> getAllResources();
    void deleteResource(UUID resourceId);
}
