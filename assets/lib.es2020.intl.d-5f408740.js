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


/// <reference lib="es2018.intl" />\r
declare namespace Intl {\r
\r
    /**\r
     * [Unicode BCP 47 Locale Identifiers](https://unicode.org/reports/tr35/#Unicode_Language_and_Locale_Identifiers) definition.\r
     *\r
     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).\r
     */\r
    type UnicodeBCP47LocaleIdentifier = string;\r
\r
    /**\r
     * Unit to use in the relative time internationalized message.\r
     *\r
     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format#Parameters).\r
     */\r
    type RelativeTimeFormatUnit =\r
        | "year"\r
        | "years"\r
        | "quarter"\r
        | "quarters"\r
        | "month"\r
        | "months"\r
        | "week"\r
        | "weeks"\r
        | "day"\r
        | "days"\r
        | "hour"\r
        | "hours"\r
        | "minute"\r
        | "minutes"\r
        | "second"\r
        | "seconds";\r
\r
    /**\r
     * Value of the \`unit\` property in objects returned by\r
     * \`Intl.RelativeTimeFormat.prototype.formatToParts()\`. \`formatToParts\` and\r
     * \`format\` methods accept either singular or plural unit names as input,\r
     * but \`formatToParts\` only outputs singular (e.g. "day") not plural (e.g.\r
     * "days").\r
     *\r
     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/formatToParts#Using_formatToParts).\r
     */\r
     type RelativeTimeFormatUnitSingular =\r
        | "year"\r
        | "quarter"\r
        | "month"\r
        | "week"\r
        | "day"\r
        | "hour"\r
        | "minute"\r
        | "second";\r
\r
    /**\r
     * The locale matching algorithm to use.\r
     *\r
     * [MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation).\r
     */\r
    type RelativeTimeFormatLocaleMatcher = "lookup" | "best fit";\r
\r
    /**\r
     * The format of output message.\r
     *\r
     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#Parameters).\r
     */\r
    type RelativeTimeFormatNumeric = "always" | "auto";\r
\r
    /**\r
     * The length of the internationalized message.\r
     *\r
     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#Parameters).\r
     */\r
    type RelativeTimeFormatStyle = "long" | "short" | "narrow";\r
\r
    /**\r
     * [BCP 47 language tag](http://tools.ietf.org/html/rfc5646) definition.\r
     *\r
     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).\r
     */\r
    type BCP47LanguageTag = string;\r
\r
    /**\r
     * The locale(s) to use\r
     *\r
     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).\r
     */\r
    type LocalesArgument = UnicodeBCP47LocaleIdentifier | Locale | readonly (UnicodeBCP47LocaleIdentifier | Locale)[] | undefined;\r
\r
    /**\r
     * An object with some or all of properties of \`options\` parameter\r
     * of \`Intl.RelativeTimeFormat\` constructor.\r
     *\r
     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#Parameters).\r
     */\r
    interface RelativeTimeFormatOptions {\r
        /** The locale matching algorithm to use. For information about this option, see [Intl page](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation). */\r
        localeMatcher?: RelativeTimeFormatLocaleMatcher;\r
        /** The format of output message. */\r
        numeric?: RelativeTimeFormatNumeric;\r
        /** The length of the internationalized message. */\r
        style?: RelativeTimeFormatStyle;\r
    }\r
\r
    /**\r
     * An object with properties reflecting the locale\r
     * and formatting options computed during initialization\r
     * of the \`Intl.RelativeTimeFormat\` object\r
     *\r
     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/resolvedOptions#Description).\r
     */\r
    interface ResolvedRelativeTimeFormatOptions {\r
        locale: UnicodeBCP47LocaleIdentifier;\r
        style: RelativeTimeFormatStyle;\r
        numeric: RelativeTimeFormatNumeric;\r
        numberingSystem: string;\r
    }\r
\r
    /**\r
     * An object representing the relative time format in parts\r
     * that can be used for custom locale-aware formatting.\r
     *\r
     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/formatToParts#Using_formatToParts).\r
     */\r
    type RelativeTimeFormatPart =\r
        | {\r
              type: "literal";\r
              value: string;\r
          }\r
        | {\r
              type: Exclude<NumberFormatPartTypes, "literal">;\r
              value: string;\r
              unit: RelativeTimeFormatUnitSingular;\r
          };\r
\r
    interface RelativeTimeFormat {\r
        /**\r
         * Formats a value and a unit according to the locale\r
         * and formatting options of the given\r
         * [\`Intl.RelativeTimeFormat\`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat)\r
         * object.\r
         *\r
         * While this method automatically provides the correct plural forms,\r
         * the grammatical form is otherwise as neutral as possible.\r
         *\r
         * It is the caller's responsibility to handle cut-off logic\r
         * such as deciding between displaying "in 7 days" or "in 1 week".\r
         * This API does not support relative dates involving compound units.\r
         * e.g "in 5 days and 4 hours".\r
         *\r
         * @param value -  Numeric value to use in the internationalized relative time message\r
         *\r
         * @param unit - [Unit](https://tc39.es/ecma402/#sec-singularrelativetimeunit) to use in the relative time internationalized message.\r
         *\r
         * @throws \`RangeError\` if \`unit\` was given something other than \`unit\` possible values\r
         *\r
         * @returns {string} Internationalized relative time message as string\r
         *\r
         * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format).\r
         */\r
        format(value: number, unit: RelativeTimeFormatUnit): string;\r
\r
        /**\r
         *  Returns an array of objects representing the relative time format in parts that can be used for custom locale-aware formatting.\r
         *\r
         *  @param value - Numeric value to use in the internationalized relative time message\r
         *\r
         *  @param unit - [Unit](https://tc39.es/ecma402/#sec-singularrelativetimeunit) to use in the relative time internationalized message.\r
         *\r
         *  @throws \`RangeError\` if \`unit\` was given something other than \`unit\` possible values\r
         *\r
         *  [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/formatToParts).\r
         */\r
        formatToParts(value: number, unit: RelativeTimeFormatUnit): RelativeTimeFormatPart[];\r
\r
        /**\r
         * Provides access to the locale and options computed during initialization of this \`Intl.RelativeTimeFormat\` object.\r
         *\r
         * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/resolvedOptions).\r
         */\r
        resolvedOptions(): ResolvedRelativeTimeFormatOptions;\r
    }\r
\r
    /**\r
     * The [\`Intl.RelativeTimeFormat\`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat)\r
     * object is a constructor for objects that enable language-sensitive relative time formatting.\r
     *\r
     * [Compatibility](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat#Browser_compatibility).\r
     */\r
    const RelativeTimeFormat: {\r
        /**\r
         * Creates [Intl.RelativeTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat) objects\r
         *\r
         * @param locales - A string with a [BCP 47 language tag](http://tools.ietf.org/html/rfc5646), or an array of such strings.\r
         *  For the general form and interpretation of the locales argument,\r
         *  see the [\`Intl\` page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation).\r
         *\r
         * @param options - An [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#Parameters)\r
         *  with some or all of options of \`RelativeTimeFormatOptions\`.\r
         *\r
         * @returns [Intl.RelativeTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat) object.\r
         *\r
         * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat).\r
         */\r
        new(\r
            locales?: UnicodeBCP47LocaleIdentifier | UnicodeBCP47LocaleIdentifier[],\r
            options?: RelativeTimeFormatOptions,\r
        ): RelativeTimeFormat;\r
\r
        /**\r
         * Returns an array containing those of the provided locales\r
         * that are supported in date and time formatting\r
         * without having to fall back to the runtime's default locale.\r
         *\r
         * @param locales - A string with a [BCP 47 language tag](http://tools.ietf.org/html/rfc5646), or an array of such strings.\r
         *  For the general form and interpretation of the locales argument,\r
         *  see the [\`Intl\` page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation).\r
         *\r
         * @param options - An [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#Parameters)\r
         *  with some or all of options of the formatting.\r
         *\r
         * @returns An array containing those of the provided locales\r
         *  that are supported in date and time formatting\r
         *  without having to fall back to the runtime's default locale.\r
         *\r
         * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/supportedLocalesOf).\r
         */\r
        supportedLocalesOf(\r
            locales?: UnicodeBCP47LocaleIdentifier | UnicodeBCP47LocaleIdentifier[],\r
            options?: RelativeTimeFormatOptions,\r
        ): UnicodeBCP47LocaleIdentifier[];\r
    };\r
\r
    interface NumberFormatOptions {\r
        compactDisplay?: "short" | "long" | undefined;\r
        notation?: "standard" | "scientific" | "engineering" | "compact" | undefined;\r
        signDisplay?: "auto" | "never" | "always" | "exceptZero" | undefined;\r
        unit?: string | undefined;\r
        unitDisplay?: "short" | "long" | "narrow" | undefined;\r
        currencyDisplay?: string | undefined;\r
        currencySign?: string | undefined;\r
    }\r
\r
    interface ResolvedNumberFormatOptions {\r
        compactDisplay?: "short" | "long";\r
        notation?: "standard" | "scientific" | "engineering" | "compact";\r
        signDisplay?: "auto" | "never" | "always" | "exceptZero";\r
        unit?: string;\r
        unitDisplay?: "short" | "long" | "narrow";\r
        currencyDisplay?: string;\r
        currencySign?: string;\r
    }\r
\r
    interface DateTimeFormatOptions {\r
        calendar?: string | undefined;\r
        dayPeriod?: "narrow" | "short" | "long" | undefined;\r
        numberingSystem?: string | undefined;\r
\r
        dateStyle?: "full" | "long" | "medium" | "short" | undefined;\r
        timeStyle?: "full" | "long" | "medium" | "short" | undefined;\r
        hourCycle?: "h11" | "h12" | "h23" | "h24" | undefined;\r
    }\r
\r
    type LocaleHourCycleKey = "h12" | "h23" | "h11" | "h24";\r
    type LocaleCollationCaseFirst = "upper" | "lower" | "false";\r
\r
    interface LocaleOptions {\r
        /** A string containing the language, and the script and region if available. */\r
        baseName?: string;\r
        /** The part of the Locale that indicates the locale's calendar era. */\r
        calendar?: string;\r
        /** Flag that defines whether case is taken into account for the locale's collation rules. */\r
        caseFirst?: LocaleCollationCaseFirst;\r
        /** The collation type used for sorting */\r
        collation?: string;\r
        /** The time keeping format convention used by the locale. */\r
        hourCycle?: LocaleHourCycleKey;\r
        /** The primary language subtag associated with the locale. */\r
        language?: string;\r
        /** The numeral system used by the locale. */\r
        numberingSystem?: string;\r
        /** Flag that defines whether the locale has special collation handling for numeric characters. */\r
        numeric?: boolean;\r
        /** The region of the world (usually a country) associated with the locale. Possible values are region codes as defined by ISO 3166-1. */\r
        region?: string;\r
        /** The script used for writing the particular language used in the locale. Possible values are script codes as defined by ISO 15924. */\r
        script?: string;\r
    }\r
\r
    interface Locale extends LocaleOptions {\r
        /** A string containing the language, and the script and region if available. */\r
        baseName: string;\r
        /** The primary language subtag associated with the locale. */\r
        language: string;\r
        /** Gets the most likely values for the language, script, and region of the locale based on existing values. */\r
        maximize(): Locale;\r
        /** Attempts to remove information about the locale that would be added by calling \`Locale.maximize()\`. */\r
        minimize(): Locale;\r
        /** Returns the locale's full locale identifier string. */\r
        toString(): BCP47LanguageTag;\r
    }\r
\r
    /**\r
     * Constructor creates [Intl.Locale](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale)\r
     * objects\r
     *\r
     * @param tag - A string with a [BCP 47 language tag](http://tools.ietf.org/html/rfc5646).\r
     *  For the general form and interpretation of the locales argument,\r
     *  see the [\`Intl\` page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation).\r
     *\r
     * @param options - An [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/Locale#Parameters) with some or all of options of the locale.\r
     *\r
     * @returns [Intl.Locale](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale) object.\r
     *\r
     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale).\r
     */\r
    const Locale: {\r
        new (tag: BCP47LanguageTag | Locale, options?: LocaleOptions): Locale;\r
    };\r
\r
    type DisplayNamesFallback =\r
        | "code"\r
        | "none";\r
\r
    type DisplayNamesType =\r
        | "language"\r
        | "region"\r
        | "script"\r
        | "calendar"\r
        | "dateTimeField"\r
        | "currency";\r
\r
    type DisplayNamesLanguageDisplay =\r
        | "dialect"\r
        | "standard";\r
\r
    interface DisplayNamesOptions {\r
        localeMatcher?: RelativeTimeFormatLocaleMatcher;\r
        style?: RelativeTimeFormatStyle;\r
        type: DisplayNamesType;\r
        languageDisplay?: DisplayNamesLanguageDisplay;\r
        fallback?: DisplayNamesFallback;\r
    }\r
\r
    interface ResolvedDisplayNamesOptions {\r
        locale: UnicodeBCP47LocaleIdentifier;\r
        style: RelativeTimeFormatStyle;\r
        type: DisplayNamesType;\r
        fallback: DisplayNamesFallback;\r
        languageDisplay?: DisplayNamesLanguageDisplay;\r
    }\r
\r
    interface DisplayNames {\r
        /**\r
         * Receives a code and returns a string based on the locale and options provided when instantiating\r
         * [\`Intl.DisplayNames()\`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames)\r
         *\r
         * @param code The \`code\` to provide depends on the \`type\` passed to display name during creation:\r
         *  - If the type is \`"region"\`, code should be either an [ISO-3166 two letters region code](https://www.iso.org/iso-3166-country-codes.html),\r
         *    or a [three digits UN M49 Geographic Regions](https://unstats.un.org/unsd/methodology/m49/).\r
         *  - If the type is \`"script"\`, code should be an [ISO-15924 four letters script code](https://unicode.org/iso15924/iso15924-codes.html).\r
         *  - If the type is \`"language"\`, code should be a \`languageCode\` ["-" \`scriptCode\`] ["-" \`regionCode\` ] *("-" \`variant\` )\r
         *    subsequence of the unicode_language_id grammar in [UTS 35's Unicode Language and Locale Identifiers grammar](https://unicode.org/reports/tr35/#Unicode_language_identifier).\r
         *    \`languageCode\` is either a two letters ISO 639-1 language code or a three letters ISO 639-2 language code.\r
         *  - If the type is \`"currency"\`, code should be a [3-letter ISO 4217 currency code](https://www.iso.org/iso-4217-currency-codes.html).\r
         *\r
         * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/of).\r
         */\r
        of(code: string): string | undefined;\r
        /**\r
         * Returns a new object with properties reflecting the locale and style formatting options computed during the construction of the current\r
         * [\`Intl/DisplayNames\`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames) object.\r
         *\r
         * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/resolvedOptions).\r
         */\r
        resolvedOptions(): ResolvedDisplayNamesOptions;\r
    }\r
\r
    /**\r
     * The [\`Intl.DisplayNames()\`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames)\r
     * object enables the consistent translation of language, region and script display names.\r
     *\r
     * [Compatibility](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames#browser_compatibility).\r
     */\r
    const DisplayNames: {\r
        prototype: DisplayNames;\r
\r
        /**\r
         * @param locales A string with a BCP 47 language tag, or an array of such strings.\r
         *   For the general form and interpretation of the \`locales\` argument, see the [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation)\r
         *   page.\r
         *\r
         * @param options An object for setting up a display name.\r
         *\r
         * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/DisplayNames).\r
         */\r
        new(locales: LocalesArgument, options: DisplayNamesOptions): DisplayNames;\r
\r
        /**\r
         * Returns an array containing those of the provided locales that are supported in display names without having to fall back to the runtime's default locale.\r
         *\r
         * @param locales A string with a BCP 47 language tag, or an array of such strings.\r
         *   For the general form and interpretation of the \`locales\` argument, see the [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation)\r
         *   page.\r
         *\r
         * @param options An object with a locale matcher.\r
         *\r
         * @returns An array of strings representing a subset of the given locale tags that are supported in display names without having to fall back to the runtime's default locale.\r
         *\r
         * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/supportedLocalesOf).\r
         */\r
        supportedLocalesOf(locales?: LocalesArgument, options?: { localeMatcher?: RelativeTimeFormatLocaleMatcher }): BCP47LanguageTag[];\r
    };\r
\r
}\r
`;export{e as default};
