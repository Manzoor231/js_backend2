import ApiError from "./ApiError.js";

const throwIf = (condition, statusCode, message) => {
  if (condition) throw new ApiError(message, statusCode);
};
export default throwIf;
