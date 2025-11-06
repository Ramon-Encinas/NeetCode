import "./App.css";

function App() {
  class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string) {
      //Initiate stack
      const stack = [];
      // mapping close to opening parenthesis
      const closeToOpen: Record<string, string> = {
        ")": "(",
        "]": "[",
        "}": "{",
      };
      // loop through each character c in hte input string of s
      for (const c of s) {
        // if loop if character is a closing character, if its note, then push it to stack.
        if (closeToOpen[c]) {
          // check if stack is empty to avoid errors and if the element at the top of the stack matches
          // the corresponding opening bracket, if it does, it pops it  from the stack.
          if (stack.length > 0 && stack[stack.length - 1] === closeToOpen[c]) {
            stack.pop();
            // if it does not match then return false
          } else {
            return false;
          }
        } else {
          stack.push(c);
        }
      }

      // if stack is empty then all brackets where matched, so return true
      return stack.length === 0;
    }
  }

  const solution = new Solution();
  const test = "[()]";
  const test2 = "{[(})]";

  console.log(solution.isValid(test));

  console.log(solution.isValid(test2));

  return (
    <>
      <div className="card">
        <p>Hello</p>
      </div>
    </>
  );
}

export default App;
