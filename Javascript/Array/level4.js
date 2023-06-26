//Q1 find if hari is in allUsers array or not/
//expected output is : 
//true
const name= 'hari'
const allUsers = ['hari','shyam','thakuri']
// for (let names in allUsers){
//     if(names =='hari'){
//         console.log("User Exists")
//     }
// }
if(allUsers.includes('hari')){
    console.log("It contains the name Hari")
}
else {
    console.log("It doesnot contain the name Hari")
}

//to check how many hari  are present

// let count =0;
// for (let  i=0; i<allUsers.length;i++){
//   if (allUsers[i]==name){
//     count=count+1;
//   }
// }
// if(count>=2){
//   console.log("duplicate exists")
// }

// to check how many hari  are present

const name1= 'hari'
const allUsers1= ['hari','shyam','thakuri','hari']

let count =0;
for (let  i=0; i<allUsers1.length;i++){
  if (allUsers1[i]==name1){
    count=count+1;
  }
}
if(count>=2){
  console.log("duplicate exists",count)
}
else{
  console.log("duplicate doesnt exist")
}
