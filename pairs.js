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

$(function(){
$('.flip').click(
function(){
 // console.log($(this).attr('princess'))
  var this_card=$(this).attr('id')
  $('#' + this_card + ' .card').toggleClass('flipped')
  console.log(this_card)  
}
)
});
