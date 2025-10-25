import "./App.css";

function App() {
  // Sorted Set Solution
  class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    removeDuplicates(nums: number[]): number {
      const unique = Array.from(new Set(nums)).sort((a, b) => a - b);
      for (let i = 0; i < unique.length; i++) {
        nums[i] = unique[i];
      }
      return unique.length;
    }
  }

  // This is only to show how to use the Solution class and display the results
  const solution = new Solution();
  const nums = [1, 1, 2, 3, 4];
  const length = solution.removeDuplicates(nums);
  console.log("Length of array after removing duplicates:", length);

  const unique = Array.from(new Set(nums)).sort((a, b) => a - b);

  return (
    <>
      <div className="card">
        <p>
          Initial array : [{nums.join(", ")}] <br />
          Modified array: [{unique.join(", ")}] <br />
          Length of array after removing duplicates: k = {length}
        </p>
      </div>
    </>
  );
}

export default App;
