"use client";

import { useEffect } from "react";

export const WebflowDetect = () => {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("w-mod-js");

    const isTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (isTouch) {
      root.classList.add("w-mod-touch");
    }
  }, []);

  return null;
};
