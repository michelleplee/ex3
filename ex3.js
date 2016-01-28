//Javascript
//call to jQuery ready func
//make sure html and css are loaded

$(function() {
  console.log('ready'),

    $('#business').hover(function() {
      console.log('hover'),
      $('.time1').css('color', 'indianred')
        $('.event1').css('color', 'indianred').css('text-decoration', 'underline')
          
   
  }, 
                         function() {
      $('.time1').css('color', 'black');
        $('.event1').css('color', 'black');
       $('.event1').css('text-decoration', 'none');
     
  });

 
        $('#mundane').hover(function() {
      console.log('hover'),
           $('.time2').css('color', 'green')
        $('.event2').css('color', 'green').css('text-decoration', 'underline')
  }, 
                         function() {
        $('.time2').css('color', 'black');
        $('.event2').css('color', 'black');
            $('.event2').css('text-decoration', 'none');
    

  });

    
        $('#homework').hover(function() {
      console.log('hover'),
        $('.time3').css('color', 'blue')
        $('.event3').css('color', 'blue').css('text-decoration', 'underline')
        
  }, 
                         function() {
      $('.time3').css('color', 'black');
        $('.event3').css('color', 'black');
             $('.event3').css('text-decoration', 'none');
  });

    
        $('#calming').hover(function() {
      console.log('hover'),
  $('.time4').css('color', 'purple')
        $('.event4').css('color', 'purple').css('text-decoration', 'underline')
         
  }, 
                         function() {
         $('.time4').css('color', 'black');
        $('.event4').css('color', 'black');
             $('.event4').css('text-decoration', 'none');

  });

    $('.tip').hide();
    
    
    $('#business').hover(function(){
    console.log('business clicked')
    $('.tip').show(), $('#businessText').html('13 out of 20 events');
    }, function() {
        $('.tip').hide();
    });
    
    
      $('#mundane').hover(function(){
    console.log('mundaneclicked')
    $('.tip').show(), $('#businessText').html('4 out of 20 events');
    }, function() {
        $('.tip').hide();
    });

    
    
    
      $('#homework').hover(function(){
    console.log('mundaneclicked')
    $('.tip').show(), $('#businessText').html('2 out of 20 events');
    }, function() {
        $('.tip').hide();
    });

    
      $('#calming').hover(function(){
    console.log('mundaneclicked')
    $('.tip').show(), $('#businessText').html('2 out of 20 events');
    }, function() {
        $('.tip').hide();
    });
});