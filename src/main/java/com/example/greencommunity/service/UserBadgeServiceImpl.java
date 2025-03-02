package com.example.greencommunity.service;

import com.example.greencommunity.dto.UserBadgeRequest;
import com.example.greencommunity.dto.UserBadgeResponse;
import com.example.greencommunity.model.UserBadge;
import com.example.greencommunity.model.User;
import com.example.greencommunity.repository.UserBadgeRepository;
import com.example.greencommunity.repository.UserRepository;
import com.example.greencommunity.service.UserBadgeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@Transactional
public class UserBadgeServiceImpl implements UserBadgeService {

    @Autowired
    private UserBadgeRepository badgeRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserBadgeResponse awardBadge(UUID userId, UserBadgeRequest request) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        UserBadge badge = new UserBadge();
        badge.setUser(user);
        badge.setBadgeName(request.getBadgeName());
        badge.setBadgeDescription(request.getBadgeDescription());

        UserBadge saved = badgeRepository.save(badge);
        return convertToResponse(saved);
    }

    @Override
    public List<UserBadgeResponse> getBadgesByUser(UUID userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return badgeRepository.findByUser(user)
                .stream()
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }

    private UserBadgeResponse convertToResponse(UserBadge badge) {
        UserBadgeResponse response = new UserBadgeResponse();
        response.setId(badge.getId());
        response.setUserId(badge.getUser().getId());
        response.setBadgeName(badge.getBadgeName());
        response.setBadgeDescription(badge.getBadgeDescription());
        response.setAwardedAt(badge.getAwardedAt());
        return response;
    }
}
