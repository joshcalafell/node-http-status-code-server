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
  response.write("<link href=\"../style.css\" rel=\"stylesheet\" type=\"text/css\"/>");
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
