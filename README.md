# React useEffect Shallow Comparison Bug

This repository demonstrates a common error in React's `useEffect` hook when dealing with object comparisons.  The example shows how shallow comparison can lead to unexpected behavior when the object's properties change, but the object reference remains the same.

## Bug
The `MyComponent` uses `useEffect` to update the `count` state based on the length of `props.data`.  However, it incorrectly compares the objects directly using `!==`.  When the object's contents change, the component does not re-render because the object reference remains the same.

## Solution
The solution involves using a deep comparison or ensuring that the `useEffect` hook compares the objects correctly.  A simple solution is to use JSON.stringify to convert the objects to strings before comparison.  However this will only work for simple non cyclic objects.  For more complex objects, a deep comparison library is recommended. 