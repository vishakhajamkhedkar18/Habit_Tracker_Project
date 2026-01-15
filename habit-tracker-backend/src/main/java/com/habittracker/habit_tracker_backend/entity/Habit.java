package com.habittracker.habit_tracker_backend.entity;

import com.habittracker.habit_tracker_backend.enums.HabitCategory;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Table(name="habits")
@Data
public class Habit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotBlank(message = "Habit name is required")
    private String name;

    private LocalDate startDate;

    private LocalDate lastCompletedDate;

    private int currentStreak;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Enumerated(EnumType.STRING)
    private HabitCategory category;
}
