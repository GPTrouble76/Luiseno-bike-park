// Open the booking form modal
function openBookingForm() {
    document.getElementById('bookingForm').style.display = 'block';
}

// Close the booking form modal
function closeBookingForm() {
    document.getElementById('bookingForm').style.display = 'none';
}

// Handle the booking form submission
document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const date = document.getElementById('date').value;
    const passType = document.getElementById('pass-type').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Simple booking confirmation in the console (replace with a real reservation system)
    console.log(`Reservation Details:
    Name: ${name}
    Email: ${email}
    Date: ${date}
    Pass Type: ${passType}`);

    alert('Thank you! Your shuttle pass has been booked.');
    closeBookingForm();
});
