/* eslint-disable import/prefer-default-export */
import { useEffect } from 'react';

let isSleep = true;

export function useSleep(ms: number): string {
  useEffect(
    () => () => {
      isSleep = true;
    },
    []
  );

  if (isSleep === true) {
    throw new Promise<void>((resolve) => {
      setTimeout(() => {
        isSleep = false;
        resolve();
      }, ms);
    });
  }
  return new Date().toLocaleTimeString();
}
