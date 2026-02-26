module.exports = (req, res, next) => {
  if (req.headers.authorization !== 'pay3-assignment')
    return res.status(401).json({ message: 'Unauthorized' });
  next();
};