package com.habittracker.habit_tracker_backend.repository;

import com.habittracker.habit_tracker_backend.entity.Habit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HabitRepository extends JpaRepository<Habit,Long> {

    List<Habit> findByUserId(Long userId);
}
