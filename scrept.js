 // Download image function
      function downloadImage(imgPath) {
        const link = document.createElement('a');
        link.href = imgPath;
        link.download = imgPath.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }


      
      function updateClock() {
    // Options for formatting the time in 12-hour format with AM/PM
    const options = {
        timeZone: 'Asia/Dhaka',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true // Set to false for 24-hour format
    };

    // Get the current date and time formatted for Asia/Dhaka
    const now = new Date();
    const formattedTime = new Intl.DateTimeFormat('en-US', options).format(now);

    // Display the time in the HTML element
    document.getElementById('clock').textContent = formattedTime;
}

// Update the clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);