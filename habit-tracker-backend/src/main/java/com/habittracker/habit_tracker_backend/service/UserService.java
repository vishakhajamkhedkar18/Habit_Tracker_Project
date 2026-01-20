package com.habittracker.habit_tracker_backend.service;

import com.habittracker.habit_tracker_backend.dto.LoginRequest;
import com.habittracker.habit_tracker_backend.dto.SignupRequest;
import com.habittracker.habit_tracker_backend.dto.UserDto;
import com.habittracker.habit_tracker_backend.entity.User;
import com.habittracker.habit_tracker_backend.exceptions.BadRequestException;
import com.habittracker.habit_tracker_backend.exceptions.ResourceNotFoundException;
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
    public UserDto signup(User user) {
        userRepository.findByEmail(user.getEmail())
                .ifPresent(u -> {
                    throw new BadRequestException("User already exists");
                });
        return toDto(userRepository.save(user));
    }

    // LOGIN
    public UserDto login(String email) {
        return toDto(userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found")));
    }

    public UserDto toDto(User user) {
        return new UserDto(
                user.getId(),
                user.getName(),
                user.getEmail()
        );
    }

    public UserDto signup(SignupRequest signupRequest){
        userRepository.findByEmail(signupRequest.getEmail())
                .ifPresent(u -> {throw new BadRequestException("User already Exist");
                });

        User user = new User();
        user.setName(signupRequest.getName());
        user.setEmail(signupRequest.getEmail());
        user.setPassword(signupRequest.getPassword());

        return toDto(userRepository.save(user));
    }

    public UserDto login(LoginRequest loginRequest){
        User user = userRepository.findByEmail(loginRequest.getEmail())
                .orElseThrow(() -> new BadRequestException("Invalid email or PassWord"));

        if(!user.getPassword().equals(loginRequest.getPassword())){
            throw new BadRequestException("Invalid email or Password.");
        }

        return toDto(user);
    }
}
