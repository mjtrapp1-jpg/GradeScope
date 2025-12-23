const classes = [
  {
    name: "ALA 100 – Intro to Environmental Design",
    average: "96.3%",
    teacher: "Nikolas Smilovsky",
    weights: {
      Projects: 25,
      Homework: 35,
      Exams: 40
    }
  },
  {
    name: "AlcoholEdu",
    average: "100%",
    teacher: "N/A",
    weights: {
      Modules: 100
    }
  },
  {
    name: "CSE 100 – Principles of Programming (C++)",
    average: "80.7%",
    teacher: "Yoshi Kobayashi",
    weights: {
      Homework: 10,
      Labs: 25,
      Exams: 50,
      Projects: 15
    }
  },
  {
    name: "MAT 265 – Calculus for Engineers",
    average: "83.2%",
    teacher: "Dhakal",
    weights: {
      Homework: 25,
      Quizzes: 45,
      Exams: 30
    }
  },
  {
    name: "FSE 100 – Introduction to Engineering",
    average: "84.4%",
    teacher: "Dr. Delp",
    weights: {
      Projects: 35,
      Participation: 25,
      Exams: 40
    }
  },
  {
    name: "ASU 101 – The ASU Experience",
    average: "98.1%",
    teacher: "Suren Jayasuriya",
    weights: {
      Assignments: 100
    }
  }
];

const container = document.getElementById("grades-container");

function updateUI() {
  container.innerHTML = "";

  classes.forEach(course => {
    const card = document.createElement("div");
    card.className = "grade-card";

    card.innerHTML = `
      <h4>${course.name}</h4>
      <div class="grade">${course.average}</div>

      <div class="details hidden">
        <p><strong>Instructor:</strong> ${course.teacher}</p>
        <h5>Grade Weights</h5>
        <ul>
          ${Object.entries(course.weights)
            .map(
              ([type, weight]) => `<li>${type}: ${weight}%</li>`
            )
            .join("")}
        </ul>
      </div>
    `;

    card.addEventListener("click", () => {
      card.querySelector(".details").classList.toggle("hidden");
    });

    container.appendChild(card);
  });
}

updateUI();
