var flip1=""
var pairs=0;
var test=5;

$(function(){
  
$('.flip').click(function(){
  handle_click($(this));
})
});

function handle_click(card){
 // console.log($(this).attr('princess'))
  var this_card=$(card).attr('id')
  
  if(flip1==""){
    console.log("first card")
    $('#' + this_card + ' .card').toggleClass('flipped')  
    flip1=this_card
    
  }
  else //assume for now we haven't reclicked a shown card
  {
      //need to compare this_card to flip1 to check not clicking same card twice
      if(this_card!=flip1 && $('#' +this_card).attr('princess') ==$('#' +flip1).attr('princess')){          //match    
        $('#' + this_card).removeClass('flip')  //simple way to stop re-clicking
        $('#' + flip1).removeClass('flip')  //simple way to stop re-clicking      
        
        $('#' + this_card).find(".face.front").hide(); //hide the face front
        $('#' + flip1).find(".face.front").hide(); //hide the face front
        
        flip1=""
        pairs++;
        
        if(pairs==4)//found them all
          {
            $("#pairs_table").hide();
            $("#finished").show();
          }
      }
    else{//nomatch
      
      $('#' + this_card + ' .card').toggleClass('flipped')        
      
    setTimeout(function(){
      console.log(flip1)
      $('.flip .card').removeClass('flipped') ;    
      }, 800);
      flip1=""
    }
  }
}
