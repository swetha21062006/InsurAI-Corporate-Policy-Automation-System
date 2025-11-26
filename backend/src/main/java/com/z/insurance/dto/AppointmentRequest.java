package com.z.insurance.dto;

import java.time.LocalDateTime;

public class AppointmentRequest {
    private Long agentId;
    private Long customerId;
    private LocalDateTime startTime;

    public Long getAgentId() { return agentId; }
    public void setAgentId(Long agentId) { this.agentId = agentId; }
    public Long getCustomerId() { return customerId; }
    public void setCustomerId(Long customerId) { this.customerId = customerId; }
    public LocalDateTime getStartTime() { return startTime; }
    public void setStartTime(LocalDateTime startTime) { this.startTime = startTime; }
}
