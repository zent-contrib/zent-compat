exports.prefix = getPrefix();

function getPrefix() {
  if (process.env.NODE_ENV !== 'production') {
    return '/';
  }

  return '/zent/';
}
