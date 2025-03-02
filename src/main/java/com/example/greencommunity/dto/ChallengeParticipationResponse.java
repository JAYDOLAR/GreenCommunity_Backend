package com.example.greencommunity.dto;

import lombok.Data;

import java.time.Instant;
import java.util.UUID;

@Data
public class ChallengeParticipationResponse {
    private UUID id;
    private UUID userId;
    private UUID challengeId;
    private Integer pointsEarned;
    private Instant completedAt;
}
