package com.example.greencommunity.service;

import com.example.greencommunity.dto.VendorRequest;
import com.example.greencommunity.dto.VendorResponse;
import com.example.greencommunity.model.Vendor;
import com.example.greencommunity.repository.VendorRepository;
import com.example.greencommunity.service.VendorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@Transactional
public class VendorServiceImpl implements VendorService {

    @Autowired
    private VendorRepository vendorRepository;

    @Override
    public VendorResponse createVendor(VendorRequest request) {
        Vendor vendor = new Vendor();
        vendor.setName(request.getName());
        vendor.setContactInfo(request.getContactInfo());
        vendor.setLocation(request.getLocation());
        vendor.setCreatedAt(Instant.now());

        Vendor saved = vendorRepository.save(vendor);
        return convertToResponse(saved);
    }

    @Override
    public VendorResponse updateVendor(UUID vendorId, VendorRequest request) {
        Vendor vendor = vendorRepository.findById(vendorId)
                .orElseThrow(() -> new RuntimeException("Vendor not found"));
        vendor.setName(request.getName());
        vendor.setContactInfo(request.getContactInfo());
        vendor.setLocation(request.getLocation());

        Vendor updated = vendorRepository.save(vendor);
        return convertToResponse(updated);
    }

    @Override
    public VendorResponse getVendorById(UUID vendorId) {
        Vendor vendor = vendorRepository.findById(vendorId)
                .orElseThrow(() -> new RuntimeException("Vendor not found"));
        return convertToResponse(vendor);
    }

    @Override
    public List<VendorResponse> getAllVendors() {
        return vendorRepository.findAll().stream()
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public void deleteVendor(UUID vendorId) {
        Vendor vendor = vendorRepository.findById(vendorId)
                .orElseThrow(() -> new RuntimeException("Vendor not found"));
        vendorRepository.delete(vendor);
    }

    private VendorResponse convertToResponse(Vendor vendor) {
        VendorResponse response = new VendorResponse();
        response.setId(vendor.getId());
        response.setName(vendor.getName());
        response.setContactInfo(vendor.getContactInfo());
        response.setLocation(vendor.getLocation());
        response.setCreatedAt(vendor.getCreatedAt());
        return response;
    }
}
