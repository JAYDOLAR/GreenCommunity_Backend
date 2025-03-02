package com.example.greencommunity.service;

import com.example.greencommunity.dto.ChallengeRequest;
import com.example.greencommunity.dto.ChallengeResponse;
import com.example.greencommunity.model.Challenge;
import com.example.greencommunity.repository.ChallengeRepository;
import com.example.greencommunity.service.ChallengeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@Transactional
public class ChallengeServiceImpl implements ChallengeService {

    @Autowired
    private ChallengeRepository challengeRepository;

    @Override
    public ChallengeResponse createChallenge(ChallengeRequest request) {
        Challenge challenge = new Challenge();
        challenge.setTitle(request.getTitle());
        challenge.setDescription(request.getDescription());
        challenge.setStartDate(request.getStartDate());
        challenge.setEndDate(request.getEndDate());
        challenge.setPointsReward(request.getPointsReward());
        challenge.setCreatedAt(Instant.now());
        challenge.setUpdatedAt(Instant.now());

        Challenge saved = challengeRepository.save(challenge);
        return convertToResponse(saved);
    }

    @Override
    public ChallengeResponse updateChallenge(UUID challengeId, ChallengeRequest request) {
        Challenge challenge = challengeRepository.findById(challengeId)
                .orElseThrow(() -> new RuntimeException("Challenge not found"));
        challenge.setTitle(request.getTitle());
        challenge.setDescription(request.getDescription());
        challenge.setStartDate(request.getStartDate());
        challenge.setEndDate(request.getEndDate());
        challenge.setPointsReward(request.getPointsReward());
        challenge.setUpdatedAt(Instant.now());

        Challenge updated = challengeRepository.save(challenge);
        return convertToResponse(updated);
    }

    @Override
    public ChallengeResponse getChallengeById(UUID challengeId) {
        Challenge challenge = challengeRepository.findById(challengeId)
                .orElseThrow(() -> new RuntimeException("Challenge not found"));
        return convertToResponse(challenge);
    }

    @Override
    public List<ChallengeResponse> getAllChallenges() {
        return challengeRepository.findAll().stream()
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public void deleteChallenge(UUID challengeId) {
        Challenge challenge = challengeRepository.findById(challengeId)
                .orElseThrow(() -> new RuntimeException("Challenge not found"));
        challengeRepository.delete(challenge);
    }

    private ChallengeResponse convertToResponse(Challenge challenge) {
        ChallengeResponse response = new ChallengeResponse();
        response.setId(challenge.getId());
        response.setTitle(challenge.getTitle());
        response.setDescription(challenge.getDescription());
        response.setStartDate(challenge.getStartDate());
        response.setEndDate(challenge.getEndDate());
        response.setPointsReward(challenge.getPointsReward());
        response.setCreatedAt(challenge.getCreatedAt());
        response.setUpdatedAt(challenge.getUpdatedAt());
        return response;
    }
}
