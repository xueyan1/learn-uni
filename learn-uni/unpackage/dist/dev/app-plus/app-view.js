var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20181221_syb_scopedata*/window.__wcc_version__='v0.5vv_20181221_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
var cs
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'14b238eb'])
Z([3,'_view 14b238eb'])
Z(z[1])
Z([3,'flex-direction: row'])
Z([3,'_text 14b238eb'])
Z([3,'\n 横向布局'])
Z([3,'_view 14b238eb d_flex'])
Z([3,'_view 14b238eb red'])
Z([3,'A'])
Z([3,'_view 14b238eb blue'])
Z([3,'B'])
Z([3,'_view 14b238eb green'])
Z([3,'C'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'14b238eb'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'1ce9b49b'])
Z([3,'_view 1ce9b49b page'])
Z([3,'handleProxy'])
Z([3,'_video 1ce9b49b video'])
Z([[7],[3,'disable']])
Z([[7],[3,'$k']])
Z([1,'1ce9b49b-2'])
Z(z[4])
Z([3,'demoVideo'])
Z(z[4])
Z(z[4])
Z(z[4])
Z([3,'https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4'])
Z([3,'_cover-view 1ce9b49b controls-title'])
Z([3,'简单的自定义 controls'])
Z(z[2])
Z([3,'_cover-image 1ce9b49b controls-play img'])
Z(z[5])
Z([1,'1ce9b49b-0'])
Z([3,'../../../static/images/about.png'])
Z(z[2])
Z([3,'_cover-image 1ce9b49b controls-pause img'])
Z(z[5])
Z([1,'1ce9b49b-1'])
Z([3,'../../../static/images/activity.png'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'1ce9b49b'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'ea3a3430'])
Z([3,'_view ea3a3430'])
Z([3,'_view ea3a3430 uni-padding-wrap uni-common-mt'])
Z([3,'_button ea3a3430'])
Z([3,'primary'])
Z([3,'页面主操作 Normal'])
Z(z[3])
Z([3,'true'])
Z(z[4])
Z([3,'页面主操作 Loading'])
Z(z[3])
Z(z[7])
Z(z[4])
Z([3,'页面主操作 Disabled'])
Z(z[3])
Z([3,'default'])
Z([3,'页面次要操作 Normal'])
Z(z[3])
Z(z[7])
Z(z[15])
Z([3,'页面次要操作 Disabled'])
Z(z[3])
Z([3,'warn'])
Z([3,'警告类操作 Normal'])
Z(z[3])
Z(z[7])
Z(z[22])
Z([3,'警告类操作 Disabled'])
Z([3,'_view ea3a3430 button-sp-area'])
Z(z[3])
Z(z[7])
Z(z[4])
Z([3,'按钮'])
Z(z[3])
Z(z[7])
Z(z[7])
Z(z[4])
Z([3,'不可点击的按钮'])
Z(z[3])
Z(z[7])
Z(z[15])
Z(z[32])
Z(z[3])
Z(z[7])
Z(z[7])
Z(z[15])
Z(z[32])
Z([3,'_button ea3a3430 mini-btn'])
Z([3,'mini'])
Z(z[4])
Z(z[32])
Z(z[47])
Z(z[48])
Z(z[15])
Z(z[32])
Z(z[47])
Z(z[48])
Z(z[22])
Z(z[32])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'ea3a3430'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'a2f06d70'])
Z([3,'_view a2f06d70'])
Z([3,'_checkbox-group a2f06d70'])
Z([3,'_label a2f06d70 checkbox'])
Z([3,'true'])
Z([3,'_checkbox a2f06d70'])
Z([3,'haha'])
Z([3,'选中'])
Z(z[3])
Z(z[5])
Z(z[6])
Z([3,'未选中'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'a2f06d70'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'24ec50e8'])
Z([3,'_view 24ec50e8 p_l_r_30'])
Z([3,'handleProxy'])
Z(z[2])
Z([3,'_form 24ec50e8'])
Z([[7],[3,'$k']])
Z([1,'24ec50e8-0'])
Z([3,'_view 24ec50e8 section section_gap mt_10'])
Z([3,'_view 24ec50e8 section__title'])
Z([3,'switch'])
Z([3,'_switch 24ec50e8'])
Z([3,'switch'])
Z(z[7])
Z(z[8])
Z([3,'slider'])
Z([3,'_slider 24ec50e8'])
Z([3,'slider'])
Z([3,'_view 24ec50e8 section mt_10'])
Z(z[8])
Z([3,'input'])
Z([3,'_input 24ec50e8'])
Z([3,'input'])
Z([3,'please input here'])
Z(z[7])
Z(z[8])
Z([3,'radio'])
Z([3,'_radio-group 24ec50e8'])
Z([3,'radio-group'])
Z([3,'_label 24ec50e8'])
Z([3,'_radio 24ec50e8'])
Z([3,'radio1'])
Z([3,'radio1'])
Z(z[28])
Z(z[29])
Z([3,'radio2'])
Z([3,'radio2'])
Z(z[7])
Z(z[8])
Z([3,'checkbox'])
Z([3,'_checkbox-group 24ec50e8'])
Z([3,'checkbox'])
Z(z[28])
Z([3,'_checkbox 24ec50e8'])
Z([3,'checkbox1'])
Z([3,'checkbox1'])
Z(z[28])
Z(z[42])
Z([3,'checkbox2'])
Z([3,'checkbox2'])
Z([3,'_view 24ec50e8 btn-area mt_20'])
Z([3,'_button 24ec50e8'])
Z([3,'submit'])
Z([3,'Submit'])
Z([3,'_button 24ec50e8 mt_10'])
Z([3,'reset '])
Z([3,'Reset'])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'24ec50e8'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'5fde10be'])
Z([3,'_view 5fde10be p_l_r_30'])
Z([3,'_view 5fde10be mt_10'])
Z([3,'可自动聚焦的'])
Z([3,'_input 5fde10be'])
Z([3,'自动获得聚焦'])
Z([3,'text'])
Z([3,''])
Z([3,'_view 5fde10be mt_20'])
Z([3,'键盘右下角按钮显示为搜索'])
Z(z[4])
Z([3,'search'])
Z([3,'键盘右下角按钮显示为搜索'])
Z(z[6])
Z(z[8])
Z([3,'最大输入长度为10'])
Z(z[4])
Z(z[11])
Z([3,'10'])
Z([3,'最大输入长度为10'])
Z(z[6])
Z(z[8])
Z([a,[3,'实时获取输入值：'],[[7],[3,'inputValue']]])
Z([3,'handleProxy'])
Z(z[4])
Z([[7],[3,'$k']])
Z([1,'5fde10be-0'])
Z([3,'输入同步到view中'])
Z(z[6])
Z(z[7])
Z(z[8])
Z([a,[3,'控制输入的input：'],z[22][2]])
Z(z[23])
Z(z[4])
Z(z[25])
Z([1,'5fde10be-1'])
Z([3,'连续的两个1'])
Z(z[6])
Z([[7],[3,'changeValue']])
Z(z[8])
Z([3,'控制键盘input'])
Z(z[23])
Z(z[4])
Z(z[25])
Z([1,'5fde10be-2'])
Z([3,'输入123自动收起键盘'])
Z([3,'input1'])
Z(z[6])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'5fde10be'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'1c14feea'])
Z([3,'_view 1c14feea p_l_r_30'])
Z([3,'index'])
Z([3,'value'])
Z([[7],[3,'icontype']])
Z(z[2])
Z([3,'_view 1c14feea item'])
Z([[7],[3,'index']])
Z([3,'_icon 1c14feea'])
Z([3,'26'])
Z([[7],[3,'value']])
Z([3,'_text 1c14feea'])
Z([a,[[7],[3,'value']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'1c14feea'])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'76e5de91'])
Z([3,'_view 76e5de91 p_l_r_30 '])
Z([3,'_view 76e5de91 paneltitle  ff_Medium fw_700 bb_eeeeee'])
Z([3,'视图容器'])
Z([3,'_navigator 76e5de91 mt_20'])
Z([3,'none'])
Z([3,'../view/index'])
Z([3,'View'])
Z(z[4])
Z(z[5])
Z([3,'../scroll-view/index'])
Z([3,'Scroll-view'])
Z(z[4])
Z(z[5])
Z([3,'../swiper/index'])
Z([3,'轮播图'])
Z(z[4])
Z(z[5])
Z([3,'../movable-view/index'])
Z([3,'可移动区域'])
Z(z[4])
Z(z[5])
Z([3,'../cover/cover'])
Z([3,'cover-view（cover-image）'])
Z([3,'_view 76e5de91 paneltitle  ff_Medium fw_700 bb_eeeeee mt_20'])
Z([3,'基础内容'])
Z(z[4])
Z(z[5])
Z([3,'../icon/icon'])
Z([3,'图标'])
Z(z[4])
Z(z[5])
Z([3,'../text/text'])
Z([3,'文本'])
Z(z[4])
Z(z[5])
Z([3,'../progress/progress'])
Z([3,'进度条'])
Z(z[24])
Z([3,'表单组件'])
Z(z[4])
Z(z[5])
Z([3,'../form/button/button'])
Z([3,'按钮'])
Z(z[4])
Z(z[5])
Z([3,'../form/checkbox/checkbox'])
Z([3,'复选框'])
Z(z[4])
Z(z[5])
Z([3,'../form/form/form'])
Z([3,'表单'])
Z(z[4])
Z(z[5])
Z([3,'../form/input/input'])
Z([3,'输入框'])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'76e5de91'])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'15bf38eb'])
Z([3,'_view 15bf38eb'])
Z([3,'_movable-area 15bf38eb'])
Z([3,'handleProxy'])
Z([3,'_movable-view 15bf38eb'])
Z([[7],[3,'$k']])
Z([1,'15bf38eb-0'])
Z([3,'all'])
Z([[7],[3,'x']])
Z([[7],[3,'y']])
Z([3,'点我'])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'15bf38eb'])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'4d9e57ea'])
Z([3,'_view 4d9e57ea p_l_r_30'])
Z([3,'_view 4d9e57ea mt_20'])
Z([3,'true'])
Z([3,'forwards'])
Z([3,'red'])
Z([3,'blue'])
Z([3,'_progress 4d9e57ea'])
Z([3,'80'])
Z([3,'10'])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'4d9e57ea'])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'31775c24'])
Z([3,'_view 31775c24 p_l_r_30'])
Z([3,'_view 31775c24 paneltitle ff_Medium fw_700 mt_20'])
Z([3,'Scroll-view'])
Z([3,'_view 31775c24 mt_20'])
Z([3,'handleProxy'])
Z(z[5])
Z(z[5])
Z([3,'_scroll-view 31775c24 scroll-y'])
Z([[7],[3,'$k']])
Z([1,'31775c24-0'])
Z([[7],[3,'scrollTop']])
Z([3,'true'])
Z([3,'_view 31775c24 scroll-item red'])
Z([3,'a1'])
Z([3,'A'])
Z([3,'_view 31775c24 scroll-item blue'])
Z([3,'a2'])
Z([3,'B'])
Z([3,'_view 31775c24 scroll-item green'])
Z([3,'a3'])
Z([3,'C'])
Z([3,'_view 31775c24 scroll-item yellow'])
Z([3,'a4'])
Z([3,'D'])
Z(z[5])
Z([3,'_view 31775c24 mt_20 '])
Z(z[9])
Z([1,'31775c24-1'])
Z([3,'点击回到顶部'])
Z(z[26])
Z([3,'横向滚动'])
Z([3,'_view 31775c24'])
Z(z[5])
Z([3,'_scroll-view 31775c24 scroll-x'])
Z(z[9])
Z([1,'31775c24-2'])
Z([3,'120'])
Z(z[12])
Z([3,'_view 31775c24 scroll-x-item red'])
Z(z[14])
Z(z[15])
Z([3,'_view 31775c24 scroll-x-item blue'])
Z(z[17])
Z(z[18])
Z([3,'_view 31775c24 scroll-x-item green'])
Z(z[20])
Z(z[21])
Z([3,'_view 31775c24 scroll-x-item yellow'])
Z(z[23])
Z(z[24])
Z(z[4])
Z([3,'注意点：:scrollTop前面的: 不能忘记！'])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'31775c24'])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'5afe5282'])
Z([3,'_view 5afe5282'])
Z([[7],[3,'autoplay']])
Z([3,'_swiper 5afe5282'])
Z([[7],[3,'duration']])
Z([[7],[3,'indicatorDots']])
Z([[7],[3,'interval']])
Z([3,'_swiper-item 5afe5282'])
Z([3,'_view 5afe5282 swiper-item red'])
Z(z[7])
Z([3,'_view 5afe5282 swiper-item green'])
Z(z[7])
Z([3,'_view 5afe5282 swiper-item blue'])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'5afe5282'])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'0702d10b'])
Z([3,'_view 0702d10b'])
Z(z[1])
Z([3,'_view 0702d10b text-box'])
Z([3,'true'])
Z([3,'_text 0702d10b'])
Z([1,true])
Z([[7],[3,'nbsp']])
Z([a,[[7],[3,'text']]])
Z(z[1])
Z([3,'handleProxy'])
Z([3,'_button 0702d10b'])
Z([[7],[3,'$k']])
Z([1,'0702d10b-0'])
Z([[2,'!'],[[7],[3,'canAdd']]])
Z([3,'primary'])
Z([3,'add line'])
Z(z[10])
Z(z[11])
Z(z[12])
Z([1,'0702d10b-1'])
Z([[2,'!'],[[7],[3,'canRemove']]])
Z([3,'warn'])
Z([3,'remove line'])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'0702d10b'])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'093dd7a8'])
Z([3,'_view 093dd7a8 p_l_r_30'])
Z([3,'_view 093dd7a8 paneltitle ff_Medium fw_700 mt_20'])
Z([3,'View'])
Z([3,'_view 093dd7a8 mt_20'])
Z([3,'flex-direction: row'])
Z([3,'_text 093dd7a8'])
Z([3,'\n 横向布局'])
Z([3,'_view 093dd7a8 d_flex mt_20'])
Z([3,'_view 093dd7a8 red d_center'])
Z([3,'A'])
Z([3,'_view 093dd7a8 blue d_center'])
Z([3,'B'])
Z([3,'_view 093dd7a8 green d_center'])
Z([3,'C'])
Z(z[4])
Z([3,'flex-direction: colum'])
Z(z[6])
Z([3,'\n 纵向布局'])
Z([3,'_view 093dd7a8 d_flex d_column mt_20'])
Z([3,'_view 093dd7a8 red d_center '])
Z(z[10])
Z([3,'_view 093dd7a8 blue d_center mt_20'])
Z(z[12])
Z([3,'_view 093dd7a8 green d_center mt_20'])
Z(z[14])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'093dd7a8'])
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'220a2223'])
Z([3,'_view 220a2223 content'])
Z([3,'_image 220a2223 logo'])
Z([3,'http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg'])
Z([3,'_view 220a2223'])
Z([3,'_text 220a2223 title'])
Z([a,[[7],[3,'title']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'220a2223'])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./common/slots.wxml','./pages/api/index.vue.wxml','./pages/api/index.wxml','./index.vue.wxml','./pages/component/cover/cover.vue.wxml','./pages/component/cover/cover.wxml','./cover.vue.wxml','./pages/component/form/button/button.vue.wxml','./pages/component/form/button/button.wxml','./button.vue.wxml','./pages/component/form/checkbox/checkbox.vue.wxml','./pages/component/form/checkbox/checkbox.wxml','./checkbox.vue.wxml','./pages/component/form/form/form.vue.wxml','./pages/component/form/form/form.wxml','./form.vue.wxml','./pages/component/form/input/input.vue.wxml','./pages/component/form/input/input.wxml','./input.vue.wxml','./pages/component/icon/icon.vue.wxml','./pages/component/icon/icon.wxml','./icon.vue.wxml','./pages/component/index/index.vue.wxml','./pages/component/index/index.wxml','./pages/component/movable-view/index.vue.wxml','./pages/component/movable-view/index.wxml','./pages/component/progress/progress.vue.wxml','./pages/component/progress/progress.wxml','./progress.vue.wxml','./pages/component/scroll-view/index.vue.wxml','./pages/component/scroll-view/index.wxml','./pages/component/swiper/index.vue.wxml','./pages/component/swiper/index.wxml','./pages/component/text/text.vue.wxml','./pages/component/text/text.wxml','./text.vue.wxml','./pages/component/view/index.vue.wxml','./pages/component/view/index.wxml','./pages/index/index.vue.wxml','./pages/index/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
d_[x[1]]["14b238eb"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':14b238eb'
r.wxVkey=b
gg.f=$gdc(f_["./pages/api/index.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
cs.push("./pages/api/index.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/api/index.vue.wxml:view:1:56")
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
var oD=_oz(z,3,e,s,gg)
_(xC,oD)
cs.push("./pages/api/index.vue.wxml:text:1:104")
var fE=_n('text')
_rz(z,fE,'class',4,e,s,gg)
var cF=_oz(z,5,e,s,gg)
_(fE,cF)
cs.pop()
_(xC,fE)
cs.pop()
_(oB,xC)
cs.push("./pages/api/index.vue.wxml:view:1:162")
var hG=_n('view')
_rz(z,hG,'class',6,e,s,gg)
cs.push("./pages/api/index.vue.wxml:view:1:198")
var oH=_n('view')
_rz(z,oH,'class',7,e,s,gg)
var cI=_oz(z,8,e,s,gg)
_(oH,cI)
cs.pop()
_(hG,oH)
cs.push("./pages/api/index.vue.wxml:view:1:239")
var oJ=_n('view')
_rz(z,oJ,'class',9,e,s,gg)
var lK=_oz(z,10,e,s,gg)
_(oJ,lK)
cs.pop()
_(hG,oJ)
cs.push("./pages/api/index.vue.wxml:view:1:281")
var aL=_n('view')
_rz(z,aL,'class',11,e,s,gg)
var tM=_oz(z,12,e,s,gg)
_(aL,tM)
cs.pop()
_(hG,aL)
cs.pop()
_(oB,hG)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var oD=e_[x[2]].i
_ai(oD,x[3],e_,x[2],1,1)
var fE=_v()
_(r,fE)
cs.push("./pages/api/index.wxml:template:2:6")
var cF=_oz(z,1,e,s,gg)
var hG=_gd(x[2],cF,e_,d_)
if(hG){
var oH=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fE.wxXCkey=3
hG(oH,oH,fE,gg)
gg.f=cur_globalf
}
else _w(cF,x[2],2,18)
cs.pop()
oD.pop()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[x[3]],ic:[]}
d_[x[4]]={}
d_[x[4]]["1ce9b49b"]=function(e,s,r,gg){
var z=gz$gwx_4()
var b=x[4]+':1ce9b49b'
r.wxVkey=b
gg.f=$gdc(f_["./pages/component/cover/cover.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[4]);return}
p_[b]=true
try{
cs.push("./pages/component/cover/cover.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/component/cover/cover.vue.wxml:video:1:61")
var xC=_mz(z,'video',['bindfullscreenchange',2,'class',1,'controls',2,'data-comkey',3,'data-eventid',4,'enableProgressGesture',5,'id',6,'showCenterPlayBtn',7,'showFullscreenBtn',8,'showPlayBtn',9,'src',10],[],e,s,gg)
cs.push("./pages/component/cover/cover.vue.wxml:cover-view:1:584")
var oD=_n('cover-view')
_rz(z,oD,'class',13,e,s,gg)
var fE=_oz(z,14,e,s,gg)
_(oD,fE)
cs.pop()
_(xC,oD)
cs.push("./pages/component/cover/cover.vue.wxml:cover-image:1:680")
var cF=_mz(z,'cover-image',['bindtap',15,'class',1,'data-comkey',2,'data-eventid',3,'src',4],[],e,s,gg)
cs.pop()
_(xC,cF)
cs.push("./pages/component/cover/cover.vue.wxml:cover-image:1:869")
var hG=_mz(z,'cover-image',['bindtap',20,'class',1,'data-comkey',2,'data-eventid',3,'src',4],[],e,s,gg)
cs.pop()
_(xC,hG)
cs.pop()
_(oB,xC)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[4]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var lK=e_[x[5]].i
_ai(lK,x[6],e_,x[5],1,1)
var aL=_v()
_(r,aL)
cs.push("./pages/component/cover/cover.wxml:template:2:6")
var tM=_oz(z,1,e,s,gg)
var eN=_gd(x[5],tM,e_,d_)
if(eN){
var bO=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aL.wxXCkey=3
eN(bO,bO,aL,gg)
gg.f=cur_globalf
}
else _w(tM,x[5],2,18)
cs.pop()
lK.pop()
return r
}
e_[x[5]]={f:m4,j:[],i:[],ti:[x[6]],ic:[]}
d_[x[7]]={}
d_[x[7]]["ea3a3430"]=function(e,s,r,gg){
var z=gz$gwx_6()
var b=x[7]+':ea3a3430'
r.wxVkey=b
gg.f=$gdc(f_["./pages/component/form/button/button.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[7]);return}
p_[b]=true
try{
cs.push("./pages/component/form/button/button.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/component/form/button/button.vue.wxml:view:1:56")
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
cs.push("./pages/component/form/button/button.vue.wxml:button:1:116")
var oD=_mz(z,'button',['class',3,'type',1],[],e,s,gg)
var fE=_oz(z,5,e,s,gg)
_(oD,fE)
cs.pop()
_(xC,oD)
cs.push("./pages/component/form/button/button.vue.wxml:button:1:195")
var cF=_mz(z,'button',['class',6,'loading',1,'type',2],[],e,s,gg)
var hG=_oz(z,9,e,s,gg)
_(cF,hG)
cs.pop()
_(xC,cF)
cs.push("./pages/component/form/button/button.vue.wxml:button:1:290")
var oH=_mz(z,'button',['class',10,'disabled',1,'type',2],[],e,s,gg)
var cI=_oz(z,13,e,s,gg)
_(oH,cI)
cs.pop()
_(xC,oH)
cs.push("./pages/component/form/button/button.vue.wxml:button:1:387")
var oJ=_mz(z,'button',['class',14,'type',1],[],e,s,gg)
var lK=_oz(z,16,e,s,gg)
_(oJ,lK)
cs.pop()
_(xC,oJ)
cs.push("./pages/component/form/button/button.vue.wxml:button:1:469")
var aL=_mz(z,'button',['class',17,'disabled',1,'type',2],[],e,s,gg)
var tM=_oz(z,20,e,s,gg)
_(aL,tM)
cs.pop()
_(xC,aL)
cs.push("./pages/component/form/button/button.vue.wxml:button:1:569")
var eN=_mz(z,'button',['class',21,'type',1],[],e,s,gg)
var bO=_oz(z,23,e,s,gg)
_(eN,bO)
cs.pop()
_(xC,eN)
cs.push("./pages/component/form/button/button.vue.wxml:button:1:645")
var oP=_mz(z,'button',['class',24,'disabled',1,'type',2],[],e,s,gg)
var xQ=_oz(z,27,e,s,gg)
_(oP,xQ)
cs.pop()
_(xC,oP)
cs.push("./pages/component/form/button/button.vue.wxml:view:1:739")
var oR=_n('view')
_rz(z,oR,'class',28,e,s,gg)
cs.push("./pages/component/form/button/button.vue.wxml:button:1:783")
var fS=_mz(z,'button',['class',29,'plain',1,'type',2],[],e,s,gg)
var cT=_oz(z,32,e,s,gg)
_(fS,cT)
cs.pop()
_(oR,fS)
cs.push("./pages/component/form/button/button.vue.wxml:button:1:859")
var hU=_mz(z,'button',['class',33,'disabled',1,'plain',2,'type',3],[],e,s,gg)
var oV=_oz(z,37,e,s,gg)
_(hU,oV)
cs.pop()
_(oR,hU)
cs.push("./pages/component/form/button/button.vue.wxml:button:1:966")
var cW=_mz(z,'button',['class',38,'plain',1,'type',2],[],e,s,gg)
var oX=_oz(z,41,e,s,gg)
_(cW,oX)
cs.pop()
_(oR,cW)
cs.push("./pages/component/form/button/button.vue.wxml:button:1:1042")
var lY=_mz(z,'button',['class',42,'disabled',1,'plain',2,'type',3],[],e,s,gg)
var aZ=_oz(z,46,e,s,gg)
_(lY,aZ)
cs.pop()
_(oR,lY)
cs.push("./pages/component/form/button/button.vue.wxml:button:1:1134")
var t1=_mz(z,'button',['class',47,'size',1,'type',2],[],e,s,gg)
var e2=_oz(z,50,e,s,gg)
_(t1,e2)
cs.pop()
_(oR,t1)
cs.push("./pages/component/form/button/button.vue.wxml:button:1:1218")
var b3=_mz(z,'button',['class',51,'size',1,'type',2],[],e,s,gg)
var o4=_oz(z,54,e,s,gg)
_(b3,o4)
cs.pop()
_(oR,b3)
cs.push("./pages/component/form/button/button.vue.wxml:button:1:1302")
var x5=_mz(z,'button',['class',55,'size',1,'type',2],[],e,s,gg)
var o6=_oz(z,58,e,s,gg)
_(x5,o6)
cs.pop()
_(oR,x5)
cs.pop()
_(xC,oR)
cs.pop()
_(oB,xC)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[7]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var oR=e_[x[8]].i
_ai(oR,x[9],e_,x[8],1,1)
var fS=_v()
_(r,fS)
cs.push("./pages/component/form/button/button.wxml:template:2:6")
var cT=_oz(z,1,e,s,gg)
var hU=_gd(x[8],cT,e_,d_)
if(hU){
var oV=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fS.wxXCkey=3
hU(oV,oV,fS,gg)
gg.f=cur_globalf
}
else _w(cT,x[8],2,18)
cs.pop()
oR.pop()
return r
}
e_[x[8]]={f:m6,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[10]]={}
d_[x[10]]["a2f06d70"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[10]+':a2f06d70'
r.wxVkey=b
gg.f=$gdc(f_["./pages/component/form/checkbox/checkbox.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[10]);return}
p_[b]=true
try{
cs.push("./pages/component/form/checkbox/checkbox.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/component/form/checkbox/checkbox.vue.wxml:checkbox-group:1:56")
var xC=_n('checkbox-group')
_rz(z,xC,'class',2,e,s,gg)
cs.push("./pages/component/form/checkbox/checkbox.vue.wxml:label:1:105")
var oD=_n('label')
_rz(z,oD,'class',3,e,s,gg)
cs.push("./pages/component/form/checkbox/checkbox.vue.wxml:checkbox:1:145")
var fE=_mz(z,'checkbox',['checked',4,'class',1,'value',2],[],e,s,gg)
cs.pop()
_(oD,fE)
var cF=_oz(z,7,e,s,gg)
_(oD,cF)
cs.pop()
_(xC,oD)
cs.push("./pages/component/form/checkbox/checkbox.vue.wxml:label:1:235")
var hG=_n('label')
_rz(z,hG,'class',8,e,s,gg)
cs.push("./pages/component/form/checkbox/checkbox.vue.wxml:checkbox:1:275")
var oH=_mz(z,'checkbox',['class',9,'value',1],[],e,s,gg)
cs.pop()
_(hG,oH)
var cI=_oz(z,11,e,s,gg)
_(hG,cI)
cs.pop()
_(xC,hG)
cs.pop()
_(oB,xC)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[10]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var lY=e_[x[11]].i
_ai(lY,x[12],e_,x[11],1,1)
var aZ=_v()
_(r,aZ)
cs.push("./pages/component/form/checkbox/checkbox.wxml:template:2:6")
var t1=_oz(z,1,e,s,gg)
var e2=_gd(x[11],t1,e_,d_)
if(e2){
var b3=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aZ.wxXCkey=3
e2(b3,b3,aZ,gg)
gg.f=cur_globalf
}
else _w(t1,x[11],2,18)
cs.pop()
lY.pop()
return r
}
e_[x[11]]={f:m8,j:[],i:[],ti:[x[12]],ic:[]}
d_[x[13]]={}
d_[x[13]]["24ec50e8"]=function(e,s,r,gg){
var z=gz$gwx_10()
var b=x[13]+':24ec50e8'
r.wxVkey=b
gg.f=$gdc(f_["./pages/component/form/form/form.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[13]);return}
p_[b]=true
try{
cs.push("./pages/component/form/form/form.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/component/form/form/form.vue.wxml:form:1:65")
var xC=_mz(z,'form',['bindreset',2,'bindsubmit',1,'class',2,'data-comkey',3,'data-eventid',4],[],e,s,gg)
cs.push("./pages/component/form/form/form.vue.wxml:view:1:196")
var oD=_n('view')
_rz(z,oD,'class',7,e,s,gg)
cs.push("./pages/component/form/form/form.vue.wxml:view:1:251")
var fE=_n('view')
_rz(z,fE,'class',8,e,s,gg)
var cF=_oz(z,9,e,s,gg)
_(fE,cF)
cs.pop()
_(oD,fE)
cs.push("./pages/component/form/form/form.vue.wxml:switch:1:308")
var hG=_mz(z,'switch',['class',10,'name',1],[],e,s,gg)
cs.pop()
_(oD,hG)
cs.pop()
_(xC,oD)
cs.push("./pages/component/form/form/form.vue.wxml:view:1:364")
var oH=_n('view')
_rz(z,oH,'class',12,e,s,gg)
cs.push("./pages/component/form/form/form.vue.wxml:view:1:419")
var cI=_n('view')
_rz(z,cI,'class',13,e,s,gg)
var oJ=_oz(z,14,e,s,gg)
_(cI,oJ)
cs.pop()
_(oH,cI)
cs.push("./pages/component/form/form/form.vue.wxml:slider:1:476")
var lK=_mz(z,'slider',['showValue',-1,'class',15,'name',1],[],e,s,gg)
cs.pop()
_(oH,lK)
cs.pop()
_(xC,oH)
cs.push("./pages/component/form/form/form.vue.wxml:view:1:543")
var aL=_n('view')
_rz(z,aL,'class',17,e,s,gg)
cs.push("./pages/component/form/form/form.vue.wxml:view:1:586")
var tM=_n('view')
_rz(z,tM,'class',18,e,s,gg)
var eN=_oz(z,19,e,s,gg)
_(tM,eN)
cs.pop()
_(aL,tM)
cs.push("./pages/component/form/form/form.vue.wxml:input:1:642")
var bO=_mz(z,'input',['class',20,'name',1,'placeholder',2],[],e,s,gg)
cs.pop()
_(aL,bO)
cs.pop()
_(xC,aL)
cs.push("./pages/component/form/form/form.vue.wxml:view:1:727")
var oP=_n('view')
_rz(z,oP,'class',23,e,s,gg)
cs.push("./pages/component/form/form/form.vue.wxml:view:1:782")
var xQ=_n('view')
_rz(z,xQ,'class',24,e,s,gg)
var oR=_oz(z,25,e,s,gg)
_(xQ,oR)
cs.pop()
_(oP,xQ)
cs.push("./pages/component/form/form/form.vue.wxml:radio-group:1:838")
var fS=_mz(z,'radio-group',['class',26,'name',1],[],e,s,gg)
cs.push("./pages/component/form/form/form.vue.wxml:label:1:900")
var cT=_n('label')
_rz(z,cT,'class',28,e,s,gg)
cs.push("./pages/component/form/form/form.vue.wxml:radio:1:931")
var hU=_mz(z,'radio',['class',29,'value',1],[],e,s,gg)
cs.pop()
_(cT,hU)
var oV=_oz(z,31,e,s,gg)
_(cT,oV)
cs.pop()
_(fS,cT)
cs.push("./pages/component/form/form/form.vue.wxml:label:1:993")
var cW=_n('label')
_rz(z,cW,'class',32,e,s,gg)
cs.push("./pages/component/form/form/form.vue.wxml:radio:1:1024")
var oX=_mz(z,'radio',['class',33,'value',1],[],e,s,gg)
cs.pop()
_(cW,oX)
var lY=_oz(z,35,e,s,gg)
_(cW,lY)
cs.pop()
_(fS,cW)
cs.pop()
_(oP,fS)
cs.pop()
_(xC,oP)
cs.push("./pages/component/form/form/form.vue.wxml:view:1:1107")
var aZ=_n('view')
_rz(z,aZ,'class',36,e,s,gg)
cs.push("./pages/component/form/form/form.vue.wxml:view:1:1162")
var t1=_n('view')
_rz(z,t1,'class',37,e,s,gg)
var e2=_oz(z,38,e,s,gg)
_(t1,e2)
cs.pop()
_(aZ,t1)
cs.push("./pages/component/form/form/form.vue.wxml:checkbox-group:1:1221")
var b3=_mz(z,'checkbox-group',['class',39,'name',1],[],e,s,gg)
cs.push("./pages/component/form/form/form.vue.wxml:label:1:1286")
var o4=_n('label')
_rz(z,o4,'class',41,e,s,gg)
cs.push("./pages/component/form/form/form.vue.wxml:checkbox:1:1317")
var x5=_mz(z,'checkbox',['class',42,'value',1],[],e,s,gg)
cs.pop()
_(o4,x5)
var o6=_oz(z,44,e,s,gg)
_(o4,o6)
cs.pop()
_(b3,o4)
cs.push("./pages/component/form/form/form.vue.wxml:label:1:1400")
var f7=_n('label')
_rz(z,f7,'class',45,e,s,gg)
cs.push("./pages/component/form/form/form.vue.wxml:checkbox:1:1431")
var c8=_mz(z,'checkbox',['class',46,'value',1],[],e,s,gg)
cs.pop()
_(f7,c8)
var h9=_oz(z,48,e,s,gg)
_(f7,h9)
cs.pop()
_(b3,f7)
cs.pop()
_(aZ,b3)
cs.pop()
_(xC,aZ)
cs.push("./pages/component/form/form/form.vue.wxml:view:1:1538")
var o0=_n('view')
_rz(z,o0,'class',49,e,s,gg)
cs.push("./pages/component/form/form/form.vue.wxml:button:1:1582")
var cAB=_mz(z,'button',['class',50,'formType',1],[],e,s,gg)
var oBB=_oz(z,52,e,s,gg)
_(cAB,oBB)
cs.pop()
_(o0,cAB)
cs.push("./pages/component/form/form/form.vue.wxml:button:1:1648")
var lCB=_mz(z,'button',['class',53,'formType',1],[],e,s,gg)
var aDB=_oz(z,55,e,s,gg)
_(lCB,aDB)
cs.pop()
_(o0,lCB)
cs.pop()
_(xC,o0)
cs.pop()
_(oB,xC)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[13]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var o6=e_[x[14]].i
_ai(o6,x[15],e_,x[14],1,1)
var f7=_v()
_(r,f7)
cs.push("./pages/component/form/form/form.wxml:template:2:6")
var c8=_oz(z,1,e,s,gg)
var h9=_gd(x[14],c8,e_,d_)
if(h9){
var o0=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
f7.wxXCkey=3
h9(o0,o0,f7,gg)
gg.f=cur_globalf
}
else _w(c8,x[14],2,18)
cs.pop()
o6.pop()
return r
}
e_[x[14]]={f:m10,j:[],i:[],ti:[x[15]],ic:[]}
d_[x[16]]={}
d_[x[16]]["5fde10be"]=function(e,s,r,gg){
var z=gz$gwx_12()
var b=x[16]+':5fde10be'
r.wxVkey=b
gg.f=$gdc(f_["./pages/component/form/input/input.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[16]);return}
p_[b]=true
try{
cs.push("./pages/component/form/input/input.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/component/form/input/input.vue.wxml:view:1:65")
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
var oD=_oz(z,3,e,s,gg)
_(xC,oD)
cs.push("./pages/component/form/input/input.vue.wxml:input:1:118")
var fE=_mz(z,'input',['focus',-1,'class',4,'placeholder',1,'type',2,'value',3],[],e,s,gg)
cs.pop()
_(xC,fE)
cs.pop()
_(oB,xC)
cs.push("./pages/component/form/input/input.vue.wxml:view:1:218")
var cF=_n('view')
_rz(z,cF,'class',8,e,s,gg)
var hG=_oz(z,9,e,s,gg)
_(cF,hG)
cs.push("./pages/component/form/input/input.vue.wxml:input:1:289")
var oH=_mz(z,'input',['class',10,'confirmType',1,'placeholder',2,'type',3],[],e,s,gg)
cs.pop()
_(cF,oH)
cs.pop()
_(oB,cF)
cs.push("./pages/component/form/input/input.vue.wxml:view:1:414")
var cI=_n('view')
_rz(z,cI,'class',14,e,s,gg)
var oJ=_oz(z,15,e,s,gg)
_(cI,oJ)
cs.push("./pages/component/form/input/input.vue.wxml:input:1:472")
var lK=_mz(z,'input',['class',16,'confirmType',1,'maxlength',2,'placeholder',3,'type',4],[],e,s,gg)
cs.pop()
_(cI,lK)
cs.pop()
_(oB,cI)
cs.push("./pages/component/form/input/input.vue.wxml:view:1:599")
var aL=_n('view')
_rz(z,aL,'class',21,e,s,gg)
var tM=_oz(z,22,e,s,gg)
_(aL,tM)
cs.push("./pages/component/form/input/input.vue.wxml:input:1:674")
var eN=_mz(z,'input',['bindinput',23,'class',1,'data-comkey',2,'data-eventid',3,'placeholder',4,'type',5,'value',6],[],e,s,gg)
cs.pop()
_(aL,eN)
cs.pop()
_(oB,aL)
cs.push("./pages/component/form/input/input.vue.wxml:view:1:849")
var bO=_n('view')
_rz(z,bO,'class',30,e,s,gg)
var oP=_oz(z,31,e,s,gg)
_(bO,oP)
cs.push("./pages/component/form/input/input.vue.wxml:input:1:923")
var xQ=_mz(z,'input',['bindinput',32,'class',1,'data-comkey',2,'data-eventid',3,'placeholder',4,'type',5,'value',6],[],e,s,gg)
cs.pop()
_(bO,xQ)
cs.pop()
_(oB,bO)
cs.push("./pages/component/form/input/input.vue.wxml:view:1:1107")
var oR=_n('view')
_rz(z,oR,'class',39,e,s,gg)
var fS=_oz(z,40,e,s,gg)
_(oR,fS)
cs.push("./pages/component/form/input/input.vue.wxml:input:1:1159")
var cT=_mz(z,'input',['bindinput',41,'class',1,'data-comkey',2,'data-eventid',3,'placeholder',4,'ref',5,'type',6],[],e,s,gg)
cs.pop()
_(oR,cT)
cs.pop()
_(oB,oR)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[16]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var lCB=e_[x[17]].i
_ai(lCB,x[18],e_,x[17],1,1)
var aDB=_v()
_(r,aDB)
cs.push("./pages/component/form/input/input.wxml:template:2:6")
var tEB=_oz(z,1,e,s,gg)
var eFB=_gd(x[17],tEB,e_,d_)
if(eFB){
var bGB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aDB.wxXCkey=3
eFB(bGB,bGB,aDB,gg)
gg.f=cur_globalf
}
else _w(tEB,x[17],2,18)
cs.pop()
lCB.pop()
return r
}
e_[x[17]]={f:m12,j:[],i:[],ti:[x[18]],ic:[]}
d_[x[19]]={}
d_[x[19]]["1c14feea"]=function(e,s,r,gg){
var z=gz$gwx_14()
var b=x[19]+':1c14feea'
r.wxVkey=b
gg.f=$gdc(f_["./pages/component/icon/icon.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[19]);return}
p_[b]=true
try{
cs.push("./pages/component/icon/icon.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./pages/component/icon/icon.vue.wxml:view:1:65")
var oD=function(cF,fE,hG,gg){
cs.push("./pages/component/icon/icon.vue.wxml:view:1:65")
var cI=_mz(z,'view',['class',6,'key',1],[],cF,fE,gg)
cs.push("./pages/component/icon/icon.vue.wxml:icon:1:193")
var oJ=_mz(z,'icon',['class',8,'size',1,'type',2],[],cF,fE,gg)
cs.pop()
_(cI,oJ)
cs.push("./pages/component/icon/icon.vue.wxml:text:1:256")
var lK=_n('text')
_rz(z,lK,'class',11,cF,fE,gg)
var aL=_oz(z,12,cF,fE,gg)
_(lK,aL)
cs.pop()
_(cI,lK)
cs.pop()
_(hG,cI)
return hG
}
xC.wxXCkey=2
_2z(z,4,oD,e,s,gg,xC,'value','index','index')
cs.pop()
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[19]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var oJB=e_[x[20]].i
_ai(oJB,x[21],e_,x[20],1,1)
var fKB=_v()
_(r,fKB)
cs.push("./pages/component/icon/icon.wxml:template:2:6")
var cLB=_oz(z,1,e,s,gg)
var hMB=_gd(x[20],cLB,e_,d_)
if(hMB){
var oNB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fKB.wxXCkey=3
hMB(oNB,oNB,fKB,gg)
gg.f=cur_globalf
}
else _w(cLB,x[20],2,18)
cs.pop()
oJB.pop()
return r
}
e_[x[20]]={f:m14,j:[],i:[],ti:[x[21]],ic:[]}
d_[x[22]]={}
d_[x[22]]["76e5de91"]=function(e,s,r,gg){
var z=gz$gwx_16()
var b=x[22]+':76e5de91'
r.wxVkey=b
gg.f=$gdc(f_["./pages/component/index/index.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[22]);return}
p_[b]=true
try{
cs.push("./pages/component/index/index.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/component/index/index.vue.wxml:view:1:66")
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
var oD=_oz(z,3,e,s,gg)
_(xC,oD)
cs.pop()
_(oB,xC)
cs.push("./pages/component/index/index.vue.wxml:navigator:1:153")
var fE=_mz(z,'navigator',['class',4,'hoverClass',1,'url',2],[],e,s,gg)
var cF=_oz(z,7,e,s,gg)
_(fE,cF)
cs.pop()
_(oB,fE)
cs.push("./pages/component/index/index.vue.wxml:navigator:1:253")
var hG=_mz(z,'navigator',['class',8,'hoverClass',1,'url',2],[],e,s,gg)
var oH=_oz(z,11,e,s,gg)
_(hG,oH)
cs.pop()
_(oB,hG)
cs.push("./pages/component/index/index.vue.wxml:navigator:1:367")
var cI=_mz(z,'navigator',['class',12,'hoverClass',1,'url',2],[],e,s,gg)
var oJ=_oz(z,15,e,s,gg)
_(cI,oJ)
cs.pop()
_(oB,cI)
cs.push("./pages/component/index/index.vue.wxml:navigator:1:474")
var lK=_mz(z,'navigator',['class',16,'hoverClass',1,'url',2],[],e,s,gg)
var aL=_oz(z,19,e,s,gg)
_(lK,aL)
cs.pop()
_(oB,lK)
cs.push("./pages/component/index/index.vue.wxml:navigator:1:593")
var tM=_mz(z,'navigator',['class',20,'hoverClass',1,'url',2],[],e,s,gg)
var eN=_oz(z,23,e,s,gg)
_(tM,eN)
cs.pop()
_(oB,tM)
cs.push("./pages/component/index/index.vue.wxml:view:1:717")
var bO=_n('view')
_rz(z,bO,'class',24,e,s,gg)
var oP=_oz(z,25,e,s,gg)
_(bO,oP)
cs.pop()
_(oB,bO)
cs.push("./pages/component/index/index.vue.wxml:navigator:1:810")
var xQ=_mz(z,'navigator',['class',26,'hoverClass',1,'url',2],[],e,s,gg)
var oR=_oz(z,29,e,s,gg)
_(xQ,oR)
cs.pop()
_(oB,xQ)
cs.push("./pages/component/index/index.vue.wxml:navigator:1:911")
var fS=_mz(z,'navigator',['class',30,'hoverClass',1,'url',2],[],e,s,gg)
var cT=_oz(z,33,e,s,gg)
_(fS,cT)
cs.pop()
_(oB,fS)
cs.push("./pages/component/index/index.vue.wxml:navigator:1:1012")
var hU=_mz(z,'navigator',['class',34,'hoverClass',1,'url',2],[],e,s,gg)
var oV=_oz(z,37,e,s,gg)
_(hU,oV)
cs.pop()
_(oB,hU)
cs.push("./pages/component/index/index.vue.wxml:view:1:1124")
var cW=_n('view')
_rz(z,cW,'class',38,e,s,gg)
var oX=_oz(z,39,e,s,gg)
_(cW,oX)
cs.pop()
_(oB,cW)
cs.push("./pages/component/index/index.vue.wxml:navigator:1:1217")
var lY=_mz(z,'navigator',['class',40,'hoverClass',1,'url',2],[],e,s,gg)
var aZ=_oz(z,43,e,s,gg)
_(lY,aZ)
cs.pop()
_(oB,lY)
cs.push("./pages/component/index/index.vue.wxml:navigator:1:1327")
var t1=_mz(z,'navigator',['class',44,'hoverClass',1,'url',2],[],e,s,gg)
var e2=_oz(z,47,e,s,gg)
_(t1,e2)
cs.pop()
_(oB,t1)
cs.push("./pages/component/index/index.vue.wxml:navigator:1:1444")
var b3=_mz(z,'navigator',['class',48,'hoverClass',1,'url',2],[],e,s,gg)
var o4=_oz(z,51,e,s,gg)
_(b3,o4)
cs.pop()
_(oB,b3)
cs.push("./pages/component/index/index.vue.wxml:navigator:1:1550")
var x5=_mz(z,'navigator',['class',52,'hoverClass',1,'url',2],[],e,s,gg)
var o6=_oz(z,55,e,s,gg)
_(x5,o6)
cs.pop()
_(oB,x5)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
return r
}
e_[x[22]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var lQB=e_[x[23]].i
_ai(lQB,x[3],e_,x[23],1,1)
var aRB=_v()
_(r,aRB)
cs.push("./pages/component/index/index.wxml:template:2:6")
var tSB=_oz(z,1,e,s,gg)
var eTB=_gd(x[23],tSB,e_,d_)
if(eTB){
var bUB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aRB.wxXCkey=3
eTB(bUB,bUB,aRB,gg)
gg.f=cur_globalf
}
else _w(tSB,x[23],2,18)
cs.pop()
lQB.pop()
return r
}
e_[x[23]]={f:m16,j:[],i:[],ti:[x[3]],ic:[]}
d_[x[24]]={}
d_[x[24]]["15bf38eb"]=function(e,s,r,gg){
var z=gz$gwx_18()
var b=x[24]+':15bf38eb'
r.wxVkey=b
gg.f=$gdc(f_["./pages/component/movable-view/index.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[24]);return}
p_[b]=true
try{
cs.push("./pages/component/movable-view/index.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/component/movable-view/index.vue.wxml:movable-area:1:56")
var xC=_n('movable-area')
_rz(z,xC,'class',2,e,s,gg)
cs.push("./pages/component/movable-view/index.vue.wxml:movable-view:1:101")
var oD=_mz(z,'movable-view',['bindchange',3,'class',1,'data-comkey',2,'data-eventid',3,'direction',4,'x',5,'y',6],[],e,s,gg)
var fE=_oz(z,10,e,s,gg)
_(oD,fE)
cs.pop()
_(xC,oD)
cs.pop()
_(oB,xC)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
return r
}
e_[x[24]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var oXB=e_[x[25]].i
_ai(oXB,x[3],e_,x[25],1,1)
var fYB=_v()
_(r,fYB)
cs.push("./pages/component/movable-view/index.wxml:template:2:6")
var cZB=_oz(z,1,e,s,gg)
var h1B=_gd(x[25],cZB,e_,d_)
if(h1B){
var o2B=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fYB.wxXCkey=3
h1B(o2B,o2B,fYB,gg)
gg.f=cur_globalf
}
else _w(cZB,x[25],2,18)
cs.pop()
oXB.pop()
return r
}
e_[x[25]]={f:m18,j:[],i:[],ti:[x[3]],ic:[]}
d_[x[26]]={}
d_[x[26]]["4d9e57ea"]=function(e,s,r,gg){
var z=gz$gwx_20()
var b=x[26]+':4d9e57ea'
r.wxVkey=b
gg.f=$gdc(f_["./pages/component/progress/progress.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[26]);return}
p_[b]=true
try{
cs.push("./pages/component/progress/progress.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/component/progress/progress.vue.wxml:view:1:65")
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
cs.push("./pages/component/progress/progress.vue.wxml:progress:1:100")
var oD=_mz(z,'progress',['showInfo',-1,'active',3,'activeMode',1,'activeColor',2,'backgroundColor',3,'class',4,'percent',5,'strokeWidth',6],[],e,s,gg)
cs.pop()
_(xC,oD)
cs.pop()
_(oB,xC)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
return r
}
e_[x[26]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var l5B=e_[x[27]].i
_ai(l5B,x[28],e_,x[27],1,1)
var a6B=_v()
_(r,a6B)
cs.push("./pages/component/progress/progress.wxml:template:2:6")
var t7B=_oz(z,1,e,s,gg)
var e8B=_gd(x[27],t7B,e_,d_)
if(e8B){
var b9B=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
a6B.wxXCkey=3
e8B(b9B,b9B,a6B,gg)
gg.f=cur_globalf
}
else _w(t7B,x[27],2,18)
cs.pop()
l5B.pop()
return r
}
e_[x[27]]={f:m20,j:[],i:[],ti:[x[28]],ic:[]}
d_[x[29]]={}
d_[x[29]]["31775c24"]=function(e,s,r,gg){
var z=gz$gwx_22()
var b=x[29]+':31775c24'
r.wxVkey=b
gg.f=$gdc(f_["./pages/component/scroll-view/index.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[29]);return}
p_[b]=true
try{
cs.push("./pages/component/scroll-view/index.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/component/scroll-view/index.vue.wxml:view:1:65")
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
var oD=_oz(z,3,e,s,gg)
_(xC,oD)
cs.pop()
_(oB,xC)
cs.push("./pages/component/scroll-view/index.vue.wxml:view:1:146")
var fE=_n('view')
_rz(z,fE,'class',4,e,s,gg)
cs.push("./pages/component/scroll-view/index.vue.wxml:scroll-view:1:181")
var cF=_mz(z,'scroll-view',['bindscroll',5,'bindscrolltolower',1,'bindscrolltoupper',2,'class',3,'data-comkey',4,'data-eventid',5,'scrollTop',6,'scrollY',7],[],e,s,gg)
cs.push("./pages/component/scroll-view/index.vue.wxml:view:1:418")
var hG=_mz(z,'view',['class',13,'id',1],[],e,s,gg)
var oH=_oz(z,15,e,s,gg)
_(hG,oH)
cs.pop()
_(cF,hG)
cs.push("./pages/component/scroll-view/index.vue.wxml:view:1:479")
var cI=_mz(z,'view',['class',16,'id',1],[],e,s,gg)
var oJ=_oz(z,18,e,s,gg)
_(cI,oJ)
cs.pop()
_(cF,cI)
cs.push("./pages/component/scroll-view/index.vue.wxml:view:1:541")
var lK=_mz(z,'view',['class',19,'id',1],[],e,s,gg)
var aL=_oz(z,21,e,s,gg)
_(lK,aL)
cs.pop()
_(cF,lK)
cs.push("./pages/component/scroll-view/index.vue.wxml:view:1:604")
var tM=_mz(z,'view',['class',22,'id',1],[],e,s,gg)
var eN=_oz(z,24,e,s,gg)
_(tM,eN)
cs.pop()
_(cF,tM)
cs.pop()
_(fE,cF)
cs.pop()
_(oB,fE)
cs.push("./pages/component/scroll-view/index.vue.wxml:view:1:689")
var bO=_mz(z,'view',['bindtap',25,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var oP=_oz(z,29,e,s,gg)
_(bO,oP)
cs.pop()
_(oB,bO)
cs.push("./pages/component/scroll-view/index.vue.wxml:view:1:825")
var xQ=_n('view')
_rz(z,xQ,'class',30,e,s,gg)
var oR=_oz(z,31,e,s,gg)
_(xQ,oR)
cs.pop()
_(oB,xQ)
cs.push("./pages/component/scroll-view/index.vue.wxml:view:1:880")
var fS=_n('view')
_rz(z,fS,'class',32,e,s,gg)
cs.push("./pages/component/scroll-view/index.vue.wxml:scroll-view:1:909")
var cT=_mz(z,'scroll-view',['bindscroll',33,'class',1,'data-comkey',2,'data-eventid',3,'scrollLeft',4,'scrollX',5],[],e,s,gg)
cs.push("./pages/component/scroll-view/index.vue.wxml:view:1:1073")
var hU=_mz(z,'view',['class',39,'id',1],[],e,s,gg)
var oV=_oz(z,41,e,s,gg)
_(hU,oV)
cs.pop()
_(cT,hU)
cs.push("./pages/component/scroll-view/index.vue.wxml:view:1:1136")
var cW=_mz(z,'view',['class',42,'id',1],[],e,s,gg)
var oX=_oz(z,44,e,s,gg)
_(cW,oX)
cs.pop()
_(cT,cW)
cs.push("./pages/component/scroll-view/index.vue.wxml:view:1:1200")
var lY=_mz(z,'view',['class',45,'id',1],[],e,s,gg)
var aZ=_oz(z,47,e,s,gg)
_(lY,aZ)
cs.pop()
_(cT,lY)
cs.push("./pages/component/scroll-view/index.vue.wxml:view:1:1265")
var t1=_mz(z,'view',['class',48,'id',1],[],e,s,gg)
var e2=_oz(z,50,e,s,gg)
_(t1,e2)
cs.pop()
_(cT,t1)
cs.pop()
_(fS,cT)
cs.pop()
_(oB,fS)
cs.push("./pages/component/scroll-view/index.vue.wxml:view:1:1352")
var b3=_n('view')
_rz(z,b3,'class',51,e,s,gg)
var o4=_oz(z,52,e,s,gg)
_(b3,o4)
cs.pop()
_(oB,b3)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
return r
}
e_[x[29]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var oBC=e_[x[30]].i
_ai(oBC,x[3],e_,x[30],1,1)
var fCC=_v()
_(r,fCC)
cs.push("./pages/component/scroll-view/index.wxml:template:2:6")
var cDC=_oz(z,1,e,s,gg)
var hEC=_gd(x[30],cDC,e_,d_)
if(hEC){
var oFC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fCC.wxXCkey=3
hEC(oFC,oFC,fCC,gg)
gg.f=cur_globalf
}
else _w(cDC,x[30],2,18)
cs.pop()
oBC.pop()
return r
}
e_[x[30]]={f:m22,j:[],i:[],ti:[x[3]],ic:[]}
d_[x[31]]={}
d_[x[31]]["5afe5282"]=function(e,s,r,gg){
var z=gz$gwx_24()
var b=x[31]+':5afe5282'
r.wxVkey=b
gg.f=$gdc(f_["./pages/component/swiper/index.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[31]);return}
p_[b]=true
try{
cs.push("./pages/component/swiper/index.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/component/swiper/index.vue.wxml:swiper:1:56")
var xC=_mz(z,'swiper',['autoplay',2,'class',1,'duration',2,'indicatorDots',3,'interval',4],[],e,s,gg)
cs.push("./pages/component/swiper/index.vue.wxml:swiper-item:1:196")
var oD=_n('swiper-item')
_rz(z,oD,'class',7,e,s,gg)
cs.push("./pages/component/swiper/index.vue.wxml:view:1:239")
var fE=_n('view')
_rz(z,fE,'class',8,e,s,gg)
cs.pop()
_(oD,fE)
cs.pop()
_(xC,oD)
cs.push("./pages/component/swiper/index.vue.wxml:swiper-item:1:305")
var cF=_n('swiper-item')
_rz(z,cF,'class',9,e,s,gg)
cs.push("./pages/component/swiper/index.vue.wxml:view:1:348")
var hG=_n('view')
_rz(z,hG,'class',10,e,s,gg)
cs.pop()
_(cF,hG)
cs.pop()
_(xC,cF)
cs.push("./pages/component/swiper/index.vue.wxml:swiper-item:1:416")
var oH=_n('swiper-item')
_rz(z,oH,'class',11,e,s,gg)
cs.push("./pages/component/swiper/index.vue.wxml:view:1:459")
var cI=_n('view')
_rz(z,cI,'class',12,e,s,gg)
cs.pop()
_(oH,cI)
cs.pop()
_(xC,oH)
cs.pop()
_(oB,xC)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
return r
}
e_[x[31]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var lIC=e_[x[32]].i
_ai(lIC,x[3],e_,x[32],1,1)
var aJC=_v()
_(r,aJC)
cs.push("./pages/component/swiper/index.wxml:template:2:6")
var tKC=_oz(z,1,e,s,gg)
var eLC=_gd(x[32],tKC,e_,d_)
if(eLC){
var bMC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aJC.wxXCkey=3
eLC(bMC,bMC,aJC,gg)
gg.f=cur_globalf
}
else _w(tKC,x[32],2,18)
cs.pop()
lIC.pop()
return r
}
e_[x[32]]={f:m24,j:[],i:[],ti:[x[3]],ic:[]}
d_[x[33]]={}
d_[x[33]]["0702d10b"]=function(e,s,r,gg){
var z=gz$gwx_26()
var b=x[33]+':0702d10b'
r.wxVkey=b
gg.f=$gdc(f_["./pages/component/text/text.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[33]);return}
p_[b]=true
try{
cs.push("./pages/component/text/text.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/component/text/text.vue.wxml:view:1:56")
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
cs.push("./pages/component/text/text.vue.wxml:view:1:85")
var oD=_mz(z,'view',['class',3,'scrollY',1],[],e,s,gg)
cs.push("./pages/component/text/text.vue.wxml:text:1:139")
var fE=_mz(z,'text',['class',5,'selectable',1,'space',2],[],e,s,gg)
var cF=_oz(z,8,e,s,gg)
_(fE,cF)
cs.pop()
_(oD,fE)
cs.pop()
_(xC,oD)
cs.push("./pages/component/text/text.vue.wxml:view:1:231")
var hG=_n('view')
_rz(z,hG,'class',9,e,s,gg)
cs.push("./pages/component/text/text.vue.wxml:button:1:260")
var oH=_mz(z,'button',['bindtap',10,'class',1,'data-comkey',2,'data-eventid',3,'disabled',4,'type',5],[],e,s,gg)
var cI=_oz(z,16,e,s,gg)
_(oH,cI)
cs.pop()
_(hG,oH)
cs.push("./pages/component/text/text.vue.wxml:button:1:423")
var oJ=_mz(z,'button',['bindtap',17,'class',1,'data-comkey',2,'data-eventid',3,'disabled',4,'type',5],[],e,s,gg)
var lK=_oz(z,23,e,s,gg)
_(oJ,lK)
cs.pop()
_(hG,oJ)
cs.pop()
_(xC,hG)
cs.pop()
_(oB,xC)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
return r
}
e_[x[33]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var oPC=e_[x[34]].i
_ai(oPC,x[35],e_,x[34],1,1)
var fQC=_v()
_(r,fQC)
cs.push("./pages/component/text/text.wxml:template:2:6")
var cRC=_oz(z,1,e,s,gg)
var hSC=_gd(x[34],cRC,e_,d_)
if(hSC){
var oTC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fQC.wxXCkey=3
hSC(oTC,oTC,fQC,gg)
gg.f=cur_globalf
}
else _w(cRC,x[34],2,18)
cs.pop()
oPC.pop()
return r
}
e_[x[34]]={f:m26,j:[],i:[],ti:[x[35]],ic:[]}
d_[x[36]]={}
d_[x[36]]["093dd7a8"]=function(e,s,r,gg){
var z=gz$gwx_28()
var b=x[36]+':093dd7a8'
r.wxVkey=b
gg.f=$gdc(f_["./pages/component/view/index.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[36]);return}
p_[b]=true
try{
cs.push("./pages/component/view/index.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/component/view/index.vue.wxml:view:1:65")
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
var oD=_oz(z,3,e,s,gg)
_(xC,oD)
cs.pop()
_(oB,xC)
cs.push("./pages/component/view/index.vue.wxml:view:1:139")
var fE=_n('view')
_rz(z,fE,'class',4,e,s,gg)
var cF=_oz(z,5,e,s,gg)
_(fE,cF)
cs.push("./pages/component/view/index.vue.wxml:text:1:193")
var hG=_n('text')
_rz(z,hG,'class',6,e,s,gg)
var oH=_oz(z,7,e,s,gg)
_(hG,oH)
cs.pop()
_(fE,hG)
cs.pop()
_(oB,fE)
cs.push("./pages/component/view/index.vue.wxml:view:1:251")
var cI=_n('view')
_rz(z,cI,'class',8,e,s,gg)
cs.push("./pages/component/view/index.vue.wxml:view:1:293")
var oJ=_n('view')
_rz(z,oJ,'class',9,e,s,gg)
var lK=_oz(z,10,e,s,gg)
_(oJ,lK)
cs.pop()
_(cI,oJ)
cs.push("./pages/component/view/index.vue.wxml:view:1:343")
var aL=_n('view')
_rz(z,aL,'class',11,e,s,gg)
var tM=_oz(z,12,e,s,gg)
_(aL,tM)
cs.pop()
_(cI,aL)
cs.push("./pages/component/view/index.vue.wxml:view:1:394")
var eN=_n('view')
_rz(z,eN,'class',13,e,s,gg)
var bO=_oz(z,14,e,s,gg)
_(eN,bO)
cs.pop()
_(cI,eN)
cs.pop()
_(oB,cI)
cs.push("./pages/component/view/index.vue.wxml:view:1:453")
var oP=_n('view')
_rz(z,oP,'class',15,e,s,gg)
var xQ=_oz(z,16,e,s,gg)
_(oP,xQ)
cs.push("./pages/component/view/index.vue.wxml:text:1:509")
var oR=_n('text')
_rz(z,oR,'class',17,e,s,gg)
var fS=_oz(z,18,e,s,gg)
_(oR,fS)
cs.pop()
_(oP,oR)
cs.pop()
_(oB,oP)
cs.push("./pages/component/view/index.vue.wxml:view:1:567")
var cT=_n('view')
_rz(z,cT,'class',19,e,s,gg)
cs.push("./pages/component/view/index.vue.wxml:view:1:618")
var hU=_n('view')
_rz(z,hU,'class',20,e,s,gg)
var oV=_oz(z,21,e,s,gg)
_(hU,oV)
cs.pop()
_(cT,hU)
cs.push("./pages/component/view/index.vue.wxml:view:1:669")
var cW=_n('view')
_rz(z,cW,'class',22,e,s,gg)
var oX=_oz(z,23,e,s,gg)
_(cW,oX)
cs.pop()
_(cT,cW)
cs.push("./pages/component/view/index.vue.wxml:view:1:726")
var lY=_n('view')
_rz(z,lY,'class',24,e,s,gg)
var aZ=_oz(z,25,e,s,gg)
_(lY,aZ)
cs.pop()
_(cT,lY)
cs.pop()
_(oB,cT)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
return r
}
e_[x[36]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[37]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
var lWC=e_[x[37]].i
_ai(lWC,x[3],e_,x[37],1,1)
var aXC=_v()
_(r,aXC)
cs.push("./pages/component/view/index.wxml:template:2:6")
var tYC=_oz(z,1,e,s,gg)
var eZC=_gd(x[37],tYC,e_,d_)
if(eZC){
var b1C=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aXC.wxXCkey=3
eZC(b1C,b1C,aXC,gg)
gg.f=cur_globalf
}
else _w(tYC,x[37],2,18)
cs.pop()
lWC.pop()
return r
}
e_[x[37]]={f:m28,j:[],i:[],ti:[x[3]],ic:[]}
d_[x[38]]={}
d_[x[38]]["220a2223"]=function(e,s,r,gg){
var z=gz$gwx_30()
var b=x[38]+':220a2223'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/index.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[38]);return}
p_[b]=true
try{
cs.push("./pages/index/index.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/index/index.vue.wxml:image:1:64")
var xC=_mz(z,'image',['class',2,'src',1],[],e,s,gg)
cs.pop()
_(oB,xC)
cs.push("./pages/index/index.vue.wxml:view:1:187")
var oD=_n('view')
_rz(z,oD,'class',4,e,s,gg)
cs.push("./pages/index/index.vue.wxml:text:1:216")
var fE=_n('text')
_rz(z,fE,'class',5,e,s,gg)
var cF=_oz(z,6,e,s,gg)
_(fE,cF)
cs.pop()
_(oD,fE)
cs.pop()
_(oB,oD)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
return r
}
e_[x[38]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[39]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
var o4C=e_[x[39]].i
_ai(o4C,x[3],e_,x[39],1,1)
var f5C=_v()
_(r,f5C)
cs.push("./pages/index/index.wxml:template:2:6")
var c6C=_oz(z,1,e,s,gg)
var h7C=_gd(x[39],c6C,e_,d_)
if(h7C){
var o8C=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
f5C.wxXCkey=3
h7C(o8C,o8C,f5C,gg)
gg.f=cur_globalf
}
else _w(c6C,x[39],2,18)
cs.pop()
o4C.pop()
return r
}
e_[x[39]]={f:m30,j:[],i:[],ti:[x[3]],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
cs=[]
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(cs, env);
console.log(err)
throw err
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],[".",[1],"d_flex { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"d_center { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"d_between_center { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"d_column { -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"red { background-color: red; }\n.",[1],"blue { background-color: blue; }\n.",[1],"green { background-color: green; }\n.",[1],"mt_20 { margin-top: ",[0,40],"; }\n.",[1],"mt_10 { margin-top: ",[0,20],"; }\n.",[1],"p_l_r_30 { padding: 0 ",[0,60],"; }\n.",[1],"fw_700 { font-weight: 700; }\n.",[1],"ff_Medium { font-family: PingFangSC-Medium; }\n.",[1],"bb_eeeeee { border-bottom: ",[0,1]," #eeeeee solid; }\n.",[1],"b_1_E5E5E5_solid { border: 1px #e5e5e5 solid; }\n.",[1],"b_1_FF3D33_solid { border: 1px solid #FF3D33; }\n.",[1],"overflow { overflow: hidden; white-space: nowrap; -o-text-overflow: ellipsis; text-overflow: ellipsis; }\n.",[1],"overflow_scroll { text-align: center; display: -webkit-box; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; word-break: break-all; -webkit-box-orient: vertical; -webkit-line-clamp: 2; }\n.",[1],"paneltitle { height: ",[0,80],"; border-bottom: ",[0,1]," #eeeeee solid; }\n",],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

;var __pageFrameEndTime__ = Date.now();
if(!window.__uniAppViewReady__){
	window.__uniAppViewReady__ = true;
	document.dispatchEvent(new CustomEvent('uniAppViewReady'));
}

