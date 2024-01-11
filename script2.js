
//counting total marks
let numberCount = 0;

let timing = document.querySelector('.timing');
let htheoption = document.querySelector('#htheoption');


// function for quiz 1

function goToNextP(){

    let falseResult1_1 = document.createElement('div');
    let falseResult1_2 = document.createElement('div');
    let falseResult1_3 = document.createElement('div');
    let falseResult1_4 = document.createElement('div');

    falseResult1_1.id = 'opt1';
    falseResult1_2.id = 'opt2';
    falseResult1_3.id = 'opt3';
    falseResult1_4.id = 'opt4';

    falseResult1_1.className = 'option';
    falseResult1_2.className = 'option';
    falseResult1_3.className = 'option';
    falseResult1_4.className = 'option';

    htheoption.appendChild(falseResult1_1);
    htheoption.appendChild(falseResult1_2);
    htheoption.appendChild(falseResult1_3);
    htheoption.appendChild(falseResult1_4);

    let qus = '1. Which HTML tag is used to create an unordered list?';
    let op1 = ' < ul >';
    let op2 = ' < ol >';
    let op3 = ' < li >';
    let op4 = ' < dl >';



    document.getElementById('questions').innerHTML = qus;
    document.getElementById('opt1').innerHTML = '1.' + op1;
    document.getElementById('opt2').innerHTML = '2.' + op2;
    document.getElementById('opt3').innerHTML = '3.' + op3;
    document.getElementById('opt4').innerHTML = '4.' + op4;
    document.getElementById('pageNumber').innerHTML ='1&nbsp;&nbsp;';

    let forNumCont = document.createElement('p');
    timing.appendChild(forNumCont);
    forNumCont.id = 'countTiming' 
    let numCount = 21;

    function lessNum(){
        numCount--;
        if(numCount == -1){
            goToNextQuiz()
        }
        
        document.getElementById('countTiming').innerHTML = numCount;

    }
    lessNum();
    setInterval(function(){
        lessNum();
    }, 1000);
    

    nextQpage();

}
goToNextP()

function nextQpage() { 

    let falseResult1_1 = document.getElementById('opt1');
    let falseResult1_2 = document.getElementById('opt2');
    let falseResult1_3 = document.getElementById('opt3');
    let falseResult1_4 = document.getElementById('opt4');
    
    let nextButton = document.querySelector('.nextButton');

    nextButton.onclick = goToNextQuiz;

    falseResult1_1.addEventListener("click", colorChange1_1);
    falseResult1_2.addEventListener("click", colorChange1_2);
    falseResult1_3.addEventListener("click", colorChange1_3);
    falseResult1_4.addEventListener("click", colorChange1_4);
}

function colorChange1_1(){
    TotalMarks();
    let falseResult1_1 = document.getElementById('opt1');
    let falseResult1_2 = document.getElementById('opt2');
    let falseResult1_3 = document.getElementById('opt3');
    let falseResult1_4 = document.getElementById('opt4');

    falseResult1_1.removeEventListener("click", colorChange1_1);
    falseResult1_2.removeEventListener("click", colorChange1_2);
    falseResult1_3.removeEventListener("click", colorChange1_3);
    falseResult1_4.removeEventListener("click", colorChange1_4);

    falseResult1_1.style.backgroundColor = 'rgba(131, 255, 97, 0.281)';
    falseResult1_1.style.border = ' 2px solid rgb(93, 250, 93)';
}

function colorChange1_2(){
    let forBGcolor = document.querySelector('#a1');
    forBGcolor.style.backgroundColor = 'rgb(255, 148, 148)';
    forBGcolor.style.border = '2px solid #ff1c1c';

    let falseResult1_1 = document.getElementById('opt1');
    let falseResult1_2 = document.getElementById('opt2');
    let falseResult1_3 = document.getElementById('opt3');
    let falseResult1_4 = document.getElementById('opt4');

    falseResult1_1.removeEventListener("click", colorChange1_1);
    falseResult1_2.removeEventListener("click", colorChange1_2);
    falseResult1_3.removeEventListener("click", colorChange1_3);
    falseResult1_4.removeEventListener("click", colorChange1_4);

    falseResult1_2.style.backgroundColor = 'rgba(131, 255, 97, 0.281)';
    falseResult1_2.style.border = ' 2px solid rgb(93, 250, 93)';
    
}

function colorChange1_3(){
    let forBGcolor = document.querySelector('#a2');
    forBGcolor.style.backgroundColor = 'rgb(255, 148, 148)';
    forBGcolor.style.border = '2px solid #ff1c1c';

    let falseResult1_1 = document.getElementById('opt1');
    let falseResult1_2 = document.getElementById('opt2');
    let falseResult1_3 = document.getElementById('opt3');
    let falseResult1_4 = document.getElementById('opt4');

    falseResult1_1.removeEventListener("click", colorChange1_1);
    falseResult1_2.removeEventListener("click", colorChange1_2);
    falseResult1_3.removeEventListener("click", colorChange1_3);
    falseResult1_4.removeEventListener("click", colorChange1_4);

    falseResult1_3.style.backgroundColor = 'rgba(131, 255, 97, 0.281)';
    falseResult1_3.style.border = ' 2px solid rgb(93, 250, 93)';
    
}

function colorChange1_4(){
    let forBGcolor = document.querySelector('#a3');
    forBGcolor.style.backgroundColor = 'rgb(255, 148, 148)';
    forBGcolor.style.border = '2px solid #ff1c1c';

    let falseResult1_1 = document.getElementById('opt1');
    let falseResult1_2 = document.getElementById('opt2');
    let falseResult1_3 = document.getElementById('opt3');
    let falseResult1_4 = document.getElementById('opt4');

    falseResult1_1.removeEventListener("click", colorChange1_1);
    falseResult1_2.removeEventListener("click", colorChange1_2);
    falseResult1_3.removeEventListener("click", colorChange1_3);
    falseResult1_4.removeEventListener("click", colorChange1_4);

    falseResult1_4.style.backgroundColor = 'rgba(131, 255, 97, 0.281)';
    falseResult1_4.style.border = ' 2px solid rgb(93, 250, 93)';
    
}

//function for quiz2

function goToNextQuiz(){

    let falseResult1_1 = document.getElementById('opt1');
    let falseResult1_2 = document.getElementById('opt2');
    let falseResult1_3 = document.getElementById('opt3');
    let falseResult1_4 = document.getElementById('opt4');

    falseResult1_1.remove();
    falseResult1_2.remove();
    falseResult1_3.remove();
    falseResult1_4.remove();

    let falseResult2_1 = document.createElement('div');
    let falseResult2_2 = document.createElement('div');
    let falseResult2_3 = document.createElement('div');
    let falseResult2_4 = document.createElement('div');

    falseResult2_1.id = 'optt1';
    falseResult2_2.id = 'optt2';
    falseResult2_3.id = 'optt3';
    falseResult2_4.id = 'optt4';

    falseResult2_1.className = 'option';
    falseResult2_2.className = 'option';
    falseResult2_3.className = 'option';
    falseResult2_4.className = 'option';

    htheoption.appendChild(falseResult2_1);
    htheoption.appendChild(falseResult2_2);
    htheoption.appendChild(falseResult2_3);
    htheoption.appendChild(falseResult2_4);

   
    let deleteItem = document.querySelector('#countTiming');
    deleteItem.remove();

    let qus = '2.  What is the capital city of Bangladesh?';
    let op1 = ' Colombo';
    let op2 = ' Kathmandu';
    let op3 = ' Islamabad';
    let op4 = ' Dhaka';

    document.getElementById('questions').innerHTML = qus;
    document.getElementById('optt1').innerHTML = '1.' + op1;
    document.getElementById('optt2').innerHTML = '2.' + op2;
    document.getElementById('optt3').innerHTML = '3.' + op3;
    document.getElementById('optt4').innerHTML = '4.' + op4;
    document.getElementById('pageNumber').innerHTML ='2&nbsp;&nbsp;';

    let newp = document.createElement('p');
    timing.appendChild(newp);
    newp.id = 'cuntTiming';
    let numCount = 21;

    function lessNum(){
        numCount--;
        if(numCount == -1){
            goToNextQuiz1()
        }
        
        document.getElementById('cuntTiming').innerHTML = numCount;

    }
    lessNum();
    setInterval(function(){
        lessNum();
    }, 1000);

    nextQpage1();

}

function nextQpage1() { 

    let falseResult1_1 = document.getElementById('optt1');
    let falseResult1_2 = document.getElementById('optt2');
    let falseResult1_3 = document.getElementById('optt3');
    let falseResult1_4 = document.getElementById('optt4');

    let nextButton = document.querySelector('.nextButton');
    nextButton.onclick = goToNextQuiz1;

    falseResult1_1.addEventListener("click", colorChange2_1);
    falseResult1_2.addEventListener("click", colorChange2_2);
    falseResult1_3.addEventListener("click", colorChange2_3);
    falseResult1_4.addEventListener("click", colorChange2_4);
}

function colorChange2_1(){
    let forBGcolor = document.querySelector('#al1');
    forBGcolor.style.backgroundColor = 'rgb(255, 148, 148)';
    forBGcolor.style.border = '2px solid #ff1c1c';

    let falseResult1_1 = document.getElementById('optt1');
    let falseResult1_2 = document.getElementById('optt2');
    let falseResult1_3 = document.getElementById('optt3');
    let falseResult1_4 = document.getElementById('optt4');

    falseResult1_1.removeEventListener("click", colorChange2_1);
    falseResult1_2.removeEventListener("click", colorChange2_2);
    falseResult1_3.removeEventListener("click", colorChange2_3);
    falseResult1_4.removeEventListener("click", colorChange2_4);

    falseResult1_1.style.backgroundColor = 'rgba(131, 255, 97, 0.281)';
    falseResult1_1.style.border = ' 2px solid rgb(93, 250, 93)';
}

function colorChange2_2(){
    let forBGcolor = document.querySelector('#al2');
    forBGcolor.style.backgroundColor = 'rgb(255, 148, 148)';
    forBGcolor.style.border = '2px solid #ff1c1c';

    let falseResult1_1 = document.getElementById('optt1');
    let falseResult1_2 = document.getElementById('optt2');
    let falseResult1_3 = document.getElementById('optt3');
    let falseResult1_4 = document.getElementById('optt4');

    falseResult1_1.removeEventListener("click", colorChange2_1);
    falseResult1_2.removeEventListener("click", colorChange2_2);
    falseResult1_3.removeEventListener("click", colorChange2_3);
    falseResult1_4.removeEventListener("click", colorChange2_4);

    falseResult1_2.style.backgroundColor = 'rgba(131, 255, 97, 0.281)';
    falseResult1_2.style.border = ' 2px solid rgb(93, 250, 93)';
}

function colorChange2_3(){
    let forBGcolor = document.querySelector('#al3');
    forBGcolor.style.backgroundColor = 'rgb(255, 148, 148)';
    forBGcolor.style.border = '2px solid #ff1c1c';

    let falseResult1_1 = document.getElementById('optt1');
    let falseResult1_2 = document.getElementById('optt2');
    let falseResult1_3 = document.getElementById('optt3');
    let falseResult1_4 = document.getElementById('optt4');

    falseResult1_1.removeEventListener("click", colorChange2_1);
    falseResult1_2.removeEventListener("click", colorChange2_2);
    falseResult1_3.removeEventListener("click", colorChange2_3);
    falseResult1_4.removeEventListener("click", colorChange2_4);

    falseResult1_3.style.backgroundColor = 'rgba(131, 255, 97, 0.281)';
    falseResult1_3.style.border = ' 2px solid rgb(93, 250, 93)';
}

function colorChange2_4(){
    TotalMarks();
    let falseResult1_1 = document.getElementById('optt1');
    let falseResult1_2 = document.getElementById('optt2');
    let falseResult1_3 = document.getElementById('optt3');
    let falseResult1_4 = document.getElementById('optt4');

    falseResult1_1.removeEventListener("click", colorChange2_1);
    falseResult1_2.removeEventListener("click", colorChange2_2);
    falseResult1_3.removeEventListener("click", colorChange2_3);
    falseResult1_4.removeEventListener("click", colorChange2_4);

    falseResult1_4.style.backgroundColor = 'rgba(131, 255, 97, 0.281)';
    falseResult1_4.style.border = ' 2px solid rgb(93, 250, 93)';
}

//function for quiz 3

function goToNextQuiz1(){

    let falseResult1_1 = document.getElementById('optt1');
    let falseResult1_2 = document.getElementById('optt2');
    let falseResult1_3 = document.getElementById('optt3');
    let falseResult1_4 = document.getElementById('optt4');

    falseResult1_1.remove();
    falseResult1_2.remove();
    falseResult1_3.remove();
    falseResult1_4.remove();

    let falseResult2_1 = document.createElement('div');
    let falseResult2_2 = document.createElement('div');
    let falseResult2_3 = document.createElement('div');
    let falseResult2_4 = document.createElement('div');

    falseResult2_1.id = 'opttt1';
    falseResult2_2.id = 'opttt2';
    falseResult2_3.id = 'opttt3';
    falseResult2_4.id = 'opttt4';

    falseResult2_1.className = 'option';
    falseResult2_2.className = 'option';
    falseResult2_3.className = 'option';
    falseResult2_4.className = 'option';

    htheoption.appendChild(falseResult2_1);
    htheoption.appendChild(falseResult2_2);
    htheoption.appendChild(falseResult2_3);
    htheoption.appendChild(falseResult2_4);

   


    let deleteItem = document.querySelector('#cuntTiming');
    deleteItem.remove();

    let qus = '3. Which river is the longest in Bangladesh?';
    let op1 = ' Jamuna';
    let op2 = ' Padma';
    let op3 = ' Meghna';
    let op4 = ' Brahmaputra';

    document.getElementById('questions').innerHTML = qus;
    document.getElementById('opttt1').innerHTML = '1.' + op1;
    document.getElementById('opttt2').innerHTML = '2.' + op2;
    document.getElementById('opttt3').innerHTML = '3.' + op3;
    document.getElementById('opttt4').innerHTML = '4.' + op4;
    document.getElementById('pageNumber').innerHTML ='3&nbsp;&nbsp;';

    let newpt = document.createElement('p');
    timing.appendChild(newpt);
    newpt.id = 'cunttiming';
    let numCount = 21;

    function lessNum(){
        numCount--;
        if(numCount == -1){
            goToNextQuiz2()
        }
        
        document.getElementById('cunttiming').innerHTML = numCount;

    }
    lessNum();
    setInterval(function(){
        lessNum();
    }, 1000);


    nextQpage2();

}

function nextQpage2() { 

    let falseResult1_1 = document.getElementById('opttt1');
    let falseResult1_2 = document.getElementById('opttt2');
    let falseResult1_3 = document.getElementById('opttt3');
    let falseResult1_4 = document.getElementById('opttt4');


    let nextButton = document.querySelector('.nextButton');
    nextButton.onclick = goToNextQuiz2;

    falseResult1_1.addEventListener("click", colorChange3_1);
    falseResult1_2.addEventListener("click", colorChange3_2);
    falseResult1_3.addEventListener("click", colorChange3_3);
    falseResult1_4.addEventListener("click", colorChange3_4);
}

function colorChange3_1(){
    let forBGcolor = document.querySelector('#alv1');
    forBGcolor.style.backgroundColor = 'rgb(255, 148, 148)';
    forBGcolor.style.border = '2px solid #ff1c1c';

    let falseResult1_1 = document.getElementById('opttt1');
    let falseResult1_2 = document.getElementById('opttt2');
    let falseResult1_3 = document.getElementById('opttt3');
    let falseResult1_4 = document.getElementById('opttt4');

    falseResult1_1.removeEventListener("click", colorChange3_1);
    falseResult1_2.removeEventListener("click", colorChange3_2);
    falseResult1_3.removeEventListener("click", colorChange3_3);
    falseResult1_4.removeEventListener("click", colorChange3_4);

    falseResult1_1.style.backgroundColor = 'rgba(131, 255, 97, 0.281)';
    falseResult1_1.style.border = ' 2px solid rgb(93, 250, 93)';
}

function colorChange3_2(){
    let forBGcolor = document.querySelector('#alv2');
    forBGcolor.style.backgroundColor = 'rgb(255, 148, 148)';
    forBGcolor.style.border = '2px solid #ff1c1c';

    let falseResult1_1 = document.getElementById('opttt1');
    let falseResult1_2 = document.getElementById('opttt2');
    let falseResult1_3 = document.getElementById('opttt3');
    let falseResult1_4 = document.getElementById('opttt4');

    falseResult1_1.removeEventListener("click", colorChange3_1);
    falseResult1_2.removeEventListener("click", colorChange3_2);
    falseResult1_3.removeEventListener("click", colorChange3_3);
    falseResult1_4.removeEventListener("click", colorChange3_4);

    falseResult1_2.style.backgroundColor = 'rgba(131, 255, 97, 0.281)';
    falseResult1_2.style.border = ' 2px solid rgb(93, 250, 93)';
}

function colorChange3_3(){
    TotalMarks();
    let falseResult1_1 = document.getElementById('opttt1');
    let falseResult1_2 = document.getElementById('opttt2');
    let falseResult1_3 = document.getElementById('opttt3');
    let falseResult1_4 = document.getElementById('opttt4');

    falseResult1_1.removeEventListener("click", colorChange3_1);
    falseResult1_2.removeEventListener("click", colorChange3_2);
    falseResult1_3.removeEventListener("click", colorChange3_3);
    falseResult1_4.removeEventListener("click", colorChange3_4);

    falseResult1_3.style.backgroundColor = 'rgba(131, 255, 97, 0.281)';
    falseResult1_3.style.border = ' 2px solid rgb(93, 250, 93)';
}

function colorChange3_4(){
    let forBGcolor = document.querySelector('#alv3');
    forBGcolor.style.backgroundColor = 'rgb(255, 148, 148)';
    forBGcolor.style.border = '2px solid #ff1c1c';

    let falseResult1_1 = document.getElementById('opttt1');
    let falseResult1_2 = document.getElementById('opttt2');
    let falseResult1_3 = document.getElementById('opttt3');
    let falseResult1_4 = document.getElementById('opttt4');

    falseResult1_1.removeEventListener("click", colorChange3_1);
    falseResult1_2.removeEventListener("click", colorChange3_2);
    falseResult1_3.removeEventListener("click", colorChange3_3);
    falseResult1_4.removeEventListener("click", colorChange3_4);

    falseResult1_4.style.backgroundColor = 'rgba(131, 255, 97, 0.281)';
    falseResult1_4.style.border = ' 2px solid rgb(93, 250, 93)';
}

//function for quiz 4

function goToNextQuiz2(){

    let falseResult1_1 = document.getElementById('opttt1');
    let falseResult1_2 = document.getElementById('opttt2');
    let falseResult1_3 = document.getElementById('opttt3');
    let falseResult1_4 = document.getElementById('opttt4');

    falseResult1_1.remove();
    falseResult1_2.remove();
    falseResult1_3.remove();
    falseResult1_4.remove();

    let falseResult2_1 = document.createElement('div');
    let falseResult2_2 = document.createElement('div');
    let falseResult2_3 = document.createElement('div');
    let falseResult2_4 = document.createElement('div');

    falseResult2_1.id = 'opttT1';
    falseResult2_2.id = 'opttT2';
    falseResult2_3.id = 'opttT3';
    falseResult2_4.id = 'opttT4';

    falseResult2_1.className = 'option';
    falseResult2_2.className = 'option';
    falseResult2_3.className = 'option';
    falseResult2_4.className = 'option';

    htheoption.appendChild(falseResult2_1);
    htheoption.appendChild(falseResult2_2);
    htheoption.appendChild(falseResult2_3);
    htheoption.appendChild(falseResult2_4);

    


    let deleteItem = document.querySelector('#cunttiming');
    deleteItem.remove();

    let qus = '4. Which UNESCO World Heritage Site is located in Bangladesh?';
    let op1 = ' Angkor Wat';
    let op2 = ' Sundarbans';
    let op3 = ' Great Barrier Reef';
    let op4 = ' Machu Picchu';

    document.getElementById('questions').innerHTML = qus;
    document.getElementById('opttT1').innerHTML = '1.' + op1;
    document.getElementById('opttT2').innerHTML = '2.' + op2;
    document.getElementById('opttT3').innerHTML = '3.' + op3;
    document.getElementById('opttT4').innerHTML = '4.' + op4;
    document.getElementById('pageNumber').innerHTML ='4&nbsp;&nbsp;';

    let newptt = document.createElement('p');
    timing.appendChild(newptt);
    newptt.id = 'conttiming';
    let numCount = 21;

    function lessNum(){
        numCount--;
        if(numCount == -1){
            goToNextQuiz3()
        }
        
        document.getElementById('conttiming').innerHTML = numCount;

    }
    lessNum();
    setInterval(function(){
        lessNum();
    }, 1000);


    nextQpage3();
}

function nextQpage3() { 

    let falseResult1_1 = document.getElementById('opttT1');
    let falseResult1_2 = document.getElementById('opttT2');
    let falseResult1_3 = document.getElementById('opttT3');
    let falseResult1_4 = document.getElementById('opttT4');

    let nextButton = document.querySelector('.nextButton');
    nextButton.onclick = goToNextQuiz3;

    falseResult1_1.addEventListener("click", colorChange4_1);
    falseResult1_2.addEventListener("click", colorChange4_2);
    falseResult1_3.addEventListener("click", colorChange4_3);
    falseResult1_4.addEventListener("click", colorChange4_4);
}

function colorChange4_1(){
    let forBGcolor = document.querySelector('#alve1');
    forBGcolor.style.backgroundColor = 'rgb(255, 148, 148)';
    forBGcolor.style.border = '2px solid #ff1c1c';

    let falseResult1_1 = document.getElementById('opttT1');
    let falseResult1_2 = document.getElementById('opttT2');
    let falseResult1_3 = document.getElementById('opttT3');
    let falseResult1_4 = document.getElementById('opttT4');

    falseResult1_1.removeEventListener("click", colorChange4_1);
    falseResult1_2.removeEventListener("click", colorChange4_2);
    falseResult1_3.removeEventListener("click", colorChange4_3);
    falseResult1_4.removeEventListener("click", colorChange4_4);

    falseResult1_1.style.backgroundColor = 'rgba(131, 255, 97, 0.281)';
    falseResult1_1.style.border = ' 2px solid rgb(93, 250, 93)';
}

function colorChange4_2(){
    TotalMarks();
    let falseResult1_1 = document.getElementById('opttT1');
    let falseResult1_2 = document.getElementById('opttT2');
    let falseResult1_3 = document.getElementById('opttT3');
    let falseResult1_4 = document.getElementById('opttT4');

    falseResult1_1.removeEventListener("click", colorChange4_1);
    falseResult1_2.removeEventListener("click", colorChange4_2);
    falseResult1_3.removeEventListener("click", colorChange4_3);
    falseResult1_4.removeEventListener("click", colorChange4_4);

    falseResult1_2.style.backgroundColor = 'rgba(131, 255, 97, 0.281)';
    falseResult1_2.style.border = ' 2px solid rgb(93, 250, 93)';
}

function colorChange4_3(){
    let forBGcolor = document.querySelector('#alve2');
    forBGcolor.style.backgroundColor = 'rgb(255, 148, 148)';
    forBGcolor.style.border = '2px solid #ff1c1c';

    let falseResult1_1 = document.getElementById('opttT1');
    let falseResult1_2 = document.getElementById('opttT2');
    let falseResult1_3 = document.getElementById('opttT3');
    let falseResult1_4 = document.getElementById('opttT4');

    falseResult1_1.removeEventListener("click", colorChange4_1);
    falseResult1_2.removeEventListener("click", colorChange4_2);
    falseResult1_3.removeEventListener("click", colorChange4_3);
    falseResult1_4.removeEventListener("click", colorChange4_4);

    falseResult1_3.style.backgroundColor = 'rgba(131, 255, 97, 0.281)';
    falseResult1_3.style.border = ' 2px solid rgb(93, 250, 93)';
}

function colorChange4_4(){
    let forBGcolor = document.querySelector('#alve3');
    forBGcolor.style.backgroundColor = 'rgb(255, 148, 148)';
    forBGcolor.style.border = '2px solid #ff1c1c';

    let falseResult1_1 = document.getElementById('opttT1');
    let falseResult1_2 = document.getElementById('opttT2');
    let falseResult1_3 = document.getElementById('opttT3');
    let falseResult1_4 = document.getElementById('opttT4');

    falseResult1_1.removeEventListener("click", colorChange4_1);
    falseResult1_2.removeEventListener("click", colorChange4_2);
    falseResult1_3.removeEventListener("click", colorChange4_3);
    falseResult1_4.removeEventListener("click", colorChange4_4);

    falseResult1_4.style.backgroundColor = 'rgba(131, 255, 97, 0.281)';
    falseResult1_4.style.border = ' 2px solid rgb(93, 250, 93)';
}

//function for quiz 5

function goToNextQuiz3(){

    let falseResult1_1 = document.getElementById('opttT1');
    let falseResult1_2 = document.getElementById('opttT2');
    let falseResult1_3 = document.getElementById('opttT3');
    let falseResult1_4 = document.getElementById('opttT4');

    falseResult1_1.remove();
    falseResult1_2.remove();
    falseResult1_3.remove();
    falseResult1_4.remove();

    let falseResult2_1 = document.createElement('div');
    let falseResult2_2 = document.createElement('div');
    let falseResult2_3 = document.createElement('div');
    let falseResult2_4 = document.createElement('div');

    falseResult2_1.id = 'optTT1';
    falseResult2_2.id = 'optTT2';
    falseResult2_3.id = 'optTT3';
    falseResult2_4.id = 'optTT4';

    falseResult2_1.className = 'option';
    falseResult2_2.className = 'option';
    falseResult2_3.className = 'option';
    falseResult2_4.className = 'option';

    htheoption.appendChild(falseResult2_1);
    htheoption.appendChild(falseResult2_2);
    htheoption.appendChild(falseResult2_3);
    htheoption.appendChild(falseResult2_4);

    


    let deleteItem = document.querySelector('#conttiming');
    deleteItem.remove();

    let qus = '5. What is the currency of Bangladesh?';
    let op1 = ' Taka';
    let op2 = ' Rupee';
    let op3 = ' Baht';
    let op4 = ' Ringgit';

    document.getElementById('questions').innerHTML = qus;
    document.getElementById('optTT1').innerHTML = '1.' + op1;
    document.getElementById('optTT2').innerHTML = '2.' + op2;
    document.getElementById('optTT3').innerHTML = '3.' + op3;
    document.getElementById('optTT4').innerHTML = '4.' + op4;
    document.getElementById('pageNumber').innerHTML ='5&nbsp;&nbsp;';

    let newpttt = document.createElement('p');
    timing.appendChild(newpttt);
    newpttt.id = 'contTiming';
    let numCount = 21;

    function lessNum(){
        numCount--;
        if(numCount == -1){
            goToNextQuiz4()
        }
        
        document.getElementById('contTiming').innerHTML = numCount;

    }
    lessNum();
    setInterval(function(){
        lessNum();
    }, 1000);


    nextQpage4();
}


function nextQpage4() { 

    let falseResult1_1 = document.getElementById('optTT1');
    let falseResult1_2 = document.getElementById('optTT2');
    let falseResult1_3 = document.getElementById('optTT3');
    let falseResult1_4 = document.getElementById('optTT4');


    let nextButton = document.querySelector('.nextButton');
    nextButton.onclick = goToNextQuiz4;

    falseResult1_1.addEventListener("click", colorChange5_1);
    falseResult1_2.addEventListener("click", colorChange5_2);
    falseResult1_3.addEventListener("click", colorChange5_3);
    falseResult1_4.addEventListener("click", colorChange5_4);
}

function colorChange5_1(){
    TotalMarks();
    let falseResult1_1 = document.getElementById('optTT1');
    let falseResult1_2 = document.getElementById('optTT2');
    let falseResult1_3 = document.getElementById('optTT3');
    let falseResult1_4 = document.getElementById('optTT4');

    falseResult1_1.removeEventListener("click", colorChange5_1);
    falseResult1_2.removeEventListener("click", colorChange5_2);
    falseResult1_3.removeEventListener("click", colorChange5_3);
    falseResult1_4.removeEventListener("click", colorChange5_4);

    falseResult1_1.style.backgroundColor = 'rgba(131, 255, 97, 0.281)';
    falseResult1_1.style.border = ' 2px solid rgb(93, 250, 93)';
}

function colorChange5_2(){
    let forBGcolor = document.querySelector('#alvee1');
    forBGcolor.style.backgroundColor = 'rgb(255, 148, 148)';
    forBGcolor.style.border = '2px solid #ff1c1c';

    let falseResult1_1 = document.getElementById('optTT1');
    let falseResult1_2 = document.getElementById('optTT2');
    let falseResult1_3 = document.getElementById('optTT3');
    let falseResult1_4 = document.getElementById('optTT4');

    falseResult1_1.removeEventListener("click", colorChange5_1);
    falseResult1_2.removeEventListener("click", colorChange5_2);
    falseResult1_3.removeEventListener("click", colorChange5_3);
    falseResult1_4.removeEventListener("click", colorChange5_4);

    falseResult1_2.style.backgroundColor = 'rgba(131, 255, 97, 0.281)';
    falseResult1_2.style.border = ' 2px solid rgb(93, 250, 93)';
}

function colorChange5_3(){
    let forBGcolor = document.querySelector('#alvee2');
    forBGcolor.style.backgroundColor = 'rgb(255, 148, 148)';
    forBGcolor.style.border = '2px solid #ff1c1c';

   let falseResult1_1 = document.getElementById('optTT1');
    let falseResult1_2 = document.getElementById('optTT2');
    let falseResult1_3 = document.getElementById('optTT3');
    let falseResult1_4 = document.getElementById('optTT4');

    falseResult1_1.removeEventListener("click", colorChange5_1);
    falseResult1_2.removeEventListener("click", colorChange5_2);
    falseResult1_3.removeEventListener("click", colorChange5_3);
    falseResult1_4.removeEventListener("click", colorChange5_4);

    falseResult1_3.style.backgroundColor = 'rgba(131, 255, 97, 0.281)';
    falseResult1_3.style.border = ' 2px solid rgb(93, 250, 93)';
}

function colorChange5_4(){
    let forBGcolor = document.querySelector('#alvee3');
    forBGcolor.style.backgroundColor = 'rgb(255, 148, 148)';
    forBGcolor.style.border = '2px solid #ff1c1c';

    let falseResult1_1 = document.getElementById('optTT1');
    let falseResult1_2 = document.getElementById('optTT2');
    let falseResult1_3 = document.getElementById('optTT3');
    let falseResult1_4 = document.getElementById('optTT4');

    falseResult1_1.removeEventListener("click", colorChange5_1);
    falseResult1_2.removeEventListener("click", colorChange5_2);
    falseResult1_3.removeEventListener("click", colorChange5_3);
    falseResult1_4.removeEventListener("click", colorChange5_4);

    falseResult1_4.style.backgroundColor = 'rgba(131, 255, 97, 0.281)';
    falseResult1_4.style.border = ' 2px solid rgb(93, 250, 93)';
}

//function for quiz 6

function goToNextQuiz4(){

    let falseResult1_1 = document.getElementById('optTT1');
    let falseResult1_2 = document.getElementById('optTT2');
    let falseResult1_3 = document.getElementById('optTT3');
    let falseResult1_4 = document.getElementById('optTT4');

    falseResult1_1.remove();
    falseResult1_2.remove();
    falseResult1_3.remove();
    falseResult1_4.remove();

    let falseResult2_1 = document.createElement('div');
    let falseResult2_2 = document.createElement('div');
    let falseResult2_3 = document.createElement('div');
    let falseResult2_4 = document.createElement('div');

    falseResult2_1.id = 'opTTT1';
    falseResult2_2.id = 'opTTT2';
    falseResult2_3.id = 'opTTT3';
    falseResult2_4.id = 'opTTT4';

    falseResult2_1.className = 'option';
    falseResult2_2.className = 'option';
    falseResult2_3.className = 'option';
    falseResult2_4.className = 'option';

    htheoption.appendChild(falseResult2_1);
    htheoption.appendChild(falseResult2_2);
    htheoption.appendChild(falseResult2_3);
    htheoption.appendChild(falseResult2_4);

   


    let deleteItem = document.querySelector('#contTiming');
    deleteItem.remove();

    let qus = '6. Which of the following is not a web browser?';
    let op1 = ' Chrome';
    let op2 = ' Java';
    let op3 = ' Firefox';
    let op4 = ' Safari';

    document.getElementById('questions').innerHTML = qus;
    document.getElementById('opTTT1').innerHTML = '1.' + op1;
    document.getElementById('opTTT2').innerHTML = '2.' + op2;
    document.getElementById('opTTT3').innerHTML = '3.' + op3;
    document.getElementById('opTTT4').innerHTML = '4.' + op4;
    document.getElementById('pageNumber').innerHTML ='6&nbsp;&nbsp;';

    let newPttt = document.createElement('p');
    timing.appendChild(newPttt);
    newPttt.id = 'ContTiming';
    let numCount = 21;

    function lessNum(){
        numCount--;
        if(numCount == -1){
            goToNextQuiz5()
        }
        
        document.getElementById('ContTiming').innerHTML = numCount;

    }
    lessNum();
    setInterval(function(){
        lessNum();
    }, 1000);


    nextQpage5();
}


function nextQpage5() {

    let falseResult1_1 = document.getElementById('opTTT1');
    let falseResult1_2 = document.getElementById('opTTT2');
    let falseResult1_3 = document.getElementById('opTTT3');
    let falseResult1_4 = document.getElementById('opTTT4');

    let nextButton = document.querySelector('.nextButton');
    nextButton.onclick = goToNextQuiz5;

    falseResult1_1.addEventListener("click", colorChange6_1);
    falseResult1_2.addEventListener("click", colorChange6_2);
    falseResult1_3.addEventListener("click", colorChange6_3);
    falseResult1_4.addEventListener("click", colorChange6_4);
}

function colorChange6_1(){
    let forBGcolor = document.querySelector('#A1');
    forBGcolor.style.backgroundColor = 'rgb(255, 148, 148)';
    forBGcolor.style.border = '2px solid #ff1c1c';

    let falseResult1_1 = document.getElementById('opTTT1');
    let falseResult1_2 = document.getElementById('opTTT2');
    let falseResult1_3 = document.getElementById('opTTT3');
    let falseResult1_4 = document.getElementById('opTTT4');

    falseResult1_1.removeEventListener("click", colorChange6_1);
    falseResult1_2.removeEventListener("click", colorChange6_2);
    falseResult1_3.removeEventListener("click", colorChange6_3);
    falseResult1_4.removeEventListener("click", colorChange6_4);

    falseResult1_1.style.backgroundColor = 'rgba(131, 255, 97, 0.281)';
    falseResult1_1.style.border = ' 2px solid rgb(93, 250, 93)';
}

function colorChange6_2(){
    TotalMarks();
    let falseResult1_1 = document.getElementById('opTTT1');
    let falseResult1_2 = document.getElementById('opTTT2');
    let falseResult1_3 = document.getElementById('opTTT3');
    let falseResult1_4 = document.getElementById('opTTT4');

    falseResult1_1.removeEventListener("click", colorChange6_1);
    falseResult1_2.removeEventListener("click", colorChange6_2);
    falseResult1_3.removeEventListener("click", colorChange6_3);
    falseResult1_4.removeEventListener("click", colorChange6_4);

    falseResult1_2.style.backgroundColor = 'rgba(131, 255, 97, 0.281)';
    falseResult1_2.style.border = ' 2px solid rgb(93, 250, 93)';
}

function colorChange6_3(){
    let forBGcolor = document.querySelector('#A2');
    forBGcolor.style.backgroundColor = 'rgb(255, 148, 148)';
    forBGcolor.style.border = '2px solid #ff1c1c';

    let falseResult1_1 = document.getElementById('opTTT1');
    let falseResult1_2 = document.getElementById('opTTT2');
    let falseResult1_3 = document.getElementById('opTTT3');
    let falseResult1_4 = document.getElementById('opTTT4');

    falseResult1_1.removeEventListener("click", colorChange6_1);
    falseResult1_2.removeEventListener("click", colorChange6_2);
    falseResult1_3.removeEventListener("click", colorChange6_3);
    falseResult1_4.removeEventListener("click", colorChange6_4);

    falseResult1_3.style.backgroundColor = 'rgba(131, 255, 97, 0.281)';
    falseResult1_3.style.border = ' 2px solid rgb(93, 250, 93)';
}

function colorChange6_4(){
    let forBGcolor = document.querySelector('#A3');
    forBGcolor.style.backgroundColor = 'rgb(255, 148, 148)';
    forBGcolor.style.border = '2px solid #ff1c1c';

    let falseResult1_1 = document.getElementById('opTTT1');
    let falseResult1_2 = document.getElementById('opTTT2');
    let falseResult1_3 = document.getElementById('opTTT3');
    let falseResult1_4 = document.getElementById('opTTT4');

    falseResult1_1.removeEventListener("click", colorChange6_1);
    falseResult1_2.removeEventListener("click", colorChange6_2);
    falseResult1_3.removeEventListener("click", colorChange6_3);
    falseResult1_4.removeEventListener("click", colorChange6_4);

    falseResult1_4.style.backgroundColor = 'rgba(131, 255, 97, 0.281)';
    falseResult1_4.style.border = ' 2px solid rgb(93, 250, 93)';
}

//function for quiz 7

function goToNextQuiz5(){

    let falseResult1_1 = document.getElementById('opTTT1');
    let falseResult1_2 = document.getElementById('opTTT2');
    let falseResult1_3 = document.getElementById('opTTT3');
    let falseResult1_4 = document.getElementById('opTTT4');

    falseResult1_1.remove();
    falseResult1_2.remove();
    falseResult1_3.remove();
    falseResult1_4.remove();

    let falseResult2_1 = document.createElement('div');
    let falseResult2_2 = document.createElement('div');
    let falseResult2_3 = document.createElement('div');
    let falseResult2_4 = document.createElement('div');

    falseResult2_1.id = 'opTTTt1';
    falseResult2_2.id = 'opTTTt2';
    falseResult2_3.id = 'opTTTt3';
    falseResult2_4.id = 'opTTTt4';

    falseResult2_1.className = 'option';
    falseResult2_2.className = 'option';
    falseResult2_3.className = 'option';
    falseResult2_4.className = 'option';

    htheoption.appendChild(falseResult2_1);
    htheoption.appendChild(falseResult2_2);
    htheoption.appendChild(falseResult2_3);
    htheoption.appendChild(falseResult2_4);

    


    let deleteItem = document.querySelector('#ContTiming');
    deleteItem.remove();

    let qus = '7. Why did the computer go to therapy?';
    let op1 = ' It had a bad case of the Java jitters.';
    let op2 = ' It wanted to discuss its motherboard issues.';
    let op3 = ' It could not handle its relationship with the mouse.';
    let op4 = ' It had too many bytes of emotional baggage.';

    document.getElementById('questions').innerHTML = qus;
    document.getElementById('opTTTt1').innerHTML = '1.' + op1;
    document.getElementById('opTTTt2').innerHTML = '2.' + op2;
    document.getElementById('opTTTt3').innerHTML = '3.' + op3;
    document.getElementById('opTTTt4').innerHTML = '4.' + op4;
    document.getElementById('pageNumber').innerHTML ='7&nbsp;&nbsp;';

    let newPttT = document.createElement('p');
    timing.appendChild(newPttT);
    newPttT.id = 'COntTiming';
    let numCount = 21;

    function lessNum(){
        numCount--;
        if(numCount == -1){
            goToNextQuiz6()
        }
        
        document.getElementById('COntTiming').innerHTML = numCount;

    }
    lessNum();
    setInterval(function(){
        lessNum();
    }, 1000);


    nextQpage6();
}


function nextQpage6() { 

    let falseResult1_1 = document.getElementById('opTTTt1');
    let falseResult1_2 = document.getElementById('opTTTt2');
    let falseResult1_3 = document.getElementById('opTTTt3');
    let falseResult1_4 = document.getElementById('opTTTt4');

    let nextButton = document.querySelector('.nextButton');
    nextButton.onclick = goToNextQuiz6;
    falseResult1_1.addEventListener("click", colorChange7_1);
    falseResult1_2.addEventListener("click", colorChange7_2);
    falseResult1_3.addEventListener("click", colorChange7_3);
    falseResult1_4.addEventListener("click", colorChange7_4);
}

function colorChange7_1(){
    let forBGcolor = document.querySelector('#AL1');
    forBGcolor.style.backgroundColor = 'rgb(255, 148, 148)';
    forBGcolor.style.border = '2px solid #ff1c1c';

    let falseResult1_1 = document.getElementById('opTTTt1');
    let falseResult1_2 = document.getElementById('opTTTt2');
    let falseResult1_3 = document.getElementById('opTTTt3');
    let falseResult1_4 = document.getElementById('opTTTt4');

    falseResult1_1.removeEventListener("click", colorChange7_1);
    falseResult1_2.removeEventListener("click", colorChange7_2);
    falseResult1_3.removeEventListener("click", colorChange7_3);
    falseResult1_4.removeEventListener("click", colorChange7_4);

    falseResult1_1.style.backgroundColor = 'rgba(131, 255, 97, 0.281)';
    falseResult1_1.style.border = ' 2px solid rgb(93, 250, 93)';
}

function colorChange7_2(){
    let forBGcolor = document.querySelector('#AL2');
    forBGcolor.style.backgroundColor = 'rgb(255, 148, 148)';
    forBGcolor.style.border = '2px solid #ff1c1c';

    let falseResult1_1 = document.getElementById('opTTTt1');
    let falseResult1_2 = document.getElementById('opTTTt2');
    let falseResult1_3 = document.getElementById('opTTTt3');
    let falseResult1_4 = document.getElementById('opTTTt4');

    falseResult1_1.removeEventListener("click", colorChange7_1);
    falseResult1_2.removeEventListener("click", colorChange7_2);
    falseResult1_3.removeEventListener("click", colorChange7_3);
    falseResult1_4.removeEventListener("click", colorChange7_4);

    falseResult1_2.style.backgroundColor = 'rgba(131, 255, 97, 0.281)';
    falseResult1_2.style.border = ' 2px solid rgb(93, 250, 93)';
}

function colorChange7_3(){
    let forBGcolor = document.querySelector('#AL3');
    forBGcolor.style.backgroundColor = 'rgb(255, 148, 148)';
    forBGcolor.style.border = '2px solid #ff1c1c';

    let falseResult1_1 = document.getElementById('opTTTt1');
    let falseResult1_2 = document.getElementById('opTTTt2');
    let falseResult1_3 = document.getElementById('opTTTt3');
    let falseResult1_4 = document.getElementById('opTTTt4');

    falseResult1_1.removeEventListener("click", colorChange7_1);
    falseResult1_2.removeEventListener("click", colorChange7_2);
    falseResult1_3.removeEventListener("click", colorChange7_3);
    falseResult1_4.removeEventListener("click", colorChange7_4);

    falseResult1_3.style.backgroundColor = 'rgba(131, 255, 97, 0.281)';
    falseResult1_3.style.border = ' 2px solid rgb(93, 250, 93)';
}

function colorChange7_4(){
    TotalMarks();
    let falseResult1_1 = document.getElementById('opTTTt1');
    let falseResult1_2 = document.getElementById('opTTTt2');
    let falseResult1_3 = document.getElementById('opTTTt3');
    let falseResult1_4 = document.getElementById('opTTTt4');

    falseResult1_1.removeEventListener("click", colorChange7_1);
    falseResult1_2.removeEventListener("click", colorChange7_2);
    falseResult1_3.removeEventListener("click", colorChange7_3);
    falseResult1_4.removeEventListener("click", colorChange7_4);

    falseResult1_4.style.backgroundColor = 'rgba(131, 255, 97, 0.281)';
    falseResult1_4.style.border = ' 2px solid rgb(93, 250, 93)';
}

//function for quiz 8

function goToNextQuiz6(){

    let falseResult1_1 = document.getElementById('opTTTt1');
    let falseResult1_2 = document.getElementById('opTTTt2');
    let falseResult1_3 = document.getElementById('opTTTt3');
    let falseResult1_4 = document.getElementById('opTTTt4');

    falseResult1_1.remove();
    falseResult1_2.remove();
    falseResult1_3.remove();
    falseResult1_4.remove();

    let falseResult2_1 = document.createElement('div');
    let falseResult2_2 = document.createElement('div');
    let falseResult2_3 = document.createElement('div');
    let falseResult2_4 = document.createElement('div');

    falseResult2_1.id = 'oPTTTt1';
    falseResult2_2.id = 'oPTTTt2';
    falseResult2_3.id = 'oPTTTt3';
    falseResult2_4.id = 'oPTTTt4';

    falseResult2_1.className = 'option';
    falseResult2_2.className = 'option';
    falseResult2_3.className = 'option';
    falseResult2_4.className = 'option';

    htheoption.appendChild(falseResult2_1);
    htheoption.appendChild(falseResult2_2);
    htheoption.appendChild(falseResult2_3);
    htheoption.appendChild(falseResult2_4);

    

    let deleteItem = document.querySelector('#COntTiming');
    deleteItem.remove();

    let qus = '8. Which of the following is a high-level programming language?';
    let op1 = ' Assembly language';
    let op2 = ' Machine language';
    let op3 = ' Python';
    let op4 = ' Binary code';

    document.getElementById('questions').innerHTML = qus;
    document.getElementById('oPTTTt1').innerHTML = '1.' + op1;
    document.getElementById('oPTTTt2').innerHTML = '2.' + op2;
    document.getElementById('oPTTTt3').innerHTML = '3.' + op3;
    document.getElementById('oPTTTt4').innerHTML = '4.' + op4;
    document.getElementById('pageNumber').innerHTML ='8&nbsp;&nbsp;';

    let nEwPttT = document.createElement('p');
    timing.appendChild(nEwPttT);
    nEwPttT.id = 'CONtTiming';
    let numCount = 21;

    function lessNum(){
        numCount--;
        if(numCount == -1){
            goToNextQuiz7()
        }
        
        document.getElementById('CONtTiming').innerHTML = numCount;

    }
    lessNum();
    setInterval(function(){
        lessNum();
    }, 1000);


    nextQpage7();
}


function nextQpage7() { 

    let falseResult1_1 = document.getElementById('oPTTTt1');
    let falseResult1_2 = document.getElementById('oPTTTt2');
    let falseResult1_3 = document.getElementById('oPTTTt3');
    let falseResult1_4 = document.getElementById('oPTTTt4');

    let nextButton = document.querySelector('.nextButton');
    nextButton.onclick = goToNextQuiz7;
    falseResult1_1.addEventListener("click", colorChange8_1);
    falseResult1_2.addEventListener("click", colorChange8_2);
    falseResult1_3.addEventListener("click", colorChange8_3);
    falseResult1_4.addEventListener("click", colorChange8_4);
}

function colorChange8_1(){
    let forBGcolor = document.querySelector('#ALV1');
    forBGcolor.style.backgroundColor = 'rgb(255, 148, 148)';
    forBGcolor.style.border = '2px solid #ff1c1c';
    
    let falseResult1_1 = document.getElementById('oPTTTt1');
    let falseResult1_2 = document.getElementById('oPTTTt2');
    let falseResult1_3 = document.getElementById('oPTTTt3');
    let falseResult1_4 = document.getElementById('oPTTTt4');

    falseResult1_1.removeEventListener("click", colorChange8_1);
    falseResult1_2.removeEventListener("click", colorChange8_2);
    falseResult1_3.removeEventListener("click", colorChange8_3);
    falseResult1_4.removeEventListener("click", colorChange8_4);

    falseResult1_1.style.backgroundColor = 'rgba(131, 255, 97, 0.281)';
    falseResult1_1.style.border = ' 2px solid rgb(93, 250, 93)';
}

function colorChange8_2(){
    let forBGcolor = document.querySelector('#ALV2');
    forBGcolor.style.backgroundColor = 'rgb(255, 148, 148)';
    forBGcolor.style.border = '2px solid #ff1c1c';

    
    let falseResult1_1 = document.getElementById('oPTTTt1');
    let falseResult1_2 = document.getElementById('oPTTTt2');
    let falseResult1_3 = document.getElementById('oPTTTt3');
    let falseResult1_4 = document.getElementById('oPTTTt4');

    falseResult1_1.removeEventListener("click", colorChange8_1);
    falseResult1_2.removeEventListener("click", colorChange8_2);
    falseResult1_3.removeEventListener("click", colorChange8_3);
    falseResult1_4.removeEventListener("click", colorChange8_4);

    falseResult1_2.style.backgroundColor = 'rgba(131, 255, 97, 0.281)';
    falseResult1_2.style.border = ' 2px solid rgb(93, 250, 93)';
}

function colorChange8_3(){
    TotalMarks();
    
    let falseResult1_1 = document.getElementById('oPTTTt1');
    let falseResult1_2 = document.getElementById('oPTTTt2');
    let falseResult1_3 = document.getElementById('oPTTTt3');
    let falseResult1_4 = document.getElementById('oPTTTt4');

    falseResult1_1.removeEventListener("click", colorChange8_1);
    falseResult1_2.removeEventListener("click", colorChange8_2);
    falseResult1_3.removeEventListener("click", colorChange8_3);
    falseResult1_4.removeEventListener("click", colorChange8_4);

    falseResult1_3.style.backgroundColor = 'rgba(131, 255, 97, 0.281)';
    falseResult1_3.style.border = ' 2px solid rgb(93, 250, 93)';
}

function colorChange8_4(){
    let forBGcolor = document.querySelector('#ALV3');
    forBGcolor.style.backgroundColor = 'rgb(255, 148, 148)';
    forBGcolor.style.border = '2px solid #ff1c1c';

    
    let falseResult1_1 = document.getElementById('oPTTTt1');
    let falseResult1_2 = document.getElementById('oPTTTt2');
    let falseResult1_3 = document.getElementById('oPTTTt3');
    let falseResult1_4 = document.getElementById('oPTTTt4');

    falseResult1_1.removeEventListener("click", colorChange8_1);
    falseResult1_2.removeEventListener("click", colorChange8_2);
    falseResult1_3.removeEventListener("click", colorChange8_3);
    falseResult1_4.removeEventListener("click", colorChange8_4);

    falseResult1_4.style.backgroundColor = 'rgba(131, 255, 97, 0.281)';
    falseResult1_4.style.border = ' 2px solid rgb(93, 250, 93)';
}

//function for quiz 9

function goToNextQuiz7(){

    let falseResult1_1 = document.getElementById('oPTTTt1');
    let falseResult1_2 = document.getElementById('oPTTTt2');
    let falseResult1_3 = document.getElementById('oPTTTt3');
    let falseResult1_4 = document.getElementById('oPTTTt4');

    falseResult1_1.remove();
    falseResult1_2.remove();
    falseResult1_3.remove();
    falseResult1_4.remove();

    let falseResult2_1 = document.createElement('div');
    let falseResult2_2 = document.createElement('div');
    let falseResult2_3 = document.createElement('div');
    let falseResult2_4 = document.createElement('div');

    falseResult2_1.id = 'oPPTTTt1';
    falseResult2_2.id = 'oPPTTTt2';
    falseResult2_3.id = 'oPPTTTt3';
    falseResult2_4.id = 'oPPTTTt4';

    falseResult2_1.className = 'option';
    falseResult2_2.className = 'option';
    falseResult2_3.className = 'option';
    falseResult2_4.className = 'option';

    htheoption.appendChild(falseResult2_1);
    htheoption.appendChild(falseResult2_2);
    htheoption.appendChild(falseResult2_3);
    htheoption.appendChild(falseResult2_4);

   

    let deleteItem = document.querySelector('#CONtTiming');
    deleteItem.remove();

    let qus = '9. Which of the following words is most popular?';
    let op1 = ' Laga Laga';
    let op2 = ' Sdek';
    let op3 = ' Gp Gp';
    let op4 = ' Stfu';

    document.getElementById('questions').innerHTML = qus;
    document.getElementById('oPPTTTt1').innerHTML = '1.' + op1;
    document.getElementById('oPPTTTt2').innerHTML = '2.' + op2;
    document.getElementById('oPPTTTt3').innerHTML = '3.' + op3;
    document.getElementById('oPPTTTt4').innerHTML = '4.' + op4;
    document.getElementById('pageNumber').innerHTML ='9&nbsp;&nbsp;';

    let nEWPttT = document.createElement('p');
    timing.appendChild(nEWPttT);
    nEWPttT.id = 'CONtTiMing';
    let numCount = 21;

    function lessNum(){
        numCount--;
        if(numCount == -1){
            goToNextQuiz8()
        }
        
        document.getElementById('CONtTiMing').innerHTML = numCount;

    }
    lessNum();
    setInterval(function(){
        lessNum();
    }, 1000);


    nextQpage8();
}


function nextQpage8() { 

    let falseResult1_1 = document.getElementById('oPPTTTt1');
    let falseResult1_2 = document.getElementById('oPPTTTt2');
    let falseResult1_3 = document.getElementById('oPPTTTt3');
    let falseResult1_4 = document.getElementById('oPPTTTt4');


    let nextButton = document.querySelector('.nextButton');
    nextButton.onclick = goToNextQuiz8;

    falseResult1_1.addEventListener("click", colorChange9_1);
    falseResult1_2.addEventListener("click", colorChange9_2);
    falseResult1_3.addEventListener("click", colorChange9_3);
    falseResult1_4.addEventListener("click", colorChange9_4);
}

function colorChange9_1(){
    let forBGcolor = document.querySelector('#ALVE1');
    forBGcolor.style.backgroundColor = 'rgb(255, 148, 148)';
    forBGcolor.style.border = '2px solid #ff1c1c';

    let falseResult1_1 = document.getElementById('oPPTTTt1');
    let falseResult1_2 = document.getElementById('oPPTTTt2');
    let falseResult1_3 = document.getElementById('oPPTTTt3');
    let falseResult1_4 = document.getElementById('oPPTTTt4');

    falseResult1_1.removeEventListener("click", colorChange9_1);
    falseResult1_2.removeEventListener("click", colorChange9_2);
    falseResult1_3.removeEventListener("click", colorChange9_3);
    falseResult1_4.removeEventListener("click", colorChange9_4);

    falseResult1_1.style.backgroundColor = 'rgba(131, 255, 97, 0.281)';
    falseResult1_1.style.border = ' 2px solid rgb(93, 250, 93)';
}

function colorChange9_2(){
    TotalMarks();
    let falseResult1_1 = document.getElementById('oPPTTTt1');
    let falseResult1_2 = document.getElementById('oPPTTTt2');
    let falseResult1_3 = document.getElementById('oPPTTTt3');
    let falseResult1_4 = document.getElementById('oPPTTTt4');

    falseResult1_1.removeEventListener("click", colorChange9_1);
    falseResult1_2.removeEventListener("click", colorChange9_2);
    falseResult1_3.removeEventListener("click", colorChange9_3);
    falseResult1_4.removeEventListener("click", colorChange9_4);

    falseResult1_2.style.backgroundColor = 'rgba(131, 255, 97, 0.281)';
    falseResult1_2.style.border = ' 2px solid rgb(93, 250, 93)';
}

function colorChange9_3(){
    let forBGcolor = document.querySelector('#ALVE2');
    forBGcolor.style.backgroundColor = 'rgb(255, 148, 148)';
    forBGcolor.style.border = '2px solid #ff1c1c';

    let falseResult1_1 = document.getElementById('oPPTTTt1');
    let falseResult1_2 = document.getElementById('oPPTTTt2');
    let falseResult1_3 = document.getElementById('oPPTTTt3');
    let falseResult1_4 = document.getElementById('oPPTTTt4');

    falseResult1_1.removeEventListener("click", colorChange9_1);
    falseResult1_2.removeEventListener("click", colorChange9_2);
    falseResult1_3.removeEventListener("click", colorChange9_3);
    falseResult1_4.removeEventListener("click", colorChange9_4);

    falseResult1_3.style.backgroundColor = 'rgba(131, 255, 97, 0.281)';
    falseResult1_3.style.border = ' 2px solid rgb(93, 250, 93)';
}

function colorChange9_4(){
    let forBGcolor = document.querySelector('#ALVE3');
    forBGcolor.style.backgroundColor = 'rgb(255, 148, 148)';
    forBGcolor.style.border = '2px solid #ff1c1c';

    let falseResult1_1 = document.getElementById('oPPTTTt1');
    let falseResult1_2 = document.getElementById('oPPTTTt2');
    let falseResult1_3 = document.getElementById('oPPTTTt3');
    let falseResult1_4 = document.getElementById('oPPTTTt4');

    falseResult1_1.removeEventListener("click", colorChange9_1);
    falseResult1_2.removeEventListener("click", colorChange9_2);
    falseResult1_3.removeEventListener("click", colorChange9_3);
    falseResult1_4.removeEventListener("click", colorChange9_4);

    falseResult1_4.style.backgroundColor = 'rgba(131, 255, 97, 0.281)';
    falseResult1_4.style.border = ' 2px solid rgb(93, 250, 93)';
}
//function for quiz 10

function goToNextQuiz8(){

    let falseResult1_1 = document.getElementById('oPPTTTt1');
    let falseResult1_2 = document.getElementById('oPPTTTt2');
    let falseResult1_3 = document.getElementById('oPPTTTt3');
    let falseResult1_4 = document.getElementById('oPPTTTt4');

    falseResult1_1.remove();
    falseResult1_2.remove();
    falseResult1_3.remove();
    falseResult1_4.remove();

    let falseResult2_1 = document.createElement('div');
    let falseResult2_2 = document.createElement('div');
    let falseResult2_3 = document.createElement('div');
    let falseResult2_4 = document.createElement('div');

    falseResult2_1.id = 'oPpTTTt1';
    falseResult2_2.id = 'oPpTTTt2';
    falseResult2_3.id = 'oPpTTTt3';
    falseResult2_4.id = 'oPpTTTt4';

    falseResult2_1.className = 'option';
    falseResult2_2.className = 'option';
    falseResult2_3.className = 'option';
    falseResult2_4.className = 'option';

    htheoption.appendChild(falseResult2_1);
    htheoption.appendChild(falseResult2_2);
    htheoption.appendChild(falseResult2_3);
    htheoption.appendChild(falseResult2_4);


    let deleteItem = document.querySelector('#CONtTiMing');
    deleteItem.remove();

    let qus = '10. How was overall functionality and user interface of the application?';
    let op1 = ' Excellent';
    let op2 = ' Good';
    let op3 = ' Fair';
    let op4 = ' Poor';

    document.getElementById('questions').innerHTML = qus;
    document.getElementById('oPpTTTt1').innerHTML = '1.' + op1;
    document.getElementById('oPpTTTt2').innerHTML = '2.' + op2;
    document.getElementById('oPpTTTt3').innerHTML = '3.' + op3;
    document.getElementById('oPpTTTt4').innerHTML = '4.' + op4;
    document.getElementById('pageNumber').innerHTML ='10&nbsp;&nbsp;';

    let nEWPTtT = document.createElement('p');
    timing.appendChild(nEWPTtT);
    nEWPTtT.id = 'CONtTiMiNg';
    let numCount = 21;

    function lessNum(){
        numCount--;
        if(numCount == -1){
            goToNextQuiz9()
        }
        
        document.getElementById('CONtTiMiNg').innerHTML = numCount;

    }
    lessNum();
    setInterval(function(){
        lessNum();
    }, 1000);


    nextQpage9();
}

function nextQpage9() { 

    let falseResult1_1 = document.getElementById('oPpTTTt1');
    let falseResult1_2 = document.getElementById('oPpTTTt2');
    let falseResult1_3 = document.getElementById('oPpTTTt3');
    let falseResult1_4 = document.getElementById('oPpTTTt4');

    let nextButton = document.querySelector('.nextButton');
    nextButton.onclick = goToNextQuiz9;

    falseResult1_1.addEventListener("click", colorChange10_1);
    falseResult1_2.addEventListener("click", colorChange10_2);
    falseResult1_3.addEventListener("click", colorChange10_3);
    falseResult1_4.addEventListener("click", colorChange10_4);
}

function colorChange10_1(){
    let forBGcolor = document.querySelector('#ALVEE1');
    forBGcolor.style.backgroundColor = 'rgb(255, 148, 148)';
    forBGcolor.style.border = '2px solid #ff1c1c';

    let falseResult1_1 = document.getElementById('oPpTTTt1');
    let falseResult1_2 = document.getElementById('oPpTTTt2');
    let falseResult1_3 = document.getElementById('oPpTTTt3');
    let falseResult1_4 = document.getElementById('oPpTTTt4');

    falseResult1_1.removeEventListener("click", colorChange10_1);
    falseResult1_2.removeEventListener("click", colorChange10_2);
    falseResult1_3.removeEventListener("click", colorChange10_3);
    falseResult1_4.removeEventListener("click", colorChange10_4);

    falseResult1_1.style.backgroundColor = 'rgba(131, 255, 97, 0.281)';
    falseResult1_1.style.border = ' 2px solid rgb(93, 250, 93)';
}

function colorChange10_2(){
    TotalMarks();
    let falseResult1_1 = document.getElementById('oPpTTTt1');
    let falseResult1_2 = document.getElementById('oPpTTTt2');
    let falseResult1_3 = document.getElementById('oPpTTTt3');
    let falseResult1_4 = document.getElementById('oPpTTTt4');

    falseResult1_1.removeEventListener("click", colorChange10_1);
    falseResult1_2.removeEventListener("click", colorChange10_2);
    falseResult1_3.removeEventListener("click", colorChange10_3);
    falseResult1_4.removeEventListener("click", colorChange10_4);

    falseResult1_2.style.backgroundColor = 'rgba(131, 255, 97, 0.281)';
    falseResult1_2.style.border = ' 2px solid rgb(93, 250, 93)';
}

function colorChange10_3(){
    let forBGcolor = document.querySelector('#ALVEE2');
    forBGcolor.style.backgroundColor = 'rgb(255, 148, 148)';
    forBGcolor.style.border = '2px solid #ff1c1c';

    let falseResult1_1 = document.getElementById('oPpTTTt1');
    let falseResult1_2 = document.getElementById('oPpTTTt2');
    let falseResult1_3 = document.getElementById('oPpTTTt3');
    let falseResult1_4 = document.getElementById('oPpTTTt4');

    falseResult1_1.removeEventListener("click", colorChange10_1);
    falseResult1_2.removeEventListener("click", colorChange10_2);
    falseResult1_3.removeEventListener("click", colorChange10_3);
    falseResult1_4.removeEventListener("click", colorChange10_4);

    falseResult1_3.style.backgroundColor = 'rgba(131, 255, 97, 0.281)';
    falseResult1_3.style.border = ' 2px solid rgb(93, 250, 93)';
}
function colorChange10_4(){
    let forBGcolor = document.querySelector('#ALVEE3');
    forBGcolor.style.backgroundColor = 'rgb(255, 148, 148)';
    forBGcolor.style.border = '2px solid #ff1c1c';

    let falseResult1_1 = document.getElementById('oPpTTTt1');
    let falseResult1_2 = document.getElementById('oPpTTTt2');
    let falseResult1_3 = document.getElementById('oPpTTTt3');
    let falseResult1_4 = document.getElementById('oPpTTTt4');

    falseResult1_1.removeEventListener("click", colorChange10_1);
    falseResult1_2.removeEventListener("click", colorChange10_2);
    falseResult1_3.removeEventListener("click", colorChange10_3);
    falseResult1_4.removeEventListener("click", colorChange10_4);

    falseResult1_4.style.backgroundColor = 'rgba(131, 255, 97, 0.281)';
    falseResult1_4.style.border = ' 2px solid rgb(93, 250, 93)';
}
function TotalMarks(){
    numberCount += 1;
    document.getElementById('demo2').innerHTML = numberCount;
}
function goToNextQuiz9(){
    let resultPage = document.querySelector('#resPage');
    let qusnansPage = document.querySelector('#qusnansPage');
    qusnansPage.style.display = 'none';
    resultPage.style.display = 'flex'
}
function goToHomePage(){
    window.location.href = 'index.html';
}
