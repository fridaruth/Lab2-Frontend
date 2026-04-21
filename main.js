const apiUrl = "https://localhost:5000/workexperience";

async function getExperiences() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const listContainer = document.getElementById("experience-list");
        listContainer.innerHTML = "";

        data.forEach(work => {
            listContainer.innerHTML += `
            <div class="card">
            <h3>${work.jobtitle} @ ${work.companyname}</h3>
            <p><strong>Plats:</strong> ${work.location}</p>
            <p><strong>Period:</strong> ${work.startdate} - ${work.enddate || 'Pågående'}</p>
            <p>${work.description}</p>
            <button onclick="deleteExperience(${work.id})">Radera</button>
            </div>
            `;
        });
    } catch (error) {
        console.error("Fel vid hämtning: ", error)
    }
}

getExperiences();