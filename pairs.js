var flip1=""



$(function(){
$('.flip').click(
function(){
 // console.log($(this).attr('princess'))
  var this_card=$(this).attr('id')
  
  if(flip1==""){
    console.log("first card")
    $('#' + this_card + ' .card').toggleClass('flipped')  
    flip1=this_card
    
  }
  else //assume for now we haven't reclicked a shown card
  {
      if($('#' +this_card).attr('princess') ==$('#' +flip1).attr('princess')){        
        $('#' + this_card).removeClass('flip')  //simple way to stop re-clicking
        $('#' + flip1).removeClass('flip')  //simple way to stop re-clicking
        flip1=""        
      }
    else{
      
      $('#' + this_card + ' .card').toggleClass('flipped')        
      
    setTimeout(function(){      
      $('.flip .card').removeClass('flipped') ;       
      }, 1000);          
      
      
      flip1=""
    }
  }
  
}
)
});
