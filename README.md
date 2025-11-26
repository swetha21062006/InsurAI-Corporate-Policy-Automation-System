# Insurance AI — Project scaffold

This repo contains a scaffold for the Insurance AI Corporate Policy Automation System.

Backend:

- Java Spring Boot project at `backend/` (Maven)
- Main class: `com.z.insurance.InsuranceAiApplication`
- In-memory H2 DB configured in `application.properties` for quick local testing

Frontend:

- React app at `frontend/`
- Run with `npm install` then `npm start` from `frontend/`

Quick start (high level):

- Backend: `cd backend` then `mvn spring-boot:run`
- Frontend: `cd frontend` then `npm install` and `npm start`

This is a structural scaffold. Implement business logic, security, tests, and CI as needed.
