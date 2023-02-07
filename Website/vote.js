let clickyes = 0;
let clickno = 0;

function getTotals () {
  var total = document.getElementById("total")
  total.innerHTML = "People who liked this movie:" + clickyes;
  total.innerHTML += "<br />People who did not like this movie:" + clickno;
  total.innerHTML += "<br />Total number of votes:" + (clickyes + clickno);
}

document.getElementById("yes").addEventListener('click', function() {
   clickyes++;
   getTotals();
});

document.getElementById("no").addEventListener('click', function() {
   clickno++;
   getTotals();
});

$(document).ready(function(){
 $("#yes").click(function(){
  $(".clicker").hide();
 });
});

$(document).ready(function(){
 $("#no").click(function(){
  $(".clicker").hide();
 });
});

