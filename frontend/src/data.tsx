import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import btn1 from "./assets/btn1.jpg";
import btn2 from "./assets/btn2.jpg";
import { cilBank, cilCart, cilWallet } from "@coreui/icons";
import { OperationType } from "../pages/dashboard/Dashboard";

export const DATA: {
  id: number;
  src: string;
  title: string;
  phrase: string;
}[] = [
  {
    id: 1,
    src: img1,
    title: "Investing to be happy.",
    phrase:
      "Open your university account with Digital Movel Key and get 40% off in restaurants.",
  },
  {
    id: 2,
    src: img2,
    title: "Save money for a happy future.",
    phrase: "Open your account till Jun 30th and get shopping descounts.",
  },
  {
    id: 3,
    src: img3,
    title: "Holidays for all your family with no excuses.",
    phrase:
      "Do your owns projects. Get into our credit simulator 100% online and get the amount in minutes.",
  },
  {
    id: 4,
    src: img4,
    title: "Do everything without think in your account balance.",
    phrase: "Enjoy your 3 months discount in insurance.",
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
    title: "Open your current account",
    description: "Our current account permits to be join from anywhere.",
    btn: "Join now!",
  },
  {
    id: 2,
    img: btn2,
    title: "Open your savings account",
    description: "Think in your future and open your savings account.",
    btn: "Join now!",
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
  { id: "third", name: "Payment", icon: cilCart },
  { id: "fourth", name: "Transfer", icon: cilWallet },
];
