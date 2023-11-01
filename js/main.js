/*----------------*/
document.querySelector('.set i').onclick = function(){
   this.classList.toggle("fa-spin")
   document.querySelector(".setting").classList.toggle("open")
}
let colorsLi = document.querySelectorAll('.setting ul li');
// Set colors
colorsLi.forEach(li => {
   if (localStorage.getItem("Color_Option") !== null) {
      document.documentElement.style.setProperty("--main-color" , localStorage.getItem("Color_Option") )
   }
   colorsLi.forEach(li => {
      if (li.getAttribute("data-color") == localStorage.getItem("Color_Option") ) {
         li.classList.add("active")
      }
   });
   li.addEventListener('click',(e)=>{
      document.documentElement.style.setProperty("--main-color" , e.target.dataset.color)
      localStorage.setItem("Color_Option" , e.target.dataset.color )
      colorsLi.forEach(li => {
         li.classList.remove("active")   });
      li.classList.add("active")
   })
});
// Set backgrounds
let randomBg = document.querySelectorAll(".backgrounds .bg span")
let backgrounOption = true , bgInterval ;
if (localStorage.getItem("Background_Option") == 'true') {
   document.querySelector(".yes").classList.add("active")
   backgrounOption == true ;
   radomBackground();
} else if (localStorage.getItem("Background_Option") == 'false') {
   document.querySelector(".no").classList.add("active")
   backgrounOption == false ;
   clearInterval(bgInterval);
}
randomBg.forEach((span)=>{
   span.addEventListener('click',(e)=>{
      randomBg.forEach((el)=>{
         el.classList.remove("active")
      })
      span.classList.add("active")
      if (e.target.dataset.background == 'yes'){
         backgrounOption == true ;
         radomBackground();
         localStorage.setItem("Background_Option" , true )
      }else {
         backgrounOption == false ;
         clearInterval(bgInterval);
         localStorage.setItem("Background_Option" , false )
      }
   })
});
/*----------------*/
let head = document.querySelector("header");
let arrayImgs = [ "header1.jpg" , "header2.jpg" , "header3.jpg" , "header4.jpg" , "header5.jpg" ] ;
function radomBackground(){
   if (backgrounOption ) {
      bgInterval = setInterval(()=>{
         let randomNumber = Math.floor((Math.random()*100%5))
         head.style.background = ` linear-gradient(rgba(0, 0, 0, 0.6) , rgba(0, 0, 0, 0.6))
         , url('images/${arrayImgs[randomNumber]}')`
      },10000)
   }
}
/*----------------*/
// Skills
let mySkills = document.querySelector('.skills')
window.onscroll = function () {
   let skillOffsetTop = mySkills.offsetTop ;
   let skillOuterHeight = mySkills.offsetHeight ;
   let windowHeight = this.innerHeight ;
   let windowScrollTop = this.pageYOffset ;
   if ( windowScrollTop > skillOffsetTop  -  windowHeight ) {
      let allSkills = document.querySelectorAll(".skills .box div span")
      allSkills.forEach(skill=>{
         skill.style.width = `${skill.dataset.progress}%` ;
      })
   }  
}
/*----------------*/
// Gallery
let photos = document.querySelectorAll(".gallery .images img");
photos.forEach((ph) => {
   ph.addEventListener('click' , function(){
      let overlay = document.createElement("div");
      overlay.className = "popup_overlay"
      document.body.appendChild(overlay);
      let popup_card = document.createElement("div");
      popup_card.className = "popup_card"
      document.body.appendChild(popup_card);
      let h3 = document.createElement("h3");
      let imgText = document.createTextNode(ph.alt);
      h3.append(imgText);
      popup_card.append(h3)
      let popup_img = document.createElement("img");
      popup_img.src = ph.src ;
      popup_card.append(popup_img);
      let popup_close = document.createElement("p");
      popup_close.className = "popup_close" ;
      popup_close.innerHTML = "X" ;
      popup_card.append(popup_close) ;
   })
})
document.addEventListener('click',function(e){
   if(e.target.className == 'popup_close'){
      e.target.parentNode.remove();
      document.querySelector(".popup_overlay").remove()
   }
})
/*----------------*/
// ScrollTo
function ScrollToAny(elements) {
   elements.forEach(ele => {
      ele.addEventListener("click", e=>{
         e.preventDefault();
            document.querySelector(e.target.dataset.sec).scrollIntoView({
               behavior: 'smooth'
            })
      })
   })
}
let allBullets = document.querySelectorAll(".nav-bullets .bullet");
ScrollToAny(allBullets);
let allLinks = document.querySelectorAll("header nav a");
ScrollToAny(allLinks);
/*----------------*/
let showBullets = document.querySelectorAll(" .setting .bullets-box span ")
let bullets = document.querySelector(".nav-bullets");
let loacalBullets = localStorage.getItem("bullets_option");
if (loacalBullets == 'block' ) {
   bullets.style.display = 'block'
   document.querySelector(".bullets-box .yes").classList.add("active");
}else if (loacalBullets == 'none'){
   bullets.style.display = 'none'
   document.querySelector(".bullets-box .no").classList.add("active");
}
showBullets.forEach((span) => {
   span.addEventListener("click",(e)=>{
      showBullets.forEach((e) => {
         e.classList.remove("active");
      })
      span.classList.add("active");
      if ( span.dataset.display == "yes" ) {
         bullets.style.display = 'block'
         localStorage.setItem("bullets_option",  'block');
      }else {
         bullets.style.display = 'none'
         localStorage.setItem("bullets_option", 'none' );
      }
   })
})
/*----------------*/
document.querySelector(".reset_buttun").onclick = function(){
   localStorage.clear();
   window.location.reload();
}
/*----------------*/
let toggleBtn = document.querySelector("header nav .toggles");
let navLinks = document.querySelector("header nav ul");
toggleBtn.onclick = function(){
   navLinks.classList.toggle("open")
}
document.addEventListener("click",(e)=>{
   if(e.target !== toggleBtn){
      navLinks.classList.remove("open")
   }
})
/*----------------*/

