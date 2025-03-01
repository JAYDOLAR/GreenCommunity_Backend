package com.example.greencommunity.Entity;

import java.time.ZonedDateTime;
import java.util.UUID;

import com.example.greencommunity.model.User;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(
    name = "project_participation",
    uniqueConstraints = {
        @UniqueConstraint(columnNames = {"user_id", "project_id"})
    }
)
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProjectParticipation {
    
    @Id
    @Column(name = "id")
    private UUID id;
    
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
    
    @ManyToOne
    @JoinColumn(name = "project_id", nullable = false)
    private EnvironmentalProject project;
    
    @Column(name = "role", nullable = false)
    private String role;
    
    @Column(name = "joined_at", nullable = false, updatable = false)
    private ZonedDateTime joinedAt;
    
    @PrePersist
    protected void onCreate() {
        if (id == null) {
            id = UUID.randomUUID();
        }
        if (joinedAt == null) {
            joinedAt = ZonedDateTime.now();
        }
        if (role == null || role.isEmpty()) {
            role = "participant";
        }
    }
}