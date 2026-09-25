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
          <p>Mobile: ${ambulance.mobileNumber}</p>
          <span class="${ambulance.available ? "available" : "unavailable"}">
            ${ambulance.available ? "Available" : "Unavailable"}
          </span>
        </div>
      </div>
    `);

    // Medicine
    render("medicine-container", data.medicineStores, (store) => `
      <a href="${store.website}" target="_blank" class="card">
        <img src="${store.image}" class="card-image">
        <div class="card-content">
          <h3>${store.name}</h3>
          <p>${store.description}</p>
          <p>${store.category}</p>
          <span class="card-link">Visit Website</span>
        </div>
      </a>
    `);

    // Medical Guides
    render("guide-container", data.medicalGuides, (guide) => `
      <a href="${guide.website}" target="_blank" class="card">
        <div class="card-content">
          <h3>${guide.name}</h3>
          <p>${guide.description}</p>
          <span class="card-link">Read Guide</span>
        </div>
      </a>
    `);

    // Slideshow
    let slide = 0;

    function showHospital() {
      document.getElementById("hospital-slider-image").src =
        data.hospitals[slide].image;

      document.getElementById("hospital-slider-name").textContent =
        data.hospitals[slide].name;
    }

    // Previous
    document.getElementById("previous-slide").addEventListener("click", () => {
      slide--;

      if (slide < 0) {
        slide = data.hospitals.length - 1;
      }

      showHospital();
    });

    // Next
    document.getElementById("next-slide").addEventListener("click", () => {
      slide++;

      if (slide >= data.hospitals.length) {
        slide = 0;
      }

      showHospital();
    });

    showHospital();

    // Automatic slideshow
    setInterval(() => {
      slide++;

      if (slide >= data.hospitals.length) {
        slide = 0;
      }

      showHospital();
    }, 2000);

  })
  .catch((error) => {
    console.error("Failed to load data:", error);
  });
