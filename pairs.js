var flip1=""
var pairs=0;
var test=7;

$(function(){
  
assign_cards(); 
 
$('td').click(function(){
  if(!card_already_flipped(this))
  handle_click($(this));
})
  
});

//determine if the card is already flipped
function card_already_flipped(obj){
  if(($('#'+$(obj).attr('id')+' .card').hasClass('flipped')))
    {
      return true;
    }
  else
    {
      return false;
    }
  
}

//change this to reorganise the cards.
//Ultimately want it to randomise
function assign_cards(){
  $('#js-flip-1').attr('princess','pirate.png');
  $('#img1').attr('src',$('#js-flip-1').attr('princess'));
  
  $('#js-flip-2').attr('princess','pirate_ship.jpg');
  $('#img2').attr('src',$('#js-flip-2').attr('princess'));
  
  $('#js-flip-3').attr('princess','plane.jpg');
  $('#img3').attr('src',$('#js-flip-3').attr('princess'));
  
  $('#js-flip-4').attr('princess','tie.jpg');
  $('#img4').attr('src',$('#js-flip-4').attr('princess'));
  
  $('#js-flip-5').attr('princess','tomato.jpg');
  $('#img5').attr('src',$('#js-flip-5').attr('princess'));
  
  $('#js-flip-6').attr('princess','super_mario.jpg');
  $('#img6').attr('src',$('#js-flip-6').attr('princess'));
  
  $('#js-flip-7').attr('princess','super_mario.jpg');
  $('#img7').attr('src',$('#js-flip-7').attr('princess'));
  
  $('#js-flip-8').attr('princess','tomato.jpg');
  $('#img8').attr('src',$('#js-flip-8').attr('princess'));
  
  $('#js-flip-9').attr('princess','tie.jpg');
  $('#img9').attr('src',$('#js-flip-9').attr('princess'));
  
  $('#js-flip-10').attr('princess','plane.jpg');
  $('#img10').attr('src',$('#js-flip-10').attr('princess'));
  
  $('#js-flip-11').attr('princess','pirate_ship.jpg');
  $('#img11').attr('src',$('#js-flip-11').attr('princess'));
  
  $('#js-flip-12').attr('princess','pirate.png');
  $('#img12').attr('src',$('#js-flip-12').attr('princess'));
  
  
}


function handle_click(card){
  var this_card='#' + $(card).attr('id')
  $(this_card + ' .card').addClass('flipped')   
  if(flip1=="")
    {
      flip1=this_card;
    }
  else  //2nd card so look for match
  {
   if($(this_card).attr('princess')==$(flip1).attr('princess'))
     {
       pairs++;
       flip1=""
       console.log(pairs)
       if(pairs==6){
         $('#pairs_table').hide();
         $('#finished').show();
       }
     }//match
    else
      {
        setTimeout(function(){
        $(this_card + ' .card').removeClass('flipped')   
        $(flip1 + ' .card').removeClass('flipped') 
        flip1="";
        },800);
          
      }//no match
    
  }
}
