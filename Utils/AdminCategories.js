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
    permission: "Permission.Kategori.Create",
  },
  {
    title: "Kategori Listesi",
    url: "/Admin/Categories",
    icon: <BiSolidCategory />,
    permission: "Permission.Kategori.Read",
  },
  {
    title: "Kategori Kaynak Ekle",
    url: "/Admin/AddCategorySource",
    icon: <AiOutlineFileAdd />,
    permission: "Permission.KategoriUrl.Create",
  },
  {
    title: "Kategori Kaynak Listesi",
    url: "/Admin/CategorySourceList",
    icon: <BiSolidCategory />,
    permission: "Permission.KategoriUrl.Read",
  },
  {
    title: "Haber Ekle",
    url: "/Admin/AddNews",
    icon: <AiOutlineFileAdd />,
    permission: "Permission.Haber.Create",
  },
  {
    title: "Haber Listesi",
    url: "/Admin/News",
    icon: <BsNewspaper />,
    permission: "Permission.Haber.Read",
  },
  {
    title: "Rol Ekle",
    url: "/Admin/AddRole",
    icon: <AiOutlineFileAdd />,
    permission: "Permission.SiteAyarları.Create",
  },
  {
    title: "Rol Listesi",
    url: "/Admin/Roles",
    icon: <BsNewspaper />,
    permission: "Permission.SiteAyarları.Read",
  },
];
