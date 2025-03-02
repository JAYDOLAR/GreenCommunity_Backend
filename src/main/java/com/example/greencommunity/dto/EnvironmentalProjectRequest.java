package com.example.greencommunity.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class EnvironmentalProjectRequest {
    private String name;
    private String description;
    private String location;
    private LocalDate startDate;
    private LocalDate endDate;
    private String category;
}
