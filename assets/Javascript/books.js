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
                //this will empty the book cards between each search
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

