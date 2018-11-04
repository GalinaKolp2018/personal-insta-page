$(document).ready(function(){ 

    var userFeed = new Instafeed({
        get: 'user',
        userId: '6518360018',
        accessToken: '6518360018.1677ed0.1823975fb4044acc91b443b629938889',
        resolution: 'standard_resolution',
        limit: 33
    });
   
    userFeed.run();
    
    
    setTimeout(function(){
        
        $('.instafeed').addClass('.shadowed');
    }, 100 );


});