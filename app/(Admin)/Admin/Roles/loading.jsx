import styles from "./loading.module.scss";
import ContentHeading from "@/Components/AdminLayout/AdminContent/ContentHeading";
import AdminInnerContent from "@/Components/AdminLayout/AdminContent/AdminInnerContent";
export default function Loading() {
  return (
    <>
      <ContentHeading title="ROL LİSTESİ" />
      <AdminInnerContent>
        <table className={`${styles["tableDynamic"]} table`}>
          <tbody>
            <tr>
              <td className={styles["skeleton-loader"]}></td>
              <td className={styles["skeleton-loader"]}></td>
              <td className={styles["skeleton-loader"]}></td>
              <td className={styles["skeleton-loader"]}></td>
            </tr>
            <tr>
              <td className={styles["skeleton-loader"]}></td>
              <td className={styles["skeleton-loader"]}></td>
              <td className={styles["skeleton-loader"]}></td>
              <td className={styles["skeleton-loader"]}></td>
            </tr>
            <tr>
              <td className={styles["skeleton-loader"]}></td>
              <td className={styles["skeleton-loader"]}></td>
              <td className={styles["skeleton-loader"]}></td>
              <td className={styles["skeleton-loader"]}></td>
            </tr>
          </tbody>
        </table>
      </AdminInnerContent>
    </>
  );
}
