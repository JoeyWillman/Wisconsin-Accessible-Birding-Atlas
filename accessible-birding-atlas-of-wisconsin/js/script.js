document.addEventListener('DOMContentLoaded', () => {
    console.log('Accessible Birding Atlas of Wisconsin loaded successfully!');
  
    // Example: Adding click event listener to the 'View the Map' button
    const viewMapButton = document.querySelector('.btn-primary');
    
    if (viewMapButton) {
      viewMapButton.addEventListener('click', () => {
        console.log('View Map button clicked!');
        // Future functionality: Fetch and display map data dynamically
      });
    }
  
    // Example: Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
  
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href').replace('.html', '');
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });
  document.getElementById('checklist-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const date = document.getElementById('date').value;
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  const radius = document.getElementById('radius').value;

  // Placeholder for fetching hotspots and generating a checklist
  console.log(`Date: ${date}, City: ${city}, State: ${state}, Radius: ${radius} km`);

  // Simulate fetching data from an API (replace with actual API call)
  const checklist = [
    'Northern Cardinal',
    'American Robin',
    'Blue Jay',
    'Black-capped Chickadee',
    'Downy Woodpecker',
    'Mallard',
    'Red-tailed Hawk',
    'Great Blue Heron',
    'House Sparrow',
    'Mourning Dove',
  ];

  displayChecklist(checklist);
});

function displayChecklist(birds) {
  const checklistContainer = document.getElementById('checklist');
  checklistContainer.innerHTML = '';

  birds.forEach(bird => {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.textContent = bird;
    checklistContainer.appendChild(listItem);
  });

  document.getElementById('checklist-results').style.display = 'block';
}

document.getElementById('download-pdf').addEventListener('click', () => {
  alert('PDF download functionality will be implemented here.');
});
document.getElementById('checklist-form').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    console.log('Form submitted!');
  
    const date = document.getElementById('date').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const radius = document.getElementById('radius').value;
  
    console.log(`Date: ${date}`);
    console.log(`City: ${city}`);
    console.log(`State: ${state}`);
    console.log(`Radius: ${radius} km`);
  
    // Simulate fetching data from an API (replace with actual API call)
    const checklist = [
      'Northern Cardinal',
      'American Robin',
      'Blue Jay',
      'Black-capped Chickadee',
      'Downy Woodpecker',
      'Mallard',
      'Red-tailed Hawk',
      'Great Blue Heron',
      'House Sparrow',
      'Mourning Dove',
    ];
  
    displayChecklist(checklist);
  });
  
  function displayChecklist(birds) {
    console.log('Displaying checklist...');
    const checklistContainer = document.getElementById('checklist');
    checklistContainer.innerHTML = '';
  
    birds.forEach(bird => {
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item';
      listItem.textContent = bird;
      checklistContainer.appendChild(listItem);
    });
  
    document.getElementById('checklist-results').style.display = 'block';
  }
  