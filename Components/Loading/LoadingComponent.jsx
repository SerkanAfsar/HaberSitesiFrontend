import LoadingImage from "../../public/loading.gif";
import Image from "next/image";
import styles from "./LoadingComponent.module.scss";
export default function LoadingComponent() {
  return (
    <div className={styles.wrapper}>
      <Image src={LoadingImage} width={200} height={200} alt="Loading" />
    </div>
  );
}
