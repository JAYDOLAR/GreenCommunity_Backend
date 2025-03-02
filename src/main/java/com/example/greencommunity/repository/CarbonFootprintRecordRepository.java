package com.example.greencommunity.repository;

import com.example.greencommunity.model.CarbonFootprintRecord;
import com.example.greencommunity.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface CarbonFootprintRecordRepository extends JpaRepository<CarbonFootprintRecord, UUID> {
    List<CarbonFootprintRecord> findByUser(User user);
}
