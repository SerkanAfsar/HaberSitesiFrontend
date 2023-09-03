export * from "./Category.Service";
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
}) => {
  const apiUrl = `${process.env.API_URL}/${controllerName}${
    id ? `/${id}` : ""
  } `;

  try {
    const response = await fetch(apiUrl, {
      agent: httpsAgent,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${tokenKey}`,
      },
      method: method || "GET",
      body: body ? JSON.stringify(body) : null,
    });

    const result = await response.json();
    return result;
  } catch (err) {
    return err;
  }
};