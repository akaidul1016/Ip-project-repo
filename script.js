fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const render = (id, items, template) => {
      document.getElementById(id).innerHTML = items.map(template).join("");
    };

    // Doctors
    render("doctor-container", data.doctors, (doctor) => `
      <div class="card">
        <img src="${doctor.image}" class="card-image">
        <div class="card-content">
          <h3>${doctor.name}</h3>
          <p>${doctor.specialization}</p>
          <p>${doctor.hospital}</p>
        </div>
      </div>
    `);

    // Hospitals
    render("hospital-container", data.hospitals, (hospital) => `
      <a href="${hospital.website}" target="_blank" class="card">
        <img src="${hospital.image}" class="card-image">
        <div class="card-content">
          <h3>${hospital.name}</h3>
          <p>${hospital.location}</p>
          <span class="card-link">Visit Website</span>
        </div>
      </a>
    `);

    // Ambulances
    render("ambulance-container", data.ambulances, (ambulance) => `
      <div class="card">
        <div class="card-content">
          <h3>${ambulance.driverName}</h3>
          <p>Ambulance: ${ambulance.ambulanceNumber}</p>
          <p>Location: ${ambulance.location}</p>
          <span class="available">Available</span>
        </div>
      </div>
    `);

    // Medical guides
    render("guide-container", data.medicalGuides, (guide) => `
      <a href="${guide.website}" target="_blank" class="card">
        <div class="card-content">
          <h3>${guide.name}</h3>
          <p>${guide.description}</p>
          <span class="card-link">Read Guide</span>
        </div>
      </a>
    `);

    // Hospital slideshow
    let slide = 0;

    const showHospital = () => {
      const hospital = data.hospitals[slide];

      document.getElementById("hospital-slider-image").src = hospital.image;
      document.getElementById("hospital-slider-name").textContent = hospital.name;

      slide = (slide + 1) % data.hospitals.length;
    };

    showHospital();
    setInterval(showHospital, 2000);
  });