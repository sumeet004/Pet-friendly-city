// Smooth scroll for call-to-action buttons
document.querySelectorAll('.cta-buttons button').forEach(button => {
    button.addEventListener('click', (e) => {
      const targetText = e.target.textContent.toLowerCase();
      let sectionId = '';
      if (targetText.includes('join')) sectionId = 'volunteer';
      else if (targetText.includes('learn')) sectionId = 'stories';
      else if (targetText.includes('volunteer')) sectionId = 'volunteer';
  
      if (sectionId) {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Pet Adoption Carousel Data (Simulated AI Suggestions)
  const pets = [
    { name: 'Bella 🐶', image: 'https://source.unsplash.com/200x150/?dog' },
    { name: 'Milo 🐱', image: 'https://source.unsplash.com/200x150/?cat' },
    { name: 'Luna 🐕', image: 'https://source.unsplash.com/200x150/?puppy' },
    { name: 'Charlie 🐾', image: 'https://source.unsplash.com/200x150/?kitten' },
    { name: 'Max 🐕‍🦺', image: 'https://source.unsplash.com/200x150/?pet,dog' },
    { name: 'Daisy 🐈', image: 'https://source.unsplash.com/200x150/?pet,cat' },
  ];
  
  // Generate Pet Profiles in Carousel
  const carousel = document.getElementById('pet-carousel');
  pets.forEach(pet => {
    const div = document.createElement('div');
    div.className = 'carousel-item';
    div.innerHTML = `
      <img src="${pet.image}" alt="${pet.name}">
      <h4>${pet.name}</h4>
    `;
    carousel.appendChild(div);
  });
  
  // Basic Placeholder for PawBuddy Chatbot
  const chatbotBox = document.getElementById('chatbot-box');
  chatbotBox.innerHTML = `
    <p><strong>PawBuddy:</strong> Woof! 🐾 I’m your pet-friendly assistant. Ask me about volunteering, adoption, or how to make your city pet-happy!</p>
    <p><em>[Chatbot functionality powered by ChatGPT API or Dialogflow can be integrated here]</em></p>
  `;
  