const express = require('express');
const cors = require('cors');
const { queryDatabase } = require('./db');
const { configTPUT } = require('./config');

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Serve static files from the "public" directory
app.use(express.static('public'));

app.use(express.json());

// Route to verify direct access to the PlannedJPH table
app.get('/api/verify-direct-access', async (req, res) => {
    const query = `
        SELECT TOP 10 * FROM [dbo].[PlannedJPH];
    `;
    try {
        console.log('Using configTPUT for database connection:', configTPUT); // Log connection details
        const result = await queryDatabase(query, configTPUT);
        console.log('Query result:', result); // Log query result
        res.json(result.recordset);
    } catch (err) {
        console.error('Error querying the database:', err.message); // Log detailed error message
        console.error(err); // Log the entire error object for more information
        res.status(500).send('Error querying the database');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
