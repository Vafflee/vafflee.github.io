/**
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
 */const Li=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},su=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],u=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(u>>10)),t[s++]=String.fromCharCode(56320+(u&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},ru={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,u=r+2<e.length,h=u?e[r+2]:0,c=i>>2,l=(i&3)<<4|a>>4;let p=(a&15)<<2|h>>6,m=h&63;u||(m=64,o||(p=64)),s.push(n[c],n[l],n[p],n[m])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Li(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):su(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const h=r<e.length?n[e.charAt(r)]:64;++r;const l=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||h==null||l==null)throw Error();const p=i<<2|a>>4;if(s.push(p),h!==64){const m=a<<4&240|h>>2;if(s.push(m),l!==64){const v=h<<6&192|l;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},iu=function(e){const t=Li(e);return ru.encodeByteArray(t,!0)},Oi=function(e){return iu(e).replace(/\./g,"")};/**
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
 */class ou{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function vn(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function au(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vn())}function uu(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function hu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cu(){return vn().indexOf("Electron/")>=0}function lu(){const e=vn();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function du(){return vn().indexOf("MSAppHost/")>=0}function fu(){return typeof indexedDB=="object"}function pu(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
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
 */const gu="FirebaseError";class Ce extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=gu,Object.setPrototypeOf(this,Ce.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mi.prototype.create)}}class Mi{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?mu(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Ce(r,a,s)}}function mu(e,t){return e.replace(yu,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const yu=/\{\$([^}]+)}/g;function ts(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(Sr(i)&&Sr(o)){if(!ts(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Sr(e){return e!==null&&typeof e=="object"}/**
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
 */function gt(e){return e&&e._delegate?e._delegate:e}/**
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
 */function ae(e,t){return new Promise((n,s)=>{e.onsuccess=r=>{n(r.target.result)},e.onerror=r=>{var i;s(`${t}: ${(i=r.target.error)===null||i===void 0?void 0:i.message}`)}})}class br{constructor(t){this._db=t,this.objectStoreNames=this._db.objectStoreNames}transaction(t,n="readonly"){return new Pi(this._db.transaction.call(this._db,t,n))}createObjectStore(t,n){return new Vi(this._db.createObjectStore(t,n))}close(){this._db.close()}}class Pi{constructor(t){this._transaction=t,this.complete=new Promise((n,s)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{s(this._transaction.error)},this._transaction.onabort=()=>{s(this._transaction.error)}})}objectStore(t){return new Vi(this._transaction.objectStore(t))}}class Vi{constructor(t){this._store=t}index(t){return new Cr(this._store.index(t))}createIndex(t,n,s){return new Cr(this._store.createIndex(t,n,s))}get(t){const n=this._store.get(t);return ae(n,"Error reading from IndexedDB")}put(t,n){const s=this._store.put(t,n);return ae(s,"Error writing to IndexedDB")}delete(t){const n=this._store.delete(t);return ae(n,"Error deleting from IndexedDB")}clear(){const t=this._store.clear();return ae(t,"Error clearing IndexedDB object store")}}class Cr{constructor(t){this._index=t}get(t){const n=this._index.get(t);return ae(n,"Error reading from IndexedDB")}}function vu(e,t,n){return new Promise((s,r)=>{try{const i=indexedDB.open(e,t);i.onsuccess=o=>{s(new br(o.target.result))},i.onerror=o=>{var a;r(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},i.onupgradeneeded=o=>{n(new br(i.result),o.oldVersion,o.newVersion,new Pi(i.transaction))}}catch(i){r(`Error opening indexedDB: ${i.message}`)}})}class qt{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Tt="[DEFAULT]";/**
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
 */class wu{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new ou;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Tu(t))try{this.getOrInitializeService({instanceIdentifier:Tt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=Tt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Tt){return this.instances.has(t)}getOptions(t=Tt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Eu(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Tt){return this.component?this.component.multipleInstances?t:Tt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Eu(e){return e===Tt?void 0:e}function Tu(e){return e.instantiationMode==="EAGER"}/**
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
 */class Iu{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new wu(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var A;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(A||(A={}));const _u={debug:A.DEBUG,verbose:A.VERBOSE,info:A.INFO,warn:A.WARN,error:A.ERROR,silent:A.SILENT},Su=A.INFO,bu={[A.DEBUG]:"log",[A.VERBOSE]:"log",[A.INFO]:"info",[A.WARN]:"warn",[A.ERROR]:"error"},Cu=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=bu[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Fi{constructor(t){this.name=t,this._logLevel=Su,this._logHandler=Cu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in A))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?_u[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,A.DEBUG,...t),this._logHandler(this,A.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,A.VERBOSE,...t),this._logHandler(this,A.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,A.INFO,...t),this._logHandler(this,A.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,A.WARN,...t),this._logHandler(this,A.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,A.ERROR,...t),this._logHandler(this,A.ERROR,...t)}}/**
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
 */class Au{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Du(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Du(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const es="@firebase/app",Ar="0.7.21";/**
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
 */const Rs=new Fi("@firebase/app"),ku="@firebase/app-compat",Ru="@firebase/analytics-compat",Nu="@firebase/analytics",xu="@firebase/app-check-compat",Lu="@firebase/app-check",Ou="@firebase/auth",Mu="@firebase/auth-compat",Pu="@firebase/database",Vu="@firebase/database-compat",Fu="@firebase/functions",Uu="@firebase/functions-compat",Bu="@firebase/installations",$u="@firebase/installations-compat",qu="@firebase/messaging",ju="@firebase/messaging-compat",Hu="@firebase/performance",Ku="@firebase/performance-compat",Gu="@firebase/remote-config",zu="@firebase/remote-config-compat",Wu="@firebase/storage",Xu="@firebase/storage-compat",Yu="@firebase/firestore",Qu="@firebase/firestore-compat",Ju="firebase",Zu="9.6.11";/**
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
 */const Ui="[DEFAULT]",th={[es]:"fire-core",[ku]:"fire-core-compat",[Nu]:"fire-analytics",[Ru]:"fire-analytics-compat",[Lu]:"fire-app-check",[xu]:"fire-app-check-compat",[Ou]:"fire-auth",[Mu]:"fire-auth-compat",[Pu]:"fire-rtdb",[Vu]:"fire-rtdb-compat",[Fu]:"fire-fn",[Uu]:"fire-fn-compat",[Bu]:"fire-iid",[$u]:"fire-iid-compat",[qu]:"fire-fcm",[ju]:"fire-fcm-compat",[Hu]:"fire-perf",[Ku]:"fire-perf-compat",[Gu]:"fire-rc",[zu]:"fire-rc-compat",[Wu]:"fire-gcs",[Xu]:"fire-gcs-compat",[Yu]:"fire-fst",[Qu]:"fire-fst-compat","fire-js":"fire-js",[Ju]:"fire-js-all"};/**
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
 */const nn=new Map,ns=new Map;function eh(e,t){try{e.container.addComponent(t)}catch(n){Rs.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function fe(e){const t=e.name;if(ns.has(t))return Rs.debug(`There were multiple attempts to register component ${t}.`),!1;ns.set(t,e);for(const n of nn.values())eh(n,e);return!0}function Bi(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const nh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},At=new Mi("app","Firebase",nh);/**
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
 */class sh{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw At.create("app-deleted",{appName:this._name})}}/**
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
 */const $i=Zu;function rh(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:Ui,automaticDataCollectionEnabled:!1},t),s=n.name;if(typeof s!="string"||!s)throw At.create("bad-app-name",{appName:String(s)});const r=nn.get(s);if(r){if(ts(e,r.options)&&ts(n,r.config))return r;throw At.create("duplicate-app",{appName:s})}const i=new Iu(s);for(const a of ns.values())i.addComponent(a);const o=new sh(e,n,i);return nn.set(s,o),o}function qi(e=Ui){const t=nn.get(e);if(!t)throw At.create("no-app",{appName:e});return t}function pt(e,t,n){var s;let r=(s=th[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Rs.warn(a.join(" "));return}fe(new qt(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const ih="firebase-heartbeat-database",oh=1,pe="firebase-heartbeat-store";let Un=null;function ji(){return Un||(Un=vu(ih,oh,(e,t)=>{switch(t){case 0:e.createObjectStore(pe)}}).catch(e=>{throw At.create("storage-open",{originalErrorMessage:e.message})})),Un}async function ah(e){try{return(await ji()).transaction(pe).objectStore(pe).get(Hi(e))}catch(t){throw At.create("storage-get",{originalErrorMessage:t.message})}}async function Dr(e,t){try{const s=(await ji()).transaction(pe,"readwrite");return await s.objectStore(pe).put(t,Hi(e)),s.complete}catch(n){throw At.create("storage-set",{originalErrorMessage:n.message})}}function Hi(e){return`${e.name}!${e.options.appId}`}/**
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
 */const uh=1024,hh=30*24*60*60*1e3;class ch{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dh(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=kr();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=hh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=kr(),{heartbeatsToSend:n,unsentEntries:s}=lh(this._heartbeatsCache.heartbeats),r=Oi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function kr(){return new Date().toISOString().substring(0,10)}function lh(e,t=uh){const n=[];let s=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Rr(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Rr(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class dh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fu()?pu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ah(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Dr(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Dr(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Rr(e){return Oi(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function fh(e){fe(new qt("platform-logger",t=>new Au(t),"PRIVATE")),fe(new qt("heartbeat",t=>new ch(t),"PRIVATE")),pt(es,Ar,e),pt(es,Ar,"esm2017"),pt("fire-js","")}fh("");/**
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
 */const Ki="firebasestorage.googleapis.com",Gi="storageBucket",ph=2*60*1e3,gh=10*60*1e3;/**
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
 */class B extends Ce{constructor(t,n){super(Bn(t),`Firebase Storage: ${n} (${Bn(t)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,B.prototype)}_codeEquals(t){return Bn(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Bn(e){return"storage/"+e}function zi(){const e="An unknown error occurred, please check the error payload for server response.";return new B("unknown",e)}function mh(e){return new B("object-not-found","Object '"+e+"' does not exist.")}function yh(e){return new B("quota-exceeded","Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function vh(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new B("unauthenticated",e)}function wh(){return new B("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function Eh(e){return new B("unauthorized","User does not have permission to access '"+e+"'.")}function Th(){return new B("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function Ih(){return new B("canceled","User canceled the upload/download.")}function _h(e){return new B("invalid-url","Invalid URL '"+e+"'.")}function Sh(e){return new B("invalid-default-bucket","Invalid default bucket '"+e+"'.")}function bh(){return new B("no-default-bucket","No default bucket found. Did you set the '"+Gi+"' property when initializing the app?")}function Ch(){return new B("no-download-url","The given file does not have any download URLs.")}function ss(e){return new B("invalid-argument",e)}function Wi(){return new B("app-deleted","The Firebase app was deleted.")}function Ah(e){return new B("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ie(e){throw new B("internal-error","Internal error: "+e)}/**
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
 */class tt{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=tt.makeFromUrl(t,n)}catch{return new tt(t,"")}if(s.path==="")return s;throw Sh(t)}static makeFromUrl(t,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i($){$.path.charAt($.path.length-1)==="/"&&($.path_=$.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),u={bucket:1,path:3};function h($){$.path_=decodeURIComponent($.path)}const c="v[A-Za-z0-9_]+",l=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",m=new RegExp(`^https?://${l}/${c}/b/${r}/o${p}`,"i"),v={bucket:1,path:3},k=n===Ki?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",V=new RegExp(`^https?://${k}/${r}/${S}`,"i"),at=[{regex:a,indices:u,postModify:i},{regex:m,indices:v,postModify:h},{regex:V,indices:{bucket:1,path:2},postModify:h}];for(let $=0;$<at.length;$++){const Et=at[$],re=Et.regex.exec(t);if(re){const je=re[Et.indices.bucket];let Fn=re[Et.indices.path];Fn||(Fn=""),s=new tt(je,Fn),Et.postModify(s);break}}if(s==null)throw _h(t);return s}}class Dh{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function kh(e,t,n){let s=1,r=null,i=null,o=!1,a=0;function u(){return a===2}let h=!1;function c(...S){h||(h=!0,t.apply(null,S))}function l(S){r=setTimeout(()=>{r=null,e(m,u())},S)}function p(){i&&clearTimeout(i)}function m(S,...V){if(h){p();return}if(S){p(),c.call(null,S,...V);return}if(u()||o){p(),c.call(null,S,...V);return}s<64&&(s*=2);let at;a===1?(a=2,at=0):at=(s+Math.random())*1e3,l(at)}let v=!1;function k(S){v||(v=!0,p(),!h&&(r!==null?(S||(a=2),clearTimeout(r),l(0)):S||(a=1)))}return l(0),i=setTimeout(()=>{o=!0,k(!0)},n),k}function Rh(e){e(!1)}/**
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
 */function Nh(e){return e!==void 0}function xh(e){return typeof e=="object"&&!Array.isArray(e)}function Xi(e){return typeof e=="string"||e instanceof String}function rs(e,t,n,s){if(s<t)throw ss(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw ss(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function Ns(e,t,n){let s=t;return n==null&&(s=`https://${t}`),`${n}://${s}/v0${e}`}function Yi(e){const t=encodeURIComponent;let n="?";for(const s in e)if(e.hasOwnProperty(s)){const r=t(s)+"="+t(e[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
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
 */var St;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(St||(St={}));/**
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
 */class Lh{constructor(t,n,s,r,i,o,a,u,h,c,l){this.url_=t,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=c,this.connectionFactory_=l,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,m)=>{this.resolve_=p,this.reject_=m,this.start_()})}start_(){const t=(s,r)=>{if(r){s(!1,new He(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const u=a.loaded,h=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===St.NO_ERROR,u=i.getStatus();if(!a||this.isRetryStatusCode_(u)){const c=i.getErrorCode()===St.ABORT;s(!1,new He(!1,null,c));return}const h=this.successCodes_.indexOf(u)!==-1;s(!0,new He(h,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());Nh(u)?i(u):i()}catch(u){o(u)}else if(a!==null){const u=zi();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(r.canceled){const u=this.appDelete_?Wi():Ih();o(u)}else{const u=Th();o(u)}};this.canceled_?n(!1,new He(!1,null,!0)):this.backoffId_=kh(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Rh(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(t){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=this.additionalRetryCodes_.indexOf(t)!==-1;return n||r||i}}class He{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function Oh(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Mh(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t!=null?t:"AppManager")}function Ph(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Vh(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function Fh(e,t,n,s,r,i){const o=Yi(e.urlParams),a=e.url+o,u=Object.assign({},e.headers);return Ph(u,t),Oh(u,n),Mh(u,i),Vh(u,s),new Lh(a,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r)}/**
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
 */function xs(e){let t;try{t=JSON.parse(e)}catch{return null}return xh(t)?t:null}/**
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
 */function Uh(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Bh(e,t){const n=t.split("/").filter(s=>s.length>0).join("/");return e.length===0?n:e+"/"+n}function Qi(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function $h(e,t){return t}class Q{constructor(t,n,s,r){this.server=t,this.local=n||t,this.writable=!!s,this.xform=r||$h}}let Ke=null;function qh(e){return!Xi(e)||e.length<2?e:Qi(e)}function jh(){if(Ke)return Ke;const e=[];e.push(new Q("bucket")),e.push(new Q("generation")),e.push(new Q("metageneration")),e.push(new Q("name","fullPath",!0));function t(i,o){return qh(o)}const n=new Q("name");n.xform=t,e.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new Q("size");return r.xform=s,e.push(r),e.push(new Q("timeCreated")),e.push(new Q("updated")),e.push(new Q("md5Hash",null,!0)),e.push(new Q("cacheControl",null,!0)),e.push(new Q("contentDisposition",null,!0)),e.push(new Q("contentEncoding",null,!0)),e.push(new Q("contentLanguage",null,!0)),e.push(new Q("contentType",null,!0)),e.push(new Q("metadata","customMetadata",!0)),Ke=e,Ke}function Hh(e,t){function n(){const s=e.bucket,r=e.fullPath,i=new tt(s,r);return t._makeStorageReference(i)}Object.defineProperty(e,"ref",{get:n})}function Kh(e,t,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,t[o.server])}return Hh(s,e),s}function Gh(e,t,n){const s=xs(t);return s===null?null:Kh(e,s,n)}function zh(e,t,n,s){const r=xs(t);if(r===null||!Xi(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(h=>{const c=e.bucket,l=e.fullPath,p="/b/"+o(c)+"/o/"+o(l),m=Ns(p,n,s),v=Yi({alt:"media",token:h});return m+v})[0]}/**
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
 */const Nr="prefixes",xr="items";function Wh(e,t,n){const s={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[Nr])for(const r of n[Nr]){const i=r.replace(/\/$/,""),o=e._makeStorageReference(new tt(t,i));s.prefixes.push(o)}if(n[xr])for(const r of n[xr]){const i=e._makeStorageReference(new tt(t,r.name));s.items.push(i)}return s}function Xh(e,t,n){const s=xs(n);return s===null?null:Wh(e,t,s)}class Ji{constructor(t,n,s,r){this.url=t,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Zi(e){if(!e)throw zi()}function Yh(e,t){function n(s,r){const i=Xh(e,t,r);return Zi(i!==null),i}return n}function Qh(e,t){function n(s,r){const i=Gh(e,r,t);return Zi(i!==null),zh(i,r,e.host,e._protocol)}return n}function to(e){function t(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=wh():r=vh():n.getStatus()===402?r=yh(e.bucket):n.getStatus()===403?r=Eh(e.path):r=s,r.serverResponse=s.serverResponse,r}return t}function Jh(e){const t=to(e);function n(s,r){let i=t(s,r);return s.getStatus()===404&&(i=mh(e.path)),i.serverResponse=r.serverResponse,i}return n}function Zh(e,t,n,s,r){const i={};t.isRoot?i.prefix="":i.prefix=t.path+"/",n&&n.length>0&&(i.delimiter=n),s&&(i.pageToken=s),r&&(i.maxResults=r);const o=t.bucketOnlyServerUrl(),a=Ns(o,e.host,e._protocol),u="GET",h=e.maxOperationRetryTime,c=new Ji(a,u,Yh(e,t.bucket),h);return c.urlParams=i,c.errorHandler=to(t),c}function tc(e,t,n){const s=t.fullServerUrl(),r=Ns(s,e.host,e._protocol),i="GET",o=e.maxOperationRetryTime,a=new Ji(r,i,Qh(e,n),o);return a.errorHandler=Jh(t),a}/**
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
 */let Lr=null;class ec{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=St.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=St.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=St.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,s,r){if(this.sent_)throw ie("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ie("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ie("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ie("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ie("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class nc extends ec{initXhr(){this.xhr_.responseType="text"}}function eo(){return Lr?Lr():new nc}/**
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
 */class Dt{constructor(t,n){this._service=t,n instanceof tt?this._location=n:this._location=tt.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new Dt(t,n)}get root(){const t=new tt(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Qi(this._location.path)}get storage(){return this._service}get parent(){const t=Uh(this._location.path);if(t===null)return null;const n=new tt(this._location.bucket,t);return new Dt(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw Ah(t)}}function sc(e){const t={prefixes:[],items:[]};return no(e,t).then(()=>t)}async function no(e,t,n){const r=await rc(e,{pageToken:n});t.prefixes.push(...r.prefixes),t.items.push(...r.items),r.nextPageToken!=null&&await no(e,t,r.nextPageToken)}function rc(e,t){t!=null&&typeof t.maxResults=="number"&&rs("options.maxResults",1,1e3,t.maxResults);const n=t||{},s=Zh(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(s,eo)}function ic(e){e._throwIfRoot("getDownloadURL");const t=tc(e.storage,e._location,jh());return e.storage.makeRequestWithTokens(t,eo).then(n=>{if(n===null)throw Ch();return n})}function oc(e,t){const n=Bh(e._location.path,t),s=new tt(e._location.bucket,n);return new Dt(e.storage,s)}/**
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
 */function ac(e){return/^[A-Za-z]+:\/\//.test(e)}function uc(e,t){return new Dt(e,t)}function so(e,t){if(e instanceof Ls){const n=e;if(n._bucket==null)throw bh();const s=new Dt(n,n._bucket);return t!=null?so(s,t):s}else return t!==void 0?oc(e,t):e}function hc(e,t){if(t&&ac(t)){if(e instanceof Ls)return uc(e,t);throw ss("To use ref(service, url), the first argument must be a Storage instance.")}else return so(e,t)}function Or(e,t){const n=t==null?void 0:t[Gi];return n==null?null:tt.makeFromBucketSpec(n,e)}class Ls{constructor(t,n,s,r,i){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=Ki,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ph,this._maxUploadRetryTime=gh,this._requests=new Set,r!=null?this._bucket=tt.makeFromBucketSpec(r,this._host):this._bucket=Or(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=tt.makeFromBucketSpec(this._url,t):this._bucket=Or(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){rs("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){rs("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Dt(this,t)}_makeRequest(t,n,s,r){if(this._deleted)return new Dh(Wi());{const i=Fh(t,this._appId,s,r,n,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(t,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,r).getPromise()}}const Mr="@firebase/storage",Pr="0.9.5";/**
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
 */const ro="storage";function hp(e){return e=gt(e),sc(e)}function cp(e){return e=gt(e),ic(e)}function lp(e,t){return e=gt(e),hc(e,t)}function cc(e=qi(),t){return e=gt(e),Bi(e,ro).getImmediate({identifier:t})}function lc(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new Ls(n,s,r,t,$i)}function dc(){fe(new qt(ro,lc,"PUBLIC").setMultipleInstances(!0)),pt(Mr,Pr,""),pt(Mr,Pr,"esm2017")}dc();var fc="firebase",pc="9.6.11";/**
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
 */pt(fc,pc,"app");var gc=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},g,Os=Os||{},T=gc||self;function sn(){}function is(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Ae(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function mc(e){return Object.prototype.hasOwnProperty.call(e,$n)&&e[$n]||(e[$n]=++yc)}var $n="closure_uid_"+(1e9*Math.random()>>>0),yc=0;function vc(e,t,n){return e.call.apply(e.bind,arguments)}function wc(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function j(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?j=vc:j=wc,j.apply(null,arguments)}function Ge(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function W(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(s,o)}}function vt(){this.s=this.s,this.o=this.o}var Ec=0,Tc={};vt.prototype.s=!1;vt.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),Ec!=0)){var e=mc(this);delete Tc[e]}};vt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const io=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},oo=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const s=e.length,r=typeof e=="string"?e.split(""):e;for(let i=0;i<s;i++)i in r&&t.call(n,r[i],i,e)};function Ic(e){t:{var t=fl;const n=e.length,s=typeof e=="string"?e.split(""):e;for(let r=0;r<n;r++)if(r in s&&t.call(void 0,s[r],r,e)){t=r;break t}t=-1}return 0>t?null:typeof e=="string"?e.charAt(t):e[t]}function Vr(e){return Array.prototype.concat.apply([],arguments)}function Ms(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function rn(e){return/^[\s\xa0]*$/.test(e)}var Fr=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function J(e,t){return e.indexOf(t)!=-1}function qn(e,t){return e<t?-1:e>t?1:0}var Z;t:{var Ur=T.navigator;if(Ur){var Br=Ur.userAgent;if(Br){Z=Br;break t}}Z=""}function Ps(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function ao(e){const t={};for(const n in e)t[n]=e[n];return t}var $r="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function uo(e,t){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)e[n]=s[n];for(let i=0;i<$r.length;i++)n=$r[i],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Vs(e){return Vs[" "](e),e}Vs[" "]=sn;function _c(e){var t=Cc;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Sc=J(Z,"Opera"),jt=J(Z,"Trident")||J(Z,"MSIE"),ho=J(Z,"Edge"),os=ho||jt,co=J(Z,"Gecko")&&!(J(Z.toLowerCase(),"webkit")&&!J(Z,"Edge"))&&!(J(Z,"Trident")||J(Z,"MSIE"))&&!J(Z,"Edge"),bc=J(Z.toLowerCase(),"webkit")&&!J(Z,"Edge");function lo(){var e=T.document;return e?e.documentMode:void 0}var on;t:{var jn="",Hn=function(){var e=Z;if(co)return/rv:([^\);]+)(\)|;)/.exec(e);if(ho)return/Edge\/([\d\.]+)/.exec(e);if(jt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(bc)return/WebKit\/(\S+)/.exec(e);if(Sc)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Hn&&(jn=Hn?Hn[1]:""),jt){var Kn=lo();if(Kn!=null&&Kn>parseFloat(jn)){on=String(Kn);break t}}on=jn}var Cc={};function Ac(){return _c(function(){let e=0;const t=Fr(String(on)).split("."),n=Fr("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var r=t[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;e=qn(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||qn(r[2].length==0,i[2].length==0)||qn(r[2],i[2]),r=r[3],i=i[3]}while(e==0)}return 0<=e})}var as;if(T.document&&jt){var qr=lo();as=qr||parseInt(on,10)||void 0}else as=void 0;var Dc=as,kc=function(){if(!T.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{T.addEventListener("test",sn,t),T.removeEventListener("test",sn,t)}catch{}return e}();function Y(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Y.prototype.h=function(){this.defaultPrevented=!0};function ge(e,t){if(Y.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(co){t:{try{Vs(t.nodeName);var r=!0;break t}catch{}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Rc[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ge.Z.h.call(this)}}W(ge,Y);var Rc={2:"touch",3:"pen",4:"mouse"};ge.prototype.h=function(){ge.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var De="closure_listenable_"+(1e6*Math.random()|0),Nc=0;function xc(e,t,n,s,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ia=r,this.key=++Nc,this.ca=this.fa=!1}function wn(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function En(e){this.src=e,this.g={},this.h=0}En.prototype.add=function(e,t,n,s,r){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=hs(e,t,s,r);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new xc(t,this.src,i,!!s,r),t.fa=n,e.push(t)),t};function us(e,t){var n=t.type;if(n in e.g){var s=e.g[n],r=io(s,t),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(wn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function hs(e,t,n,s){for(var r=0;r<e.length;++r){var i=e[r];if(!i.ca&&i.listener==t&&i.capture==!!n&&i.ia==s)return r}return-1}var Fs="closure_lm_"+(1e6*Math.random()|0),Gn={};function fo(e,t,n,s,r){if(s&&s.once)return go(e,t,n,s,r);if(Array.isArray(t)){for(var i=0;i<t.length;i++)fo(e,t[i],n,s,r);return null}return n=$s(n),e&&e[De]?e.N(t,n,Ae(s)?!!s.capture:!!s,r):po(e,t,n,!1,s,r)}function po(e,t,n,s,r,i){if(!t)throw Error("Invalid event type");var o=Ae(r)?!!r.capture:!!r,a=Bs(e);if(a||(e[Fs]=a=new En(e)),n=a.add(t,n,s,o,i),n.proxy)return n;if(s=Lc(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)kc||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),s,r);else if(e.attachEvent)e.attachEvent(yo(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Lc(){function e(n){return t.call(e.src,e.listener,n)}var t=Oc;return e}function go(e,t,n,s,r){if(Array.isArray(t)){for(var i=0;i<t.length;i++)go(e,t[i],n,s,r);return null}return n=$s(n),e&&e[De]?e.O(t,n,Ae(s)?!!s.capture:!!s,r):po(e,t,n,!0,s,r)}function mo(e,t,n,s,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)mo(e,t[i],n,s,r);else s=Ae(s)?!!s.capture:!!s,n=$s(n),e&&e[De]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=hs(i,n,s,r),-1<n&&(wn(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Bs(e))&&(t=e.g[t.toString()],e=-1,t&&(e=hs(t,n,s,r)),(n=-1<e?t[e]:null)&&Us(n))}function Us(e){if(typeof e!="number"&&e&&!e.ca){var t=e.src;if(t&&t[De])us(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(yo(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Bs(t))?(us(n,e),n.h==0&&(n.src=null,t[Fs]=null)):wn(e)}}}function yo(e){return e in Gn?Gn[e]:Gn[e]="on"+e}function Oc(e,t){if(e.ca)e=!0;else{t=new ge(t,this);var n=e.listener,s=e.ia||e.src;e.fa&&Us(e),e=n.call(s,t)}return e}function Bs(e){return e=e[Fs],e instanceof En?e:null}var zn="__closure_events_fn_"+(1e9*Math.random()>>>0);function $s(e){return typeof e=="function"?e:(e[zn]||(e[zn]=function(t){return e.handleEvent(t)}),e[zn])}function U(){vt.call(this),this.i=new En(this),this.P=this,this.I=null}W(U,vt);U.prototype[De]=!0;U.prototype.removeEventListener=function(e,t,n,s){mo(this,e,t,n,s)};function H(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new Y(t,e);else if(t instanceof Y)t.target=t.target||e;else{var r=t;t=new Y(s,e),uo(t,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];r=ze(o,s,!0,t)&&r}if(o=t.g=e,r=ze(o,s,!0,t)&&r,r=ze(o,s,!1,t)&&r,n)for(i=0;i<n.length;i++)o=t.g=n[i],r=ze(o,s,!1,t)&&r}U.prototype.M=function(){if(U.Z.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)wn(n[s]);delete e.g[t],e.h--}}this.I=null};U.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};U.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function ze(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,u=o.ia||o.src;o.fa&&us(e.i,o),r=a.call(u,s)!==!1&&r}}return r&&!s.defaultPrevented}var qs=T.JSON.stringify;function Mc(){var e=wo;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Pc{constructor(){this.h=this.g=null}add(t,n){const s=vo.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var vo=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Vc,e=>e.reset());class Vc{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Fc(e){T.setTimeout(()=>{throw e},0)}function js(e,t){cs||Uc(),ls||(cs(),ls=!0),wo.add(e,t)}var cs;function Uc(){var e=T.Promise.resolve(void 0);cs=function(){e.then(Bc)}}var ls=!1,wo=new Pc;function Bc(){for(var e;e=Mc();){try{e.h.call(e.g)}catch(n){Fc(n)}var t=vo;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}ls=!1}function Tn(e,t){U.call(this),this.h=e||1,this.g=t||T,this.j=j(this.kb,this),this.l=Date.now()}W(Tn,U);g=Tn.prototype;g.da=!1;g.S=null;g.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),H(this,"tick"),this.da&&(Hs(this),this.start()))}};g.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Hs(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}g.M=function(){Tn.Z.M.call(this),Hs(this),delete this.g};function Ks(e,t,n){if(typeof e=="function")n&&(e=j(e,n));else if(e&&typeof e.handleEvent=="function")e=j(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:T.setTimeout(e,t||0)}function Eo(e){e.g=Ks(()=>{e.g=null,e.i&&(e.i=!1,Eo(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class $c extends vt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Eo(this)}M(){super.M(),this.g&&(T.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function me(e){vt.call(this),this.h=e,this.g={}}W(me,vt);var jr=[];function To(e,t,n,s){Array.isArray(n)||(n&&(jr[0]=n.toString()),n=jr);for(var r=0;r<n.length;r++){var i=fo(t,n[r],s||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function Io(e){Ps(e.g,function(t,n){this.g.hasOwnProperty(n)&&Us(t)},e),e.g={}}me.prototype.M=function(){me.Z.M.call(this),Io(this)};me.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function In(){this.g=!0}In.prototype.Aa=function(){this.g=!1};function qc(e,t,n,s,r,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),u=0;u<a.length;u++){var h=a[u].split("=");if(1<h.length){var c=h[0];h=h[1];var l=c.split("_");o=2<=l.length&&l[1]=="type"?o+(c+"="+h+"&"):o+(c+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+t+`
`+n+`
`+o})}function jc(e,t,n,s,r,i,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+t+`
`+n+`
`+i+" "+o})}function Vt(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Kc(e,n)+(s?" "+s:"")})}function Hc(e,t){e.info(function(){return"TIMEOUT: "+t})}In.prototype.info=function(){};function Kc(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return qs(n)}catch{return t}}var Mt={},Hr=null;function _n(){return Hr=Hr||new U}Mt.Ma="serverreachability";function _o(e){Y.call(this,Mt.Ma,e)}W(_o,Y);function ye(e){const t=_n();H(t,new _o(t,e))}Mt.STAT_EVENT="statevent";function So(e,t){Y.call(this,Mt.STAT_EVENT,e),this.stat=t}W(So,Y);function et(e){const t=_n();H(t,new So(t,e))}Mt.Na="timingevent";function bo(e,t){Y.call(this,Mt.Na,e),this.size=t}W(bo,Y);function ke(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return T.setTimeout(function(){e()},t)}var Sn={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Co={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Gs(){}Gs.prototype.h=null;function Kr(e){return e.h||(e.h=e.i())}function Ao(){}var Re={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function zs(){Y.call(this,"d")}W(zs,Y);function Ws(){Y.call(this,"c")}W(Ws,Y);var ds;function bn(){}W(bn,Gs);bn.prototype.g=function(){return new XMLHttpRequest};bn.prototype.i=function(){return{}};ds=new bn;function Ne(e,t,n,s){this.l=e,this.j=t,this.m=n,this.X=s||1,this.V=new me(this),this.P=Gc,e=os?125:void 0,this.W=new Tn(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Do}function Do(){this.i=null,this.g="",this.h=!1}var Gc=45e3,fs={},an={};g=Ne.prototype;g.setTimeout=function(e){this.P=e};function ps(e,t,n){e.K=1,e.v=An(dt(t)),e.s=n,e.U=!0,ko(e,null)}function ko(e,t){e.F=Date.now(),xe(e),e.A=dt(e.v);var n=e.A,s=e.X;Array.isArray(s)||(s=[String(s)]),Po(n.h,"t",s),e.C=0,n=e.l.H,e.h=new Do,e.g=na(e.l,n?t:null,!e.s),0<e.O&&(e.L=new $c(j(e.Ia,e,e.g),e.O)),To(e.V,e.g,"readystatechange",e.gb),t=e.H?ao(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ye(1),qc(e.j,e.u,e.A,e.m,e.X,e.s)}g.gb=function(e){e=e.target;const t=this.L;t&&lt(e)==3?t.l():this.Ia(e)};g.Ia=function(e){try{if(e==this.g)t:{const c=lt(this.g);var t=this.g.Da();const l=this.g.ba();if(!(3>c)&&(c!=3||os||this.g&&(this.h.h||this.g.ga()||Xr(this.g)))){this.I||c!=4||t==7||(t==8||0>=l?ye(3):ye(2)),Cn(this);var n=this.g.ba();this.N=n;e:if(Ro(this)){var s=Xr(this.g);e="";var r=s.length,i=lt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){It(this),he(this);var o="";break e}this.h.i=new T.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:i&&t==r-1});s.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,jc(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!rn(a)){var h=a;break e}}h=null}if(n=h)Vt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,gs(this,n);else{this.i=!1,this.o=3,et(12),It(this),he(this);break t}}this.U?(No(this,c,o),os&&this.i&&c==3&&(To(this.V,this.W,"tick",this.fb),this.W.start())):(Vt(this.j,this.m,o,null),gs(this,o)),c==4&&It(this),this.i&&!this.I&&(c==4?Jo(this.l,this):(this.i=!1,xe(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,et(12)):(this.o=0,et(13)),It(this),he(this)}}}catch{}finally{}};function Ro(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Ba:!1}function No(e,t,n){let s=!0,r;for(;!e.I&&e.C<n.length;)if(r=zc(e,n),r==an){t==4&&(e.o=4,et(14),s=!1),Vt(e.j,e.m,null,"[Incomplete Response]");break}else if(r==fs){e.o=4,et(15),Vt(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Vt(e.j,e.m,r,null),gs(e,r);Ro(e)&&r!=an&&r!=fs&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,et(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),sr(t),t.L=!0,et(11))):(Vt(e.j,e.m,n,"[Invalid Chunked Response]"),It(e),he(e))}g.fb=function(){if(this.g){var e=lt(this.g),t=this.g.ga();this.C<t.length&&(Cn(this),No(this,e,t),this.i&&e!=4&&xe(this))}};function zc(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?an:(n=Number(t.substring(n,s)),isNaN(n)?fs:(s+=1,s+n>t.length?an:(t=t.substr(s,n),e.C=s+n,t)))}g.cancel=function(){this.I=!0,It(this)};function xe(e){e.Y=Date.now()+e.P,xo(e,e.P)}function xo(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=ke(j(e.eb,e),t)}function Cn(e){e.B&&(T.clearTimeout(e.B),e.B=null)}g.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Hc(this.j,this.A),this.K!=2&&(ye(3),et(17)),It(this),this.o=2,he(this)):xo(this,this.Y-e)};function he(e){e.l.G==0||e.I||Jo(e.l,e)}function It(e){Cn(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,Hs(e.W),Io(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function gs(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||ms(n.i,e))){if(n.I=e.N,!e.J&&ms(n.i,e)&&n.G==3){try{var s=n.Ca.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)ln(n),Rn(n);else break t;nr(n),et(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=ke(j(n.ab,n),6e3));if(1>=Uo(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else _t(n,11)}else if((e.J||n.g==e)&&ln(n),!rn(t))for(r=n.Ca.g.parse(t),t=0;t<r.length;t++){let h=r[t];if(n.U=h[0],h=h[1],n.G==2)if(h[0]=="c"){n.J=h[1],n.la=h[2];const c=h[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const l=h[4];l!=null&&(n.za=l,n.h.info("SVER="+n.za));const p=h[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=e.g;if(m){const v=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var i=s.i;!i.g&&(J(v,"spdy")||J(v,"quic")||J(v,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Qs(i,i.h),i.h=null))}if(s.D){const k=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;k&&(s.sa=k,R(s.F,s.D,k))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=e;if(s.oa=ea(s,s.H?s.la:null,s.W),o.J){Bo(s.i,o);var a=o,u=s.K;u&&a.setTimeout(u),a.B&&(Cn(a),xe(a)),s.g=o}else Yo(s);0<n.l.length&&Nn(n)}else h[0]!="stop"&&h[0]!="close"||_t(n,7);else n.G==3&&(h[0]=="stop"||h[0]=="close"?h[0]=="stop"?_t(n,7):er(n):h[0]!="noop"&&n.j&&n.j.wa(h),n.A=0)}}ye(4)}catch{}}function Wc(e){if(e.R&&typeof e.R=="function")return e.R();if(typeof e=="string")return e.split("");if(is(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function Xs(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(is(e)||typeof e=="string")oo(e,t,void 0);else{if(e.T&&typeof e.T=="function")var n=e.T();else if(e.R&&typeof e.R=="function")n=void 0;else if(is(e)||typeof e=="string"){n=[];for(var s=e.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,e)n[s++]=r;s=Wc(e),r=s.length;for(var i=0;i<r;i++)t.call(void 0,s[i],n&&n[i],e)}}function Qt(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(e)if(e instanceof Qt)for(n=e.T(),s=0;s<n.length;s++)this.set(n[s],e.get(n[s]));else for(s in e)this.set(s,e[s])}g=Qt.prototype;g.R=function(){Ys(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e};g.T=function(){return Ys(this),this.g.concat()};function Ys(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var s=e.g[t];kt(e.h,s)&&(e.g[n++]=s),t++}e.g.length=n}if(e.i!=e.g.length){var r={};for(n=t=0;t<e.g.length;)s=e.g[t],kt(r,s)||(e.g[n++]=s,r[s]=1),t++;e.g.length=n}}g.get=function(e,t){return kt(this.h,e)?this.h[e]:t};g.set=function(e,t){kt(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t};g.forEach=function(e,t){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);e.call(t,i,r,this)}};function kt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var Lo=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Xc(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),r=null;if(0<=s){var i=e[n].substring(0,s);r=e[n].substring(s+1)}else i=e[n];t(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Rt(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Rt){this.g=t!==void 0?t:e.g,un(this,e.j),this.s=e.s,hn(this,e.i),cn(this,e.m),this.l=e.l,t=e.h;var n=new ve;n.i=t.i,t.g&&(n.g=new Qt(t.g),n.h=t.h),Gr(this,n),this.o=e.o}else e&&(n=String(e).match(Lo))?(this.g=!!t,un(this,n[1]||"",!0),this.s=ce(n[2]||""),hn(this,n[3]||"",!0),cn(this,n[4]),this.l=ce(n[5]||"",!0),Gr(this,n[6]||"",!0),this.o=ce(n[7]||"")):(this.g=!!t,this.h=new ve(null,this.g))}Rt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ue(t,zr,!0),":");var n=this.i;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(ue(t,zr,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&e.push("/"),e.push(ue(n,n.charAt(0)=="/"?tl:Zc,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ue(n,nl)),e.join("")};function dt(e){return new Rt(e)}function un(e,t,n){e.j=n?ce(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function hn(e,t,n){e.i=n?ce(t,!0):t}function cn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Gr(e,t,n){t instanceof ve?(e.h=t,sl(e.h,e.g)):(n||(t=ue(t,el)),e.h=new ve(t,e.g))}function R(e,t,n){e.h.set(t,n)}function An(e){return R(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Yc(e){return e instanceof Rt?dt(e):new Rt(e,void 0)}function Qc(e,t,n,s){var r=new Rt(null,void 0);return e&&un(r,e),t&&hn(r,t),n&&cn(r,n),s&&(r.l=s),r}function ce(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ue(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Jc),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Jc(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var zr=/[#\/\?@]/g,Zc=/[#\?:]/g,tl=/[#\?]/g,el=/[#\?@]/g,nl=/#/g;function ve(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function wt(e){e.g||(e.g=new Qt,e.h=0,e.i&&Xc(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}g=ve.prototype;g.add=function(e,t){wt(this),this.i=null,e=Jt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Oo(e,t){wt(e),t=Jt(e,t),kt(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,kt(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Ys(e)))}function Mo(e,t){return wt(e),t=Jt(e,t),kt(e.g.h,t)}g.forEach=function(e,t){wt(this),this.g.forEach(function(n,s){oo(n,function(r){e.call(t,r,s,this)},this)},this)};g.T=function(){wt(this);for(var e=this.g.R(),t=this.g.T(),n=[],s=0;s<t.length;s++)for(var r=e[s],i=0;i<r.length;i++)n.push(t[s]);return n};g.R=function(e){wt(this);var t=[];if(typeof e=="string")Mo(this,e)&&(t=Vr(t,this.g.get(Jt(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=Vr(t,e[n])}return t};g.set=function(e,t){return wt(this),this.i=null,e=Jt(this,e),Mo(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};g.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t};function Po(e,t,n){Oo(e,t),0<n.length&&(e.i=null,e.g.set(Jt(e,t),Ms(n)),e.h+=n.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var s=t[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),e.push(o)}}return this.i=e.join("&")};function Jt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function sl(e,t){t&&!e.j&&(wt(e),e.i=null,e.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Oo(this,s),Po(this,r,n))},e)),e.j=t}var rl=class{constructor(e,t){this.h=e,this.g=t}};function Vo(e){this.l=e||il,T.PerformanceNavigationTiming?(e=T.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(T.g&&T.g.Ea&&T.g.Ea()&&T.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var il=10;function Fo(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Uo(e){return e.h?1:e.g?e.g.size:0}function ms(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Qs(e,t){e.g?e.g.add(t):e.h=t}function Bo(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Vo.prototype.cancel=function(){if(this.i=$o(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function $o(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Ms(e.i)}function Js(){}Js.prototype.stringify=function(e){return T.JSON.stringify(e,void 0)};Js.prototype.parse=function(e){return T.JSON.parse(e,void 0)};function ol(){this.g=new Js}function al(e,t,n){const s=n||"";try{Xs(e,function(r,i){let o=r;Ae(r)&&(o=qs(r)),t.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw t.push(s+"type="+encodeURIComponent("_badmap")),r}}function ul(e,t){const n=new In;if(T.Image){const s=new Image;s.onload=Ge(We,n,s,"TestLoadImage: loaded",!0,t),s.onerror=Ge(We,n,s,"TestLoadImage: error",!1,t),s.onabort=Ge(We,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=Ge(We,n,s,"TestLoadImage: timeout",!1,t),T.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function We(e,t,n,s,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(s)}catch{}}function Le(e){this.l=e.$b||null,this.j=e.ib||!1}W(Le,Gs);Le.prototype.g=function(){return new Dn(this.l,this.j)};Le.prototype.i=function(e){return function(){return e}}({});function Dn(e,t){U.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Zs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}W(Dn,U);var Zs=0;g=Dn.prototype;g.open=function(e,t){if(this.readyState!=Zs)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,we(this)};g.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||T).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Oe(this)),this.readyState=Zs};g.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,we(this)),this.g&&(this.readyState=3,we(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof T.ReadableStream!="undefined"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;qo(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))};function qo(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}g.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Oe(this):we(this),this.readyState==3&&qo(this)}};g.Ua=function(e){this.g&&(this.response=this.responseText=e,Oe(this))};g.Ta=function(e){this.g&&(this.response=e,Oe(this))};g.ha=function(){this.g&&Oe(this)};function Oe(e){e.readyState=4,e.l=null,e.j=null,e.A=null,we(e)}g.setRequestHeader=function(e,t){this.v.append(e,t)};g.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function we(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Dn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var hl=T.JSON.parse;function P(e){U.call(this),this.headers=new Qt,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=jo,this.K=this.L=!1}W(P,U);var jo="",cl=/^https?$/i,ll=["POST","PUT"];g=P.prototype;g.ea=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ds.g(),this.C=this.u?Kr(this.u):Kr(ds),this.g.onreadystatechange=j(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){Wr(this,i);return}e=n||"";const r=new Qt(this.headers);s&&Xs(s,function(i,o){r.set(o,i)}),s=Ic(r.T()),n=T.FormData&&e instanceof T.FormData,!(0<=io(ll,t))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Go(this),0<this.B&&((this.K=dl(this.g))?(this.g.timeout=this.B,this.g.ontimeout=j(this.pa,this)):this.A=Ks(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Wr(this,i)}};function dl(e){return jt&&Ac()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}function fl(e){return e.toLowerCase()=="content-type"}g.pa=function(){typeof Os!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,H(this,"timeout"),this.abort(8))};function Wr(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Ho(e),kn(e)}function Ho(e){e.D||(e.D=!0,H(e,"complete"),H(e,"error"))}g.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,H(this,"complete"),H(this,"abort"),kn(this))};g.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),kn(this,!0)),P.Z.M.call(this)};g.Fa=function(){this.s||(this.F||this.v||this.l?Ko(this):this.cb())};g.cb=function(){Ko(this)};function Ko(e){if(e.h&&typeof Os!="undefined"&&(!e.C[1]||lt(e)!=4||e.ba()!=2)){if(e.v&&lt(e)==4)Ks(e.Fa,0,e);else if(H(e,"readystatechange"),lt(e)==4){e.h=!1;try{const a=e.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var r=String(e.H).match(Lo)[1]||null;if(!r&&T.self&&T.self.location){var i=T.self.location.protocol;r=i.substr(0,i.length-1)}s=!cl.test(r?r.toLowerCase():"")}n=s}if(n)H(e,"complete"),H(e,"success");else{e.m=6;try{var o=2<lt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.ba()+"]",Ho(e)}}finally{kn(e)}}}}function kn(e,t){if(e.g){Go(e);const n=e.g,s=e.C[0]?sn:null;e.g=null,e.C=null,t||H(e,"ready");try{n.onreadystatechange=s}catch{}}}function Go(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(T.clearTimeout(e.A),e.A=null)}function lt(e){return e.g?e.g.readyState:0}g.ba=function(){try{return 2<lt(this)?this.g.status:-1}catch{return-1}};g.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),hl(t)}};function Xr(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case jo:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}g.Da=function(){return this.m};g.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function pl(e){let t="";return Ps(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function tr(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=pl(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):R(e,t,n))}function oe(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function zo(e){this.za=0,this.l=[],this.h=new In,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=oe("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=oe("baseRetryDelayMs",5e3,e),this.$a=oe("retryDelaySeedMs",1e4,e),this.Ya=oe("forwardChannelMaxRetries",2,e),this.ra=oe("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new Vo(e&&e.concurrentRequestLimit),this.Ca=new ol,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||e.Xb!==!1}g=zo.prototype;g.ma=8;g.G=1;function er(e){if(Wo(e),e.G==3){var t=e.V++,n=dt(e.F);R(n,"SID",e.J),R(n,"RID",t),R(n,"TYPE","terminate"),Me(e,n),t=new Ne(e,e.h,t,void 0),t.K=2,t.v=An(dt(n)),n=!1,T.navigator&&T.navigator.sendBeacon&&(n=T.navigator.sendBeacon(t.v.toString(),"")),!n&&T.Image&&(new Image().src=t.v,n=!0),n||(t.g=na(t.l,null),t.g.ea(t.v)),t.F=Date.now(),xe(t)}ta(e)}g.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch{}};function Rn(e){e.g&&(sr(e),e.g.cancel(),e.g=null)}function Wo(e){Rn(e),e.u&&(T.clearTimeout(e.u),e.u=null),ln(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&T.clearTimeout(e.m),e.m=null)}function Wn(e,t){e.l.push(new rl(e.Za++,t)),e.G==3&&Nn(e)}function Nn(e){Fo(e.i)||e.m||(e.m=!0,js(e.Ha,e),e.C=0)}function gl(e,t){return Uo(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.l=t.D.concat(e.l),!0):e.G==1||e.G==2||e.C>=(e.Xa?0:e.Ya)?!1:(e.m=ke(j(e.Ha,e,t),Zo(e,e.C)),e.C++,!0)}g.Ha=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const r=new Ne(this,this.h,e,void 0);let i=this.s;if(this.P&&(i?(i=ao(i),uo(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)t:{for(var t=0,n=0;n<this.l.length;n++){e:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.l.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Xo(this,r,t),n=dt(this.F),R(n,"RID",e),R(n,"CVER",22),this.D&&R(n,"X-HTTP-Session-Id",this.D),Me(this,n),this.o&&i&&tr(n,this.o,i),Qs(this.i,r),this.Ra&&R(n,"TYPE","init"),this.ja?(R(n,"$req",t),R(n,"SID","null"),r.$=!0,ps(r,n,null)):ps(r,n,t),this.G=2}}else this.G==3&&(e?Yr(this,e):this.l.length==0||Fo(this.i)||Yr(this))};function Yr(e,t){var n;t?n=t.m:n=e.V++;const s=dt(e.F);R(s,"SID",e.J),R(s,"RID",n),R(s,"AID",e.U),Me(e,s),e.o&&e.s&&tr(s,e.o,e.s),n=new Ne(e,e.h,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Xo(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),Qs(e.i,n),ps(n,s,t)}function Me(e,t){e.j&&Xs({},function(n,s){R(t,s,n)})}function Xo(e,t,n){n=Math.min(e.l.length,n);var s=e.j?j(e.j.Oa,e.j,e):null;t:{var r=e.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let u=0;u<n;u++){let h=r[u].h;const c=r[u].g;if(h-=i,0>h)i=Math.max(0,r[u].h-100),a=!1;else try{al(c,o,"req"+h+"_")}catch{s&&s(c)}}if(a){s=o.join("&");break t}}}return e=e.l.splice(0,n),t.D=e,s}function Yo(e){e.g||e.u||(e.Y=1,js(e.Ga,e),e.A=0)}function nr(e){return e.g||e.u||3<=e.A?!1:(e.Y++,e.u=ke(j(e.Ga,e),Zo(e,e.A)),e.A++,!0)}g.Ga=function(){if(this.u=null,Qo(this),this.$&&!(this.L||this.g==null||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=ke(j(this.bb,this),e)}};g.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,et(10),Rn(this),Qo(this))};function sr(e){e.B!=null&&(T.clearTimeout(e.B),e.B=null)}function Qo(e){e.g=new Ne(e,e.h,"rpc",e.Y),e.o===null&&(e.g.H=e.s),e.g.O=0;var t=dt(e.oa);R(t,"RID","rpc"),R(t,"SID",e.J),R(t,"CI",e.N?"0":"1"),R(t,"AID",e.U),Me(e,t),R(t,"TYPE","xmlhttp"),e.o&&e.s&&tr(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=An(dt(t)),n.s=null,n.U=!0,ko(n,e)}g.ab=function(){this.v!=null&&(this.v=null,Rn(this),nr(this),et(19))};function ln(e){e.v!=null&&(T.clearTimeout(e.v),e.v=null)}function Jo(e,t){var n=null;if(e.g==t){ln(e),sr(e),e.g=null;var s=2}else if(ms(e.i,t))n=t.D,Bo(e.i,t),s=1;else return;if(e.I=t.N,e.G!=0){if(t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;s=_n(),H(s,new bo(s,n,t,r)),Nn(e)}else Yo(e);else if(r=t.o,r==3||r==0&&0<e.I||!(s==1&&gl(e,t)||s==2&&nr(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),r){case 1:_t(e,5);break;case 4:_t(e,10);break;case 3:_t(e,6);break;default:_t(e,2)}}}function Zo(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function _t(e,t){if(e.h.info("Error code "+t),t==2){var n=null;e.j&&(n=null);var s=j(e.jb,e);n||(n=new Rt("//www.google.com/images/cleardot.gif"),T.location&&T.location.protocol=="http"||un(n,"https"),An(n)),ul(n.toString(),s)}else et(2);e.G=0,e.j&&e.j.va(t),ta(e),Wo(e)}g.jb=function(e){e?(this.h.info("Successfully pinged google.com"),et(2)):(this.h.info("Failed to ping google.com"),et(1))};function ta(e){e.G=0,e.I=-1,e.j&&(($o(e.i).length!=0||e.l.length!=0)&&(e.i.i.length=0,Ms(e.l),e.l.length=0),e.j.ua())}function ea(e,t,n){let s=Yc(n);if(s.i!="")t&&hn(s,t+"."+s.i),cn(s,s.m);else{const r=T.location;s=Qc(r.protocol,t?t+"."+r.hostname:r.hostname,+r.port,n)}return e.aa&&Ps(e.aa,function(r,i){R(s,i,r)}),t=e.D,n=e.sa,t&&n&&R(s,t,n),R(s,"VER",e.ma),Me(e,s),s}function na(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new P(new Le({ib:!0})):new P(e.qa),t.L=e.H,t}function sa(){}g=sa.prototype;g.xa=function(){};g.wa=function(){};g.va=function(){};g.ua=function(){};g.Oa=function(){};function dn(){if(jt&&!(10<=Number(Dc)))throw Error("Environmental error: no available transport.")}dn.prototype.g=function(e,t){return new ot(e,t)};function ot(e,t){U.call(this),this.g=new zo(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!rn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!rn(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Zt(this)}W(ot,U);ot.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),js(j(e.hb,e,t))),et(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=ea(e,null,e.W),Nn(e)};ot.prototype.close=function(){er(this.g)};ot.prototype.u=function(e){if(typeof e=="string"){var t={};t.__data__=e,Wn(this.g,t)}else this.v?(t={},t.__data__=qs(e),Wn(this.g,t)):Wn(this.g,e)};ot.prototype.M=function(){this.g.j=null,delete this.j,er(this.g),delete this.g,ot.Z.M.call(this)};function ra(e){zs.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}W(ra,zs);function ia(){Ws.call(this),this.status=1}W(ia,Ws);function Zt(e){this.g=e}W(Zt,sa);Zt.prototype.xa=function(){H(this.g,"a")};Zt.prototype.wa=function(e){H(this.g,new ra(e))};Zt.prototype.va=function(e){H(this.g,new ia(e))};Zt.prototype.ua=function(){H(this.g,"b")};dn.prototype.createWebChannel=dn.prototype.g;ot.prototype.send=ot.prototype.u;ot.prototype.open=ot.prototype.m;ot.prototype.close=ot.prototype.close;Sn.NO_ERROR=0;Sn.TIMEOUT=8;Sn.HTTP_ERROR=6;Co.COMPLETE="complete";Ao.EventType=Re;Re.OPEN="a";Re.CLOSE="b";Re.ERROR="c";Re.MESSAGE="d";U.prototype.listen=U.prototype.N;P.prototype.listenOnce=P.prototype.O;P.prototype.getLastError=P.prototype.La;P.prototype.getLastErrorCode=P.prototype.Da;P.prototype.getStatus=P.prototype.ba;P.prototype.getResponseJson=P.prototype.Qa;P.prototype.getResponseText=P.prototype.ga;P.prototype.send=P.prototype.ea;var ml=function(){return new dn},yl=function(){return _n()},Xn=Sn,vl=Co,wl=Mt,Qr={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},El=Le,Xe=Ao,Tl=P;const Jr="@firebase/firestore";/**
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
 */class it{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
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
 */let te="9.6.11";/**
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
 */const Nt=new Fi("@firebase/firestore");function Zr(){return Nt.logLevel}function w(e,...t){if(Nt.logLevel<=A.DEBUG){const n=t.map(rr);Nt.debug(`Firestore (${te}): ${e}`,...n)}}function mt(e,...t){if(Nt.logLevel<=A.ERROR){const n=t.map(rr);Nt.error(`Firestore (${te}): ${e}`,...n)}}function ti(e,...t){if(Nt.logLevel<=A.WARN){const n=t.map(rr);Nt.warn(`Firestore (${te}): ${e}`,...n)}}function rr(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
*/var t}/**
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
 */function I(e="Unexpected state"){const t=`FIRESTORE (${te}) INTERNAL ASSERTION FAILED: `+e;throw mt(t),new Error(t)}function M(e,t){e||I()}function C(e,t){return e}/**
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
 */const d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends Ce{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class bt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class Il{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class _l{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class Sl{constructor(t){this.t=t,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const r=u=>this.i!==s?(s=this.i,n(u)):Promise.resolve();let i=new bt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new bt,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const u=i;t.enqueueRetryable(async()=>{await u.promise,await r(this.currentUser)})},a=u=>{w("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(w("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new bt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(w("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(M(typeof s.accessToken=="string"),new Il(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return M(t===null||typeof t=="string"),new it(t)}}class bl{constructor(t,n,s){this.type="FirstParty",this.user=it.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class Cl{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new bl(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Al{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Dl{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,n){const s=i=>{i.error!=null&&w("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,w("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>s(i))};const r=i=>{w("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):w("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(M(typeof n.token=="string"),this.p=n.token,new Al(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class ir{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.I(s),this.T=s=>n.writeSequenceNumber(s))}I(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}/**
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
 */function kl(e){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */ir.A=-1;class Rl{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const r=kl(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=t.charAt(r[i]%t.length))}return s}}function D(e,t){return e<t?-1:e>t?1:0}function Ee(e,t,n){return e.length===t.length&&e.every((s,r)=>n(s,t[r]))}/**
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
 */class st{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new y(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new y(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new y(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new y(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return st.fromMillis(Date.now())}static fromDate(t){return st.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new st(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?D(this.nanoseconds,t.nanoseconds):D(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class _{constructor(t){this.timestamp=t}static fromTimestamp(t){return new _(t)}static min(){return new _(new st(0,0))}static max(){return new _(new st(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function ei(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Pe(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function oa(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class Te{constructor(t,n,s){n===void 0?n=0:n>t.length&&I(),s===void 0?s=t.length-n:s>t.length-n&&I(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return Te.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Te?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let r=0;r<s;r++){const i=t.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class x extends Te{construct(t,n,s){return new x(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new y(d.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new x(n)}static emptyPath(){return new x([])}}const Nl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends Te{construct(t,n,s){return new ut(t,n,s)}static isValidIdentifier(t){return Nl.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(t){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new y(d.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new y(d.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new y(d.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=u,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new y(d.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ut(n)}static emptyPath(){return new ut([])}}/**
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
 */class G{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new G(n)}static fromUint8Array(t){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(t);return new G(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return D(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}G.EMPTY_BYTE_STRING=new G("");const xl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yt(e){if(M(!!e),typeof e=="string"){let t=0;const n=xl.exec(e);if(M(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:O(e.seconds),nanos:O(e.nanos)}}function O(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Ht(e){return typeof e=="string"?G.fromBase64String(e):G.fromUint8Array(e)}/**
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
 */function aa(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ua(e){const t=e.mapValue.fields.__previous_value__;return aa(t)?ua(t):t}function Ie(e){const t=yt(e.mapValue.fields.__local_write_time__.timestampValue);return new st(t.seconds,t.nanos)}/**
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
 */class Ll{constructor(t,n,s,r,i,o,a,u){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class Kt{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Kt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Kt&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */function ee(e){return e==null}function fn(e){return e===0&&1/e==-1/0}function Ol(e){return typeof e=="number"&&Number.isInteger(e)&&!fn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */class E{constructor(t){this.path=t}static fromPath(t){return new E(x.fromString(t))}static fromName(t){return new E(x.fromString(t).popFirst(5))}static empty(){return new E(x.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&x.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return x.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new E(new x(t.slice()))}}function xt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?aa(e)?4:Ml(e)?9:10:I()}function ht(e,t){if(e===t)return!0;const n=xt(e);if(n!==xt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ie(e).isEqual(Ie(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=yt(s.timestampValue),o=yt(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,r){return Ht(s.bytesValue).isEqual(Ht(r.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,r){return O(s.geoPointValue.latitude)===O(r.geoPointValue.latitude)&&O(s.geoPointValue.longitude)===O(r.geoPointValue.longitude)}(e,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return O(s.integerValue)===O(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=O(s.doubleValue),o=O(r.doubleValue);return i===o?fn(i)===fn(o):isNaN(i)&&isNaN(o)}return!1}(e,t);case 9:return Ee(e.arrayValue.values||[],t.arrayValue.values||[],ht);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(ei(i)!==ei(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!ht(i[a],o[a])))return!1;return!0}(e,t);default:return I()}}function _e(e,t){return(e.values||[]).find(n=>ht(n,t))!==void 0}function Gt(e,t){if(e===t)return 0;const n=xt(e),s=xt(t);if(n!==s)return D(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return D(e.booleanValue,t.booleanValue);case 2:return function(r,i){const o=O(r.integerValue||r.doubleValue),a=O(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return ni(e.timestampValue,t.timestampValue);case 4:return ni(Ie(e),Ie(t));case 5:return D(e.stringValue,t.stringValue);case 6:return function(r,i){const o=Ht(r),a=Ht(i);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let u=0;u<o.length&&u<a.length;u++){const h=D(o[u],a[u]);if(h!==0)return h}return D(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(r,i){const o=D(O(r.latitude),O(i.latitude));return o!==0?o:D(O(r.longitude),O(i.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let u=0;u<o.length&&u<a.length;++u){const h=Gt(o[u],a[u]);if(h)return h}return D(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(r,i){const o=r.fields||{},a=Object.keys(o),u=i.fields||{},h=Object.keys(u);a.sort(),h.sort();for(let c=0;c<a.length&&c<h.length;++c){const l=D(a[c],h[c]);if(l!==0)return l;const p=Gt(o[a[c]],u[h[c]]);if(p!==0)return p}return D(a.length,h.length)}(e.mapValue,t.mapValue);default:throw I()}}function ni(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return D(e,t);const n=yt(e),s=yt(t),r=D(n.seconds,s.seconds);return r!==0?r:D(n.nanos,s.nanos)}function Ut(e){return ys(e)}function ys(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const r=yt(s);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Ht(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,E.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=ys(o);return r+"]"}(e.arrayValue):"mapValue"in e?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${ys(s.fields[a])}`;return i+"}"}(e.mapValue):I();var t,n}function si(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function vs(e){return!!e&&"integerValue"in e}function or(e){return!!e&&"arrayValue"in e}function ri(e){return!!e&&"nullValue"in e}function ii(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Yn(e){return!!e&&"mapValue"in e}function le(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Pe(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=le(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=le(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Ml(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ct{constructor(t){this.value=t}static empty(){return new ct({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Yn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=le(n)}setAll(t){let n=ut.emptyPath(),s={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=le(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(t){const n=this.field(t.popLast());Yn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return ht(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=n.mapValue.fields[t.get(s)];Yn(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,s){Pe(n,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new ct(le(this.value))}}/**
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
 */class X{constructor(t,n,s,r,i,o){this.key=t,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(t){return new X(t,0,_.min(),_.min(),ct.empty(),0)}static newFoundDocument(t,n,s){return new X(t,1,n,_.min(),s,0)}static newNoDocument(t,n){return new X(t,2,n,_.min(),ct.empty(),0)}static newUnknownDocument(t,n){return new X(t,3,n,_.min(),ct.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ct.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof X&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new X(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function Pl(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,r=_.fromTimestamp(s===1e9?new st(n+1,0):new st(n,s));return new zt(r,E.empty(),t)}function Vl(e){return new zt(e.readTime,e.key,-1)}class zt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new zt(_.min(),E.empty(),-1)}static max(){return new zt(_.max(),E.empty(),-1)}}function Fl(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=E.comparator(e.documentKey,t.documentKey),n!==0?n:D(e.largestBatchId,t.largestBatchId))}/**
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
 */class Ul{constructor(t,n=null,s=[],r=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.P=null}}function oi(e,t=null,n=[],s=[],r=null,i=null,o=null){return new Ul(e,t,n,s,r,i,o)}function ar(e){const t=C(e);if(t.P===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+Ut(r.value);var r}).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),ee(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Ut(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Ut(s)).join(",")),t.P=n}return t.P}function Bl(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Ut(s.value)}`;var s}).join(", ")}]`),ee(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>Ut(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>Ut(n)).join(",")),`Target(${t})`}function ur(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let r=0;r<e.orderBy.length;r++)if(!Wl(e.orderBy[r],t.orderBy[r]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(n=e.filters[r],s=t.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!ht(n.value,s.value))return!1;var n,s;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ui(e.startAt,t.startAt)&&ui(e.endAt,t.endAt)}function ws(e){return E.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class nt extends class{}{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.V(t,n,s):new $l(t,n,s):n==="array-contains"?new Hl(t,s):n==="in"?new Kl(t,s):n==="not-in"?new Gl(t,s):n==="array-contains-any"?new zl(t,s):new nt(t,n,s)}static V(t,n,s){return n==="in"?new ql(t,s):new jl(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.v(Gt(n,this.value)):n!==null&&xt(this.value)===xt(n)&&this.v(Gt(n,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return I()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class $l extends nt{constructor(t,n,s){super(t,n,s),this.key=E.fromName(s.referenceValue)}matches(t){const n=E.comparator(t.key,this.key);return this.v(n)}}class ql extends nt{constructor(t,n){super(t,"in",n),this.keys=ha("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class jl extends nt{constructor(t,n){super(t,"not-in",n),this.keys=ha("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function ha(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>E.fromName(s.referenceValue))}class Hl extends nt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return or(n)&&_e(n.arrayValue,this.value)}}class Kl extends nt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&_e(this.value.arrayValue,n)}}class Gl extends nt{constructor(t,n){super(t,"not-in",n)}matches(t){if(_e(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!_e(this.value.arrayValue,n)}}class zl extends nt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!or(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>_e(this.value.arrayValue,s))}}class pn{constructor(t,n){this.position=t,this.inclusive=n}}class de{constructor(t,n="asc"){this.field=t,this.dir=n}}function Wl(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function ai(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){const i=t[r],o=e.position[r];if(i.field.isKeyField()?s=E.comparator(E.fromName(o.referenceValue),n.key):s=Gt(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function ui(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ht(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class Ve{constructor(t,n=null,s=[],r=[],i=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.D=null,this.C=null,this.startAt,this.endAt}}function Xl(e,t,n,s,r,i,o,a){return new Ve(e,t,n,s,r,i,o,a)}function ca(e){return new Ve(e)}function Je(e){return!ee(e.limit)&&e.limitType==="F"}function gn(e){return!ee(e.limit)&&e.limitType==="L"}function la(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function da(e){for(const t of e.filters)if(t.S())return t.field;return null}function fa(e){return e.collectionGroup!==null}function Se(e){const t=C(e);if(t.D===null){t.D=[];const n=da(t),s=la(t);if(n!==null&&s===null)n.isKeyField()||t.D.push(new de(n)),t.D.push(new de(ut.keyField(),"asc"));else{let r=!1;for(const i of t.explicitOrderBy)t.D.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.D.push(new de(ut.keyField(),i))}}}return t.D}function Lt(e){const t=C(e);if(!t.C)if(t.limitType==="F")t.C=oi(t.path,t.collectionGroup,Se(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of Se(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new de(i.field,o))}const s=t.endAt?new pn(t.endAt.position,!t.endAt.inclusive):null,r=t.startAt?new pn(t.startAt.position,!t.startAt.inclusive):null;t.C=oi(t.path,t.collectionGroup,n,t.filters,t.limit,s,r)}return t.C}function Yl(e,t,n){return new Ve(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function xn(e,t){return ur(Lt(e),Lt(t))&&e.limitType===t.limitType}function pa(e){return`${ar(Lt(e))}|lt:${e.limitType}`}function Es(e){return`Query(target=${Bl(Lt(e))}; limitType=${e.limitType})`}function hr(e,t){return t.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):E.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(e,t)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=ai(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Se(n),s)||n.endAt&&!function(r,i,o){const a=ai(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Se(n),s))}(e,t)}function Ql(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function ga(e){return(t,n)=>{let s=!1;for(const r of Se(e)){const i=Jl(r,t,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Jl(e,t,n){const s=e.field.isKeyField()?E.comparator(t.key,n.key):function(r,i,o){const a=i.data.field(r),u=o.data.field(r);return a!==null&&u!==null?Gt(a,u):I()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return I()}}/**
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
 */function ma(e,t){if(e.N){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fn(t)?"-0":t}}function ya(e){return{integerValue:""+e}}function Zl(e,t){return Ol(t)?ya(t):ma(e,t)}/**
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
 */class Ln{constructor(){this._=void 0}}function td(e,t,n){return e instanceof Ts?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,t):e instanceof mn?va(e,t):e instanceof yn?wa(e,t):function(s,r){const i=nd(s,r),o=hi(i)+hi(s.k);return vs(i)&&vs(s.k)?ya(o):ma(s.M,o)}(e,t)}function ed(e,t,n){return e instanceof mn?va(e,t):e instanceof yn?wa(e,t):n}function nd(e,t){return e instanceof Is?vs(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class Ts extends Ln{}class mn extends Ln{constructor(t){super(),this.elements=t}}function va(e,t){const n=Ea(t);for(const s of e.elements)n.some(r=>ht(r,s))||n.push(s);return{arrayValue:{values:n}}}class yn extends Ln{constructor(t){super(),this.elements=t}}function wa(e,t){let n=Ea(t);for(const s of e.elements)n=n.filter(r=>!ht(r,s));return{arrayValue:{values:n}}}class Is extends Ln{constructor(t,n){super(),this.M=t,this.k=n}}function hi(e){return O(e.integerValue||e.doubleValue)}function Ea(e){return or(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function sd(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof mn&&s instanceof mn||n instanceof yn&&s instanceof yn?Ee(n.elements,s.elements,ht):n instanceof Is&&s instanceof Is?ht(n.k,s.k):n instanceof Ts&&s instanceof Ts}(e.transform,t.transform)}function Ze(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Ta{}function rd(e,t,n){e instanceof Ia?function(s,r,i){const o=s.value.clone(),a=di(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(e,t,n):e instanceof _a?function(s,r,i){if(!Ze(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=di(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Sa(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(e,t,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,t,n)}function _s(e,t,n){e instanceof Ia?function(s,r,i){if(!Ze(s.precondition,r))return;const o=s.value.clone(),a=fi(s.fieldTransforms,i,r);o.setAll(a),r.convertToFoundDocument(li(r),o).setHasLocalMutations()}(e,t,n):e instanceof _a?function(s,r,i){if(!Ze(s.precondition,r))return;const o=fi(s.fieldTransforms,i,r),a=r.data;a.setAll(Sa(s)),a.setAll(o),r.convertToFoundDocument(li(r),a).setHasLocalMutations()}(e,t,n):function(s,r){Ze(s.precondition,r)&&r.convertToNoDocument(_.min())}(e,t)}function ci(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ee(n,s,(r,i)=>sd(r,i))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function li(e){return e.isFoundDocument()?e.version:_.min()}class Ia extends Ta{constructor(t,n,s,r=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}}class _a extends Ta{constructor(t,n,s,r,i=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Sa(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function di(e,t,n){const s=new Map;M(e.length===n.length);for(let r=0;r<n.length;r++){const i=e[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,ed(o,a,n[r]))}return s}function fi(e,t,n){const s=new Map;for(const r of e){const i=r.transform,o=n.data.field(r.field);s.set(r.field,td(i,o,t))}return s}/**
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
 */class id{constructor(t){this.count=t}}/**
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
 */var L,b;function ba(e){if(e===void 0)return mt("GRPC error has no .code"),d.UNKNOWN;switch(e){case L.OK:return d.OK;case L.CANCELLED:return d.CANCELLED;case L.UNKNOWN:return d.UNKNOWN;case L.DEADLINE_EXCEEDED:return d.DEADLINE_EXCEEDED;case L.RESOURCE_EXHAUSTED:return d.RESOURCE_EXHAUSTED;case L.INTERNAL:return d.INTERNAL;case L.UNAVAILABLE:return d.UNAVAILABLE;case L.UNAUTHENTICATED:return d.UNAUTHENTICATED;case L.INVALID_ARGUMENT:return d.INVALID_ARGUMENT;case L.NOT_FOUND:return d.NOT_FOUND;case L.ALREADY_EXISTS:return d.ALREADY_EXISTS;case L.PERMISSION_DENIED:return d.PERMISSION_DENIED;case L.FAILED_PRECONDITION:return d.FAILED_PRECONDITION;case L.ABORTED:return d.ABORTED;case L.OUT_OF_RANGE:return d.OUT_OF_RANGE;case L.UNIMPLEMENTED:return d.UNIMPLEMENTED;case L.DATA_LOSS:return d.DATA_LOSS;default:return I()}}(b=L||(L={}))[b.OK=0]="OK",b[b.CANCELLED=1]="CANCELLED",b[b.UNKNOWN=2]="UNKNOWN",b[b.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",b[b.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",b[b.NOT_FOUND=5]="NOT_FOUND",b[b.ALREADY_EXISTS=6]="ALREADY_EXISTS",b[b.PERMISSION_DENIED=7]="PERMISSION_DENIED",b[b.UNAUTHENTICATED=16]="UNAUTHENTICATED",b[b.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",b[b.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",b[b.ABORTED=10]="ABORTED",b[b.OUT_OF_RANGE=11]="OUT_OF_RANGE",b[b.UNIMPLEMENTED=12]="UNIMPLEMENTED",b[b.INTERNAL=13]="INTERNAL",b[b.UNAVAILABLE=14]="UNAVAILABLE",b[b.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ne{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),r=this.inner[s];if(r===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Pe(this.inner,(n,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return oa(this.inner)}size(){return this.innerSize}}/**
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
 */class z{constructor(t,n){this.comparator=t,this.root=n||q.EMPTY}insert(t,n){return new z(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,q.BLACK,null,null))}remove(t){return new z(this.comparator,this.root.remove(t,this.comparator).copy(null,null,q.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ye(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ye(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ye(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ye(this.root,t,this.comparator,!0)}}class Ye{constructor(t,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?s(t.key,n):1,n&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class q{constructor(t,n,s,r,i){this.key=t,this.value=n,this.color=s!=null?s:q.RED,this.left=r!=null?r:q.EMPTY,this.right=i!=null?i:q.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,r,i){return new q(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return q.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return q.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,q.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,q.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();const t=this.left.check();if(t!==this.right.check())throw I();return t+(this.isRed()?0:1)}}q.EMPTY=null,q.RED=!0,q.BLACK=!1;q.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(e,t,n,s,r){return this}insert(e,t,n){return new q(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class K{constructor(t){this.comparator=t,this.data=new z(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new pi(this.data.getIterator())}getIteratorFrom(t){return new pi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof K)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new K(this.comparator);return n.data=t,n}}class pi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const od=new z(E.comparator);function Ot(){return od}const ad=new z(E.comparator);function Ss(){return ad}function Qn(){return new ne(e=>e.toString(),(e,t)=>e.isEqual(t))}new z(E.comparator);const ud=new K(E.comparator);function N(...e){let t=ud;for(const n of e)t=t.add(n);return t}const hd=new K(D);function Ca(){return hd}/**
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
 */class On{constructor(t,n,s,r,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n){const s=new Map;return s.set(t,Fe.createSynthesizedTargetChangeForCurrentChange(t,n)),new On(_.min(),s,Ca(),Ot(),N())}}class Fe{constructor(t,n,s,r,i){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n){return new Fe(G.EMPTY_BYTE_STRING,n,N(),N(),N())}}/**
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
 */class tn{constructor(t,n,s,r){this.O=t,this.removedTargetIds=n,this.key=s,this.F=r}}class Aa{constructor(t,n){this.targetId=t,this.$=n}}class Da{constructor(t,n,s=G.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=r}}class gi{constructor(){this.B=0,this.L=yi(),this.U=G.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(t){t.approximateByteSize()>0&&(this.K=!0,this.U=t)}H(){let t=N(),n=N(),s=N();return this.L.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:I()}}),new Fe(this.U,this.q,t,n,s)}J(){this.K=!1,this.L=yi()}Y(t,n){this.K=!0,this.L=this.L.insert(t,n)}X(t){this.K=!0,this.L=this.L.remove(t)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class cd{constructor(t){this.nt=t,this.st=new Map,this.it=Ot(),this.rt=mi(),this.ot=new K(D)}ut(t){for(const n of t.O)t.F&&t.F.isFoundDocument()?this.at(n,t.F):this.ct(n,t.key,t.F);for(const n of t.removedTargetIds)this.ct(n,t.key,t.F)}ht(t){this.forEachTarget(t,n=>{const s=this.lt(n);switch(t.state){case 0:this.ft(n)&&s.W(t.resumeToken);break;case 1:s.tt(),s.G||s.J(),s.W(t.resumeToken);break;case 2:s.tt(),s.G||this.removeTarget(n);break;case 3:this.ft(n)&&(s.et(),s.W(t.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),s.W(t.resumeToken));break;default:I()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.st.forEach((s,r)=>{this.ft(r)&&n(r)})}_t(t){const n=t.targetId,s=t.$.count,r=this.wt(n);if(r){const i=r.target;if(ws(i))if(s===0){const o=new E(i.path);this.ct(n,o,X.newNoDocument(o,_.min()))}else M(s===1);else this.gt(n)!==s&&(this.dt(n),this.ot=this.ot.add(n))}}yt(t){const n=new Map;this.st.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&ws(a.target)){const u=new E(a.target.path);this.it.get(u)!==null||this.It(o,u)||this.ct(o,u,X.newNoDocument(u,t))}i.j&&(n.set(o,i.H()),i.J())}});let s=N();this.rt.forEach((i,o)=>{let a=!0;o.forEachWhile(u=>{const h=this.wt(u);return!h||h.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.it.forEach((i,o)=>o.setReadTime(t));const r=new On(t,n,this.ot,this.it,s);return this.it=Ot(),this.rt=mi(),this.ot=new K(D),r}at(t,n){if(!this.ft(t))return;const s=this.It(t,n.key)?2:0;this.lt(t).Y(n.key,s),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(t))}ct(t,n,s){if(!this.ft(t))return;const r=this.lt(t);this.It(t,n)?r.Y(n,1):r.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(t)),s&&(this.it=this.it.insert(n,s))}removeTarget(t){this.st.delete(t)}gt(t){const n=this.lt(t).H();return this.nt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Z(t){this.lt(t).Z()}lt(t){let n=this.st.get(t);return n||(n=new gi,this.st.set(t,n)),n}Tt(t){let n=this.rt.get(t);return n||(n=new K(D),this.rt=this.rt.insert(t,n)),n}ft(t){const n=this.wt(t)!==null;return n||w("WatchChangeAggregator","Detected inactive target",t),n}wt(t){const n=this.st.get(t);return n&&n.G?null:this.nt.Et(t)}dt(t){this.st.set(t,new gi),this.nt.getRemoteKeysForTarget(t).forEach(n=>{this.ct(t,n,null)})}It(t,n){return this.nt.getRemoteKeysForTarget(t).has(n)}}function mi(){return new z(E.comparator)}function yi(){return new z(E.comparator)}/**
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
 */const ld=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),dd=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class fd{constructor(t,n){this.databaseId=t,this.N=n}}function bs(e,t){return e.N?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ka(e,t){return e.N?t.toBase64():t.toUint8Array()}function be(e){return M(!!e),_.fromTimestamp(function(t){const n=yt(t);return new st(n.seconds,n.nanos)}(e))}function Ra(e,t){return function(n){return new x(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function Na(e){const t=x.fromString(e);return M(Oa(t)),t}function Jn(e,t){const n=Na(t);if(n.get(1)!==e.databaseId.projectId)throw new y(d.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new y(d.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new E(xa(n))}function Cs(e,t){return Ra(e.databaseId,t)}function pd(e){const t=Na(e);return t.length===4?x.emptyPath():xa(t)}function vi(e){return new x(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function xa(e){return M(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function gd(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:I()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(u,h){return u.N?(M(h===void 0||typeof h=="string"),G.fromBase64String(h||"")):(M(h===void 0||h instanceof Uint8Array),G.fromUint8Array(h||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const h=u.code===void 0?d.UNKNOWN:ba(u.code);return new y(h,u.message||"")}(o);n=new Da(s,r,i,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=Jn(e,s.document.name),i=be(s.document.updateTime),o=new ct({mapValue:{fields:s.document.fields}}),a=X.newFoundDocument(r,i,o),u=s.targetIds||[],h=s.removedTargetIds||[];n=new tn(u,h,a.key,a)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=Jn(e,s.document),i=s.readTime?be(s.readTime):_.min(),o=X.newNoDocument(r,i),a=s.removedTargetIds||[];n=new tn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=Jn(e,s.document),i=s.removedTargetIds||[];n=new tn([],i,r,null)}else{if(!("filter"in t))return I();{t.filter;const s=t.filter;s.targetId;const r=s.count||0,i=new id(r),o=s.targetId;n=new Aa(o,i)}}return n}function md(e,t){return{documents:[Cs(e,t.path)]}}function yd(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=Cs(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Cs(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(u){if(u.length===0)return;const h=u.map(c=>function(l){if(l.op==="=="){if(ii(l.value))return{unaryFilter:{field:Pt(l.field),op:"IS_NAN"}};if(ri(l.value))return{unaryFilter:{field:Pt(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if(ii(l.value))return{unaryFilter:{field:Pt(l.field),op:"IS_NOT_NAN"}};if(ri(l.value))return{unaryFilter:{field:Pt(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pt(l.field),op:Td(l.op),value:l.value}}}(c));return h.length===1?h[0]:{compositeFilter:{op:"AND",filters:h}}}(t.filters);r&&(n.structuredQuery.where=r);const i=function(u){if(u.length!==0)return u.map(h=>function(c){return{field:Pt(c.field),direction:Ed(c.dir)}}(h))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(u,h){return u.N||ee(h)?h:{value:h}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),n}function vd(e){let t=pd(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){M(s===1);const c=n.from[0];c.allDescendants?r=c.collectionId:t=t.child(c.collectionId)}let i=[];n.where&&(i=La(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(l){return new de(Ft(l.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(c)));let a=null;n.limit&&(a=function(c){let l;return l=typeof c=="object"?c.value:c,ee(l)?null:l}(n.limit));let u=null;n.startAt&&(u=function(c){const l=!!c.before,p=c.values||[];return new pn(p,l)}(n.startAt));let h=null;return n.endAt&&(h=function(c){const l=!c.before,p=c.values||[];return new pn(p,l)}(n.endAt)),Xl(t,r,o,i,a,"F",u,h)}function wd(e,t){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return I()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function La(e){return e?e.unaryFilter!==void 0?[_d(e)]:e.fieldFilter!==void 0?[Id(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>La(t)).reduce((t,n)=>t.concat(n)):I():[]}function Ed(e){return ld[e]}function Td(e){return dd[e]}function Pt(e){return{fieldPath:e.canonicalString()}}function Ft(e){return ut.fromServerFormat(e.fieldPath)}function Id(e){return nt.create(Ft(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(e.fieldFilter.op),e.fieldFilter.value)}function _d(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ft(e.unaryFilter.field);return nt.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Ft(e.unaryFilter.field);return nt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ft(e.unaryFilter.field);return nt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ft(e.unaryFilter.field);return nt.create(r,"!=",{nullValue:"NULL_VALUE"});default:return I()}}function Oa(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */const Sd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */class f{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new f((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof f?n:f.resolve(n)}catch(n){return f.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):f.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):f.reject(n)}static resolve(t){return new f((n,s)=>{n(t)})}static reject(t){return new f((n,s)=>{s(t)})}static waitFor(t){return new f((n,s)=>{let r=0,i=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},u=>s(u))}),o=!0,i===r&&n()})}static or(t){let n=f.resolve(!1);for(const s of t)n=n.next(r=>r?f.resolve(r):s());return n}static forEach(t,n){const s=[];return t.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}}function Ue(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Cd{constructor(t,n,s,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&rd(i,t,s[r])}}applyToLocalView(t){for(const n of this.baseMutations)n.key.isEqual(t.key)&&_s(n,t,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(t.key)&&_s(n,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(n=>{const s=t.get(n.key),r=s;this.applyToLocalView(r),s.isValidDocument()||r.convertToNoDocument(_.min())})}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),N())}isEqual(t){return this.batchId===t.batchId&&Ee(this.mutations,t.mutations,(n,s)=>ci(n,s))&&Ee(this.baseMutations,t.baseMutations,(n,s)=>ci(n,s))}}/**
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
 */class Ad{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Ct{constructor(t,n,s,r,i=_.min(),o=_.min(),a=G.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new Ct(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new Ct(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Ct(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
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
 */class Dd{constructor(t){this.Jt=t}}function kd(e){const t=vd({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Yl(t,t.limit,"L"):t}/**
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
 */class Rd{constructor(){this.qe=new Nd}addToCollectionParentIndex(t,n){return this.qe.add(n),f.resolve()}getCollectionParents(t,n){return f.resolve(this.qe.getEntries(n))}addFieldIndex(t,n){return f.resolve()}deleteFieldIndex(t,n){return f.resolve()}getDocumentsMatchingTarget(t,n){return f.resolve(null)}getFieldIndex(t,n){return f.resolve(null)}getFieldIndexes(t,n){return f.resolve([])}getNextCollectionGroupToUpdate(t){return f.resolve(null)}updateCollectionGroup(t,n,s){return f.resolve()}updateIndexEntries(t,n){return f.resolve()}}class Nd{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n]||new K(x.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(t){return(this.index[t]||new K(x.comparator)).toArray()}}/**
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
 */class Wt{constructor(t){this.mn=t}next(){return this.mn+=2,this.mn}static gn(){return new Wt(0)}static yn(){return new Wt(-1)}}/**
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
 */async function cr(e){if(e.code!==d.FAILED_PRECONDITION||e.message!==Sd)throw e;w("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class xd{constructor(){this.changes=new ne(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,X.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?f.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Ld{constructor(t,n,s){this.ds=t,this.Bs=n,this.indexManager=s}Ls(t,n){return this.Bs.getAllMutationBatchesAffectingDocumentKey(t,n).next(s=>this.Us(t,n,s))}Us(t,n,s){return this.ds.getEntry(t,n).next(r=>{for(const i of s)i.applyToLocalView(r);return r})}qs(t,n){t.forEach((s,r)=>{for(const i of n)i.applyToLocalView(r)})}Ks(t,n){return this.ds.getEntries(t,n).next(s=>this.Gs(t,s).next(()=>s))}Gs(t,n){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(t,n).next(s=>this.qs(n,s))}Qs(t,n,s){return function(r){return E.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.js(t,n.path):fa(n)?this.Ws(t,n,s):this.zs(t,n,s)}js(t,n){return this.Ls(t,new E(n)).next(s=>{let r=Ss();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}Ws(t,n,s){const r=n.collectionGroup;let i=Ss();return this.indexManager.getCollectionParents(t,r).next(o=>f.forEach(o,a=>{const u=function(h,c){return new Ve(c,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,a.child(r));return this.zs(t,u,s).next(h=>{h.forEach((c,l)=>{i=i.insert(c,l)})})}).next(()=>i))}zs(t,n,s){let r;return this.ds.getAllFromCollection(t,n.path,s).next(i=>(r=i,this.Bs.getAllMutationBatchesAffectingQuery(t,n))).next(i=>{for(const o of i)for(const a of o.mutations){const u=a.key;let h=r.get(u);h==null&&(h=X.newInvalidDocument(u),r=r.insert(u,h)),_s(a,h,o.localWriteTime),h.isFoundDocument()||(r=r.remove(u))}}).next(()=>(r.forEach((i,o)=>{hr(n,o)||(r=r.remove(i))}),r))}}/**
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
 */class lr{constructor(t,n,s,r){this.targetId=t,this.fromCache=n,this.Hs=s,this.Js=r}static Ys(t,n){let s=N(),r=N();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new lr(t,n.fromCache,s,r)}}/**
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
 */class Od{Xs(t){this.Zs=t}Qs(t,n,s,r){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(n)||s.isEqual(_.min())?this.ti(t,n):this.Zs.Ks(t,r).next(i=>{const o=this.ei(n,i);return(Je(n)||gn(n))&&this.ni(n.limitType,o,r,s)?this.ti(t,n):(Zr()<=A.DEBUG&&w("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Es(n)),this.Zs.Qs(t,n,Pl(s,-1)).next(a=>(o.forEach(u=>{a=a.insert(u.key,u)}),a)))})}ei(t,n){let s=new K(ga(t));return n.forEach((r,i)=>{hr(t,i)&&(s=s.add(i))}),s}ni(t,n,s,r){if(s.size!==n.size)return!0;const i=t==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ti(t,n){return Zr()<=A.DEBUG&&w("QueryEngine","Using full collection scan to execute query:",Es(n)),this.Zs.Qs(t,n,zt.min())}}/**
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
 */class Md{constructor(t,n,s,r){this.persistence=t,this.si=n,this.M=r,this.ii=new z(D),this.ri=new ne(i=>ar(i),ur),this.oi=new Map,this.ui=t.getRemoteDocumentCache(),this.fs=t.getTargetCache(),this._s=t.getBundleCache(),this.ai(s)}ai(t){this.indexManager=this.persistence.getIndexManager(t),this.Bs=this.persistence.getMutationQueue(t,this.indexManager),this.ci=new Ld(this.ui,this.Bs,this.indexManager),this.ui.setIndexManager(this.indexManager),this.si.Xs(this.ci)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ii))}}function Pd(e,t,n,s){return new Md(e,t,n,s)}async function Ma(e,t){const n=C(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.Bs.getAllMutationBatches(s).next(i=>(r=i,n.ai(t),n.Bs.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let u=N();for(const h of r){o.push(h.batchId);for(const c of h.mutations)u=u.add(c.key)}for(const h of i){a.push(h.batchId);for(const c of h.mutations)u=u.add(c.key)}return n.ci.Ks(s,u).next(h=>({hi:h,removedBatchIds:o,addedBatchIds:a}))})})}function Pa(e){const t=C(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.fs.getLastRemoteSnapshotVersion(n))}function Vd(e,t){const n=C(e),s=t.snapshotVersion;let r=n.ii;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ui.newChangeBuffer({trackRemovals:!0});r=n.ii;const a=[];t.targetChanges.forEach((h,c)=>{const l=r.get(c);if(!l)return;a.push(n.fs.removeMatchingKeys(i,h.removedDocuments,c).next(()=>n.fs.addMatchingKeys(i,h.addedDocuments,c)));let p=l.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.has(c)?p=p.withResumeToken(G.EMPTY_BYTE_STRING,_.min()).withLastLimboFreeSnapshotVersion(_.min()):h.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(h.resumeToken,s)),r=r.insert(c,p),function(m,v,k){return m.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(l,p,h)&&a.push(n.fs.updateTargetData(i,p))});let u=Ot();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(Fd(i,o,t.documentUpdates).next(h=>{u=h})),!s.isEqual(_.min())){const h=n.fs.getLastRemoteSnapshotVersion(i).next(c=>n.fs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(h)}return f.waitFor(a).next(()=>o.apply(i)).next(()=>n.ci.Gs(i,u)).next(()=>u)}).then(i=>(n.ii=r,i))}function Fd(e,t,n){let s=N();return n.forEach(r=>s=s.add(r)),t.getEntries(e,s).next(r=>{let i=Ot();return n.forEach((o,a)=>{const u=r.get(o);a.isNoDocument()&&a.version.isEqual(_.min())?(t.removeEntry(o,a.readTime),i=i.insert(o,a)):!u.isValidDocument()||a.version.compareTo(u.version)>0||a.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(a),i=i.insert(o,a)):w("LocalStore","Ignoring outdated watch update for ",o,". Current version:",u.version," Watch version:",a.version)}),i})}function Ud(e,t){const n=C(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.fs.getTargetData(s,t).next(i=>i?(r=i,f.resolve(r)):n.fs.allocateTargetId(s).next(o=>(r=new Ct(t,o,0,s.currentSequenceNumber),n.fs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.ii.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ii=n.ii.insert(s.targetId,s),n.ri.set(t,s.targetId)),s})}async function As(e,t,n){const s=C(e),r=s.ii.get(t),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Ue(o))throw o;w("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.ii=s.ii.remove(t),s.ri.delete(r.target)}function wi(e,t,n){const s=C(e);let r=_.min(),i=N();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,u,h){const c=C(a),l=c.ri.get(h);return l!==void 0?f.resolve(c.ii.get(l)):c.fs.getTargetData(u,h)}(s,o,Lt(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.fs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{i=u})}).next(()=>s.si.Qs(o,t,n?r:_.min(),n?i:N())).next(a=>(Bd(s,Ql(t),a),{documents:a,li:i})))}function Bd(e,t,n){let s=_.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),e.oi.set(t,s)}/**
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
 */class $d{constructor(t){this.M=t,this.wi=new Map,this.mi=new Map}getBundleMetadata(t,n){return f.resolve(this.wi.get(n))}saveBundleMetadata(t,n){var s;return this.wi.set(n.id,{id:(s=n).id,version:s.version,createTime:be(s.createTime)}),f.resolve()}getNamedQuery(t,n){return f.resolve(this.mi.get(n))}saveNamedQuery(t,n){return this.mi.set(n.name,function(s){return{name:s.name,query:kd(s.bundledQuery),readTime:be(s.readTime)}}(n)),f.resolve()}}/**
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
 */class qd{constructor(){this.overlays=new z(E.comparator),this.gi=new Map}getOverlay(t,n){return f.resolve(this.overlays.get(n))}saveOverlays(t,n,s){return s.forEach((r,i)=>{this.Xt(t,n,i)}),f.resolve()}removeOverlaysForBatchId(t,n,s){const r=this.gi.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.gi.delete(s)),f.resolve()}getOverlaysForCollection(t,n,s){const r=Qn(),i=n.length+1,o=new E(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>s&&r.set(u.getKey(),u)}return f.resolve(r)}getOverlaysForCollectionGroup(t,n,s,r){let i=new z((h,c)=>h-c);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>s){let c=i.get(h.largestBatchId);c===null&&(c=Qn(),i=i.insert(h.largestBatchId,c)),c.set(h.getKey(),h)}}const a=Qn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,c)=>a.set(h,c)),!(a.size()>=r)););return f.resolve(a)}Xt(t,n,s){if(s===null)return;const r=this.overlays.get(s.key);if(r!==null){const o=this.gi.get(r.largestBatchId).delete(s.key);this.gi.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Ad(n,s));let i=this.gi.get(n);i===void 0&&(i=N(),this.gi.set(n,i)),this.gi.set(n,i.add(s.key))}}/**
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
 */class dr{constructor(){this.yi=new K(F.pi),this.Ii=new K(F.Ti)}isEmpty(){return this.yi.isEmpty()}addReference(t,n){const s=new F(t,n);this.yi=this.yi.add(s),this.Ii=this.Ii.add(s)}Ei(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.Ai(new F(t,n))}Ri(t,n){t.forEach(s=>this.removeReference(s,n))}Pi(t){const n=new E(new x([])),s=new F(n,t),r=new F(n,t+1),i=[];return this.Ii.forEachInRange([s,r],o=>{this.Ai(o),i.push(o.key)}),i}bi(){this.yi.forEach(t=>this.Ai(t))}Ai(t){this.yi=this.yi.delete(t),this.Ii=this.Ii.delete(t)}Vi(t){const n=new E(new x([])),s=new F(n,t),r=new F(n,t+1);let i=N();return this.Ii.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new F(t,0),s=this.yi.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class F{constructor(t,n){this.key=t,this.vi=n}static pi(t,n){return E.comparator(t.key,n.key)||D(t.vi,n.vi)}static Ti(t,n){return D(t.vi,n.vi)||E.comparator(t.key,n.key)}}/**
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
 */class jd{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.Bs=[],this.Si=1,this.Di=new K(F.pi)}checkEmpty(t){return f.resolve(this.Bs.length===0)}addMutationBatch(t,n,s,r){const i=this.Si;this.Si++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const o=new Cd(i,n,s,r);this.Bs.push(o);for(const a of r)this.Di=this.Di.add(new F(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(t,n){return f.resolve(this.Ci(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,r=this.xi(s),i=r<0?0:r;return f.resolve(this.Bs.length>i?this.Bs[i]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.Bs.length===0?-1:this.Si-1)}getAllMutationBatches(t){return f.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new F(n,0),r=new F(n,Number.POSITIVE_INFINITY),i=[];return this.Di.forEachInRange([s,r],o=>{const a=this.Ci(o.vi);i.push(a)}),f.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new K(D);return n.forEach(r=>{const i=new F(r,0),o=new F(r,Number.POSITIVE_INFINITY);this.Di.forEachInRange([i,o],a=>{s=s.add(a.vi)})}),f.resolve(this.Ni(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,r=s.length+1;let i=s;E.isDocumentKey(i)||(i=i.child(""));const o=new F(new E(i),0);let a=new K(D);return this.Di.forEachWhile(u=>{const h=u.key.path;return!!s.isPrefixOf(h)&&(h.length===r&&(a=a.add(u.vi)),!0)},o),f.resolve(this.Ni(a))}Ni(t){const n=[];return t.forEach(s=>{const r=this.Ci(s);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){M(this.ki(n.batchId,"removed")===0),this.Bs.shift();let s=this.Di;return f.forEach(n.mutations,r=>{const i=new F(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.Di=s})}_n(t){}containsKey(t,n){const s=new F(n,0),r=this.Di.firstAfterOrEqual(s);return f.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.Bs.length,f.resolve()}ki(t,n){return this.xi(t)}xi(t){return this.Bs.length===0?0:t-this.Bs[0].batchId}Ci(t){const n=this.xi(t);return n<0||n>=this.Bs.length?null:this.Bs[n]}}/**
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
 */class Hd{constructor(t){this.Mi=t,this.docs=new z(E.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Mi(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return f.resolve(s?s.document.mutableCopy():X.newInvalidDocument(n))}getEntries(t,n){let s=Ot();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():X.newInvalidDocument(r))}),f.resolve(s)}getAllFromCollection(t,n,s){let r=Ot();const i=new E(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:u}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Fl(Vl(u),s)<=0||(r=r.insert(u.key,u.mutableCopy()))}return f.resolve(r)}getAllFromCollectionGroup(t,n,s,r){I()}Oi(t,n){return f.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new Kd(this)}getSize(t){return f.resolve(this.size)}}class Kd extends xd{constructor(t){super(),this.Kn=t}applyChanges(t){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Kn.addEntry(t,r)):this.Kn.removeEntry(s)}),f.waitFor(n)}getFromCache(t,n){return this.Kn.getEntry(t,n)}getAllFromCache(t,n){return this.Kn.getEntries(t,n)}}/**
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
 */class Gd{constructor(t){this.persistence=t,this.Fi=new ne(n=>ar(n),ur),this.lastRemoteSnapshotVersion=_.min(),this.highestTargetId=0,this.$i=0,this.Bi=new dr,this.targetCount=0,this.Li=Wt.gn()}forEachTarget(t,n){return this.Fi.forEach((s,r)=>n(r)),f.resolve()}getLastRemoteSnapshotVersion(t){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return f.resolve(this.$i)}allocateTargetId(t){return this.highestTargetId=this.Li.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.$i&&(this.$i=n),f.resolve()}Tn(t){this.Fi.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Li=new Wt(n),this.highestTargetId=n),t.sequenceNumber>this.$i&&(this.$i=t.sequenceNumber)}addTargetData(t,n){return this.Tn(n),this.targetCount+=1,f.resolve()}updateTargetData(t,n){return this.Tn(n),f.resolve()}removeTargetData(t,n){return this.Fi.delete(n.target),this.Bi.Pi(n.targetId),this.targetCount-=1,f.resolve()}removeTargets(t,n,s){let r=0;const i=[];return this.Fi.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Fi.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),f.waitFor(i).next(()=>r)}getTargetCount(t){return f.resolve(this.targetCount)}getTargetData(t,n){const s=this.Fi.get(n)||null;return f.resolve(s)}addMatchingKeys(t,n,s){return this.Bi.Ei(n,s),f.resolve()}removeMatchingKeys(t,n,s){this.Bi.Ri(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),f.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Bi.Pi(n),f.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Bi.Vi(n);return f.resolve(s)}containsKey(t,n){return f.resolve(this.Bi.containsKey(n))}}/**
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
 */class zd{constructor(t,n){this.Ui={},this.overlays={},this.es=new ir(0),this.ns=!1,this.ns=!0,this.referenceDelegate=t(this),this.fs=new Gd(this),this.indexManager=new Rd,this.ds=function(s){return new Hd(s)}(s=>this.referenceDelegate.qi(s)),this.M=new Dd(n),this._s=new $d(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new qd,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Ui[t.toKey()];return s||(s=new jd(n,this.referenceDelegate),this.Ui[t.toKey()]=s),s}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(t,n,s){w("MemoryPersistence","Starting transaction:",t);const r=new Wd(this.es.next());return this.referenceDelegate.Ki(),s(r).next(i=>this.referenceDelegate.Gi(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Qi(t,n){return f.or(Object.values(this.Ui).map(s=>()=>s.containsKey(t,n)))}}class Wd extends bd{constructor(t){super(),this.currentSequenceNumber=t}}class fr{constructor(t){this.persistence=t,this.ji=new dr,this.Wi=null}static zi(t){return new fr(t)}get Hi(){if(this.Wi)return this.Wi;throw I()}addReference(t,n,s){return this.ji.addReference(s,n),this.Hi.delete(s.toString()),f.resolve()}removeReference(t,n,s){return this.ji.removeReference(s,n),this.Hi.add(s.toString()),f.resolve()}markPotentiallyOrphaned(t,n){return this.Hi.add(n.toString()),f.resolve()}removeTarget(t,n){this.ji.Pi(n.targetId).forEach(r=>this.Hi.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(i=>this.Hi.add(i.toString()))}).next(()=>s.removeTargetData(t,n))}Ki(){this.Wi=new Set}Gi(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Hi,s=>{const r=E.fromPath(s);return this.Ji(t,r).next(i=>{i||n.removeEntry(r,_.min())})}).next(()=>(this.Wi=null,n.apply(t)))}updateLimboDocument(t,n){return this.Ji(t,n).next(s=>{s?this.Hi.delete(n.toString()):this.Hi.add(n.toString())})}qi(t){return 0}Ji(t,n){return f.or([()=>f.resolve(this.ji.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Qi(t,n)])}}class Ei{constructor(){this.activeTargetIds=Ca()}Zi(t){this.activeTargetIds=this.activeTargetIds.add(t)}tr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Xi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Xd{constructor(){this.$r=new Ei,this.Br={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.$r.Zi(t),this.Br[t]||"not-current"}updateQueryState(t,n,s){this.Br[t]=n}removeLocalQueryTarget(t){this.$r.tr(t)}isLocalQueryTarget(t){return this.$r.activeTargetIds.has(t)}clearQueryState(t){delete this.Br[t]}getAllActiveQueryTargets(){return this.$r.activeTargetIds}isActiveQueryTarget(t){return this.$r.activeTargetIds.has(t)}start(){return this.$r=new Ei,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Yd{Lr(t){}shutdown(){}}/**
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
 */class Ti{constructor(){this.Ur=()=>this.qr(),this.Kr=()=>this.Gr(),this.Qr=[],this.jr()}Lr(t){this.Qr.push(t)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Kr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Kr)}qr(){w("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Qr)t(0)}Gr(){w("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Qr)t(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Qd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class Jd{constructor(t){this.Wr=t.Wr,this.zr=t.zr}Hr(t){this.Jr=t}Yr(t){this.Xr=t}onMessage(t){this.Zr=t}close(){this.zr()}send(t){this.Wr(t)}eo(){this.Jr()}no(t){this.Xr(t)}so(t){this.Zr(t)}}/**
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
 */class Zd extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.io=n+"://"+t.host,this.ro="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}oo(t,n,s,r,i){const o=this.uo(t,n);w("RestConnection","Sending: ",o,s);const a={};return this.ao(a,r,i),this.co(t,o,a,s).then(u=>(w("RestConnection","Received: ",u),u),u=>{throw ti("RestConnection",`${t} failed with error: `,u,"url: ",o,"request:",s),u})}ho(t,n,s,r,i){return this.oo(t,n,s,r,i)}ao(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+te,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>t[i]=r),s&&s.headers.forEach((r,i)=>t[i]=r)}uo(t,n){const s=Qd[t];return`${this.io}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,n,s,r){return new Promise((i,o)=>{const a=new Tl;a.listenOnce(vl.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Xn.NO_ERROR:const h=a.getResponseJson();w("Connection","XHR received:",JSON.stringify(h)),i(h);break;case Xn.TIMEOUT:w("Connection",'RPC "'+t+'" timed out'),o(new y(d.DEADLINE_EXCEEDED,"Request time out"));break;case Xn.HTTP_ERROR:const c=a.getStatus();if(w("Connection",'RPC "'+t+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const l=a.getResponseJson().error;if(l&&l.status&&l.message){const p=function(m){const v=m.toLowerCase().replace(/_/g,"-");return Object.values(d).indexOf(v)>=0?v:d.UNKNOWN}(l.status);o(new y(p,l.message))}else o(new y(d.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new y(d.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{w("Connection",'RPC "'+t+'" completed.')}});const u=JSON.stringify(r);a.send(n,"POST",u,s,15)})}lo(t,n,s){const r=[this.io,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=ml(),o=yl(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new El({})),this.ao(a.initMessageHeaders,n,s),au()||hu()||cu()||lu()||du()||uu()||(a.httpHeadersOverwriteParam="$httpHeaders");const u=r.join("");w("Connection","Creating WebChannel: "+u,a);const h=i.createWebChannel(u,a);let c=!1,l=!1;const p=new Jd({Wr:v=>{l?w("Connection","Not sending because WebChannel is closed:",v):(c||(w("Connection","Opening WebChannel transport."),h.open(),c=!0),w("Connection","WebChannel sending:",v),h.send(v))},zr:()=>h.close()}),m=(v,k,S)=>{v.listen(k,V=>{try{S(V)}catch(rt){setTimeout(()=>{throw rt},0)}})};return m(h,Xe.EventType.OPEN,()=>{l||w("Connection","WebChannel transport opened.")}),m(h,Xe.EventType.CLOSE,()=>{l||(l=!0,w("Connection","WebChannel transport closed"),p.no())}),m(h,Xe.EventType.ERROR,v=>{l||(l=!0,ti("Connection","WebChannel transport errored:",v),p.no(new y(d.UNAVAILABLE,"The operation could not be completed")))}),m(h,Xe.EventType.MESSAGE,v=>{var k;if(!l){const S=v.data[0];M(!!S);const V=S,rt=V.error||((k=V[0])===null||k===void 0?void 0:k.error);if(rt){w("Connection","WebChannel received error:",rt);const at=rt.status;let $=function(re){const je=L[re];if(je!==void 0)return ba(je)}(at),Et=rt.message;$===void 0&&($=d.INTERNAL,Et="Unknown error status: "+at+" with message "+rt.message),l=!0,p.no(new y($,Et)),h.close()}else w("Connection","WebChannel received:",S),p.so(S)}}),m(o,wl.STAT_EVENT,v=>{v.stat===Qr.PROXY?w("Connection","Detected buffering proxy"):v.stat===Qr.NOPROXY&&w("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.eo()},0),p}}function Zn(){return typeof document!="undefined"?document:null}/**
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
 */function Mn(e){return new fd(e,!0)}class Va{constructor(t,n,s=1e3,r=1.5,i=6e4){this.Yn=t,this.timerId=n,this.fo=s,this._o=r,this.wo=i,this.mo=0,this.yo=null,this.po=Date.now(),this.reset()}reset(){this.mo=0}Io(){this.mo=this.wo}To(t){this.cancel();const n=Math.floor(this.mo+this.Eo()),s=Math.max(0,Date.now()-this.po),r=Math.max(0,n-s);r>0&&w("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.mo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.yo=this.Yn.enqueueAfterDelay(this.timerId,r,()=>(this.po=Date.now(),t())),this.mo*=this._o,this.mo<this.fo&&(this.mo=this.fo),this.mo>this.wo&&(this.mo=this.wo)}Ao(){this.yo!==null&&(this.yo.skipDelay(),this.yo=null)}cancel(){this.yo!==null&&(this.yo.cancel(),this.yo=null)}Eo(){return(Math.random()-.5)*this.mo}}/**
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
 */class tf{constructor(t,n,s,r,i,o,a,u){this.Yn=t,this.Ro=s,this.Po=r,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Vo=0,this.vo=null,this.So=null,this.stream=null,this.Do=new Va(t,n)}Co(){return this.state===1||this.state===5||this.xo()}xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.No()}async stop(){this.Co()&&await this.close(0)}ko(){this.state=0,this.Do.reset()}Mo(){this.xo()&&this.vo===null&&(this.vo=this.Yn.enqueueAfterDelay(this.Ro,6e4,()=>this.Oo()))}Fo(t){this.$o(),this.stream.send(t)}async Oo(){if(this.xo())return this.close(0)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}Bo(){this.So&&(this.So.cancel(),this.So=null)}async close(t,n){this.$o(),this.Bo(),this.Do.cancel(),this.Vo++,t!==4?this.Do.reset():n&&n.code===d.RESOURCE_EXHAUSTED?(mt(n.toString()),mt("Using maximum backoff delay to prevent overloading the backend."),this.Do.Io()):n&&n.code===d.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Lo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Yr(n)}Lo(){}auth(){this.state=1;const t=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Vo===n&&this.qo(s,r)},s=>{t(()=>{const r=new y(d.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Ko(r)})})}qo(t,n){const s=this.Uo(this.Vo);this.stream=this.Go(t,n),this.stream.Hr(()=>{s(()=>(this.state=2,this.So=this.Yn.enqueueAfterDelay(this.Po,1e4,()=>(this.xo()&&(this.state=3),Promise.resolve())),this.listener.Hr()))}),this.stream.Yr(r=>{s(()=>this.Ko(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}No(){this.state=5,this.Do.To(async()=>{this.state=0,this.start()})}Ko(t){return w("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Uo(t){return n=>{this.Yn.enqueueAndForget(()=>this.Vo===t?n():(w("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ef extends tf{constructor(t,n,s,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.M=i}Go(t,n){return this.bo.lo("Listen",t,n)}onMessage(t){this.Do.reset();const n=gd(this.M,t),s=function(r){if(!("targetChange"in r))return _.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?_.min():i.readTime?be(i.readTime):_.min()}(t);return this.listener.Qo(n,s)}jo(t){const n={};n.database=vi(this.M),n.addTarget=function(r,i){let o;const a=i.target;return o=ws(a)?{documents:md(r,a)}:{query:yd(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=ka(r,i.resumeToken):i.snapshotVersion.compareTo(_.min())>0&&(o.readTime=bs(r,i.snapshotVersion.toTimestamp())),o}(this.M,t);const s=wd(this.M,t);s&&(n.labels=s),this.Fo(n)}Wo(t){const n={};n.database=vi(this.M),n.removeTarget=t,this.Fo(n)}}/**
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
 */class nf extends class{}{constructor(t,n,s,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.bo=s,this.M=r,this.tu=!1}eu(){if(this.tu)throw new y(d.FAILED_PRECONDITION,"The client has already been terminated.")}oo(t,n,s){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.oo(t,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new y(d.UNKNOWN,r.toString())})}ho(t,n,s){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.ho(t,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new y(d.UNKNOWN,r.toString())})}terminate(){this.tu=!0}}class sf{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.nu=0,this.su=null,this.iu=!0}ru(){this.nu===0&&(this.ou("Unknown"),this.su=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.su=null,this.uu("Backend didn't respond within 10 seconds."),this.ou("Offline"),Promise.resolve())))}au(t){this.state==="Online"?this.ou("Unknown"):(this.nu++,this.nu>=1&&(this.cu(),this.uu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ou("Offline")))}set(t){this.cu(),this.nu=0,t==="Online"&&(this.iu=!1),this.ou(t)}ou(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}uu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.iu?(mt(n),this.iu=!1):w("OnlineStateTracker",n)}cu(){this.su!==null&&(this.su.cancel(),this.su=null)}}/**
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
 */class rf{constructor(t,n,s,r,i){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.hu=[],this.lu=new Map,this.fu=new Set,this.du=[],this._u=i,this._u.Lr(o=>{s.enqueueAndForget(async()=>{$e(this)&&(w("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=C(a);u.fu.add(4),await Be(u),u.wu.set("Unknown"),u.fu.delete(4),await Pn(u)}(this))})}),this.wu=new sf(s,r)}}async function Pn(e){if($e(e))for(const t of e.du)await t(!0)}async function Be(e){for(const t of e.du)await t(!1)}function Fa(e,t){const n=C(e);n.lu.has(t.targetId)||(n.lu.set(t.targetId,t),mr(n)?gr(n):se(n).xo()&&pr(n,t))}function Ua(e,t){const n=C(e),s=se(n);n.lu.delete(t),s.xo()&&Ba(n,t),n.lu.size===0&&(s.xo()?s.Mo():$e(n)&&n.wu.set("Unknown"))}function pr(e,t){e.mu.Z(t.targetId),se(e).jo(t)}function Ba(e,t){e.mu.Z(t),se(e).Wo(t)}function gr(e){e.mu=new cd({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.lu.get(t)||null}),se(e).start(),e.wu.ru()}function mr(e){return $e(e)&&!se(e).Co()&&e.lu.size>0}function $e(e){return C(e).fu.size===0}function $a(e){e.mu=void 0}async function of(e){e.lu.forEach((t,n)=>{pr(e,t)})}async function af(e,t){$a(e),mr(e)?(e.wu.au(t),gr(e)):e.wu.set("Unknown")}async function uf(e,t,n){if(e.wu.set("Online"),t instanceof Da&&t.state===2&&t.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.lu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.lu.delete(o),s.mu.removeTarget(o))}(e,t)}catch(s){w("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Ii(e,s)}else if(t instanceof tn?e.mu.ut(t):t instanceof Aa?e.mu._t(t):e.mu.ht(t),!n.isEqual(_.min()))try{const s=await Pa(e.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.mu.yt(i);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const h=r.lu.get(u);h&&r.lu.set(u,h.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const u=r.lu.get(a);if(!u)return;r.lu.set(a,u.withResumeToken(G.EMPTY_BYTE_STRING,u.snapshotVersion)),Ba(r,a);const h=new Ct(u.target,a,1,u.sequenceNumber);pr(r,h)}),r.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){w("RemoteStore","Failed to raise snapshot:",s),await Ii(e,s)}}async function Ii(e,t,n){if(!Ue(t))throw t;e.fu.add(1),await Be(e),e.wu.set("Offline"),n||(n=()=>Pa(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{w("RemoteStore","Retrying IndexedDB access"),await n(),e.fu.delete(1),await Pn(e)})}async function _i(e,t){const n=C(e);n.asyncQueue.verifyOperationInProgress(),w("RemoteStore","RemoteStore received new credentials");const s=$e(n);n.fu.add(3),await Be(n),s&&n.wu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.fu.delete(3),await Pn(n)}async function hf(e,t){const n=C(e);t?(n.fu.delete(2),await Pn(n)):t||(n.fu.add(2),await Be(n),n.wu.set("Unknown"))}function se(e){return e.gu||(e.gu=function(t,n,s){const r=C(t);return r.eu(),new ef(n,r.bo,r.authCredentials,r.appCheckCredentials,r.M,s)}(e.datastore,e.asyncQueue,{Hr:of.bind(null,e),Yr:af.bind(null,e),Qo:uf.bind(null,e)}),e.du.push(async t=>{t?(e.gu.ko(),mr(e)?gr(e):e.wu.set("Unknown")):(await e.gu.stop(),$a(e))})),e.gu}/**
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
 */class yr{constructor(t,n,s,r,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new bt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,r,i){const o=Date.now()+s,a=new yr(t,n,o,r,i);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(d.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qa(e,t){if(mt("AsyncQueue",`${t}: ${e}`),Ue(e))return new y(d.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class Bt{constructor(t){this.comparator=t?(n,s)=>t(n,s)||E.comparator(n.key,s.key):(n,s)=>E.comparator(n.key,s.key),this.keyedMap=Ss(),this.sortedSet=new z(this.comparator)}static emptySet(t){return new Bt(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Bt)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Bt;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
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
 */class Si{constructor(){this.pu=new z(E.comparator)}track(t){const n=t.doc.key,s=this.pu.get(n);s?t.type!==0&&s.type===3?this.pu=this.pu.insert(n,t):t.type===3&&s.type!==1?this.pu=this.pu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.pu=this.pu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.pu=this.pu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.pu=this.pu.remove(n):t.type===1&&s.type===2?this.pu=this.pu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.pu=this.pu.insert(n,{type:2,doc:t.doc}):I():this.pu=this.pu.insert(n,t)}Iu(){const t=[];return this.pu.inorderTraversal((n,s)=>{t.push(s)}),t}}class Xt{constructor(t,n,s,r,i,o,a,u){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u}static fromInitialDocuments(t,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new Xt(t,n,Bt.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&xn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class cf{constructor(){this.Tu=void 0,this.listeners=[]}}class lf{constructor(){this.queries=new ne(t=>pa(t),xn),this.onlineState="Unknown",this.Eu=new Set}}async function df(e,t){const n=C(e),s=t.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new cf),r)try{i.Tu=await n.onListen(s)}catch(o){const a=qa(o,`Initialization of query '${Es(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.listeners.push(t),t.Au(n.onlineState),i.Tu&&t.Ru(i.Tu)&&vr(n)}async function ff(e,t){const n=C(e),s=t.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function pf(e,t){const n=C(e);let s=!1;for(const r of t){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Ru(r)&&(s=!0);o.Tu=r}}s&&vr(n)}function gf(e,t,n){const s=C(e),r=s.queries.get(t);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(t)}function vr(e){e.Eu.forEach(t=>{t.next()})}class mf{constructor(t,n,s){this.query=t,this.Pu=n,this.bu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}Ru(t){if(!this.options.includeMetadataChanges){const s=[];for(const r of t.docChanges)r.type!==3&&s.push(r);t=new Xt(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(t)&&(this.Pu.next(t),n=!0):this.Su(t,this.onlineState)&&(this.Du(t),n=!0),this.Vu=t,n}onError(t){this.Pu.error(t)}Au(t){this.onlineState=t;let n=!1;return this.Vu&&!this.bu&&this.Su(this.Vu,t)&&(this.Du(this.Vu),n=!0),n}Su(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Cu||!s)&&(!t.docs.isEmpty()||n==="Offline")}vu(t){if(t.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Du(t){t=Xt.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Pu.next(t)}}/**
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
 */class ja{constructor(t){this.key=t}}class Ha{constructor(t){this.key=t}}class yf{constructor(t,n){this.query=t,this.$u=n,this.Bu=null,this.current=!1,this.Lu=N(),this.mutatedKeys=N(),this.Uu=ga(t),this.qu=new Bt(this.Uu)}get Ku(){return this.$u}Gu(t,n){const s=n?n.Qu:new Si,r=n?n.qu:this.qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const u=Je(this.query)&&r.size===this.query.limit?r.last():null,h=gn(this.query)&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((c,l)=>{const p=r.get(c),m=hr(this.query,l)?l:null,v=!!p&&this.mutatedKeys.has(p.key),k=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let S=!1;p&&m?p.data.isEqual(m.data)?v!==k&&(s.track({type:3,doc:m}),S=!0):this.ju(p,m)||(s.track({type:2,doc:m}),S=!0,(u&&this.Uu(m,u)>0||h&&this.Uu(m,h)<0)&&(a=!0)):!p&&m?(s.track({type:0,doc:m}),S=!0):p&&!m&&(s.track({type:1,doc:p}),S=!0,(u||h)&&(a=!0)),S&&(m?(o=o.add(m),i=k?i.add(c):i.delete(c)):(o=o.delete(c),i=i.delete(c)))}),Je(this.query)||gn(this.query))for(;o.size>this.query.limit;){const c=Je(this.query)?o.last():o.first();o=o.delete(c.key),i=i.delete(c.key),s.track({type:1,doc:c})}return{qu:o,Qu:s,ni:a,mutatedKeys:i}}ju(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const r=this.qu;this.qu=t.qu,this.mutatedKeys=t.mutatedKeys;const i=t.Qu.Iu();i.sort((h,c)=>function(l,p){const m=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return m(l)-m(p)}(h.type,c.type)||this.Uu(h.doc,c.doc)),this.Wu(s);const o=n?this.zu():[],a=this.Lu.size===0&&this.current?1:0,u=a!==this.Bu;return this.Bu=a,i.length!==0||u?{snapshot:new Xt(this.query,t.qu,r,i,t.mutatedKeys,a===0,u,!1),Hu:o}:{Hu:o}}Au(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({qu:this.qu,Qu:new Si,mutatedKeys:this.mutatedKeys,ni:!1},!1)):{Hu:[]}}Ju(t){return!this.$u.has(t)&&!!this.qu.has(t)&&!this.qu.get(t).hasLocalMutations}Wu(t){t&&(t.addedDocuments.forEach(n=>this.$u=this.$u.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.$u=this.$u.delete(n)),this.current=t.current)}zu(){if(!this.current)return[];const t=this.Lu;this.Lu=N(),this.qu.forEach(s=>{this.Ju(s.key)&&(this.Lu=this.Lu.add(s.key))});const n=[];return t.forEach(s=>{this.Lu.has(s)||n.push(new Ha(s))}),this.Lu.forEach(s=>{t.has(s)||n.push(new ja(s))}),n}Yu(t){this.$u=t.li,this.Lu=N();const n=this.Gu(t.documents);return this.applyChanges(n,!0)}Xu(){return Xt.fromInitialDocuments(this.query,this.qu,this.mutatedKeys,this.Bu===0)}}class vf{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class wf{constructor(t){this.key=t,this.Zu=!1}}class Ef{constructor(t,n,s,r,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.ta={},this.ea=new ne(a=>pa(a),xn),this.na=new Map,this.sa=new Set,this.ia=new z(E.comparator),this.ra=new Map,this.oa=new dr,this.ua={},this.aa=new Map,this.ca=Wt.yn(),this.onlineState="Unknown",this.ha=void 0}get isPrimaryClient(){return this.ha===!0}}async function Tf(e,t){const n=Df(e);let s,r;const i=n.ea.get(t);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.Xu();else{const o=await Ud(n.localStore,Lt(t));n.isPrimaryClient&&Fa(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await If(n,t,s,a==="current")}return r}async function If(e,t,n,s){e.la=(c,l,p)=>async function(m,v,k,S){let V=v.view.Gu(k);V.ni&&(V=await wi(m.localStore,v.query,!1).then(({documents:$})=>v.view.Gu($,V)));const rt=S&&S.targetChanges.get(v.targetId),at=v.view.applyChanges(V,m.isPrimaryClient,rt);return Ci(m,v.targetId,at.Hu),at.snapshot}(e,c,l,p);const r=await wi(e.localStore,t,!0),i=new yf(t,r.li),o=i.Gu(r.documents),a=Fe.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline"),u=i.applyChanges(o,e.isPrimaryClient,a);Ci(e,n,u.Hu);const h=new vf(t,n,i);return e.ea.set(t,h),e.na.has(n)?e.na.get(n).push(t):e.na.set(n,[t]),u.snapshot}async function _f(e,t){const n=C(e),s=n.ea.get(t),r=n.na.get(s.targetId);if(r.length>1)return n.na.set(s.targetId,r.filter(i=>!xn(i,t))),void n.ea.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await As(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Ua(n.remoteStore,s.targetId),Ds(n,s.targetId)}).catch(cr)):(Ds(n,s.targetId),await As(n.localStore,s.targetId,!0))}async function Ka(e,t){const n=C(e);try{const s=await Vd(n.localStore,t);t.targetChanges.forEach((r,i)=>{const o=n.ra.get(i);o&&(M(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Zu=!0:r.modifiedDocuments.size>0?M(o.Zu):r.removedDocuments.size>0&&(M(o.Zu),o.Zu=!1))}),await za(n,s,t)}catch(s){await cr(s)}}function bi(e,t,n){const s=C(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ea.forEach((i,o)=>{const a=o.view.Au(t);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=C(i);a.onlineState=o;let u=!1;a.queries.forEach((h,c)=>{for(const l of c.listeners)l.Au(o)&&(u=!0)}),u&&vr(a)}(s.eventManager,t),r.length&&s.ta.Qo(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function Sf(e,t,n){const s=C(e);s.sharedClientState.updateQueryState(t,"rejected",n);const r=s.ra.get(t),i=r&&r.key;if(i){let o=new z(E.comparator);o=o.insert(i,X.newNoDocument(i,_.min()));const a=N().add(i),u=new On(_.min(),new Map,new K(D),o,a);await Ka(s,u),s.ia=s.ia.remove(i),s.ra.delete(t),wr(s)}else await As(s.localStore,t,!1).then(()=>Ds(s,t,n)).catch(cr)}function Ds(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.na.get(t))e.ea.delete(s),n&&e.ta.fa(s,n);e.na.delete(t),e.isPrimaryClient&&e.oa.Pi(t).forEach(s=>{e.oa.containsKey(s)||Ga(e,s)})}function Ga(e,t){e.sa.delete(t.path.canonicalString());const n=e.ia.get(t);n!==null&&(Ua(e.remoteStore,n),e.ia=e.ia.remove(t),e.ra.delete(n),wr(e))}function Ci(e,t,n){for(const s of n)s instanceof ja?(e.oa.addReference(s.key,t),bf(e,s)):s instanceof Ha?(w("SyncEngine","Document no longer in limbo: "+s.key),e.oa.removeReference(s.key,t),e.oa.containsKey(s.key)||Ga(e,s.key)):I()}function bf(e,t){const n=t.key,s=n.path.canonicalString();e.ia.get(n)||e.sa.has(s)||(w("SyncEngine","New document in limbo: "+n),e.sa.add(s),wr(e))}function wr(e){for(;e.sa.size>0&&e.ia.size<e.maxConcurrentLimboResolutions;){const t=e.sa.values().next().value;e.sa.delete(t);const n=new E(x.fromString(t)),s=e.ca.next();e.ra.set(s,new wf(n)),e.ia=e.ia.insert(n,s),Fa(e.remoteStore,new Ct(Lt(ca(n.path)),s,2,ir.A))}}async function za(e,t,n){const s=C(e),r=[],i=[],o=[];s.ea.isEmpty()||(s.ea.forEach((a,u)=>{o.push(s.la(u,t,n).then(h=>{if(h){s.isPrimaryClient&&s.sharedClientState.updateQueryState(u.targetId,h.fromCache?"not-current":"current"),r.push(h);const c=lr.Ys(u.targetId,h);i.push(c)}}))}),await Promise.all(o),s.ta.Qo(r),await async function(a,u){const h=C(a);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>f.forEach(u,l=>f.forEach(l.Hs,p=>h.persistence.referenceDelegate.addReference(c,l.targetId,p)).next(()=>f.forEach(l.Js,p=>h.persistence.referenceDelegate.removeReference(c,l.targetId,p)))))}catch(c){if(!Ue(c))throw c;w("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const l=c.targetId;if(!c.fromCache){const p=h.ii.get(l),m=p.snapshotVersion,v=p.withLastLimboFreeSnapshotVersion(m);h.ii=h.ii.insert(l,v)}}}(s.localStore,i))}async function Cf(e,t){const n=C(e);if(!n.currentUser.isEqual(t)){w("SyncEngine","User change. New user:",t.toKey());const s=await Ma(n.localStore,t);n.currentUser=t,function(r,i){r.aa.forEach(o=>{o.forEach(a=>{a.reject(new y(d.CANCELLED,i))})}),r.aa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await za(n,s.hi)}}function Af(e,t){const n=C(e),s=n.ra.get(t);if(s&&s.Zu)return N().add(s.key);{let r=N();const i=n.na.get(t);if(!i)return r;for(const o of i){const a=n.ea.get(o);r=r.unionWith(a.view.Ku)}return r}}function Df(e){const t=C(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ka.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Af.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Sf.bind(null,t),t.ta.Qo=pf.bind(null,t.eventManager),t.ta.fa=gf.bind(null,t.eventManager),t}class kf{constructor(){this.synchronizeTabs=!1}async initialize(t){this.M=Mn(t.databaseInfo.databaseId),this.sharedClientState=this._a(t),this.persistence=this.wa(t),await this.persistence.start(),this.gcScheduler=this.ma(t),this.localStore=this.ga(t)}ma(t){return null}ga(t){return Pd(this.persistence,new Od,t.initialUser,this.M)}wa(t){return new zd(fr.zi,this.M)}_a(t){return new Xd}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Rf{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>bi(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Cf.bind(null,this.syncEngine),await hf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new lf}createDatastore(t){const n=Mn(t.databaseInfo.databaseId),s=(r=t.databaseInfo,new Zd(r));var r;return function(i,o,a,u){return new nf(i,o,a,u)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,r=t.asyncQueue,i=a=>bi(this.syncEngine,a,0),o=Ti.vt()?new Ti:new Yd,new rf(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(t,n){return function(s,r,i,o,a,u,h){const c=new Ef(s,r,i,o,a,u);return h&&(c.ha=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=C(t);w("RemoteStore","RemoteStore shutting down."),n.fu.add(5),await Be(n),n._u.shutdown(),n.wu.set("Unknown")}(this.remoteStore)}}/**
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
 */class Nf{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.pa(this.observer.next,t)}error(t){this.observer.error?this.pa(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Ia(){this.muted=!0}pa(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class xf{constructor(t,n,s,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=it.UNAUTHENTICATED,this.clientId=Rl.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{w("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(w("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(d.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new bt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=qa(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Lf(e,t){e.asyncQueue.verifyOperationInProgress(),w("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Ma(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function Of(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Mf(e);w("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(r=>_i(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>_i(t.remoteStore,i)),e.onlineComponents=t}async function Mf(e){return e.offlineComponents||(w("FirestoreClient","Using default OfflineComponentProvider"),await Lf(e,new kf)),e.offlineComponents}async function Pf(e){return e.onlineComponents||(w("FirestoreClient","Using default OnlineComponentProvider"),await Of(e,new Rf)),e.onlineComponents}async function Vf(e){const t=await Pf(e),n=t.eventManager;return n.onListen=Tf.bind(null,t.syncEngine),n.onUnlisten=_f.bind(null,t.syncEngine),n}function Ff(e,t,n={}){const s=new bt;return e.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,u){const h=new Nf({next:l=>{i.enqueueAndForget(()=>ff(r,c)),l.fromCache&&a.source==="server"?u.reject(new y(d.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(l)},error:l=>u.reject(l)}),c=new mf(o,h,{includeMetadataChanges:!0,Cu:!0});return df(r,c)}(await Vf(e),e.asyncQueue,t,n,s)),s.promise}const Ai=new Map;/**
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
 */function Uf(e,t,n){if(!n)throw new y(d.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Bf(e,t,n,s){if(t===!0&&s===!0)throw new y(d.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Di(e){if(E.isDocumentKey(e))throw new y(d.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Vn(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":I()}function ki(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new y(d.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vn(e);throw new y(d.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class Ri{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new y(d.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new y(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Bf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class Wa{constructor(t,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ri({}),this._settingsFrozen=!1,t instanceof Kt?this._databaseId=t:(this._app=t,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new y(d.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Kt(r.options.projectId)}(t))}get app(){if(!this._app)throw new y(d.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new y(d.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ri(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new _l;switch(n.type){case"gapi":const s=n.client;return M(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new Cl(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new y(d.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Ai.get(t);n&&(w("ComponentProvider","Removing Datastore"),Ai.delete(t),n.terminate())}(this),Promise.resolve()}}/**
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
 */class ft{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $t(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ft(this.firestore,t,this._key)}}class qe{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new qe(this.firestore,t,this._query)}}class $t extends qe{constructor(t,n,s){super(t,n,ca(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ft(this.firestore,null,new E(t))}withConverter(t){return new $t(this.firestore,t,this._path)}}function dp(e,t,...n){if(e=gt(e),Uf("collection","path",t),e instanceof Wa){const s=x.fromString(t,...n);return Di(s),new $t(e,null,s)}{if(!(e instanceof ft||e instanceof $t))throw new y(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(x.fromString(t,...n));return Di(s),new $t(e.firestore,null,s)}}/**
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
 */class $f{constructor(){this.ka=Promise.resolve(),this.Ma=[],this.Oa=!1,this.Fa=[],this.$a=null,this.Ba=!1,this.La=!1,this.Ua=[],this.Do=new Va(this,"async_queue_retry"),this.qa=()=>{const n=Zn();n&&w("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Do.Ao()};const t=Zn();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.qa)}get isShuttingDown(){return this.Oa}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ka(),this.Ga(t)}enterRestrictedMode(t){if(!this.Oa){this.Oa=!0,this.La=t||!1;const n=Zn();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qa)}}enqueue(t){if(this.Ka(),this.Oa)return new Promise(()=>{});const n=new bt;return this.Ga(()=>this.Oa&&this.La?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ma.push(t),this.Qa()))}async Qa(){if(this.Ma.length!==0){try{await this.Ma[0](),this.Ma.shift(),this.Do.reset()}catch(t){if(!Ue(t))throw t;w("AsyncQueue","Operation failed with retryable error: "+t)}this.Ma.length>0&&this.Do.To(()=>this.Qa())}}Ga(t){const n=this.ka.then(()=>(this.Ba=!0,t().catch(s=>{this.$a=s,this.Ba=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw mt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Ba=!1,s))));return this.ka=n,n}enqueueAfterDelay(t,n,s){this.Ka(),this.Ua.indexOf(t)>-1&&(n=0);const r=yr.createAndSchedule(this,t,n,s,i=>this.ja(i));return this.Fa.push(r),r}Ka(){this.$a&&I()}verifyOperationInProgress(){}async Wa(){let t;do t=this.ka,await t;while(t!==this.ka)}za(t){for(const n of this.Fa)if(n.timerId===t)return!0;return!1}Ha(t){return this.Wa().then(()=>{this.Fa.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Fa)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Wa()})}Ja(t){this.Ua.push(t)}ja(t){const n=this.Fa.indexOf(t);this.Fa.splice(n,1)}}class Xa extends Wa{constructor(t,n,s){super(t,n,s),this.type="firestore",this._queue=new $f,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Ya(this),this._firestoreClient.terminate()}}function qf(e=qi()){return Bi(e,"firestore").getImmediate()}function jf(e){return e._firestoreClient||Ya(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Ya(e){var t;const n=e._freezeSettings(),s=function(r,i,o,a){return new Ll(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new xf(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
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
 */class Qa{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new y(d.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Yt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Yt(G.fromBase64String(t))}catch(n){throw new y(d.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Yt(G.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Ja{constructor(t){this._methodName=t}}/**
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
 */class Er{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new y(d.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new y(d.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return D(this._lat,t._lat)||D(this._long,t._long)}}/**
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
 */const Hf=/^__.*__$/;function Za(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw I()}}class Tr{constructor(t,n,s,r,i,o){this.settings=t,this.databaseId=n,this.M=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Ya(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Xa(){return this.settings.Xa}Za(t){return new Tr(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}tc(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.Za({path:s,ec:!1});return r.nc(t),r}sc(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.Za({path:s,ec:!1});return r.Ya(),r}ic(t){return this.Za({path:void 0,ec:!0})}rc(t){return ks(t,this.settings.methodName,this.settings.oc||!1,this.path,this.settings.uc)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Ya(){if(this.path)for(let t=0;t<this.path.length;t++)this.nc(this.path.get(t))}nc(t){if(t.length===0)throw this.rc("Document fields must not be empty");if(Za(this.Xa)&&Hf.test(t))throw this.rc('Document fields cannot begin and end with "__"')}}class Kf{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.M=s||Mn(t)}ac(t,n,s,r=!1){return new Tr({Xa:t,methodName:n,uc:s,path:ut.emptyPath(),ec:!1,oc:r},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function Gf(e){const t=e._freezeSettings(),n=Mn(e._databaseId);return new Kf(e._databaseId,!!t.ignoreUndefinedProperties,n)}function zf(e,t,n,s=!1){return Ir(n,e.ac(s?4:3,t))}function Ir(e,t){if(tu(e=gt(e)))return Xf("Unsupported field value:",t,e),Wf(e,t);if(e instanceof Ja)return function(n,s){if(!Za(s.Xa))throw s.rc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.rc(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ec&&t.Xa!==4)throw t.rc("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Ir(o,s.ic(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(e,t)}return function(n,s){if((n=gt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Zl(s.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=st.fromDate(n);return{timestampValue:bs(s.M,r)}}if(n instanceof st){const r=new st(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:bs(s.M,r)}}if(n instanceof Er)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Yt)return{bytesValue:ka(s.M,n._byteString)};if(n instanceof ft){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.rc(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Ra(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.rc(`Unsupported field value: ${Vn(n)}`)}(e,t)}function Wf(e,t){const n={};return oa(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Pe(e,(s,r)=>{const i=Ir(r,t.tc(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function tu(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof st||e instanceof Er||e instanceof Yt||e instanceof ft||e instanceof Ja)}function Xf(e,t,n){if(!tu(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Vn(n);throw s==="an object"?t.rc(e+" a custom object"):t.rc(e+" "+s)}}const Yf=new RegExp("[~\\*/\\[\\]]");function Qf(e,t,n){if(t.search(Yf)>=0)throw ks(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Qa(...t.split("."))._internalPath}catch{throw ks(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ks(e,t,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${s}`),o&&(u+=` in document ${r}`),u+=")"),new y(d.INVALID_ARGUMENT,a+e+u)}/**
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
 */class eu{constructor(t,n,s,r,i){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Jf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(_r("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Jf extends eu{data(){return super.data()}}function _r(e,t){return typeof t=="string"?Qf(e,t):t instanceof Qa?t._internalPath:t._delegate._internalPath}/**
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
 */class Qe{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Zf extends eu{constructor(t,n,s,r,i,o){super(t,n,s,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new en(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(_r("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class en extends Zf{data(t={}){return super.data(t)}}class tp{constructor(t,n,s,r){this._firestore=t,this._userDataWriter=n,this._snapshot=r,this.metadata=new Qe(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new en(this._firestore,this._userDataWriter,s.key,s,new Qe(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new y(d.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new en(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Qe(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new en(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Qe(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return o.type!==0&&(u=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),h=i.indexOf(o.doc.key)),{type:ep(o.type),doc:a,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ep(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}/**
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
 */function np(e){if(gn(e)&&e.explicitOrderBy.length===0)throw new y(d.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sp{}function fp(e,...t){for(const n of t)e=n._apply(e);return e}class rp extends sp{constructor(t,n,s){super(),this.lc=t,this.fc=n,this.dc=s,this.type="where"}_apply(t){const n=Gf(t.firestore),s=function(r,i,o,a,u,h,c){let l;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new y(d.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){xi(c,h);const m=[];for(const v of c)m.push(Ni(a,r,v));l={arrayValue:{values:m}}}else l=Ni(a,r,c)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||xi(c,h),l=zf(o,i,c,h==="in"||h==="not-in");const p=nt.create(u,h,l);return function(m,v){if(v.S()){const S=da(m);if(S!==null&&!S.isEqual(v.field))throw new y(d.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${S.toString()}' and '${v.field.toString()}'`);const V=la(m);V!==null&&ip(m,v.field,V)}const k=function(S,V){for(const rt of S.filters)if(V.indexOf(rt.op)>=0)return rt.op;return null}(m,function(S){switch(S){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(v.op));if(k!==null)throw k===v.op?new y(d.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${v.op.toString()}' filter.`):new y(d.INVALID_ARGUMENT,`Invalid query. You cannot use '${v.op.toString()}' filters with '${k.toString()}' filters.`)}(r,p),p}(t._query,"where",n,t.firestore._databaseId,this.lc,this.fc,this.dc);return new qe(t.firestore,t.converter,function(r,i){const o=r.filters.concat([i]);return new Ve(r.path,r.collectionGroup,r.explicitOrderBy.slice(),o,r.limit,r.limitType,r.startAt,r.endAt)}(t._query,s))}}function pp(e,t,n){const s=t,r=_r("where",e);return new rp(r,s,n)}function Ni(e,t,n){if(typeof(n=gt(n))=="string"){if(n==="")throw new y(d.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!fa(t)&&n.indexOf("/")!==-1)throw new y(d.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(x.fromString(n));if(!E.isDocumentKey(s))throw new y(d.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return si(e,new E(s))}if(n instanceof ft)return si(e,n._key);throw new y(d.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Vn(n)}.`)}function xi(e,t){if(!Array.isArray(e)||e.length===0)throw new y(d.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new y(d.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function ip(e,t,n){if(!n.isEqual(t))throw new y(d.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class op{convertValue(t,n="none"){switch(xt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return O(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Ht(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw I()}}convertObject(t,n){const s={};return Pe(t.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(t){return new Er(O(t.latitude),O(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=ua(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ie(t));default:return null}}convertTimestamp(t){const n=yt(t);return new st(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=x.fromString(t);M(Oa(s));const r=new Kt(s.get(1),s.get(3)),i=new E(s.popFirst(5));return r.isEqual(n)||mt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}class ap extends op{constructor(t){super(),this.firestore=t}convertBytes(t){return new Yt(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new ft(this.firestore,null,n)}}function gp(e){e=ki(e,qe);const t=ki(e.firestore,Xa),n=jf(t),s=new ap(t);return np(e._query),Ff(n,e._query).then(r=>new tp(t,s,e,r))}(function(e,t=!0){(function(n){te=n})($i),fe(new qt("firestore",(n,{options:s})=>{const r=n.getProvider("app").getImmediate(),i=new Xa(r,new Sl(n.getProvider("auth-internal")),new Dl(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:t},s),i._setSettings(s),i},"PUBLIC")),pt(Jr,"3.4.8",e),pt(Jr,"3.4.8","esm2017")})();const up={apiKey:"AIzaSyB3RCJBuwNGT3R-5PfeomO-QcCJq75LkZw",authDomain:"portfolio-ea572.firebaseapp.com",databaseURL:"https://portfolio-ea572-default-rtdb.firebaseio.com",projectId:"portfolio-ea572",storageBucket:"portfolio-ea572.appspot.com",messagingSenderId:"278104723180",appId:"1:278104723180:web:406d1e4d21120f44ee9fc9",measurementId:"G-9FLBJ2NMV3"},nu=rh(up),mp=cc(nu),yp=qf(nu);export{gp as a,yp as d,cp as g,pp as k,hp as l,dp as p,lp as r,mp as s,fp as x};
