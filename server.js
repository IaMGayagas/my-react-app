    const express = require('express');
    const WebSocket = require('ws');
    const cors = require('cors'); // Add CORS for cross-origin communication

    const app = express();
    const port = process.env.PORT || 8080; // Use environment variable for port

    app.use(cors()); // Enable CORS for all origins (adjust as needed)

    const wss = new WebSocket.Server({ server: app });

    let connections = []; // Array to store connected clients

    wss.on('connection', (ws) => {
        console.log('Client connected');

        connections.push(ws); // Add client to connections array

        ws.on('message', (message) => {
            console.log('Received message:', message);

            // Broadcast notification to all connected clients with validation
            try {
                const notificationData = JSON.parse(message); // Parse JSON for structured data
                if (typeof notificationData.message === 'string') {
                    connections.forEach((client) => {
                        if (client.readyState === WebSocket.OPEN) {
                            client.send(JSON.stringify({ message: notificationData.message })); // Send structured notification
                        }
                    });
                } else {
                    console.error('Invalid notification message format');
                }
            } catch (error) {
                console.error('Error parsing notification message:', error);
            }
        });

        ws.on('close', () => {
            console.log('Client disconnected');
            connections = connections.filter((client) => client !== ws); // Remove disconnected client
        });

        ws.on('error', (error) => {
            console.error('WebSocket error:', error);
            // Handle connection errors gracefully (e.g., reconnect attempts)
        });
    });

    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
