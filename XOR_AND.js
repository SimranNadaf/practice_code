// Question:
/*
array a size n 
0<=i<j<n and a[i] XOR a[j] > a[i] AND a[j] => count true operations
*/

// Test Case:
/*
a=[4,3,5,2]
output = 4
*/

function XORAND(a,n){
	var ans = 0;
	for(var i=0;i<n-1;i++){
		for(var j=i+1;j<n;i++){
			var x = a[i] ^ a[j];
			var a = a[i] & a[j];
			if(x > a){
				ans++;
			} 
		}
	}
	return ans;
	console.log(ans);
}

console.log(XORAND([4,3,5,2],4));