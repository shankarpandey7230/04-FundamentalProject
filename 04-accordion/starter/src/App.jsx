import data from "./data";

import React, { useState } from "react";
import Questions from "./Questions";

const App = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <Questions questions={questions} />
    </main>
  );
};

export default App;
