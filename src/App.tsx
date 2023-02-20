import React, { useState } from "react";
import RuleEntry from "./RuleEntry";
import { Rule } from "./types";

const addEmptyRule = (
  setRules: React.Dispatch<React.SetStateAction<Rule[]>>
) => {
  setRules((oldRules) => {
    const newRule: Rule = { id: oldRules.length, format: "", value: 0 };
    return [...oldRules, newRule];
  });
};

const deleteRule = (rule: Rule) => {
  //TODO:
};

function App() {
  const [rules, setRules] = useState([] as Rule[]);
  return (
    <div className="App p-2 space-y-2">
      <h1>Lichess Blocker</h1>
      <button
        className="rounded-full bg-green-500 p-1"
        onClick={() => addEmptyRule(setRules)}
      >
        Add Rule
      </button>
      <form className="rules space-y-2">
        {rules.map((r) => {
          return <RuleEntry rule={r} />;
        })}
      </form>
    </div>
  );
}

export default App;
