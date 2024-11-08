



/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var majorityElement = function(nums) {
    
// };








function majorityElement(arr){
    const n=arr.length;
    const ls=[];
    let count1=0;
    let count2=0;
    let element1=null;
    let element2=null;

    for(let i=0;i<n;i++){
if(count1===0&&element2!==arr[i]){
    count1=1;
    element1=arr[i];
}

else if(count2===0&&element1!==arr[i]){
    count2=1;
    element2=arr[i];
}
else if(arr[i]===element1){ 
    count1++;
}
else if(arr[i]===element2) {
    count2++;
}
else{
    count1--,count2--;
}
    }

let count3=0;
let count4=0;

for(let i=0;i<n;i++){
    if(arr[i]===element1) count3++;
    if(arr[i]===element2) count4++;
}

    if(count3>=Math.floor(n/3)){ 
        ls.push(element1);
    }
    if(count4>=Math.floor(n/3)) {
        ls.push(element2);
    }
    
        return ls;

}

const arr=[1,1,1,2,3,4];
const result=majorityElement(arr);
console.log("result",result);
// t.c:(nlogn)
// s.c:O(n);






// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.



function twosum(arr,target){
    const n=arr.length;
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(arr[i]+arr[j]===target)
            return "yes"; 
        }
    }
    return "no"
}


const arr=[1,4,5,6,7,2];
const target=99;
const result=twosum(arr,target);
console.log("result",result);


function twoSum(arra,targeta){
    const n=arra.length;
    let ans=[-1,-1];
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            if(arra[i]+arra[j]===targeta){
            ans[0]=i;
            ans[1]=j;
            return ans; 
            }
        }
    }
    return ans;
}
const arra=[1,4,5,6,7,2];
const targeta=3;
const resulta=twoSum(arra,targeta);
console.log("resulta",resulta);





function twosum(arr,target){
    const n=arr.length;
    
    const map=new Map();
    for(let i=0;i<n;i++){
        let num=arr[i];
        let needed=target-num;
        
        
        if(map.has(needed)){
            return "yes";
        }
        map.set(arr[i],i);
        
            
    }
    return "NO";
}
const arr=[1,4,5,6,7,2];
const target=99;
const result=twosum(arr,target);
console.log("resulta",result);





function twoSum(arra,targeta){
    const n=arra.length;
    let ans=[-1,-1];

    const map=new Map();
    for(let i=0;i<n;i++){
        let numa=arra[i];
        let neededa=targeta-numa;
        
        
        if(map.has(neededa)){
            ans[0]=map.get(neededa);
            ans[1]=i;

            return ans;
        }
        map.set(arra[i],i);
        
            
    }
    return ans;
}
const arra=[1,4,5,6,7,2];
const targeta=3;
const resulta=twoSum(arra,targeta);
console.log("resulta",resulta);


function twoSum(arr,target){
    const n=arr.length;

let left=0;let right=n-1;

while(left<right){
    let sum=arr[left]+arr[right];
    if(sum==target){
        return "yes";
        
    }else if(sum<target){
        left++;
    }
    else{
        left--;
    }
    
}
            return "NO";
}
const arr=[1,4,5,6,7,2];
const target=3;
const result=twoSum(arr,target);
console.log("resulta",result);

