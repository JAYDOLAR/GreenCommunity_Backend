package com.example.greencommunity.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class ChallengeRequest {
    private String title;
    private String description;
    private LocalDate startDate;
    private LocalDate endDate;
    private Integer pointsReward;
}
