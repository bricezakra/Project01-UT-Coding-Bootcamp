var search2 = "chuck norris";

$(document).ready(function() {

    //api keys
    var bookApi = "AIzaSyAOMEGBcZM52PxoloGuA8EjcWPOw1fJIJs";


    // var search2 = $("#readBookGenre").val();
    var bookUrl = 'https://www.googleapis.com/books/v1/volumes?q=' + search2 + '&maxResults=4&orderBy=relevance&key=' + bookApi


     //on click listeners - functions can be renamed
    //this function signals when user has 'submitted' & pulls a search
    function userSearch(){
        console.log("user has submitted something");
        search2 = $("#readBookGenre").val();
        alert("userSearch: here's what was entered: " + search2);
        bookUrl = 'https://www.googleapis.com/books/v1/volumes?q=' + search2 + '&maxResults=4&orderBy=relevance&key=' + bookApi
        alert(bookUrl);
        $.ajax({
            url: bookUrl,
            method: "GET",
            error: function(){
                alert("userSearch: there was an error");
            }, success: function (response){
                alert("userSearch: I did it");
                var items = response.items;
        for (var i = 0; i < items.length; i++) {

            // var title = response.items[i].volumeInfo.title;
            // var author = response.items[i].volumeInfo.authors[0];
            // var description = response.items[i].volumeInfo.description;
            // var coverImg = response.items[i].volumeInfo.imageLinks.smallThumbnail;
            

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
            }, complete: function(){
                alert("userSearch: You complete me");
            },
            
        })
        return false;

    }

    $("form").submit((userSearch));
})



