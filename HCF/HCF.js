// Question : find HCF
/*
HCF also known as GCD(greatest common divisor) and GCM(greatest common measure)
ways: 
1. using recursion
2. without recursion
*/ 

// Test Cast
/*
a = 75, b=15
output = 5
*/

//2. without recursion 
function HCF(a, b){
	var ans = 0;
	while(a != b){
		if(a>b){
			a = a - b;
		}
		else{
			b = b - a;
		}
	}
	return a;
}

console.log(HCF(75,15));

// way2: using Recursion
function HCF_R(a,b){
	
	if(a==0){
		return b;
	}
	if(b==0){
		return a
	}
	var dif = Math.abs(a-b);
	return HCF_R(Math.abs(dif-a),Math.abs(dif-b));
}
console.log(HCF_R(75,15));