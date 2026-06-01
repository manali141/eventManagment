# EventHub - Event Management Platform

EventHub is a React-based Event Management Platform that allows users to discover events, search and filter events, view event details, and manage bookings through a modern and responsive user interface.

## Features

### Event Discovery
- Browse upcoming events
- Search events by title, category, or location
- Filter events by category
- Responsive card-based layout
- Hero section for enhanced user experience

### Event Details
- Dynamic routing using React Router
- View complete event information
- Event description, date, time, location, and organizer details
- Book Tickets button

### User Experience
- Responsive design using Bootstrap
- Loading and empty states
- Clean and modern UI
- Mobile-friendly layout

### React Concepts Demonstrated
- useState
- useEffect
- useMemo
- useRef
- Context API
- React Router
- Component Composition
- Conditional Rendering
- Props
- Event Handling
- Form Handling

## Technologies Used

- React
- Vite
- React Router DOM
- Bootstrap 5
- React Icons
- JSON Data Source
- GitHub

## Project Structure

```text
src
│
├── components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── SearchBar.jsx
│   ├── FilterBar.jsx
│   ├── EventCard.jsx
│   └── Footer.jsx
│
├── pages
│   ├── EventsPage.jsx
│   ├── EventDetails.jsx
│   └── Contact.jsx
│
├── context
│   └── ThemeContext.jsx
│
├── styles
│   └── Style.css
│
├── App.jsx
└── main.jsx
```

## Installation

Clone the repository:

```bash
git clone https://github.com/manali141/eventManagment.git
```

Navigate to the project folder:

```bash
cd eventManagment
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Data Source

Event data is loaded from:

```text
https://raw.githubusercontent.com/manali141/eventManagment/main/db.json
```

## Future Enhancements

- Ticket Booking Flow
- My Bookings Page
- Dark/Light Theme Toggle
- Favorites Functionality
- JSON Server Integration
- User Authentication
- Booking Confirmation System
- Admin Event Management

## Learning Outcomes

This project demonstrates:

- Building reusable React components
- State management with Hooks
- Dynamic Routing
- API Data Fetching
- Responsive Design
- Performance Optimization with useMemo
- Form Validation
- Modern React Development Practices

## Author

**Manali Mistry**

GitHub Repository:

https://github.com/manali141/eventManagment

---

Built with React and Bootstrap.