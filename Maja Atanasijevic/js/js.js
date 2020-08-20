


window.addEventListener('scroll' , scrollFunction,false);


function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

var btn = document.getElementById('myBtn');
  btn.addEventListener("click",topFunction,false);
  function topFunction() {
  currentYOffset = self.pageYOffset;
  initYOffset = currentYOffset;

  var intervalId = setInterval(function(){
  currentYOffset -= initYOffset*0.10;
  document.body.scrollTop = currentYOffset ;
  document.documentElement.scrollTop = currentYOffset;

    if(self.pageYOffset == 0){
      clearInterval(intervalId);
    }
  }, 20);

}

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 2800);
}
