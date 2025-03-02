package com.example.greencommunity.controller;

import com.example.greencommunity.dto.LeaderboardResponse;
import com.example.greencommunity.service.LeaderboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/leaderboard")
public class LeaderboardController {

    @Autowired
    private LeaderboardService leaderboardService;

    @GetMapping
    public ResponseEntity<List<LeaderboardResponse>> getLeaderboard() {
        List<LeaderboardResponse> responses = leaderboardService.getLeaderboard();
        return ResponseEntity.ok(responses);
    }
}
