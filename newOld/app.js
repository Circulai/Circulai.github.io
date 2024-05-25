if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered:', registration);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  });
}




// Additional JavaScript functionality can go here


   function onPageLoad() {
      console.log("Page loaded");
      
      // Appending text to the body
      var newText = document.createElement('p');
      newText.textContent = "JS is AWESOME! and body finsihed loading.";
      document.body.appendChild(newText);
    }

    // Adding event listener to execute onPageLoad function when page is loaded
window.addEventListener('load', onPageLoad);