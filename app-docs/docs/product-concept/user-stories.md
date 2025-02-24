---
id: user-stories
title: User Stories
sidebar_label: User Stories
sidebar_position: 4
---

This section presents the **user stories** that define the core functionalities of the system, ensuring that the platform meets the needs of **citizens**, **city control operators**, and **administrators**.

### Citizen User Stories
- **As a citizen**, I want to easily submit reports of urban issues (e.g., potholes, fallen trees, vandalism) through a mobile app, so that the city can quickly address them.
- **As a citizen**, I want to receive a suggested description for faster submission and provide feedback, so that I can help to improve future recommendations.
- **As a citizen**, I want to check the status of my reported issues and access a history of my past reports, so that I can track their resolution process.
- **As a citizen**, I want to receive notifications when the status of my reported issue changes to "Resolved", so that I stay informed about its progress.

---

### City Control Operator User Stories
- **As a city control operator**, I want to access a centralized dashboard that organizes all reported incidents by category and location, so that I can efficiently manage, assign, and track the resolution of issues across the city.
- **As a city control operator**, I want to filter reports based on status (e.g., pending, in progress, resolved).
- **As a city control operator**, I want to access a historical log of past incidents along with details on how they were resolved, so that I can analyze recurring problems and improve response strategies.
- **As a city control operator**, when marking an incident as 'Resolved,' I want to provide an (optional) description of the solution, so that this information can be referenced in the future when handling similar issues.
- **As a city control operator**, I want to access all reports and images related to the same issue in a specific location, so that I can assess the problem from multiple perspectives, reduce redundancy, and avoid duplicate efforts.
- **As a city control operator**, I want to prioritize incidents based on severity and frequency, so that I can address the most critical issues first.
- **As a city control operator**, I want to visualize incidents on a live city map, so that I can quickly identify affected areas and coordinate response teams.
- **As a city control operator**, I want to update the status of incidents in real time, so that citizens can see the progress.
- **As a city control operator**, I want to receive automated alerts when a high number of incidents are reported in the same area within a short period, so that I can quickly assess if an emergency response is needed.

---

### Administrator User Stories
- **As an administrator**, I want to track system uptime and detect failures in real time, so that I can ensure high availability and reliability.
- **As an administrator**, I want to receive alerts when the system detects anomalies, such as AI failures (e.g., inability to generate a description from an image), so that I can take immediate action to resolve the issue.
- **As an administrator**, I want to have insights into the time taken by the AI model to infer the classification and generate the problem description, so that I can evaluate its effectiveness and trigger model retraining if necessary.
- **As an administrator**, I want to monitor the system's performance, including the number of requests made to each endpoint, to ensure the application's efficient and secure operation.
- **As an administrator**, I want to analyze the number of positive and negative feedback responses from users regarding the quality of the AI-generated description, so that I can assess the AI's performance and identify areas for improvement.

---