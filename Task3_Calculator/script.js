let string="";
let buttons=document.querySelectorAll('.button, .buttono, .buttong');
Array.from(buttons).forEach((item)=>{
    item.addEventListener('click',(e)=>{
        let value=e.target.innerHTML;
        if (value === '='){
            try{
                string = string.replace(/×/g, '*').replace(/÷/g, '/').replace(/π/g, Math.PI);
                string=eval(string).toString();
            }
            catch(err){
                string="Error";
            }
        }
        else if(value == "AC"){string="";}
        else if (value === 'DEL') {string = string.slice(0, -1);}
        else if (value === '%') {string = (parseFloat(string) / 100).toString();}
        else{string+=value;}
        document.querySelector('input').value=string;
    })
})