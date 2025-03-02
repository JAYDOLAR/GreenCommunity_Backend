package com.example.greencommunity.controller;


import com.example.greencommunity.dto.ApiResponse;
import com.example.greencommunity.dto.CarbonFootprintRecordRequest;
import com.example.greencommunity.dto.CarbonFootprintRecordResponse;
import com.example.greencommunity.service.CarbonFootprintRecordService;

import com.example.greencommunity.service.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/carbon-records")
public class CarbonFootprintRecordController {

    @Autowired
    private CarbonFootprintRecordService recordService;

    @PostMapping
    public ResponseEntity<?> createRecord(@RequestBody CarbonFootprintRecordRequest request, Authentication authentication) {
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        CarbonFootprintRecordResponse response = recordService.createRecord(request, userDetails.getId());
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getRecord(@PathVariable("id") UUID id) {
        CarbonFootprintRecordResponse response = recordService.getRecordById(id);
        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity<List<CarbonFootprintRecordResponse>> getRecords(Authentication authentication) {
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<CarbonFootprintRecordResponse> responses = recordService.getRecordsByUser(userDetails.getId());
        return ResponseEntity.ok(responses);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateRecord(@PathVariable("id") UUID id,
                                          @RequestBody CarbonFootprintRecordRequest request,
                                          Authentication authentication) {
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        CarbonFootprintRecordResponse response = recordService.updateRecord(id, request, userDetails.getId());
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteRecord(@PathVariable("id") UUID id, Authentication authentication) {
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        recordService.deleteRecord(id, userDetails.getId());
        return ResponseEntity.ok(new ApiResponse(true, "Carbon footprint record deleted successfully"));
    }
}
