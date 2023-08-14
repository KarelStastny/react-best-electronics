import Notebook from "../images/icon/notebook.png";
import Monitor from "../images/icon/monitor.png";
import Komponenty from "../images/icon/component.png";
import Prislusenstvi from "../images/icon/accessories.png";
import Mobil from "../images/icon/mobile.png";

const Categories = [
  {
    id: 1,
    title: "Noteboky",
    img: Notebook,
    subcategories: [
      { id: 1, title: "Herní" },
      { id: 2, title: "Pracovní" },
    ],
  },
  {
    id: 2,
    title: "Monitory",
    img: Monitor,
    subcategories: [
      { id: 3, title: "Herní" },
      { id: 4, title: "Prohnuté" },
    ],
  },
  {
    id: 3,
    title: "Příslušenství",
    img: Prislusenstvi,
    subcategories: [
      { id: 5, title: "Klávesnice" },
      { id: 6, title: "Myši" },
    ],
  },
  {
    id: 4,
    title: "Komponenty",
    img: Komponenty,
    subcategories: [
      { id: 7, title: "Paměti RAM" },
      { id: 8, title: "Procesory" },
    ],
  },
  {
    id: 5,
    title: "Mobily",
    img: Mobil,
    subcategories: [
      { id: 9, title: "iPhone" },
      { id: 10, title: "Samsung" },
      { id: 11, title: "Xiaomi" },
      { id: 12, title: "Google" },
    ],
  },
];

export default Categories;
