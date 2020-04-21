const authenticated = (req, res, next) => {
    const username = req.cookies.username
    if (username) {
      next()
    } else {
      res.status(400).send({
        error: 'user not logged in'
      })
    }
  }
  
  module.exports = {
    authenticated}