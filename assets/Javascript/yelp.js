$(document).ready(function() {


    // Business Search                          URL  <---> https://api.yelp.com/v3/businesses/search
    // Business Match:                          URL  <---> https://api.yelp.com/v3/businesses/matches
    // Business Phone search:                   URL  <---> https://api.yelp.com/v3/businesses/search/phone
    // Business Details:                        URL  <---> https://api.yelp.com/v3/businesses/{id}
    // Business Review:                         URL  <---> https://api.yelp.com/v3/businesses/{id}/reviews



   
    // var cors = "https://cors-anywhere.herokuapp.com/"
    
    var location = 'Austin';
    
    var yelpUrl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=bookstore&limit=2&location="+location;




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


            var businesses = data.businesses;
            for (var i = 0; i < businesses.length; i++) {
                var bookStoreName= data.businesses[i].name;
                var bookStorePhone= data.businesses[i].display_phone;
                var bookStoreAddress= data.businesses[i].location.display_address;
                var bookStoreAlias= data.businesses[i].alias;
                var bookStoreWebsite= "yelp.com/biz/"+bookStoreAlias;
                //var bookStoreAddress=data.businesses[i].location.address1+","+data.businesses[i].location.city+","+data.businesses[i].location.zip_code;
                console.log(bookStoreAlias, bookStoreAddress, bookStoreName, bookStorePhone)
                console.log(bookStoreWebsite)
            
            }



        }
       





})

})