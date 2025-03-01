package com.example.greencommunity.dto;

import java.time.ZonedDateTime;
import java.util.UUID;

import jakarta.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProjectParticipationDTO {
    
    private UUID id;
    
    @NotNull(message = "User ID is required")
    private UUID userId;
    
    private String username;
    
    @NotNull(message = "Project ID is required")
    private UUID projectId;
    
    private String projectName;
    
    private String role;
    
    private ZonedDateTime joinedAt;
}
