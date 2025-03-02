package com.example.greencommunity.service;

import com.example.greencommunity.dto.LeaderboardResponse;

import java.util.List;

public interface LeaderboardService {
    List<LeaderboardResponse> getLeaderboard();
}
