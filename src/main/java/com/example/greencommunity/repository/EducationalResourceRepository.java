package com.example.greencommunity.repository;

import com.example.greencommunity.model.EducationalResource;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface EducationalResourceRepository extends JpaRepository<EducationalResource, UUID> {
}
