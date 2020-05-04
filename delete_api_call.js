const request = require('request')

request.delete(
  'http://localhost:3000/api/genres/5e98bd92b8b703129fedcbc7',
  {
  },
  (error, res, body) => {
    if (error) {
      console.error(error)
      return
    }
    console.log(`statusCode: ${res.statusCode}`)
    console.log(body)
  }
)