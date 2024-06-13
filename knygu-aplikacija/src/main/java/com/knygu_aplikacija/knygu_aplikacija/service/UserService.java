package com.knygu_aplikacija.knygu_aplikacija.service;

import com.knygu_aplikacija.knygu_aplikacija.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class UserService {
    @Autowired
    private UserRepository userRepository;

}
