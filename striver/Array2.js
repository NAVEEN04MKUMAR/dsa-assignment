//1.Rotate Image by 90 degree

//we rotate matrix by the copy the 1st row to last coulmn,and 2nd row to before the last coulmn
function rotate(matrix){
    const n=matrix.length;
    console.log('n',n)
let rotatedMatrix=Array.from({length:n},()=>Array(n).fill(0));
    console.log('rotate',rotatedMatrix)

for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
rotatedMatrix[j][n-i-1]=matrix[i][j]
    }
}
return rotatedMatrix;
}
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const rotatedMatrix=rotate(arr);
console.log('rotated matrix');
for (let i = 0; i < rotatedMatrix.length; i++) {
    console.log(rotatedMatrix[i].join(" "));
}

//t.c:O(n*n);
//s.c:O(n*n);

//challange we should optimse the above code:
//can you solve that one without using the space:
function rotate(matrix){
    const n=matrix.length;
    console.log('n',n)

for(let i=0;i<n;i++){
    for(let j=i;j<n;j++){
[matrix[j][i],matrix[i][j]]=[matrix[i][j],matrix[j][i]];
    }
}
    for(let i=0;i<n;i++){
         console.log(`Before reversing row ${i}:`, matrix[i]); 
        matrix[i].reverse();
         console.log(`After reversing row ${i}:`, matrix[i]);
    }
}
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const rotatedMatrix=rotate(arr);
console.log('rotated matrix');
//t.c:O(n*n);
//s.c:O(1);

//Merge Intervals
//Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
function  merge(intervals){
    const n=intervals.length;
    intervals.sort((a,b)=>a[0]-b[0]);

    const ans=[];
    for(let i=0;i<n;i++){
  let start=intervals[i][0];
  let end=intervals[i][1];

  //skip the end of current is greater than the end of upcoming element
  if(ans.length&&end<=ans[ans.length-1][1]){
    continue;
  }
//check the upcoming array 1st element have the greater then the last element of storing element or not

  for(let j=i+1;j<n;j++){
    if(intervals[j][0]<=end){
    end=Math.max(end,intervals[j][1]);
    }else{
        break;
    }
  }
ans.push([start,end]);
    }
return ans;
}
;

let intervals = [[1,3],[2,6],[8,10],[15,18]];
let final= merge(intervals);
//t.c:o(nlogn)+)o(2n)
//1st for sorting and 2nd for the  checkinhg and mergig(2n)

//challange:do the merging and checking with the single loop
function  merge(intervals){
    const n=intervals.length;
    intervals.sort((a,b)=>a[0]-b[0]);
    const ans=[intervals[0]];
    for(let i=0;i<n;i++){
  let last=ans[ans.length-1];
  let curr=intervals[i];
//check the upcoming array 1st element have the greater then the last element of storing element or not
//current ineterval overlap with the last intervel
    if(curr[0]<=last[1]){
   last[1]=Math.max(last[1], curr[1]);
    }
    //current ineterval does not overlap with the last intervel
else{
        ans.push(curr);
    }
    }
return ans;
}

let intervals = [[1,3],[2,6],[8,10],[15,18]];
let final= merge(intervals);
//t.c:o(nlogn)+)o(n)
//1st for sorting and 2nd for the  checkinhg and mergig(n)
;;


//3.merge the sorted array:
88. Merge Sorted Array

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
// To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored.
// nums2 has a length of n.
    
// Example 1:
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

function mergesorted(nums1,nums2,m,n){
    //declre the 3rd array
    let arr3=new Array(n+m);
    let left=0;
    let right=0;
    let index=0;
while(nums1<m,nums2<n){
    if(nums1[left]<=nums2[right]){
     arr3[index] =nums1[left];
     left++, index++;
    }
    else{
             arr3[index] =nums2[right];
                  right++, index++;
    }
}
//if right pointer reaches end
while(left<m){
         arr3[index++] =nums1[left++];
}
//if left pointer reaches end
while(right<n){
         arr3[index++] =nums2[right++];
}
// for(let i=0;i<n+m;i++){
//     if(i<n) arr1[i]=arr3[i];

// }
 for (let i = 0; i < n + m; i++) {
        if (i < n) nums1[i] = arr3[i];
        else nums2[i - n] = arr3[i];
    }
}
let nums1 = [1,2,3,0,0,0];
let nums2 = [2,3,9];
let m=3,n=3;
mergesorted(nums1,nums2,m,n)


//for above tak space can you do the without space:
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function(nums1, m, nums2, n) {
    
// };




//here we assign the pointer at the end of 1st nums then traverse fo last to zero and pass the nums value to extra assigned space 
function merge(nums1,m,nums2,n){
    let lastindex=m+n-1;
    let left=m-1;
    let right=n-1;
while(left>=0&&right>=0){
    if(nums1[left]>nums2[right]){
        nums1[lastindex]=nums1[left];
     left--; 
    }
    else{
         nums1[lastindex]=nums2[right];
        right--;
    }
    lastindex--;

}
while(right>=0){
    nums1[lastindex]=nums2[right];
    right--;
    lastindex--;
}

}
let nums1 = [1,2,3,0,0,0];
let nums2 = [2,3,9];
let m=3,n=3;
merge(nums1,m,nums2,n);

console.log(nums1);


//t.c:it will take O(m+n)
//s.c:it will take constant

// Find the duplicate in an array of N+1 integers
// Problem Statement: Given an array of N + 1 size, where each element is between 1 and N. Assuming there is only one duplicate number, your task is to find the duplicate number.
// Example 1: 
// Input: arr=[1,3,4,2,2]
// Output: 2
function findDuplicate(arr){
    const n=arr.length;
const freq=Array(n+1).fill(0);//fill 0 of newly created array
    for(let i=0;i<n;i++){
        if(freq[arr[i]]===0){
            freq[arr[i]]+=1;
        }else{
            return arr[i];
        }
    }
return -1;

}

let arr1 = [1,3,2,6,8,10,15,18,3];
let final= findDuplicate(arr1);
//t.c:o(n) fro the travrsibg each element in the array
//o(1) for the get the 1st  dublicate element then we leave the loop 





function repeatnumber(c){
    const n=c.length;
    let xr=0;
  //get the xr of dublicate value
for(let i=0;i<n;i++){
         xr=xr^c[i];
         xr=xr^(i+1);
}
//n-1 from binary flip the number after the last right bit 1 also right bit is 1 to 0
//~(n-1) convert the 0 to 1 1 to zero
//isolate the right bit
let number=xr&(~(xr-1));

//separate the 0's and 1's

let zero=0;
let one=0;

//group 0 and 1 
for(let i=0;i<n;i++){
    //part of the 1 group
    if((c[i]&number)!=0){
        one=one^c[i];
    }
        //part of the 0 group

    else{
            zero=zero^c[i];
    }
}

for(let i=1;i<=n;i++){
    //part of the 1 group
    if((i&number)!=0){
        one=one^i;
    }
        //part of the 0 group

    else{
            zero=zero^i;
    }
}

 // Last step: Identify the numbers:
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    if (c[i] == zero) cnt++;
  }

  if (cnt == 2) return [zero, one];
  return [one, zero];

}
const b=[1,2,3,3];
const find=repeatnumber(b);
console.log(`[${find[0]},${find[1]}]`);

//time complexity: O(n),space complexity:O(1)









