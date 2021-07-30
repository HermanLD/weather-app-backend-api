const isUndefined = (urlParam) => {
  if (urlParam === "undefined" || urlParam === "null") return true;
  return false;
};

module.exports = { isUndefined };
