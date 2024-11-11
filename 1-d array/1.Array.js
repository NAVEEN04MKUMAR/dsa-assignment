doubt:1,4,7,6,8

// 💡 **Q2.** Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
// - Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// - Return k.
// **Example :**
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_*,_*]



var removeelement=function(num,val){
    let count=0;
//it will count the value other than the target element    
    for(let i=0;i<num.length;i++){
        if(num[i]!==val){
            num[count++]=num[i];
        }
    }
return count;
};
let num=[1,2,3,4,5];
let val=5;
console.log(removeelement(num,val));

</aside>

<aside>
// 💡 **Q3.** Given a sorted array of distinct integers and a target value, return the index if the target is found.
// 	If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

**Example 1:**
Input: nums = [1,3,5,6], target = 5

Output: 2

//<script>
// JavaScript program for the above approach

// Function to find insert position of K
function find_index(arr, n, K)
{
	// Lower and upper bounds
	let start = 0;
	let end = n - 1;

	// Traverse the search space
	while (start <= end) {
		let mid = Math.floor((start + end) / 2);

		// If K is found
		if (arr[mid] == K)
			return mid;

		else if (arr[mid] < K)
			start = mid + 1;

		else
			end = mid - 1;
	}

	// Return insert position
	return end + 1;
}

// Driver Code
	let arr = [ 1, 3, 5, 6 ];
	let n = arr.length;
	let K = 2;
	document.write(find_index(arr, n, K) + "<br>");




// This code is contributed by Surbhi Tyagi.
//</script>

</aside>

// 💡 **Q5.** You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
// **Example 1:**
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

// **Explanation:** The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

var containsDuplicate = function(nums) {
    for (let i = 0; i < nums.length; ++ i) {
        for (let j = 0; j < i; ++ j) {
            if (nums[i] == nums[j]) {
                return true;
            }
        }
    }
    return false;
// };
let arr=[1,2,3,4,1];
console.log(containsDuplicate(arr));
//after sort the element we verify with the continuous value with 2 element verify whether it is the present or not
var containsDuplicate = function(nums) {
    nums.sort();
    for (let i = 1; i < nums.length; ++ i){ 
        if (nums[i] == nums[i - 1]) {
            return true;
        }
    }
    return false;
}
let nums=[1,2,3,4];
console.log(containsDuplicate(nums));
</aside>
<aside>
<aside>

<aside>
💡 **Question 1**
Given an integer array nums of length n and an integer target, find three integers
in nums such that the sum is closest to the target.
Return the sum of the three integers.

You may assume that each input would have exactly one solution.

**Example 1:**
Input: nums = [-1,2,1,-4], target = 1
Output: 2

**Explanation:** The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).




function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    let closestSum = nums[0] + nums[1] + nums[2];
  
    for (let i = 0; i < nums.length - 2; i++) {//place the left and right pointer
      let left = i + 1;
      let right = nums.length - 1;
  
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
  
        if (sum === target) {
          return target; // Found the exact sum, return it
        }
  
        if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
          closestSum = sum; // Update the closest sum
        }
  
        if (sum < target) {
          left++; // Increase the left pointer to increase the sum
        } else {
          right--; // Decrease the right pointer to decrease the sum
        }
      }
    }
  
    return closestSum;
  }
  
  const nums = [-1, 2, 1, -4];
const target = 1;
const result = threeSumClosest(nums, target);
console.log(result); // Output: 2


timecomplexity

<aside>
💡 **Question 2**
Given an array nums of n integers, return an array of all the unique quadruplets
[nums[a], nums[b], nums[c], nums[d]] such that:
           ● 0 <= a, b, c, d < n
           ● a, b, c, and d are distinct.
           ● nums[a] + nums[b] + nums[c] + nums[d] == target

You may return the answer in any order.

**Example 1:**
Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

//hint:1stmake the 2 different pointer 1st two place then remainig two pointer placed the remaining the element have te remaining two poin (le = 0; index < angth; index++) {
//
function foursum(nums,target){
nums.sort((a,b)=>a-b);
const n=nums.length;
const result=[];
//fix the 1st pointer
    for (let i=0; i < n-4; i++) {
       if(i>0&&nums[i]===nums[i-1]){
       continue;//because of getting unique value if we are get the repeated value the we remove those element
       } 
//fix the 2nd pointer
for(let j=i+1;j<n-3;j++){
if(j>i+1&&nums[j]===nums[j-1]){
    continue;
}
//fix the 3rd and 4th pointer
let left=j+1;
let right=n-1;
//two pointer approacg where the get the unique value
while(left<right){
    const sum=nums[i]+nums[j]+nums[left]+nums[right];
if(sum===target){
    result.push([nums[i],nums[j],nums[left],nums[right]]);
    left++;
    right--;
//skip the dublicate value from the two pointer arrray
while(left<right&&nums[left]===nums[left-1]){
    left++;
}
while(left<right&&nums[right]===nums[right+1]){
    right--;
}
}
else if(sum<target){
    left++;
}else{
    right--;
      }
    }    
  }
 }return result;
}
</aside>


















	
💡 **Q4.** You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

**Example 1:**
Input: digits = [1,2,3]
Output: [1,2,4]

**Explanation:** The array represents the integer 123.

Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

</aside>

<aside>




	status:do 1,5,7,8
# Assignment Questions 4

<aside>
💡 **Question 2**

Given two **0-indexed** integer arrays nums1 and nums2, return *a list* answer *of size* 2 *where:*

- answer[0] *is a list of all **distinct** integers in* nums1 *which are **not** present in* nums2*.*
- answer[1] *is a list of all **distinct** integers in* nums2 *which are **not** present in* nums1.

**Note** that the integers in the lists may be returned in **any** order.

**Example 1:**

**Input:** nums1 = [1,2,3], nums2 = [2,4,6]

**Output:** [[1,3],[4,6]]

**Explanation:**

For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].

For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].


//hint:create the set where the store the unique value of the number then get the which number not equal to the another array

function findDistinctIntegers(num1, num2) {
const set1=new Set(num1);
const set2=new Set(num2);
const answer = [[], []];
//iterate over the num1 then get the number where the which is not present from th set 2  
for(const num of num1){
    if(!set2.has(num)){
        answer[0].push(num);
    }
}
for(const num of num2){
    if(!set1.has(num)){
    answer[1].push(num)
}
}
return answer;
}
const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6];
const distinctIntegers = findDistinctIntegers(nums1, nums2);
console.log(distinctIntegers); // Output: [[1, 3], [4, 6]]
</aside>



aside>
💡 **Question 6**
Given an integer array nums sorted in **non-decreasing** order, return *an array of **the squares of each number** sorted in non-decreasing order*.

**Example 1:**

Input: nums = [-4,-1,0,3,10]

Output: [0,1,9,16,100]

**Explanation:** After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100]


//hint:try to find the value of the irrespective of the +ve and -ve then square
//get the value irrespecive of +ve or -ve

//change the pointer where the after get the value of the big number
//create the array where the resultant store that array
function sortedsquares(nums){
const result=[];
//create the left and right pointer in array
let left=0;
let right=nums.length-1;
//get the absolute value
while(left<=right){
    const leftvalue=Math.abs(nums[left]);
    const rightvalue=Math.abs(nums[left]);

    if(leftvalue >= rightvalue){
        result.unshift(nums[left]*nums[left]);
        left++;
    }else{
        result.unshift(nums[right]*nums[right]);
        right--;
    } (left < nums.length) {
    //     r
    // whileesult.unshift(nums[left] * nums[left]);
    //     left++;
   //   }
    
}
return result;
}

const nums = [15,-11,10,-12,-13];
const squaredNums = sortedsquares(nums);
console.log(squaredNums); 
//Math.abs(left) 
//Math.abs(right)

//if( leftvalue>rightvalue) 
//     leftpointer++;
//     else
//    rightpointer--; 
    
</aside>

<aside>
</aside>





💡 **Question 8**

Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

*Return the array in the form* [x1,y1,x2,y2,...,xn,yn].

**Example 1:**

**Input:** nums = [2,5,1,3,4,7], n = 3

**Output:** [2,3,5,4,1,7]

**Explanation:** Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].


function shuffleArray(nums, n) {
    const result = [];
    for (let i = 0; i < n; i++) {
//get the ith and (i+n)th element shuffle theelement   
        result.push(nums[i]);
      result.push(nums[i + n]);
    }
    return result;
  }
  const nums = [2, 5, 1, 3, 4, 7];
const n = 3;
const output = shuffleArray(nums, n);
console.log(output);
</aside>


	



💡 **Question 5**

Given two integer arrays arr1 and arr2, and the integer d, *return the distance value between the two arrays*.

The distance value is defined as the number of elements arr1[i] such that there is not any element arr2[j] where |arr1[i]-arr2[j]| <= d.

**Example 1:**

**Input:** arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2

**Output:** 2

**Explanation:**

For arr1[0]=4 we have:

|4-10|=6 > d=2

|4-9|=5 > d=2

|4-1|=3 > d=2

|4-8|=4 > d=2

For arr1[1]=5 we have:

|5-10|=5 > d=2

|5-9|=4 > d=2

|5-1|=4 > d=2

|5-8|=3 > d=2

For arr1[2]=8 we have:

**|8-10|=2 <= d=2**

**|8-9|=1 <= d=2**

|8-1|=7 > d=2

**|8-8|=0 <= d=2**

//get the value from the one array then get the another value from the another then subtract the value from the one array to another array
//initialise the  distance=0;
 array 

function finddistancevalue(arr1,arr2,d){
let distance=0;
//iterate over the each element arr1 and arr2 from num1 and num2
//check the number where the absolute difference between the two number are thegreater than the distance 2
 for(let i=0; i<arr1.length;i++){
    let found=false;

    for(let j=0;j<arr2.length;j++){
        if(Math.abs(arr1[i]-arr2[j])<=d){
         found=true;
         break;   
        }
    }if(!found){
        distance++;
    }
 }
return distance;
}

const arr1 = [4, 5, 8];
const arr2 = [10, 9, 1];
const d = 2;

const distance = finddistancevalue(arr1, arr2, d);
console.log(distance);
//here from the first array with 8 subtrction from the anotherthen we got the value such as <=2


</aside>

<aside>
💡 **Question 6**

Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears **once** or **twice**, return *an array of all the integers that appears **twice***.

You must write an algorithm that runs in O(n) time and uses only constant extra space.

**Example 1:**

**Input:** nums = [4,3,2,7,8,2,3,1]

**Output:**

[2,3]



function findduplicates(nums) {
    const frequency = {};
//we gone through the all the element number is not appeared then increased the frequency if already present then we increase the value towards 2
  
for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (frequency[num] === undefined) {
      frequency[num] = 1;
    } else {
      frequency[num]++;
    }
  }
//whatever value appeared twice we collecet the those element 

  const result=[];
for(const key in frequency){
    if(frequency[key]===2){
        result.push(parseInt(key));
    }
    }
return result;
}
const nums = [1,2,3,4,5,3];
const duplicates = findduplicates(nums);
console.log(duplicates);



</aside>





