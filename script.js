const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let ans = [];
	let temp = []; 
	let sum = 0;
	for(let i = 0 ; i < arr.length; i++){		
		sum += arr[i];
		if(sum <= n){
			temp.push(arr[i]);
		}else{
			 ans.push(temp); // Push the temp array into ans
            temp = [arr[i]]; // Start a new temp array with the current element
            sum = arr[i];
		}
		}
	if(temp.length > 0){
		ans.push(temp);
	}
	return ans;
};
 
const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
