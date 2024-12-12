// Function to set the mood
function setMood(emoji, mood) {
       document.getElementById('mood-emoji').textContent = emoji;
       document.getElementById('mood-text').textContent = mood;
    
       // Save the mood to local storage
       localStorage.setItem('currentMood', JSON.stringify({ emoji, mood }));
    }
    
    // Function to toggle the sidebar visibility
    function toggleSidebar() {
       const sidebar = document.getElementById('sidebar');
       if (sidebar.classList.contains('hidden')) {
          sidebar.classList.remove('hidden');
          setTimeout(() => { // Delay adding visible class for animation
             sidebar.classList.add('visible');
             document.title = "🦄 Mood Tracker"; // Set tab title with unicorn
          }, 10); // Small delay to allow CSS transition
       } else {
          closeSidebar(); // Use closeSidebar function to handle closing
       }
    }
    
    // Function to close the sidebar
    function closeSidebar() {
       const sidebar = document.getElementById('sidebar');
       sidebar.classList.remove('visible'); // Remove visible class to slide out
       setTimeout(() => { // Delay adding hidden class for animation
          sidebar.classList.add('hidden');
          document.title = "Mood Tracker"; // Reset tab title when closed
       }, 500); // Match this timeout with the CSS transition duration
    }
    
    // Function to check the password
    function checkPassword() {
       const passwordInput = document.getElementById('password-input').value;
    
       if (passwordInput === "Niki") {
          document.getElementById('mood-panel').classList.remove('hidden');
          document.getElementById('password-input').value = ''; // Clear input
          document.title = "Access granted! 🦄"; // Change tab title for success
          setTimeout(() => { document.title = "Mood Tracker"; }, 2000); // Reset title after a delay
       } else {
          document.title = "Incorrect password!"; // Change tab title for incorrect password
          setTimeout(() => { document.title = "Mood Tracker"; }, 2000); // Reset title after a delay
       }
    }
    
    // Load saved mood on page load
    window.onload = function() {
       const savedMood = JSON.parse(localStorage.getItem('currentMood'));
       if (savedMood) {
          setMood(savedMood.emoji, savedMood.mood);
       }
    };
    
