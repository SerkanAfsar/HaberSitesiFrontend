import styles from "./AsideTop.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { VscExpandAll } from "react-icons/vsc";
export default function AsideTop({ active, setActive }) {
  return (
    <div
      className={
        active ? `${styles.asideTop} ${styles.active}` : `${styles.asideTop}`
      }
    >
      <span>Yönetim Paneli</span>
      <div onClick={() => setActive(!active)}>
        {!active ? <AiOutlineCloseCircle /> : <VscExpandAll />}
      </div>
    </div>
  );
}
