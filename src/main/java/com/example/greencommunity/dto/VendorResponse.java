package com.example.greencommunity.dto;

import lombok.Data;

import java.time.Instant;
import java.util.UUID;

@Data
public class VendorResponse {
    private UUID id;
    private String name;
    private String contactInfo;
    private String location;
    private Instant createdAt;
}
