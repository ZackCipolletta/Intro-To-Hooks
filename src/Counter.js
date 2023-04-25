import React, { useState, useEffect } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    console.log("effect!");
    document.title = counter;
  }, [counter]); //Notice that we've added a second argument to our useEffect hook: [counter]. This second argument is called a dependency array, and it can contain one or more state variables or props within it. When we add a dependency array to our useEffect hook, we're saying that whether our effect should run depends on whether the value of the state variables in our dependency array have changed.

  return (
    <React.Fragment>
      {hidden ? <h1>Count Hidden</h1> : <h1>{counter}</h1>}
      <button onClick={() => setCounter(counter + 1)}>Count!</button>
      <button onClick={() => setHidden(!hidden)}>Hide/Show</button>
    </React.Fragment>
  );
}

export default Counter;