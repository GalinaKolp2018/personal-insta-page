$(document).ready(function(){
    
    var slideindex = 0;
    
    showPhotos();
    
    function showPhotos(){
        
        var i;        
        var slides = $('.photo img');
        
        
        //Загрузка цикл скрытия фотографий
        
        for (i = 0; i < slides.length; i++){
           $(slides[i]).hide();
        }
        
        slideindex++;
        
         if (slideindex > slides.length){
            slideindex = 1;
        }
        
        $(slides[slideindex-1]).show();
        setTimeout(showPhotos, 400)
    }

});