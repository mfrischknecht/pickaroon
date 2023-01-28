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


interface SymbolConstructor {\r
    /**\r
     * A reference to the prototype.\r
     */\r
    readonly prototype: Symbol;\r
\r
    /**\r
     * Returns a new unique Symbol value.\r
     * @param  description Description of the new Symbol object.\r
     */\r
    (description?: string | number): symbol;\r
\r
    /**\r
     * Returns a Symbol object from the global symbol registry matching the given key if found.\r
     * Otherwise, returns a new symbol with this key.\r
     * @param key key to search for.\r
     */\r
    for(key: string): symbol;\r
\r
    /**\r
     * Returns a key from the global symbol registry matching the given Symbol if found.\r
     * Otherwise, returns a undefined.\r
     * @param sym Symbol to find the key for.\r
     */\r
    keyFor(sym: symbol): string | undefined;\r
}\r
\r
declare var Symbol: SymbolConstructor;`;export{e as default};
