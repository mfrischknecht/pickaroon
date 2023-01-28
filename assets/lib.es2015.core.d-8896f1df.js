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


interface Array<T> {\r
    /**\r
     * Returns the value of the first element in the array where predicate is true, and undefined\r
     * otherwise.\r
     * @param predicate find calls predicate once for each element of the array, in ascending\r
     * order, until it finds one where predicate returns true. If such an element is found, find\r
     * immediately returns that element value. Otherwise, find returns undefined.\r
     * @param thisArg If provided, it will be used as the this value for each invocation of\r
     * predicate. If it is not provided, undefined is used instead.\r
     */\r
    find<S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined;\r
    find(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): T | undefined;\r
\r
    /**\r
     * Returns the index of the first element in the array where predicate is true, and -1\r
     * otherwise.\r
     * @param predicate find calls predicate once for each element of the array, in ascending\r
     * order, until it finds one where predicate returns true. If such an element is found,\r
     * findIndex immediately returns that element index. Otherwise, findIndex returns -1.\r
     * @param thisArg If provided, it will be used as the this value for each invocation of\r
     * predicate. If it is not provided, undefined is used instead.\r
     */\r
    findIndex(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): number;\r
\r
    /**\r
     * Changes all array elements from \`start\` to \`end\` index to a static \`value\` and returns the modified array\r
     * @param value value to fill array section with\r
     * @param start index to start filling the array at. If start is negative, it is treated as\r
     * length+start where length is the length of the array.\r
     * @param end index to stop filling the array at. If end is negative, it is treated as\r
     * length+end.\r
     */\r
    fill(value: T, start?: number, end?: number): this;\r
\r
    /**\r
     * Returns the this object after copying a section of the array identified by start and end\r
     * to the same array starting at position target\r
     * @param target If target is negative, it is treated as length+target where length is the\r
     * length of the array.\r
     * @param start If start is negative, it is treated as length+start. If end is negative, it\r
     * is treated as length+end.\r
     * @param end If not specified, length of the this object is used as its default value.\r
     */\r
    copyWithin(target: number, start: number, end?: number): this;\r
}\r
\r
interface ArrayConstructor {\r
    /**\r
     * Creates an array from an array-like object.\r
     * @param arrayLike An array-like object to convert to an array.\r
     */\r
    from<T>(arrayLike: ArrayLike<T>): T[];\r
\r
    /**\r
     * Creates an array from an iterable object.\r
     * @param arrayLike An array-like object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];\r
\r
    /**\r
     * Returns a new array from a set of elements.\r
     * @param items A set of elements to include in the new array object.\r
     */\r
    of<T>(...items: T[]): T[];\r
}\r
\r
interface DateConstructor {\r
    new (value: number | string | Date): Date;\r
}\r
\r
interface Function {\r
    /**\r
     * Returns the name of the function. Function names are read-only and can not be changed.\r
     */\r
    readonly name: string;\r
}\r
\r
interface Math {\r
    /**\r
     * Returns the number of leading zero bits in the 32-bit binary representation of a number.\r
     * @param x A numeric expression.\r
     */\r
    clz32(x: number): number;\r
\r
    /**\r
     * Returns the result of 32-bit multiplication of two numbers.\r
     * @param x First number\r
     * @param y Second number\r
     */\r
    imul(x: number, y: number): number;\r
\r
    /**\r
     * Returns the sign of the x, indicating whether x is positive, negative or zero.\r
     * @param x The numeric expression to test\r
     */\r
    sign(x: number): number;\r
\r
    /**\r
     * Returns the base 10 logarithm of a number.\r
     * @param x A numeric expression.\r
     */\r
    log10(x: number): number;\r
\r
    /**\r
     * Returns the base 2 logarithm of a number.\r
     * @param x A numeric expression.\r
     */\r
    log2(x: number): number;\r
\r
    /**\r
     * Returns the natural logarithm of 1 + x.\r
     * @param x A numeric expression.\r
     */\r
    log1p(x: number): number;\r
\r
    /**\r
     * Returns the result of (e^x - 1), which is an implementation-dependent approximation to\r
     * subtracting 1 from the exponential function of x (e raised to the power of x, where e\r
     * is the base of the natural logarithms).\r
     * @param x A numeric expression.\r
     */\r
    expm1(x: number): number;\r
\r
    /**\r
     * Returns the hyperbolic cosine of a number.\r
     * @param x A numeric expression that contains an angle measured in radians.\r
     */\r
    cosh(x: number): number;\r
\r
    /**\r
     * Returns the hyperbolic sine of a number.\r
     * @param x A numeric expression that contains an angle measured in radians.\r
     */\r
    sinh(x: number): number;\r
\r
    /**\r
     * Returns the hyperbolic tangent of a number.\r
     * @param x A numeric expression that contains an angle measured in radians.\r
     */\r
    tanh(x: number): number;\r
\r
    /**\r
     * Returns the inverse hyperbolic cosine of a number.\r
     * @param x A numeric expression that contains an angle measured in radians.\r
     */\r
    acosh(x: number): number;\r
\r
    /**\r
     * Returns the inverse hyperbolic sine of a number.\r
     * @param x A numeric expression that contains an angle measured in radians.\r
     */\r
    asinh(x: number): number;\r
\r
    /**\r
     * Returns the inverse hyperbolic tangent of a number.\r
     * @param x A numeric expression that contains an angle measured in radians.\r
     */\r
    atanh(x: number): number;\r
\r
    /**\r
     * Returns the square root of the sum of squares of its arguments.\r
     * @param values Values to compute the square root for.\r
     *     If no arguments are passed, the result is +0.\r
     *     If there is only one argument, the result is the absolute value.\r
     *     If any argument is +Infinity or -Infinity, the result is +Infinity.\r
     *     If any argument is NaN, the result is NaN.\r
     *     If all arguments are either +0 or −0, the result is +0.\r
     */\r
    hypot(...values: number[]): number;\r
\r
    /**\r
     * Returns the integral part of the a numeric expression, x, removing any fractional digits.\r
     * If x is already an integer, the result is x.\r
     * @param x A numeric expression.\r
     */\r
    trunc(x: number): number;\r
\r
    /**\r
     * Returns the nearest single precision float representation of a number.\r
     * @param x A numeric expression.\r
     */\r
    fround(x: number): number;\r
\r
    /**\r
     * Returns an implementation-dependent approximation to the cube root of number.\r
     * @param x A numeric expression.\r
     */\r
    cbrt(x: number): number;\r
}\r
\r
interface NumberConstructor {\r
    /**\r
     * The value of Number.EPSILON is the difference between 1 and the smallest value greater than 1\r
     * that is representable as a Number value, which is approximately:\r
     * 2.2204460492503130808472633361816 x 10‍−‍16.\r
     */\r
    readonly EPSILON: number;\r
\r
    /**\r
     * Returns true if passed value is finite.\r
     * Unlike the global isFinite, Number.isFinite doesn't forcibly convert the parameter to a\r
     * number. Only finite values of the type number, result in true.\r
     * @param number A numeric value.\r
     */\r
    isFinite(number: unknown): boolean;\r
\r
    /**\r
     * Returns true if the value passed is an integer, false otherwise.\r
     * @param number A numeric value.\r
     */\r
    isInteger(number: unknown): boolean;\r
\r
    /**\r
     * Returns a Boolean value that indicates whether a value is the reserved value NaN (not a\r
     * number). Unlike the global isNaN(), Number.isNaN() doesn't forcefully convert the parameter\r
     * to a number. Only values of the type number, that are also NaN, result in true.\r
     * @param number A numeric value.\r
     */\r
    isNaN(number: unknown): boolean;\r
\r
    /**\r
     * Returns true if the value passed is a safe integer.\r
     * @param number A numeric value.\r
     */\r
    isSafeInteger(number: unknown): boolean;\r
\r
    /**\r
     * The value of the largest integer n such that n and n + 1 are both exactly representable as\r
     * a Number value.\r
     * The value of Number.MAX_SAFE_INTEGER is 9007199254740991 2^53 − 1.\r
     */\r
    readonly MAX_SAFE_INTEGER: number;\r
\r
    /**\r
     * The value of the smallest integer n such that n and n − 1 are both exactly representable as\r
     * a Number value.\r
     * The value of Number.MIN_SAFE_INTEGER is −9007199254740991 (−(2^53 − 1)).\r
     */\r
    readonly MIN_SAFE_INTEGER: number;\r
\r
    /**\r
     * Converts a string to a floating-point number.\r
     * @param string A string that contains a floating-point number.\r
     */\r
    parseFloat(string: string): number;\r
\r
    /**\r
     * Converts A string to an integer.\r
     * @param string A string to convert into a number.\r
     * @param radix A value between 2 and 36 that specifies the base of the number in \`string\`.\r
     * If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal.\r
     * All other strings are considered decimal.\r
     */\r
    parseInt(string: string, radix?: number): number;\r
}\r
\r
interface ObjectConstructor {\r
    /**\r
     * Copy the values of all of the enumerable own properties from one or more source objects to a\r
     * target object. Returns the target object.\r
     * @param target The target object to copy to.\r
     * @param source The source object from which to copy properties.\r
     */\r
    assign<T extends {}, U>(target: T, source: U): T & U;\r
\r
    /**\r
     * Copy the values of all of the enumerable own properties from one or more source objects to a\r
     * target object. Returns the target object.\r
     * @param target The target object to copy to.\r
     * @param source1 The first source object from which to copy properties.\r
     * @param source2 The second source object from which to copy properties.\r
     */\r
    assign<T extends {}, U, V>(target: T, source1: U, source2: V): T & U & V;\r
\r
    /**\r
     * Copy the values of all of the enumerable own properties from one or more source objects to a\r
     * target object. Returns the target object.\r
     * @param target The target object to copy to.\r
     * @param source1 The first source object from which to copy properties.\r
     * @param source2 The second source object from which to copy properties.\r
     * @param source3 The third source object from which to copy properties.\r
     */\r
    assign<T extends {}, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;\r
\r
    /**\r
     * Copy the values of all of the enumerable own properties from one or more source objects to a\r
     * target object. Returns the target object.\r
     * @param target The target object to copy to.\r
     * @param sources One or more source objects from which to copy properties\r
     */\r
    assign(target: object, ...sources: any[]): any;\r
\r
    /**\r
     * Returns an array of all symbol properties found directly on object o.\r
     * @param o Object to retrieve the symbols from.\r
     */\r
    getOwnPropertySymbols(o: any): symbol[];\r
\r
    /**\r
     * Returns the names of the enumerable string properties and methods of an object.\r
     * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.\r
     */\r
    keys(o: {}): string[];\r
\r
    /**\r
     * Returns true if the values are the same value, false otherwise.\r
     * @param value1 The first value.\r
     * @param value2 The second value.\r
     */\r
    is(value1: any, value2: any): boolean;\r
\r
    /**\r
     * Sets the prototype of a specified object o to object proto or null. Returns the object o.\r
     * @param o The object to change its prototype.\r
     * @param proto The value of the new prototype or null.\r
     */\r
    setPrototypeOf(o: any, proto: object | null): any;\r
}\r
\r
interface ReadonlyArray<T> {\r
    /**\r
     * Returns the value of the first element in the array where predicate is true, and undefined\r
     * otherwise.\r
     * @param predicate find calls predicate once for each element of the array, in ascending\r
     * order, until it finds one where predicate returns true. If such an element is found, find\r
     * immediately returns that element value. Otherwise, find returns undefined.\r
     * @param thisArg If provided, it will be used as the this value for each invocation of\r
     * predicate. If it is not provided, undefined is used instead.\r
     */\r
    find<S extends T>(predicate: (this: void, value: T, index: number, obj: readonly T[]) => value is S, thisArg?: any): S | undefined;\r
    find(predicate: (value: T, index: number, obj: readonly T[]) => unknown, thisArg?: any): T | undefined;\r
\r
    /**\r
     * Returns the index of the first element in the array where predicate is true, and -1\r
     * otherwise.\r
     * @param predicate find calls predicate once for each element of the array, in ascending\r
     * order, until it finds one where predicate returns true. If such an element is found,\r
     * findIndex immediately returns that element index. Otherwise, findIndex returns -1.\r
     * @param thisArg If provided, it will be used as the this value for each invocation of\r
     * predicate. If it is not provided, undefined is used instead.\r
     */\r
    findIndex(predicate: (value: T, index: number, obj: readonly T[]) => unknown, thisArg?: any): number;\r
}\r
\r
interface RegExp {\r
    /**\r
     * Returns a string indicating the flags of the regular expression in question. This field is read-only.\r
     * The characters in this string are sequenced and concatenated in the following order:\r
     *\r
     *    - "g" for global\r
     *    - "i" for ignoreCase\r
     *    - "m" for multiline\r
     *    - "u" for unicode\r
     *    - "y" for sticky\r
     *\r
     * If no flags are set, the value is the empty string.\r
     */\r
    readonly flags: string;\r
\r
    /**\r
     * Returns a Boolean value indicating the state of the sticky flag (y) used with a regular\r
     * expression. Default is false. Read-only.\r
     */\r
    readonly sticky: boolean;\r
\r
    /**\r
     * Returns a Boolean value indicating the state of the Unicode flag (u) used with a regular\r
     * expression. Default is false. Read-only.\r
     */\r
    readonly unicode: boolean;\r
}\r
\r
interface RegExpConstructor {\r
    new (pattern: RegExp | string, flags?: string): RegExp;\r
    (pattern: RegExp | string, flags?: string): RegExp;\r
}\r
\r
interface String {\r
    /**\r
     * Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point\r
     * value of the UTF-16 encoded code point starting at the string element at position pos in\r
     * the String resulting from converting this object to a String.\r
     * If there is no element at that position, the result is undefined.\r
     * If a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.\r
     */\r
    codePointAt(pos: number): number | undefined;\r
\r
    /**\r
     * Returns true if searchString appears as a substring of the result of converting this\r
     * object to a String, at one or more positions that are\r
     * greater than or equal to position; otherwise, returns false.\r
     * @param searchString search string\r
     * @param position If position is undefined, 0 is assumed, so as to search all of the String.\r
     */\r
    includes(searchString: string, position?: number): boolean;\r
\r
    /**\r
     * Returns true if the sequence of elements of searchString converted to a String is the\r
     * same as the corresponding elements of this object (converted to a String) starting at\r
     * endPosition – length(this). Otherwise returns false.\r
     */\r
    endsWith(searchString: string, endPosition?: number): boolean;\r
\r
    /**\r
     * Returns the String value result of normalizing the string into the normalization form\r
     * named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.\r
     * @param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default\r
     * is "NFC"\r
     */\r
    normalize(form: "NFC" | "NFD" | "NFKC" | "NFKD"): string;\r
\r
    /**\r
     * Returns the String value result of normalizing the string into the normalization form\r
     * named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.\r
     * @param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default\r
     * is "NFC"\r
     */\r
    normalize(form?: string): string;\r
\r
    /**\r
     * Returns a String value that is made from count copies appended together. If count is 0,\r
     * the empty string is returned.\r
     * @param count number of copies to append\r
     */\r
    repeat(count: number): string;\r
\r
    /**\r
     * Returns true if the sequence of elements of searchString converted to a String is the\r
     * same as the corresponding elements of this object (converted to a String) starting at\r
     * position. Otherwise returns false.\r
     */\r
    startsWith(searchString: string, position?: number): boolean;\r
\r
    /**\r
     * Returns an \`<a>\` HTML anchor element and sets the name attribute to the text value\r
     * @deprecated A legacy feature for browser compatibility\r
     * @param name\r
     */\r
    anchor(name: string): string;\r
\r
    /**\r
     * Returns a \`<big>\` HTML element\r
     * @deprecated A legacy feature for browser compatibility\r
     */\r
    big(): string;\r
\r
    /**\r
     * Returns a \`<blink>\` HTML element\r
     * @deprecated A legacy feature for browser compatibility\r
     */\r
    blink(): string;\r
\r
    /**\r
     * Returns a \`<b>\` HTML element\r
     * @deprecated A legacy feature for browser compatibility\r
     */\r
    bold(): string;\r
\r
    /**\r
     * Returns a \`<tt>\` HTML element\r
     * @deprecated A legacy feature for browser compatibility\r
     */\r
    fixed(): string;\r
\r
    /**\r
     * Returns a \`<font>\` HTML element and sets the color attribute value\r
     * @deprecated A legacy feature for browser compatibility\r
     */\r
    fontcolor(color: string): string;\r
\r
    /**\r
     * Returns a \`<font>\` HTML element and sets the size attribute value\r
     * @deprecated A legacy feature for browser compatibility\r
     */\r
    fontsize(size: number): string;\r
\r
    /**\r
     * Returns a \`<font>\` HTML element and sets the size attribute value\r
     * @deprecated A legacy feature for browser compatibility\r
     */\r
    fontsize(size: string): string;\r
\r
    /**\r
     * Returns an \`<i>\` HTML element\r
     * @deprecated A legacy feature for browser compatibility\r
     */\r
    italics(): string;\r
\r
    /**\r
     * Returns an \`<a>\` HTML element and sets the href attribute value\r
     * @deprecated A legacy feature for browser compatibility\r
     */\r
    link(url: string): string;\r
\r
    /**\r
     * Returns a \`<small>\` HTML element\r
     * @deprecated A legacy feature for browser compatibility\r
     */\r
    small(): string;\r
\r
    /**\r
     * Returns a \`<strike>\` HTML element\r
     * @deprecated A legacy feature for browser compatibility\r
     */\r
    strike(): string;\r
\r
    /**\r
     * Returns a \`<sub>\` HTML element\r
     * @deprecated A legacy feature for browser compatibility\r
     */\r
    sub(): string;\r
\r
    /**\r
     * Returns a \`<sup>\` HTML element\r
     * @deprecated A legacy feature for browser compatibility\r
     */\r
    sup(): string;\r
}\r
\r
interface StringConstructor {\r
    /**\r
     * Return the String value whose elements are, in order, the elements in the List elements.\r
     * If length is 0, the empty string is returned.\r
     */\r
    fromCodePoint(...codePoints: number[]): string;\r
\r
    /**\r
     * String.raw is usually used as a tag function of a Tagged Template String. When called as\r
     * such, the first argument will be a well formed template call site object and the rest\r
     * parameter will contain the substitution values. It can also be called directly, for example,\r
     * to interleave strings and values from your own tag function, and in this case the only thing\r
     * it needs from the first argument is the raw property.\r
     * @param template A well-formed template string call site representation.\r
     * @param substitutions A set of substitution values.\r
     */\r
    raw(template: { raw: readonly string[] | ArrayLike<string>}, ...substitutions: any[]): string;\r
}\r
`;export{e as default};
