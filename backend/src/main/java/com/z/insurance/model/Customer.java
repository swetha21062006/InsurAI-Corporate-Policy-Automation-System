package com.z.insurance.model;

import jakarta.persistence.Entity;

@Entity
public class Customer extends User {
    private String phone;

    public Customer() { this.setRole(Role.CUSTOMER); }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }
}
