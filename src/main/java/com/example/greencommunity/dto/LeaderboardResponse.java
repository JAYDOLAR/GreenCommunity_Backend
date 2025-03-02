package com.example.greencommunity.dto;

import lombok.Data;

import java.time.Instant;
import java.util.UUID;

@Data
public class LeaderboardResponse {
    private UUID id;
    private UUID userId;
    private Integer totalPoints;
    private Integer rank;
    private Instant updatedAt;
}
