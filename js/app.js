$(document).ready(function() {
    $('.start').delay('2000').fadeOut('slow');
    $('.principal').hide();
    $('.principal').delay('2800').fadeIn('slow');


    $('.filtrar').click(function () {
      var inputValue = $('.tipo').val();
  
      $.getJSON(restaurantes).each(function( ) {
        if($(this).text() !== inputValue) {
          $(this).fadeOut('slow');
        }
      });
    })
  
    $('.tipo').on('input', function () {
      if($(this).val() === "") {
        $( "restaurantes" ).each(function( ) {
          $(this).fadeIn('slow')
        });
      }
    })
  });

