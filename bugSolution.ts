function add(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;
  if (isNaN(numA) || isNaN(numB)) {
    return 0; // Or throw an error
  }
  return numA + numB;
}

const result = add("1", 2); // Returns 3
const result2 = add(1, "2"); // Returns 3
const result3 = add("abc", 2); // Returns 0 (handles non-numeric strings)
const result4 = add(1,2); // Returns 3