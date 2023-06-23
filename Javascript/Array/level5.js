 //. Question No. 1
 const arr=[2,5,6,7]
 //calculate the sum of the array  using either for of or for in 
 let sum=0;
for (let i in arr){
  sum=sum+arr[i];
}
console.log(sum)
let sum1=0;
for (let item of arr){
  sum1 = sum1+item;
}
console.log(sum1)


// Question No. 2 

//high level 
const users=['hari', 'shyam','hari']
             //remove from array if duplicate
let tempArr=[]
users.map((item)=>{
  if(!tempArr.includes(item)){
    tempArr.push(item)
  }
})
console.log(tempArr)


//Question no. 3 

// //calcuate then sum of all odd numbers inside nested array 
const newArr = [[4,5],[5,7],[7,2]]
let sum2=0;
//first step element lai access garne for eg [4,5], [5,7] ,etc. 
for(i=0;i<newArr.length;i++){
  // console.log(newArr[i])
  let tempArr1= newArr[i]
  for(j=0;j<tempArr1.length;j++){
    // console.log(tempArr1[j])
    if(tempArr1[j]%2!=0){
      sum2=sum2+tempArr1[j];
      
    }
  }
}
console.log(sum2)



