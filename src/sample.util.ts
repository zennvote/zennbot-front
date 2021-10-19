export const sum = (...args: number[]) =>
    args.reduce((acc, cur) => acc + cur, 0);
