import "./App.css";

class Solution {
  getConcatenation(nums: number[], x: number) {
    // Initiate empty array
    const ans = [];
    // Outer loop determines how many times the inder loop should be done by 'x´ times
    for (let i = 0; i < x; i++) {
      // Inner loop that iterates every num value of nums and add its to the end of the array
      // Careful if we use 'if' instead of 'of' we iterate overt the indices instead of over the values
      for (const num of nums) {
        ans.push(num);
      }
    }
    return ans;
  }
}

// Create instance of solution class
const solution = new Solution();

// Test getConcatenation method
const nums = [1, 2, 3];
const x = 3;
const result = solution.getConcatenation(nums, x);
console.log(result);

function App() {
  return (
    <>
      <div className="card">
        <p>Input arary: {JSON.stringify(nums)}</p>{" "}
        <p>Number of repetition : {x}</p>{" "}
        <p>Result: {JSON.stringify(result)}</p>{" "}
      </div>{" "}
    </>
  );
}
export default App;
