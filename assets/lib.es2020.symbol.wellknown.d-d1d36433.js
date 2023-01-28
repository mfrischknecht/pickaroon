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


/// <reference lib="es2015.iterable" />\r
/// <reference lib="es2015.symbol" />\r
\r
interface SymbolConstructor {\r
    /**\r
     * A regular expression method that matches the regular expression against a string. Called\r
     * by the String.prototype.matchAll method.\r
     */\r
    readonly matchAll: unique symbol;\r
}\r
\r
interface RegExp {\r
    /**\r
     * Matches a string with this regular expression, and returns an iterable of matches\r
     * containing the results of that search.\r
     * @param string A string to search within.\r
     */\r
    [Symbol.matchAll](str: string): IterableIterator<RegExpMatchArray>;\r
}\r
`;export{e as default};
