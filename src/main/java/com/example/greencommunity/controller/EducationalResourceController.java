package com.example.greencommunity.controller;

import com.example.greencommunity.dto.EducationalResourceRequest;
import com.example.greencommunity.dto.EducationalResourceResponse;
import com.example.greencommunity.service.EducationalResourceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/resources")
public class EducationalResourceController {

    @Autowired
    private EducationalResourceService resourceService;

    @PostMapping
    public ResponseEntity<?> createResource(@RequestBody EducationalResourceRequest request) {
        EducationalResourceResponse response = resourceService.createResource(request);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getResource(@PathVariable("id") UUID id) {
        EducationalResourceResponse response = resourceService.getResourceById(id);
        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity<List<EducationalResourceResponse>> getAllResources() {
        List<EducationalResourceResponse> responses = resourceService.getAllResources();
        return ResponseEntity.ok(responses);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateResource(@PathVariable("id") UUID id,
                                              @RequestBody EducationalResourceRequest request) {
        EducationalResourceResponse response = resourceService.updateResource(id, request);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteResource(@PathVariable("id") UUID id) {
        resourceService.deleteResource(id);
        return ResponseEntity.ok().build();
    }
}
