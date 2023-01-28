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


/// <reference lib="es2015.iterable" />\r
\r
interface Generator<T = unknown, TReturn = any, TNext = unknown> extends Iterator<T, TReturn, TNext> {\r
    // NOTE: 'next' is defined using a tuple to ensure we report the correct assignability errors in all places.\r
    next(...args: [] | [TNext]): IteratorResult<T, TReturn>;\r
    return(value: TReturn): IteratorResult<T, TReturn>;\r
    throw(e: any): IteratorResult<T, TReturn>;\r
    [Symbol.iterator](): Generator<T, TReturn, TNext>;\r
}\r
\r
interface GeneratorFunction {\r
    /**\r
     * Creates a new Generator object.\r
     * @param args A list of arguments the function accepts.\r
     */\r
    new (...args: any[]): Generator;\r
    /**\r
     * Creates a new Generator object.\r
     * @param args A list of arguments the function accepts.\r
     */\r
    (...args: any[]): Generator;\r
    /**\r
     * The length of the arguments.\r
     */\r
    readonly length: number;\r
    /**\r
     * Returns the name of the function.\r
     */\r
    readonly name: string;\r
    /**\r
     * A reference to the prototype.\r
     */\r
    readonly prototype: Generator;\r
}\r
\r
interface GeneratorFunctionConstructor {\r
    /**\r
     * Creates a new Generator function.\r
     * @param args A list of arguments the function accepts.\r
     */\r
    new (...args: string[]): GeneratorFunction;\r
    /**\r
     * Creates a new Generator function.\r
     * @param args A list of arguments the function accepts.\r
     */\r
    (...args: string[]): GeneratorFunction;\r
    /**\r
     * The length of the arguments.\r
     */\r
    readonly length: number;\r
    /**\r
     * Returns the name of the function.\r
     */\r
    readonly name: string;\r
    /**\r
     * A reference to the prototype.\r
     */\r
    readonly prototype: GeneratorFunction;\r
}\r
`;export{e as default};
