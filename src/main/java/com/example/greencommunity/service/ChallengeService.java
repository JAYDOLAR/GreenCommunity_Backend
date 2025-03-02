package com.example.greencommunity.service;

import com.example.greencommunity.dto.ChallengeRequest;
import com.example.greencommunity.dto.ChallengeResponse;

import java.util.List;
import java.util.UUID;

public interface ChallengeService {
    ChallengeResponse createChallenge(ChallengeRequest request);
    ChallengeResponse updateChallenge(UUID challengeId, ChallengeRequest request);
    ChallengeResponse getChallengeById(UUID challengeId);
    List<ChallengeResponse> getAllChallenges();
    void deleteChallenge(UUID challengeId);
}
