"use client";
import styles from "./AdminMenu.module.scss";
import { AdminCategoryList } from "@/Utils/AdminCategories";
import { deleteCookie } from "cookies-next";
import Link from "next/link";
import { IoIosExit } from "react-icons/io";
import { useRouter } from "next/navigation";
export default function AdminMenu({ active }) {
  const router = useRouter();
  const handleSignOut = (e) => {
    deleteCookie(process.env.NEXT_PUBLIC_COOKIE_NAME);
    return router.push("/Admin");
  };
  return (
    <div className={styles.menuWrapper}>
      {AdminCategoryList.map((item, index) => (
        <Link
          className={
            active ? `${styles.item} ${styles.active}` : `${styles.item}`
          }
          key={index}
          href={item.url}
        >
          {item.icon}
          <span style={{ animationDuration: `${(index + 1) / 3}s` }}>
            {item.title}
          </span>
        </Link>
      ))}
      <div
        style={{ cursor: "pointer" }}
        className={styles.item}
        onClick={(e) => handleSignOut(e)}
      >
        <IoIosExit />
        <span>Güvenli Çıkış</span>
      </div>
    </div>
  );
}
