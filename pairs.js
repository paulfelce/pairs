var flip1=""
var pairs=0;
var test=7;

$(function(){
  
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
       if(pairs==4){
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
