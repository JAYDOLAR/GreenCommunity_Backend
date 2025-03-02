package com.example.greencommunity.dto;

import lombok.Data;

import java.time.Instant;
import java.time.LocalDate;
import java.util.UUID;

@Data
public class ChallengeResponse {
    private UUID id;
    private String title;
    private String description;
    private LocalDate startDate;
    private LocalDate endDate;
    private Integer pointsReward;
    private Instant createdAt;
    private Instant updatedAt;
}
