import "./App.css";

// Implementing a stack is trivial using a dynamic array
// (which we implemented earlier).
class Stack<T> {
  private stack: T[] = [];

  size() {
    return this.stack.length;
  }

  // You might also want push/pop methods:
  push(item: T) {
    this.stack.push(item);
  }

  pop(): T | undefined {
    return this.stack.pop();
  }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop()); //  prints: 2
console.log(numberStack.size()); // prints :1

const stringStack = new Stack<string>();
stringStack.push("hello");
stringStack.push("world");
console.log(stringStack.pop()); //  prints: "world"
console.log(stringStack.size()); // prints :1

function App() {
  return (
    <>
      <div className="card">
        <p>Hello</p>
      </div>
    </>
  );
}

export default App;
