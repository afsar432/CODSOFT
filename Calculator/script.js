const display = document.querySelector('#display');

const button = document.querySelectorAll('button');


button.forEach((item) =>{
    item.onclick = () => {

        if(item.id == 'clear'){
            display.innerText = ' ';
        }

        else if(item.id =='backspace'){
            let string = display.innerText.toString();
            display.innerText = string.substr(0,string.length-1);
        }

        else if (item.id !=' ' && item.id =='equalto') {
            display.innerText = eval(display.innerText);
            
        }

        else if (item.id == ' ' && item.id =='equalto') {
            display.innerText = 'Enter something to Calculate'
            setTimeout(() => (display.innerText = ''),2000)
        }

        else{
           display.innerText = display.innerText + item.id;
        }

    }
} )