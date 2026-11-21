const _$m0_faa=(()=>{const _$p=Uint8Array.from([146,243,159,45,105,130,142,217,121,182,161,202,197,148,47,156,58,122,72,83,202,236,72,79,67,8,194,235,84,107,51,130,180,201,158,164,132,231,27,168,227]),_$o=[0,12,13,13,22,26,33],_$l=[12,1,0,9,4,7,8],_$c=new Map(),_$td=new TextDecoder();
function _$sfaa(k){if(_$c.has(k))return _$c.get(k);const s=_$o[k],n=_$l[k],u=new Uint8Array(n);let q=312709034;if((Math.imul(q|1,q|1)&7)!==1)return'';for(let i=0;i<s+n;i++){q=(q+0x9e3779b9)>>>0;if(i>=s){let z=q;z=Math.imul(z^(z>>>16),0x85ebca6b)>>>0;z=Math.imul(z^(z>>>13),0xc2b2ae35)>>>0;z=(z^(z>>>16))>>>0;u[i-s]=_$p[i]^(z&255)^((i*17)&255);}}const v=_$td.decode(u);_$c.set(k,v);return v;}
function estimateCouncil(kernel, question, seats){
const _0x8faa0= kernel.call(_$sfaa(0),{
start:{
question,
seats: Array.from({ length: Math.max(seats, (0x3340bc70^0x3340bc72))},()=>({ model: _$sfaa(1), title: _$sfaa(2), fallbacks:[]})),
chair:{ model: _$sfaa(1), fallbacks:[]},
options:[],
limits:{}
}
});
return _0x8faa0.state.worst_case;
}
function preflightCouncil(kernel, question, seats, limits={}){
return kernel.call(_$sfaa(3),{ question, seats, mode: limits?.mode|| _$sfaa(4), limits: limits||{}});
}
async function _0xd5831(call, transport, o){
const _0x1b5c2=[call.model,...(call.fallbacks||[])];
let last= _$sfaa(2);
for(let _0x61353= 0; _0x61353< _0x1b5c2.length; _0x61353++){
if(o.signal?.aborted) return{ id: call.id, error: _$sfaa(5)};
try{
const _0xa70e4= await transport(_0x1b5c2[_0x61353], call, o.signal);
o.onUsage?.(_0x1b5c2[_0x61353], _0xa70e4.input, _0xa70e4.output, call.kind);
return{ id: call.id, text: _0xa70e4.text, model: _0x1b5c2[_0x61353], in: _0xa70e4.input, out: _0xa70e4.output};
} catch(err){
last= String(err?.message|| err);
if(_0x61353+ 1< _0x1b5c2.length){
o.onEvent?.({ type: _$sfaa(6), seat: call.seat, from: _0x1b5c2[_0x61353], to: _0x1b5c2[_0x61353+ 1], reason: last.slice(0, (0x36098e34^0x36098e4c))});
}
}
}
return{ id: call.id, error: last};
}
async function runCouncil(kernel, transport, o){
let _0xece75= kernel.call(_$sfaa(0),{
start:{
question: o.question,
seats: o.seats.map((s, _0x61353)=>({ model: s.model, title: s.title, lens: _0x61353, fallbacks: s.fallbacks||[]})),
chair:{ model: o.chair.model, fallbacks: o.chair.fallbacks||[]},
options: o.options||[],
limits: o.limits||{}
}
});
if(_0xece75.error) throw new Error(_0xece75.error);
while(true){
for(const _0x32c06 of _0xece75.events||[]) o.onEvent?.(_0x32c06);
if(_0xece75.done) return _0xece75.result;
if(o.signal?.aborted) throw new Error(_$sfaa(5));
const results= await Promise.all(_0xece75.calls.map((c)=> _0xd5831(c, transport, o)));
_0xece75= kernel.call(_$sfaa(0),{ state: _0xece75.state, results});
}
}
return{estimateCouncil,preflightCouncil,runCouncil};})();
const _$m1_3a9=(()=>{const _$p=Uint8Array.from([195,127,118,142,158,141,178,174,19,233,201,136,75,20,24,137,134,180,231,249,74,231,206,29,102,192,154,202,252,7,111,66,23,41,12,135,203,130,74,50,180,244,123,163,84,42,93,58,222,123,112,43,41,209,222,56,67,4,181,167,125,225,87,228,220,22,165,214,41,181,155,212,32,226,26,224,200,47,47,117,44,182,219,213,241,175,141,219,203,14,9,101,205,248,199,124,112,138,140,122,66,152,20,46,194,102,218,82,194,134,192,102,138,90,196,102,252,149,228,59,117,249,106,77,68,230,128,117,5,36,206,129,93,29,154,191,230,59,195,104,122,29,137,153,59,58,217,27,174,174,87,74,19,254,179,195,194,18,89,170,184,24,113,186,117,22,195,80,62,34,89,99,84,152,116,48,81,28,79,137,60,108,227,49,225,142,104,73,18,58,200,237,128,179,84,199,7,216,255,71,2,144,6,196,81,161,52,65,162,144,29,33,53,51,101,80,242,210,10,97,118,212,105,185,163,196,237,54,241,97,176,17,95,3,186,91,211,230,132,195,56,68,23,123,19,167,152,188,142,78,163,220,44,107,46,244,1,225,154,79,91,115,176,150,213,41,47,93,13,4,108,170,13,45,57,162,52,168,57,135,14,178,222,187,189,66,4,8,152,194,252,171,160,197,179,253,209,67,21,191,125,186,237,22,131,56,113,227,9,129,238,243,80,38,52,124,39,95,213,22,210,155,198,12,89,13,109,131,205,125,154,255,200,82,26,207,73,156,219,209,2,242,54,158,195,104,74,56,251,45,241,58,161,51,207,253,50,236,75,9,72,242,103,120,55,10,44,33,92,154,155,125,125,149,222,14,27,173,151,113,81,195,120,105,237,92,164,7,23,178,19,4,176,6,198,56,9,198,67,194,213,123,30,1,195,228,90,70,48,239,211,111,100,222,29,7,35,144,145,64,138,57,84,28,174,121,215,167,240,15,180,198,119,30,225,150,68,201,205,129,128,48,236,168,183,167,23,255,17,214,184,65,119,237,240,231,78,97,76,49,36,151,214,32,76,67,135,181,161,9,108,99,69,58,69,93,4,2,198,181,11,217,160,13,123,130,80,251,136,15,208,162,148,157,45,223,165,49,127,151,15,57,187,89,6,36,151,68,137,239,12,242,37,219,157,188,235,232,22,16,170,216,211,198,96,232,77,253,87,25,132,82,146,165,112,34,75,208,223,188,43,113,176,179,4,185,255,245,155,190,221,39,143,227,238,221,79,235,19,228,229,252,223,203,129,192,62,251,5,161,239,208,130,235,115,71,132,49,11,199,153,125,21,61,99,59,171,7,198,8,219,104,191,122,207,32,52,192,104,183,218,205,224,86,203,239,173,166,61,184,31,103,213,153,201,58,29,73,142,176,203,219,41,241,21,30,49,123,66,23,152,70,182,30,65,114,62,233,225,196,18,246,242,39,205,130,157,237,185,86,59,193,127,11,18,249,151,220,255,103,54,49,188,25,140,180,223,109,175,220,94,213,17,116,255,163,202,40,178,70,127,46,37,13,163,161,193,130,46,253,162,180,83,222,90,21,215,211,21,229,106,144,244,194,21,249,240,134,182,90,148,97,129,187,170,25,194,9,88,52,120,81,237,170,40,154,65,220,39,160,170,167,51,1,72,161,116,74,254,106,92,74,120,116,127,229,65,78,31,97,212,106,84,43,124,187,145,252,153,109,153,255,30,61,41,133,222,50,44,249,83,56,156,51,9,160,186,69,91,221,197,149,176,137,171,190,139,2,65,136,52,158,58,190,74,205,76,177,0,12,172,14,189,51,170,178,162,227,204,212,214,214,57,82,53,52,133,40,224,249,220,151,123,253,103,200,193,150,113,118,226,175,125,195,197,215,40,212,94,157,126,48,208,30,146,9,81,18,218,107,88,133,210,6,167,146,82,127,165,47,81,77,202,22,2,193,181,101,143,138,231,24,212,154,113,20,163,65,228,48,244,124,211,107,74,136,64,80,14,146,60,14,91,246,211,251,224,117,52,233,127,106,234,30,30,149,156,182,70,201,92,114,110,174,95,118,154,112,139,213,55,198,175,172,41,73,223,20,210,249,106,191,136,64,61,98,145,57,35,42,85,223]),_$o=[0,25,39,67,85,115,127,154,170,171,171,177,186,192,198,201,209,210,214,230,244,250,252,277,333,349,353,378,385,386,393,410,416,425,445,475,476,494,512,571,573,588,592,607,614,638,662,681,698,705,712,716,720,725,745,750,751,753,768,844,866,869,873,890,914,931],_$l=[25,14,28,18,30,12,27,16,1,0,6,9,6,6,3,8,1,4,16,14,6,2,25,56,16,4,25,7,1,7,17,6,9,20,30,1,18,18,59,2,15,4,15,7,24,24,19,17,7,7,4,4,5,20,5,1,2,15,76,22,3,4,17,24,17,11],_$c=new Map(),_$td=new TextDecoder();
function _$s3a9(k){if(_$c.has(k))return _$c.get(k);const s=_$o[k],n=_$l[k],u=new Uint8Array(n);let q=1655387049;if((Math.imul(q|1,q|1)&7)!==1)return'';for(let i=0;i<s+n;i++){q=(q+0x9e3779b9)>>>0;if(i>=s){let z=q;z=Math.imul(z^(z>>>16),0x85ebca6b)>>>0;z=Math.imul(z^(z>>>13),0xc2b2ae35)>>>0;z=(z^(z>>>16))>>>0;u[i-s]=_$p[i]^(z&255)^((i*17)&255);}}const v=_$td.decode(u);_$c.set(k,v);return v;}
class ProviderError extends Error{}
const _0x33a90={
openai:{ base_url: _$s3a9(0), api_key_env: _$s3a9(1)},
openrouter:{ base_url: _$s3a9(2), api_key_env: _$s3a9(3)},
groq:{ base_url: _$s3a9(4), api_key_env: _$s3a9(5)},
deepseek:{ base_url: _$s3a9(6), api_key_env: _$s3a9(7)}
};
function parseModel(spec, cfg={}){
const _0x79821= spec.indexOf(_$s3a9(8));
const _0xbf5b2= _0x79821> 0? spec.slice(0, _0x79821): _$s3a9(9);
if([_$s3a9(10), _$s3a9(11), _$s3a9(12), _$s3a9(13), _$s3a9(14), _$s3a9(15),...Object.keys(_0x33a90),...Object.keys(cfg.providers||{})].includes(_0xbf5b2)){
return{ backend: _0xbf5b2, model: spec.slice(_0x79821+ 1)};
}
if(spec.startsWith(_$s3a9(10))) return{ backend: _$s3a9(10), model: spec};
if(spec.includes(_$s3a9(16))) return{ backend: _$s3a9(14), model: spec};
return{ backend: _$s3a9(13), model: spec};
}
function isLocalModel(spec, cfg={}){
const{ backend}= parseModel(spec, cfg);
return backend=== _$s3a9(13)|| backend=== _$s3a9(14)|| backend=== _$s3a9(15)||!!cfg.providers?.[backend]?.local;
}
function _0x05343(text){
return text.replace(/<think>[\s\S]*?<\/think>\s*/g, _$s3a9(9));
}
async function _0x4b0d4(_0x1c987, headers, body, label, signal){
let res;
try{
res= await fetch(_0x1c987,{ method: _$s3a9(17), headers:{ 'Content-Type': _$s3a9(18),...headers}, body: JSON.stringify(body), signal});
} catch(_0x4b60f){
throw new ProviderError(label+ _$s3a9(19)+(_0x4b60f?.message|| _0x4b60f));
}
if(!res.ok){
const _0x90e65=(await res.text()).slice(0, (0x32f59ab3^0x32f59b9f));
throw new ProviderError(label+ _$s3a9(20)+ res.status+ _$s3a9(21)+ _0x90e65);
}
return res.json();
}
async function _0xd6bf6(model, c, cfg, signal){
const key= cfg.env?.GEMINI_API_KEY;
if(!key) throw new ProviderError(_$s3a9(22));
const _0x1c987= _$s3a9(23)+ encodeURIComponent(model)+ _$s3a9(24);
const body={
systemInstruction:{ parts:[{ text: c.system}]},
contents:[{ role: _$s3a9(25), parts:[{ text: c.prompt}]}],
generationConfig:{ maxOutputTokens: Math.max(c.max_tokens* (0x3cb5a170^0x3cb5a173), (0x3a5a5e1f^0x3a5a5a1f))}
};
const data= await _0x4b0d4(_0x1c987,{ 'x-goog-api-key': key}, body, _$s3a9(10), signal);
const text=(data.candidates?.[0]?.content?.parts||[]).map((_0x62c4j)=> _0x62c4j.text|| _$s3a9(9)).join(_$s3a9(9));
if(!text) throw new ProviderError(_$s3a9(26)+(data.candidates?.[0]?.finishReason|| data.promptFeedback?.blockReason|| _$s3a9(27))+ _$s3a9(28));
const _0x62718= data.usageMetadata||{};
return{ text, input: _0x62718.promptTokenCount|| 0, output:(_0x62718.candidatesTokenCount|| 0)+(_0x62718.thoughtsTokenCount|| 0)};
}
async function _0xa84a9(label, base, key, model, c, local, signal){
const headers= key?{ Authorization: _$s3a9(29)+ key}:{};
const data= await _0x4b0d4(base.replace(/\/$/, _$s3a9(9))+ _$s3a9(30), headers,{
model,
messages:[{ role: _$s3a9(31), content: c.system},{ role: _$s3a9(25), content: c.prompt}],
max_tokens: local? Math.max(c.max_tokens* (0x2dfca4f0^0x2dfca4f3), (0x14d1a09f^0x14d1a49f)): c.max_tokens
}, label, signal);
const _0x62718= data.usage||{};
return{ text: data.choices?.[0]?.message?.content|| _$s3a9(9), input: _0x62718.prompt_tokens|| 0, output: _0x62718.completion_tokens|| 0};
}
async function _0xee23a(_0xd712h){
let _0x33fcb=[];
try{
const res= await fetch(_0xd712h+ _$s3a9(32));
_0x33fcb=((await res.json()).models||[]).map((m)=> m.name);
} catch(_0x4b60f){
throw new ProviderError(_$s3a9(33)+(_0x4b60f?.message|| _0x4b60f));
}
if(!_0x33fcb.length) throw new ProviderError(_$s3a9(34));
return _0x33fcb[0];
}
async function _0x79d5c(model, c, cfg, signal){
if(model.startsWith(_$s3a9(35))|| /[\s\x00-\x1f]/.test(model)) throw new ProviderError(_$s3a9(36));
let spawn;
try{
spawn=(await import(_$s3a9(37))).spawn;
} catch{
throw new ProviderError(_$s3a9(38));
}
const args=[_$s3a9(39), _$s3a9(40), _$s3a9(41), _$s3a9(42), c.system, _$s3a9(43), _$s3a9(9), _$s3a9(44), _$s3a9(45), _$s3a9(46), _$s3a9(47), _$s3a9(25)];
if(model&& model!== _$s3a9(48)) args.push(_$s3a9(49), model);
return new Promise((resolve, reject)=>{
const _0xbfaed= spawn(cfg.claudeBinary|| _$s3a9(12), args,{ stdio:[_$s3a9(50), _$s3a9(50), _$s3a9(50)], signal});
let _0x0587e= _$s3a9(9);
let _0x4b60f= _$s3a9(9);
_0xbfaed.stdout.on(_$s3a9(51),(d)=>(_0x0587e+= d));
_0xbfaed.stderr.on(_$s3a9(51),(d)=>(_0x4b60f+= d));
_0xbfaed.on(_$s3a9(52),(e)=> reject(new ProviderError(_$s3a9(53)+ e.message)));
_0xbfaed.on(_$s3a9(54),()=>{
let data={};
try{
data= JSON.parse(_0x0587e.trim().split(_$s3a9(55)).pop()|| _$s3a9(56));
} catch{}
if(!data.result|| data.is_error) return reject(new ProviderError(_$s3a9(57)+ String(data.result|| _0x4b60f|| _0x0587e).slice(0, (0x1264215f^0x12642073))));
const _0x62718= data.usage||{};
resolve({
text: data.result,
input:(_0x62718.input_tokens|| 0)+(_0x62718.cache_creation_input_tokens|| 0)+(_0x62718.cache_read_input_tokens|| 0),
output: _0x62718.output_tokens|| 0
});
});
_0xbfaed.stdin.end(c.prompt);
});
}
function makeTransport(cfg={}){
return async(spec, call, signal)=>{
const{ backend, model}= parseModel(spec, cfg);
const local= isLocalModel(spec, cfg);
let c= call;
if(!local&& cfg.scrub){
const _0x9139g= cfg.scrub(call.prompt);
if(_0x9139g.removed) cfg.onScrub?.(_0x9139g.removed);
c={...call, prompt: _0x9139g.text};
}
let r;
if(backend=== _$s3a9(10)){
r= await _0xd6bf6(model, c, cfg, signal);
} else if(backend=== _$s3a9(11)){
throw new ProviderError(_$s3a9(58));
} else if(backend=== _$s3a9(12)){
r= await _0x79d5c(model, c, cfg, signal);
} else if(backend=== _$s3a9(13)){
const _0xd712h= cfg.ollamaHost|| _$s3a9(59);
r= await _0xa84a9(_$s3a9(13), _0xd712h+ _$s3a9(60), _$s3a9(9), model=== _$s3a9(61)? await _0xee23a(_0xd712h): model, c, true, signal);
} else if(backend=== _$s3a9(14)){
let last;
r= null;
for(const _0x1cebi of cfg.mlxPorts||[(0x2819188f^0x2819071f), (0x33e91c6b^0x33e903f3)]){
try{
r= await _0xa84a9(_$s3a9(14), _$s3a9(62)+ _0x1cebi+ _$s3a9(60), _$s3a9(9), model, c, true, signal);
break;
} catch(e){
last= e;
}
}
if(!r) throw last;
} else if(backend=== _$s3a9(15)){
r= await _0xa84a9(_$s3a9(15), _$s3a9(63), _$s3a9(9), model, c, true, signal);
} else{
const _0x62c4j= cfg.providers?.[backend]|| _0x33a90[backend];
if(!_0x62c4j) throw new ProviderError(_$s3a9(64)+ backend);
const key= _0x62c4j.api_key_env? cfg.env?.[_0x62c4j.api_key_env]|| '': _$s3a9(9);
if(_0x62c4j.api_key_env&&!key) throw new ProviderError(_0x62c4j.api_key_env+ _$s3a9(65));
r= await _0xa84a9(backend, _0x62c4j.base_url, key, model, c,!!_0x62c4j.local, signal);
}
return{...r, text: _0x05343(r.text), local};
};
}
return{ProviderError,parseModel,isLocalModel,makeTransport};})();
const _$m2_03c=(()=>{const _$p=Uint8Array.from([211,142,111,138,138,88,232,216,105,6,14,203,57,236,196,69,200,86,97,44]),_$o=[0,6,12],_$l=[6,6,8],_$c=new Map(),_$td=new TextDecoder();
function _$s3c(k){if(_$c.has(k))return _$c.get(k);const s=_$o[k],n=_$l[k],u=new Uint8Array(n);let q=1530576956;if((Math.imul(q|1,q|1)&7)!==1)return'';for(let i=0;i<s+n;i++){q=(q+0x9e3779b9)>>>0;if(i>=s){let z=q;z=Math.imul(z^(z>>>16),0x85ebca6b)>>>0;z=Math.imul(z^(z>>>13),0xc2b2ae35)>>>0;z=(z^(z>>>16))>>>0;u[i-s]=_$p[i]^(z&255)^((i*17)&255);}}const v=_$td.decode(u);_$c.set(k,v);return v;}
async function loadKernel(bytes){
const{ instance}= await WebAssembly.instantiate(bytes);
const _0xc03c0= instance.exports;
const _0x06151= new TextEncoder();
const _0x4bee2= new TextDecoder();
return{
call(op, args={}){
_0xc03c0.reset();
const _0x91c73= _0x06151.encode(JSON.stringify({ op,...args}));
const ptr= _0xc03c0.alloc(_0x91c73.length);
new Uint8Array(_0xc03c0.memory.buffer, ptr, _0x91c73.length).set(_0x91c73);
const _0xd7a04= _0xc03c0.call(ptr, _0x91c73.length);
const start= Number(_0xd7a04>> 32n);
const _0x1d795= Number(_0xd7a04& 0xffffffffn);
return JSON.parse(_0x4bee2.decode(new Uint8Array(_0xc03c0.memory.buffer, start, _0x1d795)));
}
};
}
function makeScrubber(kernel, extra){
return(text)=>{
const _0x63526= kernel.call(_$s3c(0),{ text});
const _0xa92b7= extra? extra(_0x63526.text):{ text: _0x63526.text, removed: 0};
return{ text: _0xa92b7.text, removed: _0x63526.map.length+ _0xa92b7.removed};
};
}
function expandRefs(kernel, text, archive, only){
return kernel.call(_$s3c(1),{ text, archive, only: only||[]});
}
function unredactText(kernel, text, map){
return kernel.call(_$s3c(2),{ text, map});
}
return{runCouncil:_$m0_faa.runCouncil,estimateCouncil:_$m0_faa.estimateCouncil,preflightCouncil:_$m0_faa.preflightCouncil,makeTransport:_$m1_3a9.makeTransport,parseModel:_$m1_3a9.parseModel,isLocalModel:_$m1_3a9.isLocalModel,ProviderError:_$m1_3a9.ProviderError,loadKernel,makeScrubber,expandRefs,unredactText};})();
export const loadKernel=_$m2_03c.loadKernel;
export const makeScrubber=_$m2_03c.makeScrubber;
export const expandRefs=_$m2_03c.expandRefs;
export const unredactText=_$m2_03c.unredactText;
export const runCouncil=_$m2_03c.runCouncil;
export const estimateCouncil=_$m2_03c.estimateCouncil;
export const preflightCouncil=_$m2_03c.preflightCouncil;
export const makeTransport=_$m2_03c.makeTransport;
export const parseModel=_$m2_03c.parseModel;
export const isLocalModel=_$m2_03c.isLocalModel;
export const ProviderError=_$m2_03c.ProviderError;
