export const getScale = (n: number) => {
  let cnt = 0;
  while (n > 1000) {
    n = n / 2;
    cnt++;
  }
  return cnt;
};

const scale = (n: number, s: number) => {
  if (!s) return n;
  let cnt = s;
  while (cnt--) {
    n = n / 2;
  }
  return Math.round(n);
};

const commonTemplate = (_: TemplateStringsArray, n: number) =>
  n !== 0 ? `${n}fr` : "30px";
const fillerTemplate = (_: TemplateStringsArray, n: number) =>
  n !== 0 ? `${n}fr` : "1fr";

export const fraction = (n: number, s: number) =>
  commonTemplate`${scale(n, s)}`;
export const fractionFiler = (n: number, s: number) =>
  fillerTemplate`${scale(n, s)}`;
