const topics = [
    {
      id: "wirefram_single_Page",
      title: "Wireframe Single Page",
      description: "A clean, minimalist wireframe for a single-page website."
    },
    {
      id: "website_prototype",
      title: "Website Prototype",
      description: "An interactive website prototype showing page transitions and animations."
    }
  ];
  
  function generateTopic() {
    const randomIndex = Math.floor(Math.random() * topics.length);
    return topics[randomIndex];
  }
  
  module.exports = generateTopic;
  