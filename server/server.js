const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

//Routes
app.get('/', (req, res) => {
    res.send('Server is running!');
  });
  
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});