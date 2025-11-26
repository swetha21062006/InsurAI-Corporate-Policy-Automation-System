package com.z.insurance.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.z.insurance.model.AgentAvailability;

public interface AgentAvailabilityRepository extends JpaRepository<AgentAvailability, Long> {
}
