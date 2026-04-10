const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function generate() {

    const people = [
        document.getElementById("p1").value || "Akhi",
        document.getElementById("p2").value || "Meghana",
        document.getElementById("p3").value || "Nadhiya",
        document.getElementById("p4").value || "Sara"
    ];

    const tasks = ["Morning Cooking", "Cleaning", "Night Dinner"];
    const n = people.length;

    const calendar = document.getElementById("calendar");
    calendar.innerHTML = "";

    // Get today's day (0 = Sunday)
    let todayReal = new Date().getDay();

    // Convert to our Monday-Saturday (0–5)
    let todayIndex = (todayReal - 1 + 7) % 7; 
    if (todayIndex > 5) todayIndex = -1; // ignore Sunday

    for (let day = 0; day < 6; day++) {

        let div = document.createElement("div");
        div.className = "day";

        if (day === todayIndex) {
            div.classList.add("today");
        }

        div.innerHTML = `<h3>${days[day]}</h3>`;

        // Click event
        div.onclick = () => {
            showDetails(day, people, tasks);

            document.querySelectorAll(".day").forEach(d => d.classList.remove("selected"));
            div.classList.add("selected");
        };

        calendar.appendChild(div);
    }
}

function showDetails(day, people, tasks) {

    const n = people.length;
    let result = `<h2>${days[day]}</h2>`;

    // Tasks
    for (let t = 0; t < tasks.length; t++) {
        let personIndex = (day + t) % n;
        result += `<p>${tasks[t]} → <span class="p${personIndex}">${people[personIndex]}</span></p>`;
    }

    // Rest
    let restIndex = (day + tasks.length) % n;
    result += `<p>Rest → <span class="p${restIndex}">${people[restIndex]}</span></p>`;

    // Dust (avoid rest)
    if ((day + 1) % 2 === 0) {
        let dustIndex = Math.floor(day / 2) % n;

        if (dustIndex === restIndex) {
            dustIndex = (dustIndex + 1) % n;
        }

        result += `<p>🗑️ Dust → <span class="p${dustIndex}">${people[dustIndex]}</span></p>`;
    }

    document.getElementById("details").innerHTML = result;
}

// Load initially
generate();
