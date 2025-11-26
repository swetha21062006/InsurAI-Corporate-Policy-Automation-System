# Insurance AI — Project Scaffold

This repo contains a complete scaffold for the **Insurance AI Corporate Policy Automation System** with a Spring Boot backend and React frontend.

## Project Structure

```
backend/          - Java Spring Boot backend (Maven)
frontend/         - React frontend
README.md         - This file
.gitignore        - Git ignore rules
```

## Backend

**Location:** `backend/`  
**Build Tool:** Maven  
**Framework:** Spring (Core + Data + Security)  
**Database:** H2 (in-memory, configurable)  
**Java Version:** 8+ (recommended: 11+)

### Build & Run Backend

#### Prerequisites

- **Java 8+** (or 11+ recommended for better SSL support)
- **Maven 3.8.9+** (already installed to `~/.maven`)

#### Quick Start

```bash
cd backend

# Clean and compile
mvn clean compile

# Run tests
mvn test

# Package JAR
mvn package

# Run the application (requires dependencies to be downloaded first)
mvn spring-boot:run
```

The app will start on `http://localhost:8080`.

**Note on SSL/TLS Issues:**  
If you encounter SSL certificate errors with Java 8, either:

1. Upgrade to Java 11+ from https://adoptium.net (recommended)
2. Or disable certificate validation (not recommended for production):
   ```bash
   mvn -Dmaven.wagon.http.ssl.insecure=true clean compile
   ```

### Project Layout

- `src/main/java/com/z/insurance/` — All source code

  - `config/` — Spring configuration (Security, Swagger, Email)
  - `controller/` — REST API endpoints
  - `service/` — Business logic layer
  - `repository/` — JPA data access
  - `model/` — JPA entity classes
  - `dto/` — Data transfer objects
  - `security/` — JWT utilities & filters
  - `exception/` — Custom exceptions & global handler

- `src/main/resources/`

  - `application.properties` — Spring Boot configuration
  - `templates/` — Email templates

- `src/test/` — Unit tests

---

## Frontend

**Location:** `frontend/`  
**Framework:** React 18.2  
**State Management:** Redux Toolkit  
**HTTP Client:** Axios  
**Routing:** React Router v6

### Build & Run Frontend

#### Prerequisites

- **Node.js 16+** with npm

#### Quick Start

```bash
cd frontend

# Install dependencies
npm install

# Start dev server
npm start
```

The app will open at `http://localhost:3000`.

**Connect to Backend API:**  
By default, the frontend proxies to `/api` at `http://localhost:8080/api`.  
To change this, set the `REACT_APP_API_URL` environment variable:

```powershell
# Windows PowerShell
$env:REACT_APP_API_URL='http://localhost:8080/api'; npm start
```

### Project Layout

- `src/components/` — React components

  - `common/` — Header, Sidebar, Footer, PrivateRoute, LoadingSpinner
  - `forms/` — Form components (Login, Register, Appointment, AgentAvailability)

- `src/pages/` — Page components by role

  - `customer/` — Customer dashboard, appointments, plan info
  - `agent/` — Agent dashboard, schedule, availability
  - `admin/` — Admin dashboard, user/appointment management

- `src/services/` — API call wrappers

  - `api.js` — Axios instance
  - `authService.js` — Authentication endpoints
  - `appointmentService.js` — Appointment endpoints
  - `agentService.js` — Agent endpoints

- `src/store/` — Redux state management

  - `slices/` — `authSlice`, `appointmentSlice`, `agentSlice`

- `src/hooks/` — Custom React hooks
  - `useAuth.js` — Authentication state
  - `useVoiceRecognition.js` — Voice recognition setup

---

## Running Both Together

### Terminal 1: Backend

```bash
cd backend
$env:JAVA_HOME='C:\Program Files\Java\jdk1.8.0_121'  # or Java 11+ path
mvn spring-boot:run
```

### Terminal 2: Frontend

```bash
cd frontend
$env:REACT_APP_API_URL='http://localhost:8080/api'
npm start
```

Then open `http://localhost:3000` in your browser.

---

## API Endpoints (Backend)

| Endpoint                   | Method   | Purpose                  |
| -------------------------- | -------- | ------------------------ |
| `/api/auth/login`          | POST     | User login               |
| `/api/auth/register`       | POST     | User registration        |
| `/api/appointments`        | GET/POST | List/create appointments |
| `/api/agents/availability` | GET      | Agent availability       |
| `/api/plans`               | GET      | Insurance plans          |
| `/api/users/me`            | GET      | Current user info        |
| `/api/admin/dashboard`     | GET      | Admin dashboard data     |

---

## Database

**H2 In-Memory Database** (configured by default)

- **JDBC URL:** `jdbc:h2:mem:insurance`
- **Username:** `sa`
- **Password:** (empty)
- **H2 Console:** `http://localhost:8080/h2-console` (if running backend)

To switch to PostgreSQL, MySQL, etc., update `backend/src/main/resources/application.properties`.

---

## Next Steps

1. **Download Java 11+** — Get from https://adoptium.net to avoid SSL issues
2. **Implement Business Logic** — Add real service implementations
3. **Wire Security** — Complete JWT auth and integrate with controllers
4. **Database Relationships** — Define JPA relationships between entities
5. **Frontend Integration** — Connect React components to API services
6. **Testing** — Add unit/integration tests
7. **Documentation** — Generate API docs with Swagger

---

## Maven Installation

Maven 3.9.11 is installed at `C:\Users\sweth\.maven\apache-maven-3.9.11`.

Add to PATH in PowerShell:

```powershell
$env:PATH = 'C:\Users\sweth\.maven\apache-maven-3.9.11\bin;' + $env:PATH
mvn -v
```

---

## Notes

- This is a **structural scaffold**. All implementations are placeholder stubs.
- For production, implement proper error handling, logging, input validation, and security.
- Store JWT secrets and sensitive config in environment variables, not in properties files.

Enjoy building Insurance AI!
