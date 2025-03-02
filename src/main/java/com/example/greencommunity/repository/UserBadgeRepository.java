package com.example.greencommunity.repository;

import com.example.greencommunity.model.UserBadge;
import com.example.greencommunity.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface UserBadgeRepository extends JpaRepository<UserBadge, UUID> {
    List<UserBadge> findByUser(User user);
}
