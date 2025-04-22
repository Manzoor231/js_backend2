// wrapper around the async function to avoid trycatch

const asyncHandler = (requestHandler) => (req, res, next) => {
  return Promise.resolve(requestHandler(req, res, next)).catch((error) =>
    next(error)
  );
};

export default asyncHandler