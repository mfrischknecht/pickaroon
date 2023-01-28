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


interface ProxyHandler<T extends object> {\r
    /**\r
     * A trap method for a function call.\r
     * @param target The original callable object which is being proxied.\r
     */\r
    apply?(target: T, thisArg: any, argArray: any[]): any;\r
\r
    /**\r
     * A trap for the \`new\` operator.\r
     * @param target The original object which is being proxied.\r
     * @param newTarget The constructor that was originally called.\r
     */\r
    construct?(target: T, argArray: any[], newTarget: Function): object;\r
\r
    /**\r
     * A trap for \`Object.defineProperty()\`.\r
     * @param target The original object which is being proxied.\r
     * @returns A \`Boolean\` indicating whether or not the property has been defined.\r
     */\r
    defineProperty?(target: T, property: string | symbol, attributes: PropertyDescriptor): boolean;\r
\r
    /**\r
     * A trap for the \`delete\` operator.\r
     * @param target The original object which is being proxied.\r
     * @param p The name or \`Symbol\` of the property to delete.\r
     * @returns A \`Boolean\` indicating whether or not the property was deleted.\r
     */\r
    deleteProperty?(target: T, p: string | symbol): boolean;\r
\r
    /**\r
     * A trap for getting a property value.\r
     * @param target The original object which is being proxied.\r
     * @param p The name or \`Symbol\` of the property to get.\r
     * @param receiver The proxy or an object that inherits from the proxy.\r
     */\r
    get?(target: T, p: string | symbol, receiver: any): any;\r
\r
    /**\r
     * A trap for \`Object.getOwnPropertyDescriptor()\`.\r
     * @param target The original object which is being proxied.\r
     * @param p The name of the property whose description should be retrieved.\r
     */\r
    getOwnPropertyDescriptor?(target: T, p: string | symbol): PropertyDescriptor | undefined;\r
\r
    /**\r
     * A trap for the \`[[GetPrototypeOf]]\` internal method.\r
     * @param target The original object which is being proxied.\r
     */\r
    getPrototypeOf?(target: T): object | null;\r
\r
    /**\r
     * A trap for the \`in\` operator.\r
     * @param target The original object which is being proxied.\r
     * @param p The name or \`Symbol\` of the property to check for existence.\r
     */\r
    has?(target: T, p: string | symbol): boolean;\r
\r
    /**\r
     * A trap for \`Object.isExtensible()\`.\r
     * @param target The original object which is being proxied.\r
     */\r
    isExtensible?(target: T): boolean;\r
\r
    /**\r
     * A trap for \`Reflect.ownKeys()\`.\r
     * @param target The original object which is being proxied.\r
     */\r
    ownKeys?(target: T): ArrayLike<string | symbol>;\r
\r
    /**\r
     * A trap for \`Object.preventExtensions()\`.\r
     * @param target The original object which is being proxied.\r
     */\r
    preventExtensions?(target: T): boolean;\r
\r
    /**\r
     * A trap for setting a property value.\r
     * @param target The original object which is being proxied.\r
     * @param p The name or \`Symbol\` of the property to set.\r
     * @param receiver The object to which the assignment was originally directed.\r
     * @returns A \`Boolean\` indicating whether or not the property was set.\r
     */\r
    set?(target: T, p: string | symbol, newValue: any, receiver: any): boolean;\r
\r
    /**\r
     * A trap for \`Object.setPrototypeOf()\`.\r
     * @param target The original object which is being proxied.\r
     * @param newPrototype The object's new prototype or \`null\`.\r
     */\r
    setPrototypeOf?(target: T, v: object | null): boolean;\r
}\r
\r
interface ProxyConstructor {\r
    /**\r
     * Creates a revocable Proxy object.\r
     * @param target A target object to wrap with Proxy.\r
     * @param handler An object whose properties define the behavior of Proxy when an operation is attempted on it.\r
     */\r
    revocable<T extends object>(target: T, handler: ProxyHandler<T>): { proxy: T; revoke: () => void; };\r
\r
    /**\r
     * Creates a Proxy object. The Proxy object allows you to create an object that can be used in place of the\r
     * original object, but which may redefine fundamental Object operations like getting, setting, and defining\r
     * properties. Proxy objects are commonly used to log property accesses, validate, format, or sanitize inputs.\r
     * @param target A target object to wrap with Proxy.\r
     * @param handler An object whose properties define the behavior of Proxy when an operation is attempted on it.\r
     */\r
    new <T extends object>(target: T, handler: ProxyHandler<T>): T;\r
}\r
declare var Proxy: ProxyConstructor;\r
`;export{r as default};
