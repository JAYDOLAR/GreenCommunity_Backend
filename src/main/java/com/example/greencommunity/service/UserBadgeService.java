package com.example.greencommunity.service;

import com.example.greencommunity.dto.UserBadgeRequest;
import com.example.greencommunity.dto.UserBadgeResponse;

import java.util.List;
import java.util.UUID;

public interface UserBadgeService {
    UserBadgeResponse awardBadge(UUID userId, UserBadgeRequest request);
    List<UserBadgeResponse> getBadgesByUser(UUID userId);
}
