package com.knygu_aplikacija.knygu_aplikacija.repository;

import com.knygu_aplikacija.knygu_aplikacija.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
