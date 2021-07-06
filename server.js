const express = require('express');
const connectDB = require('./config/db');
const app = express();
//Connect DB
connectDB();
//Init Middleware
app.use(express.json({extented: false}));
const PORT = process.env.PORT || 5002;
app.get('/', (req, res) => res.json({msg: 'Welcome to the API'}));
//Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
