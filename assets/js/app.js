const events = [
    { 
        day: "Torsdag",
        time: "14:00", 
        artist: "St. Mariæ Skolens Bigband", 
        location: "Jazzscenen på Gammeltorv", 
        price: "free",
        image: "./img/st. Mariæ Skolens Bigband.jpg"
    },
    { 
        day: "Torsdag",
        time: "19:30", 
        artist: "Arosia", 
        location: "Jazzscenen på Gammeltorv", 
        price: "free",
        image: "./img/Arosia.jpg"
    },
    { 
        day: "Torsdag",
        time: "20:00", 
        artist: "Brønderslev Big Bang", 
        location: "Jazzscenen på Gammeltorv", 
        price: "free",
        image: "./img/Brønderslev Big Band.png"
    },
    { 
        day: "Torsdag",
        time: "21:00", 
        artist: "Late Night Jam", 
        location: "Abzalon Event Factory", 
        price: "50,-",
        image: "./img/Late night jam.png"
    },
    { 
        day: "Torsdag",
        time: "21:00", 
        artist: "Lothar, Nande & Lindholt", 
        location: "John Bull Pub", 
        price: "free",
        image: "./img/Lothar, Nande & Lindholt.jpg"
    },
    { 
        day: "Fredag",
        time: "15:00", 
        artist: "Malthe Nielsen og Henning Jensen", 
        location: "Kystens Perle", 
        price: "free",
        image: "./img/Malthe Nielsen og Henning Jensen.jpg"
   },
    { 
        day: "Fredag",
        time: "15:00", 
        artist: "Chris Andersen Trio", 
        location: "Salling Algade Torv", 
        price: "free",
        image: "./img/Chris Andersen Trio.jpg"
    },
    { 
        day: "Fredag",
        time: "16:00", 
        artist: "Thomas Munk Trio", 
        location: "Quist Wine", 
        price: "free",
        image: "./img/Thomas Munk Trio.jpg"
   },
   { 
        day: "Fredag",
        time: "21:00", 
        artist: "Wash & Kjær", 
        location: "Duus Vinkælder", 
        price: "free",
        image: "./img/Wash & Kjær.jpg"
    },
    { 
        day: "Lørdag",
        time: "14:00", 
        artist: "Jazzen på pladsen", 
        location: "Louise Plads", 
        price: "free",
        image: "./img/Jazzen på pladsen.jpg"
    },
    { 
        day: "Lørdag",
        time: "15:00", 
        artist: "Late Lunch and Laid Back grooves", 
        location: "KaffeFair", 
        price: "free",
        image: "./img/Late Lunch and Laid Back grooves.jpg"
    },
    { 
        day: "Lørdag",
        time: "15:00", 
        artist: "Jesper Theis og RJ Mischo", 
        location: "Kulturcenter Fjordbyen", 
        price: "free",
        image: "./img/Jesper Theis og RJ Mischo.jpg" 
    },
    { 
        day: "Lørdag",
        time: "16:00", 
        artist: "Big Creek Slim & Johnny Burgin", 
        location: "Kulturcenter Fjordbyen", 
        price: "free",
        image: "./img/Big Creek Slim Johnny Burgin.png"
    },
    { 
        day: "Lørdag",
        time: "18:00", 
        artist: "Sahra Da Silva Band", 
        location: "Salling Rooftop", 
        price: "free",
        image: "./img/Sahra Da Silva Band.png"
},

];
// Function renderEvents er en funktion der viser events på siden.
function renderEvents(filteredEvents) {
    let containerEl = document.querySelector("#eventContainer");
        containerEl.innerHTML = "";

    filteredEvents.forEach(event => {
        let eventEl = document.querySelector("#eventContainer");
        eventEl.innerHTML +=      `     
            <article>
            <img src="${event.image}" alt="${event.artist}" loading="lazy" />
            <h3>${event.artist}</h3>
            <p>Sted: ${event.location}</p>
            <p>Day: ${event.day}</p>
            <p>Tidspunkt:${event.time}</p>
            <p>Entre: ${event.price === "free" ? "Gratis" : event.price}</p>
            </article>
        `;
    });
     }


// FilterEvents funktionen bruges til at filtrere events
function filterEvents() {
// her hender jeg værdierne til vores drop down menuer fra HTML
    let dayFilterEl = document.querySelector("#filterDay").value;
    let locationFilterEl = document.querySelector("#filterLocation").value;
    let timeFilterEl = document.querySelector("#filterTid").value;
// Her benytter jeg en loop hvor jeg benytter forEach => da vi har et array.Her benytter jeg filter metoden til at filtrere vores events
    let filteredEvents = events.filter(event => 
        (dayFilterEl === "all" || event.day === dayFilterEl) &&
        (locationFilterEl === "all" || event.location === locationFilterEl) &&
        (timeFilterEl === "all" || event.time === timeFilterEl)
// Hvis de vælger all kan alle events ses i dropdown, ellers kun de valgte.
    
    );

    renderEvents(filteredEvents);
}

// Event listeners for dropdowns, her fortæller vi blot at der skal ske en "ændring" når der vælges noget i dropdowns. Uden EventListener vil der ikke ske en ændring. 
document.querySelector("#filterDay").addEventListener("change", filterEvents);
document.querySelector("#filterLocation").addEventListener("change", filterEvents);
document.querySelector("#filterTid").addEventListener("change", filterEvents);

// RenderEvents betyder at den viser alle events.
renderEvents(events);