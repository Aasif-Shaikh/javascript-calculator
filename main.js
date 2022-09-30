function dark(){
    let dark = document.body.classList;
    dark.add('dark-mode')
    }
    function light(){
      document.body.classList.remove('dark-mode')
    }
    
       const displayE1 = document.querySelector('.display-1');
       const displayE2 = document.querySelector('.display-2');
       const numberE = document.querySelectorAll('.number-operation');
       const allClear =  document.querySelector('.all-clear');
       const lastElementClear = document.querySelector('.last-entity-clear');
       for(let i=0; i<=numberE.length; i++){
         numberE[i].addEventListener('click', function(e){
          debugger
          if(this.innerHTML === '=' ){ 
            debugger
            displayE2.innerHTML = eval(displayE2.innerHTML);
            displayE1.innerHTML = eval(displayE2.innerHTML);
          }
          else{ 
            if(this.innerHTML === 'C'){
              debugger
              displayE2.innerHTML = ''
              displayE1.innerHTML = ''
            }
            else if(this.innerHTML === 'CE') displayE2.innerHTML = ''
            else if(e.innerHTML === '*') { 
              debugger
            }
            else{
              displayE2.innerHTML += this.innerHTML
            }
          }
         })
    
       }
    
    