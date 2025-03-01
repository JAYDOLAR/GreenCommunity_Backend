package com.example.greencommunity.repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.example.greencommunity.Entity.EnvironmentalProject;
import com.example.greencommunity.Entity.ProjectParticipation;
import com.example.greencommunity.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface ProjectParticipationRepository extends JpaRepository<ProjectParticipation, UUID> {
    
    List<ProjectParticipation> findByUser(User user);
    
    List<ProjectParticipation> findByProject(EnvironmentalProject project);
    
    List<ProjectParticipation> findByProjectAndRole(EnvironmentalProject project, String role);
    
    Optional<ProjectParticipation> findByUserAndProject(User user, EnvironmentalProject project);
    
    boolean existsByUserAndProject(User user, EnvironmentalProject project);
    
    long countByProject(EnvironmentalProject project);
}