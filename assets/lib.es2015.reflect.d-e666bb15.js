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


declare namespace Reflect {\r
    /**\r
     * Calls the function with the specified object as the this value\r
     * and the elements of specified array as the arguments.\r
     * @param target The function to call.\r
     * @param thisArgument The object to be used as the this object.\r
     * @param argumentsList An array of argument values to be passed to the function.\r
     */\r
    function apply<T, A extends readonly any[], R>(\r
        target: (this: T, ...args: A) => R,\r
        thisArgument: T,\r
        argumentsList: Readonly<A>,\r
    ): R;\r
    function apply(target: Function, thisArgument: any, argumentsList: ArrayLike<any>): any;\r
\r
    /**\r
     * Constructs the target with the elements of specified array as the arguments\r
     * and the specified constructor as the \`new.target\` value.\r
     * @param target The constructor to invoke.\r
     * @param argumentsList An array of argument values to be passed to the constructor.\r
     * @param newTarget The constructor to be used as the \`new.target\` object.\r
     */\r
    function construct<A extends readonly any[], R>(\r
        target: new (...args: A) => R,\r
        argumentsList: Readonly<A>,\r
        newTarget?: new (...args: any) => any,\r
    ): R;\r
    function construct(target: Function, argumentsList: ArrayLike<any>, newTarget?: Function): any;\r
\r
    /**\r
     * Adds a property to an object, or modifies attributes of an existing property.\r
     * @param target Object on which to add or modify the property. This can be a native JavaScript object\r
     *        (that is, a user-defined object or a built in object) or a DOM object.\r
     * @param propertyKey The property name.\r
     * @param attributes Descriptor for the property. It can be for a data property or an accessor property.\r
     */\r
    function defineProperty(target: object, propertyKey: PropertyKey, attributes: PropertyDescriptor & ThisType<any>): boolean;\r
\r
    /**\r
     * Removes a property from an object, equivalent to \`delete target[propertyKey]\`,\r
     * except it won't throw if \`target[propertyKey]\` is non-configurable.\r
     * @param target Object from which to remove the own property.\r
     * @param propertyKey The property name.\r
     */\r
    function deleteProperty(target: object, propertyKey: PropertyKey): boolean;\r
\r
    /**\r
     * Gets the property of target, equivalent to \`target[propertyKey]\` when \`receiver === target\`.\r
     * @param target Object that contains the property on itself or in its prototype chain.\r
     * @param propertyKey The property name.\r
     * @param receiver The reference to use as the \`this\` value in the getter function,\r
     *        if \`target[propertyKey]\` is an accessor property.\r
     */\r
    function get<T extends object, P extends PropertyKey>(\r
        target: T,\r
        propertyKey: P,\r
        receiver?: unknown,\r
    ): P extends keyof T ? T[P] : any;\r
\r
    /**\r
     * Gets the own property descriptor of the specified object.\r
     * An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.\r
     * @param target Object that contains the property.\r
     * @param propertyKey The property name.\r
     */\r
    function getOwnPropertyDescriptor<T extends object, P extends PropertyKey>(\r
        target: T,\r
        propertyKey: P,\r
    ): TypedPropertyDescriptor<P extends keyof T ? T[P] : any> | undefined;\r
\r
    /**\r
     * Returns the prototype of an object.\r
     * @param target The object that references the prototype.\r
     */\r
    function getPrototypeOf(target: object): object | null;\r
\r
    /**\r
     * Equivalent to \`propertyKey in target\`.\r
     * @param target Object that contains the property on itself or in its prototype chain.\r
     * @param propertyKey Name of the property.\r
     */\r
    function has(target: object, propertyKey: PropertyKey): boolean;\r
\r
    /**\r
     * Returns a value that indicates whether new properties can be added to an object.\r
     * @param target Object to test.\r
     */\r
    function isExtensible(target: object): boolean;\r
\r
    /**\r
     * Returns the string and symbol keys of the own properties of an object. The own properties of an object\r
     * are those that are defined directly on that object, and are not inherited from the object's prototype.\r
     * @param target Object that contains the own properties.\r
     */\r
    function ownKeys(target: object): (string | symbol)[];\r
\r
    /**\r
     * Prevents the addition of new properties to an object.\r
     * @param target Object to make non-extensible.\r
     * @return Whether the object has been made non-extensible.\r
     */\r
    function preventExtensions(target: object): boolean;\r
\r
    /**\r
     * Sets the property of target, equivalent to \`target[propertyKey] = value\` when \`receiver === target\`.\r
     * @param target Object that contains the property on itself or in its prototype chain.\r
     * @param propertyKey Name of the property.\r
     * @param receiver The reference to use as the \`this\` value in the setter function,\r
     *        if \`target[propertyKey]\` is an accessor property.\r
     */\r
    function set<T extends object, P extends PropertyKey>(\r
        target: T,\r
        propertyKey: P,\r
        value: P extends keyof T ? T[P] : any,\r
        receiver?: any,\r
    ): boolean;\r
    function set(target: object, propertyKey: PropertyKey, value: any, receiver?: any): boolean;\r
\r
    /**\r
     * Sets the prototype of a specified object o to object proto or null.\r
     * @param target The object to change its prototype.\r
     * @param proto The value of the new prototype or null.\r
     * @return Whether setting the prototype was successful.\r
     */\r
    function setPrototypeOf(target: object, proto: object | null): boolean;\r
}\r
`;export{e as default};
