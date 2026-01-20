package com.habittracker.habit_tracker_backend.controller;

import com.habittracker.habit_tracker_backend.dto.LoginRequest;
import com.habittracker.habit_tracker_backend.dto.SignupRequest;
import com.habittracker.habit_tracker_backend.dto.UserDto;
import com.habittracker.habit_tracker_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public UserDto signup(@RequestBody SignupRequest signupRequest){
        return userService.signup(signupRequest);
    }

    @PostMapping("/login")
    public UserDto login(@RequestBody LoginRequest loginRequest){
        return userService.login(loginRequest);
    }
}
