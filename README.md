# E-Learning Platform

<div align="center">
 
  
  [![Next.js](https://img.shields.io/badge/Next.js-15.0.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![NestJS](https://img.shields.io/badge/NestJS-10.0.0-red?style=for-the-badge&logo=nestjs)](https://nestjs.com/)
  [![MongoDB](https://img.shields.io/badge/MongoDB-6.0-green?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
</div>

## Overview

A modern, full-stack e-learning platform built with Next.js, NestJS, and MongoDB. This project demonstrates advanced web development skills including real-time communication, authentication, and data analytics.

## Key Features

- **Real-time Learning Experience**: WebSocket integration for live updates and communication
- **Advanced Authentication**: JWT, MFA, and fingerprint detection for enhanced security
- **Personalized Learning**: AI-powered recommendation system for course suggestions
- **Interactive Content**: Quiz system, forums, and progress tracking
- **Analytics Dashboard**: Visualize learning progress and performance metrics
- **Responsive Design**: Mobile-first approach with TailwindCSS

## Tech Stack

### Frontend
- Next.js 15 with App Router
- React 19
- TailwindCSS for styling
- Socket.io Client for real-time features
- Recharts for data visualization

### Backend
- NestJS framework
- MongoDB with Mongoose
- WebSocket for real-time communication
- JWT authentication
- Machine learning for recommendations

## Architecture

The application follows a modern microservices architecture:

- **Frontend**: Next.js with server and client components
- **Backend**: NestJS modular architecture
- **Database**: MongoDB with Mongoose schemas
- **Real-time**: WebSocket gateway
- **Authentication**: JWT with MFA support

## Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/e-learning-platform.git
cd e-learning-platform

# Install backend dependencies
cd backend
npm install
npm run start:dev

# Install frontend dependencies
cd ../frontend
npm install
npm run dev
```

## API Documentation

The backend provides RESTful APIs for:
- User management
- Course management
- Content delivery
- Progress tracking
- Real-time updates
- Quiz management
- Forum operations

## Performance & Security

- **Performance**: Code splitting, caching, and database optimization
- **Security**: JWT, MFA, rate limiting, and input validation
- **Monitoring**: Error tracking and logging middleware

## Deployment

The application can be deployed using Docker:

```bash
# Backend
docker build -t e-learning-backend ./backend
docker run -p 3001:3001 e-learning-backend

# Frontend
docker build -t e-learning-frontend ./frontend
docker run -p 3000:3000 e-learning-frontend
```

## Testing

```bash
# Backend tests
cd backend
npm run test
npm run test:e2e

# Frontend tests
cd frontend
npm run test
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
