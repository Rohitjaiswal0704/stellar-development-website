const button1=document.querySelector(".button1");
const menupop=document.querySelector(".menupop");


button1.addEventListener("click",function(){
    menupop.style.display="initial";
})
menupop.addEventListener("click",function(){
    menupop.style.display="none";
})


var container_nav_i=document.querySelector(".container>nav>i");
var menubar=document.querySelector(".menubar");
var menubar_one100=document.querySelector(".menubar>.one100");
 

container_nav_i.addEventListener("click",function(){
        menubar.style.top="0%";
})

menubar_one100.addEventListener("click",function(){
        menubar.style.top="-100%";
})









// const scroll = new LocomotiveScroll({
//     el: document.querySelector(".maincontainer"),
//     smooth: true
// });

// gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".maincontainer"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the ".maincontainer" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy(".maincontainer", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector(".maincontainer").style.transform ? "transform" : "fixed"
// });



// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();
