package com.example.greencommunity.service;

import com.example.greencommunity.dto.UserPointsResponse;

import java.util.UUID;

public interface UserPointsService {
    UserPointsResponse getUserPoints(UUID userId);
}
