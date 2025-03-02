package com.example.greencommunity.repository;

import com.example.greencommunity.model.ChallengeParticipation;
import com.example.greencommunity.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface ChallengeParticipationRepository extends JpaRepository<ChallengeParticipation, UUID> {
    List<ChallengeParticipation> findByUser(User user);
}
