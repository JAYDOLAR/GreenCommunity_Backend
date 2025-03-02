package com.example.greencommunity.service;

import com.example.greencommunity.dto.ChallengeParticipationRequest;
import com.example.greencommunity.dto.ChallengeParticipationResponse;
import com.example.greencommunity.model.Challenge;
import com.example.greencommunity.model.ChallengeParticipation;
import com.example.greencommunity.model.User;
import com.example.greencommunity.repository.ChallengeParticipationRepository;
import com.example.greencommunity.repository.ChallengeRepository;
import com.example.greencommunity.repository.UserRepository;
import com.example.greencommunity.service.ChallengeParticipationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@Transactional
public class ChallengeParticipationServiceImpl implements ChallengeParticipationService {

    @Autowired
    private ChallengeParticipationRepository participationRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ChallengeRepository challengeRepository;

    @Override
    public ChallengeParticipationResponse participateInChallenge(ChallengeParticipationRequest request, UUID userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        Challenge challenge = challengeRepository.findById(request.getChallengeId())
                .orElseThrow(() -> new RuntimeException("Challenge not found"));

        ChallengeParticipation participation = new ChallengeParticipation();
        participation.setUser(user);
        participation.setChallenge(challenge);
        participation.setPointsEarned(challenge.getPointsReward());
        participation.setCompletedAt(Instant.now());

        ChallengeParticipation saved = participationRepository.save(participation);
        return convertToResponse(saved);
    }

    @Override
    public List<ChallengeParticipationResponse> getParticipationsByUser(UUID userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return participationRepository.findByUser(user)
                .stream()
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }

    private ChallengeParticipationResponse convertToResponse(ChallengeParticipation participation) {
        ChallengeParticipationResponse response = new ChallengeParticipationResponse();
        response.setId(participation.getId());
        response.setUserId(participation.getUser().getId());
        response.setChallengeId(participation.getChallenge().getId());
        response.setPointsEarned(participation.getPointsEarned());
        response.setCompletedAt(participation.getCompletedAt());
        return response;
    }
}
