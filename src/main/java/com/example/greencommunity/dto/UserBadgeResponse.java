package com.example.greencommunity.dto;

import lombok.Data;

import java.time.Instant;
import java.util.UUID;

@Data
public class UserBadgeResponse {
    private UUID id;
    private UUID userId;
    private String badgeName;
    private String badgeDescription;
    private Instant awardedAt;
}
