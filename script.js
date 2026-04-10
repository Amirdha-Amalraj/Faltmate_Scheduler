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

    // Today logic (cycles every 6 days)
    const todayIndex = new Date().getDate() % 6;

    for (let day = 0; day < 6; day++) {

        let isToday = day === todayIndex ? "today" : "";
        let html = `<div class="day ${isToday}"><h3>Day ${day + 1}</h3>`;

        // Tasks
        for (let t = 0; t < tasks.length; t++) {
            let personIndex = (day + t) % n;
            html += `<p>${tasks[t]} → <span class="p${personIndex}">${people[personIndex]}</span></p>`;
        }

        // Rest
        let restIndex = (day + tasks.length) % n;
        html += `<p>Rest → <span class="p${restIndex}">${people[restIndex]}</span></p>`;

        // Dust (avoid rest)
        if ((day + 1) % 2 === 0) {
            let dustIndex = Math.floor(day / 2) % n;

            if (dustIndex === restIndex) {
                dustIndex = (dustIndex + 1) % n;
            }

            html += `<p>🗑️ Dust → <span class="p${dustIndex}">${people[dustIndex]}</span></p>`;
        }

        html += `</div>`;
        calendar.innerHTML += html;
    }
}

// Load default on start
generate();
