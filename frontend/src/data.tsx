import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import btn1 from "./assets/btn1.jpg";
import btn2 from "./assets/btn2.jpg";
import { cilBank, cilGraph, cilCart, cilWallet } from "@coreui/icons";
import { OperationType } from "../pages/dashboard/Dashboard";

export const DATA: { id: number; src: string; phrase: string }[] = [
  {
    id: 1,
    src: img1,
    phrase: "Investir é ser feliz.",
  },
  {
    id: 2,
    src: img2,
    phrase: "Poupar para um futuro risonho.",
  },
  {
    id: 3,
    src: img3,
    phrase: "Conviver com os melhores sem pensar no dinheiro.",
  },
  {
    id: 4,
    src: img4,
    phrase: "Poder fazer tudo sem ter que verificar a conta.",
  },
];

export const cardsData: {
  id: number;
  img: string;
  title: string;
  description: string;
  btn: string;
}[] = [
  {
    id: 1,
    img: btn1,
    title: "Abrir uma conta corrente",
    description:
      "A conta corrente com o nosso servico permite ser acedida em qualquer lado sem custo.",
    btn: "Adere já!",
  },
  {
    id: 2,
    img: btn2,
    title: "Abrir uma conta poupança",
    description:
      "A conta poupança permite mensalmente por de parte um montate que vai fazer um futuro mais.",
    btn: "Adere já!",
  },
];

export const links: { id: number; name: string; path: string }[] = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Dashboard",
    path: "/dashboard",
  },
];

export const operations: {
  id: string;
  name: OperationType;
  icon: string[];
}[] = [
  { id: "first", name: "Deposit", icon: cilBank },
  { id: "second", name: "Movements", icon: cilGraph },
  { id: "third", name: "Payment", icon: cilCart },
  { id: "fourth", name: "Transfer", icon: cilWallet },
];

export const moves: {
  type: string;
  amount: number;
  date: string;
  color: string;
  symbol: string;
}[] = [
  {
    type: "Deposit",
    amount: 15.58,
    date: "22-05-2024",
    color: "text-green-600",
    symbol: "+",
  },
  {
    type: "Payment",
    amount: 12.21,
    date: "24-05-2024",
    color: "text-red-600",
    symbol: "-",
  },
  {
    type: "Transfer",
    amount: 25.14,
    date: "20-05-2024",
    color: "text-red-600",
    symbol: "-",
  },
  {
    type: "Receipt",
    amount: 55.02,
    date: "19-05-2024",
    color: "text-green-600",
    symbol: "+",
  },
  {
    type: "Receipt",
    amount: 55.02,
    date: "19-05-2024",
    color: "text-green-600",
    symbol: "+",
  },
  {
    type: "Receipt",
    amount: 55.02,
    date: "19-05-2024",
    color: "text-green-600",
    symbol: "+",
  },
  {
    type: "Receipt",
    amount: 55.02,
    date: "19-05-2024",
    color: "text-green-600",
    symbol: "+",
  },
  {
    type: "Receipt",
    amount: 55.02,
    date: "19-05-2024",
    color: "text-green-600",
    symbol: "+",
  },
  {
    type: "Receipt",
    amount: 55.02,
    date: "19-05-2024",
    color: "text-green-600",
    symbol: "+",
  },
  {
    type: "Receipt",
    amount: 55.02,
    date: "19-05-2024",
    color: "text-green-600",
    symbol: "+",
  },
  {
    type: "Receipt",
    amount: 55.02,
    date: "19-05-2024",
    color: "text-green-600",
    symbol: "+",
  },
];
