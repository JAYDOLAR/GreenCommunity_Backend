package com.example.greencommunity.service;

import com.example.greencommunity.dto.MarketplaceProductRequest;
import com.example.greencommunity.dto.MarketplaceProductResponse;

import java.util.List;
import java.util.UUID;

public interface MarketplaceProductService {
    MarketplaceProductResponse createProduct(MarketplaceProductRequest request);
    MarketplaceProductResponse updateProduct(UUID productId, MarketplaceProductRequest request);
    MarketplaceProductResponse getProductById(UUID productId);
    List<MarketplaceProductResponse> getAllProducts();
    void deleteProduct(UUID productId);
}
