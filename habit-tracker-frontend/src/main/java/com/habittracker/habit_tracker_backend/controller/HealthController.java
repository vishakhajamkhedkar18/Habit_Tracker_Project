package com.habittracker.habit_tracker_backend.controller;

import com.habittracker.habit_tracker_backend.entity.User;
import com.habittracker.habit_tracker_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HealthController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/health")
    public String healthCheck(){
        return "Smart Habit Tracker Backend is running";
    }

    @GetMapping("/test-db")
    public String testdb(){
        User user = new User();
        user.setName("Test User");
        user.setEmail("test@gmail.com");
        userRepository.save(user);
        return "User saved to DB";
    }

}
