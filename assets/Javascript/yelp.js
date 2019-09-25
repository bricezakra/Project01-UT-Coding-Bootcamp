$(document).ready(function() {


    // Business Search                          URL  <---> https://api.yelp.com/v3/businesses/search
    // Business Match:                          URL  <---> https://api.yelp.com/v3/businesses/matches
    // Business Phone search:                   URL  <---> https://api.yelp.com/v3/businesses/search/phone
    // Business Details:                        URL  <---> https://api.yelp.com/v3/businesses/{id}
    // Business Review:                         URL  <---> https://api.yelp.com/v3/businesses/{id}/reviews



   
    // var cors = "https://cors-anywhere.herokuapp.com/"
    
    var location = "78704";
    
    var yelpUrl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=bookstore&limit=2&location="+location;




    console.log(yelpUrl)
    function storeSearch(){
        location= $("#storeInfo").val();
        yelpUrl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=bookstore&limit=2&location="+location;

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

            $(".yelpDiv").empty();
            var businesses = data.businesses;
            for (var i = 0; i < businesses.length; i++) {
                var bookStoreName= data.businesses[i].name;
                var bookStorePhone= data.businesses[i].display_phone;
                var bookStoreAddress= data.businesses[i].location.display_address;
                var bookStoreAlias= data.businesses[i].alias;
                var bookStoreWebsite= "<a href= http://www.yelp.com/biz/"+bookStoreAlias+ " target='_blank'>Check Them Out!</a>";
                //var bookStoreAddress=data.businesses[i].location.address1+","+data.businesses[i].location.city+","+data.businesses[i].location.zip_code;
                console.log(bookStoreAlias, bookStoreAddress, bookStoreName, bookStorePhone)
                console.log(bookStoreWebsite);
                
                

                // var card = $(`
                //     <div class="card bookcard" style="width: 18rem;">
                //         <div class="card-body">
                //             <h3 class="store-name">${bookStoreName}</h3>
                //             <h5 class="store-phone">${bookStorePhone}</h5>
                //             <h5 class="store-address">${bookStoreAddress}</h5>
                //             <h5 class="store-website">${bookStoreWebsite}</h5>
                //         </div>
                //     </div>
                // `);
              
                var card= $(
                `<div class="card" style="width: 18rem;">
                <div class="card-header">
                <h5 class="card-title">Bookstores Around Me</h5>
            </div>
            <div class="card-body">
                <h5 class="store-name">${bookStoreName}</h5>
                <h6 class="store-adress">${bookStoreAddress}</h6>
                <h6 class="store-phone">${bookStorePhone}</h6>
                <h6 class="store-website">${bookStoreWebsite}</h6>
             </div>
             </div>`
             );
                  $(".yelpDiv").append(card);
            }



        }
       





        })
        return false;
    };
   $("form").submit((storeSearch));

})