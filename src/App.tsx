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

  staticArray.insertMiddle(arr, 2, 10, length);
  length++; // Manually increase length after insertion

  // console.log(arr);
  // console.log(length);

  // initialize myArray
  let myArray = [1, 3, 5];

  // access an arbitrary element, where i is the index of the desired value
  const printElement = (i: number) => {
    return myArray[i];
  };
  printElement(0);
  // prints 1

  const resetCount = () => {
    setCount(0);
  };

  // Reassign myArray to a new array
  myArray = [2, 3, 5];

  const printArray = () => {
    for (let i = 0; i < myArray.length; i++) {
      console.log(myArray[i]);
    }
  };

  printArray(); // prints 2, 3 and 5 separately

  // Alternatively, you can use a while loop:

  // let i = 0;
  // while (i < myArray.length) {
  //   console.log(myArray[i]);
  //   i++;
  // }

  console.log("removes last index value and prints it", myArray.pop()); // prints 50

  myArray.pop(); // removes 40

  myArray = [10, 20, 30, 40, 50];

  const removeMiddle = (arr: number[], i: number, length: number) => {
    // Shift starting from i + 1 to end.
    for (let index = i + 1; index < length; index++) {
      arr[index - 1] = arr[index];
    }
    // No need to 'remove' arr[i], since we already shifted
  };
  removeMiddle(myArray, 2, myArray.length); // removes 30

  const insertEnd = (
    arr: number[],
    n: number,
    length: number,
    capacity: number
  ) => {
    if (length < capacity) {
      arr[length] = n;
    }
  };

  console.log(
    "trying to add more that it is allocated",
    insertEnd(myArray, 60, myArray.length, 5)
  ); // inserts 60 at the end

  myArray = [10, 20, 30, 40, 50];

  // Insert n into index i after shifting elements to the right.
  // Assuming i is a valid index and arr is not full.
  const insertMiddle = (
    arr: number[],
    i: number,
    n: number,
    length: number
  ) => {
    // Shift starting from the end to i.
    for (let index = length - 1; index > i - 1; index--) {
      arr[index + 1] = arr[index];
    }
    //Insert at i
    arr[i] = n;
  };

  console.log(
    "inserts 25 at index 2",
    insertMiddle(myArray, 2, 25, myArray.length)
  ); // inserts 25 at index 2

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
        <button onClick={resetCount}>Reset Count</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">{printElement(3)}</p>
    </>
  );
}

export default App;
