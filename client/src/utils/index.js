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
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}
