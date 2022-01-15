document.addEventListener("DOMContentLoaded", function() {
  /* document.querySelector('.js-triggerAnimation').addEventListener('click', function() {
    console.log('click button')
    document.querySelector('.js-interaction').classList.add('animate-fade-in-down')
  }) */
  // Create the observer
  const observer = new IntersectionObserver(entries => {
    // console.log(entries)
    entries.forEach(entry => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-down')
      }
    })
  });

  // Tell the observer which elements to track
  const spies = document.querySelectorAll('.js-interaction')
  spies.forEach(spy => {
    observer.observe(spy);
  })
});