var r=`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <reference no-default-lib="true"/>\r


/// <reference lib="es2015.symbol" />\r
\r
interface SymbolConstructor {\r
    /**\r
     * A method that returns the default iterator for an object. Called by the semantics of the\r
     * for-of statement.\r
     */\r
    readonly iterator: unique symbol;\r
}\r
\r
interface IteratorYieldResult<TYield> {\r
    done?: false;\r
    value: TYield;\r
}\r
\r
interface IteratorReturnResult<TReturn> {\r
    done: true;\r
    value: TReturn;\r
}\r
\r
type IteratorResult<T, TReturn = any> = IteratorYieldResult<T> | IteratorReturnResult<TReturn>;\r
\r
interface Iterator<T, TReturn = any, TNext = undefined> {\r
    // NOTE: 'next' is defined using a tuple to ensure we report the correct assignability errors in all places.\r
    next(...args: [] | [TNext]): IteratorResult<T, TReturn>;\r
    return?(value?: TReturn): IteratorResult<T, TReturn>;\r
    throw?(e?: any): IteratorResult<T, TReturn>;\r
}\r
\r
interface Iterable<T> {\r
    [Symbol.iterator](): Iterator<T>;\r
}\r
\r
interface IterableIterator<T> extends Iterator<T> {\r
    [Symbol.iterator](): IterableIterator<T>;\r
}\r
\r
interface Array<T> {\r
    /** Iterator */\r
    [Symbol.iterator](): IterableIterator<T>;\r
\r
    /**\r
     * Returns an iterable of key, value pairs for every entry in the array\r
     */\r
    entries(): IterableIterator<[number, T]>;\r
\r
    /**\r
     * Returns an iterable of keys in the array\r
     */\r
    keys(): IterableIterator<number>;\r
\r
    /**\r
     * Returns an iterable of values in the array\r
     */\r
    values(): IterableIterator<T>;\r
}\r
\r
interface ArrayConstructor {\r
    /**\r
     * Creates an array from an iterable object.\r
     * @param iterable An iterable object to convert to an array.\r
     */\r
    from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];\r
\r
    /**\r
     * Creates an array from an iterable object.\r
     * @param iterable An iterable object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];\r
}\r
\r
interface ReadonlyArray<T> {\r
    /** Iterator of values in the array. */\r
    [Symbol.iterator](): IterableIterator<T>;\r
\r
    /**\r
     * Returns an iterable of key, value pairs for every entry in the array\r
     */\r
    entries(): IterableIterator<[number, T]>;\r
\r
    /**\r
     * Returns an iterable of keys in the array\r
     */\r
    keys(): IterableIterator<number>;\r
\r
    /**\r
     * Returns an iterable of values in the array\r
     */\r
    values(): IterableIterator<T>;\r
}\r
\r
interface IArguments {\r
    /** Iterator */\r
    [Symbol.iterator](): IterableIterator<any>;\r
}\r
\r
interface Map<K, V> {\r
    /** Returns an iterable of entries in the map. */\r
    [Symbol.iterator](): IterableIterator<[K, V]>;\r
\r
    /**\r
     * Returns an iterable of key, value pairs for every entry in the map.\r
     */\r
    entries(): IterableIterator<[K, V]>;\r
\r
    /**\r
     * Returns an iterable of keys in the map\r
     */\r
    keys(): IterableIterator<K>;\r
\r
    /**\r
     * Returns an iterable of values in the map\r
     */\r
    values(): IterableIterator<V>;\r
}\r
\r
interface ReadonlyMap<K, V> {\r
    /** Returns an iterable of entries in the map. */\r
    [Symbol.iterator](): IterableIterator<[K, V]>;\r
\r
    /**\r
     * Returns an iterable of key, value pairs for every entry in the map.\r
     */\r
    entries(): IterableIterator<[K, V]>;\r
\r
    /**\r
     * Returns an iterable of keys in the map\r
     */\r
    keys(): IterableIterator<K>;\r
\r
    /**\r
     * Returns an iterable of values in the map\r
     */\r
    values(): IterableIterator<V>;\r
}\r
\r
interface MapConstructor {\r
    new(): Map<any, any>;\r
    new <K, V>(iterable?: Iterable<readonly [K, V]> | null): Map<K, V>;\r
}\r
\r
interface WeakMap<K extends object, V> { }\r
\r
interface WeakMapConstructor {\r
    new <K extends object, V>(iterable: Iterable<readonly [K, V]>): WeakMap<K, V>;\r
}\r
\r
interface Set<T> {\r
    /** Iterates over values in the set. */\r
    [Symbol.iterator](): IterableIterator<T>;\r
    /**\r
     * Returns an iterable of [v,v] pairs for every value \`v\` in the set.\r
     */\r
    entries(): IterableIterator<[T, T]>;\r
    /**\r
     * Despite its name, returns an iterable of the values in the set.\r
     */\r
    keys(): IterableIterator<T>;\r
\r
    /**\r
     * Returns an iterable of values in the set.\r
     */\r
    values(): IterableIterator<T>;\r
}\r
\r
interface ReadonlySet<T> {\r
    /** Iterates over values in the set. */\r
    [Symbol.iterator](): IterableIterator<T>;\r
\r
    /**\r
     * Returns an iterable of [v,v] pairs for every value \`v\` in the set.\r
     */\r
    entries(): IterableIterator<[T, T]>;\r
\r
    /**\r
     * Despite its name, returns an iterable of the values in the set.\r
     */\r
    keys(): IterableIterator<T>;\r
\r
    /**\r
     * Returns an iterable of values in the set.\r
     */\r
    values(): IterableIterator<T>;\r
}\r
\r
interface SetConstructor {\r
    new <T>(iterable?: Iterable<T> | null): Set<T>;\r
}\r
\r
interface WeakSet<T extends object> { }\r
\r
interface WeakSetConstructor {\r
    new <T extends object = object>(iterable: Iterable<T>): WeakSet<T>;\r
}\r
\r
interface Promise<T> { }\r
\r
interface PromiseConstructor {\r
    /**\r
     * Creates a Promise that is resolved with an array of results when all of the provided Promises\r
     * resolve, or rejected when any Promise is rejected.\r
     * @param values An iterable of Promises.\r
     * @returns A new Promise.\r
     */\r
    all<T>(values: Iterable<T | PromiseLike<T>>): Promise<Awaited<T>[]>;\r
\r
    /**\r
     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved\r
     * or rejected.\r
     * @param values An iterable of Promises.\r
     * @returns A new Promise.\r
     */\r
    race<T>(values: Iterable<T | PromiseLike<T>>): Promise<Awaited<T>>;\r
}\r
\r
interface String {\r
    /** Iterator */\r
    [Symbol.iterator](): IterableIterator<string>;\r
}\r
\r
interface Int8Array {\r
    [Symbol.iterator](): IterableIterator<number>;\r
    /**\r
     * Returns an array of key, value pairs for every entry in the array\r
     */\r
    entries(): IterableIterator<[number, number]>;\r
    /**\r
     * Returns an list of keys in the array\r
     */\r
    keys(): IterableIterator<number>;\r
    /**\r
     * Returns an list of values in the array\r
     */\r
    values(): IterableIterator<number>;\r
}\r
\r
interface Int8ArrayConstructor {\r
    new (elements: Iterable<number>): Int8Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Int8Array;\r
}\r
\r
interface Uint8Array {\r
    [Symbol.iterator](): IterableIterator<number>;\r
    /**\r
     * Returns an array of key, value pairs for every entry in the array\r
     */\r
    entries(): IterableIterator<[number, number]>;\r
    /**\r
     * Returns an list of keys in the array\r
     */\r
    keys(): IterableIterator<number>;\r
    /**\r
     * Returns an list of values in the array\r
     */\r
    values(): IterableIterator<number>;\r
}\r
\r
interface Uint8ArrayConstructor {\r
    new (elements: Iterable<number>): Uint8Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Uint8Array;\r
}\r
\r
interface Uint8ClampedArray {\r
    [Symbol.iterator](): IterableIterator<number>;\r
    /**\r
     * Returns an array of key, value pairs for every entry in the array\r
     */\r
    entries(): IterableIterator<[number, number]>;\r
\r
    /**\r
     * Returns an list of keys in the array\r
     */\r
    keys(): IterableIterator<number>;\r
\r
    /**\r
     * Returns an list of values in the array\r
     */\r
    values(): IterableIterator<number>;\r
}\r
\r
interface Uint8ClampedArrayConstructor {\r
    new (elements: Iterable<number>): Uint8ClampedArray;\r
\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Uint8ClampedArray;\r
}\r
\r
interface Int16Array {\r
    [Symbol.iterator](): IterableIterator<number>;\r
    /**\r
     * Returns an array of key, value pairs for every entry in the array\r
     */\r
    entries(): IterableIterator<[number, number]>;\r
\r
    /**\r
     * Returns an list of keys in the array\r
     */\r
    keys(): IterableIterator<number>;\r
\r
    /**\r
     * Returns an list of values in the array\r
     */\r
    values(): IterableIterator<number>;\r
}\r
\r
interface Int16ArrayConstructor {\r
    new (elements: Iterable<number>): Int16Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Int16Array;\r
}\r
\r
interface Uint16Array {\r
    [Symbol.iterator](): IterableIterator<number>;\r
    /**\r
     * Returns an array of key, value pairs for every entry in the array\r
     */\r
    entries(): IterableIterator<[number, number]>;\r
    /**\r
     * Returns an list of keys in the array\r
     */\r
    keys(): IterableIterator<number>;\r
    /**\r
     * Returns an list of values in the array\r
     */\r
    values(): IterableIterator<number>;\r
}\r
\r
interface Uint16ArrayConstructor {\r
    new (elements: Iterable<number>): Uint16Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Uint16Array;\r
}\r
\r
interface Int32Array {\r
    [Symbol.iterator](): IterableIterator<number>;\r
    /**\r
     * Returns an array of key, value pairs for every entry in the array\r
     */\r
    entries(): IterableIterator<[number, number]>;\r
    /**\r
     * Returns an list of keys in the array\r
     */\r
    keys(): IterableIterator<number>;\r
    /**\r
     * Returns an list of values in the array\r
     */\r
    values(): IterableIterator<number>;\r
}\r
\r
interface Int32ArrayConstructor {\r
    new (elements: Iterable<number>): Int32Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Int32Array;\r
}\r
\r
interface Uint32Array {\r
    [Symbol.iterator](): IterableIterator<number>;\r
    /**\r
     * Returns an array of key, value pairs for every entry in the array\r
     */\r
    entries(): IterableIterator<[number, number]>;\r
    /**\r
     * Returns an list of keys in the array\r
     */\r
    keys(): IterableIterator<number>;\r
    /**\r
     * Returns an list of values in the array\r
     */\r
    values(): IterableIterator<number>;\r
}\r
\r
interface Uint32ArrayConstructor {\r
    new (elements: Iterable<number>): Uint32Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Uint32Array;\r
}\r
\r
interface Float32Array {\r
    [Symbol.iterator](): IterableIterator<number>;\r
    /**\r
     * Returns an array of key, value pairs for every entry in the array\r
     */\r
    entries(): IterableIterator<[number, number]>;\r
    /**\r
     * Returns an list of keys in the array\r
     */\r
    keys(): IterableIterator<number>;\r
    /**\r
     * Returns an list of values in the array\r
     */\r
    values(): IterableIterator<number>;\r
}\r
\r
interface Float32ArrayConstructor {\r
    new (elements: Iterable<number>): Float32Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Float32Array;\r
}\r
\r
interface Float64Array {\r
    [Symbol.iterator](): IterableIterator<number>;\r
    /**\r
     * Returns an array of key, value pairs for every entry in the array\r
     */\r
    entries(): IterableIterator<[number, number]>;\r
    /**\r
     * Returns an list of keys in the array\r
     */\r
    keys(): IterableIterator<number>;\r
    /**\r
     * Returns an list of values in the array\r
     */\r
    values(): IterableIterator<number>;\r
}\r
\r
interface Float64ArrayConstructor {\r
    new (elements: Iterable<number>): Float64Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Float64Array;\r
}\r
`;export{r as default};
