let map, service, infoWindow;

// Main Trip Planning Logic
function planTrip() {
    const transitHours = document.getElementById('transit-hours').value;
    const departureTime = document.getElementById('departure-time').value;

    if (!transitHours || !departureTime) {
        alert('Please fill in all the fields.');
        return;
    }

    // Show Tourism Places Section
    document.getElementById('main-page').classList.add('hidden');
    document.getElementById('tourism-places').classList.remove('hidden');

    initializeMap();
    findNearbyPlaces(transitHours);
}

// Initialize Map
function initializeMap() {
    infoWindow = new google.maps.InfoWindow();
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.7749, lng: -122.4194 }, // Default to San Francisco
        zoom: 12,
    });

    // Get User Location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                map.setCenter(pos);
            },
            () => {
                alert('Could not get your location. Please enable GPS.');
            }
        );
    }
}

// Find Nearby Tourist Places
function findNearbyPlaces(transitHours) {
    const request = {
        location: map.getCenter(),
        radius: transitHours * 1000, // Adjust radius
        type: ['tourist_attraction'],
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            const placesList = document.getElementById('places-list');
            placesList.innerHTML = '';

            results.forEach((place) => {
                const placeDiv = document.createElement('div');
                placeDiv.textContent = place.name;
                placeDiv.className = 'place-item';
                placeDiv.onclick = () => showPlaceOnMap(place);
                placesList.appendChild(placeDiv);
            });
        } else {
            alert('No tourist attractions found nearby.');
        }
    });
}

// Show Place on Map
function showPlaceOnMap(place) {
    map.setCenter(place.geometry.location);
    const marker = new google.maps.Marker({
        position: place.geometry.location,
        map: map,
    });

    infoWindow.setContent(place.name);
    infoWindow.open(map, marker);
}

// Back to Main Page
function backToMain() {
    document.getElementById('tourism-places').classList.add('hidden');
    document.getElementById('main-page').classList.remove('hidden');
}
