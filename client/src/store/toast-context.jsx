import React, { useState, createContext, useContext, useMemo } from "react";
import { createPortal } from "react-dom";
import { Toast } from "../components/common/Toast";
import { v4 as uuidv4 } from "uuid";

const ToastContext = createContext();

export const ToastProvider = (props) => {
  const [toasts, setToasts] = useState([]);
  const open = (content, type) =>
    setToasts((currentToasts) => [
      ...currentToasts,
      { id: uuidv4(), type, content },
    ]);
  const close = (id) =>
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id)
    );
  const contextValue = useMemo(() => ({ open }), []);

  return (
    <ToastContext.Provider value={contextValue}>
      {props.children}

      {createPortal(
        <div style={{ position: "fixed", top: 60, right: 20, zIndex: 100 }}>
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              onClose={() => close(toast.id)}
              text={toast.content}
              type={toast.type}
            />
          ))}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);