package com.example.greencommunity.dto;

import lombok.Data;

import java.math.BigDecimal;
import java.time.Instant;
import java.time.LocalDate;
import java.util.UUID;

@Data
public class CarbonFootprintRecordResponse {
    private UUID id;
    private UUID userId;
    private LocalDate recordDate;
    private BigDecimal carbonScore;
    private String details;
    private Instant createdAt;
}
