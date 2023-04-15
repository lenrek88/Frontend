// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9ZIyz":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "26170a8763aff760";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"adjPd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _getHours = require("date-fns/getHours");
var _getHoursDefault = parcelHelpers.interopDefault(_getHours);
var _getMinutes = require("date-fns/getMinutes");
var _getMinutesDefault = parcelHelpers.interopDefault(_getMinutes);
// Смена вкладок
let now = document.querySelector("#tab-btn-1");
let details = document.querySelector("#tab-btn-2");
let forecast = document.querySelector("#tab-btn-3");
let locationsSet = new Set();
function displayOn() {
    let contentDivOne = document.querySelector(".content_1");
    let contentDivTwo = document.querySelector(".content_2");
    let contentDivThree = document.querySelector(".content_3");
    switch(this.id){
        case "tab-btn-1":
            contentDivOne.id = "active";
            contentDivTwo.id = "";
            contentDivThree.id = "";
            break;
        case "tab-btn-2":
            contentDivTwo.id = "active";
            contentDivOne.id = "";
            contentDivThree.id = "";
            break;
        case "tab-btn-3":
            contentDivThree.id = "active";
            contentDivTwo.id = "";
            contentDivOne.id = "";
            forecastHandler();
            break;
    }
}
now.addEventListener("click", displayOn);
details.addEventListener("click", displayOn);
forecast.addEventListener("click", displayOn);
// Запрос погоды
let formFinder = document.querySelector(".text");
let thisTemp = document.querySelector(".thisTemp");
let thisCity = document.querySelector(".thisCity");
let thisCloud = document.querySelector(".cloud");
let detailsCity = document.querySelector(".detailsCity");
let detailsTemp = document.querySelector(".detailsTemp");
function fetchData(url) {
    return fetch(url).then((response)=>response.json());
}
async function formFinderHandler(event1, currentCityname) {
    event1.preventDefault();
    let cityName;
    if (event1.type === "submit") cityName = event1.target.firstElementChild.value;
    if (event1.type === "click") cityName = event1.target.textContent;
    if (event1.type === "load") cityName = currentCityname;
    try {
        const serverUrl = "http://api.openweathermap.org/data/2.5/weather";
        const apiKey = "f660a2fb1e4bad108d6160b7f58c555f";
        const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;
        const data = await fetchData(url);
        let temp = Math.round(data.main.temp - 273.15);
        let feelsLike = Math.round(data.main.feels_like - 273.15);
        let weather = data.weather[0].main;
        let sunriseMs = new Date(data.sys.sunrise * 1000);
        let sunsetMs = new Date(data.sys.sunset * 1000);
        let sunrise = ` ${(0, _getHoursDefault.default)(sunriseMs)}:${(0, _getMinutesDefault.default)(sunriseMs)}`;
        let sunset = ` ${(0, _getHoursDefault.default)(sunsetMs)}:${(0, _getMinutesDefault.default)(sunsetMs)}`;
        thisTemp.innerHTML = `${temp} &deg;`;
        thisCity.textContent = cityName;
        let weatherPngSrc = "";
        switch(data.weather[0].icon){
            case "01d":
                weatherPngSrc = "url(http://openweathermap.org/img/wn/01d@2x.png)";
                break;
            case "02d":
                weatherPngSrc = "url(http://openweathermap.org/img/wn/02d@2x.png)";
                break;
            case "03d":
                weatherPngSrc = "url(http://openweathermap.org/img/wn/03d@2x.png)";
                break;
            case "04d":
                weatherPngSrc = "url(http://openweathermap.org/img/wn/04d@2x.png)";
                break;
            case "09d":
                weatherPngSrc = "url(http://openweathermap.org/img/wn/09d@2x.png)";
                break;
            case "10d":
                weatherPngSrc = "url(http://openweathermap.org/img/wn/10d@2x.png)";
                break;
            case "11d":
                weatherPngSrc = "url(http://openweathermap.org/img/wn/11d@2x.png)";
                break;
            case "13d":
                weatherPngSrc = "url(http://openweathermap.org/img/wn/13d@2x.png)";
                break;
            case "50d":
                weatherPngSrc = "url(http://openweathermap.org/img/wn/50d@2x.png)";
                break;
        }
        thisCloud.style.backgroundImage = weatherPngSrc;
        // Details
        detailsCity.textContent = cityName;
        detailsTemp.innerHTML = `
            Temperature: ${temp} ° <br>
            
            Feels like: ${feelsLike} ° <br>
            
            Weather: ${weather} <br>
            
            Sunrise: ${sunrise} <br>
            
            Sunset: ${sunset} <br>
            `;
        forecastHandler();
        console.log(cityName);
        storage.saveCurrentCity(cityName);
    } catch  {
        (error)=>alert(`Ooops.... Ошибка :( \n ${error} `);
    }
}
const MONTH = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
async function forecastHandler() {
    const deleteDiv = document.querySelectorAll(".forecast");
    for (elem of deleteDiv)elem.remove();
    const serverUrl = "http://api.openweathermap.org/data/2.5/forecast";
    const apiKey = "f660a2fb1e4bad108d6160b7f58c555f";
    const url = `${serverUrl}?q=${thisCity.textContent}&appid=${apiKey}`;
    const contentThree = document.querySelector(".content_3");
    const detailsCity = document.querySelector(".detailsCity2");
    detailsCity.textContent = thisCity.textContent;
    const data = await fetchData(url);
    for (const item of data.list){
        const divForecast = document.createElement("div");
        divForecast.className = "forecast";
        const divDate = document.createElement("p");
        divDate.className = "Date";
        divDate.textContent = `${new Date(item.dt * 1000).getDate()} ${MONTH[new Date(item.dt * 1000).getMonth()]}`;
        const divRain = document.createElement("p");
        divRain.className = "rain";
        divRain.textContent = item.weather[0].main;
        const divFeelsTemp = document.createElement("div");
        divFeelsTemp.className = "feelsTemp";
        let feelsLike = item.main.feels_like - 273.15;
        divFeelsTemp.innerHTML = `Feels like: ${Math.floor(feelsLike)} &deg`;
        const divTemp = document.createElement("div");
        divTemp.className = "temp";
        let temp = item.main.temp - 273.15;
        divTemp.innerHTML = `Temperature: ${Math.floor(temp)} &deg`;
        const divTime = document.createElement("p");
        divTime.className = "Time";
        divTime.textContent = `${new Date(item.dt * 1000).getHours() < 10 ? `0${new Date(item.dt * 1000).getHours()}` : new Date(item.dt * 1000).getHours()}:${new Date(item.dt * 1000).getMinutes()}0`;
        const divCloud = document.createElement("div");
        divCloud.className = "thisCloud";
        if (item.weather[0].id === 800) divCloud.style.backgroundImage = "url(https://openweathermap.org/img/wn/01d@2x.png)";
        else if (item.weather[0].id === 801) divCloud.style.backgroundImage = "url(https://openweathermap.org/img/wn/02d@2x.png)";
        else if (item.weather[0].id === 802) divCloud.style.backgroundImage = "url(https://openweathermap.org/img/wn/03d@2x.png)";
        else if (item.weather[0].id === 803 || item.weather[0].id === 804) divCloud.style.backgroundImage = "url(https://openweathermap.org/img/wn/04d@2x.png)";
        else if (item.weather[0].id > 199 && item.weather[0].id < 233) divCloud.style.backgroundImage = "url(https://openweathermap.org/img/wn/11d@2x.png)";
        else if (item.weather[0].id > 299 && item.weather[0].id < 322) divCloud.style.backgroundImage = "url(https://openweathermap.org/img/wn/09d@2x.png)";
        else if (item.weather[0].id > 499 && item.weather[0].id < 505) divCloud.style.backgroundImage = "url(https://openweathermap.org/img/wn/10d@2x.png)";
        else if (item.weather[0].id === 511) divCloud.style.backgroundImage = "url(https://openweathermap.org/img/wn/13d@2x.png)";
        else if (item.weather[0].id > 519 && item.weather[0].id < 532) divCloud.style.backgroundImage = "url(https://openweathermap.org/img/wn/09d@2x.png)";
        else if (item.weather[0].id > 599 && item.weather[0].id < 623) divCloud.style.backgroundImage = "url(https://openweathermap.org/img/wn/09d@2x.png)";
        else if (item.weather[0].id > 700 && item.weather[0].id < 782) divCloud.style.backgroundImage = "url(https://openweathermap.org/img/wn/50d@2x.png)";
        contentThree.append(divForecast);
        divForecast.append(divDate);
        divForecast.append(divTime);
        divForecast.append(divTemp);
        divForecast.append(divRain);
        divForecast.append(divFeelsTemp);
        divForecast.append(divCloud);
    }
}
formFinder.addEventListener("submit", formFinderHandler);
// Added Locations :
// let locationsSet = new Set();
const storage = {
    saveFavoriteCities (favoriteCities) {
        localStorage.setItem("FavoriteCity", JSON.stringify([
            ...favoriteCities
        ]));
    },
    getFavoriteCities () {
        console.log(JSON.parse(localStorage.getItem("FavoriteCity")));
        return new Set(JSON.parse(localStorage.getItem("FavoriteCity")));
    },
    saveCurrentCity (CurrentCity) {
        localStorage.setItem("CurrentCity", JSON.stringify(CurrentCity));
        console.log(CurrentCity);
    },
    getCurrentCity () {
        console.log(localStorage.getItem("CurrentCity"));
        return JSON.parse(localStorage.getItem("CurrentCity"));
    }
};
const likeButton = document.querySelector(".like");
const locations = document.querySelector(".locations");
function reloadLikedItems() {
    const cityLike = document.querySelectorAll(".cityLike");
    for (const item of cityLike)item.remove();
    if (locationsSet) for (const item of locationsSet){
        const newDiv = document.createElement("div");
        const newElem = document.createElement("h2");
        newElem.addEventListener("click", formFinderHandler);
        const deleteElem = document.createElement("button");
        deleteElem.addEventListener("click", deleteItemHandler);
        newDiv.className = "cityLike";
        deleteElem.className = "delete";
        newElem.textContent = item;
        newDiv.appendChild(newElem);
        newDiv.appendChild(deleteElem);
        locations.appendChild(newDiv);
        storage.saveFavoriteCities(locationsSet);
    }
}
function likeButtonHandler() {
    console.log(locationsSet);
    locationsSet.add(thisCity.textContent);
    console.log(locationsSet);
    reloadLikedItems();
}
function deleteItemHandler(event1) {
    let findItem = event1.target.previousSibling.textContent;
    locationsSet.delete(findItem);
    reloadLikedItems();
}
likeButton.addEventListener("click", likeButtonHandler);
window.onload = function() {
    locationsSet = storage.getFavoriteCities();
    if (!locationsSet) locationsSet = new Set();
    reloadLikedItems();
    formFinderHandler(event, storage.getCurrentCity());
};

},{"date-fns/getHours":"k3IR8","date-fns/getMinutes":"4kIX6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k3IR8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function getHours(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var hours = date.getHours();
    return hours;
}
exports.default = getHours;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fsust":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function toDate(argument) {
    (0, _indexJsDefault.default)(1, arguments);
    var argStr = Object.prototype.toString.call(argument); // Clone the date
    if (argument instanceof Date || _typeof(argument) === "object" && argStr === "[object Date]") // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
    else if (typeof argument === "number" || argStr === "[object Number]") return new Date(argument);
    else {
        if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
            // eslint-disable-next-line no-console
            console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console
            console.warn(new Error().stack);
        }
        return new Date(NaN);
    }
}
exports.default = toDate;

},{"../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9wUgQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function requiredArgs(required, args) {
    if (args.length < required) throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
}
exports.default = requiredArgs;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"4kIX6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function getMinutes(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var minutes = date.getMinutes();
    return minutes;
}
exports.default = getMinutes;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["9ZIyz","adjPd"], "adjPd", "parcelRequiree00b")

//# sourceMappingURL=index.63aff760.js.map
