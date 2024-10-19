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

