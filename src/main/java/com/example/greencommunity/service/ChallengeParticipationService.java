package com.example.greencommunity.service;

import com.example.greencommunity.dto.ChallengeParticipationRequest;
import com.example.greencommunity.dto.ChallengeParticipationResponse;

import java.util.List;
import java.util.UUID;

public interface ChallengeParticipationService {
    ChallengeParticipationResponse participateInChallenge(ChallengeParticipationRequest request, UUID userId);
    List<ChallengeParticipationResponse> getParticipationsByUser(UUID userId);
}
