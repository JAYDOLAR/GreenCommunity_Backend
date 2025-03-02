package com.example.greencommunity.service;

import com.example.greencommunity.dto.CarbonFootprintRecordRequest;
import com.example.greencommunity.dto.CarbonFootprintRecordResponse;

import java.util.List;
import java.util.UUID;

public interface CarbonFootprintRecordService {
    CarbonFootprintRecordResponse createRecord(CarbonFootprintRecordRequest request, UUID userId);
    CarbonFootprintRecordResponse updateRecord(UUID recordId, CarbonFootprintRecordRequest request, UUID userId);
    CarbonFootprintRecordResponse getRecordById(UUID recordId);
    List<CarbonFootprintRecordResponse> getRecordsByUser(UUID userId);
    void deleteRecord(UUID recordId, UUID userId);
}
