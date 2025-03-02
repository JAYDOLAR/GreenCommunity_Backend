package com.example.greencommunity.repository;

import com.example.greencommunity.model.MarketplaceProduct;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface MarketplaceProductRepository extends JpaRepository<MarketplaceProduct, UUID> {
}
