import { BaseService } from ".";
export async function CreateRoleService({ body }) {
  return await BaseService({ controllerName: "Roles", method: "Post", body });
}
