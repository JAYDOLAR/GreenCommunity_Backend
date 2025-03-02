package com.example.greencommunity.service;

import com.example.greencommunity.dto.MarketplaceProductRequest;
import com.example.greencommunity.dto.MarketplaceProductResponse;
import com.example.greencommunity.model.MarketplaceProduct;
import com.example.greencommunity.model.Vendor;
import com.example.greencommunity.repository.MarketplaceProductRepository;
import com.example.greencommunity.repository.VendorRepository;
import com.example.greencommunity.service.MarketplaceProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@Transactional
public class MarketplaceProductServiceImpl implements MarketplaceProductService {

    @Autowired
    private MarketplaceProductRepository productRepository;

    @Autowired
    private VendorRepository vendorRepository;

    @Override
    public MarketplaceProductResponse createProduct(MarketplaceProductRequest request) {
        Vendor vendor = vendorRepository.findById(request.getVendorId())
                .orElseThrow(() -> new RuntimeException("Vendor not found"));

        MarketplaceProduct product = new MarketplaceProduct();
        product.setName(request.getName());
        product.setDescription(request.getDescription());
        product.setPrice(request.getPrice());
        product.setEcoRating(request.getEcoRating());
        product.setVendor(vendor);
        product.setCreatedAt(Instant.now());
        product.setUpdatedAt(Instant.now());

        MarketplaceProduct saved = productRepository.save(product);
        return convertToResponse(saved);
    }

    @Override
    public MarketplaceProductResponse updateProduct(UUID productId, MarketplaceProductRequest request) {
        MarketplaceProduct product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        // Optionally, verify vendor existence if vendorId is changed
        if (request.getVendorId() != null && !request.getVendorId().equals(product.getVendor().getId())) {
            Vendor vendor = vendorRepository.findById(request.getVendorId())
                    .orElseThrow(() -> new RuntimeException("Vendor not found"));
            product.setVendor(vendor);
        }
        product.setName(request.getName());
        product.setDescription(request.getDescription());
        product.setPrice(request.getPrice());
        product.setEcoRating(request.getEcoRating());
        product.setUpdatedAt(Instant.now());

        MarketplaceProduct updated = productRepository.save(product);
        return convertToResponse(updated);
    }

    @Override
    public MarketplaceProductResponse getProductById(UUID productId) {
        MarketplaceProduct product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));
        return convertToResponse(product);
    }

    @Override
    public List<MarketplaceProductResponse> getAllProducts() {
        return productRepository.findAll().stream()
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public void deleteProduct(UUID productId) {
        MarketplaceProduct product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));
        productRepository.delete(product);
    }

    private MarketplaceProductResponse convertToResponse(MarketplaceProduct product) {
        MarketplaceProductResponse response = new MarketplaceProductResponse();
        response.setId(product.getId());
        response.setName(product.getName());
        response.setDescription(product.getDescription());
        response.setPrice(product.getPrice());
        response.setEcoRating(product.getEcoRating());
        response.setVendorId(product.getVendor() != null ? product.getVendor().getId() : null);
        response.setCreatedAt(product.getCreatedAt());
        response.setUpdatedAt(product.getUpdatedAt());
        return response;
    }
}
