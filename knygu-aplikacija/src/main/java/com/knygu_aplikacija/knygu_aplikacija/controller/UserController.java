package com.knygu_aplikacija.knygu_aplikacija.controller;

import com.knygu_aplikacija.knygu_aplikacija.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/users")
public class UserController {
    @Autowired
    private UserService userService;
}
