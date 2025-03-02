package com.example.greencommunity.service;

import com.example.greencommunity.dto.CarbonFootprintRecordRequest;
import com.example.greencommunity.dto.CarbonFootprintRecordResponse;
import com.example.greencommunity.model.CarbonFootprintRecord;
import com.example.greencommunity.model.User;
import com.example.greencommunity.repository.CarbonFootprintRecordRepository;
import com.example.greencommunity.repository.UserRepository;
import com.example.greencommunity.service.CarbonFootprintRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@Transactional
public class CarbonFootprintRecordServiceImpl implements CarbonFootprintRecordService {

    @Autowired
    private CarbonFootprintRecordRepository recordRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public CarbonFootprintRecordResponse createRecord(CarbonFootprintRecordRequest request, UUID userId) {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new RuntimeException("User not found"));

        CarbonFootprintRecord record = new CarbonFootprintRecord();
        record.setUser(user);
        record.setRecordDate(request.getRecordDate());
        record.setCarbonScore(request.getCarbonScore());
        record.setDetails(request.getDetails());
        record.setCreatedAt(Instant.now());

        CarbonFootprintRecord savedRecord = recordRepository.save(record);
        return convertToResponse(savedRecord);
    }

    @Override
    public CarbonFootprintRecordResponse updateRecord(UUID recordId, CarbonFootprintRecordRequest request, UUID userId) {
        CarbonFootprintRecord record = recordRepository.findById(recordId)
            .orElseThrow(() -> new RuntimeException("Record not found"));

        if (!record.getUser().getId().equals(userId)) {
            throw new RuntimeException("Unauthorized: You do not own this record");
        }

        record.setRecordDate(request.getRecordDate());
        record.setCarbonScore(request.getCarbonScore());
        record.setDetails(request.getDetails());

        CarbonFootprintRecord updatedRecord = recordRepository.save(record);
        return convertToResponse(updatedRecord);
    }

    @Override
    public CarbonFootprintRecordResponse getRecordById(UUID recordId) {
        CarbonFootprintRecord record = recordRepository.findById(recordId)
            .orElseThrow(() -> new RuntimeException("Record not found"));
        return convertToResponse(record);
    }

    @Override
    public List<CarbonFootprintRecordResponse> getRecordsByUser(UUID userId) {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new RuntimeException("User not found"));
        List<CarbonFootprintRecord> records = recordRepository.findByUser(user);
        return records.stream()
            .map(this::convertToResponse)
            .collect(Collectors.toList());
    }

    @Override
    public void deleteRecord(UUID recordId, UUID userId) {
        CarbonFootprintRecord record = recordRepository.findById(recordId)
            .orElseThrow(() -> new RuntimeException("Record not found"));
        if (!record.getUser().getId().equals(userId)) {
            throw new RuntimeException("Unauthorized: You do not own this record");
        }
        recordRepository.delete(record);
    }

    private CarbonFootprintRecordResponse convertToResponse(CarbonFootprintRecord record) {
        CarbonFootprintRecordResponse response = new CarbonFootprintRecordResponse();
        response.setId(record.getId());
        response.setUserId(record.getUser().getId());
        response.setRecordDate(record.getRecordDate());
        response.setCarbonScore(record.getCarbonScore());
        response.setDetails(record.getDetails());
        response.setCreatedAt(record.getCreatedAt());
        return response;
    }
}
