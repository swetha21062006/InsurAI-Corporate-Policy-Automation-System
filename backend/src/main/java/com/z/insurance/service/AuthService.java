package com.z.insurance.service;

import org.springframework.stereotype.Service;

@Service
public class AuthService {
    public String authenticate(String username, String password) {
        // placeholder - implement authentication logic
        return "fake-jwt-token";
    }
}
