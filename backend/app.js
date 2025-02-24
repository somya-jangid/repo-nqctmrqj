const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '..')));

// Endpoint to get PNR status
app.get('/api/pnr/:pnr', (req, res) => {
    const pnr = req.params.pnr;
    // Simulated response for demonstration
    if(pnr === "1234567890"){
        return res.json({ status: "Confirmed", train: "Express", from: "Station A", to: "Station B" });
    }
    res.status(404).json({ error: "PNR not found" });
});

// Endpoint to handle booking requests
app.post('/api/book', (req, res) => {
    // Process booking data from req.body
    res.json({ success: true, message: "Booking confirmed" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
