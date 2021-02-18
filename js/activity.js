
$("document").ready(function(){
    $('td').click(function(){
        var content = $(this).text();
        if (content != "Not Available"){
            $(this).toggleClass('selected');
            var index = $(this).index();
            // var location = $('thead th:nth-child('+ (index+ 1)+')').text(); 
            var location = $('thead th').eq(index).text();
            if ($(this).hasClass('selected')){
                $('#displaySelected').css('visibility', 'visible');
                $('#displaySelected').css('margin-top', '2em');
                $('#result').append('<p>' +  content + ' at '+ location +  '</p>');

            }else{ 
                $('#result p:contains('+content+')').remove(); //remove child element
                if ($('#result').has('p').length == false){
                    $('#displaySelected').css('visibility', 'hidden');
                    $('#displaySelected').css('margin-top', '0');
                }

            }
        }
    });


});