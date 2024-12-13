# Dynamic and Analytics Dashboard

This project is a dynamic and responsive dashboard application built with **React.js**, **Redux**, **TypeScript**,**Tailwindcss, **Shandcn, and **Redux Thunk** for API integration. It includes a user management dashboard and an analytics dashboard featuring charts and filters.

## Features

### User Management Dashboard

1. **Login Page**:
   - User authentication with a mock API [https://mockapi.io].
2. **User Table**:
   - Display user details in a table format.
   - Actions include viewing user details and deleting users.
3. **Search and Filter**:
   - Filter users by name or email.
4. **Pagination**:
   - Display 5 users per page with navigation controls.

### Analytics Dashboard

1. **Overview Cards**:

   - Display key metrics including:
     - Total Users
     - Active Users (mocked based on status field)
     - Deleted Users (tracked during the session): Note that we are not deleting users using the POST or DELETE method, as it is not feasible for our project. Instead, we are simulating the deletion process.

2. **Charts Section**:

   - **User Registration Trend**: Line chart showing user registrations over the last 6 months.
   - **Active vs Inactive Users**: Pie chart comparing active and inactive users.
   - **Users by Region**: Bar chart showing user distribution by region.

3. **Filters for Analytics**:
   - Filter data by date range.
   - Filter data by region.

### Responsive Design

- Fully responsive layout ensuring usability across devices including desktops, tablets, and mobile phones.

## Tech Stack

- **Frontend**: React.js with TypeScript With Vite.
- **State Management**: Redux with Redux Thunk for API handling
- **Styling**: TailwindCSS for responsive and modern UI
- **Charts**: Used Chart.js for data visualization.
- **Mock Data**: Used Mock APi for User-list Data and analytics data

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/dynamic-analytics-dashboard.git
   cd dynamic-analytics-dashboard
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Usage

1. **User Management**:

   - Login using mock credentials.
   - View, search, filter, and paginate through users.
   - Delete users and see changes reflected in the analytics dashboard.

2. **Analytics**:
   - View key metrics in overview cards.
   - Analyze data with interactive charts and filters.
   - add diffrent filters to see the data charts.

## Project Highlights

- Implemented Redux slices for managing user and analytics data.
- Designed reusable components with TailwindCSS for a Shadcn UI.
- Added interactive filters and dynamic charts for actionable insights.
- Used strong TypeScript typing for better maintainability and error prevention.

---

### Author

Developed by Subhajit Chowhan.

# dynamic-analytics-dashboard
