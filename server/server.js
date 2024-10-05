import {resolve as pathResolve} from 'node:path'
import {createServer} from 'node:http'
import {readFileSync} from 'node:fs'
// import {default as mysql} from 'mysql'


// want to know exactly what we are giving the user access to.
// We should better organize our source files and static web files before this can be done in
// a more proper way
const static_files = {
  '/': pathResolve('./index.html'),
  '/index.html': pathResolve('./index.html'),
    '/index.js': pathResolve('./index.js'),
    '/index.css': pathResolve('./index.css'),
    '/pfp.svg': pathResolve('./pfp.svg'),
  // '/form.html': pathResolve('./form.html'),
  '/createListing': pathResolve('./createListing.html'),
  '/propertyDetails/propertyDetails.html': pathResolve('./propertyDetails/propertyDetails.html'),
    '/propertyDetails/propertyDetails.css': pathResolve('./propertyDetails/propertyDetails.css'),
  // '/slider.html': pathResolve('./slider.html'),
  // '/template.html': pathResolve('./template.html'),
};

function getMIME(filepath) {
  const defaultMime = 'text/plain';
  const mimes = { '.html': 'text/html', 
                  '.js': 'text/javascript', 
                  '.json': 'application/json', 
                  '.css': 'text/css',
                  '.svg': 'image/svg+xml' };
  if(typeof filepath !== 'string') return defaultMime;
  let ext = filepath.substring(filepath.lastIndexOf('.'));
  if(ext in mimes) return mimes[ext];
  else return defaultMime;
}

if(!('SERVER_HOSTNAME' in process.env)) 
  process.env.SERVER_HOSTNAME = 'http://localhost';
if(!('SERVER_PORT' in process.env)) 
  process.env.SERVER_PORT = '3000';

createServer(async (req, res) => {
  let url = new URL(req.url, process.env.SERVER_HOSTNAME);
  if(url.pathname in static_files) {
    try {
      let data = readFileSync(static_files[url.pathname]);
      res.writeHead(200, {'Content-Type':getMIME(static_files[url.pathname])});
      res.write(data);
    } catch(err) {
      res.writeHead(500, {'Content-Type':'text/plain'});
      res.write('Something went wrong :(');
    }
    res.end();
  } else if(url.pathname.startsWith('/posts')) {
    // For now a dummy response will go here for testing.
    let listings = [];
    for(let _ of [1,2,3])
      listings.push({
        // all of these attributes should be optionally null. that's probably a good idea
        img_url: "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg",
        propery_name: 'Property Name',
        distance: 100, // We'll calculate this somehow probably.
        num_rooms: 4,
        price_per_month: 9*Math.pow(10,9), // We should make this an object like "period": "amount" so for example price: [ 'monthly', 1200 ]
      })

    res.writeHead(200, {'Content-Type':'applicaton/json'});
    res.write(JSON.stringify(listings));
    res.end();
  }
}).listen(JSON.parse(process.env.SERVER_PORT));
