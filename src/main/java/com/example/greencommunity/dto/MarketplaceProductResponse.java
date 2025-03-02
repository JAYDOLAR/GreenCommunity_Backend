package com.example.greencommunity.dto;

import lombok.Data;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.UUID;

@Data
public class MarketplaceProductResponse {
    private UUID id;
    private String name;
    private String description;
    private BigDecimal price;
    private Integer ecoRating;
    private UUID vendorId;
    private Instant createdAt;
    private Instant updatedAt;
}
