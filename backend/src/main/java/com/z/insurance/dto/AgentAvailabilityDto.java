package com.z.insurance.dto;

import java.time.LocalDateTime;

public class AgentAvailabilityDto {
    private Long agentId;
    private LocalDateTime from;
    private LocalDateTime to;

    public Long getAgentId() { return agentId; }
    public void setAgentId(Long agentId) { this.agentId = agentId; }
    public LocalDateTime getFrom() { return from; }
    public void setFrom(LocalDateTime from) { this.from = from; }
    public LocalDateTime getTo() { return to; }
    public void setTo(LocalDateTime to) { this.to = to; }
}
