function helper(context) {
  return context.data.root.query.name + context.data.root.query.suffix;
}
module.exports = helper;
