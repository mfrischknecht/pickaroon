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
        fractionalSecond: any\r
     }\r
\r
    interface DateTimeFormatOptions {\r
        formatMatcher?: "basic" | "best fit" | "best fit" | undefined;\r
        dateStyle?: "full" | "long" | "medium" | "short" | undefined;\r
        timeStyle?: "full" | "long" | "medium" | "short" | undefined;\r
        dayPeriod?: "narrow" | "short" | "long" | undefined;\r
        fractionalSecondDigits?: 1 | 2 | 3 | undefined;\r
    }\r
\r
    interface DateTimeRangeFormatPart extends DateTimeFormatPart {\r
        source: "startRange" | "endRange" | "shared"\r
    }\r
\r
    interface DateTimeFormat {\r
        formatRange(startDate: Date | number | bigint, endDate: Date | number | bigint): string;\r
        formatRangeToParts(startDate: Date | number | bigint, endDate: Date | number | bigint): DateTimeRangeFormatPart[];\r
    }\r
\r
    interface ResolvedDateTimeFormatOptions {\r
        formatMatcher?: "basic" | "best fit" | "best fit";\r
        dateStyle?: "full" | "long" | "medium" | "short";\r
        timeStyle?: "full" | "long" | "medium" | "short";\r
        hourCycle?: "h11" | "h12" | "h23" | "h24";\r
        dayPeriod?: "narrow" | "short" | "long";\r
        fractionalSecondDigits?: 1 | 2 | 3;\r
    }\r
\r
    /**\r
     * The locale matching algorithm to use.\r
     *\r
     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat#parameters).\r
     */\r
    type ListFormatLocaleMatcher = "lookup" | "best fit";\r
\r
    /**\r
     * The format of output message.\r
     *\r
     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat#parameters).\r
     */\r
    type ListFormatType = "conjunction" | "disjunction" | "unit";\r
\r
    /**\r
     * The length of the formatted message.\r
     *\r
     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat#parameters).\r
     */\r
    type ListFormatStyle = "long" | "short" | "narrow";\r
\r
    /**\r
     * An object with some or all properties of the \`Intl.ListFormat\` constructor \`options\` parameter.\r
     *\r
     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat#parameters).\r
     */\r
    interface ListFormatOptions {\r
        /** The locale matching algorithm to use. For information about this option, see [Intl page](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation). */\r
        localeMatcher?: ListFormatLocaleMatcher | undefined;\r
        /** The format of output message. */\r
        type?: ListFormatType | undefined;\r
        /** The length of the internationalized message. */\r
        style?: ListFormatStyle | undefined;\r
    }\r
\r
    interface ListFormat {\r
        /**\r
         * Returns a string with a language-specific representation of the list.\r
         *\r
         * @param list - An iterable object, such as an [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).\r
         *\r
         * @throws \`TypeError\` if \`list\` includes something other than the possible values.\r
         *\r
         * @returns {string} A language-specific formatted string representing the elements of the list.\r
         *\r
         * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/format).\r
         */\r
        format(list: Iterable<string>): string;\r
\r
        /**\r
         * Returns an Array of objects representing the different components that can be used to format a list of values in a locale-aware fashion.\r
         *\r
         * @param list - An iterable object, such as an [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), to be formatted according to a locale.\r
         *\r
         * @throws \`TypeError\` if \`list\` includes something other than the possible values.\r
         *\r
         * @returns {{ type: "element" | "literal", value: string; }[]} An Array of components which contains the formatted parts from the list.\r
         *\r
         * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/formatToParts).\r
         */\r
        formatToParts(list: Iterable<string>): { type: "element" | "literal", value: string; }[];\r
    }\r
\r
    const ListFormat: {\r
        prototype: ListFormat;\r
\r
        /**\r
         * Creates [Intl.ListFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat) objects that\r
         * enable language-sensitive list formatting.\r
         *\r
         * @param locales - A string with a [BCP 47 language tag](http://tools.ietf.org/html/rfc5646), or an array of such strings.\r
         *  For the general form and interpretation of the \`locales\` argument,\r
         *  see the [\`Intl\` page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation).\r
         *\r
         * @param options - An [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat#parameters)\r
         *  with some or all options of \`ListFormatOptions\`.\r
         *\r
         * @returns [Intl.ListFormatOptions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat) object.\r
         *\r
         * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat).\r
         */\r
        new(locales?: BCP47LanguageTag | BCP47LanguageTag[], options?: ListFormatOptions): ListFormat;\r
\r
        /**\r
         * Returns an array containing those of the provided locales that are\r
         * supported in list formatting without having to fall back to the runtime's default locale.\r
         *\r
         * @param locales - A string with a [BCP 47 language tag](http://tools.ietf.org/html/rfc5646), or an array of such strings.\r
         *  For the general form and interpretation of the \`locales\` argument,\r
         *  see the [\`Intl\` page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation).\r
         *\r
         * @param options - An [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/supportedLocalesOf#parameters).\r
         *  with some or all possible options.\r
         *\r
         * @returns An array of strings representing a subset of the given locale tags that are supported in list\r
         *  formatting without having to fall back to the runtime's default locale.\r
         *\r
         * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/supportedLocalesOf).\r
         */\r
        supportedLocalesOf(locales: BCP47LanguageTag | BCP47LanguageTag[], options?: Pick<ListFormatOptions, "localeMatcher">): BCP47LanguageTag[];\r
    };\r
}\r
`;export{e as default};
