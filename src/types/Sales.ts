export type IVenda = {
  id: string;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: "boleto" | "cartao" | "pix";
  data: string;
  parcelas: number | null;
};

export type SaleDay = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
};
