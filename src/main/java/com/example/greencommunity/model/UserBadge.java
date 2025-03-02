package com.example.greencommunity.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import java.time.Instant;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "user_badges", uniqueConstraints = {@UniqueConstraint(columnNames = {"user_id", "badge_name"})})
public class UserBadge {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "id", updatable = false, nullable = false)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private com.example.greencommunity.model.User user;

    @Column(name = "badge_name", nullable = false)
    private String badgeName;

    @Column(name = "badge_description")
    private String badgeDescription;

    @Column(name = "awarded_at", nullable = false)
    private Instant awardedAt = Instant.now();
}
