
  const peoples =[{
    firstname: "Sahin",
    lastname: "Aliyev",
    salary: 1000,
  },{
    firstname: "Gunay",
    lastname: "Aliyev",
    salary: 2000,
  },{
    firstname: "Cahid",
    lastname: "Aliyev",
    salary: 3000,
  },{
    firstname: "Xeyale",
    lastname: "Aliyeva",
    salary: 4000,
  },{
    firstname: "Tunar",
    lastname: "Aliyev",
    salary: 5000,
  },{
    firstname: "Akif",
    lastname: "Aliyev",
    salary: 6000,
  },{
    firstname: "beyale",
    lastname: "Aliyev",
    salary: 7000,
  },{
    firstname: "Nurkhan",
    lastname: "Aliyev",
    salary: 8000,
  }
]


// task1

let newList =  peoples.sort((a, b) => a.firstname.localeCompare(b.firstname));

  for (const people of newList) {
    console.log(people.firstname);
  } 


//   task2  custom find
  
  let inputNumber = prompt()
  for (const people of peoples) {
    if (people.salary==inputNumber) {
        console.log(people);
        
    }
  }





//   task2 custom 
        //   const numbers = [1,2,3,4,5,6,7,8,9,10]
        //   let inputNumber = prompt()
        //   for (const num of numbers) {
        //     if (num==inputNumber) {
        //         console.log(num);
                
        //     }
        //     else{
        //         console.log("wrong");
        //         break;
        //     }
        //   }


        // task2 custom filter
        const words = ['assets', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
    const result = words.filter(word => word.length > 6);
    console.log(result); 