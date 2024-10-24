// Question:
/*
Given a str and substring. find a minimum lexigraphy string that will contain atleast one time 
substr. 
*/
//Test Case:
/*
word="?ab?bc?d"
substr:"bdb"
output: "abdbcad"
*/

function subSeq(word, sub) {
	var wLen = word.length;
	var sLen = sub.length;
	for(var i=0;i<(wLen-sLen);i++){
	 var match = true;
	 var temp = word.split('');
	 for(var j=0;j<sLen;j++){
		if(temp[j+i]!=='?' && temp[j+i]!==sub[j]){
			match = false;
			break;
		}
		temp[i+j] = sub[j];
		console.log(temp);
	 }
	 if(match === true){
		for(var j=0;j<wLen;j++){
			if(temp[j]==='?'){
				temp[j] = 'a';
			}
		}
		return temp.join('');
	 }
	}
	return -1;
}

var word="?ab?bc?d";
var substr="bcb";
console.log(subSeq(word,substr));