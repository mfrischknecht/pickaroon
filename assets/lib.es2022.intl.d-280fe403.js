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
    /**\r
     * An object with some or all properties of the \`Intl.Segmenter\` constructor \`options\` parameter.\r
     *\r
     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/Segmenter#parameters)\r
     */\r
    interface SegmenterOptions {\r
        /** The locale matching algorithm to use. For information about this option, see [Intl page](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation). */\r
        localeMatcher?: "best fit" | "lookup" | undefined;\r
        /** The type of input to be split */\r
        granularity?: "grapheme" | "word" | "sentence" | undefined;\r
    }\r
\r
    interface Segmenter {\r
        /**\r
         * Returns \`Segments\` object containing the segments of the input string, using the segmenter's locale and granularity.\r
         *\r
         * @param input - The text to be segmented as a \`string\`.\r
         *\r
         * @returns A new iterable Segments object containing the segments of the input string, using the segmenter's locale and granularity.\r
         */\r
        segment(input: string): Segments;\r
        resolvedOptions(): ResolvedSegmenterOptions;\r
    }\r
\r
    interface ResolvedSegmenterOptions {\r
        locale: string;\r
        granularity: "grapheme" | "word" | "sentence";\r
    }\r
\r
    interface Segments {\r
        /**\r
         * Returns an object describing the segment in the original string that includes the code unit at a specified index.\r
         *\r
         * @param codeUnitIndex - A number specifying the index of the code unit in the original input string. If the value is omitted, it defaults to \`0\`.\r
         */\r
        containing(codeUnitIndex?: number): SegmentData;\r
\r
        /** Returns an iterator to iterate over the segments. */\r
        [Symbol.iterator](): IterableIterator<SegmentData>;\r
    }\r
\r
    interface SegmentData {\r
        /** A string containing the segment extracted from the original input string. */\r
        segment: string;\r
        /** The code unit index in the original input string at which the segment begins. */\r
        index: number;\r
        /** The complete input string that was segmented. */\r
        input: string;\r
        /**\r
         * A boolean value only if granularity is "word"; otherwise, undefined.\r
         * If granularity is "word", then isWordLike is true when the segment is word-like (i.e., consists of letters/numbers/ideographs/etc.); otherwise, false.\r
         */\r
        isWordLike?: boolean;\r
    }\r
\r
    const Segmenter: {\r
        prototype: Segmenter;\r
\r
        /**\r
         * Creates a new \`Intl.Segmenter\` object.\r
         *\r
         * @param locales - A string with a [BCP 47 language tag](http://tools.ietf.org/html/rfc5646), or an array of such strings.\r
         *  For the general form and interpretation of the \`locales\` argument,\r
         *  see the [\`Intl\` page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation).\r
         *\r
         * @param options - An [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/Segmenter#parameters)\r
         *  with some or all options of \`SegmenterOptions\`.\r
         *\r
         * @returns [Intl.Segmenter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segments) object.\r
         *\r
         * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter).\r
         */\r
        new(locales?: BCP47LanguageTag | BCP47LanguageTag[], options?: SegmenterOptions): Segmenter;\r
\r
        /**\r
         * Returns an array containing those of the provided locales that are supported without having to fall back to the runtime's default locale.\r
         *\r
         * @param locales - A string with a [BCP 47 language tag](http://tools.ietf.org/html/rfc5646), or an array of such strings.\r
         *  For the general form and interpretation of the \`locales\` argument,\r
         *  see the [\`Intl\` page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation).\r
         *\r
         * @param options An [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/supportedLocalesOf#parameters).\r
         *  with some or all possible options.\r
         *\r
         * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/supportedLocalesOf)\r
         */\r
        supportedLocalesOf(locales: BCP47LanguageTag | BCP47LanguageTag[], options?: Pick<SegmenterOptions, "localeMatcher">): BCP47LanguageTag[];\r
    };\r
}\r
`;export{e as default};
