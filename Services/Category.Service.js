import { BaseService } from ".";

export async function GetCategoryListService() {
  return await BaseService({ controllerName: "Categories" });
}

export async function GetCategoryById({ id }) {
  return await BaseService({ controllerName: "Categories", id });
}
