---
id: non-functional-requirements
title: Non Functional Requirements
sidebar_label: Non Functional Requirements
sidebar_position: 6
---

In addition to the functional requirements outlined in the user stories, the system must meet several non-functional requirements to ensure reliability, performance, security, and usability. These requirements define the quality attributes of the platform and provide guidelines for its implementation.

## 1. Performance Requirements
- **Aggregation Model**: Must complete processing within **1 second**.
- **Image Classification Model**: Must classify an image within **2 seconds** (in background).
- **Description Generation Model**: Must generate a description within **4 seconds** (on the first attempt).
- The user should be able to submit the incident within **5 seconds** after taking the picture.
- The system should handle **X concurrent users** without degradation.
- Response times should not exceed **Y milliseconds** under peak load.
- The application should support **autoscaling** to maintain responsiveness.

## 2. Scalability Requirements
- The application should **scale horizontally** by adding instances rather than requiring hardware upgrades.
- **Database queries** should be optimized to handle increasing data indexation efficiently.

## 3. Maintainability and Extensibility
- The codebase should follow **clean architecture** principles to allow independent updates and a maintainable environment:  
  *“Python where we can, C++ where we must”*.
- Components should be **loosely coupled** and **highly cohesive** for easier modifications and integration with multiple systems like **Digital Twin**.

## 4. Availability and Reliability
- The platform must have at least **95% uptime**, ensuring uninterrupted access for citizens, city operators, and administrators.
- **Automated system health monitoring** should detect failures and notify administrators in case of service disruptions or abnormal API response times.
- **Incident reports and status updates** should be synchronized in real-time across the **mobile app and web platform**.
- A failure in an **AI model** should not impact the entire system.

## 5. Security and Privacy
- All incident reports, user data, and AI-generated classifications must be stored securely and comply with **GDPR** and other applicable **data privacy laws**.
- An **image filter** should be included to remove **personal data, bank cards, etc.** from uploaded images.
- Communication between the **mobile app, web platform, and backend services** must be encrypted using **HTTPS and TLS** protocols.
- Users must be able to **delete their personal data** from the database, ensuring compliance with **data privacy regulations** and maintaining control over their information.

## 6. Usability
- The **mobile app** and **web platform** should have a **user-friendly interface** that is intuitive for both citizens and city control operators.
- The **mobile app** must be compatible with **Android and iOS**.

## 7. Accessibility
- The platform should support **multiple languages** to accommodate diverse populations.
- The **font size** should be easily adjustable without breaking the **UI layout or design**.

## 8. Monitoring and Analytics
- The system should provide **detailed analytics dashboards** for administrators.
- Administrators should receive **alerts** for anomalies, such as **sudden spikes in incident reports** or **unusually slow AI processing**.
