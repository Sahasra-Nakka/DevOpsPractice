document.getElementById('registrationForm').onsubmit = function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var selectedEvent = document.getElementById('event').value;

    if (name && email && phone && selectedEvent) {
        document.getElementById('result').innerText = 'Registration Successful!';
        document.getElementById('registrationForm').reset();
    } else {
        document.getElementById('result').innerText = 'Please fill out all fields.';
    }
};

