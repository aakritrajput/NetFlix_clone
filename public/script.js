
let main = document.getElementsByClassName("accordion");

let expBox = document.getElementsByClassName("panel");

 const func = (i)=>{
    const computedStyles = window.getComputedStyle(expBox[i]);
    const styleValue = computedStyles.getPropertyValue('display');
    if(styleValue === 'none'){
      expBox[i].style.display='block';
    }else{
      expBox[i].style.display='none';
    }

 };

for(i = 0 ; i<main.length ; i++){
  let ind = i;
  main[i].addEventListener('click', ()=>{
          func(ind);
   });
   }
