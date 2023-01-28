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


interface WeakRef<T extends object> {\r
    readonly [Symbol.toStringTag]: "WeakRef";\r
\r
    /**\r
     * Returns the WeakRef instance's target object, or undefined if the target object has been\r
     * reclaimed.\r
     */\r
    deref(): T | undefined;\r
}\r
\r
interface WeakRefConstructor {\r
    readonly prototype: WeakRef<any>;\r
\r
    /**\r
     * Creates a WeakRef instance for the given target object.\r
     * @param target The target object for the WeakRef instance.\r
     */\r
    new<T extends object>(target: T): WeakRef<T>;\r
}\r
\r
declare var WeakRef: WeakRefConstructor;\r
\r
interface FinalizationRegistry<T> {\r
    readonly [Symbol.toStringTag]: "FinalizationRegistry";\r
\r
    /**\r
     * Registers an object with the registry.\r
     * @param target The target object to register.\r
     * @param heldValue The value to pass to the finalizer for this object. This cannot be the\r
     * target object.\r
     * @param unregisterToken The token to pass to the unregister method to unregister the target\r
     * object. If provided (and not undefined), this must be an object. If not provided, the target\r
     * cannot be unregistered.\r
     */\r
    register(target: object, heldValue: T, unregisterToken?: object): void;\r
\r
    /**\r
     * Unregisters an object from the registry.\r
     * @param unregisterToken The token that was used as the unregisterToken argument when calling\r
     * register to register the target object.\r
     */\r
    unregister(unregisterToken: object): void;\r
}\r
\r
interface FinalizationRegistryConstructor {\r
    readonly prototype: FinalizationRegistry<any>;\r
\r
    /**\r
     * Creates a finalization registry with an associated cleanup callback\r
     * @param cleanupCallback The callback to call after an object in the registry has been reclaimed.\r
     */\r
    new<T>(cleanupCallback: (heldValue: T) => void): FinalizationRegistry<T>;\r
}\r
\r
declare var FinalizationRegistry: FinalizationRegistryConstructor;\r
`;export{e as default};
