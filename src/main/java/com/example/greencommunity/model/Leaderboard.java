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
@Table(name = "leaderboard")
public class Leaderboard {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    private UUID id;

    @OneToOne
    @JoinColumn(name = "user_id", nullable = false)
    private com.example.greencommunity.model.User user;

    @Column(name = "total_points", nullable = false)
    private Integer totalPoints;

    @Column
    private Integer rank;

    @Column(name = "updated_at", nullable = false)
    private Instant updatedAt = Instant.now();
}
