



//Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.

// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.



function linearsearch(arr,num){
let n=arr.length;
for(let i=0;i<n;i++){
    if(arr[i]===num){
        return true;
    }
}    
    return false;
}

function longestConsecutive(arr){
    let n=arr.length;
    let longest=1;
    
    for(let i=0;i<n;i++){
        let x=arr[i];
        let count=1;
     while(linearsearch(arr,x+1)===true)  {
         x+=1;
         count+=1;
     }
     longest=Math.max(longest,count);
}
return longest;
    
}    
    let arr=[1,2,3,5,6,7,9,10,11,12,13,14,15,17,18,19];
    let ans=longestConsecutive(arr);
    console.log(ans);
    
    //Time Complexity: O(N2), N = size of the given array.




function longestConsecutive(arr){
    let n=arr.length;
    if(n===0) return 0;
    
     arr.sort((a, b) => a - b);
    let lastsmaller=arr[0];
    let count=1;
    let longest=1;
    
    for(let i=1;i<n;i++){
        if(arr[i]===lastsmaller+1){
            count+=1;
            lastsmaller=arr[i];
        }else if(arr[i]!==lastsmaller){
            count=1;
            lastsmaller=arr[i];
        }
     
     longest=Math.max(longest,count);
}
return longest;
    
}    
    let arr=[1,2,3,5,6,7,9,10,11,12,13,14,15,17,18,19];
    let ans= longestConsecutive(arr);
    console.log(ans);
    //Time Complexity: O(NlogN) + O(N), N = size of the given array.
    
    


function longestConsecutive(arr){
    let n=arr.length;
    if(n===0) return 0;
    
    let longest=1;
    let set=new Set();
    for(let i=0;i<n;i++){
        set.add(arr[i]);
    }
    for(let it of set){
if(!set.has(it-1)){
    let count=1;
    let x=it;
    while(set.has(x+1)){
x=x+1;
count=count+1;
    }
     longest=Math.max(longest,count);
     }
  }
return longest;
    
}    
    let arra=[1,2,3,5,6,7,9,10,11,12,13,14,15,17,18,19];
    let ansa=longestConsecutive(arra);
    console.log(ansa);
 //Time Complexity: O(N) + O(2*N) ~ O(3*N),1st N for the going trough the loop for set and 2nd N we have the iterate find 1st element and increase count
 //Space Complexity: O(N), as we are using the set data structure to solve this problem.    





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







function countPairs(a, n) {
  // Count the number of pairs:
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (a[i] > 2 * a[j]) cnt++;
    }
  }
  return cnt;
}

function team(skill, n) {
  return countPairs(skill, n);
}

let a = [4, 1, 2, 3, 1];
let n = 5;
let cnt = team(a, n);
console.log("The number of reverse pair is: " + cnt);

//Time Complexity: O(N2), 
//Time Complexity: O(2N*logN)


function merge(arr, low, mid, high) {
  let temp = []; // temporary array
  let left = low; // starting index of left half of arr
  let right = mid + 1; // starting index of right half of arr

  // storing elements in the temporary array in a sorted manner
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  // if elements on the left half are still left
  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }

  // if elements on the right half are still left
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  // transferring all elements from temporary to arr
  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}

function countPairs(arr, low, mid, high) {
  let right = mid + 1;
  let cnt = 0;
  for (let i = low; i <= mid; i++) {
    while (right <= high && arr[i] > 2 * arr[right]) right++;
    cnt += right - (mid + 1);
  }
  return cnt;
}

function mergeSort(arr, low, high) {
  let cnt = 0;
  if (low >= high) return cnt;
  let mid = Math.floor((low + high) / 2);
  cnt += mergeSort(arr, low, mid); // left half
  cnt += mergeSort(arr, mid + 1, high); // right half
  cnt += countPairs(arr, low, mid, high); // Modification
  merge(arr, low, mid, high); // merging sorted halves
  return cnt;
}

function team(skill, n) {
  return mergeSort(skill, 0, n - 1);
}

let a = [4, 1, 2, 3, 1];
let n = 5;
let cnt = team(a, n);
console.log("The number of reverse pair is: " + cnt);


//4 Sum | Find Quads that add up to a target value
//Problem Statement: Given an array of N integers, your task is to find unique quads that add up to give a target value. 
//In short, you need to return an array of all the unique quadruplets [arr[a], arr[b], arr[c], arr[d]] such that their sum is equal to a given target.



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

