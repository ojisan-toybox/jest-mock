export const processing = (data: number, num: number): (() => PostData) => {
  return () => ({
    data,
    num,
  });
};

export type PostData = {
  data: number;
  num: number;
};
