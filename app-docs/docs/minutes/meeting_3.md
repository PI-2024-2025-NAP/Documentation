---
id: meeting_3
title: Meeting 3 - February 19, 2025
sidebar_label: Meeting 3 - February 19, 2025
sidebar_position: 3
---

# Meeting 3 - February 19, 2025

---

## Meeting Metadata

### Date

**February 19, 2025**

### Attendees

- Danilo Micael Gregório Silva
- Pedro Miguel Azevedo Pinto
- João Pedro Azevedo Pinto
- Tomás Santos Fernandes
- Guilherme Ferreira Santos
- Gonçalo Perna (NAP student)

---

## Key Discussion Points  

During the meeting, we discussed the architecture infrastructure and potential integration challenges:  

- **MQTT Broker**: Since it only provides pre-processed data instead of raw data directly from the sensors (for privacy reasons), we concluded that the image processing service must be implemented and executed directly on the **PIXKIT** (or another **Edge Data**) rather than being consumed from the Broker and processed afterward.  

- **Edge Data**: A possible solution would be to consider the infrastructure within the **Users Layer**, simultaneously assuming two roles: a **regular user**, who reports issues when detecting them, and a **municipal camera operator**, who identifies already resolved issues and updates their status accordingly.  

- **Kubernetes Architecture**: Since we do not have much experience with **Kubernetes**, we discussed our proposed architecture, making corrections to certain details. The goal is to develop a scalable solution capable of supporting a real-world implementation.  

- **Privacy**: We also discussed **privacy** concerns, concluding that the images used in the application should undergo **pre-processing** before being stored or transmitted, ensuring the removal of faces, cards, and other sensitive elements.  

---

## Action Items

- **João** and **Guilherme** are responsible for the Website interface:
  1) Fix bugs in the first iteration
  2) Prepare the presentation, update the report and backlog of the project
  3) Review the code that Tomás and Danilo developed in the first iteration

- **Tomás** and **Danilo** are responsible for the Mobile interface:
  1) Fix bugs in the first iteration
  2) Prepare the presentation, update the report and backlog of the project
  3) Review the code that João and Guilherme developed in the first iteration 

- **Pedro** will complete:
  1) Work on the planning of the architecture
  2) Planning integration with ACTLL
  3) Help in Mobile and Website


---

**Note**: This meeting helped to establish the project's foundation and his main architecture. The next meeting will focus on the project's progress and the next steps to be taken.

