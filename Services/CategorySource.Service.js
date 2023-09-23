import { BaseService } from ".";
export async function AddSingleCategorySourceService({ body }) {
  return await BaseService({
    controllerName: "CategorySources",
    method: "POST",
    body,
  });
}

export async function GetCategorySourcesByPagination({
  sayfa,
  limit,
  categoryId = null,
}) {
  return await BaseService({
    controllerName: "CategorySources",
    absolutePath: true,
    absolutePathUrl: `GetCategorySourcesByPagination/${sayfa}/${limit}${
      categoryId ? `/${categoryId}` : ""
    }`,
  });
}

export async function UpdateSingleCategorySourceService({ body, id }) {
  return await BaseService({
    controllerName: "CategorySources",
    method: "PUT",
    id,
    body,
  });
}

export async function DeleteSingleCategorySourceService({ id }) {
  return await BaseService({
    controllerName: "CategorySources",
    method: "DELETE",
    id,
  });
}
