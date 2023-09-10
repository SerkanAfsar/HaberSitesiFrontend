"use client";
import FormRolesList from "@/Components/Roles/FormRolesList";
import Form from "@/Components/UI/Form";
import useUIFormBody from "@/Hooks/useUIFormBody";
import { CreateRoleService } from "@/Services/Roles.Service";
import FormItemTypes from "@/Utils/FormItemTypes";
import { CrudTypes, ToastResult } from "@/Utils/helpers";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function AddUpdateRoleContainer({ roleResult }) {
  const router = useRouter();
  const { body, data } = useUIFormBody({
    roleName: {
      name: "roleName",
      value: roleResult ? rolesResult?.roleName : null,
      type: FormItemTypes.TEXT,
      title: "Rol Adını Giriniz",
      placeholder: "Rol Adını Giriniz",
    },
  });
  const [formsList, setFormsList] = useState([
    {
      name: "Kategori",
      permissions: [],
    },
    {
      name: "Haber",
      permissions: [],
    },
    {
      name: "KategoriUrl",
      permissions: [],
    },
    {
      name: "SiteAyarları",
      permissions: [],
    },
  ]);

  const subItemsList = (
    <FormRolesList formsList={formsList} setFormsList={setFormsList} />
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const permissionList = formsList.reduce((acc, next) => {
      if (next.permissions && next.permissions.length > 0) {
        next.permissions.forEach((item) => {
          acc.push({ permissionValue: item });
        });
      }
      return acc;
    }, []);

    const result = await CreateRoleService({
      body: { ...data, permissionList },
    });
    const toastResult = ToastResult({ result, type: CrudTypes.CREATE });
    if (!toastResult) {
      return;
    }
    return router.push("/Admin/Roles");
  };

  return (
    <Form
      formElements={body}
      subItems={subItemsList}
      handleSubmit={handleSubmit}
    />
  );
}
