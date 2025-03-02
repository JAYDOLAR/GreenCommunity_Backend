package com.example.greencommunity.controller;

import com.example.greencommunity.dto.UserBadgeRequest;
import com.example.greencommunity.dto.UserBadgeResponse;
import com.example.greencommunity.service.UserBadgeService;

import com.example.greencommunity.service.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/badges")
public class UserBadgeController {

    @Autowired
    private UserBadgeService badgeService;

    @PostMapping
    public ResponseEntity<?> awardBadge(@RequestBody UserBadgeRequest request, Authentication authentication) {
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        UserBadgeResponse response = badgeService.awardBadge(userDetails.getId(), request);
        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity<List<UserBadgeResponse>> getBadges(Authentication authentication) {
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<UserBadgeResponse> responses = badgeService.getBadgesByUser(userDetails.getId());
        return ResponseEntity.ok(responses);
    }
}
