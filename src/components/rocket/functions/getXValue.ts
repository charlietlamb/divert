export function getXValue(value: number, ref: React.RefObject<HTMLDivElement>) {
  return value * (ref.current?.clientWidth! - 10) + 5;
}
