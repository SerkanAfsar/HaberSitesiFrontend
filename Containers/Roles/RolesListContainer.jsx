"use client";
import Datatable from "@/Components/Datatable/Datatable";
import { DeleteRoleService } from "@/Services";
import { CrudTypes, ToastResult } from "@/Utils/helpers";
import { useRouter } from "next/navigation";

export default function RoleListContainer({ roleList }) {
  const router = useRouter();
  const headers = {
    RoleId: "RoleId",
    RoleName: "Rol Adı",
  };

  const rolesData = roleList?.map((item, index) => ({
    id: item.roleId,
    RoleName: item.roleName,
  }));

  const handleDelete = async ({ id }) => {
    const result = await DeleteRoleService({ id });
    ToastResult({ result, type: CrudTypes.DELETE });
    router.refresh();
  };
  return (
    <Datatable
      headers={headers}
      data={rolesData}
      handleDelete={handleDelete}
      detailPageUrl={`/Admin/AddRole`}
    />
  );
}
