var e=`/*! *****************************************************************************
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


interface Atomics {\r
    /**\r
     * Adds a value to the value at the given position in the array, returning the original value.\r
     * Until this atomic operation completes, any other read or write operation against the array\r
     * will block.\r
     */\r
    add(typedArray: BigInt64Array | BigUint64Array, index: number, value: bigint): bigint;\r
\r
    /**\r
     * Stores the bitwise AND of a value with the value at the given position in the array,\r
     * returning the original value. Until this atomic operation completes, any other read or\r
     * write operation against the array will block.\r
     */\r
    and(typedArray: BigInt64Array | BigUint64Array, index: number, value: bigint): bigint;\r
\r
    /**\r
     * Replaces the value at the given position in the array if the original value equals the given\r
     * expected value, returning the original value. Until this atomic operation completes, any\r
     * other read or write operation against the array will block.\r
     */\r
    compareExchange(typedArray: BigInt64Array | BigUint64Array, index: number, expectedValue: bigint, replacementValue: bigint): bigint;\r
\r
    /**\r
     * Replaces the value at the given position in the array, returning the original value. Until\r
     * this atomic operation completes, any other read or write operation against the array will\r
     * block.\r
     */\r
    exchange(typedArray: BigInt64Array | BigUint64Array, index: number, value: bigint): bigint;\r
\r
    /**\r
     * Returns the value at the given position in the array. Until this atomic operation completes,\r
     * any other read or write operation against the array will block.\r
     */\r
    load(typedArray: BigInt64Array | BigUint64Array, index: number): bigint;\r
\r
    /**\r
     * Stores the bitwise OR of a value with the value at the given position in the array,\r
     * returning the original value. Until this atomic operation completes, any other read or write\r
     * operation against the array will block.\r
     */\r
    or(typedArray: BigInt64Array | BigUint64Array, index: number, value: bigint): bigint;\r
\r
    /**\r
     * Stores a value at the given position in the array, returning the new value. Until this\r
     * atomic operation completes, any other read or write operation against the array will block.\r
     */\r
    store(typedArray: BigInt64Array | BigUint64Array, index: number, value: bigint): bigint;\r
\r
    /**\r
     * Subtracts a value from the value at the given position in the array, returning the original\r
     * value. Until this atomic operation completes, any other read or write operation against the\r
     * array will block.\r
     */\r
    sub(typedArray: BigInt64Array | BigUint64Array, index: number, value: bigint): bigint;\r
\r
    /**\r
     * If the value at the given position in the array is equal to the provided value, the current\r
     * agent is put to sleep causing execution to suspend until the timeout expires (returning\r
     * \`"timed-out"\`) or until the agent is awoken (returning \`"ok"\`); otherwise, returns\r
     * \`"not-equal"\`.\r
     */\r
    wait(typedArray: BigInt64Array, index: number, value: bigint, timeout?: number): "ok" | "not-equal" | "timed-out";\r
\r
    /**\r
     * Wakes up sleeping agents that are waiting on the given index of the array, returning the\r
     * number of agents that were awoken.\r
     * @param typedArray A shared BigInt64Array.\r
     * @param index The position in the typedArray to wake up on.\r
     * @param count The number of sleeping agents to notify. Defaults to +Infinity.\r
     */\r
    notify(typedArray: BigInt64Array, index: number, count?: number): number;\r
\r
    /**\r
     * Stores the bitwise XOR of a value with the value at the given position in the array,\r
     * returning the original value. Until this atomic operation completes, any other read or write\r
     * operation against the array will block.\r
     */\r
    xor(typedArray: BigInt64Array | BigUint64Array, index: number, value: bigint): bigint;\r
}\r
`;export{e as default};
