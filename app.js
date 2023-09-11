// //                                           chapter 6
// // q1
// // x++;
// // ++x;
// // q2
// // x--;
// // q3
// // 51
// // q4
// // 49
// // q5
// // var num=numNum--;
// // q6
// // var num=numNum++;
// // q7
// // x=3;
// // x++;
// // alert(x);
                                            // // chapter 7
// // q1
// // 14
// // q2
// // 24
// // q3
// // 24
// // q4s
// // 18
// // q5
// // (2 + 2)* (4 + 10)
// // q6
// // 2 + (2 * 4)+ 10
// // q7


                        // // Chapter 8 (Concatenating Text
// //     Strings)
// //     q1
// //     22
// //     q2
// //     HELLODOLLY
// //     q3
// //     333
// //     q4
// //     alert("pakistan" + "" + "zindabad")
// //     q5
// // var x="pakistan" + 3;
// // alert(x);
// // q6
// // var name="bushra";
// // var father="qadir";
// // res=name + father;
                                   // // Chapter 9 (Prompts)
// // q1
// // // var firstname=prompt("enter your first name");
// // q2
// // var country=prompt("enter your country","china");
// // q3
// // var yourName = prompt("Enter Your Name");
// // // q4
// // var country=prompt("enter your country","china");
// // // q5
// // var first=prompt("enter city");
// // var second=prompt("karachi");
// // var respond=prompt(first,second);
// // q6
// // alert(respond);
                                      // // // Chapter 10 (if statments)
// // // q1
// // var city=prompt("enter your city");
// // if(city==="karachi"){
// // console.log("karachi is the city of lights")
// // }
// // q2
// // var x=prompt("enter x value");
// // var y=prompt("enter y value");
// // if (x === y) {
// //     var z=prompt("enter value of z");
// // alert(z);
// // }
// // // q3
// // var zipcode=prompt("enter your zip code");
// // if(zipcode===10010){
// //     alert("karachi");
// // }
// // else{
// //     alert("please write correct city");
// // }
// // // q4
// // // Initial value of the variable
// // var x = 1;

// // // Test whether x has a particular numerical value
// // if (x === 1) {
// //   // If x is equal to 1, assign a new value to x
// //   x = 2;
// // } else {
// //   // If x is not equal to 1, do something else
// //   // You can add code here for other cases if needed
// // }

// // // Display the updated value of x
// // console.log("x is now:", x);
                         // Chapter 11 (Comparison
//     Operators)
//     q1
//     var number=+prompt("enter number");
//     if(number !== 4){

//     }
// q2
// var number=+prompt("enter number");
// //     if(number >= 4){

// //     }
// q3
// var number=+prompt("enter number");
// //     if(number !== 4){
// number=4
// //     }
// q4
// var number=+prompt("enter number");
// //     if(number !== 4){
// alert("congratulations")
// //     }
// q5
// var first=prompt("enter firstname");
// if(first !== "bushra"){
//     alert("mismatch")
//     //     }


//Q1

// var x = prompt("Enter the City Name");
// if (x==="karachi"){
//     alert("Welcome to city of lights");
//  }
//  else{
//     alert("invalid");
//  }

//Q2
//     var gender = prompt("Please enter your gender (male/female):")

//     if (gender === "male") {
//         alert("Good Morning Sir.");
//     } 
//     else if (gender === "female") {
//         alert("Good Morning Sister.");
//     } 
//     else {
//         alert("Invalid input. Please enter 'male' or 'female'.");
//     }
//Q3
// var traficLight=prompt("Enter the trafic light color");
// if(traficLight==="red"){
//     alert("Must Stoped");
// }

// else if(traficLight==="yellow"){
//     alert("Ready to move");
// }

//  else if(traficLight==="green"){
//     alert("Move now");
// }
// else{
//     alert("invalid");
// }
//Q4
// var remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car "));

//     if (remainingFuel < 0.25) {
//         alert("Please refill the fuel in your car");
//     } else {
//         alert("You have enough fuel. Have a safe journey!");
//     }
// Ques 5 (A)
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//Ques 5 (b)
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//Ques 5 (c)
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// Ques 5 (d)
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//Ques 5 (e)
// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }
// Ques 5 (f)
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }
//Q6
// function calculatePercentage(marksObtained, totalMarks) {
//     return (marksObtained / totalMarks) * 100;
// }

// function assignGrade(percentage) {
//     if (percentage >= 90) {
//         return 'A+';
//     } else if (percentage >= 80) {
//         return 'A';
//     } else if (percentage >= 70) {
//         return 'B';
//     } else if (percentage >= 60) {
//         return 'C';
//     } else if (percentage >= 50) {
//         return 'D';
//     } else {
//         return 'F';
//     }
// }

// function displayResult(subjects, marks, totalMarks) {
//     const totalObtained = marks.reduce((total, mark) => total + mark, 0);
//     const percentage = calculatePercentage(totalObtained, totalMarks);
//     const grade = assignGrade(percentage);

//     console.log(`Total Marks: ${totalMarks}`);
//     console.log(`Marks Obtained: ${totalObtained}`);
//     console.log(`Percentage: ${percentage.toFixed(2)}%`);
//     console.log(`Grade: ${grade}`);

//     if (grade === 'F') {
//         console.log("Remarks: Fail");
//     } else {
//         console.log("Remarks: Pass");
//     }
// }


// const subjects = ['Subject 1', 'Subject 2', 'Subject 3'];
// const marks = [];

// for (const subject of subjects) {
//     const marksObtained = parseFloat(prompt(`Enter marks obtained in ${subject}:`));
//     marks.push(marksObtained);
// }

// const totalMarks = parseFloat(prompt("Enter total marks:"));

// displayResult(subjects, marks, totalMarks);
//Q7

// var secretNumber = Math.floor(Math.random() * 10) + 1;  
// var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));


// if (userGuess === secretNumber) {
//     alert("Bingo! Correct answer.");
// } else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
//     alert("Close enough to the correct answer.");
// } else {
//     alert(`Sorry, the correct answer was ${secretNumber}. Try again next time.`);
// }


//Q8

//     var number = parseInt(prompt("Enter a number:"));
//     if (number % 3 === 0) {
//         console.log("The number" + number  +"is divisible by 3.");
//     } else {
//         console.log("The number" + number + "is not divisible by 3.");
//     }
// alert(number);


//Q9

// var number = parseInt(prompt("Enter a number:"));
// if(number %2===0){
//     console.log("the no is even");
// }
// if(number %2===1){
//     console.log("the no is odd");
// }
// else{
//     alert("invalid");
// }

//Q10
// var temperature=+prompt("Enter the temperature");
// if(temperature> 40){
//     console.log("It is too hot outside.")
// }
// else if(temperature>30){
//     console.log("The Weather today is Normal.")
// }
// else if(temperature>20){
//     console.log("Today’s Weather is cool.")
// }
// else if(temperature>10){
//     console.log("OMG! Today’s weather is so Cool.")
// }
// else{

//     alert("invalid temperature");
// }

//Q11


// const num1 = parseFloat(prompt("Enter the first number:"));
// const num2 = parseFloat(prompt("Enter the second number:"));
// const operation = prompt("Enter the operation (+, -, *, /, %):");

// let result;


// if (operation === '+') {
//     result = num1 + num2;
// } else if (operation === '-') {
//     result = num1 - num2;
// } else if (operation === '*') {
//     result = num1 * num2;
// } else if (operation === '/') {
//     result = num1 / num2;
// } else if (operation === '%') {
//     result = num1 % num2;
// } else {
//     alert("Invalid operation. Please enter one of +, -, *, /, or %.");
// }

// if (result !== undefined) {
//     alert(`The result of ${num1} ${operation} ${num2} is: ${result}`);
// }
// CLASS WORK OF CHAPTER 6-9
// MATH EXPRESSIONS

// Q1 ANSWER

// document.write("Result: <br>");

// var a =10;
// document.write("The value of a is " +  a + "<br>..................................<br<br><br>" );

// var result = ++a;
//  document.write(" <br><br<br><br>the value of ++a is:" + a);
//  document.write("<br>The value of a is:" + result  + "<br><br<br><br><br<br><br>" );


// // 

// document.write("The value of a++ is: " + a + "<br>");
// var result = a++;
// document.write( "Now the value of a++ is: " + a) ;

// // 

// var result = --a;
//  document.write(" <br><br<br><br>the value of --a is:" + a);
//  document.write("<br>The value of a is:" + result  + "<br><br<br><br><br<br><br>" );

// //  

//  document.write("The value of a-- is: " + a + "<br>");
//  var result = a--;
//  document.write( "Now the value of a is: " + a + "<br> <br><br><br><br>") ;



// Q2 ANSWER

// var a = 2;
// document.write("a is: " + a + "<br>");

// var b = 1;
// document.write("b is: " + b + "<br><br>" );


// // explain  (--a)
//  var result = --a ;
//  console.log(result);
                //    answer (1)

// Explain  (--a)- (--b)      
                //    (1) - (0) 

//  var b = 1;
// var result1 = --b ;
//   console.log(result1);
//             //     answer (0)
// console.log(result - result1);
                    //  answer (1)

//  explain   (--a) - (--b) + ++b;
//             //  (1) - (0) + (2) 
// var b = 1;

// var result2 = ++b;

//  console.log(result2);

// console.log(result - result1 + result2); 
//                  answer (3)            


//  explain   --a - --b + ++b + b--;

// var b = 1 ;
//  var result3 = b-- ;

//  console.log(result3);
// console.log(b);

// console.log(result - result1 + result2 + result3);

// document.write("Result is: " );
// document.write( result - result1 + result2 + result3);


// Q3   ANSWER

// var  userName = prompt( "Enter your name" );

// alert ("hello,"+ userName +  "!");

