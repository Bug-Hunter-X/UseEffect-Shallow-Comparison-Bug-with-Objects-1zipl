```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect: Directly comparing objects
    if (prevProps.data !== props.data) {
      setCount(props.data.length);
    }
  }, [props.data]);

  return <div>Count: {count}</div>;
}
```