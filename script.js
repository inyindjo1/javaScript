// Part 3: Transforming Data
let csv = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor\'s Assistant,26'

let table = [
    ["ID", "Name", "Occupation", "Age"],
     ["42", "Bruce", "Knight", "41"],
     ["57", "Bob", "Fry Cook", "19"],
     ["63", "Blaine", "Quiz Master", "58"],
     ["98", "Bill", "Doctor s Assistant", "26"]
    ]
     
     let newtable=[]

     for (let i = 0 ;i<table.length;i++){
         let row = table[i]
         
         console.log(row[1]) //table[i]
         let obj={
            id:row[0],
            Name:row[1],
            Occupation: row[2],
            Age: row[3],

         }
         newtable.push(obj)
        } 
        
        console.log(newtable)
    
// questions 4
let table1 = [
    ["ID", "Name", "Occupation", "Age"],
     ["42", "Bruce", "Knight", "41"],
     ["57", "Bob", "Fry Cook", "19"],
     ["63", "Blaine", "Quiz Master", "58"],
     ["98", "Bill", "Doctor s Assistant", "26"]
    ]
    // Remove the last element from the array
    table1.pop()
    // insert the following object at index 1
    let newmember ={
        id: 48, Name: "Barry", Occupation:"Runner", age:25
    };
    table1.splice(1,0,newmember)

// Add the following object to the end of the array
    let newmember1= {
        id: 7, Name: "Bilbo", Occupation: "None", age:"111"
    }
table1.push(newmember1);
console.log(table1);

// last part five 
// Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group. 
// This calculation should be accomplished using a loop.
let table2 = [
    ["ID", "Name", "Occupation", "Age"],
     ["42", "Bruce", "Knight", "41"],
     ["57", "Bob", "Fry Cook", "19"],
     ["63", "Blaine", "Quiz Master", "58"],
     ["98", "Bill", "Doctor s Assistant", "26"]
    ]
let table2Age = 0

for (let i = 0; i < table2.length; i++) {
    table2Age += parseInt(table2[i]. age)
}
const averageAge = table2Age/ table2.length;

console.log(`Avg age is: ${table2Age/ table2.length}`);