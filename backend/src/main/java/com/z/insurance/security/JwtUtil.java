package com.z.insurance.security;

import org.springframework.stereotype.Component;

@Component
public class JwtUtil {
    public String generateToken(String username) { return "fake-token-for-" + username; }
}
