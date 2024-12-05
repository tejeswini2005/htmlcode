function bookRoom(roomType) {
    alert(`You have selected the ${roomType}. Please fill out the booking form below.`);
}

document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const checkIn = document.getElementById('check-in').value;
    const checkOut = document.getElementById('check-out').value;

    if (new Date(checkIn) >= new Date(checkOut)) {
        alert('Check-out date must be later than check-in date.');
        return;
    }

    alert(`Thank you, ${name}! Your booking from ${checkIn} to ${checkOut} is confirmed. Details will be sent to ${email}.`);
});
