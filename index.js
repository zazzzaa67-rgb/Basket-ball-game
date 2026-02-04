
let num1 = document.getElementById("number1")
let num2 = document.getElementById("number2")
let count1 = 0
let count2 = 0
function increment1(){

    count1 += 1 ;
    num1.textContent = count1;
}
function increment2(){
    
    count1 += 2 
    num1.textContent = count1 ;

}
function increment3(){
    
    count1 += 3 
    num1.textContent = count1 ;
}
function increment4(){
    
    count2 += 1 
    num2.textContent = count2
}
function increment5(){
    
    count2 += 2 
    num2.textContent = count2
}
function increment6(){
    
    count2 += 3 
    num2.textContent = count2 

}
function end(){ 
    num1.textContent = 0
    num2.textContent = 0
}
let TheCounter = document.getElementById("counter") 


    


// لو طلع في حاجة غلط يبقي تعالي هنا وعمل متغير 