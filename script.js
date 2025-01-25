document.querySelector('.login-btn').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent the form from submitting (if inside a form)
    window.location.href = 'main.html';  // Redirect to index.html
});
