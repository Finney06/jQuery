
// VANILLA JAVASCRIPT
// for (var i = 0; i<5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function() {
//         document.querySelector("h1").style.color = "purple";
//     });
// }


//jQuery For Clicks
// $("button").click(function() {
//     $("h1").css("color", "purple");
// });

//jQuery For KeyPress
// $(document).keypress(function(event){
//     console.log(event.key);
//     $("h1").text(event.key); 
// });

//jQuery ON (mouseover h1 to purple)
// $(document).on("mouseover", function() {
//     $("h1").css("color", "purple");
// });

//jQuery ON (click h1 to purple)
// $(document).on("click", function() {
//     $("h1").css("color", "purple");
// });

//HIDE & SHOW
// $(document).on("click", function() {
//     $("h1").hide();
//     $("h1").show();
// });

//Toggle
// $(document).on("click", function() {
//     $("h1").toggle();
// });

//FADEOUT
// $(document).on("click", function() {
//     $("h1").fadeOut();
// });

// Fade Toggle
// $(document).on("click", function() {
//     $("h1").fadeToggle();
// });


//Slide Up / Slide Down / Slide Toggle
// $(document).on("click", function() {
//     $("h1").slideToggle();
// });

// ANIMATE
$(document).on("click", function() {
    $("h1").animate({opacity: 0.5, margin: "20"});
}); //you can only use this for numeric changes 
