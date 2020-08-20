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