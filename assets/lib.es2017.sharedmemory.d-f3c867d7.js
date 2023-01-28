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
/// <reference lib="es2015.symbol.wellknown" />\r
\r
interface SharedArrayBuffer {\r
    /**\r
     * Read-only. The length of the ArrayBuffer (in bytes).\r
     */\r
    readonly byteLength: number;\r
\r
    /**\r
     * Returns a section of an SharedArrayBuffer.\r
     */\r
    slice(begin: number, end?: number): SharedArrayBuffer;\r
    readonly [Symbol.species]: SharedArrayBuffer;\r
    readonly [Symbol.toStringTag]: "SharedArrayBuffer";\r
}\r
\r
interface SharedArrayBufferConstructor {\r
    readonly prototype: SharedArrayBuffer;\r
    new (byteLength: number): SharedArrayBuffer;\r
}\r
declare var SharedArrayBuffer: SharedArrayBufferConstructor;\r
\r
interface ArrayBufferTypes {\r
    SharedArrayBuffer: SharedArrayBuffer;\r
}\r
\r
interface Atomics {\r
    /**\r
     * Adds a value to the value at the given position in the array, returning the original value.\r
     * Until this atomic operation completes, any other read or write operation against the array\r
     * will block.\r
     */\r
    add(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number, value: number): number;\r
\r
    /**\r
     * Stores the bitwise AND of a value with the value at the given position in the array,\r
     * returning the original value. Until this atomic operation completes, any other read or\r
     * write operation against the array will block.\r
     */\r
    and(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number, value: number): number;\r
\r
    /**\r
     * Replaces the value at the given position in the array if the original value equals the given\r
     * expected value, returning the original value. Until this atomic operation completes, any\r
     * other read or write operation against the array will block.\r
     */\r
    compareExchange(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number, expectedValue: number, replacementValue: number): number;\r
\r
    /**\r
     * Replaces the value at the given position in the array, returning the original value. Until\r
     * this atomic operation completes, any other read or write operation against the array will\r
     * block.\r
     */\r
    exchange(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number, value: number): number;\r
\r
    /**\r
     * Returns a value indicating whether high-performance algorithms can use atomic operations\r
     * (\`true\`) or must use locks (\`false\`) for the given number of bytes-per-element of a typed\r
     * array.\r
     */\r
    isLockFree(size: number): boolean;\r
\r
    /**\r
     * Returns the value at the given position in the array. Until this atomic operation completes,\r
     * any other read or write operation against the array will block.\r
     */\r
    load(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number): number;\r
\r
    /**\r
     * Stores the bitwise OR of a value with the value at the given position in the array,\r
     * returning the original value. Until this atomic operation completes, any other read or write\r
     * operation against the array will block.\r
     */\r
    or(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number, value: number): number;\r
\r
    /**\r
     * Stores a value at the given position in the array, returning the new value. Until this\r
     * atomic operation completes, any other read or write operation against the array will block.\r
     */\r
    store(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number, value: number): number;\r
\r
    /**\r
     * Subtracts a value from the value at the given position in the array, returning the original\r
     * value. Until this atomic operation completes, any other read or write operation against the\r
     * array will block.\r
     */\r
    sub(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number, value: number): number;\r
\r
    /**\r
     * If the value at the given position in the array is equal to the provided value, the current\r
     * agent is put to sleep causing execution to suspend until the timeout expires (returning\r
     * \`"timed-out"\`) or until the agent is awoken (returning \`"ok"\`); otherwise, returns\r
     * \`"not-equal"\`.\r
     */\r
    wait(typedArray: Int32Array, index: number, value: number, timeout?: number): "ok" | "not-equal" | "timed-out";\r
\r
    /**\r
     * Wakes up sleeping agents that are waiting on the given index of the array, returning the\r
     * number of agents that were awoken.\r
     * @param typedArray A shared Int32Array.\r
     * @param index The position in the typedArray to wake up on.\r
     * @param count The number of sleeping agents to notify. Defaults to +Infinity.\r
     */\r
    notify(typedArray: Int32Array, index: number, count?: number): number;\r
\r
    /**\r
     * Stores the bitwise XOR of a value with the value at the given position in the array,\r
     * returning the original value. Until this atomic operation completes, any other read or write\r
     * operation against the array will block.\r
     */\r
    xor(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number, value: number): number;\r
\r
    readonly [Symbol.toStringTag]: "Atomics";\r
}\r
\r
declare var Atomics: Atomics;\r
`;export{r as default};
