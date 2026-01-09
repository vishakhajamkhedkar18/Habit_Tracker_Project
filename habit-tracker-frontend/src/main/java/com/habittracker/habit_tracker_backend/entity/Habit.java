package com.habittracker.habit_tracker_backend.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Table(name="habits")
@Data
public class Habit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    private LocalDate startDate;

    private LocalDate lastCompletedDate;

    private int currentStreak;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
