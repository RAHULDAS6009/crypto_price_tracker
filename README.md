
# Project Setup Guide

## Technologies Used

-   **React**: Frontend library for building user interfaces
-   **Redux**: State management library
-   **Redux Toolkit**: Official toolset for Redux development
-   **WebSockets**: Real-time communication
-   **Tailwind CSS**: Utility-first CSS framework
-   **TypeScript**: Static type checking
-   **React Router**: Client-side routing


## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/crypto_price_tracker.git
cd crypto_price_tracker

```

### 2. Install dependencies

```bash
npm install

```


### 3. Start the development server

```bash
npm start

```
[![Watch the demo](https://img.youtube.com/vi/ZQjd2FV5fjI/0.jpg)](https://www.youtube.com/watch?v=ZQjd2FV5fjI)



## Project Structure

```
src/
├── components/        # Reusable UI components
├── features/          # Feature-based modules
├── store/             # Redux store setup
├── App.tsx            # Main App component
└── index.tsx          # Entry point

```

## Redux Configuration

Redux is configured using Redux Toolkit. Create slices for different features and combine them in the store.

## WebSocket Implementation

WebSockets are implemented using native WebSocket API , connecting to the WebSocket server defined in the environment variables.

## Tailwind Configuration

Tailwind CSS is configured to scan all components and purge unused styles in production builds.
