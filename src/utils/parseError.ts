export const parseErrorMessage = (err: unknown) => {
  return (err as Error).message;
};
