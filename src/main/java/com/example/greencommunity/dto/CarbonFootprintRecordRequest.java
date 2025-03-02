package com.example.greencommunity.dto;

import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
public class CarbonFootprintRecordRequest {
    private LocalDate recordDate;
    private BigDecimal carbonScore;
    private String details;
}
