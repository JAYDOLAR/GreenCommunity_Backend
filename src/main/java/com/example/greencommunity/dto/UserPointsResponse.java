package com.example.greencommunity.dto;

import lombok.Data;

import java.time.Instant;
import java.util.UUID;

@Data
public class UserPointsResponse {
    private UUID id;
    private UUID userId;
    private Integer points;
    private Instant updatedAt;
}
