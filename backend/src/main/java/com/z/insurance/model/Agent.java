package com.z.insurance.model;

import jakarta.persistence.Entity;

@Entity
public class Agent extends User {
    private String phone;
    private String specialty;

    public Agent() { this.setRole(Role.AGENT); }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }
    public String getSpecialty() { return specialty; }
    public void setSpecialty(String specialty) { this.specialty = specialty; }
}
