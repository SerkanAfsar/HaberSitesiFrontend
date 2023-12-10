"use client";
import { useEffect, useState } from "react";
import styles from "./index.module.scss";

export default function LoadingButton({
  text,
  isLoading,
  customLoadingText,
  onClick,
  ...rest
}) {
  const [loadingText, setLoadingText] = useState(text);
  useEffect(() => {
    if (isLoading) {
      let counter = 0;
      const timer = setInterval(() => {
        if (counter % 4 == 0) {
          counter = 0;
        }
        counter++;
        setLoadingText(
          `${customLoadingText}${new Array(counter).map((item) => ` . `)}`
        );
      }, 600);
      return () => {
        counter = 0;
        clearInterval(timer);
      };
    } else {
      setLoadingText(text);
    }
  }, [isLoading]);

  return (
    <div className={styles.btnWrapper}>
      <button
        type="button"
        disabled={isLoading == true}
        className="btn btn-primary"
        onClick={onClick}
        {...rest}
      >
        {loadingText}
      </button>
    </div>
  );
}
