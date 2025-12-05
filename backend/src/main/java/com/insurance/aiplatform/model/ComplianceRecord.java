package com.insurance.aiplatform.model;

import java.time.LocalDateTime;

public class ComplianceRecord {
    private Long id;
    private Long userId;
    private Long policyId;
    private boolean acknowledged;
    private LocalDateTime acknowledgedAt;

    // getters and setters
}
