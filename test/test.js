const tape = require("tape");
const shot = require("shot");
const handler = require("../src/server.js")

tape('first test', (t) => {
  t.equal(true, true, 'true is equal to true');
  t.end();
})

tape('test get request to the / endpoint', t => {
  shot.inject(handler, { method: 'get', url: '/' }, (res) => {
    t.equal(res.statusCode, 200, '/ has status code of 200');
    t.ok(res.payload.includes('<!DOCTYPE'), 'finds index.html file');
    t.equal(res.headers['Content-type'], 'text/html', 'response type is html');
    t.end();
  });
});

// tape('test a get request to the /author endpoint and return the correct to get status code 200', (t) => {
//     const reqObj = new requestObject ("http://eloquentjavascript.net", "/author", "get", "html");
//     const request = http.request(reqObj, function(response) {
//       t.equal(response.statusCode, 200, '/ has status code of 200')
//     })
//     request.end();
//     t.end();
// })

// TODO: Test to see that script.js is being loaded properly,
//Test to see that main.css is being loaded properly
