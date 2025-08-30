import type { WheelCol } from "./wheelCol";

export interface WheelProps {
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
