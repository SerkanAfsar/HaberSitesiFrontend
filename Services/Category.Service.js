import { BaseService } from ".";

export async function GetCategoryListService() {
  return await BaseService({ controllerName: "Categories" });
}

export async function GetCategoryByIdService({ id }) {
  return await BaseService({ controllerName: "Categories", id });
}

export async function AddSingleCategoryService({ body }) {
  return await BaseService({
    controllerName: "Categories",
    method: "POST",
    body,
  });
}

export async function UpdateSingleCategoryService({ body, id }) {
  return await BaseService({
    controllerName: "Categories",
    id,
    body,
    method: "PUT",
  });
}
