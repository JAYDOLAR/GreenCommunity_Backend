package com.example.greencommunity.controller;

import com.example.greencommunity.dto.ChallengeRequest;
import com.example.greencommunity.dto.ChallengeResponse;
import com.example.greencommunity.service.ChallengeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/challenges")
public class ChallengeController {

    @Autowired
    private ChallengeService challengeService;

    @PostMapping
    public ResponseEntity<?> createChallenge(@RequestBody ChallengeRequest request) {
        ChallengeResponse response = challengeService.createChallenge(request);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getChallenge(@PathVariable("id") UUID id) {
        ChallengeResponse response = challengeService.getChallengeById(id);
        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity<List<ChallengeResponse>> getAllChallenges() {
        List<ChallengeResponse> responses = challengeService.getAllChallenges();
        return ResponseEntity.ok(responses);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateChallenge(@PathVariable("id") UUID id,
                                               @RequestBody ChallengeRequest request) {
        ChallengeResponse response = challengeService.updateChallenge(id, request);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteChallenge(@PathVariable("id") UUID id) {
        challengeService.deleteChallenge(id);
        return ResponseEntity.ok().build();
    }
}
