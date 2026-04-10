const people = ["Akhi", "Meghana", "Nadhiya", "Sara"];
const tasks = ["Morning Cooking", "Cleaning", "Night Dinner"];
const n = people.length;

const calendar = document.getElementById("calendar");

for (let day = 0; day < 6; day++) {

    let html = `<div class="day"><h3>Day ${day + 1}</h3>`;

    for (let t = 0; t < tasks.length; t++) {
        let personIndex = (day + t) % n;
        let person = people[personIndex];
        html += `<p>${tasks[t]} → <span class="${person}">${person}</span></p>`;
    }

    let restIndex = (day + tasks.length) % n;
    let restPerson = people[restIndex];
    html += `<p>Rest → <span class="${restPerson}">${restPerson}</span></p>`;

    if ((day + 1) % 2 === 0) {
        let dustIndex = Math.floor(day / 2) % n;

        if (dustIndex === restIndex) {
            dustIndex = (dustIndex + 1) % n;
        }

        let dustPerson = people[dustIndex];
        html += `<p>🗑️ Dust → <span class="${dustPerson}">${dustPerson}</span></p>`;
    }

    html += `</div>`;
    calendar.innerHTML += html;
}
