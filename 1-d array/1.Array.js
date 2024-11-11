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

