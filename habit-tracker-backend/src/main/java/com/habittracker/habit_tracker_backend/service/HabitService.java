package com.habittracker.habit_tracker_backend.service;

import com.habittracker.habit_tracker_backend.entity.Habit;
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
        Habit habit = habitRepository.findById(habitId).orElseThrow(() -> new RuntimeException("Habit not found for id entered "+ habitId));
        return habit;
    }

    public Habit markHabitCompleted(Long habitId) {
        Habit habit = habitRepository.findById(habitId).orElseThrow(() -> new RuntimeException("Habit not found"));

        LocalDate today = LocalDate.now();

        if (habit.getLastCompletedDate() == null) {
            habit.setCurrentStreak(1);
        } else if (habit.getLastCompletedDate().plusDays(1).equals(today)) {
            habit.setCurrentStreak(habit.getCurrentStreak() + 1);
        } else if (!habit.getLastCompletedDate().equals(today)) {
            habit.setCurrentStreak(1);
        }

        habit.setLastCompletedDate(today);
        return habitRepository.save(habit);
    }

}
