import { useEffect } from "react";

export const makeLabels = (idx) => {
  let labels = [];
  for (let i = 1; i <= idx; i++) {
    labels.push(i);
  }

  return labels;
};

export function useCloseWhenClickOutside(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}

export const getColorScale = (score) => {
  let color = "bg-white";
  if (score > 0 && score < 0.1) {
    color = "bg-green-100  text-green-900";
  } else if (score >= 0.1 && score < 0.2) {
    color = "bg-green-200 text-green-900";
  } else if (score >= 0.2 && score < 0.3) {
    color = "bg-green-300 text-green-900";
  } else if (score >= 0.3 && score < 0.4) {
    color = "bg-green-400 text-green-900";
  } else if (score >= 0.4 && score < 0.5) {
    color = "bg-green-500 text-green-900";
  } else if (score >= 0.5 && score < 0.6) {
    color = "bg-green-600 text-green-900";
  } else if (score >= 0.6 && score < 0.7) {
    color = "bg-green-700 text-white";
  } else if (score >= 0.7 && score < 0.8) {
    color = "bg-green-800 text-white";
  } else if (score >= 0.8 && score <= 1) {
    color = "bg-green-900 text-white";
  }

  return color;
};
