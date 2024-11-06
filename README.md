# Multiplayer Dashboard with React & Socket.IO

This project is a simple multiplayer score dashboard where users can submit their scores in real-time, and all connected clients see the updated player scores.

## Technologies Used

- **Backend**: Node.js, Express, Socket.IO
- **Frontend**: React
- **Styling**: CSS

## Setup Instructions

### Prerequisites

**Node.js** and **npm** installed on your machine.

### Steps

1. Clone the Repository:

   ```bash
   git clone https://github.com/patricnilackshan/websocket-scoreboard.git

   cd websocket-scoreboard
   ```

2. Install Dependencies:

   - Backend:

     ```bash
     cd server
     npm install
     ```

   - Frontend:
     ```bash
     cd client
     npm install
     ```

3. Run the Servers:

   - Start the backend server:

     ```bash
     cd server
     npm run dev
     ```

   - Start the frontend server:
     ```bash
     cd client
     npm run dev
     ```

4. **Open the App**: Open your browser and visit `http://localhost:5173` to use the app.

## Real-Time Updates with Socket.IO

This app uses Socket.IO to provide real-time communication between the frontend and backend. Here's how it works:

- Real-Time Updates: Whenever a player submits a score, the backend emits the updated player scores to all connected clients.

- Multiple Tabs and Browsers: You can open the app in multiple tabs or even different browsers. As you submit scores, all tabs and browsers will automatically update in real time without needing a page reload.

Socket.IO allows the app to maintain an open WebSocket connection, ensuring that all connected clients stay in sync with the latest data.

<br>
<br>

## This project emphasizes the use of Socket.IO for real-time score updates, explaining how it enables seamless communication across multiple tabs and browsers.
