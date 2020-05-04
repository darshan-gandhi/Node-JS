const request = require('request')

request.post(
  'http://localhost:3000/api/genres',
  {
    json: {
      name: 'Romance'
    }
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