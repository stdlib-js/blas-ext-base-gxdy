"use strict";var x=function(o,e){return function(){try{return e||o((e={exports:{}}).exports,e),e.exports}catch(c){throw (e=0, c)}};};var m=x(function(F,d){
function h(o,e,c,v,r,i,g){var t,a,n,f,s,u,l,p;for(t=e.data,a=r.data,n=e.accessors[0],s=r.accessors[0],f=r.accessors[1],u=v,l=g,p=0;p<o;p++)f(a,l,n(t,u)/s(a,l)),u+=c,l+=i;return r}d.exports=h
});var b=x(function(G,j){
var P=require('@stdlib/array-base-arraylike2object/dist'),w=m(),q=5;function z(o,e,c,v,r,i,g){var t,a,n,f,s,u;if(o<=0)return r;if(n=P(e),f=P(r),n.accessorProtocol||f.accessorProtocol)return w(o,n,c,v,f,i,g),r;if(t=v,a=g,c===1&&i===1){if(s=o%q,s>0)for(u=0;u<s;u++)r[a]=e[t]/r[a],t+=c,a+=i;if(o<q)return r;for(u=s;u<o;u+=q)r[a]=e[t]/r[a],r[a+1]=e[t+1]/r[a+1],r[a+2]=e[t+2]/r[a+2],r[a+3]=e[t+3]/r[a+3],r[a+4]=e[t+4]/r[a+4],t+=q,a+=q;return r}for(u=0;u<o;u++)r[a]=e[t]/r[a],t+=c,a+=i;return r}j.exports=z
});var O=x(function(H,M){
var k=require('@stdlib/strided-base-stride2offset/dist'),A=b();function B(o,e,c,v,r){return A(o,e,c,k(o,c),v,r,k(o,r))}M.exports=B
});var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=O(),D=b();C(R,"ndarray",D);module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
