import { CSSProperties } from "react";

const loadingStyle: CSSProperties = {
  border: "var(--gap-s) solid var(--secondary-color)",
  borderRightColor: "var(--color-4)",
  width: "var(--gap)",
  height: "var(--gap)",
  borderRadius: "50%",
  animation: "spin 1s linear infinite",
};

const Loading = () => {
  return (
    <div style={loadingStyle}>
      <style>
        {`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}
      </style>
    </div>
  );
};

export default Loading;
