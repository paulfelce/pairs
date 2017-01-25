var flip1=""
var card_state=[];
card_state["js-flip-1"]=0;
card_state["js-flip-2"]=0;
card_state["js-flip-3"]=0;
card_state["js-flip-4"]=0;
card_state["js-flip-5"]=0;
card_state["js-flip-6"]=0;
card_state["js-flip-7"]=0;
card_state["js-flip-8"]=0;


$('.flip').click(
function(){
  
  var this_card=$(this).attr('id')
  
  switch(card_state[this_card]){
    case 0:      
       $('#' + this_card + ' .card' ).addClass('flipped');
    
      if(flip1==this_card)
      {
        
      }
      
      card_state[this_card]=1;
      break;
    case 1:
        $('#' + this_card + ' .card' ).removeClass('flipped');
        card_state[this_card]=0;
      break;
              }  
}
)
