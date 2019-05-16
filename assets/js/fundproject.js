/****************************fund Amount Status funtion*********************************/
 
 function fundamt(){
    let max=250;
    let txtvalue=document.getElementById('dollarip').value;
    let totalvalue=max-txtvalue;
    if(totalvalue>= 0){
    document.getElementById('reqamt').innerHTML=totalvalue;
  }
  else{
    document.getElementById('reqamt').innerHTML=0;

  }
 document.getElementById('why').innerHTML=txtvalue;
 
}

/*
let max=250;
    let txtvalue=document.getElementById('dollarip').value;
    let totalvalue=max-txtvalue; 
    (totalvalue>= 0) ? document.getElementById('reqamt').innerHTML=totalvalue;:document.getElementById('reqamt').innerHTML=0;
*/

/**********l******************progressbar color change funtion *********************************/
function barclr_chng(){
  let range=document.getElementById('dollarip').value;
  let divid= document.getElementById('changrclr');
  ttlwidth=0.4*range; 
  if(ttlwidth >100){
    divid.style.width=0+"%"; 
    console.log('welcome');
  }
  else{
    divid.style.width=ttlwidth+"%"; 
    console.log('exit');F 
  }

}

