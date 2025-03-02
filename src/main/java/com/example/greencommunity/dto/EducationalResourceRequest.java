package com.example.greencommunity.dto;

import lombok.Data;

@Data
public class EducationalResourceRequest {
    private String title;
    private String description;
    private String resourceType;
    private String link;
    private String topic;
    private String language; // optional; default can be "en"
}
