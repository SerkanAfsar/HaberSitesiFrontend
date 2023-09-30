import { BaseService } from ".";

export async function GetNewsListService({ sayfa, limit }) {
  return await BaseService({
    controllerName: "News",
    absolutePath: true,
    absolutePathUrl: `GetNewsByPagination/${sayfa}/${limit}`,
  });
}
export async function GetAllNewsService() {
  return await BaseService({
    controllerName: "News",
  });
}

export async function GetNewsByIdService({ id }) {
  return await BaseService({ controllerName: "News", id });
}

export async function AddSingleNewsService({ body }) {
  return await BaseService({
    controllerName: "News",
    method: "POST",
    body,
    isFormData: true,
  });
}

export async function UpdateSingleNewsService({ body, id }) {
  return await BaseService({
    controllerName: "News",
    id,
    body,
    method: "PUT",
  });
}
export async function DeleteSingleNewsService({ id }) {
  return await BaseService({
    controllerName: "News",
    id,
    method: "DELETE",
  });
}
