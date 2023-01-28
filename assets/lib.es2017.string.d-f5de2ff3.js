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


interface String {\r
    /**\r
     * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\r
     * The padding is applied from the start (left) of the current string.\r
     *\r
     * @param maxLength The length of the resulting string once the current string has been padded.\r
     *        If this parameter is smaller than the current string's length, the current string will be returned as it is.\r
     *\r
     * @param fillString The string to pad the current string with.\r
     *        If this string is too long, it will be truncated and the left-most part will be applied.\r
     *        The default value for this parameter is " " (U+0020).\r
     */\r
    padStart(maxLength: number, fillString?: string): string;\r
\r
    /**\r
     * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\r
     * The padding is applied from the end (right) of the current string.\r
     *\r
     * @param maxLength The length of the resulting string once the current string has been padded.\r
     *        If this parameter is smaller than the current string's length, the current string will be returned as it is.\r
     *\r
     * @param fillString The string to pad the current string with.\r
     *        If this string is too long, it will be truncated and the left-most part will be applied.\r
     *        The default value for this parameter is " " (U+0020).\r
     */\r
    padEnd(maxLength: number, fillString?: string): string;\r
}\r
`;export{e as default};
