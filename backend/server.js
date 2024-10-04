const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const User = require('./models/user');

const app = express();
const PORT = process.env.PORT || 5000;


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/userDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
}).catch((err) => console.log(err));





// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
// app.use('/api/auth', require('../backend/routes/auth'));


app.post("/register", async (req, res) => {
    try {
        const { fullName, email, phoneNumber, birthDate, password, address, city } = req.body;

        // Check if user exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        // Save user to database
        user = new User({ fullName, email, phoneNumber, birthDate, password: hashedPassword, address, city });
        await user.save();

        res.status(201).json({ msg: 'User registered successfully!' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})



// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
