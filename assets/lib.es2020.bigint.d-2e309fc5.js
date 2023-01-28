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


/// <reference lib="es2020.intl" />\r
\r
interface BigIntToLocaleStringOptions {\r
    /**\r
     * The locale matching algorithm to use.The default is "best fit". For information about this option, see the {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation Intl page}.\r
     */\r
    localeMatcher?: string;\r
    /**\r
     * The formatting style to use , the default is "decimal".\r
     */\r
    style?: string;\r
\r
    numberingSystem?: string;\r
    /**\r
     * The unit to use in unit formatting, Possible values are core unit identifiers, defined in UTS #35, Part 2, Section 6. A subset of units from the full list was selected for use in ECMAScript. Pairs of simple units can be concatenated with "-per-" to make a compound unit. There is no default value; if the style is "unit", the unit property must be provided.\r
     */\r
    unit?: string;\r
\r
    /**\r
     * The unit formatting style to use in unit formatting, the defaults is "short".\r
     */\r
    unitDisplay?: string;\r
\r
    /**\r
     * The currency to use in currency formatting. Possible values are the ISO 4217 currency codes, such as "USD" for the US dollar, "EUR" for the euro, or "CNY" for the Chinese RMB — see the Current currency & funds code list. There is no default value; if the style is "currency", the currency property must be provided. It is only used when [[Style]] has the value "currency".\r
     */\r
    currency?: string;\r
\r
    /**\r
     * How to display the currency in currency formatting. It is only used when [[Style]] has the value "currency". The default is "symbol".\r
     *\r
     * "symbol" to use a localized currency symbol such as €,\r
     *\r
     * "code" to use the ISO currency code,\r
     *\r
     * "name" to use a localized currency name such as "dollar"\r
     */\r
    currencyDisplay?: string;\r
\r
    /**\r
     * Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators. The default is true.\r
     */\r
    useGrouping?: boolean;\r
\r
    /**\r
     * The minimum number of integer digits to use. Possible values are from 1 to 21; the default is 1.\r
     */\r
    minimumIntegerDigits?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21;\r
\r
    /**\r
     * The minimum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number and percent formatting is 0; the default for currency formatting is the number of minor unit digits provided by the {@link http://www.currency-iso.org/en/home/tables/table-a1.html ISO 4217 currency codes list} (2 if the list doesn't provide that information).\r
     */\r
    minimumFractionDigits?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;\r
\r
    /**\r
     * The maximum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number formatting is the larger of minimumFractionDigits and 3; the default for currency formatting is the larger of minimumFractionDigits and the number of minor unit digits provided by the {@link http://www.currency-iso.org/en/home/tables/table-a1.html ISO 4217 currency codes list} (2 if the list doesn't provide that information); the default for percent formatting is the larger of minimumFractionDigits and 0.\r
     */\r
    maximumFractionDigits?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;\r
\r
    /**\r
     * The minimum number of significant digits to use. Possible values are from 1 to 21; the default is 1.\r
     */\r
    minimumSignificantDigits?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21;\r
\r
    /**\r
     * The maximum number of significant digits to use. Possible values are from 1 to 21; the default is 21.\r
     */\r
    maximumSignificantDigits?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21;\r
\r
    /**\r
     * The formatting that should be displayed for the number, the defaults is "standard"\r
     *\r
     *     "standard" plain number formatting\r
     *\r
     *     "scientific" return the order-of-magnitude for formatted number.\r
     *\r
     *     "engineering" return the exponent of ten when divisible by three\r
     *\r
     *     "compact" string representing exponent, defaults is using the "short" form\r
     */\r
    notation?: string;\r
\r
    /**\r
     * used only when notation is "compact"\r
     */\r
    compactDisplay?: string;\r
}\r
\r
interface BigInt {\r
    /**\r
     * Returns a string representation of an object.\r
     * @param radix Specifies a radix for converting numeric values to strings.\r
     */\r
    toString(radix?: number): string;\r
\r
    /** Returns a string representation appropriate to the host environment's current locale. */\r
    toLocaleString(locales?: Intl.LocalesArgument, options?: BigIntToLocaleStringOptions): string;\r
\r
    /** Returns the primitive value of the specified object. */\r
    valueOf(): bigint;\r
\r
    readonly [Symbol.toStringTag]: "BigInt";\r
}\r
\r
interface BigIntConstructor {\r
    (value: bigint | boolean | number | string): bigint;\r
    readonly prototype: BigInt;\r
\r
    /**\r
     * Interprets the low bits of a BigInt as a 2's-complement signed integer.\r
     * All higher bits are discarded.\r
     * @param bits The number of low bits to use\r
     * @param int The BigInt whose bits to extract\r
     */\r
    asIntN(bits: number, int: bigint): bigint;\r
    /**\r
     * Interprets the low bits of a BigInt as an unsigned integer.\r
     * All higher bits are discarded.\r
     * @param bits The number of low bits to use\r
     * @param int The BigInt whose bits to extract\r
     */\r
    asUintN(bits: number, int: bigint): bigint;\r
}\r
\r
declare var BigInt: BigIntConstructor;\r
\r
/**\r
 * A typed array of 64-bit signed integer values. The contents are initialized to 0. If the\r
 * requested number of bytes could not be allocated, an exception is raised.\r
 */\r
interface BigInt64Array {\r
    /** The size in bytes of each element in the array. */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /** The ArrayBuffer instance referenced by the array. */\r
    readonly buffer: ArrayBufferLike;\r
\r
    /** The length in bytes of the array. */\r
    readonly byteLength: number;\r
\r
    /** The offset in bytes of the array. */\r
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
    /** Yields index, value pairs for every entry in the array. */\r
    entries(): IterableIterator<[number, bigint]>;\r
\r
    /**\r
     * Determines whether all the members of an array satisfy the specified test.\r
     * @param predicate A function that accepts up to three arguments. The every method calls\r
     * the predicate function for each element in the array until the predicate returns false,\r
     * or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    every(predicate: (value: bigint, index: number, array: BigInt64Array) => boolean, thisArg?: any): boolean;\r
\r
    /**\r
     * Changes all array elements from \`start\` to \`end\` index to a static \`value\` and returns the modified array\r
     * @param value value to fill array section with\r
     * @param start index to start filling the array at. If start is negative, it is treated as\r
     * length+start where length is the length of the array.\r
     * @param end index to stop filling the array at. If end is negative, it is treated as\r
     * length+end.\r
     */\r
    fill(value: bigint, start?: number, end?: number): this;\r
\r
    /**\r
     * Returns the elements of an array that meet the condition specified in a callback function.\r
     * @param predicate A function that accepts up to three arguments. The filter method calls\r
     * the predicate function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    filter(predicate: (value: bigint, index: number, array: BigInt64Array) => any, thisArg?: any): BigInt64Array;\r
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
    find(predicate: (value: bigint, index: number, array: BigInt64Array) => boolean, thisArg?: any): bigint | undefined;\r
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
    findIndex(predicate: (value: bigint, index: number, array: BigInt64Array) => boolean, thisArg?: any): number;\r
\r
    /**\r
     * Performs the specified action for each element in an array.\r
     * @param callbackfn A function that accepts up to three arguments. forEach calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the callbackfn function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    forEach(callbackfn: (value: bigint, index: number, array: BigInt64Array) => void, thisArg?: any): void;\r
\r
    /**\r
     * Determines whether an array includes a certain element, returning true or false as appropriate.\r
     * @param searchElement The element to search for.\r
     * @param fromIndex The position in this array at which to begin searching for searchElement.\r
     */\r
    includes(searchElement: bigint, fromIndex?: number): boolean;\r
\r
    /**\r
     * Returns the index of the first occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     * search starts at index 0.\r
     */\r
    indexOf(searchElement: bigint, fromIndex?: number): number;\r
\r
    /**\r
     * Adds all the elements of an array separated by the specified separator string.\r
     * @param separator A string used to separate one element of an array from the next in the\r
     * resulting String. If omitted, the array elements are separated with a comma.\r
     */\r
    join(separator?: string): string;\r
\r
    /** Yields each index in the array. */\r
    keys(): IterableIterator<number>;\r
\r
    /**\r
     * Returns the index of the last occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     * search starts at index 0.\r
     */\r
    lastIndexOf(searchElement: bigint, fromIndex?: number): number;\r
\r
    /** The length of the array. */\r
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
    map(callbackfn: (value: bigint, index: number, array: BigInt64Array) => bigint, thisArg?: any): BigInt64Array;\r
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
    reduce(callbackfn: (previousValue: bigint, currentValue: bigint, currentIndex: number, array: BigInt64Array) => bigint): bigint;\r
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
    reduce<U>(callbackfn: (previousValue: U, currentValue: bigint, currentIndex: number, array: BigInt64Array) => U, initialValue: U): U;\r
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
    reduceRight(callbackfn: (previousValue: bigint, currentValue: bigint, currentIndex: number, array: BigInt64Array) => bigint): bigint;\r
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
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: bigint, currentIndex: number, array: BigInt64Array) => U, initialValue: U): U;\r
\r
    /** Reverses the elements in the array. */\r
    reverse(): this;\r
\r
    /**\r
     * Sets a value or an array of values.\r
     * @param array A typed or untyped array of values to set.\r
     * @param offset The index in the current array at which the values are to be written.\r
     */\r
    set(array: ArrayLike<bigint>, offset?: number): void;\r
\r
    /**\r
     * Returns a section of an array.\r
     * @param start The beginning of the specified portion of the array.\r
     * @param end The end of the specified portion of the array.\r
     */\r
    slice(start?: number, end?: number): BigInt64Array;\r
\r
    /**\r
     * Determines whether the specified callback function returns true for any element of an array.\r
     * @param predicate A function that accepts up to three arguments. The some method calls the\r
     * predicate function for each element in the array until the predicate returns true, or until\r
     * the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    some(predicate: (value: bigint, index: number, array: BigInt64Array) => boolean, thisArg?: any): boolean;\r
\r
    /**\r
     * Sorts the array.\r
     * @param compareFn The function used to determine the order of the elements. If omitted, the elements are sorted in ascending order.\r
     */\r
    sort(compareFn?: (a: bigint, b: bigint) => number | bigint): this;\r
\r
    /**\r
     * Gets a new BigInt64Array view of the ArrayBuffer store for this array, referencing the elements\r
     * at begin, inclusive, up to end, exclusive.\r
     * @param begin The index of the beginning of the array.\r
     * @param end The index of the end of the array.\r
     */\r
    subarray(begin?: number, end?: number): BigInt64Array;\r
\r
    /** Converts the array to a string by using the current locale. */\r
    toLocaleString(): string;\r
\r
    /** Returns a string representation of the array. */\r
    toString(): string;\r
\r
    /** Returns the primitive value of the specified object. */\r
    valueOf(): BigInt64Array;\r
\r
    /** Yields each value in the array. */\r
    values(): IterableIterator<bigint>;\r
\r
    [Symbol.iterator](): IterableIterator<bigint>;\r
\r
    readonly [Symbol.toStringTag]: "BigInt64Array";\r
\r
    [index: number]: bigint;\r
}\r
\r
interface BigInt64ArrayConstructor {\r
    readonly prototype: BigInt64Array;\r
    new(length?: number): BigInt64Array;\r
    new(array: Iterable<bigint>): BigInt64Array;\r
    new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): BigInt64Array;\r
\r
    /** The size in bytes of each element in the array. */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /**\r
     * Returns a new array from a set of elements.\r
     * @param items A set of elements to include in the new array object.\r
     */\r
    of(...items: bigint[]): BigInt64Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from(arrayLike: ArrayLike<bigint>): BigInt64Array;\r
    from<U>(arrayLike: ArrayLike<U>, mapfn: (v: U, k: number) => bigint, thisArg?: any): BigInt64Array;\r
}\r
\r
declare var BigInt64Array: BigInt64ArrayConstructor;\r
\r
/**\r
 * A typed array of 64-bit unsigned integer values. The contents are initialized to 0. If the\r
 * requested number of bytes could not be allocated, an exception is raised.\r
 */\r
interface BigUint64Array {\r
    /** The size in bytes of each element in the array. */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /** The ArrayBuffer instance referenced by the array. */\r
    readonly buffer: ArrayBufferLike;\r
\r
    /** The length in bytes of the array. */\r
    readonly byteLength: number;\r
\r
    /** The offset in bytes of the array. */\r
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
    /** Yields index, value pairs for every entry in the array. */\r
    entries(): IterableIterator<[number, bigint]>;\r
\r
    /**\r
     * Determines whether all the members of an array satisfy the specified test.\r
     * @param predicate A function that accepts up to three arguments. The every method calls\r
     * the predicate function for each element in the array until the predicate returns false,\r
     * or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    every(predicate: (value: bigint, index: number, array: BigUint64Array) => boolean, thisArg?: any): boolean;\r
\r
    /**\r
     * Changes all array elements from \`start\` to \`end\` index to a static \`value\` and returns the modified array\r
     * @param value value to fill array section with\r
     * @param start index to start filling the array at. If start is negative, it is treated as\r
     * length+start where length is the length of the array.\r
     * @param end index to stop filling the array at. If end is negative, it is treated as\r
     * length+end.\r
     */\r
    fill(value: bigint, start?: number, end?: number): this;\r
\r
    /**\r
     * Returns the elements of an array that meet the condition specified in a callback function.\r
     * @param predicate A function that accepts up to three arguments. The filter method calls\r
     * the predicate function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    filter(predicate: (value: bigint, index: number, array: BigUint64Array) => any, thisArg?: any): BigUint64Array;\r
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
    find(predicate: (value: bigint, index: number, array: BigUint64Array) => boolean, thisArg?: any): bigint | undefined;\r
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
    findIndex(predicate: (value: bigint, index: number, array: BigUint64Array) => boolean, thisArg?: any): number;\r
\r
    /**\r
     * Performs the specified action for each element in an array.\r
     * @param callbackfn A function that accepts up to three arguments. forEach calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the callbackfn function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    forEach(callbackfn: (value: bigint, index: number, array: BigUint64Array) => void, thisArg?: any): void;\r
\r
    /**\r
     * Determines whether an array includes a certain element, returning true or false as appropriate.\r
     * @param searchElement The element to search for.\r
     * @param fromIndex The position in this array at which to begin searching for searchElement.\r
     */\r
    includes(searchElement: bigint, fromIndex?: number): boolean;\r
\r
    /**\r
     * Returns the index of the first occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     * search starts at index 0.\r
     */\r
    indexOf(searchElement: bigint, fromIndex?: number): number;\r
\r
    /**\r
     * Adds all the elements of an array separated by the specified separator string.\r
     * @param separator A string used to separate one element of an array from the next in the\r
     * resulting String. If omitted, the array elements are separated with a comma.\r
     */\r
    join(separator?: string): string;\r
\r
    /** Yields each index in the array. */\r
    keys(): IterableIterator<number>;\r
\r
    /**\r
     * Returns the index of the last occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     * search starts at index 0.\r
     */\r
    lastIndexOf(searchElement: bigint, fromIndex?: number): number;\r
\r
    /** The length of the array. */\r
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
    map(callbackfn: (value: bigint, index: number, array: BigUint64Array) => bigint, thisArg?: any): BigUint64Array;\r
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
    reduce(callbackfn: (previousValue: bigint, currentValue: bigint, currentIndex: number, array: BigUint64Array) => bigint): bigint;\r
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
    reduce<U>(callbackfn: (previousValue: U, currentValue: bigint, currentIndex: number, array: BigUint64Array) => U, initialValue: U): U;\r
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
    reduceRight(callbackfn: (previousValue: bigint, currentValue: bigint, currentIndex: number, array: BigUint64Array) => bigint): bigint;\r
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
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: bigint, currentIndex: number, array: BigUint64Array) => U, initialValue: U): U;\r
\r
    /** Reverses the elements in the array. */\r
    reverse(): this;\r
\r
    /**\r
     * Sets a value or an array of values.\r
     * @param array A typed or untyped array of values to set.\r
     * @param offset The index in the current array at which the values are to be written.\r
     */\r
    set(array: ArrayLike<bigint>, offset?: number): void;\r
\r
    /**\r
     * Returns a section of an array.\r
     * @param start The beginning of the specified portion of the array.\r
     * @param end The end of the specified portion of the array.\r
     */\r
    slice(start?: number, end?: number): BigUint64Array;\r
\r
    /**\r
     * Determines whether the specified callback function returns true for any element of an array.\r
     * @param predicate A function that accepts up to three arguments. The some method calls the\r
     * predicate function for each element in the array until the predicate returns true, or until\r
     * the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    some(predicate: (value: bigint, index: number, array: BigUint64Array) => boolean, thisArg?: any): boolean;\r
\r
    /**\r
     * Sorts the array.\r
     * @param compareFn The function used to determine the order of the elements. If omitted, the elements are sorted in ascending order.\r
     */\r
    sort(compareFn?: (a: bigint, b: bigint) => number | bigint): this;\r
\r
    /**\r
     * Gets a new BigUint64Array view of the ArrayBuffer store for this array, referencing the elements\r
     * at begin, inclusive, up to end, exclusive.\r
     * @param begin The index of the beginning of the array.\r
     * @param end The index of the end of the array.\r
     */\r
    subarray(begin?: number, end?: number): BigUint64Array;\r
\r
    /** Converts the array to a string by using the current locale. */\r
    toLocaleString(): string;\r
\r
    /** Returns a string representation of the array. */\r
    toString(): string;\r
\r
    /** Returns the primitive value of the specified object. */\r
    valueOf(): BigUint64Array;\r
\r
    /** Yields each value in the array. */\r
    values(): IterableIterator<bigint>;\r
\r
    [Symbol.iterator](): IterableIterator<bigint>;\r
\r
    readonly [Symbol.toStringTag]: "BigUint64Array";\r
\r
    [index: number]: bigint;\r
}\r
\r
interface BigUint64ArrayConstructor {\r
    readonly prototype: BigUint64Array;\r
    new(length?: number): BigUint64Array;\r
    new(array: Iterable<bigint>): BigUint64Array;\r
    new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): BigUint64Array;\r
\r
    /** The size in bytes of each element in the array. */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /**\r
     * Returns a new array from a set of elements.\r
     * @param items A set of elements to include in the new array object.\r
     */\r
    of(...items: bigint[]): BigUint64Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from(arrayLike: ArrayLike<bigint>): BigUint64Array;\r
    from<U>(arrayLike: ArrayLike<U>, mapfn: (v: U, k: number) => bigint, thisArg?: any): BigUint64Array;\r
}\r
\r
declare var BigUint64Array: BigUint64ArrayConstructor;\r
\r
interface DataView {\r
    /**\r
     * Gets the BigInt64 value at the specified byte offset from the start of the view. There is\r
     * no alignment constraint; multi-byte values may be fetched from any offset.\r
     * @param byteOffset The place in the buffer at which the value should be retrieved.\r
     * @param littleEndian If false or undefined, a big-endian value should be read.\r
     */\r
    getBigInt64(byteOffset: number, littleEndian?: boolean): bigint;\r
\r
    /**\r
     * Gets the BigUint64 value at the specified byte offset from the start of the view. There is\r
     * no alignment constraint; multi-byte values may be fetched from any offset.\r
     * @param byteOffset The place in the buffer at which the value should be retrieved.\r
     * @param littleEndian If false or undefined, a big-endian value should be read.\r
     */\r
    getBigUint64(byteOffset: number, littleEndian?: boolean): bigint;\r
\r
    /**\r
     * Stores a BigInt64 value at the specified byte offset from the start of the view.\r
     * @param byteOffset The place in the buffer at which the value should be set.\r
     * @param value The value to set.\r
     * @param littleEndian If false or undefined, a big-endian value should be written.\r
     */\r
    setBigInt64(byteOffset: number, value: bigint, littleEndian?: boolean): void;\r
\r
    /**\r
     * Stores a BigUint64 value at the specified byte offset from the start of the view.\r
     * @param byteOffset The place in the buffer at which the value should be set.\r
     * @param value The value to set.\r
     * @param littleEndian If false or undefined, a big-endian value should be written.\r
     */\r
    setBigUint64(byteOffset: number, value: bigint, littleEndian?: boolean): void;\r
}\r
\r
declare namespace Intl{\r
    interface NumberFormat {\r
        format(value: number | bigint): string;\r
        resolvedOptions(): ResolvedNumberFormatOptions;\r
    }\r
}\r
`;export{e as default};
