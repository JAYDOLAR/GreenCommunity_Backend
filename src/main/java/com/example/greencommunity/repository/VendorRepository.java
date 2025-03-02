package com.example.greencommunity.repository;

import com.example.greencommunity.model.Vendor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface VendorRepository extends JpaRepository<Vendor, UUID> {
}
