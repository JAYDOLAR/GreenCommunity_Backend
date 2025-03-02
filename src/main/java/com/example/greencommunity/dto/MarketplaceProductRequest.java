package com.example.greencommunity.dto;

import lombok.Data;

import java.math.BigDecimal;
import java.util.UUID;

@Data
public class MarketplaceProductRequest {
    private String name;
    private String description;
    private BigDecimal price;
    private Integer ecoRating;
    private UUID vendorId;
}
