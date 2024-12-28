# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: causing an infinite loop by incorrectly updating state within the effect itself without dependencies. 

The `bug.js` file contains the buggy code. The `bugSolution.js` file provides the corrected version.

## Bug
The issue lies within the `useEffect` hook.  Setting `setCount(count + 1)` inside the effect without specifying any dependencies creates an infinite loop because the effect runs continuously, causing the component to re-render and the effect to run again.