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


type FlatArray<Arr, Depth extends number> = {\r
    "done": Arr,\r
    "recur": Arr extends ReadonlyArray<infer InnerArr>\r
        ? FlatArray<InnerArr, [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20][Depth]>\r
        : Arr\r
}[Depth extends -1 ? "done" : "recur"];\r
\r
interface ReadonlyArray<T> {\r
\r
    /**\r
     * Calls a defined callback function on each element of an array. Then, flattens the result into\r
     * a new array.\r
     * This is identical to a map followed by flat with depth 1.\r
     *\r
     * @param callback A function that accepts up to three arguments. The flatMap method calls the\r
     * callback function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the callback function. If\r
     * thisArg is omitted, undefined is used as the this value.\r
     */\r
    flatMap<U, This = undefined> (\r
        callback: (this: This, value: T, index: number, array: T[]) => U | ReadonlyArray<U>,\r
        thisArg?: This\r
    ): U[]\r
\r
\r
    /**\r
     * Returns a new array with all sub-array elements concatenated into it recursively up to the\r
     * specified depth.\r
     *\r
     * @param depth The maximum recursion depth\r
     */\r
    flat<A, D extends number = 1>(\r
        this: A,\r
        depth?: D\r
    ): FlatArray<A, D>[]\r
  }\r
\r
interface Array<T> {\r
\r
    /**\r
     * Calls a defined callback function on each element of an array. Then, flattens the result into\r
     * a new array.\r
     * This is identical to a map followed by flat with depth 1.\r
     *\r
     * @param callback A function that accepts up to three arguments. The flatMap method calls the\r
     * callback function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the callback function. If\r
     * thisArg is omitted, undefined is used as the this value.\r
     */\r
    flatMap<U, This = undefined> (\r
        callback: (this: This, value: T, index: number, array: T[]) => U | ReadonlyArray<U>,\r
        thisArg?: This\r
    ): U[]\r
\r
    /**\r
     * Returns a new array with all sub-array elements concatenated into it recursively up to the\r
     * specified depth.\r
     *\r
     * @param depth The maximum recursion depth\r
     */\r
    flat<A, D extends number = 1>(\r
        this: A,\r
        depth?: D\r
    ): FlatArray<A, D>[]\r
}\r
`;export{e as default};
