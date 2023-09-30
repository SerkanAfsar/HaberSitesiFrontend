export * from "./Category.Service";
export * from "./Roles.Service";
export * from "./CategorySource.Service";
export * from "./News.Service";

const https = require("https");
const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

export const BaseService = async ({
  tokenKey = null,
  method = null,
  id = null,
  body = null,
  controllerName = null,
  absolutePath = false,
  absolutePathUrl = null,
  isFormData = false,
}) => {
  const apiUrl = absolutePath
    ? `${process.env.API_URL}/${controllerName}/${absolutePathUrl}`
    : `${process.env.API_URL}/${controllerName}${id ? `/${id}` : ""} `;

  const headers = {
    Authorization: `Bearer ${tokenKey}`,
  };

  if (!isFormData) {
    headers["Content-Type"] = "application/json; charset=utf-8";
  }

  try {
    const response = await fetch(apiUrl, {
      agent: httpsAgent,
      headers,
      method: method || "GET",
      body: isFormData ? body : body ? JSON.stringify(body) : null,
    });
    const result = await response.json();
    return result;
  } catch (err) {
    return err.message;
  }
};
