import React, { useEffect } from "react";
import Sheet from "react-modal-sheet";
import styles from "./Modal.module.css";

export function Modal({ isOpen, close, size = 0.8, children }) {
  useEffect(() => {
    const onKeyup = (e) => {
      if (isOpen && e.key === "Escape") {
        close();
      }
    };

    window.addEventListener("keyup", onKeyup);

    return () => {
      window.removeEventListener("keyup", onKeyup);
    };
  }, [isOpen, close]);

  return (
    <Sheet snapPoints={[size, 0]} isOpen={isOpen} onClose={close}>
      <Sheet.Container>
        <Sheet.Header>
          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className={styles.close}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 17.12 17.12"
            >
              <path
                d="M1.06,1.06l15,15m0-15-15,15"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                strokeWidth={3}
              />
            </svg>
          </button>
        </Sheet.Header>
        <Sheet.Content>{children}</Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={close} />
    </Sheet>
  );
}
