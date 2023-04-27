var R=Object.defineProperty;var j=(i,t,r)=>t in i?R(i,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[t]=r;var d=(i,t,r)=>(j(i,typeof t!="symbol"?t+"":t,r),r);const a=Object.seal({});class g{constructor(t,r){d(this,"_transducer");d(this,"_previous");this._transducer=t,this._previous=r}static create(){return new g(t=>t)}asTransducer(){return this._previous===void 0?this._transducer:t=>this._previous.asTransducer()(this._transducer(t))}compose(t){return t instanceof g?this.compose(t.asTransducer()):new g(t,this)}from(t){return new I(t,this)}fromArray(t){return I.fromArray(t,this)}fromSingle(t){return this.fromArray([t])}reduceInto(t,r){return new l(()=>r,t,this)}into(t){return new l(t.init,t.reduce,this)}intoArray(){return l.intoArray(this)}first(){return l.first(this)}last(){return l.last(this)}nth(t){return l.nth(this,t)}filter(t){return this.compose(O.filter(t))}map(t){return this.compose(O.map(t))}flatMap(t){return this.compose(O.flatMap(t))}enumerate(){return this.compose(O.enumerate())}take(t){return this.compose(O.take(t))}skip(t){return this.compose(O.skip(t))}takeWhile(t){return this.compose(O.takeWhile(t))}skipWhile(t){return this.compose(O.skipWhile(t))}extend(t){return this.compose(O.extend(t))}extendIf(t,r){return this.compose(O.extendIf(t,r))}merge(t){return this.compose(O.merge(t))}mergeIf(t,r){return this.compose(O.mergeIf(t,r))}alter(t){return this.compose(O.alter(t))}alterIf(t,r){return this.compose(O.alterIf(t,r))}flatten(){const t=r=>(n,c)=>{if(Array.isArray(c))for(const h of c)n=r(n,h);else n=r(n,c);return n};return this.compose(t)}}class I{constructor(t,r){d(this,"_source");d(this,"_transduction");this._source=t,this._transduction=r}static fromArray(t,r){return new I((n,c)=>{for(const h of t)c=n(c,h);return c=n(c,a),c},r)}reduceInto(t,r){return this._source(this._transduction.asTransducer()(t),r)}into(t){return this.reduceInto(t.reduce,t.init())}intoArray(){return this.reduceInto((t,r)=>(t.push(r),t),[])}first(){let t=!1;return this.reduceInto((r,n)=>t?r:(t=!0,n),void 0)}last(){return this.reduceInto((t,r)=>r,void 0)}nth(t){return new I(this._source,this._transduction.skip(t-1)).first()}}class l{constructor(t,r,n){d(this,"_init");d(this,"_reduce");d(this,"_transduction");this._init=t,this._reduce=r,this._transduction=n}static intoArray(t){return new l(()=>[],(r,n)=>(r.push(n),r),t)}static first(t){let r=!1;return new l(()=>{},(n,c)=>r?n:(r=!0,c),t)}static last(t){return new l(()=>{},(r,n)=>n,t)}static nth(t,r){return l.first(t.skip(r-1))}from(t){return t(this._transduction.asTransducer()(this._reduce),this._init())}fromArray(t){return this.from((r,n)=>{for(const c of t)n=r(n,c);return n=r(n,a),n})}fromSingle(t){return this.fromArray([t])}}var O;(i=>{function t(s){return o=>(e,u)=>u===a?o(e,a):s(u)?o(e,u):e}i.filter=t;function r(s){return o=>(e,u)=>u===a?o(e,a):o(e,s(u))}i.map=r;function n(){return f=>(o,e)=>{if(e===a)return f(o,a);for(const u of e)o=f(o,u);return o}}i.flatten=n;function c(s){return o=>(e,u)=>{if(u===a)return o(e,a);for(const p of s(u))e=o(e,p);return e}}i.flatMap=c;function h(){return f=>{let o=-1;return(e,u)=>u===a?f(e,a):(o+=1,f(e,[o,u]))}}i.enumerate=h;function T(s){return o=>{let e=-1;return(u,p)=>p===a?o(u,a):(e+=1,e<s&&(u=o(u,p)),e>=s&&(u=o(u,a)),u)}}i.take=T;function S(s){return o=>{let e=-1;return(u,p)=>p===a?o(u,a):(e+=1,e<s?u:o(u,p))}}i.skip=S;function A(s){return o=>{let e=!0;return(u,p)=>p===a?o(u,a):(e=e&&s(p),e?o(u,p):o(u,a))}}i.takeWhile=A;function N(s){return o=>{let e=!0;return(u,p)=>p===a?o(u,a):(e=e&&s(p),e?u:o(u,p))}}i.skipWhile=N;function x(s){return o=>(e,u)=>{if(u===a)return o(e,a);const p=y(u,s(u));return o(e,p)}}i.extend=x;function k(s,f){return e=>(u,p)=>p===a?e(u,a):(s(p)&&(p=y(p,f(p))),e(u,p))}i.extendIf=k;function _(s){return o=>(e,u)=>{if(u===a)return o(e,a);const p=w(u,s(u));return o(e,p)}}i.merge=_;function v(s,f){return e=>(u,p)=>p===a?e(u,a):(s(p)&&(p=w(p,f(p))),e(u,p))}i.mergeIf=v;function W(s){return o=>(e,u)=>{if(u===a)return o(e,a);const p=m(u,s(u));return o(e,p)}}i.alter=W;function b(s,f){return e=>(u,p)=>p===a?e(u,a):(s(p)&&(p=m(p,f(p))),e(u,p))}i.alterIf=b})(O||(O={}));function y(i,t){if(!Array.isArray(i)&&typeof i=="object"){if(typeof t!="object")throw new Error("Incompatible object types");const r={};for(const n in i){let c=i[n];n in t&&(c=y(c,t[n])),r[n]=c}for(const n in t)n in i||(r[n]=t[n]);return r}else return i}function w(i,t){if(Array.isArray(i)){if(!Array.isArray(t))throw new Error("Incompatible object types");return i.concat(t)}else if(typeof i=="object"){if(typeof t!="object")throw new Error("Incompatible object types");const r={};for(const n in i){let c=i[n];n in t&&(c=w(c,t[n])),r[n]=c}for(const n in t)n in i||(r[n]=t[n]);return r}else{if(typeof i!=typeof t)throw new Error("Incompatible object types");if(i!==t)throw new Error("Incompatible values");return i}}function m(i,t){if(!Array.isArray(i)&&typeof i=="object"){if(typeof t!="object")throw new Error("Incompatible object types");const r={};for(const n in i)r[n]=i[n];for(const n in t)n in r?r[n]=m(r[n],t[n]):r[n]=t[n];return r}else return t}const B=`
type Reducer<Item, State> = (state: State, item: Item) => State;
type Transducer<Input, Output> = <State>(reducer: Reducer<Output, State>) => Reducer<Input, State>;
type ReduceInto<Input> = <State>(reducer: Reducer<Input, State>, state: State) => State;
interface TransductionTarget<Input, State> {
    init: () => State;
    reduce: Reducer<Input, State>;
}
export declare class Transduction<Original, Input, Output> {
    private readonly _transducer;
    private readonly _previous?;
    private constructor();
    static create<Original>(): Transduction<Original, Original, Original>;
    asTransducer(): Transducer<Original, Output>;
    compose<NewOutput>(transducer: Transducer<Output, NewOutput> | Transduction<Output, any, NewOutput>): Transduction<Original, Output, NewOutput>;
    from(source: ReduceInto<Original>): TransductionWithSource<Original, Output>;
    fromArray(items: Original[]): TransductionWithSource<Original, Output>;
    fromSingle(item: Original): TransductionWithSource<Original, Output>;
    reduceInto<State>(target: Reducer<Output, State>, state: State): TransductionWithTarget<Original, Output, State>;
    into<State>(target: TransductionTarget<Output, State>): TransductionWithTarget<Original, Output, State>;
    intoArray(): TransductionWithTarget<Original, Output, Output[]>;
    first(): TransductionWithTarget<Original, Output, Output | undefined>;
    last(): TransductionWithTarget<Original, Output, Output | undefined>;
    nth(n: number): TransductionWithTarget<Original, Output, Output | undefined>;
    filter(predicate: (o: Output) => boolean): Transduction<Original, Output, Output>;
    map<NewOutput>(map: (o: Output) => NewOutput): Transduction<Original, Output, NewOutput>;
    flatMap<NewOutput>(map: (o: Output) => NewOutput[]): Transduction<Original, Output, NewOutput>;
    enumerate(): Transduction<Original, Output, [number, Output]>;
    take(n: number): Transduction<Original, Output, Output>;
    skip(n: number): Transduction<Original, Output, Output>;
    takeWhile(predicate: (i: Output) => boolean): Transduction<Original, Output, Output>;
    skipWhile(predicate: (i: Output) => boolean): Transduction<Original, Output, Output>;
    extend<NewOutput>(extend: (o: Output) => NewOutput): Transduction<Original, Output, Output & NewOutput>;
    extendIf<NewOutput>(predicate: (o: Output) => boolean, extend: (o: Output) => NewOutput): Transduction<Original, Output, Output & Partial<NewOutput>>;
    merge<NewOutput>(extend: (o: Output) => NewOutput): Transduction<Original, Output, Output & NewOutput>;
    mergeIf<NewOutput>(predicate: (o: Output) => boolean, extend: (o: Output) => NewOutput): Transduction<Original, Output, Output & Partial<NewOutput>>;
    alter<NewOutput>(extend: (o: Output) => NewOutput): Transduction<Original, Output, Output & NewOutput>;
    alterIf<NewOutput>(predicate: (o: Output) => boolean, extend: (o: Output) => NewOutput): Transduction<Original, Output, Output & Partial<NewOutput>>;
    flatten(): Transduction<Original, Output, Output extends (infer R)[] ? R : Output>;
}
export declare class TransductionWithSource<Input, Output> {
    private readonly _source;
    private readonly _transduction;
    constructor(source: ReduceInto<Input>, transduction: Transduction<Input, any, Output>);
    static fromArray<Input, Output>(items: Input[], transduction: Transduction<Input, any, Output>): TransductionWithSource<Input, Output>;
    reduceInto<State>(reducer: Reducer<Output, State>, state: State): State;
    into<State>(target: TransductionTarget<Output, State>): State;
    intoArray(): Output[];
    first(): Output | undefined;
    last(): Output | undefined;
    nth(n: number): Output | undefined;
}
export declare class TransductionWithTarget<Input, Output, State> {
    private readonly _init;
    private readonly _reduce;
    private readonly _transduction;
    constructor(init: () => State, reduce: Reducer<Output, State>, transduction: Transduction<Input, any, Output>);
    static intoArray<Input, Output>(transduction: Transduction<Input, any, Output>): TransductionWithTarget<Input, Output, Output[]>;
    static first<Input, Output>(transduction: Transduction<Input, any, Output>): TransductionWithTarget<Input, Output, Output | undefined>;
    static last<Input, Output>(transduction: Transduction<Input, any, Output>): TransductionWithTarget<Input, Output, Output | undefined>;
    static nth<Input, Output>(transduction: Transduction<Input, any, Output>, n: number): TransductionWithTarget<Input, Output, Output | undefined>;
    from(source: ReduceInto<Input>): State;
    fromArray(items: Input[]): State;
    fromSingle(item: Input): State;
}
export declare function deepExtend<A, B>(a: A, b: B): A & B;
export declare function deepMerge<A, B>(a: A, b: B): A & B;
export declare function deepAlter<A, B>(a: A, b: B): A & B;
export {};
`;export{a as TRANSDUCED,g as Transduction,I as TransductionWithSource,l as TransductionWithTarget,m as deepAlter,y as deepExtend,w as deepMerge,B as typescriptDeclarations};
