/* Version 2 */
var flip1=""
var pairs=0;
var allow_click = true; //clicking too fast messes up the logic

$(function(){
  
assign_cards(); 
 
$('td').click(function(){
  if(allow_click)
  {
    if(!card_already_flipped(this))
    {
      allow_click = false;
      handle_click($(this));
    }  
  }
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
  var images=["pirate.png","pirate_ship.jpg","atlantis.jpg","plane.jpg","tie.jpg","super_mario.jpg"]

   //duplicate images (so we have pairs of cards
  for(var i=0;i<=5;i++){
    images.push(images[i])  
  }
  
  var shuffled = shuffle(images);
  
  for(var i=0;i<12;i++)
  {
    j=i+1;//don't attempt to concatenate and perform arithmetic!
    $('#js-flip-' + j).attr('princess',shuffled[i]);  
    $('#img'+j).attr('src',$('#js-flip-'+j).attr('princess'));
  }
    
}


/* thanks to http://stackoverflow.com/questions/962802/is-it-correct-to-use-javascript-array-sort-method-for-shuffling */
function shuffle(array) {
    var tmp, current, top = array.length;

    if(top) while(--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
    }

    return array;
} 


function handle_click(card){
  var this_card='#' + $(card).attr('id')
  $(this_card + ' .card').addClass('flipped')   
  if(flip1=="")
    {
      flip1=this_card;
      allow_click=true;
    }
  else  //2nd card so look for match
  {
   if($(this_card).attr('princess')==$(flip1).attr('princess'))
     {
       pairs++;
       flip1=""
       $('#pairsfound').html('Pairs found:' + pairs);
       allow_click=true;
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
        allow_click=true;
        },800);
          
      }//no match
    
  }
}
