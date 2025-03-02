package com.example.greencommunity.controller;

import com.example.greencommunity.dto.MarketplaceProductRequest;
import com.example.greencommunity.dto.MarketplaceProductResponse;
import com.example.greencommunity.service.MarketplaceProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/products")
public class MarketplaceProductController {

    @Autowired
    private MarketplaceProductService productService;

    @PostMapping
    public ResponseEntity<?> createProduct(@RequestBody MarketplaceProductRequest request) {
        MarketplaceProductResponse response = productService.createProduct(request);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getProduct(@PathVariable("id") UUID id) {
        MarketplaceProductResponse response = productService.getProductById(id);
        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity<List<MarketplaceProductResponse>> getAllProducts() {
        List<MarketplaceProductResponse> responses = productService.getAllProducts();
        return ResponseEntity.ok(responses);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateProduct(@PathVariable("id") UUID id,
                                             @RequestBody MarketplaceProductRequest request) {
        MarketplaceProductResponse response = productService.updateProduct(id, request);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable("id") UUID id) {
        productService.deleteProduct(id);
        return ResponseEntity.ok().build();
    }
}
