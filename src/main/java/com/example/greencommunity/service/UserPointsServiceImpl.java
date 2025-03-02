package com.example.greencommunity.service;

import com.example.greencommunity.dto.UserPointsResponse;
import com.example.greencommunity.model.User;
import com.example.greencommunity.model.UserPoints;
import com.example.greencommunity.repository.UserPointsRepository;
import com.example.greencommunity.repository.UserRepository;
import com.example.greencommunity.service.UserPointsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class UserPointsServiceImpl implements UserPointsService {

    @Autowired
    private UserPointsRepository pointsRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserPointsResponse getUserPoints(UUID userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        UserPoints points = pointsRepository.findByUser(user)
                .orElse(new UserPoints(null, user, 0, java.time.Instant.now()));
        UserPointsResponse response = new UserPointsResponse();
        response.setId(points.getId());
        response.setUserId(user.getId());
        response.setPoints(points.getPoints());
        response.setUpdatedAt(points.getUpdatedAt());
        return response;
    }
}
