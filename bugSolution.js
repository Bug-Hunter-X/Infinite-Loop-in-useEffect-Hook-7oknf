```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct:  This effect only runs once on mount
    // Add any cleanup functions here if necessary
    //Example: return () => {cleanup};
    //For this example no cleanup is needed
    return ()=>{}
  }, []);

  return <div>Count: {count}</div>;
}
```