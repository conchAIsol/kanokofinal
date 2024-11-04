window.onload=init;

function init()
{
    state.i=0;
    state.j=0;
    state.k=0;
    state.l=0;
    state.m=0;
}

var state = {
    i:0,
    j:0,
    k:0,
    l:0,
    m:0
};
    

function nextdress()
{
    var dress=document.getElementById("clothes");
    if(state.i===0){
    dress.setAttribute("class","dress1");
        state.i++;
    }
    else
     if(state.i===1){
    dress.setAttribute("class","dress2");
         state.i++;
    }
    else
     if(state.i===2){
    dress.setAttribute("class","dress3");
         state.i++;
    }
    else
     if(state.i===3){
    dress.setAttribute("class","dress4");
         state.i++;
    }
    else
     if(state.i===4){
    dress.setAttribute("class","dress5");
         state.i++;
    }
    else
     if(state.i===5){
    dress.setAttribute("class","dress6");
         state.i++;
    }
    else
     if(state.i===6){
    dress.setAttribute("class","dress7");
         state.i++;
    }
    else
     if(state.i===7){
    dress.setAttribute("class","dress8");
         state.i=0;
    }
}

function nextshoe()
{
    var shoe=document.getElementById("shoes");
    if(state.j===0){
    shoe.setAttribute("class","shoe1");
        state.j++;
    }
    else
     if(state.j===1){
    shoe.setAttribute("class","shoe2");
         state.j++;
    }
    else
     if(state.j===2){
    shoe.setAttribute("class","shoe3");
         state.j++;
    }
    else
     if(state.j===3){
    shoe.setAttribute("class","shoe4");
         state.j++;
    }
    else
     if(state.j===4){
    shoe.setAttribute("class","shoe5");
         state.j++;
    }
    else
     if(state.j===5){
    shoe.setAttribute("class","shoe6");
         state.j++;
    }
    else
     if(state.j===6){
    shoe.setAttribute("class","shoe7");
         state.j++;
    }
    else
     if(state.j===7){
    shoe.setAttribute("class","shoe8");
         state.j=0;
    }
    
}

function nexthat()
{
    var hat=document.getElementById("hat");
    if(state.k===0){
    hat.setAttribute("class","hat1");
        state.k++;
    }
    else
     if(state.k===1){
    hat.setAttribute("class","hat2");
         state.k++;
    }
    else
     if(state.k===2){
    hat.setAttribute("class","hat3");
         state.k++;
    }
    else
     if(state.k===3){
    hat.setAttribute("class","hat4");
         state.k++;
    }
    else
     if(state.k===4){
    hat.setAttribute("class","hat5");
         state.k++;
    }
    else
     if(state.k===5){
    hat.setAttribute("class","hat6");
         state.k++;
    }
    else
     if(state.k===6){
    hat.setAttribute("class","hat7");
         state.k++;
    }
    else
     if(state.k===7){
    hat.setAttribute("class","hat8");
         state.k=0;
    }
}

function nextpin()
{
    var pin =document.getElementById("pin");
    if(state.l===0){
    pin.setAttribute("class","pin1");
        state.l++;
    }
    else
     if(state.l===1){
    pin.setAttribute("class","pin2");
         state.l++;
    }
    else
     if(state.l===2){
    pin.setAttribute("class","pin3");
         state.l++;
    }
    else
     if(state.l===3){
    pin.setAttribute("class","pin4");
         state.l++;
    }
    
    else
     if(state.l===4){
    pin.setAttribute("class","pin5");
         state.l++;
    }
    
    else
     if(state.l===5){
    pin.setAttribute("class","pin6");
         state.l = 0;
    }
}

function nextaccessory()
{
    var accessory =document.getElementById("accessory");
    if(state.m===0){
    accessory.setAttribute("class","accessory1");
        state.m++;
    }
    else
     if(state.m===1){
      accessory.setAttribute("class","accessory2");
         state.m++;
    }
    else
     if(state.m===2){
      accessory.setAttribute("class","accessory3");
         state.m++;
    }
    else
     if(state.m===3){
      accessory.setAttribute("class","accessory4");
         state.m++;
    }
    else
     if(state.m===4){
      accessory.setAttribute("class","accessory5");
         state.m++;
    }
    else
     if(state.m===5){
      accessory.setAttribute("class","accessory6");
         state.m++;
    }
    else
     if(state.m===6){
      accessory.setAttribute("class","accessory7");
         state.m++;
    }
    else
     if(state.m===7){
      accessory.setAttribute("class","accessory8");
         state.m++;
    }
    else
     if(state.m===8){
      accessory.setAttribute("class","accessory9");
         state.m++;
    }
    else
     if(state.m===9){
      accessory.setAttribute("class","accessory10");
         state.m++;
    }
    else
     if(state.m===10){
      accessory.setAttribute("class","accessory11");
         state.m++;
    }
    else
     if(state.m===11){
      accessory.setAttribute("class","accessory12");
         state.m = 0;
    }
}

function reset() { 
    var accessory =document.getElementById("accessory");
    var dress=document.getElementById("clothes");
    var shoe=document.getElementById("shoes");
    var hat=document.getElementById("hat");
    var pin =document.getElementById("pin");
    
    accessory.setAttribute("class","accessory12");
    state.m = 0;
    
    pin.setAttribute("class","pin6");
    state.l = 0;
    
    hat.setAttribute("class","hat8");
    state.k=0;
    
    shoe.setAttribute("class","shoe8");
    state.j=0;
    
    dress.setAttribute("class","dress8");
    state.i=0;
}



