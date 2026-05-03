/* ===================================
   Project: [Portfolio | Senna Klijn]
   "School Portfolio"
   File: script_noURLs.js
   Author: [Senna Klijn]
   Vital to: about.html
   Description: Secondary script
   =================================== */

/* ==========================
      scroll X - mechanism  
 ========================== */

// variables
   const scroll_X_Cont = document.querySelector(".cardContainerX");
   
// scroll x functie in scrollX section
   scroll_X_Cont.addEventListener("wheel", (wheel) => {

   wheel.preventDefault();
   scroll_X_Cont.scrollLeft += wheel.deltaY;


   console.log(scroll_X_Cont)

   });

