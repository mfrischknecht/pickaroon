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
     * A method that determines if a constructor object recognizes an object as one of the\r
     * constructor’s instances. Called by the semantics of the instanceof operator.\r
     */\r
    readonly hasInstance: unique symbol;\r
\r
    /**\r
     * A Boolean value that if true indicates that an object should flatten to its array elements\r
     * by Array.prototype.concat.\r
     */\r
    readonly isConcatSpreadable: unique symbol;\r
\r
    /**\r
     * A regular expression method that matches the regular expression against a string. Called\r
     * by the String.prototype.match method.\r
     */\r
    readonly match: unique symbol;\r
\r
    /**\r
     * A regular expression method that replaces matched substrings of a string. Called by the\r
     * String.prototype.replace method.\r
     */\r
    readonly replace: unique symbol;\r
\r
    /**\r
     * A regular expression method that returns the index within a string that matches the\r
     * regular expression. Called by the String.prototype.search method.\r
     */\r
    readonly search: unique symbol;\r
\r
    /**\r
     * A function valued property that is the constructor function that is used to create\r
     * derived objects.\r
     */\r
    readonly species: unique symbol;\r
\r
    /**\r
     * A regular expression method that splits a string at the indices that match the regular\r
     * expression. Called by the String.prototype.split method.\r
     */\r
    readonly split: unique symbol;\r
\r
    /**\r
     * A method that converts an object to a corresponding primitive value.\r
     * Called by the ToPrimitive abstract operation.\r
     */\r
    readonly toPrimitive: unique symbol;\r
\r
    /**\r
     * A String value that is used in the creation of the default string description of an object.\r
     * Called by the built-in method Object.prototype.toString.\r
     */\r
    readonly toStringTag: unique symbol;\r
\r
    /**\r
     * An Object whose own property names are property names that are excluded from the 'with'\r
     * environment bindings of the associated objects.\r
     */\r
    readonly unscopables: unique symbol;\r
}\r
\r
interface Symbol {\r
    /**\r
     * Converts a Symbol object to a symbol.\r
     */\r
    [Symbol.toPrimitive](hint: string): symbol;\r
\r
    readonly [Symbol.toStringTag]: string;\r
}\r
\r
interface Array<T> {\r
    /**\r
     * Returns an object whose properties have the value 'true'\r
     * when they will be absent when used in a 'with' statement.\r
     */\r
    [Symbol.unscopables](): {\r
        copyWithin: boolean;\r
        entries: boolean;\r
        fill: boolean;\r
        find: boolean;\r
        findIndex: boolean;\r
        keys: boolean;\r
        values: boolean;\r
    };\r
}\r
\r
interface Date {\r
    /**\r
     * Converts a Date object to a string.\r
     */\r
    [Symbol.toPrimitive](hint: "default"): string;\r
    /**\r
     * Converts a Date object to a string.\r
     */\r
    [Symbol.toPrimitive](hint: "string"): string;\r
    /**\r
     * Converts a Date object to a number.\r
     */\r
    [Symbol.toPrimitive](hint: "number"): number;\r
    /**\r
     * Converts a Date object to a string or number.\r
     *\r
     * @param hint The strings "number", "string", or "default" to specify what primitive to return.\r
     *\r
     * @throws {TypeError} If 'hint' was given something other than "number", "string", or "default".\r
     * @returns A number if 'hint' was "number", a string if 'hint' was "string" or "default".\r
     */\r
    [Symbol.toPrimitive](hint: string): string | number;\r
}\r
\r
interface Map<K, V> {\r
    readonly [Symbol.toStringTag]: string;\r
}\r
\r
interface WeakMap<K extends object, V> {\r
    readonly [Symbol.toStringTag]: string;\r
}\r
\r
interface Set<T> {\r
    readonly [Symbol.toStringTag]: string;\r
}\r
\r
interface WeakSet<T extends object> {\r
    readonly [Symbol.toStringTag]: string;\r
}\r
\r
interface JSON {\r
    readonly [Symbol.toStringTag]: string;\r
}\r
\r
interface Function {\r
    /**\r
     * Determines whether the given value inherits from this function if this function was used\r
     * as a constructor function.\r
     *\r
     * A constructor function can control which objects are recognized as its instances by\r
     * 'instanceof' by overriding this method.\r
     */\r
    [Symbol.hasInstance](value: any): boolean;\r
}\r
\r
interface GeneratorFunction {\r
    readonly [Symbol.toStringTag]: string;\r
}\r
\r
interface Math {\r
    readonly [Symbol.toStringTag]: string;\r
}\r
\r
interface Promise<T> {\r
    readonly [Symbol.toStringTag]: string;\r
}\r
\r
interface PromiseConstructor {\r
    readonly [Symbol.species]: PromiseConstructor;\r
}\r
\r
interface RegExp {\r
    /**\r
     * Matches a string with this regular expression, and returns an array containing the results of\r
     * that search.\r
     * @param string A string to search within.\r
     */\r
    [Symbol.match](string: string): RegExpMatchArray | null;\r
\r
    /**\r
     * Replaces text in a string, using this regular expression.\r
     * @param string A String object or string literal whose contents matching against\r
     *               this regular expression will be replaced\r
     * @param replaceValue A String object or string literal containing the text to replace for every\r
     *                     successful match of this regular expression.\r
     */\r
    [Symbol.replace](string: string, replaceValue: string): string;\r
\r
    /**\r
     * Replaces text in a string, using this regular expression.\r
     * @param string A String object or string literal whose contents matching against\r
     *               this regular expression will be replaced\r
     * @param replacer A function that returns the replacement text.\r
     */\r
    [Symbol.replace](string: string, replacer: (substring: string, ...args: any[]) => string): string;\r
\r
    /**\r
     * Finds the position beginning first substring match in a regular expression search\r
     * using this regular expression.\r
     *\r
     * @param string The string to search within.\r
     */\r
    [Symbol.search](string: string): number;\r
\r
    /**\r
     * Returns an array of substrings that were delimited by strings in the original input that\r
     * match against this regular expression.\r
     *\r
     * If the regular expression contains capturing parentheses, then each time this\r
     * regular expression matches, the results (including any undefined results) of the\r
     * capturing parentheses are spliced.\r
     *\r
     * @param string string value to split\r
     * @param limit if not undefined, the output array is truncated so that it contains no more\r
     * than 'limit' elements.\r
     */\r
    [Symbol.split](string: string, limit?: number): string[];\r
}\r
\r
interface RegExpConstructor {\r
    readonly [Symbol.species]: RegExpConstructor;\r
}\r
\r
interface String {\r
    /**\r
     * Matches a string or an object that supports being matched against, and returns an array\r
     * containing the results of that search, or null if no matches are found.\r
     * @param matcher An object that supports being matched against.\r
     */\r
    match(matcher: { [Symbol.match](string: string): RegExpMatchArray | null; }): RegExpMatchArray | null;\r
\r
    /**\r
     * Passes a string and {@linkcode replaceValue} to the \`[Symbol.replace]\` method on {@linkcode searchValue}. This method is expected to implement its own replacement algorithm.\r
     * @param searchValue An object that supports searching for and replacing matches within a string.\r
     * @param replaceValue The replacement text.\r
     */\r
    replace(searchValue: { [Symbol.replace](string: string, replaceValue: string): string; }, replaceValue: string): string;\r
\r
    /**\r
     * Replaces text in a string, using an object that supports replacement within a string.\r
     * @param searchValue A object can search for and replace matches within a string.\r
     * @param replacer A function that returns the replacement text.\r
     */\r
    replace(searchValue: { [Symbol.replace](string: string, replacer: (substring: string, ...args: any[]) => string): string; }, replacer: (substring: string, ...args: any[]) => string): string;\r
\r
    /**\r
     * Finds the first substring match in a regular expression search.\r
     * @param searcher An object which supports searching within a string.\r
     */\r
    search(searcher: { [Symbol.search](string: string): number; }): number;\r
\r
    /**\r
     * Split a string into substrings using the specified separator and return them as an array.\r
     * @param splitter An object that can split a string.\r
     * @param limit A value used to limit the number of elements returned in the array.\r
     */\r
    split(splitter: { [Symbol.split](string: string, limit?: number): string[]; }, limit?: number): string[];\r
}\r
\r
interface ArrayBuffer {\r
    readonly [Symbol.toStringTag]: string;\r
}\r
\r
interface DataView {\r
    readonly [Symbol.toStringTag]: string;\r
}\r
\r
interface Int8Array {\r
    readonly [Symbol.toStringTag]: "Int8Array";\r
}\r
\r
interface Uint8Array {\r
    readonly [Symbol.toStringTag]: "Uint8Array";\r
}\r
\r
interface Uint8ClampedArray {\r
    readonly [Symbol.toStringTag]: "Uint8ClampedArray";\r
}\r
\r
interface Int16Array {\r
    readonly [Symbol.toStringTag]: "Int16Array";\r
}\r
\r
interface Uint16Array {\r
    readonly [Symbol.toStringTag]: "Uint16Array";\r
}\r
\r
interface Int32Array {\r
    readonly [Symbol.toStringTag]: "Int32Array";\r
}\r
\r
interface Uint32Array {\r
    readonly [Symbol.toStringTag]: "Uint32Array";\r
}\r
\r
interface Float32Array {\r
    readonly [Symbol.toStringTag]: "Float32Array";\r
}\r
\r
interface Float64Array {\r
    readonly [Symbol.toStringTag]: "Float64Array";\r
}\r
\r
interface ArrayConstructor {\r
    readonly [Symbol.species]: ArrayConstructor;\r
}\r
interface MapConstructor {\r
    readonly [Symbol.species]: MapConstructor;\r
}\r
interface SetConstructor {\r
    readonly [Symbol.species]: SetConstructor;\r
}\r
interface ArrayBufferConstructor {\r
    readonly [Symbol.species]: ArrayBufferConstructor;\r
}\r
`;export{r as default};
