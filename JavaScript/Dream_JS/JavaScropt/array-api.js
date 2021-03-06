// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(' ');
    console.log(result); // apple, and banana, and orange
  }
  
  // Q2. make an array out of a string
  {
    const fruits = 'π, π₯, π, π';
    const result = fruits.split(','); // κ΅¬λΆμ κΌ­ μ λ¬ν΄μΌν¨ 
    console.log(result); //) (4) ['π', ' π₯', ' π', ' π']
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result); //(5) [5, 4, 3, 2, 1]
    console.log(array); // (5) [5, 4, 3, 2, 1]

  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5); // μλ‘μ΄ λ°°μ΄ λ§λ€μ΄μΌ νκΈ° λλ¬Έμ splice(λ°°μ΄μμ²΄λ₯Ό μμ ) μλ¨ 
    console.log(result); // slice λ λ°°μ΄μμ μνλ λΆλΆλ§ κ°μ Έμ¬ μ μμ 

  }
  
/////

  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90 : find() μ¬μ© find λ callback ν¨μ(λμ€μ νΈμΆνλ ν¨μ)λ₯Ό λ§λ€μ΄ μ¬μ© 
  {
    //   const result = students.find(function(student) { //value κ°μΌλ‘ student λ₯Ό λμ  λ£μ
    //       return student.score === 90; 
    //   }); λ°©λ²λ μμ§λ§ allow function μΌλ‘ κ°λ΅νκ² νν  // νλ¬Έμ₯μ΄λ©΄ {}μλ΅ κ°λ₯ 

      const result = students.find((student) => student.score === 90); 
// }
      console.log(result);
  }
  
  // Q6. make an array of enrolled students
  {
    // const result = students.filter(function(student) {
    //     return student.enrolled === true;
    // }); 
      const result = students.filter((student) => student.enrolled);
      console.log(result);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
      const result = students.map((student) => student.score);
      console.log(result); //map : λ°°μ΄μμ μλ μμλ€μ μνλ κ°μΌλ‘ λ΄κΈ°μν΄ μ°λ ν¨μ 
  }
  // Q8. check if there is a student with the score lower than 50
  {
      // console.clear();
//some : λ°°μ΄μ€ μ΄λ€ κ²μ΄λΌλ νλ λ§μ‘±νλ κ²μ μ°Ύμ λ / every : λ°°μ΄ μ€ μ λΆ λ§μ‘±νλ κ²μ μ°Ύμ λ 
      const result = students.some((student) => student.score < 50);
      console.log(result); // true 

  }
  
  // Q9. compute students' average score
//   reduce λ°°μ΄μ μλ λͺ¨λ  μμλ€μ κ°μ λμ νλ, ν¨κ» λͺ¨μλ λ μ  / reduceRight μ λ°°μ΄μμ λ°λλ‘ λμ 
//   {
//       const result = students.reduce((prev,curr) => {
//           console.log('---');
//           console.log(prev);
//           console.log(curr); // λ°°μ΄μ μμ΄νμ μμ°¨μ μΌλ‘ μ λ¬λ°λλ€. 
//           return prev + curr.score; // return λ κ°μ΄ κ·Έ λ€μμ νΈμΆλ  prev μ ν λΉλλ€. 
//       }, 0); // 0 λΆν° λνκ² λ¨ 
//       console.log(result);
//   }

  const result = students.reduce((prev,curr) => prev + curr.score, 0);
  console.log(result / students.length);

  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
      const result = students
      .map(student => student.score)
      .filter((score) => score >= 50)
      .join();
      console.log(result);

  }
  
  // Bonus! do Q10 sorted in ascending order λ?μμ μ μμΌλ‘ 
  // result should be: '45, 66, 80, 88, 90'
  {
      const result = students.map(student => student.score)
      .sort((a, b) => a - b) 
      .join();
      console.log(result);
  }

  const ass = [1,304,3,35,645,2326,5757];
  ass.sort((a,b) => a - b);
  console.log(ass);

  