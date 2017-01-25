var flip1=""
var card1_state = 0;
var card2_state = 0;
var card3_state = 0;
var card4_state = 0;

var card5_state = 0;
var card6_state = 0;
var card7_state = 0;
var card8_state = 0;

$(function()
 {
alert('doc loaded');
$('#js-flip-1').click(
function(){
  alert('clicked');
  switch(card1_state){
    case 0:
       $('#js-flip-1 .card').addClass('flipped');
       $('#js-flip-1 .card').addClass('flipped');
        card1_state=1;
      break;
    case 1:
        $('#js-flip-1 .card').removeClass('flipped');
        card1_state=0;
      break;
              }  
}
)


$('#js-flip-2').click(
function(){
  switch(card2_state){
    case 0:
       
       $('#js-flip-2 .card').addClass('flipped');
        card2_state=1;
      break;
    case 1:
        $('#js-flip-2 .card').removeClass('flipped');
        card2_state=0;
      break;
              }  
}
)

$('#js-flip-3').click(
function(){
  
  switch(card3_state){
    case 0:
       
       $('#js-flip-3 .card').addClass('flipped');
  
      if(flip1==$(this).attr('id'))
        {
          card3_state=2;
          card1_state=2;          
        }
      card3_state=1;
      break;
    case 1:
        $('#js-flip-3 .card').removeClass('flipped');
        card3_state=0;
      break;
              }  
}
)

$('#js-flip-4').click(
function(){
  switch(card4_state){
    case 0:
       
       $('#js-flip-4 .card').addClass('flipped');
        card4_state=1;
      break;
    case 1:
        $('#js-flip-4 .card').removeClass('flipped');
        card4_state=0;
      break;
              }  
}
)

$('#js-flip-5').click(
function(){
  switch(card5_state){
    case 0:
       
       $('#js-flip-5 .card').addClass('flipped');
        card5_state=1;
      break;
    case 1:
        $('#js-flip-5 .card').removeClass('flipped');
        card5_state=0;
      break;
              }  
}
)

$('#js-flip-6').click(
function(){
  switch(card6_state){
    case 0:
       
       $('#js-flip-6 .card').addClass('flipped');
        card6_state=1;
      break;
    case 1:
        $('#js-flip-6 .card').removeClass('flipped');
        card6_state=0;
      break;
              }  
}
)

$('#js-flip-7').click(
function(){
  switch(card7_state){
    case 0:
       
       $('#js-flip-7 .card').addClass('flipped');
        card7_state=1;
      break;
    case 1:
        $('#js-flip-7 .card').removeClass('flipped');
        card7_state=0;
      break;
              }  
}
)

$('#js-flip-8').click(
function(){
  switch(card8_state){
    case 0:
       
       $('#js-flip-8 .card').addClass('flipped');
        card8_state=1;
      break;
    case 1:
        $('#js-flip-8 .card').removeClass('flipped');
        card8_state=0;
      break;
              }  
}
)

});
