import { AiFillHome, AiOutlineFileAdd } from "react-icons/ai";
import { BiSolidCategory } from "react-icons/bi";
import { BsNewspaper } from "react-icons/bs";
export const AdminCategoryList = [
  {
    title: "Anasayfa",
    url: "/Dashboard",
    icon: <AiFillHome />,
  },
  {
    title: "Kategori Ekle",
    url: "/AddCategory",
    icon: <AiOutlineFileAdd />,
  },
  {
    title: "Kategori Listesi",
    url: "/Categories",
    icon: <BiSolidCategory />,
  },
  {
    title: "Kategori Kaynak Ekle",
    url: "/AddCategorySource",
    icon: <AiOutlineFileAdd />,
  },
  {
    title: "Kategori Kaynak Listesi",
    url: "/CategorySourceList",
    icon: <BiSolidCategory />,
  },
  {
    title: "Haber Ekle",
    url: "/AddNews",
    icon: <AiOutlineFileAdd />,
  },
  {
    title: "Haber Listesi",
    url: "/News",
    icon: <BsNewspaper />,
  },
];
