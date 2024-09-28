function toggleAnswer(index) {
    const answer = document.getElementById(`answer-${index}`);
    const arrow = document.getElementById(`arrow-${index}`);
    
    // Toggle visibility of the answer
    answer.classList.toggle('hidden');
    
    // Rotate the arrow icon
    arrow.classList.toggle('fa-chevron-up');
    arrow.classList.toggle('fa-chevron-down');
  }

  document.getElementById('signInBtn').addEventListener('click', function() {
    window.location.href = 'Sign-up/sign-up.html'; // Redirect to the sign-in page
  });

  document.getElementById('logInBtn').addEventListener('click', function() {
    window.location.href = 'Login/Log-in.html'; // Redirect to the log-in page
  });

  function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
