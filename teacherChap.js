// Question:
/*
Teacher teach a numsOfChap. teacher will repeat from start when they reach at last chapter
each day new chapter.
if student not in school from day b to day e. find out how much chapter student is missed.
*/

//Test Case
/*
numOfChap = 4
b = 0, e = 4
output = 4; 
*/

function missed(numsOfChap, b, e){
	var missed = new Map();
	//var days = [];
	//for(var i=0;i<=e;i++){
	//	days[i] = i % numsOfChap;
	//}
	for(var i=b;i<=e;i++){
		if(missed.get(i%numsOfChap)){
			var prev = missed.get(i%numsOfChap);
			missed.set(i%numsOfChap, prev+1);
		}
		else{
			missed.set(i%numsOfChap, 1);
		}
	}
	var count = missed.size;
	return count;
}

console.log(missed(4,3,5));