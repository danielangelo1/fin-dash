import React, { CSSProperties } from "react";
import { getMonthName, formatDate } from "../utils/util";
import { useData } from "../context/DataContext";

type MonthButtonProps = {
  n: number;
};

const buttonStyle: CSSProperties = {
  padding: "var(--gap) var(--gap-s)",
  backgroundColor: "var(--accent-color)",
  border: "none",
  borderRadius: "var(--gap)",
  color: "var(--secondary-color)",
  fontWeight: "600",
  textTransform: "capitalize",
};

const MonthButton = ({ n }: MonthButtonProps) => {
  const { setStartDate, setEndDate } = useData();

  const setMonth = (n: number) => {
    const date = new Date();
    date.setMonth(date.getMonth() + n);

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    setStartDate(formatDate(firstDay));
    setEndDate(formatDate(lastDay));
  };

  return (
    <button style={buttonStyle} onClick={() => setMonth(n)}>
      {getMonthName(n)}
    </button>
  );
};

export default MonthButton;
