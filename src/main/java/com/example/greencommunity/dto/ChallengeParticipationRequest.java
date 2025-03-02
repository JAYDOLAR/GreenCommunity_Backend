package com.example.greencommunity.dto;

import lombok.Data;

import java.util.UUID;

@Data
public class ChallengeParticipationRequest {
    private UUID challengeId;
}
