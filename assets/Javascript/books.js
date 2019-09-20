$(document).ready(function(){
 
 
  var bookApi= "AIzaSyAOMEGBcZM52PxoloGuA8EjcWPOw1fJIJs";
  var yelpApi= "Vz47dpZcuUUiQHoDUhocATeDvpK3HROrFQJn-bxpmIN9uQ1c98taQXTiYmpymZbuhSMluME66RlWDHjwKHDfwSQen-sLdTqN2siW-J_0ATdUjDW4b27AadLOisCDXXYx";
  
  var search2= 'Sporty,Groomsman';
  var bookUrl='https://www.googleapis.com/books/v1/volumes?q='+search2+'&maxResults=4&orderBy=relevance&key=' +bookApi
  
  var search =$(this).text()

  

  $.ajax({
    method: "GET",
    url: bookUrl,
  }).then(function(response){
    console.log(bookUrl)
    console.log(response)
  })







})