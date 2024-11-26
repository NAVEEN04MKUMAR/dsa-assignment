//2sum



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


//foursum




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



//Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.

// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.


//longest consecutive sequence:



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


//largest subarray with k sum:



function solve(a) {
  let maxLen = 0;
  let sumIndexMap = new Map();
  let sum = 0;

  for (let i = 0; i < a.length; i++) {
    sum += a[i];

    if (sum === 0) {
      maxLen = i + 1;
    } else if (sumIndexMap.has(sum)) {
      maxLen = Math.max(maxLen, i - sumIndexMap.get(sum));
    } else {
      sumIndexMap.set(sum, i);
    }
  }

  return maxLen;
}

let a = [9, -3, 3, -1, 6, -5];
console.log(solve(a));


// Time Complexity: O(N^2) as we have two loops for traversal
// Space Complexity: O(1) as we aren’t using any extra space.


function maxLen(A, n) {
  let mpp = new Map();
  let maxi = 0;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += A[i];
    if (sum === 0) {
      maxi = i + 1;
    } else {
      if (mpp.has(sum)) {
        maxi = Math.max(maxi, i - mpp.get(sum));
      } else {
        mpp.set(sum, i);
      }
    }
  }

  return maxi;
}

let A = [9, -3, 3, -1, 6, -5];
let n = A.length;
console.log(maxLen(A, n));

//Time Complexity: O(N), as we are traversing the array only once
//Space Complexity: O(N), in the worst case we would insert all array elements prefix sum into our hashmap

//Count number of subarrays with given xor K


function subarraysWithXorK(a, k) {
    const n = a.length;
    let cnt = 0;

    // Step 1: Generating subarrays:
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {

            // Step 2: calculate XOR of all elements:
            let xorr = 0;
            for (let K = i; K <= j; K++) {
                xorr = xorr ^ a[K];
            }

            // Step 3: check XOR and count:
            if (xorr === k) cnt++;
        }
    }
    return cnt;
}

const a = [4, 2, 2, 6, 4];
const k = 6;
const ans = subarraysWithXorK(a, k);
console.log("The number of subarrays with XOR k is:", ans);


// Time Complexity: O(N3) approx., where N = size of the array.
// Reason: We are using three nested loops, each running approximately N times.

// Space Complexity: O(1) as we are not using any extra space.


function subarraysWithXorK(a, k) {
  const n = a.length; //size of the given array.
  let cnt = 0;

  // Step 1: Generating subarrays:
  for (let i = 0; i < n; i++) {
    let xorr = 0;
    for (let j = i; j < n; j++) {

      //step 2:calculate XOR of all
      // elements:
      xorr = xorr ^ a[j];

      // step 3:check XOR and count:
      if (xorr == k) cnt++;
    }
  }
  return cnt;
}

const a = [4, 2, 2, 6, 4];
const k = 6;
const ans = subarraysWithXorK(a, k);
console.log(`The number of subarrays with XOR k is: ${ans}`);


// Time Complexity: O(N2), where N = size of the array.
// Reason: We are using two nested loops here. As each of them is running for N times, the time complexity will be approximately O(N2).
// Space Complexity: O(1) as we are not using any extra space.


function subarraysWithXorK(a, k) {
  const n = a.length; //size of the given array.
  let xr = 0;
  const mpp = new Map(); //declaring the map.
  mpp.set(xr, 1); //setting the value of 0.
  let cnt = 0;

  for (let i = 0; i < n; i++) {
    // prefix XOR till index i:
    xr = xr ^ a[i];

    //By formula: x = xr^k:
    const x = xr ^ k;

    // add the occurrence of xr^k
    // to the count:
    cnt += mpp.get(x) || 0;

    // Insert the prefix xor till index i
    // into the map:
    mpp.set(xr, (mpp.get(xr) || 0) + 1);
  }
  return cnt;
}

const a = [4, 2, 2, 6, 4];
const k = 6;
const ans = subarraysWithXorK(a, k);
console.log(`The number of subarrays with XOR k is: ${ans}`);

// Time Complexity: O(N) or O(N*logN) depending on which map data structure we are using, where N = size of the array.
// Reason: For example, if we are using an unordered_map data structure in C++ the time complexity will be O(N) but if we are using a map data structure, the time complexity will be O(N*logN). The least complexity will be O(N) as we are using a loop to traverse the array. Point to remember for unordered_map in the worst case, the searching time increases to O(N), and hence the overall time complexity increases to O(N2). 
// Space Complexity: O(N) as we are using a map data structure.



function solve(str) {
    if (str.length === 0) return 0;

    let maxLength = Number.MIN_VALUE; // Initialize to the smallest possible value
    const charSet = new Set(); // To store unique characters in the current window
    let left = 0; // Left pointer of the sliding window

    for (let right = 0; right < str.length; right++) {
        // If a duplicate is found, shrink the window from the left
        while (charSet.has(str[right])) {
            charSet.delete(str[left]);
            left++;
        }
        // Add the current character to the set and update maxLength
        charSet.add(str[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Example Usage
const str = "takeUforward";
console.log(
    "The length of the longest substring without repeating characters is " +
    solve(str)
);

// Complexity:
// Time Complexity: O(N)
// Each character is added and removed from the Set at most once.
// Space Complexity: O(N)
// The Set can grow to hold all unique characters in the string.


function solve(str) {
    if (str.length === 0) return 0;

    let maxLength = Number.MIN_VALUE; // Initialize to the smallest possible value

    for (let i = 0; i < str.length; i++) {
        let charSet = new Set(); // To store unique characters in the current substring
        for (let j = i; j < str.length; j++) {
            if (charSet.has(str[j])) {
                // If the character is already in the set, calculate the substring length
                maxLength = Math.max(maxLength, j - i);
                break;
            }
            charSet.add(str[j]); // Add character to the set
        }
    }

    return maxLength;
}

// Example Usage
const str = "takeUforward";
console.log(
    "The length of the longest substring without repeating characters is " +
    solve(str)
);
//Time Complexity: O( N2 )
//Space Complexity: O(N) where N is the size of HashSet taken for storing the elements












function linearsearch(arr,num){
let n=arr.length;
for(let i=0;i<n;i++){
    if(arr[i]===num){
        return true;
    }
}    
    return false;
}

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



function lengthOfLongestSubstring(s) {
    const mpp = new Map(); // Use a Map to track characters and their indices

    let left = 0;
    let right = 0;
    const n = s.length;
    let len = 0;

    while (right < n) {
        if (mpp.has(s[right])) {
            left = Math.max(mpp.get(s[right]) + 1, left); // Update the left pointer
        }

        mpp.set(s[right], right); // Store the current character's index
        len = Math.max(len, right - left + 1); // Calculate the maximum length
        right++;
    }

    return len;
}

const str = "takeUforward";
console.log("The length of the longest substring without repeating characters is " + lengthOfLongestSubstring(str));

// Time Complexity: O( N )
// Space Complexity: O(N) where N represents the size of HashSet where we are storing our element



