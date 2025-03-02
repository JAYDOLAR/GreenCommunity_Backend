package com.example.greencommunity.dto;

import lombok.Data;

import java.time.Instant;
import java.util.UUID;

@Data
public class EducationalResourceResponse {
    private UUID id;
    private String title;
    private String description;
    private String resourceType;
    private String link;
    private String topic;
    private String language;
    private Instant createdAt;
    private Instant updatedAt;
}
