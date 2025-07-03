import {
    Brain,
    Eye,
    Building,
    MessageCircle,
    Heart,
    AlertCircle,
    Bell,
    Users,
    ClipboardList,
    NotebookPen,
    CalendarCheck2,
    Activity,
    FileText,
    FolderSearch,
    Map
  } from "lucide-react";
  
  export const projects2 = {
    Maskwa: {
      title: "Maskwa",
      subtitle: "Traditional Land Verification & Management System",
      description:
        "Maskwa streamlines the verification and approval of traditional land holdings. It allows landowners to validate ownership and usability before construction through GPS mapping, digital records, and structured workflows.",
      
      carouselSlides: [
        "/Maskwa/Maskwa11.png",
        "/Maskwa/Maskwa1.png",
        "/Maskwa/Maskwa2.png",
        "/Maskwa/Maskwa3.png",
        "/Maskwa/Maskwa4.png",
      ],
      features: [
        {
          icon: <ClipboardList className="w-8 h-8" />,
          title: "Land Mapping System",
          description: "Visual representation of land plots with GPS coordinates.",
        },
        {
          icon: <Users className="w-8 h-8" />,
          title: "Multi-System Authentication",
          description:
            "Secure access for landowners, approvers, and administrators.",
        },
        {
          icon: <Bell className="w-8 h-8" />,
          title: "Smart Notification Alerts",
          description: "Real-time updates on approvals and document changes.",
        },
        {
          icon: <FolderSearch className="w-8 h-8" />,
          title: "Web Crawler Integration",
          description:
            "Fetches public records for automatic cross-verification of documents.",
        },
        {
          icon: <FileText className="w-8 h-8" />,
          title: "Digital Storage",
          description: "Upload and store deeds, ownership proofs, and records.",
        },
        {
          icon: <ClipboardList className="w-8 h-8" />,
          title: "Approval Workflow System",
          description: "Step-by-step approval process with tracking.",
        },
      ],
    },
    VBOIL: {
      title: "VBOIL",
      subtitle: "Oil Waste Resource Collection Platform",
      description:
        "VBOIL is an eco-friendly logistics platform for oil companies to collect used oil, water, and plastic waste from restaurants. It enables request booking, driver tracking, and smart scheduling.",
        carouselSlides: [
            "/VBOIL/Vboil1.png",
            "/VBOIL/Vboil2.png",
            "/VBOIL/Vboil3.png",
            "/VBOIL/Vboil4.png",
          ],
      features: [
        {
          icon: <Eye className="w-8 h-8" />,
          title: "Live Driver Tracker",
          description: "Track drivers in real time during collections.",
        },
        {
          icon: <Bell className="w-8 h-8" />,
          title: "Smart Notifications",
          description: "Pickup alerts for customers and drivers.",
        },
        {
          icon: <CalendarCheck2 className="w-8 h-8" />,
          title: "Pickup Scheduling",
          description:
            "Customers can book pickups by selecting date and time slots.",
        },
        {
          icon: <Activity className="w-8 h-8" />,
          title: "Resource Monitoring",
          description: "Track oil, water, and plastic collected per trip.",
        },
        {
          icon: <Building className="w-8 h-8" />,
          title: "Driver Assignment & Routing",
          description:
            "Optimizes driver routes based on location and resource availability.",
        },
        {
          icon: <ClipboardList className="w-8 h-8" />,
          title: "Admin Dashboard",
          description: "Overview of collection data, trip logs, and performance.",
        },
      ],
    },
    SPYK: {
      title: "Spyk Health",
      subtitle: "AI-Powered Personal Health Tracker",
      description:
        "Spyk Health improves daily wellness by tracking food, sleep, activity, and vitals, integrating with wearables, and offering intelligent health tips.",
        carouselSlides: [
           "/Spyk-health.png"
          ],
      features: [
        {
          icon: <Heart className="w-8 h-8" />,
          title: "Health Dashboard",
          description: "Monitor daily vitals and habits at a glance.",
        },
        {
          icon: <NotebookPen className="w-8 h-8" />,
          title: "Diet & Lifestyle Tracking",
          description: "Log food, activity, and sleep to analyze patterns.",
        },
        {
          icon: <Eye className="w-8 h-8" />,
          title: "Smartwatch Integration",
          description: "Sync real-time data from wearables.",
        },
        {
          icon: <Bell className="w-8 h-8" />,
          title: "Intelligent Reminders",
          description: "Stay on track with hydration, meals, and exercise.",
        },
        {
          icon: <Brain className="w-8 h-8" />,
          title: "AI Health Suggestions",
          description: "Get insights for better sleep and wellness.",
        },
        {
          icon: <Activity className="w-8 h-8" />,
          title: "Exercise Log",
          description:
            "Track routines and receive tips based on energy patterns.",
        },
      ],
    },
    MyTeal: {
      title: "MyTeal",
      subtitle: "Women's Mental Health Monitoring Platform",
      description:
        "MyTeal is a privacy-first emotional health platform for women. It analyzes behavioral patterns to detect distress and offers timely support through AI.",
        carouselSlides: [
            "/Myteal.png",
          ],
      features: [
        {
          icon: <MessageCircle className="w-8 h-8" />,
          title: "AI Emotional Assistant",
          description: "A responsive chat agent that offers empathy and care.",
        },
        {
          icon: <Brain className="w-8 h-8" />,
          title: "Behavior Monitoring",
          description: "Track emotional trends and mental health cycles.",
        },
        {
          icon: <Heart className="w-8 h-8" />,
          title: "Privacy & Anonymity",
          description:
            "User data is encrypted and not accessible without permission.",
        },
        {
          icon: <ClipboardList className="w-8 h-8" />,
          title: "Wellness Suggestions",
          description: "Tailored support for self-care and calm routines.",
        },
        {
          icon: <AlertCircle className="w-8 h-8" />,
          title: "Crisis Detection",
          description: "Trigger alerts when risky behavior is identified.",
        },
      ],
    },
    NSpeed: {
      title: "NSpeed",
      subtitle: "Health Diagnostics & Vitamin Deficiency Detection",
      description:
        "NSpeed offers instant diagnostics for vitals like sugar, pressure, and vitamins. AI reports and suggestions help users stay ahead of health risks.",
        carouselSlides: [
            "/NSpeed.png",
          ],
      features: [
        {
          icon: <ClipboardList className="w-8 h-8" />,
          title: "Instant Health Scan",
          description: "Detect BP, sugar, and vitamins in seconds.",
        },
        {
          icon: <FileText className="w-8 h-8" />,
          title: "Deficiency Reports",
          description:
            "AI-generated reports highlight missing nutrients and remedies.",
        },
        {
          icon: <Heart className="w-8 h-8" />,
          title: "Preventive Suggestions",
          description: "Get food and lifestyle tips based on test results.",
        },
        {
          icon: <Eye className="w-8 h-8" />,
          title: "Device Integration",
          description: "Works with test kits and smart monitors.",
        },
        {
          icon: <Activity className="w-8 h-8" />,
          title: "Personal Dashboard",
          description: "Track trends and health improvements over time.",
        },
      ],
    },
    Iscan: {
      title: "Iscan AI",
      subtitle: "Real-Time Eye Tracking & Vision Analysis",
      description:
        "Powered by MediaPipe, Iscan monitors eye behavior to detect fatigue, focus loss, and patterns for clinical and productivity use.",
        carouselSlides: [
            "/Iscan.png",
          ],
      features: [
        {
          icon: <Eye className="w-8 h-8" />,
          title: "Real-Time Eye Tracking",
          description: "Monitor gaze direction, blink rate, and attention.",
        },
        {
          icon: <Activity className="w-8 h-8" />,
          title: "Focus Monitoring",
          description: "Analyze attentiveness and distractions.",
        },
        {
          icon: <Heart className="w-8 h-8" />,
          title: "Fatigue Detection",
          description: "Detects signs of strain and overexposure.",
        },
        {
          icon: <Brain className="w-8 h-8" />,
          title: "Vision Pattern Analytics",
          description:
            "Evaluate long-term vision behaviors for insights and diagnosis.",
        },
      ],
    },
    ThotAI: {
      title: "Thot AI",
      subtitle: "Retail & Profit Optimization Dashboard",
      description:
        "A retail management tool for small business owners. Thot AI helps optimize inventory, profits, and market strategy with AI-powered insights.",
        carouselSlides: [
            "/Thot/Thot1.png",
            "/Thot/Thot11.png",
            "/Thot/Thot2.png",
            "/Thot/Thot3.png",
            "/Thot/Thot4.png",
          ],
      features: [
        {
          icon: <Users className="w-8 h-8" />,
          title: "Role-Based Access",
          description: "Owners, staff, and agents have tailored permissions.",
        },
        {
          icon: <Building className="w-8 h-8" />,
          title: "Store Registration",
          description: "Operate both online and offline stores in one place.",
        },
        {
          icon: <Brain className="w-8 h-8" />,
          title: "Business Recommendations",
          description:
            "AI suggests high-demand products and investment strategies.",
        },
        {
          icon: <ClipboardList className="w-8 h-8" />,
          title: "Profit & Loss Analyzer",
          description: "Track financial performance in real time.",
        },
        {
          icon: <Map className="w-8 h-8" />,
          title: "Location-Based Insights",
          description: "Discover where to invest more for better ROI.",
        },
      ],
    },
    ClinicAI: {
      title: "Clinic-AI",
      subtitle: "Smart Clinic & Hospital Management System",
      description:
        "Clinic AI is a complete hospital management platform that automates appointments, records, billing, and improves care using AI.",
        carouselSlides: [
            "/ClinicAI.png",
          ],
      features: [
        {
          icon: <Users className="w-8 h-8" />,
          title: "Smart Registration",
          description:
            "Patients register with full profile and medical history tracking.",
        },
        {
          icon: <CalendarCheck2 className="w-8 h-8" />,
          title: "AI Appointment Scheduling",
          description:
            "Optimizes doctor availability and reduces waiting time.",
        },
        {
          icon: <FileText className="w-8 h-8" />,
          title: "Digital Records",
          description: "View and manage prescriptions and reports online.",
        },
        {
          icon: <Brain className="w-8 h-8" />,
          title: "AI Health Dashboard",
          description:
            "Monitor chronic conditions and get predictive alerts.",
        },
        {
          icon: <ClipboardList className="w-8 h-8" />,
          title: "Billing & Analytics",
          description:
            "Generate invoices and track doctor performance metrics.",
        },
      ],
    },
  };
  