import { memo, useCallback, type FC } from "react";
import clsx from "clsx";

import type { WheelProps } from "./interfaces";
import Column from "./Column";

const Wheel: FC<WheelProps> = ({ cols, classNames, value, onChange, max }) => {
  const handleChange = useCallback(
    (colIndex: number, _value: string) => {
      const newValue = [...value];
      newValue[colIndex] = _value;
      onChange(newValue);
    },
    [onChange, value],
  );

  return (
    <div
      className={clsx(
        "flex items-center relative h-64 overflow-hidden",
        classNames?.container,
      )}
    >
      <div
        className={clsx(
          "absolute top-1/2 left-0 w-full -translate-y-1/2 h-12 rounded-xl bg-[rgba(0,0,0,0.1)]",
          classNames?.activeRow,
        )}
      />

      {cols.map((col, colIndex) => (
        <Column
          key={col.id}
          items={col.items}
          max={max}
          onChange={(_value) => handleChange(colIndex, _value)}
          length={cols.length}
          className={classNames?.column}
          itemClassName={classNames?.item}
          currentValue={value[colIndex]}
        />
      ))}
    </div>
  );
};

export default memo(Wheel);
