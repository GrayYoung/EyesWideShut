import{Q as T,V as v,X as b,Y as S,aa as k,t as O,u as q}from"./chunk-E2CVKBY2.js";import{i as a}from"./chunk-NQUV66Z4.js";var j="@firebase/installations",E="0.6.8";var F=1e4,V=`w:${E}`,$="FIS_v2",tt="https://firebaseinstallations.googleapis.com/v1",et=60*60*1e3,nt="installations",rt="Installations";var ot={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},d=new q(nt,rt,ot);function L(t){return t instanceof O&&t.code.includes("request-failed")}function x({projectId:t}){return`${tt}/projects/${t}/installations`}function M(t){return{token:t.token,requestStatus:2,expiresIn:st(t.expiresIn),creationTime:Date.now()}}function B(t,e){return a(this,null,function*(){let r=(yield e.json()).error;return d.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})})}function H({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function at(t,{refreshToken:e}){let n=H(t);return n.append("Authorization",it(e)),n}function U(t){return a(this,null,function*(){let e=yield t();return e.status>=500&&e.status<600?t():e})}function st(t){return Number(t.replace("s","000"))}function it(t){return`${$} ${t}`}function ct(r,c){return a(this,arguments,function*({appConfig:t,heartbeatServiceProvider:e},{fid:n}){let o=x(t),s=H(t),i=e.getImmediate({optional:!0});if(i){let u=yield i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}let m={fid:n,authVersion:$,appId:t.appId,sdkVersion:V},I={method:"POST",headers:s,body:JSON.stringify(m)},f=yield U(()=>fetch(o,I));if(f.ok){let u=yield f.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:M(u.authToken)}}else throw yield B("Create Installation",f)})}function K(t){return new Promise(e=>{setTimeout(e,t)})}function ut(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}var ft=/^[cdef][\w-]{21}$/,C="";function lt(){try{let t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;let n=dt(t);return ft.test(n)?n:C}catch{return C}}function dt(t){return ut(t).substr(0,22)}function h(t){return`${t.appName}!${t.appId}`}var J=new Map;function z(t,e){let n=h(t);G(n,e),pt(n,e)}function G(t,e){let n=J.get(t);if(n)for(let r of n)r(e)}function pt(t,e){let n=gt();n&&n.postMessage({key:t,fid:e}),ht()}var l=null;function gt(){return!l&&"BroadcastChannel"in self&&(l=new BroadcastChannel("[Firebase] FID Change"),l.onmessage=t=>{G(t.data.key,t.data.fid)}),l}function ht(){J.size===0&&l&&(l.close(),l=null)}var wt="firebase-installations-database",mt=1,p="firebase-installations-store",A=null;function R(){return A||(A=v(wt,mt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(p)}}})),A}function g(t,e){return a(this,null,function*(){let n=h(t),c=(yield R()).transaction(p,"readwrite"),o=c.objectStore(p),s=yield o.get(n);return yield o.put(e,n),yield c.done,(!s||s.fid!==e.fid)&&z(t,e.fid),e})}function W(t){return a(this,null,function*(){let e=h(t),r=(yield R()).transaction(p,"readwrite");yield r.objectStore(p).delete(e),yield r.done})}function w(t,e){return a(this,null,function*(){let n=h(t),c=(yield R()).transaction(p,"readwrite"),o=c.objectStore(p),s=yield o.get(n),i=e(s);return i===void 0?yield o.delete(n):yield o.put(i,n),yield c.done,i&&(!s||s.fid!==i.fid)&&z(t,i.fid),i})}function N(t){return a(this,null,function*(){let e,n=yield w(t.appConfig,r=>{let c=It(r),o=Tt(t,c);return e=o.registrationPromise,o.installationEntry});return n.fid===C?{installationEntry:yield e}:{installationEntry:n,registrationPromise:e}})}function It(t){let e=t||{fid:lt(),registrationStatus:0};return X(e)}function Tt(t,e){if(e.registrationStatus===0){if(!navigator.onLine){let c=Promise.reject(d.create("app-offline"));return{installationEntry:e,registrationPromise:c}}let n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=bt(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:St(t)}:{installationEntry:e}}function bt(t,e){return a(this,null,function*(){try{let n=yield ct(t,e);return g(t.appConfig,n)}catch(n){throw L(n)&&n.customData.serverCode===409?yield W(t.appConfig):yield g(t.appConfig,{fid:e.fid,registrationStatus:0}),n}})}function St(t){return a(this,null,function*(){let e=yield _(t.appConfig);for(;e.registrationStatus===1;)yield K(100),e=yield _(t.appConfig);if(e.registrationStatus===0){let{installationEntry:n,registrationPromise:r}=yield N(t);return r||n}return e})}function _(t){return w(t,e=>{if(!e)throw d.create("installation-not-found");return X(e)})}function X(t){return kt(t)?{fid:t.fid,registrationStatus:0}:t}function kt(t){return t.registrationStatus===1&&t.registrationTime+F<Date.now()}function At(r,c){return a(this,arguments,function*({appConfig:t,heartbeatServiceProvider:e},n){let o=yt(t,n),s=at(t,n),i=e.getImmediate({optional:!0});if(i){let u=yield i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}let m={installation:{sdkVersion:V,appId:t.appId}},I={method:"POST",headers:s,body:JSON.stringify(m)},f=yield U(()=>fetch(o,I));if(f.ok){let u=yield f.json();return M(u)}else throw yield B("Generate Auth Token",f)})}function yt(t,{fid:e}){return`${x(t)}/${e}/authTokens:generate`}function P(t,e=!1){return a(this,null,function*(){let n,r=yield w(t.appConfig,o=>{if(!Y(o))throw d.create("not-registered");let s=o.authToken;if(!e&&Rt(s))return o;if(s.requestStatus===1)return n=Ct(t,e),o;{if(!navigator.onLine)throw d.create("app-offline");let i=Pt(o);return n=Et(t,i),i}});return n?yield n:r.authToken})}function Ct(t,e){return a(this,null,function*(){let n=yield D(t.appConfig);for(;n.authToken.requestStatus===1;)yield K(100),n=yield D(t.appConfig);let r=n.authToken;return r.requestStatus===0?P(t,e):r})}function D(t){return w(t,e=>{if(!Y(e))throw d.create("not-registered");let n=e.authToken;return Ot(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}function Et(t,e){return a(this,null,function*(){try{let n=yield At(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return yield g(t.appConfig,r),n}catch(n){if(L(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))yield W(t.appConfig);else{let r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});yield g(t.appConfig,r)}throw n}})}function Y(t){return t!==void 0&&t.registrationStatus===2}function Rt(t){return t.requestStatus===2&&!Nt(t)}function Nt(t){let e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+et}function Pt(t){let e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Ot(t){return t.requestStatus===1&&t.requestTime+F<Date.now()}function qt(t){return a(this,null,function*(){let e=t,{installationEntry:n,registrationPromise:r}=yield N(e);return r?r.catch(console.error):P(e).catch(console.error),n.fid})}function vt(t,e=!1){return a(this,null,function*(){let n=t;return yield _t(n),(yield P(n,e)).token})}function _t(t){return a(this,null,function*(){let{registrationPromise:e}=yield N(t);e&&(yield e)})}function Dt(t){if(!t||!t.options)throw y("App Configuration");if(!t.name)throw y("App Name");let e=["projectId","apiKey","appId"];for(let n of e)if(!t.options[n])throw y(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function y(t){return d.create("missing-app-config-values",{valueName:t})}var Q="installations",jt="installations-internal",Ft=t=>{let e=t.getProvider("app").getImmediate(),n=Dt(e),r=S(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Vt=t=>{let e=t.getProvider("app").getImmediate(),n=S(e,Q).getImmediate();return{getId:()=>qt(n),getToken:c=>vt(n,c)}};function $t(){b(new T(Q,Ft,"PUBLIC")),b(new T(jt,Vt,"PRIVATE"))}$t();k(j,E);k(j,E,"esm2017");
/**i18n:4ec78395217facedd742edef8dfa814b1ea6af3fbb33fa1f9a497a05293d0698*/
