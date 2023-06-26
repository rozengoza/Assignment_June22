// Q1. write a js function that  can  calculates the final price
// formula is distance multiply unitKmPrice
 // expected output is 600 

 const rideDetails= {
    pickup: 'balaju',
    destination: 'thamel',
    distance: '20km',
    unitKmPrice: 30
}

let dis= rideDetails.distance.slice(0,2)
let disNum=Number(dis)
let finalPrice= disNum*rideDetails.unitKmPrice
console.log(finalPrice)
console.log(disNum)
console.log(dis)


function test(dis,unitKm){
  const a= dis.slice(0,2)
  const  num= Number(a)
  const b= num*unitKm
  return(b)
}
test(rideDetails.distance,rideDetails.unitKmPrice)
console.log(b)

// question no. 2 

const status1 ={
    status: 'onTheWay'
}
const status2 ={
    status: 'success'
}
const checkIfSucces=(status)=>{
//write your code here
  return status.status=='success'
    
  }
  


checkIfSucces(status1)  //should return false

checkIfSucces(status2)  //should return true