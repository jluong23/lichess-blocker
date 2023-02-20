import { Rule } from "./types";

interface Props {
  rule: Rule;
}

function RuleEntry({ rule }: Props) {
  const formats = ["bullet", "blitz", "rapid"];

  return (
    <div>
      Max
      <input type="number" className="w-8"></input>
      games of
      <select>
        {formats.map((f) => {
          return (
            <>
              <option value={f}>{f}</option>
            </>
          );
        })}
      </select>
      per day
    </div>
  );
}

export default RuleEntry;
