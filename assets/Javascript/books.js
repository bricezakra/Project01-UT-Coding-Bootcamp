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
    console.log(response)
    var items= response.items;
    for (var i =0; i< items.length; i++){

      var title = response.items[i].volumeInfo.title;
      var author = response.items[i].volumeInfo.authors[0];
      var description = response.items[i].volumeInfo.description;
      var coverImg = response.items[i].volumeInfo.imageLinks.smallThumbnail;
      console.log(title)
      console.log(author)
      console.log(description)
      console.log(coverImg)
      
      $(".card-title0").text(response.items[0].volumeInfo.title);
      $(".card-title1").text(response.items[1].volumeInfo.title);
      $(".card-title2").text(response.items[2].volumeInfo.title);
      $(".card-title3").text(response.items[3].volumeInfo.title);

      $(".book-cover0").text("src="+response.items[0].volumeInfo.imageLinks.smallThumbnail);
      $(".book-cover1").text(response.items[1].volumeInfo.imageLinks.smallThumbnail);
      $(".book-cover2").text(response.items[2].volumeInfo.imageLinks.smallThumbnail);
      $(".book-cover3").text(response.items[3].volumeInfo.imageLinks.smallThumbnail);
      }

    












  })












})