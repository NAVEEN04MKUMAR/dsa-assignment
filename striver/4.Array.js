


function fourSum(nums, target) {
  let n = nums.length;
  let set = new Set();
  
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        for (let l = k + 1; l < n; l++) {
          let sum = nums[i] + nums[j] + nums[k] + nums[l];
          
          if (sum === target) {
            let temp = [nums[i], nums[j], nums[k], nums[l]];
            temp.sort((a, b) => a - b);
            set.add(temp);
          }
        }
      }
    }
  }
  
  let ans = Array.from(set);
  return ans;
}

let nums = [4, 3, 3, 4, 4, 2, 1, 2, 1, 1];
let target = 9;
let ans = fourSum(nums, target);

//t.c:O(n4);
//s.c:


function foursum(arr,target){
    const n=arr.length;
    let set=new Set();
    
    
    for(let i=0;i<n-3;i++){
        for(let j=i+1;j<n-2;j++){
            let hashset=new Set();
            for(let k=j+1;k<n;k++){
                let sum=arr[i]+arr[j];
                sum+=arr[k];
                let fourth=target-sum;
                if(hashset.has(fourth)){
                      let temp = [arr[i], arr[j], arr[k], fourth];
                        temp.sort((a,b)=>a-b);
                        set.add(JSON.stringify(temp));
                }
hashset.add(arr[k]);
                
             }
          }
      }
       
      let ans=Array.from(set).map(str => JSON.parse(str));;
      return ans;
}

let arr = [1,2,3,4,5,6,7,8,9,10];
let target = 10;
let ans = foursum(arr, target);

//t.c:O(N3*log(M))




function fourSum(arr,target){
    const n=arr.length;
       const ans = [];
    arr.sort((a,b)=>a-b);

    for(let i=0;i<n;i++){
        if(i>0&&arr[i]===arr[i-1]) continue;
        for(let j=i+1;j<n;j++){
        if(j>0&&arr[j]===arr[j-1]) continue;

let k=j+1;
let l=n-1;
while(k<l){
    let sum=arr[i]+arr[j]+arr[k]+arr[l];
    if(sum===target){
        ans.push([arr[i],arr[j],arr[k],arr[l]]);
        k++;
        l--;
        if(k < l&&arr[k]===arr[k-1]) continue;
        if(k<l&&arr[l]===arr[l-1]) continue;

    }else if(sum<target){
        k++;
    }
    else{
        l--;
    }

}

             }
      }
             return ans;

}


let arra = [1,2,3,4,5,6,7,8,9,10];
let targeta = 10;
let ansa = fourSum(arra, targeta);
console.log(ansa);

//O(N3), where N = size of the array.


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

