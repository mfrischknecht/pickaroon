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


interface PromiseConstructor {\r
    /**\r
     * A reference to the prototype.\r
     */\r
    readonly prototype: Promise<any>;\r
\r
    /**\r
     * Creates a new Promise.\r
     * @param executor A callback used to initialize the promise. This callback is passed two arguments:\r
     * a resolve callback used to resolve the promise with a value or the result of another promise,\r
     * and a reject callback used to reject the promise with a provided reason or error.\r
     */\r
    new <T>(executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void): Promise<T>;\r
\r
    /**\r
     * Creates a Promise that is resolved with an array of results when all of the provided Promises\r
     * resolve, or rejected when any Promise is rejected.\r
     * @param values An array of Promises.\r
     * @returns A new Promise.\r
     */\r
    all<T extends readonly unknown[] | []>(values: T): Promise<{ -readonly [P in keyof T]: Awaited<T[P]> }>;\r
\r
    // see: lib.es2015.iterable.d.ts\r
    // all<T>(values: Iterable<T | PromiseLike<T>>): Promise<Awaited<T>[]>;\r
\r
    /**\r
     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved\r
     * or rejected.\r
     * @param values An array of Promises.\r
     * @returns A new Promise.\r
     */\r
    race<T extends readonly unknown[] | []>(values: T): Promise<Awaited<T[number]>>;\r
\r
    // see: lib.es2015.iterable.d.ts\r
    // race<T>(values: Iterable<T | PromiseLike<T>>): Promise<Awaited<T>>;\r
\r
    /**\r
     * Creates a new rejected promise for the provided reason.\r
     * @param reason The reason the promise was rejected.\r
     * @returns A new rejected Promise.\r
     */\r
    reject<T = never>(reason?: any): Promise<T>;\r
\r
    /**\r
     * Creates a new resolved promise.\r
     * @returns A resolved promise.\r
     */\r
    resolve(): Promise<void>;\r
    /**\r
     * Creates a new resolved promise for the provided value.\r
     * @param value A promise.\r
     * @returns A promise whose internal state matches the provided promise.\r
     */\r
    resolve<T>(value: T): Promise<Awaited<T>>;\r
    /**\r
     * Creates a new resolved promise for the provided value.\r
     * @param value A promise.\r
     * @returns A promise whose internal state matches the provided promise.\r
     */\r
    resolve<T>(value: T | PromiseLike<T>): Promise<Awaited<T>>;\r
}\r
\r
declare var Promise: PromiseConstructor;\r
`;export{e as default};
