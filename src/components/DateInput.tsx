import { ComponentProps, CSSProperties } from "react";

type DateInputProps = ComponentProps<"input"> & {
  label: string;
};

const generalStyle: CSSProperties = {
  fontSize: "1rem",
  color: "var(--secondary-color)",
  padding: "var(--gap-s) .75rem",
  backgroundColor: "var(--color-4)",
  borderRadius: "var(--gap)",
};

const labelStyle: CSSProperties = {
  display: "block",
  marginBottom: "var(--gap-s)",
  fontWeight: "600",
  ...generalStyle,
};

const inputStyle: CSSProperties = {
  border: "none",
  fontFamily: "monospace",
  ...generalStyle,
};

const DateInput = ({ label, ...props }: DateInputProps) => {
  return (
    <div>
      <label htmlFor={label} style={labelStyle}>
        {label}
      </label>
      <input
        type="date"
        id={label}
        name={label}
        style={inputStyle}
        {...props}
      />
    </div>
  );
};

export default DateInput;
