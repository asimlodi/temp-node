const http = require('http')

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.write('Welcome to our home page')
  }
  if(req.url === '/about'){
    res.end('Here is the our short history')
  }
  if(req.url === '/contact'){
    res.end('Here is Mobile number: ${8523882}')
  }
  res.end(`
   <h1>Oops!</h1>
   <p>cant see more find the page</p>
   <a href="/">back Home page</a>
  `)
})
server.listen(5000)