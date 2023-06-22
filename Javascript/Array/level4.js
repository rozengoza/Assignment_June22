//Q1 find if hari is in allUsers array or not/
//expected output is : 
//true
const name= 'hari'
const allUsers = ['hari','shyam','thakuri']
// for (let names in allUsers){
//     if(names ==''){
//         console.log("User Exists")
//     }
// }
if(allUsers.includes('hari')){
    console.log("It contains the name Hari")
}
else {
    console.log("It doesnot contain the name Hari")
}