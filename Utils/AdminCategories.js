import { AiFillHome, AiOutlineFileAdd } from "react-icons/ai";
import { BiSolidCategory } from "react-icons/bi";
import { BsNewspaper } from "react-icons/bs";
export const AdminCategoryList = [
  {
    title: "Anasayfa",
    url: "/Admin/Dashboard",
    icon: <AiFillHome />,
  },
  {
    title: "Kategori Ekle",
    url: "/Admin/AddCategory",
    icon: <AiOutlineFileAdd />,
  },
  {
    title: "Kategori Listesi",
    url: "/Admin/Categories",
    icon: <BiSolidCategory />,
  },
  {
    title: "Kategori Kaynak Ekle",
    url: "/Admin/AddCategorySource",
    icon: <AiOutlineFileAdd />,
  },
  {
    title: "Kategori Kaynak Listesi",
    url: "/Admin/CategorySourceList",
    icon: <BiSolidCategory />,
  },
  {
    title: "Haber Ekle",
    url: "/Admin/AddNews",
    icon: <AiOutlineFileAdd />,
  },
  {
    title: "Haber Listesi",
    url: "/Admin/News",
    icon: <BsNewspaper />,
  },
  {
    title: "Rol Ekle",
    url: "/Admin/AddRole",
    icon: <AiOutlineFileAdd />,
  },
  {
    title: "Rol Listesi",
    url: "/Admin/Roles",
    icon: <BsNewspaper />,
  },
];
