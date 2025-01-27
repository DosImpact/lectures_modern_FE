function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

let indentedString = padLeft("Hello world", "  ~~ ");
console.log(indentedString);
let indentedNumber = padLeft("hello world", 5);
console.log(indentedNumber);
