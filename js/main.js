(() => {
  const hotspots = document.querySelectorAll(".Hotspot");

  const infoFeatures = [
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
    infoFeatures.forEach((infoFeature, index)=>{
      // console.log(index+1);
      //selected will be the inforBox on our page, e.g.hotspot-1, hotspot-2, etc.
      let selected = document.querySelector(`#hotspot-${index+1}`);
      console.log(selected);

      //lets create an img
      const imageElement = document.createElement('img');
      //lets populate the img
      imageElement.src = infoFeature.image;

      //lets create an h2
      const titleElement = document.createElement('h2');
      //lets populate the h2
      titleElement.textContent = infoFeature.title;

      //lets create a p
      const textElement = document.createElement('p');
      //lets populate the p
      textElement.textContent = infoFeature.text;

      //lets add the img to the selected hotspot
      selected.appendChild(imageElement);
      //lets add the h2 to the selected hotspot
      selected.appendChild(titleElement);
      //lets add the p to the selected hotspot
      selected.appendChild(textElement);

    });
  }
  loadInfo();

   function displayInfo() {
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
    hotspot.addEventListener("mouseenter", displayInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

})();

// In this version, the event listeners use regular functions instead of arrow functions, so the "this" keyword inside the event listeners will refer to the DOM element that triggered the event.








// SCROLL ANIMATION SCROLL ANIMATION SCROLL ANIMATION SCROLL ANIMATION SCROLL ANIMATION 

(()=> {
  console.log("IIFE Called");

  const canvas = document.querySelector("#explode-view");
  const context = canvas.getContext("2d");

  canvas.width= 1920;
  canvas.height = 1080;

  //How many still frames do we have, you will need to adjust this
  const frameCount = 314; 

  //array to hold our images
  const images = [];

  //object will hold the current frame
  //we will use GreenSock to animate the frame property
  const buds = {
      frame: 0
  }

  //Run a for loop to populate images array
  for (let i=0; i<frameCount; i++) {
      const img = new Image();
      img.src = `images/render1_${i.toString().padStart(5, '0')}.webp`;
      images.push(img);
  }
  console.log(images);


 

  gsap.to(buds, {
      frame: 314,
      snap: "frame",
      scrollTrigger: {
          trigger: "#explode-view",
          pin: true,
          scrub: 1,
          start: "top top",
          markers: true,
          
      },
      onUpdate: render
  })

  images[0].addEventListener("load", render);

  function render() {
      //console.log(buds.frame);
      //console.log(images[buds.frame]);
      context.clearRect(0,0, canvas.width, canvas.height);
      context.drawImage(images[buds.frame], 0, 0);
  }

})();




// SLIDER SLIDER SLIDER SLIDER SLIDER SLIDER SLIDER SLIDER 

(() => {

  const splitLine = document.querySelector("#divisor");
  const slideHandle = document.querySelector("#slider");

  function moveLine() {
      // console.log(slider.value);
      splitLine.style.width = `${slideHandle.value}%`;
  }

  function resetXray() {
    slideHandle.value = 50;
  }

  slideHandle.addEventListener("input", moveLine);
  window.addEventListener("load", resetXray);
})();


// TEXT FADE IN

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("p").forEach((text) => {
  gsap.from(text, {
    opacity: 0,
    y: 30,
    duration: 1,
    scrollTrigger: {
      trigger: text
    }
  });
});
