/**
 * TechBridge - Interactive Internship Roadmap (Task 4)
 * JavaScript implementation demonstrating variables, arrays, objects,
 * functions, event listeners, conditional logic, and DOM manipulation.
 */

// 1. Task Data Structure (Objects stored inside Track Arrays)
const dataAnalyticsTasks = [
  {
    id: 1,
    title: "Data Cleaning Basics",
    day: "Day 1",
    description: "Clean a messy dataset using Google Sheets or Excel. Identify and fix duplicate rows, blank cells, inconsistent formatting, and incorrect data types.",
    difficulty: "Beginner",
    icon: "fa-solid fa-broom"
  },
  {
    id: 2,
    title: "Formulas & Pivot Tables",
    day: "Day 4",
    description: "Use spreadsheet formulas and Pivot Tables to answer questions and extract useful insights from a dataset.",
    difficulty: "Beginner",
    icon: "fa-solid fa-table-cells"
  },
  {
    id: 3,
    title: "Data Visualization",
    day: "Day 8",
    description: "Create charts and a simple dashboard that communicate useful insights from a dataset.",
    difficulty: "Beginner → Intermediate",
    icon: "fa-solid fa-chart-line"
  },
  {
    id: 4,
    title: "Introduction to SQL",
    day: "Day 11",
    description: "Practice basic SQL queries and use them to answer real-world questions about data.",
    difficulty: "Beginner → Intermediate",
    icon: "fa-solid fa-database"
  },
  {
    id: 5,
    title: "SQL Joins & Aggregations",
    day: "Day 15",
    description: "Use JOIN, GROUP BY and aggregate functions such as COUNT, SUM and AVG to analyze information across multiple tables.",
    difficulty: "Intermediate",
    icon: "fa-solid fa-diagram-project"
  },
  {
    id: 6,
    title: "Lookup Functions & Data Wrangling",
    day: "Day 19",
    description: "Use VLOOKUP or XLOOKUP to combine related datasets and handle data mismatches.",
    difficulty: "Intermediate",
    icon: "fa-solid fa-magnifying-glass-chart"
  },
  {
    id: 7,
    title: "Mini Analysis Project",
    day: "Day 22",
    description: "Complete a small end-to-end analysis involving data cleaning, formulas, Pivot Tables, charts and recommendations.",
    difficulty: "Intermediate",
    icon: "fa-solid fa-file-contract"
  },
  {
    id: 8,
    title: "Capstone Project",
    day: "Day 26",
    description: "Complete a larger project combining spreadsheet analysis and SQL using at least two related tables.",
    difficulty: "Intermediate",
    icon: "fa-solid fa-trophy"
  }
];

const webDevTasks = [
  {
    id: 1,
    title: "Build the TechBridge Homepage",
    day: "Day 1",
    description: "Create the first version of the TechBridge website using HTML and CSS.",
    difficulty: "Beginner",
    icon: "fa-solid fa-house"
  },
  {
    id: 2,
    title: "Build the TechBridge Programs Experience",
    day: "Day 4",
    description: "Create a Programs experience presenting TechBridge's available learning programs.",
    difficulty: "Beginner",
    icon: "fa-solid fa-layer-group"
  },
  {
    id: 3,
    title: "Build the Internship Tasks Experience",
    day: "Day 8",
    description: "Create an interface that presents the TechBridge internship tasks and helps users understand the internship journey.",
    difficulty: "Beginner → Intermediate",
    icon: "fa-solid fa-route"
  },
  {
    id: 4,
    title: "Build an Interactive Internship Roadmap",
    day: "Day 11",
    description: "Use JavaScript to allow visitors to switch between the Data Analytics and Web Development internship tracks.",
    difficulty: "Beginner → Intermediate",
    icon: "fa-solid fa-code"
  },
  {
    id: 5,
    title: "Build the Intern Registration Experience",
    day: "Day 15",
    description: "Create a professional registration and onboarding interface for TechBridge interns.",
    difficulty: "Intermediate",
    icon: "fa-solid fa-user-plus"
  },
  {
    id: 6,
    title: "Build the Task Submission System",
    day: "Day 19",
    description: "Create an interface through which interns can prepare and submit their task work.",
    difficulty: "Intermediate",
    icon: "fa-solid fa-paper-plane"
  },
  {
    id: 7,
    title: "Build the Intern Dashboard",
    day: "Day 22",
    description: "Create a dashboard where an intern can view their profile, progress, tasks and submissions.",
    difficulty: "Intermediate",
    icon: "fa-solid fa-gauge-high"
  },
  {
    id: 8,
    title: "Build the Complete TechBridge Internship Platform",
    day: "Day 26",
    description: "Combine the different components created during the internship into a complete TechBridge platform.",
    difficulty: "Intermediate",
    icon: "fa-solid fa-rocket"
  }
];

// 2. Global State Variable
let currentTrack = "data-analytics";

// 3. DOM Elements Selection
const roadmapContainer = document.getElementById("roadmapContainer");
const currentTrackDisplay = document.getElementById("currentTrackDisplay");
const btnDataAnalytics = document.getElementById("btnDataAnalytics");
const btnWebDev = document.getElementById("btnWebDev");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

// 4. Helper Function: Get Difficulty CSS Class
function getDifficultyBadgeClass(difficulty) {
  if (difficulty === "Beginner") {
    return "level-beginner";
  } else if (difficulty.includes("→")) {
    return "level-inter";
  } else {
    return "level-advanced";
  }
}

// 5. Core Function: Render Roadmap Tasks dynamically
function renderRoadmap(trackKey) {
  if (!roadmapContainer) return;

  // Determine active task array based on selected track using conditional logic
  let activeTasks = [];
  if (trackKey === "data-analytics") {
    activeTasks = dataAnalyticsTasks;
    if (currentTrackDisplay) {
      currentTrackDisplay.textContent = "Data Analytics Track";
    }
  } else if (trackKey === "web-development") {
    activeTasks = webDevTasks;
    if (currentTrackDisplay) {
      currentTrackDisplay.textContent = "Web Development Track";
    }
  }

  // Clear previous contents
  roadmapContainer.innerHTML = "";

  // Iterate over tasks array and construct DOM structure
  activeTasks.forEach((task, index) => {
    const isLastItem = index === activeTasks.length - 1;
    const badgeClass = getDifficultyBadgeClass(task.difficulty);

    const timelineItem = document.createElement("div");
    timelineItem.className = "timeline-item";

    timelineItem.innerHTML = `
      <div class="timeline-marker">
        <span class="day-badge">${task.day}</span>
        ${!isLastItem ? '<div class="connector-line"></div>' : ''}
      </div>
      <div class="task-card ${isLastItem ? 'final-task-card' : ''}">
        <div class="task-card-header">
          <span class="task-number">Task ${task.id.toString().padStart(2, '0')}</span>
          <span class="level-tag ${badgeClass}">${task.difficulty}</span>
        </div>
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        <div class="task-meta">
          <span><i class="${task.icon}"></i> ${task.day} Milestone</span>
          <span class="status-indicator status-upcoming">
            <i class="fa-solid fa-bullseye"></i> 30-Day Track Requirement
          </span>
        </div>
      </div>
    `;

    roadmapContainer.appendChild(timelineItem);
  });
}

// 6. Track Switcher Action Function
function switchTrack(selectedTrack) {
  if (currentTrack === selectedTrack) return;

  currentTrack = selectedTrack;

  // Update button active state styles
  if (selectedTrack === "data-analytics") {
    btnDataAnalytics.classList.add("active");
    btnWebDev.classList.remove("active");
  } else {
    btnWebDev.classList.add("active");
    btnDataAnalytics.classList.remove("active");
  }

  // Render updated track data
  renderRoadmap(currentTrack);
}

// 7. Event Listeners Setup
document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link, .nav-cta").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  }

  // Track Selector Button Click Listeners
  if (btnDataAnalytics) {
    btnDataAnalytics.addEventListener("click", () => switchTrack("data-analytics"));
  }

  if (btnWebDev) {
    btnWebDev.addEventListener("click", () => switchTrack("web-development"));
  }

  // Initial render on page load
  renderRoadmap(currentTrack);
});