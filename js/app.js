$(document).ready(function() {
    $('.start').delay('2000').fadeOut('slow');
    $('.principal').hide();
    $('.principal').delay('2800').fadeIn('slow');

    tipos = restaurantes.map(rest => rest.type).filter((value, index, self) => self.indexOf(value) === index);
    for(type of tipos) {
        $('.tipo').append($("<option>").attr('value', type).text(type));
    }

    $('.filtrar').click(function () {
        var inputValue = $('.tipo').val();

        var rests = restaurantes.filter(function(rest) {
            return rest.type === inputValue;
        });

        $('#rests-list').html("");
        $('#photos').html("");
        for(restaurant of rests) {
            $('#rests-list').append($("<li>").attr('value', restaurant.name)
              .html("<a class='font-weight-bold text-uppercase text-white' href='#'>" + restaurant.name + "</a>" + "<p>" + restaurant.description +  "</p")
            );
            $('#photos').append($("<li>").attr('value', restaurant.image)
              .html("<img class='img-fluid m-2 shadow mb-5 rounded' src='" + restaurant.image + "' alt='" + restaurant.name + "' />")
            );
        }
    });

    $('.tipo').on('input', function () {
        if($(this).val() === "") {
            $( "restaurantes" ).each(function( ) {
                $(this).fadeIn('slow');
            });
        }
    });
});

var mymap = L.map('mapid').setView([-23.5533,-46.6418], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYWhtYXRyYWkiLCJhIjoiY2praHdwZmIxMHpidjNwcWhsaXlnbmxuZSJ9.jIsv6ONv_L0MN0Ap-axXRQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

var marker = L.marker([-23.5533,-46.6418]).addTo(mymap);

// inserir marcadores percorrendo JSON
// marker = L.marker(restaurant.latitude, restaurant.longitude).addTo(mymap);