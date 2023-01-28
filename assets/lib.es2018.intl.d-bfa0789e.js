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
    // http://cldr.unicode.org/index/cldr-spec/plural-rules#TOC-Determining-Plural-Categories\r
    type LDMLPluralRule = "zero" | "one" | "two" | "few" | "many" | "other";\r
    type PluralRuleType = "cardinal" | "ordinal";\r
\r
    interface PluralRulesOptions {\r
        localeMatcher?: "lookup" | "best fit" | undefined;\r
        type?: PluralRuleType | undefined;\r
        minimumIntegerDigits?: number | undefined;\r
        minimumFractionDigits?: number | undefined;\r
        maximumFractionDigits?: number | undefined;\r
        minimumSignificantDigits?: number | undefined;\r
        maximumSignificantDigits?: number | undefined;\r
    }\r
\r
    interface ResolvedPluralRulesOptions {\r
        locale: string;\r
        pluralCategories: LDMLPluralRule[];\r
        type: PluralRuleType;\r
        minimumIntegerDigits: number;\r
        minimumFractionDigits: number;\r
        maximumFractionDigits: number;\r
        minimumSignificantDigits?: number;\r
        maximumSignificantDigits?: number;\r
    }\r
\r
    interface PluralRules {\r
        resolvedOptions(): ResolvedPluralRulesOptions;\r
        select(n: number): LDMLPluralRule;\r
    }\r
\r
    const PluralRules: {\r
        new (locales?: string | string[], options?: PluralRulesOptions): PluralRules;\r
        (locales?: string | string[], options?: PluralRulesOptions): PluralRules;\r
\r
        supportedLocalesOf(locales: string | string[], options?: { localeMatcher?: "lookup" | "best fit" }): string[];\r
    };\r
\r
    // We can only have one definition for 'type' in TypeScript, and so you can learn where the keys come from here:\r
    type ES2018NumberFormatPartType = "literal" | "nan" | "infinity" | "percent" | "integer" | "group" | "decimal" | "fraction" | "plusSign" | "minusSign" | "percentSign" | "currency" | "code" | "symbol" | "name";\r
    type ES2020NumberFormatPartType = "compact" | "exponentInteger" | "exponentMinusSign" | "exponentSeparator" | "unit" | "unknown";\r
    type NumberFormatPartTypes = ES2018NumberFormatPartType | ES2020NumberFormatPartType;\r
\r
    interface NumberFormatPart {\r
        type: NumberFormatPartTypes;\r
        value: string;\r
    }\r
\r
    interface NumberFormat {\r
        formatToParts(number?: number | bigint): NumberFormatPart[];\r
    }\r
}\r
`;export{e as default};
