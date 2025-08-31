# 🎡 Simp Wheel

A lightweight, customizable wheel picker for React.

![Demo](https://github.com/hnamhocit/simp-wheel/blob/main/example.png)

---

## 🌐 Socials
- 🐙 [GitHub](https://github.com/hnamhocit/simp-wheel)
- 📘 [Facebook](https://fb.com/hnamhocit)

---

## ⚡ Installation

```bash
npm install simp-wheel
# or
yarn add simp-wheel
```

---

## 🎨 Example Usage

```
import { useState } from "react";
import { SimpWheel } from "simp-wheel";

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const cols = [
  {
    id: "month",
    items: months.map((m, i) => ({ label: m, value: String(i + 1) })),
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
      <SimpWheel
        classNames={{
          container: "w-md shadow-xl rounded-2xl border p-2 bg-white",
          column: "px-2",
          item: "py-2 text-gray-600 hover:text-blue-500 transition",
          activeRow: "text-blue-600 font-semibold text-lg",
        }}
        value={value}
        onChange={setValue}
        cols={cols}
      />

      <p className="font-mono text-sm">
        Values:{" "}
        <span className="bg-blue-500/10 text-blue-600 py-1 px-2 rounded-lg">
          {JSON.stringify(value)}
        </span>
      </p>
    </div>
  );
}

export default App;
```

---

## 📖 API

```
interface WheelProps {
  cols: WheelCol[];
  max?: number;
  value: string[];
  onChange: (values: string[]) => void;
  classNames?: {
    container?: string; // container style
    column?: string;    // each column style
    item?: string;      // each item style
    activeRow?: string; // highlighted/selected item style
  };
}
```
