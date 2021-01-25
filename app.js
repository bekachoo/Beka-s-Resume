function changeColor(){
            var body = document.querySelector('body');

            if(body.style.backgroundColor == 'rgb(255, 102, 0)'){
                body.style.backgroundColor = 'white';
            }
  else if(body.style.backgroundColor == 'white')
     body.style.backgroundColor = 'rgb(255, 153, 0)';
     else if(body.style.backgroundColor == 'rgb(255, 153, 0)')
        body.style.backgroundColor = 'rgb(102, 204, 255)';


            else{
                body.style.backgroundColor = 'rgb(255, 102, 0)';
            }
        }
