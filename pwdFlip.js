// Question: not Clear
/*
password string, pwd consistes of binary characters (0s and 1s).
A Cyber security expert is trying to determine the minimum numbers 
of changes required to make the password secure. to do so, it must be divited into 
substring for non-overlapping, even length substring. each substring can only containc 1s or 0's, not a mix.
this helps to ensure that the password is string and less valuable to hacking attacks.
find the minimum numsber of characters that must be flipped in the password string. i.e. changed from 0 to 1
or 1 to 0 to allow the string to be divided as described. 
*/

// Test cases
/*
1.
i/p: "101011"
o/p: 2
2.
i/p: "100110"
o/p: 3  
*/

function FlipPwd(str){
	var cnt = 0; 
	for(var i=0;i<str.length-1;i+=2){
		if(str[i] != str[i+1]){
			cnt++;
		}
	}
	console.log(cnt);
}

FlipPwd("110110");




