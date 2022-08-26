const http = require("http")

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("Welcome to our site")
  }

  if (req.url === "/about") {
    return res.end("This is our short history")
  }

  return res.end(`
    <h1>Ooops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">Back to home</a>
  `)
})

server.listen(3000)