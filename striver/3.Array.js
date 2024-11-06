

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
