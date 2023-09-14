"use client";
import FormRolesList from "@/Components/Roles/FormRolesList";
import Form from "@/Components/UI/Form";
import useUIFormBody from "@/Hooks/useUIFormBody";
import { CreateRoleService, UpdateRoleService } from "@/Services/Roles.Service";
import FormItemTypes from "@/Utils/FormItemTypes";
import { CrudTypes, ToastResult } from "@/Utils/helpers";
import { useCallback, useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function AddUpdateRoleContainer({
  roleResult,
  type = CrudTypes.CREATE,
}) {
  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    router.refresh();
  }, [router]);

  const { body, data } = useUIFormBody({
    roleName: {
      name: "roleName",
      value: roleResult?.roleName ?? null,
      type: FormItemTypes.TEXT,
      title: "Rol Adını Giriniz",
      placeholder: "Rol Adını Giriniz",
    },
  });

  const permissionValues = useCallback((type) => {
    return roleResult?.permissionList
      .filter((a) => a.permissionValue.split(".")[1] == type)
      .map((item) => item.permissionValue);
  }, []);

  const [formsList, setFormsList] = useState([
    {
      name: "Kategori",
      permissions: permissionValues("Kategori") ?? [],
    },
    {
      name: "Haber",
      permissions: permissionValues("Haber") ?? [],
    },
    {
      name: "KategoriUrl",
      permissions: permissionValues("KategoriUrl") ?? [],
    },
    {
      name: "SiteAyarları",
      permissions: permissionValues("SiteAyarları") ?? [],
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

    const result =
      type == CrudTypes.CREATE
        ? await CreateRoleService({
            body: { ...data, permissionList },
          })
        : await UpdateRoleService({
            body: { ...data, permissionList },
            id,
          });
    const toastResult = ToastResult({ result, type });
    if (!toastResult) {
      return;
    }
    return router.push("/Admin/Roles", undefined, { shallow: true });
  };

  return (
    <Form
      formElements={body}
      subItems={subItemsList}
      handleSubmit={handleSubmit}
    />
  );
}
