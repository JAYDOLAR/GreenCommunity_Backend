package com.example.greencommunity.repository;

import com.example.greencommunity.Entity.EnvironmentalProject;
import com.example.greencommunity.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface ProjectRepository extends JpaRepository<EnvironmentalProject, UUID> {
    List<EnvironmentalProject> findByCreatedBy(User userId);
    List<EnvironmentalProject> findByCategory(String category);
}