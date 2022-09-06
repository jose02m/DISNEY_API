export default function error(error, req, res, next) {
  res.json({
    error: {
      name: error.name,
      msg: error.message || undefined,
    },
  });
}
