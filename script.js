document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Reset error messages
    document.getElementById('nameError').style.display = 'none';
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('messageError').style.display = 'none';
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validate form
    let isValid = true;
    
    if (name === '') {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }
    
    if (email === '' || !email.includes('@') || !email.includes('.')) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }
    
    if (message === '') {
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    }
    
    // If form is valid, show success message
    if (isValid) {
        document.getElementById('successMessage').style.display = 'block';
        
        // Reset form
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            document.getElementById('successMessage').style.display = 'none';
        }, 5000);
    }
});