import { toast } from "react-toastify";
export function ToastResult({ result, type = CrudTypes.CREATE }) {
  if (!result.success) {
    result.errorList.forEach((err, index) => {
      setTimeout(() => {
        toast.error(err, { position: "top-right" });
      }, index * 100);
    });
    return false;
  } else {
    switch (type) {
      case CrudTypes.CREATE: {
        toast.success("Veri Eklendi", { position: "top-right" });
        break;
      }
      case CrudTypes.UPDATE: {
        toast.warning("Veri Güncellendi", { position: "top-right" });
        break;
      }
      case CrudTypes.DELETE: {
        toast.error("Veri Silindi", { position: "top-right" });
        break;
      }
      default: {
        toast.success("Veri Eklendi", { position: "top-right" });
        break;
      }
    }
    return true;
  }
}

export const CrudTypes = {
  CREATE: "ADD",
  UPDATE: "UPDATE",
  DELETE: "REMOVE",
};
