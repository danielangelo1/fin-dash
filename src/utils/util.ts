export const getAnyDaysAgo = (n: number) => {
  const date = new Date();
  date.setDate(date.getDate() - n);
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();

  return `${yyyy}-${mm}-${dd}`;
};

export const getMonthName = (monthNumber: number) => {
  const date = new Date();
  date.setMonth(date.getMonth() + monthNumber);
  const monthName = new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(
    date,
  );
  return monthName;
};

export const formatDate = (date: Date) => {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();

  return `${yyyy}-${mm}-${dd}`;
};
