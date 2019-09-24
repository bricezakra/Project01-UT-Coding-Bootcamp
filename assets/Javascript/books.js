var search2 = "chuck norris";

$(document).ready(function() {

    //api keys
    var bookApi = "AIzaSyAOMEGBcZM52PxoloGuA8EjcWPOw1fJIJs";
    // var yelpApi = "Vz47dpZcuUUiQHoDUhocATeDvpK3HROrFQJn-bxpmIN9uQ1c98taQXTiYmpymZbuhSMluME66RlWDHjwKHDfwSQen-sLdTqN2siW-J_0ATdUjDW4b27AadLOisCDXXYx";


    var search1 = "";
    var search2 = "";
    var search3 = "";

    var bookUrl = 'https://www.googleapis.com/books/v1/volumes?q=' + search2 + '&maxResults=4&orderBy=relevance&key=' + bookAp
  
    console.log("AM I RUNNING");
    $("#submitButton").click(function(e) {
        e.preventDefault();
        var inputIndex = 0;
        var bookRead = $("#readBook").val();
        var authorRead = $("authorReadBook").val();
        var genreRead = $("readBookGenre").val();
        if (bookRead || authorRead || genreRead) {
            console.log("it works");
            inputIndex++;
            search1 = bookRead + " " + authorRead + " " + genreRead
        } else {
            console.log("its empty");
        }


        var bookUrl1 = 'https://www.googleapis.com/books/v1/volumes?q=' + search1 + '&maxResults=4&orderBy=relevance&key=' + bookApi
            // var bookUrl2 = 'https://www.googleapis.com/books/v1/volumes?q=' + search2 + '&maxResults=4&orderBy=relevance&key=' + bookApi
            // var bookUrl3 = 'https://www.googleapis.com/books/v1/volumes?q=' + search3 + '&maxResults=4&orderBy=relevance&key=' + bookApi
        console.log(bookUrl1);
        if (inputIndex > 0) {
            $.ajax({
                type: "POST",
                method: "GET",
                url: bookUrl1,
                // url: bookUrl2,
                // url: bookUrl3,
            }).then(function(response) {
                console.log(response)
                var items = response.items;
                for (var i = 0; i < items.length; i++) {

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
        }
      
        //this function signals when user has 'submitted' & pulls a search
        function userSearch() {
            alert("user has submitted something");
            search1 = $("#readBook").val() || $("#authorReadBook").val() || $("#readBookGenre").val();
            // search2 = $("#authorReadBook").val();
            // search3 = $("#readBookGenre").val();
            alert(search1 || search2 || search3);
            bookUrl1 = 'https://www.googleapis.com/books/v1/volumes?q=' + search1 + '&maxResults=4&orderBy=relevance&key=' + bookApi
                // bookUrl2 = 'https://www.googleapis.com/books/v1/volumes?q=' + search2 + '&maxResults=4&orderBy=relevance&key=' + bookApi
                // bookUrl3 = 'https://www.googleapis.com/books/v1/volumes?q=' + search3 + '&maxResults=4&orderBy=relevance&key=' + bookApi

            // alert("user has submitted something");
            // search2 = $("#authorReadBook").val();
            // alert(search2);
            // bookUrl2 = 'https://www.googleapis.com/books/v1/volumes?q=' + search2 + '&maxResults=4&orderBy=relevance&key=' + bookApi

            // alert("user has submitted something");
            // search3 = $("#readBookGenre").val();
            // alert(search3);
            // bookUrl3 = 'https://www.googleapis.com/books/v1/volumes?q=' + search3 + '&maxResults=4&orderBy=relevance&key=' + bookApi
        }

        //call function that was named above
        $("form").submit(userSearch);



    });
});

