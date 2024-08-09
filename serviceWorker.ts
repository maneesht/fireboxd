import { firebaseConfig } from "@/app/firebaseConfig";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, getIdToken } from "firebase/auth";

// Initialize the Firebase app in the service worker script.
initializeApp(firebaseConfig);

/**
 * Returns a promise that resolves with an ID token if available.
 * @return {!Promise<?string>} The promise that resolves with an ID token if
 *     available. Otherwise, the promise resolves with null.
 */
const auth = getAuth();

const getIdTokenPromise = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      if (user) {
        getIdToken(user).then((idToken) => {
          resolve(idToken);
        }, (error) => {
          resolve(null);
        });
      } else {
        resolve(null);
      }
    });
  });
};
const installEvent = () => {
    self.addEventListener('install', () => {
      console.log('service worker installed');
    });
  };
  installEvent();
  
  const getOriginFromUrl = (url: string) => {
    // https://stackoverflow.com/questions/1420881/how-to-extract-base-url-from-a-string-in-javascript
    const pathArray = url.split('/');
    const protocol = pathArray[0];
    const host = pathArray[2];
    return protocol + '//' + host;
  };
  
  // Get underlying body if available. Works for text and json bodies.
  const getBodyContent = (req: Request) => {
    return Promise.resolve().then(() => {
      if (req.method !== 'GET') {
        if (req.headers.get('Content-Type')?.indexOf('json') !== -1) {
          return req.json()
            .then((json) => {
              return JSON.stringify(json);
            });
        } else {
          return req.text();
        }
      }
    }).catch((error) => {
      // Ignore error.
    });
  };
  
  self.addEventListener('fetch', (event) => {
    console.log('fetch!');
    /** @type {FetchEvent} */
    const evt = event;
  
    const requestProcessor = (idToken: string) => {
      // @ts-ignore
      let req = evt.request;
      let processRequestPromise = Promise.resolve();
      // For same origin https requests, append idToken to header.
      // @ts-ignore
      if (self.location.origin == getOriginFromUrl(evt.request.url) &&
          (self.location.protocol == 'https:' ||
           self.location.hostname == 'localhost') &&
          idToken) {
        // Clone headers as request headers are immutable.
        const headers = new Headers();
        req.headers.forEach((val: string, key: string) => {
          headers.append(key, val);
        });
        // Add ID token to header.
        headers.append('Authorization', 'Bearer ' + idToken);
        processRequestPromise = getBodyContent(req).then((body) => {
          try {
            req = new Request(req.url, {
              method: req.method,
              headers: headers,
              mode: 'same-origin',
              credentials: req.credentials,
              cache: req.cache,
              redirect: req.redirect,
              referrer: req.referrer,
              // @ts-ignore
              body,
              // bodyUsed: req.bodyUsed,
              // context: req.context
            });
          } catch (e) {
            // This will fail for CORS requests. We just continue with the
            // fetch caching logic below and do not pass the ID token.
          }
        });
      }
      return processRequestPromise.then(() => {
        return fetch(req);
      });
    };
    // Fetch the resource after checking for the ID token.
    // This can also be integrated with existing logic to serve cached files
    // in offline mode.
    // @ts-ignore
    evt.respondWith(getIdTokenPromise().then(requestProcessor, requestProcessor));
  });
  self.addEventListener('activate', () =>{
    console.log('active!');
  });
