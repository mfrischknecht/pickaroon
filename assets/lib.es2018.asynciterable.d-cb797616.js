const e=`/*! *****************************************************************************
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
/// <reference lib="es2015.iterable" />\r
\r
interface SymbolConstructor {\r
    /**\r
     * A method that returns the default async iterator for an object. Called by the semantics of\r
     * the for-await-of statement.\r
     */\r
    readonly asyncIterator: unique symbol;\r
}\r
\r
interface AsyncIterator<T, TReturn = any, TNext = undefined> {\r
    // NOTE: 'next' is defined using a tuple to ensure we report the correct assignability errors in all places.\r
    next(...args: [] | [TNext]): Promise<IteratorResult<T, TReturn>>;\r
    return?(value?: TReturn | PromiseLike<TReturn>): Promise<IteratorResult<T, TReturn>>;\r
    throw?(e?: any): Promise<IteratorResult<T, TReturn>>;\r
}\r
\r
interface AsyncIterable<T> {\r
    [Symbol.asyncIterator](): AsyncIterator<T>;\r
}\r
\r
interface AsyncIterableIterator<T> extends AsyncIterator<T> {\r
    [Symbol.asyncIterator](): AsyncIterableIterator<T>;\r
}`;export{e as default};
