"use client";
import styles from "./SingleModule.module.scss";
import InputCheckbox from "../UI/InputCheckbox";
import { useCallback, useEffect, useRef } from "react";
export default function SingleModule({ item, setFormsList }) {
  const createRef = useRef();
  const readRef = useRef();
  const updateRef = useRef();
  const deleteRef = useRef();

  const updateItem = useCallback((e, type) => {
    const permissionName = `Permission.${item.name}.${type}`;
    setFormsList((prev) => {
      const index = prev.findIndex((a) => a.name == item.name);
      let newArr = prev[index].permissions;
      const arrIndex = newArr.findIndex((a) => a == permissionName);

      if (e.target.checked) {
        newArr = [...newArr, permissionName];
      } else {
        newArr.splice(arrIndex, 1);
      }

      return [
        ...prev.slice(0, index),
        {
          ...item,
          permissions: newArr,
        },
        ...prev.slice(index + 1),
      ];
    });
  }, []);

  useEffect(() => {
    if (createRef && createRef.current) {
      createRef.current.addEventListener("click", (e) =>
        updateItem(e, "Create")
      );

      if (item?.permissions.indexOf(`Permission.${item.name}.Create`) > -1) {
        createRef.current.checked = true;
      }

      return () => {
        createRef?.current?.removeEventListener("click", (e) =>
          updateItem(e, "Create")
        );
      };
    }
  }, [createRef]);

  useEffect(() => {
    if (readRef && readRef.current) {
      readRef.current.addEventListener("click", (e) => updateItem(e, "Read"));
      if (item?.permissions.indexOf(`Permission.${item.name}.Read`) > -1) {
        readRef.current.checked = true;
      }
      return () => {
        readRef?.current?.removeEventListener("click", (e) =>
          updateItem(e, "Read")
        );
      };
    }
  }, [readRef]);

  useEffect(() => {
    if (updateRef && updateRef.current) {
      updateRef?.current?.addEventListener("click", (e) =>
        updateItem(e, "Update")
      );
      if (item?.permissions.indexOf(`Permission.${item.name}.Update`) > -1) {
        updateRef.current.checked = true;
      }
      return () => {
        updateRef?.current?.removeEventListener("click", (e) =>
          updateItem(e, "Update")
        );
      };
    }
  }, [updateRef]);

  useEffect(() => {
    if (deleteRef && deleteRef.current) {
      deleteRef.current.addEventListener("click", (e) =>
        updateItem(e, "Delete")
      );
      if (item?.permissions.indexOf(`Permission.${item.name}.Delete`) > -1) {
        deleteRef.current.checked = true;
      }
      return () => {
        deleteRef?.current?.removeEventListener("click", (e) =>
          updateItem(e, "Delete")
        );
      };
    }
  }, [deleteRef]);

  return (
    <div className={styles.roleItem}>
      <h3>{item.name}</h3>
      <InputCheckbox ref={createRef} title={"Yazma"} />
      <InputCheckbox ref={readRef} title={"Okuma"} />
      <InputCheckbox ref={updateRef} title={"Guncelleme"} />
      <InputCheckbox ref={deleteRef} title={"Silme"} />
    </div>
  );
}
