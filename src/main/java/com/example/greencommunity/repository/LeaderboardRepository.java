package com.example.greencommunity.repository;

import com.example.greencommunity.model.Leaderboard;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface LeaderboardRepository extends JpaRepository<Leaderboard, UUID> {
    List<Leaderboard> findAllByOrderByTotalPointsDesc();
}
