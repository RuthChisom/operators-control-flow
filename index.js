// Question 3
// Bolatito just got admitted to Greenfield High School as an Arts student. To commence her studies, she needs to know the subjects she will be taking as an Arts student. All students have to take the General subjects.
// 	The subjects for each class group are as follows:
// 	Science Subjects - Physics, Chemistry, Biology, Technical Drawing 
// Social Science Subjects - Accounting, Commerce, Marketing, Geography
// Arts Subjects - Government, Economics, Literature, History
// General Subjects - English, Mathematics

// Using if…else conditional statement, write a program that will help Bolatito determine the subjects she will be taking for the session using her class group. Also, in the case of an invalid class group, your output should be the General subjects. 


// SOLUTION
let department = 'Arts';
let general = 'English, Mathematics';
let subjects;

if(department === 'Science') subjects = " ,Physics, Chemistry, Biology, Technical Drawing";
else if(department === 'Social Science') subjects = " ,Accounting, Commerce, Marketing, Geography";
else if(department === 'Arts') subjects = " ,Government, Economics, Literature, History";
else subjects = "";

let sessionSubjects = general + subjects;

console.log (`Bolatito will be taking the following subjects:
${sessionSubjects}
because she is a(an) ${department} student.`);



// Question 5
// Write a program that takes a positive number (num) and finds the power of 2 nearest to that number. The program stores the resulting value to pwr. Then you log the answer in this format: 
// “The number (pwr) is the power of 2 nearest to (num).”

// If there are two candidate values, display the smaller one. For example, 2 and 4 4 are both the powers of 2 nearest to 3. The function should display 2 because it’s smaller than 4.

// For example,
// If num = 40, pwr = 32. Then you log to your console in this format:
// “The number 32 is the power of 2 nearest to 40.”

// If num = 50, pwr = 64.. Then you log to your console in this format:
// “The number 64 is the power of 2 nearest to 50.”


// SOLUTION
let num = 40;
for(i=2; i<=num; i*=2){
    console.log(`pwr =${i}`);
    let difference = i - num;
    console.log(`difference =${difference}`);
    // let pwr = num ** 2;
}

// console.log(`The number (${pwr}) is the power of 2 nearest to (${num}).`)