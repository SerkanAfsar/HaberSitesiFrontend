import { BaseService } from ".";
export async function CreateRoleService({ body }) {
  return await BaseService({ controllerName: "Roles", method: "Post", body });
}

export async function GetAllRolesService() {
  const result = await BaseService({
    controllerName: "Roles",
    method: "Get",
  });

  return result;
}

export async function DeleteRoleService({ id }) {
  const result = await BaseService({
    controllerName: "Roles",
    method: "Delete",
    id,
  });

  return result;
}

export async function GetSingleRoleService({ id }) {
  const result = await BaseService({
    controllerName: "Roles",
    method: "Get",
    id,
  });

  return result;
}
