fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    // Doctors
    document.getElementById("doctor-container").innerHTML = data.doctors
      .map(
        (doctor) => `
                <div class="card">
                    <img src="${doctor.image}" class="card-image">
                    <div class="card-content">
                        <h3>${doctor.name}</h3>
                        <p>${doctor.specialization}</p>
                        <p>${doctor.hospital}</p>
                    </div>
                </div>
            `,
      )
      .join("");

    // Hospitals
    document.getElementById("hospital-container").innerHTML = data.hospitals
      .map(
        (hospital) => `
                <a href="${hospital.website}"
                   target="_blank"
                   class="card">

                    <img src="${hospital.image}" class="card-image">

                    <div class="card-content">
                        <h3>${hospital.name}</h3>
                        <p>${hospital.location}</p>
                        <span class="card-link">
                            Visit Website
                        </span>
                    </div>

                </a>
            `,
      )
      .join("");

    // Ambulances
    document.getElementById("ambulance-container").innerHTML = data.ambulances
      .map(
        (ambulance) => `
                <div class="card">
                    <div class="card-content">
                        <h3>${ambulance.driverName}</h3>
                        <p>Ambulance: ${ambulance.ambulanceNumber}</p>
                        <p>Location: ${ambulance.location}</p>
                        <p>Mobile: ${ambulance.mobileNumber}</p>

                        <span class="available">Available</span>
                    </div>
                </div>
            `,
      )
      .join("");

      // Medicine & Medical Equipment
document.getElementById("medicine-container").innerHTML =
  data.medicineStores
    .map(
      (store) => `
        <a href="${store.website}"
           target="_blank"
           rel="noopener noreferrer"
           class="card">

          <img
            src="${store.image}"
            class="card-image"
            alt="${store.name}"
          >

          <div class="card-content">
            <h3>${store.name}</h3>

            <p>${store.description}</p>

            <span class="guide-category">
              ${store.category}
            </span>

            <br>

            <span class="card-link">
              Visit Website
            </span>
          </div>

        </a>
      `,
    )
    .join("");


    // Medical guides
    document.getElementById("guide-container").innerHTML = data.medicalGuides
      .map(
        (guide) => `
        <a href="${guide.website}"
           target="_blank"
           class="card">

        

            <div class="card-content">
                <h3>${guide.name}</h3>
                <p>${guide.description}</p>

                <span class="card-link">
                    Read Guide
                </span>
            </div>

        </a>
    `,
      )
      .join("");

    // Hospital slideshow
    let slide = 0;

    function showHospital() {
      document.getElementById("hospital-slider-image").src =
        data.hospitals[slide].image;

      document.getElementById("hospital-slider-name").textContent =
        data.hospitals[slide].name;

      slide = (slide + 1) % data.hospitals.length;
    }

    showHospital();

    setInterval(showHospital, 2000);
  });
