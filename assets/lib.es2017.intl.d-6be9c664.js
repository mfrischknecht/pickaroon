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


declare namespace Intl {\r
\r
    interface DateTimeFormatPartTypesRegistry {\r
        day: any\r
        dayPeriod: any\r
        era: any\r
        hour: any\r
        literal: any\r
        minute: any\r
        month: any\r
        second: any\r
        timeZoneName: any\r
        weekday: any\r
        year: any\r
    }\r
\r
    type DateTimeFormatPartTypes = keyof DateTimeFormatPartTypesRegistry;\r
\r
    interface DateTimeFormatPart {\r
        type: DateTimeFormatPartTypes;\r
        value: string;\r
    }\r
\r
    interface DateTimeFormat {\r
        formatToParts(date?: Date | number): DateTimeFormatPart[];\r
    }\r
}\r
`;export{e as default};
