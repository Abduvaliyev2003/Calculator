const rezalts = document.querySelector('.cads');
let nums  = document.querySelectorAll('.container .num');

function clickd() {
     nums.forEach((el, i) => {
        el.addEventListener('click', (e) => {
            const numValue =  e.target.innerText; 
            if (numValue == 'c'){
                rezalts.value = '';
            } else if (numValue == '='){
                rezalts.value = eval(rezalts.value)
                
            }
               else if(numValue == 'x'){
             let back =   rezalts.value ;
             rezalts.value = back.substring(0, back.length -1);
            } else {
                rezalts.value += numValue;
            } 
        }) 
        rezalts.addEventListener('keypress', (e) => {
      
            if (e.key === 'Enter')    {
                e.preventDefault();
                document.querySelector('.equalsSign').click();
            }       
                          
          })
     })
     
    
}
clickd()