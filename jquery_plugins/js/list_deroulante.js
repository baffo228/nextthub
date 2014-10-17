(function ($) {
    $.fn.dropdownSelect = function (options) {
        
        var settings= $.extend ({
            fx : 'slide',
            fxOptions:{direction:'up'},
            fxDuration: 500
        }, options);
        
        //pour prendre en compte plusiseurs elements on utlise each
        return this.each(function () {
            //Do something to each element here 

        //on insere 2 div apres cahque slect

            var select = $(this);

            var dropdown_container = $('<div class="dropdown_container"></div>').insertAfter($(this));
            
            

            var dropdown_click_div = $('<div class="dropdown_click"></div>').appendTo(dropdown_container);

            var dropdown_values_div = $('<div class="dropdown_values"></div>').appendTo(dropdown_container);
            
            dropdown_click_div.css('width', ($(this).width()*1.2)+'px');
            dropdown_values_div.css('width', ($(this).width()*1.2)+'px');
            

            dropdown_click_div.html('<p>' + $(this).find('option:selected').text() +'<span class="arrow_down"></span></p>');

            var select = $(this);//pour une utilisation dans la boucle
            //
            //evt de click sur le div click
            dropdown_click_div.click(function () {

                dropdown_values_div.html('');//on vide le div 

                select.find('option').each(function () {

                    var selected;
                    if ($(this).is(':selected')) {
                        selected = 'class="dropdown_selected"';
                    } else {
                        selected = "";
                    }

                    dropdown_values_div.append('<a href="' + $(this).val() + '" '+selected+'>' + $(this).text() + '</a>');
                });
                
                    //evenement de click sur tous les a de dropdwon_values_div
                    dropdown_values_div.find('a').click(function (event) {
                    event.preventDefault();
                    dropdown_click_div.html('<p>' + $(this).text() + '<span class="arrow_down"></span></p>');
                    dropdown_values_div.show(settings.fx, settings.fxOptions ,settings.fxDuration);
                    select.val($(this).attr('href'));
                });
                dropdown_values_div.toggle(settings.fx, settings.fxOptions ,settings.fxDuration);
            });
select.hide();//on cache le select en cours
        });

    };
}(jQuery));

