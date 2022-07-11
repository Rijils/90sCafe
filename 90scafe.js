//  Initialize Swiper

var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});

//Email validation

function emailSentValidation() {
  var gname = document.getElementById("name-sheet").value;
  var gemail = document.getElementById("email-sheet").value;
  var gRegion = document.getElementById("region-sheet").value;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (gname.trim() != "" && gemail.trim() != "" && gRegion.trim() != "") {
   
    if(gemail.trim().match(mailformat))
    {

      document.getElementById("email-submit").removeAttribute("disabled");
      document.getElementById("email-submit").style.background="#24A0ed";
      document.getElementById("email-submit").style.borderBlock="#24A0ed";
    
    }else{
      document.getElementById("email-submit").disabled=true;
    
    document.getElementById("email-submit").style.background="#666666" ;
    document.getElementById("email-submit").style.borderColor="#666666" ;
    }
 
 
  }else{
    
    document.getElementById("email-submit").disabled=true;
    
    document.getElementById("email-submit").style.background="#666666" ;
    document.getElementById("email-submit").style.borderColor="#666666" ;

  }


}


//   Email-sent and google sheet functionality

$("#submit-form").submit((e) => {
  e.preventDefault();
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbzuh1ih_p_kCi1Zqwyqv8C1LBPCUJDDQ5wyT7zBFbuA9TZ16w5dqkTXmHSg5ksbbjXksA/exec",
    data: $("#submit-form").serialize(),
    method: "post",
    success: function (response) {
    

     // window.location.reload();
      
    },
    error: function (err) {
      alert("Something Error");
    },
  });
});

function closeWindow() {
  $('#exampleModal').modal('hide');
  window.location.reload();
}





// animation for the div

window.addEventListener("scroll", reval);
function reval() {
  var revals = document.querySelectorAll(".reval");
  for (var i = 0; i < revals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealtop = revals[i].getBoundingClientRect().top;
    var revealpoint = 150;
    if (revealtop < windowHeight - revealpoint) {
      revals[i].classList.add("active");
    } else {
      revals[i].classList.remove("active");
    }
  }
}

//preloader

window.onload = function () {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";

 setTimeout(() => {
  $(window).scrollTop(0);
 }, 100);
  
 
};


var swiper = new Swiper('.swiper-container', {
  speed: 500,
  effect: 'fade',
autoplay: {
delay: 5000,
},

});

//encrypted


  // document.onkeydown = function(e){
  //   if(e.keyCode==123){
  //     return false;
  //   }
  //   if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
  //     return false;
  //   }
  //   if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
  //     return false;
  //   }
  //   if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
  //     return false;
  //   }
  //   if(e.ctrlKey  && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
  //     return false;
  //   }
  // }

  $(document).ready(function(){

 
   

   $(window).on("scroll",function(){
     var wn = $(window).scrollTop();
     if(wn > 100){
     
       tourbtn.style. visibility = "hidden";
     }
     else{
       tourbtn.style. visibility = "visible";
     }
     if(wn > 10) {
       $(".navbar").css("background","#ffffff"); 
     }else{
       $(".navbar").css("background","rgba(0,0,0,0)");
     }
   });
 });


 let title = document.getElementById('cover-title');
let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let tourbtn = document.getElementById('tourbtn');
let rocks = document.getElementById('rocks');
let forest = document.getElementById('forest');
let water = document.getElementById('water');

window.addEventListener('scroll',function() {
  let value = window.scrollY;
  title.style.top = 20 + value * -0.5 + '%';
 
  bird1.style.top =  value * -1.5 + 'px';
  bird1.style.left =  value * 2 + 'px';
  
  bird2.style.top =  value * -1.5 + 'px';
  bird2.style.left = value * -5 + 'px';
  
  tourbtn.style.marginTop =  value * 1.5 + 'px';
  rocks.style.top = value * -0.12 + 'px';
})
 

