```javascript
import { useState, useEffect } from 'react';

function MyComponent(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Deep comparison using JSON.stringify
    if (JSON.stringify(props.data) !== JSON.stringify(prevProps.data)) {
      setCount(props.data.length);
    }
  }, [props.data]);

  return <div>Count: {count}</div>;
}
```