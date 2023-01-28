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


interface Map<K, V> {\r
\r
    clear(): void;\r
    /**\r
     * @returns true if an element in the Map existed and has been removed, or false if the element does not exist.\r
     */\r
    delete(key: K): boolean;\r
    /**\r
     * Executes a provided function once per each key/value pair in the Map, in insertion order.\r
     */\r
    forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;\r
    /**\r
     * Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.\r
     * @returns Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.\r
     */\r
    get(key: K): V | undefined;\r
    /**\r
     * @returns boolean indicating whether an element with the specified key exists or not.\r
     */\r
    has(key: K): boolean;\r
    /**\r
     * Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.\r
     */\r
    set(key: K, value: V): this;\r
    /**\r
     * @returns the number of elements in the Map.\r
     */\r
    readonly size: number;\r
}\r
\r
interface MapConstructor {\r
    new(): Map<any, any>;\r
    new <K, V>(entries?: readonly (readonly [K, V])[] | null): Map<K, V>;\r
    readonly prototype: Map<any, any>;\r
}\r
declare var Map: MapConstructor;\r
\r
interface ReadonlyMap<K, V> {\r
    forEach(callbackfn: (value: V, key: K, map: ReadonlyMap<K, V>) => void, thisArg?: any): void;\r
    get(key: K): V | undefined;\r
    has(key: K): boolean;\r
    readonly size: number;\r
}\r
\r
interface WeakMap<K extends object, V> {\r
    /**\r
     * Removes the specified element from the WeakMap.\r
     * @returns true if the element was successfully removed, or false if it was not present.\r
     */\r
    delete(key: K): boolean;\r
    /**\r
     * @returns a specified element.\r
     */\r
    get(key: K): V | undefined;\r
    /**\r
     * @returns a boolean indicating whether an element with the specified key exists or not.\r
     */\r
    has(key: K): boolean;\r
    /**\r
     * Adds a new element with a specified key and value.\r
     * @param key Must be an object.\r
     */\r
    set(key: K, value: V): this;\r
}\r
\r
interface WeakMapConstructor {\r
    new <K extends object = object, V = any>(entries?: readonly [K, V][] | null): WeakMap<K, V>;\r
    readonly prototype: WeakMap<object, any>;\r
}\r
declare var WeakMap: WeakMapConstructor;\r
\r
interface Set<T> {\r
    /**\r
     * Appends a new element with a specified value to the end of the Set.\r
     */\r
    add(value: T): this;\r
\r
    clear(): void;\r
    /**\r
     * Removes a specified value from the Set.\r
     * @returns Returns true if an element in the Set existed and has been removed, or false if the element does not exist.\r
     */\r
    delete(value: T): boolean;\r
    /**\r
     * Executes a provided function once per each value in the Set object, in insertion order.\r
     */\r
    forEach(callbackfn: (value: T, value2: T, set: Set<T>) => void, thisArg?: any): void;\r
    /**\r
     * @returns a boolean indicating whether an element with the specified value exists in the Set or not.\r
     */\r
    has(value: T): boolean;\r
    /**\r
     * @returns the number of (unique) elements in Set.\r
     */\r
    readonly size: number;\r
}\r
\r
interface SetConstructor {\r
    new <T = any>(values?: readonly T[] | null): Set<T>;\r
    readonly prototype: Set<any>;\r
}\r
declare var Set: SetConstructor;\r
\r
interface ReadonlySet<T> {\r
    forEach(callbackfn: (value: T, value2: T, set: ReadonlySet<T>) => void, thisArg?: any): void;\r
    has(value: T): boolean;\r
    readonly size: number;\r
}\r
\r
interface WeakSet<T extends object> {\r
    /**\r
     * Appends a new object to the end of the WeakSet.\r
     */\r
    add(value: T): this;\r
    /**\r
     * Removes the specified element from the WeakSet.\r
     * @returns Returns true if the element existed and has been removed, or false if the element does not exist.\r
     */\r
    delete(value: T): boolean;\r
    /**\r
     * @returns a boolean indicating whether an object exists in the WeakSet or not.\r
     */\r
    has(value: T): boolean;\r
}\r
\r
interface WeakSetConstructor {\r
    new <T extends object = object>(values?: readonly T[] | null): WeakSet<T>;\r
    readonly prototype: WeakSet<object>;\r
}\r
declare var WeakSet: WeakSetConstructor;\r
`;export{e as default};
