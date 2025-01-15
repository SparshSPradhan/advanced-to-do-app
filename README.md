Advanced To-Do Application
An advanced, feature-rich To-Do application built with React, integrated with a public API, and managed using Redux for state management. This application provides a modern user interface, robust functionality, and responsiveness for seamless usage across devices.

Features-

Core Features- 

Add Tasks: Add tasks with priorities (High, Medium, Low).
View Tasks: Display all tasks in a categorized and user-friendly format.
Delete Tasks: Remove individual tasks with a simple click.
Prioritization: Tasks are visually distinguished by priority.
Responsive Design: Fully functional on mobile, tablet, and desktop devices.

Advanced Features-

API Integration: Fetch real-time data from a public API (e.g., weather) to enhance task relevance.
User Authentication: Simulated login/logout functionality using Redux.
Persistent Storage: Data saved in local storage for session persistence.
State Management: Use of Redux and Redux Thunk for asynchronous actions and centralized state.

Technologies Used-

React: Frontend framework for building UI components.
Redux: State management for handling application-wide state.
Redux Thunk: Middleware for handling asynchronous actions.
CSS: Advanced styling using modern CSS practices (Flexbox, Grid).
HTML5: Structuring the layout.
Public API: Integrated API for real-time external data.

Installation and Setup-

Clone the Repository


https://github.com/SparshSPradhan/advanced-to-do-app
cd advanced-todo-app

Install Dependencies-



npm install

Run the Application-



npm start
Open http://localhost:3000 in your browser to view the application.

Build the Application To create a production build:



npm run build

Folder Structure-


advanced-todo-app/
├── public/               # Static files
├── src/
│   ├── components/       # React components (TaskInput, TaskList, etc.)
│   ├── redux/            # Redux store, actions, reducers
│   ├── styles/           # CSS files
│   ├── App.js            # Main application file
│   ├── index.js          # Entry point
│   └── ...
├── README.md             # Project documentation
├── package.json          # Project dependencies and scripts
└── ...
Public API Used
Weather API: Displays real-time weather conditions for outdoor tasks.


Home Page

Add Task

Responsive Design

Deployment
The app is deployed on vercel and accessible at:
https://advanced-to-do-app-sparsh.vercel.app/

Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.


Author
Sparsh S. Pradhan
GitHub Profile-https://github.com/SparshSPradhan
LinkedIn Profile-https://www.linkedin.com/in/sparsh-singh-pradhan-8318b01b2/

