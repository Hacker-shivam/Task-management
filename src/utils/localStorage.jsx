
const employees = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "e@e.com",
    password: "123",
    tasks: [
      { active: true, newTask: true, completed: false, failed: false, title: "Build Login Page", description: "Create responsive login UI", date: "2025-02-01", category: "Frontend" },
      { active: false, newTask: false, completed: true, failed: false, title: "Fix Navbar Bug", description: "Resolve alignment issue", date: "2025-01-28", category: "Bug Fix" },
      { active: false, newTask: false, completed: false, failed: true, title: "API Integration", description: "Connect backend API", date: "2025-01-25", category: "Backend" }
    ],
    taskNumbers: { active: 3, newTask: 2, completed: 5, failed: 1 }
  },
  {
    id: 2,
    name: "Riya Patel",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      { active: true, newTask: true, completed: false, failed: false, title: "Create Dashboard", description: "Design admin dashboard", date: "2025-02-03", category: "UI/UX" },
      { active: false, newTask: false, completed: true, failed: false, title: "Update Profile Page", description: "Add edit profile feature", date: "2025-01-29", category: "Frontend" },
      { active: false, newTask: false, completed: false, failed: true, title: "Payment Gateway", description: "Integrate Stripe", date: "2025-01-26", category: "Backend" }
    ],
    taskNumbers: { active: 2, newTask: 3, completed: 4, failed: 2 }
  },
  {
    id: 3,
    name: "Vivaan Gupta",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      { active: true, newTask: true, completed: false, failed: false, title: "Design Homepage", description: "Create landing page UI", date: "2025-02-02", category: "UI/UX" },
      { active: false, newTask: false, completed: true, failed: false, title: "Form Validation", description: "Add client-side validation", date: "2025-01-27", category: "Frontend" },
      { active: false, newTask: false, completed: false, failed: true, title: "Deploy Website", description: "Host on Vercel", date: "2025-01-24", category: "DevOps" }
    ],
    taskNumbers: { active: 4, newTask: 1, completed: 3, failed: 1 }
  },
  {
    id: 4,
    name: "Ananya Reddy",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      { active: true, newTask: true, completed: false, failed: false, title: "Search Feature", description: "Implement search", date: "2025-02-04", category: "Frontend" },
      { active: false, newTask: false, completed: true, failed: false, title: "Database Schema", description: "Design tables", date: "2025-01-30", category: "Database" },
      { active: false, newTask: false, completed: false, failed: true, title: "Authentication", description: "Implement JWT auth", date: "2025-01-26", category: "Security" }
    ],
    taskNumbers: { active: 1, newTask: 4, completed: 2, failed: 2 }
  },
  {
    id: 5,
    name: "Karthik Singh",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      { active: true, newTask: true, completed: false, failed: false, title: "Notifications", description: "Add push alerts", date: "2025-02-05", category: "Backend" },
      { active: false, newTask: false, completed: true, failed: false, title: "Dark Mode", description: "Theme toggle", date: "2025-01-31", category: "Frontend" },
      { active: false, newTask: false, completed: false, failed: true, title: "Chat Feature", description: "Realtime chat", date: "2025-01-27", category: "Full Stack" }
    ],
    taskNumbers: { active: 5, newTask: 2, completed: 4, failed: 1 }
  }
];

const admin = [
  {
    id: 6,
    name: "Neha Kapoor",
    email: "admin@example.com",
    password: "123",
    tasks: [
      { active: true, newTask: true, completed: false, failed: false, title: "Search Feature", description: "Implement search", date: "2025-02-04", category: "Frontend" },
      { active: false, newTask: false, completed: true, failed: false, title: "Database Schema", description: "Design tables", date: "2025-01-30", category: "Database" },
      { active: false, newTask: false, completed: false, failed: true, title: "Authentication", description: "Implement JWT auth", date: "2025-01-26", category: "Security" }
    ],
    taskNumbers: { active: 3, newTask: 2, completed: 6, failed: 1 }
  }
];





export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  return { employees, admin }

}
