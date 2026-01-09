package com.habittracker.habit_tracker_backend.controller;

import com.habittracker.habit_tracker_backend.entity.User;
import com.habittracker.habit_tracker_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public User createUser(@RequestBody User user){
        return userService.createUser(user);
    }

    @GetMapping("/getUser/{userid}")
    public User getUser(@PathVariable Long userid){
        return userService.getUserById(userid);
    }

    // SIGN UP
    @PostMapping("/signup")
    public User signup(@RequestBody User user) {
        return userService.signup(user);
    }

    // LOGIN
    @PostMapping("/login")
    public User login(@RequestParam String email) {
        return userService.login(email);
    }
}
