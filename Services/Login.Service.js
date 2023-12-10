import { BaseService } from ".";

export async function LoginAdminService({ body }) {
  return await BaseService({
    controllerName: "Login",
    absolutePath: true,
    absolutePathUrl: "LoginUser",
    method: "POST",
    body,
  });
}
