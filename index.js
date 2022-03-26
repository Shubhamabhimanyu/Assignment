//problem 1

const problem1=()=>{
    var num=prompt("Enter the seconds");
    var minutes=num/60;
    var seconds=num%60;
    var hours=minutes/60;
    minutes=minutes%60;
    console.log(` hours=${Math.trunc(hours)}\n minutes=${Math.trunc(minutes)}\n seconds=${Math.trunc(seconds)}`)
  
}

//Problem 2 
const problem2=()=>{
    var ip1=prompt("Enter the number of test cases");

while(ip1--){
var a=prompt("Enter a")
var b=prompt("enter b")
var res=0;
  for(let i=a;i<=b;i++){
    res=res^i;
  }
  (res%2===0)?console.log("Even"):console.log("odd");
}

}

//problem 3
const problem3=()=>{
    var ip2=prompt("Enter the number of string")
var input=ip2
var arr=[]
while(ip2--){
var str=prompt("Enter string")
arr.push(str)

}

var arr1=arr.sort()
for(let i=0;i<input;i++){
    console.log(arr1[i]);

}

}

