$(document).ready(function() {


    // Business Search                          URL  <---> https://api.yelp.com/v3/businesses/search
    // Business Match:                          URL  <---> https://api.yelp.com/v3/businesses/matches
    // Business Phone search:                   URL  <---> https://api.yelp.com/v3/businesses/search/phone
    // Business Details:                        URL  <---> https://api.yelp.com/v3/businesses/{id}
    // Business Review:                         URL  <---> https://api.yelp.com/v3/businesses/{id}/reviews



    var search = 'bookstore';
    // var cors = "https://cors-anywhere.herokuapp.com/"
    var lng = 97.7431;
    var lat = 30.2672;
    // var location = 'London';
    // var yelpUrl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?latitude=" + lat + "&longitude=" + lng + "&limit=10";
    var yelpUrl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=" + search + "&limit=10&location=Paris";

    // latitude=" + lat + "&longitude=" + lng;
    // var search = $(this).text()


    console.log(yelpUrl)

    $.ajax({
            url: yelpUrl,
            headers: {
                Authorization: "Bearer Vz47dpZcuUUiQHoDUhocATeDvpK3HROrFQJn-bxpmIN9uQ1c98taQXTiYmpymZbuhSMluME66RlWDHjwKHDfwSQen-sLdTqN2siW-J_0ATdUjDW4b27AadLOisCDXXYx"
            },
            method: "GET",
            dataType: "json",
            success: function(data) {
                console.log(data);
                console.log(yelpUrl);
            }
        })
        // }).then(function(response) {
        //     console.log(response)
        // })





})