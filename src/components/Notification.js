    import React, { useState, useEffect } from 'react';

    function Notification() {
    const [notification, setNotification] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:8080'); // Replace with your server URL

        ws.onopen = () => {
        console.log('WebSocket connection opened');
        };  

        ws.onmessage = (event) => {
        try {
            const notificationData = JSON.parse(event.data);
            if (typeof notificationData.message === 'string') {
            setNotification(notificationData.message);
            setErrorMessage(null); // Clear any previous errors
            } else {
            console.error('Invalid notification message format');
            setErrorMessage('Received invalid notification data.');
            }
        } catch (error) {
            console.error('Error parsing notification message:', error);
            setErrorMessage('Error receiving notification.');
        }
        };

        ws.onclose = () => {
        console.log('WebSocket connection closed');
        setNotification(null); // Clear notification on disconnect
        setErrorMessage('WebSocket connection closed.'); // Inform user
        };

        ws.onerror = (error) => {
        console.error('WebSocket error:', error);
        setErrorMessage('WebSocket error occurred.');
        };

        return () => {
        ws.close(); // Clean up WebSocket connection on component unmount
        };
    }, []);

    return (
        <div>
        {notification && <p>Notification: {notification}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
    }

    export default Notification;
