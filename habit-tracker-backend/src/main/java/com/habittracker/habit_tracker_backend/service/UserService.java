package com.habittracker.habit_tracker_backend.service;

import com.habittracker.habit_tracker_backend.entity.User;
import com.habittracker.habit_tracker_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User createUser(User user){
        return userRepository.save(user);
    }

    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    // SIGN UP
    public User signup(User user) {
        userRepository.findByEmail(user.getEmail())
                .ifPresent(u -> {
                    throw new RuntimeException("User already exists");
                });
        return userRepository.save(user);
    }

    // LOGIN
    public User login(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }
}
