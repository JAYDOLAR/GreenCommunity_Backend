package com.example.greencommunity.controller;

import com.example.greencommunity.dto.UserPointsResponse;
import com.example.greencommunity.service.UserDetailsImpl;
import com.example.greencommunity.service.UserPointsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/points")
public class UserPointsController {

    @Autowired
    private UserPointsService pointsService;

    @GetMapping
    public ResponseEntity<UserPointsResponse> getUserPoints(Authentication authentication) {
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        UserPointsResponse response = pointsService.getUserPoints(userDetails.getId());
        return ResponseEntity.ok(response);
    }
}
