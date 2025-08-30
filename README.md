# Simp Wheel

## ![Demo Image](https://github.com/hnamhocit/simp-wheel/blob/main/example.png)


- Example usage:

```
import { useState } from "react";
import { SimpWheel } from "simp-wheel";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const cols = [
  {
    id: "month",
    items: Array.from({ length: 12 }).map((_, i) => ({
      label: months[i],
      value: String(i + 1),
    })),
  },
  {
    id: "day",
    items: Array.from({ length: 31 }).map((_, i) => ({
      label: String(i + 1),
      value: String(i + 1),
    })),
  },
  {
    id: "year",
    items: Array.from({ length: 100 }).map((_, i) => ({
      label: String(i + 2000),
      value: String(i + 2000),
    })),
  },
];

function App() {
  const [value, setValue] = useState<string[]>(["1", "6", "2025"]);

  return (
    <div className="p-4 space-y-4">
      <Wheel
        classNames={{
          container: "w-md",
        }}
        value={value}
        onChange={setValue}
        cols={cols}
      />

      <p>
        Values:{" "}
        <span className="bg-blue-500/10 text-blue-500 py-2 px-3 rounded-xl">
          {JSON.stringify(value)}
        </span>
      </p>
    </div>
  );
}

export default App;

```


- API

```
interface WheelProps {
  cols: WheelCol[];
  max?: number;
  value: string[];
  onChange: (values: string[]) => void;
  classNames?: {
    container?: string;
    column?: string;
    item?: string;
  };
}
```
