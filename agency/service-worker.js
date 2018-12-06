"use strict";
"function" == typeof importScripts &&
  importScripts(
    "//storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js"
  ),
  console.log("Was Workbox able to load?"),
  workbox
    ? console.log("Yay! Workbox is loaded!")
    : console.log("Boo! Workbox didn't load."),
  workbox.googleAnalytics.initialize(),
  workbox.routing.registerRoute(
    /.*\.css/,
    workbox.strategies.staleWhileRevalidate({ cacheName: "css-cache" })
  ),
  workbox.routing.registerRoute(
    /.*\.js/,
    workbox.strategies.staleWhileRevalidate({ cacheName: "js-cache" })
  ),
  workbox.routing.registerRoute(
    /.*\.(?:png|jpg|jpeg|svg|gif)/,
    workbox.strategies.cacheFirst({
      cacheName: "image-cache",
      plugins: [
        new workbox.expiration.Plugin({ maxEntries: 100, maxAgeSeconds: 604800 })
      ]
    })
  ),
  workbox.routing.registerRoute(
    /.*(?:daibuilds)\.com.*$/,
    workbox.strategies.staleWhileRevalidate({ cacheName: "daibuilds-cache" })
  ),
  workbox.routing.registerRoute(
    /.*(?:instagram|cdninstagram|googleapis|gstatic|jquery|lightwidget|feedgrabbr|cloudflare|linearicons|blog.daibuilds)\.com.*$/,
    workbox.strategies.staleWhileRevalidate({ cacheName: "external-cache" })
  );
