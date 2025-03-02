
package com.example.greencommunity.dto;

import lombok.Data;

import java.time.Instant;
import java.time.LocalDate;
import java.util.UUID;

@Data
public class EnvironmentalProjectResponse {
    private UUID id;
    private String name;
    private String description;
    private String location;
    private LocalDate startDate;
    private LocalDate endDate;
    private String category;
    private UUID createdBy;
    private Instant createdAt;
    private Instant updatedAt;
}
