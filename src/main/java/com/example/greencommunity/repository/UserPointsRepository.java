package com.example.greencommunity.repository;

import com.example.greencommunity.model.UserPoints;
import com.example.greencommunity.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface UserPointsRepository extends JpaRepository<UserPoints, UUID> {
    Optional<UserPoints> findByUser(User user);
}
