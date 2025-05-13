# ScoreTours Project Summary

This project is organized into several main components for building and deploying a modern tour planning application:

## 1. scoretours-frontend
- **Tech Stack:** Next.js, React, Tailwind CSS, TypeScript
- **Purpose:** Provides the user interface for ScoreTours, offering a modern web experience for planning tours.
- **Key Files:**
  - `README.md`: Brief overview of the frontend.
  - `package.json`: Lists dependencies such as Next.js, React, Tailwind CSS, OpenAI, etc.
  - `app/`, `public/`, `styles/`: Main source, static assets, and styling folders.

## 2. scoretours-agents
- **Tech Stack:** Node.js, TypeScript, OpenAI, Axios
- **Purpose:** Contains backend agents, likely for AI-driven features such as flight or tour search.
- **Key Files:**
  - `package.json`: Contains scripts for development, build, and dependencies (OpenAI, Axios, dotenv, etc.).
  - `build-lambda.sh`: Script to bundle TypeScript Lambda functions for deployment using esbuild.
  - `lambdas/`: Contains Lambda handler code (e.g., `flightSearchHandler.ts`).
  - `dist/`: Output directory for built Lambda functions.

## 3. scoretours-iac
- **Tech Stack:** Shell scripts, AWS
- **Purpose:** Infrastructure as Code (IaC) for provisioning and tearing down AWS resources.
- **Key Files:**
  - `README.md`: Explains setup and teardown scripts for API Gateway, Lambda, IAM; DynamoDB support planned.
  - `scripts/`: Contains shell scripts for setup (`setup.sh`) and teardown (`teardown.sh`).

## 4. aws
- **Purpose:** Appears to contain AWS-related configuration or scripts (details not fully explored).

---

## High-Level Workflow
- **Frontend**: Users interact with a Next.js web UI.
- **Agents**: Backend agents (possibly serverless) handle AI and data processing, including OpenAI integration.
- **IaC**: Scripts automate deployment and teardown of AWS infrastructure.

## Notable Features
- Modular structure for separation of concerns (frontend, backend/agents, infrastructure).
- Uses modern frameworks and cloud-native (serverless) deployment patterns.
- OpenAI integration for intelligent features.

---

*This summary was generated automatically by reviewing the project structure and key configuration files. For more details, consult the README files in each directory or package.json scripts.*
