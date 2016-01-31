/**
 * Prints a list of Error Codes
 * Author: J.M.w. <rabbitfighter@cryptolab.net>
 * Usage: In terminal type 'node status-codes.js'
 * Requirements:
 * 1) Install Node 
 * 2) NPM module 'http' (npm install -g http)
 * 2) A modern web browser (localhost:7777)
 */
var http = require('http');
var codes = http.STATUS_CODES;
var PORT = 7777;
var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<!DOCTYPE html>");
  response.write("<html>");
  response.write("<head>");
  response.write("<style>@import url(http://fonts.googleapis.com/css?family=Lato:300,400,700); body{background: #fb887c; color: #fff; font-family: 'Lato', Arial, sans-serif;}h1{font-family: monospace; letter-spacing: -0.01em; font-weight: 700; font-style: normal; font-size: 60px; margin-left: -3px; line-height: 1em; color: #fff; text-align: center; margin-bottom: 8px; text-rendering: optimizeLegibility;}table{width: 80%; margin: auto;}a{margin-left: 10%; color: white} table, th, td{border: 1px solid #fff; border-collapse: collapse;}th, td{padding: 15px;}</style>");
  response.write("<title>HTTP STATUS CODES</title>");
  response.write("</head>");
  response.write("<body>");
  response.write("<h1>HTTP STATUS CODES</h1>");
  response.write("<h4><a href='mailto:rabbitfighter@cryptolab.net'>Written by rabbitfighter</a></h4>");
  response.write("<h4><a href='https:github.com/rabbitfighter81/'>Code on GitHub</a></h4>");
  response.write("<table>");
  response.write("<tr><th>Code</th><th>Status</th></tr>");
  response.write("<tr>");
  for (var code in codes) {
    if (codes.hasOwnProperty(code)) {
      response.write("<tr><td>"+code+"</td><td>"+codes[code]+"</td>");
    }
  }
  response.write("</table>");
  response.write("</body>");
  response.write("</html>");
  response.end();
});
server.listen(PORT);
console.log("Server is listening on http://localhost:" + PORT);
