package com.example.greencommunity.repository;

import com.example.greencommunity.model.EnvironmentalProject;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface EnvironmentalProjectRepository extends JpaRepository<EnvironmentalProject, UUID> {
}
