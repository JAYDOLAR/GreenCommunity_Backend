package com.example.greencommunity.repository;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

import com.example.greencommunity.Entity.EnvironmentalProject;
import com.example.greencommunity.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface EnvironmentalProjectRepository extends JpaRepository<EnvironmentalProject, UUID> {

    Page<EnvironmentalProject> findByCreatedBy(User createdBy, Pageable pageable);

    Page<EnvironmentalProject> findByCategory(String category, Pageable pageable);

    Page<EnvironmentalProject> findByLocationContainingIgnoreCase(String location, Pageable pageable);

    @Query("SELECT p FROM EnvironmentalProject p WHERE " +
            "p.startDate >= :startDate AND " +
            "(p.endDate IS NULL OR p.endDate <= :endDate)")
    Page<EnvironmentalProject> findProjectsByDateRange(
            LocalDate startDate,
            LocalDate endDate,
            Pageable pageable);

    @Query("SELECT p FROM EnvironmentalProject p " +
            "WHERE LOWER(p.name) LIKE LOWER(CONCAT('%', :keyword, '%')) " +
            "OR LOWER(p.description) LIKE LOWER(CONCAT('%', :keyword, '%')) " +
            "OR LOWER(p.location) LIKE LOWER(CONCAT('%', :keyword, '%')) " +
            "OR LOWER(p.category) LIKE LOWER(CONCAT('%', :keyword, '%'))")
    Page<EnvironmentalProject> searchProjects(String keyword, Pageable pageable);

    List<EnvironmentalProject> findByStartDateBeforeAndEndDateAfter(
            LocalDate currentDate,
            LocalDate currentDate2);
}
