import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  class StaticArray {
    // Insert n into arr at the next open position.
    // Length is the number of 'real' values in arr, and capacity
    // is the size (aka memory allocated for the fixed size array).
    insertEnd(arr: number[], n: number, length: number, capacity: number) {
      if (length < capacity) {
        arr[length] = n;
      }
    }

    // Remove from the last position in the array if the array
    // is not empty (i.e. length is non-zero).
    removeEnd(arr: number[], length: number) {
      if (length > 0) {
        // Overwrite last element with some default value.
        // We would also consider the length to be decreased by 1.
        arr[length - 1] = 0;
        length--;
      }
    }

    // Insert n into index i after shifting elements to the right.
    // Assuming i is a valid index and arr is not full.
    insertMiddle(arr: number[], i: number, n: number, length: number) {
      // Shift starting from the end to i.
      for (let index = length - 1; index > i - 1; index--) {
        arr[index + 1] = arr[index];
      }
      //Insert at i
      arr[i] = n;
    }

    // Remove value at index i before shifting elements to the left.
    // Assuming i is a valid index.
    removeMiddle(arr: number[], i: number, length: number) {
      // Shift starting from i + 1 to end.
      for (let index = i + 1; index < length; index++) {
        arr[index - 1] = arr[index];
      }
      // No need to 'remove' arr[i], since we already shifted
    }

    printArr(arr: number[], length: number) {
      let s = "";
      for (let i = 0; i < length; i++) {
        s += arr[i] + " ";
      }
      console.log(s);
    }
  }

  const staticArray = new StaticArray();
  const arr = [1, 2, 3, 4, 5];
  let length = 5;

  staticArray.removeMiddle(arr, 2, length);
  length--; // Reduce the length manually after the operation

  console.log(arr);
  console.log(length);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React NeetCode</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
