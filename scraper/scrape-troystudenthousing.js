// const cheerio = require('cheerio');
// const fetch = require('node-fetch');
import fetch from 'node-fetch'
import * as cheerio from 'cheerio'

/*
 * the things we need:
 * <script type="application/ld+json"> (comes right after entry-content almost.)
 * <div class="entry-content">
 * */

const url = process.env.URL;
fetch(url)
.then((data) => data.text())
.then((text) => cheerio.load(text))
.then((dom) => {
  let entry_content = dom('.entry-content');
  /* let geo_info = dom('#primary');
  console.log(geo_info);
  // geo_info = geo_info.nextSibling.text(); // i want to use textContent, but im not sure if that works..
    // */
  let geo_info = dom('#content');

  console.log(entry_content.html());
  console.log(geo_info);
  // console.log((geo_info));
})
