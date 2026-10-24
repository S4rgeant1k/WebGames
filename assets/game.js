var Uh="170",Ds={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ls={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vp=0,Hu=1,yp=2;var nf=1,Nh=2,Ci=3,rs=0,Tn=1,Pi=2,is=0,hr=1,Vu=2,Gu=3,Wu=4,bp=5,Es=100,Mp=101,Sp=102,Ep=103,Tp=104,wp=200,Ap=201,Rp=202,Cp=203,cl=204,ll=205,Pp=206,Ip=207,Dp=208,Lp=209,Up=210,Np=211,Op=212,Fp=213,kp=214,hl=0,ul=1,dl=2,mr=3,fl=4,pl=5,ml=6,gl=7,sf=0,Bp=1,zp=2,ss=0,Hp=1,Vp=2,Gp=3,Oh=4,Wp=5,Xp=6,$p=7;var rf=300,gr=301,xr=302,xl=303,_l=304,tc=306,lo=1e3,ws=1001,vl=1002,kn=1003,qp=1004;var zo=1005;var di=1006,Ac=1007;var As=1008;var Li=1009,of=1010,af=1011,ho=1012,Fh=1013,Rs=1014,fi=1015,vo=1016,kh=1017,Bh=1018,_r=1020,cf=35902,lf=1021,hf=1022,Qn=1023,uf=1024,df=1025,ur=1026,vr=1027,zh=1028,Hh=1029,ff=1030,Vh=1031;var Gh=1033,_a=33776,va=33777,ya=33778,ba=33779,yl=35840,bl=35841,Ml=35842,Sl=35843,El=36196,Tl=37492,wl=37496,Al=37808,Rl=37809,Cl=37810,Pl=37811,Il=37812,Dl=37813,Ll=37814,Ul=37815,Nl=37816,Ol=37817,Fl=37818,kl=37819,Bl=37820,zl=37821,Ma=36492,Hl=36494,Vl=36495,pf=36283,Gl=36284,Wl=36285,Xl=36286;var Sa=2300,$l=2301,Rc=2302,Xu=2400,$u=2401,qu=2402;var Yp=3200,Zp=3201;var mf=0,jp=1,es="",Je="srgb",Rr="srgb-linear",ec="linear",Ce="srgb";var qs=7680;var Yu=519,Kp=512,Jp=513,Qp=514,gf=515,t0=516,e0=517,n0=518,i0=519,Zu=35044;var ju="300 es",Ii=2e3,Ea=2001,Ui=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ku=1234567,dr=Math.PI/180,yr=180/Math.PI;function Cr(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]+"-"+Sn[t&255]+Sn[t>>8&255]+"-"+Sn[t>>16&15|64]+Sn[t>>24&255]+"-"+Sn[e&63|128]+Sn[e>>8&255]+"-"+Sn[e>>16&255]+Sn[e>>24&255]+Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]).toLowerCase()}function mn(n,t,e){return Math.max(t,Math.min(e,n))}function Wh(n,t){return(n%t+t)%t}function s0(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function r0(n,t,e){return n!==t?(e-n)/(t-n):0}function ro(n,t,e){return(1-e)*n+e*t}function o0(n,t,e,i){return ro(n,t,1-Math.exp(-e*i))}function a0(n,t=1){return t-Math.abs(Wh(n,t*2)-t)}function c0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function l0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function h0(n,t){return n+Math.floor(Math.random()*(t-n+1))}function u0(n,t){return n+Math.random()*(t-n)}function d0(n){return n*(.5-Math.random())}function f0(n){n!==void 0&&(Ku=n);let t=Ku+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function p0(n){return n*dr}function m0(n){return n*yr}function g0(n){return(n&n-1)===0&&n!==0}function x0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function _0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function v0(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),d=o((t-i)/2),p=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,c*u,c*d,a*l);break;case"YZY":n.set(c*d,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*d,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*p,a*l);break;case"YXY":n.set(c*p,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function cr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Rn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var zn={DEG2RAD:dr,RAD2DEG:yr,generateUUID:Cr,clamp:mn,euclideanModulo:Wh,mapLinear:s0,inverseLerp:r0,lerp:ro,damp:o0,pingpong:a0,smoothstep:c0,smootherstep:l0,randInt:h0,randFloat:u0,randFloatSpread:d0,seededRandom:f0,degToRad:p0,radToDeg:m0,isPowerOfTwo:g0,ceilPowerOfTwo:x0,floorPowerOfTwo:_0,setQuaternionFromProperEuler:v0,normalize:Rn,denormalize:cr},Mt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(mn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Jt=class n{constructor(t,e,i,s,r,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],x=s[0],m=s[3],f=s[6],M=s[1],v=s[4],_=s[7],I=s[2],w=s[5],C=s[8];return r[0]=o*x+a*M+c*I,r[3]=o*m+a*v+c*w,r[6]=o*f+a*_+c*C,r[1]=l*x+h*M+u*I,r[4]=l*m+h*v+u*w,r[7]=l*f+h*_+u*C,r[2]=d*x+p*M+g*I,r[5]=d*m+p*v+g*w,r[8]=d*f+p*_+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,g=e*u+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*l-h*i)*x,t[2]=(a*i-s*o)*x,t[3]=d*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=p*x,t[7]=(i*c-l*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Cc.makeScale(t,e)),this}rotate(t){return this.premultiply(Cc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Cc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Cc=new Jt;function xf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ta(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function y0(){let n=Ta("canvas");return n.style.display="block",n}var Ju={};function io(n){n in Ju||(Ju[n]=!0,console.warn(n))}function b0(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function M0(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function S0(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var xe={enabled:!0,workingColorSpace:Rr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Ce&&(n.r=Di(n.r),n.g=Di(n.g),n.b=Di(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Ce&&(n.r=fr(n.r),n.g=fr(n.g),n.b=fr(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===es?ec:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Di(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function fr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Qu=[.64,.33,.3,.6,.15,.06],td=[.2126,.7152,.0722],ed=[.3127,.329],nd=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),id=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);xe.define({[Rr]:{primaries:Qu,whitePoint:ed,transfer:ec,toXYZ:nd,fromXYZ:id,luminanceCoefficients:td,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:Qu,whitePoint:ed,transfer:Ce,toXYZ:nd,fromXYZ:id,luminanceCoefficients:td,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}});var Ys,ql=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ys===void 0&&(Ys=Ta("canvas")),Ys.width=t.width,Ys.height=t.height;let i=Ys.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ys}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ta("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Di(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Di(e[i]/255)*255):e[i]=Di(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},E0=0,wa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=Cr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Pc(s[o].image)):r.push(Pc(s[o]))}else r=Pc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Pc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ql.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var T0=0,Dn=class n extends Ui{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=ws,s=ws,r=di,o=As,a=Qn,c=Li,l=n.DEFAULT_ANISOTROPY,h=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=Cr(),this.name="",this.source=new wa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case lo:t.x=t.x-Math.floor(t.x);break;case ws:t.x=t.x<0?0:1;break;case vl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case lo:t.y=t.y-Math.floor(t.y);break;case ws:t.y=t.y<0?0:1;break;case vl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=rf;Dn.DEFAULT_ANISOTROPY=1;var Pe=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],x=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(l+1)/2,_=(p+1)/2,I=(f+1)/2,w=(h+d)/4,C=(u+x)/4,P=(g+m)/4;return v>_&&v>I?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=w/i,r=C/i):_>I?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=w/s,r=P/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=C/r,s=P/r),this.set(i,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-x)/M,this.z=(d-h)/M,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yl=class extends Ui{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Dn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new wa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ni=class extends Yl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Aa=class extends Dn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=kn,this.minFilter=kn,this.wrapR=ws,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Zl=class extends Dn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=kn,this.minFilter=kn,this.wrapR=ws,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ti=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(u!==x||c!==d||l!==p||h!==g){let m=1-a,f=c*d+l*p+h*g+u*x,M=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){let I=Math.sqrt(v),w=Math.atan2(I,f*M);m=Math.sin(m*w)/I,a=Math.sin(a*w)/I}let _=a*M;if(c=c*m+d*_,l=l*m+p*_,h=h*m+g*_,u=u*m+x*_,m===1-a){let I=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=I,l*=I,h*=I,u*=I}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*p-l*d,t[e+1]=c*g+h*d+l*u-a*p,t[e+2]=l*g+h*p+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),d=c(i/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>u){let p=2*Math.sqrt(1+i-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-i-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(mn(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(sd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(sd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ic.copy(this).projectOnVector(t),this.sub(Ic)}reflect(t){return this.sub(Ic.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(mn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ic=new T,sd=new ti,Wn=class{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Zn):Zn.fromBufferAttribute(r,o),Zn.applyMatrix4(t.matrixWorld),this.expandByPoint(Zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ho.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ho.copy(i.boundingBox)),Ho.applyMatrix4(t.matrixWorld),this.union(Ho)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Zn),Zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zr),Vo.subVectors(this.max,Zr),Zs.subVectors(t.a,Zr),js.subVectors(t.b,Zr),Ks.subVectors(t.c,Zr),Zi.subVectors(js,Zs),ji.subVectors(Ks,js),xs.subVectors(Zs,Ks);let e=[0,-Zi.z,Zi.y,0,-ji.z,ji.y,0,-xs.z,xs.y,Zi.z,0,-Zi.x,ji.z,0,-ji.x,xs.z,0,-xs.x,-Zi.y,Zi.x,0,-ji.y,ji.x,0,-xs.y,xs.x,0];return!Dc(e,Zs,js,Ks,Vo)||(e=[1,0,0,0,1,0,0,0,1],!Dc(e,Zs,js,Ks,Vo))?!1:(Go.crossVectors(Zi,ji),e=[Go.x,Go.y,Go.z],Dc(e,Zs,js,Ks,Vo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ei=[new T,new T,new T,new T,new T,new T,new T,new T],Zn=new T,Ho=new Wn,Zs=new T,js=new T,Ks=new T,Zi=new T,ji=new T,xs=new T,Zr=new T,Vo=new T,Go=new T,_s=new T;function Dc(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){_s.fromArray(n,r);let a=s.x*Math.abs(_s.x)+s.y*Math.abs(_s.y)+s.z*Math.abs(_s.z),c=t.dot(_s),l=e.dot(_s),h=i.dot(_s);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var w0=new Wn,jr=new T,Lc=new T,Oi=class{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):w0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;jr.subVectors(t,this.center);let e=jr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(jr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(jr.copy(t.center).add(Lc)),this.expandByPoint(jr.copy(t.center).sub(Lc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ti=new T,Uc=new T,Wo=new T,Ki=new T,Nc=new T,Xo=new T,Oc=new T,os=class{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ti.copy(this.origin).addScaledVector(this.direction,e),Ti.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Uc.copy(t).add(e).multiplyScalar(.5),Wo.copy(e).sub(t).normalize(),Ki.copy(this.origin).sub(Uc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Wo),a=Ki.dot(this.direction),c=-Ki.dot(Wo),l=Ki.lengthSq(),h=Math.abs(1-o*o),u,d,p,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Uc).addScaledVector(Wo,d),p}intersectSphere(t,e){Ti.subVectors(t.center,this.origin);let i=Ti.dot(this.direction),s=Ti.dot(Ti)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ti)!==null}intersectTriangle(t,e,i,s,r){Nc.subVectors(e,t),Xo.subVectors(i,t),Oc.crossVectors(Nc,Xo);let o=this.direction.dot(Oc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ki.subVectors(this.origin,t);let c=a*this.direction.dot(Xo.crossVectors(Ki,Xo));if(c<0)return null;let l=a*this.direction.dot(Nc.cross(Ki));if(l<0||c+l>o)return null;let h=-a*Ki.dot(Oc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ye=class n{constructor(t,e,i,s,r,o,a,c,l,h,u,d,p,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,h,u,d,p,g,x,m)}set(t,e,i,s,r,o,a,c,l,h,u,d,p,g,x,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Js.setFromMatrixColumn(t,0).length(),r=1/Js.setFromMatrixColumn(t,1).length(),o=1/Js.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,p=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,p=c*u,g=l*h,x=l*u;e[0]=d+x*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,p=c*u,g=l*h,x=l*u;e[0]=d-x*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,p=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=g*l-p,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,p=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*c,p=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(A0,t,R0)}lookAt(t,e,i){let s=this.elements;return On.subVectors(t,e),On.lengthSq()===0&&(On.z=1),On.normalize(),Ji.crossVectors(i,On),Ji.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),Ji.crossVectors(i,On)),Ji.normalize(),$o.crossVectors(On,Ji),s[0]=Ji.x,s[4]=$o.x,s[8]=On.x,s[1]=Ji.y,s[5]=$o.y,s[9]=On.y,s[2]=Ji.z,s[6]=$o.z,s[10]=On.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],x=i[6],m=i[10],f=i[14],M=i[3],v=i[7],_=i[11],I=i[15],w=s[0],C=s[4],P=s[8],S=s[12],y=s[1],A=s[5],k=s[9],z=s[13],X=s[2],st=s[6],q=s[10],at=s[14],$=s[3],xt=s[7],gt=s[11],At=s[15];return r[0]=o*w+a*y+c*X+l*$,r[4]=o*C+a*A+c*st+l*xt,r[8]=o*P+a*k+c*q+l*gt,r[12]=o*S+a*z+c*at+l*At,r[1]=h*w+u*y+d*X+p*$,r[5]=h*C+u*A+d*st+p*xt,r[9]=h*P+u*k+d*q+p*gt,r[13]=h*S+u*z+d*at+p*At,r[2]=g*w+x*y+m*X+f*$,r[6]=g*C+x*A+m*st+f*xt,r[10]=g*P+x*k+m*q+f*gt,r[14]=g*S+x*z+m*at+f*At,r[3]=M*w+v*y+_*X+I*$,r[7]=M*C+v*A+_*st+I*xt,r[11]=M*P+v*k+_*q+I*gt,r[15]=M*S+v*z+_*at+I*At,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15];return g*(+r*c*u-s*l*u-r*a*d+i*l*d+s*a*p-i*c*p)+x*(+e*c*p-e*l*d+r*o*d-s*o*p+s*l*h-r*c*h)+m*(+e*l*u-e*a*p-r*o*u+i*o*p+r*a*h-i*l*h)+f*(-s*a*h-e*c*u+e*a*d+s*o*u-i*o*d+i*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],M=u*m*l-x*d*l+x*c*p-a*m*p-u*c*f+a*d*f,v=g*d*l-h*m*l-g*c*p+o*m*p+h*c*f-o*d*f,_=h*x*l-g*u*l+g*a*p-o*x*p-h*a*f+o*u*f,I=g*u*c-h*x*c-g*a*d+o*x*d+h*a*m-o*u*m,w=e*M+i*v+s*_+r*I;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/w;return t[0]=M*C,t[1]=(x*d*r-u*m*r-x*s*p+i*m*p+u*s*f-i*d*f)*C,t[2]=(a*m*r-x*c*r+x*s*l-i*m*l-a*s*f+i*c*f)*C,t[3]=(u*c*r-a*d*r-u*s*l+i*d*l+a*s*p-i*c*p)*C,t[4]=v*C,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*C,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*f-e*c*f)*C,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*p+e*c*p)*C,t[8]=_*C,t[9]=(g*u*r-h*x*r-g*i*p+e*x*p+h*i*f-e*u*f)*C,t[10]=(o*x*r-g*a*r+g*i*l-e*x*l-o*i*f+e*a*f)*C,t[11]=(h*a*r-o*u*r-h*i*l+e*u*l+o*i*p-e*a*p)*C,t[12]=I*C,t[13]=(h*x*s-g*u*s+g*i*d-e*x*d-h*i*m+e*u*m)*C,t[14]=(g*a*s-o*x*s-g*i*c+e*x*c+o*i*m-e*a*m)*C,t[15]=(o*u*s-h*a*s+h*i*c-e*u*c-o*i*d+e*a*d)*C,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,g=r*u,x=o*h,m=o*u,f=a*u,M=c*l,v=c*h,_=c*u,I=i.x,w=i.y,C=i.z;return s[0]=(1-(x+f))*I,s[1]=(p+_)*I,s[2]=(g-v)*I,s[3]=0,s[4]=(p-_)*w,s[5]=(1-(d+f))*w,s[6]=(m+M)*w,s[7]=0,s[8]=(g+v)*C,s[9]=(m-M)*C,s[10]=(1-(d+x))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Js.set(s[0],s[1],s[2]).length(),o=Js.set(s[4],s[5],s[6]).length(),a=Js.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],jn.copy(this);let l=1/r,h=1/o,u=1/a;return jn.elements[0]*=l,jn.elements[1]*=l,jn.elements[2]*=l,jn.elements[4]*=h,jn.elements[5]*=h,jn.elements[6]*=h,jn.elements[8]*=u,jn.elements[9]*=u,jn.elements[10]*=u,e.setFromRotationMatrix(jn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Ii){let c=this.elements,l=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s),p,g;if(a===Ii)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ea)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Ii){let c=this.elements,l=1/(e-t),h=1/(i-s),u=1/(o-r),d=(e+t)*l,p=(i+s)*h,g,x;if(a===Ii)g=(o+r)*u,x=-2*u;else if(a===Ea)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Js=new T,jn=new ye,A0=new T(0,0,0),R0=new T(1,1,1),Ji=new T,$o=new T,On=new T,rd=new ye,od=new ti,pi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-mn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(mn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-mn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(mn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return rd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return od.setFromEuler(this),this.setFromQuaternion(od,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pi.DEFAULT_ORDER="XYZ";var uo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},C0=0,ad=new T,Qs=new ti,wi=new ye,qo=new T,Kr=new T,P0=new T,I0=new ti,cd=new T(1,0,0),ld=new T(0,1,0),hd=new T(0,0,1),ud={type:"added"},D0={type:"removed"},tr={type:"childadded",child:null},Fc={type:"childremoved",child:null},Qe=class n extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=Cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new T,e=new pi,i=new ti,s=new T(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ye},normalMatrix:{value:new Jt}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qs.setFromAxisAngle(t,e),this.quaternion.multiply(Qs),this}rotateOnWorldAxis(t,e){return Qs.setFromAxisAngle(t,e),this.quaternion.premultiply(Qs),this}rotateX(t){return this.rotateOnAxis(cd,t)}rotateY(t){return this.rotateOnAxis(ld,t)}rotateZ(t){return this.rotateOnAxis(hd,t)}translateOnAxis(t,e){return ad.copy(t).applyQuaternion(this.quaternion),this.position.add(ad.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cd,t)}translateY(t){return this.translateOnAxis(ld,t)}translateZ(t){return this.translateOnAxis(hd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?qo.copy(t):qo.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(Kr,qo,this.up):wi.lookAt(qo,Kr,this.up),this.quaternion.setFromRotationMatrix(wi),s&&(wi.extractRotation(s.matrixWorld),Qs.setFromRotationMatrix(wi),this.quaternion.premultiply(Qs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ud),tr.child=t,this.dispatchEvent(tr),tr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(D0),Fc.child=t,this.dispatchEvent(Fc),Fc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wi.multiply(t.parent.matrixWorld)),t.applyMatrix4(wi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ud),tr.child=t,this.dispatchEvent(tr),tr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,t,P0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,I0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Qe.DEFAULT_UP=new T(0,1,0);Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Kn=new T,Ai=new T,kc=new T,Ri=new T,er=new T,nr=new T,dd=new T,Bc=new T,zc=new T,Hc=new T,Vc=new Pe,Gc=new Pe,Wc=new Pe,ns=class n{constructor(t=new T,e=new T,i=new T){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Kn.subVectors(t,e),s.cross(Kn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Kn.subVectors(s,e),Ai.subVectors(i,e),kc.subVectors(t,e);let o=Kn.dot(Kn),a=Kn.dot(Ai),c=Kn.dot(kc),l=Ai.dot(Ai),h=Ai.dot(kc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,Ri)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ri.x),c.addScaledVector(o,Ri.y),c.addScaledVector(a,Ri.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return Vc.setScalar(0),Gc.setScalar(0),Wc.setScalar(0),Vc.fromBufferAttribute(t,e),Gc.fromBufferAttribute(t,i),Wc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Vc,r.x),o.addScaledVector(Gc,r.y),o.addScaledVector(Wc,r.z),o}static isFrontFacing(t,e,i,s){return Kn.subVectors(i,e),Ai.subVectors(t,e),Kn.cross(Ai).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Kn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),Kn.cross(Ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;er.subVectors(s,i),nr.subVectors(r,i),Bc.subVectors(t,i);let c=er.dot(Bc),l=nr.dot(Bc);if(c<=0&&l<=0)return e.copy(i);zc.subVectors(t,s);let h=er.dot(zc),u=nr.dot(zc);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(i).addScaledVector(er,o);Hc.subVectors(t,r);let p=er.dot(Hc),g=nr.dot(Hc);if(g>=0&&p<=g)return e.copy(r);let x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(nr,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return dd.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(dd,a);let f=1/(m+x+d);return o=x*f,a=d*f,e.copy(i).addScaledVector(er,o).addScaledVector(nr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},_f={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},Yo={h:0,s:0,l:0};function Xc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var ee=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=xe.workingColorSpace){return this.r=t,this.g=e,this.b=i,xe.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=xe.workingColorSpace){if(t=Wh(t,1),e=mn(e,0,1),i=mn(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Xc(o,r,t+1/3),this.g=Xc(o,r,t),this.b=Xc(o,r,t-1/3)}return xe.toWorkingColorSpace(this,s),this}setStyle(t,e=Je){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){let i=_f[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Di(t.r),this.g=Di(t.g),this.b=Di(t.b),this}copyLinearToSRGB(t){return this.r=fr(t.r),this.g=fr(t.g),this.b=fr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return xe.fromWorkingColorSpace(En.copy(this),t),Math.round(mn(En.r*255,0,255))*65536+Math.round(mn(En.g*255,0,255))*256+Math.round(mn(En.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.fromWorkingColorSpace(En.copy(this),e);let i=En.r,s=En.g,r=En.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=xe.workingColorSpace){return xe.fromWorkingColorSpace(En.copy(this),e),t.r=En.r,t.g=En.g,t.b=En.b,t}getStyle(t=Je){xe.fromWorkingColorSpace(En.copy(this),t);let e=En.r,i=En.g,s=En.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Qi),this.setHSL(Qi.h+t,Qi.s+e,Qi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Qi),t.getHSL(Yo);let i=ro(Qi.h,Yo.h,e),s=ro(Qi.s,Yo.s,e),r=ro(Qi.l,Yo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},En=new ee;ee.NAMES=_f;var L0=0,Fi=class extends Ui{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=Cr(),this.name="",this.blending=hr,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cl,this.blendDst=ll,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hr&&(i.blending=this.blending),this.side!==rs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cl&&(i.blendSrc=this.blendSrc),this.blendDst!==ll&&(i.blendDst=this.blendDst),this.blendEquation!==Es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==mr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ke=class extends Fi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=sf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var tn=new T,Zo=new Mt,vn=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Zu,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Zo.fromBufferAttribute(this,e),Zo.applyMatrix3(t),this.setXY(e,Zo.x,Zo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix3(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=cr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Rn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=cr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Rn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=cr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Rn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=cr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Rn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=cr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Rn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Rn(e,this.array),i=Rn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Rn(e,this.array),i=Rn(i,this.array),s=Rn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Rn(e,this.array),i=Rn(i,this.array),s=Rn(s,this.array),r=Rn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zu&&(t.usage=this.usage),t}};var Ra=class extends vn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Ca=class extends vn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Ue=class extends vn{constructor(t,e,i){super(new Float32Array(t),e,i)}},U0=0,Gn=new ye,$c=new Qe,ir=new T,Fn=new Wn,Jr=new Wn,pn=new T,gn=class n extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=Cr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xf(t)?Ca:Ra)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Gn.makeRotationFromQuaternion(t),this.applyMatrix4(Gn),this}rotateX(t){return Gn.makeRotationX(t),this.applyMatrix4(Gn),this}rotateY(t){return Gn.makeRotationY(t),this.applyMatrix4(Gn),this}rotateZ(t){return Gn.makeRotationZ(t),this.applyMatrix4(Gn),this}translate(t,e,i){return Gn.makeTranslation(t,e,i),this.applyMatrix4(Gn),this}scale(t,e,i){return Gn.makeScale(t,e,i),this.applyMatrix4(Gn),this}lookAt(t){return $c.lookAt(t),$c.updateMatrix(),this.applyMatrix4($c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ue(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){let i=this.boundingSphere.center;if(Fn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Jr.setFromBufferAttribute(a),this.morphTargetsRelative?(pn.addVectors(Fn.min,Jr.min),Fn.expandByPoint(pn),pn.addVectors(Fn.max,Jr.max),Fn.expandByPoint(pn)):(Fn.expandByPoint(Jr.min),Fn.expandByPoint(Jr.max))}Fn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)pn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(pn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)pn.fromBufferAttribute(a,l),c&&(ir.fromBufferAttribute(t,l),pn.add(ir)),s=Math.max(s,i.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<i.count;P++)a[P]=new T,c[P]=new T;let l=new T,h=new T,u=new T,d=new Mt,p=new Mt,g=new Mt,x=new T,m=new T;function f(P,S,y){l.fromBufferAttribute(i,P),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,y),d.fromBufferAttribute(r,P),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),h.sub(l),u.sub(l),p.sub(d),g.sub(d);let A=1/(p.x*g.y-g.x*p.y);isFinite(A)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(A),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(A),a[P].add(x),a[S].add(x),a[y].add(x),c[P].add(m),c[S].add(m),c[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let P=0,S=M.length;P<S;++P){let y=M[P],A=y.start,k=y.count;for(let z=A,X=A+k;z<X;z+=3)f(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let v=new T,_=new T,I=new T,w=new T;function C(P){I.fromBufferAttribute(s,P),w.copy(I);let S=a[P];v.copy(S),v.sub(I.multiplyScalar(I.dot(S))).normalize(),_.crossVectors(w,S);let A=_.dot(c[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,A)}for(let P=0,S=M.length;P<S;++P){let y=M[P],A=y.start,k=y.count;for(let z=A,X=A+k;z<X;z+=3)C(t.getX(z+0)),C(t.getX(z+1)),C(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let s=new T,r=new T,o=new T,a=new T,c=new T,l=new T,h=new T,u=new T;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)pn.fromBufferAttribute(t,e),pn.normalize(),t.setXYZ(e,pn.x,pn.y,pn.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),p=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new vn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,i);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=t(d,i);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},fd=new ye,vs=new os,jo=new Oi,pd=new T,Ko=new T,Jo=new T,Qo=new T,qc=new T,ta=new T,md=new T,ea=new T,$t=class extends Qe{constructor(t=new gn,e=new ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ta.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(qc.fromBufferAttribute(u,t),o?ta.addScaledVector(qc,h):ta.addScaledVector(qc.sub(e),h))}e.add(ta)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),jo.copy(i.boundingSphere),jo.applyMatrix4(r),vs.copy(t.ray).recast(t.near),!(jo.containsPoint(vs.origin)===!1&&(vs.intersectSphere(jo,pd)===null||vs.origin.distanceToSquared(pd)>(t.far-t.near)**2))&&(fd.copy(r).invert(),vs.copy(t.ray).applyMatrix4(fd),!(i.boundingBox!==null&&vs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,vs)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=M,I=v;_<I;_+=3){let w=a.getX(_),C=a.getX(_+1),P=a.getX(_+2);s=na(this,f,t,i,l,h,u,w,C,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let M=a.getX(m),v=a.getX(m+1),_=a.getX(m+2);s=na(this,o,t,i,l,h,u,M,v,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),v=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let _=M,I=v;_<I;_+=3){let w=_,C=_+1,P=_+2;s=na(this,f,t,i,l,h,u,w,C,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let M=m,v=m+1,_=m+2;s=na(this,o,t,i,l,h,u,M,v,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function N0(n,t,e,i,s,r,o,a){let c;if(t.side===Tn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===rs,a),c===null)return null;ea.copy(a),ea.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(ea);return l<e.near||l>e.far?null:{distance:l,point:ea.clone(),object:n}}function na(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,Ko),n.getVertexPosition(c,Jo),n.getVertexPosition(l,Qo);let h=N0(n,t,e,i,Ko,Jo,Qo,md);if(h){let u=new T;ns.getBarycoord(md,Ko,Jo,Qo,u),s&&(h.uv=ns.getInterpolatedAttribute(s,a,c,l,u,new Mt)),r&&(h.uv1=ns.getInterpolatedAttribute(r,a,c,l,u,new Mt)),o&&(h.normal=ns.getInterpolatedAttribute(o,a,c,l,u,new T),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new T,materialIndex:0};ns.getNormal(Ko,Jo,Qo,d.normal),h.face=d,h.barycoord=u}return h}var yn=class n extends gn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Ue(l,3)),this.setAttribute("normal",new Ue(h,3)),this.setAttribute("uv",new Ue(u,2));function g(x,m,f,M,v,_,I,w,C,P,S){let y=_/C,A=I/P,k=_/2,z=I/2,X=w/2,st=C+1,q=P+1,at=0,$=0,xt=new T;for(let gt=0;gt<q;gt++){let At=gt*A-z;for(let Yt=0;Yt<st;Yt++){let ve=Yt*y-k;xt[x]=ve*M,xt[m]=At*v,xt[f]=X,l.push(xt.x,xt.y,xt.z),xt[x]=0,xt[m]=0,xt[f]=w>0?1:-1,h.push(xt.x,xt.y,xt.z),u.push(Yt/C),u.push(1-gt/P),at+=1}}for(let gt=0;gt<P;gt++)for(let At=0;At<C;At++){let Yt=d+At+st*gt,ve=d+At+st*(gt+1),K=d+(At+1)+st*(gt+1),lt=d+(At+1)+st*gt;c.push(Yt,ve,lt),c.push(ve,K,lt),$+=6}a.addGroup(p,$,S),p+=$,d+=at}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function br(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Cn(n){let t={};for(let e=0;e<n.length;e++){let i=br(n[e]);for(let s in i)t[s]=i[s]}return t}function O0(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function vf(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}var F0={clone:br,merge:Cn},k0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,B0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mi=class extends Fi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=k0,this.fragmentShader=B0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=br(t.uniforms),this.uniformsGroups=O0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Pa=class extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=Ii}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ts=new T,gd=new Mt,xd=new Mt,_n=class extends Pa{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=yr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(dr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return yr*2*Math.atan(Math.tan(dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ts.x,ts.y).multiplyScalar(-t/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ts.x,ts.y).multiplyScalar(-t/ts.z)}getViewSize(t,e){return this.getViewBounds(t,gd,xd),e.subVectors(xd,gd)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(dr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},sr=-90,rr=1,jl=class extends Qe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new _n(sr,rr,t,e);s.layers=this.layers,this.add(s);let r=new _n(sr,rr,t,e);r.layers=this.layers,this.add(r);let o=new _n(sr,rr,t,e);o.layers=this.layers,this.add(o);let a=new _n(sr,rr,t,e);a.layers=this.layers,this.add(a);let c=new _n(sr,rr,t,e);c.layers=this.layers,this.add(c);let l=new _n(sr,rr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Ii)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ea)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ia=class extends Dn{constructor(t,e,i,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:gr,super(t,e,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Kl=class extends Ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ia(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:di}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new yn(5,5,5),r=new mi({name:"CubemapFromEquirect",uniforms:br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:is});r.uniforms.tEquirect.value=e;let o=new $t(s,r),a=e.minFilter;return e.minFilter===As&&(e.minFilter=di),new jl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Yc=new T,z0=new T,H0=new Jt,Jn=class{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Yc.subVectors(i,e).cross(z0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Yc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||H0.getNormalMatrix(t),s=this.coplanarPoint(Yc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ys=new Oi,ia=new T,fo=class{constructor(t=new Jn,e=new Jn,i=new Jn,s=new Jn,r=new Jn,o=new Jn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ii){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],x=s[10],m=s[11],f=s[12],M=s[13],v=s[14],_=s[15];if(i[0].setComponents(c-r,d-l,m-p,_-f).normalize(),i[1].setComponents(c+r,d+l,m+p,_+f).normalize(),i[2].setComponents(c+o,d+h,m+g,_+M).normalize(),i[3].setComponents(c-o,d-h,m-g,_-M).normalize(),i[4].setComponents(c-a,d-u,m-x,_-v).normalize(),e===Ii)i[5].setComponents(c+a,d+u,m+x,_+v).normalize();else if(e===Ea)i[5].setComponents(a,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(t){return ys.center.set(0,0,0),ys.radius=.7071067811865476,ys.applyMatrix4(t.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(ia.x=s.normal.x>0?t.max.x:t.min.x,ia.y=s.normal.y>0?t.max.y:t.min.y,ia.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ia)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function yf(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function V0(n){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let x=u[p];n.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var ki=class n extends gn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){let M=f*d-o;for(let v=0;v<l;v++){let _=v*u-r;g.push(_,-M,0),x.push(0,0,1),m.push(v/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let M=0;M<a;M++){let v=M+l*f,_=M+l*(f+1),I=M+1+l*(f+1),w=M+1+l*f;p.push(v,_,w),p.push(_,I,w)}this.setIndex(p),this.setAttribute("position",new Ue(g,3)),this.setAttribute("normal",new Ue(x,3)),this.setAttribute("uv",new Ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},G0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,W0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,X0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,q0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Y0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Z0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,j0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,K0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,J0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Q0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,em=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,im=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,um=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,dm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_m=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vm="gl_FragColor = linearToOutputTexel( gl_FragColor );",ym=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Mm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Em=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Am=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Im=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Um=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Nm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Om=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,km=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$m=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ym=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Km=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ng=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ig=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,og=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ag=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ug=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_g=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Eg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Tg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ag=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ig=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Dg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ug=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ng=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Og=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Kg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ex=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ix=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ox=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ax=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ux=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,px=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_x=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,te={alphahash_fragment:G0,alphahash_pars_fragment:W0,alphamap_fragment:X0,alphamap_pars_fragment:$0,alphatest_fragment:q0,alphatest_pars_fragment:Y0,aomap_fragment:Z0,aomap_pars_fragment:j0,batching_pars_vertex:K0,batching_vertex:J0,begin_vertex:Q0,beginnormal_vertex:tm,bsdfs:em,iridescence_fragment:nm,bumpmap_pars_fragment:im,clipping_planes_fragment:sm,clipping_planes_pars_fragment:rm,clipping_planes_pars_vertex:om,clipping_planes_vertex:am,color_fragment:cm,color_pars_fragment:lm,color_pars_vertex:hm,color_vertex:um,common:dm,cube_uv_reflection_fragment:fm,defaultnormal_vertex:pm,displacementmap_pars_vertex:mm,displacementmap_vertex:gm,emissivemap_fragment:xm,emissivemap_pars_fragment:_m,colorspace_fragment:vm,colorspace_pars_fragment:ym,envmap_fragment:bm,envmap_common_pars_fragment:Mm,envmap_pars_fragment:Sm,envmap_pars_vertex:Em,envmap_physical_pars_fragment:Nm,envmap_vertex:Tm,fog_vertex:wm,fog_pars_vertex:Am,fog_fragment:Rm,fog_pars_fragment:Cm,gradientmap_pars_fragment:Pm,lightmap_pars_fragment:Im,lights_lambert_fragment:Dm,lights_lambert_pars_fragment:Lm,lights_pars_begin:Um,lights_toon_fragment:Om,lights_toon_pars_fragment:Fm,lights_phong_fragment:km,lights_phong_pars_fragment:Bm,lights_physical_fragment:zm,lights_physical_pars_fragment:Hm,lights_fragment_begin:Vm,lights_fragment_maps:Gm,lights_fragment_end:Wm,logdepthbuf_fragment:Xm,logdepthbuf_pars_fragment:$m,logdepthbuf_pars_vertex:qm,logdepthbuf_vertex:Ym,map_fragment:Zm,map_pars_fragment:jm,map_particle_fragment:Km,map_particle_pars_fragment:Jm,metalnessmap_fragment:Qm,metalnessmap_pars_fragment:tg,morphinstance_vertex:eg,morphcolor_vertex:ng,morphnormal_vertex:ig,morphtarget_pars_vertex:sg,morphtarget_vertex:rg,normal_fragment_begin:og,normal_fragment_maps:ag,normal_pars_fragment:cg,normal_pars_vertex:lg,normal_vertex:hg,normalmap_pars_fragment:ug,clearcoat_normal_fragment_begin:dg,clearcoat_normal_fragment_maps:fg,clearcoat_pars_fragment:pg,iridescence_pars_fragment:mg,opaque_fragment:gg,packing:xg,premultiplied_alpha_fragment:_g,project_vertex:vg,dithering_fragment:yg,dithering_pars_fragment:bg,roughnessmap_fragment:Mg,roughnessmap_pars_fragment:Sg,shadowmap_pars_fragment:Eg,shadowmap_pars_vertex:Tg,shadowmap_vertex:wg,shadowmask_pars_fragment:Ag,skinbase_vertex:Rg,skinning_pars_vertex:Cg,skinning_vertex:Pg,skinnormal_vertex:Ig,specularmap_fragment:Dg,specularmap_pars_fragment:Lg,tonemapping_fragment:Ug,tonemapping_pars_fragment:Ng,transmission_fragment:Og,transmission_pars_fragment:Fg,uv_pars_fragment:kg,uv_pars_vertex:Bg,uv_vertex:zg,worldpos_vertex:Hg,background_vert:Vg,background_frag:Gg,backgroundCube_vert:Wg,backgroundCube_frag:Xg,cube_vert:$g,cube_frag:qg,depth_vert:Yg,depth_frag:Zg,distanceRGBA_vert:jg,distanceRGBA_frag:Kg,equirect_vert:Jg,equirect_frag:Qg,linedashed_vert:tx,linedashed_frag:ex,meshbasic_vert:nx,meshbasic_frag:ix,meshlambert_vert:sx,meshlambert_frag:rx,meshmatcap_vert:ox,meshmatcap_frag:ax,meshnormal_vert:cx,meshnormal_frag:lx,meshphong_vert:hx,meshphong_frag:ux,meshphysical_vert:dx,meshphysical_frag:fx,meshtoon_vert:px,meshtoon_frag:mx,points_vert:gx,points_frag:xx,shadow_vert:_x,shadow_frag:vx,sprite_vert:yx,sprite_frag:bx},mt={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},ui={basic:{uniforms:Cn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Cn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new ee(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Cn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Cn([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Cn([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new ee(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Cn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Cn([mt.points,mt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Cn([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Cn([mt.common,mt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Cn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Cn([mt.sprite,mt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:Cn([mt.common,mt.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:Cn([mt.lights,mt.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};ui.physical={uniforms:Cn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var sa={r:0,b:0,g:0},bs=new pi,Mx=new ye;function Sx(n,t,e,i,s,r,o){let a=new ee(0),c=r===!0?0:1,l,h,u=null,d=0,p=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function x(M){let v=!1,_=g(M);_===null?f(a,c):_&&_.isColor&&(f(_,1),v=!0);let I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(M,v){let _=g(v);_&&(_.isCubeTexture||_.mapping===tc)?(h===void 0&&(h=new $t(new yn(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:br(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),bs.copy(v.backgroundRotation),bs.x*=-1,bs.y*=-1,bs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Mx.makeRotationFromEuler(bs)),h.material.toneMapped=xe.getTransfer(_.colorSpace)!==Ce,(u!==_||d!==_.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,p=n.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new $t(new ki(2,2),new mi({name:"BackgroundMaterial",uniforms:br(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=xe.getTransfer(_.colorSpace)!==Ce,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,p=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function f(M,v){M.getRGB(sa,vf(n)),i.buffers.color.setClear(sa.r,sa.g,sa.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),c=v,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,f(a,c)},render:x,addToRenderList:m}}function Ex(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(y,A,k,z,X){let st=!1,q=u(z,k,A);r!==q&&(r=q,l(r.object)),st=p(y,z,k,X),st&&g(y,z,k,X),X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(st||o)&&(o=!1,_(y,A,k,z),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return n.createVertexArray()}function l(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function u(y,A,k){let z=k.wireframe===!0,X=i[y.id];X===void 0&&(X={},i[y.id]=X);let st=X[A.id];st===void 0&&(st={},X[A.id]=st);let q=st[z];return q===void 0&&(q=d(c()),st[z]=q),q}function d(y){let A=[],k=[],z=[];for(let X=0;X<e;X++)A[X]=0,k[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:k,attributeDivisors:z,object:y,attributes:{},index:null}}function p(y,A,k,z){let X=r.attributes,st=A.attributes,q=0,at=k.getAttributes();for(let $ in at)if(at[$].location>=0){let gt=X[$],At=st[$];if(At===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(At=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(At=y.instanceColor)),gt===void 0||gt.attribute!==At||At&&gt.data!==At.data)return!0;q++}return r.attributesNum!==q||r.index!==z}function g(y,A,k,z){let X={},st=A.attributes,q=0,at=k.getAttributes();for(let $ in at)if(at[$].location>=0){let gt=st[$];gt===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(gt=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(gt=y.instanceColor));let At={};At.attribute=gt,gt&&gt.data&&(At.data=gt.data),X[$]=At,q++}r.attributes=X,r.attributesNum=q,r.index=z}function x(){let y=r.newAttributes;for(let A=0,k=y.length;A<k;A++)y[A]=0}function m(y){f(y,0)}function f(y,A){let k=r.newAttributes,z=r.enabledAttributes,X=r.attributeDivisors;k[y]=1,z[y]===0&&(n.enableVertexAttribArray(y),z[y]=1),X[y]!==A&&(n.vertexAttribDivisor(y,A),X[y]=A)}function M(){let y=r.newAttributes,A=r.enabledAttributes;for(let k=0,z=A.length;k<z;k++)A[k]!==y[k]&&(n.disableVertexAttribArray(k),A[k]=0)}function v(y,A,k,z,X,st,q){q===!0?n.vertexAttribIPointer(y,A,k,X,st):n.vertexAttribPointer(y,A,k,z,X,st)}function _(y,A,k,z){x();let X=z.attributes,st=k.getAttributes(),q=A.defaultAttributeValues;for(let at in st){let $=st[at];if($.location>=0){let xt=X[at];if(xt===void 0&&(at==="instanceMatrix"&&y.instanceMatrix&&(xt=y.instanceMatrix),at==="instanceColor"&&y.instanceColor&&(xt=y.instanceColor)),xt!==void 0){let gt=xt.normalized,At=xt.itemSize,Yt=t.get(xt);if(Yt===void 0)continue;let ve=Yt.buffer,K=Yt.type,lt=Yt.bytesPerElement,Rt=K===n.INT||K===n.UNSIGNED_INT||xt.gpuType===Fh;if(xt.isInterleavedBufferAttribute){let pt=xt.data,Ft=pt.stride,Xt=xt.offset;if(pt.isInstancedInterleavedBuffer){for(let Zt=0;Zt<$.locationSize;Zt++)f($.location+Zt,pt.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Zt=0;Zt<$.locationSize;Zt++)m($.location+Zt);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let Zt=0;Zt<$.locationSize;Zt++)v($.location+Zt,At/$.locationSize,K,gt,Ft*lt,(Xt+At/$.locationSize*Zt)*lt,Rt)}else{if(xt.isInstancedBufferAttribute){for(let pt=0;pt<$.locationSize;pt++)f($.location+pt,xt.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let pt=0;pt<$.locationSize;pt++)m($.location+pt);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let pt=0;pt<$.locationSize;pt++)v($.location+pt,At/$.locationSize,K,gt,At*lt,At/$.locationSize*pt*lt,Rt)}}else if(q!==void 0){let gt=q[at];if(gt!==void 0)switch(gt.length){case 2:n.vertexAttrib2fv($.location,gt);break;case 3:n.vertexAttrib3fv($.location,gt);break;case 4:n.vertexAttrib4fv($.location,gt);break;default:n.vertexAttrib1fv($.location,gt)}}}}M()}function I(){P();for(let y in i){let A=i[y];for(let k in A){let z=A[k];for(let X in z)h(z[X].object),delete z[X];delete A[k]}delete i[y]}}function w(y){if(i[y.id]===void 0)return;let A=i[y.id];for(let k in A){let z=A[k];for(let X in z)h(z[X].object),delete z[X];delete A[k]}delete i[y.id]}function C(y){for(let A in i){let k=i[A];if(k[y.id]===void 0)continue;let z=k[y.id];for(let X in z)h(z[X].object),delete z[X];delete k[y.id]}}function P(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function Tx(n,t,e){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function o(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),e.update(h,i,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,i,1)}function c(l,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function wx(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Qn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let P=C===vo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Li&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==fi&&!P)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:I,maxSamples:w}}function Ax(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Jn,a=new Jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let M=r?0:i,v=M*4,_=f.clippingState||null;c.value=_,_=h(g,d,v,p);for(let I=0;I!==v;++I)_[I]=e[I];f.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,p,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let f=p+x*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,_=p;v!==x;++v,_+=4)o.copy(u[v]).applyMatrix4(M,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Rx(n){let t=new WeakMap;function e(o,a){return a===xl?o.mapping=gr:a===_l&&(o.mapping=xr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===xl||a===_l)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Kl(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Da=class extends Pa{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},lr=4,_d=[.125,.215,.35,.446,.526,.582],Ts=20,Zc=new Da,vd=new ee,jc=null,Kc=0,Jc=0,Qc=!1,Ss=(1+Math.sqrt(5))/2,or=1/Ss,yd=[new T(-Ss,or,0),new T(Ss,or,0),new T(-or,0,Ss),new T(or,0,Ss),new T(0,Ss,-or),new T(0,Ss,or),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],Mr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){jc=this._renderer.getRenderTarget(),Kc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),Qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Md(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(jc,Kc,Jc),this._renderer.xr.enabled=Qc,t.scissorTest=!1,ra(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gr||t.mapping===xr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jc=this._renderer.getRenderTarget(),Kc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),Qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:di,minFilter:di,generateMipmaps:!1,type:vo,format:Qn,colorSpace:Rr,depthBuffer:!1},s=bd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bd(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cx(r)),this._blurMaterial=Px(r,t,e)}return s}_compileMaterial(t){let e=new $t(this._lodPlanes[0],t);this._renderer.compile(e,Zc)}_sceneToCubeUV(t,e,i,s){let a=new _n(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(vd),h.toneMapping=ss,h.autoClear=!1;let p=new ke({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),g=new $t(new yn,p),x=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(vd),x=!0);for(let f=0;f<6;f++){let M=f%3;M===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):M===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));let v=this._cubeSize;ra(s,M*v,f>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===gr||t.mapping===xr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Md());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new $t(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;ra(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Zc)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=yd[(s-r-1)%yd.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new $t(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ts-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Ts;m>Ts&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ts}`);let f=[],M=0;for(let C=0;C<Ts;++C){let P=C/x,S=Math.exp(-P*P/2);f.push(S),C===0?M+=S:C<m&&(M+=2*S)}for(let C=0;C<f.length;C++)f[C]=f[C]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;let _=this._sizeLods[s],I=3*_*(s>v-lr?s-v+lr:0),w=4*(this._cubeSize-_);ra(e,I,w,3*_,2*_),c.setRenderTarget(e),c.render(u,Zc)}};function Cx(n){let t=[],e=[],i=[],s=n,r=n-lr+1+_d.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>n-lr?c=_d[o-n+lr-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,f=1,M=new Float32Array(x*g*p),v=new Float32Array(m*g*p),_=new Float32Array(f*g*p);for(let w=0;w<p;w++){let C=w%3*2/3-1,P=w>2?0:-1,S=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];M.set(S,x*g*w),v.set(d,m*g*w);let y=[w,w,w,w,w,w];_.set(y,f*g*w)}let I=new gn;I.setAttribute("position",new vn(M,x)),I.setAttribute("uv",new vn(v,m)),I.setAttribute("faceIndex",new vn(_,f)),t.push(I),s>lr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function bd(n,t,e){let i=new Ni(n,t,e);return i.texture.mapping=tc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ra(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Px(n,t,e){let i=new Float32Array(Ts),s=new T(0,1,0);return new mi({name:"SphericalGaussianBlur",defines:{n:Ts,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:is,depthTest:!1,depthWrite:!1})}function Md(){return new mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:is,depthTest:!1,depthWrite:!1})}function Sd(){return new mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:is,depthTest:!1,depthWrite:!1})}function Xh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ix(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===xl||c===_l,h=c===gr||c===xr;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Mr(n)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Mr(n)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Dx(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&io("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Lx(n,t,e,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)t.remove(x[m])}d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)t.update(d[g],n.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let x=p[g];for(let m=0,f=x.length;m<f;m++)t.update(x[m],n.ARRAY_BUFFER)}}function l(u){let d=[],p=u.index,g=u.attributes.position,x=0;if(p!==null){let M=p.array;x=p.version;for(let v=0,_=M.length;v<_;v+=3){let I=M[v+0],w=M[v+1],C=M[v+2];d.push(I,w,w,C,C,I)}}else if(g!==void 0){let M=g.array;x=g.version;for(let v=0,_=M.length/3-1;v<_;v+=3){let I=v+0,w=v+1,C=v+2;d.push(I,w,w,C,C,I)}}else return;let m=new(xf(d)?Ca:Ra)(d,1);m.version=x;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Ux(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){n.drawElements(i,p,r,d*o),e.update(p,i,1)}function l(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,d*o,g),e.update(p,i,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,i,1)}function u(d,p,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,x,0,g);let f=0;for(let M=0;M<g;M++)f+=p[M]*x[M];e.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Nx(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Ox(n,t,e){let i=new WeakMap,s=new Pe;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let S=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],v=0;p===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let _=a.attributes.position.count*v,I=1;_>t.maxTextureSize&&(I=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let w=new Float32Array(_*I*4*u),C=new Aa(w,_,I,u);C.type=fi,C.needsUpdate=!0;let P=v*4;for(let y=0;y<u;y++){let A=m[y],k=f[y],z=M[y],X=_*I*4*y;for(let st=0;st<A.count;st++){let q=st*P;p===!0&&(s.fromBufferAttribute(A,st),w[X+q+0]=s.x,w[X+q+1]=s.y,w[X+q+2]=s.z,w[X+q+3]=0),g===!0&&(s.fromBufferAttribute(k,st),w[X+q+4]=s.x,w[X+q+5]=s.y,w[X+q+6]=s.z,w[X+q+7]=0),x===!0&&(s.fromBufferAttribute(z,st),w[X+q+8]=s.x,w[X+q+9]=s.y,w[X+q+10]=s.z,w[X+q+11]=z.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new Mt(_,I)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];let g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Fx(n,t,e,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var La=class extends Dn{constructor(t,e,i,s,r,o,a,c,l,h=ur){if(h!==ur&&h!==vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ur&&(i=Rs),i===void 0&&h===vr&&(i=_r),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:kn,this.minFilter=c!==void 0?c:kn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},bf=new Dn,Ed=new La(1,1),Mf=new Aa,Sf=new Zl,Ef=new Ia,Td=[],wd=[],Ad=new Float32Array(16),Rd=new Float32Array(9),Cd=new Float32Array(4);function Pr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Td[s];if(r===void 0&&(r=new Float32Array(s),Td[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function an(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function cn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function nc(n,t){let e=wd[t];e===void 0&&(e=new Int32Array(t),wd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function kx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Bx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;n.uniform2fv(this.addr,t),cn(e,t)}}function zx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(an(e,t))return;n.uniform3fv(this.addr,t),cn(e,t)}}function Hx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;n.uniform4fv(this.addr,t),cn(e,t)}}function Vx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(an(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),cn(e,t)}else{if(an(e,i))return;Cd.set(i),n.uniformMatrix2fv(this.addr,!1,Cd),cn(e,i)}}function Gx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(an(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),cn(e,t)}else{if(an(e,i))return;Rd.set(i),n.uniformMatrix3fv(this.addr,!1,Rd),cn(e,i)}}function Wx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(an(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),cn(e,t)}else{if(an(e,i))return;Ad.set(i),n.uniformMatrix4fv(this.addr,!1,Ad),cn(e,i)}}function Xx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function $x(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;n.uniform2iv(this.addr,t),cn(e,t)}}function qx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;n.uniform3iv(this.addr,t),cn(e,t)}}function Yx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;n.uniform4iv(this.addr,t),cn(e,t)}}function Zx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function jx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;n.uniform2uiv(this.addr,t),cn(e,t)}}function Kx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;n.uniform3uiv(this.addr,t),cn(e,t)}}function Jx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;n.uniform4uiv(this.addr,t),cn(e,t)}}function Qx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Ed.compareFunction=gf,r=Ed):r=bf,e.setTexture2D(t||r,s)}function t_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Sf,s)}function e_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Ef,s)}function n_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Mf,s)}function i_(n){switch(n){case 5126:return kx;case 35664:return Bx;case 35665:return zx;case 35666:return Hx;case 35674:return Vx;case 35675:return Gx;case 35676:return Wx;case 5124:case 35670:return Xx;case 35667:case 35671:return $x;case 35668:case 35672:return qx;case 35669:case 35673:return Yx;case 5125:return Zx;case 36294:return jx;case 36295:return Kx;case 36296:return Jx;case 35678:case 36198:case 36298:case 36306:case 35682:return Qx;case 35679:case 36299:case 36307:return t_;case 35680:case 36300:case 36308:case 36293:return e_;case 36289:case 36303:case 36311:case 36292:return n_}}function s_(n,t){n.uniform1fv(this.addr,t)}function r_(n,t){let e=Pr(t,this.size,2);n.uniform2fv(this.addr,e)}function o_(n,t){let e=Pr(t,this.size,3);n.uniform3fv(this.addr,e)}function a_(n,t){let e=Pr(t,this.size,4);n.uniform4fv(this.addr,e)}function c_(n,t){let e=Pr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function l_(n,t){let e=Pr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function h_(n,t){let e=Pr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function u_(n,t){n.uniform1iv(this.addr,t)}function d_(n,t){n.uniform2iv(this.addr,t)}function f_(n,t){n.uniform3iv(this.addr,t)}function p_(n,t){n.uniform4iv(this.addr,t)}function m_(n,t){n.uniform1uiv(this.addr,t)}function g_(n,t){n.uniform2uiv(this.addr,t)}function x_(n,t){n.uniform3uiv(this.addr,t)}function __(n,t){n.uniform4uiv(this.addr,t)}function v_(n,t,e){let i=this.cache,s=t.length,r=nc(e,s);an(i,r)||(n.uniform1iv(this.addr,r),cn(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||bf,r[o])}function y_(n,t,e){let i=this.cache,s=t.length,r=nc(e,s);an(i,r)||(n.uniform1iv(this.addr,r),cn(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Sf,r[o])}function b_(n,t,e){let i=this.cache,s=t.length,r=nc(e,s);an(i,r)||(n.uniform1iv(this.addr,r),cn(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ef,r[o])}function M_(n,t,e){let i=this.cache,s=t.length,r=nc(e,s);an(i,r)||(n.uniform1iv(this.addr,r),cn(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Mf,r[o])}function S_(n){switch(n){case 5126:return s_;case 35664:return r_;case 35665:return o_;case 35666:return a_;case 35674:return c_;case 35675:return l_;case 35676:return h_;case 5124:case 35670:return u_;case 35667:case 35671:return d_;case 35668:case 35672:return f_;case 35669:case 35673:return p_;case 5125:return m_;case 36294:return g_;case 36295:return x_;case 36296:return __;case 35678:case 36198:case 36298:case 36306:case 35682:return v_;case 35679:case 36299:case 36307:return y_;case 35680:case 36300:case 36308:case 36293:return b_;case 36289:case 36303:case 36311:case 36292:return M_}}var Jl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=i_(e.type)}},Ql=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=S_(e.type)}},th=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},tl=/(\w+)(\])?(\[|\.)?/g;function Pd(n,t){n.seq.push(t),n.map[t.id]=t}function E_(n,t,e){let i=n.name,s=i.length;for(tl.lastIndex=0;;){let r=tl.exec(i),o=tl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Pd(e,l===void 0?new Jl(a,n,t):new Ql(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new th(a),Pd(e,u)),e=u}}}var pr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);E_(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Id(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var T_=37297,w_=0;function A_(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Dd=new Jt;function R_(n){xe._getMatrix(Dd,xe.workingColorSpace,n);let t=`mat3( ${Dd.elements.map(e=>e.toFixed(4))} )`;switch(xe.getTransfer(n)){case ec:return[t,"LinearTransferOETF"];case Ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Ld(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+A_(n.getShaderSource(t),o)}else return s}function C_(n,t){let e=R_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function P_(n,t){let e;switch(t){case Hp:e="Linear";break;case Vp:e="Reinhard";break;case Gp:e="Cineon";break;case Oh:e="ACESFilmic";break;case Xp:e="AgX";break;case $p:e="Neutral";break;case Wp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var oa=new T;function I_(){xe.getLuminanceCoefficients(oa);let n=oa.x.toFixed(4),t=oa.y.toFixed(4),e=oa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function D_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(so).join(`
`)}function L_(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function U_(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function so(n){return n!==""}function Ud(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var N_=/^[ \t]*#include +<([\w\d./]+)>/gm;function eh(n){return n.replace(N_,F_)}var O_=new Map;function F_(n,t){let e=te[t];if(e===void 0){let i=O_.get(t);if(i!==void 0)e=te[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return eh(e)}var k_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Od(n){return n.replace(k_,B_)}function B_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fd(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function z_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===nf?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Nh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ci&&(t="SHADOWMAP_TYPE_VSM"),t}function H_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case gr:case xr:t="ENVMAP_TYPE_CUBE";break;case tc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function V_(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case xr:t="ENVMAP_MODE_REFRACTION";break}return t}function G_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case sf:t="ENVMAP_BLENDING_MULTIPLY";break;case Bp:t="ENVMAP_BLENDING_MIX";break;case zp:t="ENVMAP_BLENDING_ADD";break}return t}function W_(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function X_(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=z_(e),l=H_(e),h=V_(e),u=G_(e),d=W_(e),p=D_(e),g=L_(r),x=s.createProgram(),m,f,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(so).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(so).join(`
`),f.length>0&&(f+=`
`)):(m=[Fd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(so).join(`
`),f=[Fd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ss?"#define TONE_MAPPING":"",e.toneMapping!==ss?te.tonemapping_pars_fragment:"",e.toneMapping!==ss?P_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,C_("linearToOutputTexel",e.outputColorSpace),I_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(so).join(`
`)),o=eh(o),o=Ud(o,e),o=Nd(o,e),a=eh(a),a=Ud(a,e),a=Nd(a,e),o=Od(o),a=Od(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===ju?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ju?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let v=M+m+o,_=M+f+a,I=Id(s,s.VERTEX_SHADER,v),w=Id(s,s.FRAGMENT_SHADER,_);s.attachShader(x,I),s.attachShader(x,w),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(A){if(n.debug.checkShaderErrors){let k=s.getProgramInfoLog(x).trim(),z=s.getShaderInfoLog(I).trim(),X=s.getShaderInfoLog(w).trim(),st=!0,q=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(st=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,I,w);else{let at=Ld(s,I,"vertex"),$=Ld(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+k+`
`+at+`
`+$)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(z===""||X==="")&&(q=!1);q&&(A.diagnostics={runnable:st,programLog:k,vertexShader:{log:z,prefix:m},fragmentShader:{log:X,prefix:f}})}s.deleteShader(I),s.deleteShader(w),P=new pr(s,x),S=U_(s,x)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,T_)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=w_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=w,this}var $_=0,nh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new ih(t),e.set(t,i)),i}},ih=class{constructor(t){this.id=$_++,this.code=t,this.usedTimes=0}};function q_(n,t,e,i,s,r,o){let a=new uo,c=new nh,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,y,A,k,z){let X=k.fog,st=z.geometry,q=S.isMeshStandardMaterial?k.environment:null,at=(S.isMeshStandardMaterial?e:t).get(S.envMap||q),$=at&&at.mapping===tc?at.image.height:null,xt=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let gt=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,At=gt!==void 0?gt.length:0,Yt=0;st.morphAttributes.position!==void 0&&(Yt=1),st.morphAttributes.normal!==void 0&&(Yt=2),st.morphAttributes.color!==void 0&&(Yt=3);let ve,K,lt,Rt;if(xt){let ae=ui[xt];ve=ae.vertexShader,K=ae.fragmentShader}else ve=S.vertexShader,K=S.fragmentShader,c.update(S),lt=c.getVertexShaderID(S),Rt=c.getFragmentShaderID(S);let pt=n.getRenderTarget(),Ft=n.state.buffers.depth.getReversed(),Xt=z.isInstancedMesh===!0,Zt=z.isBatchedMesh===!0,le=!!S.map,he=!!S.matcap,Ee=!!at,O=!!S.aoMap,Mn=!!S.lightMap,ie=!!S.bumpMap,se=!!S.normalMap,kt=!!S.displacementMap,_e=!!S.emissiveMap,Ot=!!S.metalnessMap,R=!!S.roughnessMap,b=S.anisotropy>0,B=S.clearcoat>0,tt=S.dispersion>0,nt=S.iridescence>0,Y=S.sheen>0,Ct=S.transmission>0,dt=b&&!!S.anisotropyMap,Et=B&&!!S.clearcoatMap,re=B&&!!S.clearcoatNormalMap,ot=B&&!!S.clearcoatRoughnessMap,Tt=nt&&!!S.iridescenceMap,Bt=nt&&!!S.iridescenceThicknessMap,Ht=Y&&!!S.sheenColorMap,yt=Y&&!!S.sheenRoughnessMap,oe=!!S.specularMap,zt=!!S.specularColorMap,fe=!!S.specularIntensityMap,L=Ct&&!!S.transmissionMap,ht=Ct&&!!S.thicknessMap,W=!!S.gradientMap,Z=!!S.alphaMap,ut=S.alphaTest>0,ft=!!S.alphaHash,Gt=!!S.extensions,Ae=ss;S.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(Ae=n.toneMapping);let Ze={shaderID:xt,shaderType:S.type,shaderName:S.name,vertexShader:ve,fragmentShader:K,defines:S.defines,customVertexShaderID:lt,customFragmentShaderID:Rt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Zt,batchingColor:Zt&&z._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&z.instanceColor!==null,instancingMorph:Xt&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:pt===null?n.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:Rr,alphaToCoverage:!!S.alphaToCoverage,map:le,matcap:he,envMap:Ee,envMapMode:Ee&&at.mapping,envMapCubeUVHeight:$,aoMap:O,lightMap:Mn,bumpMap:ie,normalMap:se,displacementMap:d&&kt,emissiveMap:_e,normalMapObjectSpace:se&&S.normalMapType===jp,normalMapTangentSpace:se&&S.normalMapType===mf,metalnessMap:Ot,roughnessMap:R,anisotropy:b,anisotropyMap:dt,clearcoat:B,clearcoatMap:Et,clearcoatNormalMap:re,clearcoatRoughnessMap:ot,dispersion:tt,iridescence:nt,iridescenceMap:Tt,iridescenceThicknessMap:Bt,sheen:Y,sheenColorMap:Ht,sheenRoughnessMap:yt,specularMap:oe,specularColorMap:zt,specularIntensityMap:fe,transmission:Ct,transmissionMap:L,thicknessMap:ht,gradientMap:W,opaque:S.transparent===!1&&S.blending===hr&&S.alphaToCoverage===!1,alphaMap:Z,alphaTest:ut,alphaHash:ft,combine:S.combine,mapUv:le&&x(S.map.channel),aoMapUv:O&&x(S.aoMap.channel),lightMapUv:Mn&&x(S.lightMap.channel),bumpMapUv:ie&&x(S.bumpMap.channel),normalMapUv:se&&x(S.normalMap.channel),displacementMapUv:kt&&x(S.displacementMap.channel),emissiveMapUv:_e&&x(S.emissiveMap.channel),metalnessMapUv:Ot&&x(S.metalnessMap.channel),roughnessMapUv:R&&x(S.roughnessMap.channel),anisotropyMapUv:dt&&x(S.anisotropyMap.channel),clearcoatMapUv:Et&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:re&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:yt&&x(S.sheenRoughnessMap.channel),specularMapUv:oe&&x(S.specularMap.channel),specularColorMapUv:zt&&x(S.specularColorMap.channel),specularIntensityMapUv:fe&&x(S.specularIntensityMap.channel),transmissionMapUv:L&&x(S.transmissionMap.channel),thicknessMapUv:ht&&x(S.thicknessMap.channel),alphaMapUv:Z&&x(S.alphaMap.channel),vertexTangents:!!st.attributes.tangent&&(se||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!st.attributes.uv&&(le||Z),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ft,skinning:z.isSkinnedMesh===!0,morphTargets:st.morphAttributes.position!==void 0,morphNormals:st.morphAttributes.normal!==void 0,morphColors:st.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:Yt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ae,decodeVideoTexture:le&&S.map.isVideoTexture===!0&&xe.getTransfer(S.map.colorSpace)===Ce,decodeVideoTextureEmissive:_e&&S.emissiveMap.isVideoTexture===!0&&xe.getTransfer(S.emissiveMap.colorSpace)===Ce,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Pi,flipSided:S.side===Tn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Gt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&S.extensions.multiDraw===!0||Zt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ze.vertexUv1s=l.has(1),Ze.vertexUv2s=l.has(2),Ze.vertexUv3s=l.has(3),l.clear(),Ze}function f(S){let y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(let A in S.defines)y.push(A),y.push(S.defines[A]);return S.isRawShaderMaterial===!1&&(M(y,S),v(y,S),y.push(n.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function M(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function v(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){let y=g[S.type],A;if(y){let k=ui[y];A=F0.clone(k.uniforms)}else A=S.uniforms;return A}function I(S,y){let A;for(let k=0,z=h.length;k<z;k++){let X=h[k];if(X.cacheKey===y){A=X,++A.usedTimes;break}}return A===void 0&&(A=new X_(n,y,S,r),h.push(A)),A}function w(S){if(--S.usedTimes===0){let y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function C(S){c.remove(S)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:I,releaseProgram:w,releaseShaderCache:C,programs:h,dispose:P}}function Y_(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Z_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function kd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Bd(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,d,p,g,x,m){let f=n[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},n[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=x,f.group=m),t++,f}function a(u,d,p,g,x,m){let f=o(u,d,p,g,x,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(u,d,p,g,x,m){let f=o(u,d,p,g,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||Z_),i.length>1&&i.sort(d||kd),s.length>1&&s.sort(d||kd)}function h(){for(let u=t,d=n.length;u<d;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function j_(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Bd,n.set(i,[o])):s>=r.length?(o=new Bd,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function K_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new ee};break;case"SpotLight":e={position:new T,direction:new T,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new T,halfWidth:new T,halfHeight:new T};break}return n[t.id]=e,e}}}function J_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Q_=0;function tv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function ev(n){let t=new K_,e=J_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new T);let s=new T,r=new ye,o=new ye;function a(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,M=0,v=0,_=0,I=0,w=0,C=0;l.sort(tv);for(let S=0,y=l.length;S<y;S++){let A=l[S],k=A.color,z=A.intensity,X=A.distance,st=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=k.r*z,u+=k.g*z,d+=k.b*z;else if(A.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(A.sh.coefficients[q],z);C++}else if(A.isDirectionalLight){let q=t.get(A);if(q.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let at=A.shadow,$=e.get(A);$.shadowIntensity=at.intensity,$.shadowBias=at.bias,$.shadowNormalBias=at.normalBias,$.shadowRadius=at.radius,$.shadowMapSize=at.mapSize,i.directionalShadow[p]=$,i.directionalShadowMap[p]=st,i.directionalShadowMatrix[p]=A.shadow.matrix,M++}i.directional[p]=q,p++}else if(A.isSpotLight){let q=t.get(A);q.position.setFromMatrixPosition(A.matrixWorld),q.color.copy(k).multiplyScalar(z),q.distance=X,q.coneCos=Math.cos(A.angle),q.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),q.decay=A.decay,i.spot[x]=q;let at=A.shadow;if(A.map&&(i.spotLightMap[I]=A.map,I++,at.updateMatrices(A),A.castShadow&&w++),i.spotLightMatrix[x]=at.matrix,A.castShadow){let $=e.get(A);$.shadowIntensity=at.intensity,$.shadowBias=at.bias,$.shadowNormalBias=at.normalBias,$.shadowRadius=at.radius,$.shadowMapSize=at.mapSize,i.spotShadow[x]=$,i.spotShadowMap[x]=st,_++}x++}else if(A.isRectAreaLight){let q=t.get(A);q.color.copy(k).multiplyScalar(z),q.halfWidth.set(A.width*.5,0,0),q.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=q,m++}else if(A.isPointLight){let q=t.get(A);if(q.color.copy(A.color).multiplyScalar(A.intensity),q.distance=A.distance,q.decay=A.decay,A.castShadow){let at=A.shadow,$=e.get(A);$.shadowIntensity=at.intensity,$.shadowBias=at.bias,$.shadowNormalBias=at.normalBias,$.shadowRadius=at.radius,$.shadowMapSize=at.mapSize,$.shadowCameraNear=at.camera.near,$.shadowCameraFar=at.camera.far,i.pointShadow[g]=$,i.pointShadowMap[g]=st,i.pointShadowMatrix[g]=A.shadow.matrix,v++}i.point[g]=q,g++}else if(A.isHemisphereLight){let q=t.get(A);q.skyColor.copy(A.color).multiplyScalar(z),q.groundColor.copy(A.groundColor).multiplyScalar(z),i.hemi[f]=q,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==M||P.numPointShadows!==v||P.numSpotShadows!==_||P.numSpotMaps!==I||P.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=_+I-w,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,P.directionalLength=p,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=M,P.numPointShadows=v,P.numSpotShadows=_,P.numSpotMaps=I,P.numLightProbes=C,i.version=Q_++)}function c(l,h){let u=0,d=0,p=0,g=0,x=0,m=h.matrixWorldInverse;for(let f=0,M=l.length;f<M;f++){let v=l[f];if(v.isDirectionalLight){let _=i.directional[u];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(v.isSpotLight){let _=i.spot[p];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let _=i.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let _=i.point[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let _=i.hemi[x];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:i}}function zd(n){let t=new ev(n),e=[],i=[];function s(h){l.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function nv(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new zd(n),t.set(s,[a])):r>=o.length?(a=new zd(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var sh=class extends Fi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Yp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},rh=class extends Fi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},iv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rv(n,t,e){let i=new fo,s=new Mt,r=new Mt,o=new Pe,a=new sh({depthPacking:Zp}),c=new rh,l={},h=e.maxTextureSize,u={[rs]:Tn,[Tn]:rs,[Pi]:Pi},d=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:iv,fragmentShader:sv}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new gn;g.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new $t(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nf;let f=this.type;this.render=function(w,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let S=n.getRenderTarget(),y=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),k=n.state;k.setBlending(is),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let z=f!==Ci&&this.type===Ci,X=f===Ci&&this.type!==Ci;for(let st=0,q=w.length;st<q;st++){let at=w[st],$=at.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let xt=$.getFrameExtents();if(s.multiply(xt),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/xt.x),s.x=r.x*xt.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/xt.y),s.y=r.y*xt.y,$.mapSize.y=r.y)),$.map===null||z===!0||X===!0){let At=this.type!==Ci?{minFilter:kn,magFilter:kn}:{};$.map!==null&&$.map.dispose(),$.map=new Ni(s.x,s.y,At),$.map.texture.name=at.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();let gt=$.getViewportCount();for(let At=0;At<gt;At++){let Yt=$.getViewport(At);o.set(r.x*Yt.x,r.y*Yt.y,r.x*Yt.z,r.y*Yt.w),k.viewport(o),$.updateMatrices(at,At),i=$.getFrustum(),_(C,P,$.camera,at,this.type)}$.isPointLightShadow!==!0&&this.type===Ci&&M($,P),$.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(S,y,A)};function M(w,C){let P=t.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ni(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(C,null,P,d,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(C,null,P,p,x,null)}function v(w,C,P,S){let y=null,A=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)y=A;else if(y=P.isPointLight===!0?c:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let k=y.uuid,z=C.uuid,X=l[k];X===void 0&&(X={},l[k]=X);let st=X[z];st===void 0&&(st=y.clone(),X[z]=st,C.addEventListener("dispose",I)),y=st}if(y.visible=C.visible,y.wireframe=C.wireframe,S===Ci?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:u[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let k=n.properties.get(y);k.light=P}return y}function _(w,C,P,S,y){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Ci)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);let z=t.update(w),X=w.material;if(Array.isArray(X)){let st=z.groups;for(let q=0,at=st.length;q<at;q++){let $=st[q],xt=X[$.materialIndex];if(xt&&xt.visible){let gt=v(w,xt,S,y);w.onBeforeShadow(n,w,C,P,z,gt,$),n.renderBufferDirect(P,null,z,gt,w,$),w.onAfterShadow(n,w,C,P,z,gt,$)}}}else if(X.visible){let st=v(w,X,S,y);w.onBeforeShadow(n,w,C,P,z,st,null),n.renderBufferDirect(P,null,z,st,w,null),w.onAfterShadow(n,w,C,P,z,st,null)}}let k=w.children;for(let z=0,X=k.length;z<X;z++)_(k[z],C,P,S,y)}function I(w){w.target.removeEventListener("dispose",I);for(let P in l){let S=l[P],y=w.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}var ov={[hl]:ul,[dl]:ml,[fl]:gl,[mr]:pl,[ul]:hl,[ml]:dl,[gl]:fl,[pl]:mr};function av(n,t){function e(){let L=!1,ht=new Pe,W=null,Z=new Pe(0,0,0,0);return{setMask:function(ut){W!==ut&&!L&&(n.colorMask(ut,ut,ut,ut),W=ut)},setLocked:function(ut){L=ut},setClear:function(ut,ft,Gt,Ae,Ze){Ze===!0&&(ut*=Ae,ft*=Ae,Gt*=Ae),ht.set(ut,ft,Gt,Ae),Z.equals(ht)===!1&&(n.clearColor(ut,ft,Gt,Ae),Z.copy(ht))},reset:function(){L=!1,W=null,Z.set(-1,0,0,0)}}}function i(){let L=!1,ht=!1,W=null,Z=null,ut=null;return{setReversed:function(ft){if(ht!==ft){let Gt=t.get("EXT_clip_control");ht?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT);let Ae=ut;ut=null,this.setClear(Ae)}ht=ft},getReversed:function(){return ht},setTest:function(ft){ft?pt(n.DEPTH_TEST):Ft(n.DEPTH_TEST)},setMask:function(ft){W!==ft&&!L&&(n.depthMask(ft),W=ft)},setFunc:function(ft){if(ht&&(ft=ov[ft]),Z!==ft){switch(ft){case hl:n.depthFunc(n.NEVER);break;case ul:n.depthFunc(n.ALWAYS);break;case dl:n.depthFunc(n.LESS);break;case mr:n.depthFunc(n.LEQUAL);break;case fl:n.depthFunc(n.EQUAL);break;case pl:n.depthFunc(n.GEQUAL);break;case ml:n.depthFunc(n.GREATER);break;case gl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Z=ft}},setLocked:function(ft){L=ft},setClear:function(ft){ut!==ft&&(ht&&(ft=1-ft),n.clearDepth(ft),ut=ft)},reset:function(){L=!1,W=null,Z=null,ut=null,ht=!1}}}function s(){let L=!1,ht=null,W=null,Z=null,ut=null,ft=null,Gt=null,Ae=null,Ze=null;return{setTest:function(ae){L||(ae?pt(n.STENCIL_TEST):Ft(n.STENCIL_TEST))},setMask:function(ae){ht!==ae&&!L&&(n.stencilMask(ae),ht=ae)},setFunc:function(ae,Un,qn){(W!==ae||Z!==Un||ut!==qn)&&(n.stencilFunc(ae,Un,qn),W=ae,Z=Un,ut=qn)},setOp:function(ae,Un,qn){(ft!==ae||Gt!==Un||Ae!==qn)&&(n.stencilOp(ae,Un,qn),ft=ae,Gt=Un,Ae=qn)},setLocked:function(ae){L=ae},setClear:function(ae){Ze!==ae&&(n.clearStencil(ae),Ze=ae)},reset:function(){L=!1,ht=null,W=null,Z=null,ut=null,ft=null,Gt=null,Ae=null,Ze=null}}}let r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,M=null,v=null,_=null,I=null,w=null,C=new ee(0,0,0),P=0,S=!1,y=null,A=null,k=null,z=null,X=null,st=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,at=0,$=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec($)[1]),q=at>=1):$.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),q=at>=2);let xt=null,gt={},At=n.getParameter(n.SCISSOR_BOX),Yt=n.getParameter(n.VIEWPORT),ve=new Pe().fromArray(At),K=new Pe().fromArray(Yt);function lt(L,ht,W,Z){let ut=new Uint8Array(4),ft=n.createTexture();n.bindTexture(L,ft),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Gt=0;Gt<W;Gt++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ht,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,ut):n.texImage2D(ht+Gt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ut);return ft}let Rt={};Rt[n.TEXTURE_2D]=lt(n.TEXTURE_2D,n.TEXTURE_2D,1),Rt[n.TEXTURE_CUBE_MAP]=lt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Rt[n.TEXTURE_2D_ARRAY]=lt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Rt[n.TEXTURE_3D]=lt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pt(n.DEPTH_TEST),o.setFunc(mr),ie(!1),se(Hu),pt(n.CULL_FACE),O(is);function pt(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function Ft(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function Xt(L,ht){return u[L]!==ht?(n.bindFramebuffer(L,ht),u[L]=ht,L===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ht),L===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ht),!0):!1}function Zt(L,ht){let W=p,Z=!1;if(L){W=d.get(ht),W===void 0&&(W=[],d.set(ht,W));let ut=L.textures;if(W.length!==ut.length||W[0]!==n.COLOR_ATTACHMENT0){for(let ft=0,Gt=ut.length;ft<Gt;ft++)W[ft]=n.COLOR_ATTACHMENT0+ft;W.length=ut.length,Z=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,Z=!0);Z&&n.drawBuffers(W)}function le(L){return g!==L?(n.useProgram(L),g=L,!0):!1}let he={[Es]:n.FUNC_ADD,[Mp]:n.FUNC_SUBTRACT,[Sp]:n.FUNC_REVERSE_SUBTRACT};he[Ep]=n.MIN,he[Tp]=n.MAX;let Ee={[wp]:n.ZERO,[Ap]:n.ONE,[Rp]:n.SRC_COLOR,[cl]:n.SRC_ALPHA,[Up]:n.SRC_ALPHA_SATURATE,[Dp]:n.DST_COLOR,[Pp]:n.DST_ALPHA,[Cp]:n.ONE_MINUS_SRC_COLOR,[ll]:n.ONE_MINUS_SRC_ALPHA,[Lp]:n.ONE_MINUS_DST_COLOR,[Ip]:n.ONE_MINUS_DST_ALPHA,[Np]:n.CONSTANT_COLOR,[Op]:n.ONE_MINUS_CONSTANT_COLOR,[Fp]:n.CONSTANT_ALPHA,[kp]:n.ONE_MINUS_CONSTANT_ALPHA};function O(L,ht,W,Z,ut,ft,Gt,Ae,Ze,ae){if(L===is){x===!0&&(Ft(n.BLEND),x=!1);return}if(x===!1&&(pt(n.BLEND),x=!0),L!==bp){if(L!==m||ae!==S){if((f!==Es||_!==Es)&&(n.blendEquation(n.FUNC_ADD),f=Es,_=Es),ae)switch(L){case hr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vu:n.blendFunc(n.ONE,n.ONE);break;case Gu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case hr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Gu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}M=null,v=null,I=null,w=null,C.set(0,0,0),P=0,m=L,S=ae}return}ut=ut||ht,ft=ft||W,Gt=Gt||Z,(ht!==f||ut!==_)&&(n.blendEquationSeparate(he[ht],he[ut]),f=ht,_=ut),(W!==M||Z!==v||ft!==I||Gt!==w)&&(n.blendFuncSeparate(Ee[W],Ee[Z],Ee[ft],Ee[Gt]),M=W,v=Z,I=ft,w=Gt),(Ae.equals(C)===!1||Ze!==P)&&(n.blendColor(Ae.r,Ae.g,Ae.b,Ze),C.copy(Ae),P=Ze),m=L,S=!1}function Mn(L,ht){L.side===Pi?Ft(n.CULL_FACE):pt(n.CULL_FACE);let W=L.side===Tn;ht&&(W=!W),ie(W),L.blending===hr&&L.transparent===!1?O(is):O(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let Z=L.stencilWrite;a.setTest(Z),Z&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),_e(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?pt(n.SAMPLE_ALPHA_TO_COVERAGE):Ft(n.SAMPLE_ALPHA_TO_COVERAGE)}function ie(L){y!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),y=L)}function se(L){L!==vp?(pt(n.CULL_FACE),L!==A&&(L===Hu?n.cullFace(n.BACK):L===yp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ft(n.CULL_FACE),A=L}function kt(L){L!==k&&(q&&n.lineWidth(L),k=L)}function _e(L,ht,W){L?(pt(n.POLYGON_OFFSET_FILL),(z!==ht||X!==W)&&(n.polygonOffset(ht,W),z=ht,X=W)):Ft(n.POLYGON_OFFSET_FILL)}function Ot(L){L?pt(n.SCISSOR_TEST):Ft(n.SCISSOR_TEST)}function R(L){L===void 0&&(L=n.TEXTURE0+st-1),xt!==L&&(n.activeTexture(L),xt=L)}function b(L,ht,W){W===void 0&&(xt===null?W=n.TEXTURE0+st-1:W=xt);let Z=gt[W];Z===void 0&&(Z={type:void 0,texture:void 0},gt[W]=Z),(Z.type!==L||Z.texture!==ht)&&(xt!==W&&(n.activeTexture(W),xt=W),n.bindTexture(L,ht||Rt[L]),Z.type=L,Z.texture=ht)}function B(){let L=gt[xt];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function tt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ct(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function dt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Et(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Tt(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Bt(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ht(L){ve.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),ve.copy(L))}function yt(L){K.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),K.copy(L))}function oe(L,ht){let W=l.get(ht);W===void 0&&(W=new WeakMap,l.set(ht,W));let Z=W.get(L);Z===void 0&&(Z=n.getUniformBlockIndex(ht,L.name),W.set(L,Z))}function zt(L,ht){let Z=l.get(ht).get(L);c.get(ht)!==Z&&(n.uniformBlockBinding(ht,Z,L.__bindingPointIndex),c.set(ht,Z))}function fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},xt=null,gt={},u={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,M=null,v=null,_=null,I=null,w=null,C=new ee(0,0,0),P=0,S=!1,y=null,A=null,k=null,z=null,X=null,ve.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pt,disable:Ft,bindFramebuffer:Xt,drawBuffers:Zt,useProgram:le,setBlending:O,setMaterial:Mn,setFlipSided:ie,setCullFace:se,setLineWidth:kt,setPolygonOffset:_e,setScissorTest:Ot,activeTexture:R,bindTexture:b,unbindTexture:B,compressedTexImage2D:tt,compressedTexImage3D:nt,texImage2D:Tt,texImage3D:Bt,updateUBOMapping:oe,uniformBlockBinding:zt,texStorage2D:re,texStorage3D:ot,texSubImage2D:Y,texSubImage3D:Ct,compressedTexSubImage2D:dt,compressedTexSubImage3D:Et,scissor:Ht,viewport:yt,reset:fe}}function Hd(n,t,e,i){let s=cv(i);switch(e){case lf:return n*t;case uf:return n*t;case df:return n*t*2;case zh:return n*t/s.components*s.byteLength;case Hh:return n*t/s.components*s.byteLength;case ff:return n*t*2/s.components*s.byteLength;case Vh:return n*t*2/s.components*s.byteLength;case hf:return n*t*3/s.components*s.byteLength;case Qn:return n*t*4/s.components*s.byteLength;case Gh:return n*t*4/s.components*s.byteLength;case _a:case va:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ya:case ba:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case bl:case Sl:return Math.max(n,16)*Math.max(t,8)/4;case yl:case Ml:return Math.max(n,8)*Math.max(t,8)/2;case El:case Tl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case wl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Al:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Rl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Cl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Il:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ul:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Nl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Fl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case kl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Bl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case zl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ma:case Hl:case Vl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case pf:case Gl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Wl:case Xl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function cv(n){switch(n){case Li:case of:return{byteLength:1,components:1};case ho:case af:case vo:return{byteLength:2,components:1};case kh:case Bh:return{byteLength:2,components:4};case Rs:case Fh:case fi:return{byteLength:4,components:1};case cf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function lv(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Mt,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return p?new OffscreenCanvas(R,b):Ta("canvas")}function x(R,b,B){let tt=1,nt=Ot(R);if((nt.width>B||nt.height>B)&&(tt=B/Math.max(nt.width,nt.height)),tt<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let Y=Math.floor(tt*nt.width),Ct=Math.floor(tt*nt.height);u===void 0&&(u=g(Y,Ct));let dt=b?g(Y,Ct):u;return dt.width=Y,dt.height=Ct,dt.getContext("2d").drawImage(R,0,0,Y,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+Y+"x"+Ct+")."),dt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),R;return R}function m(R){return R.generateMipmaps}function f(R){n.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(R,b,B,tt,nt=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=b;if(b===n.RED&&(B===n.FLOAT&&(Y=n.R32F),B===n.HALF_FLOAT&&(Y=n.R16F),B===n.UNSIGNED_BYTE&&(Y=n.R8)),b===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(Y=n.R8UI),B===n.UNSIGNED_SHORT&&(Y=n.R16UI),B===n.UNSIGNED_INT&&(Y=n.R32UI),B===n.BYTE&&(Y=n.R8I),B===n.SHORT&&(Y=n.R16I),B===n.INT&&(Y=n.R32I)),b===n.RG&&(B===n.FLOAT&&(Y=n.RG32F),B===n.HALF_FLOAT&&(Y=n.RG16F),B===n.UNSIGNED_BYTE&&(Y=n.RG8)),b===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(Y=n.RG8UI),B===n.UNSIGNED_SHORT&&(Y=n.RG16UI),B===n.UNSIGNED_INT&&(Y=n.RG32UI),B===n.BYTE&&(Y=n.RG8I),B===n.SHORT&&(Y=n.RG16I),B===n.INT&&(Y=n.RG32I)),b===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),B===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),B===n.UNSIGNED_INT&&(Y=n.RGB32UI),B===n.BYTE&&(Y=n.RGB8I),B===n.SHORT&&(Y=n.RGB16I),B===n.INT&&(Y=n.RGB32I)),b===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),B===n.UNSIGNED_INT&&(Y=n.RGBA32UI),B===n.BYTE&&(Y=n.RGBA8I),B===n.SHORT&&(Y=n.RGBA16I),B===n.INT&&(Y=n.RGBA32I)),b===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),b===n.RGBA){let Ct=nt?ec:xe.getTransfer(tt);B===n.FLOAT&&(Y=n.RGBA32F),B===n.HALF_FLOAT&&(Y=n.RGBA16F),B===n.UNSIGNED_BYTE&&(Y=Ct===Ce?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function _(R,b){let B;return R?b===null||b===Rs||b===_r?B=n.DEPTH24_STENCIL8:b===fi?B=n.DEPTH32F_STENCIL8:b===ho&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Rs||b===_r?B=n.DEPTH_COMPONENT24:b===fi?B=n.DEPTH_COMPONENT32F:b===ho&&(B=n.DEPTH_COMPONENT16),B}function I(R,b){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==kn&&R.minFilter!==di?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function w(R){let b=R.target;b.removeEventListener("dispose",w),P(b),b.isVideoTexture&&h.delete(b)}function C(R){let b=R.target;b.removeEventListener("dispose",C),y(b)}function P(R){let b=i.get(R);if(b.__webglInit===void 0)return;let B=R.source,tt=d.get(B);if(tt){let nt=tt[b.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&S(R),Object.keys(tt).length===0&&d.delete(B)}i.remove(R)}function S(R){let b=i.get(R);n.deleteTexture(b.__webglTexture);let B=R.source,tt=d.get(B);delete tt[b.__cacheKey],o.memory.textures--}function y(R){let b=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(b.__webglFramebuffer[tt]))for(let nt=0;nt<b.__webglFramebuffer[tt].length;nt++)n.deleteFramebuffer(b.__webglFramebuffer[tt][nt]);else n.deleteFramebuffer(b.__webglFramebuffer[tt]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[tt])}else{if(Array.isArray(b.__webglFramebuffer))for(let tt=0;tt<b.__webglFramebuffer.length;tt++)n.deleteFramebuffer(b.__webglFramebuffer[tt]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let tt=0;tt<b.__webglColorRenderbuffer.length;tt++)b.__webglColorRenderbuffer[tt]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[tt]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let B=R.textures;for(let tt=0,nt=B.length;tt<nt;tt++){let Y=i.get(B[tt]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(B[tt])}i.remove(R)}let A=0;function k(){A=0}function z(){let R=A;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),A+=1,R}function X(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function st(R,b){let B=i.get(R);if(R.isVideoTexture&&kt(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){let tt=R.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(B,R,b);return}}e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+b)}function q(R,b){let B=i.get(R);if(R.version>0&&B.__version!==R.version){K(B,R,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+b)}function at(R,b){let B=i.get(R);if(R.version>0&&B.__version!==R.version){K(B,R,b);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+b)}function $(R,b){let B=i.get(R);if(R.version>0&&B.__version!==R.version){lt(B,R,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+b)}let xt={[lo]:n.REPEAT,[ws]:n.CLAMP_TO_EDGE,[vl]:n.MIRRORED_REPEAT},gt={[kn]:n.NEAREST,[qp]:n.NEAREST_MIPMAP_NEAREST,[zo]:n.NEAREST_MIPMAP_LINEAR,[di]:n.LINEAR,[Ac]:n.LINEAR_MIPMAP_NEAREST,[As]:n.LINEAR_MIPMAP_LINEAR},At={[Kp]:n.NEVER,[i0]:n.ALWAYS,[Jp]:n.LESS,[gf]:n.LEQUAL,[Qp]:n.EQUAL,[n0]:n.GEQUAL,[t0]:n.GREATER,[e0]:n.NOTEQUAL};function Yt(R,b){if(b.type===fi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===di||b.magFilter===Ac||b.magFilter===zo||b.magFilter===As||b.minFilter===di||b.minFilter===Ac||b.minFilter===zo||b.minFilter===As)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,xt[b.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,xt[b.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,xt[b.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,gt[b.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,gt[b.minFilter]),b.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,At[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===kn||b.minFilter!==zo&&b.minFilter!==As||b.type===fi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function ve(R,b){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",w));let tt=b.source,nt=d.get(tt);nt===void 0&&(nt={},d.set(tt,nt));let Y=X(b);if(Y!==R.__cacheKey){nt[Y]===void 0&&(nt[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),nt[Y].usedTimes++;let Ct=nt[R.__cacheKey];Ct!==void 0&&(nt[R.__cacheKey].usedTimes--,Ct.usedTimes===0&&S(b)),R.__cacheKey=Y,R.__webglTexture=nt[Y].texture}return B}function K(R,b,B){let tt=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(tt=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(tt=n.TEXTURE_3D);let nt=ve(R,b),Y=b.source;e.bindTexture(tt,R.__webglTexture,n.TEXTURE0+B);let Ct=i.get(Y);if(Y.version!==Ct.__version||nt===!0){e.activeTexture(n.TEXTURE0+B);let dt=xe.getPrimaries(xe.workingColorSpace),Et=b.colorSpace===es?null:xe.getPrimaries(b.colorSpace),re=b.colorSpace===es||dt===Et?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let ot=x(b.image,!1,s.maxTextureSize);ot=_e(b,ot);let Tt=r.convert(b.format,b.colorSpace),Bt=r.convert(b.type),Ht=v(b.internalFormat,Tt,Bt,b.colorSpace,b.isVideoTexture);Yt(tt,b);let yt,oe=b.mipmaps,zt=b.isVideoTexture!==!0,fe=Ct.__version===void 0||nt===!0,L=Y.dataReady,ht=I(b,ot);if(b.isDepthTexture)Ht=_(b.format===vr,b.type),fe&&(zt?e.texStorage2D(n.TEXTURE_2D,1,Ht,ot.width,ot.height):e.texImage2D(n.TEXTURE_2D,0,Ht,ot.width,ot.height,0,Tt,Bt,null));else if(b.isDataTexture)if(oe.length>0){zt&&fe&&e.texStorage2D(n.TEXTURE_2D,ht,Ht,oe[0].width,oe[0].height);for(let W=0,Z=oe.length;W<Z;W++)yt=oe[W],zt?L&&e.texSubImage2D(n.TEXTURE_2D,W,0,0,yt.width,yt.height,Tt,Bt,yt.data):e.texImage2D(n.TEXTURE_2D,W,Ht,yt.width,yt.height,0,Tt,Bt,yt.data);b.generateMipmaps=!1}else zt?(fe&&e.texStorage2D(n.TEXTURE_2D,ht,Ht,ot.width,ot.height),L&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ot.width,ot.height,Tt,Bt,ot.data)):e.texImage2D(n.TEXTURE_2D,0,Ht,ot.width,ot.height,0,Tt,Bt,ot.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){zt&&fe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ht,Ht,oe[0].width,oe[0].height,ot.depth);for(let W=0,Z=oe.length;W<Z;W++)if(yt=oe[W],b.format!==Qn)if(Tt!==null)if(zt){if(L)if(b.layerUpdates.size>0){let ut=Hd(yt.width,yt.height,b.format,b.type);for(let ft of b.layerUpdates){let Gt=yt.data.subarray(ft*ut/yt.data.BYTES_PER_ELEMENT,(ft+1)*ut/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,ft,yt.width,yt.height,1,Tt,Gt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,yt.width,yt.height,ot.depth,Tt,yt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,W,Ht,yt.width,yt.height,ot.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?L&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,yt.width,yt.height,ot.depth,Tt,Bt,yt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,W,Ht,yt.width,yt.height,ot.depth,0,Tt,Bt,yt.data)}else{zt&&fe&&e.texStorage2D(n.TEXTURE_2D,ht,Ht,oe[0].width,oe[0].height);for(let W=0,Z=oe.length;W<Z;W++)yt=oe[W],b.format!==Qn?Tt!==null?zt?L&&e.compressedTexSubImage2D(n.TEXTURE_2D,W,0,0,yt.width,yt.height,Tt,yt.data):e.compressedTexImage2D(n.TEXTURE_2D,W,Ht,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?L&&e.texSubImage2D(n.TEXTURE_2D,W,0,0,yt.width,yt.height,Tt,Bt,yt.data):e.texImage2D(n.TEXTURE_2D,W,Ht,yt.width,yt.height,0,Tt,Bt,yt.data)}else if(b.isDataArrayTexture)if(zt){if(fe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ht,Ht,ot.width,ot.height,ot.depth),L)if(b.layerUpdates.size>0){let W=Hd(ot.width,ot.height,b.format,b.type);for(let Z of b.layerUpdates){let ut=ot.data.subarray(Z*W/ot.data.BYTES_PER_ELEMENT,(Z+1)*W/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,ot.width,ot.height,1,Tt,Bt,ut)}b.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,Tt,Bt,ot.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ht,ot.width,ot.height,ot.depth,0,Tt,Bt,ot.data);else if(b.isData3DTexture)zt?(fe&&e.texStorage3D(n.TEXTURE_3D,ht,Ht,ot.width,ot.height,ot.depth),L&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,Tt,Bt,ot.data)):e.texImage3D(n.TEXTURE_3D,0,Ht,ot.width,ot.height,ot.depth,0,Tt,Bt,ot.data);else if(b.isFramebufferTexture){if(fe)if(zt)e.texStorage2D(n.TEXTURE_2D,ht,Ht,ot.width,ot.height);else{let W=ot.width,Z=ot.height;for(let ut=0;ut<ht;ut++)e.texImage2D(n.TEXTURE_2D,ut,Ht,W,Z,0,Tt,Bt,null),W>>=1,Z>>=1}}else if(oe.length>0){if(zt&&fe){let W=Ot(oe[0]);e.texStorage2D(n.TEXTURE_2D,ht,Ht,W.width,W.height)}for(let W=0,Z=oe.length;W<Z;W++)yt=oe[W],zt?L&&e.texSubImage2D(n.TEXTURE_2D,W,0,0,Tt,Bt,yt):e.texImage2D(n.TEXTURE_2D,W,Ht,Tt,Bt,yt);b.generateMipmaps=!1}else if(zt){if(fe){let W=Ot(ot);e.texStorage2D(n.TEXTURE_2D,ht,Ht,W.width,W.height)}L&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Tt,Bt,ot)}else e.texImage2D(n.TEXTURE_2D,0,Ht,Tt,Bt,ot);m(b)&&f(tt),Ct.__version=Y.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function lt(R,b,B){if(b.image.length!==6)return;let tt=ve(R,b),nt=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+B);let Y=i.get(nt);if(nt.version!==Y.__version||tt===!0){e.activeTexture(n.TEXTURE0+B);let Ct=xe.getPrimaries(xe.workingColorSpace),dt=b.colorSpace===es?null:xe.getPrimaries(b.colorSpace),Et=b.colorSpace===es||Ct===dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let re=b.isCompressedTexture||b.image[0].isCompressedTexture,ot=b.image[0]&&b.image[0].isDataTexture,Tt=[];for(let Z=0;Z<6;Z++)!re&&!ot?Tt[Z]=x(b.image[Z],!0,s.maxCubemapSize):Tt[Z]=ot?b.image[Z].image:b.image[Z],Tt[Z]=_e(b,Tt[Z]);let Bt=Tt[0],Ht=r.convert(b.format,b.colorSpace),yt=r.convert(b.type),oe=v(b.internalFormat,Ht,yt,b.colorSpace),zt=b.isVideoTexture!==!0,fe=Y.__version===void 0||tt===!0,L=nt.dataReady,ht=I(b,Bt);Yt(n.TEXTURE_CUBE_MAP,b);let W;if(re){zt&&fe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ht,oe,Bt.width,Bt.height);for(let Z=0;Z<6;Z++){W=Tt[Z].mipmaps;for(let ut=0;ut<W.length;ut++){let ft=W[ut];b.format!==Qn?Ht!==null?zt?L&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,0,0,ft.width,ft.height,Ht,ft.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,oe,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,0,0,ft.width,ft.height,Ht,yt,ft.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,oe,ft.width,ft.height,0,Ht,yt,ft.data)}}}else{if(W=b.mipmaps,zt&&fe){W.length>0&&ht++;let Z=Ot(Tt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ht,oe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ot){zt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Tt[Z].width,Tt[Z].height,Ht,yt,Tt[Z].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,oe,Tt[Z].width,Tt[Z].height,0,Ht,yt,Tt[Z].data);for(let ut=0;ut<W.length;ut++){let Gt=W[ut].image[Z].image;zt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,0,0,Gt.width,Gt.height,Ht,yt,Gt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,oe,Gt.width,Gt.height,0,Ht,yt,Gt.data)}}else{zt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ht,yt,Tt[Z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,oe,Ht,yt,Tt[Z]);for(let ut=0;ut<W.length;ut++){let ft=W[ut];zt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,0,0,Ht,yt,ft.image[Z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,oe,Ht,yt,ft.image[Z])}}}m(b)&&f(n.TEXTURE_CUBE_MAP),Y.__version=nt.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Rt(R,b,B,tt,nt,Y){let Ct=r.convert(B.format,B.colorSpace),dt=r.convert(B.type),Et=v(B.internalFormat,Ct,dt,B.colorSpace),re=i.get(b),ot=i.get(B);if(ot.__renderTarget=b,!re.__hasExternalTextures){let Tt=Math.max(1,b.width>>Y),Bt=Math.max(1,b.height>>Y);nt===n.TEXTURE_3D||nt===n.TEXTURE_2D_ARRAY?e.texImage3D(nt,Y,Et,Tt,Bt,b.depth,0,Ct,dt,null):e.texImage2D(nt,Y,Et,Tt,Bt,0,Ct,dt,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),se(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,nt,ot.__webglTexture,0,ie(b)):(nt===n.TEXTURE_2D||nt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,tt,nt,ot.__webglTexture,Y),e.bindFramebuffer(n.FRAMEBUFFER,null)}function pt(R,b,B){if(n.bindRenderbuffer(n.RENDERBUFFER,R),b.depthBuffer){let tt=b.depthTexture,nt=tt&&tt.isDepthTexture?tt.type:null,Y=_(b.stencilBuffer,nt),Ct=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=ie(b);se(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,dt,Y,b.width,b.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,dt,Y,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Y,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ct,n.RENDERBUFFER,R)}else{let tt=b.textures;for(let nt=0;nt<tt.length;nt++){let Y=tt[nt],Ct=r.convert(Y.format,Y.colorSpace),dt=r.convert(Y.type),Et=v(Y.internalFormat,Ct,dt,Y.colorSpace),re=ie(b);B&&se(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,Et,b.width,b.height):se(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,Et,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Et,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ft(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let tt=i.get(b.depthTexture);tt.__renderTarget=b,(!tt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),st(b.depthTexture,0);let nt=tt.__webglTexture,Y=ie(b);if(b.depthTexture.format===ur)se(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0);else if(b.depthTexture.format===vr)se(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Xt(R){let b=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let tt=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),tt){let nt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,tt.removeEventListener("dispose",nt)};tt.addEventListener("dispose",nt),b.__depthDisposeCallback=nt}b.__boundDepthTexture=tt}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ft(b.__webglFramebuffer,R)}else if(B){b.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[tt]),b.__webglDepthbuffer[tt]===void 0)b.__webglDepthbuffer[tt]=n.createRenderbuffer(),pt(b.__webglDepthbuffer[tt],R,!1);else{let nt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=b.__webglDepthbuffer[tt];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),pt(b.__webglDepthbuffer,R,!1);else{let tt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,nt=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,nt),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,nt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Zt(R,b,B){let tt=i.get(R);b!==void 0&&Rt(tt.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Xt(R)}function le(R){let b=R.texture,B=i.get(R),tt=i.get(b);R.addEventListener("dispose",C);let nt=R.textures,Y=R.isWebGLCubeRenderTarget===!0,Ct=nt.length>1;if(Ct||(tt.__webglTexture===void 0&&(tt.__webglTexture=n.createTexture()),tt.__version=b.version,o.memory.textures++),Y){B.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer[dt]=[];for(let Et=0;Et<b.mipmaps.length;Et++)B.__webglFramebuffer[dt][Et]=n.createFramebuffer()}else B.__webglFramebuffer[dt]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer=[];for(let dt=0;dt<b.mipmaps.length;dt++)B.__webglFramebuffer[dt]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Ct)for(let dt=0,Et=nt.length;dt<Et;dt++){let re=i.get(nt[dt]);re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&se(R)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let dt=0;dt<nt.length;dt++){let Et=nt[dt];B.__webglColorRenderbuffer[dt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[dt]);let re=r.convert(Et.format,Et.colorSpace),ot=r.convert(Et.type),Tt=v(Et.internalFormat,re,ot,Et.colorSpace,R.isXRRenderTarget===!0),Bt=ie(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Bt,Tt,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,B.__webglColorRenderbuffer[dt])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),pt(B.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture),Yt(n.TEXTURE_CUBE_MAP,b);for(let dt=0;dt<6;dt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Et=0;Et<b.mipmaps.length;Et++)Rt(B.__webglFramebuffer[dt][Et],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Et);else Rt(B.__webglFramebuffer[dt],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(b)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let dt=0,Et=nt.length;dt<Et;dt++){let re=nt[dt],ot=i.get(re);e.bindTexture(n.TEXTURE_2D,ot.__webglTexture),Yt(n.TEXTURE_2D,re),Rt(B.__webglFramebuffer,R,re,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,0),m(re)&&f(n.TEXTURE_2D)}e.unbindTexture()}else{let dt=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(dt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(dt,tt.__webglTexture),Yt(dt,b),b.mipmaps&&b.mipmaps.length>0)for(let Et=0;Et<b.mipmaps.length;Et++)Rt(B.__webglFramebuffer[Et],R,b,n.COLOR_ATTACHMENT0,dt,Et);else Rt(B.__webglFramebuffer,R,b,n.COLOR_ATTACHMENT0,dt,0);m(b)&&f(dt),e.unbindTexture()}R.depthBuffer&&Xt(R)}function he(R){let b=R.textures;for(let B=0,tt=b.length;B<tt;B++){let nt=b[B];if(m(nt)){let Y=M(R),Ct=i.get(nt).__webglTexture;e.bindTexture(Y,Ct),f(Y),e.unbindTexture()}}}let Ee=[],O=[];function Mn(R){if(R.samples>0){if(se(R)===!1){let b=R.textures,B=R.width,tt=R.height,nt=n.COLOR_BUFFER_BIT,Y=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ct=i.get(R),dt=b.length>1;if(dt)for(let Et=0;Et<b.length;Et++)e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Et=0;Et<b.length;Et++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(nt|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(nt|=n.STENCIL_BUFFER_BIT)),dt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ct.__webglColorRenderbuffer[Et]);let re=i.get(b[Et]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,re,0)}n.blitFramebuffer(0,0,B,tt,0,0,B,tt,nt,n.NEAREST),c===!0&&(Ee.length=0,O.length=0,Ee.push(n.COLOR_ATTACHMENT0+Et),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ee.push(Y),O.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,O)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ee))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),dt)for(let Et=0;Et<b.length;Et++){e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,Ct.__webglColorRenderbuffer[Et]);let re=i.get(b[Et]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,re,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let b=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function ie(R){return Math.min(s.maxSamples,R.samples)}function se(R){let b=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function kt(R){let b=o.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function _e(R,b){let B=R.colorSpace,tt=R.format,nt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==Rr&&B!==es&&(xe.getTransfer(B)===Ce?(tt!==Qn||nt!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),b}function Ot(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=k,this.setTexture2D=st,this.setTexture2DArray=q,this.setTexture3D=at,this.setTextureCube=$,this.rebindTextures=Zt,this.setupRenderTarget=le,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=Mn,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=se}function hv(n,t){function e(i,s=es){let r,o=xe.getTransfer(s);if(i===Li)return n.UNSIGNED_BYTE;if(i===kh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Bh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===cf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===of)return n.BYTE;if(i===af)return n.SHORT;if(i===ho)return n.UNSIGNED_SHORT;if(i===Fh)return n.INT;if(i===Rs)return n.UNSIGNED_INT;if(i===fi)return n.FLOAT;if(i===vo)return n.HALF_FLOAT;if(i===lf)return n.ALPHA;if(i===hf)return n.RGB;if(i===Qn)return n.RGBA;if(i===uf)return n.LUMINANCE;if(i===df)return n.LUMINANCE_ALPHA;if(i===ur)return n.DEPTH_COMPONENT;if(i===vr)return n.DEPTH_STENCIL;if(i===zh)return n.RED;if(i===Hh)return n.RED_INTEGER;if(i===ff)return n.RG;if(i===Vh)return n.RG_INTEGER;if(i===Gh)return n.RGBA_INTEGER;if(i===_a||i===va||i===ya||i===ba)if(o===Ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===_a)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===_a)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===va)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ba)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yl||i===bl||i===Ml||i===Sl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===yl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===bl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ml)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Sl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===El||i===Tl||i===wl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===El||i===Tl)return o===Ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===wl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Al||i===Rl||i===Cl||i===Pl||i===Il||i===Dl||i===Ll||i===Ul||i===Nl||i===Ol||i===Fl||i===kl||i===Bl||i===zl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Al)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Il)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Dl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ll)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ul)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ol)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ma||i===Hl||i===Vl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ma)return o===Ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===pf||i===Gl||i===Wl||i===Xl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ma)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Gl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_r?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var oh=class extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},pe=class extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}},uv={type:"move"},oo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),f=this._getHandJoint(l,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(uv)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new pe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},dv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ah=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new Dn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new mi({vertexShader:dv,fragmentShader:fv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new $t(new ki(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ch=class extends Ui{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null,x=new ah,m=e.getContextAttributes(),f=null,M=null,v=[],_=[],I=new Mt,w=null,C=new _n;C.viewport=new Pe;let P=new _n;P.viewport=new Pe;let S=[C,P],y=new oh,A=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let lt=v[K];return lt===void 0&&(lt=new oo,v[K]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(K){let lt=v[K];return lt===void 0&&(lt=new oo,v[K]=lt),lt.getGripSpace()},this.getHand=function(K){let lt=v[K];return lt===void 0&&(lt=new oo,v[K]=lt),lt.getHandSpace()};function z(K){let lt=_.indexOf(K.inputSource);if(lt===-1)return;let Rt=v[lt];Rt!==void 0&&(Rt.update(K.inputSource,K.frame,l||o),Rt.dispatchEvent({type:K.type,data:K.inputSource}))}function X(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",st);for(let K=0;K<v.length;K++){let lt=_[K];lt!==null&&(_[K]=null,v[K].disconnect(lt))}A=null,k=null,x.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,M=null,ve.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",X),s.addEventListener("inputsourceschange",st),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){let lt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,lt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Ni(p.framebufferWidth,p.framebufferHeight,{format:Qn,type:Li,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let lt=null,Rt=null,pt=null;m.depth&&(pt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=m.stencil?vr:ur,Rt=m.stencil?_r:Rs);let Ft={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Ft),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Ni(d.textureWidth,d.textureHeight,{format:Qn,type:Li,depthTexture:new La(d.textureWidth,d.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ve.setContext(s),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function st(K){for(let lt=0;lt<K.removed.length;lt++){let Rt=K.removed[lt],pt=_.indexOf(Rt);pt>=0&&(_[pt]=null,v[pt].disconnect(Rt))}for(let lt=0;lt<K.added.length;lt++){let Rt=K.added[lt],pt=_.indexOf(Rt);if(pt===-1){for(let Xt=0;Xt<v.length;Xt++)if(Xt>=_.length){_.push(Rt),pt=Xt;break}else if(_[Xt]===null){_[Xt]=Rt,pt=Xt;break}if(pt===-1)break}let Ft=v[pt];Ft&&Ft.connect(Rt)}}let q=new T,at=new T;function $(K,lt,Rt){q.setFromMatrixPosition(lt.matrixWorld),at.setFromMatrixPosition(Rt.matrixWorld);let pt=q.distanceTo(at),Ft=lt.projectionMatrix.elements,Xt=Rt.projectionMatrix.elements,Zt=Ft[14]/(Ft[10]-1),le=Ft[14]/(Ft[10]+1),he=(Ft[9]+1)/Ft[5],Ee=(Ft[9]-1)/Ft[5],O=(Ft[8]-1)/Ft[0],Mn=(Xt[8]+1)/Xt[0],ie=Zt*O,se=Zt*Mn,kt=pt/(-O+Mn),_e=kt*-O;if(lt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(_e),K.translateZ(kt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ft[10]===-1)K.projectionMatrix.copy(lt.projectionMatrix),K.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{let Ot=Zt+kt,R=le+kt,b=ie-_e,B=se+(pt-_e),tt=he*le/R*Ot,nt=Ee*le/R*Ot;K.projectionMatrix.makePerspective(b,B,tt,nt,Ot,R),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function xt(K,lt){lt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(lt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let lt=K.near,Rt=K.far;x.texture!==null&&(x.depthNear>0&&(lt=x.depthNear),x.depthFar>0&&(Rt=x.depthFar)),y.near=P.near=C.near=lt,y.far=P.far=C.far=Rt,(A!==y.near||k!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),A=y.near,k=y.far),C.layers.mask=K.layers.mask|2,P.layers.mask=K.layers.mask|4,y.layers.mask=C.layers.mask|P.layers.mask;let pt=K.parent,Ft=y.cameras;xt(y,pt);for(let Xt=0;Xt<Ft.length;Xt++)xt(Ft[Xt],pt);Ft.length===2?$(y,C,P):y.projectionMatrix.copy(C.projectionMatrix),gt(K,y,pt)};function gt(K,lt,Rt){Rt===null?K.matrix.copy(lt.matrixWorld):(K.matrix.copy(Rt.matrixWorld),K.matrix.invert(),K.matrix.multiply(lt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(lt.projectionMatrix),K.projectionMatrixInverse.copy(lt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=yr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let At=null;function Yt(K,lt){if(h=lt.getViewerPose(l||o),g=lt,h!==null){let Rt=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let pt=!1;Rt.length!==y.cameras.length&&(y.cameras.length=0,pt=!0);for(let Xt=0;Xt<Rt.length;Xt++){let Zt=Rt[Xt],le=null;if(p!==null)le=p.getViewport(Zt);else{let Ee=u.getViewSubImage(d,Zt);le=Ee.viewport,Xt===0&&(t.setRenderTargetTextures(M,Ee.colorTexture,d.ignoreDepthValues?void 0:Ee.depthStencilTexture),t.setRenderTarget(M))}let he=S[Xt];he===void 0&&(he=new _n,he.layers.enable(Xt),he.viewport=new Pe,S[Xt]=he),he.matrix.fromArray(Zt.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(Zt.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(le.x,le.y,le.width,le.height),Xt===0&&(y.matrix.copy(he.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),pt===!0&&y.cameras.push(he)}let Ft=s.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")){let Xt=u.getDepthInformation(Rt[0]);Xt&&Xt.isValid&&Xt.texture&&x.init(t,Xt,s.renderState)}}for(let Rt=0;Rt<v.length;Rt++){let pt=_[Rt],Ft=v[Rt];pt!==null&&Ft!==void 0&&Ft.update(pt,lt,l||o)}At&&At(K,lt),lt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:lt}),g=null}let ve=new yf;ve.setAnimationLoop(Yt),this.setAnimationLoop=function(K){At=K},this.dispose=function(){}}},Ms=new pi,pv=new ye;function mv(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,vf(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,v,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,M,v):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Tn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Tn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let M=t.get(f),v=M.envMap,_=M.envMapRotation;v&&(m.envMap.value=v,Ms.copy(_),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),m.envMapRotation.value.setFromMatrix4(pv.makeRotationFromEuler(Ms)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,M,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=v*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Tn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let M=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function gv(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,v){let _=v.program;i.uniformBlockBinding(M,_)}function l(M,v){let _=s[M.id];_===void 0&&(g(M),_=h(M),s[M.id]=_,M.addEventListener("dispose",m));let I=v.program;i.updateUBOMapping(M,I);let w=t.render.frame;r[M.id]!==w&&(d(M),r[M.id]=w)}function h(M){let v=u();M.__bindingPointIndex=v;let _=n.createBuffer(),I=M.__size,w=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,I,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,_),_}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let v=s[M.id],_=M.uniforms,I=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let w=0,C=_.length;w<C;w++){let P=Array.isArray(_[w])?_[w]:[_[w]];for(let S=0,y=P.length;S<y;S++){let A=P[S];if(p(A,w,S,I)===!0){let k=A.__offset,z=Array.isArray(A.value)?A.value:[A.value],X=0;for(let st=0;st<z.length;st++){let q=z[st],at=x(q);typeof q=="number"||typeof q=="boolean"?(A.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,k+X,A.__data)):q.isMatrix3?(A.__data[0]=q.elements[0],A.__data[1]=q.elements[1],A.__data[2]=q.elements[2],A.__data[3]=0,A.__data[4]=q.elements[3],A.__data[5]=q.elements[4],A.__data[6]=q.elements[5],A.__data[7]=0,A.__data[8]=q.elements[6],A.__data[9]=q.elements[7],A.__data[10]=q.elements[8],A.__data[11]=0):(q.toArray(A.__data,X),X+=at.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(M,v,_,I){let w=M.value,C=v+"_"+_;if(I[C]===void 0)return typeof w=="number"||typeof w=="boolean"?I[C]=w:I[C]=w.clone(),!0;{let P=I[C];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return I[C]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(M){let v=M.uniforms,_=0,I=16;for(let C=0,P=v.length;C<P;C++){let S=Array.isArray(v[C])?v[C]:[v[C]];for(let y=0,A=S.length;y<A;y++){let k=S[y],z=Array.isArray(k.value)?k.value:[k.value];for(let X=0,st=z.length;X<st;X++){let q=z[X],at=x(q),$=_%I,xt=$%at.boundary,gt=$+xt;_+=xt,gt!==0&&I-gt<at.storage&&(_+=I-gt),k.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=_,_+=at.storage}}}let w=_%I;return w>0&&(_+=I-w),M.__size=_,M.__cache={},this}function x(M){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){let v=M.target;v.removeEventListener("dispose",m);let _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(let M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}var Ua=class{constructor(t={}){let{canvas:e=y0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,f=null,M=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Je,this.toneMapping=ss,this.toneMappingExposure=1;let _=this,I=!1,w=0,C=0,P=null,S=-1,y=null,A=new Pe,k=new Pe,z=null,X=new ee(0),st=0,q=e.width,at=e.height,$=1,xt=null,gt=null,At=new Pe(0,0,q,at),Yt=new Pe(0,0,q,at),ve=!1,K=new fo,lt=!1,Rt=!1,pt=new ye,Ft=new ye,Xt=new T,Zt=new Pe,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},he=!1;function Ee(){return P===null?$:1}let O=i;function Mn(E,U){return e.getContext(E,U)}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Uh}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",ft,!1),O===null){let U="webgl2";if(O=Mn(U,E),O===null)throw Mn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ie,se,kt,_e,Ot,R,b,B,tt,nt,Y,Ct,dt,Et,re,ot,Tt,Bt,Ht,yt,oe,zt,fe,L;function ht(){ie=new Dx(O),ie.init(),zt=new hv(O,ie),se=new wx(O,ie,t,zt),kt=new av(O,ie),se.reverseDepthBuffer&&d&&kt.buffers.depth.setReversed(!0),_e=new Nx(O),Ot=new Y_,R=new lv(O,ie,kt,Ot,se,zt,_e),b=new Rx(_),B=new Ix(_),tt=new V0(O),fe=new Ex(O,tt),nt=new Lx(O,tt,_e,fe),Y=new Fx(O,nt,tt,_e),Ht=new Ox(O,se,R),ot=new Ax(Ot),Ct=new q_(_,b,B,ie,se,fe,ot),dt=new mv(_,Ot),Et=new j_,re=new nv(ie),Bt=new Sx(_,b,B,kt,Y,p,c),Tt=new rv(_,Y,se),L=new gv(O,_e,se,kt),yt=new Tx(O,ie,_e),oe=new Ux(O,ie,_e),_e.programs=Ct.programs,_.capabilities=se,_.extensions=ie,_.properties=Ot,_.renderLists=Et,_.shadowMap=Tt,_.state=kt,_.info=_e}ht();let W=new ch(_,O);this.xr=W,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let E=ie.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ie.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(E){E!==void 0&&($=E,this.setSize(q,at,!1))},this.getSize=function(E){return E.set(q,at)},this.setSize=function(E,U,H=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=E,at=U,e.width=Math.floor(E*$),e.height=Math.floor(U*$),H===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(q*$,at*$).floor()},this.setDrawingBufferSize=function(E,U,H){q=E,at=U,$=H,e.width=Math.floor(E*H),e.height=Math.floor(U*H),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(At)},this.setViewport=function(E,U,H,G){E.isVector4?At.set(E.x,E.y,E.z,E.w):At.set(E,U,H,G),kt.viewport(A.copy(At).multiplyScalar($).round())},this.getScissor=function(E){return E.copy(Yt)},this.setScissor=function(E,U,H,G){E.isVector4?Yt.set(E.x,E.y,E.z,E.w):Yt.set(E,U,H,G),kt.scissor(k.copy(Yt).multiplyScalar($).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(E){kt.setScissorTest(ve=E)},this.setOpaqueSort=function(E){xt=E},this.setTransparentSort=function(E){gt=E},this.getClearColor=function(E){return E.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(E=!0,U=!0,H=!0){let G=0;if(E){let F=!1;if(P!==null){let ct=P.texture.format;F=ct===Gh||ct===Vh||ct===Hh}if(F){let ct=P.texture.type,_t=ct===Li||ct===Rs||ct===ho||ct===_r||ct===kh||ct===Bh,Pt=Bt.getClearColor(),It=Bt.getClearAlpha(),Wt=Pt.r,Lt=Pt.g,wt=Pt.b;_t?(g[0]=Wt,g[1]=Lt,g[2]=wt,g[3]=It,O.clearBufferuiv(O.COLOR,0,g)):(x[0]=Wt,x[1]=Lt,x[2]=wt,x[3]=It,O.clearBufferiv(O.COLOR,0,x))}else G|=O.COLOR_BUFFER_BIT}U&&(G|=O.DEPTH_BUFFER_BIT),H&&(G|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),Et.dispose(),re.dispose(),Ot.dispose(),b.dispose(),B.dispose(),Y.dispose(),fe.dispose(),L.dispose(),Ct.dispose(),W.dispose(),W.removeEventListener("sessionstart",No),W.removeEventListener("sessionend",Oo),Mi.stop()};function Z(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let E=_e.autoReset,U=Tt.enabled,H=Tt.autoUpdate,G=Tt.needsUpdate,F=Tt.type;ht(),_e.autoReset=E,Tt.enabled=U,Tt.autoUpdate=H,Tt.needsUpdate=G,Tt.type=F}function ft(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Gt(E){let U=E.target;U.removeEventListener("dispose",Gt),Ae(U)}function Ae(E){Ze(E),Ot.remove(E)}function Ze(E){let U=Ot.get(E).programs;U!==void 0&&(U.forEach(function(H){Ct.releaseProgram(H)}),E.isShaderMaterial&&Ct.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,H,G,F,ct){U===null&&(U=le);let _t=F.isMesh&&F.matrixWorld.determinant()<0,Pt=je(E,U,H,G,F);kt.setMaterial(G,_t);let It=H.index,Wt=1;if(G.wireframe===!0){if(It=nt.getWireframeAttribute(H),It===void 0)return;Wt=2}let Lt=H.drawRange,wt=H.attributes.position,ue=Lt.start*Wt,we=(Lt.start+Lt.count)*Wt;ct!==null&&(ue=Math.max(ue,ct.start*Wt),we=Math.min(we,(ct.start+ct.count)*Wt)),It!==null?(ue=Math.max(ue,0),we=Math.min(we,It.count)):wt!=null&&(ue=Math.max(ue,0),we=Math.min(we,wt.count));let Re=we-ue;if(Re<0||Re===1/0)return;fe.setup(F,G,Pt,H,It);let Ke,me=yt;if(It!==null&&(Ke=tt.get(It),me=oe,me.setIndex(Ke)),F.isMesh)G.wireframe===!0?(kt.setLineWidth(G.wireframeLinewidth*Ee()),me.setMode(O.LINES)):me.setMode(O.TRIANGLES);else if(F.isLine){let bt=G.linewidth;bt===void 0&&(bt=1),kt.setLineWidth(bt*Ee()),F.isLineSegments?me.setMode(O.LINES):F.isLineLoop?me.setMode(O.LINE_LOOP):me.setMode(O.LINE_STRIP)}else F.isPoints?me.setMode(O.POINTS):F.isSprite&&me.setMode(O.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)me.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))me.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let bt=F._multiDrawStarts,sn=F._multiDrawCounts,ge=F._multiDrawCount,rn=It?tt.get(It).bytesPerElement:1,Nn=Ot.get(G).currentProgram.getUniforms();for(let fn=0;fn<ge;fn++)Nn.setValue(O,"_gl_DrawID",fn),me.render(bt[fn]/rn,sn[fn])}else if(F.isInstancedMesh)me.renderInstances(ue,Re,F.count);else if(H.isInstancedBufferGeometry){let bt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,sn=Math.min(H.instanceCount,bt);me.renderInstances(ue,Re,sn)}else me.render(ue,Re)};function ae(E,U,H){E.transparent===!0&&E.side===Pi&&E.forceSinglePass===!1?(E.side=Tn,E.needsUpdate=!0,We(E,U,H),E.side=rs,E.needsUpdate=!0,We(E,U,H),E.side=Pi):We(E,U,H)}this.compile=function(E,U,H=null){H===null&&(H=E),f=re.get(H),f.init(U),v.push(f),H.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),E!==H&&E.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();let G=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let ct=F.material;if(ct)if(Array.isArray(ct))for(let _t=0;_t<ct.length;_t++){let Pt=ct[_t];ae(Pt,H,F),G.add(Pt)}else ae(ct,H,F),G.add(ct)}),v.pop(),f=null,G},this.compileAsync=function(E,U,H=null){let G=this.compile(E,U,H);return new Promise(F=>{function ct(){if(G.forEach(function(_t){Ot.get(_t).currentProgram.isReady()&&G.delete(_t)}),G.size===0){F(E);return}setTimeout(ct,10)}ie.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let Un=null;function qn(E){Un&&Un(E)}function No(){Mi.stop()}function Oo(){Mi.start()}let Mi=new yf;Mi.setAnimationLoop(qn),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(E){Un=E,W.setAnimationLoop(E),E===null?Mi.stop():Mi.start()},W.addEventListener("sessionstart",No),W.addEventListener("sessionend",Oo),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,U,P),f=re.get(E,v.length),f.init(U),v.push(f),Ft.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),K.setFromProjectionMatrix(Ft),Rt=this.localClippingEnabled,lt=ot.init(this.clippingPlanes,Rt),m=Et.get(E,M.length),m.init(),M.push(m),W.enabled===!0&&W.isPresenting===!0){let ct=_.xr.getDepthSensingMesh();ct!==null&&qr(ct,U,-1/0,_.sortObjects)}qr(E,U,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(xt,gt),he=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,he&&Bt.addToRenderList(m,E),this.info.render.frame++,lt===!0&&ot.beginShadows();let H=f.state.shadowsArray;Tt.render(H,E,U),lt===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=m.opaque,F=m.transmissive;if(f.setupLights(),U.isArrayCamera){let ct=U.cameras;if(F.length>0)for(let _t=0,Pt=ct.length;_t<Pt;_t++){let It=ct[_t];Fo(G,F,E,It)}he&&Bt.render(E);for(let _t=0,Pt=ct.length;_t<Pt;_t++){let It=ct[_t];Yr(m,E,It,It.viewport)}}else F.length>0&&Fo(G,F,E,U),he&&Bt.render(E),Yr(m,E,U);P!==null&&(R.updateMultisampleRenderTarget(P),R.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(_,E,U),fe.resetDefaultState(),S=-1,y=null,v.pop(),v.length>0?(f=v[v.length-1],lt===!0&&ot.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function qr(E,U,H,G){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||K.intersectsSprite(E)){G&&Zt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ft);let _t=Y.update(E),Pt=E.material;Pt.visible&&m.push(E,_t,Pt,H,Zt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||K.intersectsObject(E))){let _t=Y.update(E),Pt=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Zt.copy(E.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Zt.copy(_t.boundingSphere.center)),Zt.applyMatrix4(E.matrixWorld).applyMatrix4(Ft)),Array.isArray(Pt)){let It=_t.groups;for(let Wt=0,Lt=It.length;Wt<Lt;Wt++){let wt=It[Wt],ue=Pt[wt.materialIndex];ue&&ue.visible&&m.push(E,_t,ue,H,Zt.z,wt)}}else Pt.visible&&m.push(E,_t,Pt,H,Zt.z,null)}}let ct=E.children;for(let _t=0,Pt=ct.length;_t<Pt;_t++)qr(ct[_t],U,H,G)}function Yr(E,U,H,G){let F=E.opaque,ct=E.transmissive,_t=E.transparent;f.setupLightsView(H),lt===!0&&ot.setGlobalState(_.clippingPlanes,H),G&&kt.viewport(A.copy(G)),F.length>0&&Te(F,U,H),ct.length>0&&Te(ct,U,H),_t.length>0&&Te(_t,U,H),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function Fo(E,U,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[G.id]===void 0&&(f.state.transmissionRenderTarget[G.id]=new Ni(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?vo:Li,minFilter:As,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xe.workingColorSpace}));let ct=f.state.transmissionRenderTarget[G.id],_t=G.viewport||A;ct.setSize(_t.z,_t.w);let Pt=_.getRenderTarget();_.setRenderTarget(ct),_.getClearColor(X),st=_.getClearAlpha(),st<1&&_.setClearColor(16777215,.5),_.clear(),he&&Bt.render(H);let It=_.toneMapping;_.toneMapping=ss;let Wt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),f.setupLightsView(G),lt===!0&&ot.setGlobalState(_.clippingPlanes,G),Te(E,H,G),R.updateMultisampleRenderTarget(ct),R.updateRenderTargetMipmap(ct),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let wt=0,ue=U.length;wt<ue;wt++){let we=U[wt],Re=we.object,Ke=we.geometry,me=we.material,bt=we.group;if(me.side===Pi&&Re.layers.test(G.layers)){let sn=me.side;me.side=Tn,me.needsUpdate=!0,Fe(Re,H,G,Ke,me,bt),me.side=sn,me.needsUpdate=!0,Lt=!0}}Lt===!0&&(R.updateMultisampleRenderTarget(ct),R.updateRenderTargetMipmap(ct))}_.setRenderTarget(Pt),_.setClearColor(X,st),Wt!==void 0&&(G.viewport=Wt),_.toneMapping=It}function Te(E,U,H){let G=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ct=E.length;F<ct;F++){let _t=E[F],Pt=_t.object,It=_t.geometry,Wt=G===null?_t.material:G,Lt=_t.group;Pt.layers.test(H.layers)&&Fe(Pt,U,H,It,Wt,Lt)}}function Fe(E,U,H,G,F,ct){E.onBeforeRender(_,U,H,G,F,ct),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(_,U,H,G,E,ct),F.transparent===!0&&F.side===Pi&&F.forceSinglePass===!1?(F.side=Tn,F.needsUpdate=!0,_.renderBufferDirect(H,U,G,F,E,ct),F.side=rs,F.needsUpdate=!0,_.renderBufferDirect(H,U,G,F,E,ct),F.side=Pi):_.renderBufferDirect(H,U,G,F,E,ct),E.onAfterRender(_,U,H,G,F,ct)}function We(E,U,H){U.isScene!==!0&&(U=le);let G=Ot.get(E),F=f.state.lights,ct=f.state.shadowsArray,_t=F.state.version,Pt=Ct.getParameters(E,F.state,ct,U,H),It=Ct.getProgramCacheKey(Pt),Wt=G.programs;G.environment=E.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(E.isMeshStandardMaterial?B:b).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Wt===void 0&&(E.addEventListener("dispose",Gt),Wt=new Map,G.programs=Wt);let Lt=Wt.get(It);if(Lt!==void 0){if(G.currentProgram===Lt&&G.lightsStateVersion===_t)return Xs(E,Pt),Lt}else Pt.uniforms=Ct.getUniforms(E),E.onBeforeCompile(Pt,_),Lt=Ct.acquireProgram(Pt,It),Wt.set(It,Lt),G.uniforms=Pt.uniforms;let wt=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(wt.clippingPlanes=ot.uniform),Xs(E,Pt),G.needsLights=ko(E),G.lightsStateVersion=_t,G.needsLights&&(wt.ambientLightColor.value=F.state.ambient,wt.lightProbe.value=F.state.probe,wt.directionalLights.value=F.state.directional,wt.directionalLightShadows.value=F.state.directionalShadow,wt.spotLights.value=F.state.spot,wt.spotLightShadows.value=F.state.spotShadow,wt.rectAreaLights.value=F.state.rectArea,wt.ltc_1.value=F.state.rectAreaLTC1,wt.ltc_2.value=F.state.rectAreaLTC2,wt.pointLights.value=F.state.point,wt.pointLightShadows.value=F.state.pointShadow,wt.hemisphereLights.value=F.state.hemi,wt.directionalShadowMap.value=F.state.directionalShadowMap,wt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,wt.spotShadowMap.value=F.state.spotShadowMap,wt.spotLightMatrix.value=F.state.spotLightMatrix,wt.spotLightMap.value=F.state.spotLightMap,wt.pointShadowMap.value=F.state.pointShadowMap,wt.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Lt,G.uniformsList=null,Lt}function Si(E){if(E.uniformsList===null){let U=E.currentProgram.getUniforms();E.uniformsList=pr.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Xs(E,U){let H=Ot.get(E);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function je(E,U,H,G,F){U.isScene!==!0&&(U=le),R.resetTextureUnits();let ct=U.fog,_t=G.isMeshStandardMaterial?U.environment:null,Pt=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Rr,It=(G.isMeshStandardMaterial?B:b).get(G.envMap||_t),Wt=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Lt=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),wt=!!H.morphAttributes.position,ue=!!H.morphAttributes.normal,we=!!H.morphAttributes.color,Re=ss;G.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Re=_.toneMapping);let Ke=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,me=Ke!==void 0?Ke.length:0,bt=Ot.get(G),sn=f.state.lights;if(lt===!0&&(Rt===!0||E!==y)){let In=E===y&&G.id===S;ot.setState(G,E,In)}let ge=!1;G.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==sn.state.version||bt.outputColorSpace!==Pt||F.isBatchedMesh&&bt.batching===!1||!F.isBatchedMesh&&bt.batching===!0||F.isBatchedMesh&&bt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&bt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&bt.instancing===!1||!F.isInstancedMesh&&bt.instancing===!0||F.isSkinnedMesh&&bt.skinning===!1||!F.isSkinnedMesh&&bt.skinning===!0||F.isInstancedMesh&&bt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&bt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&bt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&bt.instancingMorph===!1&&F.morphTexture!==null||bt.envMap!==It||G.fog===!0&&bt.fog!==ct||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==ot.numPlanes||bt.numIntersection!==ot.numIntersection)||bt.vertexAlphas!==Wt||bt.vertexTangents!==Lt||bt.morphTargets!==wt||bt.morphNormals!==ue||bt.morphColors!==we||bt.toneMapping!==Re||bt.morphTargetsCount!==me)&&(ge=!0):(ge=!0,bt.__version=G.version);let rn=bt.currentProgram;ge===!0&&(rn=We(G,U,F));let Nn=!1,fn=!1,qi=!1,de=rn.getUniforms(),Pn=bt.uniforms;if(kt.useProgram(rn.program)&&(Nn=!0,fn=!0,qi=!0),G.id!==S&&(S=G.id,fn=!0),Nn||y!==E){kt.buffers.depth.getReversed()?(pt.copy(E.projectionMatrix),M0(pt),S0(pt),de.setValue(O,"projectionMatrix",pt)):de.setValue(O,"projectionMatrix",E.projectionMatrix),de.setValue(O,"viewMatrix",E.matrixWorldInverse);let li=de.map.cameraPosition;li!==void 0&&li.setValue(O,Xt.setFromMatrixPosition(E.matrixWorld)),se.logarithmicDepthBuffer&&de.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&de.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,fn=!0,qi=!0)}if(F.isSkinnedMesh){de.setOptional(O,F,"bindMatrix"),de.setOptional(O,F,"bindMatrixInverse");let In=F.skeleton;In&&(In.boneTexture===null&&In.computeBoneTexture(),de.setValue(O,"boneTexture",In.boneTexture,R))}F.isBatchedMesh&&(de.setOptional(O,F,"batchingTexture"),de.setValue(O,"batchingTexture",F._matricesTexture,R),de.setOptional(O,F,"batchingIdTexture"),de.setValue(O,"batchingIdTexture",F._indirectTexture,R),de.setOptional(O,F,"batchingColorTexture"),F._colorsTexture!==null&&de.setValue(O,"batchingColorTexture",F._colorsTexture,R));let gs=H.morphAttributes;if((gs.position!==void 0||gs.normal!==void 0||gs.color!==void 0)&&Ht.update(F,H,rn),(fn||bt.receiveShadow!==F.receiveShadow)&&(bt.receiveShadow=F.receiveShadow,de.setValue(O,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Pn.envMap.value=It,Pn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(Pn.envMapIntensity.value=U.environmentIntensity),fn&&(de.setValue(O,"toneMappingExposure",_.toneMappingExposure),bt.needsLights&&$i(Pn,qi),ct&&G.fog===!0&&dt.refreshFogUniforms(Pn,ct),dt.refreshMaterialUniforms(Pn,G,$,at,f.state.transmissionRenderTarget[E.id]),pr.upload(O,Si(bt),Pn,R)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(pr.upload(O,Si(bt),Pn,R),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&de.setValue(O,"center",F.center),de.setValue(O,"modelViewMatrix",F.modelViewMatrix),de.setValue(O,"normalMatrix",F.normalMatrix),de.setValue(O,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let In=G.uniformsGroups;for(let li=0,hi=In.length;li<hi;li++){let $s=In[li];L.update($s,rn),L.bind($s,rn)}}return rn}function $i(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function ko(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,U,H){Ot.get(E.texture).__webglTexture=U,Ot.get(E.depthTexture).__webglTexture=H;let G=Ot.get(E);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){let H=Ot.get(E);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,H=0){P=E,w=U,C=H;let G=!0,F=null,ct=!1,_t=!1;if(E){let It=Ot.get(E);if(It.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(O.FRAMEBUFFER,null),G=!1;else if(It.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(It.__hasExternalTextures)R.rebindTextures(E,Ot.get(E.texture).__webglTexture,Ot.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let wt=E.depthTexture;if(It.__boundDepthTexture!==wt){if(wt!==null&&Ot.has(wt)&&(E.width!==wt.image.width||E.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}let Wt=E.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(_t=!0);let Lt=Ot.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Lt[U])?F=Lt[U][H]:F=Lt[U],ct=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?F=Ot.get(E).__webglMultisampledFramebuffer:Array.isArray(Lt)?F=Lt[H]:F=Lt,A.copy(E.viewport),k.copy(E.scissor),z=E.scissorTest}else A.copy(At).multiplyScalar($).floor(),k.copy(Yt).multiplyScalar($).floor(),z=ve;if(kt.bindFramebuffer(O.FRAMEBUFFER,F)&&G&&kt.drawBuffers(E,F),kt.viewport(A),kt.scissor(k),kt.setScissorTest(z),ct){let It=Ot.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,It.__webglTexture,H)}else if(_t){let It=Ot.get(E.texture),Wt=U||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,It.__webglTexture,H||0,Wt)}S=-1},this.readRenderTargetPixels=function(E,U,H,G,F,ct,_t){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Ot.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_t!==void 0&&(Pt=Pt[_t]),Pt){kt.bindFramebuffer(O.FRAMEBUFFER,Pt);try{let It=E.texture,Wt=It.format,Lt=It.type;if(!se.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-G&&H>=0&&H<=E.height-F&&O.readPixels(U,H,G,F,zt.convert(Wt),zt.convert(Lt),ct)}finally{let It=P!==null?Ot.get(P).__webglFramebuffer:null;kt.bindFramebuffer(O.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(E,U,H,G,F,ct,_t){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=Ot.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_t!==void 0&&(Pt=Pt[_t]),Pt){let It=E.texture,Wt=It.format,Lt=It.type;if(!se.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-G&&H>=0&&H<=E.height-F){kt.bindFramebuffer(O.FRAMEBUFFER,Pt);let wt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,wt),O.bufferData(O.PIXEL_PACK_BUFFER,ct.byteLength,O.STREAM_READ),O.readPixels(U,H,G,F,zt.convert(Wt),zt.convert(Lt),0);let ue=P!==null?Ot.get(P).__webglFramebuffer:null;kt.bindFramebuffer(O.FRAMEBUFFER,ue);let we=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await b0(O,we,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,wt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ct),O.deleteBuffer(wt),O.deleteSync(we),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,H=0){E.isTexture!==!0&&(io("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);let G=Math.pow(2,-H),F=Math.floor(E.image.width*G),ct=Math.floor(E.image.height*G),_t=U!==null?U.x:0,Pt=U!==null?U.y:0;R.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,H,0,0,_t,Pt,F,ct),kt.unbindTexture()},this.copyTextureToTexture=function(E,U,H=null,G=null,F=0){E.isTexture!==!0&&(io("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,E=arguments[1],U=arguments[2],F=arguments[3]||0,H=null);let ct,_t,Pt,It,Wt,Lt,wt,ue,we,Re=E.isCompressedTexture?E.mipmaps[F]:E.image;H!==null?(ct=H.max.x-H.min.x,_t=H.max.y-H.min.y,Pt=H.isBox3?H.max.z-H.min.z:1,It=H.min.x,Wt=H.min.y,Lt=H.isBox3?H.min.z:0):(ct=Re.width,_t=Re.height,Pt=Re.depth||1,It=0,Wt=0,Lt=0),G!==null?(wt=G.x,ue=G.y,we=G.z):(wt=0,ue=0,we=0);let Ke=zt.convert(U.format),me=zt.convert(U.type),bt;U.isData3DTexture?(R.setTexture3D(U,0),bt=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(R.setTexture2DArray(U,0),bt=O.TEXTURE_2D_ARRAY):(R.setTexture2D(U,0),bt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);let sn=O.getParameter(O.UNPACK_ROW_LENGTH),ge=O.getParameter(O.UNPACK_IMAGE_HEIGHT),rn=O.getParameter(O.UNPACK_SKIP_PIXELS),Nn=O.getParameter(O.UNPACK_SKIP_ROWS),fn=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Re.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Re.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,It),O.pixelStorei(O.UNPACK_SKIP_ROWS,Wt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Lt);let qi=E.isDataArrayTexture||E.isData3DTexture,de=U.isDataArrayTexture||U.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let Pn=Ot.get(E),gs=Ot.get(U),In=Ot.get(Pn.__renderTarget),li=Ot.get(gs.__renderTarget);kt.bindFramebuffer(O.READ_FRAMEBUFFER,In.__webglFramebuffer),kt.bindFramebuffer(O.DRAW_FRAMEBUFFER,li.__webglFramebuffer);for(let hi=0;hi<Pt;hi++)qi&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ot.get(E).__webglTexture,F,Lt+hi),E.isDepthTexture?(de&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ot.get(U).__webglTexture,F,we+hi),O.blitFramebuffer(It,Wt,ct,_t,wt,ue,ct,_t,O.DEPTH_BUFFER_BIT,O.NEAREST)):de?O.copyTexSubImage3D(bt,F,wt,ue,we+hi,It,Wt,ct,_t):O.copyTexSubImage2D(bt,F,wt,ue,we+hi,It,Wt,ct,_t);kt.bindFramebuffer(O.READ_FRAMEBUFFER,null),kt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else de?E.isDataTexture||E.isData3DTexture?O.texSubImage3D(bt,F,wt,ue,we,ct,_t,Pt,Ke,me,Re.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(bt,F,wt,ue,we,ct,_t,Pt,Ke,Re.data):O.texSubImage3D(bt,F,wt,ue,we,ct,_t,Pt,Ke,me,Re):E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,F,wt,ue,ct,_t,Ke,me,Re.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,F,wt,ue,Re.width,Re.height,Ke,Re.data):O.texSubImage2D(O.TEXTURE_2D,F,wt,ue,ct,_t,Ke,me,Re);O.pixelStorei(O.UNPACK_ROW_LENGTH,sn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ge),O.pixelStorei(O.UNPACK_SKIP_PIXELS,rn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Nn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,fn),F===0&&U.generateMipmaps&&O.generateMipmap(bt),kt.unbindTexture()},this.copyTextureToTexture3D=function(E,U,H=null,G=null,F=0){return E.isTexture!==!0&&(io("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,E=arguments[2],U=arguments[3],F=arguments[4]||0),io('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,U,H,G,F)},this.initRenderTarget=function(E){Ot.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),kt.unbindTexture()},this.resetState=function(){w=0,C=0,P=null,kt.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=xe._getDrawingBufferColorSpace(t),e.unpackColorSpace=xe._getUnpackColorSpace()}};var Sr=class extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pi,this.environmentIntensity=1,this.environmentRotation=new pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var lh=class extends Dn{constructor(t=null,e=1,i=1,s,r,o,a,c,l=kn,h=kn,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Na=class extends vn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ar=new ye,Vd=new ye,aa=[],Gd=new Wn,xv=new ye,Qr=new $t,to=new Oi,Oa=class extends $t{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Na(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,xv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ar),Gd.copy(t.boundingBox).applyMatrix4(ar),this.boundingBox.union(Gd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Oi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ar),to.copy(t.boundingSphere).applyMatrix4(ar),this.boundingSphere.union(to)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Qr.geometry=this.geometry,Qr.material=this.material,Qr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),to.copy(this.boundingSphere),to.applyMatrix4(i),t.ray.intersectsSphere(to)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ar),Vd.multiplyMatrices(i,ar),Qr.matrixWorld=Vd,Qr.raycast(t,aa);for(let o=0,a=aa.length;o<a;o++){let c=aa[o];c.instanceId=r,c.object=this,e.push(c)}aa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Na(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new lh(new Float32Array(s*this.count),s,this.count,zh,fi));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Er=class extends Fi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Fa=new T,ka=new T,Wd=new ye,eo=new os,ca=new Oi,el=new T,Xd=new T,hh=class extends Qe{constructor(t=new gn,e=new Er){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Fa.fromBufferAttribute(e,s-1),ka.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Fa.distanceTo(ka);t.setAttribute("lineDistance",new Ue(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ca.copy(i.boundingSphere),ca.applyMatrix4(s),ca.radius+=r,t.ray.intersectsSphere(ca)===!1)return;Wd.copy(s).invert(),eo.copy(t.ray).applyMatrix4(Wd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=l){let f=h.getX(x),M=h.getX(x+1),v=la(this,t,eo,c,f,M);v&&e.push(v)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(p),f=la(this,t,eo,c,x,m);f&&e.push(f)}}else{let p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=l){let f=la(this,t,eo,c,x,x+1);f&&e.push(f)}if(this.isLineLoop){let x=la(this,t,eo,c,g-1,p);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function la(n,t,e,i,s,r){let o=n.geometry.attributes.position;if(Fa.fromBufferAttribute(o,s),ka.fromBufferAttribute(o,r),e.distanceSqToSegment(Fa,ka,el,Xd)>i)return;el.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(el);if(!(c<t.near||c>t.far))return{distance:c,point:Xd.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var $d=new T,qd=new T,po=class extends hh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)$d.fromBufferAttribute(e,s),qd.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+$d.distanceTo(qd);t.setAttribute("lineDistance",new Ue(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var mo=class extends Fi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Yd=new ye,uh=new os,ha=new Oi,ua=new T,Ba=class extends Qe{constructor(t=new gn,e=new mo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ha.copy(i.boundingSphere),ha.applyMatrix4(s),ha.radius+=r,t.ray.intersectsSphere(ha)===!1)return;Yd.copy(s).invert(),uh.copy(t.ray).applyMatrix4(Yd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){let d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=d,x=p;g<x;g++){let m=l.getX(g);ua.fromBufferAttribute(u,m),Zd(ua,m,c,s,t,e,this)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,x=p;g<x;g++)ua.fromBufferAttribute(u,g),Zd(ua,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Zd(n,t,e,i,s,r,o){let a=uh.distanceSqToPoint(n);if(a<e){let c=new T;uh.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var gi=class extends Dn{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ei=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Mt:new T);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new T,s=[],r=[],o=[],a=new T,c=new ye;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new T)}r[0]=new T,o[0]=new T;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(mn(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(mn(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},za=class extends ei{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Mt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},dh=class extends za{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function $h(){let n=0,t=0,e=0,i=0;function s(r,o,a,c){n=r,t=a,e=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var da=new T,nl=new $h,il=new $h,sl=new $h,Tr=class extends ei{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new T){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(da.subVectors(s[0],s[1]).add(s[0]),l=da);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(da.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=da),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),nl.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,x,m),il.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,x,m),sl.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(nl.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),il.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),sl.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(nl.calc(c),il.calc(c),sl.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new T().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function jd(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+r+o)*c+(-3*e+3*i-2*r-o)*a+r*n+e}function _v(n,t){let e=1-n;return e*e*t}function vv(n,t){return 2*(1-n)*n*t}function yv(n,t){return n*n*t}function ao(n,t,e,i){return _v(n,t)+vv(n,e)+yv(n,i)}function bv(n,t){let e=1-n;return e*e*e*t}function Mv(n,t){let e=1-n;return 3*e*e*n*t}function Sv(n,t){return 3*(1-n)*n*n*t}function Ev(n,t){return n*n*n*t}function co(n,t,e,i,s){return bv(n,t)+Mv(n,e)+Sv(n,i)+Ev(n,s)}var fh=class extends ei{constructor(t=new Mt,e=new Mt,i=new Mt,s=new Mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Mt){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(co(t,s.x,r.x,o.x,a.x),co(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ph=class extends ei{constructor(t=new T,e=new T,i=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new T){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(co(t,s.x,r.x,o.x,a.x),co(t,s.y,r.y,o.y,a.y),co(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},mh=class extends ei{constructor(t=new Mt,e=new Mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Mt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},gh=class extends ei{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xh=class extends ei{constructor(t=new Mt,e=new Mt,i=new Mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Mt){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(ao(t,s.x,r.x,o.x),ao(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ha=class extends ei{constructor(t=new T,e=new T,i=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new T){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(ao(t,s.x,r.x,o.x),ao(t,s.y,r.y,o.y),ao(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_h=class extends ei{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Mt){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(jd(a,c.x,l.x,h.x,u.x),jd(a,c.y,l.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new Mt().fromArray(s))}return this}},Tv=Object.freeze({__proto__:null,ArcCurve:dh,CatmullRomCurve3:Tr,CubicBezierCurve:fh,CubicBezierCurve3:ph,EllipseCurve:za,LineCurve:mh,LineCurve3:gh,QuadraticBezierCurve:xh,QuadraticBezierCurve3:Ha,SplineCurve:_h});var Va=class n extends gn{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,x=[],m=i/2,f=0;M(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ue(u,3)),this.setAttribute("normal",new Ue(d,3)),this.setAttribute("uv",new Ue(p,2));function M(){let _=new T,I=new T,w=0,C=(e-t)/i;for(let P=0;P<=r;P++){let S=[],y=P/r,A=y*(e-t)+t;for(let k=0;k<=s;k++){let z=k/s,X=z*c+a,st=Math.sin(X),q=Math.cos(X);I.x=A*st,I.y=-y*i+m,I.z=A*q,u.push(I.x,I.y,I.z),_.set(st,C,q).normalize(),d.push(_.x,_.y,_.z),p.push(z,1-y),S.push(g++)}x.push(S)}for(let P=0;P<s;P++)for(let S=0;S<r;S++){let y=x[S][P],A=x[S+1][P],k=x[S+1][P+1],z=x[S][P+1];(t>0||S!==0)&&(h.push(y,A,z),w+=3),(e>0||S!==r-1)&&(h.push(A,k,z),w+=3)}l.addGroup(f,w,0),f+=w}function v(_){let I=g,w=new Mt,C=new T,P=0,S=_===!0?t:e,y=_===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,m*y,0),d.push(0,y,0),p.push(.5,.5),g++;let A=g;for(let k=0;k<=s;k++){let X=k/s*c+a,st=Math.cos(X),q=Math.sin(X);C.x=S*q,C.y=m*y,C.z=S*st,u.push(C.x,C.y,C.z),d.push(0,y,0),w.x=st*.5+.5,w.y=q*.5*y+.5,p.push(w.x,w.y),g++}for(let k=0;k<s;k++){let z=I+k,X=A+k;_===!0?h.push(X,X+1,z):h.push(X+1,X,z),P+=3}l.addGroup(f,P,_===!0?1:2),f+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var vh=class n extends gn{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new Ue(r,3)),this.setAttribute("normal",new Ue(r.slice(),3)),this.setAttribute("uv",new Ue(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let v=new T,_=new T,I=new T;for(let w=0;w<e.length;w+=3)p(e[w+0],v),p(e[w+1],_),p(e[w+2],I),c(v,_,I,M)}function c(M,v,_,I){let w=I+1,C=[];for(let P=0;P<=w;P++){C[P]=[];let S=M.clone().lerp(_,P/w),y=v.clone().lerp(_,P/w),A=w-P;for(let k=0;k<=A;k++)k===0&&P===w?C[P][k]=S:C[P][k]=S.clone().lerp(y,k/A)}for(let P=0;P<w;P++)for(let S=0;S<2*(w-P)-1;S++){let y=Math.floor(S/2);S%2===0?(d(C[P][y+1]),d(C[P+1][y]),d(C[P][y])):(d(C[P][y+1]),d(C[P+1][y+1]),d(C[P+1][y]))}}function l(M){let v=new T;for(let _=0;_<r.length;_+=3)v.x=r[_+0],v.y=r[_+1],v.z=r[_+2],v.normalize().multiplyScalar(M),r[_+0]=v.x,r[_+1]=v.y,r[_+2]=v.z}function h(){let M=new T;for(let v=0;v<r.length;v+=3){M.x=r[v+0],M.y=r[v+1],M.z=r[v+2];let _=m(M)/2/Math.PI+.5,I=f(M)/Math.PI+.5;o.push(_,1-I)}g(),u()}function u(){for(let M=0;M<o.length;M+=6){let v=o[M+0],_=o[M+2],I=o[M+4],w=Math.max(v,_,I),C=Math.min(v,_,I);w>.9&&C<.1&&(v<.2&&(o[M+0]+=1),_<.2&&(o[M+2]+=1),I<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function p(M,v){let _=M*3;v.x=t[_+0],v.y=t[_+1],v.z=t[_+2]}function g(){let M=new T,v=new T,_=new T,I=new T,w=new Mt,C=new Mt,P=new Mt;for(let S=0,y=0;S<r.length;S+=9,y+=6){M.set(r[S+0],r[S+1],r[S+2]),v.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),w.set(o[y+0],o[y+1]),C.set(o[y+2],o[y+3]),P.set(o[y+4],o[y+5]),I.copy(M).add(v).add(_).divideScalar(3);let A=m(I);x(w,y+0,M,A),x(C,y+2,v,A),x(P,y+4,_,A)}}function x(M,v,_,I){I<0&&M.x===1&&(o[v]=M.x-1),_.x===0&&_.z===0&&(o[v]=I/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}};var fa=new T,pa=new T,rl=new T,ma=new ns,Ga=class extends gn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(dr*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);let{a:x,b:m,c:f}=ma;if(x.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),f.fromBufferAttribute(a,l[2]),ma.getNormal(rl),u[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let M=0;M<3;M++){let v=(M+1)%3,_=u[M],I=u[v],w=ma[h[M]],C=ma[h[v]],P=`${_}_${I}`,S=`${I}_${_}`;S in d&&d[S]?(rl.dot(d[S].normal)<=r&&(p.push(w.x,w.y,w.z),p.push(C.x,C.y,C.z)),d[S]=null):P in d||(d[P]={index0:l[M],index1:l[v],normal:rl.clone()})}}for(let g in d)if(d[g]){let{index0:x,index1:m}=d[g];fa.fromBufferAttribute(a,x),pa.fromBufferAttribute(a,m),p.push(fa.x,fa.y,fa.z),p.push(pa.x,pa.y,pa.z)}this.setAttribute("position",new Ue(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var Wa=class n extends vh{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var Xa=class n extends gn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new T,d=new T,p=[],g=[],x=[],m=[];for(let f=0;f<=i;f++){let M=[],v=f/i,_=0;f===0&&o===0?_=.5/e:f===i&&c===Math.PI&&(_=-.5/e);for(let I=0;I<=e;I++){let w=I/e;u.x=-t*Math.cos(s+w*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(s+w*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(w+_,1-v),M.push(l++)}h.push(M)}for(let f=0;f<i;f++)for(let M=0;M<e;M++){let v=h[f][M+1],_=h[f][M],I=h[f+1][M],w=h[f+1][M+1];(f!==0||o>0)&&p.push(v,_,w),(f!==i-1||c<Math.PI)&&p.push(_,I,w)}this.setIndex(p),this.setAttribute("position",new Ue(g,3)),this.setAttribute("normal",new Ue(x,3)),this.setAttribute("uv",new Ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var $a=class n extends gn{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new T,u=new T,d=new T;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){let x=g/s*r,m=p/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){let x=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,M=(s+1)*p+g;o.push(x,m,M),o.push(m,f,M)}this.setIndex(o),this.setAttribute("position",new Ue(a,3)),this.setAttribute("normal",new Ue(c,3)),this.setAttribute("uv",new Ue(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var go=class n extends gn{constructor(t=new Ha(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new T,c=new T,l=new Mt,h=new T,u=[],d=[],p=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Ue(u,3)),this.setAttribute("normal",new Ue(d,3)),this.setAttribute("uv",new Ue(p,2));function x(){for(let v=0;v<e;v++)m(v);m(r===!1?e:0),M(),f()}function m(v){h=t.getPointAt(v/e,h);let _=o.normals[v],I=o.binormals[v];for(let w=0;w<=s;w++){let C=w/s*Math.PI*2,P=Math.sin(C),S=-Math.cos(C);c.x=S*_.x+P*I.x,c.y=S*_.y+P*I.y,c.z=S*_.z+P*I.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+i*c.x,a.y=h.y+i*c.y,a.z=h.z+i*c.z,u.push(a.x,a.y,a.z)}}function f(){for(let v=1;v<=e;v++)for(let _=1;_<=s;_++){let I=(s+1)*(v-1)+(_-1),w=(s+1)*v+(_-1),C=(s+1)*v+_,P=(s+1)*(v-1)+_;g.push(I,w,P),g.push(w,C,P)}}function M(){for(let v=0;v<=e;v++)for(let _=0;_<=s;_++)l.x=v/e,l.y=_/s,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new Tv[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Bn=class extends Fi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mf,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ga(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function wv(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var wr=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},yh=class extends wr{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xu,endingEnd:Xu}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case $u:r=t,a=2*e-i;break;case qu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case $u:o=t,c=2*i-e;break;case qu:o=1,c=i+s[1]-s[0];break;default:o=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-e)/(s-e),x=g*g,m=x*g,f=-d*m+2*d*x-d*g,M=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,v=(-1-p)*m+(1.5+p)*x+.5*g,_=p*m-p*x;for(let I=0;I!==a;++I)r[I]=f*o[h+I]+M*o[l+I]+v*o[c+I]+_*o[u+I];return r}},bh=class extends wr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Mh=class extends wr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ni=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ga(e,this.TimeBufferType),this.values=ga(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ga(t.times,Array),values:ga(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Mh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new bh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new yh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Sa:e=this.InterpolantFactoryMethodDiscrete;break;case $l:e=this.InterpolantFactoryMethodLinear;break;case Rc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sa;case this.InterpolantFactoryMethodLinear:return $l;case this.InterpolantFactoryMethodSmooth:return Rc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&wv(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Rc,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*i,d=u-i,p=u+i;for(let g=0;g!==i;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[p+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let p=0;p!==i;++p)e[d+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};ni.prototype.TimeBufferType=Float32Array;ni.prototype.ValueBufferType=Float32Array;ni.prototype.DefaultInterpolation=$l;var Cs=class extends ni{constructor(t,e,i){super(t,e,i)}};Cs.prototype.ValueTypeName="bool";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=Sa;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;var Sh=class extends ni{};Sh.prototype.ValueTypeName="color";var Eh=class extends ni{};Eh.prototype.ValueTypeName="number";var Th=class extends wr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)ti.slerpFlat(r,0,o,l-a,o,l,c);return r}},qa=class extends ni{InterpolantFactoryMethodLinear(t){return new Th(this.times,this.values,this.getValueSize(),t)}};qa.prototype.ValueTypeName="quaternion";qa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ps=class extends ni{constructor(t,e,i){super(t,e,i)}};Ps.prototype.ValueTypeName="string";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=Sa;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;var wh=class extends ni{};wh.prototype.ValueTypeName="vector";var Ah=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},Av=new Ah,Rh=class{constructor(t){this.manager=t!==void 0?t:Av,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Rh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ar=class extends Qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ya=class extends Ar{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ee(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ol=new ye,Kd=new T,Jd=new T,xo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fo,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new Pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Kd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Kd),Jd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jd),e.updateMatrixWorld(),ol.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ol),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ol)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ch=class extends xo{constructor(){super(new _n(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,i=yr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Za=class extends Ar{constructor(t,e,i=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ch}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Qd=new ye,no=new T,al=new T,Ph=class extends xo{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Mt(4,2),this._viewportCount=6,this._viewports=[new Pe(2,1,1,1),new Pe(0,1,1,1),new Pe(3,1,1,1),new Pe(1,1,1,1),new Pe(3,0,1,1),new Pe(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),no.setFromMatrixPosition(t.matrixWorld),i.position.copy(no),al.copy(i.position),al.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(al),i.updateMatrixWorld(),s.makeTranslation(-no.x,-no.y,-no.z),Qd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qd)}},Is=class extends Ar{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ph}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Ih=class extends xo{constructor(){super(new Da(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ja=class extends Ar{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.shadow=new Ih}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var qh="\\[\\]\\.:\\/",Rv=new RegExp("["+qh+"]","g"),Yh="[^"+qh+"]",Cv="[^"+qh.replace("\\.","")+"]",Pv=/((?:WC+[\/:])*)/.source.replace("WC",Yh),Iv=/(WCOD+)?/.source.replace("WCOD",Cv),Dv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yh),Lv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yh),Uv=new RegExp("^"+Pv+Iv+Dv+Lv+"$"),Nv=["material","materials","bones","map"],Dh=class{constructor(t,e,i){let s=i||ze.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ze=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Rv,"")}static parseTrackName(t){let e=Uv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Nv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=i(a.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ze.Composite=Dh;ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ze.prototype.GetterByBindingType=[ze.prototype._getValue_direct,ze.prototype._getValue_array,ze.prototype._getValue_arrayElement,ze.prototype._getValue_toArray];ze.prototype.SetterByBindingTypeAndVersioning=[[ze.prototype._setValue_direct,ze.prototype._setValue_direct_setNeedsUpdate,ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_array,ze.prototype._setValue_array_setNeedsUpdate,ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_arrayElement,ze.prototype._setValue_arrayElement_setNeedsUpdate,ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_fromArray,ze.prototype._setValue_fromArray_setNeedsUpdate,ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Wy=new Float32Array(1);var tf=new ye,Ka=class{constructor(t,e,i=0,s=1/0){this.ray=new os(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new uo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return tf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(tf),this}intersectObject(t,e=!0,i=[]){return Lh(t,this,i,e),i.sort(ef),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Lh(t[s],this,i,e);return i.sort(ef),i}};function ef(n,t){return n.distance-t.distance}function Lh(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Lh(r[o],t,e,!0)}}var _o=class{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(mn(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var xa=new Wn,Ja=class extends po{constructor(t,e=16776960){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(8*3),r=new gn;r.setIndex(new vn(i,1)),r.setAttribute("position",new vn(s,3)),super(r,new Er({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(t!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&xa.setFromObject(this.object),xa.isEmpty())return;let e=xa.min,i=xa.max,s=this.geometry.attributes.position,r=s.array;r[0]=i.x,r[1]=i.y,r[2]=i.z,r[3]=e.x,r[4]=i.y,r[5]=i.z,r[6]=e.x,r[7]=e.y,r[8]=i.z,r[9]=i.x,r[10]=e.y,r[11]=i.z,r[12]=i.x,r[13]=i.y,r[14]=e.z,r[15]=e.x,r[16]=i.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=i.x,r[22]=e.y,r[23]=e.z,s.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}};var Qa=class extends Ui{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uh);var wf={type:"change"},jh={type:"start"},Rf={type:"end"},ic=new os,Af=new Jn,Ov=Math.cos(70*zn.DEG2RAD),ln=new T,Ln=2*Math.PI,Ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Zh=1e-6,sc=class extends Qa{constructor(t,e=null){super(t,e),this.state=Ie.NONE,this.enabled=!0,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ds.ROTATE,MIDDLE:Ds.DOLLY,RIGHT:Ds.PAN},this.touches={ONE:Ls.ROTATE,TWO:Ls.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new T,this._lastQuaternion=new ti,this._lastTargetPosition=new T,this._quat=new ti().setFromUnitVectors(t.up,new T(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new _o,this._sphericalDelta=new _o,this._scale=1,this._panOffset=new T,this._rotateStart=new Mt,this._rotateEnd=new Mt,this._rotateDelta=new Mt,this._panStart=new Mt,this._panEnd=new Mt,this._panDelta=new Mt,this._dollyStart=new Mt,this._dollyEnd=new Mt,this._dollyDelta=new Mt,this._dollyDirection=new T,this._mouse=new Mt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=kv.bind(this),this._onPointerDown=Fv.bind(this),this._onPointerUp=Bv.bind(this),this._onContextMenu=$v.bind(this),this._onMouseWheel=Vv.bind(this),this._onKeyDown=Gv.bind(this),this._onTouchStart=Wv.bind(this),this._onTouchMove=Xv.bind(this),this._onMouseDown=zv.bind(this),this._onMouseMove=Hv.bind(this),this._interceptControlDown=qv.bind(this),this._interceptControlUp=Yv.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(wf),this.update(),this.state=Ie.NONE}update(t=null){let e=this.object.position;ln.copy(e).sub(this.target),ln.applyQuaternion(this._quat),this._spherical.setFromVector3(ln),this.autoRotate&&this.state===Ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Ln:i>Math.PI&&(i-=Ln),s<-Math.PI?s+=Ln:s>Math.PI&&(s-=Ln),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ln.setFromSpherical(this._spherical),ln.applyQuaternion(this._quatInverse),e.copy(this.target).add(ln),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=ln.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new T(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new T(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=ln.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ic.origin.copy(this.object.position),ic.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ic.direction))<Ov?this.object.lookAt(this.target):(Af.setFromNormalAndCoplanarPoint(this.object.up,this.target),ic.intersectPlane(Af,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Zh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Zh||this._lastTargetPosition.distanceToSquared(this.target)>Zh?(this.dispatchEvent(wf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ln/60*this.autoRotateSpeed*t:Ln/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ln.setFromMatrixColumn(e,0),ln.multiplyScalar(-t),this._panOffset.add(ln)}_panUp(t,e){this.screenSpacePanning===!0?ln.setFromMatrixColumn(e,1):(ln.setFromMatrixColumn(e,0),ln.crossVectors(this.object.up,ln)),ln.multiplyScalar(t),this._panOffset.add(ln)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;ln.copy(s).sub(this.target);let r=ln.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Mt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Fv(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function kv(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Bv(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Rf),this.state=Ie.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function zv(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ds.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Ie.DOLLY;break;case Ds.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ie.ROTATE}break;case Ds.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ie.PAN}break;default:this.state=Ie.NONE}this.state!==Ie.NONE&&this.dispatchEvent(jh)}function Hv(n){switch(this.state){case Ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Vv(n){this.enabled===!1||this.enableZoom===!1||this.state!==Ie.NONE||(n.preventDefault(),this.dispatchEvent(jh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Rf))}function Gv(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function Wv(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ls.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Ie.TOUCH_ROTATE;break;case Ls.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Ie.TOUCH_PAN;break;default:this.state=Ie.NONE}break;case 2:switch(this.touches.TWO){case Ls.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Ie.TOUCH_DOLLY_PAN;break;case Ls.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Ie.TOUCH_DOLLY_ROTATE;break;default:this.state=Ie.NONE}break;default:this.state=Ie.NONE}this.state!==Ie.NONE&&this.dispatchEvent(jh)}function Xv(n){switch(this._trackPointer(n),this.state){case Ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Ie.NONE}}function $v(n){this.enabled!==!1&&n.preventDefault()}function qv(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Yv(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var rc=class extends Sr{constructor(){super();let t=new yn;t.deleteAttribute("uv");let e=new Bn({side:Tn}),i=new Bn,s=new Is(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new $t(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new $t(t,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new $t(t,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let c=new $t(t,i);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);let l=new $t(t,i);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);let h=new $t(t,i);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new $t(t,i);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new $t(t,Ir(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let p=new $t(t,Ir(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);let g=new $t(t,Ir(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let x=new $t(t,Ir(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let m=new $t(t,Ir(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let f=new $t(t,Ir(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ir(n){let t=new ke;return t.color.setScalar(n),t}var yo={cpu:{name:"\u041F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440\u044B",one:"\u041F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440"},mb:{name:"\u041C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u043A\u0438\u0435 \u043F\u043B\u0430\u0442\u044B",one:"\u041C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u043A\u0430\u044F \u043F\u043B\u0430\u0442\u0430"},ram:{name:"\u041E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u0430\u044F \u043F\u0430\u043C\u044F\u0442\u044C",one:"\u041E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u0430\u044F \u043F\u0430\u043C\u044F\u0442\u044C"},gpu:{name:"\u0412\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u044B",one:"\u0412\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0430"},storage:{name:"\u041D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u0438",one:"\u041D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C"},psu:{name:"\u0411\u043B\u043E\u043A\u0438 \u043F\u0438\u0442\u0430\u043D\u0438\u044F",one:"\u0411\u043B\u043E\u043A \u043F\u0438\u0442\u0430\u043D\u0438\u044F"},cooler:{name:"\u041E\u0445\u043B\u0430\u0436\u0434\u0435\u043D\u0438\u0435",one:"\u041A\u0443\u043B\u0435\u0440"},case:{name:"\u041A\u043E\u0440\u043F\u0443\u0441\u0430",one:"\u041A\u043E\u0440\u043F\u0443\u0441"},fan:{name:"\u0412\u0435\u043D\u0442\u0438\u043B\u044F\u0442\u043E\u0440\u044B",one:"\u0412\u0435\u043D\u0442\u0438\u043B\u044F\u0442\u043E\u0440"}},Us=["cpu","mb","ram","gpu","storage","psu","cooler","case","fan"],Kh=[],Zv={cpu:[12e3,22e3,35e3,55e3],mb:[12e3,22e3,35e3,55e3],gpu:[25e3,45e3,75e3,14e4],psu:[6e3,9e3,14e3],ram:[4e3,6500,1e4],storage:[5e3,9e3,17e3],cooler:[3e3,6e3,1e4],case:[5e3,9e3,13e3],fan:[2e3]},jv=(n,t)=>1+Zv[n].filter(e=>t>=e).length,Bi=(n,t)=>t.forEach(e=>Kh.push({type:n,lvl:jv(n,e.price),...e})),qt=(n,t,e,i,s,r,o,a,c,l,h="")=>({id:n,name:t,socket:e,cores:i,threads:s,boost:r,tdp:o,ipc:a,igpu:c,price:l,note:h,perf:Math.round(170*a*r*Math.pow(Math.min(i,16),.42))});Bi("cpu",[qt("r3-3200g","AMD Ryzen 3 3200G","AM4",4,4,4,65,.78,300,5500,"\u041D\u0430\u0440\u043E\u0434\u043D\u044B\u0439 \u0447\u0438\u043F \u0434\u043B\u044F \u043E\u0444\u0438\u0441\u0430 \u0438 \u043F\u0440\u043E\u0441\u0442\u044B\u0445 \u0438\u0433\u0440"),qt("r5-4600g","AMD Ryzen 5 4600G","AM4",6,12,4.2,65,.88,350,7500,"\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 6 \u044F\u0434\u0435\u0440 \u0441\u043E \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u043E\u0439 \u0433\u0440\u0430\u0444\u0438\u043A\u043E\u0439"),qt("r5-5600g","AMD Ryzen 5 5600G","AM4",6,12,4.4,65,.95,400,9800,"\u041B\u0443\u0447\u0448\u0438\u0439 APU \u043D\u0430 Zen 3"),qt("r5-8500g","AMD Ryzen 5 8500G","AM5",6,12,5,65,1.05,500,14500,"\u0412\u0441\u0442\u0440\u043E\u0439\u043A\u0430 Radeon 740M"),qt("r5-8600g","AMD Ryzen 5 8600G","AM5",6,12,5,65,1.1,700,18500,"\u041C\u043E\u0449\u043D\u0430\u044F \u0432\u0441\u0442\u0440\u043E\u0439\u043A\u0430 Radeon 760M"),qt("r5-3600","AMD Ryzen 5 3600","AM4",6,12,4.2,65,.88,0,6500,"\u041B\u0435\u0433\u0435\u043D\u0434\u0430\u0440\u043D\u044B\u0439 \u0431\u044E\u0434\u0436\u0435\u0442\u043D\u044B\u0439 \u0447\u0438\u043F"),qt("r5-5500","AMD Ryzen 5 5500","AM4",6,12,4.2,65,.95,0,7200,"\u0411\u0435\u0437 PCIe 4.0"),qt("r5-5600","AMD Ryzen 5 5600","AM4",6,12,4.4,65,1,0,9500,"\u041B\u0443\u0447\u0448\u0438\u0439 \u043F\u043E \u0446\u0435\u043D\u0435/\u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0443"),qt("r5-5600x","AMD Ryzen 5 5600X","AM4",6,12,4.6,65,1,0,10500,"\u041E\u0442\u043E\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u043A\u0440\u0438\u0441\u0442\u0430\u043B\u043B\u044B"),qt("r7-5700x","AMD Ryzen 7 5700X","AM4",8,16,4.6,65,1,0,14e3,"8 \u044F\u0434\u0435\u0440 \u043F\u0440\u0438 65 \u0412\u0442"),qt("r7-5700x3d","AMD Ryzen 7 5700X3D","AM4",8,16,4.1,105,1.18,0,17500,"3D V-Cache \u0434\u043B\u044F AM4"),qt("r7-5800x3d","AMD Ryzen 7 5800X3D","AM4",8,16,4.5,105,1.18,0,27e3,"\u041B\u0435\u0433\u0435\u043D\u0434\u0430\u0440\u043D\u044B\u0439 \u0438\u0433\u0440\u043E\u0432\u043E\u0439 \u0447\u0438\u043F"),qt("r9-5900x","AMD Ryzen 9 5900X","AM4",12,24,4.8,105,1,0,24500,"\u041C\u043D\u043E\u0433\u043E\u043F\u043E\u0442\u043E\u043A \u0434\u043B\u044F AM4"),qt("r5-7500f","AMD Ryzen 5 7500F","AM5",6,12,5,65,1.15,0,13500,"\u0411\u0435\u0437 \u0432\u0438\u0434\u0435\u043E\u044F\u0434\u0440\u0430, \u0442\u043E\u043F \u0437\u0430 \u0441\u0432\u043E\u0438 \u0434\u0435\u043D\u044C\u0433\u0438"),qt("r5-7600","AMD Ryzen 5 7600","AM5",6,12,5.1,65,1.15,200,16e3,"\u0415\u0441\u0442\u044C \u0431\u0430\u0437\u043E\u0432\u043E\u0435 \u0432\u0438\u0434\u0435\u043E\u044F\u0434\u0440\u043E"),qt("r5-7600x","AMD Ryzen 5 7600X","AM5",6,12,5.3,105,1.15,200,18500,"\u041F\u043E\u0432\u044B\u0448\u0435\u043D\u043D\u044B\u0435 \u0447\u0430\u0441\u0442\u043E\u0442\u044B"),qt("r5-9600x","AMD Ryzen 5 9600X","AM5",6,12,5.4,65,1.25,200,24e3,"\u0410\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430 Zen 5"),qt("r7-9700x","AMD Ryzen 7 9700X","AM5",8,16,5.5,65,1.25,200,33e3,"Zen 5, 8 \u044F\u0434\u0435\u0440"),qt("r7-7800x3d","AMD Ryzen 7 7800X3D","AM5",8,16,5,120,1.4,200,43e3,"\u0413\u043B\u0430\u0432\u043D\u044B\u0439 \u0445\u0438\u0442 \u0434\u043B\u044F \u0433\u0435\u0439\u043C\u0435\u0440\u043E\u0432"),qt("r7-9800x3d","AMD Ryzen 7 9800X3D","AM5",8,16,5.2,120,1.55,200,55e3,"\u0418\u0433\u0440\u043E\u0432\u043E\u0439 \u0444\u043B\u0430\u0433\u043C\u0430\u043D Zen 5 \u0441 3D-\u043A\u044D\u0448\u0435\u043C"),qt("r9-7900x","AMD Ryzen 9 7900X","AM5",12,24,5.6,170,1.15,200,34e3,"\u0411\u0430\u043B\u0430\u043D\u0441 \u0440\u0430\u0431\u043E\u0442\u044B \u0438 \u0438\u0433\u0440"),qt("r9-9900x","AMD Ryzen 9 9900X","AM5",12,24,5.6,120,1.25,200,44e3,"Zen 5, 12 \u044F\u0434\u0435\u0440"),qt("r9-7950x","AMD Ryzen 9 7950X","AM5",16,32,5.7,170,1.15,200,46e3,"\u0424\u043B\u0430\u0433\u043C\u0430\u043D \u0434\u043B\u044F \u0442\u044F\u0436\u0451\u043B\u043E\u0433\u043E \u0441\u043E\u0444\u0442\u0430"),qt("r9-7950x3d","AMD Ryzen 9 7950X3D","AM5",16,32,5.7,120,1.35,200,54e3,"\u041F\u043E\u043B\u043E\u0432\u0438\u043D\u0430 \u044F\u0434\u0435\u0440 \u0441 3D-\u043A\u044D\u0448\u0435\u043C"),qt("r9-9950x","AMD Ryzen 9 9950X","AM5",16,32,5.7,170,1.25,200,59e3,"\u041C\u0430\u043A\u0441\u0438\u043C\u0443\u043C \u0434\u043B\u044F \u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u0441\u0442\u0430\u043D\u0446\u0438\u0439"),qt("i3-12100f","Intel Core i3-12100F","LGA1700",4,8,4.3,58,1.05,0,6500,"\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0439 \u0431\u044E\u0434\u0436\u0435\u0442\u043D\u044B\u0439 \u0431\u0435\u0437 \u0432\u0438\u0434\u0435\u043E\u044F\u0434\u0440\u0430"),qt("i3-12100","Intel Core i3-12100","LGA1700",4,8,4.3,60,1.05,200,8500,"\u0421 \u0433\u0440\u0430\u0444\u0438\u043A\u043E\u0439 Intel UHD 730"),qt("i3-13100f","Intel Core i3-13100F","LGA1700",4,8,4.5,58,1.08,0,7800,"\u041E\u0431\u043D\u043E\u0432\u043B\u0451\u043D\u043D\u044B\u0439 12100F"),qt("i3-14100f","Intel Core i3-14100F","LGA1700",4,8,4.7,58,1.1,0,9200,"\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439 \u0438\u0433\u0440\u043E\u0432\u043E\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C"),qt("i5-12400f","Intel Core i5-12400F","LGA1700",6,12,4.4,65,1.05,0,10500,"\u041D\u0430\u0440\u043E\u0434\u043D\u044B\u0439 \u0438\u0433\u0440\u043E\u0432\u043E\u0439"),qt("i5-12400","Intel Core i5-12400","LGA1700",6,12,4.4,65,1.05,200,12500,"\u0421 \u0432\u0438\u0434\u0435\u043E\u044F\u0434\u0440\u043E\u043C"),qt("i5-13400f","Intel Core i5-13400F","LGA1700",10,16,4.6,65,1.08,0,14500,"6P + 4E \u044F\u0434\u0435\u0440"),qt("i5-14400f","Intel Core i5-14400F","LGA1700",10,16,4.7,65,1.1,0,16500,"6P + 4E \u044F\u0434\u0435\u0440"),qt("i5-13600kf","Intel Core i5-13600KF","LGA1700",14,20,5.1,125,1.12,0,24500,"\u041E\u0442\u043B\u0438\u0447\u043D\u044B\u0439 \u0447\u0438\u043F \u043F\u043E\u0434 \u0440\u0430\u0437\u0433\u043E\u043D"),qt("i5-14600kf","Intel Core i5-14600KF","LGA1700",14,20,5.3,125,1.12,0,26500,"6P + 8E \u044F\u0434\u0435\u0440"),qt("i7-12700f","Intel Core i7-12700F","LGA1700",12,20,4.9,65,1.05,0,21e3,"8P + 4E \u044F\u0434\u0435\u0440"),qt("i7-13700kf","Intel Core i7-13700KF","LGA1700",16,24,5.4,150,1.12,0,32e3,"8P + 8E \u044F\u0434\u0435\u0440"),qt("i7-14700kf","Intel Core i7-14700KF","LGA1700",20,28,5.6,160,1.12,0,36500,"8P + 12E \u044F\u0434\u0435\u0440"),qt("i9-12900kf","Intel Core i9-12900KF","LGA1700",16,24,5.2,150,1.05,0,29e3,"\u0424\u043B\u0430\u0433\u043C\u0430\u043D 12-\u0433\u043E \u043F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u044F"),qt("i9-13900kf","Intel Core i9-13900KF","LGA1700",24,32,5.8,190,1.12,0,44e3,"\u041D\u0443\u0436\u043D\u0430 \u0421\u0416\u041E"),qt("i9-14900kf","Intel Core i9-14900KF","LGA1700",24,32,6,200,1.12,0,49e3,"\u041D\u0443\u0436\u043D\u0430 \u0421\u0416\u041E"),qt("i9-14900ks","Intel Core i9-14900KS","LGA1700",24,32,6.2,220,1.13,200,64e3,"\u041E\u0442\u043E\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u043A\u0440\u0435\u043C\u043D\u0438\u0439, \u044D\u043A\u0441\u0442\u0440\u0435\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0447\u0438\u043F"),qt("u5-245kf","Intel Core Ultra 5 245KF","LGA1851",14,14,5.2,125,1.15,0,27e3,"\u0425\u043E\u043B\u043E\u0434\u043D\u044B\u0439 \u0438 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u044B\u0439"),qt("u7-265kf","Intel Core Ultra 7 265KF","LGA1851",20,20,5.5,125,1.15,0,41e3,"\u0418\u0433\u0440\u043E\u0432\u043E\u0439 \u0438 \u0440\u0430\u0431\u043E\u0447\u0438\u0439"),qt("u9-285k","Intel Core Ultra 9 285K","LGA1851",24,24,5.7,125,1.16,300,62e3,"\u0424\u043B\u0430\u0433\u043C\u0430\u043D LGA1851")]);function Kv(n){return/ROG|Crosshair|Maximus/.test(n)?{color:1447446,accent:2829099,glow:16719936}:/TUF/.test(n)?{color:2763300,accent:6971456,glow:16756736}:/Aorus|AORUS/.test(n)?{color:1184274,accent:3815994,glow:16742912}:/Prime/.test(n)?{color:2369580,accent:13620182}:/MEG|Ace|Taichi/.test(n)?{color:1315860,accent:10256976,glow:16765040}:/Tomahawk|Mortar|Carbon/.test(n)?{color:1842464,accent:7107712}:/Biostar|Maxsun/.test(n)?{color:1714746,accent:4216686}:{color:1974822,accent:5264990}}var Nt=(n,t,e,i,s,r,o,a)=>({id:n,name:t,socket:e,form:i,ram:s,ramSlots:r,m2:o,price:a,chipset:(t.match(/\b([ABHXZ]\d{3}E?)/)||[])[1]||"",...Kv(t)});Bi("mb",[Nt("h610m-e","MSI Pro H610M-E DDR4","LGA1700","mATX","DDR4",2,1,6500),Nt("h610m-h","GIGABYTE H610M H V2 DDR4","LGA1700","mATX","DDR4",2,1,6800),Nt("h610m-k","ASUS Prime H610M-K D4","LGA1700","mATX","DDR4",2,1,7200),Nt("h610m-hdv","ASRock H610M-HDV/M.2","LGA1700","mATX","DDR4",2,1,7e3),Nt("h610mhp","Biostar H610MHP","LGA1700","mATX","DDR4",2,1,6200),Nt("a320m-h","GIGABYTE GA-A320M-H","AM4","mATX","DDR4",2,1,5500),Nt("a320m-k","ASUS Prime A320M-K","AM4","mATX","DDR4",2,1,5800),Nt("a520m-a","MSI A520M-A Pro","AM4","mATX","DDR4",2,1,6300),Nt("a520m-kv2","GIGABYTE A520M K V2","AM4","mATX","DDR4",2,1,6500),Nt("b450m-hdv","ASRock B450M-HDV R4.0","AM4","mATX","DDR4",2,1,6700),Nt("maxsun-a520m","Maxsun Challenger A520M","AM4","mATX","DDR4",2,1,5900),Nt("b450m-vdh","MSI B450M Pro-VDH Max","AM4","mATX","DDR4",4,1,7800),Nt("b760m-ds3h","GIGABYTE B760M DS3H DDR4","LGA1700","mATX","DDR4",4,2,11500),Nt("b760m-p","MSI Pro B760M-P DDR4","LGA1700","mATX","DDR4",4,2,11e3),Nt("b760m-a","ASUS Prime B760M-A WiFi D4","LGA1700","mATX","DDR4",4,2,14500),Nt("b760m-prors","ASRock B760M Pro RS","LGA1700","mATX","DDR5",4,2,13200),Nt("b760m-mortar","MSI MAG B760M Mortar WiFi","LGA1700","mATX","DDR5",4,2,17800),Nt("b760-gx","GIGABYTE B760 Gaming X AX","LGA1700","ATX","DDR5",4,2,18500),Nt("b760-tuf","ASUS TUF Gaming B760-Plus WiFi","LGA1700","ATX","DDR5",4,2,19800),Nt("b550m-ds3h","GIGABYTE B550M DS3H","AM4","mATX","DDR4",4,2,10500),Nt("b550-tmh","MSI MAG B550 Tomahawk","AM4","ATX","DDR4",4,2,16e3),Nt("b550-tuf","ASUS TUF Gaming B550-Plus","AM4","ATX","DDR4",4,2,15500),Nt("b550-pro4","ASRock B550 Pro4","AM4","ATX","DDR4",4,2,12800),Nt("b650m-k","GIGABYTE B650M K","AM5","mATX","DDR5",4,2,12500),Nt("b650m-p","MSI Pro B650M-P","AM5","mATX","DDR5",4,2,13800),Nt("b650m-hdv","ASRock B650M-HDV/M.2","AM5","mATX","DDR5",2,2,14200),Nt("b650-gx","GIGABYTE B650 Gaming X AX","AM5","ATX","DDR5",4,2,19500),Nt("z790-tmh","MSI MAG Z790 Tomahawk WiFi","LGA1700","ATX","DDR5",4,2,28500),Nt("z790-elite","GIGABYTE Z790 Aorus Elite AX","LGA1700","ATX","DDR5",4,2,29e3),Nt("z790-a","ASUS Prime Z790-A WiFi","LGA1700","ATX","DDR5",4,2,31e3),Nt("z790-prors","ASRock Z790 Pro RS","LGA1700","ATX","DDR5",4,2,22500),Nt("z790-amax","MSI PRO Z790-A Max WiFi","LGA1700","ATX","DDR5",4,2,26e3),Nt("z790-tuf","ASUS TUF Gaming Z790-Pro WiFi","LGA1700","ATX","DDR5",4,2,32500),Nt("b650-tmh","MSI MAG B650 Tomahawk WiFi","AM5","ATX","DDR5",4,2,23e3),Nt("b650-tuf","ASUS TUF Gaming B650-Plus WiFi","AM5","ATX","DDR5",4,2,22500),Nt("b650-elite","GIGABYTE B650 Aorus Elite AX","AM5","ATX","DDR5",4,2,24500),Nt("b650-prors","ASRock B650 Pro RS","AM5","ATX","DDR5",4,2,21e3),Nt("b650-strix","ASUS ROG Strix B650-A Gaming WiFi","AM5","ATX","DDR5",4,2,27e3),Nt("x670e-carbon","MSI MPG X670E Carbon WiFi","AM5","ATX","DDR5",4,2,39e3),Nt("x670-gx","GIGABYTE X670 Gaming X AX V2","AM5","ATX","DDR5",4,2,28e3),Nt("x670-p","ASUS Prime X670-P WiFi","AM5","ATX","DDR5",4,2,26500),Nt("z790-strix-e","ASUS ROG Strix Z790-E Gaming WiFi II","LGA1700","ATX","DDR5",4,2,48e3),Nt("z790-ace","MSI MEG Z790 Ace Max","LGA1700","ATX","DDR5",4,2,65e3),Nt("z790-master","GIGABYTE Z790 Aorus Master X","LGA1700","ATX","DDR5",4,2,58e3),Nt("z790-darkhero","ASUS ROG Maximus Z790 Dark Hero","LGA1700","ATX","DDR5",4,2,75e3),Nt("z790-taichi","ASRock Z790 Taichi Lite","LGA1700","ATX","DDR5",4,2,42e3),Nt("x670e-strix-e","ASUS ROG Strix X670E-E Gaming WiFi","AM5","ATX","DDR5",4,2,49500),Nt("x670e-ace","MSI MEG X670E Ace","AM5","ATX","DDR5",4,2,68e3),Nt("x670e-master","GIGABYTE X670E Aorus Master","AM5","ATX","DDR5",4,2,52e3),Nt("x670e-taichi","ASRock X670E Taichi","AM5","ATX","DDR5",4,2,55e3),Nt("x670e-hero","ASUS ROG Crosshair X670E Hero","AM5","ATX","DDR5",4,2,72e3),Nt("z790-apex","ASUS ROG Maximus Z790 Apex EnCore","LGA1700","ATX","DDR5",2,2,82e3),Nt("b860m-a","MSI PRO B860M-A WiFi","LGA1851","mATX","DDR5",4,2,14500),Nt("b860-elite","GIGABYTE B860 Aorus Elite WiFi7","LGA1851","ATX","DDR5",4,2,21e3),Nt("z890-tuf","ASUS TUF Gaming Z890-Plus WiFi","LGA1851","ATX","DDR5",4,2,33e3),Nt("z890-tmh","MSI MAG Z890 Tomahawk WiFi","LGA1851","ATX","DDR5",4,2,36e3)]);var hn=(n,t,e,i,s,r,o,a=!1)=>({id:n,name:t,ram:e,gb:i,mhz:s,price:r,color:o,rgb:a});Bi("ram",[hn("d4-4-2666","Samsung 4 \u0413\u0411 DDR4-2666","DDR4",4,2666,1200,2055214),hn("d4-8-3200c","Crucial 8 \u0413\u0411 DDR4-3200","DDR4",8,3200,1800,2055214),hn("d4-8-3200","Kingston FURY Beast 8 \u0413\u0411 DDR4-3200","DDR4",8,3200,2e3,1118481),hn("d4-8-3600","Patriot Viper Steel 8 \u0413\u0411 DDR4-3600","DDR4",8,3600,2400,5593180),hn("d4-16-3200","Kingston FURY Beast 16 \u0413\u0411 DDR4-3200","DDR4",16,3200,3600,1118481),hn("d4-16-lpx","Corsair Vengeance LPX 16 \u0413\u0411 DDR4-3200","DDR4",16,3200,3900,1710618),hn("d4-16-rgb","Kingston FURY Beast RGB 16 \u0413\u0411 DDR4-3600","DDR4",16,3600,4800,1381653,!0),hn("d4-16-tz","G.Skill Trident Z RGB 16 \u0413\u0411 DDR4-3600","DDR4",16,3600,5200,10132122,!0),hn("d4-32-3200","Kingston FURY Beast 32 \u0413\u0411 DDR4-3200","DDR4",32,3200,7e3,1118481),hn("d4-32-rgb","Corsair Vengeance RGB Pro 32 \u0413\u0411 DDR4-3600","DDR4",32,3600,8200,1710618,!0),hn("d5-8-4800","Kingston 8 \u0413\u0411 DDR5-4800","DDR5",8,4800,2600,2055214),hn("d5-16-5600","Crucial 16 \u0413\u0411 DDR5-5600","DDR5",16,5600,4200,2055214),hn("d5-16-6000","Kingston FURY Beast 16 \u0413\u0411 DDR5-6000","DDR5",16,6e3,4800,1118481),hn("d5-16-flare","G.Skill Flare X5 16 \u0413\u0411 DDR5-6000","DDR5",16,6e3,5e3,1315860),hn("d5-16-lancer","ADATA XPG Lancer RGB 16 \u0413\u0411 DDR5-6000","DDR5",16,6e3,5500,2105376,!0),hn("d5-16-rgb","Kingston FURY Beast RGB 16 \u0413\u0411 DDR5-6000","DDR5",16,6e3,5600,1381653,!0),hn("d5-32-6000","Corsair Vengeance 32 \u0413\u0411 DDR5-6000","DDR5",32,6e3,9500,1710618),hn("d5-32-tz5","G.Skill Trident Z5 RGB 32 \u0413\u0411 DDR5-6400","DDR5",32,6400,12e3,11579568,!0),hn("d5-32-dom","Corsair Dominator Titanium RGB 32 \u0413\u0411 DDR5-7200","DDR5",32,7200,16e3,2763306,!0)]);var Be=(n,t,e,i,s,r,o,a,c,l=2236962,h={})=>({id:n,name:t,len:e,slots:i,tdp:s,perf:r,pins:o,fans:a,price:c,color:l,...h});Bi("gpu",[Be("gt1030","MSI GeForce GT 1030 2 \u0413\u0411",.17,1,30,400,0,1,7500),Be("gtx1650","ASUS GeForce GTX 1650 4 \u0413\u0411",.2,2,75,900,0,2,13500,2829099),Be("rx6500xt","Sapphire Pulse RX 6500 XT 4 \u0413\u0411",.19,2,107,1e3,1,2,14e3,1776411,{accent:13639722}),Be("gtx1660s","Gigabyte GTX 1660 SUPER 6 \u0413\u0411",.23,2,125,1400,1,2,17e3,3158064),Be("rtx2060","MSI GeForce RTX 2060 Ventus 6 \u0413\u0411",.23,2,160,1800,1,2,2e4,2763306),Be("rtx3050","Palit GeForce RTX 3050 StormX 8 \u0413\u0411",.17,2,130,1500,1,1,21e3,1842204),Be("rx6600","PowerColor RX 6600 Fighter 8 \u0413\u0411",.2,2,132,1900,1,2,22e3,1973790,{accent:13639722}),Be("rtx3060","ASUS DUAL RTX 3060 12 \u0413\u0411",.24,2,170,2100,1,2,27e3,3816770),Be("rx7600","Sapphire Pulse RX 7600 8 \u0413\u0411",.24,2,165,2300,1,2,28e3,1776411,{accent:13639722}),Be("rtx4060","MSI GeForce RTX 4060 Ventus 2X 8 \u0413\u0411",.2,2,115,2400,1,2,31e3,2500134),Be("rtx5060","ASUS Dual GeForce RTX 5060 8 \u0413\u0411",.23,2,145,2900,1,2,36e3,14211288),Be("rtx4060ti","Gigabyte RTX 4060 Ti Gaming OC 8 \u0413\u0411",.28,2,160,2800,1,3,42e3,2105376),Be("rx7700xt","Sapphire Pulse RX 7700 XT 12 \u0413\u0411",.28,2,245,3200,1,2,45e3,1776411,{accent:13639722}),Be("rtx4070","MSI GeForce RTX 4070 Ventus 3X 12 \u0413\u0411",.31,2,200,3500,1,3,58e3,2500134),Be("rx7800xt","Sapphire Nitro+ RX 7800 XT 16 \u0413\u0411",.31,3,263,3800,1,3,6e4,2764083,{accent:3837183}),Be("rtx5070","Gigabyte RTX 5070 Windforce 12 \u0413\u0411",.29,2,250,4300,1,3,68e3,1842204,{hpwr:!0}),Be("rtx4070s","ASUS TUF RTX 4070 SUPER 12 \u0413\u0411",.3,3,220,4200,1,3,72e3,3815988,{hpwr:!0}),Be("rx7900xt","PowerColor Hellhound RX 7900 XT 20 \u0413\u0411",.32,3,315,5100,1,3,9e4,1381658,{accent:8019199}),Be("rtx4070tis","MSI RTX 4070 Ti SUPER Gaming X Slim 16 \u0413\u0411",.31,3,285,4900,1,3,95e3,1710618,{hpwr:!0,accent:16724016}),Be("rtx5070ti","Palit RTX 5070 Ti GamingPro 16 \u0413\u0411",.33,3,300,5400,1,3,105e3,2105376,{hpwr:!0}),Be("rx7900xtx","Sapphire Nitro+ RX 7900 XTX 24 \u0413\u0411",.32,3,355,6100,1,3,125e3,2764083,{accent:3837183}),Be("rtx4080s","Gigabyte RTX 4080 SUPER Gaming OC 16 \u0413\u0411",.34,3,320,6e3,1,3,13e4,1842204,{hpwr:!0}),Be("rtx5080","ASUS Prime RTX 5080 16 \u0413\u0411",.3,3,360,6500,1,3,15e4,2895668,{hpwr:!0}),Be("rtx4090","ASUS ROG Strix RTX 4090 24 \u0413\u0411",.36,3,450,7600,1,3,23e4,1118481,{hpwr:!0,accent:16722541}),Be("rtx5090","MSI RTX 5090 Suprim 32 \u0413\u0411",.36,3,575,9500,1,3,34e4,1710618,{hpwr:!0,accent:12632256})]);var xn=(n,t,e,i,s,r)=>({id:n,name:t,kind:e,gb:i,speed:s,price:r});Bi("storage",[xn("hdd-1t","Seagate BarraCuda 1 \u0422\u0411 (HDD)","hdd",1e3,1,4200),xn("hdd-2t","WD Blue 2 \u0422\u0411 (HDD)","hdd",2e3,1,5800),xn("hdd-4t","Seagate BarraCuda 4 \u0422\u0411 (HDD)","hdd",4e3,1,9e3),xn("hdd-4t-red","WD Red Plus 4 \u0422\u0411 (HDD)","hdd",4e3,1,11e3),xn("ssd-240","Kingston A400 240 \u0413\u0411 (SATA SSD)","ssd",240,3,1900),xn("ssd-480","Kingston A400 480 \u0413\u0411 (SATA SSD)","ssd",480,3,2800),xn("ssd-512","ADATA SU650 512 \u0413\u0411 (SATA SSD)","ssd",512,3,2700),xn("ssd-500","Crucial MX500 500 \u0413\u0411 (SATA SSD)","ssd",500,3,4e3),xn("ssd-1t","Samsung 870 EVO 1 \u0422\u0411 (SATA SSD)","ssd",1e3,3,8e3),xn("m2-500","Kingston NV2 500 \u0413\u0411 (M.2 NVMe)","m2",500,5,3e3),xn("m2-1t-adata","ADATA Legend 800 1 \u0422\u0411 (M.2 NVMe)","m2",1e3,6,5500),xn("m2-1t-nv3","Kingston NV3 1 \u0422\u0411 (M.2 NVMe)","m2",1e3,6,5800),xn("m2-1t-sn770","WD Black SN770 1 \u0422\u0411 (M.2 NVMe)","m2",1e3,7,7e3),xn("m2-1t-980","Samsung 980 1 \u0422\u0411 (M.2 NVMe)","m2",1e3,6,7500),xn("m2-1t-990","Samsung 990 PRO 1 \u0422\u0411 (M.2 NVMe)","m2",1e3,9,11e3),xn("m2-2t-sn850","WD Black SN850X 2 \u0422\u0411 (M.2 NVMe)","m2",2e3,9,16e3),xn("m2-2t-990","Samsung 990 PRO 2 \u0422\u0411 (M.2 NVMe)","m2",2e3,9,18e3),xn("m2-2t-t700","Crucial T700 2 \u0422\u0411 (M.2 NVMe Gen5)","m2",2e3,12,25e3)]);var De=(n,t,e,i,s,r=!1,o=!1)=>({id:n,name:t,watt:e,cert:i,price:s,atx3:r,modular:o});Bi("psu",[De("pf500","Deepcool PF500",500,"80 PLUS",3800),De("fsp500","FSP ATX-500PNR PRO",500,"\u0431\u0435\u0437 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u0430",3500),De("tps500","Chieftec Task TPS-500S",500,"80 PLUS Bronze",4300),De("blacksir500","1STPLAYER Black.Sir 500W",500,"80 PLUS",3200),De("mwe550","Cooler Master MWE Bronze 550 V2",550,"80 PLUS Bronze",5600),De("pk550d","Deepcool PK550D",550,"80 PLUS Bronze",4900),De("xn052","Xilence Redwing XN052 500W",500,"\u043E\u0444\u0438\u0441\u043D\u044B\u0439",3e3),De("pk650d","Deepcool PK650D",650,"80 PLUS Bronze",5500),De("mwe650","Cooler Master MWE Bronze 650 V2",650,"80 PLUS Bronze",6400),De("bdf650","Chieftec Proton BDF-650C",650,"80 PLUS Bronze",6900,!1,!0),De("ar75","1STPLAYER AR 7.5 Armor",750,"80 PLUS Gold",7200),De("pm750d","Deepcool PM750D",750,"80 PLUS Gold",8300),De("gamma750","Montech Gamma II 750",750,"80 PLUS Gold",7800),De("pps750","Chieftec Polaris PPS-750FC",750,"80 PLUS Gold",9200,!1,!0),De("century750","Montech Century G5 750W",750,"80 PLUS Gold",9500,!0,!0),De("pn750m","Deepcool PN750M",750,"80 PLUS Gold",10500,!0,!0),De("a850gl","MSI MAG A850GL",850,"80 PLUS Gold",11800,!0,!0),De("pps850","Chieftec Polaris 3.0 PPS-850FC",850,"80 PLUS Gold",12200,!0,!0),De("gex850","Cougar GEX X2 850",850,"80 PLUS Gold",11500,!0,!0),De("gf3-850","Thermaltake Toughpower GF3 850W",850,"80 PLUS Gold",13800,!0,!0),De("pp12m850","be quiet! Pure Power 12 M 850W",850,"80 PLUS Gold",15500,!0,!0),De("leadex7-850","Super Flower Leadex VII Gold 850W",850,"80 PLUS Gold",16500,!0,!0),De("px1000g","Deepcool PX1000G",1e3,"80 PLUS Gold",17e3,!0,!0),De("a1000g","MSI MPG A1000G PCIE5",1e3,"80 PLUS Gold",18500,!0,!0),De("titan1000","Montech Titan Gold 1000W",1e3,"80 PLUS Gold",15200,!0,!0),De("thor850","ASUS ROG Thor 850W Platinum II",850,"80 PLUS Platinum",26e3,!0,!0),De("gx1000","Seasonic Focus GX-1000 ATX 3.0",1e3,"80 PLUS Gold",24e3,!0,!0),De("leadex6-1000","Super Flower Leadex VI Platinum 1000W",1e3,"80 PLUS Platinum",22800,!1,!0)]);var He=(n,t,e,i,s,r=1710618,o={})=>({id:n,name:t,kind:e,tdpMax:i,price:s,color:r,height:e==="box"?.06:e.startsWith("aio")?.055:.155,rad:e==="aio240"?240:e==="aio360"?360:0,...o});Bi("cooler",[He("wraith-stealth","AMD Wraith Stealth (\u0431\u043E\u043A\u0441\u043E\u0432\u044B\u0439)","box",65,800),He("laminar","Intel Laminar RM1 (\u0431\u043E\u043A\u0441\u043E\u0432\u044B\u0439)","box",65,800),He("wraith-prism","AMD Wraith Prism RGB (\u0431\u043E\u043A\u0441\u043E\u0432\u044B\u0439)","box",105,2500,1710618,{rgb:!0}),He("se214","ID-Cooling SE-214-XT","tower",180,1300),He("ax120","Thermalright Assassin X 120 Refined SE","tower",200,1700,12172996),He("ag400","DeepCool AG400","tower",190,1900),He("ak400","DeepCool AK400","tower",220,2600),He("fz36","ARCTIC Freezer 36","tower",210,2800,1118481),He("purerock2","be quiet! Pure Rock 2","tower",150,3600,1118481),He("pa120","Thermalright Peerless Assassin 120 SE","tower2",245,3500,12172996),He("ps120","Thermalright Phantom Spirit 120 SE","tower2",265,3900,12172996),He("ak620","DeepCool AK620","tower2",260,5200,1118481,{height:.16}),He("nhu12s","Noctua NH-U12S","tower",200,7500,9136722,{height:.158}),He("drp5","be quiet! Dark Rock Pro 5","tower2",270,9500,1118481,{height:.168}),He("nhd15","Noctua NH-D15","tower2",260,11e3,9136722,{height:.165}),He("nhd15g2","Noctua NH-D15 G2","tower2",280,14e3,9136722,{height:.168}),He("fx240","ID-Cooling FX240","aio240",220,4500),He("le520","DeepCool LE520 240","aio240",230,5500,1118481,{rgb:!0}),He("lf3-240","ARCTIC Liquid Freezer III 240","aio240",280,7500),He("ls720","DeepCool LS720 360","aio360",300,9500,1118481,{rgb:!0}),He("lf3-360","ARCTIC Liquid Freezer III 360","aio360",320,1e4),He("galahad360","Lian Li Galahad II Trinity 360","aio360",320,16e3,15658734,{rgb:!0}),He("kraken360","NZXT Kraken 360","aio360",300,18e3,1118481,{rgb:!0})]);var $e=(n,t,e,i,s,r,o,a,c={})=>({id:n,name:t,form:e,gpuMax:i,coolerMax:s,rad:r,price:o,color:a,frontMesh:!1,...c});Bi("case",[$e("matrexx30","Deepcool Matrexx 30","mATX",.25,.151,0,2700,1315860),$e("zalman-s2","Zalman S2","ATX",.31,.155,0,2900,1381653),$e("cylon","Aerocool Cylon","ATX",.37,.155,240,3300,1184274,{stripe:!0}),$e("q300l","Cooler Master Q300L","mATX",.36,.157,240,3800,1710618,{frontMesh:!0}),$e("mx330","Cougar MX330-G","ATX",.35,.155,240,4e3,1447446),$e("i3neo","Zalman i3 Neo","ATX",.34,.16,240,4500,1118481,{frontMesh:!0}),$e("cc560","Deepcool CC560","ATX",.37,.163,360,5200,1052688,{frontMesh:!0}),$e("ch360","Deepcool CH360","mATX",.32,.155,360,6e3,1052688,{frontMesh:!0}),$e("d31","Jonsbo D31 Mesh","mATX",.4,.168,240,6500,15790320,{frontMesh:!0}),$e("d41","Jonsbo D41 Mesh","ATX",.4,.17,360,7e3,1118481,{frontMesh:!0}),$e("h510","NZXT H510","ATX",.36,.165,240,7500,15921906),$e("air903","Montech AIR 903 MAX","ATX",.4,.18,360,7900,1118481,{frontMesh:!0}),$e("ch560w","Deepcool CH560 White","ATX",.38,.175,360,8500,15658734,{frontMesh:!0}),$e("h5flow","NZXT H5 Flow","ATX",.365,.165,360,9e3,15921906,{frontMesh:!0}),$e("meshifyc","Fractal Design Meshify C","ATX",.315,.17,360,9500,1052688,{frontMesh:!0}),$e("lancool216","Lian Li Lancool 216","ATX",.39,.18,360,9500,1184274,{frontMesh:!0}),$e("4000d","Corsair 4000D Airflow","ATX",.36,.17,360,9800,1250067,{frontMesh:!0}),$e("4000dw","Corsair 4000D Airflow White","ATX",.36,.17,360,10200,15724527,{frontMesh:!0}),$e("pb500dx","be quiet! Pure Base 500DX","ATX",.369,.19,360,11e3,1118481,{frontMesh:!0,stripe:!0}),$e("north","Fractal Design North","ATX",.355,.17,360,13e3,1710618,{wood:!0}),$e("o11evo","Lian Li O11 Dynamic EVO","ATX",.42,.167,360,15e3,15395562),$e("y60","HYTE Y60","ATX",.375,.16,360,18e3,16053492)]);Bi("fan",[{id:"p12",name:"ARCTIC P12 120 \u043C\u043C",rgb:!1,price:900},{id:"fk120",name:"DeepCool FK120",rgb:!1,price:1200},{id:"p12argb",name:"ARCTIC P12 PWM PST A-RGB",rgb:!0,price:1300},{id:"pw3",name:"be quiet! Pure Wings 3 120 \u043C\u043C",rgb:!1,price:1400},{id:"sp120",name:"Corsair iCUE SP120 RGB",rgb:!0,price:2200},{id:"sl120",name:"Lian Li UNI FAN SL120 V2 RGB",rgb:!0,price:3200},{id:"nfa12",name:"Noctua NF-A12x25",rgb:!1,price:3500,color:7031350}]);var Dr=Kh,Qt=Object.fromEntries(Kh.map(n=>[n.id,n])),be=n=>Math.round(n).toLocaleString("ru-RU").replace(/\u00a0/g," ")+" \u20BD";function Lr(n){switch(n.type){case"cpu":return`${n.socket} \xB7 ${n.cores} \u044F\u0434\u0435\u0440 / ${n.threads} \u043F\u043E\u0442\u043E\u043A\u043E\u0432 \xB7 \u0434\u043E ${n.boost} \u0413\u0413\u0446 \xB7 ${n.tdp} \u0412\u0442${n.igpu?" \xB7 \u0435\u0441\u0442\u044C \u0432\u0438\u0434\u0435\u043E\u044F\u0434\u0440\u043E":""}`;case"mb":return`${n.socket} \xB7 ${n.form} \xB7 ${n.ram} \xD7${n.ramSlots} \xB7 M.2 \xD7${n.m2}`;case"ram":return`${n.ram} \xB7 ${n.gb} \u0413\u0411 \xB7 ${n.mhz} \u041C\u0413\u0446${n.rgb?" \xB7 RGB":""}`;case"gpu":return`${Math.round(n.len*1e3)} \u043C\u043C \xB7 ${n.tdp} \u0412\u0442 \xB7 ${n.hpwr?"\u0440\u0430\u0437\u044A\u0451\u043C 12VHPWR":n.pins?"\u0434\u043E\u043F. \u043F\u0438\u0442\u0430\u043D\u0438\u0435 8-pin":"\u0431\u0435\u0437 \u0434\u043E\u043F. \u043F\u0438\u0442\u0430\u043D\u0438\u044F"}`;case"storage":return`${n.kind==="hdd"?'HDD 3.5"':n.kind==="ssd"?'SSD 2.5" SATA':"M.2 NVMe"} \xB7 ${n.gb>=1e3?n.gb/1e3+" \u0422\u0411":n.gb+" \u0413\u0411"}`;case"psu":return`${n.watt} \u0412\u0442 \xB7 ${n.cert}${n.atx3?" \xB7 ATX 3.0 (12VHPWR)":""}${n.modular?" \xB7 \u043C\u043E\u0434\u0443\u043B\u044C\u043D\u044B\u0439":""}`;case"cooler":return`\u0434\u043E ${n.tdpMax} \u0412\u0442 \xB7 ${n.kind==="box"?"\u0431\u043E\u043A\u0441\u043E\u0432\u044B\u0439":n.rad?`\u0421\u0416\u041E ${n.rad} \u043C\u043C`:`\u0431\u0430\u0448\u043D\u044F ${Math.round(n.height*1e3)} \u043C\u043C`}`;case"case":return`\u0434\u043E ${n.form} \xB7 \u0432\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0430 \u0434\u043E ${Math.round(n.gpuMax*1e3)} \u043C\u043C \xB7 \u043A\u0443\u043B\u0435\u0440 \u0434\u043E ${Math.round(n.coolerMax*1e3)} \u043C\u043C${n.rad?` \xB7 \u0421\u0416\u041E \u0434\u043E ${n.rad}`:""}`;case"fan":return`120 \u043C\u043C${n.rgb?" \xB7 RGB":""}`}return""}var qe={D:.46,H:.47,W:.21},Ge=.76,Fs=new T(0,Ge+qe.H/2+.012,0),Jv=-qe.W/2+.008,Or=Jv+.009,Qh=-qe.D/2+.03,Fr=qe.H/2-.035,Cf={ATX:[.244,.305],mATX:[.244,.244],ITX:[.17,.17]},cc={ATX:{socket:[.105,.075],ram:[.168,.0105,.0965],pcie:.165,m2:[[.1,.135],[.1,.245]],m24:[.237,.12],cpu8:[.02,.012]},mATX:{socket:[.105,.075],ram:[.168,.0105,.0965],pcie:.165,m2:[[.1,.135]],m24:[.237,.12],cpu8:[.02,.012]},ITX:{socket:[.075,.065],ram:[.128,.011,.075],pcie:.15,m2:[[.06,.12]],m24:[.164,.035],cpu8:[.015,.01]}},Jh={fanF0:[qe.D/2-.03,.12,0],fanF1:[qe.D/2-.03,-.01,0],fanR0:[-qe.D/2+.022,.135,0]},ac={hdd0:[.13,-.2,0],sata0:[.13,-.163,0],sata1:[.13,-.145,0]},bo=[-qe.D/2+.09,-qe.H/2+.056,-.01],Nr=new Map;function bn(n,{w:t=256,h:e=64,bg:i="#111",fg:s="#fff",font:r="bold 30px Arial, sans-serif",border:o=null}={}){let a=[n,t,e,i,s,r,o].join("|");if(Nr.has(a))return Nr.get(a);let c=document.createElement("canvas");c.width=t,c.height=e;let l=c.getContext("2d");i&&(l.fillStyle=i,l.fillRect(0,0,t,e)),o&&(l.strokeStyle=o,l.lineWidth=4,l.strokeRect(2,2,t-4,e-4)),l.fillStyle=s,l.font=r,l.textAlign="center",l.textBaseline="middle";let h=String(n).split(`
`);h.forEach((d,p)=>l.fillText(d,t/2,e/2+(p-(h.length-1)/2)*(parseInt(r.match(/(\d+)px/)?.[1]||30)*1.15)));let u=new gi(c);return u.colorSpace=Je,u.anisotropy=4,Nr.set(a,u),u}function kr(n){if(Nr.has(n))return Nr.get(n);let t=document.createElement("canvas"),e=t.getContext("2d");if(n==="mesh"){t.width=t.height=64,e.fillStyle="#0c0c0c",e.fillRect(0,0,64,64),e.fillStyle="#2a2a2a";for(let s=0;s<8;s++)for(let r=0;r<8;r++)e.beginPath(),e.arc(s*8+4+r%2*4,r*8+4,2.4,0,7),e.fill()}else if(n==="wood"){t.width=512,t.height=512,e.fillStyle="#5b3d27",e.fillRect(0,0,512,512);for(let s=0;s<160;s++){e.strokeStyle=`rgba(${30+Math.random()*40},${18+Math.random()*20},10,${.15+Math.random()*.25})`,e.lineWidth=1+Math.random()*3,e.beginPath();let r=Math.random()*512;e.moveTo(0,r),e.bezierCurveTo(170,r+Math.random()*20-10,340,r+Math.random()*20-10,512,r+Math.random()*10-5),e.stroke()}}else if(n==="floor"){t.width=t.height=512,e.fillStyle="#3a3f46",e.fillRect(0,0,512,512);for(let s=0;s<4;s++)for(let r=0;r<4;r++)e.fillStyle=(s+r)%2?"#353a41":"#3d434b",e.fillRect(s*128+1,r*128+1,126,126)}else if(n==="pcb"){t.width=t.height=256,e.fillStyle="#000",e.fillRect(0,0,256,256),e.strokeStyle="rgba(255,255,255,0.10)",e.lineWidth=1;for(let s=0;s<70;s++){e.beginPath();let r=Math.random()*256,o=Math.random()*256;e.moveTo(r,o);for(let a=0;a<3;a++)Math.random()<.5?r+=Math.random()*60-30:o+=Math.random()*60-30,e.lineTo(r,o);e.stroke()}}else if(n==="peg"){t.width=t.height=128,e.fillStyle="#c9b48f",e.fillRect(0,0,128,128),e.fillStyle="#6d5f47";for(let s=0;s<8;s++)for(let r=0;r<8;r++)e.beginPath(),e.arc(s*16+8,r*16+8,2,0,7),e.fill()}let i=new gi(t);return i.colorSpace=Je,i.wrapS=i.wrapT=lo,Nr.set(n,i),i}var rt=(n,t=.2,e=.6,i={})=>new Bn({color:n,metalness:t,roughness:e,...i});function it(n,t,e,i,s=0,r=0,o=0){let a=new $t(new yn(n,t,e),i);return a.position.set(s,r,o),a.castShadow=!0,a.receiveShadow=!0,a}function wn(n,t,e,i=24){let s=new $t(new Va(n,n,t,i),e);return s.castShadow=!0,s}function Ve(n,t,e,i=0,s=0,r=0){let o=new $t(new ki(n,t),e);return o.position.set(i,s,r),o}var Mo=n=>n.name.replace(/^(AMD|Intel|NVIDIA|ASUS|MSI|Gigabyte|GIGABYTE|Sapphire|EVGA|ASRock|Palit|PowerColor)\s+/i,""),tu={spinners:[],rgbMats:[],glowMats:[]},oc=tu.spinners,Ns=tu.rgbMats,Os=tu.glowMats;function eu(n){let t=[oc,Ns,Os],e={spinners:[],rgbMats:[],glowMats:[]};oc=e.spinners,Ns=e.rgbMats,Os=e.glowMats;try{e.result=n()}finally{[oc,Ns,Os]=t}return e}function Ur(n,t=1710618,e=2236962,i=!1,s=14){let r=new pe,o=.025,a=n*.07,c=rt(t,.2,.6);for(let[x,m,f,M]of[[0,n/2-a/2,n,a],[0,-n/2+a/2,n,a],[n/2-a/2,0,a,n],[-n/2+a/2,0,a,n]])r.add(it(f,M,o,c,x,m,0));let l=i?rt(16777215,0,.4,{emissive:0}):c;i&&Ns.push(l);let h=new $t(new $a(n*.455,n*.022,6,40),l);r.add(h);let u=new pe,d=wn(n*.17,o*.8,rt(e,.1,.5));d.rotation.x=Math.PI/2,u.add(d);let p=rt(e,.05,.45,i?{transparent:!0,opacity:.85}:{}),g=7;for(let x=0;x<g;x++){let m=x/g*Math.PI*2,f=new $t(new yn(n*.3,n*.13,.0015),p);f.position.set(Math.cos(m)*n*.28,Math.sin(m)*n*.28,0),f.rotation.set(.45,0,m,"ZYX"),u.add(f)}return r.add(u),oc.push({obj:u,speed:s}),r}function Qv(n){let t=new pe,{D:e,H:i,W:s}=qe,r=n.color>8947848,o=rt(n.color,.35,.5),a=rt(r?15132390:1315860,.3,.6);t.add(it(e,i,.004,a,0,0,-s/2)),t.add(it(e,.006,s,o,0,i/2,0)),t.add(it(e,.006,s,o,0,-i/2,0));let c=it(.012,i,s+.006,n.frontMesh?rt(16777215,.2,.8,{map:(()=>{let g=kr("mesh").clone();return g.needsUpdate=!0,g.repeat.set(6,13),g})()}):o,e/2+.006,0,0);t.add(c);let l=rt(r?14211288:986895,.4,.55);t.add(it(.004,i*.28,s,l,-e/2,-i*.36,0)),t.add(it(.004,.05,s,l,-e/2,i/2-.025,0)),t.add(it(.004,i*.34,.03,l,-e/2,.04,s/2-.015)),t.add(it(.004,i*.34,.03,l,-e/2,.04,-s/2+.015));for(let[g,x,m,f]of[[e,.012,0,i/2-.006],[e,.012,0,-i/2+.006],[.012,i,e/2-.006,0],[.012,i,-e/2+.006,0]])t.add(it(g,x,.01,o,m,f,s/2-.005));let h=rt(r?13619151:2105376,.5,.5);t.add(it(.15,.004,s-.02,h,.13,-.135,0)),t.add(it(.004,.09,s-.02,h,.055,-.18,0)),t.add(it(e*.42,.004,s-.01,rt(r?14737632:1579032,.3,.6),-e/2+e*.21,-i/2+.105,0));for(let[g,x]of[[-e/2+.04,-s/2+.03],[e/2-.04,-s/2+.03],[-e/2+.04,s/2-.03],[e/2-.04,s/2-.03]]){let m=wn(.014,.012,rt(1118481,0,.9));m.position.set(g,-i/2-.006,x),t.add(m)}let u=rt(2236962,.6,.3,{emissive:0});Os.push({mat:u,color:2788607,intensity:2});let d=wn(.008,.004,u);if(d.position.set(e/2-.05,i/2+.004,.03),t.add(d),n.stripe){let g=rt(16777215,0,.4,{emissive:0});Ns.push(g),t.add(it(.004,i*.8,.008,g,e/2+.013,0,s/2-.02))}if(n.wood){let g=rt(10119742,0,.7);for(let x=0;x<9;x++)t.add(it(.006,i*.9,.012,g,e/2+.014,0,-s/2+.02+x*(s-.04)/8))}let p=Ve(.06,.015,new ke({map:bn(n.name.split(" ")[0].toUpperCase(),{bg:null,fg:r?"#333":"#bbb",w:256,h:64}),transparent:!0}));return p.position.set(e/2+.0125,-i/2+.04,0),p.rotation.y=Math.PI/2,t.add(p),t}function ty(n){let t=new pe,[e,i]=Cf[n.form],s=cc[n.form],r=rt(n.color,.1,.55,{emissiveMap:kr("pcb"),emissive:3355443});t.add(it(e,i,.002,r,e/2,-i/2,-.001));let o=rt(n.accent||3882821,.85,.35),a=rt(1118481,.2,.6),[c,l]=s.socket;t.add(it(.05,.05,.004,rt(12105912,.6,.4),c,-l,.002)),t.add(it(.042,.042,.0045,rt(2763306,.2,.5),c,-l,.0025)),t.add(it(Math.min(.11,e*.45),.02,.022,o,c,-.018,.011)),t.add(it(.02,.09,.022,o,.03,-l-.005,.011)),t.add(it(.022,Math.min(.15,i*.5),.035,rt(2829875,.7,.4),.011,-Math.min(.15,i*.5)/2-.01,.0175));let[h,u,d]=s.ram;for(let x=0;x<n.ramSlots;x++)t.add(it(.0055,.138,.007,x%2?rt(5592405):a,h+x*u,-d,.0035));if(t.add(it(.089,.0065,.009,a,.06,-s.pcie,.0045)),n.form==="ATX")for(let x of[.205,.265])t.add(it(.089,.0065,.008,a,.06,-x,.004));for(let[x,m]of s.m2)t.add(it(.006,.024,.004,a,x-.042,-m,.002));t.add(it(.04,.04,.008,o,e-.05,-i+.06,.004));let p=Ve(.036,.012,new ke({map:bn(n.name.split(" ").slice(-2).join(" "),{bg:"#2b2e33",fg:"#e6e6e6",font:"bold 26px Arial"})}));if(p.position.set(e-.05,-i+.06,.0085),t.add(p),t.add(it(.009,.052,.012,a,s.m24[0],-s.m24[1],.006)),t.add(it(.02,.009,.011,a,s.cpu8[0],-s.cpu8[1],.0055)),n.glow){let x=rt(2236962,.2,.4,{emissive:0});Os.push({mat:x,color:n.glow,intensity:2.2}),t.add(it(.004,Math.min(.12,i*.45),.004,x,.026,-Math.min(.15,i*.5)/2-.01,.037)),t.add(it(.03,.004,.004,x,e-.05,-i+.035,.009))}let g=rt(2236962,.6,.35);for(let x=0;x<6;x++){let m=wn(.003,.008,g,10);m.rotation.x=Math.PI/2,m.position.set(c-.035+x*.012,-l+.035,.004),t.add(m)}return t}function ey(n){let t=new pe;t.add(it(.04,.04,.0015,rt(2055214,.2,.6),0,0,.0055));let e=n.name.startsWith("AMD"),i=new Bn({map:bn(e?`AMD
RYZEN`:`intel
CORE`,{bg:"#c7c9cc",fg:"#3a3a3a",font:"bold 44px Arial",w:256,h:256}),metalness:.7,roughness:.35});return t.add(it(.034,.034,.003,i,0,0,.0075)),t}function ny(n,t){let e=new pe;if(n.kind==="box"){let h=n.tdpMax>65,u=wn(h?.05:.046,h?.04:.03,rt(10133670,.8,.4),32);u.rotation.x=Math.PI/2,u.position.z=h?.028:.024,e.add(u);let d=Ur(h?.09:.08,1118481,1710618,!!n.rgb,18);return d.position.z=h?.052:.044,e.add(d),e}if(n.rad){let h=rt(n.color,.4,.4),u=wn(.03,.028,h,32);u.rotation.x=Math.PI/2,u.position.z=.02,e.add(u);let d=n.rgb?rt(16777215,0,.3,{emissive:0}):rt(3355443,.6,.3);n.rgb&&Ns.push(d);let p=wn(.024,.003,d,32);p.rotation.x=Math.PI/2,p.position.z=.035,e.add(p);let g=n.rad===360?.395:.275,x=t||new T,m=new T(.02,qe.H/2-.04,0).sub(x),f=rt(n.color===15658734?15263976:1381653,.6,.45);e.add(it(g,.027,.124,f,m.x,m.y+.01,m.z));let M=n.rad/120;for(let _=0;_<M;_++){let I=Ur(.118,n.color===15658734?15790320:1381653,n.color===15658734?14540253:2105376,!!n.rgb,12);I.rotation.x=Math.PI/2,I.position.set(m.x-g/2+.06+_*.12+(g-M*.12)/2-0,m.y-.017,m.z),I.scale.set(1,1,.9),e.add(I)}let v=rt(1118481,.1,.7);for(let _ of[-.012,.012]){let I=new Tr([new T(.025,0,.025+_*0),new T(.06,.02+_,.05),new T(m.x+g/2-.05,m.y-.06,m.z+.07+_),new T(m.x+g/2-.02,m.y,m.z+.05+_)]),w=new $t(new go(I,24,.0055,8,!1),v);w.castShadow=!0,e.add(w)}return e}let i=n.kind==="tower2"?[-.035,.04]:[0],s=rt(n.color===9136722?13158600:12172996,.85,.3),r=new yn(.048,.125,9e-4),o=rt(12946255,.9,.25);for(let h of i){for(let u=0;u<26;u++){let d=new $t(r,s);d.position.set(h,0,.035+u*.0045),d.castShadow=!0,e.add(d)}e.add(it(.05,.127,.006,rt(n.color,.5,.4),h,0,.035+26*.0045+.002));for(let u=0;u<4;u++){let d=wn(.003,.13,o,8);d.rotation.x=Math.PI/2,d.position.set(h+(u%2?.01:-.01),-.03+u*.02,.07),e.add(d)}}e.add(it(.04,.04,.01,rt(12946255,.9,.3),0,0,.012));let a=n.color===9136722,c=i[i.length-1]+.038,l=Ur(.12,a?7031350:n.color,a?13213822:2105376,!1,12);if(l.rotation.y=Math.PI/2,l.position.set(c,0,.095),e.add(l),i.length>1){let h=Ur(.12,7031350,13213822,!1,12);h.rotation.y=Math.PI/2,h.position.set(.002,0,.095),e.add(h)}return e}function iy(n){let t=new pe;t.add(it(.0013,.133,.03,rt(2055214,.2,.6),0,0,.022));let e=rt(n.color,.6,.35);if(t.add(it(.0065,.132,n.rgb?.03:.032,e,0,0,.024)),n.rgb){let s=rt(16777215,0,.3,{emissive:0,transparent:!0,opacity:.9});Ns.push(s),t.add(it(.006,.13,.006,s,0,0,.042))}let i=Ve(.09,.016,new ke({map:bn(Mo(n).split(" ").slice(0,2).join(" ").toUpperCase(),{bg:null,fg:"#ddd",font:"bold 30px Arial"}),transparent:!0}));return i.rotation.y=Math.PI/2,i.rotation.z=Math.PI/2,i.position.set(.0034,0,.026),t.add(i),t}function sy(n){let t=new pe,e=n.len,i=n.slots*.02,s=.112;t.add(it(e-.01,.0016,s,rt(1323807,.2,.6),e/2-.012,-.001,s/2)),t.add(it(e-.012,.002,s-.004,rt(2763824,.7,.4),e/2-.012,.001,s/2));let r=rt(n.color,.5,.45);t.add(it(e-.008,i-.004,s+.004,r,e/2-.012,-i/2-.002,s/2+.002));let o=Mo(n).replace(/^GeForce\s+/i,""),a=new Bn({map:bn(o.toUpperCase(),{bg:"#151515",fg:"#f2f2f2",font:"bold 34px Arial",w:512,h:64}),emissive:0,emissiveMap:bn(o.toUpperCase(),{bg:"#000",fg:"#fff",font:"bold 34px Arial",w:512,h:64})});Os.push({mat:a,color:16777215,intensity:1.2});let c=Ve(Math.min(.2,e*.6),Math.max(.012,i*.4),a,e*.42,-i/2-.002,s+.0045);if(t.add(c),n.accent){let h=rt(n.accent,.3,.4,{emissive:0});Os.push({mat:h,color:n.accent,intensity:1.5}),t.add(it(e*.25,.004,.003,h,e*.82,-i/2,s+.004))}let l=Math.min(.092,(e-.03)/n.fans*.96);for(let h=0;h<n.fans;h++){let u=Ur(l,n.color,1842204,!1,16);u.rotation.x=Math.PI/2,u.position.set(.012+(e-.03)*(h+.5)/n.fans,-i-.0015,s/2),u.scale.set(1,1,.5),t.add(u)}return t.add(it(.0015,i+.006,.12,rt(11579568,.9,.3),-.016,-i/2,.06)),n.pins&&t.add(it(.02,.008,.006,rt(1118481),e*.72,-.006,s+.004)),t}function ry(n){let t=new pe;if(n.kind==="m2")return t.add(it(.08,.022,.0012,rt(1785126,.2,.6),0,0,6e-4)),t.add(it(.06,.018,.002,new Bn({map:bn(Mo(n).split(" (")[0],{bg:"#0f0f0f",fg:"#ddd",font:"bold 26px Arial"})}),.005,0,.002)),t;if(n.kind==="hdd"){t.add(it(.147,.026,.102,rt(9212054,.8,.35)));let i=Ve(.1,.07,new Bn({map:bn(Mo(n).split(" (")[0].replace(" ",`
`),{bg:"#e8e8e8",fg:"#222",font:"bold 30px Arial",w:256,h:180})}));return i.rotation.x=-Math.PI/2,i.position.y=.0131,t.add(i),t}t.add(it(.1,.007,.07,rt(1907999,.5,.4)));let e=Ve(.085,.055,new Bn({map:bn(Mo(n).split(" (")[0].replace(" ",`
`),{bg:"#2b2f36",fg:"#fff",font:"bold 30px Arial",w:256,h:170})}));return e.rotation.x=-Math.PI/2,e.position.y=.0036,t.add(e),t}function oy(n){let t=new pe;t.add(it(.15,.086,.14,rt(1710618,.5,.45)));let e=Ve(.11,.05,new Bn({map:bn(`${n.watt} W
${n.name.split(" ")[0]}`,{bg:"#262626",fg:"#f0f0f0",font:"bold 40px Arial",w:256,h:128,border:"#555"})}));return e.position.z=.0705,t.add(e),t.add(it(.004,.05,.1,rt(657930),.076,0,0)),t}function ay(n){let t=Ur(.12,n.color||1381653,n.color?13213822:n.rgb?14540253:2763306,n.rgb,10);return t.rotation.y=Math.PI/2,t}function nu(n){return Qt[n.slots.mb?.pid]?.form||"ATX"}var xi=(n,t,e)=>new T(Qh+t,Fr-e,Or);function Pf(n,t,e){let i=nu(t),s=cc[i],r=e?Qt[e.pid]:null;if(n==="case")return{pos:new T(0,0,0),size:new T(qe.D,qe.H,qe.W)};if(n==="mb"){let o=r?.form||"ATX",[a,c]=Cf[o];return{pos:new T(Qh+a/2,Fr-c/2,Or+.003),size:new T(a,c,.008)}}if(n==="cpu")return{pos:xi(i,...s.socket).add(new T(0,0,.006)),size:new T(.045,.045,.01)};if(n==="cooler")return{pos:xi(i,...s.socket).add(new T(0,0,.06)),size:new T(.09,.12,.12)};if(n.startsWith("ram")){let o=Number(n[3]);return{pos:xi(i,s.ram[0]+o*s.ram[1],s.ram[2]).add(new T(0,0,.02)),size:new T(.008,.135,.036)}}if(n==="gpu"){let o=r?.len||.24,a=(r?.slots||2)*.02;return{pos:new T(-qe.D/2+.03+o/2-.012,Fr-s.pcie-a/2,Or+.06),size:new T(o,a,.115)}}if(n.startsWith("m2")){let[o,a]=s.m2[Number(n[3])]||s.m2[0];return{pos:xi(i,o,a).add(new T(0,0,.003)),size:new T(.08,.024,.006)}}if(ac[n]){let o=n==="hdd0"?[.147,.026,.102]:[.1,.008,.07];return{pos:new T(...ac[n]),size:new T(...o)}}return n==="psu"?{pos:new T(...bo),size:new T(.15,.086,.14)}:Jh[n]?{pos:new T(...Jh[n]),size:new T(.026,.12,.12)}:null}function iu(n,t,e){let i=Qt[e.pid],s=nu(t),r=cc[s],o;switch(i.type){case"case":o=Qv(i);break;case"mb":o=ty(i),o.position.set(Qh,Fr,Or);break;case"cpu":o=ey(i),o.position.copy(xi(s,...r.socket));break;case"cooler":{let a=xi(s,...r.socket);o=ny(i,a),o.position.copy(a);break}case"ram":{o=iy(i);let a=Number(n[3]);o.position.copy(xi(s,r.ram[0]+a*r.ram[1],r.ram[2]));break}case"gpu":o=sy(i),o.position.set(-qe.D/2+.03,Fr-r.pcie+.004,Or+.004);break;case"storage":if(o=ry(i),i.kind==="m2"){let[a,c]=r.m2[Number(n[3])]||r.m2[0];o.position.copy(xi(s,a,c))}else o.position.set(...ac[n]);break;case"psu":o=oy(i),o.position.set(...bo);break;case"fan":o=ay(i),o.position.set(...Jh[n]);break}return o}function su(n,t){let e=nu(t),i=cc[e];if(n==="mb24")return xi(e,i.m24[0]+.006,i.m24[1]).add(new T(0,0,.008));if(n==="cpu8")return xi(e,i.cpu8[0],i.cpu8[1]-.006).add(new T(0,0,.008));if(n==="gpu"){let r=Qt[t.slots.gpu?.pid];return new T(-qe.D/2+.03+(r?.len||.24)*.72,Fr-i.pcie-.002,Or+.124)}let s=ac[n];return s?new T(s[0]-(n==="hdd0"?.075:.052),s[1],s[2]+.02):new T}var cy=new T(bo[0]+.08,bo[1]+.01,bo[2]+.03);function ru(n,t){let e=su(n,t),i=cy.clone().add(new T(0,n.length%3*.01,0)),s;n==="mb24"?s=[i,new T(i.x+.12,i.y+.03,.04),new T(e.x+.05,e.y-.06,.02),new T(e.x+.03,e.y,e.z+.01),e]:n==="cpu8"?s=[i,new T(i.x-.02,i.y+.08,-.04),new T(-qe.D/2+.02,.1,-.06),new T(e.x-.01,e.y+.02,e.z+.02),e]:n==="gpu"?s=[i,new T(i.x+.06,i.y+.04,.08),new T(e.x,e.y-.02,e.z+.03),e]:s=[i,new T(0,i.y-.01,.06),new T(e.x-.03,e.y,e.z+.02),e];let r=new Tr(s),o=n==="mb24"?.0075:n==="cpu8"||n==="gpu"?.005:.003,a=n.startsWith("sata")||n==="hdd0"?2105376:1118481,c=new $t(new go(r,48,o,8,!1),rt(a,.1,.8));c.castShadow=!0;let l=it(n==="mb24"?.012:.01,n==="mb24"?.054:.012,.012,rt(657930,.1,.7),e.x,e.y,e.z);n==="cpu8"&&l.scale.set(2,.8,1);let h=new pe;return h.add(c,l),h}function If(n){let t=new pe,e=["case","mb","cpu","cooler","ram0","ram1","ram2","ram3","gpu","m2_0","m2_1","sata0","sata1","hdd0","psu","fanF0","fanF1","fanR0"];for(let i of e){let s=n.slots[i];if(!s||!Qt[s.pid])continue;let r=iu(i,n,s);r&&t.add(r)}if(n.slots.psu)for(let i of Object.keys(n.cables))t.add(ru(i,n));return t}var Vt={x0:-1.6,x1:5.4,z0:-.75,z1:5.25,h:2.8},ou=1.62,ii=.28,si={x:4.95,z:2.2},_i={x:-1.2,z:2.2,top:.62},Df=[1.45,2.2,2.95],ly=[[-.72,-.75,1.22,.3],[1.7,-.75,3.05,-.28],[4.45,1.3,5.4,3.1],[-1.6,1.05,-.78,3.35],[4.85,4.65,5.4,5.25],[-1.6,4.4,-.6,5.25]],hy={x:.25,z:1.05,yaw:0,pitch:-.32};function Lf(n){let t=new Ua({antialias:!0,preserveDrawingBuffer:!0});t.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),t.setSize(n.clientWidth,n.clientHeight),t.shadowMap.enabled=!0,t.shadowMap.type=Nh,t.toneMapping=Oh,t.toneMappingExposure=1,t.outputColorSpace=Je,n.appendChild(t.domElement);let e=t.domElement;e.tabIndex=0;let i=new Sr;i.background=new ee(12568786);let s=new Mr(t);i.environment=s.fromScene(new rc,.04).texture,i.environmentIntensity=.4;let r=new _n(65,n.clientWidth/n.clientHeight,.02,40),o=new sc(r,e);o.enableDamping=!0,o.dampingFactor=.09,o.minDistance=.28,o.maxDistance=1.6,o.maxPolarAngle=Math.PI*.62,o.screenSpacePanning=!0,o.enabled=!1,i.add(new Ya(15922687,5918792,.9));let a=new ja(16777215,1.4);a.position.set(1.4,3,2.2),a.castShadow=!0,a.shadow.mapSize.set(2048,2048),Object.assign(a.shadow.camera,{left:-1.2,right:1.4,top:1.2,bottom:-.6,near:.5,far:7}),a.shadow.bias=-4e-4,i.add(a);let c=new Za(16769720,5,3,.75,.6,1.4);c.position.set(-.55,1.55,.15),c.target.position.copy(Fs),i.add(c,c.target);for(let[D,V]of[[.6,1.4],[3.4,1.4],[.6,3.9],[3.4,3.9]]){let Q=new Is(16774374,5,6,1.6);Q.position.set(D,Vt.h-.15,V),i.add(Q)}let l=new Is(6728447,0,.6,2);l.position.copy(Fs).add(new T(.02,.05,0)),i.add(l);let h=Vt.x1-Vt.x0,u=Vt.z1-Vt.z0,d=(Vt.x0+Vt.x1)/2,p=(Vt.z0+Vt.z1)/2,g=kr("floor").clone();g.needsUpdate=!0,g.repeat.set(h/1.2,u/1.2);let x=new $t(new ki(h,u),rt(16777215,0,.85,{map:g}));x.rotation.x=-Math.PI/2,x.position.set(d,0,p),x.receiveShadow=!0,i.add(x);let m=new $t(new ki(h,u),rt(16053490,0,1));m.rotation.x=Math.PI/2,m.position.set(d,Vt.h,p),i.add(m);let f=rt(14672870,0,.95),M=rt(3426654,0,.9),v=Ve(h,Vt.h,M,d,Vt.h/2,Vt.z0);v.receiveShadow=!0,i.add(v);let _=Ve(h,Vt.h,f,d,Vt.h/2,Vt.z1);_.rotation.y=Math.PI,i.add(_);let I=Ve(u,Vt.h,f,Vt.x0,Vt.h/2,p);I.rotation.y=Math.PI/2,i.add(I);let w=Ve(u,Vt.h,f,Vt.x1,Vt.h/2,p);w.rotation.y=-Math.PI/2,i.add(w);let C=rt(2830131,.1,.8);i.add(it(h,.08,.02,C,d,.04,Vt.z1-.01),it(.02,.08,u,C,Vt.x0+.01,.04,p),it(.02,.08,u,C,Vt.x1-.01,.04,p));let P=new ke({color:16776434});for(let[D,V]of[[.6,1.4],[3.4,1.4],[.6,3.9],[3.4,3.9]]){let Q=new $t(new yn(1,.03,.3),P);Q.position.set(D,Vt.h-.02,V),i.add(Q)}let S=(()=>{let D=document.createElement("canvas");D.width=64,D.height=128;let V=D.getContext("2d"),Q=V.createLinearGradient(0,0,0,128);Q.addColorStop(0,"#6fa8e8"),Q.addColorStop(.7,"#cfe6ff"),Q.addColorStop(.72,"#7f9a7a"),Q.addColorStop(1,"#5d7a58"),V.fillStyle=Q,V.fillRect(0,0,64,128);let et=new gi(D);return et.colorSpace=Je,et})();for(let D of[.6,4]){let V=Ve(1.3,1.3,new ke({map:S}),Vt.x1-.005,1.55,D);V.rotation.y=-Math.PI/2,i.add(V);let Q=rt(16119285,.1,.5);i.add(it(.05,1.38,.05,Q,Vt.x1-.02,1.55,D-.67),it(.05,1.38,.05,Q,Vt.x1-.02,1.55,D+.67),it(.05,.05,1.38,Q,Vt.x1-.02,2.22,D),it(.05,.05,1.38,Q,Vt.x1-.02,.88,D),it(.04,1.3,.03,Q,Vt.x1-.02,1.55,D),it(.18,.03,1.4,Q,Vt.x1-.09,.86,D))}let y=new pe;y.add(it(1,2.1,.05,rt(7031347,.1,.6),0,1.05,0)),y.add(it(1.12,.06,.08,rt(15790320,.1,.5),0,2.13,0));let A=wn(.02,.12,rt(13421772,.9,.2));A.rotation.z=Math.PI/2,A.position.set(.38,1,-.05),y.add(A);let k=Ve(.36,.12,new ke({map:bn("\u0412\u042B\u0425\u041E\u0414",{bg:"#1c8f3c",fg:"#fff",font:"bold 48px Arial",w:256,h:86})}),0,2.32,-.03);k.rotation.y=Math.PI,y.add(k),y.position.set(2.2,0,Vt.z1-.03),i.add(y);let z=rt(16777215,.05,.7,{map:(()=>{let D=kr("wood");return D.repeat.set(2,1),D})()});i.add(it(1.9,.04,.85,z,.25,Ge-.02,-.15));let X=rt(2236962,.7,.4);for(let[D,V]of[[-.65,-.52],[1.15,-.52],[-.65,.22],[1.15,.22]])i.add(it(.04,Ge-.04,.04,X,D,(Ge-.04)/2,V));i.add(it(1.8,.02,.7,rt(3355443,.4,.6),.25,.18,-.15)),i.add(it(.62,.003,.42,rt(1713459,0,.95),.02,Ge+.0015,0)),i.add(it(.2,.08,.14,rt(10254927,0,.85),-.55,Ge+.04,-.35)),i.add(it(.16,.06,.12,rt(11832667,0,.85),-.55,Ge+.11,-.35));let st=rt(13777450,.3,.5),q=rt(12106946,.9,.3),at=wn(.008,.11,st);at.rotation.z=Math.PI/2,at.position.set(-.32,Ge+.008,.2),i.add(at);let $=wn(.002,.08,q);$.rotation.z=Math.PI/2,$.position.set(-.225,Ge+.008,.2),i.add($);let xt=Ve(1.3,.62,rt(16777215,0,.9,{map:(()=>{let D=kr("peg").clone();return D.needsUpdate=!0,D.repeat.set(10,5),D})()}),.05,1.42,Vt.z0+.005);i.add(xt),i.add(it(.02,.16,.012,st,-.45,1.45,-.735),it(.006,.12,.006,q,-.45,1.32,-.735)),i.add(it(.02,.14,.012,rt(15778841,.3,.5),-.38,1.47,-.735),it(.005,.1,.005,q,-.38,1.35,-.735)),i.add(it(.16,.05,.03,rt(3046865,.3,.5),.45,1.5,-.73)),i.add(it(.03,.18,.02,rt(3355443,.4,.5),.28,1.42,-.735)),i.add(Ve(.62,.12,new ke({map:bn("\u0412\u0415\u0420\u0421\u0422\u0410\u041A \xB7 \u0421\u0411\u041E\u0420\u041A\u0410 \u0418 \u0420\u0415\u041C\u041E\u041D\u0422",{bg:"#10151c",fg:"#ffcc33",font:"bold 44px Arial",w:1024,h:200,border:"#ffcc33"})}),.05,1.86,Vt.z0+.01));let gt=new pe,At=rt(1118742,.4,.45);gt.add(it(.56,.33,.02,At,0,.27,0));let Yt=document.createElement("canvas");Yt.width=1024,Yt.height=576;let ve=new gi(Yt);ve.colorSpace=Je,gt.add(Ve(.535,.301,new ke({map:ve,toneMapped:!1}),0,.27,.0105)),gt.add(it(.04,.16,.03,At,0,.08,-.03)),gt.add(it(.22,.012,.16,At,0,.006,-.02)),gt.position.set(.56,Ge,-.22),gt.rotation.y=-.3,i.add(gt),i.add(it(.36,.018,.12,rt(1776415,.3,.6),.66,Ge+.009,.16));let K=rt(2894898,.2,.7),lt=new yn(.018,.006,.018),Rt=new Oa(lt,K,60);{let D=new ye,V=0;for(let Q=0;Q<4;Q++)for(let et=0;et<15;et++)D.makeTranslation(.66-.16+et*.0228,Ge+.021,.16-.04+Q*.025),Rt.setMatrixAt(V++,D)}i.add(Rt),i.add(it(.06,.025,.1,rt(1776415,.3,.5),.92,Ge+.0125,.18));let pt=rt(5265247,.6,.45),Ft=new pe;for(let D of[1.72,3.02])for(let V of[-.72,-.3])Ft.add(it(.03,2,.03,pt,D,1,V));let Xt=[10254927,11832667,2964042,9117214,1989259,15263976,2236962,2976570],Zt=0;for(let D of[.25,.75,1.25,1.75]){Ft.add(it(1.32,.025,.45,pt,2.37,D,-.51));let V=1.8;for(;V<2.9;){let Q=.16+Zt*37%10/50,et=.14+Zt*53%10/40;if(V+Q>2.95)break;Ft.add(it(Q,et,.32,rt(Xt[Zt%Xt.length],0,.85),V+Q/2,D+.0125+et/2,-.52)),V+=Q+.03,Zt++}}i.add(Ft),i.add(Ve(.7,.14,new ke({map:bn("\u0421\u041A\u041B\u0410\u0414 \u0414\u0415\u0422\u0410\u041B\u0415\u0419",{bg:"#10151c",fg:"#fff",font:"bold 50px Arial",w:512,h:100})}),2.37,2.2,Vt.z0+.01));let le=new pe,he=rt(15328476,.05,.6);le.add(it(.8,.035,1.6,he,0,Ge-.018,0));for(let[D,V]of[[-.36,-.76],[.36,-.76],[-.36,.76],[.36,.76]])le.add(it(.035,Ge-.035,.035,X,D,(Ge-.035)/2,V));let Ee=new pe;Ee.add(it(.025,.4,.68,At,0,.32,0));let O=document.createElement("canvas");O.width=1024,O.height=600;let Mn=new gi(O);Mn.colorSpace=Je;let ie=Ve(.655,.375,new ke({map:Mn,toneMapped:!1}),-.0135,.32,0);ie.rotation.y=-Math.PI/2,Ee.add(ie),Ee.add(it(.03,.18,.05,At,.03,.1,0)),Ee.add(it(.18,.012,.24,At,.02,.006,0)),Ee.position.set(.2,Ge,0),le.add(Ee),le.add(it(.14,.018,.42,rt(1776415,.3,.6),-.15,Ge+.009,0)),le.add(it(.1,.025,.06,rt(1776415,.3,.5),-.15,Ge+.0125,-.32)),le.add(it(.42,.45,.2,rt(1579292,.4,.5),.1,.25,.55));let se=new $t(new yn(.005,.01,.1),new ke({color:3837183}));se.position.set(-.11,.42,.55),le.add(se);let kt=wn(.04,.09,rt(12597547,.1,.4));kt.position.set(-.05,Ge+.045,.55),le.add(kt);let _e=new pe,Ot=rt(2237480,.2,.7);_e.add(it(.48,.08,.48,Ot,0,.48,0),it(.08,.6,.46,Ot,-.22,.85,0));let R=wn(.03,.42,rt(8947848,.8,.3));R.position.y=.23,_e.add(R),_e.add(it(.5,.03,.06,Ot,0,.04,0),it(.06,.03,.5,Ot,0,.04,0)),_e.position.set(-.78,0,.1),_e.rotation.y=.15,le.add(_e),le.position.set(si.x,0,si.z),i.add(le);let b=document.createElement("canvas");b.width=768,b.height=512;let B=new gi(b);B.colorSpace=Je;let tt=Ve(1.2,.8,new ke({map:B}),Vt.x1-.045,1.75,si.z);tt.rotation.y=-Math.PI/2,i.add(tt),i.add(Object.assign(it(.03,.84,1.24,rt(9080726,.5,.5),Vt.x1-.02,1.75,si.z)));let nt=new pe;nt.add(it(.72,.04,2.25,rt(4014923,.5,.5),0,_i.top-.02,0)),nt.add(it(.72,.03,2.25,rt(4014923,.5,.5),0,.12,0));for(let D of[-1.1,1.1])for(let V of[-.33,.33])nt.add(it(.03,_i.top,.03,pt,V,_i.top/2,D));nt.position.set(_i.x,0,_i.z),i.add(nt);{let D=Ve(.9,.16,new ke({map:bn("\u041A\u041E\u041C\u041F\u042C\u042E\u0422\u0415\u0420\u042B",{bg:"#10151c",fg:"#ffcc33",font:"bold 50px Arial",w:512,h:90})}),Vt.x0+.01,1.55,_i.z);D.rotation.y=Math.PI/2,i.add(D)}let Y=new pe;i.add(Y);let Ct=new pe,dt=rt(3887208,0,.9);Ct.add(it(.85,.4,1.7,dt,0,.22,0),it(.22,.45,1.7,dt,-.32,.6,0),it(.85,.3,.2,dt,0,.5,-.85),it(.85,.3,.2,dt,0,.5,.85)),Ct.position.set(-1.12,0,4.4),i.add(Ct);let Et=wn(.18,.4,rt(11752478,0,.8));Et.position.set(5.12,.2,4.95),i.add(Et);let re=new $t(new Wa(.42,1),rt(3112242,0,.8));re.position.set(5.12,.85,4.95),re.scale.set(1,1.3,1),i.add(re);let ot=wn(.14,.38,rt(2830131,.6,.4));ot.position.set(1.45,.19,-.45),i.add(ot);let Tt=Ve(.8,1.1,new ke({map:bn(`PC BUILD
SIM

\u0441\u043E\u0431\u0435\u0440\u0438
\u0441\u0432\u043E\u0439 \u041F\u041A`,{bg:"#1d2b3a",fg:"#ffcc33",font:"bold 60px Arial",w:400,h:560,border:"#ffcc33"})}),.4,1.6,Vt.z1-.01);Tt.rotation.y=Math.PI,i.add(Tt);let Bt=new ke({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1}),Ht=[];function yt(D,V,Q,et,vt,ne,jt,Le){let Xe=new $t(new yn(Q,et,vt),Bt);return Xe.position.set(ne,jt,Le),Xe.userData.interact={id:D,label:V},i.add(Xe),Ht.push(Xe),Xe}yt("bench","\u0420\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0437\u0430 \u0432\u0435\u0440\u0441\u0442\u0430\u043A\u043E\u043C",1.9,.8,.95,.25,Ge+.35,-.15),yt("office","\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u043E\u0439 \u2014 \u043F\u043E\u0447\u0442\u0430, \u043C\u0430\u0433\u0430\u0437\u0438\u043D, \u0437\u0430\u043A\u0430\u0437\u044B",.9,.8,1.6,si.x,Ge+.3,si.z),yt("shelf","\u0421\u043A\u043B\u0430\u0434 \u0434\u0435\u0442\u0430\u043B\u0435\u0439",1.35,2,.5,2.37,1,-.5),yt("door","\u0417\u0430\u043A\u043E\u043D\u0447\u0438\u0442\u044C \u0434\u0435\u043D\u044C",1,2.1,.2,2.2,1.05,Vt.z1-.1),yt("board","\u0414\u043E\u0441\u043A\u0430 \u0437\u0430\u043A\u0430\u0437\u043E\u0432",.2,.8,1.2,Vt.x1-.1,1.75,si.z);let oe=Df.map((D,V)=>yt("park:"+V,"",.7,.6,.6,_i.x,_i.top+.25,D)),zt=new pe;zt.position.copy(Fs),i.add(zt);let fe=new pe;zt.add(fe);let L=new pe;zt.add(L);let ht=new pe;zt.add(ht);let W=new pe;i.add(W);let Z={},ut=null,ft=!1,Gt=!1,Ae={spinners:[],rgbMats:[],glowMats:[]},Ze=[];function ae(D){D.traverse(V=>{V.geometry&&V.geometry.dispose(),V.material&&V.material!==Bt&&(Array.isArray(V.material)?V.material:[V.material]).forEach(Q=>{(!Q.map||!Q.map.isCanvasTexture)&&Q.dispose()})})}function Un(D,{animateSlot:V=null}={}){for(let et of Object.keys(Z))zt.remove(Z[et]),ae(Z[et]),delete Z[et];L.children.slice().forEach(et=>{L.remove(et),ae(et)}),W.children.slice().forEach(et=>{W.remove(et),ae(et)}),Gt=!1,D=D||{slots:{},cables:{}};let Q=["case","mb","cpu","cooler","ram0","ram1","ram2","ram3","gpu","m2_0","m2_1","sata0","sata1","hdd0","psu","fanF0","fanF1","fanR0"];Ae=eu(()=>{for(let et of Q){let vt=D.slots[et];if(!vt||!Qt[vt.pid])continue;let ne=iu(et,D,vt);ne&&(ne.userData.pick={kind:"part",slot:et},ne.traverse(jt=>{jt.isMesh&&(jt.castShadow=!0,jt.receiveShadow=!0)}),zt.add(ne),Z[et]=ne,Qt[vt.pid].rgb&&(Gt=!0))}for(let et of Object.keys(D.cables))D.slots.psu&&L.add(ru(et,D))});for(let et of Q)D.slots[et]?.dirty&&Z[et]&&qn(et,Z[et]);if(V&&Z[V]){let et=Z[V],vt=et.position.clone(),ne=V==="case"?new T(0,.25,0):["psu","hdd0","sata0","sata1"].includes(V)?new T(0,0,.22):new T(0,.02,.18);et.position.add(ne),ut={g:et,from:et.position.clone(),to:vt,t0:performance.now(),dur:380}}Yr()}function qn(D,V){zt.updateMatrixWorld(!0);let Q=new Wn().setFromObject(V);if(Q.isEmpty())return;let et=Math.min(900,Math.max(120,Math.round(Q.getSize(new T).length()*1600))),vt=new Float32Array(et*3);for(let Le=0;Le<et;Le++)vt[Le*3]=zn.lerp(Q.min.x,Q.max.x,Math.random()),vt[Le*3+1]=zn.lerp(Q.min.y,Q.max.y,Math.random()),vt[Le*3+2]=zn.lerp(Q.min.z,Q.max.z,Math.random());let ne=new gn;ne.setAttribute("position",new vn(vt,3));let jt=new Ba(ne,new mo({color:10130570,size:.0045,transparent:!0,opacity:.9,depthWrite:!1}));jt.userData.slot=D,W.add(jt),V.traverse(Le=>{Le.isMesh&&Le.material&&Le.material.color&&!Le.material.map&&(Le.material=Le.material.clone(),Le.material.color.lerp(new ee(9275260),.28),Le.material.roughness=1)})}function No(D){let V=W.children.find(vt=>vt.userData.slot===D);if(!V)return;W.remove(V),i.add(V);let Q=V.geometry.attributes.position.count,et=new Float32Array(Q*3);for(let vt=0;vt<Q;vt++)et[vt*3]=(Math.random()-.3)*.6,et[vt*3+1]=Math.random()*.5,et[vt*3+2]=.3+Math.random()*.8;Ze.push({pts:V,vel:et,t:0})}function Oo(D,V,Q){fe.children.slice().forEach(et=>{fe.remove(et),ae(et)});for(let et of D){let vt=Pf(et.slot,V||{slots:{},cables:{}},Q);if(!vt)continue;let ne=et.ok?3997583:16731469,jt=new $t(new yn(vt.size.x+.004,vt.size.y+.004,vt.size.z+.004),new ke({color:ne,transparent:!0,opacity:.22,depthWrite:!1}));jt.position.copy(vt.pos),jt.add(new po(new Ga(jt.geometry),new Er({color:ne}))),jt.userData.pick={kind:"ghost",slot:et.slot,ok:et.ok,reason:et.reason},jt.renderOrder=10,fe.add(jt)}}function Mi(D,V){ht.children.slice().forEach(Q=>{ht.remove(Q),ae(Q)});for(let Q of D){let et=Q.connected?3997583:16762161,vt=new $t(new Xa(Q.id==="mb24"?.014:.011,16,12),new ke({color:et,transparent:!0,opacity:.75,depthTest:!1}));vt.position.copy(su(Q.id,V)),vt.renderOrder=20,vt.userData.pick={kind:"cable",id:Q.id,connected:Q.connected},vt.userData.pulse=!Q.connected,ht.add(vt)}}function qr(D){ft=D,Yr()}function Yr(){for(let D of Ae.glowMats)D.mat.emissive.setHex(ft?D.color:0),D.mat.emissiveIntensity=D.intensity;l.intensity=ft&&Gt?.35:0,ft||Ae.rgbMats.forEach(D=>D.emissive.setHex(0))}function Fo(D){Y.children.slice().forEach(V=>{Y.remove(V),ae(V)}),D.forEach((V,Q)=>{if(oe[Q].userData.interact.label=V?V.label:"",oe[Q].visible=!!V,!V)return;let{result:et}=eu(()=>If(V.build));et.position.set(_i.x+.02,_i.top+qe.H/2+.012,Df[Q]),et.rotation.y=Math.PI/2,et.traverse(ne=>{ne.isMesh&&(ne.castShadow=!1,ne.receiveShadow=!1)});let vt=Ve(.2,.06,new ke({map:bn(V.tag,{bg:V.own?"#2e7dd1":"#ffcc33",fg:V.own?"#fff":"#111",font:"bold 34px Arial",w:256,h:76})}));vt.position.set(0,-qe.H/2+.06,qe.W/2+.03),et.add(vt),Y.add(et)})}let Te="walk",Fe={x:1.6,z:2.8,yaw:.35,pitch:-.12},We={f:0,b:0,l:0,r:0,run:!1},Si={x:0,y:0},Xs=!0,je={pos:new T(.42,1.34,1.18),target:Fs.clone().add(new T(.16,-.02,0))},$i={pos:je.pos.clone(),target:je.target.clone()},ko=(D,V)=>new T(-Math.sin(D)*Math.cos(V),Math.sin(V),-Math.cos(D)*Math.cos(V));function E(){r.position.set(Fe.x,ou,Fe.z),r.lookAt(r.position.clone().add(ko(Fe.yaw,Fe.pitch)))}let U=null;function H(D,V,Q,et){let vt=Te==="build"?o.target.clone():r.position.clone().add(r.getWorldDirection(new T).multiplyScalar(.8));U={fromP:r.position.clone(),toP:D.clone(),fromT:vt,toT:V.clone(),t0:performance.now(),dur:Q,done:et}}function G(D){Te=D,o.enabled=D==="build",D==="build"&&(o.target.copy(je.target),o.update()),Lt.mode(D)}function F(){document.pointerLockElement&&document.exitPointerLock(),Pn(null),Te="fly",Lt.mode("fly"),H(je.pos,je.target,700,()=>G("build"))}function ct(){Object.assign(Fe,hy);let D=new T(Fe.x,ou,Fe.z),V=Te;Te="fly",o.enabled=!1,Lt.mode("fly");let Q=V==="screen-office"?(Object.assign(Fe,{x:si.x-1.15,z:si.z,yaw:Math.PI/2,pitch:-.25}),new T(si.x-1.15,ou,si.z)):D;H(Q,Q.clone().add(ko(Fe.yaw,Fe.pitch)),650,()=>G("walk"))}function _t(){Te==="build"&&(Te="fly",o.enabled=!1,H(je.pos,je.target,600,()=>G("build")))}function Pt(D){let V=gt.localToWorld(new T(0,.27,0)),Q=gt.localToWorld(new T(0,.29,.62));Te="fly",o.enabled=!1,Lt.mode("fly"),H(Q,V,650,()=>{Te="screen-bench",Lt.mode("screen-bench"),D&&D()})}function It(){Te="fly",H(je.pos,je.target,600,()=>G("build"))}function Wt(D){document.pointerLockElement&&document.exitPointerLock(),Pn(null);let V=Ee.localToWorld(new T(0,.32,0)),Q=Ee.localToWorld(new T(-.6,.33,0));Te="fly",Lt.mode("fly"),H(Q,V,650,()=>{Te="screen-office",Lt.mode("screen-office"),D&&D()})}let Lt={pick:()=>{},hover:()=>{},interact:()=>{},target:()=>{},mode:()=>{},lock:()=>{}},wt={KeyW:"f",ArrowUp:"f",KeyS:"b",ArrowDown:"b",KeyA:"l",ArrowLeft:"l",KeyD:"r",ArrowRight:"r"};addEventListener("keydown",D=>{!Xs||D.target.closest?.("input,textarea")||(wt[D.code]&&(We[wt[D.code]]=1,Te==="walk"&&D.preventDefault()),(D.code==="ShiftLeft"||D.code==="ShiftRight")&&(We.run=!0))}),addEventListener("keyup",D=>{wt[D.code]&&(We[wt[D.code]]=0),(D.code==="ShiftLeft"||D.code==="ShiftRight")&&(We.run=!1)}),addEventListener("blur",()=>{We.f=We.b=We.l=We.r=0});let ue=()=>.0022*(Lt.sens?Lt.sens():1);function we(D,V){Fe.yaw-=D*ue(),Fe.pitch=zn.clamp(Fe.pitch-V*ue(),-1.35,1.35)}document.addEventListener("pointerlockchange",()=>Lt.lock(document.pointerLockElement===e));function Re(){if(!matchMedia("(pointer: coarse)").matches)try{let D=e.requestPointerLock();D&&D.catch&&D.catch(()=>{})}catch{}}let Ke=new Ka,me=new Mt,bt=null,sn=new Ja(new Qe,16763955);sn.visible=!1,i.add(sn);function ge(D,V){let Q=e.getBoundingClientRect();me.set((D-Q.left)/Q.width*2-1,-((V-Q.top)/Q.height)*2+1),Ke.setFromCamera(me,r);let et=[...ht.children,...fe.children,...Object.values(Z)],vt=Ke.intersectObjects(et,!0),ne={cable:0,ghost:1,part:2},jt=null;for(let Le of vt){let Xe=Le.object;for(;Xe&&!Xe.userData.pick;)Xe=Xe.parent;if(!Xe)continue;let Yn=Xe.userData.pick;if((!jt||ne[Yn.kind]<ne[jt.pick.kind])&&(jt={pick:Yn,obj:Xe,dist:Le.distance}),Yn.kind==="cable")break}if(jt&&jt.pick.kind==="part"&&jt.pick.slot==="case"){let Le=on=>vt.find(Bo=>{let Yi=Bo.object;for(;Yi&&!Yi.userData.pick;)Yi=Yi.parent;return Yi&&on(Yi.userData.pick)}),Xe=Le(on=>on.kind==="part"&&on.slot!=="case"),Yn=Le(on=>on.slot==="case");if(Xe&&Yn&&Xe.distance<Yn.distance+.001){let on=Xe.object;for(;!on.userData.pick;)on=on.parent;jt={pick:on.userData.pick,obj:on}}}return jt}let rn=null,Nn=null;e.addEventListener("pointerdown",D=>{e.focus({preventScroll:!0}),rn={x:D.clientX,y:D.clientY,t:performance.now(),id:D.pointerId,type:D.pointerType},Te==="walk"&&D.pointerType!=="touch"&&!document.pointerLockElement&&(Nn={x:D.clientX,y:D.clientY})}),addEventListener("pointerup",D=>{if(Nn=null,!rn||D.pointerId!==rn.id)return;let V=Math.hypot(D.clientX-rn.x,D.clientY-rn.y),Q=rn;if(rn=null,D.target!==e||V>6)return;if(Te==="walk"){if(Q.type==="touch"){de&&Lt.interact(de);return}document.pointerLockElement===e?de&&Lt.interact(de):Re();return}if(Te!=="build")return;let et=ge(D.clientX,D.clientY);Lt.pick(et?et.pick:null,D.clientX,D.clientY)}),addEventListener("pointermove",D=>{if(Te==="walk"){document.pointerLockElement===e?we(D.movementX,D.movementY):Nn&&(we((D.clientX-Nn.x)*1.4,(D.clientY-Nn.y)*1.4),Nn={x:D.clientX,y:D.clientY});return}if(Te!=="build"||D.target!==e||D.pointerType==="touch")return;let V=ge(D.clientX,D.clientY),Q=V?JSON.stringify(V.pick):null;Q!==(bt&&bt.key)&&(bt=V?{...V,key:Q}:null,bt&&bt.pick.kind==="part"?(sn.setFromObject(bt.obj),sn.visible=!0):sn.visible=!1,fe.children.forEach(et=>{et.material.opacity=bt&&bt.obj===et?.45:.22}),e.style.cursor=bt?"pointer":"grab"),Lt.hover(bt?bt.pick:null,D.clientX,D.clientY)}),e.addEventListener("pointerleave",()=>{sn.visible=!1,Lt.hover(null)});let fn=new Map;e.addEventListener("touchstart",D=>{if(Te==="walk")for(let V of D.changedTouches)V.clientX>innerWidth*.4&&fn.set(V.identifier,{x:V.clientX,y:V.clientY})},{passive:!0}),e.addEventListener("touchmove",D=>{if(Te==="walk")for(let V of D.changedTouches){let Q=fn.get(V.identifier);Q&&(we((V.clientX-Q.x)*2.2,(V.clientY-Q.y)*2.2),fn.set(V.identifier,{x:V.clientX,y:V.clientY}))}},{passive:!0});let qi=D=>{for(let V of D.changedTouches)fn.delete(V.identifier)};e.addEventListener("touchend",qi),e.addEventListener("touchcancel",qi);let de=null;function Pn(D){(D?D.id+"|"+D.label:null)!==(de?de.id+"|"+de.label:null)&&(de=D,Lt.target(D))}let gs=new Mt(0,0);function In(){Ke.setFromCamera(gs,r),Ke.far=2.4;let D=Ke.intersectObjects(Ht.filter(V=>V.visible),!1)[0];Ke.far=1/0,Pn(D?{...D.object.userData.interact}:null)}function li(D,V){D=zn.clamp(D,Vt.x0+ii,Vt.x1-ii),V=zn.clamp(V,Vt.z0+ii,Vt.z1-ii);for(let[Q,et,vt,ne]of ly){let jt=zn.clamp(D,Q,vt),Le=zn.clamp(V,et,ne),Xe=D-jt,Yn=V-Le,on=Math.hypot(Xe,Yn);if(on<ii)if(on<1e-6){let Bo=[[Q-ii,V,D-Q],[vt+ii,V,vt-D],[D,et-ii,V-et],[D,ne+ii,ne-V]].sort((Yi,_p)=>Yi[2]-_p[2]);D=Bo[0][0],V=Bo[0][1]}else D=jt+Xe/on*ii,V=Le+Yn/on*ii}return[D,V]}function hi(D){let V=We.f-We.b-Si.y,Q=We.r-We.l+Si.x,et=Math.hypot(V,Q);if(et>1&&(V/=et,Q/=et),et>.01){let vt=(We.run?3.4:2.1)*D,ne=-Math.sin(Fe.yaw),jt=-Math.cos(Fe.yaw),Le=Math.cos(Fe.yaw),Xe=-Math.sin(Fe.yaw),[Yn,on]=li(Fe.x+(ne*V+Le*Q)*vt,Fe.z+(jt*V+Xe*Q)*vt);Fe.x=Yn,Fe.z=on}E()}let $s=null;function Fu(){let D=n.clientWidth,V=n.clientHeight;t.setSize(D,V);let Q=D/V;r.aspect=Q,r.fov=Q>=1.3?60:Math.min(80,zn.radToDeg(2*Math.atan(Math.tan(zn.degToRad(30))*1.3/Q))),r.updateProjectionMatrix();let et=Q<1.1;if(je.target.copy($i.target),je.pos.copy($i.pos),et){je.target.x=Fs.x+.01,je.target.y=Fs.y-.03;let vt=$i.pos.clone().sub($i.target);je.pos.copy(je.target).add(vt.multiplyScalar(Q<.7?.62:.8)),je.pos.x=je.target.x+.06}else{let vt=$i.pos.clone().sub($i.target);je.pos.copy(je.target).add(vt.multiplyScalar(.72))}$s!==null&&$s!==et&&Te==="build"&&_t(),$s=et}addEventListener("resize",Fu),Fu(),E();let ku=performance.now(),Bu=()=>{};function zu(D){let V=Math.min(.05,(D-ku)/1e3);if(ku=D,ut){let et=Math.min(1,(D-ut.t0)/ut.dur);ut.g.position.lerpVectors(ut.from,ut.to,1-Math.pow(1-et,3)),et>=1&&(ut=null)}if(U){let et=Math.min(1,(D-U.t0)/U.dur),vt=et<.5?2*et*et:1-Math.pow(-2*et+2,2)/2;r.position.lerpVectors(U.fromP,U.toP,vt);let ne=new T().lerpVectors(U.fromT,U.toT,vt);if(r.lookAt(ne),et>=1){let jt=U;U=null,o.target.copy(jt.toT),jt.done&&jt.done()}}else Te==="walk"?(Xs?hi(V):E(),In()):Te==="build"&&o.update();if(ft){for(let vt of Ae.spinners)vt.obj.rotation.z+=vt.speed*V;let et=D/4e3%1;Ae.rgbMats.forEach((vt,ne)=>{vt.emissive.setHSL((et+ne*.07)%1,1,.5),vt.emissiveIntensity=1.6}),Gt&&l.color.setHSL(et,1,.55)}let Q=.45+Math.sin(D/180)*.3;ht.children.forEach(et=>{et.userData.pulse&&(et.material.opacity=Q)});for(let et=Ze.length-1;et>=0;et--){let vt=Ze[et];vt.t+=V;let ne=vt.pts.geometry.attributes.position;for(let jt=0;jt<ne.count;jt++)ne.array[jt*3]+=vt.vel[jt*3]*V,ne.array[jt*3+1]+=vt.vel[jt*3+1]*V,ne.array[jt*3+2]+=vt.vel[jt*3+2]*V;ne.needsUpdate=!0,vt.pts.material.opacity=Math.max(0,.9-vt.t*.9),vt.t>1.1&&(i.remove(vt.pts),ae(vt.pts),Ze.splice(et,1))}sn.visible&&bt?.obj&&sn.setFromObject(bt.obj),Te!=="build"&&(sn.visible=!1),Bu(D,V),t.render(i,r),requestAnimationFrame(zu)}return requestAnimationFrame(zu),{setBuild:Un,setGhosts:Oo,setCablePoints:Mi,setPower:qr,blowDust:No,setParked:Fo,enterBuild:F,exitToWalk:ct,resetCamera:_t,lookAtScreen:Pt,backToBench:It,lookAtOffice:Wt,lock:Re,get mode(){return Te},get target(){return de},set inputEnabled(D){Xs=D,D||(We.f=We.b=We.l=We.r=0,Si.x=Si.y=0)},setJoystick(D,V){Si.x=D,Si.y=V},screen:{canvas:Yt,texture:ve},office:{canvas:O,texture:Mn},board:{canvas:b,texture:B},on(D,V){Lt[D]=V},set onFrame(D){Bu=D},renderer:t,camera:r,caseRoot:zt,ghostRoot:fe,pointRoot:ht,player:Fe,teleport(D,V,Q,et=-.1){Object.assign(Fe,{x:D,z:V,yaw:Q,pitch:et}),E()},project(D){let V=new T;D.getWorldPosition(V),V.project(r);let Q=e.getBoundingClientRect();return{x:Q.left+(V.x+1)/2*Q.width,y:Q.top+(1-V.y)/2*Q.height}}}}function Uf(n,t){let e=n.getContext("2d"),i=n.width,s=n.height,r={mode:"off",t0:performance.now()},o=!0;function a(M,v={}){r={mode:M,t0:performance.now(),...v},o=!0}let c=(M,v="#d0d0d0")=>{e.font=`${M}px "Courier New", monospace`,e.fillStyle=v,e.textAlign="left",e.textBaseline="top"},l=(M,v="#fff",_="bold",I="left")=>{e.font=`${_} ${M}px Arial, sans-serif`,e.fillStyle=v,e.textAlign=I,e.textBaseline="middle"};function h(M,v){let _=M.split(" "),I=[],w="";for(let C of _){let P=w?w+" "+C:C;e.measureText(P).width>v&&w?(I.push(w),w=C):w=P}return w&&I.push(w),I}function u(M){e.fillStyle="#000",e.fillRect(0,0,i,s);let v=["American Megatrends BIOS v2.21",`\u041C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u043A\u0430\u044F \u043F\u043B\u0430\u0442\u0430: ${r.mb||"\u2014"}`,`\u041F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440: ${r.cpu||"\u2014"}`,`\u041F\u0430\u043C\u044F\u0442\u044C: ${r.ram||0} \u041C\u0411 ... OK`,`\u0412\u0438\u0434\u0435\u043E: ${r.gpu||"\u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u0430\u044F \u0433\u0440\u0430\u0444\u0438\u043A\u0430"}`,`\u041D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u0438: ${r.drives||"\u043D\u0435\u0442"}`];c(24,"#cfcfcf");let _=Math.min(v.length,Math.floor(M/180)+1);for(let I=0;I<_;I++)e.fillText(v[I],40,40+I*34);r.error&&M>1300&&(c(26,"#ff5555"),h(r.error,i-80).forEach((I,w)=>e.fillText(I,40,300+w*34)),c(20,"#888"),e.fillText("\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \xAB\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C\xBB, \u0447\u0442\u043E\u0431\u044B \u0438\u0441\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0443",40,s-50))}function d(M){e.fillStyle="#000",e.fillRect(0,0,i,s);let v=i/2,_=s/2-30,I=46;e.fillStyle="#2b8cff";for(let[w,C]of[[-1,-1],[1,-1],[-1,1],[1,1]])e.fillRect(v+(w<0?-I-3:3),_+(C<0?-I-3:3),I,I);for(let w=0;w<6;w++){let C=M/300+w*.5;e.fillStyle=`rgba(255,255,255,${1-w*.15})`,e.beginPath(),e.arc(v+Math.cos(C)*26,_+130+Math.sin(C)*26,4,0,7),e.fill()}l(22,"#aaa","normal","center"),e.fillText(r.install?"\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u044B\u2026":"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026",v,s-60)}function p(M){let v=e.createLinearGradient(0,0,i,s);v.addColorStop(0,"#20163a"),v.addColorStop(.55,"#43215a"),v.addColorStop(1,"#7a2d4f"),e.fillStyle=v,e.fillRect(0,0,i,s),e.fillStyle="rgba(255,255,255,0.08)",e.beginPath(),e.ellipse(i*.7,s*.55,380,160,-.4,0,7),e.fill(),[["#f39200","3DMark"],["#1fa9e1","\u0421\u0432\u0435\u0434\u0435\u043D\u0438\u044F"],["#e0453a","OCCT"]].forEach(([C,P],S)=>{e.fillStyle=C,e.fillRect(46,40+S*110,48,48),e.fillStyle="rgba(255,255,255,.9)",e.fillRect(58,52+S*110,24,24),l(16,"#fff","normal","center"),e.fillText(P,70,106+S*110)}),e.fillStyle="rgba(20,24,32,0.92)",e.fillRect(i-470,50,420,260),e.fillStyle="#2b8cff",e.fillRect(i-470,50,420,34),l(18,"#fff","bold"),e.fillText("\u0421\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043E \u0441\u0438\u0441\u0442\u0435\u043C\u0435",i-455,67),[["\u041F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440",r.cpu],["\u0412\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0430",r.gpu||"\u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u0430\u044F"],["\u041F\u0430\u043C\u044F\u0442\u044C",`${(r.ram||0)/1024} \u0413\u0411`],["\u041D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C",r.drives],["\u0422\u0435\u043C\u043F. CPU",r.cpuTemp?r.cpuTemp+" \xB0C":"\u2014"]].forEach(([C,P],S)=>{l(17,"#8fa3bf","normal"),e.fillText(C,i-450,112+S*38),l(17,"#fff","bold"),e.fillText(String(P||"\u2014").slice(0,30),i-320,112+S*38)}),e.fillStyle="rgba(10,12,18,0.9)",e.fillRect(0,s-44,i,44),e.strokeStyle="#ff5a3c",e.lineWidth=3,e.strokeRect(12,s-36,40,28),l(17,"#ff5a3c","italic 900","center"),e.fillText("Os",32,s-22);let w=new Date;l(18,"#fff","normal","right"),e.fillText(w.toLocaleTimeString("ru-RU",{hour:"2-digit",minute:"2-digit"}),i-20,s-22)}function g(M){let v=r.dur||6e3,_=Math.min(1,M/v);e.fillStyle="#05070c",e.fillRect(0,0,i,s);let I=M/1e3;for(let P=0;P<160;P++){let S=P*97.13%1,y=(P*31.7+I*(.4+S))%1,A=P*2.39,k=i/2+Math.cos(A)*y*i*.7,z=s/2+Math.sin(A)*y*s*.7;e.fillStyle=`rgba(150,200,255,${y})`,e.fillRect(k,z,2+y*3,2+y*3)}e.save(),e.translate(i/2,s/2);let w=[];for(let P=0;P<8;P++){let[S,y,A]=[P&1?1:-1,P&2?1:-1,P&4?1:-1],k=I*1.1,z=I*.7;[S,A]=[S*Math.cos(k)-A*Math.sin(k),S*Math.sin(k)+A*Math.cos(k)],[y,A]=[y*Math.cos(z)-A*Math.sin(z),y*Math.sin(z)+A*Math.cos(z)];let X=260/(A+4);w.push([S*X,y*X])}e.strokeStyle="#ffcc33",e.lineWidth=3;for(let[P,S]of[[0,1],[1,3],[3,2],[2,0],[4,5],[5,7],[7,6],[6,4],[0,4],[1,5],[2,6],[3,7]])e.beginPath(),e.moveTo(...w[P]),e.lineTo(...w[S]),e.stroke();e.restore();let C=Math.max(1,Math.round((r.fps||60)*(.9+Math.sin(M/230)*.08+Math.random()*.04)));l(30,"#fff","bold"),e.fillText(`FPS: ${C}`,30,40),l(18,"#9fb3d1","normal"),e.fillText(`CPU ${Math.round(40+(r.cpuTemp-40)*_)} \xB0C   GPU ${Math.round(40+((r.gpuTemp||40)-40)*_)} \xB0C`,30,78),l(20,"#fff","bold","right"),e.fillText("3D BENCH SIM",i-30,40),e.fillStyle="#222",e.fillRect(30,s-40,i-60,12),e.fillStyle="#ffcc33",e.fillRect(30,s-40,(i-60)*_,12)}function x(){p(0),e.fillStyle="rgba(10,14,22,0.95)",e.fillRect(i/2-300,s/2-170,600,320),e.strokeStyle="#ffcc33",e.lineWidth=3,e.strokeRect(i/2-300,s/2-170,600,320),l(26,"#ffcc33","bold","center"),e.fillText("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0442\u0435\u0441\u0442\u0430",i/2,s/2-125),l(86,"#fff","bold","center"),e.fillText(String(r.score),i/2,s/2-30),l(22,"#9fb3d1","normal","center"),e.fillText(`\u2248 ${r.fps} FPS \u0432 \u0438\u0433\u0440\u0430\u0445 \xB7 CPU ${r.cpuTemp} \xB0C \xB7 GPU ${r.gpuTemp||"\u2014"} \xB0C`,i/2,s/2+50),r.throttle&&(l(20,"#ff7755","bold","center"),e.fillText("\u041F\u0435\u0440\u0435\u0433\u0440\u0435\u0432: \u0447\u0430\u0441\u0442\u043E\u0442\u044B \u0441\u043D\u0438\u0436\u0435\u043D\u044B!",i/2,s/2+95))}function m(M){let v=M-r.t0;switch(r.mode){case"off":e.fillStyle="#050505",e.fillRect(0,0,i,s);break;case"nosignal":e.fillStyle="#000",e.fillRect(0,0,i,s),e.fillStyle="#16213a",e.fillRect(i/2-170,s/2-40,340,80),l(26,"#cfd8ea","bold","center"),e.fillText("\u041D\u0435\u0442 \u0441\u0438\u0433\u043D\u0430\u043B\u0430",i/2,s/2);break;case"post":u(v);break;case"boot":d(v);break;case"desktop":p(v);break;case"bench":g(v);break;case"result":x();break}t.needsUpdate=!0}function f(M){let v=["post","boot","bench"].includes(r.mode)||r.mode==="nosignal"&&M-r.t0<100;(o||v||r.mode==="desktop"&&Math.floor(M/1e3)!==r.sec)&&(m(M),o=!1,r.sec=Math.floor(M/1e3))}return m(performance.now()),{set:a,tick:f,get mode(){return r.mode}}}var Br=null,lc=!0,So=null;function cu(){if(!Br){let n=window.AudioContext||window.webkitAudioContext;if(!n)return null;Br=new n}return Br.state==="suspended"&&Br.resume(),Br}function An(n,t=.1,e="sine",i=.15,s=0,r=0){if(!lc)return;let o=cu();if(!o)return;let a=o.currentTime+s,c=o.createOscillator(),l=o.createGain();c.type=e,c.frequency.setValueAtTime(n,a),r&&c.frequency.exponentialRampToValueAtTime(Math.max(30,n+r),a+t),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(i,a+.008),l.gain.exponentialRampToValueAtTime(1e-4,a+t),c.connect(l).connect(o.destination),c.start(a),c.stop(a+t+.02)}function au(n=.3,t=.2,e=1200,i=0){if(!lc)return;let s=cu();if(!s)return;let r=Math.floor(s.sampleRate*n),o=s.createBuffer(1,r,s.sampleRate),a=o.getChannelData(0);for(let u=0;u<r;u++)a[u]=(Math.random()*2-1)*(1-u/r);let c=s.createBufferSource();c.buffer=o;let l=s.createBiquadFilter();l.type="bandpass",l.frequency.value=e,l.Q.value=.7;let h=s.createGain();h.gain.value=t,c.connect(l).connect(h).connect(s.destination),c.start(s.currentTime+i)}var Kt={click:()=>An(900,.04,"square",.04),select:()=>An(660,.06,"triangle",.08),install:()=>{au(.06,.25,500),An(180,.09,"square",.08,.02,-60),An(1400,.03,"square",.05,.07)},remove:()=>{An(300,.08,"triangle",.08,0,200),au(.05,.15,900)},error:()=>{An(220,.12,"sawtooth",.07),An(170,.18,"sawtooth",.07,.12)},cash:()=>{An(1320,.08,"square",.06),An(1760,.16,"square",.06,.08)},blow:()=>au(.5,.35,2600),cable:()=>{An(500,.04,"square",.06),An(800,.04,"square",.05,.05)},postBeep:()=>An(1e3,.18,"square",.06),beepCode(n){let t=0,e=/длин/.test(n),i=Number((n.match(/(\d)\s*корот/)||[])[1]||0);if(/повтор/.test(n)){for(let s=0;s<3;s++)An(880,.45,"square",.06,t),t+=.65;return}e&&(An(880,.5,"square",.06,t),t+=.7);for(let s=0;s<i;s++)An(880,.12,"square",.06,t),t+=.25},levelUp:()=>[523,659,784,1046].forEach((n,t)=>An(n,.18,"triangle",.1,t*.1))};function Eo(n){lc||(n=!1);let t=n?cu():Br;if(t){if(n&&!So){let e=t.sampleRate*2,i=t.createBuffer(1,e,t.sampleRate),s=i.getChannelData(0);for(let c=0;c<e;c++)s[c]=Math.random()*2-1;let r=t.createBufferSource();r.buffer=i,r.loop=!0;let o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=380;let a=t.createGain();a.gain.value=0,a.gain.linearRampToValueAtTime(.05,t.currentTime+.8),r.connect(o).connect(a).connect(t.destination),r.start(),So={s:r,g:a}}else if(!n&&So){let e=So;So=null,e.g.gain.linearRampToValueAtTime(0,t.currentTime+.5),setTimeout(()=>e.s.stop(),600)}}}function hc(n){lc=n,n||Eo(!1)}var Me=(n,t="0 0 24 24")=>`<svg class="ic" viewBox="${t}" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${n}</svg>`,St={mail:Me('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>'),cart:Me('<circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h3l2.6 12.2a1 1 0 0 0 1 .8h9.7a1 1 0 0 0 1-.8L21 7H6"/>'),jobs:Me('<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 12h18"/>'),box:Me('<path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8M12 13v8"/>'),bank:Me('<path d="M3 10l9-6 9 6M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18"/>'),gear:Me('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>'),chart:Me('<path d="M3 3v18h18"/><path d="M7 15l4-5 3 3 5-7"/>'),info:Me('<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.01"/>'),temp:Me('<path d="M14 14.8V4a2 2 0 1 0-4 0v10.8a4 4 0 1 0 4 0z"/><path d="M12 10v6"/>'),power:Me('<path d="M12 2v10"/><path d="M18.4 6.6a9 9 0 1 1-12.8 0"/>'),plug:Me('<path d="M9 2v6M15 2v6M6 8h12v4a6 6 0 0 1-12 0V8zM12 18v4"/>'),wind:Me('<path d="M3 8h11a3 3 0 1 0-3-3M3 12h16a3 3 0 1 1-3 3M3 16h7"/>'),camera:Me('<path d="M15 10l5-3v10l-5-3z"/><rect x="2" y="6" width="13" height="12" rx="2"/>'),exit:Me('<path d="M10 17l-5-5 5-5M5 12h11"/><path d="M14 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4"/>'),star:'<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"/></svg>',wrench:Me('<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z"/>'),user:Me('<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>'),monitor:Me('<rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>'),check:Me('<path d="M4 12.5l5 5L20 6.5"/>'),x:Me('<path d="M6 6l12 12M18 6L6 18"/>'),lock:Me('<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>'),hand:Me('<path d="M18 11V6a2 2 0 0 0-4 0M14 10V4a2 2 0 0 0-4 0v2M10 10.5V6a2 2 0 0 0-4 0v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.9-6-2.4l-3.6-3.6a2 2 0 0 1 2.8-2.8L6 14"/>'),sound:Me('<path d="M11 5L6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/>'),mute:Me('<path d="M11 5L6 9H2v6h4l5 4z"/><path d="M23 9l-6 6M17 9l6 6"/>'),door:Me('<path d="M4 21h16M6 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17"/><circle cx="14.5" cy="12" r="1"/>'),menu:Me('<path d="M4 6h16M4 12h16M4 18h16"/>'),github:'<svg class="ic" viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>',trash:Me('<path d="M3 6h18M8 6V4h8v2M6 6l1 15h10l1-15"/>'),test:Me('<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3"/>'),home:Me('<path d="M3 11l9-8 9 8M5 9.5V21h14V9.5"/>'),plus:Me('<path d="M12 5v14M5 12h14"/>'),rub:Me('<path d="M8 21V3h6a4.5 4.5 0 0 1 0 9H6M6 16h9"/>'),minus:Me('<path d="M5 12h14"/>')},zi=(n,t)=>`<svg class="pi" viewBox="0 0 48 48" aria-hidden="true"><rect width="48" height="48" rx="10" fill="${n}"/>${t}</svg>`,To={cpu:zi("#3d4a5c",'<rect x="12" y="12" width="24" height="24" rx="2" fill="#c7ccd2"/><rect x="17" y="17" width="14" height="14" fill="#8a929c"/><path stroke="#c7ccd2" stroke-width="2" d="M16 8v4M22 8v4M28 8v4M34 8v4M16 36v4M22 36v4M28 36v4M34 36v4M8 16h4M8 22h4M8 28h4M36 16h4M36 22h4M36 28h4"/>'),mb:zi("#1f4d33",'<rect x="9" y="8" width="30" height="32" rx="2" fill="#2f6b47"/><rect x="14" y="13" width="10" height="10" fill="#c7ccd2"/><path stroke="#111" stroke-width="2.5" d="M29 12v14M33 12v14M13 30h22M13 35h16"/>'),ram:zi("#2d3a4a",'<rect x="7" y="17" width="34" height="13" rx="1.5" fill="#1a1f26" stroke="#7fd3ff" stroke-width="1.5"/><path stroke="#c9a227" stroke-width="2" d="M10 33v3M14 33v3M18 33v3M22 33v3M27 33v3M31 33v3M35 33v3M39 33v3"/><rect x="11" y="20" width="6" height="7" fill="#3a4656"/><rect x="21" y="20" width="6" height="7" fill="#3a4656"/><rect x="31" y="20" width="6" height="7" fill="#3a4656"/>'),gpu:zi("#33302d",'<rect x="5" y="14" width="38" height="20" rx="3" fill="#1d1d1f"/><circle cx="16" cy="24" r="7" fill="#3a3a3e" stroke="#76b900" stroke-width="1.5"/><circle cx="32" cy="24" r="7" fill="#3a3a3e" stroke="#76b900" stroke-width="1.5"/><path stroke="#c9a227" stroke-width="2" d="M10 36h22"/>'),storage:zi("#3b3f58",'<rect x="8" y="17" width="32" height="14" rx="2" fill="#1d2230"/><rect x="11" y="20" width="16" height="8" rx="1" fill="#6f7bd8"/><circle cx="34" cy="24" r="2" fill="#5fe08a"/>'),psu:zi("#2b2e33",'<rect x="8" y="11" width="32" height="26" rx="2" fill="#141518"/><circle cx="24" cy="24" r="9" fill="#2b2e33" stroke="#888" stroke-width="1.5"/><path stroke="#888" stroke-width="1.5" d="M24 15v18M15 24h18M18 18l12 12M30 18L18 30"/>'),cooler:zi("#24445a",'<path fill="#c8d0d8" d="M12 10h24v4H12zM12 16h24v3H12zM12 21h24v3H12zM12 26h24v3H12zM12 31h24v3H12z"/><rect x="20" y="35" width="8" height="4" fill="#c58b4f"/>'),case:zi("#30343a",'<rect x="14" y="7" width="20" height="34" rx="2" fill="#18191c" stroke="#5c6470" stroke-width="1.5"/><circle cx="24" cy="15" r="3" fill="#3a8cff"/><path stroke="#5c6470" stroke-width="1.5" d="M18 24h12M18 28h12M18 32h12"/>'),fan:zi("#2c3640",'<circle cx="24" cy="24" r="15" fill="#151a20" stroke="#7a8794" stroke-width="2"/><path fill="#7a8794" d="M24 24c0-7 3-10 7-9-1 4-4 7-7 9zm0 0c7 0 10 3 9 7-4-1-7-4-9-7zm0 0c0 7-3 10-7 9 1-4 4-7 7-9zm0 0c-7 0-10-3-9-7 4 1 7 4 9 7z"/><circle cx="24" cy="24" r="3" fill="#2c3640"/>')};var wo={ATX:["ATX","mATX","ITX"],mATX:["mATX","ITX"],ITX:["ITX"]},as={case:{type:"case",label:"\u041A\u043E\u0440\u043F\u0443\u0441"},mb:{type:"mb",label:"\u041C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u043A\u0430\u044F \u043F\u043B\u0430\u0442\u0430"},cpu:{type:"cpu",label:"\u0421\u043E\u043A\u0435\u0442 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440\u0430"},cooler:{type:"cooler",label:"\u041A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u0435 \u043A\u0443\u043B\u0435\u0440\u0430"},ram0:{type:"ram",label:"\u0421\u043B\u043E\u0442 \u041E\u0417\u0423 1"},ram1:{type:"ram",label:"\u0421\u043B\u043E\u0442 \u041E\u0417\u0423 2"},ram2:{type:"ram",label:"\u0421\u043B\u043E\u0442 \u041E\u0417\u0423 3"},ram3:{type:"ram",label:"\u0421\u043B\u043E\u0442 \u041E\u0417\u0423 4"},gpu:{type:"gpu",label:"\u0421\u043B\u043E\u0442 PCIe x16"},m2_0:{type:"storage",kind:"m2",label:"\u0421\u043B\u043E\u0442 M.2 \u21161"},m2_1:{type:"storage",kind:"m2",label:"\u0421\u043B\u043E\u0442 M.2 \u21162"},sata0:{type:"storage",kind:"ssd",label:'\u041E\u0442\u0441\u0435\u043A 2.5" \u21161'},sata1:{type:"storage",kind:"ssd",label:'\u041E\u0442\u0441\u0435\u043A 2.5" \u21162'},hdd0:{type:"storage",kind:"hdd",label:'\u041E\u0442\u0441\u0435\u043A 3.5"'},psu:{type:"psu",label:"\u041E\u0442\u0441\u0435\u043A \u0431\u043B\u043E\u043A\u0430 \u043F\u0438\u0442\u0430\u043D\u0438\u044F"},fanF0:{type:"fan",label:"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0432\u0435\u043D\u0442\u0438\u043B\u044F\u0442\u043E\u0440 1"},fanF1:{type:"fan",label:"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0432\u0435\u043D\u0442\u0438\u043B\u044F\u0442\u043E\u0440 2"},fanR0:{type:"fan",label:"\u0417\u0430\u0434\u043D\u0438\u0439 \u0432\u0435\u043D\u0442\u0438\u043B\u044F\u0442\u043E\u0440"}},Nf=Object.keys(as),cs=()=>({slots:{},cables:{}}),ce=n=>n?Qt[n.pid]:null,Ye=(n,t)=>ce(n.slots[t]);function Of(n){if(!n.slots.case)return["case"];let t=["case","mb","psu","sata0","sata1","hdd0","fanF0","fanF1","fanR0"],e=Ye(n,"mb");if(e){t.push("cpu","gpu");for(let i=0;i<e.ramSlots;i++)t.push("ram"+i);for(let i=0;i<e.m2;i++)t.push("m2_"+i);n.slots.cpu&&t.push("cooler")}return t}function Ff(n,t,e){let i=ce(t),s=as[e];if(!i||!s)return{ok:!1,reason:"\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u0430\u044F \u0434\u0435\u0442\u0430\u043B\u044C"};if(s.type!==i.type)return{ok:!1,reason:"\u0421\u044E\u0434\u0430 \u0441\u0442\u0430\u0432\u0438\u0442\u0441\u044F \u0434\u0440\u0443\u0433\u0430\u044F \u0434\u0435\u0442\u0430\u043B\u044C"};if(s.kind&&s.kind!==i.kind)return{ok:!1,reason:s.kind==="m2"?"\u042D\u0442\u043E \u043D\u0435 M.2 \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C":s.kind==="hdd"?'\u041E\u0442\u0441\u0435\u043A \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F 3.5" HDD':'\u041E\u0442\u0441\u0435\u043A \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F 2.5" SSD'};if(n.slots[e])return{ok:!1,reason:"\u0421\u043B\u043E\u0442 \u0437\u0430\u043D\u044F\u0442"};if(!Of(n).includes(e))return e==="cooler"?{ok:!1,reason:"\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440"}:e!=="case"&&!n.slots.case?{ok:!1,reason:"\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043A\u043E\u0440\u043F\u0443\u0441"}:{ok:!1,reason:"\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u043A\u0443\u044E \u043F\u043B\u0430\u0442\u0443"};let r=Ye(n,"case"),o=Ye(n,"mb"),a=Ye(n,"cpu");switch(i.type){case"mb":if(!wo[r.form].includes(i.form))return{ok:!1,reason:`\u041F\u043B\u0430\u0442\u0430 ${i.form} \u043D\u0435 \u0432\u043B\u0435\u0437\u0435\u0442 \u0432 \u043A\u043E\u0440\u043F\u0443\u0441 ${r.form}`};break;case"cpu":if(i.socket!==o.socket)return{ok:!1,reason:`\u0421\u043E\u043A\u0435\u0442 ${i.socket} \u2260 ${o.socket} \u0443 \u043F\u043B\u0430\u0442\u044B`};break;case"ram":if(i.ram!==o.ram)return{ok:!1,reason:`\u041F\u043B\u0430\u0442\u0430 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0442\u043E\u043B\u044C\u043A\u043E ${o.ram}`};break;case"gpu":if(i.len>r.gpuMax)return{ok:!1,reason:`\u0412\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0430 ${Math.round(i.len*1e3)} \u043C\u043C \u0434\u043B\u0438\u043D\u043D\u0435\u0435 \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u043E\u0439 ${Math.round(r.gpuMax*1e3)} \u043C\u043C`};break;case"cooler":if(!a)return{ok:!1,reason:"\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440"};if(i.rad&&(r.rad||0)<i.rad)return{ok:!1,reason:r.rad?`\u0412 \u043A\u043E\u0440\u043F\u0443\u0441 \u0432\u043B\u0435\u0437\u0430\u0435\u0442 \u0421\u0416\u041E \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043E ${r.rad} \u043C\u043C`:"\u0412 \u044D\u0442\u043E\u0442 \u043A\u043E\u0440\u043F\u0443\u0441 \u043D\u0435\u043B\u044C\u0437\u044F \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0421\u0416\u041E"};if(!i.rad&&i.height>r.coolerMax)return{ok:!1,reason:`\u041A\u0443\u043B\u0435\u0440 ${Math.round(i.height*1e3)} \u043C\u043C \u0432\u044B\u0448\u0435 \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0445 ${Math.round(r.coolerMax*1e3)} \u043C\u043C`};break}return{ok:!0}}function lu(n,t){let e=ce(t);return e?Nf.filter(i=>as[i].type===e.type&&(!as[i].kind||as[i].kind===e.kind)).filter(i=>!n.slots[i]).filter(i=>Of(n).includes(i)||i==="cooler"&&n.slots.mb).map(i=>({slot:i,...Ff(n,t,i)})):[]}var uy={case:Nf.filter(n=>n!=="case"),mb:["cpu","cooler","ram0","ram1","ram2","ram3","gpu","m2_0","m2_1"],cpu:["cooler"]};function hu(n,t){if(!n.slots[t])return{ok:!1,reason:"\u0421\u043B\u043E\u0442 \u043F\u0443\u0441\u0442"};let e=(uy[t]||[]).filter(i=>n.slots[i]);if(e.length){let i=Ye(n,e[e.length-1]);return{ok:!1,reason:`\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0441\u043D\u0438\u043C\u0438\u0442\u0435: ${i?i.name:as[e[0]].label}`}}return{ok:!0}}function kf(n,t,e){let i=Ff(n,t,e);return i.ok?(n.slots[e]=t,{ok:!0}):i}function Bf(n,t){let e=hu(n,t);if(!e.ok)return e;let i=n.slots[t];delete n.slots[t];for(let s of yi(n,!0))dy(n,s)||delete n.cables[s];return t==="psu"&&(n.cables={}),{ok:!0,item:i}}var zf={mb24:"24-pin \u043F\u0438\u0442\u0430\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u044B",cpu8:"8-pin \u043F\u0438\u0442\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440\u0430",gpu:"\u041F\u0438\u0442\u0430\u043D\u0438\u0435 \u0432\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u044B",sata0:"SATA \u043A SSD \u21161",sata1:"SATA \u043A SSD \u21162",hdd0:"SATA \u043A HDD"};function dy(n,t){return t==="mb24"||t==="cpu8"?!!n.slots.mb:t==="gpu"?!!Ye(n,"gpu")?.pins&&(!Ye(n,"gpu").hpwr||!!Ye(n,"psu")?.atx3):!!n.slots[t]}function yi(n,t=!1){let e=t?Object.keys(n.cables):[];if(!t){n.slots.mb&&e.push("mb24","cpu8"),Ye(n,"gpu")?.pins&&e.push("gpu");for(let i of["sata0","sata1","hdd0"])n.slots[i]&&e.push(i)}return e}function Hf(n,t){return n.slots.psu?yi(n).includes(t)?t==="gpu"&&Ye(n,"gpu").hpwr&&!Ye(n,"psu").atx3?{ok:!1,reason:"\u0423 \u044D\u0442\u043E\u0433\u043E \u0431\u043B\u043E\u043A\u0430 \u043F\u0438\u0442\u0430\u043D\u0438\u044F \u043D\u0435\u0442 \u043A\u0430\u0431\u0435\u043B\u044F 12VHPWR \u2014 \u043D\u0443\u0436\u0435\u043D \u0411\u041F \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u0430 ATX 3.0"}:(n.cables[t]=!0,{ok:!0}):{ok:!1,reason:"\u041D\u0435\u043A\u0443\u0434\u0430 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0442\u044C"}:{ok:!1,reason:"\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u0431\u043B\u043E\u043A \u043F\u0438\u0442\u0430\u043D\u0438\u044F"}}function Vf(n,t){return delete n.cables[t],{ok:!0}}var ks=n=>["ram0","ram1","ram2","ram3"].map(t=>n.slots[t]).filter(Boolean),ls=n=>ks(n).reduce((t,e)=>t+ce(e).gb,0),zr=n=>["m2_0","m2_1","sata0","sata1","hdd0"].filter(t=>n.slots[t]),Ao=n=>["fanF0","fanF1","fanR0"].filter(t=>n.slots[t]).length,hs=n=>Object.values(n.slots),Ro=n=>Object.entries(n.slots).filter(([,t])=>t.dirty).map(([t])=>t);function vi(n){let t=Ye(n,"cpu"),e=Ye(n,"gpu");return Math.round(40+(t?.tdp||0)*1.1+(e?.tdp||0)+ks(n).length*5+Ao(n)*3+zr(n).length*7)}function Hi(n){let t=Ye(n,"cpu"),e=Ye(n,"cooler"),i=Ye(n,"gpu"),s=Ao(n),r=Ro(n).length,o=(s===0?9:s===1?4:0)-(s>=3?3:0),a=32;t&&(a=e?30+45*(t.tdp/e.tdpMax)+o+r*6:110),n.slots.cooler?.dirty&&(a+=12);let c=i?38+i.tdp/9+o+(n.slots.gpu?.dirty?18:0):0;return{cpu:Math.round(Math.min(a,110)),gpu:Math.round(Math.min(c,105))}}function Vi(n){let t={power:!1,post:!1,boot:!1,error:"",beep:"",shutdown:!1},e=Ye(n,"psu"),i=Ye(n,"mb"),s=Ye(n,"cpu");if(!n.slots.case)return{...t,error:"\u041D\u0435\u0442 \u043A\u043E\u0440\u043F\u0443\u0441\u0430"};if(!e)return{...t,error:"\u041D\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D \u0431\u043B\u043E\u043A \u043F\u0438\u0442\u0430\u043D\u0438\u044F"};if(n.slots.psu.broken)return{...t,error:"\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442. \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u043D\u0435\u0438\u0441\u043F\u0440\u0430\u0432\u0435\u043D \u0431\u043B\u043E\u043A \u043F\u0438\u0442\u0430\u043D\u0438\u044F"};if(!i)return{...t,error:"\u041D\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0430 \u043C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u043A\u0430\u044F \u043F\u043B\u0430\u0442\u0430"};if(!n.cables.mb24)return{...t,error:"\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442: \u043D\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E 24-pin \u043F\u0438\u0442\u0430\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u044B"};if(n.slots.mb.broken)return{...t,error:"\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442. \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u043D\u0435\u0438\u0441\u043F\u0440\u0430\u0432\u043D\u0430 \u043C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u043A\u0430\u044F \u043F\u043B\u0430\u0442\u0430"};if(t.power=!0,!n.cables.cpu8)return{...t,error:"\u0412\u0435\u043D\u0442\u0438\u043B\u044F\u0442\u043E\u0440\u044B \u043A\u0440\u0443\u0442\u044F\u0442\u0441\u044F, \u043D\u043E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043D\u0435\u0442: \u043D\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E \u043F\u0438\u0442\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440\u0430 (8-pin)"};if(!s)return{...t,error:"\u041D\u0435\u0442 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F: \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440 \u043D\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D",beep:"1 \u0434\u043B\u0438\u043D\u043D\u044B\u0439, 3 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0445"};if(n.slots.cpu.broken)return{...t,error:"\u041D\u0435\u0442 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F. \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u043D\u0435\u0438\u0441\u043F\u0440\u0430\u0432\u0435\u043D \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440",beep:"1 \u0434\u043B\u0438\u043D\u043D\u044B\u0439, 3 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0445"};let r=ks(n);if(!r.length)return{...t,error:"\u041D\u0435\u0442 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F: \u043D\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0430 \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u0430\u044F \u043F\u0430\u043C\u044F\u0442\u044C",beep:"\u0434\u043B\u0438\u043D\u043D\u044B\u0435 \u043F\u043E\u0432\u0442\u043E\u0440\u044F\u044E\u0449\u0438\u0435\u0441\u044F"};if(r.some(l=>l.broken))return{...t,error:"\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0430\u043C\u044F\u0442\u0438! \u041E\u0434\u043D\u0430 \u0438\u0437 \u043F\u043B\u0430\u043D\u043E\u043A \u041E\u0417\u0423 \u043D\u0435\u0438\u0441\u043F\u0440\u0430\u0432\u043D\u0430",beep:"\u0434\u043B\u0438\u043D\u043D\u044B\u0435 \u043F\u043E\u0432\u0442\u043E\u0440\u044F\u044E\u0449\u0438\u0435\u0441\u044F"};let o=Ye(n,"gpu");if(!o&&!s.igpu)return{...t,error:"\u041D\u0435\u0442 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F: \u0443 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440\u0430 \u043D\u0435\u0442 \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u043E\u0439 \u0433\u0440\u0430\u0444\u0438\u043A\u0438, \u043D\u0443\u0436\u043D\u0430 \u0432\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0430",beep:"1 \u0434\u043B\u0438\u043D\u043D\u044B\u0439, 2 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0445"};if(o&&o.pins&&!n.cables.gpu&&o.hpwr&&!e.atx3)return{...t,error:"\u041D\u0435\u0442 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F: \u0432\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0435 \u043D\u0443\u0436\u0435\u043D \u043A\u0430\u0431\u0435\u043B\u044C 12VHPWR, \u0430 \u0443 \u0431\u043B\u043E\u043A\u0430 \u043F\u0438\u0442\u0430\u043D\u0438\u044F \u0435\u0433\u043E \u043D\u0435\u0442 (\u043D\u0443\u0436\u0435\u043D ATX 3.0)",beep:"1 \u0434\u043B\u0438\u043D\u043D\u044B\u0439, 2 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0445"};if(o&&o.pins&&!n.cables.gpu)return{...t,error:"\u041D\u0435\u0442 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F: \u043D\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E \u043F\u0438\u0442\u0430\u043D\u0438\u0435 \u0432\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u044B",beep:"1 \u0434\u043B\u0438\u043D\u043D\u044B\u0439, 2 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0445"};if(o&&n.slots.gpu.broken)return{...t,error:"\u041D\u0435\u0442 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F. \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u043D\u0435\u0438\u0441\u043F\u0440\u0430\u0432\u043D\u0430 \u0432\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0430",beep:"1 \u0434\u043B\u0438\u043D\u043D\u044B\u0439, 2 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0445"};if(t.post=!0,!n.slots.cooler)return{...t,error:"CPU OVERHEAT! \u041A\u0443\u043B\u0435\u0440 \u043D\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D \u2014 \u0430\u0432\u0430\u0440\u0438\u0439\u043D\u043E\u0435 \u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435",shutdown:!0};if(vi(n)>e.watt)return{...t,error:`\u0411\u043B\u043E\u043A \u043F\u0438\u0442\u0430\u043D\u0438\u044F \u043F\u0435\u0440\u0435\u0433\u0440\u0443\u0436\u0435\u043D (${vi(n)} \u0412\u0442 \u0438\u0437 ${e.watt}) \u2014 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0432\u044B\u043A\u043B\u044E\u0447\u0438\u043B\u0441\u044F`,shutdown:!0};let a=zr(n);if(!a.length)return{...t,error:"\u0417\u0430\u0433\u0440\u0443\u0437\u043E\u0447\u043D\u043E\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E. \u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C"};let c=a.filter(l=>l.startsWith("m2")||n.cables[l]);return c.length?c.every(l=>n.slots[l].broken)?{...t,error:"\u041E\u0448\u0438\u0431\u043A\u0430 \u0447\u0442\u0435\u043D\u0438\u044F \u0434\u0438\u0441\u043A\u0430. \u041D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C \u043D\u0435\u0438\u0441\u043F\u0440\u0430\u0432\u0435\u043D"}:(t.boot=!0,t):{...t,error:"\u0417\u0430\u0433\u0440\u0443\u0437\u043E\u0447\u043D\u043E\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E. \u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u0435 SATA-\u043A\u0430\u0431\u0435\u043B\u044C \u043A \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044E"}}function Co(n){let t=Vi(n);if(!t.boot)return{ok:!1,error:t.error||"\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044F"};let e=Ye(n,"cpu"),i=Ye(n,"gpu"),s=Hi(n),r=i?i.perf:e.igpu,o=ls(n),a=ks(n).length,c=o<8?.72:o<16?.88:o<32?1:1.04;a===1&&(c*=.93);let l=ks(n).reduce((g,x)=>g+ce(x).mhz,0)/Math.max(1,a);c*=.94+Math.min(l,6e3)/1e5;let h=1;s.cpu>90?h-=.18:s.cpu>80&&(h-=.07),s.gpu>85&&(h-=.1);let u=Math.min(1,e.perf*2.2/r)*.25+.75,d=Math.round((r*.7+e.perf*.3)*c*h*u*4.2),p=Math.round(d/95);return{ok:!0,score:d,fps:p,cpuTemp:s.cpu,gpuTemp:s.gpu,throttle:h<1}}var Gf=n=>hs(n).reduce((t,e)=>t+(ce(e)?.price||0),0);function fy(n){let t=n>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var un=(n,t)=>t[Math.floor(n()*t.length)],Gi=(n,t=100)=>Math.round(n/t)*t,Ne=n=>Dr.filter(t=>t.type===n),Xn=n=>n.slice().sort((t,e)=>t.price-e.price)[0],py=["\u0410\u043B\u0435\u043A\u0441\u0435\u0439","\u041C\u0430\u0440\u0438\u044F","\u0414\u043C\u0438\u0442\u0440\u0438\u0439","\u0410\u043D\u043D\u0430","\u0418\u0432\u0430\u043D","\u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0430","\u0421\u0435\u0440\u0433\u0435\u0439","\u041E\u043B\u044C\u0433\u0430","\u041D\u0438\u043A\u0438\u0442\u0430","\u0422\u0430\u0442\u044C\u044F\u043D\u0430","\u0410\u0440\u0442\u0451\u043C","\u042E\u043B\u0438\u044F","\u041C\u0430\u043A\u0441\u0438\u043C","\u041F\u043E\u043B\u0438\u043D\u0430","\u041A\u0438\u0440\u0438\u043B\u043B","\u0412\u0438\u043A\u0442\u043E\u0440\u0438\u044F","\u0415\u0433\u043E\u0440","\u0414\u0430\u0440\u044C\u044F","\u0414\u0435\u043D\u0438\u0441","\u041A\u0441\u0435\u043D\u0438\u044F","\u0413\u043E\u0448\u0430","\u041C\u0438\u0445\u0430\u0438\u043B","\u0412\u043B\u0430\u0434\u0438\u043C\u0438\u0440","\u0410\u043B\u0438\u043D\u0430","\u0420\u043E\u043C\u0430\u043D","\u0421\u043E\u0444\u044C\u044F","\u0422\u0438\u043C\u0443\u0440","\u0412\u0435\u0440\u043E\u043D\u0438\u043A\u0430","\u0413\u043B\u0435\u0431","\u0415\u043B\u0438\u0437\u0430\u0432\u0435\u0442\u0430","\u041F\u0430\u0432\u0435\u043B","\u042F\u043D\u0430","\u0424\u0451\u0434\u043E\u0440","\u0410\u0440\u0438\u043D\u0430"],my=["mail.ru","yandex.ru","gmail.com","rambler.ru","bk.ru","inbox.ru"],gy={\u0430:"a",\u0431:"b",\u0432:"v",\u0433:"g",\u0434:"d",\u0435:"e",\u0451:"e",\u0436:"zh",\u0437:"z",\u0438:"i",\u0439:"y",\u043A:"k",\u043B:"l",\u043C:"m",\u043D:"n",\u043E:"o",\u043F:"p",\u0440:"r",\u0441:"s",\u0442:"t",\u0443:"u",\u0444:"f",\u0445:"h",\u0446:"c",\u0447:"ch",\u0448:"sh",\u0449:"sch",\u044B:"y",\u044C:"",\u044A:"",\u044D:"e",\u044E:"yu",\u044F:"ya"},xy=n=>n.toLowerCase().split("").map(t=>gy[t]??t).join("");function _y(n){return n===1?[1,1]:n===2?[1,3]:[3,5]}function vy(n,t,e){for(let r=0;r<30;r++){let o=yy(n,t,e);if(o&&Vi(o).boot)return o}let i=cs(),s=(r,o)=>{i.slots[r]=e(o,{client:!0})};s("case","zalman-s2"),s("mb","a520m-a"),s("cpu","r5-5600g"),s("cooler","wraith-stealth"),s("ram0","d4-8-3200"),s("ram1","d4-8-3200"),s("sata0","ssd-480"),s("psu","pf500");for(let r of yi(i))i.cables[r]=!0;return i}function yy(n,t,e){let[i,s]=_y(t),r=A=>A.lvl>=i&&A.lvl<=s,o=un(n,Ne("cpu").filter(r)),a=Ne("mb").filter(A=>A.socket===o.socket&&A.lvl>=Math.max(1,i-1)&&A.lvl<=s);if(!a.length)return null;let c=un(n,a),l=Ne("case").filter(A=>wo[A.form].includes(c.form)&&A.lvl<=s+1&&A.lvl>=Math.max(1,i-1)),h=un(n,l),u=null;if(o.igpu&&t===1&&n()<.45){if(!o.igpu)return null}else{let A=Ne("gpu").filter(k=>k.len<=h.gpuMax&&k.lvl>=i&&k.lvl<=s);if(!A.length)return null;u=un(n,A)}let p=un(n,t===1?[4,8,8]:t===2?[8,16,16]:[16,16,32]),g=Ne("ram").filter(A=>A.ram===c.ram&&A.gb===p),x=g.length?un(n,g):Xn(Ne("ram").filter(A=>A.ram===c.ram)),m=t===1?n()<.5?1:2:t===2?2:n()<.3&&c.ramSlots===4?4:2;m=Math.min(m,c.ramSlots);let f=Ne("cooler").filter(A=>A.tdpMax>=o.tdp&&(A.rad?(h.rad||0)>=A.rad:A.height<=h.coolerMax));if(!f.length)return null;let M;t===1?M=f.find(A=>A.kind==="box")||Xn(f):t===2?M=un(n,f.filter(A=>A.lvl<=2).length?f.filter(A=>A.lvl<=2):f):M=un(n,f.filter(A=>A.lvl>=2).length?f.filter(A=>A.lvl>=2):f);let v=cs(),_=(A,k)=>{v.slots[A]=e(k.id,{client:!0})};_("case",h),_("mb",c),_("cpu",o),_("cooler",M),(m===1?["ram0"]:m===2?c.ramSlots===4?["ram1","ram3"]:["ram0","ram1"]:["ram0","ram1","ram2","ram3"]).forEach(A=>_(A,x)),u&&_("gpu",u);let w=A=>un(n,Ne("storage").filter(k=>k.kind===A&&k.lvl<=s));t===1?(n()<.5?_("hdd0",w("hdd")):_("sata0",w("ssd")),n()<.3&&!v.slots.hdd0&&_("hdd0",w("hdd"))):t===2?(n()<.6?_("m2_0",w("m2")):_("sata0",w("ssd")),n()<.5&&_("hdd0",w("hdd"))):(_("m2_0",w("m2")),n()<.4&&c.m2>1&&_("m2_1",w("m2")),n()<.3&&_("hdd0",w("hdd")));let C=Math.floor(n()*(t===1?2:4)),P=un(n,Ne("fan").filter(A=>t>1||!A.rgb));["fanR0","fanF0","fanF1"].slice(0,C).forEach(A=>_(A,P));let S=vi(v)*(1.1+n()*.4),y=Ne("psu").filter(A=>A.watt>=S&&(!u?.hpwr||A.atx3)).sort((A,k)=>A.price-k.price).slice(0,4);if(!y.length)return null;_("psu",un(n,y));for(let A of yi(v))v.cables[A]=!0;return v}var uu=new Map;function by(n,t,e){let i=[n,t,e].join("|");if(uu.has(i))return uu.get(i);let s=Qt[t],r=l=>l.lvl<=e,o=l=>({pid:l}),a={score:0,price:0},c=Xn(Ne("storage").filter(r));for(let l of Ne("cpu").filter(r)){let h=Xn(Ne("mb").filter(g=>r(g)&&g.socket===l.socket&&wo[s.form].includes(g.form)));if(!h)continue;let u=Xn(Ne("ram").filter(g=>r(g)&&g.ram===h.ram&&g.gb===8))||Xn(Ne("ram").filter(g=>r(g)&&g.ram===h.ram)),d=Xn(Ne("cooler").filter(g=>r(g)&&g.tdpMax>=l.tdp&&(g.rad?(s.rad||0)>=g.rad:g.height<=s.coolerMax)));if(!u||!d)continue;let p=[null,...Ne("gpu").filter(g=>r(g)&&g.len<=s.gpuMax)];for(let g of p){if(!g&&!l.igpu)continue;let x=h.price+l.price+u.price*2+d.price+c.price+(g?.price||0);if(x>n)continue;let m={slots:{case:o(t),mb:o(h.id),cpu:o(l.id),cooler:o(d.id),ram0:o(u.id),ram1:o(u.id),sata0:o(c.id)},cables:{}};g&&(m.slots.gpu=o(g.id));let f=Xn(Ne("psu").filter(v=>r(v)&&v.watt>=vi(m)&&(!g?.hpwr||v.atx3)));if(!f||x+f.price>n)continue;m.slots.psu=o(f.id);for(let v of yi(m))m.cables[v]=!0;let M=Co(m);M.ok&&M.score>a.score&&(a={score:M.score,price:x+f.price})}}return uu.set(i,a),a}var du={ram:{slots:["ram0","ram1","ram2","ram3"],subject:"\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u043F\u0438\u0449\u0438\u0442 \u0438 \u043D\u0435 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F",text:"\u0412\u043A\u043B\u044E\u0447\u0430\u044E \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u2014 \u043E\u043D \u0434\u043E\u043B\u0433\u043E \u043F\u0438\u0449\u0438\u0442, \u0430 \u043D\u0430 \u044D\u043A\u0440\u0430\u043D\u0435 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435\u0442. \u0412\u0447\u0435\u0440\u0430 \u0432\u0441\u0451 \u0440\u0430\u0431\u043E\u0442\u0430\u043B\u043E! \u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430."},gpu:{slots:["gpu"],subject:"\u041D\u0435\u0442 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",text:"\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0432\u0440\u043E\u0434\u0435 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F, \u0432\u0435\u043D\u0442\u0438\u043B\u044F\u0442\u043E\u0440\u044B \u0448\u0443\u043C\u044F\u0442, \u043D\u043E \u043C\u043E\u043D\u0438\u0442\u043E\u0440 \u043F\u0438\u0448\u0435\u0442 \xAB\u043D\u0435\u0442 \u0441\u0438\u0433\u043D\u0430\u043B\u0430\xBB. \u041A\u0430\u0431\u0435\u043B\u044C \u043C\u043E\u043D\u0438\u0442\u043E\u0440\u0430 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u043B."},psu:{slots:["psu"],subject:"\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0432\u043E\u043E\u0431\u0449\u0435 \u043D\u0435 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F",text:"\u041D\u0430\u0436\u0438\u043C\u0430\u044E \u043A\u043D\u043E\u043F\u043A\u0443 \u043F\u0438\u0442\u0430\u043D\u0438\u044F \u2014 \u043D\u043E\u043B\u044C \u0440\u0435\u0430\u043A\u0446\u0438\u0438. \u041D\u0438 \u043B\u0430\u043C\u043F\u043E\u0447\u0435\u043A, \u043D\u0438 \u0437\u0432\u0443\u043A\u0430. \u0420\u043E\u0437\u0435\u0442\u043A\u0430 \u0440\u0430\u0431\u043E\u0447\u0430\u044F. \u0421\u043F\u0430\u0441\u0438\u0442\u0435!"},storage:{slots:["m2_0","m2_1","sata0","hdd0"],subject:"\u041D\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044F Windows",text:"\u041F\u0438\u0448\u0435\u0442 \u0447\u0442\u043E-\u0442\u043E \u043F\u0440\u043E \u0437\u0430\u0433\u0440\u0443\u0437\u043E\u0447\u043D\u043E\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u0438 \u0434\u0430\u043B\u044C\u0448\u0435 \u043D\u0435 \u0438\u0434\u0451\u0442. \u041A\u0430\u0436\u0435\u0442\u0441\u044F, \u0434\u0438\u0441\u043A \u0443\u043C\u0435\u0440. \u0414\u0430\u043D\u043D\u044B\u0435 \u043D\u0435 \u0432\u0430\u0436\u043D\u044B, \u043F\u0440\u043E\u0441\u0442\u043E \u043D\u0443\u0436\u0435\u043D \u0440\u0430\u0431\u043E\u0447\u0438\u0439 \u041F\u041A."},cpu:{slots:["cpu"],subject:"\u0427\u0451\u0440\u043D\u044B\u0439 \u044D\u043A\u0440\u0430\u043D \u043F\u043E\u0441\u043B\u0435 \u0447\u0438\u0441\u0442\u043A\u0438",text:"\u0420\u0435\u0448\u0438\u043B \u0441\u0430\u043C \u043F\u043E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440, \u0441\u043D\u044F\u043B \u043A\u0443\u043B\u0435\u0440, \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u043B \u043E\u0431\u0440\u0430\u0442\u043D\u043E \u2014 \u0438 \u0432\u0441\u0451, \u0447\u0451\u0440\u043D\u044B\u0439 \u044D\u043A\u0440\u0430\u043D. \u041A\u0430\u0436\u0435\u0442\u0441\u044F, \u0447\u0442\u043E-\u0442\u043E \u0441\u043B\u043E\u043C\u0430\u043B\u2026"},mb:{slots:["mb"],subject:"\u041F\u043E\u0441\u043B\u0435 \u0433\u0440\u043E\u0437\u044B \u041F\u041A \u043D\u0435 \u043F\u043E\u0434\u0430\u0451\u0442 \u043F\u0440\u0438\u0437\u043D\u0430\u043A\u043E\u0432 \u0436\u0438\u0437\u043D\u0438",text:"\u041D\u043E\u0447\u044C\u044E \u0431\u044B\u043B\u0430 \u0433\u0440\u043E\u0437\u0430, \u0443\u0442\u0440\u043E\u043C \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u043D\u0435 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F. \u0411\u043B\u043E\u043A \u043F\u0438\u0442\u0430\u043D\u0438\u044F \u0432\u0440\u043E\u0434\u0435 \u0449\u0451\u043B\u043A\u0430\u0435\u0442\u2026 \u041D\u0430\u0439\u0434\u0438\u0442\u0435, \u0447\u0442\u043E \u0441\u0433\u043E\u0440\u0435\u043B\u043E, \u0438 \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u0435."}};function us(n,t,e){let i=fy(n),s=un(i,py),r=`${xy(s)}${Math.floor(i()*900+10)}@${un(i,my)}`,o=Math.max(1,Math.min(3,un(i,t<=1?[1]:t<=2?[1,1,2]:t<=3?[1,2,2,3]:[2,3,3]))),a=["repair","repair","clean","upgrade_gpu","upgrade_ram","upgrade_ssd"];t>=2&&a.push("build","build","upgrade_cpu","cooling"),t>=3&&a.push("build","repair");let c=un(i,a),l={id:"j"+n,seed:n,type:c,customer:s,email:r,xp:40,reward:0,req:{}};if(c==="build"){let u=un(i,t<=2?[45e3,55e3,65e3,8e4]:t<=3?[8e4,1e5,12e4,15e4]:[12e4,16e4,2e5,26e4,35e4]),d=Ne("case").filter(M=>M.lvl<=Math.min(4,t)),p=un(i,d),g=cs();g.slots.case=e(p.id,{client:!0});let x=by(Math.round(u*.85),p.id,Math.min(t,5)),m=Math.max(1e3,Gi(x.score*.85,100)),f=Gi(u*.1,500);return Object.assign(l,{pc:g,reward:u+f,xp:90,req:{score:m,budget:u},subject:`\u0421\u043E\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0433\u0440\u043E\u0432\u043E\u0439 \u041F\u041A \u0434\u043E ${be(u)}`,text:`\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435! \u0425\u043E\u0447\u0443 \u043D\u043E\u0432\u044B\u0439 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0434\u043B\u044F \u0438\u0433\u0440. \u041A\u043E\u0440\u043F\u0443\u0441 ${p.name} \u0443 \u043C\u0435\u043D\u044F \u0443\u0436\u0435 \u0435\u0441\u0442\u044C \u2014 \u043F\u0440\u0438\u0432\u0451\u0437 \u0435\u0433\u043E \u0432\u0430\u043C. \u041D\u0430 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0443\u044E\u0449\u0438\u0435 \u0433\u043E\u0442\u043E\u0432 \u043F\u043E\u0442\u0440\u0430\u0442\u0438\u0442\u044C ${be(u)}, \u043F\u043B\u044E\u0441 ${be(f)} \u0437\u0430 \u0440\u0430\u0431\u043E\u0442\u0443. \u0412\u0441\u0451, \u0447\u0442\u043E \u0441\u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0442\u0435 \u043D\u0430 \u0434\u0435\u0442\u0430\u043B\u044F\u0445, \u2014 \u0432\u0430\u0448\u0435. \u0413\u043B\u0430\u0432\u043D\u043E\u0435, \u0447\u0442\u043E\u0431\u044B \u0432 3DMark \u0431\u044B\u043B\u043E \u043D\u0435 \u043C\u0435\u043D\u044C\u0448\u0435 ${m} \u043E\u0447\u043A\u043E\u0432.`}),l}let h=vy(i,c==="cooling"||c==="upgrade_cpu"?Math.max(2,o):o,e);if(l.pc=h,c==="repair"){let u=Object.keys(du).filter(f=>f!=="cpu"&&f!=="mb"||t>=2).filter(f=>du[f].slots.some(M=>h.slots[M])),d=un(i,u),p=du[d],g=un(i,p.slots.filter(f=>h.slots[f]));h.slots[g].broken=!0;let x=ce(h.slots[g]),m=Xn(Ne(x.type).filter(f=>f.lvl<=t&&(x.type!=="mb"||f.socket===x.socket&&wo[ce(h.slots.case).form].includes(f.form)&&f.ram===x.ram)&&(x.type!=="cpu"||f.socket===x.socket)&&(x.type!=="ram"||f.ram===x.ram)&&(x.type!=="storage"||f.kind===x.kind)));if(!m)return us(n+7919,t,e);Object.assign(l,{subject:p.subject,text:p.text,xp:50,reward:Gi((m?m.price:x.price)*1.2+2e3+i()*1500,100)})}else if(c==="clean"){let u=Object.keys(h.slots).filter(d=>d!=="case");for(let d of u)(i()<.55||d==="cooler"||d==="gpu")&&(h.slots[d].dirty=!0);Object.assign(l,{subject:"\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0433\u0440\u0435\u0435\u0442\u0441\u044F \u0438 \u0433\u0443\u0434\u0438\u0442 \u043A\u0430\u043A \u0441\u0430\u043C\u043E\u043B\u0451\u0442",text:"\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0443 \u043B\u0435\u0442 \u043F\u044F\u0442\u044C, \u0432\u043D\u0443\u0442\u0440\u044C \u043D\u0438 \u0440\u0430\u0437\u0443 \u043D\u0435 \u0437\u0430\u0433\u043B\u044F\u0434\u044B\u0432\u0430\u043B. \u0421\u0442\u0430\u043B \u0436\u0443\u0442\u043A\u043E \u0448\u0443\u043C\u0435\u0442\u044C \u0438 \u0438\u043D\u043E\u0433\u0434\u0430 \u0432\u044B\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u0432 \u0438\u0433\u0440\u0430\u0445. \u041F\u043E\u0447\u0438\u0441\u0442\u0438\u0442\u0435, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043E\u0442 \u043F\u044B\u043B\u0438.",reward:Gi(2500+i()*2e3,100),xp:35})}else if(c==="upgrade_gpu"){let u=ce(h.slots.gpu)?.perf||ce(h.slots.cpu).igpu,d=ce(h.slots.case),p=Ne("gpu").filter(_=>_.perf>u*1.3&&_.lvl<=t&&_.len<=d.gpuMax).sort((_,I)=>_.perf-I.perf);if(!p.length)return us(n+7919,t,e);let g=p[Math.min(p.length-1,Math.floor(i()*3))],x=Xn(Ne("gpu").filter(_=>_.perf>=g.perf&&_.len<=d.gpuMax&&_.lvl<=t))||g,m={slots:{...h.slots,gpu:{pid:x.id}},cables:{}},f=ce(h.slots.psu),M=vi(m)>f.watt||x.hpwr&&!f.atx3,v=M?Xn(Ne("psu").filter(_=>_.lvl<=t&&_.watt>=vi(m)&&(!x.hpwr||_.atx3)))?.price||1e4:0;Object.assign(l,{subject:"\u041D\u0443\u0436\u043D\u0430 \u0432\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0430 \u043F\u043E\u043C\u043E\u0449\u043D\u0435\u0435",text:`\u0425\u043E\u0447\u0443 \u043F\u043E\u0438\u0433\u0440\u0430\u0442\u044C \u0432 \u043D\u043E\u0432\u044B\u0435 \u0438\u0433\u0440\u044B, \u0430 \u043C\u043E\u0439 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u043D\u0435 \u0442\u044F\u043D\u0435\u0442. \u041F\u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0432\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0443 \u0443\u0440\u043E\u0432\u043D\u044F ${g.name} \u0438\u043B\u0438 \u043C\u043E\u0449\u043D\u0435\u0435. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0431\u043B\u043E\u043A \u043F\u0438\u0442\u0430\u043D\u0438\u044F \u0441\u043F\u0440\u0430\u0432\u043B\u044F\u043B\u0441\u044F${M?" \u2014 \u043A\u0430\u0436\u0435\u0442\u0441\u044F, \u043C\u043E\u0439 \u0441\u043B\u0430\u0431\u043E\u0432\u0430\u0442":""}! \u0421\u0442\u0430\u0440\u0443\u044E \u0432\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0443 \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0435\u0431\u0435.`,req:{gpuPerf:g.perf,gpuName:g.name},reward:Gi((x.price+v)*1.15+2500,100),xp:55}),h.slots.gpu&&(h.slots.gpu.client=!1)}else if(c==="upgrade_ram"){let u=ls(h),d=u>=16?32:16,p=ce(h.slots.mb),g=Xn(Ne("ram").filter(m=>m.lvl<=t&&m.ram===p.ram&&m.gb>=d/p.ramSlots));if(u>=32||!g)return us(n+7919,t,e);let x=g?g.price*Math.ceil(d/g.gb):d*300;Object.assign(l,{subject:`\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0439 \u043F\u0430\u043C\u044F\u0442\u0438 \u0434\u043E ${d} \u0413\u0411`,text:`\u0421\u0435\u0439\u0447\u0430\u0441 \u0443 \u043C\u0435\u043D\u044F ${u} \u0413\u0411, \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0438 \u0438\u0433\u0440\u044B \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u0442\u043E\u0440\u043C\u043E\u0437\u044F\u0442. \u041D\u0443\u0436\u043D\u043E \u043C\u0438\u043D\u0438\u043C\u0443\u043C ${d} \u0413\u0411 \u041E\u0417\u0423. \u0421\u0442\u0430\u0440\u044B\u0435 \u043F\u043B\u0430\u043D\u043A\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0435\u0431\u0435.`,req:{ramGb:d},reward:Gi(x*1.2+1500,100),xp:40});for(let m of["ram0","ram1","ram2","ram3"])h.slots[m]&&(h.slots[m].client=!1)}else if(c==="upgrade_ssd"){Object.assign(l,{subject:"\u0425\u043E\u0447\u0443, \u0447\u0442\u043E\u0431\u044B \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0431\u044B\u0441\u0442\u0440\u0435\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u043B\u0441\u044F",text:"\u0413\u043E\u0432\u043E\u0440\u044F\u0442, \u0447\u0442\u043E SSD \u0441\u0438\u043B\u044C\u043D\u043E \u0443\u0441\u043A\u043E\u0440\u044F\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0443. \u041F\u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043C\u043D\u0435, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, SSD (\u043E\u0431\u044B\u0447\u043D\u044B\u0439 SATA \u0438\u043B\u0438 M.2 \u2014 \u0431\u0435\u0437 \u0440\u0430\u0437\u043D\u0438\u0446\u044B).",req:{ssd:!0},reward:Gi(3e3*1.2+1500,100),xp:35});let u=["m2_0","m2_1","sata0"].find(d=>h.slots[d]);if(u){h.slots[u].broken=!0,h.slots.hdd0||(h.slots.hdd0=e("hdd-1t",{client:!0}));for(let d of yi(h))h.cables[d]=!0;l.text="SSD \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u043B \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0442\u044C\u0441\u044F, \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0433\u0440\u0443\u0437\u0438\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0441\u043E \u0441\u0442\u0430\u0440\u043E\u0433\u043E HDD, \u0438 \u0442\u043E \u043D\u0435 \u0432\u0441\u0435\u0433\u0434\u0430. \u041F\u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 SSD!"}}else if(c==="upgrade_cpu"){let u=ce(h.slots.cpu),d=Ne("cpu").filter(g=>g.socket===u.socket&&g.perf>u.perf*1.2&&g.lvl<=t&&(g.igpu||h.slots.gpu)).sort((g,x)=>g.perf-x.perf);if(!d.length)return us(n+7919,t,e);let p=d[Math.min(d.length-1,Math.floor(i()*3))];Object.assign(l,{subject:"\u041F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440 \u043D\u0435 \u0432\u044B\u0442\u044F\u0433\u0438\u0432\u0430\u0435\u0442 \u0438\u0433\u0440\u044B",text:`\u0412\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0430 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u0430 \u043D\u0430\u043F\u043E\u043B\u043E\u0432\u0438\u043D\u0443, \u0430 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440 \u2014 \u043D\u0430 100%. \u041F\u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, ${p.name} \u0438\u043B\u0438 \u0447\u0442\u043E-\u0442\u043E \u043D\u0435 \u0441\u043B\u0430\u0431\u0435\u0435 \u043D\u0430 \u043C\u043E\u0439 \u0441\u043E\u043A\u0435\u0442 ${u.socket}. \u0421\u0442\u0430\u0440\u044B\u0439 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440 \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0435\u0431\u0435. \u0418 \u043F\u0440\u043E\u0441\u043B\u0435\u0434\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043D\u0435 \u043F\u0435\u0440\u0435\u0433\u0440\u0435\u0432\u0430\u043B\u0441\u044F!`,req:{cpuPerf:p.perf,cpuName:p.name,maxTemp:85},reward:Gi(p.price*1.15+2500,100),xp:55}),h.slots.cpu.client=!1}else if(c==="cooling"){let u=ce(h.slots.cpu),d=ce(h.slots.case),p=v=>v.tdpMax>=u.tdp&&(v.rad?(d.rad||0)>=v.rad:v.height<=d.coolerMax),g=Ne("cooler").filter(v=>!v.rad&&p(v)&&v.tdpMax<250).sort((v,_)=>v.tdpMax-_.tdpMax||v.price-_.price)[0],x=Ne("cooler").filter(v=>p(v)&&v.lvl<=t).sort((v,_)=>_.tdpMax-v.tdpMax)[0];if(!g||!x)return us(n+7919,t,e);h.slots.cooler=e(g.id,{client:!1});for(let v of["fanF0","fanF1"])delete h.slots[v];let m=Hi(h).cpu,f=Math.round(30+45*u.tdp/x.tdpMax-3),M=Math.max(f+4,m-8);if(M>=m)return us(n+7919,t,e);h.slots.cooler.dirty=!0,Object.assign(l,{subject:`\u041F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440 \u0433\u0440\u0435\u0435\u0442\u0441\u044F \u0434\u043E ${Hi(h).cpu} \u0433\u0440\u0430\u0434\u0443\u0441\u043E\u0432`,text:`\u0412 \u0438\u0433\u0440\u0430\u0445 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440 \u0440\u0430\u0437\u043E\u0433\u0440\u0435\u0432\u0430\u0435\u0442\u0441\u044F \u0442\u0430\u043A, \u0447\u0442\u043E \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0442\u043E\u0440\u043C\u043E\u0437\u0438\u0442. \u041F\u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043E\u0445\u043B\u0430\u0436\u0434\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u0443\u0447\u0448\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0434 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u043E\u0439 \u0431\u044B\u043B\u043E \u043D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 ${M} \xB0C. \u0421\u0442\u0430\u0440\u044B\u0439 \u043A\u0443\u043B\u0435\u0440 \u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u0430\u0431\u0440\u0430\u0442\u044C.`,req:{maxTemp:M},reward:Gi(Math.max(3500,u.tdp*40)*1.15+2e3,100),xp:50})}return l}function Po(n,t,e={}){let i=[],s=Vi(t);i.push({label:"\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u0438 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044F",ok:s.boot});let r=hs(t).filter(o=>o.broken);if((n.type==="repair"||n.type==="upgrade_ssd")&&i.push({label:"\u041D\u0435\u0438\u0441\u043F\u0440\u0430\u0432\u043D\u044B\u0435 \u0434\u0435\u0442\u0430\u043B\u0438 \u0437\u0430\u043C\u0435\u043D\u0435\u043D\u044B",ok:r.length===0}),n.type==="clean"&&i.push({label:"\u0412\u0441\u044F \u043F\u044B\u043B\u044C \u0443\u0434\u0430\u043B\u0435\u043D\u0430",ok:Ro(t).length===0}),n.req.gpuPerf){let o=ce(t.slots.gpu);i.push({label:`\u0412\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0430 \u043D\u0435 \u0445\u0443\u0436\u0435 ${n.req.gpuName}`,ok:!!o&&o.perf>=n.req.gpuPerf&&!t.slots.gpu.broken})}if(n.req.cpuPerf){let o=ce(t.slots.cpu);i.push({label:`\u041F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440 \u043D\u0435 \u0445\u0443\u0436\u0435 ${n.req.cpuName}`,ok:!!o&&o.perf>=n.req.cpuPerf})}if(n.req.maxTemp){let o=t.slots.cpu&&t.slots.cooler?Hi(t).cpu:999;i.push({label:`\u041F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440 \u043F\u043E\u0434 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u043E\u0439 \u2264 ${n.req.maxTemp} \xB0C (\u0441\u0435\u0439\u0447\u0430\u0441 ${o===999?"\u2014":o+" \xB0C"})`,ok:o<=n.req.maxTemp})}if(n.req.ramGb&&i.push({label:`\u041E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0439 \u043F\u0430\u043C\u044F\u0442\u0438 \u2265 ${n.req.ramGb} \u0413\u0411 (\u0441\u0435\u0439\u0447\u0430\u0441 ${ls(t)})`,ok:ls(t)>=n.req.ramGb}),n.req.ssd){let o=["m2_0","m2_1","sata0","sata1"].some(a=>t.slots[a]&&!t.slots[a].broken&&(a.startsWith("m2")||t.cables[a]));i.push({label:"\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D \u0438 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0451\u043D \u0440\u0430\u0431\u043E\u0447\u0438\u0439 SSD",ok:o})}if(n.req.score){i.push({label:`3DMark \u2265 ${n.req.score} (\u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439: ${e.bench??"\u2014"})`,ok:(e.bench||0)>=n.req.score});let o=Gf({slots:Object.fromEntries(Object.entries(t.slots).filter(([,a])=>!a.client))});i.push({label:`\u0414\u0435\u0442\u0430\u043B\u0438 \u0443\u043B\u043E\u0436\u0438\u043B\u0438\u0441\u044C \u0432 ${be(n.req.budget)} (\u043F\u043E\u0442\u0440\u0430\u0447\u0435\u043D\u043E ${be(o)})`,ok:o<=n.req.budget})}return i}var Hr=(n,t,e)=>Po(n,t,e).every(i=>i.ok);var Wf="pc-build-sim-save-v2",Bs=[0,150,400,800,1400,2200,3200],My=4e4,fu=3,Vr=4;function pu(n=!1){return{v:2,sandbox:n,money:n?1e12:My,xp:0,day:1,uid:1,pcSeq:1,inventory:[],pcs:[],benchPc:null,jobs:[],inbox:[],seedBase:Math.floor(Math.random()*1e9),seedN:0,jobsDone:0,earned:0,rep:2.5,settings:{sound:!0,sens:1},tutorial:!0}}var N=pu();function Xf(){try{let n=localStorage.getItem(Wf);if(n){let t=JSON.parse(n);t&&t.v===2&&(N=Object.assign(pu(),t))}}catch{}N.inventory=N.inventory.filter(n=>Qt[n.pid]);for(let n of N.pcs)for(let[t,e]of Object.entries(n.build.slots))Qt[e.pid]||delete n.build.slots[t];return N}function Oe(){try{localStorage.setItem(Wf,JSON.stringify(N))}catch{}}function $f(n=!1){return N=pu(n),Oe(),N}var zs=()=>{if(N.sandbox)return 99;let n=1;for(let t=1;t<Bs.length;t++)N.xp>=Bs[t]&&(n=t+1);return n};function uc(n,t={}){if(!Qt[n])throw new Error("\u041D\u0435\u0442 \u0434\u0435\u0442\u0430\u043B\u0438 "+n);return{uid:N.uid++,pid:n,...t}}function mu(n,t=cs(),e=null){let i={id:"pc"+N.pcSeq++,owner:n,jobId:e,build:t,score:null,osSig:null};return N.pcs.push(i),i}var qf=()=>N.pcs.find(n=>n.id===N.benchPc)||null;var bi=n=>n&&n.jobId?N.jobs.find(t=>t.id===n.jobId):null,Hs=n=>N.pcs.find(t=>t.jobId===n.id)||null;function dc(n){return JSON.stringify([Object.entries(n.slots).map(([t,e])=>t+":"+e.uid+(e.dirty?"d":"")).sort(),Object.keys(n.cables).sort()])}var j=n=>document.querySelector(n),Sy=n=>[...document.querySelectorAll(n)],Dt=n=>String(n??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Yf=n=>N.sandbox?"\u221E":be(n),gu=300,ms={repair:"\u0420\u0435\u043C\u043E\u043D\u0442",clean:"\u0427\u0438\u0441\u0442\u043A\u0430 \u043E\u0442 \u043F\u044B\u043B\u0438",upgrade_gpu:"\u0417\u0430\u043C\u0435\u043D\u0430 \u0432\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u044B",upgrade_ram:"\u0411\u043E\u043B\u044C\u0448\u0435 \u043F\u0430\u043C\u044F\u0442\u0438",upgrade_ssd:"\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 SSD",upgrade_cpu:"\u0417\u0430\u043C\u0435\u043D\u0430 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440\u0430",cooling:"\u041E\u0445\u043B\u0430\u0436\u0434\u0435\u043D\u0438\u0435",build:"\u0421\u0431\u043E\u0440\u043A\u0430 \u0441 \u043D\u0443\u043B\u044F"},Lo=matchMedia("(pointer: coarse)").matches;function Se(n,t=""){let e=document.createElement("div");for(e.className="toast "+t,e.innerHTML=n,j("#toasts").appendChild(e);j("#toasts").children.length>4;)j("#toasts").firstChild.remove();setTimeout(()=>{e.classList.add("out"),setTimeout(()=>e.remove(),320)},t==="err"?4200:3200),t==="err"&&Kt.error()}function ai({title:n,body:t,buttons:e=[],color:i="",wide:s=!1,onClose:r=null}){let o=j("#modal");o.className="modal"+(s?" wide":""),o.innerHTML=`<div class="modal-h ${i}">${n}</div><div class="modal-b">${t}</div>
    ${e.length?`<div class="modal-f">${e.map((a,c)=>`<button class="btn ${a.cls||"btn-line"}" data-mb="${c}" ${a.disabled?"disabled":""}>${a.label}</button>`).join("")}</div>`:""}`,j("#modalWrap").classList.remove("hidden"),J.modalClose=r,o.querySelectorAll("[data-mb]").forEach(a=>a.addEventListener("click",()=>{let c=e[Number(a.dataset.mb)];Kt.click(),c.keep||vu(!0),c.fn&&c.fn()})),Tu()}function vu(n=!1){if(j("#modalWrap").classList.contains("hidden"))return!1;j("#modalWrap").classList.add("hidden");let t=J.modalClose;return J.modalClose=null,!n&&t&&t(),!0}var yu=()=>!j("#modalWrap").classList.contains("hidden");j("#modalWrap").addEventListener("pointerdown",n=>{n.target.id==="modalWrap"&&vu()});Xf();hc(N.settings.sound);var J={selected:null,tool:null,powered:!1,booted:!1,busy:!1,timers:[],invTab:"all",invDetail:null,shopCat:"cpu",shopQ:"",shopSort:"price",cart:{},mailSel:0,started:!1,modalClose:null,markRun:null};for(let n of N.pcs)n.id!==N.benchPc&&n.spot==null&&(n.spot=Mu());var Ut=Lf(j("#view")),Wi=Uf(Ut.screen.canvas,Ut.screen.texture);Ut.on("sens",()=>N.settings.sens);Ut.handlers&&(Ut.handlers.sens=()=>N.settings.sens);j("#btnExit").innerHTML=St.exit+"<span>\u041E\u0442\u043E\u0439\u0442\u0438</span>";j("#osExit").innerHTML=St.exit+"<span>\u0412\u044B\u0439\u0442\u0438</span>";j("#jobMin").innerHTML=St.minus;j("#invClose").innerHTML=St.x;j("#ghFloat").innerHTML=St.github+"GitHub";j("#btnInvMob").innerHTML=St.box;j("#btnMenuMob").innerHTML=St.menu;innerWidth<=640&&j("#jobPanel").classList.add("min");var Ey=cs(),en=()=>qf(),$n=()=>en()?.build||Ey,Hn=n=>n&&n.score&&n.score.sig===dc(n.build)?n.score.score:null,bu=n=>N.pcs.find(t=>t.id!==N.benchPc&&t.spot===n)||null;function Mu(){for(let n=0;n<fu;n++)if(!N.pcs.some(t=>t.id!==N.benchPc&&t.spot===n))return n;return null}var mc=n=>{if(!n)return"";if(n.owner==="own")return"\u0412\u0430\u0448 \u041F\u041A";let t=bi(n);return t?`\u041F\u041A: ${t.customer}`:"\u041F\u041A \u043A\u043B\u0438\u0435\u043D\u0442\u0430"},Su=n=>n.id===N.benchPc?"\u043D\u0430 \u0432\u0435\u0440\u0441\u0442\u0430\u043A\u0435":n.spot!=null?`\u043D\u0430 \u0441\u0442\u0435\u043B\u043B\u0430\u0436\u0435, \u043C\u0435\u0441\u0442\u043E ${n.spot+1}`:"\u2014";function Eu(){let n=zs(),t=Bs[Math.min(n-1,Bs.length-1)]||0,e=Bs[n]??null,i=N.sandbox||e==null?100:Math.round((N.xp-t)/(e-t)*100),s=Array.from({length:5},(o,a)=>`<span class="${N.rep>=a+.5?"":"off"}">${St.star}</span>`).join("");j("#hudStats").innerHTML=`
    <div class="hud-stars" title="\u0420\u0435\u043F\u0443\u0442\u0430\u0446\u0438\u044F">${s}</div>
    <div class="hud-lvl"><div class="hud-lvl-t">\u0423\u0420\u041E\u0412\u0415\u041D\u042C ${N.sandbox?"\u221E":n}</div><div class="hud-xp"><i style="width:${i}%"></i></div></div>
    <div class="hud-money"><span class="coin">${St.rub}</span>${N.sandbox?"\u221E":be(N.money).replace(" \u20BD","")}</div>`,j("#hudDay").innerHTML=`\u0414\u0415\u041D\u042C ${N.day}<small>${N.sandbox?"\u041F\u0435\u0441\u043E\u0447\u043D\u0438\u0446\u0430":"PC BUILD SIM"}</small>`;let r=[];r.push(`<div class="trk goal"><b>\u0426\u0435\u043B\u044C</b>${Dt(Ty())}</div>`);for(let o of N.jobs){let a=Hs(o),c=a&&Hr(o,a.build,{bench:Hn(a)});r.push(`<div class="trk ${c?"done":""}"><b>${Dt(o.customer)} \xB7 ${ms[o.type]}</b><span class="muted">${c?"\u0413\u043E\u0442\u043E\u0432\u043E \u2014 \u043C\u043E\u0436\u043D\u043E \u0441\u0434\u0430\u0432\u0430\u0442\u044C":a?"\u041F\u041A "+Su(a):""}</span></div>`)}j("#tracker").innerHTML=r.join(""),j("#keysHelp").innerHTML="<kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> \u0445\u043E\u0434\u0438\u0442\u044C \xB7 <kbd>Shift</kbd> \u0431\u0435\u0433 \xB7 \u043C\u044B\u0448\u044C \u2014 \u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C\u0441\u044F \xB7 <kbd>E</kbd> \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \xB7 <kbd>Tab</kbd> \u0441\u043A\u043B\u0430\u0434 \xB7 <kbd>Esc</kbd> \u043C\u0435\u043D\u044E"}function Ty(){if(N.sandbox)return"\u041F\u043E\u043A\u0443\u043F\u0430\u0439\u0442\u0435 \u0434\u0435\u0442\u0430\u043B\u0438 \u043D\u0430 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0435 \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u043E\u0439 (\u0443 \u043F\u0440\u0430\u0432\u043E\u0439 \u0441\u0442\u0435\u043D\u044B) \u0438 \u0441\u043E\u0431\u0438\u0440\u0430\u0439\u0442\u0435 \u041F\u041A \u043D\u0430 \u0432\u0435\u0440\u0441\u0442\u0430\u043A\u0435.";let n=en();if(n&&n.owner==="job"){let t=bi(n);return t&&Hr(t,n.build,{bench:Hn(n)})?"\u0417\u0430\u043A\u0430\u0437 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D! \u0421\u0434\u0430\u0439\u0442\u0435 \u0435\u0433\u043E \u0432 \u043F\u0430\u043D\u0435\u043B\u0438 \u0437\u0430\u043A\u0430\u0437\u0430 \u0437\u0430 \u0432\u0435\u0440\u0441\u0442\u0430\u043A\u043E\u043C.":"\u0420\u0430\u0431\u043E\u0442\u0430\u0439\u0442\u0435 \u0437\u0430 \u0432\u0435\u0440\u0441\u0442\u0430\u043A\u043E\u043C: \u0432\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0432\u0441\u0435 \u043F\u0443\u043D\u043A\u0442\u044B \u0437\u0430\u043A\u0430\u0437\u0430."}if(N.jobs.length){let t=N.jobs.find(e=>{let i=Hs(e);return i&&Hr(e,i.build,{bench:Hn(i)})});return t?`\u0417\u0430\u043A\u0430\u0437 ${t.customer} \u0433\u043E\u0442\u043E\u0432 \u2014 \u0441\u0434\u0430\u0439\u0442\u0435 \u0435\u0433\u043E (\u0441\u0442\u0435\u043B\u043B\u0430\u0436 \u0438\u043B\u0438 \xAB\u0417\u0430\u043A\u0430\u0437\u044B\xBB).`:"\u0412\u043E\u0437\u044C\u043C\u0438\u0442\u0435 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u0441\u043E \u0441\u0442\u0435\u043B\u043B\u0430\u0436\u0430 (\u0443 \u043B\u0435\u0432\u043E\u0439 \u0441\u0442\u0435\u043D\u044B) \u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043D\u0430 \u0432\u0435\u0440\u0441\u0442\u0430\u043A."}return N.inbox.length?"\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u043E\u0447\u0442\u0443 \u043D\u0430 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0435 \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u043E\u0439 (\u0443 \u043F\u0440\u0430\u0432\u043E\u0439 \u0441\u0442\u0435\u043D\u044B).":"\u041D\u043E\u0432\u044B\u0445 \u043F\u0438\u0441\u0435\u043C \u043D\u0435\u0442. \u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0435 \u0434\u0435\u043D\u044C \u0443 \u0434\u0432\u0435\u0440\u0438 \u2014 \u0437\u0430\u0432\u0442\u0440\u0430 \u043F\u0440\u0438\u0434\u0443\u0442 \u043D\u043E\u0432\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u044B."}function ci({animateSlot:n=null}={}){Ut.setBuild($n(),{animateSlot:n}),Ut.setParked(Array.from({length:fu},(t,e)=>{let i=bu(e);if(!i)return null;let s=bi(i);return{build:i.build,own:i.owner==="own",label:i.owner==="own"?"\u0412\u0430\u0448 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440":`\u041F\u041A \u043A\u043B\u0438\u0435\u043D\u0442\u0430: ${s?s.customer+" ("+ms[s.type]+")":""}`,tag:i.owner==="own"?"\u041C\u041E\u0419 \u041F\u041A":s?s.customer:"\u041A\u041B\u0418\u0415\u041D\u0422"}})),Zf(),gc()}function nn(){Eu(),document.body.classList.contains("m-build")&&(Gr(),jf()),ri(),Zf(),gc(),j("#os").classList.contains("hidden")||Ny()}function Zf(){let n=Ut.board.canvas,t=n.getContext("2d"),e=n.width,i=n.height;t.fillStyle="#f7f7f3",t.fillRect(0,0,e,i),t.fillStyle="#1d2733",t.font="bold 46px Arial",t.textBaseline="top",t.fillText("\u0417\u0410\u041A\u0410\u0417\u042B",30,22),t.font="26px Arial",t.fillStyle="#666",t.textAlign="right",t.fillText("\u0414\u0435\u043D\u044C "+N.day,e-30,34),t.textAlign="left",t.fillStyle="#1fa9e1",t.fillRect(30,80,e-60,4),N.jobs.length||(t.fillStyle="#555",t.font="30px Arial",t.fillText("\u0417\u0430\u043A\u0430\u0437\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.",30,120),t.fillText("\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u043E\u0447\u0442\u0443 \u043D\u0430 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0435!",30,165)),N.jobs.forEach((s,r)=>{let o=110+r*96,a=Hs(s),c=a&&Hr(s,a.build,{bench:Hn(a)});t.fillStyle=c?"#2fa84f":"#f39200",t.beginPath(),t.arc(48,o+26,14,0,7),t.fill(),t.fillStyle="#1d2733",t.font="bold 32px Arial",t.fillText(`${s.customer} \u2014 ${ms[s.type]}`,76,o+6),t.font="24px Arial",t.fillStyle="#555",t.fillText(`${be(s.reward)} \xB7 ${c?"\u0433\u043E\u0442\u043E\u0432\u043E!":a?Su(a):""}`,76,o+46)}),Ut.board.texture.needsUpdate=!0}function gc(){let n=Ut.office.canvas,t=n.getContext("2d"),e=n.width,i=n.height,s=t.createLinearGradient(0,0,e,i);s.addColorStop(0,"#20163a"),s.addColorStop(.55,"#43215a"),s.addColorStop(1,"#7a2d4f"),t.fillStyle=s,t.fillRect(0,0,e,i);let r=t.createRadialGradient(e*.75,i*.3,10,e*.75,i*.3,420);r.addColorStop(0,"rgba(255,138,61,.9)"),r.addColorStop(1,"rgba(255,138,61,0)"),t.fillStyle=r,t.fillRect(0,0,e,i),[["#1fa9e1","\u041F\u043E\u0447\u0442\u0430"],["#f39200","\u041C\u0430\u0433\u0430\u0437\u0438\u043D"],["#2fa84f","\u0417\u0430\u043A\u0430\u0437\u044B"],["#8e5bd6","\u0421\u043A\u043B\u0430\u0434"],["#3a4a5c","\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430"]].forEach(([c,l],h)=>{t.fillStyle=c,t.fillRect(34,26+h*100,62,62),t.fillStyle="#fff",t.font="18px Arial",t.textAlign="center",t.fillText(l,65,108+h*100)});let a=N.inbox.filter(c=>!c.read).length;a&&(t.fillStyle="#e0453a",t.beginPath(),t.arc(98,28,16,0,7),t.fill(),t.fillStyle="#fff",t.font="bold 20px Arial",t.textAlign="center",t.fillText(String(a),98,35),t.fillStyle="rgba(255,255,255,.95)",t.fillRect(e-420,i-160,390,90),t.fillStyle="#1fa9e1",t.fillRect(e-420,i-160,8,90),t.fillStyle="#23292f",t.font="bold 26px Arial",t.textAlign="left",t.fillText("\u041D\u043E\u0432\u044B\u0435 \u043F\u0438\u0441\u044C\u043C\u0430: "+a,e-395,i-122),t.font="20px Arial",t.fillStyle="#5b6670",t.fillText("\u041A\u043B\u0438\u0435\u043D\u0442\u044B \u0436\u0434\u0443\u0442 \u043E\u0442\u0432\u0435\u0442\u0430",e-395,i-90)),t.fillStyle="#111418",t.fillRect(0,i-44,e,44),t.strokeStyle="#ff5a3c",t.lineWidth=3,t.strokeRect(12,i-37,44,30),t.fillStyle="#ff5a3c",t.font="italic 900 20px Arial",t.textAlign="center",t.fillText("Os",34,i-15),t.fillStyle="#fff",t.font="20px Arial",t.textAlign="right",t.fillText("\u0414\u0435\u043D\u044C "+N.day,e-20,i-15),t.textAlign="left",Ut.office.texture.needsUpdate=!0}function xu(n){let t=document.body;t.classList.toggle("m-walk",n==="walk"),t.classList.toggle("m-build",n==="build"||n==="screen-bench"||n==="fly"&&t.classList.contains("m-build")),n==="walk"&&t.classList.remove("m-build")}Ut.on("mode",n=>{n==="build"&&(xu("build"),Gr(),jf(),ri(),Xr()),n!=="walk"&&n!=="fly"&&j("#menu").classList.add("hidden"),n==="walk"&&(xu("walk"),$r(),j("#tooltip").classList.add("hidden"),Eu())});function Tu(){document.pointerLockElement&&(J.quietUnlock=performance.now()+400,document.exitPointerLock())}Ut.on("lock",n=>{if(n){j("#menu").classList.add("hidden");return}J.quietUnlock>performance.now()||Ut.mode==="walk"&&!yu()&&!document.body.classList.contains("inv-open")&&j("#os").classList.contains("hidden")&&J.started&&wc("pause")});Ut.on("target",n=>{let t=j("#prompt");if(j("#cross").classList.toggle("on",!!n),!n||!n.label){t.classList.add("hidden"),j("#btnAct").classList.add("dim"),j("#btnAct").innerHTML=St.hand+"<span>\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435</span>";return}t.innerHTML=`<kbd>${Lo?St.hand:"E"}</kbd>${Dt(n.label)}`,t.classList.remove("hidden"),j("#btnAct").classList.remove("dim"),j("#btnAct").innerHTML=St.hand+`<span>${Dt(wy(n))}</span>`});var wy=n=>({bench:"\u0412\u0435\u0440\u0441\u0442\u0430\u043A",office:"\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440",shelf:"\u0421\u043A\u043B\u0430\u0434",door:"\u0414\u0432\u0435\u0440\u044C",board:"\u0414\u043E\u0441\u043A\u0430"})[n.id]||"\u0412\u0437\u044F\u0442\u044C \u041F\u041A";Ut.on("interact",yc);function yc(n){!n||yu()||(Kt.click(),n.id==="bench"?(Tu(),Gs(),Ut.enterBuild()):n.id==="office"?(Gs(),Ut.lookAtOffice(()=>Uu("office",N.inbox.some(t=>!t.read)?"mail":null))):n.id==="shelf"?bc():n.id==="door"?up():n.id==="board"?Dy():n.id.startsWith("park:")&&Py(Number(n.id.slice(5))))}function Gr(){let n=en(),t=[{id:"hand",ic:St.hand,t:"\u0420\u0443\u043A\u0438",on:!J.tool,k:"1"},{id:"cables",ic:St.plug,t:"\u041A\u0430\u0431\u0435\u043B\u0438",on:J.tool==="cables",k:"C",dis:!n},{id:"dust",ic:St.wind,t:"\u041F\u0440\u043E\u0434\u0443\u0432\u043A\u0430",on:J.tool==="dust",k:"B",dis:!n},{id:"power",ic:St.power,t:J.powered?"\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C":"\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C",on:J.powered,k:"P",dis:!n,cls:"pw"},{id:"monitor",ic:St.monitor,t:"\u041C\u043E\u043D\u0438\u0442\u043E\u0440",k:"M",dis:!J.booted},{id:"camera",ic:St.camera,t:"\u041A\u0430\u043C\u0435\u0440\u0430",k:"R"},{id:"rack",ic:St.box,t:"\u041D\u0430 \u0441\u0442\u0435\u043B\u043B\u0430\u0436",dis:!n}];j("#toolbar").innerHTML=t.map(e=>`<button class="tool ${e.cls||""} ${e.on?"on":""}" data-tool="${e.id}" ${e.dis?"disabled":""}>${e.k?`<span class="k">${e.k}</span>`:""}${e.ic}<span>${e.t}</span></button>`).join(""),j("#pcTitle").textContent=n?`${mc(n)}${n.owner==="job"&&bi(n)?" \xB7 "+ms[bi(n).type]:""}`:"\u0412\u0435\u0440\u0441\u0442\u0430\u043A \u043F\u0443\u0441\u0442"}j("#toolbar").addEventListener("click",n=>{let t=n.target.closest("[data-tool]");!t||t.disabled||(Kt.click(),wu(t.dataset.tool))});function wu(n){n==="hand"?ds(null):n==="cables"||n==="dust"?ds(n):n==="power"?ep():n==="monitor"?J.booted&&(ds(null),Xi(null),Ut.lookAtScreen(()=>Uu("bench"))):n==="camera"?Ut.resetCamera():n==="rack"&&np()}j("#btnExit").addEventListener("click",()=>{Kt.click(),Au()});function Au(){ds(null),Xi(null),$r(),j("#tooltip").classList.add("hidden"),Ut.exitToWalk()}function dn(n){j("#hint").innerHTML=n}function Xr(){if(J.tool||J.selected)return;let n=en();if(innerWidth<=640&&n&&!J.booted){dn("");return}n?J.booted?dn("\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 <b>\xAB\u041C\u043E\u043D\u0438\u0442\u043E\u0440\xBB</b>, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u0438 \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C 3DMark."):dn("\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0435\u0442\u0430\u043B\u044C \u0432 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u0435, \u0447\u0442\u043E\u0431\u044B \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0434\u0435\u0442\u0430\u043B\u044C \u0432 \u043A\u043E\u0440\u043F\u0443\u0441\u0435, \u0447\u0442\u043E\u0431\u044B \u0441\u043D\u044F\u0442\u044C \u0435\u0451."+(Lo?" \u0414\u0432\u0443\u043C\u044F \u043F\u0430\u043B\u044C\u0446\u0430\u043C\u0438 \u2014 \u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u044C.":" \u041A\u043E\u043B\u0451\u0441\u0438\u043A\u043E \u2014 \u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u044C, \u043F\u0440\u0430\u0432\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0430 \u2014 \u0441\u0434\u0432\u0438\u043D\u0443\u0442\u044C.")):dn("\u0412\u0435\u0440\u0441\u0442\u0430\u043A \u043F\u0443\u0441\u0442. \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 <b>\u043A\u043E\u0440\u043F\u0443\u0441</b> \u0432 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u0435, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0447\u0430\u0442\u044C \u0441\u0431\u043E\u0440\u043A\u0443 \u0441\u0432\u043E\u0435\u0433\u043E \u041F\u041A, \u0438\u043B\u0438 \u043F\u0440\u0438\u043D\u0435\u0441\u0438\u0442\u0435 \u041F\u041A \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u0441\u043E \u0441\u0442\u0435\u043B\u043B\u0430\u0436\u0430.")}j("#jobMin").addEventListener("click",()=>{j("#jobPanel").classList.toggle("min")});function Ru(n){return`<ul class="checks">${n.map(t=>`<li class="${t.ok?"ok":""}"><span class="box">${t.ok?St.check:""}</span><span>${Dt(t.label)}</span></li>`).join("")}</ul>`}function jf(){let n=en(),t=j("#jobBody");if(!n){j("#jobTitle").textContent="\u0412\u0435\u0440\u0441\u0442\u0430\u043A",t.innerHTML=`<p class="small">\u041D\u0430 \u0432\u0435\u0440\u0441\u0442\u0430\u043A\u0435 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435\u0442.</p>
      <p class="small muted">\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u044B \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0441\u0442\u043E\u044F\u0442 \u043D\u0430 \u0441\u0442\u0435\u043B\u043B\u0430\u0436\u0435 \u0443 \u043B\u0435\u0432\u043E\u0439 \u0441\u0442\u0435\u043D\u044B \u2014 \u043F\u043E\u0434\u043E\u0439\u0434\u0438\u0442\u0435 \u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 <b>E</b>, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u041F\u041A \u043D\u0430 \u0432\u0435\u0440\u0441\u0442\u0430\u043A.</p>
      <p class="small muted">\u0427\u0442\u043E\u0431\u044B \u0441\u043E\u0431\u0440\u0430\u0442\u044C <b>\u0441\u0432\u043E\u0439 \u041F\u041A</b>, \u043A\u0443\u043F\u0438\u0442\u0435 \u0434\u0435\u0442\u0430\u043B\u0438 \u0432 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0435 \u0438 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u043A\u043E\u0440\u043F\u0443\u0441 \u0438\u0437 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u044F. \u0413\u043E\u0442\u043E\u0432\u044B\u0439 \u041F\u041A \u043C\u043E\u0436\u043D\u043E \u043F\u0440\u043E\u0434\u0430\u0442\u044C \u0434\u043E\u0440\u043E\u0436\u0435 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u0434\u0435\u0442\u0430\u043B\u0435\u0439.</p>`;return}let e=n.build;if(n.owner==="job"){let i=bi(n);if(!i){t.innerHTML="<p>\u0417\u0430\u043A\u0430\u0437 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D.</p>";return}let s=Po(i,e,{bench:Hn(n)}),r=s.every(o=>o.ok);j("#jobTitle").textContent="\u0417\u0430\u043A\u0430\u0437: "+i.customer,t.innerHTML=`<div class="job-subject">${Dt(i.subject)}</div>
      <div class="job-from">${Dt(ms[i.type])} \xB7 ${Dt(i.email)}</div>
      ${Ru(s)}
      <div class="reward"><span>\u041E\u043F\u043B\u0430\u0442\u0430 \xB7 +${i.xp} XP</span><b>${be(i.reward)}</b></div>
      <div class="job-btns">
        <button class="btn btn-green btn-wide" id="jpDone" ${r?"":"disabled"}>${St.check} \u0421\u0434\u0430\u0442\u044C \u0437\u0430\u043A\u0430\u0437</button>
        <button class="btn btn-line btn-wide" id="jpLetter">${St.mail} \u041F\u0438\u0441\u044C\u043C\u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0430</button>
      </div>`,j("#jpDone").onclick=()=>Sc(i),j("#jpLetter").onclick=()=>ai({title:St.mail+" "+Dt(i.subject),body:`<p class="muted small">\u041E\u0442: ${Dt(i.customer)} &lt;${Dt(i.email)}&gt;</p><p>${Dt(i.text)}</p>`,buttons:[{label:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C",cls:"btn-cyan"}]})}else{let i=Vi(e),s=Pu(n);j("#jobTitle").textContent="\u0412\u0430\u0448 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440",t.innerHTML=`<div class="stat-rows">
        <span>\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u0435\u0439</span><span>${be(Cu(n))}</span>
        <span>\u041F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u0435</span><span>${vi(e)} \u0412\u0442${e.slots.psu?" / "+ce(e.slots.psu).watt:""}</span>
        <span>\u041E\u0446\u0435\u043D\u043A\u0430 3DMark</span><span>${Hn(n)??"\u2014"}</span>
      </div>
      ${N.sandbox?"":`<button class="btn btn-orange btn-wide" id="jpSell" ${i.boot?"":"disabled"}>\u041F\u0440\u043E\u0434\u0430\u0442\u044C \u041F\u041A \u0437\u0430 ${be(s)}</button>
      <p class="small muted">${i.boot?"\u041F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u044C \u043F\u043B\u0430\u0442\u0438\u0442 \u043D\u0430 15% \u0431\u043E\u043B\u044C\u0448\u0435 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u0434\u0435\u0442\u0430\u043B\u0435\u0439 + \u0431\u043E\u043D\u0443\u0441 \u0437\u0430 3DMark.":"\u041F\u0440\u043E\u0434\u0430\u0442\u044C \u043C\u043E\u0436\u043D\u043E \u0442\u043E\u043B\u044C\u043A\u043E \u0440\u0430\u0431\u043E\u0447\u0438\u0439 \u041F\u041A (\u0434\u043E\u043B\u0436\u0435\u043D \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044C\u0441\u044F)."}</p>`}
      <button class="btn btn-line btn-wide" id="jpStrip">\u0420\u0430\u0437\u043E\u0431\u0440\u0430\u0442\u044C \u043D\u0430 \u0434\u0435\u0442\u0430\u043B\u0438</button>`,j("#jpSell")?.addEventListener("click",()=>sp(n)),j("#jpStrip").onclick=()=>Wr("\u0420\u0430\u0437\u043E\u0431\u0440\u0430\u0442\u044C \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440?","\u0412\u0441\u0435 \u0434\u0435\u0442\u0430\u043B\u0438 \u0432\u0435\u0440\u043D\u0443\u0442\u0441\u044F \u0432 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u044C.",()=>rp(n))}}var Cu=n=>hs(n.build).filter(t=>!t.client).reduce((t,e)=>t+(ce(e)?.price||0),0),Pu=n=>Math.round((Cu(n)*1.15+(Hn(n)||0)*.5)/100)*100;function Wr(n,t,e,i="\u0414\u0430"){ai({title:n,body:`<p>${t}</p>`,buttons:[{label:"\u041E\u0442\u043C\u0435\u043D\u0430"},{label:i,cls:"btn-cyan",fn:e}]})}var xc=n=>{if(n.client)return 0;let t=Qt[n.pid];return n.broken&&n.tested?Math.round(t.price*.1):Math.round(t.price*.5)};function Iu(n){let t=[];return n.client&&t.push('<span class="tag tag-client">\u043A\u043B\u0438\u0435\u043D\u0442\u0430</span>'),n.tested&&n.broken&&t.push('<span class="tag tag-bad">\u043D\u0435\u0438\u0441\u043F\u0440\u0430\u0432\u043D\u0430</span>'),n.tested&&!n.broken&&t.push('<span class="tag tag-ok">\u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u0430</span>'),n.dirty&&t.push('<span class="tag tag-dust">\u043F\u044B\u043B\u044C</span>'),t.join("")}function bc(){document.body.classList.contains("m-build")||(document.body.classList.add("inv-open"),Tu(),Ut.inputEnabled=!1,ri())}function Gs(){return document.body.classList.contains("inv-open")?(document.body.classList.remove("inv-open"),Ut.inputEnabled=!0,J.invDetail=null,!0):!1}j("#invClose").addEventListener("click",()=>{Kt.click(),Gs(),!Lo&&Ut.mode==="walk"&&Ut.lock()});function ri(){let n=document.body.classList.contains("m-build");j("#invTitle").textContent=n?"\u0418\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u044C":"\u0421\u043A\u043B\u0430\u0434 \u0434\u0435\u0442\u0430\u043B\u0435\u0439";let t={};for(let s of N.inventory){let r=Qt[s.pid].type;t[r]=(t[r]||0)+1}J.invTab!=="all"&&!t[J.invTab]&&(J.invTab="all"),j("#invTabs").innerHTML=`<button class="inv-tab ${J.invTab==="all"?"on":""}" data-tab="all">\u0412\u0441\u0435 <span class="n">${N.inventory.length}</span></button>`+Us.filter(s=>t[s]).map(s=>`<button class="inv-tab ${J.invTab===s?"on":""}" data-tab="${s}" title="${yo[s].name}">${yo[s].one.split(" ")[0]} <span class="n">${t[s]}</span></button>`).join("");let e=N.inventory.filter(s=>J.invTab==="all"||Qt[s.pid].type===J.invTab).sort((s,r)=>Us.indexOf(Qt[s.pid].type)-Us.indexOf(Qt[r.pid].type)||Qt[r.pid].price-Qt[s.pid].price),i=$n();j("#invList").innerHTML=e.length?e.map(s=>{let r=Qt[s.pid],o=!n||lu(i,s).some(a=>a.ok);return`<button class="item ${J.selected===s.uid||J.invDetail===s.uid?"sel":""} ${o?"":"no"}" data-uid="${s.uid}">
      ${To[r.type]}
      <div class="item-t"><div class="item-n">${Dt(r.name)}</div><div class="item-s">${Dt(Lr(r))}</div><div class="tags">${Iu(s)}</div></div>
    </button>`}).join(""):`<div class="inv-empty">${N.inventory.length?"\u0412 \u044D\u0442\u043E\u0439 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 \u043F\u0443\u0441\u0442\u043E":"\u0418\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u044C \u043F\u0443\u0441\u0442.<br>\u0414\u0435\u0442\u0430\u043B\u0438 \u043F\u043E\u043A\u0443\u043F\u0430\u044E\u0442\u0441\u044F \u0432 <b>\u041C\u0430\u0433\u0430\u0437\u0438\u043D\u0435</b> \u043D\u0430 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0435 \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u043E\u0439."}</div>`,Ay()}j("#invTabs").addEventListener("click",n=>{let t=n.target.closest("[data-tab]");t&&(J.invTab=t.dataset.tab,Kt.click(),ri())});j("#invList").addEventListener("click",n=>{let t=n.target.closest("[data-uid]");if(!t)return;let e=Number(t.dataset.uid);Kt.select(),document.body.classList.contains("m-build")?Xi(J.selected===e?null:e):(J.invDetail=J.invDetail===e?null:e,ri())});function Ay(){let n=J.selected??J.invDetail,t=N.inventory.find(r=>r.uid===n),e=j("#invDetail");if(!t){e.innerHTML="";return}let i=Qt[t.pid],s=xc(t);e.innerHTML=`<div class="d-name">${Dt(i.name)}</div>
    <div class="d-spec">${Dt(Lr(i))} \xB7 \u0446\u0435\u043D\u0430 ${be(i.price)}</div>
    ${i.note?`<div class="d-note">${Dt(i.note)}</div>`:""}
    <div class="d-btns">
      ${J.selected?`<button class="btn btn-sm btn-line" data-d="cancel">${St.x} \u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C</button>`:""}
      ${t.tested?"":`<button class="btn btn-sm btn-line" data-d="test">${St.test} \u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \xB7 ${N.sandbox?"0 \u20BD":be(gu)}</button>`}
      ${t.dirty?`<button class="btn btn-sm btn-line" data-d="clean">${St.wind} \u041F\u043E\u0447\u0438\u0441\u0442\u0438\u0442\u044C</button>`:""}
      ${t.client?'<span class="small muted">\u0414\u0435\u0442\u0430\u043B\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u2014 \u0432\u0435\u0440\u043D\u0451\u0442\u0441\u044F \u0435\u043C\u0443 \u043F\u043E\u0441\u043B\u0435 \u0437\u0430\u043A\u0430\u0437\u0430</span>':`<button class="btn btn-sm btn-orange" data-d="sell">\u041F\u0440\u043E\u0434\u0430\u0442\u044C \xB7 ${be(s)}</button>`}
    </div>`}j("#invDetail").addEventListener("click",n=>{let t=n.target.closest("[data-d]");if(!t)return;let e=J.selected??J.invDetail,i=N.inventory.find(o=>o.uid===e);if(!i)return;let s=Qt[i.pid],r=t.dataset.d;if(r==="cancel")Xi(null);else if(r==="test"){if(!N.sandbox&&N.money<gu){Se("\u041D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u0434\u0435\u043D\u0435\u0433","err");return}N.sandbox||(N.money-=gu),i.tested=!0,Oe(),Kt.click(),Se(i.broken?`${Dt(s.name)} \u2014 <b class="bad">\u043D\u0435\u0438\u0441\u043F\u0440\u0430\u0432\u043D\u0430</b>`:`${Dt(s.name)} \u2014 \u0438\u0441\u043F\u0440\u0430\u0432\u043D\u0430`,i.broken?"err":"ok"),nn()}else if(r==="clean")i.dirty=!1,Oe(),Kt.blow(),ri();else if(r==="sell"){let o=xc(i);N.inventory=N.inventory.filter(a=>a!==i),N.sandbox||(N.money+=o),J.selected===e&&Xi(null),J.invDetail=null,Oe(),Kt.cash(),Se(`\u041F\u0440\u043E\u0434\u0430\u043D\u043E: ${Dt(s.name)} \u0437\u0430 ${be(o)}`,"ok"),nn()}});function _c(){Ut.setGhosts([],$n())}function Xi(n){if(J.selected=n,$r(),n==null){_c(),ri(),dn(""),Xr();return}ds(null,!0);let t=N.inventory.find(r=>r.uid===n);if(!t){J.selected=null;return}let e=Qt[t.pid],i=$n();if(!en()&&e.type!=="case"){_c(),dn("\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 <b>\u043A\u043E\u0440\u043F\u0443\u0441</b> \u2014 \u0441 \u043D\u0435\u0433\u043E \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u043B\u044E\u0431\u0430\u044F \u0441\u0431\u043E\u0440\u043A\u0430."),ri();return}let s=lu(i,t);Ut.setGhosts(s,i,t),s.length?s.some(r=>r.ok)?dn(`\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 <b class="ok-t">\u0437\u0435\u043B\u0451\u043D\u0443\u044E</b> \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u0447\u0442\u043E\u0431\u044B \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C <b>${Dt(e.name)}</b>. Esc \u2014 \u043E\u0442\u043C\u0435\u043D\u0430.`):dn(`<b class="bad">\u041D\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442:</b> ${Dt(s[0].reason)}`):dn(`\u0414\u043B\u044F \xAB${Dt(e.name)}\xBB \u0441\u0435\u0439\u0447\u0430\u0441 \u043D\u0435\u0442 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0433\u043E \u043C\u0435\u0441\u0442\u0430.`),ri()}function Du(){J.powered&&(ps(),Se("\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D \u2014 \u0441 \u0434\u0435\u0442\u0430\u043B\u044F\u043C\u0438 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430 \u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u043E\u043C \u041F\u041A"))}function Kf(n){j("#tooltip").classList.add("hidden");let t=N.inventory.find(o=>o.uid===J.selected);if(!t)return;Du();let e=en(),i=!1;if(!e){if(Qt[t.pid].type!=="case")return;e=mu("own"),e.spot=null,N.benchPc=e.id,i=!0}let s=kf(e.build,t,n);if(!s.ok){i&&(N.pcs=N.pcs.filter(o=>o!==e),N.benchPc=null),Se(Dt(s.reason),"err");return}N.inventory=N.inventory.filter(o=>o!==t),J.selected=null,Kt.install(),Oe(),ci({animateSlot:n}),_c(),J.tool==="cables"&&fs(),nn(),dn(""),Xr(),i&&Se("\u0412\u044B \u043D\u0430\u0447\u0430\u043B\u0438 \u0441\u0431\u043E\u0440\u043A\u0443 <b>\u0441\u0432\u043E\u0435\u0433\u043E \u041F\u041A</b>. \u0413\u043E\u0442\u043E\u0432\u044B\u0439 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u043C\u043E\u0436\u043D\u043E \u043F\u0440\u043E\u0434\u0430\u0442\u044C \u0438\u043B\u0438 \u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0435\u0431\u0435.","ok");let r=Qt[t.pid];e.build.slots.psu&&["mb","gpu","storage","psu"].includes(r.type)&&yi(e.build).some(o=>!e.build.cables[o])&&Se("\u041D\u0435 \u0437\u0430\u0431\u0443\u0434\u044C\u0442\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043A\u0430\u0431\u0435\u043B\u0438 \u2014 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442 <b>\xAB\u041A\u0430\u0431\u0435\u043B\u0438\xBB</b>")}function Jf(n){let t=en();if(!t)return;if(t.owner==="job"&&n==="case"){Se("\u041A\u043E\u0440\u043F\u0443\u0441 \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u0441\u043D\u0438\u043C\u0430\u0442\u044C \u043D\u0435 \u043D\u0443\u0436\u043D\u043E","err");return}Du();let e=Bf(t.build,n);if(!e.ok){Se(Dt(e.reason),"err");return}let i=bi(t);e.item.client&&i&&(e.item.job=i.id),N.inventory.push(e.item),Kt.remove(),!Object.keys(t.build.slots).length&&t.owner==="own"&&(N.pcs=N.pcs.filter(s=>s!==t),N.benchPc=null),Oe(),ci(),J.tool==="cables"&&fs(),nn()}function Ry(n,t,e){let i=en(),s=i?.build.slots[n];if(!s)return;let r=Qt[s.pid],o=hu(i.build,n);i.owner==="job"&&n==="case"&&(o={ok:!1,reason:"\u043A\u043E\u0440\u043F\u0443\u0441 \u043A\u043B\u0438\u0435\u043D\u0442\u0430"});let a=j("#ctx");a.innerHTML=`<div class="ctx-t">${Dt(r.name)}</div>
    <div class="ctx-s">${Dt(Lr(r))}</div>
    <div class="ctx-s tags">${Iu(s)}</div>
    ${s.dirty?`<button data-a="clean">${St.wind} \u041F\u0440\u043E\u0434\u0443\u0442\u044C \u043E\u0442 \u043F\u044B\u043B\u0438</button>`:""}
    <button data-a="remove" ${o.ok?"":"disabled"}>${St.wrench} \u0421\u043D\u044F\u0442\u044C${o.ok?"":` <small>(${Dt(o.reason)})</small>`}</button>
    <button data-a="close">${St.x} \u0417\u0430\u043A\u0440\u044B\u0442\u044C</button>`,a.classList.remove("hidden");let c=a.getBoundingClientRect();a.style.left=Math.max(8,Math.min(t+8,innerWidth-c.width-8))+"px",a.style.top=Math.max(8,Math.min(e+8,innerHeight-c.height-8))+"px",a.onclick=l=>{let h=l.target.closest("button");!h||h.disabled||($r(),h.dataset.a==="remove"&&Jf(n),h.dataset.a==="clean"&&Qf(n))}}function $r(){j("#ctx").classList.add("hidden")}function Qf(n){let t=en()?.build.slots[n];t?.dirty&&(t.dirty=!1,Kt.blow(),Ut.blowDust(n),Oe(),setTimeout(()=>{Ut.setBuild($n()),nn()},350))}function ds(n,t=!1){J.tool=n&&J.tool!==n?n:null,document.body.classList.toggle("tool-dust",J.tool==="dust"),J.tool&&J.selected&&(J.selected=null,_c(),ri()),J.tool==="cables"?fs():Ut.setCablePoints([],$n()),J.tool==="cables"?fs.msg||dn('\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 <b class="warn-t">\u0436\u0451\u043B\u0442\u0443\u044E</b> \u0442\u043E\u0447\u043A\u0443, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043A\u0430\u0431\u0435\u043B\u044C \u043E\u0442 \u0431\u043B\u043E\u043A\u0430 \u043F\u0438\u0442\u0430\u043D\u0438\u044F. <b class="ok-t">\u0417\u0435\u043B\u0451\u043D\u0443\u044E</b> \u2014 \u043E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C.'):J.tool==="dust"?dn("\u0411\u0430\u043B\u043B\u043E\u043D \u0441\u043E \u0441\u0436\u0430\u0442\u044B\u043C \u0432\u043E\u0437\u0434\u0443\u0445\u043E\u043C: \u043D\u0430\u0436\u0438\u043C\u0430\u0439\u0442\u0435 \u043D\u0430 \u0437\u0430\u043F\u044B\u043B\u0451\u043D\u043D\u044B\u0435 \u0434\u0435\u0442\u0430\u043B\u0438."):t||(dn(""),Xr()),document.body.classList.contains("m-build")&&Gr()}function fs(){let n=$n(),t=yi(n);Ut.setCablePoints(t.map(e=>({id:e,connected:!!n.cables[e]})),n),fs.msg=!1,t.length?n.slots.psu||(dn("\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 <b>\u0431\u043B\u043E\u043A \u043F\u0438\u0442\u0430\u043D\u0438\u044F</b> \u2014 \u043E\u0442 \u043D\u0435\u0433\u043E \u0438\u0434\u0443\u0442 \u0432\u0441\u0435 \u043A\u0430\u0431\u0435\u043B\u0438."),fs.msg=!0):(dn("\u041F\u043E\u043A\u0430 \u043D\u0435\u0447\u0435\u0433\u043E \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0442\u044C: \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u043A\u0443\u044E \u043F\u043B\u0430\u0442\u0443, \u0432\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0443 \u0441 \u0434\u043E\u043F. \u043F\u0438\u0442\u0430\u043D\u0438\u0435\u043C \u0438\u043B\u0438 \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u0438."),fs.msg=!0)}Ut.on("pick",tp);function tp(n,t,e){if(j("#tooltip").classList.add("hidden"),$r(),!n)return;let i=en();if(n.kind==="ghost"){n.ok?Kf(n.slot):Se(Dt(n.reason),"err");return}if(i){if(n.kind==="cable"){Du();let s=n.connected?Vf(i.build,n.id):Hf(i.build,n.id);if(!s.ok){Se(Dt(s.reason),"err");return}Kt.cable(),Oe(),Ut.setBuild(i.build),fs(),nn();return}if(n.kind==="part"){if(J.tool==="dust"){i.build.slots[n.slot]?.dirty?Qf(n.slot):Se("\u042D\u0442\u0430 \u0434\u0435\u0442\u0430\u043B\u044C \u0443\u0436\u0435 \u0447\u0438\u0441\u0442\u0430\u044F");return}if(J.selected)return;Kt.click(),Ry(n.slot,t,e)}}}Ut.on("hover",(n,t,e)=>{let i=j("#tooltip"),s=$n();if(!n||n.kind==="part"&&!s.slots[n.slot]){i.classList.add("hidden");return}let r="";if(n.kind==="part"){let o=s.slots[n.slot];r=`<b>${Dt(ce(o).name)}</b>${o.dirty?' \xB7 <span class="warn-t">\u0432 \u043F\u044B\u043B\u0438</span>':""}`}n.kind==="ghost"&&(r=n.ok?`\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u044E\u0434\u0430: ${as[n.slot].label}`:`\u041D\u0435\u043B\u044C\u0437\u044F: ${Dt(n.reason)}`),n.kind==="cable"&&(r=`${n.connected?"\u041E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C":"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C"}: ${zf[n.id]}`),i.innerHTML=r,i.classList.remove("hidden"),i.style.left=Math.min(t+14,innerWidth-300)+"px",i.style.top=e+14+"px"});function Cy(){J.timers.forEach(clearTimeout),J.timers=[]}var Vs=(n,t)=>J.timers.push(setTimeout(n,t));function vc(){let n=$n(),t=zr(n).map(e=>ce(n.slots[e]).name.split(" (")[0]).join(", ");return{mb:ce(n.slots.mb)?.name,cpu:ce(n.slots.cpu)?.name,gpu:ce(n.slots.gpu)?.name,ram:ls(n)*1024,drives:t,cpuTemp:Hi(n).cpu}}function ps(){Cy(),J.busy=!1,J.powered=!1,J.booted=!1,J.markRun=null,Ut.setPower(!1),Eo(!1),Wi.set("off"),document.body.classList.contains("m-build")&&(Gr(),Xr())}function ep(){if(J.powered){ps(),Kt.click();return}let n=en();if(!n)return;ds(null,!0),Xi(null);let t=Vi(n.build);if(!t.power){Se(Dt(t.error),"err");return}if(J.powered=!0,Ut.setPower(!0),Eo(!0),Gr(),dn("\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F\u2026"),!t.post){Wi.set("nosignal"),Vs(()=>{t.beep&&Kt.beepCode(t.beep),Se(`${t.beep?"\u041F\u0438\u0441\u043A: "+t.beep+". ":""}${Dt(t.error)}`,"err"),dn(Dt(t.error))},900);return}if(Wi.set("post",{...vc(),error:t.boot?"":t.error}),Vs(()=>Kt.postBeep(),300),!t.boot){Vs(()=>{Se(Dt(t.error),"err"),dn(Dt(t.error))},1400),t.shutdown&&Vs(()=>{ps(),Se("\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0430\u0432\u0430\u0440\u0438\u0439\u043D\u043E \u0432\u044B\u043A\u043B\u044E\u0447\u0438\u043B\u0441\u044F","warn")},3200);return}let e=dc({slots:Object.fromEntries(zr(n.build).map(s=>[s,n.build.slots[s]])),cables:{}}),i=n.osSig!==e;Vs(()=>Wi.set("boot",{install:i}),1500),Vs(()=>{n.osSig=e,Oe(),J.booted=!0,Wi.set("desktop",vc()),Gr(),dn(""),Xr(),Se("\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0441\u044F! \u041D\u0430\u0436\u043C\u0438\u0442\u0435 <b>\xAB\u041C\u043E\u043D\u0438\u0442\u043E\u0440\xBB</b>, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C 3DMark.","ok"),nn()},i?5200:3e3)}function np(){let n=en();if(!n)return;let t=Mu();if(t==null){Se("\u041D\u0430 \u0441\u0442\u0435\u043B\u043B\u0430\u0436\u0435 \u043D\u0435\u0442 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0445 \u043C\u0435\u0441\u0442","err");return}ps(),ds(null,!0),Xi(null),n.spot=t,N.benchPc=null,Oe(),ci(),nn(),Se(`${mc(n)} \u2014 \u043D\u0430 \u0441\u0442\u0435\u043B\u043B\u0430\u0436\u0435, \u043C\u0435\u0441\u0442\u043E ${t+1}`)}function ip(n){let t=bu(n);if(!t)return;ps();let e=en();e&&(e.spot=n),t.spot=null,N.benchPc=t.id,Oe(),ci({animateSlot:"case"}),nn(),Se(e?`\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u044B \u043F\u043E\u043C\u0435\u043D\u044F\u043B\u0438\u0441\u044C \u043C\u0435\u0441\u0442\u0430\u043C\u0438: ${mc(t)} \u2014 \u043D\u0430 \u0432\u0435\u0440\u0441\u0442\u0430\u043A\u0435`:`${mc(t)} \u2014 \u043D\u0430 \u0432\u0435\u0440\u0441\u0442\u0430\u043A\u0435`,"ok")}function Py(n){let t=bu(n);if(!t)return;let e=bi(t),i=t.build,s=()=>{ip(n),Ut.enterBuild()};if(t.owner==="job"&&e){let r=Po(e,i,{bench:Hn(t)}),o=r.every(a=>a.ok);ai({title:St.user+" "+Dt(e.customer)+" \xB7 "+ms[e.type],body:`<p><b>${Dt(e.subject)}</b></p>${Ru(r)}<div class="reward"><span>\u041E\u043F\u043B\u0430\u0442\u0430 \xB7 +${e.xp} XP</span><b>${be(e.reward)}</b></div>`,buttons:[{label:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C"},...o?[{label:St.check+" \u0421\u0434\u0430\u0442\u044C \u0437\u0430\u043A\u0430\u0437",cls:"btn-green",fn:()=>Sc(e)}]:[],{label:en()?"\u041F\u043E\u043C\u0435\u043D\u044F\u0442\u044C \u0441 \u0432\u0435\u0440\u0441\u0442\u0430\u043A\u043E\u043C":"\u041D\u0430 \u0432\u0435\u0440\u0441\u0442\u0430\u043A",cls:"btn-cyan",fn:s}],onClose:Vn})}else{let r=Vi(i);ai({title:St.monitor+" \u0412\u0430\u0448 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440",body:`<div class="stat-rows"><span>\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u0435\u0439</span><span>${be(Cu(t))}</span><span>\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044F</span><span>${r.boot?"\u0434\u0430":"\u043D\u0435\u0442"}</span><span>3DMark</span><span>${Hn(t)??"\u2014"}</span></div>`,buttons:[{label:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C"},...N.sandbox?[]:[{label:`\u041F\u0440\u043E\u0434\u0430\u0442\u044C \xB7 ${be(Pu(t))}`,cls:"btn-orange",disabled:!r.boot,fn:()=>sp(t)}],{label:"\u0420\u0430\u0437\u043E\u0431\u0440\u0430\u0442\u044C",fn:()=>rp(t)},{label:en()?"\u041F\u043E\u043C\u0435\u043D\u044F\u0442\u044C \u0441 \u0432\u0435\u0440\u0441\u0442\u0430\u043A\u043E\u043C":"\u041D\u0430 \u0432\u0435\u0440\u0441\u0442\u0430\u043A",cls:"btn-cyan",fn:s}],onClose:Vn})}}function Vn(){!Lo&&Ut.mode==="walk"&&Ut.lock()}function Mc(n){n.id===N.benchPc&&(ps(),N.benchPc=null),N.pcs=N.pcs.filter(t=>t!==n)}function sp(n){if(!Vi(n.build).boot)return;let t=Pu(n);for(let e of hs(n.build))e.client&&N.inventory.push(e);Mc(n),N.money+=t,N.earned+=t,op(30),Oe(),Kt.cash(),ci(),nn(),ai({title:"\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u043F\u0440\u043E\u0434\u0430\u043D!",color:"green",body:`<div class="big-num">+${be(t)}</div><p class="muted">+30 XP</p>`,buttons:[{label:"\u041E\u0442\u043B\u0438\u0447\u043D\u043E",cls:"btn-cyan"}],onClose:Vn})}function rp(n){for(let t of hs(n.build))N.inventory.push(t);Mc(n),Oe(),ci(),nn(),Se("\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0440\u0430\u0437\u043E\u0431\u0440\u0430\u043D, \u0434\u0435\u0442\u0430\u043B\u0438 \u2014 \u0432 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u0435","ok")}function op(n){let t=zs();N.xp+=n;let e=zs();e>t&&!N.sandbox&&setTimeout(()=>{Kt.levelUp();let i=Dr.filter(s=>s.lvl===e).length;Se(`<b>\u041D\u043E\u0432\u044B\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C: ${e}!</b> \u0412 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0435 \u043E\u0442\u043A\u0440\u044B\u043B\u043E\u0441\u044C \u0434\u0435\u0442\u0430\u043B\u0435\u0439: ${i}`,"ok")},400)}function Lu(n){for(let t=0;t<n;t++){let e=N.seedBase+N.seedN++*7919>>>0,i=us(e,zs(),(s,r)=>uc(s,r));i.id="j"+e+"_"+N.seedN,N.inbox.push({...i,day:N.day,read:!1})}for(;N.inbox.length>8;)N.inbox.shift();Oe()}function ap(n){let t=N.inbox[n];if(!t)return;if(N.jobs.length>=Vr){Se(`\u041E\u0434\u043D\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u043C\u043E\u0436\u043D\u043E \u0432\u0435\u0441\u0442\u0438 \u043D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 ${Vr} \u0437\u0430\u043A\u0430\u0437\u043E\u0432`,"err");return}let e=Mu(),i=e==null&&!en();if(e==null&&!i){Se("\u041D\u0435\u0442 \u043C\u0435\u0441\u0442\u0430: \u0441\u0442\u0435\u043B\u043B\u0430\u0436 \u0438 \u0432\u0435\u0440\u0441\u0442\u0430\u043A \u0437\u0430\u043D\u044F\u0442\u044B. \u0421\u0434\u0430\u0439\u0442\u0435 \u0438\u043B\u0438 \u0443\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u043A\u043E\u0439-\u043D\u0438\u0431\u0443\u0434\u044C \u041F\u041A.","err");return}N.inbox.splice(n,1);let s=mu("job",t.pc,t.id);delete t.pc;for(let r of Object.values(s.build.slots))r.client&&(r.job=t.id);i?(s.spot=null,N.benchPc=s.id):s.spot=e,N.jobs.push(t),Oe(),Kt.select(),ci(),nn(),Se(`\u0417\u0430\u043A\u0430\u0437 \u043F\u0440\u0438\u043D\u044F\u0442! \u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u043F\u0440\u0438\u0432\u0435\u0437\u043B\u0438 \u2014 \u043E\u043D ${i?"\u043D\u0430 \u0432\u0435\u0440\u0441\u0442\u0430\u043A\u0435":`\u043D\u0430 \u0441\u0442\u0435\u043B\u043B\u0430\u0436\u0435, \u043C\u0435\u0441\u0442\u043E ${e+1}`}.`,"ok")}function cp(n){N.inventory=N.inventory.filter(t=>!(t.client&&t.job===n.id));for(let t of N.pcs)for(let[e,i]of Object.entries(t.build.slots))i.client&&i.job===n.id&&delete t.build.slots[e]}function Sc(n){let t=Hs(n);!t||!Hr(n,t.build,{bench:Hn(t)})||(Mc(t),cp(n),N.jobs=N.jobs.filter(e=>e!==n),N.money+=n.reward,N.earned+=n.reward,N.jobsDone++,N.rep=Math.min(5,N.rep+.25),op(n.xp),Oe(),Kt.cash(),ci(),nn(),ai({title:St.check+" \u0417\u0430\u043A\u0430\u0437 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D!",color:"green",body:`<p>${Dt(n.customer)} \u0434\u043E\u0432\u043E\u043B\u0435\u043D(\u0430) \u0440\u0430\u0431\u043E\u0442\u043E\u0439 \u0438 \u043E\u0441\u0442\u0430\u0432\u0438\u043B(\u0430) \u0445\u043E\u0440\u043E\u0448\u0438\u0439 \u043E\u0442\u0437\u044B\u0432.</p><div class="big-num">+${be(n.reward)}</div><p class="muted">+${n.xp} XP \xB7 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E \u0437\u0430\u043A\u0430\u0437\u043E\u0432: ${N.jobsDone}</p>`,buttons:[{label:"\u041E\u0442\u043B\u0438\u0447\u043D\u043E",cls:"btn-cyan"}],onClose:()=>{Ut.mode==="walk"&&Vn()}}))}function Iy(n){let t=Hs(n);if(t){for(let e of hs(t.build))e.client||N.inventory.push(e);Mc(t)}cp(n),N.jobs=N.jobs.filter(e=>e!==n),N.rep=Math.max(0,N.rep-.5),Oe(),ci(),nn(),Se("\u0417\u0430\u043A\u0430\u0437 \u043E\u0442\u043C\u0435\u043D\u0451\u043D. \u0420\u0435\u043F\u0443\u0442\u0430\u0446\u0438\u044F \u043D\u0435\u043C\u043D\u043E\u0433\u043E \u0441\u043D\u0438\u0437\u0438\u043B\u0430\u0441\u044C.","warn")}function lp(){return N.jobs.length?N.jobs.map((n,t)=>{let e=Hs(n),i=e?Po(n,e.build,{bench:Hn(e)}):[],s=e&&i.every(r=>r.ok);return`<div class="jobcard ${s?"done":""}">
      <div class="jobcard-h"><b>${Dt(n.customer)} \xB7 ${ms[n.type]}</b><span class="reward" style="border:0;padding:0;margin:0"><b>${be(n.reward)}</b></span></div>
      <div class="small">${Dt(n.subject)}</div>
      <div class="small muted">\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 ${e?Su(e):"\u2014"}</div>
      ${Ru(i)}
      <div class="btns">
        <button class="btn btn-sm btn-green" data-job="done" data-i="${t}" ${s?"":"disabled"}>${St.check} \u0421\u0434\u0430\u0442\u044C</button>
        <button class="btn btn-sm btn-line" data-job="cancel" data-i="${t}">\u041E\u0442\u043A\u0430\u0437\u0430\u0442\u044C\u0441\u044F</button>
      </div></div>`}).join(""):'<div class="empty-pane">\u041D\u0435\u0442 \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u0437\u0430\u043A\u0430\u0437\u043E\u0432.<br>\u0417\u0430\u0433\u043B\u044F\u043D\u0438\u0442\u0435 \u0432 <b>\u041F\u043E\u0447\u0442\u0443</b> \u043D\u0430 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0435 \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u043E\u0439.</div>'}function hp(n,t){n.querySelectorAll("[data-job]").forEach(e=>e.addEventListener("click",()=>{let i=N.jobs[Number(e.dataset.i)];i&&(Kt.click(),e.dataset.job==="done"?Sc(i):Wr("\u041E\u0442\u043A\u0430\u0437\u0430\u0442\u044C\u0441\u044F \u043E\u0442 \u0437\u0430\u043A\u0430\u0437\u0430?","\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0432\u0435\u0440\u043D\u0451\u0442\u0441\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0443, \u0432\u0430\u0448\u0438 \u0434\u0435\u0442\u0430\u043B\u0438 \u0438\u0437 \u043D\u0435\u0433\u043E \u2014 \u0432 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u044C. \u0420\u0435\u043F\u0443\u0442\u0430\u0446\u0438\u044F \u0441\u043D\u0438\u0437\u0438\u0442\u0441\u044F.",()=>{Iy(i),t&&t()},"\u041E\u0442\u043A\u0430\u0437\u0430\u0442\u044C\u0441\u044F"),t&&t())}))}function Dy(){ai({title:St.jobs+" \u0414\u043E\u0441\u043A\u0430 \u0437\u0430\u043A\u0430\u0437\u043E\u0432",wide:!0,body:lp(),buttons:[{label:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C",cls:"btn-cyan"}],onClose:Vn}),hp(j("#modal"))}function up(){ai({title:St.door+" \u0417\u0430\u043A\u043E\u043D\u0447\u0438\u0442\u044C \u0434\u0435\u043D\u044C?",body:`<p>\u041C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u0430\u044F \u0437\u0430\u043A\u0440\u043E\u0435\u0442\u0441\u044F \u0434\u043E \u0443\u0442\u0440\u0430. \u0417\u0430\u0432\u0442\u0440\u0430 \u043F\u0440\u0438\u0434\u0443\u0442 \u043D\u043E\u0432\u044B\u0435 \u043F\u0438\u0441\u044C\u043C\u0430 \u0441 \u0437\u0430\u043A\u0430\u0437\u0430\u043C\u0438.</p>${N.jobs.length?`<p class="muted small">\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u0437\u0430\u043A\u0430\u0437\u043E\u0432: ${N.jobs.length} \u2014 \u043E\u043D\u0438 \u043D\u0438\u043A\u0443\u0434\u0430 \u043D\u0435 \u0434\u0435\u043D\u0443\u0442\u0441\u044F.</p>`:""}`,buttons:[{label:"\u041E\u0441\u0442\u0430\u0442\u044C\u0441\u044F"},{label:"\u0417\u0430\u043A\u043E\u043D\u0447\u0438\u0442\u044C \u0434\u0435\u043D\u044C",cls:"btn-orange",fn:dp}],onClose:Vn})}function dp(){N.day++;let n=2+(Math.random()<.5?1:0);Lu(n),Oe(),Kt.select(),nn(),ai({title:`\u0414\u0435\u043D\u044C ${N.day}`,body:`<p>\u0414\u043E\u0431\u0440\u043E\u0435 \u0443\u0442\u0440\u043E! \u041D\u043E\u0432\u044B\u0445 \u043F\u0438\u0441\u0435\u043C: <b>${n}</b>.</p><p class="muted small">\u041F\u043E\u0447\u0442\u0430 \u2014 \u043D\u0430 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0435 \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u043E\u0439 \u0443 \u043F\u0440\u0430\u0432\u043E\u0439 \u0441\u0442\u0435\u043D\u044B.</p>`,buttons:[{label:"\u041D\u0430\u0447\u0430\u0442\u044C \u0434\u0435\u043D\u044C",cls:"btn-cyan",fn:Vn}]})}var Ly=[{id:"mail",name:"\u041F\u043E\u0447\u0442\u0430",icon:St.mail,color:"#1fa9e1",render:pc},{id:"shop",name:"\u041C\u0430\u0433\u0430\u0437\u0438\u043D",icon:St.cart,color:"#f39200",render:Oy},{id:"jobs",name:"\u0417\u0430\u043A\u0430\u0437\u044B",icon:St.jobs,color:"#2fa84f",render:Fy,live:!0},{id:"stock",name:"\u0421\u043A\u043B\u0430\u0434",icon:St.box,color:"#8e5bd6",render:ky,live:!0},{id:"bank",name:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430",icon:St.bank,color:"#3a4a5c",render:By,live:!0},{id:"settings",name:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",icon:St.gear,color:"#6b7785",render:zy}],Uy=[{id:"mark",name:"3DMark",icon:St.chart,color:"#f39200",render:_u},{id:"sys",name:"\u0421\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043E \u0441\u0438\u0441\u0442\u0435\u043C\u0435",icon:St.info,color:"#1fa9e1",render:Vy},{id:"occt",name:"\u0414\u0430\u0442\u0447\u0438\u043A\u0438 OCCT",icon:St.temp,color:"#e0453a",render:Gy},{id:"off",name:"\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C",icon:St.power,color:"#3a4a5c",action:()=>{Uo(),ps()}}],oi={kind:null,app:null},Io=()=>oi.kind==="office"?Ly:Uy;function Uu(n,t=null){oi.kind=n,document.body.classList.add("m-os"),j("#os").classList.remove("hidden"),Ut.inputEnabled=!1,Ws(),Ec(t)}function Uo(){if(j("#os").classList.contains("hidden"))return!1;let n=oi.kind;return J.markRun&&Ut.screen.canvas.remove(),j("#os").classList.add("hidden"),document.body.classList.remove("m-os"),Ut.inputEnabled=!0,oi.kind=null,oi.app=null,j("#osWins").innerHTML="",n==="office"?Ut.exitToWalk():Ut.backToBench(),!0}j("#osExit").addEventListener("click",()=>{Kt.click(),Uo()});function Ws(){let n=N.inbox.filter(i=>!i.read).length;j("#osDesk").innerHTML=Io().map(i=>`<button class="os-ico" data-app="${i.id}"><span class="sq" style="background:${i.color}">${i.icon}</span>${Dt(i.name)}${i.id==="mail"&&n?`<span class="badge">${n}</span>`:""}</button>`).join("");let t=new Date().toLocaleTimeString("ru-RU",{hour:"2-digit",minute:"2-digit"});j("#osTray").innerHTML=oi.kind==="office"?`<button class="btn btn-sm btn-orange" id="osEndDay">${St.door} \u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u0434\u0435\u043D\u044C</button><span>\u0414\u0435\u043D\u044C ${N.day}</span><span>${t}</span>`:`<span>${St.temp} CPU ${Hi($n()).cpu}\xB0</span><span>${t}</span>`,j("#osEndDay")?.addEventListener("click",()=>{Kt.click(),up()});let e=Io().find(i=>i.id===oi.app);j("#osTabs").innerHTML=e?`<div class="os-tab">${e.icon}${Dt(e.name)}</div>`:""}j("#osDesk").addEventListener("click",n=>{let t=n.target.closest("[data-app]");if(!t)return;Kt.click();let e=Io().find(i=>i.id===t.dataset.app);e.action?e.action():Ec(e.id)});function Ec(n){oi.app=n;let t=Io().find(e=>e.id===n);if(!t){j("#osWins").innerHTML="",Ws();return}j("#osWins").innerHTML=`<div class="win"><div class="win-h">${t.icon}<span>${Dt(t.name)}</span><span class="sp"></span><button id="winX" title="\u0417\u0430\u043A\u0440\u044B\u0442\u044C">${St.x}</button></div><div class="win-b" id="winB"></div></div>`,j("#winX").onclick=()=>{Kt.click(),J.markRun&&Ut.screen.canvas.remove(),Ec(null)},t.render(j("#winB")),Ws()}function Ny(){Ws();let n=Io().find(t=>t.id===oi.app);n&&n.live&&n.render(j("#winB"))}function pc(n){if(!N.inbox.length){n.innerHTML=`<div class="mail-list"><div class="mail-head">\u0412\u0445\u043E\u0434\u044F\u0449\u0438\u0435 <span>0</span></div><div class="mail-items"></div></div>
      <div class="mail-read"><div class="empty-pane">\u041D\u043E\u0432\u044B\u0445 \u043F\u0438\u0441\u0435\u043C \u043D\u0435\u0442.<br>\u0417\u0430\u043A\u0430\u0437\u044B \u043F\u0440\u0438\u0445\u043E\u0434\u044F\u0442 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u2014 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 <b>\xAB\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u0434\u0435\u043D\u044C\xBB</b> \u0432\u043D\u0438\u0437\u0443.</div></div>`;return}J.mailSel=Math.max(0,Math.min(J.mailSel,N.inbox.length-1));let t=N.inbox[J.mailSel];t.read=!0;let e=N.jobs.length>=Vr;n.innerHTML=`<div class="mail-list"><div class="mail-head">\u0412\u0445\u043E\u0434\u044F\u0449\u0438\u0435 <span>${N.inbox.length}</span></div>
    <div class="mail-items">${N.inbox.map((i,s)=>`<button class="mail-item ${s===J.mailSel?"sel":""} ${i.read?"":"unread"}" data-i="${s}">
      <span class="av">${St.wrench}</span>
      <span class="mi-t"><span class="mi-f"><span>${Dt(i.customer)}</span><span>\u0414\u0435\u043D\u044C ${i.day}</span></span><span class="mi-s" style="display:block">${Dt(i.subject)}</span></span>
    </button>`).join("")}</div></div>
    <div class="mail-read">
      <div class="mr-body">
        <div class="mr-subj">${Dt(t.subject)}</div>
        <div class="mr-from">\u041E\u0442: <b>${Dt(t.customer)}</b> &lt;${Dt(t.email)}&gt;</div>
        <div class="mr-text">${Dt(t.text)}</div>
        <div class="mr-meta"><span>\u041E\u043F\u043B\u0430\u0442\u0430<b>${be(t.reward)}</b></span><span>\u041E\u043F\u044B\u0442<b>+${t.xp} XP</b></span><span>\u0422\u0438\u043F \u0440\u0430\u0431\u043E\u0442\u044B<b>${ms[t.type]}</b></span></div>
        ${e?`<p class="small bad-t" style="margin-top:12px">\u0423 \u0432\u0430\u0441 \u0443\u0436\u0435 ${Vr} \u0437\u0430\u043A\u0430\u0437\u0430 \u2014 \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u0441\u0434\u0430\u0439\u0442\u0435 \u043A\u0430\u043A\u043E\u0439-\u043D\u0438\u0431\u0443\u0434\u044C.</p>`:""}
      </div>
      <div class="mr-act"><button class="btn btn-line" id="mDecline">\u041E\u0442\u043A\u043B\u043E\u043D\u0438\u0442\u044C</button><button class="btn btn-cyan" id="mAccept" ${e?"disabled":""}>\u041F\u0440\u0438\u043D\u044F\u0442\u044C</button></div>
    </div>`,n.querySelectorAll(".mail-item").forEach(i=>i.addEventListener("click",()=>{J.mailSel=Number(i.dataset.i),Kt.click(),pc(n),Ws(),gc()})),j("#mAccept").onclick=()=>{ap(J.mailSel),pc(n),Ws()},j("#mDecline").onclick=()=>{Kt.click(),N.inbox.splice(J.mailSel,1),Oe(),pc(n),nn()},gc()}function Oy(n){n.innerHTML=`<div class="shop-cats" id="shCats"></div>
    <div class="shop-main"><div class="shop-top">
      <input id="shQ" type="search" placeholder="\u041F\u043E\u0438\u0441\u043A\u2026" value="${Dt(J.shopQ)}">
      <select id="shSort"><option value="price">\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0434\u0435\u0448\u0451\u0432\u044B\u0435</option><option value="-price">\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0434\u043E\u0440\u043E\u0433\u0438\u0435</option><option value="perf">\u041F\u043E \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u0438</option></select>
    </div><div class="shop-grid" id="shGrid"></div></div>
    <div class="cart"><div class="cart-h">${St.cart} \u041A\u043E\u0440\u0437\u0438\u043D\u0430</div><div class="cart-items" id="cartItems"></div><div class="cart-f" id="cartF"></div></div>`,j("#shSort").value=J.shopSort,j("#shCats").innerHTML=Us.map(t=>`<button class="shop-cat ${J.shopCat===t?"on":""}" data-cat="${t}" title="${yo[t].name}">${To[t]}<span>${yo[t].name}</span></button>`).join(""),j("#shCats").onclick=t=>{let e=t.target.closest("[data-cat]");e&&(J.shopCat=e.dataset.cat,Kt.click(),Sy(".shop-cat").forEach(i=>i.classList.toggle("on",i===e)),fc())},j("#shQ").oninput=t=>{J.shopQ=t.target.value,fc()},j("#shQ").onkeydown=t=>t.stopPropagation(),j("#shSort").onchange=t=>{J.shopSort=t.target.value,fc()},fc(),Tc()}function fc(){let n=J.shopQ.trim().toLowerCase(),t=zs(),e=Dr.filter(s=>n?s.name.toLowerCase().includes(n):s.type===J.shopCat),i={price:(s,r)=>s.price-r.price,"-price":(s,r)=>r.price-s.price,perf:(s,r)=>(r.perf||r.watt||r.tdpMax||r.gb||0)-(s.perf||s.watt||s.tdpMax||s.gb||0)}[J.shopSort];e=e.sort(i),j("#shGrid").innerHTML=e.map(s=>{let r=s.lvl>t;return`<div class="card ${r?"locked":""}">
      ${To[s.type]}
      <div class="card-n">${Dt(s.name)}</div>
      <div class="card-s">${Dt(Lr(s))}${s.note?"<br>"+Dt(s.note):""}</div>
      <div class="card-f"><span class="card-p">${be(s.price)}</span>
        ${r?`<span class="tag tag-lock">${St.lock} \u0443\u0440. ${s.lvl}</span>`:`<button class="btn btn-sm btn-cyan" data-add="${s.id}">${St.plus} \u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443</button>`}
      </div></div>`}).join("")||'<div class="empty-pane">\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E</div>',j("#shGrid").onclick=s=>{let r=s.target.closest("[data-add]");r&&(J.cart[r.dataset.add]=(J.cart[r.dataset.add]||0)+1,Kt.select(),Tc())}}var fp=()=>Object.entries(J.cart).reduce((n,[t,e])=>n+Qt[t].price*e,0);function Tc(){if(!j("#cartItems"))return;let n=Object.keys(J.cart).filter(i=>J.cart[i]>0);j("#cartItems").innerHTML=n.length?n.map(i=>`<div class="cart-it">
    <div class="t"><div>${Dt(Qt[i].name)}</div><div class="muted">${be(Qt[i].price)}</div></div>
    <div class="q"><button data-q="-" data-id="${i}">${St.minus}</button><b>${J.cart[i]}</b><button data-q="+" data-id="${i}">${St.plus}</button></div>
  </div>`).join(""):'<div class="empty-pane small">\u041A\u043E\u0440\u0437\u0438\u043D\u0430 \u043F\u0443\u0441\u0442\u0430.<br>\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0435\u0442\u0430\u043B\u0438 \u0441\u043B\u0435\u0432\u0430.</div>';let t=fp(),e=N.sandbox||t<=N.money;j("#cartF").innerHTML=`<div class="cart-total"><span>\u0418\u0442\u043E\u0433\u043E</span><span>${be(t)}</span></div>
    <div class="small muted" style="margin-bottom:8px">\u0411\u0430\u043B\u0430\u043D\u0441: ${Yf(N.money)}</div>
    <button class="btn btn-orange btn-wide" id="cartBuy" ${n.length&&e?"":"disabled"}>${e?"\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437":"\u041D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u0434\u0435\u043D\u0435\u0433"}</button>`,j("#cartItems").onclick=i=>{let s=i.target.closest("[data-q]");s&&(J.cart[s.dataset.id]=Math.max(0,(J.cart[s.dataset.id]||0)+(s.dataset.q==="+"?1:-1)),J.cart[s.dataset.id]||delete J.cart[s.dataset.id],Kt.click(),Tc())},j("#cartBuy").onclick=pp}function pp(){let n=fp();if(!N.sandbox&&n>N.money)return;let t=0;for(let[e,i]of Object.entries(J.cart))for(let s=0;s<i;s++)N.inventory.push(uc(e,{tested:!0})),t++;N.sandbox||(N.money-=n),J.cart={},Oe(),Kt.cash(),Tc(),Eu(),ri(),Ws(),Se(`\u041F\u043E\u043A\u0443\u043F\u043A\u0430 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0430: ${t} \u0448\u0442. \u043D\u0430 ${be(n)}. \u0414\u0435\u0442\u0430\u043B\u0438 \u0443\u0436\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435.`,"ok")}function Fy(n){n.innerHTML=`<div class="app-pad"><h2 class="app-h2">\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u044B \xB7 ${N.jobs.length} \u0438\u0437 ${Vr}</h2>${lp()}</div>`,hp(n)}function ky(n){let t=N.inventory.slice().sort((e,i)=>Us.indexOf(Qt[e.pid].type)-Us.indexOf(Qt[i.pid].type)||Qt[i.pid].price-Qt[e.pid].price);n.innerHTML=`<div class="app-pad"><h2 class="app-h2">\u0421\u043A\u043B\u0430\u0434 \u0434\u0435\u0442\u0430\u043B\u0435\u0439 \xB7 ${t.length} \u0448\u0442.</h2>
    ${t.length?`<table class="tbl"><tr><th></th><th>\u0414\u0435\u0442\u0430\u043B\u044C</th><th>\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435</th><th class="r">\u041F\u0440\u043E\u0434\u0430\u0436\u0430</th><th></th></tr>
    ${t.map(e=>{let i=Qt[e.pid];return`<tr><td>${To[i.type]}</td><td><b>${Dt(i.name)}</b><div class="small muted">${Dt(Lr(i))}</div></td>
      <td><div class="tags">${Iu(e)||'<span class="small muted">\u043D\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u0430</span>'}</div></td>
      <td class="r">${e.client?"\u2014":be(xc(e))}</td>
      <td class="r">${e.client?"":`<button class="btn btn-sm btn-orange" data-sell="${e.uid}">\u041F\u0440\u043E\u0434\u0430\u0442\u044C</button>`}</td></tr>`}).join("")}</table>`:'<div class="empty-pane">\u0421\u043A\u043B\u0430\u0434 \u043F\u0443\u0441\u0442. \u041A\u0443\u043F\u0438\u0442\u0435 \u0434\u0435\u0442\u0430\u043B\u0438 \u0432 <b>\u041C\u0430\u0433\u0430\u0437\u0438\u043D\u0435</b>.</div>'}</div>`,n.querySelectorAll("[data-sell]").forEach(e=>e.addEventListener("click",()=>{let i=N.inventory.find(r=>r.uid===Number(e.dataset.sell));if(!i)return;let s=xc(i);N.inventory=N.inventory.filter(r=>r!==i),N.sandbox||(N.money+=s),Oe(),Kt.cash(),Se(`\u041F\u0440\u043E\u0434\u0430\u043D\u043E \u0437\u0430 ${be(s)}`,"ok"),nn()}))}function By(n){let t=zs(),e=Bs[t],i=Dr.filter(s=>s.lvl===t+1).length;n.innerHTML=`<div class="app-pad"><h2 class="app-h2">\u0412\u0430\u0448\u0430 \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u0430\u044F</h2>
    <div class="tiles">
      <div class="tile"><span>\u0411\u0430\u043B\u0430\u043D\u0441</span><b>${Yf(N.money)}</b></div>
      <div class="tile"><span>\u0417\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043E \u0432\u0441\u0435\u0433\u043E</span><b>${be(N.earned)}</b></div>
      <div class="tile"><span>\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E \u0437\u0430\u043A\u0430\u0437\u043E\u0432</span><b>${N.jobsDone}</b></div>
      <div class="tile"><span>\u0420\u0435\u043F\u0443\u0442\u0430\u0446\u0438\u044F</span><b>${N.rep.toFixed(1)} / 5</b></div>
      <div class="tile"><span>\u0423\u0440\u043E\u0432\u0435\u043D\u044C</span><b>${N.sandbox?"\u221E":t}</b></div>
      <div class="tile"><span>\u041E\u043F\u044B\u0442</span><b>${N.xp}${e!=null&&!N.sandbox?" / "+e:""} XP</b></div>
    </div>
    ${!N.sandbox&&e!=null?`<p class="muted">\u0414\u043E \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F: ${e-N.xp} XP. \u041D\u0430 \u0443\u0440\u043E\u0432\u043D\u0435 ${t+1} \u0432 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0435 \u043E\u0442\u043A\u0440\u043E\u044E\u0442\u0441\u044F \u0435\u0449\u0451 ${i} \u0434\u0435\u0442\u0430\u043B\u0435\u0439.</p>`:""}
    <p class="muted small">\u041E\u043F\u044B\u0442 \u0434\u0430\u044E\u0442 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u044B \u0438 \u043F\u0440\u043E\u0434\u0430\u043D\u043D\u044B\u0435 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u041F\u041A. \u0420\u0435\u043F\u0443\u0442\u0430\u0446\u0438\u044F \u0440\u0430\u0441\u0442\u0451\u0442 \u0437\u0430 \u0441\u0434\u0430\u043D\u043D\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u044B \u0438 \u043F\u0430\u0434\u0430\u0435\u0442 \u0437\u0430 \u043E\u0442\u043A\u0430\u0437\u044B.</p></div>`}function zy(n){n.innerHTML=`<div class="app-pad">${mp()}</div>`,gp(n)}function mp(){return`<div class="set-row"><span>\u0417\u0432\u0443\u043A</span><button class="switch ${N.settings.sound?"on":""}" id="setSound"></button></div>
    <div class="set-row"><span>\u0427\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u043C\u044B\u0448\u0438</span><input type="range" id="setSens" min="0.3" max="2.5" step="0.1" value="${N.settings.sens}"></div>
    <div class="set-row"><span>\u041A\u0430\u043A \u0438\u0433\u0440\u0430\u0442\u044C</span><button class="btn btn-sm btn-line" id="setHelp">\u041E\u0442\u043A\u0440\u044B\u0442\u044C</button></div>
    <div class="set-row"><span>\u041D\u0430\u0447\u0430\u0442\u044C \u043A\u0430\u0440\u044C\u0435\u0440\u0443 \u0437\u0430\u043D\u043E\u0432\u043E</span><button class="btn btn-sm btn-red" id="setNew">\u041D\u043E\u0432\u0430\u044F \u043A\u0430\u0440\u044C\u0435\u0440\u0430</button></div>
    <div class="set-row"><span>\u041F\u0435\u0441\u043E\u0447\u043D\u0438\u0446\u0430 (\u0431\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u044B\u0435 \u0434\u0435\u043D\u044C\u0433\u0438)</span><button class="btn btn-sm btn-line" id="setSand">\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C</button></div>
    <div class="set-row"><span>\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0430</span><a class="btn btn-sm btn-line" href="https://github.com/S4rgeant1k/WebGames">${St.github} \u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430 GitHub</a></div>`}function gp(n){n.querySelector("#setSound").onclick=t=>{N.settings.sound=!N.settings.sound,hc(N.settings.sound),N.settings.sound&&J.powered&&Eo(!0),t.currentTarget.classList.toggle("on",N.settings.sound),Oe()},n.querySelector("#setSens").oninput=t=>{N.settings.sens=Number(t.target.value),Oe()},n.querySelector("#setHelp").onclick=()=>Ou(),n.querySelector("#setNew").onclick=()=>Wr("\u041D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E?","\u0412\u0435\u0441\u044C \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043B\u0451\u043D.",()=>Do(!1),"\u041D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E"),n.querySelector("#setSand").onclick=()=>Wr("\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u043F\u0435\u0441\u043E\u0447\u043D\u0438\u0446\u0443?","\u0422\u0435\u043A\u0443\u0449\u0430\u044F \u043A\u0430\u0440\u044C\u0435\u0440\u0430 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043C\u0435\u043D\u0435\u043D\u0430 \u043F\u0435\u0441\u043E\u0447\u043D\u0438\u0446\u0435\u0439: \u0431\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u044B\u0435 \u0434\u0435\u043D\u044C\u0433\u0438, \u0432\u0441\u0435 \u0434\u0435\u0442\u0430\u043B\u0438 \u043E\u0442\u043A\u0440\u044B\u0442\u044B.",()=>Do(!0),"\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C")}function _u(n){let t=en(),e=Hn(t),i=!!J.markRun;n.innerHTML=`<div class="mark"><div class="mark-top"><div class="mark-logo">3D<span>MARK</span> <small style="font-size:13px;opacity:.6">Time Spy</small></div>
    <button class="btn btn-orange" id="mkRun" ${i?"disabled":""}>${i?"\u0418\u0434\u0451\u0442 \u0442\u0435\u0441\u0442\u2026":"\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0442\u0435\u0441\u0442"}</button></div>
    <div class="mark-view" id="mkView">${i?"":e!=null?Hy(t):'<div class="mark-res"><p>\u0422\u0435\u0441\u0442 \u043F\u043E\u043A\u0430\u0436\u0435\u0442, \u043D\u0430\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0431\u044B\u0441\u0442\u0440 \u044D\u0442\u043E\u0442 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0432 \u0438\u0433\u0440\u0430\u0445.</p><p class="muted">\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043D\u0443\u0436\u0435\u043D \u0434\u043B\u044F \u0437\u0430\u043A\u0430\u0437\u043E\u0432 \u043D\u0430 \u0441\u0431\u043E\u0440\u043A\u0443 \u0438 \u0432\u043B\u0438\u044F\u0435\u0442 \u043D\u0430 \u0446\u0435\u043D\u0443 \u0432\u0430\u0448\u0435\u0433\u043E \u041F\u041A.</p></div>'}</div>
    <div class="mark-bar"><i id="mkBar" style="width:${i?0:e!=null?100:0}%"></i></div></div>`,i&&j("#mkView").appendChild(Ut.screen.canvas),j("#mkRun").onclick=xp}function Hy(n){let t=Co(n.build);return`<div class="mark-res"><div class="muted">\u0412\u0430\u0448 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442</div><div class="score">${Hn(n)}</div>
    <div>\u2248 ${t.fps||"\u2014"} FPS \u0432 \u0438\u0433\u0440\u0430\u0445 \xB7 CPU ${t.cpuTemp??"\u2014"} \xB0C \xB7 GPU ${t.gpuTemp||"\u2014"} \xB0C</div>
    ${t.throttle?'<p class="warn-t"><b>\u041F\u0435\u0440\u0435\u0433\u0440\u0435\u0432: \u0447\u0430\u0441\u0442\u043E\u0442\u044B \u0441\u043D\u0438\u0436\u0435\u043D\u044B!</b> \u041F\u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043E\u0445\u043B\u0430\u0436\u0434\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u0443\u0447\u0448\u0435.</p>':""}</div>`}function xp(){let n=en();if(!n||!J.booted||J.markRun)return;let t=Co(n.build);if(!t.ok){Se(Dt(t.error),"err");return}let e=6e3;J.markRun={t0:performance.now()},Wi.set("bench",{...vc(),...t,dur:e}),oi.app==="mark"&&_u(j("#winB"));let i=setInterval(()=>{if(!J.markRun){clearInterval(i);return}let s=Math.min(1,(performance.now()-J.markRun.t0)/e),r=j("#mkBar");r&&(r.style.width=s*100+"%")},200);Vs(()=>{clearInterval(i),J.markRun=null,Ut.screen.canvas.remove(),Wi.set("result",{...vc(),...t}),n.score={sig:dc(n.build),score:t.score},Oe(),Kt.levelUp(),Se(`\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 3DMark: <b>${t.score}</b> (\u2248${t.fps} FPS)${t.throttle?' \u2014 <span class="warn-t">\u043F\u0435\u0440\u0435\u0433\u0440\u0435\u0432!</span>':""}`,"ok"),oi.app==="mark"&&_u(j("#winB")),nn()},e)}function Vy(n){let t=$n(),e=(o,a)=>`<tr><td class="muted">${o}</td><td><b>${Dt(a||"\u2014")}</b></td></tr>`,i=ce(t.slots.cpu),s=ce(t.slots.gpu),r=ks(t).map(o=>ce(o));n.innerHTML=`<div class="app-pad"><h2 class="app-h2">\u0421\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043E \u0441\u0438\u0441\u0442\u0435\u043C\u0435</h2><table class="tbl">
    ${e("\u041F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440",i?`${i.name} (${i.cores} \u044F\u0434\u0435\u0440, ${i.boost} \u0413\u0413\u0446)`:"")}
    ${e("\u0412\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0430",s?s.name:i?.igpu?"\u0412\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u0430\u044F \u0433\u0440\u0430\u0444\u0438\u043A\u0430 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440\u0430":"")}
    ${e("\u041F\u0430\u043C\u044F\u0442\u044C",`${ls(t)} \u0413\u0411 (${r.length} \u0448\u0442.${r[0]?", "+r[0].ram+" "+r[0].mhz+" \u041C\u0413\u0446":""})`)}
    ${e("\u041C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u043A\u0430\u044F \u043F\u043B\u0430\u0442\u0430",ce(t.slots.mb)?.name)}
    ${e("\u041D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u0438",zr(t).map(o=>ce(t.slots[o]).name).join(", "))}
    ${e("\u0411\u043B\u043E\u043A \u043F\u0438\u0442\u0430\u043D\u0438\u044F",ce(t.slots.psu)?`${ce(t.slots.psu).name}`:"")}
    ${e("\u041E\u0445\u043B\u0430\u0436\u0434\u0435\u043D\u0438\u0435",ce(t.slots.cooler)?.name)}
    ${e("\u041A\u043E\u0440\u043F\u0443\u0441",ce(t.slots.case)?.name)}
    ${e("\u0412\u0435\u043D\u0442\u0438\u043B\u044F\u0442\u043E\u0440\u044B \u043A\u043E\u0440\u043F\u0443\u0441\u0430",String(Ao(t)))}
  </table></div>`}function Gy(n){let t=$n(),e=Hi(t),i=vi(t),s=ce(t.slots.psu)?.watt||1,r=(a,c,l)=>a>=l?"b":a>=c?"w":"",o=bi(en());n.innerHTML=`<div class="app-pad"><h2 class="app-h2">\u0421\u0442\u0440\u0435\u0441\u0441-\u0442\u0435\u0441\u0442 OCCT \u2014 \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u043F\u043E\u0434 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u043E\u0439</h2><div class="sens">
    <div class="sens-c"><div class="muted">\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 CPU</div><div class="v">${e.cpu} \xB0C</div><div class="meter"><i class="${r(e.cpu,80,90)}" style="width:${Math.min(100,e.cpu)}%"></i></div></div>
    <div class="sens-c"><div class="muted">\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 GPU</div><div class="v">${e.gpu?e.gpu+" \xB0C":"\u2014"}</div><div class="meter"><i class="${r(e.gpu,80,88)}" style="width:${Math.min(100,e.gpu)}%"></i></div></div>
    <div class="sens-c"><div class="muted">\u041F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u0435</div><div class="v">${i} \u0412\u0442</div><div class="meter"><i class="${r(i/s,.8,.95)}" style="width:${Math.min(100,i/s*100)}%"></i></div><div class="small muted">\u0438\u0437 ${s} \u0412\u0442 \u0431\u043B\u043E\u043A\u0430 \u043F\u0438\u0442\u0430\u043D\u0438\u044F</div></div>
    <div class="sens-c"><div class="muted">\u0412\u0435\u043D\u0442\u0438\u043B\u044F\u0442\u043E\u0440\u044B \u043A\u043E\u0440\u043F\u0443\u0441\u0430</div><div class="v">${Ao(t)}</div><div class="small muted">${Ro(t).length?"\u0412\u043D\u0443\u0442\u0440\u0438 \u0435\u0441\u0442\u044C \u043F\u044B\u043B\u044C \u2014 \u043E\u043D\u0430 \u0433\u0440\u0435\u0435\u0442 \u0434\u0435\u0442\u0430\u043B\u0438":"\u041F\u044B\u043B\u0438 \u043D\u0435\u0442"}</div></div>
  </div>
  ${o?.req.maxTemp?`<p style="margin-top:14px">\u0422\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430: CPU \u043D\u0435 \u0432\u044B\u0448\u0435 <b>${o.req.maxTemp} \xB0C</b> \u2014 ${e.cpu<=o.req.maxTemp?'<b class="ok">\u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E</b>':'<b class="bad">\u043D\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E</b>'}</p>`:""}
  <p class="muted small">\u041F\u043E\u0434 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u043E\u0439 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440\u0443 \u043B\u0443\u0447\u0448\u0435 \u0431\u044B\u0442\u044C \u0445\u043E\u043B\u043E\u0434\u043D\u0435\u0435 80 \xB0C. \u0412\u044B\u0448\u0435 90 \xB0C \u043E\u043D \u0441\u0431\u0440\u0430\u0441\u044B\u0432\u0430\u0435\u0442 \u0447\u0430\u0441\u0442\u043E\u0442\u044B.</p></div>`}function wc(n){let t=j("#menu"),e=N.jobsDone>0||N.day>1||N.pcs.length||N.inventory.length||N.jobs.length,i=[];n==="start"?(i.push({id:"go",cls:"btn-cyan",t:e?`${St.home} \u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \xB7 \u0434\u0435\u043D\u044C ${N.day}`:`${St.home} \u041D\u0430\u0447\u0430\u0442\u044C \u043A\u0430\u0440\u044C\u0435\u0440\u0443`}),e&&i.push({id:"new",cls:"btn-line",t:`${St.plus} \u041D\u043E\u0432\u0430\u044F \u043A\u0430\u0440\u044C\u0435\u0440\u0430`})):i.push({id:"go",cls:"btn-cyan",t:`${St.home} \u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C`}),i.push({id:"sand",cls:"btn-line",t:`${St.box} \u041F\u0435\u0441\u043E\u0447\u043D\u0438\u0446\u0430`}),n!=="start"&&i.push({id:"set",cls:"btn-line",t:`${St.gear} \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438`}),i.push({id:"help",cls:"btn-line",t:`${St.info} \u041A\u0430\u043A \u0438\u0433\u0440\u0430\u0442\u044C`}),j("#menuBtns").innerHTML=i.map(s=>`<button class="btn ${s.cls}" data-m="${s.id}">${s.t}</button>`).join("")+`<a class="btn btn-line" href="https://github.com/S4rgeant1k/WebGames">${St.github} \u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430 GitHub</a>`,t.classList.remove("hidden"),t.dataset.kind=n}j("#menuBtns").addEventListener("click",n=>{let t=n.target.closest("[data-m]");if(!t)return;Kt.click();let e=t.dataset.m;e==="go"?Nu():e==="new"?Wr("\u041D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E?","\u0412\u0435\u0441\u044C \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043B\u0451\u043D.",()=>Do(!1),"\u041D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E"):e==="sand"?Wr("\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u043F\u0435\u0441\u043E\u0447\u043D\u0438\u0446\u0443?","\u0411\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u044B\u0435 \u0434\u0435\u043D\u044C\u0433\u0438 \u0438 \u0432\u0441\u0435 \u0434\u0435\u0442\u0430\u043B\u0438 \u043E\u0442\u043A\u0440\u044B\u0442\u044B. \u0422\u0435\u043A\u0443\u0449\u0430\u044F \u043A\u0430\u0440\u044C\u0435\u0440\u0430 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043C\u0435\u043D\u0435\u043D\u0430.",()=>Do(!0),"\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C"):e==="set"?(ai({title:St.gear+" \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",body:mp(),buttons:[{label:"\u0413\u043E\u0442\u043E\u0432\u043E",cls:"btn-cyan"}]}),gp(j("#modal"))):e==="help"&&Ou()});function Nu(){if(j("#menu").classList.add("hidden"),J.started=!0,N.tutorial){N.tutorial=!1,Oe(),Ou(!0);return}Vn()}function Do(n){if(ps(),$f(n),hc(N.settings.sound),J.selected=null,J.tool=null,J.cart={},!n)Lu(2);else for(let t of["zalman-s2","a520m-a","r5-5600g","wraith-stealth","d4-8-3200","d4-8-3200","ssd-480","pf500"])N.inventory.push(uc(t,{tested:!0}));N.tutorial=!1,Oe(),Ut.mode!=="walk"&&(j("#os").classList.contains("hidden")?Ut.exitToWalk():Uo()),Ut.teleport(1.6,2.8,.35,-.12),ci(),nn(),j("#menu").classList.add("hidden"),J.started=!0,Se(n?"\u041F\u0435\u0441\u043E\u0447\u043D\u0438\u0446\u0430: \u0434\u0435\u043D\u044C\u0433\u0438 \u0431\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u044B, \u0432\u0441\u0435 \u0434\u0435\u0442\u0430\u043B\u0438 \u043E\u0442\u043A\u0440\u044B\u0442\u044B.":"\u041D\u043E\u0432\u0430\u044F \u043A\u0430\u0440\u044C\u0435\u0440\u0430! \u041D\u0430 \u043F\u043E\u0447\u0442\u0435 \u0443\u0436\u0435 \u0436\u0434\u0443\u0442 \u043F\u0435\u0440\u0432\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u044B.","ok"),Vn()}function Ou(n=!1){ai({title:St.info+(n?" \u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u0443\u044E!":" \u041A\u0430\u043A \u0438\u0433\u0440\u0430\u0442\u044C"),wide:!0,body:`<p>\u0412\u044B \u2014 \u043C\u0430\u0441\u0442\u0435\u0440 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u043E\u0439 \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u043E\u0439. \u041F\u0440\u0438\u043D\u0438\u043C\u0430\u0439\u0442\u0435 \u0437\u0430\u043A\u0430\u0437\u044B, \u0447\u0438\u043D\u0438\u0442\u0435 \u0438 \u0441\u043E\u0431\u0438\u0440\u0430\u0439\u0442\u0435 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u044B, \u0437\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0439\u0442\u0435 \u0434\u0435\u043D\u044C\u0433\u0438 \u0438 \u043E\u043F\u044B\u0442.</p>
      <ol class="help-list">
        <li><b>\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u043E\u0439</b> (\u0443 \u043F\u0440\u0430\u0432\u043E\u0439 \u0441\u0442\u0435\u043D\u044B): \u043F\u043E\u0447\u0442\u0430 \u0441 \u0437\u0430\u043A\u0430\u0437\u0430\u043C\u0438, \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0434\u0435\u0442\u0430\u043B\u0435\u0439, \u0441\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u043A\u0430\u0437\u043E\u0432.</li>
        <li>\u041F\u0440\u0438\u043D\u044F\u0442\u044B\u0439 \u0437\u0430\u043A\u0430\u0437: \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u043D\u0430 <b>\u0441\u0442\u0435\u043B\u043B\u0430\u0436\u0435</b> \u0443 \u043B\u0435\u0432\u043E\u0439 \u0441\u0442\u0435\u043D\u044B. \u041F\u043E\u0434\u043E\u0439\u0434\u0438\u0442\u0435 \u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0435\u0433\u043E \u043D\u0430 \u0432\u0435\u0440\u0441\u0442\u0430\u043A.</li>
        <li><b>\u0412\u0435\u0440\u0441\u0442\u0430\u043A</b>: \u0441\u043D\u0438\u043C\u0430\u0439\u0442\u0435 \u0438 \u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0434\u0435\u0442\u0430\u043B\u0438, \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0439\u0442\u0435 \u043A\u0430\u0431\u0435\u043B\u0438, \u043F\u0440\u043E\u0434\u0443\u0432\u0430\u0439\u0442\u0435 \u043F\u044B\u043B\u044C, \u0432\u043A\u043B\u044E\u0447\u0430\u0439\u0442\u0435 \u041F\u041A \u0438 \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0439\u0442\u0435 3DMark \u0447\u0435\u0440\u0435\u0437 \u043C\u043E\u043D\u0438\u0442\u043E\u0440.</li>
        <li>\u041A\u043E\u0433\u0434\u0430 \u0432\u0441\u0435 \u043F\u0443\u043D\u043A\u0442\u044B \u0437\u0430\u043A\u0430\u0437\u0430 \u043E\u0442\u043C\u0435\u0447\u0435\u043D\u044B \u2014 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 <b>\xAB\u0421\u0434\u0430\u0442\u044C \u0437\u0430\u043A\u0430\u0437\xBB</b>.</li>
        <li>\u041C\u043E\u0436\u043D\u043E \u0441\u043E\u0431\u0440\u0430\u0442\u044C <b>\u0441\u0432\u043E\u0439 \u041F\u041A</b>: \u043A\u0443\u043F\u0438\u0442\u0435 \u0434\u0435\u0442\u0430\u043B\u0438 \u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043A\u043E\u0440\u043F\u0443\u0441 \u043D\u0430 \u043F\u0443\u0441\u0442\u043E\u0439 \u0432\u0435\u0440\u0441\u0442\u0430\u043A. \u0413\u043E\u0442\u043E\u0432\u044B\u0439 \u041F\u041A \u043F\u0440\u043E\u0434\u0430\u0451\u0442\u0441\u044F \u0434\u043E\u0440\u043E\u0436\u0435 \u0434\u0435\u0442\u0430\u043B\u0435\u0439.</li>
        <li>\u041F\u0438\u0441\u0435\u043C \u043D\u0435\u0442 \u2014 \u0432\u044B\u0439\u0434\u0438\u0442\u0435 \u0447\u0435\u0440\u0435\u0437 <b>\u0434\u0432\u0435\u0440\u044C</b>, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u0442\u044C \u0434\u0435\u043D\u044C.</li>
      </ol>
      <div class="keys-tbl">${Lo?"<span><b>\u0414\u0436\u043E\u0439\u0441\u0442\u0438\u043A</b></span><span>\u0445\u043E\u0434\u0438\u0442\u044C</span><span><b>\u0421\u0432\u0430\u0439\u043F \u0441\u043F\u0440\u0430\u0432\u0430</b></span><span>\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C\u0441\u044F</span><span><b>\u041A\u043D\u043E\u043F\u043A\u0430-\u0440\u0443\u043A\u0430</b></span><span>\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435</span>":"<kbd>W A S D</kbd><span>\u0445\u043E\u0434\u0438\u0442\u044C (Shift \u2014 \u0431\u0435\u0433)</span><kbd>\u041C\u044B\u0448\u044C</kbd><span>\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C\u0441\u044F</span><kbd>E</kbd><span>\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 / \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435</span><kbd>Tab</kbd><span>\u0441\u043A\u043B\u0430\u0434 \u0434\u0435\u0442\u0430\u043B\u0435\u0439</span><kbd>Esc</kbd><span>\u043D\u0430\u0437\u0430\u0434 / \u043C\u0435\u043D\u044E</span><kbd>C B P M R</kbd><span>\u0437\u0430 \u0432\u0435\u0440\u0441\u0442\u0430\u043A\u043E\u043C: \u043A\u0430\u0431\u0435\u043B\u0438, \u043F\u0440\u043E\u0434\u0443\u0432\u043A\u0430, \u043F\u0438\u0442\u0430\u043D\u0438\u0435, \u043C\u043E\u043D\u0438\u0442\u043E\u0440, \u043A\u0430\u043C\u0435\u0440\u0430</span>"}</div>`,buttons:[{label:n?"\u041D\u0430\u0447\u0430\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u0443":"\u041F\u043E\u043D\u044F\u0442\u043D\u043E",cls:"btn-cyan",fn:Vn}],onClose:Vn})}document.addEventListener("keydown",n=>{if(n.target.closest&&n.target.closest("input,textarea,select"))return;let t=Ut.mode;if(n.code==="Escape"){if(vu())return;if(!j("#ctx").classList.contains("hidden")){$r();return}if(Gs()){Vn();return}if(Uo())return;if(t==="build"){J.selected?Xi(null):J.tool?ds(null):Au();return}t==="walk"&&J.started&&(j("#menu").classList.contains("hidden")?wc("pause"):Nu());return}if(!(yu()||!j("#menu").classList.contains("hidden")||!j("#os").classList.contains("hidden"))){if(n.code==="Tab"||n.code==="KeyI"){n.preventDefault(),t==="walk"&&(Gs()?Vn():bc());return}if(t==="walk"&&n.code==="KeyE"&&!document.body.classList.contains("inv-open")){yc(Ut.target);return}if(t==="build"){let i={Digit1:"hand",KeyC:"cables",KeyB:"dust",KeyP:"power",KeyM:"monitor",KeyR:"camera"}[n.code];if(i){let s=j(`[data-tool="${i}"]`);s&&!s.disabled&&(Kt.click(),wu(i))}}}});{let n=j("#joy"),t=j("#joyKnob"),e=null,i=0,s=0,r=50;n.addEventListener("touchstart",c=>{let l=c.changedTouches[0];e=l.identifier;let h=n.getBoundingClientRect();i=h.left+h.width/2,s=h.top+h.height/2,o(l),c.preventDefault()},{passive:!1});let o=c=>{let l=c.clientX-i,h=c.clientY-s,u=Math.hypot(l,h);u>r&&(l=l/u*r,h=h/u*r),t.style.transform=`translate(${l}px, ${h}px)`,Ut.setJoystick(l/r,h/r)};n.addEventListener("touchmove",c=>{for(let l of c.changedTouches)l.identifier===e&&o(l);c.preventDefault()},{passive:!1});let a=c=>{for(let l of c.changedTouches)l.identifier===e&&(e=null,t.style.transform="",Ut.setJoystick(0,0))};n.addEventListener("touchend",a),n.addEventListener("touchcancel",a),j("#btnAct").addEventListener("click",()=>yc(Ut.target)),j("#btnInvMob").addEventListener("click",()=>{Kt.click(),!document.body.classList.contains("m-build")&&(Gs()||bc())}),j("#btnMenuMob").addEventListener("click",()=>{Kt.click(),wc("pause")})}j("#btnAct").innerHTML=St.hand+"<span>\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435</span>";j("#btnAct").classList.add("dim");Ut.onFrame=n=>Wi.tick(n);!N.sandbox&&!N.inbox.length&&!N.jobs.length&&N.day===1&&!N.jobsDone&&Lu(2);ci();nn();xu("walk");wc("start");window.__game={get S(){return N},view:Ut,ui:J,screen:Wi,PART:Qt,interact:yc,onPick:tp,acceptJob:ap,completeJob:Sc,takeToBench:ip,moveBenchToRack:np,selectItem:Xi,doInstall:Kf,doRemove:Jf,openOS:Uu,closeOS:Uo,osOpen:Ec,powerOnFlow:ep,runMark:xp,startPlaying:Nu,newGame:Do,checkout:pp,nextDay:dp,toolAction:wu,exitBuild:Au,openInventory:bc,closeInventory:Gs};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
