package com.example.greencommunity.repository;

import com.example.greencommunity.model.Challenge;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ChallengeRepository extends JpaRepository<Challenge, UUID> {
}
