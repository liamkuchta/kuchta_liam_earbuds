(() => {
  const hotspots = document.querySelectorAll(".Hotspot");

  const infoBoxes = [
    {
      image: "images/mute.png",
      title: "NOISE CANCELLING",
      text: "Advanced noise-cancelling technology blocks out background sounds so you can focus completely on your music or calls."

    },
    {
      image: "images/earpiece.png",
      title: "LUXURY EARPIECE",
      text: "A soft, flexible silicone earpiece that gently seals in your ear for a snug, comfortable fit and all-day listening ease."

    },
    {
      image: "images/signal.png",
      title: "SPACE ANTENNA",
      text: "Receive signals from alien intelligence with new break through deep space theta wave technology."
    }
  
  ]

//functions

  function loadInfo() {
    infoBoxes.forEach((infoBox, index)=>{
      // console.log(index+1);
      //selected will be the inforBox on our page, e.g.hotspot-1, hotspot-2, etc.
      let selected = document.querySelector(`#hotspot-${index+1}`);
      console.log(selected);

      //lets create an img
      const imageElement = document.createElement('img');
      //lets populate the img
      imageElement.src = infoBox.image;

      //lets create an h2
      const titleElement = document.createElement('h2');
      //lets populate the h2
      titleElement.textContent = infoBox.title;

      //lets create a p
      const textElement = document.createElement('p');
      //lets populate the p
      textElement.textContent = infoBox.text;

      //lets add the img to the selected hotspot
      selected.appendChild(imageElement);
      //lets add the h2 to the selected hotspot
      selected.appendChild(titleElement);
      //lets add the p to the selected hotspot
      selected.appendChild(textElement);

    });
  }
  loadInfo();

   function showInfo() {
    //console.log(this.slot);
    //console.log(`#${this.slot}`);
    //since the slot value matches the id value I can use the slot value as a selector to get to the div I want.
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, { duration: 1, autoAlpha: 1 });
  }

  function hideInfo() {
    //console.log(this.slot);
    //console.log(`#${this.slot}`);
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, { duration: 1, autoAlpha: 0 });
  }
  
 hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

})();

// In this version, the event listeners use regular functions instead of arrow functions, so the "this" keyword inside the event listeners will refer to the DOM element that triggered the event.