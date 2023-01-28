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


interface ErrorOptions {\r
    cause?: unknown;\r
}\r
\r
interface Error {\r
    cause?: unknown;\r
}\r
\r
interface ErrorConstructor {\r
    new (message?: string, options?: ErrorOptions): Error;\r
    (message?: string, options?: ErrorOptions): Error;\r
}\r
\r
interface EvalErrorConstructor {\r
    new (message?: string, options?: ErrorOptions): EvalError;\r
    (message?: string, options?: ErrorOptions): EvalError;\r
}\r
\r
interface RangeErrorConstructor {\r
    new (message?: string, options?: ErrorOptions): RangeError;\r
    (message?: string, options?: ErrorOptions): RangeError;\r
}\r
\r
interface ReferenceErrorConstructor {\r
    new (message?: string, options?: ErrorOptions): ReferenceError;\r
    (message?: string, options?: ErrorOptions): ReferenceError;\r
}\r
\r
interface SyntaxErrorConstructor {\r
    new (message?: string, options?: ErrorOptions): SyntaxError;\r
    (message?: string, options?: ErrorOptions): SyntaxError;\r
}\r
\r
interface TypeErrorConstructor {\r
    new (message?: string, options?: ErrorOptions): TypeError;\r
    (message?: string, options?: ErrorOptions): TypeError;\r
}\r
\r
interface URIErrorConstructor {\r
    new (message?: string, options?: ErrorOptions): URIError;\r
    (message?: string, options?: ErrorOptions): URIError;\r
}\r
\r
interface AggregateErrorConstructor {\r
    new (\r
        errors: Iterable<any>,\r
        message?: string,\r
        options?: ErrorOptions\r
    ): AggregateError;\r
    (\r
        errors: Iterable<any>,\r
        message?: string,\r
        options?: ErrorOptions\r
    ): AggregateError;\r
}\r
`;export{r as default};
