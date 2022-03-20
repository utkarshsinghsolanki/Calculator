// console.log('Calculator')

// let k1 = document.getElementById('k1');
// let k2 = document.getElementById('k2');
// let k3 = document.getElementById('k3');
// let k4 = document.getElementById('k4');
// let k5 = document.getElementById('k5');
// let k6 = document.getElementById('k6');
// let k7 = document.getElementById('k7');
// let k8 = document.getElementById('k8');
// let k9 = document.getElementById('k9');
// let k0 = document.getElementById('k0');

// k1.addEventListener('click', ()=>{
    //     value.innerHTML += 1
    // });
    // k2.addEventListener('click', ()=>{
        //     value.innerHTML += 2
        // });
        // k3.addEventListener('click', ()=>{
            //     value.innerHTML += 3
            // });
            // k4.addEventListener('click', ()=>{
                //     value.innerHTML += 4
                // });
                // k5.addEventListener('click', ()=>{
//     value.innerHTML += 5
// });
// k6.addEventListener('click', ()=>{
//     value.innerHTML += 6
// });
// k7.addEventListener('click', ()=>{
//     value.innerHTML += 7
// });
// k8.addEventListener('click', ()=>{
//     value.innerHTML += 8
// });
// k9.addEventListener('click', ()=>{
    //     value.innerHTML += 9
    // });
// k0.addEventListener('click', ()=>{
//     value.innerHTML += 0
// });

// let add = document.getElementById('add');
// let sub = document.getElementById('sub');
// let mul = document.getElementById('mul');
// let div = document.getElementById('div');
// let calc = document.getElementById('calc');
// let strNo = 0
// let str1;
// let str2;
// add.addEventListener('click', ()=>{
//     str1 = parseInt(value.innerHTML);
//     value.innerHTML += '+'
//     strNo++;
//     console.log(str1);
// });
// sub.addEventListener('click', ()=>{
    //     str1 = parseInt(value.innerHTML);
    //     value.innerHTML += '-'
    //     strNo++;
// });
// mul.addEventListener('click', ()=>{
//     str1 = parseInt(value.innerHTML);
//     value.innerHTML += '×'
//     strNo++;
// });
// div.addEventListener('click', ()=>{
    //     str1 = parseInt(value.innerHTML);
//     value.innerHTML += '÷'
//     strNo++;
// });

// document.getElementById('clear').addEventListener('click',()=>{
//     value.innerHTML = 0;
// });


let button = document.getElementsByTagName('button');
let screen = document.getElementById('value');
let str = '';
for(item of button){
    item.addEventListener('click', (e)=>{
        value = e.target.innerText;
        if(screen.innerText == '0'){
            str = screen.innerText;
            screen.innerText = value;
        }
        else if (value == '×') {
            str = screen.innerText;
            screen.innerText += '*';
        }
        else if(value == '÷') {
            str = screen.innerText;
            screen.innerText += '/';
        }
        else if(value == '<--'){
            let str = '';
            if(screen.innerText != 0){
                for(let i = 0; i < screen.innerText.length -1; i++){
                    str += screen.innerText[i]
                }
                screen.innerText = str;
            }
            if(str == ''){
                screen.innerText = 0;
            }
        }
        else if(value == '='){
            str = screen.innerText;
            screen.innerText = eval(screen.innerText);
        }
        else{
            str = screen.innerText;
            screen.innerText += value;
        }
        if(value == 'C'){
            screen.innerText = "0";
            str = '';
        }
        
    });
}