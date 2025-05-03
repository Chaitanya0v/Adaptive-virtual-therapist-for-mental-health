# Adaptive Virtual Therapist for Mental Health

This project aims to build an intelligent, adaptive virtual therapist to support mental health through real-time interaction and personalized experiences. Leveraging camera inputs, natural language processing, and user-friendly design, the application provides a safe and engaging space for users to communicate and reflect.

## Features

- **Real-Time Chat Interface** – A clean and responsive chat interface for user interactions.  
- **Camera-Based Interaction** – Initializes and integrates camera feeds for future emotion recognition or visual feedback.  
- **Custom Background Effects** – Visually soothing backgrounds to enhance user experience.  
- **Consent Handling** – Ensures user consent is obtained for sensitive features like camera access.  
- **Modular Components** – Codebase is organized into reusable React components using TypeScript and CSS.  

## Tech Stack

- **Frontend:** React (TypeScript)  
- **Styling:** CSS  
- **State Management:** React Hooks  
- **Camera Integration:** Web APIs  

## File Structure

- `App.tsx` – Main app container  
- `App.css` – Styles for the application  
- `BackgroundEffects.tsx` – Handles visual background enhancements  
- `CameraInitializer.tsx` – Manages camera permissions and setup  
- `ChatHeader.tsx` – Displays chat header information  
- `ChatInput.tsx` – Input field for user messages  
- `ChatInputArea.tsx` – Structured input layout  
- `ChatMessage.tsx` – Single message display  
- `ChatMessages.tsx` – Message feed display  
- `ConsentBanner.tsx` – Consent prompt for camera or data usage  

## Getting Started

```bash
git clone https://github.com/Chaitanya0v/Adaptive-virtual-therapist-for-mental-health.git
cd Adaptive-virtual-therapist-for-mental-health
npm install
npm start
```
#Future Scope
	-•	Emotion recognition from webcam
	-•	Integration with mental health APIs or GPT-based support agents
	-•	User feedback and mood tracking
