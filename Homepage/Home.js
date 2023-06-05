var topBox = document.getElementById("topbox");
backToTopBtn.addEventListener('click', function() {
  function scrollToTop() {
    if (document.documentElement.scrollTop > 0) {
      var scrollStep = document.documentElement.scrollTop / 20;
      window.requestAnimationFrame(function() {
        document.documentElement.scrollTop -= scrollStep;
        scrollToTop();
      });
    }
  }
  scrollToTop();
});

  
  
  
  
  