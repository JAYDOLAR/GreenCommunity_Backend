package com.example.greencommunity.controller;

import com.example.greencommunity.dto.ChallengeParticipationRequest;
import com.example.greencommunity.dto.ChallengeParticipationResponse;
import com.example.greencommunity.service.ChallengeParticipationService;

import com.example.greencommunity.service.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/challenge-participation")
public class ChallengeParticipationController {

    @Autowired
    private ChallengeParticipationService participationService;

    @PostMapping
    public ResponseEntity<?> participate(@RequestBody ChallengeParticipationRequest request, Authentication authentication) {
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        ChallengeParticipationResponse response = participationService.participateInChallenge(request, userDetails.getId());
        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity<List<ChallengeParticipationResponse>> getParticipations(Authentication authentication) {
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<ChallengeParticipationResponse> responses = participationService.getParticipationsByUser(userDetails.getId());
        return ResponseEntity.ok(responses);
    }
}
