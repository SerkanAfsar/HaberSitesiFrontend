import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";

export function ToastResult({ result, type = CrudTypes.CREATE }) {
  if (!result.success) {
    if (result.errorList) {
      result?.errorList?.forEach((err, index) => {
        setTimeout(() => {
          toast.error(err, { position: "top-right" });
        }, index * 100);
      });
    } else {
      setTimeout(() => {
        toast.error(result, { position: "top-right" });
      }, 100);
    }
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

export const buildFormData = (formData, data, parentKey) => {
  if (
    data &&
    typeof data === "object" &&
    !(data instanceof Date) &&
    !(data instanceof File)
  ) {
    Object.keys(data).forEach((key) => {
      buildFormData(
        formData,
        data[key],
        parentKey ? `${parentKey}[${key}]` : key
      );
    });
  } else {
    const value = data == null ? "" : data;
    formData.append(parentKey, value);
  }
};

// export function returnDecodedToken({ jwtToken }) {
//   if (jwtToken) {
//     const decoded = jwt_decode(jwtToken);
//     console.log(decoded);
//     if (new Date(decoded?.exp * 1000) >= new Date()) {
//       return decoded;
//     }
//     return null;
//   }
//   return null;
// }
