
// Component loader for HTML includes
function loadComponent(elementId, componentPath) {
  fetch(componentPath)
    .then(response => response.text())
    .then(html => {
      document.getElementById(elementId).innerHTML = html;
    })
    .catch(error => {
      console.error('Error loading component:', error);
    });
}

// Load all components
function loadAllComponents() {
  const components = [
    { id: 'navigation', path: 'components/navigation.html' },
    { id: 'hero', path: 'components/hero.html' },
    { id: 'about', path: 'components/about.html' },
    { id: 'events', path: 'components/events.html' },
    { id: 'team', path: 'components/team.html' },
    { id: 'footer', path: 'components/footer.html' }
  ];

  let loadedCount = 0;
  const totalComponents = components.length;

  components.forEach(component => {
    fetch(component.path)
      .then(response => response.text())
      .then(html => {
        document.getElementById(component.id).innerHTML = html;
        loadedCount++;
        
        // Initialize scripts after all components are loaded
        if (loadedCount === totalComponents) {
          initializeApp();
        }
      })
      .catch(error => {
        console.error(`Error loading ${component.id}:`, error);
      });
  });
}

// Initialize app after components are loaded
function initializeApp() {
  createMatrixRain();
  initAOS();
  initSmoothScroll();
  initMobileNav();
  initExploreButton();
}
