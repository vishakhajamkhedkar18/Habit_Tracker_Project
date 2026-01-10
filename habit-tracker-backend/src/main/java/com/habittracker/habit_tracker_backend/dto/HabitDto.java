package com.habittracker.habit_tracker_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class HabitDto {
    private Long habitId;
    private String habitName;
    private LocalDate lastCompletedDate;
    private int currentStreak;

}
