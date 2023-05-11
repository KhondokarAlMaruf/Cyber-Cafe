import React from "react";
import "./Questions.css";

const Questions = () => {
  return (
    <div className="questions">
      <p></p>
      <h2> 1. Props vs state</h2>
      <h3>
        = State is owned locally and the component itself updates it. Props are
        owned and read-only by a parent.
      </h3>
      <h2> 2. How does useState work?</h2>
      <h3>
        = useState is React Hook that allows you to add state to a functional
        component. It returns an array with two values: the current state and a
        function to update it
      </h3>

      <h2> 3. Purpose of useEffect other than fetching data?</h2>
      <h3>
        = Some other purposes of useEffect include adding event listeners,
        triggering animations, updating the document title, performing cleanup,
        and integrating with third-party libraries.
      </h3>
      <h2> 4. How Does React work?</h2>
      <h3>
        = React is a JavaScript library for building user interfaces. React
        works by allowing developers to define reusable UI components using a
        declarative syntax called JSX. These components are then composed to
        create complex UI.
      </h3>
    </div>
  );
};

export default Questions;
