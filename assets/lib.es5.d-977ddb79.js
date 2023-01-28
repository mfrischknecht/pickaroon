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


/////////////////////////////\r
/// ECMAScript APIs\r
/////////////////////////////\r
\r
declare var NaN: number;\r
declare var Infinity: number;\r
\r
/**\r
 * Evaluates JavaScript code and executes it.\r
 * @param x A String value that contains valid JavaScript code.\r
 */\r
declare function eval(x: string): any;\r
\r
/**\r
 * Converts a string to an integer.\r
 * @param string A string to convert into a number.\r
 * @param radix A value between 2 and 36 that specifies the base of the number in \`string\`.\r
 * If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal.\r
 * All other strings are considered decimal.\r
 */\r
declare function parseInt(string: string, radix?: number): number;\r
\r
/**\r
 * Converts a string to a floating-point number.\r
 * @param string A string that contains a floating-point number.\r
 */\r
declare function parseFloat(string: string): number;\r
\r
/**\r
 * Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number).\r
 * @param number A numeric value.\r
 */\r
declare function isNaN(number: number): boolean;\r
\r
/**\r
 * Determines whether a supplied number is finite.\r
 * @param number Any numeric value.\r
 */\r
declare function isFinite(number: number): boolean;\r
\r
/**\r
 * Gets the unencoded version of an encoded Uniform Resource Identifier (URI).\r
 * @param encodedURI A value representing an encoded URI.\r
 */\r
declare function decodeURI(encodedURI: string): string;\r
\r
/**\r
 * Gets the unencoded version of an encoded component of a Uniform Resource Identifier (URI).\r
 * @param encodedURIComponent A value representing an encoded URI component.\r
 */\r
declare function decodeURIComponent(encodedURIComponent: string): string;\r
\r
/**\r
 * Encodes a text string as a valid Uniform Resource Identifier (URI)\r
 * @param uri A value representing an unencoded URI.\r
 */\r
declare function encodeURI(uri: string): string;\r
\r
/**\r
 * Encodes a text string as a valid component of a Uniform Resource Identifier (URI).\r
 * @param uriComponent A value representing an unencoded URI component.\r
 */\r
declare function encodeURIComponent(uriComponent: string | number | boolean): string;\r
\r
/**\r
 * Computes a new string in which certain characters have been replaced by a hexadecimal escape sequence.\r
 * @deprecated A legacy feature for browser compatibility\r
 * @param string A string value\r
 */\r
declare function escape(string: string): string;\r
\r
/**\r
 * Computes a new string in which hexadecimal escape sequences are replaced with the character that it represents.\r
 * @deprecated A legacy feature for browser compatibility\r
 * @param string A string value\r
 */\r
declare function unescape(string: string): string;\r
\r
interface Symbol {\r
    /** Returns a string representation of an object. */\r
    toString(): string;\r
\r
    /** Returns the primitive value of the specified object. */\r
    valueOf(): symbol;\r
}\r
\r
declare type PropertyKey = string | number | symbol;\r
\r
interface PropertyDescriptor {\r
    configurable?: boolean;\r
    enumerable?: boolean;\r
    value?: any;\r
    writable?: boolean;\r
    get?(): any;\r
    set?(v: any): void;\r
}\r
\r
interface PropertyDescriptorMap {\r
    [key: PropertyKey]: PropertyDescriptor;\r
}\r
\r
interface Object {\r
    /** The initial value of Object.prototype.constructor is the standard built-in Object constructor. */\r
    constructor: Function;\r
\r
    /** Returns a string representation of an object. */\r
    toString(): string;\r
\r
    /** Returns a date converted to a string using the current locale. */\r
    toLocaleString(): string;\r
\r
    /** Returns the primitive value of the specified object. */\r
    valueOf(): Object;\r
\r
    /**\r
     * Determines whether an object has a property with the specified name.\r
     * @param v A property name.\r
     */\r
    hasOwnProperty(v: PropertyKey): boolean;\r
\r
    /**\r
     * Determines whether an object exists in another object's prototype chain.\r
     * @param v Another object whose prototype chain is to be checked.\r
     */\r
    isPrototypeOf(v: Object): boolean;\r
\r
    /**\r
     * Determines whether a specified property is enumerable.\r
     * @param v A property name.\r
     */\r
    propertyIsEnumerable(v: PropertyKey): boolean;\r
}\r
\r
interface ObjectConstructor {\r
    new(value?: any): Object;\r
    (): any;\r
    (value: any): any;\r
\r
    /** A reference to the prototype for a class of objects. */\r
    readonly prototype: Object;\r
\r
    /**\r
     * Returns the prototype of an object.\r
     * @param o The object that references the prototype.\r
     */\r
    getPrototypeOf(o: any): any;\r
\r
    /**\r
     * Gets the own property descriptor of the specified object.\r
     * An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.\r
     * @param o Object that contains the property.\r
     * @param p Name of the property.\r
     */\r
    getOwnPropertyDescriptor(o: any, p: PropertyKey): PropertyDescriptor | undefined;\r
\r
    /**\r
     * Returns the names of the own properties of an object. The own properties of an object are those that are defined directly\r
     * on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.\r
     * @param o Object that contains the own properties.\r
     */\r
    getOwnPropertyNames(o: any): string[];\r
\r
    /**\r
     * Creates an object that has the specified prototype or that has null prototype.\r
     * @param o Object to use as a prototype. May be null.\r
     */\r
    create(o: object | null): any;\r
\r
    /**\r
     * Creates an object that has the specified prototype, and that optionally contains specified properties.\r
     * @param o Object to use as a prototype. May be null\r
     * @param properties JavaScript object that contains one or more property descriptors.\r
     */\r
    create(o: object | null, properties: PropertyDescriptorMap & ThisType<any>): any;\r
\r
    /**\r
     * Adds a property to an object, or modifies attributes of an existing property.\r
     * @param o Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.\r
     * @param p The property name.\r
     * @param attributes Descriptor for the property. It can be for a data property or an accessor property.\r
     */\r
    defineProperty<T>(o: T, p: PropertyKey, attributes: PropertyDescriptor & ThisType<any>): T;\r
\r
    /**\r
     * Adds one or more properties to an object, and/or modifies attributes of existing properties.\r
     * @param o Object on which to add or modify the properties. This can be a native JavaScript object or a DOM object.\r
     * @param properties JavaScript object that contains one or more descriptor objects. Each descriptor object describes a data property or an accessor property.\r
     */\r
    defineProperties<T>(o: T, properties: PropertyDescriptorMap & ThisType<any>): T;\r
\r
    /**\r
     * Prevents the modification of attributes of existing properties, and prevents the addition of new properties.\r
     * @param o Object on which to lock the attributes.\r
     */\r
    seal<T>(o: T): T;\r
\r
    /**\r
     * Prevents the modification of existing property attributes and values, and prevents the addition of new properties.\r
     * @param f Object on which to lock the attributes.\r
     */\r
    freeze<T extends Function>(f: T): T;\r
\r
    /**\r
     * Prevents the modification of existing property attributes and values, and prevents the addition of new properties.\r
     * @param o Object on which to lock the attributes.\r
     */\r
    freeze<T extends {[idx: string]: U | null | undefined | object}, U extends string | bigint | number | boolean | symbol>(o: T): Readonly<T>;\r
\r
    /**\r
     * Prevents the modification of existing property attributes and values, and prevents the addition of new properties.\r
     * @param o Object on which to lock the attributes.\r
     */\r
    freeze<T>(o: T): Readonly<T>;\r
\r
    /**\r
     * Prevents the addition of new properties to an object.\r
     * @param o Object to make non-extensible.\r
     */\r
    preventExtensions<T>(o: T): T;\r
\r
    /**\r
     * Returns true if existing property attributes cannot be modified in an object and new properties cannot be added to the object.\r
     * @param o Object to test.\r
     */\r
    isSealed(o: any): boolean;\r
\r
    /**\r
     * Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.\r
     * @param o Object to test.\r
     */\r
    isFrozen(o: any): boolean;\r
\r
    /**\r
     * Returns a value that indicates whether new properties can be added to an object.\r
     * @param o Object to test.\r
     */\r
    isExtensible(o: any): boolean;\r
\r
    /**\r
     * Returns the names of the enumerable string properties and methods of an object.\r
     * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.\r
     */\r
    keys(o: object): string[];\r
}\r
\r
/**\r
 * Provides functionality common to all JavaScript objects.\r
 */\r
declare var Object: ObjectConstructor;\r
\r
/**\r
 * Creates a new function.\r
 */\r
interface Function {\r
    /**\r
     * Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.\r
     * @param thisArg The object to be used as the this object.\r
     * @param argArray A set of arguments to be passed to the function.\r
     */\r
    apply(this: Function, thisArg: any, argArray?: any): any;\r
\r
    /**\r
     * Calls a method of an object, substituting another object for the current object.\r
     * @param thisArg The object to be used as the current object.\r
     * @param argArray A list of arguments to be passed to the method.\r
     */\r
    call(this: Function, thisArg: any, ...argArray: any[]): any;\r
\r
    /**\r
     * For a given function, creates a bound function that has the same body as the original function.\r
     * The this object of the bound function is associated with the specified object, and has the specified initial parameters.\r
     * @param thisArg An object to which the this keyword can refer inside the new function.\r
     * @param argArray A list of arguments to be passed to the new function.\r
     */\r
    bind(this: Function, thisArg: any, ...argArray: any[]): any;\r
\r
    /** Returns a string representation of a function. */\r
    toString(): string;\r
\r
    prototype: any;\r
    readonly length: number;\r
\r
    // Non-standard extensions\r
    arguments: any;\r
    caller: Function;\r
}\r
\r
interface FunctionConstructor {\r
    /**\r
     * Creates a new function.\r
     * @param args A list of arguments the function accepts.\r
     */\r
    new(...args: string[]): Function;\r
    (...args: string[]): Function;\r
    readonly prototype: Function;\r
}\r
\r
declare var Function: FunctionConstructor;\r
\r
/**\r
 * Extracts the type of the 'this' parameter of a function type, or 'unknown' if the function type has no 'this' parameter.\r
 */\r
type ThisParameterType<T> = T extends (this: infer U, ...args: never) => any ? U : unknown;\r
\r
/**\r
 * Removes the 'this' parameter from a function type.\r
 */\r
type OmitThisParameter<T> = unknown extends ThisParameterType<T> ? T : T extends (...args: infer A) => infer R ? (...args: A) => R : T;\r
\r
interface CallableFunction extends Function {\r
    /**\r
     * Calls the function with the specified object as the this value and the elements of specified array as the arguments.\r
     * @param thisArg The object to be used as the this object.\r
     * @param args An array of argument values to be passed to the function.\r
     */\r
    apply<T, R>(this: (this: T) => R, thisArg: T): R;\r
    apply<T, A extends any[], R>(this: (this: T, ...args: A) => R, thisArg: T, args: A): R;\r
\r
    /**\r
     * Calls the function with the specified object as the this value and the specified rest arguments as the arguments.\r
     * @param thisArg The object to be used as the this object.\r
     * @param args Argument values to be passed to the function.\r
     */\r
    call<T, A extends any[], R>(this: (this: T, ...args: A) => R, thisArg: T, ...args: A): R;\r
\r
    /**\r
     * For a given function, creates a bound function that has the same body as the original function.\r
     * The this object of the bound function is associated with the specified object, and has the specified initial parameters.\r
     * @param thisArg The object to be used as the this object.\r
     * @param args Arguments to bind to the parameters of the function.\r
     */\r
    bind<T>(this: T, thisArg: ThisParameterType<T>): OmitThisParameter<T>;\r
    bind<T, A0, A extends any[], R>(this: (this: T, arg0: A0, ...args: A) => R, thisArg: T, arg0: A0): (...args: A) => R;\r
    bind<T, A0, A1, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1): (...args: A) => R;\r
    bind<T, A0, A1, A2, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2): (...args: A) => R;\r
    bind<T, A0, A1, A2, A3, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3): (...args: A) => R;\r
    bind<T, AX, R>(this: (this: T, ...args: AX[]) => R, thisArg: T, ...args: AX[]): (...args: AX[]) => R;\r
}\r
\r
interface NewableFunction extends Function {\r
    /**\r
     * Calls the function with the specified object as the this value and the elements of specified array as the arguments.\r
     * @param thisArg The object to be used as the this object.\r
     * @param args An array of argument values to be passed to the function.\r
     */\r
    apply<T>(this: new () => T, thisArg: T): void;\r
    apply<T, A extends any[]>(this: new (...args: A) => T, thisArg: T, args: A): void;\r
\r
    /**\r
     * Calls the function with the specified object as the this value and the specified rest arguments as the arguments.\r
     * @param thisArg The object to be used as the this object.\r
     * @param args Argument values to be passed to the function.\r
     */\r
    call<T, A extends any[]>(this: new (...args: A) => T, thisArg: T, ...args: A): void;\r
\r
    /**\r
     * For a given function, creates a bound function that has the same body as the original function.\r
     * The this object of the bound function is associated with the specified object, and has the specified initial parameters.\r
     * @param thisArg The object to be used as the this object.\r
     * @param args Arguments to bind to the parameters of the function.\r
     */\r
    bind<T>(this: T, thisArg: any): T;\r
    bind<A0, A extends any[], R>(this: new (arg0: A0, ...args: A) => R, thisArg: any, arg0: A0): new (...args: A) => R;\r
    bind<A0, A1, A extends any[], R>(this: new (arg0: A0, arg1: A1, ...args: A) => R, thisArg: any, arg0: A0, arg1: A1): new (...args: A) => R;\r
    bind<A0, A1, A2, A extends any[], R>(this: new (arg0: A0, arg1: A1, arg2: A2, ...args: A) => R, thisArg: any, arg0: A0, arg1: A1, arg2: A2): new (...args: A) => R;\r
    bind<A0, A1, A2, A3, A extends any[], R>(this: new (arg0: A0, arg1: A1, arg2: A2, arg3: A3, ...args: A) => R, thisArg: any, arg0: A0, arg1: A1, arg2: A2, arg3: A3): new (...args: A) => R;\r
    bind<AX, R>(this: new (...args: AX[]) => R, thisArg: any, ...args: AX[]): new (...args: AX[]) => R;\r
}\r
\r
interface IArguments {\r
    [index: number]: any;\r
    length: number;\r
    callee: Function;\r
}\r
\r
interface String {\r
    /** Returns a string representation of a string. */\r
    toString(): string;\r
\r
    /**\r
     * Returns the character at the specified index.\r
     * @param pos The zero-based index of the desired character.\r
     */\r
    charAt(pos: number): string;\r
\r
    /**\r
     * Returns the Unicode value of the character at the specified location.\r
     * @param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.\r
     */\r
    charCodeAt(index: number): number;\r
\r
    /**\r
     * Returns a string that contains the concatenation of two or more strings.\r
     * @param strings The strings to append to the end of the string.\r
     */\r
    concat(...strings: string[]): string;\r
\r
    /**\r
     * Returns the position of the first occurrence of a substring.\r
     * @param searchString The substring to search for in the string\r
     * @param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.\r
     */\r
    indexOf(searchString: string, position?: number): number;\r
\r
    /**\r
     * Returns the last occurrence of a substring in the string.\r
     * @param searchString The substring to search for.\r
     * @param position The index at which to begin searching. If omitted, the search begins at the end of the string.\r
     */\r
    lastIndexOf(searchString: string, position?: number): number;\r
\r
    /**\r
     * Determines whether two strings are equivalent in the current locale.\r
     * @param that String to compare to target string\r
     */\r
    localeCompare(that: string): number;\r
\r
    /**\r
     * Matches a string with a regular expression, and returns an array containing the results of that search.\r
     * @param regexp A variable name or string literal containing the regular expression pattern and flags.\r
     */\r
    match(regexp: string | RegExp): RegExpMatchArray | null;\r
\r
    /**\r
     * Replaces text in a string, using a regular expression or search string.\r
     * @param searchValue A string or regular expression to search for.\r
     * @param replaceValue A string containing the text to replace. When the {@linkcode searchValue} is a \`RegExp\`, all matches are replaced if the \`g\` flag is set (or only those matches at the beginning, if the \`y\` flag is also present). Otherwise, only the first match of {@linkcode searchValue} is replaced.\r
     */\r
    replace(searchValue: string | RegExp, replaceValue: string): string;\r
\r
    /**\r
     * Replaces text in a string, using a regular expression or search string.\r
     * @param searchValue A string to search for.\r
     * @param replacer A function that returns the replacement text.\r
     */\r
    replace(searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string;\r
\r
    /**\r
     * Finds the first substring match in a regular expression search.\r
     * @param regexp The regular expression pattern and applicable flags.\r
     */\r
    search(regexp: string | RegExp): number;\r
\r
    /**\r
     * Returns a section of a string.\r
     * @param start The index to the beginning of the specified portion of stringObj.\r
     * @param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.\r
     * If this value is not specified, the substring continues to the end of stringObj.\r
     */\r
    slice(start?: number, end?: number): string;\r
\r
    /**\r
     * Split a string into substrings using the specified separator and return them as an array.\r
     * @param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.\r
     * @param limit A value used to limit the number of elements returned in the array.\r
     */\r
    split(separator: string | RegExp, limit?: number): string[];\r
\r
    /**\r
     * Returns the substring at the specified location within a String object.\r
     * @param start The zero-based index number indicating the beginning of the substring.\r
     * @param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.\r
     * If end is omitted, the characters from start through the end of the original string are returned.\r
     */\r
    substring(start: number, end?: number): string;\r
\r
    /** Converts all the alphabetic characters in a string to lowercase. */\r
    toLowerCase(): string;\r
\r
    /** Converts all alphabetic characters to lowercase, taking into account the host environment's current locale. */\r
    toLocaleLowerCase(locales?: string | string[]): string;\r
\r
    /** Converts all the alphabetic characters in a string to uppercase. */\r
    toUpperCase(): string;\r
\r
    /** Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale. */\r
    toLocaleUpperCase(locales?: string | string[]): string;\r
\r
    /** Removes the leading and trailing white space and line terminator characters from a string. */\r
    trim(): string;\r
\r
    /** Returns the length of a String object. */\r
    readonly length: number;\r
\r
    // IE extensions\r
    /**\r
     * Gets a substring beginning at the specified location and having the specified length.\r
     * @deprecated A legacy feature for browser compatibility\r
     * @param from The starting position of the desired substring. The index of the first character in the string is zero.\r
     * @param length The number of characters to include in the returned substring.\r
     */\r
    substr(from: number, length?: number): string;\r
\r
    /** Returns the primitive value of the specified object. */\r
    valueOf(): string;\r
\r
    readonly [index: number]: string;\r
}\r
\r
interface StringConstructor {\r
    new(value?: any): String;\r
    (value?: any): string;\r
    readonly prototype: String;\r
    fromCharCode(...codes: number[]): string;\r
}\r
\r
/**\r
 * Allows manipulation and formatting of text strings and determination and location of substrings within strings.\r
 */\r
declare var String: StringConstructor;\r
\r
interface Boolean {\r
    /** Returns the primitive value of the specified object. */\r
    valueOf(): boolean;\r
}\r
\r
interface BooleanConstructor {\r
    new(value?: any): Boolean;\r
    <T>(value?: T): boolean;\r
    readonly prototype: Boolean;\r
}\r
\r
declare var Boolean: BooleanConstructor;\r
\r
interface Number {\r
    /**\r
     * Returns a string representation of an object.\r
     * @param radix Specifies a radix for converting numeric values to strings. This value is only used for numbers.\r
     */\r
    toString(radix?: number): string;\r
\r
    /**\r
     * Returns a string representing a number in fixed-point notation.\r
     * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.\r
     */\r
    toFixed(fractionDigits?: number): string;\r
\r
    /**\r
     * Returns a string containing a number represented in exponential notation.\r
     * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.\r
     */\r
    toExponential(fractionDigits?: number): string;\r
\r
    /**\r
     * Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.\r
     * @param precision Number of significant digits. Must be in the range 1 - 21, inclusive.\r
     */\r
    toPrecision(precision?: number): string;\r
\r
    /** Returns the primitive value of the specified object. */\r
    valueOf(): number;\r
}\r
\r
interface NumberConstructor {\r
    new(value?: any): Number;\r
    (value?: any): number;\r
    readonly prototype: Number;\r
\r
    /** The largest number that can be represented in JavaScript. Equal to approximately 1.79E+308. */\r
    readonly MAX_VALUE: number;\r
\r
    /** The closest number to zero that can be represented in JavaScript. Equal to approximately 5.00E-324. */\r
    readonly MIN_VALUE: number;\r
\r
    /**\r
     * A value that is not a number.\r
     * In equality comparisons, NaN does not equal any value, including itself. To test whether a value is equivalent to NaN, use the isNaN function.\r
     */\r
    readonly NaN: number;\r
\r
    /**\r
     * A value that is less than the largest negative number that can be represented in JavaScript.\r
     * JavaScript displays NEGATIVE_INFINITY values as -infinity.\r
     */\r
    readonly NEGATIVE_INFINITY: number;\r
\r
    /**\r
     * A value greater than the largest number that can be represented in JavaScript.\r
     * JavaScript displays POSITIVE_INFINITY values as infinity.\r
     */\r
    readonly POSITIVE_INFINITY: number;\r
}\r
\r
/** An object that represents a number of any kind. All JavaScript numbers are 64-bit floating-point numbers. */\r
declare var Number: NumberConstructor;\r
\r
interface TemplateStringsArray extends ReadonlyArray<string> {\r
    readonly raw: readonly string[];\r
}\r
\r
/**\r
 * The type of \`import.meta\`.\r
 *\r
 * If you need to declare that a given property exists on \`import.meta\`,\r
 * this type may be augmented via interface merging.\r
 */\r
interface ImportMeta {\r
}\r
\r
/**\r
 * The type for the optional second argument to \`import()\`.\r
 *\r
 * If your host environment supports additional options, this type may be\r
 * augmented via interface merging.\r
 */\r
interface ImportCallOptions {\r
    assert?: ImportAssertions;\r
}\r
\r
/**\r
 * The type for the \`assert\` property of the optional second argument to \`import()\`.\r
 */\r
interface ImportAssertions {\r
    [key: string]: string;\r
}\r
\r
interface Math {\r
    /** The mathematical constant e. This is Euler's number, the base of natural logarithms. */\r
    readonly E: number;\r
    /** The natural logarithm of 10. */\r
    readonly LN10: number;\r
    /** The natural logarithm of 2. */\r
    readonly LN2: number;\r
    /** The base-2 logarithm of e. */\r
    readonly LOG2E: number;\r
    /** The base-10 logarithm of e. */\r
    readonly LOG10E: number;\r
    /** Pi. This is the ratio of the circumference of a circle to its diameter. */\r
    readonly PI: number;\r
    /** The square root of 0.5, or, equivalently, one divided by the square root of 2. */\r
    readonly SQRT1_2: number;\r
    /** The square root of 2. */\r
    readonly SQRT2: number;\r
    /**\r
     * Returns the absolute value of a number (the value without regard to whether it is positive or negative).\r
     * For example, the absolute value of -5 is the same as the absolute value of 5.\r
     * @param x A numeric expression for which the absolute value is needed.\r
     */\r
    abs(x: number): number;\r
    /**\r
     * Returns the arc cosine (or inverse cosine) of a number.\r
     * @param x A numeric expression.\r
     */\r
    acos(x: number): number;\r
    /**\r
     * Returns the arcsine of a number.\r
     * @param x A numeric expression.\r
     */\r
    asin(x: number): number;\r
    /**\r
     * Returns the arctangent of a number.\r
     * @param x A numeric expression for which the arctangent is needed.\r
     */\r
    atan(x: number): number;\r
    /**\r
     * Returns the angle (in radians) from the X axis to a point.\r
     * @param y A numeric expression representing the cartesian y-coordinate.\r
     * @param x A numeric expression representing the cartesian x-coordinate.\r
     */\r
    atan2(y: number, x: number): number;\r
    /**\r
     * Returns the smallest integer greater than or equal to its numeric argument.\r
     * @param x A numeric expression.\r
     */\r
    ceil(x: number): number;\r
    /**\r
     * Returns the cosine of a number.\r
     * @param x A numeric expression that contains an angle measured in radians.\r
     */\r
    cos(x: number): number;\r
    /**\r
     * Returns e (the base of natural logarithms) raised to a power.\r
     * @param x A numeric expression representing the power of e.\r
     */\r
    exp(x: number): number;\r
    /**\r
     * Returns the greatest integer less than or equal to its numeric argument.\r
     * @param x A numeric expression.\r
     */\r
    floor(x: number): number;\r
    /**\r
     * Returns the natural logarithm (base e) of a number.\r
     * @param x A numeric expression.\r
     */\r
    log(x: number): number;\r
    /**\r
     * Returns the larger of a set of supplied numeric expressions.\r
     * @param values Numeric expressions to be evaluated.\r
     */\r
    max(...values: number[]): number;\r
    /**\r
     * Returns the smaller of a set of supplied numeric expressions.\r
     * @param values Numeric expressions to be evaluated.\r
     */\r
    min(...values: number[]): number;\r
    /**\r
     * Returns the value of a base expression taken to a specified power.\r
     * @param x The base value of the expression.\r
     * @param y The exponent value of the expression.\r
     */\r
    pow(x: number, y: number): number;\r
    /** Returns a pseudorandom number between 0 and 1. */\r
    random(): number;\r
    /**\r
     * Returns a supplied numeric expression rounded to the nearest integer.\r
     * @param x The value to be rounded to the nearest integer.\r
     */\r
    round(x: number): number;\r
    /**\r
     * Returns the sine of a number.\r
     * @param x A numeric expression that contains an angle measured in radians.\r
     */\r
    sin(x: number): number;\r
    /**\r
     * Returns the square root of a number.\r
     * @param x A numeric expression.\r
     */\r
    sqrt(x: number): number;\r
    /**\r
     * Returns the tangent of a number.\r
     * @param x A numeric expression that contains an angle measured in radians.\r
     */\r
    tan(x: number): number;\r
}\r
/** An intrinsic object that provides basic mathematics functionality and constants. */\r
declare var Math: Math;\r
\r
/** Enables basic storage and retrieval of dates and times. */\r
interface Date {\r
    /** Returns a string representation of a date. The format of the string depends on the locale. */\r
    toString(): string;\r
    /** Returns a date as a string value. */\r
    toDateString(): string;\r
    /** Returns a time as a string value. */\r
    toTimeString(): string;\r
    /** Returns a value as a string value appropriate to the host environment's current locale. */\r
    toLocaleString(): string;\r
    /** Returns a date as a string value appropriate to the host environment's current locale. */\r
    toLocaleDateString(): string;\r
    /** Returns a time as a string value appropriate to the host environment's current locale. */\r
    toLocaleTimeString(): string;\r
    /** Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC. */\r
    valueOf(): number;\r
    /** Gets the time value in milliseconds. */\r
    getTime(): number;\r
    /** Gets the year, using local time. */\r
    getFullYear(): number;\r
    /** Gets the year using Universal Coordinated Time (UTC). */\r
    getUTCFullYear(): number;\r
    /** Gets the month, using local time. */\r
    getMonth(): number;\r
    /** Gets the month of a Date object using Universal Coordinated Time (UTC). */\r
    getUTCMonth(): number;\r
    /** Gets the day-of-the-month, using local time. */\r
    getDate(): number;\r
    /** Gets the day-of-the-month, using Universal Coordinated Time (UTC). */\r
    getUTCDate(): number;\r
    /** Gets the day of the week, using local time. */\r
    getDay(): number;\r
    /** Gets the day of the week using Universal Coordinated Time (UTC). */\r
    getUTCDay(): number;\r
    /** Gets the hours in a date, using local time. */\r
    getHours(): number;\r
    /** Gets the hours value in a Date object using Universal Coordinated Time (UTC). */\r
    getUTCHours(): number;\r
    /** Gets the minutes of a Date object, using local time. */\r
    getMinutes(): number;\r
    /** Gets the minutes of a Date object using Universal Coordinated Time (UTC). */\r
    getUTCMinutes(): number;\r
    /** Gets the seconds of a Date object, using local time. */\r
    getSeconds(): number;\r
    /** Gets the seconds of a Date object using Universal Coordinated Time (UTC). */\r
    getUTCSeconds(): number;\r
    /** Gets the milliseconds of a Date, using local time. */\r
    getMilliseconds(): number;\r
    /** Gets the milliseconds of a Date object using Universal Coordinated Time (UTC). */\r
    getUTCMilliseconds(): number;\r
    /** Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC). */\r
    getTimezoneOffset(): number;\r
    /**\r
     * Sets the date and time value in the Date object.\r
     * @param time A numeric value representing the number of elapsed milliseconds since midnight, January 1, 1970 GMT.\r
     */\r
    setTime(time: number): number;\r
    /**\r
     * Sets the milliseconds value in the Date object using local time.\r
     * @param ms A numeric value equal to the millisecond value.\r
     */\r
    setMilliseconds(ms: number): number;\r
    /**\r
     * Sets the milliseconds value in the Date object using Universal Coordinated Time (UTC).\r
     * @param ms A numeric value equal to the millisecond value.\r
     */\r
    setUTCMilliseconds(ms: number): number;\r
\r
    /**\r
     * Sets the seconds value in the Date object using local time.\r
     * @param sec A numeric value equal to the seconds value.\r
     * @param ms A numeric value equal to the milliseconds value.\r
     */\r
    setSeconds(sec: number, ms?: number): number;\r
    /**\r
     * Sets the seconds value in the Date object using Universal Coordinated Time (UTC).\r
     * @param sec A numeric value equal to the seconds value.\r
     * @param ms A numeric value equal to the milliseconds value.\r
     */\r
    setUTCSeconds(sec: number, ms?: number): number;\r
    /**\r
     * Sets the minutes value in the Date object using local time.\r
     * @param min A numeric value equal to the minutes value.\r
     * @param sec A numeric value equal to the seconds value.\r
     * @param ms A numeric value equal to the milliseconds value.\r
     */\r
    setMinutes(min: number, sec?: number, ms?: number): number;\r
    /**\r
     * Sets the minutes value in the Date object using Universal Coordinated Time (UTC).\r
     * @param min A numeric value equal to the minutes value.\r
     * @param sec A numeric value equal to the seconds value.\r
     * @param ms A numeric value equal to the milliseconds value.\r
     */\r
    setUTCMinutes(min: number, sec?: number, ms?: number): number;\r
    /**\r
     * Sets the hour value in the Date object using local time.\r
     * @param hours A numeric value equal to the hours value.\r
     * @param min A numeric value equal to the minutes value.\r
     * @param sec A numeric value equal to the seconds value.\r
     * @param ms A numeric value equal to the milliseconds value.\r
     */\r
    setHours(hours: number, min?: number, sec?: number, ms?: number): number;\r
    /**\r
     * Sets the hours value in the Date object using Universal Coordinated Time (UTC).\r
     * @param hours A numeric value equal to the hours value.\r
     * @param min A numeric value equal to the minutes value.\r
     * @param sec A numeric value equal to the seconds value.\r
     * @param ms A numeric value equal to the milliseconds value.\r
     */\r
    setUTCHours(hours: number, min?: number, sec?: number, ms?: number): number;\r
    /**\r
     * Sets the numeric day-of-the-month value of the Date object using local time.\r
     * @param date A numeric value equal to the day of the month.\r
     */\r
    setDate(date: number): number;\r
    /**\r
     * Sets the numeric day of the month in the Date object using Universal Coordinated Time (UTC).\r
     * @param date A numeric value equal to the day of the month.\r
     */\r
    setUTCDate(date: number): number;\r
    /**\r
     * Sets the month value in the Date object using local time.\r
     * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively.\r
     * @param date A numeric value representing the day of the month. If this value is not supplied, the value from a call to the getDate method is used.\r
     */\r
    setMonth(month: number, date?: number): number;\r
    /**\r
     * Sets the month value in the Date object using Universal Coordinated Time (UTC).\r
     * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively.\r
     * @param date A numeric value representing the day of the month. If it is not supplied, the value from a call to the getUTCDate method is used.\r
     */\r
    setUTCMonth(month: number, date?: number): number;\r
    /**\r
     * Sets the year of the Date object using local time.\r
     * @param year A numeric value for the year.\r
     * @param month A zero-based numeric value for the month (0 for January, 11 for December). Must be specified if numDate is specified.\r
     * @param date A numeric value equal for the day of the month.\r
     */\r
    setFullYear(year: number, month?: number, date?: number): number;\r
    /**\r
     * Sets the year value in the Date object using Universal Coordinated Time (UTC).\r
     * @param year A numeric value equal to the year.\r
     * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively. Must be supplied if numDate is supplied.\r
     * @param date A numeric value equal to the day of the month.\r
     */\r
    setUTCFullYear(year: number, month?: number, date?: number): number;\r
    /** Returns a date converted to a string using Universal Coordinated Time (UTC). */\r
    toUTCString(): string;\r
    /** Returns a date as a string value in ISO format. */\r
    toISOString(): string;\r
    /** Used by the JSON.stringify method to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization. */\r
    toJSON(key?: any): string;\r
}\r
\r
interface DateConstructor {\r
    new(): Date;\r
    new(value: number | string): Date;\r
    /**\r
     * Creates a new Date.\r
     * @param year The full year designation is required for cross-century date accuracy. If year is between 0 and 99 is used, then year is assumed to be 1900 + year.\r
     * @param monthIndex The month as a number between 0 and 11 (January to December).\r
     * @param date The date as a number between 1 and 31.\r
     * @param hours Must be supplied if minutes is supplied. A number from 0 to 23 (midnight to 11pm) that specifies the hour.\r
     * @param minutes Must be supplied if seconds is supplied. A number from 0 to 59 that specifies the minutes.\r
     * @param seconds Must be supplied if milliseconds is supplied. A number from 0 to 59 that specifies the seconds.\r
     * @param ms A number from 0 to 999 that specifies the milliseconds.\r
     */\r
    new(year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): Date;\r
    (): string;\r
    readonly prototype: Date;\r
    /**\r
     * Parses a string containing a date, and returns the number of milliseconds between that date and midnight, January 1, 1970.\r
     * @param s A date string\r
     */\r
    parse(s: string): number;\r
    /**\r
     * Returns the number of milliseconds between midnight, January 1, 1970 Universal Coordinated Time (UTC) (or GMT) and the specified date.\r
     * @param year The full year designation is required for cross-century date accuracy. If year is between 0 and 99 is used, then year is assumed to be 1900 + year.\r
     * @param monthIndex The month as a number between 0 and 11 (January to December).\r
     * @param date The date as a number between 1 and 31.\r
     * @param hours Must be supplied if minutes is supplied. A number from 0 to 23 (midnight to 11pm) that specifies the hour.\r
     * @param minutes Must be supplied if seconds is supplied. A number from 0 to 59 that specifies the minutes.\r
     * @param seconds Must be supplied if milliseconds is supplied. A number from 0 to 59 that specifies the seconds.\r
     * @param ms A number from 0 to 999 that specifies the milliseconds.\r
     */\r
    UTC(year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): number;\r
    /** Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC). */\r
    now(): number;\r
}\r
\r
declare var Date: DateConstructor;\r
\r
interface RegExpMatchArray extends Array<string> {\r
    /**\r
     * The index of the search at which the result was found.\r
     */\r
    index?: number;\r
    /**\r
     * A copy of the search string.\r
     */\r
    input?: string;\r
    /**\r
     * The first match. This will always be present because \`null\` will be returned if there are no matches.\r
     */\r
    0: string;\r
}\r
\r
interface RegExpExecArray extends Array<string> {\r
    /**\r
     * The index of the search at which the result was found.\r
     */\r
    index: number;\r
    /**\r
     * A copy of the search string.\r
     */\r
    input: string;\r
    /**\r
     * The first match. This will always be present because \`null\` will be returned if there are no matches.\r
     */\r
    0: string;\r
}\r
\r
interface RegExp {\r
    /**\r
     * Executes a search on a string using a regular expression pattern, and returns an array containing the results of that search.\r
     * @param string The String object or string literal on which to perform the search.\r
     */\r
    exec(string: string): RegExpExecArray | null;\r
\r
    /**\r
     * Returns a Boolean value that indicates whether or not a pattern exists in a searched string.\r
     * @param string String on which to perform the search.\r
     */\r
    test(string: string): boolean;\r
\r
    /** Returns a copy of the text of the regular expression pattern. Read-only. The regExp argument is a Regular expression object. It can be a variable name or a literal. */\r
    readonly source: string;\r
\r
    /** Returns a Boolean value indicating the state of the global flag (g) used with a regular expression. Default is false. Read-only. */\r
    readonly global: boolean;\r
\r
    /** Returns a Boolean value indicating the state of the ignoreCase flag (i) used with a regular expression. Default is false. Read-only. */\r
    readonly ignoreCase: boolean;\r
\r
    /** Returns a Boolean value indicating the state of the multiline flag (m) used with a regular expression. Default is false. Read-only. */\r
    readonly multiline: boolean;\r
\r
    lastIndex: number;\r
\r
    // Non-standard extensions\r
    /** @deprecated A legacy feature for browser compatibility */\r
    compile(pattern: string, flags?: string): this;\r
}\r
\r
interface RegExpConstructor {\r
    new(pattern: RegExp | string): RegExp;\r
    new(pattern: string, flags?: string): RegExp;\r
    (pattern: RegExp | string): RegExp;\r
    (pattern: string, flags?: string): RegExp;\r
    readonly prototype: RegExp;\r
\r
    // Non-standard extensions\r
    /** @deprecated A legacy feature for browser compatibility */\r
    $1: string;\r
    /** @deprecated A legacy feature for browser compatibility */\r
    $2: string;\r
    /** @deprecated A legacy feature for browser compatibility */\r
    $3: string;\r
    /** @deprecated A legacy feature for browser compatibility */\r
    $4: string;\r
    /** @deprecated A legacy feature for browser compatibility */\r
    $5: string;\r
    /** @deprecated A legacy feature for browser compatibility */\r
    $6: string;\r
    /** @deprecated A legacy feature for browser compatibility */\r
    $7: string;\r
    /** @deprecated A legacy feature for browser compatibility */\r
    $8: string;\r
    /** @deprecated A legacy feature for browser compatibility */\r
    $9: string;\r
    /** @deprecated A legacy feature for browser compatibility */\r
    input: string;\r
    /** @deprecated A legacy feature for browser compatibility */\r
    $_: string;\r
    /** @deprecated A legacy feature for browser compatibility */\r
    lastMatch: string;\r
    /** @deprecated A legacy feature for browser compatibility */\r
    "$&": string;\r
    /** @deprecated A legacy feature for browser compatibility */\r
    lastParen: string;\r
    /** @deprecated A legacy feature for browser compatibility */\r
    "$+": string;\r
    /** @deprecated A legacy feature for browser compatibility */\r
    leftContext: string;\r
    /** @deprecated A legacy feature for browser compatibility */\r
    "$\`": string;\r
    /** @deprecated A legacy feature for browser compatibility */\r
    rightContext: string;\r
    /** @deprecated A legacy feature for browser compatibility */\r
    "$'": string;\r
}\r
\r
declare var RegExp: RegExpConstructor;\r
\r
interface Error {\r
    name: string;\r
    message: string;\r
    stack?: string;\r
}\r
\r
interface ErrorConstructor {\r
    new(message?: string): Error;\r
    (message?: string): Error;\r
    readonly prototype: Error;\r
}\r
\r
declare var Error: ErrorConstructor;\r
\r
interface EvalError extends Error {\r
}\r
\r
interface EvalErrorConstructor extends ErrorConstructor {\r
    new(message?: string): EvalError;\r
    (message?: string): EvalError;\r
    readonly prototype: EvalError;\r
}\r
\r
declare var EvalError: EvalErrorConstructor;\r
\r
interface RangeError extends Error {\r
}\r
\r
interface RangeErrorConstructor extends ErrorConstructor {\r
    new(message?: string): RangeError;\r
    (message?: string): RangeError;\r
    readonly prototype: RangeError;\r
}\r
\r
declare var RangeError: RangeErrorConstructor;\r
\r
interface ReferenceError extends Error {\r
}\r
\r
interface ReferenceErrorConstructor extends ErrorConstructor {\r
    new(message?: string): ReferenceError;\r
    (message?: string): ReferenceError;\r
    readonly prototype: ReferenceError;\r
}\r
\r
declare var ReferenceError: ReferenceErrorConstructor;\r
\r
interface SyntaxError extends Error {\r
}\r
\r
interface SyntaxErrorConstructor extends ErrorConstructor {\r
    new(message?: string): SyntaxError;\r
    (message?: string): SyntaxError;\r
    readonly prototype: SyntaxError;\r
}\r
\r
declare var SyntaxError: SyntaxErrorConstructor;\r
\r
interface TypeError extends Error {\r
}\r
\r
interface TypeErrorConstructor extends ErrorConstructor {\r
    new(message?: string): TypeError;\r
    (message?: string): TypeError;\r
    readonly prototype: TypeError;\r
}\r
\r
declare var TypeError: TypeErrorConstructor;\r
\r
interface URIError extends Error {\r
}\r
\r
interface URIErrorConstructor extends ErrorConstructor {\r
    new(message?: string): URIError;\r
    (message?: string): URIError;\r
    readonly prototype: URIError;\r
}\r
\r
declare var URIError: URIErrorConstructor;\r
\r
interface JSON {\r
    /**\r
     * Converts a JavaScript Object Notation (JSON) string into an object.\r
     * @param text A valid JSON string.\r
     * @param reviver A function that transforms the results. This function is called for each member of the object.\r
     * If a member contains nested objects, the nested objects are transformed before the parent object is.\r
     */\r
    parse(text: string, reviver?: (this: any, key: string, value: any) => any): any;\r
    /**\r
     * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.\r
     * @param value A JavaScript value, usually an object or array, to be converted.\r
     * @param replacer A function that transforms the results.\r
     * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.\r
     */\r
    stringify(value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;\r
    /**\r
     * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.\r
     * @param value A JavaScript value, usually an object or array, to be converted.\r
     * @param replacer An array of strings and numbers that acts as an approved list for selecting the object properties that will be stringified.\r
     * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.\r
     */\r
    stringify(value: any, replacer?: (number | string)[] | null, space?: string | number): string;\r
}\r
\r
/**\r
 * An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.\r
 */\r
declare var JSON: JSON;\r
\r
\r
/////////////////////////////\r
/// ECMAScript Array API (specially handled by compiler)\r
/////////////////////////////\r
\r
interface ReadonlyArray<T> {\r
    /**\r
     * Gets the length of the array. This is a number one higher than the highest element defined in an array.\r
     */\r
    readonly length: number;\r
    /**\r
     * Returns a string representation of an array.\r
     */\r
    toString(): string;\r
    /**\r
     * Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.\r
     */\r
    toLocaleString(): string;\r
    /**\r
     * Combines two or more arrays.\r
     * @param items Additional items to add to the end of array1.\r
     */\r
    concat(...items: ConcatArray<T>[]): T[];\r
    /**\r
     * Combines two or more arrays.\r
     * @param items Additional items to add to the end of array1.\r
     */\r
    concat(...items: (T | ConcatArray<T>)[]): T[];\r
    /**\r
     * Adds all the elements of an array separated by the specified separator string.\r
     * @param separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.\r
     */\r
    join(separator?: string): string;\r
    /**\r
     * Returns a section of an array.\r
     * @param start The beginning of the specified portion of the array.\r
     * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.\r
     */\r
    slice(start?: number, end?: number): T[];\r
    /**\r
     * Returns the index of the first occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.\r
     */\r
    indexOf(searchElement: T, fromIndex?: number): number;\r
    /**\r
     * Returns the index of the last occurrence of a specified value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.\r
     */\r
    lastIndexOf(searchElement: T, fromIndex?: number): number;\r
    /**\r
     * Determines whether all the members of an array satisfy the specified test.\r
     * @param predicate A function that accepts up to three arguments. The every method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value false, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    every<S extends T>(predicate: (value: T, index: number, array: readonly T[]) => value is S, thisArg?: any): this is readonly S[];\r
    /**\r
     * Determines whether all the members of an array satisfy the specified test.\r
     * @param predicate A function that accepts up to three arguments. The every method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value false, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    every(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): boolean;\r
    /**\r
     * Determines whether the specified callback function returns true for any element of an array.\r
     * @param predicate A function that accepts up to three arguments. The some method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value true, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    some(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): boolean;\r
    /**\r
     * Performs the specified action for each element in an array.\r
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.\r
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.\r
     */\r
    forEach(callbackfn: (value: T, index: number, array: readonly T[]) => void, thisArg?: any): void;\r
    /**\r
     * Calls a defined callback function on each element of an array, and returns an array that contains the results.\r
     * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.\r
     */\r
    map<U>(callbackfn: (value: T, index: number, array: readonly T[]) => U, thisArg?: any): U[];\r
    /**\r
     * Returns the elements of an array that meet the condition specified in a callback function.\r
     * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.\r
     */\r
    filter<S extends T>(predicate: (value: T, index: number, array: readonly T[]) => value is S, thisArg?: any): S[];\r
    /**\r
     * Returns the elements of an array that meet the condition specified in a callback function.\r
     * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.\r
     */\r
    filter(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): T[];\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.\r
     */\r
    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T): T;\r
    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T, initialValue: T): T;\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.\r
     */\r
    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: readonly T[]) => U, initialValue: U): U;\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.\r
     */\r
    reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T): T;\r
    reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T, initialValue: T): T;\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.\r
     */\r
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: readonly T[]) => U, initialValue: U): U;\r
\r
    readonly [n: number]: T;\r
}\r
\r
interface ConcatArray<T> {\r
    readonly length: number;\r
    readonly [n: number]: T;\r
    join(separator?: string): string;\r
    slice(start?: number, end?: number): T[];\r
}\r
\r
interface Array<T> {\r
    /**\r
     * Gets or sets the length of the array. This is a number one higher than the highest index in the array.\r
     */\r
    length: number;\r
    /**\r
     * Returns a string representation of an array.\r
     */\r
    toString(): string;\r
    /**\r
     * Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.\r
     */\r
    toLocaleString(): string;\r
    /**\r
     * Removes the last element from an array and returns it.\r
     * If the array is empty, undefined is returned and the array is not modified.\r
     */\r
    pop(): T | undefined;\r
    /**\r
     * Appends new elements to the end of an array, and returns the new length of the array.\r
     * @param items New elements to add to the array.\r
     */\r
    push(...items: T[]): number;\r
    /**\r
     * Combines two or more arrays.\r
     * This method returns a new array without modifying any existing arrays.\r
     * @param items Additional arrays and/or items to add to the end of the array.\r
     */\r
    concat(...items: ConcatArray<T>[]): T[];\r
    /**\r
     * Combines two or more arrays.\r
     * This method returns a new array without modifying any existing arrays.\r
     * @param items Additional arrays and/or items to add to the end of the array.\r
     */\r
    concat(...items: (T | ConcatArray<T>)[]): T[];\r
    /**\r
     * Adds all the elements of an array into a string, separated by the specified separator string.\r
     * @param separator A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.\r
     */\r
    join(separator?: string): string;\r
    /**\r
     * Reverses the elements in an array in place.\r
     * This method mutates the array and returns a reference to the same array.\r
     */\r
    reverse(): T[];\r
    /**\r
     * Removes the first element from an array and returns it.\r
     * If the array is empty, undefined is returned and the array is not modified.\r
     */\r
    shift(): T | undefined;\r
    /**\r
     * Returns a copy of a section of an array.\r
     * For both start and end, a negative index can be used to indicate an offset from the end of the array.\r
     * For example, -2 refers to the second to last element of the array.\r
     * @param start The beginning index of the specified portion of the array.\r
     * If start is undefined, then the slice begins at index 0.\r
     * @param end The end index of the specified portion of the array. This is exclusive of the element at the index 'end'.\r
     * If end is undefined, then the slice extends to the end of the array.\r
     */\r
    slice(start?: number, end?: number): T[];\r
    /**\r
     * Sorts an array in place.\r
     * This method mutates the array and returns a reference to the same array.\r
     * @param compareFn Function used to determine the order of the elements. It is expected to return\r
     * a negative value if the first argument is less than the second argument, zero if they're equal, and a positive\r
     * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.\r
     * \`\`\`ts\r
     * [11,2,22,1].sort((a, b) => a - b)\r
     * \`\`\`\r
     */\r
    sort(compareFn?: (a: T, b: T) => number): this;\r
    /**\r
     * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.\r
     * @param start The zero-based location in the array from which to start removing elements.\r
     * @param deleteCount The number of elements to remove.\r
     * @returns An array containing the elements that were deleted.\r
     */\r
    splice(start: number, deleteCount?: number): T[];\r
    /**\r
     * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.\r
     * @param start The zero-based location in the array from which to start removing elements.\r
     * @param deleteCount The number of elements to remove.\r
     * @param items Elements to insert into the array in place of the deleted elements.\r
     * @returns An array containing the elements that were deleted.\r
     */\r
    splice(start: number, deleteCount: number, ...items: T[]): T[];\r
    /**\r
     * Inserts new elements at the start of an array, and returns the new length of the array.\r
     * @param items Elements to insert at the start of the array.\r
     */\r
    unshift(...items: T[]): number;\r
    /**\r
     * Returns the index of the first occurrence of a value in an array, or -1 if it is not present.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.\r
     */\r
    indexOf(searchElement: T, fromIndex?: number): number;\r
    /**\r
     * Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array.\r
     */\r
    lastIndexOf(searchElement: T, fromIndex?: number): number;\r
    /**\r
     * Determines whether all the members of an array satisfy the specified test.\r
     * @param predicate A function that accepts up to three arguments. The every method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value false, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    every<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): this is S[];\r
    /**\r
     * Determines whether all the members of an array satisfy the specified test.\r
     * @param predicate A function that accepts up to three arguments. The every method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value false, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    every(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;\r
    /**\r
     * Determines whether the specified callback function returns true for any element of an array.\r
     * @param predicate A function that accepts up to three arguments. The some method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value true, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    some(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;\r
    /**\r
     * Performs the specified action for each element in an array.\r
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.\r
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.\r
     */\r
    forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;\r
    /**\r
     * Calls a defined callback function on each element of an array, and returns an array that contains the results.\r
     * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.\r
     */\r
    map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];\r
    /**\r
     * Returns the elements of an array that meet the condition specified in a callback function.\r
     * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.\r
     */\r
    filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];\r
    /**\r
     * Returns the elements of an array that meet the condition specified in a callback function.\r
     * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.\r
     */\r
    filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.\r
     */\r
    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;\r
    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.\r
     */\r
    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.\r
     */\r
    reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;\r
    reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.\r
     */\r
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;\r
\r
    [n: number]: T;\r
}\r
\r
interface ArrayConstructor {\r
    new(arrayLength?: number): any[];\r
    new <T>(arrayLength: number): T[];\r
    new <T>(...items: T[]): T[];\r
    (arrayLength?: number): any[];\r
    <T>(arrayLength: number): T[];\r
    <T>(...items: T[]): T[];\r
    isArray(arg: any): arg is any[];\r
    readonly prototype: any[];\r
}\r
\r
declare var Array: ArrayConstructor;\r
\r
interface TypedPropertyDescriptor<T> {\r
    enumerable?: boolean;\r
    configurable?: boolean;\r
    writable?: boolean;\r
    value?: T;\r
    get?: () => T;\r
    set?: (value: T) => void;\r
}\r
\r
declare type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;\r
declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;\r
declare type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;\r
declare type ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) => void;\r
\r
declare type PromiseConstructorLike = new <T>(executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void) => PromiseLike<T>;\r
\r
interface PromiseLike<T> {\r
    /**\r
     * Attaches callbacks for the resolution and/or rejection of the Promise.\r
     * @param onfulfilled The callback to execute when the Promise is resolved.\r
     * @param onrejected The callback to execute when the Promise is rejected.\r
     * @returns A Promise for the completion of which ever callback is executed.\r
     */\r
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): PromiseLike<TResult1 | TResult2>;\r
}\r
\r
/**\r
 * Represents the completion of an asynchronous operation\r
 */\r
interface Promise<T> {\r
    /**\r
     * Attaches callbacks for the resolution and/or rejection of the Promise.\r
     * @param onfulfilled The callback to execute when the Promise is resolved.\r
     * @param onrejected The callback to execute when the Promise is rejected.\r
     * @returns A Promise for the completion of which ever callback is executed.\r
     */\r
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;\r
\r
    /**\r
     * Attaches a callback for only the rejection of the Promise.\r
     * @param onrejected The callback to execute when the Promise is rejected.\r
     * @returns A Promise for the completion of the callback.\r
     */\r
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;\r
}\r
\r
/**\r
 * Recursively unwraps the "awaited type" of a type. Non-promise "thenables" should resolve to \`never\`. This emulates the behavior of \`await\`.\r
 */\r
type Awaited<T> =\r
    T extends null | undefined ? T : // special case for \`null | undefined\` when not in \`--strictNullChecks\` mode\r
        T extends object & { then(onfulfilled: infer F, ...args: infer _): any } ? // \`await\` only unwraps object types with a callable \`then\`. Non-object types are not unwrapped\r
            F extends ((value: infer V, ...args: infer _) => any) ? // if the argument to \`then\` is callable, extracts the first argument\r
                Awaited<V> : // recursively unwrap the value\r
                never : // the argument to \`then\` was not callable\r
        T; // non-object or non-thenable\r
\r
interface ArrayLike<T> {\r
    readonly length: number;\r
    readonly [n: number]: T;\r
}\r
\r
/**\r
 * Make all properties in T optional\r
 */\r
type Partial<T> = {\r
    [P in keyof T]?: T[P];\r
};\r
\r
/**\r
 * Make all properties in T required\r
 */\r
type Required<T> = {\r
    [P in keyof T]-?: T[P];\r
};\r
\r
/**\r
 * Make all properties in T readonly\r
 */\r
type Readonly<T> = {\r
    readonly [P in keyof T]: T[P];\r
};\r
\r
/**\r
 * From T, pick a set of properties whose keys are in the union K\r
 */\r
type Pick<T, K extends keyof T> = {\r
    [P in K]: T[P];\r
};\r
\r
/**\r
 * Construct a type with a set of properties K of type T\r
 */\r
type Record<K extends keyof any, T> = {\r
    [P in K]: T;\r
};\r
\r
/**\r
 * Exclude from T those types that are assignable to U\r
 */\r
type Exclude<T, U> = T extends U ? never : T;\r
\r
/**\r
 * Extract from T those types that are assignable to U\r
 */\r
type Extract<T, U> = T extends U ? T : never;\r
\r
/**\r
 * Construct a type with the properties of T except for those in type K.\r
 */\r
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;\r
\r
/**\r
 * Exclude null and undefined from T\r
 */\r
type NonNullable<T> = T & {};\r
\r
/**\r
 * Obtain the parameters of a function type in a tuple\r
 */\r
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;\r
\r
/**\r
 * Obtain the parameters of a constructor function type in a tuple\r
 */\r
type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never;\r
\r
/**\r
 * Obtain the return type of a function type\r
 */\r
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;\r
\r
/**\r
 * Obtain the return type of a constructor function type\r
 */\r
type InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any;\r
\r
/**\r
 * Convert string literal type to uppercase\r
 */\r
type Uppercase<S extends string> = intrinsic;\r
\r
/**\r
 * Convert string literal type to lowercase\r
 */\r
type Lowercase<S extends string> = intrinsic;\r
\r
/**\r
 * Convert first character of string literal type to uppercase\r
 */\r
type Capitalize<S extends string> = intrinsic;\r
\r
/**\r
 * Convert first character of string literal type to lowercase\r
 */\r
type Uncapitalize<S extends string> = intrinsic;\r
\r
/**\r
 * Marker for contextual 'this' type\r
 */\r
interface ThisType<T> { }\r
\r
/**\r
 * Represents a raw buffer of binary data, which is used to store data for the\r
 * different typed arrays. ArrayBuffers cannot be read from or written to directly,\r
 * but can be passed to a typed array or DataView Object to interpret the raw\r
 * buffer as needed.\r
 */\r
interface ArrayBuffer {\r
    /**\r
     * Read-only. The length of the ArrayBuffer (in bytes).\r
     */\r
    readonly byteLength: number;\r
\r
    /**\r
     * Returns a section of an ArrayBuffer.\r
     */\r
    slice(begin: number, end?: number): ArrayBuffer;\r
}\r
\r
/**\r
 * Allowed ArrayBuffer types for the buffer of an ArrayBufferView and related Typed Arrays.\r
 */\r
interface ArrayBufferTypes {\r
    ArrayBuffer: ArrayBuffer;\r
}\r
type ArrayBufferLike = ArrayBufferTypes[keyof ArrayBufferTypes];\r
\r
interface ArrayBufferConstructor {\r
    readonly prototype: ArrayBuffer;\r
    new(byteLength: number): ArrayBuffer;\r
    isView(arg: any): arg is ArrayBufferView;\r
}\r
declare var ArrayBuffer: ArrayBufferConstructor;\r
\r
interface ArrayBufferView {\r
    /**\r
     * The ArrayBuffer instance referenced by the array.\r
     */\r
    buffer: ArrayBufferLike;\r
\r
    /**\r
     * The length in bytes of the array.\r
     */\r
    byteLength: number;\r
\r
    /**\r
     * The offset in bytes of the array.\r
     */\r
    byteOffset: number;\r
}\r
\r
interface DataView {\r
    readonly buffer: ArrayBuffer;\r
    readonly byteLength: number;\r
    readonly byteOffset: number;\r
    /**\r
     * Gets the Float32 value at the specified byte offset from the start of the view. There is\r
     * no alignment constraint; multi-byte values may be fetched from any offset.\r
     * @param byteOffset The place in the buffer at which the value should be retrieved.\r
     * @param littleEndian If false or undefined, a big-endian value should be read.\r
     */\r
    getFloat32(byteOffset: number, littleEndian?: boolean): number;\r
\r
    /**\r
     * Gets the Float64 value at the specified byte offset from the start of the view. There is\r
     * no alignment constraint; multi-byte values may be fetched from any offset.\r
     * @param byteOffset The place in the buffer at which the value should be retrieved.\r
     * @param littleEndian If false or undefined, a big-endian value should be read.\r
     */\r
    getFloat64(byteOffset: number, littleEndian?: boolean): number;\r
\r
    /**\r
     * Gets the Int8 value at the specified byte offset from the start of the view. There is\r
     * no alignment constraint; multi-byte values may be fetched from any offset.\r
     * @param byteOffset The place in the buffer at which the value should be retrieved.\r
     */\r
    getInt8(byteOffset: number): number;\r
\r
    /**\r
     * Gets the Int16 value at the specified byte offset from the start of the view. There is\r
     * no alignment constraint; multi-byte values may be fetched from any offset.\r
     * @param byteOffset The place in the buffer at which the value should be retrieved.\r
     * @param littleEndian If false or undefined, a big-endian value should be read.\r
     */\r
    getInt16(byteOffset: number, littleEndian?: boolean): number;\r
    /**\r
     * Gets the Int32 value at the specified byte offset from the start of the view. There is\r
     * no alignment constraint; multi-byte values may be fetched from any offset.\r
     * @param byteOffset The place in the buffer at which the value should be retrieved.\r
     * @param littleEndian If false or undefined, a big-endian value should be read.\r
     */\r
    getInt32(byteOffset: number, littleEndian?: boolean): number;\r
\r
    /**\r
     * Gets the Uint8 value at the specified byte offset from the start of the view. There is\r
     * no alignment constraint; multi-byte values may be fetched from any offset.\r
     * @param byteOffset The place in the buffer at which the value should be retrieved.\r
     */\r
    getUint8(byteOffset: number): number;\r
\r
    /**\r
     * Gets the Uint16 value at the specified byte offset from the start of the view. There is\r
     * no alignment constraint; multi-byte values may be fetched from any offset.\r
     * @param byteOffset The place in the buffer at which the value should be retrieved.\r
     * @param littleEndian If false or undefined, a big-endian value should be read.\r
     */\r
    getUint16(byteOffset: number, littleEndian?: boolean): number;\r
\r
    /**\r
     * Gets the Uint32 value at the specified byte offset from the start of the view. There is\r
     * no alignment constraint; multi-byte values may be fetched from any offset.\r
     * @param byteOffset The place in the buffer at which the value should be retrieved.\r
     * @param littleEndian If false or undefined, a big-endian value should be read.\r
     */\r
    getUint32(byteOffset: number, littleEndian?: boolean): number;\r
\r
    /**\r
     * Stores an Float32 value at the specified byte offset from the start of the view.\r
     * @param byteOffset The place in the buffer at which the value should be set.\r
     * @param value The value to set.\r
     * @param littleEndian If false or undefined, a big-endian value should be written.\r
     */\r
    setFloat32(byteOffset: number, value: number, littleEndian?: boolean): void;\r
\r
    /**\r
     * Stores an Float64 value at the specified byte offset from the start of the view.\r
     * @param byteOffset The place in the buffer at which the value should be set.\r
     * @param value The value to set.\r
     * @param littleEndian If false or undefined, a big-endian value should be written.\r
     */\r
    setFloat64(byteOffset: number, value: number, littleEndian?: boolean): void;\r
\r
    /**\r
     * Stores an Int8 value at the specified byte offset from the start of the view.\r
     * @param byteOffset The place in the buffer at which the value should be set.\r
     * @param value The value to set.\r
     */\r
    setInt8(byteOffset: number, value: number): void;\r
\r
    /**\r
     * Stores an Int16 value at the specified byte offset from the start of the view.\r
     * @param byteOffset The place in the buffer at which the value should be set.\r
     * @param value The value to set.\r
     * @param littleEndian If false or undefined, a big-endian value should be written.\r
     */\r
    setInt16(byteOffset: number, value: number, littleEndian?: boolean): void;\r
\r
    /**\r
     * Stores an Int32 value at the specified byte offset from the start of the view.\r
     * @param byteOffset The place in the buffer at which the value should be set.\r
     * @param value The value to set.\r
     * @param littleEndian If false or undefined, a big-endian value should be written.\r
     */\r
    setInt32(byteOffset: number, value: number, littleEndian?: boolean): void;\r
\r
    /**\r
     * Stores an Uint8 value at the specified byte offset from the start of the view.\r
     * @param byteOffset The place in the buffer at which the value should be set.\r
     * @param value The value to set.\r
     */\r
    setUint8(byteOffset: number, value: number): void;\r
\r
    /**\r
     * Stores an Uint16 value at the specified byte offset from the start of the view.\r
     * @param byteOffset The place in the buffer at which the value should be set.\r
     * @param value The value to set.\r
     * @param littleEndian If false or undefined, a big-endian value should be written.\r
     */\r
    setUint16(byteOffset: number, value: number, littleEndian?: boolean): void;\r
\r
    /**\r
     * Stores an Uint32 value at the specified byte offset from the start of the view.\r
     * @param byteOffset The place in the buffer at which the value should be set.\r
     * @param value The value to set.\r
     * @param littleEndian If false or undefined, a big-endian value should be written.\r
     */\r
    setUint32(byteOffset: number, value: number, littleEndian?: boolean): void;\r
}\r
\r
interface DataViewConstructor {\r
    readonly prototype: DataView;\r
    new(buffer: ArrayBufferLike, byteOffset?: number, byteLength?: number): DataView;\r
}\r
declare var DataView: DataViewConstructor;\r
\r
/**\r
 * A typed array of 8-bit integer values. The contents are initialized to 0. If the requested\r
 * number of bytes could not be allocated an exception is raised.\r
 */\r
interface Int8Array {\r
    /**\r
     * The size in bytes of each element in the array.\r
     */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /**\r
     * The ArrayBuffer instance referenced by the array.\r
     */\r
    readonly buffer: ArrayBufferLike;\r
\r
    /**\r
     * The length in bytes of the array.\r
     */\r
    readonly byteLength: number;\r
\r
    /**\r
     * The offset in bytes of the array.\r
     */\r
    readonly byteOffset: number;\r
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
\r
    /**\r
     * Determines whether all the members of an array satisfy the specified test.\r
     * @param predicate A function that accepts up to three arguments. The every method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value false, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    every(predicate: (value: number, index: number, array: Int8Array) => unknown, thisArg?: any): boolean;\r
\r
    /**\r
     * Changes all array elements from \`start\` to \`end\` index to a static \`value\` and returns the modified array\r
     * @param value value to fill array section with\r
     * @param start index to start filling the array at. If start is negative, it is treated as\r
     * length+start where length is the length of the array.\r
     * @param end index to stop filling the array at. If end is negative, it is treated as\r
     * length+end.\r
     */\r
    fill(value: number, start?: number, end?: number): this;\r
\r
    /**\r
     * Returns the elements of an array that meet the condition specified in a callback function.\r
     * @param predicate A function that accepts up to three arguments. The filter method calls\r
     * the predicate function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    filter(predicate: (value: number, index: number, array: Int8Array) => any, thisArg?: any): Int8Array;\r
\r
    /**\r
     * Returns the value of the first element in the array where predicate is true, and undefined\r
     * otherwise.\r
     * @param predicate find calls predicate once for each element of the array, in ascending\r
     * order, until it finds one where predicate returns true. If such an element is found, find\r
     * immediately returns that element value. Otherwise, find returns undefined.\r
     * @param thisArg If provided, it will be used as the this value for each invocation of\r
     * predicate. If it is not provided, undefined is used instead.\r
     */\r
    find(predicate: (value: number, index: number, obj: Int8Array) => boolean, thisArg?: any): number | undefined;\r
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
    findIndex(predicate: (value: number, index: number, obj: Int8Array) => boolean, thisArg?: any): number;\r
\r
    /**\r
     * Performs the specified action for each element in an array.\r
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    forEach(callbackfn: (value: number, index: number, array: Int8Array) => void, thisArg?: any): void;\r
\r
    /**\r
     * Returns the index of the first occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     *  search starts at index 0.\r
     */\r
    indexOf(searchElement: number, fromIndex?: number): number;\r
\r
    /**\r
     * Adds all the elements of an array separated by the specified separator string.\r
     * @param separator A string used to separate one element of an array from the next in the\r
     * resulting String. If omitted, the array elements are separated with a comma.\r
     */\r
    join(separator?: string): string;\r
\r
    /**\r
     * Returns the index of the last occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     * search starts at index 0.\r
     */\r
    lastIndexOf(searchElement: number, fromIndex?: number): number;\r
\r
    /**\r
     * The length of the array.\r
     */\r
    readonly length: number;\r
\r
    /**\r
     * Calls a defined callback function on each element of an array, and returns an array that\r
     * contains the results.\r
     * @param callbackfn A function that accepts up to three arguments. The map method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the callbackfn function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    map(callbackfn: (value: number, index: number, array: Int8Array) => number, thisArg?: any): Int8Array;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of\r
     * the callback function is the accumulated result, and is provided as an argument in the next\r
     * call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int8Array) => number): number;\r
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int8Array) => number, initialValue: number): number;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of\r
     * the callback function is the accumulated result, and is provided as an argument in the next\r
     * call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Int8Array) => U, initialValue: U): U;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order.\r
     * The return value of the callback function is the accumulated result, and is provided as an\r
     * argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r
     * the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an\r
     * argument instead of an array value.\r
     */\r
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int8Array) => number): number;\r
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int8Array) => number, initialValue: number): number;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order.\r
     * The return value of the callback function is the accumulated result, and is provided as an\r
     * argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r
     * the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Int8Array) => U, initialValue: U): U;\r
\r
    /**\r
     * Reverses the elements in an Array.\r
     */\r
    reverse(): Int8Array;\r
\r
    /**\r
     * Sets a value or an array of values.\r
     * @param array A typed or untyped array of values to set.\r
     * @param offset The index in the current array at which the values are to be written.\r
     */\r
    set(array: ArrayLike<number>, offset?: number): void;\r
\r
    /**\r
     * Returns a section of an array.\r
     * @param start The beginning of the specified portion of the array.\r
     * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.\r
     */\r
    slice(start?: number, end?: number): Int8Array;\r
\r
    /**\r
     * Determines whether the specified callback function returns true for any element of an array.\r
     * @param predicate A function that accepts up to three arguments. The some method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value true, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    some(predicate: (value: number, index: number, array: Int8Array) => unknown, thisArg?: any): boolean;\r
\r
    /**\r
     * Sorts an array.\r
     * @param compareFn Function used to determine the order of the elements. It is expected to return\r
     * a negative value if first argument is less than second argument, zero if they're equal and a positive\r
     * value otherwise. If omitted, the elements are sorted in ascending order.\r
     * \`\`\`ts\r
     * [11,2,22,1].sort((a, b) => a - b)\r
     * \`\`\`\r
     */\r
    sort(compareFn?: (a: number, b: number) => number): this;\r
\r
    /**\r
     * Gets a new Int8Array view of the ArrayBuffer store for this array, referencing the elements\r
     * at begin, inclusive, up to end, exclusive.\r
     * @param begin The index of the beginning of the array.\r
     * @param end The index of the end of the array.\r
     */\r
    subarray(begin?: number, end?: number): Int8Array;\r
\r
    /**\r
     * Converts a number to a string by using the current locale.\r
     */\r
    toLocaleString(): string;\r
\r
    /**\r
     * Returns a string representation of an array.\r
     */\r
    toString(): string;\r
\r
    /** Returns the primitive value of the specified object. */\r
    valueOf(): Int8Array;\r
\r
    [index: number]: number;\r
}\r
interface Int8ArrayConstructor {\r
    readonly prototype: Int8Array;\r
    new(length: number): Int8Array;\r
    new(array: ArrayLike<number> | ArrayBufferLike): Int8Array;\r
    new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): Int8Array;\r
\r
    /**\r
     * The size in bytes of each element in the array.\r
     */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /**\r
     * Returns a new array from a set of elements.\r
     * @param items A set of elements to include in the new array object.\r
     */\r
    of(...items: number[]): Int8Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     */\r
    from(arrayLike: ArrayLike<number>): Int8Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Int8Array;\r
\r
\r
}\r
declare var Int8Array: Int8ArrayConstructor;\r
\r
/**\r
 * A typed array of 8-bit unsigned integer values. The contents are initialized to 0. If the\r
 * requested number of bytes could not be allocated an exception is raised.\r
 */\r
interface Uint8Array {\r
    /**\r
     * The size in bytes of each element in the array.\r
     */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /**\r
     * The ArrayBuffer instance referenced by the array.\r
     */\r
    readonly buffer: ArrayBufferLike;\r
\r
    /**\r
     * The length in bytes of the array.\r
     */\r
    readonly byteLength: number;\r
\r
    /**\r
     * The offset in bytes of the array.\r
     */\r
    readonly byteOffset: number;\r
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
\r
    /**\r
     * Determines whether all the members of an array satisfy the specified test.\r
     * @param predicate A function that accepts up to three arguments. The every method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value false, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    every(predicate: (value: number, index: number, array: Uint8Array) => unknown, thisArg?: any): boolean;\r
\r
    /**\r
     * Changes all array elements from \`start\` to \`end\` index to a static \`value\` and returns the modified array\r
     * @param value value to fill array section with\r
     * @param start index to start filling the array at. If start is negative, it is treated as\r
     * length+start where length is the length of the array.\r
     * @param end index to stop filling the array at. If end is negative, it is treated as\r
     * length+end.\r
     */\r
    fill(value: number, start?: number, end?: number): this;\r
\r
    /**\r
     * Returns the elements of an array that meet the condition specified in a callback function.\r
     * @param predicate A function that accepts up to three arguments. The filter method calls\r
     * the predicate function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    filter(predicate: (value: number, index: number, array: Uint8Array) => any, thisArg?: any): Uint8Array;\r
\r
    /**\r
     * Returns the value of the first element in the array where predicate is true, and undefined\r
     * otherwise.\r
     * @param predicate find calls predicate once for each element of the array, in ascending\r
     * order, until it finds one where predicate returns true. If such an element is found, find\r
     * immediately returns that element value. Otherwise, find returns undefined.\r
     * @param thisArg If provided, it will be used as the this value for each invocation of\r
     * predicate. If it is not provided, undefined is used instead.\r
     */\r
    find(predicate: (value: number, index: number, obj: Uint8Array) => boolean, thisArg?: any): number | undefined;\r
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
    findIndex(predicate: (value: number, index: number, obj: Uint8Array) => boolean, thisArg?: any): number;\r
\r
    /**\r
     * Performs the specified action for each element in an array.\r
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    forEach(callbackfn: (value: number, index: number, array: Uint8Array) => void, thisArg?: any): void;\r
\r
    /**\r
     * Returns the index of the first occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     *  search starts at index 0.\r
     */\r
    indexOf(searchElement: number, fromIndex?: number): number;\r
\r
    /**\r
     * Adds all the elements of an array separated by the specified separator string.\r
     * @param separator A string used to separate one element of an array from the next in the\r
     * resulting String. If omitted, the array elements are separated with a comma.\r
     */\r
    join(separator?: string): string;\r
\r
    /**\r
     * Returns the index of the last occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     * search starts at index 0.\r
     */\r
    lastIndexOf(searchElement: number, fromIndex?: number): number;\r
\r
    /**\r
     * The length of the array.\r
     */\r
    readonly length: number;\r
\r
    /**\r
     * Calls a defined callback function on each element of an array, and returns an array that\r
     * contains the results.\r
     * @param callbackfn A function that accepts up to three arguments. The map method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the callbackfn function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    map(callbackfn: (value: number, index: number, array: Uint8Array) => number, thisArg?: any): Uint8Array;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of\r
     * the callback function is the accumulated result, and is provided as an argument in the next\r
     * call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number): number;\r
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number, initialValue: number): number;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of\r
     * the callback function is the accumulated result, and is provided as an argument in the next\r
     * call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8Array) => U, initialValue: U): U;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order.\r
     * The return value of the callback function is the accumulated result, and is provided as an\r
     * argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r
     * the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an\r
     * argument instead of an array value.\r
     */\r
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number): number;\r
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number, initialValue: number): number;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order.\r
     * The return value of the callback function is the accumulated result, and is provided as an\r
     * argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r
     * the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8Array) => U, initialValue: U): U;\r
\r
    /**\r
     * Reverses the elements in an Array.\r
     */\r
    reverse(): Uint8Array;\r
\r
    /**\r
     * Sets a value or an array of values.\r
     * @param array A typed or untyped array of values to set.\r
     * @param offset The index in the current array at which the values are to be written.\r
     */\r
    set(array: ArrayLike<number>, offset?: number): void;\r
\r
    /**\r
     * Returns a section of an array.\r
     * @param start The beginning of the specified portion of the array.\r
     * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.\r
     */\r
    slice(start?: number, end?: number): Uint8Array;\r
\r
    /**\r
     * Determines whether the specified callback function returns true for any element of an array.\r
     * @param predicate A function that accepts up to three arguments. The some method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value true, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    some(predicate: (value: number, index: number, array: Uint8Array) => unknown, thisArg?: any): boolean;\r
\r
    /**\r
     * Sorts an array.\r
     * @param compareFn Function used to determine the order of the elements. It is expected to return\r
     * a negative value if first argument is less than second argument, zero if they're equal and a positive\r
     * value otherwise. If omitted, the elements are sorted in ascending order.\r
     * \`\`\`ts\r
     * [11,2,22,1].sort((a, b) => a - b)\r
     * \`\`\`\r
     */\r
    sort(compareFn?: (a: number, b: number) => number): this;\r
\r
    /**\r
     * Gets a new Uint8Array view of the ArrayBuffer store for this array, referencing the elements\r
     * at begin, inclusive, up to end, exclusive.\r
     * @param begin The index of the beginning of the array.\r
     * @param end The index of the end of the array.\r
     */\r
    subarray(begin?: number, end?: number): Uint8Array;\r
\r
    /**\r
     * Converts a number to a string by using the current locale.\r
     */\r
    toLocaleString(): string;\r
\r
    /**\r
     * Returns a string representation of an array.\r
     */\r
    toString(): string;\r
\r
    /** Returns the primitive value of the specified object. */\r
    valueOf(): Uint8Array;\r
\r
    [index: number]: number;\r
}\r
\r
interface Uint8ArrayConstructor {\r
    readonly prototype: Uint8Array;\r
    new(length: number): Uint8Array;\r
    new(array: ArrayLike<number> | ArrayBufferLike): Uint8Array;\r
    new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): Uint8Array;\r
\r
    /**\r
     * The size in bytes of each element in the array.\r
     */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /**\r
     * Returns a new array from a set of elements.\r
     * @param items A set of elements to include in the new array object.\r
     */\r
    of(...items: number[]): Uint8Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     */\r
    from(arrayLike: ArrayLike<number>): Uint8Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Uint8Array;\r
\r
}\r
declare var Uint8Array: Uint8ArrayConstructor;\r
\r
/**\r
 * A typed array of 8-bit unsigned integer (clamped) values. The contents are initialized to 0.\r
 * If the requested number of bytes could not be allocated an exception is raised.\r
 */\r
interface Uint8ClampedArray {\r
    /**\r
     * The size in bytes of each element in the array.\r
     */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /**\r
     * The ArrayBuffer instance referenced by the array.\r
     */\r
    readonly buffer: ArrayBufferLike;\r
\r
    /**\r
     * The length in bytes of the array.\r
     */\r
    readonly byteLength: number;\r
\r
    /**\r
     * The offset in bytes of the array.\r
     */\r
    readonly byteOffset: number;\r
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
\r
    /**\r
     * Determines whether all the members of an array satisfy the specified test.\r
     * @param predicate A function that accepts up to three arguments. The every method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value false, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    every(predicate: (value: number, index: number, array: Uint8ClampedArray) => unknown, thisArg?: any): boolean;\r
\r
    /**\r
     * Changes all array elements from \`start\` to \`end\` index to a static \`value\` and returns the modified array\r
     * @param value value to fill array section with\r
     * @param start index to start filling the array at. If start is negative, it is treated as\r
     * length+start where length is the length of the array.\r
     * @param end index to stop filling the array at. If end is negative, it is treated as\r
     * length+end.\r
     */\r
    fill(value: number, start?: number, end?: number): this;\r
\r
    /**\r
     * Returns the elements of an array that meet the condition specified in a callback function.\r
     * @param predicate A function that accepts up to three arguments. The filter method calls\r
     * the predicate function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    filter(predicate: (value: number, index: number, array: Uint8ClampedArray) => any, thisArg?: any): Uint8ClampedArray;\r
\r
    /**\r
     * Returns the value of the first element in the array where predicate is true, and undefined\r
     * otherwise.\r
     * @param predicate find calls predicate once for each element of the array, in ascending\r
     * order, until it finds one where predicate returns true. If such an element is found, find\r
     * immediately returns that element value. Otherwise, find returns undefined.\r
     * @param thisArg If provided, it will be used as the this value for each invocation of\r
     * predicate. If it is not provided, undefined is used instead.\r
     */\r
    find(predicate: (value: number, index: number, obj: Uint8ClampedArray) => boolean, thisArg?: any): number | undefined;\r
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
    findIndex(predicate: (value: number, index: number, obj: Uint8ClampedArray) => boolean, thisArg?: any): number;\r
\r
    /**\r
     * Performs the specified action for each element in an array.\r
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    forEach(callbackfn: (value: number, index: number, array: Uint8ClampedArray) => void, thisArg?: any): void;\r
\r
    /**\r
     * Returns the index of the first occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     *  search starts at index 0.\r
     */\r
    indexOf(searchElement: number, fromIndex?: number): number;\r
\r
    /**\r
     * Adds all the elements of an array separated by the specified separator string.\r
     * @param separator A string used to separate one element of an array from the next in the\r
     * resulting String. If omitted, the array elements are separated with a comma.\r
     */\r
    join(separator?: string): string;\r
\r
    /**\r
     * Returns the index of the last occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     * search starts at index 0.\r
     */\r
    lastIndexOf(searchElement: number, fromIndex?: number): number;\r
\r
    /**\r
     * The length of the array.\r
     */\r
    readonly length: number;\r
\r
    /**\r
     * Calls a defined callback function on each element of an array, and returns an array that\r
     * contains the results.\r
     * @param callbackfn A function that accepts up to three arguments. The map method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the callbackfn function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    map(callbackfn: (value: number, index: number, array: Uint8ClampedArray) => number, thisArg?: any): Uint8ClampedArray;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of\r
     * the callback function is the accumulated result, and is provided as an argument in the next\r
     * call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8ClampedArray) => number): number;\r
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8ClampedArray) => number, initialValue: number): number;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of\r
     * the callback function is the accumulated result, and is provided as an argument in the next\r
     * call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8ClampedArray) => U, initialValue: U): U;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order.\r
     * The return value of the callback function is the accumulated result, and is provided as an\r
     * argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r
     * the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an\r
     * argument instead of an array value.\r
     */\r
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8ClampedArray) => number): number;\r
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8ClampedArray) => number, initialValue: number): number;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order.\r
     * The return value of the callback function is the accumulated result, and is provided as an\r
     * argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r
     * the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8ClampedArray) => U, initialValue: U): U;\r
\r
    /**\r
     * Reverses the elements in an Array.\r
     */\r
    reverse(): Uint8ClampedArray;\r
\r
    /**\r
     * Sets a value or an array of values.\r
     * @param array A typed or untyped array of values to set.\r
     * @param offset The index in the current array at which the values are to be written.\r
     */\r
    set(array: ArrayLike<number>, offset?: number): void;\r
\r
    /**\r
     * Returns a section of an array.\r
     * @param start The beginning of the specified portion of the array.\r
     * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.\r
     */\r
    slice(start?: number, end?: number): Uint8ClampedArray;\r
\r
    /**\r
     * Determines whether the specified callback function returns true for any element of an array.\r
     * @param predicate A function that accepts up to three arguments. The some method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value true, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    some(predicate: (value: number, index: number, array: Uint8ClampedArray) => unknown, thisArg?: any): boolean;\r
\r
    /**\r
     * Sorts an array.\r
     * @param compareFn Function used to determine the order of the elements. It is expected to return\r
     * a negative value if first argument is less than second argument, zero if they're equal and a positive\r
     * value otherwise. If omitted, the elements are sorted in ascending order.\r
     * \`\`\`ts\r
     * [11,2,22,1].sort((a, b) => a - b)\r
     * \`\`\`\r
     */\r
    sort(compareFn?: (a: number, b: number) => number): this;\r
\r
    /**\r
     * Gets a new Uint8ClampedArray view of the ArrayBuffer store for this array, referencing the elements\r
     * at begin, inclusive, up to end, exclusive.\r
     * @param begin The index of the beginning of the array.\r
     * @param end The index of the end of the array.\r
     */\r
    subarray(begin?: number, end?: number): Uint8ClampedArray;\r
\r
    /**\r
     * Converts a number to a string by using the current locale.\r
     */\r
    toLocaleString(): string;\r
\r
    /**\r
     * Returns a string representation of an array.\r
     */\r
    toString(): string;\r
\r
    /** Returns the primitive value of the specified object. */\r
    valueOf(): Uint8ClampedArray;\r
\r
    [index: number]: number;\r
}\r
\r
interface Uint8ClampedArrayConstructor {\r
    readonly prototype: Uint8ClampedArray;\r
    new(length: number): Uint8ClampedArray;\r
    new(array: ArrayLike<number> | ArrayBufferLike): Uint8ClampedArray;\r
    new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): Uint8ClampedArray;\r
\r
    /**\r
     * The size in bytes of each element in the array.\r
     */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /**\r
     * Returns a new array from a set of elements.\r
     * @param items A set of elements to include in the new array object.\r
     */\r
    of(...items: number[]): Uint8ClampedArray;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     */\r
    from(arrayLike: ArrayLike<number>): Uint8ClampedArray;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Uint8ClampedArray;\r
}\r
declare var Uint8ClampedArray: Uint8ClampedArrayConstructor;\r
\r
/**\r
 * A typed array of 16-bit signed integer values. The contents are initialized to 0. If the\r
 * requested number of bytes could not be allocated an exception is raised.\r
 */\r
interface Int16Array {\r
    /**\r
     * The size in bytes of each element in the array.\r
     */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /**\r
     * The ArrayBuffer instance referenced by the array.\r
     */\r
    readonly buffer: ArrayBufferLike;\r
\r
    /**\r
     * The length in bytes of the array.\r
     */\r
    readonly byteLength: number;\r
\r
    /**\r
     * The offset in bytes of the array.\r
     */\r
    readonly byteOffset: number;\r
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
\r
    /**\r
     * Determines whether all the members of an array satisfy the specified test.\r
     * @param predicate A function that accepts up to three arguments. The every method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value false, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    every(predicate: (value: number, index: number, array: Int16Array) => unknown, thisArg?: any): boolean;\r
\r
    /**\r
     * Changes all array elements from \`start\` to \`end\` index to a static \`value\` and returns the modified array\r
     * @param value value to fill array section with\r
     * @param start index to start filling the array at. If start is negative, it is treated as\r
     * length+start where length is the length of the array.\r
     * @param end index to stop filling the array at. If end is negative, it is treated as\r
     * length+end.\r
     */\r
    fill(value: number, start?: number, end?: number): this;\r
\r
    /**\r
     * Returns the elements of an array that meet the condition specified in a callback function.\r
     * @param predicate A function that accepts up to three arguments. The filter method calls\r
     * the predicate function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    filter(predicate: (value: number, index: number, array: Int16Array) => any, thisArg?: any): Int16Array;\r
\r
    /**\r
     * Returns the value of the first element in the array where predicate is true, and undefined\r
     * otherwise.\r
     * @param predicate find calls predicate once for each element of the array, in ascending\r
     * order, until it finds one where predicate returns true. If such an element is found, find\r
     * immediately returns that element value. Otherwise, find returns undefined.\r
     * @param thisArg If provided, it will be used as the this value for each invocation of\r
     * predicate. If it is not provided, undefined is used instead.\r
     */\r
    find(predicate: (value: number, index: number, obj: Int16Array) => boolean, thisArg?: any): number | undefined;\r
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
    findIndex(predicate: (value: number, index: number, obj: Int16Array) => boolean, thisArg?: any): number;\r
\r
    /**\r
     * Performs the specified action for each element in an array.\r
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    forEach(callbackfn: (value: number, index: number, array: Int16Array) => void, thisArg?: any): void;\r
    /**\r
     * Returns the index of the first occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     *  search starts at index 0.\r
     */\r
    indexOf(searchElement: number, fromIndex?: number): number;\r
\r
    /**\r
     * Adds all the elements of an array separated by the specified separator string.\r
     * @param separator A string used to separate one element of an array from the next in the\r
     * resulting String. If omitted, the array elements are separated with a comma.\r
     */\r
    join(separator?: string): string;\r
\r
    /**\r
     * Returns the index of the last occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     * search starts at index 0.\r
     */\r
    lastIndexOf(searchElement: number, fromIndex?: number): number;\r
\r
    /**\r
     * The length of the array.\r
     */\r
    readonly length: number;\r
\r
    /**\r
     * Calls a defined callback function on each element of an array, and returns an array that\r
     * contains the results.\r
     * @param callbackfn A function that accepts up to three arguments. The map method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the callbackfn function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    map(callbackfn: (value: number, index: number, array: Int16Array) => number, thisArg?: any): Int16Array;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of\r
     * the callback function is the accumulated result, and is provided as an argument in the next\r
     * call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int16Array) => number): number;\r
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int16Array) => number, initialValue: number): number;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of\r
     * the callback function is the accumulated result, and is provided as an argument in the next\r
     * call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Int16Array) => U, initialValue: U): U;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order.\r
     * The return value of the callback function is the accumulated result, and is provided as an\r
     * argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r
     * the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an\r
     * argument instead of an array value.\r
     */\r
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int16Array) => number): number;\r
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int16Array) => number, initialValue: number): number;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order.\r
     * The return value of the callback function is the accumulated result, and is provided as an\r
     * argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r
     * the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Int16Array) => U, initialValue: U): U;\r
\r
    /**\r
     * Reverses the elements in an Array.\r
     */\r
    reverse(): Int16Array;\r
\r
    /**\r
     * Sets a value or an array of values.\r
     * @param array A typed or untyped array of values to set.\r
     * @param offset The index in the current array at which the values are to be written.\r
     */\r
    set(array: ArrayLike<number>, offset?: number): void;\r
\r
    /**\r
     * Returns a section of an array.\r
     * @param start The beginning of the specified portion of the array.\r
     * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.\r
     */\r
    slice(start?: number, end?: number): Int16Array;\r
\r
    /**\r
     * Determines whether the specified callback function returns true for any element of an array.\r
     * @param predicate A function that accepts up to three arguments. The some method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value true, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    some(predicate: (value: number, index: number, array: Int16Array) => unknown, thisArg?: any): boolean;\r
\r
    /**\r
     * Sorts an array.\r
     * @param compareFn Function used to determine the order of the elements. It is expected to return\r
     * a negative value if first argument is less than second argument, zero if they're equal and a positive\r
     * value otherwise. If omitted, the elements are sorted in ascending order.\r
     * \`\`\`ts\r
     * [11,2,22,1].sort((a, b) => a - b)\r
     * \`\`\`\r
     */\r
    sort(compareFn?: (a: number, b: number) => number): this;\r
\r
    /**\r
     * Gets a new Int16Array view of the ArrayBuffer store for this array, referencing the elements\r
     * at begin, inclusive, up to end, exclusive.\r
     * @param begin The index of the beginning of the array.\r
     * @param end The index of the end of the array.\r
     */\r
    subarray(begin?: number, end?: number): Int16Array;\r
\r
    /**\r
     * Converts a number to a string by using the current locale.\r
     */\r
    toLocaleString(): string;\r
\r
    /**\r
     * Returns a string representation of an array.\r
     */\r
    toString(): string;\r
\r
    /** Returns the primitive value of the specified object. */\r
    valueOf(): Int16Array;\r
\r
    [index: number]: number;\r
}\r
\r
interface Int16ArrayConstructor {\r
    readonly prototype: Int16Array;\r
    new(length: number): Int16Array;\r
    new(array: ArrayLike<number> | ArrayBufferLike): Int16Array;\r
    new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): Int16Array;\r
\r
    /**\r
     * The size in bytes of each element in the array.\r
     */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /**\r
     * Returns a new array from a set of elements.\r
     * @param items A set of elements to include in the new array object.\r
     */\r
    of(...items: number[]): Int16Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     */\r
    from(arrayLike: ArrayLike<number>): Int16Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Int16Array;\r
\r
\r
}\r
declare var Int16Array: Int16ArrayConstructor;\r
\r
/**\r
 * A typed array of 16-bit unsigned integer values. The contents are initialized to 0. If the\r
 * requested number of bytes could not be allocated an exception is raised.\r
 */\r
interface Uint16Array {\r
    /**\r
     * The size in bytes of each element in the array.\r
     */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /**\r
     * The ArrayBuffer instance referenced by the array.\r
     */\r
    readonly buffer: ArrayBufferLike;\r
\r
    /**\r
     * The length in bytes of the array.\r
     */\r
    readonly byteLength: number;\r
\r
    /**\r
     * The offset in bytes of the array.\r
     */\r
    readonly byteOffset: number;\r
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
\r
    /**\r
     * Determines whether all the members of an array satisfy the specified test.\r
     * @param predicate A function that accepts up to three arguments. The every method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value false, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    every(predicate: (value: number, index: number, array: Uint16Array) => unknown, thisArg?: any): boolean;\r
\r
    /**\r
     * Changes all array elements from \`start\` to \`end\` index to a static \`value\` and returns the modified array\r
     * @param value value to fill array section with\r
     * @param start index to start filling the array at. If start is negative, it is treated as\r
     * length+start where length is the length of the array.\r
     * @param end index to stop filling the array at. If end is negative, it is treated as\r
     * length+end.\r
     */\r
    fill(value: number, start?: number, end?: number): this;\r
\r
    /**\r
     * Returns the elements of an array that meet the condition specified in a callback function.\r
     * @param predicate A function that accepts up to three arguments. The filter method calls\r
     * the predicate function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    filter(predicate: (value: number, index: number, array: Uint16Array) => any, thisArg?: any): Uint16Array;\r
\r
    /**\r
     * Returns the value of the first element in the array where predicate is true, and undefined\r
     * otherwise.\r
     * @param predicate find calls predicate once for each element of the array, in ascending\r
     * order, until it finds one where predicate returns true. If such an element is found, find\r
     * immediately returns that element value. Otherwise, find returns undefined.\r
     * @param thisArg If provided, it will be used as the this value for each invocation of\r
     * predicate. If it is not provided, undefined is used instead.\r
     */\r
    find(predicate: (value: number, index: number, obj: Uint16Array) => boolean, thisArg?: any): number | undefined;\r
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
    findIndex(predicate: (value: number, index: number, obj: Uint16Array) => boolean, thisArg?: any): number;\r
\r
    /**\r
     * Performs the specified action for each element in an array.\r
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    forEach(callbackfn: (value: number, index: number, array: Uint16Array) => void, thisArg?: any): void;\r
\r
    /**\r
     * Returns the index of the first occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     *  search starts at index 0.\r
     */\r
    indexOf(searchElement: number, fromIndex?: number): number;\r
\r
    /**\r
     * Adds all the elements of an array separated by the specified separator string.\r
     * @param separator A string used to separate one element of an array from the next in the\r
     * resulting String. If omitted, the array elements are separated with a comma.\r
     */\r
    join(separator?: string): string;\r
\r
    /**\r
     * Returns the index of the last occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     * search starts at index 0.\r
     */\r
    lastIndexOf(searchElement: number, fromIndex?: number): number;\r
\r
    /**\r
     * The length of the array.\r
     */\r
    readonly length: number;\r
\r
    /**\r
     * Calls a defined callback function on each element of an array, and returns an array that\r
     * contains the results.\r
     * @param callbackfn A function that accepts up to three arguments. The map method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the callbackfn function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    map(callbackfn: (value: number, index: number, array: Uint16Array) => number, thisArg?: any): Uint16Array;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of\r
     * the callback function is the accumulated result, and is provided as an argument in the next\r
     * call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint16Array) => number): number;\r
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint16Array) => number, initialValue: number): number;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of\r
     * the callback function is the accumulated result, and is provided as an argument in the next\r
     * call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint16Array) => U, initialValue: U): U;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order.\r
     * The return value of the callback function is the accumulated result, and is provided as an\r
     * argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r
     * the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an\r
     * argument instead of an array value.\r
     */\r
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint16Array) => number): number;\r
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint16Array) => number, initialValue: number): number;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order.\r
     * The return value of the callback function is the accumulated result, and is provided as an\r
     * argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r
     * the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint16Array) => U, initialValue: U): U;\r
\r
    /**\r
     * Reverses the elements in an Array.\r
     */\r
    reverse(): Uint16Array;\r
\r
    /**\r
     * Sets a value or an array of values.\r
     * @param array A typed or untyped array of values to set.\r
     * @param offset The index in the current array at which the values are to be written.\r
     */\r
    set(array: ArrayLike<number>, offset?: number): void;\r
\r
    /**\r
     * Returns a section of an array.\r
     * @param start The beginning of the specified portion of the array.\r
     * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.\r
     */\r
    slice(start?: number, end?: number): Uint16Array;\r
\r
    /**\r
     * Determines whether the specified callback function returns true for any element of an array.\r
     * @param predicate A function that accepts up to three arguments. The some method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value true, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    some(predicate: (value: number, index: number, array: Uint16Array) => unknown, thisArg?: any): boolean;\r
\r
    /**\r
     * Sorts an array.\r
     * @param compareFn Function used to determine the order of the elements. It is expected to return\r
     * a negative value if first argument is less than second argument, zero if they're equal and a positive\r
     * value otherwise. If omitted, the elements are sorted in ascending order.\r
     * \`\`\`ts\r
     * [11,2,22,1].sort((a, b) => a - b)\r
     * \`\`\`\r
     */\r
    sort(compareFn?: (a: number, b: number) => number): this;\r
\r
    /**\r
     * Gets a new Uint16Array view of the ArrayBuffer store for this array, referencing the elements\r
     * at begin, inclusive, up to end, exclusive.\r
     * @param begin The index of the beginning of the array.\r
     * @param end The index of the end of the array.\r
     */\r
    subarray(begin?: number, end?: number): Uint16Array;\r
\r
    /**\r
     * Converts a number to a string by using the current locale.\r
     */\r
    toLocaleString(): string;\r
\r
    /**\r
     * Returns a string representation of an array.\r
     */\r
    toString(): string;\r
\r
    /** Returns the primitive value of the specified object. */\r
    valueOf(): Uint16Array;\r
\r
    [index: number]: number;\r
}\r
\r
interface Uint16ArrayConstructor {\r
    readonly prototype: Uint16Array;\r
    new(length: number): Uint16Array;\r
    new(array: ArrayLike<number> | ArrayBufferLike): Uint16Array;\r
    new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): Uint16Array;\r
\r
    /**\r
     * The size in bytes of each element in the array.\r
     */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /**\r
     * Returns a new array from a set of elements.\r
     * @param items A set of elements to include in the new array object.\r
     */\r
    of(...items: number[]): Uint16Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     */\r
    from(arrayLike: ArrayLike<number>): Uint16Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Uint16Array;\r
\r
\r
}\r
declare var Uint16Array: Uint16ArrayConstructor;\r
/**\r
 * A typed array of 32-bit signed integer values. The contents are initialized to 0. If the\r
 * requested number of bytes could not be allocated an exception is raised.\r
 */\r
interface Int32Array {\r
    /**\r
     * The size in bytes of each element in the array.\r
     */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /**\r
     * The ArrayBuffer instance referenced by the array.\r
     */\r
    readonly buffer: ArrayBufferLike;\r
\r
    /**\r
     * The length in bytes of the array.\r
     */\r
    readonly byteLength: number;\r
\r
    /**\r
     * The offset in bytes of the array.\r
     */\r
    readonly byteOffset: number;\r
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
\r
    /**\r
     * Determines whether all the members of an array satisfy the specified test.\r
     * @param predicate A function that accepts up to three arguments. The every method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value false, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    every(predicate: (value: number, index: number, array: Int32Array) => unknown, thisArg?: any): boolean;\r
\r
    /**\r
     * Changes all array elements from \`start\` to \`end\` index to a static \`value\` and returns the modified array\r
     * @param value value to fill array section with\r
     * @param start index to start filling the array at. If start is negative, it is treated as\r
     * length+start where length is the length of the array.\r
     * @param end index to stop filling the array at. If end is negative, it is treated as\r
     * length+end.\r
     */\r
    fill(value: number, start?: number, end?: number): this;\r
\r
    /**\r
     * Returns the elements of an array that meet the condition specified in a callback function.\r
     * @param predicate A function that accepts up to three arguments. The filter method calls\r
     * the predicate function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    filter(predicate: (value: number, index: number, array: Int32Array) => any, thisArg?: any): Int32Array;\r
\r
    /**\r
     * Returns the value of the first element in the array where predicate is true, and undefined\r
     * otherwise.\r
     * @param predicate find calls predicate once for each element of the array, in ascending\r
     * order, until it finds one where predicate returns true. If such an element is found, find\r
     * immediately returns that element value. Otherwise, find returns undefined.\r
     * @param thisArg If provided, it will be used as the this value for each invocation of\r
     * predicate. If it is not provided, undefined is used instead.\r
     */\r
    find(predicate: (value: number, index: number, obj: Int32Array) => boolean, thisArg?: any): number | undefined;\r
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
    findIndex(predicate: (value: number, index: number, obj: Int32Array) => boolean, thisArg?: any): number;\r
\r
    /**\r
     * Performs the specified action for each element in an array.\r
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    forEach(callbackfn: (value: number, index: number, array: Int32Array) => void, thisArg?: any): void;\r
\r
    /**\r
     * Returns the index of the first occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     *  search starts at index 0.\r
     */\r
    indexOf(searchElement: number, fromIndex?: number): number;\r
\r
    /**\r
     * Adds all the elements of an array separated by the specified separator string.\r
     * @param separator A string used to separate one element of an array from the next in the\r
     * resulting String. If omitted, the array elements are separated with a comma.\r
     */\r
    join(separator?: string): string;\r
\r
    /**\r
     * Returns the index of the last occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     * search starts at index 0.\r
     */\r
    lastIndexOf(searchElement: number, fromIndex?: number): number;\r
\r
    /**\r
     * The length of the array.\r
     */\r
    readonly length: number;\r
\r
    /**\r
     * Calls a defined callback function on each element of an array, and returns an array that\r
     * contains the results.\r
     * @param callbackfn A function that accepts up to three arguments. The map method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the callbackfn function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    map(callbackfn: (value: number, index: number, array: Int32Array) => number, thisArg?: any): Int32Array;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of\r
     * the callback function is the accumulated result, and is provided as an argument in the next\r
     * call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int32Array) => number): number;\r
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int32Array) => number, initialValue: number): number;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of\r
     * the callback function is the accumulated result, and is provided as an argument in the next\r
     * call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Int32Array) => U, initialValue: U): U;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order.\r
     * The return value of the callback function is the accumulated result, and is provided as an\r
     * argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r
     * the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an\r
     * argument instead of an array value.\r
     */\r
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int32Array) => number): number;\r
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int32Array) => number, initialValue: number): number;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order.\r
     * The return value of the callback function is the accumulated result, and is provided as an\r
     * argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r
     * the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Int32Array) => U, initialValue: U): U;\r
\r
    /**\r
     * Reverses the elements in an Array.\r
     */\r
    reverse(): Int32Array;\r
\r
    /**\r
     * Sets a value or an array of values.\r
     * @param array A typed or untyped array of values to set.\r
     * @param offset The index in the current array at which the values are to be written.\r
     */\r
    set(array: ArrayLike<number>, offset?: number): void;\r
\r
    /**\r
     * Returns a section of an array.\r
     * @param start The beginning of the specified portion of the array.\r
     * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.\r
     */\r
    slice(start?: number, end?: number): Int32Array;\r
\r
    /**\r
     * Determines whether the specified callback function returns true for any element of an array.\r
     * @param predicate A function that accepts up to three arguments. The some method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value true, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    some(predicate: (value: number, index: number, array: Int32Array) => unknown, thisArg?: any): boolean;\r
\r
    /**\r
     * Sorts an array.\r
     * @param compareFn Function used to determine the order of the elements. It is expected to return\r
     * a negative value if first argument is less than second argument, zero if they're equal and a positive\r
     * value otherwise. If omitted, the elements are sorted in ascending order.\r
     * \`\`\`ts\r
     * [11,2,22,1].sort((a, b) => a - b)\r
     * \`\`\`\r
     */\r
    sort(compareFn?: (a: number, b: number) => number): this;\r
\r
    /**\r
     * Gets a new Int32Array view of the ArrayBuffer store for this array, referencing the elements\r
     * at begin, inclusive, up to end, exclusive.\r
     * @param begin The index of the beginning of the array.\r
     * @param end The index of the end of the array.\r
     */\r
    subarray(begin?: number, end?: number): Int32Array;\r
\r
    /**\r
     * Converts a number to a string by using the current locale.\r
     */\r
    toLocaleString(): string;\r
\r
    /**\r
     * Returns a string representation of an array.\r
     */\r
    toString(): string;\r
\r
    /** Returns the primitive value of the specified object. */\r
    valueOf(): Int32Array;\r
\r
    [index: number]: number;\r
}\r
\r
interface Int32ArrayConstructor {\r
    readonly prototype: Int32Array;\r
    new(length: number): Int32Array;\r
    new(array: ArrayLike<number> | ArrayBufferLike): Int32Array;\r
    new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): Int32Array;\r
\r
    /**\r
     * The size in bytes of each element in the array.\r
     */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /**\r
     * Returns a new array from a set of elements.\r
     * @param items A set of elements to include in the new array object.\r
     */\r
    of(...items: number[]): Int32Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     */\r
    from(arrayLike: ArrayLike<number>): Int32Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Int32Array;\r
\r
}\r
declare var Int32Array: Int32ArrayConstructor;\r
\r
/**\r
 * A typed array of 32-bit unsigned integer values. The contents are initialized to 0. If the\r
 * requested number of bytes could not be allocated an exception is raised.\r
 */\r
interface Uint32Array {\r
    /**\r
     * The size in bytes of each element in the array.\r
     */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /**\r
     * The ArrayBuffer instance referenced by the array.\r
     */\r
    readonly buffer: ArrayBufferLike;\r
\r
    /**\r
     * The length in bytes of the array.\r
     */\r
    readonly byteLength: number;\r
\r
    /**\r
     * The offset in bytes of the array.\r
     */\r
    readonly byteOffset: number;\r
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
\r
    /**\r
     * Determines whether all the members of an array satisfy the specified test.\r
     * @param predicate A function that accepts up to three arguments. The every method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value false, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    every(predicate: (value: number, index: number, array: Uint32Array) => unknown, thisArg?: any): boolean;\r
\r
    /**\r
     * Changes all array elements from \`start\` to \`end\` index to a static \`value\` and returns the modified array\r
     * @param value value to fill array section with\r
     * @param start index to start filling the array at. If start is negative, it is treated as\r
     * length+start where length is the length of the array.\r
     * @param end index to stop filling the array at. If end is negative, it is treated as\r
     * length+end.\r
     */\r
    fill(value: number, start?: number, end?: number): this;\r
\r
    /**\r
     * Returns the elements of an array that meet the condition specified in a callback function.\r
     * @param predicate A function that accepts up to three arguments. The filter method calls\r
     * the predicate function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    filter(predicate: (value: number, index: number, array: Uint32Array) => any, thisArg?: any): Uint32Array;\r
\r
    /**\r
     * Returns the value of the first element in the array where predicate is true, and undefined\r
     * otherwise.\r
     * @param predicate find calls predicate once for each element of the array, in ascending\r
     * order, until it finds one where predicate returns true. If such an element is found, find\r
     * immediately returns that element value. Otherwise, find returns undefined.\r
     * @param thisArg If provided, it will be used as the this value for each invocation of\r
     * predicate. If it is not provided, undefined is used instead.\r
     */\r
    find(predicate: (value: number, index: number, obj: Uint32Array) => boolean, thisArg?: any): number | undefined;\r
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
    findIndex(predicate: (value: number, index: number, obj: Uint32Array) => boolean, thisArg?: any): number;\r
\r
    /**\r
     * Performs the specified action for each element in an array.\r
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    forEach(callbackfn: (value: number, index: number, array: Uint32Array) => void, thisArg?: any): void;\r
    /**\r
     * Returns the index of the first occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     *  search starts at index 0.\r
     */\r
    indexOf(searchElement: number, fromIndex?: number): number;\r
\r
    /**\r
     * Adds all the elements of an array separated by the specified separator string.\r
     * @param separator A string used to separate one element of an array from the next in the\r
     * resulting String. If omitted, the array elements are separated with a comma.\r
     */\r
    join(separator?: string): string;\r
\r
    /**\r
     * Returns the index of the last occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     * search starts at index 0.\r
     */\r
    lastIndexOf(searchElement: number, fromIndex?: number): number;\r
\r
    /**\r
     * The length of the array.\r
     */\r
    readonly length: number;\r
\r
    /**\r
     * Calls a defined callback function on each element of an array, and returns an array that\r
     * contains the results.\r
     * @param callbackfn A function that accepts up to three arguments. The map method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the callbackfn function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    map(callbackfn: (value: number, index: number, array: Uint32Array) => number, thisArg?: any): Uint32Array;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of\r
     * the callback function is the accumulated result, and is provided as an argument in the next\r
     * call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint32Array) => number): number;\r
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint32Array) => number, initialValue: number): number;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of\r
     * the callback function is the accumulated result, and is provided as an argument in the next\r
     * call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint32Array) => U, initialValue: U): U;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order.\r
     * The return value of the callback function is the accumulated result, and is provided as an\r
     * argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r
     * the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an\r
     * argument instead of an array value.\r
     */\r
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint32Array) => number): number;\r
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint32Array) => number, initialValue: number): number;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order.\r
     * The return value of the callback function is the accumulated result, and is provided as an\r
     * argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r
     * the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint32Array) => U, initialValue: U): U;\r
\r
    /**\r
     * Reverses the elements in an Array.\r
     */\r
    reverse(): Uint32Array;\r
\r
    /**\r
     * Sets a value or an array of values.\r
     * @param array A typed or untyped array of values to set.\r
     * @param offset The index in the current array at which the values are to be written.\r
     */\r
    set(array: ArrayLike<number>, offset?: number): void;\r
\r
    /**\r
     * Returns a section of an array.\r
     * @param start The beginning of the specified portion of the array.\r
     * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.\r
     */\r
    slice(start?: number, end?: number): Uint32Array;\r
\r
    /**\r
     * Determines whether the specified callback function returns true for any element of an array.\r
     * @param predicate A function that accepts up to three arguments. The some method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value true, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    some(predicate: (value: number, index: number, array: Uint32Array) => unknown, thisArg?: any): boolean;\r
\r
    /**\r
     * Sorts an array.\r
     * @param compareFn Function used to determine the order of the elements. It is expected to return\r
     * a negative value if first argument is less than second argument, zero if they're equal and a positive\r
     * value otherwise. If omitted, the elements are sorted in ascending order.\r
     * \`\`\`ts\r
     * [11,2,22,1].sort((a, b) => a - b)\r
     * \`\`\`\r
     */\r
    sort(compareFn?: (a: number, b: number) => number): this;\r
\r
    /**\r
     * Gets a new Uint32Array view of the ArrayBuffer store for this array, referencing the elements\r
     * at begin, inclusive, up to end, exclusive.\r
     * @param begin The index of the beginning of the array.\r
     * @param end The index of the end of the array.\r
     */\r
    subarray(begin?: number, end?: number): Uint32Array;\r
\r
    /**\r
     * Converts a number to a string by using the current locale.\r
     */\r
    toLocaleString(): string;\r
\r
    /**\r
     * Returns a string representation of an array.\r
     */\r
    toString(): string;\r
\r
    /** Returns the primitive value of the specified object. */\r
    valueOf(): Uint32Array;\r
\r
    [index: number]: number;\r
}\r
\r
interface Uint32ArrayConstructor {\r
    readonly prototype: Uint32Array;\r
    new(length: number): Uint32Array;\r
    new(array: ArrayLike<number> | ArrayBufferLike): Uint32Array;\r
    new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): Uint32Array;\r
\r
    /**\r
     * The size in bytes of each element in the array.\r
     */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /**\r
     * Returns a new array from a set of elements.\r
     * @param items A set of elements to include in the new array object.\r
     */\r
    of(...items: number[]): Uint32Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     */\r
    from(arrayLike: ArrayLike<number>): Uint32Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Uint32Array;\r
\r
}\r
declare var Uint32Array: Uint32ArrayConstructor;\r
\r
/**\r
 * A typed array of 32-bit float values. The contents are initialized to 0. If the requested number\r
 * of bytes could not be allocated an exception is raised.\r
 */\r
interface Float32Array {\r
    /**\r
     * The size in bytes of each element in the array.\r
     */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /**\r
     * The ArrayBuffer instance referenced by the array.\r
     */\r
    readonly buffer: ArrayBufferLike;\r
\r
    /**\r
     * The length in bytes of the array.\r
     */\r
    readonly byteLength: number;\r
\r
    /**\r
     * The offset in bytes of the array.\r
     */\r
    readonly byteOffset: number;\r
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
\r
    /**\r
     * Determines whether all the members of an array satisfy the specified test.\r
     * @param predicate A function that accepts up to three arguments. The every method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value false, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    every(predicate: (value: number, index: number, array: Float32Array) => unknown, thisArg?: any): boolean;\r
\r
    /**\r
     * Changes all array elements from \`start\` to \`end\` index to a static \`value\` and returns the modified array\r
     * @param value value to fill array section with\r
     * @param start index to start filling the array at. If start is negative, it is treated as\r
     * length+start where length is the length of the array.\r
     * @param end index to stop filling the array at. If end is negative, it is treated as\r
     * length+end.\r
     */\r
    fill(value: number, start?: number, end?: number): this;\r
\r
    /**\r
     * Returns the elements of an array that meet the condition specified in a callback function.\r
     * @param predicate A function that accepts up to three arguments. The filter method calls\r
     * the predicate function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    filter(predicate: (value: number, index: number, array: Float32Array) => any, thisArg?: any): Float32Array;\r
\r
    /**\r
     * Returns the value of the first element in the array where predicate is true, and undefined\r
     * otherwise.\r
     * @param predicate find calls predicate once for each element of the array, in ascending\r
     * order, until it finds one where predicate returns true. If such an element is found, find\r
     * immediately returns that element value. Otherwise, find returns undefined.\r
     * @param thisArg If provided, it will be used as the this value for each invocation of\r
     * predicate. If it is not provided, undefined is used instead.\r
     */\r
    find(predicate: (value: number, index: number, obj: Float32Array) => boolean, thisArg?: any): number | undefined;\r
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
    findIndex(predicate: (value: number, index: number, obj: Float32Array) => boolean, thisArg?: any): number;\r
\r
    /**\r
     * Performs the specified action for each element in an array.\r
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    forEach(callbackfn: (value: number, index: number, array: Float32Array) => void, thisArg?: any): void;\r
\r
    /**\r
     * Returns the index of the first occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     *  search starts at index 0.\r
     */\r
    indexOf(searchElement: number, fromIndex?: number): number;\r
\r
    /**\r
     * Adds all the elements of an array separated by the specified separator string.\r
     * @param separator A string used to separate one element of an array from the next in the\r
     * resulting String. If omitted, the array elements are separated with a comma.\r
     */\r
    join(separator?: string): string;\r
\r
    /**\r
     * Returns the index of the last occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     * search starts at index 0.\r
     */\r
    lastIndexOf(searchElement: number, fromIndex?: number): number;\r
\r
    /**\r
     * The length of the array.\r
     */\r
    readonly length: number;\r
\r
    /**\r
     * Calls a defined callback function on each element of an array, and returns an array that\r
     * contains the results.\r
     * @param callbackfn A function that accepts up to three arguments. The map method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the callbackfn function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    map(callbackfn: (value: number, index: number, array: Float32Array) => number, thisArg?: any): Float32Array;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of\r
     * the callback function is the accumulated result, and is provided as an argument in the next\r
     * call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number): number;\r
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number, initialValue: number): number;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of\r
     * the callback function is the accumulated result, and is provided as an argument in the next\r
     * call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Float32Array) => U, initialValue: U): U;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order.\r
     * The return value of the callback function is the accumulated result, and is provided as an\r
     * argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r
     * the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an\r
     * argument instead of an array value.\r
     */\r
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number): number;\r
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number, initialValue: number): number;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order.\r
     * The return value of the callback function is the accumulated result, and is provided as an\r
     * argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r
     * the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Float32Array) => U, initialValue: U): U;\r
\r
    /**\r
     * Reverses the elements in an Array.\r
     */\r
    reverse(): Float32Array;\r
\r
    /**\r
     * Sets a value or an array of values.\r
     * @param array A typed or untyped array of values to set.\r
     * @param offset The index in the current array at which the values are to be written.\r
     */\r
    set(array: ArrayLike<number>, offset?: number): void;\r
\r
    /**\r
     * Returns a section of an array.\r
     * @param start The beginning of the specified portion of the array.\r
     * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.\r
     */\r
    slice(start?: number, end?: number): Float32Array;\r
\r
    /**\r
     * Determines whether the specified callback function returns true for any element of an array.\r
     * @param predicate A function that accepts up to three arguments. The some method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value true, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    some(predicate: (value: number, index: number, array: Float32Array) => unknown, thisArg?: any): boolean;\r
\r
    /**\r
     * Sorts an array.\r
     * @param compareFn Function used to determine the order of the elements. It is expected to return\r
     * a negative value if first argument is less than second argument, zero if they're equal and a positive\r
     * value otherwise. If omitted, the elements are sorted in ascending order.\r
     * \`\`\`ts\r
     * [11,2,22,1].sort((a, b) => a - b)\r
     * \`\`\`\r
     */\r
    sort(compareFn?: (a: number, b: number) => number): this;\r
\r
    /**\r
     * Gets a new Float32Array view of the ArrayBuffer store for this array, referencing the elements\r
     * at begin, inclusive, up to end, exclusive.\r
     * @param begin The index of the beginning of the array.\r
     * @param end The index of the end of the array.\r
     */\r
    subarray(begin?: number, end?: number): Float32Array;\r
\r
    /**\r
     * Converts a number to a string by using the current locale.\r
     */\r
    toLocaleString(): string;\r
\r
    /**\r
     * Returns a string representation of an array.\r
     */\r
    toString(): string;\r
\r
    /** Returns the primitive value of the specified object. */\r
    valueOf(): Float32Array;\r
\r
    [index: number]: number;\r
}\r
\r
interface Float32ArrayConstructor {\r
    readonly prototype: Float32Array;\r
    new(length: number): Float32Array;\r
    new(array: ArrayLike<number> | ArrayBufferLike): Float32Array;\r
    new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): Float32Array;\r
\r
    /**\r
     * The size in bytes of each element in the array.\r
     */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /**\r
     * Returns a new array from a set of elements.\r
     * @param items A set of elements to include in the new array object.\r
     */\r
    of(...items: number[]): Float32Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     */\r
    from(arrayLike: ArrayLike<number>): Float32Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Float32Array;\r
\r
\r
}\r
declare var Float32Array: Float32ArrayConstructor;\r
\r
/**\r
 * A typed array of 64-bit float values. The contents are initialized to 0. If the requested\r
 * number of bytes could not be allocated an exception is raised.\r
 */\r
interface Float64Array {\r
    /**\r
     * The size in bytes of each element in the array.\r
     */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /**\r
     * The ArrayBuffer instance referenced by the array.\r
     */\r
    readonly buffer: ArrayBufferLike;\r
\r
    /**\r
     * The length in bytes of the array.\r
     */\r
    readonly byteLength: number;\r
\r
    /**\r
     * The offset in bytes of the array.\r
     */\r
    readonly byteOffset: number;\r
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
\r
    /**\r
     * Determines whether all the members of an array satisfy the specified test.\r
     * @param predicate A function that accepts up to three arguments. The every method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value false, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    every(predicate: (value: number, index: number, array: Float64Array) => unknown, thisArg?: any): boolean;\r
\r
    /**\r
     * Changes all array elements from \`start\` to \`end\` index to a static \`value\` and returns the modified array\r
     * @param value value to fill array section with\r
     * @param start index to start filling the array at. If start is negative, it is treated as\r
     * length+start where length is the length of the array.\r
     * @param end index to stop filling the array at. If end is negative, it is treated as\r
     * length+end.\r
     */\r
    fill(value: number, start?: number, end?: number): this;\r
\r
    /**\r
     * Returns the elements of an array that meet the condition specified in a callback function.\r
     * @param predicate A function that accepts up to three arguments. The filter method calls\r
     * the predicate function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    filter(predicate: (value: number, index: number, array: Float64Array) => any, thisArg?: any): Float64Array;\r
\r
    /**\r
     * Returns the value of the first element in the array where predicate is true, and undefined\r
     * otherwise.\r
     * @param predicate find calls predicate once for each element of the array, in ascending\r
     * order, until it finds one where predicate returns true. If such an element is found, find\r
     * immediately returns that element value. Otherwise, find returns undefined.\r
     * @param thisArg If provided, it will be used as the this value for each invocation of\r
     * predicate. If it is not provided, undefined is used instead.\r
     */\r
    find(predicate: (value: number, index: number, obj: Float64Array) => boolean, thisArg?: any): number | undefined;\r
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
    findIndex(predicate: (value: number, index: number, obj: Float64Array) => boolean, thisArg?: any): number;\r
\r
    /**\r
     * Performs the specified action for each element in an array.\r
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    forEach(callbackfn: (value: number, index: number, array: Float64Array) => void, thisArg?: any): void;\r
\r
    /**\r
     * Returns the index of the first occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     *  search starts at index 0.\r
     */\r
    indexOf(searchElement: number, fromIndex?: number): number;\r
\r
    /**\r
     * Adds all the elements of an array separated by the specified separator string.\r
     * @param separator A string used to separate one element of an array from the next in the\r
     * resulting String. If omitted, the array elements are separated with a comma.\r
     */\r
    join(separator?: string): string;\r
\r
    /**\r
     * Returns the index of the last occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     * search starts at index 0.\r
     */\r
    lastIndexOf(searchElement: number, fromIndex?: number): number;\r
\r
    /**\r
     * The length of the array.\r
     */\r
    readonly length: number;\r
\r
    /**\r
     * Calls a defined callback function on each element of an array, and returns an array that\r
     * contains the results.\r
     * @param callbackfn A function that accepts up to three arguments. The map method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the callbackfn function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    map(callbackfn: (value: number, index: number, array: Float64Array) => number, thisArg?: any): Float64Array;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of\r
     * the callback function is the accumulated result, and is provided as an argument in the next\r
     * call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float64Array) => number): number;\r
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float64Array) => number, initialValue: number): number;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of\r
     * the callback function is the accumulated result, and is provided as an argument in the next\r
     * call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Float64Array) => U, initialValue: U): U;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order.\r
     * The return value of the callback function is the accumulated result, and is provided as an\r
     * argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r
     * the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an\r
     * argument instead of an array value.\r
     */\r
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float64Array) => number): number;\r
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float64Array) => number, initialValue: number): number;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order.\r
     * The return value of the callback function is the accumulated result, and is provided as an\r
     * argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r
     * the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Float64Array) => U, initialValue: U): U;\r
\r
    /**\r
     * Reverses the elements in an Array.\r
     */\r
    reverse(): Float64Array;\r
\r
    /**\r
     * Sets a value or an array of values.\r
     * @param array A typed or untyped array of values to set.\r
     * @param offset The index in the current array at which the values are to be written.\r
     */\r
    set(array: ArrayLike<number>, offset?: number): void;\r
\r
    /**\r
     * Returns a section of an array.\r
     * @param start The beginning of the specified portion of the array.\r
     * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.\r
     */\r
    slice(start?: number, end?: number): Float64Array;\r
\r
    /**\r
     * Determines whether the specified callback function returns true for any element of an array.\r
     * @param predicate A function that accepts up to three arguments. The some method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value true, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    some(predicate: (value: number, index: number, array: Float64Array) => unknown, thisArg?: any): boolean;\r
\r
    /**\r
     * Sorts an array.\r
     * @param compareFn Function used to determine the order of the elements. It is expected to return\r
     * a negative value if first argument is less than second argument, zero if they're equal and a positive\r
     * value otherwise. If omitted, the elements are sorted in ascending order.\r
     * \`\`\`ts\r
     * [11,2,22,1].sort((a, b) => a - b)\r
     * \`\`\`\r
     */\r
    sort(compareFn?: (a: number, b: number) => number): this;\r
\r
    /**\r
     * at begin, inclusive, up to end, exclusive.\r
     * @param begin The index of the beginning of the array.\r
     * @param end The index of the end of the array.\r
     */\r
    subarray(begin?: number, end?: number): Float64Array;\r
\r
    toString(): string;\r
\r
    /** Returns the primitive value of the specified object. */\r
    valueOf(): Float64Array;\r
\r
    [index: number]: number;\r
}\r
\r
interface Float64ArrayConstructor {\r
    readonly prototype: Float64Array;\r
    new(length: number): Float64Array;\r
    new(array: ArrayLike<number> | ArrayBufferLike): Float64Array;\r
    new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): Float64Array;\r
\r
    /**\r
     * The size in bytes of each element in the array.\r
     */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /**\r
     * Returns a new array from a set of elements.\r
     * @param items A set of elements to include in the new array object.\r
     */\r
    of(...items: number[]): Float64Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     */\r
    from(arrayLike: ArrayLike<number>): Float64Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Float64Array;\r
\r
}\r
declare var Float64Array: Float64ArrayConstructor;\r
\r
/////////////////////////////\r
/// ECMAScript Internationalization API\r
/////////////////////////////\r
\r
declare namespace Intl {\r
    interface CollatorOptions {\r
        usage?: string | undefined;\r
        localeMatcher?: string | undefined;\r
        numeric?: boolean | undefined;\r
        caseFirst?: string | undefined;\r
        sensitivity?: string | undefined;\r
        ignorePunctuation?: boolean | undefined;\r
    }\r
\r
    interface ResolvedCollatorOptions {\r
        locale: string;\r
        usage: string;\r
        sensitivity: string;\r
        ignorePunctuation: boolean;\r
        collation: string;\r
        caseFirst: string;\r
        numeric: boolean;\r
    }\r
\r
    interface Collator {\r
        compare(x: string, y: string): number;\r
        resolvedOptions(): ResolvedCollatorOptions;\r
    }\r
    var Collator: {\r
        new(locales?: string | string[], options?: CollatorOptions): Collator;\r
        (locales?: string | string[], options?: CollatorOptions): Collator;\r
        supportedLocalesOf(locales: string | string[], options?: CollatorOptions): string[];\r
    };\r
\r
    interface NumberFormatOptions {\r
        localeMatcher?: string | undefined;\r
        style?: string | undefined;\r
        currency?: string | undefined;\r
        currencySign?: string | undefined;\r
        useGrouping?: boolean | undefined;\r
        minimumIntegerDigits?: number | undefined;\r
        minimumFractionDigits?: number | undefined;\r
        maximumFractionDigits?: number | undefined;\r
        minimumSignificantDigits?: number | undefined;\r
        maximumSignificantDigits?: number | undefined;\r
    }\r
\r
    interface ResolvedNumberFormatOptions {\r
        locale: string;\r
        numberingSystem: string;\r
        style: string;\r
        currency?: string;\r
        minimumIntegerDigits: number;\r
        minimumFractionDigits: number;\r
        maximumFractionDigits: number;\r
        minimumSignificantDigits?: number;\r
        maximumSignificantDigits?: number;\r
        useGrouping: boolean;\r
    }\r
\r
    interface NumberFormat {\r
        format(value: number): string;\r
        resolvedOptions(): ResolvedNumberFormatOptions;\r
    }\r
    var NumberFormat: {\r
        new(locales?: string | string[], options?: NumberFormatOptions): NumberFormat;\r
        (locales?: string | string[], options?: NumberFormatOptions): NumberFormat;\r
        supportedLocalesOf(locales: string | string[], options?: NumberFormatOptions): string[];\r
        readonly prototype: NumberFormat;\r
    };\r
\r
    interface DateTimeFormatOptions {\r
        localeMatcher?: "best fit" | "lookup" | undefined;\r
        weekday?: "long" | "short" | "narrow" | undefined;\r
        era?: "long" | "short" | "narrow" | undefined;\r
        year?: "numeric" | "2-digit" | undefined;\r
        month?: "numeric" | "2-digit" | "long" | "short" | "narrow" | undefined;\r
        day?: "numeric" | "2-digit" | undefined;\r
        hour?: "numeric" | "2-digit" | undefined;\r
        minute?: "numeric" | "2-digit" | undefined;\r
        second?: "numeric" | "2-digit" | undefined;\r
        timeZoneName?: "short" | "long" | "shortOffset" | "longOffset" | "shortGeneric" | "longGeneric" | undefined;\r
        formatMatcher?: "best fit" | "basic" | undefined;\r
        hour12?: boolean | undefined;\r
        timeZone?: string | undefined;\r
    }\r
\r
    interface ResolvedDateTimeFormatOptions {\r
        locale: string;\r
        calendar: string;\r
        numberingSystem: string;\r
        timeZone: string;\r
        hour12?: boolean;\r
        weekday?: string;\r
        era?: string;\r
        year?: string;\r
        month?: string;\r
        day?: string;\r
        hour?: string;\r
        minute?: string;\r
        second?: string;\r
        timeZoneName?: string;\r
    }\r
\r
    interface DateTimeFormat {\r
        format(date?: Date | number): string;\r
        resolvedOptions(): ResolvedDateTimeFormatOptions;\r
    }\r
    var DateTimeFormat: {\r
        new(locales?: string | string[], options?: DateTimeFormatOptions): DateTimeFormat;\r
        (locales?: string | string[], options?: DateTimeFormatOptions): DateTimeFormat;\r
        supportedLocalesOf(locales: string | string[], options?: DateTimeFormatOptions): string[];\r
        readonly prototype: DateTimeFormat;\r
    };\r
}\r
\r
interface String {\r
    /**\r
     * Determines whether two strings are equivalent in the current or specified locale.\r
     * @param that String to compare to target string\r
     * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details.\r
     * @param options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details.\r
     */\r
    localeCompare(that: string, locales?: string | string[], options?: Intl.CollatorOptions): number;\r
}\r
\r
interface Number {\r
    /**\r
     * Converts a number to a string by using the current or specified locale.\r
     * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.\r
     * @param options An object that contains one or more properties that specify comparison options.\r
     */\r
    toLocaleString(locales?: string | string[], options?: Intl.NumberFormatOptions): string;\r
}\r
\r
interface Date {\r
    /**\r
     * Converts a date and time to a string by using the current or specified locale.\r
     * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.\r
     * @param options An object that contains one or more properties that specify comparison options.\r
     */\r
    toLocaleString(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;\r
    /**\r
     * Converts a date to a string by using the current or specified locale.\r
     * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.\r
     * @param options An object that contains one or more properties that specify comparison options.\r
     */\r
    toLocaleDateString(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;\r
\r
    /**\r
     * Converts a time to a string by using the current or specified locale.\r
     * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.\r
     * @param options An object that contains one or more properties that specify comparison options.\r
     */\r
    toLocaleTimeString(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;\r
}\r
`;export{e as default};
