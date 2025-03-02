package com.example.greencommunity.controller;

import com.example.greencommunity.dto.VendorRequest;
import com.example.greencommunity.dto.VendorResponse;
import com.example.greencommunity.service.VendorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/vendors")
public class VendorController {

    @Autowired
    private VendorService vendorService;

    @PostMapping
    public ResponseEntity<?> createVendor(@RequestBody VendorRequest request) {
        VendorResponse response = vendorService.createVendor(request);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getVendor(@PathVariable("id") UUID id) {
        VendorResponse response = vendorService.getVendorById(id);
        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity<List<VendorResponse>> getAllVendors() {
        List<VendorResponse> responses = vendorService.getAllVendors();
        return ResponseEntity.ok(responses);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateVendor(@PathVariable("id") UUID id,
                                          @RequestBody VendorRequest request) {
        VendorResponse response = vendorService.updateVendor(id, request);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteVendor(@PathVariable("id") UUID id) {
        vendorService.deleteVendor(id);
        return ResponseEntity.ok().build();
    }
}
