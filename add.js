const apiUrl = "https://localhost:5000/workexperience";

document.getElementById("add-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    // hämta värden
    const companyname = document.getElementById("companyname").value;
    const jobtitle = document.getElementById("jobtitle").value;
    const startdate = document.getElementById("startdate").value;
    const enddate = document.getElementById("enddate").value;
    const description = document.getElementById("description").value;

    if (companyname.length < 2 || jobtitle.length < 2) {
        alert("Företagsnamn och jobbtitel måste vara ifyllda!");
        return;
    }

    // skicka med fetch post
    const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ companyname, jobtitle, location, startdate, enddate, description })
    });

    if (response.ok) {
        window.location.href = "index.html";
    } else {
        alert("Något gick fel!");
    }
});