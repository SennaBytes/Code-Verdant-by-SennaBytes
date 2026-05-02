/* ===================================
   Project: [Portfolio | Senna Klijn]
   File: script.js
   Author: [Senna Klijn]
   Description: Main script
   =================================== */

/* ==========================
       content styling  
 ========================== */

// Variable
   const scroll_X_Cont = document.querySelector(".cardContainerX");

// scroll x functie in scrollX section
   scroll_X_Cont.addEventListener("wheel", (wheel) => {

   wheel.preventDefault();
   scroll_X_Cont.scrollLeft += wheel.deltaY;


   console.log(scroll_X_Cont)

   });