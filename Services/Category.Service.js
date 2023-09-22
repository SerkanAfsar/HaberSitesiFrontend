import { BaseService } from ".";

export async function GetCategoryListService({ sayfa, limit }) {
  return await BaseService({
    controllerName: "Categories",
    absolutePath: true,
    absolutePathUrl: `GetCategoriesByPagination/${sayfa}/${limit}`,
  });
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
export async function DeleteSingleCategoryService({ id }) {
  return await BaseService({
    controllerName: "Categories",
    id,
    method: "DELETE",
  });
}
