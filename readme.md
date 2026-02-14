📘 LearnHub – Mini Course Platform
Student: Fadi Abu Saleh
Lecturer: Eran Avraham
Course: Full Stack Client – Final Project

🎯 Project Overview
This project is a small, adaptive‑responsive web platform designed to showcase and sell online courses.
It includes a homepage with course cards, a media preview page, and an application form for users who want to buy a course.
The site demonstrates:
- Semantic HTML5
- CSS Flexbox & Grid
- Adaptive + responsive layout
- JavaScript DOM manipulation
- Dark mode theme
- Form handling and dynamic output

🧩 Pages Included
1. Courses Page (index.html)
The main landing page of the platform.
Includes:
- Course cards with images, descriptions, and prices
- “Buy Now” buttons linking to the application form
- Left and right sidebars (Holy Grail layout)
- Responsive grid using CSS Grid
- Navigation bar with hover effects

2. Media Page (gallery.html)
A preview page showing different types of course‑related media.
Includes:
- Images
- Video
- Audio
- Each media item inside its own container
- Titles + descriptions
- CSS Grid layout
- Mobile-friendly layout

3. Application Form (form.html)
A simple form where users can apply to buy a course.
Features:
- 5 different input types (text, email, date, number, checkbox)
- JavaScript form handling
- Prevents page refresh
- Displays submitted data dynamically
- Two-column layout (form + output)
- Works in light and dark mode

🎨 Design & Styling
Holy Grail Layout
The site uses a classic 3‑column layout:
- Left sidebar
- Main content
- Right sidebar
Named Colors Only
The entire CSS uses named colors such as:
- steelblue
- midnightblue
- whitesmoke
- darkslategray
- dimgray
Dark Mode
A toggle button switches the site between:
- Light mode (whitesmoke + steelblue)
- Dark mode (black + dimgray + darkslategray)
Dark mode is implemented using a single .dark-mode class on the <body>.

🧠 JavaScript Features
- Dark mode toggle
- Form submission handling
- Dynamic creation of output elements
- Works safely across all pages
- No page reload on submit

📱 Responsiveness
The project uses:
- CSS Grid with auto-fit and minmax()
- Flexbox wrapping
- A mobile breakpoint at 600px
- Adaptive layout changes for small screens
The site works smoothly on desktop, tablet, and mobile.

📂 Project Structure
project-folder/
│
├── index.html        # Courses page
├── gallery.html      # Media previews
├── form.html         # Application form
│
├── style.css         # Styling (light + dark mode)
├── script.js         # Dark mode + form logic
│
└── README.md         # Project documentation



🚀 How to Run
- Download the project folder.
- Open index.html in any browser.
- Use the navigation bar to explore the site.

🌟 Future Improvements (Optional)
- Add localStorage to save form submissions
- Add a selected-course field
- Add testimonials or FAQ section
- Add a featured course banner
- Add backend support for real purchases
