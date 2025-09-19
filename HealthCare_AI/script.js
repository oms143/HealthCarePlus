// Add this to the very top of script.js
const translations = {
    en: {
        "page-title": "HealthCare Plus - Excellence in Medical Care",
        "logo-text": "HealthCare Plus",
        "nav-locations": "Locations",
        "nav-specialties": "Specialties",
        "specialty-cardiology": "Cardiology",
        "specialty-neurology": "Neurology",
        "specialty-oncology": "Oncology",
        "specialty-orthopedics": "Orthopedics",
        "specialty-gastroenterology": "Gastroenterology",
        "specialty-pediatrics": "Pediatrics",
        "nav-find-doctors": "Find Doctors",
        "nav-services": "Services",
        "nav-book-appointment": "Book Appointment",
        "nav-health-checkup": "Health Checkup",
        "btn-book-appointment": "Book Appointment",
        "btn-emergency": "Emergency",
        "hero-title": "Excellence in Healthcare",
        "hero-subtitle": "Experience world-class medical care with our team of expert doctors and state-of-the-art facilities. Your health is our priority.",
        "btn-consultation": "Book Consultation",
        "btn-virtual-care": "Virtual Care",
        "find-care": "Find Care",
        "tab-find-doctor": "Find Doctor",
        "tab-specialty": "Specialty",
        "tab-condition": "Condition",
        "search-placeholder": "Search doctors, specialties, or conditions...",
        "btn-search": "Search",
        "specialties-title": "Our Specialties",
        "specialties-subtitle": "Comprehensive medical care across all specialties",
        "cardiac-care": "Cardiac Care",
        "cardiac-care-desc": "Advanced heart care with cutting-edge technology",
        "neurosciences": "Neurosciences",
        "neurosciences-desc": "Expert neurological care and brain surgery",
        "cancer-care": "Cancer Care",
        "cancer-care-desc": "Comprehensive oncology treatment and support",
        "orthopedics": "Orthopedics",
        "orthopedics-desc": "Joint replacement and bone care specialists",
        "gastroenterology": "Gastroenterology",
        "gastroenterology-desc": "Digestive system care and treatment",
        "pediatrics": "Pediatrics",
        "pediatrics-desc": "Specialized care for children of all ages",
        "services-title": "Our Services",
        "services-subtitle": "Comprehensive healthcare solutions for you and your family",
        "home-care": "Home Care",
        "home-care-desc": "Professional medical care in the comfort of your home",
        "learn-more": "Learn More",
        "telemedicine": "Telemedicine",
        "telemedicine-desc": "Connect with our doctors virtually from anywhere",
        "emergency-care": "Emergency Care",
        "emergency-care-desc": "24/7 emergency medical services and trauma care",
        "pharmacy": "Pharmacy",
        "pharmacy-desc": "Reliable medication delivery to your doorstep",
        "diagnostics": "Diagnostics",
        "diagnostics-desc": "Advanced lab tests and imaging services",
        "health-checkup": "Health Checkup",
        "health-checkup-desc": "Comprehensive health screening packages",
        "model-title": "Our Model of Care",
        "model-subtitle": "Five pillars of excellence that define our approach to healthcare",
        "pillar-talent": "Expert Clinical Talent",
        "pillar-talent-desc": "World-class doctors and medical professionals",
        "pillar-infrastructure": "Advanced Infrastructure",
        "pillar-infrastructure-desc": "State-of-the-art medical facilities and equipment",
        "pillar-technology": "Latest Technology",
        "pillar-technology-desc": "Cutting-edge medical technology and innovations",
        "pillar-processes": "Quality Processes",
        "pillar-processes-desc": "Systematic and standardized care delivery",
        "pillar-compassion": "Compassionate Care",
        "pillar-compassion-desc": "Patient-centered approach with empathy and trust",
        "appointment-title": "Book Your Appointment",
        "appointment-subtitle": "Fill in your details to schedule a consultation with our expert doctors",
        "btn-sign-in": "Sign In",
        "btn-sign-up": "Sign Up",
        "btn-continue-guest": "Continue as Guest",
        "signin-form-title": "Sign In to Your Account",
        "label-email": "Email Address",
        "label-password": "Password",
        "signin-no-account": "Don't have an account?",
        "link-signup-here": "Sign up here",
        "signup-form-title": "Create New Account",
        "label-full-name": "Full Name",
        "label-confirm-password": "Confirm Password",
        "btn-create-account": "Create Account",
        "signup-have-account": "Already have an account?",
        "link-signin-here": "Sign in here",
        "guest-form-title": "Customer Details & Appointment Information",
        "personal-info-title": "Personal Information",
        "label-full-name-star": "Full Name *",
        "label-age-star": "Age *",
        "label-email-star": "Email Address *",
        "label-phone-star": "Phone Number *",
        "label-blood-group": "Blood Group",
        "select-blood-group": "Select Blood Group",
        "label-gender": "Gender",
        "select-gender": "Select Gender",
        "gender-male": "Male",
        "gender-female": "Female",
        "gender-other": "Other",
        "location-details-title": "Location & Appointment Details",
        "label-location-star": "Preferred Location *",
        "select-location": "Select Location",
        "location-mumbai": "Mumbai Central",
        "location-delhi": "Delhi NCR",
        "location-bangalore": "Bangalore",
        "location-chennai": "Chennai",
        "location-hyderabad": "Hyderabad",
        "label-specific-doctor": "Specific Doctor (Optional)",
        "select-any-doctor": "Any Available Doctor",
        "doctor-sharma": "Dr. Rajesh Sharma - Cardiologist",
        "doctor-patel": "Dr. Priya Patel - Neurologist",
        "doctor-singh": "Dr. Amit Singh - Orthopedic",
        "doctor-gupta": "Dr. Sunita Gupta - Gynecologist",
        "doctor-kumar": "Dr. Vikram Kumar - Pediatrician",
        "label-date-star": "Preferred Date *",
        "label-time-slot-star": "Time Slot *",
        "select-time-slot": "Select Time Slot",
        "time-900": "09:00 AM - 09:30 AM",
        "time-930": "09:30 AM - 10:00 AM",
        "time-1000": "10:00 AM - 10:30 AM",
        "time-1030": "10:30 AM - 11:00 AM",
        "time-1100": "11:00 AM - 11:30 AM",
        "time-1400": "02:00 PM - 02:30 PM",
        "time-1430": "02:30 PM - 03:00 PM",
        "time-1500": "03:00 PM - 03:30 PM",
        "time-1530": "03:30 PM - 04:00 PM",
        "time-1600": "04:00 PM - 04:30 PM",
        "medical-info-title": "Medical Information",
        "label-prev-report": "Previous Health Report Number",
        "placeholder-report-number": "Enter report number if available",
        "label-valid-id-star": "Valid ID Number *",
        "placeholder-id-number": "Aadhar/PAN/Passport Number",
        "label-concern-star": "Brief Information about Your Concern *",
        "placeholder-concern": "Please describe your health concern or reason for visit...",
        "insurance-info-title": "Insurance Information",
        "label-insurance-provider": "Insurance Provider",
        "select-insurance-provider": "Select Insurance Provider",
        "insurance-none": "No Insurance",
        "insurance-lic": "LIC India",
        "insurance-icici": "ICICI Lombard",
        "insurance-hdfc": "HDFC ERGO",
        "insurance-bajaj": "Bajaj Allianz",
        "insurance-star": "Star Health",
        "insurance-other": "Other",
        "label-policy-number": "Policy Number",
        "placeholder-policy-number": "Enter policy number if applicable",
        "btn-book-appointment-final": "Book Appointment",
        "form-disclaimer": "By submitting this form, you agree to our <a href='#' data-translate='link-terms'>Terms of Service</a> and <a href='#' data-translate='link-privacy'>Privacy Policy</a>",
        "link-terms": "Terms of Service",
        "link-privacy": "Privacy Policy",
        "footer-description": "Excellence in healthcare with compassionate care and advanced medical solutions.",
        "footer-quick-links-title": "Quick Links",
        "footer-find-doctors": "Find Doctors",
        "footer-book-appointment": "Book Appointment",
        "footer-emergency-care": "Emergency Care",
        "footer-health-checkup": "Health Checkup",
        "footer-specialties-title": "Specialties",
        "footer-contact-info-title": "Contact Info",
        "footer-copyright": "© 2025 HealthCare Plus. All rights reserved."
    },
    hi: {
        "page-title": "हेल्थकेयर प्लस - चिकित्सा देखभाल में उत्कृष्टता",
        "logo-text": "हेल्थकेयर प्लस",
        "nav-locations": "स्थान",
        "nav-specialties": "विशेषज्ञता",
        "specialty-cardiology": "हृदय रोग विज्ञान",
        "specialty-neurology": "स्नायु विज्ञान",
        "specialty-oncology": "ऑन्कोलॉजी",
        "specialty-orthopedics": "हड्डी रोग विज्ञान",
        "specialty-gastroenterology": "गैस्ट्रोएंटरोलॉजी",
        "specialty-pediatrics": "बाल चिकित्सा",
        "nav-find-doctors": "डॉक्टर खोजें",
        "nav-services": "सेवाएं",
        "nav-book-appointment": "अपॉइंटमेंट बुक करें",
        "nav-health-checkup": "स्वास्थ्य जांच",
        "btn-book-appointment": "अपॉइंटमेंट बुक करें",
        "btn-emergency": "आपातकाल",
        "hero-title": "स्वास्थ्य सेवा में उत्कृष्टता",
        "hero-subtitle": "विशेषज्ञ डॉक्टरों और अत्याधुनिक सुविधाओं की हमारी टीम के साथ विश्व स्तरीय चिकित्सा देखभाल का अनुभव करें। आपका स्वास्थ्य हमारी प्राथमिकता है।",
        "btn-consultation": "परामर्श बुक करें",
        "btn-virtual-care": "वर्चुअल केयर",
        "find-care": "देखभाल खोजें",
        "tab-find-doctor": "डॉक्टर खोजें",
        "tab-specialty": "विशेषज्ञता",
        "tab-condition": "बीमारी",
        "search-placeholder": "डॉक्टरों, विशेषज्ञताओं, या बीमारियों को खोजें...",
        "btn-search": "खोजें",
        "specialties-title": "हमारी विशेषज्ञता",
        "specialties-subtitle": "सभी विशेषज्ञताओं में व्यापक चिकित्सा देखभाल",
        "cardiac-care": "हृदय देखभाल",
        "cardiac-care-desc": "अत्याधुनिक तकनीक के साथ उन्नत हृदय देखभाल",
        "neurosciences": "न्यूरोसाइंसेस",
        "neurosciences-desc": "विशेषज्ञ न्यूरोलॉजिकल देखभाल और मस्तिष्क सर्जरी",
        "cancer-care": "कैंसर देखभाल",
        "cancer-care-desc": "व्यापक ऑन्कोलॉजी उपचार और सहायता",
        "orthopedics": "ऑर्थोपेडिक्स",
        "orthopedics-desc": "जोड़ प्रतिस्थापन और हड्डी देखभाल विशेषज्ञ",
        "gastroenterology": "गैस्ट्रोएंटरोलॉजी",
        "gastroenterology-desc": "पाचन तंत्र की देखभाल और उपचार",
        "pediatrics": "बाल चिकित्सा",
        "pediatrics-desc": "सभी उम्र के बच्चों के लिए विशेष देखभाल",
        "services-title": "हमारी सेवाएं",
        "services-subtitle": "आपके और आपके परिवार के लिए व्यापक स्वास्थ्य देखभाल समाधान",
        "home-care": "होम केयर",
        "home-care-desc": "आपके घर के आराम में पेशेवर चिकित्सा देखभाल",
        "learn-more": "और जानें",
        "telemedicine": "टेलीमेडिसिन",
        "telemedicine-desc": "कहीं से भी हमारे डॉक्टरों से वर्चुअली जुड़ें",
        "emergency-care": "आपातकालीन देखभाल",
        "emergency-care-desc": "24/7 आपातकालीन चिकित्सा सेवाएं और ट्रॉमा देखभाल",
        "pharmacy": "फार्मेसी",
        "pharmacy-desc": "आपके दरवाजे पर विश्वसनीय दवा वितरण",
        "diagnostics": "डायग्नोस्टिक्स",
        "diagnostics-desc": "उन्नत लैब टेस्ट और इमेजिंग सेवाएं",
        "health-checkup": "स्वास्थ्य जांच",
        "health-checkup-desc": "व्यापक स्वास्थ्य जांच पैकेज",
        "model-title": "हमारी देखभाल का मॉडल",
        "model-subtitle": "उत्कृष्टता के पांच स्तंभ जो स्वास्थ्य देखभाल के प्रति हमारे दृष्टिकोण को परिभाषित करते हैं",
        "pillar-talent": "विशेषज्ञ क्लिनिकल प्रतिभा",
        "pillar-talent-desc": "विश्व स्तरीय डॉक्टर और चिकित्सा पेशेवर",
        "pillar-infrastructure": "उन्नत बुनियादी ढांचा",
        "pillar-infrastructure-desc": "अत्याधुनिक चिकित्सा सुविधाएं और उपकरण",
        "pillar-technology": "नवीनतम तकनीक",
        "pillar-technology-desc": "अत्याधुनिक चिकित्सा तकनीक और नवाचार",
        "pillar-processes": "गुणवत्ता प्रक्रियाएं",
        "pillar-processes-desc": "व्यवस्थित और मानकीकृत देखभाल वितरण",
        "pillar-compassion": "करुणापूर्ण देखभाल",
        "pillar-compassion-desc": "सहानुभूति और विश्वास के साथ रोगी-केंद्रित दृष्टिकोण",
        "appointment-title": "अपना अपॉइंटमेंट बुक करें",
        "appointment-subtitle": "हमारे विशेषज्ञ डॉक्टरों के साथ परामर्श निर्धारित करने के लिए अपना विवरण भरें",
        "btn-sign-in": "साइन इन करें",
        "btn-sign-up": "साइन अप करें",
        "btn-continue-guest": "अतिथि के रूप में जारी रखें",
        "signin-form-title": "अपने खाते में साइन इन करें",
        "label-email": "ईमेल पता",
        "label-password": "पासवर्ड",
        "signin-no-account": "खाता नहीं है?",
        "link-signup-here": "यहां साइन अप करें",
        "signup-form-title": "नया खाता बनाएं",
        "label-full-name": "पूरा नाम",
        "label-confirm-password": "पासवर्ड की पुष्टि करें",
        "btn-create-account": "खाता बनाएं",
        "signup-have-account": "पहले से ही एक खाता है?",
        "link-signin-here": "यहां साइन इन करें",
        "guest-form-title": "ग्राहक विवरण और अपॉइंटमेंट जानकारी",
        "personal-info-title": "व्यक्तिगत जानकारी",
        "label-full-name-star": "पूरा नाम *",
        "label-age-star": "उम्र *",
        "label-email-star": "ईमेल पता *",
        "label-phone-star": "फ़ोन नंबर *",
        "label-blood-group": "रक्त समूह",
        "select-blood-group": "रक्त समूह चुनें",
        "label-gender": "लिंग",
        "select-gender": "लिंग चुनें",
        "gender-male": "पुरुष",
        "gender-female": "महिला",
        "gender-other": "अन्य",
        "location-details-title": "स्थान और अपॉइंटमेंट विवरण",
        "label-location-star": "पसंदीदा स्थान *",
        "select-location": "स्थान चुनें",
        "location-mumbai": "मुंबई सेंट्रल",
        "location-delhi": "दिल्ली एनसीआर",
        "location-bangalore": "बैंगलोर",
        "location-chennai": "चेन्नई",
        "location-hyderabad": "हैदराबाद",
        "label-specific-doctor": "विशेष डॉक्टर (वैकल्पिक)",
        "select-any-doctor": "कोई भी उपलब्ध डॉक्टर",
        "doctor-sharma": "डॉ. राजेश शर्मा - हृदय रोग विशेषज्ञ",
        "doctor-patel": "डॉ. प्रिया पटेल - न्यूरोलॉजिस्ट",
        "doctor-singh": "डॉ. अमित सिंह - हड्डी रोग विशेषज्ञ",
        "doctor-gupta": "डॉ. सुनीता गुप्ता - स्त्री रोग विशेषज्ञ",
        "doctor-kumar": "डॉ. विक्रम कुमार - बाल रोग विशेषज्ञ",
        "label-date-star": "पसंदीदा तिथि *",
        "label-time-slot-star": "समय स्लॉट *",
        "select-time-slot": "समय स्लॉट चुनें",
        "time-900": "09:00 AM - 09:30 AM",
        "time-930": "09:30 AM - 10:00 AM",
        "time-1000": "10:00 AM - 10:30 AM",
        "time-1030": "10:30 AM - 11:00 AM",
        "time-1100": "11:00 AM - 11:30 AM",
        "time-1400": "02:00 PM - 02:30 PM",
        "time-1430": "02:30 PM - 03:00 PM",
        "time-1500": "03:00 PM - 03:30 PM",
        "time-1530": "03:30 PM - 04:00 PM",
        "time-1600": "04:00 PM - 04:30 PM",
        "medical-info-title": "चिकित्सा जानकारी",
        "label-prev-report": "पिछली स्वास्थ्य रिपोर्ट संख्या",
        "placeholder-report-number": "यदि उपलब्ध हो तो रिपोर्ट संख्या दर्ज करें",
        "label-valid-id-star": "वैध आईडी नंबर *",
        "placeholder-id-number": "आधार/पैन/पासपोर्ट नंबर",
        "label-concern-star": "आपकी चिंता के बारे में संक्षिप्त जानकारी *",
        "placeholder-concern": "कृपया अपनी स्वास्थ्य चिंता या यात्रा का कारण बताएं...",
        "insurance-info-title": "बीमा जानकारी",
        "label-insurance-provider": "बीमा प्रदाता",
        "select-insurance-provider": "बीमा प्रदाता चुनें",
        "insurance-none": "कोई बीमा नहीं",
        "insurance-lic": "एलआईसी इंडिया",
        "insurance-icici": "आईसीआईसीआई लोम्बार्ड",
        "insurance-hdfc": "एचडीएफसी एर्गो",
        "insurance-bajaj": "बजाज आलियांज",
        "insurance-star": "स्टार हेल्थ",
        "insurance-other": "अन्य",
        "label-policy-number": "पॉलिसी नंबर",
        "placeholder-policy-number": "यदि लागू हो तो पॉलिसी नंबर दर्ज करें",
        "btn-book-appointment-final": "अपॉइंटमेंट बुक करें",
        "form-disclaimer": "यह फॉर्म सबमिट करके, आप हमारी <a href='#' data-translate='link-terms'>सेवा की शर्तों</a> और <a href='#' data-translate='link-privacy'>गोपनीयता नीति</a> से सहमत होते हैं",
        "link-terms": "सेवा की शर्तें",
        "link-privacy": "गोपनीयता नीति",
        "footer-description": "करुणापूर्ण देखभाल और उन्नत चिकित्सा समाधानों के साथ स्वास्थ्य सेवा में उत्कृष्टता।",
        "footer-quick-links-title": "त्वरित लिंक",
        "footer-find-doctors": "डॉक्टर खोजें",
        "footer-book-appointment": "अपॉइंटमेंट बुक करें",
        "footer-emergency-care": "आपातकालीन देखभाल",
        "footer-health-checkup": "स्वास्थ्य जांच",
        "footer-specialties-title": "विशेषज्ञता",
        "footer-contact-info-title": "संपर्क जानकारी",
        "footer-copyright": "© 2025 हेल्थकेयर प्लस। सर्वाधिकार सुरक्षित।"
    }
};


// Update elements with translations
function updateContent(lang) {
    const content = translations[lang];
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (content[key]) el.textContent = content[key];
    });
}
function changeLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
    updateContent(lang);
}

// ======================== FORM MANAGEMENT CLASS ========================
class FormManager {
    constructor() {
        this.currentForm = "signin";
        this.initializeFormSwitching();
        this.initializeFormSubmissions();
        this.setMinDate();
    }

    // Switch Signin/Signup/Guest forms
    initializeFormSwitching() {
        document.querySelectorAll(".auth-btn").forEach(btn => {
            btn.addEventListener("click", () => this.switchForm(btn.getAttribute("data-form")));
        });
        document.querySelectorAll(".link-text").forEach(link => {
            link.addEventListener("click", () => this.switchForm(link.getAttribute("data-switch")));
        });
    }

    switchForm(formType) {
        document.querySelectorAll(".auth-btn").forEach(btn => {
            btn.classList.toggle("active", btn.getAttribute("data-form") === formType);
        });
        document.querySelectorAll(".auth-form").forEach(form => {
            form.classList.toggle("active", form.id === `${formType}-form`);
        });
        this.currentForm = formType;
    }

    // Handle Signin/Signup/Appointment
    initializeFormSubmissions() {
        const signinForm = document.getElementById("signin-form-data");
        if (signinForm) signinForm.addEventListener("submit", e => this.handleSignIn(e));

        const signupForm = document.getElementById("signup-form-data");
        if (signupForm) signupForm.addEventListener("submit", e => this.handleSignUp(e));

        const guestForm = document.getElementById("guest-form-data");
        if (guestForm) guestForm.addEventListener("submit", e => this.handleAppointment(e));
    }

    // Date validation for appointment
    setMinDate() {
        const dateInput = document.getElementById("appointment-date");
        if (dateInput) {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            dateInput.min = tomorrow.toISOString().split("T")[0];
        }
    }

    async handleSignIn(e) {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target));

        // Fake auth: check localStorage
        const savedUser = JSON.parse(localStorage.getItem("user"));
        if (savedUser && savedUser.email === data.email && savedUser.password === data.password) {
            alert("✅ Sign in successful!");
            localStorage.setItem("currentUser", JSON.stringify(savedUser));
            this.switchForm("guest");
            this.populateUserData(savedUser);
        } else {
            alert("❌ Invalid credentials.");
        }
    }

    async handleSignUp(e) {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target));

        if (data.password !== data.confirmPassword) {
            alert("❌ Passwords do not match.");
            return;
        }

        localStorage.setItem("user", JSON.stringify(data));
        alert("🎉 Account created! Please sign in.");
        this.switchForm("signin");
    }

    async handleAppointment(e) {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target));
        alert(`🎉 Appointment booked for ${data.fullName} on ${data.appointmentDate} at ${data.timeSlot}`);
        e.target.reset();
    }

    populateUserData(user) {
        if (user) {
            const nameField = document.getElementById("customer-name");
            const emailField = document.getElementById("customer-email");
            if (nameField) nameField.value = user.fullName;
            if (emailField) emailField.value = user.email;
        }
    }
}

// ======================== AUTH GUARD WITH PUBLIC PAGES ========================
function loadCurrentUser() {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
        const welcomeEl = document.getElementById("welcomeUser");
        if (welcomeEl) welcomeEl.textContent = `Welcome, ${user.fullName}`;
    }
}
const publicPages = ["index.html", "doctor.html", "health-checkup.html", "virtual-care.html"];
const currentPage = window.location.pathname.split("/").pop();
if (!publicPages.includes(currentPage)) {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user) window.location.href = "login.html"; // Redirect only for protected pages
}

// ======================== LOGOUT FUNCTIONALITY ========================
function setupLogout() {
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("currentUser");
            window.location.href = "login.html";
        });
    }
}

// ======================== UPDATE HEALTH CHECKUP AND VIRTUAL CARE LINKS ========================
function setupLinks() {
    const healthCheckBtn = document.getElementById("healthCheckBtn");
    if (healthCheckBtn) {
        healthCheckBtn.addEventListener("click", () => {
            window.location.href = "health-checkup.html";
        });
    }

    const virtualCareBtn = document.getElementById("virtualCareBtn");
    if (virtualCareBtn) {
        virtualCareBtn.addEventListener("click", () => {
            window.location.href = "virtual-care.html";
        });
    }
}

// ======================== EMERGENCY BUTTON FUNCTIONALITY ========================
function setupEmergency() {
    const emergencyBtn = document.getElementById("emergencyBtn");
    if (emergencyBtn) {
        emergencyBtn.addEventListener("click", () => {
            const confirmCall = confirm("⚠️ Are you sure you want to call Emergency (108)?");
            if (confirmCall) {
                window.location.href = "tel:108"; // 📞 Opens phone dialer
            }
        });
    }
}
setupEmergency();



// ======================== INIT ON PAGE LOAD ========================
document.addEventListener("DOMContentLoaded", () => {
    // Apply saved language
    const lang = localStorage.getItem("preferredLanguage") || "en";
    updateContent(lang);

    // Start form manager
    new FormManager();

    // Load user if logged in
    loadCurrentUser();

    // Setup buttons and logout
    setupLogout();
    setupLinks();
    setupEmergency();
});
