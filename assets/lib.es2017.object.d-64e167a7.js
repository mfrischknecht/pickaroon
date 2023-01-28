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


interface ObjectConstructor {\r
    /**\r
     * Returns an array of values of the enumerable properties of an object\r
     * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.\r
     */\r
    values<T>(o: { [s: string]: T } | ArrayLike<T>): T[];\r
\r
    /**\r
     * Returns an array of values of the enumerable properties of an object\r
     * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.\r
     */\r
    values(o: {}): any[];\r
\r
    /**\r
     * Returns an array of key/values of the enumerable properties of an object\r
     * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.\r
     */\r
    entries<T>(o: { [s: string]: T } | ArrayLike<T>): [string, T][];\r
\r
    /**\r
     * Returns an array of key/values of the enumerable properties of an object\r
     * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.\r
     */\r
    entries(o: {}): [string, any][];\r
\r
    /**\r
     * Returns an object containing all own property descriptors of an object\r
     * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.\r
     */\r
    getOwnPropertyDescriptors<T>(o: T): {[P in keyof T]: TypedPropertyDescriptor<T[P]>} & { [x: string]: PropertyDescriptor };\r
}\r
`;export{e as default};
