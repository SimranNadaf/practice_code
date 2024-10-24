// Question:
/*
find a maximum even sum, from array 
*/

// Test Case
/*
arr = [-1,-2,-3,8,7]
output: 14
*/

function maxEven(arr){
	var ans = 0;
	for(var i=0;i<arr.length;i++){
		if(arr[i]>0){
			ans += arr[i];
		}
	}
	if(ans % 2 == 0){
		return ans;
	}
	var minOdd = Number.MIN_VALUE;
	for(var i=0;i<arr.length;i++){
		if(arr[i] % 2 != 0){
			if(arr[i] > 0){
				minOdd = Math.max(minOdd, ans-arr[i]);
			}
			else{
				minOdd = Math.max(minOdd, ans+arr[i]);
			}
		}
	}
	return minOdd;
}

console.log(maxEven([-1,-2,2,8,7]));