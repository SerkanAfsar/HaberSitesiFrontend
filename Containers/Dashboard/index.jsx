import DashboardItem from "@/Components/Dasboard/DashboardItem";
import styles from "./index.module.scss";
import { AdminCategoryList } from "@/Utils/AdminCategories";

export default function DashboardContainer() {
  return (
    <div className={styles.wrapper}>
      {AdminCategoryList.map((item, index) => (
        <DashboardItem key={index} item={item} />
      ))}
    </div>
  );
}
