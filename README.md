# TypeScript Type Error: Type 'string' is not assignable to type 'number'

This repository demonstrates a common TypeScript type error and its solution. The error occurs when a string value is passed to a function expecting a number.  The solution involves type checking and conversion to handle different input types.

## Bug

The `bug.ts` file contains a function `add` that expects two numbers as input. However, the function is called with a string and a number, resulting in the type error.

## Solution

The `bugSolution.ts` file shows how to fix the error by adding type checking and input conversion using `parseInt` or `parseFloat` to convert the string to a number before performing the addition.