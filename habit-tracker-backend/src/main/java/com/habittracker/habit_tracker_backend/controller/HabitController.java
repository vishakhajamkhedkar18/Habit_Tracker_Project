package com.habittracker.habit_tracker_backend.controller;

import com.habittracker.habit_tracker_backend.dto.HabitDto;
import com.habittracker.habit_tracker_backend.entity.Habit;
import com.habittracker.habit_tracker_backend.repository.HabitRepository;
import com.habittracker.habit_tracker_backend.service.HabitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/habits")
public class HabitController {

    @Autowired
    private HabitService habitService;

    @Autowired
    private HabitRepository habitRepository;

    @PostMapping
    public Habit createHabit(@RequestBody Habit habit){
        return habitService.CreateHabit(habit);
    }

    @PostMapping("/{habitId}/completed")
    public HabitDto markHabitCompleted(@PathVariable Long habitId){
        return habitService.markHabitCompleted(habitId);
    }

    @GetMapping("/{habitId}")
    public Habit getHabitdetails(@PathVariable Long habitId){
        return habitService.getHabitDetails(habitId);
    }

    @GetMapping("/user/{userId}")
    public List<Habit> getHabitsByUser(@PathVariable Long userId) {
        return habitRepository.findByUserId(userId);
    }
}
