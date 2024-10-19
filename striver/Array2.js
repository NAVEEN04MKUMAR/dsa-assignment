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

