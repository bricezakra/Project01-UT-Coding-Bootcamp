$(document).ready(function() {
var search2 = "chuck norris";
var search1 = "blah";
var search3 = "wow";
    //api key
    var bookApi = "AIzaSyAOMEGBcZM52PxoloGuA8EjcWPOw1fJIJs";
    // var search2 = $("#readBookGenre").val();
    var bookUrl = 'https://www.googleapis.com/books/v1/volumes?q=' +search1+search2+search3+ '&maxResults=4&orderBy=relevance&key=' + bookApi


     //on click listeners - functions can be renamed
    //this function signals when user has 'submitted' & pulls a search
    function userSearch(){
        
    
        $(".card-title0").empty();
        $(".book-cover0").empty();
        $(".card-text0").empty();
        $(".card-author0").empty();
        search1 = $("#readBook").val();
        search2 = $("#readBookGenre").val();
        search3 = $("#readBookAuthor").val();
        bookUrl = 'https://www.googleapis.com/books/v1/volumes?q=' + search1+search2+search3+ '&maxResults=4&orderBy=relevance&key=' + bookApi
        alert(bookUrl);
        $.ajax({
            url: bookUrl,
            method: "GET",
            error: function(){
                alert("userSearch: there was an error");
            }, success: function (response){
                event.preventDefault();
                $(".bookDiv").empty();
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

                    // $(".card-title0").text(response.items[0].volumeInfo.title);
                    // $(".card-title1").text(response.items[1].volumeInfo.title);
                    // $(".card-title2").text(response.items[2].volumeInfo.title);
                    // $(".card-title3").text(response.items[3].volumeInfo.title);


                    // $(".book-cover0").attr('src', response.items[0].volumeInfo.imageLinks.smallThumbnail);
                    // $(".book-cover1").attr('src', response.items[1].volumeInfo.imageLinks.smallThumbnail);
                    // $(".book-cover2").attr('src', response.items[2].volumeInfo.imageLinks.smallThumbnail);
                    // $(".book-cover3").attr('src', response.items[3].volumeInfo.imageLinks.smallThumbnail);

                    // $(".card-text0").text(response.items[0].volumeInfo.description);
                    // $(".card-text1").text(response.items[1].volumeInfo.description);
                    // $(".card-text2").text(response.items[2].volumeInfo.description);
                    // $(".card-text3").text(response.items[3].volumeInfo.description);

                    // $(".card-author0").text(response.items[0].volumeInfo.authors[0]);
                    // $(".card-author1").text(response.items[1].volumeInfo.authors[0]);
                    // $(".card-author2").text(response.items[2].volumeInfo.authors[0]);
                    // $(".card-author3").text(response.items[3].volumeInfo.authors[0]);

                    var book=$(
                        //this is appending the book info into cards that will not show up until after a search!
                        `<div class="col-lg-3">
                        <div class="card bookcard" style="width: 18rem;">
                            <img class="book-cover card-img-top" src="${coverImg}alt="cover">
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <h5 class="card-title"></h5>
                            <h6 class="card-author"> ${author}</h6>
                            <p class="card-text description">${description}</p>
                            </div>
                        </div>
                        </div>`
                    );
                        $(".bookDiv").append(book);
                }
            }, complete: function(){
                
            },
        })
      
        


        return false;
    };
    $("form").submit((userSearch));
});

