package com.example.greencommunity.service;

import com.example.greencommunity.dto.LeaderboardResponse;
import com.example.greencommunity.model.Leaderboard;
import com.example.greencommunity.repository.LeaderboardRepository;
import com.example.greencommunity.service.LeaderboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;

@Service
public class LeaderboardServiceImpl implements LeaderboardService {

    @Autowired
    private LeaderboardRepository leaderboardRepository;

    @Override
    public List<LeaderboardResponse> getLeaderboard() {
        List<Leaderboard> leaderboardList = leaderboardRepository.findAllByOrderByTotalPointsDesc();
        // Assign rank sequentially based on sorted order
        AtomicInteger rankCounter = new AtomicInteger(1);
        return leaderboardList.stream().map(lb -> {
            LeaderboardResponse response = new LeaderboardResponse();
            response.setId(lb.getId());
            response.setUserId(lb.getUser().getId());
            response.setTotalPoints(lb.getTotalPoints());
            response.setRank(rankCounter.getAndIncrement());
            response.setUpdatedAt(lb.getUpdatedAt());
            return response;
        }).collect(Collectors.toList());
    }
}
