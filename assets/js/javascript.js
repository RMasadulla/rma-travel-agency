const form = document.getElementById('inquiryForm');
const popup = document.getElementById('popup');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Simulate sending email
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const packageType = document.getElementById('packageType').value;
    const specialRequests = document.getElementById('specialRequests').value;

    // Here you would typically use an API (e.g., EmailJS) to send the email
    console.log(`Sending inquiry for ${name} (${email}, ${contact}), Package: ${packageType}, Requests: ${specialRequests}`);

    // Show popup confirmation
    popup.style.display = 'block';

    // Hide popup after 3 seconds
    setTimeout(() => {
        popup.style.display = 'none';
        form.reset();
    }, 3000);
});