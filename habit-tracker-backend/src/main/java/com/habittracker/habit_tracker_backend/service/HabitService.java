package com.habittracker.habit_tracker_backend.service;

import com.habittracker.habit_tracker_backend.dto.HabitDto;
import com.habittracker.habit_tracker_backend.entity.Habit;
import com.habittracker.habit_tracker_backend.exceptions.BadRequestException;
import com.habittracker.habit_tracker_backend.exceptions.ResourceNotFoundException;
import com.habittracker.habit_tracker_backend.repository.HabitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class HabitService {

    @Autowired
    private HabitRepository habitRepository;

    public Habit CreateHabit(Habit habit) {
        habit.setStartDate(LocalDate.now());
        habit.setCurrentStreak(0);
        return habitRepository.save(habit);
    }

    public Habit getHabitDetails(Long habitId){
        Habit habit = habitRepository.findById(habitId).orElseThrow(() -> new ResourceNotFoundException("Habit not found for id entered "+ habitId));
        return habit;
    }

    public HabitDto markHabitCompleted(Long habitId) {
        Habit habit = habitRepository.findById(habitId)
                .orElseThrow(() -> new ResourceNotFoundException("Habit not found"));

        LocalDate today = LocalDate.now();
        String message;

        if (today.equals(habit.getLastCompletedDate())) {
            throw new BadRequestException("Habit already completed today");
        }

        if (habit.getLastCompletedDate() == null) {
            habit.setCurrentStreak(1);
            message = "Great start! Keep building the habit";
        } else if (habit.getLastCompletedDate().plusDays(1).equals(today)) {
            habit.setCurrentStreak(habit.getCurrentStreak() + 1);
            message = "Awesome! Streak continues";
        } else {
            habit.setCurrentStreak(1);
            message = "Streak restarted — don’t give up!";
        }

        habit.setLastCompletedDate(today);

        Habit savedHabit = habitRepository.save(habit);

        return toDto(savedHabit,message);
    }

    public HabitDto toDto(Habit habit, String message) {
        HabitDto dto = new HabitDto();
        dto.setHabitId(habit.getId());
        dto.setHabitName(habit.getName());
        dto.setCurrentStreak(habit.getCurrentStreak());
        dto.setLastCompletedDate(habit.getLastCompletedDate());
        dto.setMessage(message);
        return dto;
    }


}
