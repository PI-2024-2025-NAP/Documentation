---
id: architecture-diagram
title: Architectural Diagram
sidebar_label: Architectural Diagram
---

## System Architecture Diagram

Below is a high-level diagram illustrating the system architecture of the **AI-Powered Platform for Smart City Issue Detection & Resolution**, showing how the various components and technologies are integrated to form a cohesive and scalable platform.

![System Architecture Diagram](/img/architecture/architecture.1.0.0.svg)

The diagram represents a **modern, scalable, and distributed system** designed for **real-time data processing, analytics, and smart city applications**. The architecture integrates **Kubernetes clusters, event-driven communication, and machine learning components** to process incidents, analyze data, and deliver insights to both **citizens and city operators**.  

## Key Components  

### 1. User Interaction Layer (Frontend & Mobile Application)  

- **Citizens** interact with the system through a **mobile application**.  
- The app connects to the backend services via **RESTful APIs** and supports:  
  - **User authentication**  
  - **Problem reporting**  
  - **Status tracking**  
- **SendGrid** (a third-party email service) is used for notifications, alerts and identity confirmation.  

### 2. Data Processing & Business Logic Layer (ATCLL Kubernetes Clusters)  

This section is the **core of the system**, responsible for handling API requests, processing business logic, and managing data.  

#### API Layer (Kubernetes Pod)  
- Includes controllers such as:  
  - **Auth Controller**  
  - **User Controller**  
  - **Problem Controller**  
  - **Report Controller**  
- Handles **authentication, user management, problem management and report submission**.  

#### Business Logic Layer (Kubernetes Pod)  
- **Problem Service** – Processes user-reported issues.  
- **Problem Clustering** – Groups similar problems for better analysis.  
- **Image Processing** – Anonimates and pre-processes images.  
- **Location Finder** – Determines the location of reported incidents using H3.  

#### Web Interface Pod  
- Provides a **web-based UI** for city operators to monitor and manage reports. 

### 3. DataBase

#### Cassandra: Benefits and Why the choice

- **Scalability**: Cassandra scales horizontally by simply adding new nodes, making it ideal for handling growing data loads.
- **High Availability**: It offers robust replication and a decentralized architecture, ensuring continuous service even during node failures.
- **Performance**: Optimized for fast read operations, Cassandra efficiently handles high-throughput workloads with low latency.
- **Fault Tolerance**: Its distributed, peer-to-peer design makes the system resilient to hardware failures and network issues.
- **Flexible Data Model**: Supports a wide range of data structures, allowing adaptability as application requirements evolve.

### 4. Data Ingestion & Event Streaming Layer  

#### Edge Data Ingestion Layer (Kubernetes Pod)  
- Connects with **MQTT Broker** to subscribe to **real-time data from external sources** like the location of the **PIXKIT** and to check if an incident is resolved.
- Also connects to publish, based on the **PIXKIT's** location, if it passed close to any pending or in-progress incident.

#### Kafka Broker (Kubernetes Pod)  
- Uses **Kafka** as the **central internal event-streaming platform**.  
- Manages **asynchronous data processing**.  
- Used to manage many requests to generate images' descriptions and classifications 

### 5. AI/ML Processing Layer (NAP VMs)  

- The system integrates **Machine Learning (ML)** and **Large Language Models (LLMs)** for advanced data processing.  
- Runs on **GPU-powered VMs**, supporting:  
  - **AI-driven analytics** such as image classification
  - **Natural language processing** to generate descriptions for images

### 6. External Data Processing (Aveiro Tech City Living Lab)  

- A separate **IoT-based system** that collects **real-time physical data** if it is active (when the PIXKIT passed close to an incident).  
- Includes a **Computer Vision Instance** for detecting incidents and their resolved trust level.  
- Uses an **MQTT Broker** to publish and consume messages.  
