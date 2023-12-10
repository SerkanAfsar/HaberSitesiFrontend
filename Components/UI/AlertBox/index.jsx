"use client";
import { useEffect, useState } from "react";
import styles from "./index.module.scss";
export default function AlertBox({
  type = "danger",
  errMessage,
  isFadeOut = false,
}) {
  const [isAlive, setIsAlive] = useState(true);
  useEffect(() => {
    if (isFadeOut) {
      const timer = setTimeout(() => {
        setIsAlive(false);
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [isFadeOut]);

  if ((isAlive && isFadeOut) || !isFadeOut) {
    return (
      <div className={`alert alert-${type}`} role="alert">
        {errMessage}
      </div>
    );
  }
  return null;
}
