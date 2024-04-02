export function getYValue(value: number, ref: React.RefObject<HTMLDivElement>) {
  return value * (ref.current?.clientHeight! - 10) + 5;
}
