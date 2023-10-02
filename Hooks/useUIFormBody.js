import FormItemTypes from "@/Utils/FormItemTypes";
import { useState, useEffect } from "react";

export default function useUIFormBody(formElements) {
  const getValue = ({ type, e, editor }) => {
    switch (type) {
      case FormItemTypes.TEXTEDITOR: {
        return editor.getData();
      }
      case FormItemTypes.TEXTEDITOR: {
        return editor.getData();
      }
      case "file": {
        return e.target.files[0];
      }
      case FormItemTypes.DROPDOWNLIST: {
        return parseInt(e.target.value);
      }
      case FormItemTypes.MULTISELECT:
      case FormItemTypes.DATEPICKER:
      case FormItemTypes.INPUTMASK: {
        return e;
      }
      case FormItemTypes.TEXTNUMBER:
      case FormItemTypes.CHECKBOX:
      case FormItemTypes.TEXTAREA:
      case FormItemTypes.TEXT:
      case FormItemTypes.EMAIL:
      case FormItemTypes.PASSWORD:
      default: {
        return e.target.value;
      }
    }
  };
  const [body, setBody] = useState(
    Object.keys(formElements).reduce((acc, cur) => {
      return {
        ...acc,
        [cur]: {
          ...formElements[cur],
          type: formElements[cur]["type"] ?? "text",
          onChange: formElements[cur]["onChange"]
            ? formElements[cur]["onChange"]
            : (e, editor) => {
                if (formElements[cur]["type"] == FormItemTypes.TEXTNUMBER) {
                  if (
                    formElements[cur]["limitcount"] &&
                    e.target.value.length > formElements[cur]["limitcount"]
                  ) {
                    return false;
                  }
                  if (!/^\d+$/.test(e.target.value)) {
                    return false;
                  }
                }
                setBody((item) => ({
                  ...item,
                  [cur]: {
                    ...item[cur],
                    value: getValue({
                      type: item[cur]["type"],
                      e,
                      editor,
                    }),
                  },
                }));
              },
        },
      };
    }, {})
  );

  const [data, setData] = useState({});
  const [formDataState, setFormDataState] = useState(null);

  useEffect(() => {
    setData(() => {
      return Object.keys(body).reduce((acc, cur) => {
        return { ...acc, [cur]: body[cur]["value"] };
      }, {});
    });

    setFormDataState(() => {
      const formData = new FormData();
      Object.keys(body).forEach((item) => {
        formData.append([item], body[item]["value"]);
      });

      return formData;
    });
  }, [body]);

  return {
    body,
    data,
    formDataState,
    setData,
    setBody,
    formDataState,
  };
}
