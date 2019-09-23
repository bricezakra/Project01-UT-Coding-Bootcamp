$(document).ready(function() {


    //TODO this needs to be set as a function(lines 5-52) so that it can be called after every user Submit. See lines 54-65.
    var bookApi = "AIzaSyAOMEGBcZM52PxoloGuA8EjcWPOw1fJIJs";
    var yelpApi = "Vz47dpZcuUUiQHoDUhocATeDvpK3HROrFQJn-bxpmIN9uQ1c98taQXTiYmpymZbuhSMluME66RlWDHjwKHDfwSQen-sLdTqN2siW-J_0ATdUjDW4b27AadLOisCDXXYx";


    var search2 = $("#readBookGenre").val();
    var bookUrl = 'https://www.googleapis.com/books/v1/volumes?q=' + search2 + '&maxResults=4&orderBy=relevance&key=' + bookApi


    // @TODO: what is this getting used for? -angelica 
    // var search = $(this).text()
    
    var genreSearch = $("#readBookGenre").val();
    console.log(genreSearch)
    var authorSearch= $("#readBookAuthor").val();
    console.log(authorSearch)
    var fullSearch= genreSearch+authorSearch;
    console.log(fullSearch);
    


    $.ajax({
        method: "GET",
        url: bookUrl,
    }).then(function(response) {
    
        var items = response.items;
        for (var i = 0; i < items.length; i++) {

            var title = response.items[i].volumeInfo.title;
            var author = response.items[i].volumeInfo.authors[0];
            var description = response.items[i].volumeInfo.description;
            var coverImg = response.items[i].volumeInfo.imageLinks.smallThumbnail;
            

            $(".card-title0").text(response.items[0].volumeInfo.title);
            $(".card-title1").text(response.items[1].volumeInfo.title);
            $(".card-title2").text(response.items[2].volumeInfo.title);
            $(".card-title3").text(response.items[3].volumeInfo.title);


            $(".book-cover0").attr('src', response.items[0].volumeInfo.imageLinks.smallThumbnail);
            $(".book-cover1").attr('src', response.items[1].volumeInfo.imageLinks.smallThumbnail);
            $(".book-cover2").attr('src', response.items[2].volumeInfo.imageLinks.smallThumbnail);
            $(".book-cover3").attr('src', response.items[3].volumeInfo.imageLinks.smallThumbnail);

            $(".card-text0").text(response.items[0].volumeInfo.description);
            $(".card-text1").text(response.items[1].volumeInfo.description);
            $(".card-text2").text(response.items[2].volumeInfo.description);
            $(".card-text3").text(response.items[3].volumeInfo.description);

            $(".card-author0").text(response.items[0].volumeInfo.authors[0]);
            $(".card-author1").text(response.items[1].volumeInfo.authors[0]);
            $(".card-author2").text(response.items[2].volumeInfo.authors[0]);
            $(".card-author3").text(response.items[3].volumeInfo.authors[0]);
        }
    })

   
})

 //on click listeners - functions can be renamed
    //this function signals when user has 'submitted' & pulls a search
    function userSearch(){
        alert("user has submitted something");
        search2 = $("#readBookGenre").val();
        alert(search2);
        bookUrl = 'https://www.googleapis.com/books/v1/volumes?q=' + search2 + '&maxResults=4&orderBy=relevance&key=' + bookApi
        //call function that was named above

    }
    
$("form").submit(userSearch);