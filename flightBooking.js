document.getElementById('flight-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const departureDate = document.getElementById('departure-date').value;
    const returnDate = document.getElementById('return-date').value;

    if (from === to) {
        alert('Departure and destination airports cannot be the same.');
        return;
    }

    if (departureDate && returnDate && new Date(departureDate) >= new Date(returnDate)) {
        alert('Return date must be later than departure date.');
        return;
    }

    alert(`Flight search initiated:\nFrom: ${from}\nTo: ${to}\nDeparture: ${departureDate}\nReturn: ${returnDate || 'N/A'}`);
});

  