



//Majority Elements(&gt;N/3 times) | Find the elements that appears more than N/3 times in the array
//Problem Statement: Given an array of N integers.
//Find the elements that appear more than N/3 times in the array.
//If no such element exists, return an empty vector.


function majorityElement(v) {
    const n = v.length;
    const ls = [];

    for (let i = 0; i < n; i++) {
        // selected element is v[i]:
        // checking if v[i] is not already
        // a part of the answer:
        if (ls.length == 0 || ls[0] != v[i]) {
            let cnt = 0;
            for (let j = 0; j < n; j++) {
            
                if (v[j] == v[i]) {
                    cnt++;
                }
            }

           
            if (cnt > Math.floor(n / 3))
                ls.push(v[i]);
        }

        if (ls.length == 2) break;
    }

    return ls;
}

const arr = [11, 33, 33, 11, 33, 11];
const ans = majorityElement(arr);
console.log("The majority elements are: " + ans.join(" "));
\





function majorityElement(v) {
    const n = v.length;
    const ls = []; 

    const mpp = new Map();
    const mini = Math.floor(n / 3) + 1;
    
    for (let i = 0; i < n; i++) {
        if (mpp.has(v[i])) {
            mpp.set(v[i], mpp.get(v[i]) + 1);
        } else {
            mpp.set(v[i], 1);
        }


        if (mpp.get(v[i]) == mini) {
            ls.push(v[i]);
        }
        if (ls.length == 2) break;
    }

    return ls;
}

const arr = [11, 33, 33, 11, 33, 11];
const ans = majorityElement(arr);
console.log("The majority elements are: " + ans.join(" "));












//1.searchMatrix
// Problem Statement: You have been given a 2-D array 'mat' of size 'N x M' where 'N' and 'M' denote the number of rows and columns, respectively. 
// The elements of each row are sorted in non-decreasing order.
// Moreover, the first element of a row is greater than the last element of the previous row (if it exists). 
// You are given an integer ‘target’, and your task is to find if it exists in the given 'mat' or not.

function searchMatrix(matrix, target) {
    const n = matrix.length;
    const m = matrix[0].length;

    // traverse the matrix:
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === target)
                return true;
        }
    }
    return false;
}

const matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
searchMatrix(matrix, 8) === true ? console.log("true") : console.log("false");




function binarysearch(nums,target){
    let n=nums.length;
    let low=0;high=n-1;
    while(low<=high){
        let mid=Math.floor((low+high/2));
        
        if(nums[mid]===target) return true;
        else if(nums[mid]<target) low=mid+1;
        else  high=mid-1;        
    }
}

function searchmatrix(matrix, target) {
    const n = matrix.length;
    const m = matrix[0].length;

    for (let i = 0; i < n; i++) {
            if (matrix[i][0] <= target&&target<=matrix[i][m-1]){
                return binarysearch(matrix[i],target);
            }
    }
    return false;
}

const matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
searchmatrix(matrix, 13) === true ? console.log("true") : console.log("false");
//t.c:(m+log(m))
//s.c:O(1);






function majorityElement(v) {
    let n = v.length; // size of the array

    let cnt1 = 0, cnt2 = 0; // counts
    let el1 = -Infinity; // element 1
    let el2 = -Infinity; // element 2

   
    for (let i = 0; i < n; i++) {
        if (cnt1 === 0 && el2 !== v[i]) {
            cnt1 = 1;
            el1 = v[i];
        }
        else if (cnt2 === 0 && el1 !== v[i]) {
            cnt2 = 1;
            el2 = v[i];
        }
        else if (v[i] === el1) cnt1++;
        else if (v[i] === el2) cnt2++;
        else {
            cnt1--, cnt2--;
        }
    }

 let ls = []; // list of answers

   
    cnt1 = 0, cnt2 = 0;
    for (let i = 0; i < n; i++) {
        if (v[i] === el1) cnt1++;
        if (v[i] === el2) cnt2++;
    }

    let mini = Math.floor(n / 3) + 1;
    if (cnt1 >= mini) ls.push(el1);
    if (cnt2 >= mini) ls.push(el2);
    
    return ls;
}

let arr = [11, 33, 33, 11, 33, 11];
let ans = majorityElement(arr);
console.log("The majority elements are: " + ans.join(" "));





function searchmatrix(matrix,target){
    let n=matrix.length;
    let m=matrix[0].length;
    let low=0;
    let high=(n*m)-1;
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        //imaginary convert the single array to matrix
        let row =Math.floor(mid/m);
        let col=mid%m;
        if(matrix[row][col]===target) return true;
        else if(matrix[row][col]<target) low=mid+1;
        else  high=mid-1;

        
    }
    return false;
}

const matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
searchmatrix(matrix, 12) === true ? console.log("true") : console.log("false");
//t.c:log(n*m)
//s.c:O(1);



// Problem Statement: Given a double x and integer n, calculate x raised to power n. Basically Implement pow(x, n).
// Input: x = 2.00000, n = 10
// Output: 1024.00000
// Explanation: You need to calculate 2.00000 raised to 10 which gives ans 1024.00000



//solution:1
function pow(x,n){
    let ans=1.0;
    for(let i=0;i<n;i++){
        ans=ans*x;
    }
    return ans;
    
}
console.log(pow(2,3));

//solution2:
function myPow(x,n){
    let ans=1.0;
     let num = Math.abs(n);
    
    //base case:
    if(x===0||x===1){
        return x;
    }
    
    while(num>0){
        if(num%2===1){
            ans=ans*x;
            num=num-1;
        }
        else{
            num=num/2;
            x=x*x;
        }
    }

        // If n is negative, return the reciprocal
    if (n< 0) {
        ans = 1 / ans;
    }
    return ans;
}

const x=2;
const n=21;
const result=myPow(x,n);
console.log('result',result);
//t.c:(logn)



//  Majority Element
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array
// Example 1:
// Input: nums = [3,2,3]
// Output: 3

function majorityelement(arr){
    let n=arr.length;
    
    for(let i=0;i<n;i++){
        count=0;
        for(let j=0;j<n;j++){
            if(arr[j]===arr[i]){
                count++;
            }
        }
        if(count>Math.floor(n/2)){
            return arr[i];
        }
    }
    return -1;
}

const arr=[1,1,1,2,2,2,4,4,4,4,4,4,4];
const result=majorityelement(arr);
console.log(result);
//t.c:O(n2);
//s.c:O(1);


function majorityelement(arr){
    let n=arr.length;
    
    for(let i=0;i<n;i++){
        count=0;
        for(let j=0;j<n;j++){
            if(arr[j]===arr[i]){
                count++;
            }
        }
        if(count>Math.floor(n/2)){
            return arr[i];
        }
    }
    return -1;
}

const arr=[1,1,1,2,2,2,4,4,4,4,4,4,4];
const result=majorityelement(arr);
console.log(result);
//t.c:O(n2);
//s.c:O(1);


function majorityelement(arr){
    let n=arr.length;
    
    const map=new Map();
    for(let i=0;i<n;i++){
        const num=arr[i];
        if(map.has(num)){
          map.set(num,map.get(num)+1);
            }else{
            map.set(num,1);
          }
        }
    
        for(const [num,count] of map){
            if(count>Math.floor(n/2)){
                return num;
            }
        }
    
    return -1;
}

const arr=[1,1,1,2,2,2,4,4,4,4,4,4,4];
const result=majorityelement(arr);
console.log(result);
//t.c:O(NlogN)+O(N);
//1st nlogn we have for map the n element,2nd one search the n element for the veerify the matching or not n/2
//s.c:O(N); store the map element



function majorityelement(arr){
    let n=arr.length;
    let count=0;
    let element;
    
    for(let i=0;i<n;i++){
        if(count===0){
            count=1;
            element=arr[i];
        }
        else if(element===arr[i]){
            count++;
        }
        else{
            count--;
        }
     }
    
    //count the element from the given array from dominated one
    
    let count1=0;
    for(let i=0;i<n;i++){
        if(arr[i]===element){
            count1++;
        }
    }
    if(count1>Math.floor(n/2)){
        return element;
    }
    
    return -1;
}

const arr=[1,1,1,2,2,2,7,7,7,7,7,7,7];
const result=majorityelement(arr);
console.log(result);
// //t.c:O(N)+O(N);
// //1st nlogn we have for map the n element,2nd one search the n element for the veerify the matching or not n/2
// //s.c:O(1); store the map element
