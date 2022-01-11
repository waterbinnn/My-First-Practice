// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(' ');
    console.log(result); // apple, and banana, and orange
  }
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(','); // 구분자 꼭 전달해야함 
    console.log(result); //) (4) ['🍎', ' 🥝', ' 🍌', ' 🍒']
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
    const result = array.slice(2, 5); // 새로운 배열 만들어야 하기 때문에 splice(배열자체를 수정) 안됨 
    console.log(result); // slice 는 배열에서 원하는 부분만 가져올 수 있음 

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
  
  // Q5. find a student with the score 90 : find() 사용 find 는 callback 함수(나중에 호출하는 함수)를 만들어 사용 
  {
    //   const result = students.find(function(student) { //value 값으로 student 를 대신 넣음
    //       return student.score === 90; 
    //   }); 방법도 있지만 allow function 으로 간략하게 표현  // 한문장이면 {}생략 가능 

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
      console.log(result); //map : 배열안에 있는 요소들을 원하는 값으로 내기위해 쓰는 함수 
  }
  // Q8. check if there is a student with the score lower than 50
  {
      // console.clear();
//some : 배열중 어떤 것이라도 하나 만족하는 것을 찾을 때 / every : 배열 중 전부 만족하는 것을 찾을 때 
      const result = students.some((student) => student.score < 50);
      console.log(result); // true 

  }
  
  // Q9. compute students' average score
//   reduce 배열에 있는 모든 요소들의 값을 누적하는, 함께 모아둘 때 씀  / reduceRight 은 배열순서 반대로 누적
//   {
//       const result = students.reduce((prev,curr) => {
//           console.log('---');
//           console.log(prev);
//           console.log(curr); // 배열의 아이템을 순차적으로 전달받는다. 
//           return prev + curr.score; // return 된 값이 그 다음에 호출될 prev 에 할당된다. 
//       }, 0); // 0 부터 더하게 됨 
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
  
  // Bonus! do Q10 sorted in ascending order 낮은점수 순으로 
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

  