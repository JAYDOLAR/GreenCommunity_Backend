package com.example.greencommunity.service;

import com.example.greencommunity.dto.VendorRequest;
import com.example.greencommunity.dto.VendorResponse;

import java.util.List;
import java.util.UUID;

public interface VendorService {
    VendorResponse createVendor(VendorRequest request);
    VendorResponse updateVendor(UUID vendorId, VendorRequest request);
    VendorResponse getVendorById(UUID vendorId);
    List<VendorResponse> getAllVendors();
    void deleteVendor(UUID vendorId);
}
