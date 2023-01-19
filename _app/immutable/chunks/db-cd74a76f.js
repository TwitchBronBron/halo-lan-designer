var Rl=Object.defineProperty;var Sl=(t,e,n)=>e in t?Rl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Yt=(t,e,n)=>(Sl(t,typeof e!="symbol"?e+"":e,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Ul=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Xi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,h=i>>2,u=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),s.push(n[h],n[u],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Qi(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ul(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const u=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||c==null||u==null)throw Error();const d=i<<2|a>>4;if(s.push(d),c!==64){const p=a<<4&240|c>>2;if(s.push(p),u!==64){const E=c<<6&192|u;s.push(E)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Cl=function(t){const e=Qi(t);return Xi.encodeByteArray(e,!0)},hn=function(t){return Cl(t).replace(/\./g,"")},Ll=function(t){try{return Xi.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Yi())}function pm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ym(){const t=Yi();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Al(){try{return typeof indexedDB=="object"}catch{return!1}}function Dl(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function _l(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl=()=>_l().__FIREBASE_DEFAULTS__,Nl=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},xl=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ll(t[1]);return e&&JSON.parse(e)},Ws=()=>{try{return kl()||Nl()||xl()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Pl=t=>{var e,n;return(n=(e=Ws())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ol=t=>{const e=Pl(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Ml=()=>{var t;return(t=Ws())===null||t===void 0?void 0:t.config},wm=t=>{var e;return(e=Ws())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[hn(JSON.stringify(n)),hn(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl="FirebaseError";class et extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=jl,Object.setPrototypeOf(this,et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ji.prototype.create)}}class Ji{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Bl(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new et(r,a,s)}}function Bl(t,e){return t.replace($l,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const $l=/\{\$([^}]+)}/g;function vm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ws(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Kr(i)&&Kr(o)){if(!ws(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Kr(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Tm(t,e){const n=new ql(t,e);return n.subscribe.bind(n)}class ql{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Hl(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=ss),r.error===void 0&&(r.error=ss),r.complete===void 0&&(r.complete=ss);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hl(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ss(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(t){return t&&t._delegate?t._delegate:t}class vt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Fl;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zl(e))try{this.getOrInitializeService({instanceIdentifier:Se})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Se){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Se){return this.instances.has(e)}getOptions(e=Se){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Gl(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Se){return this.component?this.component.multipleInstances?e:Se:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gl(t){return t===Se?void 0:t}function zl(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Kl(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var A;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(A||(A={}));const Ql={debug:A.DEBUG,verbose:A.VERBOSE,info:A.INFO,warn:A.WARN,error:A.ERROR,silent:A.SILENT},Xl=A.INFO,Yl={[A.DEBUG]:"log",[A.VERBOSE]:"log",[A.INFO]:"info",[A.WARN]:"warn",[A.ERROR]:"error"},Jl=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Yl[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zi{constructor(e){this.name=e,this._logLevel=Xl,this._logHandler=Jl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in A))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ql[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,A.DEBUG,...e),this._logHandler(this,A.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,A.VERBOSE,...e),this._logHandler(this,A.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,A.INFO,...e),this._logHandler(this,A.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,A.WARN,...e),this._logHandler(this,A.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,A.ERROR,...e),this._logHandler(this,A.ERROR,...e)}}const Zl=(t,e)=>e.some(n=>t instanceof n);let Gr,zr;function ec(){return Gr||(Gr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tc(){return zr||(zr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const eo=new WeakMap,vs=new WeakMap,to=new WeakMap,rs=new WeakMap,Qs=new WeakMap;function nc(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ge(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&eo.set(n,t)}).catch(()=>{}),Qs.set(e,t),e}function sc(t){if(vs.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});vs.set(t,e)}let Es={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||to.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ge(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function rc(t){Es=t(Es)}function ic(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(is(this),e,...n);return to.set(s,e.sort?e.sort():[e]),ge(s)}:tc().includes(t)?function(...e){return t.apply(is(this),e),ge(eo.get(this))}:function(...e){return ge(t.apply(is(this),e))}}function oc(t){return typeof t=="function"?ic(t):(t instanceof IDBTransaction&&sc(t),Zl(t,ec())?new Proxy(t,Es):t)}function ge(t){if(t instanceof IDBRequest)return nc(t);if(rs.has(t))return rs.get(t);const e=oc(t);return e!==t&&(rs.set(t,e),Qs.set(e,t)),e}const is=t=>Qs.get(t);function ac(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=ge(o);return s&&o.addEventListener("upgradeneeded",l=>{s(ge(o.result),l.oldVersion,l.newVersion,ge(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const lc=["get","getKey","getAll","getAllKeys","count"],cc=["put","add","delete","clear"],os=new Map;function Wr(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(os.get(e))return os.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=cc.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||lc.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return os.set(e,i),i}rc(t=>({...t,get:(e,n,s)=>Wr(e,n)||t.get(e,n,s),has:(e,n)=>!!Wr(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(uc(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function uc(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ts="@firebase/app",Qr="0.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne=new Zi("@firebase/app"),fc="@firebase/app-compat",dc="@firebase/analytics-compat",mc="@firebase/analytics",pc="@firebase/app-check-compat",gc="@firebase/app-check",yc="@firebase/auth",wc="@firebase/auth-compat",vc="@firebase/database",Ec="@firebase/database-compat",Tc="@firebase/functions",bc="@firebase/functions-compat",Ic="@firebase/installations",Rc="@firebase/installations-compat",Sc="@firebase/messaging",Uc="@firebase/messaging-compat",Cc="@firebase/performance",Lc="@firebase/performance-compat",Ac="@firebase/remote-config",Dc="@firebase/remote-config-compat",_c="@firebase/storage",kc="@firebase/storage-compat",Nc="@firebase/firestore",xc="@firebase/firestore-compat",Pc="firebase",Oc="9.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs="[DEFAULT]",Mc={[Ts]:"fire-core",[fc]:"fire-core-compat",[mc]:"fire-analytics",[dc]:"fire-analytics-compat",[gc]:"fire-app-check",[pc]:"fire-app-check-compat",[yc]:"fire-auth",[wc]:"fire-auth-compat",[vc]:"fire-rtdb",[Ec]:"fire-rtdb-compat",[Tc]:"fire-fn",[bc]:"fire-fn-compat",[Ic]:"fire-iid",[Rc]:"fire-iid-compat",[Sc]:"fire-fcm",[Uc]:"fire-fcm-compat",[Cc]:"fire-perf",[Lc]:"fire-perf-compat",[Ac]:"fire-rc",[Dc]:"fire-rc-compat",[_c]:"fire-gcs",[kc]:"fire-gcs-compat",[Nc]:"fire-fst",[xc]:"fire-fst-compat","fire-js":"fire-js",[Pc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=new Map,Is=new Map;function Fc(t,e){try{t.container.addComponent(e)}catch(n){Ne.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fn(t){const e=t.name;if(Is.has(e))return Ne.debug(`There were multiple attempts to register component ${e}.`),!1;Is.set(e,t);for(const n of un.values())Fc(n,t);return!0}function Vc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ye=new Ji("app","Firebase",jc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new vt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ye.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c=Oc;function qc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:bs,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw ye.create("bad-app-name",{appName:String(r)});if(n||(n=Ml()),!n)throw ye.create("no-options");const i=un.get(r);if(i){if(ws(n,i.options)&&ws(s,i.config))return i;throw ye.create("duplicate-app",{appName:r})}const o=new Wl(r);for(const l of Is.values())o.addComponent(l);const a=new Bc(n,s,o);return un.set(r,a),a}function Hc(t=bs){const e=un.get(t);if(!e&&t===bs)return qc();if(!e)throw ye.create("no-app",{appName:t});return e}function dt(t,e,n){var s;let r=(s=Mc[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ne.warn(a.join(" "));return}fn(new vt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc="firebase-heartbeat-database",Gc=1,Et="firebase-heartbeat-store";let as=null;function no(){return as||(as=ac(Kc,Gc,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Et)}}}).catch(t=>{throw ye.create("idb-open",{originalErrorMessage:t.message})})),as}async function zc(t){try{return(await no()).transaction(Et).objectStore(Et).get(so(t))}catch(e){if(e instanceof et)Ne.warn(e.message);else{const n=ye.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ne.warn(n.message)}}}async function Xr(t,e){try{const s=(await no()).transaction(Et,"readwrite");return await s.objectStore(Et).put(e,so(t)),s.done}catch(n){if(n instanceof et)Ne.warn(n.message);else{const s=ye.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ne.warn(s.message)}}}function so(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc=1024,Qc=30*24*60*60*1e3;class Xc{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Jc(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Yr();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Qc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Yr(),{heartbeatsToSend:n,unsentEntries:s}=Yc(this._heartbeatsCache.heartbeats),r=hn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Yr(){return new Date().toISOString().substring(0,10)}function Yc(t,e=Wc){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Jr(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Jr(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Jc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Al()?Dl().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await zc(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Xr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Xr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Jr(t){return hn(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(t){fn(new vt("platform-logger",e=>new hc(e),"PRIVATE")),fn(new vt("heartbeat",e=>new Xc(e),"PRIVATE")),dt(Ts,Qr,t),dt(Ts,Qr,"esm2017"),dt("fire-js","")}Zc("");var eh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},y,Xs=Xs||{},b=eh||self;function dn(){}function Ln(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function kt(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function th(t){return Object.prototype.hasOwnProperty.call(t,ls)&&t[ls]||(t[ls]=++nh)}var ls="closure_uid_"+(1e9*Math.random()>>>0),nh=0;function sh(t,e,n){return t.call.apply(t.bind,arguments)}function rh(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function X(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?X=sh:X=rh,X.apply(null,arguments)}function Jt(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function K(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function be(){this.s=this.s,this.o=this.o}var ih=0;be.prototype.s=!1;be.prototype.na=function(){!this.s&&(this.s=!0,this.M(),ih!=0)&&th(this)};be.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ro=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ys(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Zr(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Ln(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Y(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Y.prototype.h=function(){this.defaultPrevented=!0};var oh=function(){if(!b.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{b.addEventListener("test",dn,e),b.removeEventListener("test",dn,e)}catch{}return t}();function mn(t){return/^[\s\xa0]*$/.test(t)}var ei=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function cs(t,e){return t<e?-1:t>e?1:0}function An(){var t=b.navigator;return t&&(t=t.userAgent)?t:""}function oe(t){return An().indexOf(t)!=-1}function Js(t){return Js[" "](t),t}Js[" "]=dn;function ah(t){var e=hh;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var lh=oe("Opera"),Ke=oe("Trident")||oe("MSIE"),io=oe("Edge"),Rs=io||Ke,oo=oe("Gecko")&&!(An().toLowerCase().indexOf("webkit")!=-1&&!oe("Edge"))&&!(oe("Trident")||oe("MSIE"))&&!oe("Edge"),ch=An().toLowerCase().indexOf("webkit")!=-1&&!oe("Edge");function ao(){var t=b.document;return t?t.documentMode:void 0}var pn;e:{var hs="",us=function(){var t=An();if(oo)return/rv:([^\);]+)(\)|;)/.exec(t);if(io)return/Edge\/([\d\.]+)/.exec(t);if(Ke)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(ch)return/WebKit\/(\S+)/.exec(t);if(lh)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(us&&(hs=us?us[1]:""),Ke){var fs=ao();if(fs!=null&&fs>parseFloat(hs)){pn=String(fs);break e}}pn=hs}var hh={};function uh(){return ah(function(){let t=0;const e=ei(String(pn)).split("."),n=ei("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=cs(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||cs(r[2].length==0,i[2].length==0)||cs(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Ss;if(b.document&&Ke){var ti=ao();Ss=ti||parseInt(pn,10)||void 0}else Ss=void 0;var fh=Ss;function Tt(t,e){if(Y.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(oo){e:{try{Js(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:dh[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Tt.X.h.call(this)}}K(Tt,Y);var dh={2:"touch",3:"pen",4:"mouse"};Tt.prototype.h=function(){Tt.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Nt="closure_listenable_"+(1e6*Math.random()|0),mh=0;function ph(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++mh,this.ba=this.ea=!1}function Dn(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Zs(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function lo(t){const e={};for(const n in t)e[n]=t[n];return e}const ni="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function co(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<ni.length;i++)n=ni[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function _n(t){this.src=t,this.g={},this.h=0}_n.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Cs(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new ph(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function Us(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=ro(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Dn(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Cs(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var er="closure_lm_"+(1e6*Math.random()|0),ds={};function ho(t,e,n,s,r){if(s&&s.once)return fo(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)ho(t,e[i],n,s,r);return null}return n=sr(n),t&&t[Nt]?t.N(e,n,kt(s)?!!s.capture:!!s,r):uo(t,e,n,!1,s,r)}function uo(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=kt(r)?!!r.capture:!!r,a=nr(t);if(a||(t[er]=a=new _n(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=gh(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)oh||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(po(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function gh(){function t(n){return e.call(t.src,t.listener,n)}const e=yh;return t}function fo(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)fo(t,e[i],n,s,r);return null}return n=sr(n),t&&t[Nt]?t.O(e,n,kt(s)?!!s.capture:!!s,r):uo(t,e,n,!0,s,r)}function mo(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)mo(t,e[i],n,s,r);else s=kt(s)?!!s.capture:!!s,n=sr(n),t&&t[Nt]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Cs(i,n,s,r),-1<n&&(Dn(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=nr(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Cs(e,n,s,r)),(n=-1<t?e[t]:null)&&tr(n))}function tr(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Nt])Us(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(po(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=nr(e))?(Us(n,t),n.h==0&&(n.src=null,e[er]=null)):Dn(t)}}}function po(t){return t in ds?ds[t]:ds[t]="on"+t}function yh(t,e){if(t.ba)t=!0;else{e=new Tt(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&tr(t),t=n.call(s,e)}return t}function nr(t){return t=t[er],t instanceof _n?t:null}var ms="__closure_events_fn_"+(1e9*Math.random()>>>0);function sr(t){return typeof t=="function"?t:(t[ms]||(t[ms]=function(e){return t.handleEvent(e)}),t[ms])}function $(){be.call(this),this.i=new _n(this),this.P=this,this.I=null}K($,be);$.prototype[Nt]=!0;$.prototype.removeEventListener=function(t,e,n,s){mo(this,t,e,n,s)};function H(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Y(e,t);else if(e instanceof Y)e.target=e.target||t;else{var r=e;e=new Y(s,t),co(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Zt(o,s,!0,e)&&r}if(o=e.g=t,r=Zt(o,s,!0,e)&&r,r=Zt(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Zt(o,s,!1,e)&&r}$.prototype.M=function(){if($.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Dn(n[s]);delete t.g[e],t.h--}}this.I=null};$.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};$.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Zt(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Us(t.i,o),r=a.call(l,s)!==!1&&r}}return r&&!s.defaultPrevented}var rr=b.JSON.stringify;function wh(){var t=wo;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class vh{constructor(){this.h=this.g=null}add(e,n){const s=go.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var go=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Eh,t=>t.reset());class Eh{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Th(t){b.setTimeout(()=>{throw t},0)}function yo(t,e){Ls||bh(),As||(Ls(),As=!0),wo.add(t,e)}var Ls;function bh(){var t=b.Promise.resolve(void 0);Ls=function(){t.then(Ih)}}var As=!1,wo=new vh;function Ih(){for(var t;t=wh();){try{t.h.call(t.g)}catch(n){Th(n)}var e=go;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}As=!1}function kn(t,e){$.call(this),this.h=t||1,this.g=e||b,this.j=X(this.lb,this),this.l=Date.now()}K(kn,$);y=kn.prototype;y.ca=!1;y.R=null;y.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),H(this,"tick"),this.ca&&(ir(this),this.start()))}};y.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ir(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}y.M=function(){kn.X.M.call(this),ir(this),delete this.g};function or(t,e,n){if(typeof t=="function")n&&(t=X(t,n));else if(t&&typeof t.handleEvent=="function")t=X(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:b.setTimeout(t,e||0)}function vo(t){t.g=or(()=>{t.g=null,t.i&&(t.i=!1,vo(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Rh extends be{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:vo(this)}M(){super.M(),this.g&&(b.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bt(t){be.call(this),this.h=t,this.g={}}K(bt,be);var si=[];function Eo(t,e,n,s){Array.isArray(n)||(n&&(si[0]=n.toString()),n=si);for(var r=0;r<n.length;r++){var i=ho(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function To(t){Zs(t.g,function(e,n){this.g.hasOwnProperty(n)&&tr(e)},t),t.g={}}bt.prototype.M=function(){bt.X.M.call(this),To(this)};bt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Nn(){this.g=!0}Nn.prototype.Aa=function(){this.g=!1};function Sh(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var h=c[0];c=c[1];var u=h.split("_");o=2<=u.length&&u[1]=="type"?o+(h+"="+c+"&"):o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function Uh(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function $e(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Lh(t,n)+(s?" "+s:"")})}function Ch(t,e){t.info(function(){return"TIMEOUT: "+e})}Nn.prototype.info=function(){};function Lh(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return rr(n)}catch{return e}}var Oe={},ri=null;function xn(){return ri=ri||new $}Oe.Pa="serverreachability";function bo(t){Y.call(this,Oe.Pa,t)}K(bo,Y);function It(t){const e=xn();H(e,new bo(e))}Oe.STAT_EVENT="statevent";function Io(t,e){Y.call(this,Oe.STAT_EVENT,t),this.stat=e}K(Io,Y);function Z(t){const e=xn();H(e,new Io(e,t))}Oe.Qa="timingevent";function Ro(t,e){Y.call(this,Oe.Qa,t),this.size=e}K(Ro,Y);function xt(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return b.setTimeout(function(){t()},e)}var Pn={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},So={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ar(){}ar.prototype.h=null;function ii(t){return t.h||(t.h=t.i())}function Uo(){}var Pt={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function lr(){Y.call(this,"d")}K(lr,Y);function cr(){Y.call(this,"c")}K(cr,Y);var Ds;function On(){}K(On,ar);On.prototype.g=function(){return new XMLHttpRequest};On.prototype.i=function(){return{}};Ds=new On;function Ot(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new bt(this),this.O=Ah,t=Rs?125:void 0,this.T=new kn(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Co}function Co(){this.i=null,this.g="",this.h=!1}var Ah=45e3,_s={},gn={};y=Ot.prototype;y.setTimeout=function(t){this.O=t};function ks(t,e,n){t.K=1,t.v=Fn(fe(e)),t.s=n,t.P=!0,Lo(t,null)}function Lo(t,e){t.F=Date.now(),Mt(t),t.A=fe(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Oo(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Co,t.g=sa(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Rh(X(t.La,t,t.g),t.N)),Eo(t.S,t.g,"readystatechange",t.ib),e=t.H?lo(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),It(),Sh(t.j,t.u,t.A,t.m,t.U,t.s)}y.ib=function(t){t=t.target;const e=this.L;e&&ue(t)==3?e.l():this.La(t)};y.La=function(t){try{if(t==this.g)e:{const h=ue(this.g);var e=this.g.Ea();const u=this.g.aa();if(!(3>h)&&(h!=3||Rs||this.g&&(this.h.h||this.g.fa()||ci(this.g)))){this.I||h!=4||e==7||(e==8||0>=u?It(3):It(2)),Mn(this);var n=this.g.aa();this.Y=n;t:if(Ao(this)){var s=ci(this.g);t="";var r=s.length,i=ue(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ue(this),mt(this);var o="";break t}this.h.i=new b.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Uh(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!mn(a)){var c=a;break t}}c=null}if(n=c)$e(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ns(this,n);else{this.i=!1,this.o=3,Z(12),Ue(this),mt(this);break e}}this.P?(Do(this,h,o),Rs&&this.i&&h==3&&(Eo(this.S,this.T,"tick",this.hb),this.T.start())):($e(this.j,this.m,o,null),Ns(this,o)),h==4&&Ue(this),this.i&&!this.I&&(h==4?Zo(this.l,this):(this.i=!1,Mt(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Z(12)):(this.o=0,Z(13)),Ue(this),mt(this)}}}catch{}finally{}};function Ao(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Do(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=Dh(t,n),r==gn){e==4&&(t.o=4,Z(14),s=!1),$e(t.j,t.m,null,"[Incomplete Response]");break}else if(r==_s){t.o=4,Z(15),$e(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else $e(t.j,t.m,r,null),Ns(t,r);Ao(t)&&r!=gn&&r!=_s&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Z(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),gr(e),e.K=!0,Z(11))):($e(t.j,t.m,n,"[Invalid Chunked Response]"),Ue(t),mt(t))}y.hb=function(){if(this.g){var t=ue(this.g),e=this.g.fa();this.C<e.length&&(Mn(this),Do(this,t,e),this.i&&t!=4&&Mt(this))}};function Dh(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?gn:(n=Number(e.substring(n,s)),isNaN(n)?_s:(s+=1,s+n>e.length?gn:(e=e.substr(s,n),t.C=s+n,e)))}y.cancel=function(){this.I=!0,Ue(this)};function Mt(t){t.V=Date.now()+t.O,_o(t,t.O)}function _o(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=xt(X(t.gb,t),e)}function Mn(t){t.B&&(b.clearTimeout(t.B),t.B=null)}y.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Ch(this.j,this.A),this.K!=2&&(It(),Z(17)),Ue(this),this.o=2,mt(this)):_o(this,this.V-t)};function mt(t){t.l.G==0||t.I||Zo(t.l,t)}function Ue(t){Mn(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ir(t.T),To(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ns(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||xs(n.h,t))){if(!t.J&&xs(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)vn(n),Bn(n);else break e;pr(n),Z(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=xt(X(n.cb,n),6e3));if(1>=Vo(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Ce(n,11)}else if((t.J||n.g==t)&&vn(n),!mn(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const h=c[3];h!=null&&(n.ma=h,n.j.info("VER="+n.ma));const u=c[4];u!=null&&(n.Ca=u,n.j.info("SVER="+n.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const E=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var i=s.h;i.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(hr(i,i.h),i.h=null))}if(s.D){const S=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;S&&(s.za=S,N(s.F,s.D,S))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=na(s,s.H?s.ka:null,s.V),o.J){jo(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(Mn(a),Mt(a)),s.g=o}else Yo(s);0<n.i.length&&$n(n)}else c[0]!="stop"&&c[0]!="close"||Ce(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Ce(n,7):mr(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}It(4)}catch{}}function _h(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ln(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function kh(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ln(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function ko(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ln(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=kh(t),s=_h(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var No=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Nh(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ae(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ae){this.h=e!==void 0?e:t.h,yn(this,t.j),this.s=t.s,this.g=t.g,wn(this,t.m),this.l=t.l,e=t.i;var n=new Rt;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),oi(this,n),this.o=t.o}else t&&(n=String(t).match(No))?(this.h=!!e,yn(this,n[1]||"",!0),this.s=ct(n[2]||""),this.g=ct(n[3]||"",!0),wn(this,n[4]),this.l=ct(n[5]||"",!0),oi(this,n[6]||"",!0),this.o=ct(n[7]||"")):(this.h=!!e,this.i=new Rt(null,this.h))}Ae.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ht(e,ai,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ht(e,ai,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ht(n,n.charAt(0)=="/"?Oh:Ph,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ht(n,Fh)),t.join("")};function fe(t){return new Ae(t)}function yn(t,e,n){t.j=n?ct(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function wn(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function oi(t,e,n){e instanceof Rt?(t.i=e,Vh(t.i,t.h)):(n||(e=ht(e,Mh)),t.i=new Rt(e,t.h))}function N(t,e,n){t.i.set(e,n)}function Fn(t){return N(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ct(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ht(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,xh),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function xh(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ai=/[#\/\?@]/g,Ph=/[#\?:]/g,Oh=/[#\?]/g,Mh=/[#\?@]/g,Fh=/#/g;function Rt(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ie(t){t.g||(t.g=new Map,t.h=0,t.i&&Nh(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}y=Rt.prototype;y.add=function(t,e){Ie(this),this.i=null,t=tt(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function xo(t,e){Ie(t),e=tt(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Po(t,e){return Ie(t),e=tt(t,e),t.g.has(e)}y.forEach=function(t,e){Ie(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};y.oa=function(){Ie(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};y.W=function(t){Ie(this);let e=[];if(typeof t=="string")Po(this,t)&&(e=e.concat(this.g.get(tt(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};y.set=function(t,e){return Ie(this),this.i=null,t=tt(this,t),Po(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};y.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Oo(t,e,n){xo(t,e),0<n.length&&(t.i=null,t.g.set(tt(t,e),Ys(n)),t.h+=n.length)}y.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function tt(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Vh(t,e){e&&!t.j&&(Ie(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(xo(this,s),Oo(this,r,n))},t)),t.j=e}var jh=class{constructor(e,n){this.h=e,this.g=n}};function Mo(t){this.l=t||Bh,b.PerformanceNavigationTiming?(t=b.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(b.g&&b.g.Ga&&b.g.Ga()&&b.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Bh=10;function Fo(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Vo(t){return t.h?1:t.g?t.g.size:0}function xs(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function hr(t,e){t.g?t.g.add(e):t.h=e}function jo(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Mo.prototype.cancel=function(){if(this.i=Bo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Bo(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Ys(t.i)}function ur(){}ur.prototype.stringify=function(t){return b.JSON.stringify(t,void 0)};ur.prototype.parse=function(t){return b.JSON.parse(t,void 0)};function $h(){this.g=new ur}function qh(t,e,n){const s=n||"";try{ko(t,function(r,i){let o=r;kt(r)&&(o=rr(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function Hh(t,e){const n=new Nn;if(b.Image){const s=new Image;s.onload=Jt(en,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Jt(en,n,s,"TestLoadImage: error",!1,e),s.onabort=Jt(en,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Jt(en,n,s,"TestLoadImage: timeout",!1,e),b.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function en(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Ft(t){this.l=t.ac||null,this.j=t.jb||!1}K(Ft,ar);Ft.prototype.g=function(){return new Vn(this.l,this.j)};Ft.prototype.i=function(t){return function(){return t}}({});function Vn(t,e){$.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=fr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}K(Vn,$);var fr=0;y=Vn.prototype;y.open=function(t,e){if(this.readyState!=fr)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,St(this)};y.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||b).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vt(this)),this.readyState=fr};y.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,St(this)),this.g&&(this.readyState=3,St(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof b.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;$o(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function $o(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}y.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Vt(this):St(this),this.readyState==3&&$o(this)}};y.Va=function(t){this.g&&(this.response=this.responseText=t,Vt(this))};y.Ua=function(t){this.g&&(this.response=t,Vt(this))};y.ga=function(){this.g&&Vt(this)};function Vt(t){t.readyState=4,t.l=null,t.j=null,t.A=null,St(t)}y.setRequestHeader=function(t,e){this.v.append(t,e)};y.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};y.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function St(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Vn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Kh=b.JSON.parse;function x(t){$.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=qo,this.K=this.L=!1}K(x,$);var qo="",Gh=/^https?$/i,zh=["POST","PUT"];y=x.prototype;y.Ka=function(t){this.L=t};y.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ds.g(),this.C=this.u?ii(this.u):ii(Ds),this.g.onreadystatechange=X(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){li(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=b.FormData&&t instanceof b.FormData,!(0<=ro(zh,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Go(this),0<this.B&&((this.K=Wh(this.g))?(this.g.timeout=this.B,this.g.ontimeout=X(this.qa,this)):this.A=or(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){li(this,i)}};function Wh(t){return Ke&&uh()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}y.qa=function(){typeof Xs<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,H(this,"timeout"),this.abort(8))};function li(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ho(t),jn(t)}function Ho(t){t.D||(t.D=!0,H(t,"complete"),H(t,"error"))}y.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,H(this,"complete"),H(this,"abort"),jn(this))};y.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),jn(this,!0)),x.X.M.call(this)};y.Ha=function(){this.s||(this.F||this.v||this.l?Ko(this):this.fb())};y.fb=function(){Ko(this)};function Ko(t){if(t.h&&typeof Xs<"u"&&(!t.C[1]||ue(t)!=4||t.aa()!=2)){if(t.v&&ue(t)==4)or(t.Ha,0,t);else if(H(t,"readystatechange"),ue(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(No)[1]||null;if(!r&&b.self&&b.self.location){var i=b.self.location.protocol;r=i.substr(0,i.length-1)}s=!Gh.test(r?r.toLowerCase():"")}n=s}if(n)H(t,"complete"),H(t,"success");else{t.m=6;try{var o=2<ue(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Ho(t)}}finally{jn(t)}}}}function jn(t,e){if(t.g){Go(t);const n=t.g,s=t.C[0]?dn:null;t.g=null,t.C=null,e||H(t,"ready");try{n.onreadystatechange=s}catch{}}}function Go(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(b.clearTimeout(t.A),t.A=null)}function ue(t){return t.g?t.g.readyState:0}y.aa=function(){try{return 2<ue(this)?this.g.status:-1}catch{return-1}};y.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};y.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Kh(e)}};function ci(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case qo:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}y.Ea=function(){return this.m};y.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function zo(t){let e="";return Zs(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function dr(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=zo(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):N(t,e,n))}function lt(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Wo(t){this.Ca=0,this.i=[],this.j=new Nn,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=lt("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=lt("baseRetryDelayMs",5e3,t),this.bb=lt("retryDelaySeedMs",1e4,t),this.$a=lt("forwardChannelMaxRetries",2,t),this.ta=lt("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Mo(t&&t.concurrentRequestLimit),this.Fa=new $h,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}y=Wo.prototype;y.ma=8;y.G=1;function mr(t){if(Qo(t),t.G==3){var e=t.U++,n=fe(t.F);N(n,"SID",t.I),N(n,"RID",e),N(n,"TYPE","terminate"),jt(t,n),e=new Ot(t,t.j,e,void 0),e.K=2,e.v=Fn(fe(n)),n=!1,b.navigator&&b.navigator.sendBeacon&&(n=b.navigator.sendBeacon(e.v.toString(),"")),!n&&b.Image&&(new Image().src=e.v,n=!0),n||(e.g=sa(e.l,null),e.g.da(e.v)),e.F=Date.now(),Mt(e)}ta(t)}function Bn(t){t.g&&(gr(t),t.g.cancel(),t.g=null)}function Qo(t){Bn(t),t.u&&(b.clearTimeout(t.u),t.u=null),vn(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&b.clearTimeout(t.m),t.m=null)}function $n(t){Fo(t.h)||t.m||(t.m=!0,yo(t.Ja,t),t.C=0)}function Qh(t,e){return Vo(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=xt(X(t.Ja,t,e),ea(t,t.C)),t.C++,!0)}y.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Ot(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=lo(i),co(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Xo(this,r,e),n=fe(this.F),N(n,"RID",t),N(n,"CVER",22),this.D&&N(n,"X-HTTP-Session-Id",this.D),jt(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(zo(i)))+"&"+e:this.o&&dr(n,this.o,i)),hr(this.h,r),this.Ya&&N(n,"TYPE","init"),this.O?(N(n,"$req",e),N(n,"SID","null"),r.Z=!0,ks(r,n,null)):ks(r,n,e),this.G=2}}else this.G==3&&(t?hi(this,t):this.i.length==0||Fo(this.h)||hi(this))};function hi(t,e){var n;e?n=e.m:n=t.U++;const s=fe(t.F);N(s,"SID",t.I),N(s,"RID",n),N(s,"AID",t.T),jt(t,s),t.o&&t.s&&dr(s,t.o,t.s),n=new Ot(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Xo(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),hr(t.h,n),ks(n,s,e)}function jt(t,e){t.ia&&Zs(t.ia,function(n,s){N(e,s,n)}),t.l&&ko({},function(n,s){N(e,s,n)})}function Xo(t,e,n){n=Math.min(t.i.length,n);var s=t.l?X(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=r[l].h;const h=r[l].g;if(c-=i,0>c)i=Math.max(0,r[l].h-100),a=!1;else try{qh(h,o,"req"+c+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Yo(t){t.g||t.u||(t.Z=1,yo(t.Ia,t),t.A=0)}function pr(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=xt(X(t.Ia,t),ea(t,t.A)),t.A++,!0)}y.Ia=function(){if(this.u=null,Jo(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=xt(X(this.eb,this),t)}};y.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Z(10),Bn(this),Jo(this))};function gr(t){t.B!=null&&(b.clearTimeout(t.B),t.B=null)}function Jo(t){t.g=new Ot(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=fe(t.sa);N(e,"RID","rpc"),N(e,"SID",t.I),N(e,"CI",t.L?"0":"1"),N(e,"AID",t.T),N(e,"TYPE","xmlhttp"),jt(t,e),t.o&&t.s&&dr(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Fn(fe(e)),n.s=null,n.P=!0,Lo(n,t)}y.cb=function(){this.v!=null&&(this.v=null,Bn(this),pr(this),Z(19))};function vn(t){t.v!=null&&(b.clearTimeout(t.v),t.v=null)}function Zo(t,e){var n=null;if(t.g==e){vn(t),gr(t),t.g=null;var s=2}else if(xs(t.h,e))n=e.D,jo(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=xn(),H(s,new Ro(s,n)),$n(t)}else Yo(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&Qh(t,e)||s==2&&pr(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Ce(t,5);break;case 4:Ce(t,10);break;case 3:Ce(t,6);break;default:Ce(t,2)}}}function ea(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Ce(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=X(t.kb,t);n||(n=new Ae("//www.google.com/images/cleardot.gif"),b.location&&b.location.protocol=="http"||yn(n,"https"),Fn(n)),Hh(n.toString(),s)}else Z(2);t.G=0,t.l&&t.l.va(e),ta(t),Qo(t)}y.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Z(2)):(this.j.info("Failed to ping google.com"),Z(1))};function ta(t){if(t.G=0,t.la=[],t.l){const e=Bo(t.h);(e.length!=0||t.i.length!=0)&&(Zr(t.la,e),Zr(t.la,t.i),t.h.i.length=0,Ys(t.i),t.i.length=0),t.l.ua()}}function na(t,e,n){var s=n instanceof Ae?fe(n):new Ae(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),wn(s,s.m);else{var r=b.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Ae(null,void 0);s&&yn(i,s),e&&(i.g=e),r&&wn(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&N(s,n,e),N(s,"VER",t.ma),jt(t,s),s}function sa(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new x(new Ft({jb:!0})):new x(t.ra),e.Ka(t.H),e}function ra(){}y=ra.prototype;y.xa=function(){};y.wa=function(){};y.va=function(){};y.ua=function(){};y.Ra=function(){};function En(){if(Ke&&!(10<=Number(fh)))throw Error("Environmental error: no available transport.")}En.prototype.g=function(t,e){return new se(t,e)};function se(t,e){$.call(this),this.g=new Wo(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!mn(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!mn(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new nt(this)}K(se,$);se.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Z(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=na(t,null,t.V),$n(t)};se.prototype.close=function(){mr(this.g)};se.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=rr(t),t=n);e.i.push(new jh(e.ab++,t)),e.G==3&&$n(e)};se.prototype.M=function(){this.g.l=null,delete this.j,mr(this.g),delete this.g,se.X.M.call(this)};function ia(t){lr.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}K(ia,lr);function oa(){cr.call(this),this.status=1}K(oa,cr);function nt(t){this.g=t}K(nt,ra);nt.prototype.xa=function(){H(this.g,"a")};nt.prototype.wa=function(t){H(this.g,new ia(t))};nt.prototype.va=function(t){H(this.g,new oa)};nt.prototype.ua=function(){H(this.g,"b")};En.prototype.createWebChannel=En.prototype.g;se.prototype.send=se.prototype.u;se.prototype.open=se.prototype.m;se.prototype.close=se.prototype.close;Pn.NO_ERROR=0;Pn.TIMEOUT=8;Pn.HTTP_ERROR=6;So.COMPLETE="complete";Uo.EventType=Pt;Pt.OPEN="a";Pt.CLOSE="b";Pt.ERROR="c";Pt.MESSAGE="d";$.prototype.listen=$.prototype.N;x.prototype.listenOnce=x.prototype.O;x.prototype.getLastError=x.prototype.Oa;x.prototype.getLastErrorCode=x.prototype.Ea;x.prototype.getStatus=x.prototype.aa;x.prototype.getResponseJson=x.prototype.Sa;x.prototype.getResponseText=x.prototype.fa;x.prototype.send=x.prototype.da;x.prototype.setWithCredentials=x.prototype.Ka;var Xh=function(){return new En},Yh=function(){return xn()},ps=Pn,Jh=So,Zh=Oe,ui={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},eu=Ft,tn=Uo,tu=x;const fi="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}z.UNAUTHENTICATED=new z(null),z.GOOGLE_CREDENTIALS=new z("google-credentials-uid"),z.FIRST_PARTY=new z("first-party-uid"),z.MOCK_USER=new z("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let st="9.15.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe=new Zi("@firebase/firestore");function di(){return xe.logLevel}function w(t,...e){if(xe.logLevel<=A.DEBUG){const n=e.map(yr);xe.debug(`Firestore (${st}): ${t}`,...n)}}function de(t,...e){if(xe.logLevel<=A.ERROR){const n=e.map(yr);xe.error(`Firestore (${st}): ${t}`,...n)}}function Ps(t,...e){if(xe.logLevel<=A.WARN){const n=e.map(yr);xe.warn(`Firestore (${st}): ${t}`,...n)}}function yr(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(t="Unexpected state"){const e=`FIRESTORE (${st}) INTERNAL ASSERTION FAILED: `+t;throw de(e),new Error(e)}function _(t,e){t||T()}function R(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class g extends et{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(z.UNAUTHENTICATED))}shutdown(){}}class su{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ru{constructor(e){this.t=e,this.currentUser=z.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let i=new De;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new De,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{w("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(w("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new De)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(w("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(_(typeof s.accessToken=="string"),new aa(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return _(e===null||typeof e=="string"),new z(e)}}class iu{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=z.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(_(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class ou{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new iu(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(z.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class au{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lu{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&w("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,w("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{w("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):w("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(_(typeof n.token=="string"),this.A=n.token,new au(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=cu(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function D(t,e){return t<e?-1:t>e?1:0}function Ge(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new g(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new g(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new g(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new g(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return F.fromMillis(Date.now())}static fromDate(e){return F.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new F(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?D(this.nanoseconds,e.nanoseconds):D(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.timestamp=e}static fromTimestamp(e){return new I(e)}static min(){return new I(new F(0,0))}static max(){return new I(new F(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,n,s){n===void 0?n=0:n>e.length&&T(),s===void 0?s=e.length-n:s>e.length-n&&T(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Ut.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ut?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class k extends Ut{construct(e,n,s){return new k(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new g(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new k(n)}static emptyPath(){return new k([])}}const hu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Q extends Ut{construct(e,n,s){return new Q(e,n,s)}static isValidIdentifier(e){return hu.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Q.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Q(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new g(f.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new g(f.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new g(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new g(f.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Q(n)}static emptyPath(){return new Q([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(e){this.path=e}static fromPath(e){return new v(k.fromString(e))}static fromName(e){return new v(k.fromString(e).popFirst(5))}static empty(){return new v(k.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&k.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return k.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new v(new k(e.slice()))}}function uu(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=I.fromTimestamp(s===1e9?new F(n+1,0):new F(n,s));return new ve(r,v.empty(),e)}function fu(t){return new ve(t.readTime,t.key,-1)}class ve{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ve(I.min(),v.empty(),-1)}static max(){return new ve(I.max(),v.empty(),-1)}}function du(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=v.comparator(t.documentKey,e.documentKey),n!==0?n:D(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pu{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bt(t){if(t.code!==f.FAILED_PRECONDITION||t.message!==mu)throw t;w("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&T(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new m((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof m?n:m.resolve(n)}catch(n){return m.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):m.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):m.reject(n)}static resolve(e){return new m((n,s)=>{n(e)})}static reject(e){return new m((n,s)=>{s(e)})}static waitFor(e){return new m((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},l=>s(l))}),o=!0,i===r&&n()})}static or(e){let n=m.resolve(!1);for(const s of e)n=n.next(r=>r?m.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new m((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(h=>{o[c]=h,++a,a===i&&s(o)},h=>r(h))}})}static doWhile(e,n){return new m((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function $t(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}wr.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,n,s,r,i,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Ct{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ct("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ct&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Me(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ca(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t){return t==null}function Tn(t){return t===0&&1/t==-1/0}function yu(t){return typeof t=="number"&&Number.isInteger(t)&&!Tn(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new J(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new J(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return D(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}J.EMPTY_BYTE_STRING=new J("");const wu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ee(t){if(_(!!t),typeof t=="string"){let e=0;const n=wu.exec(t);if(_(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:O(t.seconds),nanos:O(t.nanos)}}function O(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ze(t){return typeof t=="string"?J.fromBase64String(t):J.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ua(t){const e=t.mapValue.fields.__previous_value__;return ha(e)?ua(e):e}function Lt(t){const e=Ee(t.mapValue.fields.__local_write_time__.timestampValue);return new F(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Pe(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ha(t)?4:vu(t)?9007199254740991:10:T()}function he(t,e){if(t===e)return!0;const n=Pe(t);if(n!==Pe(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Lt(t).isEqual(Lt(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Ee(s.timestampValue),o=Ee(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return ze(s.bytesValue).isEqual(ze(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return O(s.geoPointValue.latitude)===O(r.geoPointValue.latitude)&&O(s.geoPointValue.longitude)===O(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return O(s.integerValue)===O(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=O(s.doubleValue),o=O(r.doubleValue);return i===o?Tn(i)===Tn(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Ge(t.arrayValue.values||[],e.arrayValue.values||[],he);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(mi(i)!==mi(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!he(i[a],o[a])))return!1;return!0}(t,e);default:return T()}}function At(t,e){return(t.values||[]).find(n=>he(n,e))!==void 0}function We(t,e){if(t===e)return 0;const n=Pe(t),s=Pe(e);if(n!==s)return D(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return D(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=O(r.integerValue||r.doubleValue),a=O(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return pi(t.timestampValue,e.timestampValue);case 4:return pi(Lt(t),Lt(e));case 5:return D(t.stringValue,e.stringValue);case 6:return function(r,i){const o=ze(r),a=ze(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=D(o[l],a[l]);if(c!==0)return c}return D(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=D(O(r.latitude),O(i.latitude));return o!==0?o:D(O(r.longitude),O(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=We(o[l],a[l]);if(c)return c}return D(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===nn.mapValue&&i===nn.mapValue)return 0;if(r===nn.mapValue)return 1;if(i===nn.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),l=i.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let h=0;h<a.length&&h<c.length;++h){const u=D(a[h],c[h]);if(u!==0)return u;const d=We(o[a[h]],l[c[h]]);if(d!==0)return d}return D(a.length,c.length)}(t.mapValue,e.mapValue);default:throw T()}}function pi(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return D(t,e);const n=Ee(t),s=Ee(e),r=D(n.seconds,s.seconds);return r!==0?r:D(n.nanos,s.nanos)}function Qe(t){return Os(t)}function Os(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Ee(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ze(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,v.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Os(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Os(s.fields[a])}`;return i+"}"}(t.mapValue):T();var e,n}function gi(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ms(t){return!!t&&"integerValue"in t}function vr(t){return!!t&&"arrayValue"in t}function yi(t){return!!t&&"nullValue"in t}function wi(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function rn(t){return!!t&&"mapValue"in t}function pt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Me(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=pt(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=pt(t.arrayValue.values[n]);return e}return Object.assign({},t)}function vu(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,n){this.position=e,this.inclusive=n}}function vi(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=v.comparator(v.fromName(o.referenceValue),n.key):s=We(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ei(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!he(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{}class M extends fa{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new bu(e,n,s):n==="array-contains"?new Su(e,s):n==="in"?new Uu(e,s):n==="not-in"?new Cu(e,s):n==="array-contains-any"?new Lu(e,s):new M(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new Iu(e,s):new Ru(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(We(n,this.value)):n!==null&&Pe(this.value)===Pe(n)&&this.matchesComparison(We(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return T()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ie extends fa{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new ie(e,n)}matches(e){return da(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function da(t){return t.op==="and"}function Eu(t){return Tu(t)&&da(t)}function Tu(t){for(const e of t.filters)if(e instanceof ie)return!1;return!0}function ma(t){if(t instanceof M)return t.field.canonicalString()+t.op.toString()+Qe(t.value);{const e=t.filters.map(n=>ma(n)).join(",");return`${t.op}(${e})`}}function pa(t,e){return t instanceof M?function(n,s){return s instanceof M&&n.op===s.op&&n.field.isEqual(s.field)&&he(n.value,s.value)}(t,e):t instanceof ie?function(n,s){return s instanceof ie&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&pa(i,s.filters[o]),!0):!1}(t,e):void T()}function ga(t){return t instanceof M?function(e){return`${e.field.canonicalString()} ${e.op} ${Qe(e.value)}`}(t):t instanceof ie?function(e){return e.op.toString()+" {"+e.getFilters().map(ga).join(" ,")+"}"}(t):"Filter"}class bu extends M{constructor(e,n,s){super(e,n,s),this.key=v.fromName(s.referenceValue)}matches(e){const n=v.comparator(e.key,this.key);return this.matchesComparison(n)}}class Iu extends M{constructor(e,n){super(e,"in",n),this.keys=ya("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Ru extends M{constructor(e,n){super(e,"not-in",n),this.keys=ya("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ya(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>v.fromName(s.referenceValue))}class Su extends M{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return vr(n)&&At(n.arrayValue,this.value)}}class Uu extends M{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&At(this.value.arrayValue,n)}}class Cu extends M{constructor(e,n){super(e,"not-in",n)}matches(e){if(At(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!At(this.value.arrayValue,n)}}class Lu extends M{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!vr(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>At(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n="asc"){this.field=e,this.dir=n}}function Au(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,n){this.comparator=e,this.root=n||q.EMPTY}insert(e,n){return new j(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,q.BLACK,null,null))}remove(e){return new j(this.comparator,this.root.remove(e,this.comparator).copy(null,null,q.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new sn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new sn(this.root,e,this.comparator,!1)}getReverseIterator(){return new sn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new sn(this.root,e,this.comparator,!0)}}class sn{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class q{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??q.RED,this.left=r??q.EMPTY,this.right=i??q.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new q(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return q.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return q.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,q.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,q.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw T();const e=this.left.check();if(e!==this.right.check())throw T();return e+(this.isRed()?0:1)}}q.EMPTY=null,q.RED=!0,q.BLACK=!1;q.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(t,e,n,s,r){return this}insert(t,e,n){return new q(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.comparator=e,this.data=new j(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ti(this.data.getIterator())}getIteratorFrom(e){return new Ti(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof V)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new V(this.comparator);return n.data=e,n}}class Ti{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.fields=e,e.sort(Q.comparator)}static empty(){return new re([])}unionWith(e){let n=new V(Q.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new re(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ge(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.value=e}static empty(){return new ee({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!rn(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=pt(n)}setAll(e){let n=Q.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=pt(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());rn(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return he(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];rn(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Me(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new ee(pt(this.value))}}function wa(t){const e=[];return Me(t.fields,(n,s)=>{const r=new Q([n]);if(rn(s)){const i=wa(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new re(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new W(e,0,I.min(),I.min(),I.min(),ee.empty(),0)}static newFoundDocument(e,n,s,r){return new W(e,1,n,I.min(),s,r,0)}static newNoDocument(e,n){return new W(e,2,n,I.min(),I.min(),ee.empty(),0)}static newUnknownDocument(e,n){return new W(e,3,n,I.min(),I.min(),ee.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(I.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ee.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ee.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=I.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof W&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new W(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function bi(t,e=null,n=[],s=[],r=null,i=null,o=null){return new Du(t,e,n,s,r,i,o)}function Er(t){const e=R(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>ma(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),qn(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Qe(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Qe(s)).join(",")),e.ft=n}return e.ft}function Tr(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Au(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!pa(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ei(t.startAt,e.startAt)&&Ei(t.endAt,e.endAt)}function Fs(t){return v.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function _u(t,e,n,s,r,i,o,a){return new qt(t,e,n,s,r,i,o,a)}function br(t){return new qt(t)}function Ii(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function va(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ir(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Ea(t){return t.collectionGroup!==null}function qe(t){const e=R(t);if(e.dt===null){e.dt=[];const n=Ir(e),s=va(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new gt(n)),e.dt.push(new gt(Q.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new gt(Q.keyField(),i))}}}return e.dt}function me(t){const e=R(t);if(!e._t)if(e.limitType==="F")e._t=bi(e.path,e.collectionGroup,qe(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of qe(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new gt(i.field,o))}const s=e.endAt?new bn(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new bn(e.startAt.position,e.startAt.inclusive):null;e._t=bi(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function Vs(t,e){e.getFirstInequalityField(),Ir(t);const n=t.filters.concat([e]);return new qt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function js(t,e,n){return new qt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Hn(t,e){return Tr(me(t),me(e))&&t.limitType===e.limitType}function Ta(t){return`${Er(me(t))}|lt:${t.limitType}`}function Bs(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>ga(s)).join(", ")}]`),qn(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Qe(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Qe(s)).join(",")),`Target(${n})`}(me(t))}; limitType=${t.limitType})`}function Rr(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):v.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of qe(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=vi(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,qe(n),s)||n.endAt&&!function(r,i,o){const a=vi(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,qe(n),s))}(t,e)}function ku(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ba(t){return(e,n)=>{let s=!1;for(const r of qe(t)){const i=Nu(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Nu(t,e,n){const s=t.field.isKeyField()?v.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),l=o.data.field(r);return a!==null&&l!==null?We(a,l):T()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return T()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tn(e)?"-0":e}}function Ra(t){return{integerValue:""+t}}function xu(t,e){return yu(e)?Ra(e):Ia(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(){this._=void 0}}function Pu(t,e,n){return t instanceof In?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Xe?Ua(t,e):t instanceof Dt?Ca(t,e):function(s,r){const i=Sa(s,r),o=Ri(i)+Ri(s.gt);return Ms(i)&&Ms(s.gt)?Ra(o):Ia(s.yt,o)}(t,e)}function Ou(t,e,n){return t instanceof Xe?Ua(t,e):t instanceof Dt?Ca(t,e):n}function Sa(t,e){return t instanceof Rn?Ms(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class In extends Kn{}class Xe extends Kn{constructor(e){super(),this.elements=e}}function Ua(t,e){const n=La(e);for(const s of t.elements)n.some(r=>he(r,s))||n.push(s);return{arrayValue:{values:n}}}class Dt extends Kn{constructor(e){super(),this.elements=e}}function Ca(t,e){let n=La(e);for(const s of t.elements)n=n.filter(r=>!he(r,s));return{arrayValue:{values:n}}}class Rn extends Kn{constructor(e,n){super(),this.yt=e,this.gt=n}}function Ri(t){return O(t.integerValue||t.doubleValue)}function La(t){return vr(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,n){this.field=e,this.transform=n}}function Fu(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Xe&&s instanceof Xe||n instanceof Dt&&s instanceof Dt?Ge(n.elements,s.elements,he):n instanceof Rn&&s instanceof Rn?he(n.gt,s.gt):n instanceof In&&s instanceof In}(t.transform,e.transform)}class Vu{constructor(e,n){this.version=e,this.transformResults=n}}class ae{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ae}static exists(e){return new ae(void 0,e)}static updateTime(e){return new ae(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function on(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Gn{}function Aa(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new _a(t.key,ae.none()):new Ht(t.key,t.data,ae.none());{const n=t.data,s=ee.empty();let r=new V(Q.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Re(t.key,s,new re(r.toArray()),ae.none())}}function ju(t,e,n){t instanceof Ht?function(s,r,i){const o=s.value.clone(),a=Ui(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Re?function(s,r,i){if(!on(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Ui(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Da(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function yt(t,e,n,s){return t instanceof Ht?function(r,i,o,a){if(!on(r.precondition,i))return o;const l=r.value.clone(),c=Ci(r.fieldTransforms,a,i);return l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof Re?function(r,i,o,a){if(!on(r.precondition,i))return o;const l=Ci(r.fieldTransforms,a,i),c=i.data;return c.setAll(Da(r)),c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(t,e,n,s):function(r,i,o){return on(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function Bu(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Sa(s.transform,r||null);i!=null&&(n===null&&(n=ee.empty()),n.set(s.field,i))}return n||null}function Si(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ge(n,s,(r,i)=>Fu(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ht extends Gn{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Re extends Gn{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Da(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Ui(t,e,n){const s=new Map;_(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Ou(o,a,n[r]))}return s}function Ci(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Pu(i,o,e))}return s}class _a extends Gn{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $u extends Gn{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var P,C;function Hu(t){switch(t){default:return T();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function ka(t){if(t===void 0)return de("GRPC error has no .code"),f.UNKNOWN;switch(t){case P.OK:return f.OK;case P.CANCELLED:return f.CANCELLED;case P.UNKNOWN:return f.UNKNOWN;case P.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case P.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case P.INTERNAL:return f.INTERNAL;case P.UNAVAILABLE:return f.UNAVAILABLE;case P.UNAUTHENTICATED:return f.UNAUTHENTICATED;case P.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case P.NOT_FOUND:return f.NOT_FOUND;case P.ALREADY_EXISTS:return f.ALREADY_EXISTS;case P.PERMISSION_DENIED:return f.PERMISSION_DENIED;case P.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case P.ABORTED:return f.ABORTED;case P.OUT_OF_RANGE:return f.OUT_OF_RANGE;case P.UNIMPLEMENTED:return f.UNIMPLEMENTED;case P.DATA_LOSS:return f.DATA_LOSS;default:return T()}}(C=P||(P={}))[C.OK=0]="OK",C[C.CANCELLED=1]="CANCELLED",C[C.UNKNOWN=2]="UNKNOWN",C[C.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",C[C.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",C[C.NOT_FOUND=5]="NOT_FOUND",C[C.ALREADY_EXISTS=6]="ALREADY_EXISTS",C[C.PERMISSION_DENIED=7]="PERMISSION_DENIED",C[C.UNAUTHENTICATED=16]="UNAUTHENTICATED",C[C.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",C[C.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",C[C.ABORTED=10]="ABORTED",C[C.OUT_OF_RANGE=11]="OUT_OF_RANGE",C[C.UNIMPLEMENTED=12]="UNIMPLEMENTED",C[C.INTERNAL=13]="INTERNAL",C[C.UNAVAILABLE=14]="UNAVAILABLE",C[C.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Me(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return ca(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku=new j(v.comparator);function pe(){return Ku}const Na=new j(v.comparator);function ut(...t){let e=Na;for(const n of t)e=e.insert(n.key,n);return e}function xa(t){let e=Na;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Le(){return wt()}function Pa(){return wt()}function wt(){return new rt(t=>t.toString(),(t,e)=>t.isEqual(e))}const Gu=new j(v.comparator),zu=new V(v.comparator);function U(...t){let e=zu;for(const n of t)e=e.add(n);return e}const Wu=new V(D);function Oa(){return Wu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Kt.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new zn(I.min(),r,Oa(),pe(),U())}}class Kt{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Kt(s,n,U(),U(),U())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class Ma{constructor(e,n){this.targetId=e,this.Et=n}}class Fa{constructor(e,n,s=J.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Li{constructor(){this.At=0,this.Rt=Di(),this.bt=J.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=U(),n=U(),s=U();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:T()}}),new Kt(this.bt,this.Pt,e,n,s)}xt(){this.vt=!1,this.Rt=Di()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class Qu{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=pe(),this.qt=Ai(),this.Ut=new V(D)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const s=this.Wt(n);switch(e.state){case 0:this.zt(n)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:T()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.zt(r)&&n(r)})}Jt(e){const n=e.targetId,s=e.Et.count,r=this.Yt(n);if(r){const i=r.target;if(Fs(i))if(s===0){const o=new v(i.path);this.Qt(n,o,W.newNoDocument(o,I.min()))}else _(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&Fs(a.target)){const l=new v(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,W.newNoDocument(l,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=U();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Yt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new zn(e,n,this.Ut,this.Lt,s);return this.Lt=pe(),this.qt=Ai(),this.Ut=new V(D),r}Gt(e,n){if(!this.zt(e))return;const s=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.zt(e))return;const r=this.Wt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new Li,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new V(D),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||w("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Li),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function Ai(){return new j(v.comparator)}function Di(){return new j(v.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Yu=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Ju=(()=>({and:"AND",or:"OR"}))();class Zu{constructor(e,n){this.databaseId=e,this.wt=n}}function Sn(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Va(t,e){return t.wt?e.toBase64():e.toUint8Array()}function ef(t,e){return Sn(t,e.toTimestamp())}function le(t){return _(!!t),I.fromTimestamp(function(e){const n=Ee(e);return new F(n.seconds,n.nanos)}(t))}function Sr(t,e){return function(n){return new k(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function ja(t){const e=k.fromString(t);return _(Ha(e)),e}function $s(t,e){return Sr(t.databaseId,e.path)}function gs(t,e){const n=ja(e);if(n.get(1)!==t.databaseId.projectId)throw new g(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new g(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new v(Ba(n))}function qs(t,e){return Sr(t.databaseId,e)}function tf(t){const e=ja(t);return e.length===4?k.emptyPath():Ba(e)}function Hs(t){return new k(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ba(t){return _(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function _i(t,e,n){return{name:$s(t,e),fields:n.value.mapValue.fields}}function nf(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:T()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(l,c){return l.wt?(_(c===void 0||typeof c=="string"),J.fromBase64String(c||"")):(_(c===void 0||c instanceof Uint8Array),J.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?f.UNKNOWN:ka(l.code);return new g(c,l.message||"")}(o);n=new Fa(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=gs(t,s.document.name),i=le(s.document.updateTime),o=s.document.createTime?le(s.document.createTime):I.min(),a=new ee({mapValue:{fields:s.document.fields}}),l=W.newFoundDocument(r,i,o,a),c=s.targetIds||[],h=s.removedTargetIds||[];n=new an(c,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=gs(t,s.document),i=s.readTime?le(s.readTime):I.min(),o=W.newNoDocument(r,i),a=s.removedTargetIds||[];n=new an([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=gs(t,s.document),i=s.removedTargetIds||[];n=new an([],i,r,null)}else{if(!("filter"in e))return T();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new qu(r),o=s.targetId;n=new Ma(o,i)}}return n}function sf(t,e){let n;if(e instanceof Ht)n={update:_i(t,e.key,e.value)};else if(e instanceof _a)n={delete:$s(t,e.key)};else if(e instanceof Re)n={update:_i(t,e.key,e.data),updateMask:df(e.fieldMask)};else{if(!(e instanceof $u))return T();n={verify:$s(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof In)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Xe)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Dt)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Rn)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw T()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:ef(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:T()}(t,e.precondition)),n}function rf(t,e){return t&&t.length>0?(_(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?le(s.updateTime):le(r);return i.isEqual(I.min())&&(i=le(r)),new Vu(i,s.transformResults||[])}(n,e))):[]}function of(t,e){return{documents:[qs(t,e.path)]}}function af(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=qs(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=qs(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(l){if(l.length!==0)return qa(ie.create(l,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:je(h.field),direction:hf(h.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(l,c){return l.wt||qn(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function lf(t){let e=tf(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){_(s===1);const h=n.from[0];h.allDescendants?r=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(h){const u=$a(h);return u instanceof ie&&Eu(u)?u.getFilters():[u]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(u){return new gt(Be(u.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(u.direction))}(h)));let a=null;n.limit&&(a=function(h){let u;return u=typeof h=="object"?h.value:h,qn(u)?null:u}(n.limit));let l=null;n.startAt&&(l=function(h){const u=!!h.before,d=h.values||[];return new bn(d,u)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const u=!h.before,d=h.values||[];return new bn(d,u)}(n.endAt)),_u(e,r,o,i,a,"F",l,c)}function cf(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return T()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function $a(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Be(e.unaryFilter.field);return M.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Be(e.unaryFilter.field);return M.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Be(e.unaryFilter.field);return M.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Be(e.unaryFilter.field);return M.create(i,"!=",{nullValue:"NULL_VALUE"});default:return T()}}(t):t.fieldFilter!==void 0?function(e){return M.create(Be(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return T()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return ie.create(e.compositeFilter.filters.map(n=>$a(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return T()}}(e.compositeFilter.op))}(t):T()}function hf(t){return Xu[t]}function uf(t){return Yu[t]}function ff(t){return Ju[t]}function je(t){return{fieldPath:t.canonicalString()}}function Be(t){return Q.fromServerFormat(t.fieldPath)}function qa(t){return t instanceof M?function(e){if(e.op==="=="){if(wi(e.value))return{unaryFilter:{field:je(e.field),op:"IS_NAN"}};if(yi(e.value))return{unaryFilter:{field:je(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(wi(e.value))return{unaryFilter:{field:je(e.field),op:"IS_NOT_NAN"}};if(yi(e.value))return{unaryFilter:{field:je(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:je(e.field),op:uf(e.op),value:e.value}}}(t):t instanceof ie?function(e){const n=e.getFilters().map(s=>qa(s));return n.length===1?n[0]:{compositeFilter:{op:ff(e.op),filters:n}}}(t):T()}function df(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ha(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&ju(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=yt(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=yt(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Pa();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const l=Aa(o,a);l!==null&&s.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(I.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),U())}isEqual(e){return this.batchId===e.batchId&&Ge(this.mutations,e.mutations,(n,s)=>Si(n,s))&&Ge(this.baseMutations,e.baseMutations,(n,s)=>Si(n,s))}}class Ur{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){_(e.mutations.length===s.length);let r=Gu;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Ur(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e,n,s,r,i=I.min(),o=I.min(),a=J.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new _e(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new _e(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new _e(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e){this.ie=e}}function yf(t){const e=lf({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?js(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(){this.Je=new vf}addToCollectionParentIndex(e,n){return this.Je.add(n),m.resolve()}getCollectionParents(e,n){return m.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return m.resolve()}deleteFieldIndex(e,n){return m.resolve()}getDocumentsMatchingTarget(e,n){return m.resolve(null)}getIndexType(e,n){return m.resolve(0)}getFieldIndexes(e,n){return m.resolve([])}getNextCollectionGroupToUpdate(e){return m.resolve(null)}getMinOffset(e,n){return m.resolve(ve.min())}getMinOffsetFromCollectionGroup(e,n){return m.resolve(ve.min())}updateCollectionGroup(e,n,s){return m.resolve()}updateIndexEntries(e,n){return m.resolve()}}class vf{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new V(k.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new V(k.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Ye(0)}static vn(){return new Ye(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(){this.changes=new rt(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,W.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?m.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&yt(s.mutation,r,re.empty(),F.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,U()).next(()=>s))}getLocalViewOfDocuments(e,n,s=U()){const r=Le();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=ut();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Le();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,U()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=pe();const o=wt(),a=wt();return n.forEach((l,c)=>{const h=s.get(c.key);r.has(c.key)&&(h===void 0||h.mutation instanceof Re)?i=i.insert(c.key,c):h!==void 0&&(o.set(c.key,h.mutation.getFieldMask()),yt(h.mutation,c,h.mutation.getFieldMask(),F.now()))}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var u;return a.set(c,new Tf(h,(u=o.get(c))!==null&&u!==void 0?u:null))}),a))}recalculateAndSaveOverlays(e,n){const s=wt();let r=new j((o,a)=>o-a),i=U();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let h=s.get(l)||re.empty();h=a.applyToLocalView(c,h),s.set(l,h);const u=(r.get(a.batchId)||U()).add(l);r=r.insert(a.batchId,u)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,u=Pa();h.forEach(d=>{if(!i.has(d)){const p=Aa(n.get(d),s.get(d));p!==null&&u.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,u))}return m.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return v.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Ea(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):m.resolve(Le());let a=-1,l=i;return o.next(c=>m.forEach(c,(h,u)=>(a<u.largestBatchId&&(a=u.largestBatchId),i.get(h)?m.resolve():this.remoteDocumentCache.getEntry(e,h).next(d=>{l=l.insert(h,d)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,U())).next(h=>({batchId:a,changes:xa(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new v(n)).next(s=>{let r=ut();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=ut();return this.indexManager.getCollectionParents(e,r).next(o=>m.forEach(o,a=>{const l=function(c,h){return new qt(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((h,u)=>{i=i.insert(h,u)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,W.newInvalidDocument(c)))});let o=ut();return r.forEach((a,l)=>{const c=i.get(a);c!==void 0&&yt(c.mutation,l,re.empty(),F.now()),Rr(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return m.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:le(s.createTime)}),m.resolve()}getNamedQuery(e,n){return m.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:yf(s.bundledQuery),readTime:le(s.readTime)}}(n)),m.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(){this.overlays=new j(v.comparator),this.es=new Map}getOverlay(e,n){return m.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Le();return m.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.oe(e,n,i)}),m.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),m.resolve()}getOverlaysForCollection(e,n,s){const r=Le(),i=n.length+1,o=new v(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>s&&r.set(l.getKey(),l)}return m.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new j((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let h=i.get(c.largestBatchId);h===null&&(h=Le(),i=i.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Le(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=r)););return m.resolve(a)}oe(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new pf(n,s));let i=this.es.get(n);i===void 0&&(i=U(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(){this.ns=new V(B.ss),this.rs=new V(B.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new B(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new B(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new v(new k([])),s=new B(n,e),r=new B(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new v(new k([])),s=new B(n,e),r=new B(n,e+1);let i=U();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new B(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class B{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return v.comparator(e.key,n.key)||D(e._s,n._s)}static os(e,n){return D(e._s,n._s)||v.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new V(B.ss)}checkEmpty(e){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new mf(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new B(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(e,n){return m.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return m.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new B(n,0),r=new B(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),m.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new V(D);return n.forEach(r=>{const i=new B(r,0),o=new B(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),m.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;v.isDocumentKey(i)||(i=i.child(""));const o=new B(new v(i),0);let a=new V(D);return this.gs.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===r&&(a=a.add(l._s)),!0)},o),m.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){_(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return m.forEach(n.mutations,r=>{const i=new B(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new B(n,0),r=this.gs.firstAfterOrEqual(s);return m.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,m.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e){this.Es=e,this.docs=new j(v.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return m.resolve(s?s.document.mutableCopy():W.newInvalidDocument(n))}getEntries(e,n){let s=pe();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():W.newInvalidDocument(r))}),m.resolve(s)}getAllFromCollection(e,n,s){let r=pe();const i=new v(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||du(fu(l),s)<=0||(r=r.insert(l.key,l.mutableCopy()))}return m.resolve(r)}getAllFromCollectionGroup(e,n,s,r){T()}As(e,n){return m.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Cf(this)}getSize(e){return m.resolve(this.size)}}class Cf extends Ef{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),m.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(e){this.persistence=e,this.Rs=new rt(n=>Er(n),Tr),this.lastRemoteSnapshotVersion=I.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Cr,this.targetCount=0,this.vs=Ye.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),m.resolve()}getLastRemoteSnapshotVersion(e){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return m.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),m.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Ye(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,m.resolve()}updateTargetData(e,n){return this.Dn(n),m.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,m.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),m.waitFor(i).next(()=>r)}getTargetCount(e){return m.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return m.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),m.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),m.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),m.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return m.resolve(s)}containsKey(e,n){return m.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new wr(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Lf(this),this.indexManager=new wf,this.remoteDocumentCache=function(s){return new Uf(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new gf(n),this.Ns=new If(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Rf,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new Sf(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){w("MemoryPersistence","Starting transaction:",e);const r=new Df(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,n){return m.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class Df extends pu{constructor(e){super(),this.currentSequenceNumber=e}}class Lr{constructor(e){this.persistence=e,this.Fs=new Cr,this.$s=null}static Bs(e){return new Lr(e)}get Ls(){if(this.$s)return this.$s;throw T()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),m.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),m.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),m.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.Ls,s=>{const r=v.fromPath(s);return this.qs(e,r).next(i=>{i||n.removeEntry(r,I.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return m.or([()=>m.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=U(),r=U();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ar(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Mi(e,n))}ki(e,n){if(Ii(n))return m.resolve(null);let s=me(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=js(n,null,"F"),s=me(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=U(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Fi(n,a);return this.$i(n,c,o,l.readTime)?this.ki(e,js(n,null,"F")):this.Bi(e,c,n,l)}))})))}Oi(e,n,s,r){return Ii(n)||r.isEqual(I.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(e,n):(di()<=A.DEBUG&&w("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Bs(n)),this.Bi(e,o,n,uu(r,-1)))})}Fi(e,n){let s=new V(ba(e));return n.forEach((r,i)=>{Rr(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,n){return di()<=A.DEBUG&&w("QueryEngine","Using full collection scan to execute query:",Bs(n)),this.Ni.getDocumentsMatchingQuery(e,n,ve.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.yt=r,this.qi=new j(D),this.Ui=new rt(i=>Er(i),Tr),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bf(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function Nf(t,e,n,s){return new kf(t,e,n,s)}async function Ka(t,e){const n=R(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let l=U();for(const c of r){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of i){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(s,l).next(c=>({ji:c,removedBatchIds:o,addedBatchIds:a}))})})}function xf(t,e){const n=R(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const h=l.batch,u=h.keys();let d=m.resolve();return u.forEach(p=>{d=d.next(()=>c.getEntry(a,p)).next(E=>{const S=l.docVersions.get(p);_(S!==null),E.version.compareTo(S)<0&&(h.applyToRemoteDocument(E,l),E.isValidDocument()&&(E.setReadTime(l.commitVersion),c.addEntry(E)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=U();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Ga(t){const e=R(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function Pf(t,e){const n=R(t),s=e.snapshotVersion;let r=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.qi;const a=[];e.targetChanges.forEach((h,u)=>{const d=r.get(u);if(!d)return;a.push(n.Cs.removeMatchingKeys(i,h.removedDocuments,u).next(()=>n.Cs.addMatchingKeys(i,h.addedDocuments,u)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(u)?p=p.withResumeToken(J.EMPTY_BYTE_STRING,I.min()).withLastLimboFreeSnapshotVersion(I.min()):h.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(h.resumeToken,s)),r=r.insert(u,p),function(E,S,L){return E.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(d,p,h)&&a.push(n.Cs.updateTargetData(i,p))});let l=pe(),c=U();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(Of(i,o,e.documentUpdates).next(h=>{l=h.Wi,c=h.zi})),!s.isEqual(I.min())){const h=n.Cs.getLastRemoteSnapshotVersion(i).next(u=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(h)}return m.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.qi=r,i))}function Of(t,e,n){let s=U(),r=U();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=pe();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(r=r.add(a)),l.isNoDocument()&&l.version.isEqual(I.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):w("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Wi:o,zi:r}})}function Mf(t,e){const n=R(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Ff(t,e){const n=R(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,m.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new _e(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.qi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(e,s.targetId)),s})}async function Ks(t,e,n){const s=R(t),r=s.qi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!$t(o))throw o;w("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(r.target)}function ki(t,e,n){const s=R(t);let r=I.min(),i=U();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const h=R(a),u=h.Ui.get(c);return u!==void 0?m.resolve(h.qi.get(u)):h.Cs.getTargetData(l,c)}(s,o,me(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:I.min(),n?i:U())).next(a=>(Vf(s,ku(e),a),{documents:a,Hi:i})))}function Vf(t,e,n){let s=t.Ki.get(e)||I.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class Ni{constructor(){this.activeTargetIds=Oa()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jf{constructor(){this.Lr=new Ni,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Ni,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){w("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){w("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,r,i){const o=this.ho(e,n);w("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(l=>(w("RestConnection","Received: ",l),l),l=>{throw Ps("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",s),l})}_o(e,n,s,r,i,o){return this.ao(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+st,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=$f[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new tu;a.setWithCredentials(!0),a.listenOnce(Jh.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case ps.NO_ERROR:const c=a.getResponseJson();w("Connection","XHR received:",JSON.stringify(c)),i(c);break;case ps.TIMEOUT:w("Connection",'RPC "'+e+'" timed out'),o(new g(f.DEADLINE_EXCEEDED,"Request time out"));break;case ps.HTTP_ERROR:const h=a.getStatus();if(w("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){let u=a.getResponseJson();Array.isArray(u)&&(u=u[0]);const d=u==null?void 0:u.error;if(d&&d.status&&d.message){const p=function(E){const S=E.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(S)>=0?S:f.UNKNOWN}(d.status);o(new g(p,d.message))}else o(new g(f.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new g(f.UNAVAILABLE,"Connection failed."));break;default:T()}}finally{w("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(r);a.send(n,"POST",l,s,15)})}wo(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Xh(),o=Yh(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new eu({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const l=r.join("");w("Connection","Creating WebChannel: "+l,a);const c=i.createWebChannel(l,a);let h=!1,u=!1;const d=new qf({Hr:E=>{u?w("Connection","Not sending because WebChannel is closed:",E):(h||(w("Connection","Opening WebChannel transport."),c.open(),h=!0),w("Connection","WebChannel sending:",E),c.send(E))},Jr:()=>c.close()}),p=(E,S,L)=>{E.listen(S,ne=>{try{L(ne)}catch(G){setTimeout(()=>{throw G},0)}})};return p(c,tn.EventType.OPEN,()=>{u||w("Connection","WebChannel transport opened.")}),p(c,tn.EventType.CLOSE,()=>{u||(u=!0,w("Connection","WebChannel transport closed"),d.io())}),p(c,tn.EventType.ERROR,E=>{u||(u=!0,Ps("Connection","WebChannel transport errored:",E),d.io(new g(f.UNAVAILABLE,"The operation could not be completed")))}),p(c,tn.EventType.MESSAGE,E=>{var S;if(!u){const L=E.data[0];_(!!L);const ne=L,G=ne.error||((S=ne[0])===null||S===void 0?void 0:S.error);if(G){w("Connection","WebChannel received error:",G);const Qt=G.status;let Ve=function(Il){const Hr=P[Il];if(Hr!==void 0)return ka(Hr)}(Qt),Xt=G.message;Ve===void 0&&(Ve=f.INTERNAL,Xt="Unknown error status: "+Qt+" with message "+G.message),u=!0,d.io(new g(Ve,Xt)),c.close()}else w("Connection","WebChannel received:",L),d.ro(L)}}),p(o,Zh.STAT_EVENT,E=>{E.stat===ui.PROXY?w("Connection","Detected buffering proxy"):E.stat===ui.NOPROXY&&w("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function ys(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t){return new Zu(t,!0)}class za{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&w("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,n,s,r,i,o,a,l){this.Hs=e,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new za(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(de(n.toString()),de("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new g(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return w("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(w("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Kf extends Wa{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.yt=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=nf(this.yt,e),s=function(r){if(!("targetChange"in r))return I.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?I.min():i.readTime?le(i.readTime):I.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=Hs(this.yt),n.addTarget=function(r,i){let o;const a=i.target;return o=Fs(a)?{documents:of(r,a)}:{query:af(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Va(r,i.resumeToken):i.snapshotVersion.compareTo(I.min())>0&&(o.readTime=Sn(r,i.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=cf(this.yt,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=Hs(this.yt),n.removeTarget=e,this.Bo(n)}}class Gf extends Wa{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(_(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=rf(e.writeResults,e.commitTime),s=le(e.commitTime);return this.listener.Zo(s,n)}return _(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Hs(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>sf(this.yt,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.yt=r,this.nu=!1}su(){if(this.nu)throw new g(f.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new g(f.UNKNOWN,r.toString())})}_o(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new g(f.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class Wf{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(de(n),this.ou=!1):w("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{Fe(this)&&(w("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=R(a);l._u.add(4),await Gt(l),l.gu.set("Unknown"),l._u.delete(4),await Qn(l)}(this))})}),this.gu=new Wf(s,r)}}async function Qn(t){if(Fe(t))for(const e of t.wu)await e(!0)}async function Gt(t){for(const e of t.wu)await e(!1)}function Qa(t,e){const n=R(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),kr(n)?_r(n):it(n).ko()&&Dr(n,e))}function Xa(t,e){const n=R(t),s=it(n);n.du.delete(e),s.ko()&&Ya(n,e),n.du.size===0&&(s.ko()?s.Fo():Fe(n)&&n.gu.set("Unknown"))}function Dr(t,e){t.yu.Ot(e.targetId),it(t).zo(e)}function Ya(t,e){t.yu.Ot(e),it(t).Ho(e)}function _r(t){t.yu=new Qu({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),it(t).start(),t.gu.uu()}function kr(t){return Fe(t)&&!it(t).No()&&t.du.size>0}function Fe(t){return R(t)._u.size===0}function Ja(t){t.yu=void 0}async function Xf(t){t.du.forEach((e,n)=>{Dr(t,e)})}async function Yf(t,e){Ja(t),kr(t)?(t.gu.hu(e),_r(t)):t.gu.set("Unknown")}async function Jf(t,e,n){if(t.gu.set("Online"),e instanceof Fa&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){w("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Un(t,s)}else if(e instanceof an?t.yu.Kt(e):e instanceof Ma?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(I.min()))try{const s=await Ga(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.Zt(i);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=r.du.get(l);c&&r.du.set(l,c.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const l=r.du.get(a);if(!l)return;r.du.set(a,l.withResumeToken(J.EMPTY_BYTE_STRING,l.snapshotVersion)),Ya(r,a);const c=new _e(l.target,a,1,l.sequenceNumber);Dr(r,c)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){w("RemoteStore","Failed to raise snapshot:",s),await Un(t,s)}}async function Un(t,e,n){if(!$t(e))throw e;t._u.add(1),await Gt(t),t.gu.set("Offline"),n||(n=()=>Ga(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{w("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Qn(t)})}function Za(t,e){return e().catch(n=>Un(t,n,e))}async function Xn(t){const e=R(t),n=Te(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;Zf(e);)try{const r=await Mf(e.localStore,s);if(r===null){e.fu.length===0&&n.Fo();break}s=r.batchId,ed(e,r)}catch(r){await Un(e,r)}el(e)&&tl(e)}function Zf(t){return Fe(t)&&t.fu.length<10}function ed(t,e){t.fu.push(e);const n=Te(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function el(t){return Fe(t)&&!Te(t).No()&&t.fu.length>0}function tl(t){Te(t).start()}async function td(t){Te(t).eu()}async function nd(t){const e=Te(t);for(const n of t.fu)e.Xo(n.mutations)}async function sd(t,e,n){const s=t.fu.shift(),r=Ur.from(s,e,n);await Za(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Xn(t)}async function rd(t,e){e&&Te(t).Yo&&await async function(n,s){if(r=s.code,Hu(r)&&r!==f.ABORTED){const i=n.fu.shift();Te(n).Mo(),await Za(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Xn(n)}var r}(t,e),el(t)&&tl(t)}async function Pi(t,e){const n=R(t);n.asyncQueue.verifyOperationInProgress(),w("RemoteStore","RemoteStore received new credentials");const s=Fe(n);n._u.add(3),await Gt(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Qn(n)}async function id(t,e){const n=R(t);e?(n._u.delete(2),await Qn(n)):e||(n._u.add(2),await Gt(n),n.gu.set("Unknown"))}function it(t){return t.pu||(t.pu=function(e,n,s){const r=R(e);return r.su(),new Kf(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:Xf.bind(null,t),Zr:Yf.bind(null,t),Wo:Jf.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),kr(t)?_r(t):t.gu.set("Unknown")):(await t.pu.stop(),Ja(t))})),t.pu}function Te(t){return t.Iu||(t.Iu=function(e,n,s){const r=R(e);return r.su(),new Gf(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:td.bind(null,t),Zr:rd.bind(null,t),tu:nd.bind(null,t),Zo:sd.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await Xn(t)):(await t.Iu.stop(),t.fu.length>0&&(w("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new De,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Nr(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new g(f.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xr(t,e){if(de("AsyncQueue",`${e}: ${t}`),$t(t))return new g(f.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.comparator=e?(n,s)=>e(n,s)||v.comparator(n.key,s.key):(n,s)=>v.comparator(n.key,s.key),this.keyedMap=ut(),this.sortedSet=new j(this.comparator)}static emptySet(e){return new He(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new He;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(){this.Tu=new j(v.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):T():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Je{constructor(e,n,s,r,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Je(e,n,He.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Hn(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(){this.Au=void 0,this.listeners=[]}}class ad{constructor(){this.queries=new rt(e=>Ta(e),Hn),this.onlineState="Unknown",this.Ru=new Set}}async function ld(t,e){const n=R(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new od),r)try{i.Au=await n.onListen(s)}catch(o){const a=xr(o,`Initialization of query '${Bs(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&Pr(n)}async function cd(t,e){const n=R(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function hd(t,e){const n=R(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&Pr(n)}function ud(t,e,n){const s=R(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Pr(t){t.Ru.forEach(e=>{e.next()})}class fd{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Je(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Je.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e){this.key=e}}class sl{constructor(e){this.key=e}}class dd{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=U(),this.mutatedKeys=U(),this.Gu=ba(e),this.Qu=new He(this.Gu)}get ju(){return this.qu}Wu(e,n){const s=n?n.zu:new Oi,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,c=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((h,u)=>{const d=r.get(h),p=Rr(this.query,u)?u:null,E=!!d&&this.mutatedKeys.has(d.key),S=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let L=!1;d&&p?d.data.isEqual(p.data)?E!==S&&(s.track({type:3,doc:p}),L=!0):this.Hu(d,p)||(s.track({type:2,doc:p}),L=!0,(l&&this.Gu(p,l)>0||c&&this.Gu(p,c)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),L=!0):d&&!p&&(s.track({type:1,doc:d}),L=!0,(l||c)&&(a=!0)),L&&(p?(o=o.add(p),i=S?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),s.track({type:1,doc:h})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((c,h)=>function(u,d){const p=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return T()}};return p(u)-p(d)}(c.type,h.type)||this.Gu(c.doc,h.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.Uu;return this.Uu=a,i.length!==0||l?{snapshot:new Je(this.query,e.Qu,r,i,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Oi,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=U(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new sl(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new nl(s))}),n}tc(e){this.qu=e.Hi,this.Ku=U();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Je.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class md{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class pd{constructor(e){this.key=e,this.nc=!1}}class gd{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new rt(a=>Ta(a),Hn),this.rc=new Map,this.oc=new Set,this.uc=new j(v.comparator),this.cc=new Map,this.ac=new Cr,this.hc={},this.lc=new Map,this.fc=Ye.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function yd(t,e){const n=Cd(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await Ff(n.localStore,me(e));n.isPrimaryClient&&Qa(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await wd(n,e,s,a==="current",o.resumeToken)}return r}async function wd(t,e,n,s,r){t._c=(u,d,p)=>async function(E,S,L,ne){let G=S.view.Wu(L);G.$i&&(G=await ki(E.localStore,S.query,!1).then(({documents:Xt})=>S.view.Wu(Xt,G)));const Qt=ne&&ne.targetChanges.get(S.targetId),Ve=S.view.applyChanges(G,E.isPrimaryClient,Qt);return Fi(E,S.targetId,Ve.Xu),Ve.snapshot}(t,u,d,p);const i=await ki(t.localStore,e,!0),o=new dd(e,i.Hi),a=o.Wu(i.documents),l=Kt.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),c=o.applyChanges(a,t.isPrimaryClient,l);Fi(t,n,c.Xu);const h=new md(e,n,o);return t.ic.set(e,h),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),c.snapshot}async function vd(t,e){const n=R(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!Hn(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ks(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Xa(n.remoteStore,s.targetId),Gs(n,s.targetId)}).catch(Bt)):(Gs(n,s.targetId),await Ks(n.localStore,s.targetId,!0))}async function Ed(t,e,n){const s=Ld(t);try{const r=await function(i,o){const a=R(i),l=F.now(),c=o.reduce((d,p)=>d.add(p.key),U());let h,u;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=pe(),E=U();return a.Gi.getEntries(d,c).next(S=>{p=S,p.forEach((L,ne)=>{ne.isValidDocument()||(E=E.add(L))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(S=>{h=S;const L=[];for(const ne of o){const G=Bu(ne,h.get(ne.key).overlayedDocument);G!=null&&L.push(new Re(ne.key,G,wa(G.value.mapValue),ae.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,L,o)}).next(S=>{u=S;const L=S.applyToLocalDocumentSet(h,E);return a.documentOverlayCache.saveOverlays(d,S.batchId,L)})}).then(()=>({batchId:u.batchId,changes:xa(h)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let l=i.hc[i.currentUser.toKey()];l||(l=new j(D)),l=l.insert(o,a),i.hc[i.currentUser.toKey()]=l}(s,r.batchId,n),await zt(s,r.changes),await Xn(s.remoteStore)}catch(r){const i=xr(r,"Failed to persist write");n.reject(i)}}async function rl(t,e){const n=R(t);try{const s=await Pf(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(_(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?_(o.nc):r.removedDocuments.size>0&&(_(o.nc),o.nc=!1))}),await zt(n,s,e)}catch(s){await Bt(s)}}function Mi(t,e,n){const s=R(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=R(i);a.onlineState=o;let l=!1;a.queries.forEach((c,h)=>{for(const u of h.listeners)u.bu(o)&&(l=!0)}),l&&Pr(a)}(s.eventManager,e),r.length&&s.sc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Td(t,e,n){const s=R(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new j(v.comparator);o=o.insert(i,W.newNoDocument(i,I.min()));const a=U().add(i),l=new zn(I.min(),new Map,new V(D),o,a);await rl(s,l),s.uc=s.uc.remove(i),s.cc.delete(e),Or(s)}else await Ks(s.localStore,e,!1).then(()=>Gs(s,e,n)).catch(Bt)}async function bd(t,e){const n=R(t),s=e.batch.batchId;try{const r=await xf(n.localStore,e);ol(n,s,null),il(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await zt(n,r)}catch(r){await Bt(r)}}async function Id(t,e,n){const s=R(t);try{const r=await function(i,o){const a=R(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(h=>(_(h!==null),c=h.keys(),a.mutationQueue.removeMutationBatch(l,h))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,e);ol(s,e,n),il(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await zt(s,r)}catch(r){await Bt(r)}}function il(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function ol(t,e,n){const s=R(t);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function Gs(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||al(t,s)})}function al(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(Xa(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Or(t))}function Fi(t,e,n){for(const s of n)s instanceof nl?(t.ac.addReference(s.key,e),Rd(t,s)):s instanceof sl?(w("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||al(t,s.key)):T()}function Rd(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(w("SyncEngine","New document in limbo: "+n),t.oc.add(s),Or(t))}function Or(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new v(k.fromString(e)),s=t.fc.next();t.cc.set(s,new pd(n)),t.uc=t.uc.insert(n,s),Qa(t.remoteStore,new _e(me(br(n.path)),s,2,wr.at))}}async function zt(t,e,n){const s=R(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,l)=>{o.push(s._c(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){r.push(c);const h=Ar.Ci(l.targetId,c);i.push(h)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,l){const c=R(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>m.forEach(l,u=>m.forEach(u.Si,d=>c.persistence.referenceDelegate.addReference(h,u.targetId,d)).next(()=>m.forEach(u.Di,d=>c.persistence.referenceDelegate.removeReference(h,u.targetId,d)))))}catch(h){if(!$t(h))throw h;w("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const u=h.targetId;if(!h.fromCache){const d=c.qi.get(u),p=d.snapshotVersion,E=d.withLastLimboFreeSnapshotVersion(p);c.qi=c.qi.insert(u,E)}}}(s.localStore,i))}async function Sd(t,e){const n=R(t);if(!n.currentUser.isEqual(e)){w("SyncEngine","User change. New user:",e.toKey());const s=await Ka(n.localStore,e);n.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new g(f.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await zt(n,s.ji)}}function Ud(t,e){const n=R(t),s=n.cc.get(e);if(s&&s.nc)return U().add(s.key);{let r=U();const i=n.rc.get(e);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function Cd(t){const e=R(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=rl.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ud.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Td.bind(null,e),e.sc.Wo=hd.bind(null,e.eventManager),e.sc.wc=ud.bind(null,e.eventManager),e}function Ld(t){const e=R(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=bd.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Id.bind(null,e),e}class Ad{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Wn(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return Nf(this.persistence,new _f,e.initialUser,this.yt)}yc(e){return new Af(Lr.Bs,this.yt)}gc(e){return new jf}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Dd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Mi(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Sd.bind(null,this.syncEngine),await id(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ad}createDatastore(e){const n=Wn(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new Hf(r));var r;return function(i,o,a,l){return new zf(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Mi(this.syncEngine,a,0),o=xi.C()?new xi:new Bf,new Qf(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,l,c){const h=new gd(s,r,i,o,a,l);return c&&(h.dc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=R(e);w("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Gt(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(t,e,n){if(!n)throw new g(f.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function _d(t,e,n,s){if(e===!0&&s===!0)throw new g(f.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Vi(t){if(!v.isDocumentKey(t))throw new g(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ji(t){if(v.isDocumentKey(t))throw new g(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Yn(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":T()}function ke(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new g(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Yn(t);throw new g(f.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi=new Map;class $i{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new g(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new g(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,_d("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $i({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new g(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new g(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $i(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new nu;switch(n.type){case"gapi":const s=n.client;return new ou(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new g(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Bi.get(e);n&&(w("ComponentProvider","Removing Datastore"),Bi.delete(e),n.terminate())}(this),Promise.resolve()}}function kd(t,e,n,s={}){var r;const i=(t=ke(t,Jn))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Ps("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=z.MOCK_USER;else{o=Vl(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new g(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new z(l)}t._authCredentials=new su(new aa(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new we(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new te(this.firestore,e,this._key)}}class ot{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ot(this.firestore,e,this._query)}}class we extends ot{constructor(e,n,s){super(e,n,br(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new te(this.firestore,null,new v(e))}withConverter(e){return new we(this.firestore,e,this._path)}}function qi(t,e,...n){if(t=ce(t),ll("collection","path",e),t instanceof Jn){const s=k.fromString(e,...n);return ji(s),new we(t,null,s)}{if(!(t instanceof te||t instanceof we))throw new g(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(k.fromString(e,...n));return ji(s),new we(t.firestore,null,s)}}function cl(t,e,...n){if(t=ce(t),arguments.length===1&&(e=la.R()),ll("doc","path",e),t instanceof Jn){const s=k.fromString(e,...n);return Vi(s),new te(t,null,new v(s))}{if(!(t instanceof te||t instanceof we))throw new g(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(k.fromString(e,...n));return Vi(s),new te(t.firestore,t instanceof we?t.converter:null,new v(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):de("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=z.UNAUTHENTICATED,this.clientId=la.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{w("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(w("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new g(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new De;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=xr(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Pd(t,e){t.asyncQueue.verifyOperationInProgress(),w("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Ka(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Od(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Md(t);w("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Pi(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Pi(e.remoteStore,i)),t.onlineComponents=e}async function Md(t){return t.offlineComponents||(w("FirestoreClient","Using default OfflineComponentProvider"),await Pd(t,new Ad)),t.offlineComponents}async function hl(t){return t.onlineComponents||(w("FirestoreClient","Using default OnlineComponentProvider"),await Od(t,new Dd)),t.onlineComponents}function Fd(t){return hl(t).then(e=>e.syncEngine)}async function Hi(t){const e=await hl(t),n=e.eventManager;return n.onListen=yd.bind(null,e.syncEngine),n.onUnlisten=vd.bind(null,e.syncEngine),n}class Vd{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new za(this,"async_queue_retry"),this.Wc=()=>{const n=ys();n&&w("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=ys();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=ys();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new De;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!$t(e))throw e;w("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw de("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=Nr.createAndSchedule(this,e,n,s,i=>this.Yc(i));return this.Uc.push(r),r}zc(){this.Kc&&T()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function Ki(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class _t extends Jn{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new Vd,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||fl(this),this._firestoreClient.terminate()}}function Im(t,e){const n=typeof t=="object"?t:Hc(),s=typeof t=="string"?t:e||"(default)",r=Vc(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Ol("firestore");i&&kd(r,...i)}return r}function ul(t){return t._firestoreClient||fl(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function fl(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new gu(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new xd(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ze(J.fromBase64String(e))}catch(n){throw new g(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ze(J.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new g(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Q(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function jd(){return new Wt("__name__")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new g(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new g(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return D(this._lat,e._lat)||D(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd=/^__.*__$/;class $d{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Re(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ht(e,this.data,n,this.fieldTransforms)}}class dl{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Re(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ml(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T()}}class es{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new es(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.ua(e),r}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Cn(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(ml(this.sa)&&Bd.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class qd{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=s||Wn(e)}da(e,n,s,r=!1){return new es({sa:e,methodName:n,fa:s,path:Q.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Fr(t){const e=t._freezeSettings(),n=Wn(t._databaseId);return new qd(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Hd(t,e,n,s,r,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,r);Vr("Data must be an object, but it was:",o,s);const a=pl(s,o);let l,c;if(i.merge)l=new re(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const u of i.mergeFields){const d=zs(e,u,n);if(!o.contains(d))throw new g(f.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);yl(h,d)||h.push(d)}l=new re(h),c=o.fieldTransforms.filter(u=>l.covers(u.field))}else l=null,c=o.fieldTransforms;return new $d(new ee(a),l,c)}class ts extends Zn{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ts}}function Kd(t,e,n){return new es({sa:3,fa:e.settings.fa,methodName:t._methodName,oa:n},e.databaseId,e.yt,e.ignoreUndefinedProperties)}class Gd extends Zn{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=Kd(this,e,!0),s=this._a.map(i=>at(i,n)),r=new Xe(s);return new Mu(e.path,r)}isEqual(e){return this===e}}function zd(t,e,n,s){const r=t.da(1,e,n);Vr("Data must be an object, but it was:",r,s);const i=[],o=ee.empty();Me(s,(l,c)=>{const h=jr(e,l,n);c=ce(c);const u=r.ca(h);if(c instanceof ts)i.push(h);else{const d=at(c,u);d!=null&&(i.push(h),o.set(h,d))}});const a=new re(i);return new dl(o,a,r.fieldTransforms)}function Wd(t,e,n,s,r,i){const o=t.da(1,e,n),a=[zs(e,s,n)],l=[r];if(i.length%2!=0)throw new g(f.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(zs(e,i[d])),l.push(i[d+1]);const c=[],h=ee.empty();for(let d=a.length-1;d>=0;--d)if(!yl(c,a[d])){const p=a[d];let E=l[d];E=ce(E);const S=o.ca(p);if(E instanceof ts)c.push(p);else{const L=at(E,S);L!=null&&(c.push(p),h.set(p,L))}}const u=new re(c);return new dl(h,u,o.fieldTransforms)}function Qd(t,e,n,s=!1){return at(n,t.da(s?4:3,e))}function at(t,e){if(gl(t=ce(t)))return Vr("Unsupported field value:",e,t),pl(t,e);if(t instanceof Zn)return function(n,s){if(!ml(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=at(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=ce(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return xu(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=F.fromDate(n);return{timestampValue:Sn(s.yt,r)}}if(n instanceof F){const r=new F(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Sn(s.yt,r)}}if(n instanceof Mr)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ze)return{bytesValue:Va(s.yt,n._byteString)};if(n instanceof te){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Sr(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Yn(n)}`)}(t,e)}function pl(t,e){const n={};return ca(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Me(t,(s,r)=>{const i=at(r,e.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function gl(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof F||t instanceof Mr||t instanceof Ze||t instanceof te||t instanceof Zn)}function Vr(t,e,n){if(!gl(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Yn(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function zs(t,e,n){if((e=ce(e))instanceof Wt)return e._internalPath;if(typeof e=="string")return jr(t,e);throw Cn("Field path arguments must be of type string or ",t,!1,void 0,n)}const Xd=new RegExp("[~\\*/\\[\\]]");function jr(t,e,n){if(e.search(Xd)>=0)throw Cn(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Wt(...e.split("."))._internalPath}catch{throw Cn(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Cn(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${s}`),o&&(l+=` in document ${r}`),l+=")"),new g(f.INVALID_ARGUMENT,a+t+l)}function yl(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new te(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Yd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Br("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Yd extends wl{data(){return super.data()}}function Br(t,e){return typeof e=="string"?jr(t,e):e instanceof Wt?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new g(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $r{}class Zd extends $r{}function em(t,e,...n){let s=[];e instanceof $r&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof qr).length,o=r.filter(a=>a instanceof ns).length;if(i>1||i>0&&o>0)throw new g(f.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class ns extends Zd{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new ns(e,n,s)}_apply(e){const n=this._parse(e);return vl(e._query,n),new ot(e.firestore,e.converter,Vs(e._query,n))}_parse(e){const n=Fr(e.firestore);return function(r,i,o,a,l,c,h){let u;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new g(f.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){Wi(h,c);const d=[];for(const p of h)d.push(zi(a,r,p));u={arrayValue:{values:d}}}else u=zi(a,r,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Wi(h,c),u=Qd(o,i,h,c==="in"||c==="not-in");return M.create(l,c,u)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Gi(t,e,n){const s=e,r=Br("where",t);return ns._create(r,s,n)}class qr extends $r{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new qr(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:ie.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)vl(i,a),i=Vs(i,a)}(e._query,n),new ot(e.firestore,e.converter,Vs(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function zi(t,e,n){if(typeof(n=ce(n))=="string"){if(n==="")throw new g(f.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ea(e)&&n.indexOf("/")!==-1)throw new g(f.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(k.fromString(n));if(!v.isDocumentKey(s))throw new g(f.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return gi(t,new v(s))}if(n instanceof te)return gi(t,n._key);throw new g(f.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Yn(n)}.`)}function Wi(t,e){if(!Array.isArray(t)||t.length===0)throw new g(f.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new g(f.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function vl(t,e){if(e.isInequality()){const s=Ir(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new g(f.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=va(t);i!==null&&tm(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new g(f.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new g(f.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function tm(t,e,n){if(!n.isEqual(e))throw new g(f.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class nm{convertValue(e,n="none"){switch(Pe(e)){case 0:return null;case 1:return e.booleanValue;case 2:return O(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ze(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw T()}}convertObject(e,n){const s={};return Me(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Mr(O(e.latitude),O(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=ua(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Lt(e));default:return null}}convertTimestamp(e){const n=Ee(e);return new F(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=k.fromString(e);_(Ha(s));const r=new Ct(s.get(1),s.get(3)),i=new v(s.popFirst(5));return r.isEqual(n)||de(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class El extends wl{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ln(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Br("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ln extends El{data(e={}){return super.data(e)}}class rm{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new ft(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new ln(this._firestore,this._userDataWriter,s.key,s,new ft(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new g(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new ln(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ft(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new ln(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ft(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return o.type!==0&&(l=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),c=i.indexOf(o.doc.key)),{type:im(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function im(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return T()}}class Tl extends nm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ze(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new te(this.firestore,null,n)}}function om(t,e,n,...s){t=ke(t,te);const r=ke(t.firestore,_t),i=Fr(r);let o;return o=typeof(e=ce(e))=="string"||e instanceof Wt?Wd(i,"updateDoc",t._key,e,n,s):zd(i,"updateDoc",t._key,e),bl(r,[o.toMutation(t._key,ae.exists(!0))])}function am(t,e){const n=ke(t.firestore,_t),s=cl(t),r=sm(t.converter,e);return bl(n,[Hd(Fr(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,ae.exists(!1))]).then(()=>s)}function lm(t,...e){var n,s,r;t=ce(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Ki(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Ki(e[o])){const u=e[o];e[o]=(n=u.next)===null||n===void 0?void 0:n.bind(u),e[o+1]=(s=u.error)===null||s===void 0?void 0:s.bind(u),e[o+2]=(r=u.complete)===null||r===void 0?void 0:r.bind(u)}let l,c,h;if(t instanceof te)c=ke(t.firestore,_t),h=br(t._key.path),l={next:u=>{e[o]&&e[o](cm(c,t,u))},error:e[o+1],complete:e[o+2]};else{const u=ke(t,ot);c=ke(u.firestore,_t),h=u._query;const d=new Tl(c);l={next:p=>{e[o]&&e[o](new rm(c,d,u,p))},error:e[o+1],complete:e[o+2]},Jd(t._query)}return function(u,d,p,E){const S=new Nd(E),L=new fd(d,S,p);return u.asyncQueue.enqueueAndForget(async()=>ld(await Hi(u),L)),()=>{S.bc(),u.asyncQueue.enqueueAndForget(async()=>cd(await Hi(u),L))}}(ul(c),h,a,l)}function bl(t,e){return function(n,s){const r=new De;return n.asyncQueue.enqueueAndForget(async()=>Ed(await Fd(n),s,r)),r.promise}(ul(t),e)}function cm(t,e,n){const s=n.docs.get(e._key),r=new Tl(t);return new El(t,r,e._key,s,new ft(n.hasPendingWrites,n.fromCache),e.converter)}function hm(...t){return new Gd("arrayUnion",t)}(function(t,e=!0){(function(n){st=n})($c),fn(new vt("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new _t(new ru(n.getProvider("auth-internal")),new lu(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new g(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ct(a.options.projectId,l)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),dt(fi,"3.8.0",t),dt(fi,"3.8.0","esm2017")})();class um{constructor(){Yt(this,"games",[{name:"Halo: CE",id:"H:CE",shortName:"H:CE",url:"https://www.halopedia.org/Halo:_Combat_Evolved",imageUrl:new URL(""+new URL("../assets/Halo 1 portrait-81004029.jpg",import.meta.url).href,self.location).href,maps:[{name:"Battle Creek",url:"https://www.halopedia.org/Battle_Creek",imageUrl:new URL(""+new URL("../assets/Battle Creek-61ce0016.jpg",import.meta.url).href,self.location).href,minPlayers:2,maxPlayers:8},{name:"Blood Gulch",url:"https://www.halopedia.org/Blood_Gulch",imageUrl:new URL(""+new URL("../assets/Blood Gulch-9e88e9a7.jpg",import.meta.url).href,self.location).href,minPlayers:4,maxPlayers:16},{name:"Boarding Action",url:"https://www.halopedia.org/Boarding_Action",imageUrl:new URL(""+new URL("../assets/Boarding Action-ba205a69.jpg",import.meta.url).href,self.location).href,minPlayers:4,maxPlayers:16},{name:"Chill Out",url:"https://www.halopedia.org/Chill_Out",imageUrl:new URL(""+new URL("../assets/Chill Out-ef19bb6e.jpg",import.meta.url).href,self.location).href,minPlayers:2,maxPlayers:8},{name:"Chiron TL-34",url:"https://www.halopedia.org/Chiron_TL-34",imageUrl:new URL(""+new URL("../assets/Chiron TL-34-42a241c1.jpg",import.meta.url).href,self.location).href,minPlayers:3,maxPlayers:6},{name:"Damnation",url:"https://www.halopedia.org/Damnation",imageUrl:new URL(""+new URL("../assets/Damnation-c3a9e6c4.jpg",import.meta.url).href,self.location).href,minPlayers:4,maxPlayers:8},{name:"Danger Canyon",url:"https://www.halopedia.org/Danger_Canyon",imageUrl:new URL(""+new URL("../assets/Danger Canyon-3f1fa2a8.jpg",import.meta.url).href,self.location).href,minPlayers:4,maxPlayers:16},{name:"Death Island",url:"https://www.halopedia.org/Death_Island",imageUrl:new URL(""+new URL("../assets/Death Island-f995078c.jpg",import.meta.url).href,self.location).href,minPlayers:4,maxPlayers:16},{name:"Derelict",url:"https://www.halopedia.org/Derelict",imageUrl:new URL(""+new URL("../assets/Derelict-1236ceb0.jpg",import.meta.url).href,self.location).href,minPlayers:4,maxPlayers:8},{name:"Gephyrophobia",url:"https://www.halopedia.org/Gephyrophobia",imageUrl:new URL(""+new URL("../assets/Gephyrophobia-163e78b7.jpg",import.meta.url).href,self.location).href,minPlayers:4,maxPlayers:12},{name:"Hang 'Em High",url:"https://www.halopedia.org/Hang_%27Em_High",imageUrl:new URL(""+new URL("../assets/Hang Em High-b1943f5b.jpg",import.meta.url).href,self.location).href,minPlayers:4,maxPlayers:16},{name:"Ice Fields",url:"https://www.halopedia.org/Ice_Fields",imageUrl:new URL(""+new URL("../assets/Ice Fields-a911addd.jpg",import.meta.url).href,self.location).href,minPlayers:4,maxPlayers:16},{name:"Infinity",url:"https://www.halopedia.org/Infinity_(Halo:_Combat_Evolved_map)",imageUrl:new URL(""+new URL("../assets/Infinity-b65b9f12.jpg",import.meta.url).href,self.location).href,minPlayers:4,maxPlayers:16},{name:"Longest",url:"https://www.halopedia.org/Longest",imageUrl:new URL(""+new URL("../assets/Longest-91ccbc00.jpg",import.meta.url).href,self.location).href,minPlayers:2,maxPlayers:8},{name:"Prisoner",url:"https://www.halopedia.org/Prisoner",imageUrl:new URL(""+new URL("../assets/Prisoner-812f448e.jpg",import.meta.url).href,self.location).href,minPlayers:2,maxPlayers:8},{name:"Rat Race",url:"https://www.halopedia.org/Rat_Race",imageUrl:new URL(""+new URL("../assets/Rat Race-4cd667d1.jpg",import.meta.url).href,self.location).href,minPlayers:2,maxPlayers:6},{name:"Sidewinder",url:"https://www.halopedia.org/Sidewinder",imageUrl:new URL(""+new URL("../assets/Sidewinder-c7db7234.jpg",import.meta.url).href,self.location).href,minPlayers:4,maxPlayers:16},{name:"Timberland",url:"https://www.halopedia.org/Timberland",imageUrl:new URL(""+new URL("../assets/Timberland-c3d839fc.jpg",import.meta.url).href,self.location).href,minPlayers:4,maxPlayers:16},{name:"Wizard",url:"https://www.halopedia.org/Wizard",imageUrl:new URL(""+new URL("../assets/Wizard-375a3e93.jpg",import.meta.url).href,self.location).href,minPlayers:2,maxPlayers:8}],modes:[{name:"FFA Slayer",imageUrl:new URL(""+new URL("../assets/slayer-34f2efbc.png",import.meta.url).href,self.location).href},{name:"Team Slayer",imageUrl:new URL(""+new URL("../assets/slayer-34f2efbc.png",import.meta.url).href,self.location).href},{name:"Phantom Slayer",imageUrl:new URL(""+new URL("../assets/slayer-34f2efbc.png",import.meta.url).href,self.location).href},{name:"Elimination",imageUrl:new URL(""+new URL("../assets/slayer-34f2efbc.png",import.meta.url).href,self.location).href},{name:"CTF 2 Flag",imageUrl:new URL(""+new URL("../assets/ctf-bf6601c5.png",import.meta.url).href,self.location).href},{name:"Assault",imageUrl:new URL(""+new URL("../assets/assault-b97e2ec2.png",import.meta.url).href,self.location).href},{name:"FFA Oddball",imageUrl:new URL(""+new URL("../assets/oddball-e6ff3d44.png",import.meta.url).href,self.location).href},{name:"Team Oddball",imageUrl:new URL(""+new URL("../assets/oddball-e6ff3d44.png",import.meta.url).href,self.location).href},{name:"King Of The Hill",imageUrl:new URL(""+new URL("../assets/king-of-the-hill-23e3ac2a.png",import.meta.url).href,self.location).href}]},{name:"Halo 2",id:"H2",shortName:"H2",url:"https://www.halopedia.org/Halo_2",imageUrl:new URL(""+new URL("../assets/Halo 2 portrait-68e8c7fd.jpg",import.meta.url).href,self.location).href,maps:[{name:"Ascension",url:"https://www.halopedia.org/Ascension",imageUrl:new URL(""+new URL("../assets/Ascension-5fe375a1.jpg",import.meta.url).href,self.location).href,minPlayers:2,maxPlayers:12},{name:"Backwash",url:"https://www.halopedia.org/Backwash",imageUrl:new URL(""+new URL("../assets/Backwash-a47d7988.jpg",import.meta.url).href,self.location).href,minPlayers:2,maxPlayers:10},{name:"Beaver Creek",url:"https://www.halopedia.org/Beaver_Creek",imageUrl:new URL(""+new URL("../assets/Beaver Creek-17551517.jpg",import.meta.url).href,self.location).href,minPlayers:2,maxPlayers:8},{name:"Burial Mounds",url:"https://www.halopedia.org/Burial_Mounds",imageUrl:new URL(""+new URL("../assets/Burial Mounds-199723d0.jpg",import.meta.url).href,self.location).href,minPlayers:4,maxPlayers:16},{name:"Coagulation",url:"https://www.halopedia.org/Coagulation",imageUrl:new URL(""+new URL("../assets/Coagulation-63e371f3.jpg",import.meta.url).href,self.location).href,minPlayers:4,maxPlayers:16},{name:"Colossus",url:"https://www.halopedia.org/Colossus_(map)",imageUrl:new URL(""+new URL("../assets/Colossus-c05743f3.jpg",import.meta.url).href,self.location).href,minPlayers:4,maxPlayers:14},{name:"Containment",url:"https://www.halopedia.org/Containment",imageUrl:new URL(""+new URL("../assets/Containment-e1adc5c5.jpg",import.meta.url).href,self.location).href,minPlayers:6,maxPlayers:16},{name:"Desolation",url:"https://www.halopedia.org/Desolation",imageUrl:new URL(""+new URL("../assets/Desolation-6aada9f5.jpg",import.meta.url).href,self.location).href,minPlayers:2,maxPlayers:8},{name:"District",url:"https://www.halopedia.org/District",imageUrl:new URL(""+new URL("../assets/District-a1e388de.jpg",import.meta.url).href,self.location).href,minPlayers:8,maxPlayers:16},{name:"Elongation",url:"https://www.halopedia.org/Elongation",imageUrl:new URL(""+new URL("../assets/Elongation-9a08f743.jpg",import.meta.url).href,self.location).href,minPlayers:2,maxPlayers:6},{name:"Foundation",url:"https://www.halopedia.org/Foundation",imageUrl:new URL(""+new URL("../assets/Foundation-7abde438.jpg",import.meta.url).href,self.location).href,minPlayers:2,maxPlayers:8},{name:"Gemini",url:"https://www.halopedia.org/Gemini",imageUrl:new URL(""+new URL("../assets/Gemini-3b5389ab.jpg",import.meta.url).href,self.location).href,minPlayers:2,maxPlayers:6},{name:"Headlong",url:"https://www.halopedia.org/Headlong",imageUrl:new URL(""+new URL("../assets/Headlong-8187f668.jpg",import.meta.url).href,self.location).href,minPlayers:6,maxPlayers:16},{name:"Ivory Tower",url:"https://www.halopedia.org/Ivory_Tower",imageUrl:new URL(""+new URL("../assets/Ivory Tower-487ee971.jpg",import.meta.url).href,self.location).href,minPlayers:2,maxPlayers:12},{name:"Lockout",url:"https://www.halopedia.org/Lockout",imageUrl:new URL(""+new URL("../assets/Lockout-42477257.jpg",import.meta.url).href,self.location).href,minPlayers:2,maxPlayers:8},{name:"Midship",url:"https://www.halopedia.org/Midship",imageUrl:new URL(""+new URL("../assets/Midship-cc7f4127.jpg",import.meta.url).href,self.location).href,minPlayers:2,maxPlayers:8},{name:"Relic",url:"https://www.halopedia.org/Relic",imageUrl:new URL(""+new URL("../assets/Relic-b144615b.jpg",import.meta.url).href,self.location).href,minPlayers:6,maxPlayers:16},{name:"Sanctuary",url:"https://www.halopedia.org/Sanctuary",imageUrl:new URL(""+new URL("../assets/Sanctuary-9be32607.jpg",import.meta.url).href,self.location).href,minPlayers:2,maxPlayers:10},{name:"Terminal",url:"https://www.halopedia.org/Terminal",imageUrl:new URL(""+new URL("../assets/Terminal-92df8a23.jpg",import.meta.url).href,self.location).href,minPlayers:6,maxPlayers:16},{name:"Tombstone",url:"https://www.halopedia.org/Tombstone",imageUrl:new URL(""+new URL("../assets/Tombstone-ae676edd.jpg",import.meta.url).href,self.location).href,minPlayers:4,maxPlayers:16},{name:"Turf",url:"https://www.halopedia.org/Turf",imageUrl:new URL(""+new URL("../assets/Turf-5bcdfde6.jpg",import.meta.url).href,self.location).href,minPlayers:2,maxPlayers:10},{name:"Uplift",url:"https://www.halopedia.org/Uplift",imageUrl:new URL(""+new URL("../assets/Uplift-47d3b871.jpg",import.meta.url).href,self.location).href,minPlayers:6,maxPlayers:16},{name:"Warlock",url:"https://www.halopedia.org/Warlock",imageUrl:new URL(""+new URL("../assets/Warlock-6d8e3976.jpg",import.meta.url).href,self.location).href,minPlayers:2,maxPlayers:8},{name:"Waterworks",url:"https://www.halopedia.org/Waterworks",imageUrl:new URL(""+new URL("../assets/Waterworks-d74f035f.jpg",import.meta.url).href,self.location).href,minPlayers:6,maxPlayers:16},{name:"Zanzibar",url:"https://www.halopedia.org/Zanzibar",imageUrl:new URL(""+new URL("../assets/Zanzibar-7782fba6.jpg",import.meta.url).href,self.location).href,minPlayers:16,maxPlayers:2}],modes:[{name:"FFA Slayer",imageUrl:new URL(""+new URL("../assets/slayer-34f2efbc.png",import.meta.url).href,self.location).href},{name:"Team Slayer",imageUrl:new URL(""+new URL("../assets/slayer-34f2efbc.png",import.meta.url).href,self.location).href},{name:"Elimination",imageUrl:new URL(""+new URL("../assets/slayer-34f2efbc.png",import.meta.url).href,self.location).href},{name:"SWAT",imageUrl:new URL(""+new URL("../assets/slayer-34f2efbc.png",import.meta.url).href,self.location).href},{name:"Team Oddball",imageUrl:new URL(""+new URL("../assets/oddball-e6ff3d44.png",import.meta.url).href,self.location).href},{name:"Team Fiestaball",imageUrl:new URL(""+new URL("../assets/oddball-e6ff3d44.png",import.meta.url).href,self.location).href},{name:"CTF 2 Flag",imageUrl:new URL(""+new URL("../assets/ctf-bf6601c5.png",import.meta.url).href,self.location).href},{name:"CTF 1 Flag",imageUrl:new URL(""+new URL("../assets/ctf-bf6601c5.png",import.meta.url).href,self.location).href},{name:"FFA King of the Hill",imageUrl:new URL(""+new URL("../assets/king-of-the-hill-23e3ac2a.png",import.meta.url).href,self.location).href},{name:"Team King of the Hill",imageUrl:new URL(""+new URL("../assets/king-of-the-hill-23e3ac2a.png",import.meta.url).href,self.location).href},{name:"FFA Crazy King of the Hill",imageUrl:new URL(""+new URL("../assets/king-of-the-hill-23e3ac2a.png",import.meta.url).href,self.location).href},{name:"Team Crazy King of the Hill",imageUrl:new URL(""+new URL("../assets/king-of-the-hill-23e3ac2a.png",import.meta.url).href,self.location).href},{name:"Juggernaut",imageUrl:new URL(""+new URL("../assets/juggernaut-e474f59b.png",import.meta.url).href,self.location).href}]},{name:"Halo 2:A",id:"H2:A",shortName:"H2:A",url:"https://www.halopedia.org/Halo_2:_Anniversary",imageUrl:new URL(""+new URL("../assets/Halo 2 Anniversary portrait-beaee551.jpg",import.meta.url).href,self.location).href,maps:[{name:"Lockdown",url:"https://www.halopedia.org/Lockdown",imageUrl:new URL(""+new URL("../assets/Lockdown-bdde16b6.jpg",import.meta.url).href,self.location).href,minPlayers:2,maxPlayers:8},{name:"Zenith",url:"https://www.halopedia.org/Zenith",imageUrl:new URL(""+new URL("../assets/Zenith-a7f34f92.jpg",import.meta.url).href,self.location).href,minPlayers:2,maxPlayers:12},{name:"Stonetown",url:"https://www.halopedia.org/Stonetown",imageUrl:new URL(""+new URL("../assets/Stonetown-2fa4de31.jpg",import.meta.url).href,self.location).href,minPlayers:12,maxPlayers:16},{name:"Bloodline",url:"https://www.halopedia.org/Bloodline",imageUrl:new URL(""+new URL("../assets/Bloodline-d862ca5e.jpg",import.meta.url).href,self.location).href,minPlayers:4,maxPlayers:16},{name:"Warlord",url:"https://www.halopedia.org/Warlord",imageUrl:new URL(""+new URL("../assets/Warlord-9c0bb9bd.jpg",import.meta.url).href,self.location).href,minPlayers:2,maxPlayers:8},{name:"Shrine",url:"https://www.halopedia.org/Shrine",imageUrl:new URL(""+new URL("../assets/Shrine-e3c9c78c.jpg",import.meta.url).href,self.location).href,minPlayers:2,maxPlayers:10},{name:"Remnant",url:"https://www.halopedia.org/Remnant",imageUrl:new URL(""+new URL("../assets/Remnant-14efcf06.jpg",import.meta.url).href,self.location).href,minPlayers:12,maxPlayers:16}],modes:[{name:"Team Slayer",imageUrl:new URL(""+new URL("../assets/slayer-34f2efbc.png",import.meta.url).href,self.location).href},{name:"Team SWAT",imageUrl:new URL(""+new URL("../assets/slayer-34f2efbc.png",import.meta.url).href,self.location).href},{name:"Team Oddball",imageUrl:new URL(""+new URL("../assets/oddball-e6ff3d44.png",import.meta.url).href,self.location).href},{name:"Team Fiestaball",imageUrl:new URL(""+new URL("../assets/oddball-e6ff3d44.png",import.meta.url).href,self.location).href},{name:"CTF 2 Flags",imageUrl:new URL(""+new URL("../assets/ctf-bf6601c5.png",import.meta.url).href,self.location).href},{name:"CTF 1 Flag",imageUrl:new URL(""+new URL("../assets/ctf-bf6601c5.png",import.meta.url).href,self.location).href},{name:"Team King of the Hill",imageUrl:new URL(""+new URL("../assets/king-of-the-hill-23e3ac2a.png",import.meta.url).href,self.location).href},{name:"Crazy King of the Hill",imageUrl:new URL(""+new URL("../assets/king-of-the-hill-23e3ac2a.png",import.meta.url).href,self.location).href},{name:"Ricochet",imageUrl:new URL(""+new URL("../assets/ricochet-3f45690f.png",import.meta.url).href,self.location).href}]},{name:"Halo 3",id:"H3",shortName:"H3",url:"https://www.halopedia.org/Halo_3",imageUrl:new URL(""+new URL("../assets/Halo 3 portrait-a12ec795.jpg",import.meta.url).href,self.location).href,maps:[{name:"Assembly",url:"https://www.halopedia.org/Assembly",imageUrl:new URL(""+new URL("../assets/Assembly-3c2148cf.jpg",import.meta.url).href,self.location).href,minPlayers:2,maxPlayers:8},{name:"Avalanche",url:"https://www.halopedia.org/Avalanche",imageUrl:new URL(""+new URL("../assets/Avalanche-c74fa24c.jpg",import.meta.url).href,self.location).href,minPlayers:6,maxPlayers:16},{name:"Blackout",url:"https://www.halopedia.org/Blackout",imageUrl:new URL(""+new URL("../assets/Blackout-8f24a9fc.jpg",import.meta.url).href,self.location).href,minPlayers:4,maxPlayers:12},{name:"Citadel",url:"https://www.halopedia.org/Citadel",imageUrl:new URL(""+new URL("../assets/Citadel-1216f5f1.jpg",import.meta.url).href,self.location).href,minPlayers:2,maxPlayers:6},{name:"Cold Storage",url:"https://www.halopedia.org/Cold_Storage",imageUrl:new URL(""+new URL("../assets/Cold Storage-694927ce.jpg",import.meta.url).href,self.location).href,minPlayers:2,maxPlayers:6},{name:"Construct",url:"https://www.halopedia.org/Construct",imageUrl:new URL(""+new URL("../assets/Construct-3e158c49.jpg",import.meta.url).href,self.location).href,minPlayers:2,maxPlayers:8},{name:"Epitaph",url:"https://www.halopedia.org/Epitaph",imageUrl:new URL(""+new URL("../assets/Epitaph-153d8501.jpg",import.meta.url).href,self.location).href,minPlayers:2,maxPlayers:6},{name:"Foundry",url:"https://www.halopedia.org/Foundry",imageUrl:new URL(""+new URL("../assets/Foundry-82cc5cca.jpg",import.meta.url).href,self.location).href,minPlayers:4,maxPlayers:12},{name:"Ghost Town",url:"https://www.halopedia.org/Ghost_Town",imageUrl:new URL(""+new URL("../assets/Ghost Town-aa5b87c6.jpg",import.meta.url).href,self.location).href,minPlayers:4,maxPlayers:12},{name:"Guardian",url:"https://www.halopedia.org/Guardian_(map)",imageUrl:new URL(""+new URL("../assets/Guardian-faf226fb.jpg",import.meta.url).href,self.location).href,minPlayers:2,maxPlayers:6},{name:"Heretic",url:"https://www.halopedia.org/Heretic",imageUrl:new URL(""+new URL("../assets/Heretic-3f0b35b1.jpg",import.meta.url).href,self.location).href,minPlayers:2,maxPlayers:8},{name:"High Ground",url:"https://www.halopedia.org/High_Ground",imageUrl:new URL(""+new URL("../assets/High Ground-0cb99890.jpg",import.meta.url).href,self.location).href,minPlayers:4,maxPlayers:12},{name:"Isolation",url:"https://www.halopedia.org/Isolation",imageUrl:new URL(""+new URL("../assets/Isolation-6ef002f1.jpg",import.meta.url).href,self.location).href,minPlayers:2,maxPlayers:10},{name:"Last Resort",url:"https://www.halopedia.org/Last_Resort",imageUrl:new URL(""+new URL("../assets/Last Resort-6367a911.jpg",import.meta.url).href,self.location).href,minPlayers:4,maxPlayers:12},{name:"Longshore",url:"https://www.halopedia.org/Longshore",imageUrl:new URL(""+new URL("../assets/Longshore-5ae68529.jpg",import.meta.url).href,self.location).href,minPlayers:4,maxPlayers:12},{name:"Narrows",url:"https://www.halopedia.org/Narrows",imageUrl:new URL(""+new URL("../assets/Narrows-7b429620.jpg",import.meta.url).href,self.location).href,minPlayers:2,maxPlayers:8},{name:"Orbital",url:"https://www.halopedia.org/Orbital",imageUrl:new URL(""+new URL("../assets/Orbital-db5377f2.jpg",import.meta.url).href,self.location).href,minPlayers:4,maxPlayers:12},{name:"Rat's Nest",url:"https://www.halopedia.org/Rats_Nest",imageUrl:new URL(""+new URL("../assets/Rats Nest-b06e99c5.jpg",import.meta.url).href,self.location).href,minPlayers:6,maxPlayers:16},{name:"Sandbox",url:"https://www.halopedia.org/Sandbox",imageUrl:new URL(""+new URL("../assets/Sandbox-ee505607.jpg",import.meta.url).href,self.location).href,minPlayers:12,maxPlayers:4},{name:"Sandtrap",url:"https://www.halopedia.org/Sandtrap",imageUrl:new URL(""+new URL("../assets/Sandtrap-586c2468.jpg",import.meta.url).href,self.location).href,minPlayers:6,maxPlayers:16},{name:"Snowbound",url:"https://www.halopedia.org/Snowbound",imageUrl:new URL(""+new URL("../assets/Snowbound-4e352a28.jpg",import.meta.url).href,self.location).href,minPlayers:2,maxPlayers:8},{name:"Standoff",url:"https://www.halopedia.org/Standoff",imageUrl:new URL(""+new URL("../assets/Standoff-81c779d1.jpg",import.meta.url).href,self.location).href,minPlayers:4,maxPlayers:12},{name:"The Pit",url:"https://www.halopedia.org/The_Pit",imageUrl:new URL(""+new URL("../assets/The Pit-2525c9db.jpg",import.meta.url).href,self.location).href,minPlayers:4,maxPlayers:10},{name:"Valhalla",url:"https://www.halopedia.org/Valhalla",imageUrl:new URL(""+new URL("../assets/Valhalla-fbba42b1.jpg",import.meta.url).href,self.location).href,minPlayers:6,maxPlayers:16}],modes:[{name:"Team Slayer",imageUrl:new URL(""+new URL("../assets/slayer-34f2efbc.png",import.meta.url).href,self.location).href},{name:"Slayer Duel",imageUrl:new URL(""+new URL("../assets/slayer-34f2efbc.png",import.meta.url).href,self.location).href},{name:"CTF 2 Flag",imageUrl:new URL(""+new URL("../assets/ctf-bf6601c5.png",import.meta.url).href,self.location).href},{name:"CTF 1 Flag",imageUrl:new URL(""+new URL("../assets/ctf-bf6601c5.png",import.meta.url).href,self.location).href},{name:"Team King of the Hill",imageUrl:new URL(""+new URL("../assets/king-of-the-hill-23e3ac2a.png",import.meta.url).href,self.location).href},{name:"Crazy King of the Hill",imageUrl:new URL(""+new URL("../assets/king-of-the-hill-23e3ac2a.png",import.meta.url).href,self.location).href},{name:"Team Oddball",imageUrl:new URL(""+new URL("../assets/oddball-e6ff3d44.png",import.meta.url).href,self.location).href},{name:"Ninjaball",imageUrl:new URL(""+new URL("../assets/oddball-e6ff3d44.png",import.meta.url).href,self.location).href},{name:"Infection Classic",imageUrl:new URL(""+new URL("../assets/infection-92995585.png",import.meta.url).href,self.location).href},{name:"Infection Alpha Zombie",imageUrl:new URL(""+new URL("../assets/infection-92995585.png",import.meta.url).href,self.location).href}]},{name:"Halo 4",id:"H4",shortName:"H4",url:"https://www.halopedia.org/Halo_4",imageUrl:new URL(""+new URL("../assets/Halo 4 portrait-a7a26100.jpg",import.meta.url).href,self.location).href,maps:[{name:"Abandon",url:"https://www.halopedia.org/Abandon",imageUrl:new URL(""+new URL("../assets/Abandon-cf8a6401.jpg",import.meta.url).href,self.location).href,minPlayers:4,maxPlayers:12},{name:"Adrift",url:"https://www.halopedia.org/Adrift",imageUrl:new URL(""+new URL("../assets/Adrift-7b492a4e.jpg",import.meta.url).href,self.location).href,minPlayers:4,maxPlayers:14},{name:"Complex",url:"https://www.halopedia.org/Complex",imageUrl:new URL(""+new URL("../assets/Complex-78a4dcb7.jpg",import.meta.url).href,self.location).href,minPlayers:6,maxPlayers:16},{name:"Daybreak",url:"https://www.halopedia.org/Daybreak",imageUrl:new URL(""+new URL("../assets/Daybreak-07623719.jpg",import.meta.url).href,self.location).href,minPlayers:6,maxPlayers:16},{name:"Erosion",url:"https://www.halopedia.org/Erosion",imageUrl:new URL(""+new URL("../assets/Erosion-ae15b4fb.jpg",import.meta.url).href,self.location).href,minPlayers:2,maxPlayers:12},{name:"Exile",url:"https://www.halopedia.org/Exile",imageUrl:new URL(""+new URL("../assets/Exile-42af0bd9.jpg",import.meta.url).href,self.location).href,minPlayers:8,maxPlayers:16},{name:"Forge Island",url:"https://www.halopedia.org/Forge_Island",imageUrl:new URL(""+new URL("../assets/Forge Island-27d3e1da.jpg",import.meta.url).href,self.location).href,minPlayers:4,maxPlayers:16},{name:"Harvest",url:"https://www.halopedia.org/Harvest_(map)",imageUrl:new URL(""+new URL("../assets/Harvest-b15e9e1c.jpg",import.meta.url).href,self.location).href,minPlayers:4,maxPlayers:16},{name:"Haven",url:"https://www.halopedia.org/Haven",imageUrl:new URL(""+new URL("../assets/Haven-d7fa1493.jpg",import.meta.url).href,self.location).href,minPlayers:4,maxPlayers:12},{name:"Impact",url:"https://www.halopedia.org/Impact",imageUrl:new URL(""+new URL("../assets/Impact-5cec7020.jpg",import.meta.url).href,self.location).href,minPlayers:2,maxPlayers:12},{name:"Landfall",url:"https://www.halopedia.org/Landfall",imageUrl:new URL(""+new URL("../assets/Landfall-9d3fdb70.jpg",import.meta.url).href,self.location).href,minPlayers:4,maxPlayers:10},{name:"Longbow",url:"https://www.halopedia.org/Longbow",imageUrl:new URL(""+new URL("../assets/Longbow-2ac51704.jpg",import.meta.url).href,self.location).href,minPlayers:6,maxPlayers:16},{name:"Meltdown",url:"https://www.halopedia.org/Meltdown",imageUrl:new URL(""+new URL("../assets/Meltdown-69367d57.jpg",import.meta.url).href,self.location).href,minPlayers:6,maxPlayers:16},{name:"Monolith",url:"https://www.halopedia.org/Monolith",imageUrl:new URL(""+new URL("../assets/Monolith-63a5f9f5.jpg",import.meta.url).href,self.location).href,minPlayers:4,maxPlayers:12},{name:"Outcast",url:"https://www.halopedia.org/Outcast",imageUrl:new URL(""+new URL("../assets/Outcast-f6a4209e.jpg",import.meta.url).href,self.location).href,minPlayers:6,maxPlayers:16},{name:"Perdition",url:"https://www.halopedia.org/Perdition",imageUrl:new URL(""+new URL("../assets/Perdition-6afee689.jpg",import.meta.url).href,self.location).href,minPlayers:6,maxPlayers:16},{name:"Pitfall",url:"https://www.halopedia.org/Pitfall",imageUrl:new URL(""+new URL("../assets/Pitfall-11322c54.jpg",import.meta.url).href,self.location).href,minPlayers:4,maxPlayers:10},{name:"Ragnarok",url:"https://www.halopedia.org/Ragnarok",imageUrl:new URL(""+new URL("../assets/Ragnarok-14e92dc6.jpg",import.meta.url).href,self.location).href,minPlayers:6,maxPlayers:16},{name:"Ravine",url:"https://www.halopedia.org/Ravine",imageUrl:new URL(""+new URL("../assets/Ravine-dc4c033d.jpg",import.meta.url).href,self.location).href,minPlayers:2,maxPlayers:12},{name:"Shatter",url:"https://www.halopedia.org/Shatter",imageUrl:new URL(""+new URL("../assets/Shatter-d4333a4c.jpg",import.meta.url).href,self.location).href,minPlayers:6,maxPlayers:16},{name:"Skyline",url:"https://www.halopedia.org/Skyline_(level)",imageUrl:new URL(""+new URL("../assets/Skyline-3b592ae6.jpg",import.meta.url).href,self.location).href,minPlayers:4,maxPlayers:14},{name:"Solace",url:"https://www.halopedia.org/Solace",imageUrl:new URL(""+new URL("../assets/Solace-1e259f66.jpg",import.meta.url).href,self.location).href,minPlayers:2,maxPlayers:8},{name:"Vertigo",url:"https://www.halopedia.org/Vertigo",imageUrl:new URL(""+new URL("../assets/Vertigo-a00645e9.jpg",import.meta.url).href,self.location).href,minPlayers:10,maxPlayers:8},{name:"Vortex",url:"https://www.halopedia.org/Vortex",imageUrl:new URL(""+new URL("../assets/Vortex-427ff6ed.jpg",import.meta.url).href,self.location).href,minPlayers:6,maxPlayers:16},{name:"Wreckage",url:"https://www.halopedia.org/Wreckage",imageUrl:new URL(""+new URL("../assets/Wreckage-81ba265c.jpg",import.meta.url).href,self.location).href,minPlayers:4,maxPlayers:16}],modes:[{name:"Slayer Free For All",imageUrl:new URL(""+new URL("../assets/slayer-34f2efbc.png",import.meta.url).href,self.location).href},{name:"Team Slayer",imageUrl:new URL(""+new URL("../assets/slayer-34f2efbc.png",import.meta.url).href,self.location).href},{name:"CTF 2 Flag",imageUrl:new URL(""+new URL("../assets/ctf-bf6601c5.png",import.meta.url).href,self.location).href},{name:"CTF 1 Flag",imageUrl:new URL(""+new URL("../assets/ctf-bf6601c5.png",import.meta.url).href,self.location).href},{name:"Team King of the Hill",imageUrl:new URL(""+new URL("../assets/king-of-the-hill-23e3ac2a.png",import.meta.url).href,self.location).href},{name:"Crazy King of the Hill",imageUrl:new URL(""+new URL("../assets/king-of-the-hill-23e3ac2a.png",import.meta.url).href,self.location).href},{name:"Flood",imageUrl:new URL(""+new URL("../assets/infection-92995585.png",import.meta.url).href,self.location).href}]}])}getGame(e){return this.games.find(n=>n.id===e)}getMap(e){for(const n of this.games)for(const s of n.maps)if(s.id===e)return s}getMode(e){for(const n of this.games)for(const s of n.modes)if(s.id===e)return s}}const cn=new um;for(const t of cn.games){for(const e of t.maps)e.game=t,e.id=`${t.id}-${e.name.replace(/[^a-z0-9]/gi,"_")}`;for(const e of t.modes)e.id=`${t.id}-${e.name.replace(/[^a-z0-9]/gi,"_")}`}class fm{constructor(){Yt(this,"db");Yt(this,"authService")}init(e,n){this.db=e,this.authService=n}async createEvent(e){var s;return await am(qi(this.db,"events"),{name:e,createdDate:new Date,modifiedDate:new Date,ownerId:(s=this.authService.user)==null?void 0:s.uid,contributorIds:[],matches:[]})}async createMatch(e,n){await om(cl(this.db,"events",e),{modifiedDate:new Date,matches:hm({gameId:n.game.id,modeId:n.mode.id,mapId:n.map.id})})}observe(e,n,s){const r=qi(this.db,e),i=em(r,n);return lm(i,o=>{s(o.docs.map(a=>({id:a.id,...a.data()??{}})))})}observeEvent(e,n){return this.observe("events",Gi(jd(),"==",e),s=>{this.normalize(s),n(s[0])})}observeEvents(e){var n;return this.observe("events",Gi("ownerId","==",(n=this.authService.user)==null?void 0:n.uid),s=>{this.normalize(s),e(s)})}normalize(e){for(const n of e??[])n.modifiedDate=new Date(n.modifiedDate.seconds),n.createdDate=new Date(n.createdDate.seconds),n.matches=(n.matches??[]).map(s=>({game:cn.getGame(s.gameId),mode:cn.getMode(s.modeId),map:cn.getMap(s.mapId)}))}}const Rm=new fm;export{vt as C,Ji as E,et as F,Zi as L,$c as S,fn as _,mm as a,gm as b,Vc as c,Rm as d,Pl as e,Hc as f,wm as g,ws as h,qc as i,pm as j,ce as k,Tm as l,Yi as m,A as n,Im as o,ym as p,Em as q,dt as r,Ll as s,vm as t,cn as u};
