// const express = require('express');
// const cors = require('cors');
// const path = require('path');
// const fs = require('fs');
// const session = require('express-session');
// const Razorpay = require('razorpay');
// const crypto = require('crypto');

// // ---------------- Appointment Data Setup ----------------
// const DATA_FILE = path.join(__dirname, 'data', 'appointments.json');

// // ✅ Ensure the data folder and appointments.json file exist
// const dataDir = path.join(__dirname, 'data');
// if (!fs.existsSync(dataDir)) {
//     fs.mkdirSync(dataDir);
// }

// if (!fs.existsSync(DATA_FILE)) {
//     fs.writeFileSync(DATA_FILE, '[]', 'utf8'); // start with empty array
// }

// // Load existing appointments
// let appointments = [];
// try {
//     if (fs.existsSync(DATA_FILE)) {
//         const fileData = fs.readFileSync(DATA_FILE, 'utf8');
//         appointments = JSON.parse(fileData) || [];
//     }
// } catch (err) {
//     console.error('Error loading appointments:', err);
// }


// const app = express();
// const PORT = process.env.PORT || 5000;

// // ---------------- Middleware ----------------
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(session({
//     secret: 'supersecretkey',
//     resave: false,
//     saveUninitialized: false,
//     cookie: { secure: false }
// }));

// // ---------------- Razorpay Configuration ----------------
// // IMPORTANT: Replace with your actual Razorpay Key ID and Key Secret
// const razorpay = new Razorpay({
//     key_id: 'rzp_test_p0xNqV2vU5n3Qp',
//     key_secret: 'Rk0r0Y7K3o5f7Q4d8N9g0Z1x2P3x7w6s'
// });

// // ---------------- In-memory storage & Persistence ----------------
// let users = [];
// // let appointments = [];
// let appointmentCounter = 1000;

// const usersFilePath = path.join(__dirname, 'data/users.json');

// // Function to load users from file on server start
// function loadUsers() {
//     try {
//         const data = fs.readFileSync(usersFilePath, 'utf8');
//         users = JSON.parse(data);
//         console.log(`Loaded ${users.length} users from users.json`);
//     } catch (error) {
//         console.log('No users.json file found or error reading it. Starting with empty user list.');
//         users = [];
//     }
// }

// // Function to save users to file after a change
// function saveUsers() {
//     fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), 'utf8', (err) => {
//         if (err) {
//             console.error('Error writing users to file:', err);
//         } else {
//             console.log('User data saved to users.json');
//         }
//     });
// }

// // Load users when the server starts
// loadUsers();

// // Utility function to generate appointment ID
// function generateAppointmentId() {
//     return `HC${appointmentCounter++}`;
// }

// // ---------------- Routes ----------------

// // Always show login page at root. This must be the first route handled.
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'login.html'));
// });

// // Protect specific HTML pages. These must come BEFORE the general static file handler.
// app.get('/index.html', (req, res) => {
//     if (!req.session.user) {
//         return res.redirect('/');
//     }
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

// app.get('/doctors.html', (req, res) => {
//     if (!req.session.user) {
//         return res.redirect('/');
//     }
//     res.sendFile(path.join(__dirname, 'doctors.html'));
// });

// app.get('/health-checkup.html', (req, res) => {
//     if (!req.session.user) {
//         return res.redirect('/');
//     }
//     res.sendFile(path.join(__dirname, 'health-checkup.html'));
// });

// // Serve static files. This must be the last route in the sequence to prevent
// // it from bypassing the authentication checks on the protected pages.
// app.use(express.static('.'));

// // ---------------- Services API ----------------
// app.get('/api/services', (req, res) => {
//     try {
//         const data = fs.readFileSync(path.join(__dirname, 'data/services.json'), 'utf8');
//         res.json({ success: true, services: JSON.parse(data) });
//     } catch (error) {
//         console.error('Error reading services.json:', error);
//         res.status(500).json({ success: false, message: 'Failed to load services' });
//     }
// });

// // ---------------- Doctors API ----------------
// app.get('/api/doctors', (req, res) => {
//     try {
//         const data = fs.readFileSync(path.join(__dirname, 'data/doctors.json'), 'utf8');
//         res.json({ success: true, doctors: JSON.parse(data) });
//     } catch (error) {
//         console.error('Error reading doctors.json:', error);
//         res.status(500).json({ success: false, message: 'Failed to load doctors' });
//     }
// });

// // ---------------- Specialties API ----------------
// app.get('/api/specialties', (req, res) => {
//     try {
//         const data = fs.readFileSync(path.join(__dirname, 'data/specialties.json'), 'utf8');
//         res.json({ success: true, specialties: JSON.parse(data) });
//     } catch (error) {
//         console.error('Error reading specialties.json:', error);
//         res.status(500).json({ success: false, message: 'Failed to load specialties' });
//     }
// });

// // ---------------- Sign Up ----------------
// app.post('/api/signup', (req, res) => {
//     try {
//         const { fullName, email, password } = req.body;
//         if (!fullName || !email || !password) {
//             return res.status(400).json({ success: false, message: 'All fields are required' });
//         }

//         const existingUser = users.find(u => u.email === email);
//         if (existingUser) {
//             return res.status(400).json({ success: false, message: 'User already exists' });
//         }

//         const newUser = { id: users.length + 1, fullName, email, password, createdAt: new Date() };
//         users.push(newUser);
//         saveUsers(); // Save the new user to the file
//         res.json({ success: true, message: 'Account created successfully' });
//     } catch (error) {
//         console.error('Signup error:', error);
//         res.status(500).json({ success: false, message: 'Internal server error' });
//     }
// });

// // ---------------- Sign In ----------------
// app.post('/api/signin', (req, res) => {
//     try {
//         const { email, password } = req.body;
//         if (!email || !password) {
//             return res.status(400).json({ success: false, message: 'Email and password are required' });
//         }

//         const user = users.find(u => u.email === email && u.password === password);
//         if (!user) {
//             return res.status(401).json({ success: false, message: 'Invalid email or password' });
//         }

//         // Save minimal user info in session
//         req.session.user = { id: user.id, email: user.email, fullName: user.fullName };
//         res.json({ success: true, redirect: '/index.html', user: { id: user.id, fullName: user.fullName, email: user.email } });
//     } catch (error) {
//         console.error('Signin error:', error);
//         res.status(500).json({ success: false, message: 'Something went wrong!' });
//     }
// });

// // ---------------- Logout ----------------
// app.post('/api/logout', (req, res) => {
//     req.session.destroy(err => {
//         if (err) return res.status(500).json({ success: false, message: 'Logout failed' });
//         res.json({ success: true, message: 'Logged out successfully' });
//     });
// });

// // ---------------- Appointment Booking ----------------
// app.post('/api/appointments', (req, res) => {
//     try {
//         const appointmentData = req.body;
//         const requiredFields = ['fullName', 'email', 'age', 'location', 'appointmentDate', 'timeSlot', 'validId', 'concern'];
//         const missingFields = requiredFields.filter(field => !appointmentData[field]);

//         if (missingFields.length > 0) {
//             return res.status(400).json({ success: false, message: `Missing required fields: ${missingFields.join(', ')}` });
//         }

//         const appointmentId = generateAppointmentId();
//         const appointment = { id: appointmentId, ...appointmentData, status: 'confirmed', createdAt: new Date(), updatedAt: new Date() };
//         appointments.push(appointment);

//         // ✅ Save to file
//         fs.writeFileSync(DATA_FILE, JSON.stringify(appointments, null, 2), 'utf8');

//         console.log('New appointment booked:', { id: appointmentId, patient: appointmentData.fullName, date: appointmentData.appointmentDate, time: appointmentData.timeSlot, location: appointmentData.location });

//         res.json({ success: true, message: 'Appointment booked successfully', appointmentId, appointment });
//     } catch (error) {
//         console.error('Appointment booking error:', error);
//         res.status(500).json({ success: false, message: 'Internal server error' });
//     }
// });

// // ---------------- Get Appointments ----------------
// app.get('/api/appointments', (req, res) => {
//     res.json({ success: true, appointments, total: appointments.length });
// });

// app.get('/api/appointments/:id', (req, res) => {
//     const appointment = appointments.find(apt => apt.id === req.params.id);
//     if (!appointment) return res.status(404).json({ success: false, message: 'Appointment not found' });
//     res.json({ success: true, appointment });
// });

// // // ---------------- Add Appointment ----------------
// // app.post('/api/appointments', (req, res) => {
// //     const {
// //         fullName,
// //         age,
// //         email,
// //         phone,
// //         location,
// //         doctor,
// //         appointmentDate,
// //         timeSlot,
// //         validId,
// //         concern,
// //         insuranceProvider,
// //         policyNumber
// //     } = req.body;

// //     // Basic validation
// //     if (!fullName || !phone || !appointmentDate || !timeSlot) {
// //         return res.status(400).json({ success: false, message: 'Required fields missing' });
// //     }

// //     const newAppointment = {
// //         id: Date.now().toString(),
// //         fullName,
// //         age,
// //         email,
// //         phone,
// //         location,
// //         doctor,
// //         appointmentDate,
// //         timeSlot,
// //         validId,
// //         concern,
// //         insuranceProvider,
// //         policyNumber,
// //         createdAt: new Date().toISOString()
// //     };

// //     // push into memory
// //     appointments.push(newAppointment);

// //     // ✅ Save to file (persistent storage)
// //     const fs = require('fs');
// //     const path = require('path');
// //     const DATA_FILE = path.join(__dirname, 'appointments.json');

// //     try {
// //         fs.writeFileSync(DATA_FILE, JSON.stringify(appointments, null, 2), 'utf8');
// //     } catch (err) {
// //         console.error('Error saving appointment:', err);
// //         return res.status(500).json({ success: false, message: 'Failed to save appointment' });
// //     }

// //     res.json({ success: true, message: 'Appointment saved successfully', appointment: newAppointment });
// // });


// // ---------------- Health Check ----------------
// app.get('/api/health', (req, res) => {
//     res.json({ status: 'healthy', timestamp: new Date(), users: users.length, appointments: appointments.length });
// });

// // ---------------- Get Current User ----------------
// app.get('/api/current-user', (req, res) => {
//     if (req.session.user) {
//         // Find the user from the persistent storage to get the full profile.
//         const user = users.find(u => u.id === req.session.user.id);
//         if (user) {
//             res.json({ success: true, user: { id: user.id, fullName: user.fullName, email: user.email } });
//         } else {
//             req.session.destroy(); // Clear invalid session
//             res.status(401).json({ success: false, message: 'User not found, session cleared.' });
//         }
//     } else {
//         res.status(401).json({ success: false, message: 'Not logged in' });
//     }
// });


// // New Endpoints for Locations, Specialties, and Health Checkups
// app.get('/api/locations/:city', (req, res) => {
//     try {
//         const data = fs.readFileSync(path.join(__dirname, 'data/locations.json'), 'utf8');
//         const locations = JSON.parse(data);
//         const location = locations.find(loc => loc.id.toLowerCase() === req.params.city.toLowerCase());

//         if (!location) {
//             return res.status(404).json({ success: false, message: 'Location not found' });
//         }
//         res.json({ success: true, data: location });
//     } catch (error) {
//         res.status(500).json({ success: false, message: 'Failed to load location data' });
//     }
// });

// app.get('/api/specialties/:name', (req, res) => {
//     try {
//         const data = fs.readFileSync(path.join(__dirname, 'data/specialties.json'), 'utf8');
//         const specialties = JSON.parse(data);
//         const specialty = specialties.find(spec => spec.name.toLowerCase() === req.params.name.toLowerCase());

//         if (!specialty) {
//             return res.status(404).json({ success: false, message: 'Specialty not found' });
//         }
//         res.json({ success: true, data: specialty });
//     } catch (error) {
//         res.status(500).json({ success: false, message: 'Failed to load specialty data' });
//     }
// });

// app.get('/api/health-checkups', (req, res) => {
//     try {
//         const data = fs.readFileSync(path.join(__dirname, 'data/health-checkups.json'), 'utf8');
//         res.json({ success: true, packages: JSON.parse(data) });
//     } catch (error) {
//         res.status(500).json({ success: false, message: 'Failed to load health checkups' });
//     }
// });

// // New Endpoint to create a Razorpay order
// app.post('/api/create-order', async (req, res) => {
//     const { amount, receipt } = req.body;
//     try {
//         const order = await razorpay.orders.create({
//             amount: amount * 100, // Amount in paise
//             currency: 'INR',
//             receipt: receipt,
//             notes: {
//                 package: req.body.packageName
//             }
//         });
//         res.json({ success: true, orderId: order.id, amount: order.amount, currency: order.currency });
//     } catch (error) {
//         console.error('Error creating Razorpay order:', error);
//         res.status(500).json({ success: false, message: 'Failed to create payment order.' });
//     }
// });

// app.post('/api/verify-payment', (req, res) => {
//     const { orderId, paymentId, signature } = req.body;
//     const body = orderId + "|" + paymentId;
//     const expectedSignature = crypto.createHmac('sha256', razorpay.key_secret)
//         .update(body.toString())
//         .digest('hex');

//     if (expectedSignature === signature) {
//         console.log("Payment successful for order ID:", orderId);
//         res.json({ success: true, message: "Payment verified successfully" });
//     } else {
//         res.status(400).json({ success: false, message: "Payment verification failed" });
//     }
// });

// // ---------------- Error Handler ----------------
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).json({ success: false, message: 'Something went wrong!' });
// });

// // ---------------- Start Server ----------------
// app.listen(PORT, '0.0.0.0', () => {
//     console.log(`Healthcare website server running on http://localhost:${PORT}`);
//     console.log('Features available:');
//     console.log('- Static website serving');
//     console.log('- User registration and authentication with sessions');
//     console.log('- Appointment booking system');
//     console.log('- Services & specialties API');
//     console.log('- AI chatbot integration');
//     console.log('- RESTful API endpoints');
// });

// module.exports = app;

const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const session = require('express-session');
const Razorpay = require('razorpay');
const crypto = require('crypto');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const connectDB = require('./config/db');
const User = require('./models/User');
const Appointment = require('./models/Appointment');

// In-memory storage for users (to sync with users.json)
let users = [];
const usersFilePath = path.join(__dirname, 'data/users.json');

// Function to load users from file on server start
function loadUsers() {
    try {
        const data = fs.readFileSync(usersFilePath, 'utf8');
        users = JSON.parse(data);
        console.log(`Loaded ${users.length} users from users.json`);
    } catch (error) {
        console.log('No users.json file found or error reading it. Starting with empty user list.');
        users = [];
    }
}

// Function to save users to file after a change
function saveUsers() {
    fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), 'utf8', (err) => {
        if (err) {
            console.error('Error writing users to file:', err);
        } else {
            console.log('User data saved to users.json');
        }
    });
}

// Load users when the server starts
loadUsers();

// ---------------- Appointment Data Setup ----------------
const DATA_FILE = path.join(__dirname, 'data', 'appointments.json');

// ✅ Ensure the data folder and appointments.json file exist
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
}

if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, '[]', 'utf8'); // start with empty array
}

// Load existing appointments
let appointments = [];
try {
    if (fs.existsSync(DATA_FILE)) {
        const fileData = fs.readFileSync(DATA_FILE, 'utf8');
        appointments = JSON.parse(fileData) || [];
    }
} catch (err) {
    console.error('Error loading appointments:', err);
}

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// ---------------- Middleware ----------------
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'supersecretkey',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));

// ---------------- Razorpay Configuration ----------------
const razorpay = new Razorpay({
    key_id: 'rzp_test_p0xNqV2vU5n3Qp',
    key_secret: 'Rk0r0Y7K3o5f7Q4d8N9g0Z1x2P3x7w6s'
});

let appointmentCounter = 1000;

// Utility function to generate appointment ID
function generateAppointmentId() {
    return `HC${appointmentCounter++}`;
}

// ---------------- Routes ----------------

// Always show login page at root. This must be the first route handled.
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

// Protect specific HTML pages. These must come BEFORE the general static file handler.
// app.get('/index.html', (req, res) => {
//     if (!req.session.user) {
//         return res.redirect('/');
//     }
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

app.get('/doctors.html', (req, res) => {
    if (!req.session.user) {
        return res.redirect('/');
    }
    res.sendFile(path.join(__dirname, 'doctors.html'));
});

app.get('/health-checkup.html', (req, res) => {
    if (!req.session.user) {
        return res.redirect('/');
    }
    res.sendFile(path.join(__dirname, 'health-checkup.html'));
});

// Serve static files. This must be the last route in the sequence to prevent
// it from bypassing the authentication checks on the protected pages.
app.use(express.static('.'));

// ---------------- Services API ----------------
app.get('/api/services', (req, res) => {
    try {
        const data = fs.readFileSync(path.join(__dirname, 'data/services.json'), 'utf8');
        res.json({ success: true, services: JSON.parse(data) });
    } catch (error) {
        console.error('Error reading services.json:', error);
        res.status(500).json({ success: false, message: 'Failed to load services' });
    }
});

// ---------------- Doctors API ----------------
app.get('/api/doctors', (req, res) => {
    try {
        const data = fs.readFileSync(path.join(__dirname, 'data/doctors.json'), 'utf8');
        res.json({ success: true, doctors: JSON.parse(data) });
    } catch (error) {
        console.error('Error reading doctors.json:', error);
        res.status(500).json({ success: false, message: 'Failed to load doctors' });
    }
});

// ---------------- Specialties API ----------------
app.get('/api/specialties', (req, res) => {
    try {
        const data = fs.readFileSync(path.join(__dirname, 'data/specialties.json'), 'utf8');
        res.json({ success: true, specialties: JSON.parse(data) });
    } catch (error) {
        console.error('Error reading specialties.json:', error);
        res.status(500).json({ success: false, message: 'Failed to load specialties' });
    }
});

app.post('/api/signup', async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ fullName, email, password: hashedPassword });
    await newUser.save();

    // Also save to users.json (keep plain text for sync, but ideally hash here too)
    const newUserJson = { id: users.length + 1, fullName, email, password, createdAt: new Date() };
    users.push(newUserJson);
    saveUsers();

    res.json({ success: true, message: 'Account created successfully' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

app.post('/api/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    let isMatch;
    if (user.password.startsWith('$2b$')) {
      // Hashed password
      isMatch = await bcrypt.compare(password, user.password);
    } else {
      // Plain text password (for existing users)
      isMatch = password === user.password;
    }

    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    // Save minimal user info in session
    req.session.user = { id: user._id, email: user.email, fullName: user.fullName };
    res.json({ success: true, redirect: '/index.html', user: { id: user._id, fullName: user.fullName, email: user.email } });
  } catch (error) {
    console.error('Signin error:', error);
    res.status(500).json({ success: false, message: 'Something went wrong!' });
  }
});

// ---------------- Logout ----------------
app.post('/api/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) return res.status(500).json({ success: false, message: 'Logout failed' });
        res.json({ success: true, message: 'Logged out successfully' });
    });
});

// ...existing code...
app.post('/api/appointments', (req, res) => {
    console.log('Received appointment data:', req.body); // Debug log

    try {
        const appointmentData = req.body;
        const requiredFields = ['fullName', 'email', 'age', 'location', 'appointmentDate', 'timeSlot', 'validId', 'concern'];
        const missingFields = requiredFields.filter(field => !appointmentData[field]);

        if (missingFields.length > 0) {
            console.log('Missing fields:', missingFields); // Debug log
            return res.status(400).json({ success: false, message: `Missing required fields: ${missingFields.join(', ')}` });
        }

        const appointmentId = generateAppointmentId();
        const appointment = { id: appointmentId, ...appointmentData, status: 'confirmed', createdAt: new Date(), updatedAt: new Date() };
        appointments.push(appointment);

        // Save to file with error handling
        try {
            fs.writeFileSync(DATA_FILE, JSON.stringify(appointments, null, 2), 'utf8');
            console.log('Appointment saved to file:', appointment); // Debug log
        } catch (fileErr) {
            console.error('Error writing to appointments.json:', fileErr);
            return res.status(500).json({ success: false, message: 'Failed to save appointment' });
        }

        res.json({ success: true, message: 'Appointment booked successfully', appointmentId, appointment });
    } catch (error) {
        console.error('Appointment booking error:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});
// ...existing code...

// ---------------- Get Appointments ----------------
app.get('/api/appointments', (req, res) => {
    res.json({ success: true, appointments, total: appointments.length });
});

app.get('/api/appointments/:id', (req, res) => {
    const appointment = appointments.find(apt => apt.id === req.params.id);
    if (!appointment) return res.status(404).json({ success: false, message: 'Appointment not found' });
    res.json({ success: true, appointment });
});

// ---------------- Health Check ----------------
app.get('/api/health', (req, res) => {
    res.json({ status: 'healthy', timestamp: new Date(), users: users.length, appointments: appointments.length });
});

// ---------------- Get Current User ----------------
app.get('/api/current-user', async (req, res) => {
    if (req.session.user) {
        try {
            const user = await User.findById(req.session.user.id);
            if (user) {
                res.json({ success: true, user: { id: user._id, fullName: user.fullName, email: user.email } });
            } else {
                req.session.destroy(); // Clear invalid session
                res.status(401).json({ success: false, message: 'User not found, session cleared.' });
            }
        } catch (error) {
            console.error('Error fetching current user:', error);
            res.status(500).json({ success: false, message: 'Internal server error' });
        }
    } else {
        res.status(401).json({ success: false, message: 'Not logged in' });
    }
});

// New Endpoints for Locations, Specialties, and Health Checkups
app.get('/api/locations/:city', (req, res) => {
    try {
        const data = fs.readFileSync(path.join(__dirname, 'data/locations.json'), 'utf8');
        const locations = JSON.parse(data);
        const location = locations.find(loc => loc.id.toLowerCase() === req.params.city.toLowerCase());

        if (!location) {
            return res.status(404).json({ success: false, message: 'Location not found' });
        }
        res.json({ success: true, data: location });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to load location data' });
    }
});

app.get('/api/specialties/:name', (req, res) => {
    try {
        const data = fs.readFileSync(path.join(__dirname, 'data/specialties.json'), 'utf8');
        const specialties = JSON.parse(data);
        const specialty = specialties.find(spec => spec.name.toLowerCase() === req.params.name.toLowerCase());

        if (!specialty) {
            return res.status(404).json({ success: false, message: 'Specialty not found' });
        }
        res.json({ success: true, data: specialty });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to load specialty data' });
    }
});

app.get('/api/health-checkups', (req, res) => {
    try {
        const data = fs.readFileSync(path.join(__dirname, 'data/health-checkups.json'), 'utf8');
        res.json({ success: true, packages: JSON.parse(data) });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to load health checkups' });
    }
});

// New Endpoint to create a Razorpay order
app.post('/api/create-order', async (req, res) => {
    const { amount, receipt } = req.body;
    try {
        const order = await razorpay.orders.create({
            amount: amount * 100, // Amount in paise
            currency: 'INR',
            receipt: receipt,
            notes: {
                package: req.body.packageName
            }
        });
        res.json({ success: true, orderId: order.id, amount: order.amount, currency: order.currency });
    } catch (error) {
        console.error('Error creating Razorpay order:', error);
        res.status(500).json({ success: false, message: 'Failed to create payment order.' });
    }
});

app.post('/api/verify-payment', (req, res) => {
    const { orderId, paymentId, signature } = req.body;
    const body = orderId + "|" + paymentId;
    const expectedSignature = crypto.createHmac('sha256', razorpay.key_secret)
        .update(body.toString())
        .digest('hex');

    if (expectedSignature === signature) {
        console.log("Payment successful for order ID:", orderId);
        res.json({ success: true, message: "Payment verified successfully" });
    } else {
        res.status(400).json({ success: false, message: "Payment verification failed" });
    }
});

// ---------------- Error Handler ----------------
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: 'Something went wrong!' });
});

// ---------------- Start Server ----------------
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Healthcare website server running on http://localhost:${PORT}`);
    console.log('Features available:');
    console.log('- Static website serving');
    console.log('- User registration and authentication with sessions');
    console.log('- Appointment booking system');
    console.log('- Services & specialties API');
    console.log('- AI chatbot integration');
    console.log('- RESTful API endpoints');
});

module.exports = app;