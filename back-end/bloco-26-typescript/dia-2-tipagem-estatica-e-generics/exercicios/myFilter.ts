type callback<T> = (item: T, index?: number, arr?: T[]) => boolean;

export function myFilter<T>(arr: T[], callback: callback<T>): T[] {
  const result: T[] = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
};
