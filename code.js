//COSC3020 Divide & Conquer Sum Exercise
//Noah Mulvaney, nmulvane@uywo.edu
//25 Jan 2024

//Find sum of array by dividing into three segments
//and finding the sum of each segment recurisively

//No help recieved.

function divideAndConquerSum(a) {
    if (a.length < 3) {
        let sum = 0;
        for (let i = 0; i < a.length; i++) sum += a[i];
        return sum;
    } else {
        //define boundries between the 3 segments
        let b1 = Math.floor(0.33 * a.length),
            b2 = Math.floor(0.66 * a.length);
        //recurively add segment sums
        return divideAndConquerSum(a.slice(0, b1)) +
            divideAndConquerSum(a.slice(b1, b2)) +
            divideAndConquerSum(a.slice(b2));
    }
}

//Tests
console.log(divideAndConquerSum([4, 3])); //7
console.log(divideAndConquerSum([1, 2, 3])); //6
console.log(divideAndConquerSum([1, 2, 3, 3, 5, 6, 7])); //27
console.log(divideAndConquerSum([1, 2, 3, 3, 5, 6, 7, -1, -2])); //24