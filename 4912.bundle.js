/*! For license information please see 4912.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunklogs=self.webpackChunklogs||[]).push([[4912],{64912:(e,t,i)=>{i.r(t),i.d(t,{conf:()=>o,language:()=>n});var o={comments:{lineComment:"COMMENT"},brackets:[["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:":",close:"."}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"`",close:"`"},{open:'"',close:'"'},{open:"'",close:"'"},{open:":",close:"."}],folding:{markers:{start:new RegExp("^\\s*(::\\s*|COMMENT\\s+)#region"),end:new RegExp("^\\s*(::\\s*|COMMENT\\s+)#endregion")}}},n={tokenPostfix:".lexon",ignoreCase:!0,keywords:["lexon","lex","clause","terms","contracts","may","pay","pays","appoints","into","to"],typeKeywords:["amount","person","key","time","date","asset","text"],operators:["less","greater","equal","le","gt","or","and","add","added","subtract","subtracted","multiply","multiplied","times","divide","divided","is","be","certified"],symbols:/[=><!~?:&|+\-*\/\^%]+/,tokenizer:{root:[[/^(\s*)(comment:?(?:\s.*|))$/,["","comment"]],[/"/,{token:"identifier.quote",bracket:"@open",next:"@quoted_identifier"}],["LEX$",{token:"keyword",bracket:"@open",next:"@identifier_until_period"}],["LEXON",{token:"keyword",bracket:"@open",next:"@semver"}],[":",{token:"delimiter",bracket:"@open",next:"@identifier_until_period"}],[/[a-z_$][\w$]*/,{cases:{"@operators":"operator","@typeKeywords":"keyword.type","@keywords":"keyword","@default":"identifier"}}],{include:"@whitespace"},[/[{}()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/@symbols/,"delimiter"],[/\d*\.\d*\.\d*/,"number.semver"],[/\d*\.\d+([eE][\-+]?\d+)?/,"number.float"],[/0[xX][0-9a-fA-F]+/,"number.hex"],[/\d+/,"number"],[/[;,.]/,"delimiter"]],quoted_identifier:[[/[^\\"]+/,"identifier"],[/"/,{token:"identifier.quote",bracket:"@close",next:"@pop"}]],space_identifier_until_period:[[":","delimiter"],[" ",{token:"white",next:"@identifier_rest"}]],identifier_until_period:[{include:"@whitespace"},[":",{token:"delimiter",next:"@identifier_rest"}],[/[^\\.]+/,"identifier"],[/\./,{token:"delimiter",bracket:"@close",next:"@pop"}]],identifier_rest:[[/[^\\.]+/,"identifier"],[/\./,{token:"delimiter",bracket:"@close",next:"@pop"}]],semver:[{include:"@whitespace"},[":","delimiter"],[/\d*\.\d*\.\d*/,{token:"number.semver",bracket:"@close",next:"@pop"}]],whitespace:[[/[ \t\r\n]+/,"white"]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvbGV4b24vbGV4b24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVmVyc2lvbjogMC4zMy4wKDRiMWFiYWQ0MjdlNThkYmVkYzEyMTVkOTlhMDkwMmZmYzg4NWZjZDQpXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvbW9uYWNvLWVkaXRvci9ibG9iL21haW4vTElDRU5TRS50eHRcbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4vLyBzcmMvYmFzaWMtbGFuZ3VhZ2VzL2xleG9uL2xleG9uLnRzXG52YXIgY29uZiA9IHtcbiAgY29tbWVudHM6IHtcbiAgICBsaW5lQ29tbWVudDogXCJDT01NRU5UXCJcbiAgfSxcbiAgYnJhY2tldHM6IFtbXCIoXCIsIFwiKVwiXV0sXG4gIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICB7IG9wZW46IFwie1wiLCBjbG9zZTogXCJ9XCIgfSxcbiAgICB7IG9wZW46IFwiW1wiLCBjbG9zZTogXCJdXCIgfSxcbiAgICB7IG9wZW46IFwiKFwiLCBjbG9zZTogXCIpXCIgfSxcbiAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXG4gICAgeyBvcGVuOiBcIjpcIiwgY2xvc2U6IFwiLlwiIH1cbiAgXSxcbiAgc3Vycm91bmRpbmdQYWlyczogW1xuICAgIHsgb3BlbjogXCJ7XCIsIGNsb3NlOiBcIn1cIiB9LFxuICAgIHsgb3BlbjogXCJbXCIsIGNsb3NlOiBcIl1cIiB9LFxuICAgIHsgb3BlbjogXCIoXCIsIGNsb3NlOiBcIilcIiB9LFxuICAgIHsgb3BlbjogXCJgXCIsIGNsb3NlOiBcImBcIiB9LFxuICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcbiAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIgfSxcbiAgICB7IG9wZW46IFwiOlwiLCBjbG9zZTogXCIuXCIgfVxuICBdLFxuICBmb2xkaW5nOiB7XG4gICAgbWFya2Vyczoge1xuICAgICAgc3RhcnQ6IG5ldyBSZWdFeHAoXCJeXFxcXHMqKDo6XFxcXHMqfENPTU1FTlRcXFxccyspI3JlZ2lvblwiKSxcbiAgICAgIGVuZDogbmV3IFJlZ0V4cChcIl5cXFxccyooOjpcXFxccyp8Q09NTUVOVFxcXFxzKykjZW5kcmVnaW9uXCIpXG4gICAgfVxuICB9XG59O1xudmFyIGxhbmd1YWdlID0ge1xuICB0b2tlblBvc3RmaXg6IFwiLmxleG9uXCIsXG4gIGlnbm9yZUNhc2U6IHRydWUsXG4gIGtleXdvcmRzOiBbXG4gICAgXCJsZXhvblwiLFxuICAgIFwibGV4XCIsXG4gICAgXCJjbGF1c2VcIixcbiAgICBcInRlcm1zXCIsXG4gICAgXCJjb250cmFjdHNcIixcbiAgICBcIm1heVwiLFxuICAgIFwicGF5XCIsXG4gICAgXCJwYXlzXCIsXG4gICAgXCJhcHBvaW50c1wiLFxuICAgIFwiaW50b1wiLFxuICAgIFwidG9cIlxuICBdLFxuICB0eXBlS2V5d29yZHM6IFtcImFtb3VudFwiLCBcInBlcnNvblwiLCBcImtleVwiLCBcInRpbWVcIiwgXCJkYXRlXCIsIFwiYXNzZXRcIiwgXCJ0ZXh0XCJdLFxuICBvcGVyYXRvcnM6IFtcbiAgICBcImxlc3NcIixcbiAgICBcImdyZWF0ZXJcIixcbiAgICBcImVxdWFsXCIsXG4gICAgXCJsZVwiLFxuICAgIFwiZ3RcIixcbiAgICBcIm9yXCIsXG4gICAgXCJhbmRcIixcbiAgICBcImFkZFwiLFxuICAgIFwiYWRkZWRcIixcbiAgICBcInN1YnRyYWN0XCIsXG4gICAgXCJzdWJ0cmFjdGVkXCIsXG4gICAgXCJtdWx0aXBseVwiLFxuICAgIFwibXVsdGlwbGllZFwiLFxuICAgIFwidGltZXNcIixcbiAgICBcImRpdmlkZVwiLFxuICAgIFwiZGl2aWRlZFwiLFxuICAgIFwiaXNcIixcbiAgICBcImJlXCIsXG4gICAgXCJjZXJ0aWZpZWRcIlxuICBdLFxuICBzeW1ib2xzOiAvWz0+PCF+PzomfCtcXC0qXFwvXFxeJV0rLyxcbiAgdG9rZW5pemVyOiB7XG4gICAgcm9vdDogW1xuICAgICAgWy9eKFxccyopKGNvbW1lbnQ6Pyg/Olxccy4qfCkpJC8sIFtcIlwiLCBcImNvbW1lbnRcIl1dLFxuICAgICAgW1xuICAgICAgICAvXCIvLFxuICAgICAgICB7XG4gICAgICAgICAgdG9rZW46IFwiaWRlbnRpZmllci5xdW90ZVwiLFxuICAgICAgICAgIGJyYWNrZXQ6IFwiQG9wZW5cIixcbiAgICAgICAgICBuZXh0OiBcIkBxdW90ZWRfaWRlbnRpZmllclwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFwiTEVYJFwiLFxuICAgICAgICB7XG4gICAgICAgICAgdG9rZW46IFwia2V5d29yZFwiLFxuICAgICAgICAgIGJyYWNrZXQ6IFwiQG9wZW5cIixcbiAgICAgICAgICBuZXh0OiBcIkBpZGVudGlmaWVyX3VudGlsX3BlcmlvZFwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBbXCJMRVhPTlwiLCB7IHRva2VuOiBcImtleXdvcmRcIiwgYnJhY2tldDogXCJAb3BlblwiLCBuZXh0OiBcIkBzZW12ZXJcIiB9XSxcbiAgICAgIFtcbiAgICAgICAgXCI6XCIsXG4gICAgICAgIHtcbiAgICAgICAgICB0b2tlbjogXCJkZWxpbWl0ZXJcIixcbiAgICAgICAgICBicmFja2V0OiBcIkBvcGVuXCIsXG4gICAgICAgICAgbmV4dDogXCJAaWRlbnRpZmllcl91bnRpbF9wZXJpb2RcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAvW2Etel8kXVtcXHckXSovLFxuICAgICAgICB7XG4gICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgIFwiQG9wZXJhdG9yc1wiOiBcIm9wZXJhdG9yXCIsXG4gICAgICAgICAgICBcIkB0eXBlS2V5d29yZHNcIjogXCJrZXl3b3JkLnR5cGVcIixcbiAgICAgICAgICAgIFwiQGtleXdvcmRzXCI6IFwia2V5d29yZFwiLFxuICAgICAgICAgICAgXCJAZGVmYXVsdFwiOiBcImlkZW50aWZpZXJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHsgaW5jbHVkZTogXCJAd2hpdGVzcGFjZVwiIH0sXG4gICAgICBbL1t7fSgpXFxbXFxdXS8sIFwiQGJyYWNrZXRzXCJdLFxuICAgICAgWy9bPD5dKD8hQHN5bWJvbHMpLywgXCJAYnJhY2tldHNcIl0sXG4gICAgICBbL0BzeW1ib2xzLywgXCJkZWxpbWl0ZXJcIl0sXG4gICAgICBbL1xcZCpcXC5cXGQqXFwuXFxkKi8sIFwibnVtYmVyLnNlbXZlclwiXSxcbiAgICAgIFsvXFxkKlxcLlxcZCsoW2VFXVtcXC0rXT9cXGQrKT8vLCBcIm51bWJlci5mbG9hdFwiXSxcbiAgICAgIFsvMFt4WF1bMC05YS1mQS1GXSsvLCBcIm51bWJlci5oZXhcIl0sXG4gICAgICBbL1xcZCsvLCBcIm51bWJlclwiXSxcbiAgICAgIFsvWzssLl0vLCBcImRlbGltaXRlclwiXVxuICAgIF0sXG4gICAgcXVvdGVkX2lkZW50aWZpZXI6IFtcbiAgICAgIFsvW15cXFxcXCJdKy8sIFwiaWRlbnRpZmllclwiXSxcbiAgICAgIFsvXCIvLCB7IHRva2VuOiBcImlkZW50aWZpZXIucXVvdGVcIiwgYnJhY2tldDogXCJAY2xvc2VcIiwgbmV4dDogXCJAcG9wXCIgfV1cbiAgICBdLFxuICAgIHNwYWNlX2lkZW50aWZpZXJfdW50aWxfcGVyaW9kOiBbXG4gICAgICBbXCI6XCIsIFwiZGVsaW1pdGVyXCJdLFxuICAgICAgW1wiIFwiLCB7IHRva2VuOiBcIndoaXRlXCIsIG5leHQ6IFwiQGlkZW50aWZpZXJfcmVzdFwiIH1dXG4gICAgXSxcbiAgICBpZGVudGlmaWVyX3VudGlsX3BlcmlvZDogW1xuICAgICAgeyBpbmNsdWRlOiBcIkB3aGl0ZXNwYWNlXCIgfSxcbiAgICAgIFtcIjpcIiwgeyB0b2tlbjogXCJkZWxpbWl0ZXJcIiwgbmV4dDogXCJAaWRlbnRpZmllcl9yZXN0XCIgfV0sXG4gICAgICBbL1teXFxcXC5dKy8sIFwiaWRlbnRpZmllclwiXSxcbiAgICAgIFsvXFwuLywgeyB0b2tlbjogXCJkZWxpbWl0ZXJcIiwgYnJhY2tldDogXCJAY2xvc2VcIiwgbmV4dDogXCJAcG9wXCIgfV1cbiAgICBdLFxuICAgIGlkZW50aWZpZXJfcmVzdDogW1xuICAgICAgWy9bXlxcXFwuXSsvLCBcImlkZW50aWZpZXJcIl0sXG4gICAgICBbL1xcLi8sIHsgdG9rZW46IFwiZGVsaW1pdGVyXCIsIGJyYWNrZXQ6IFwiQGNsb3NlXCIsIG5leHQ6IFwiQHBvcFwiIH1dXG4gICAgXSxcbiAgICBzZW12ZXI6IFtcbiAgICAgIHsgaW5jbHVkZTogXCJAd2hpdGVzcGFjZVwiIH0sXG4gICAgICBbXCI6XCIsIFwiZGVsaW1pdGVyXCJdLFxuICAgICAgWy9cXGQqXFwuXFxkKlxcLlxcZCovLCB7IHRva2VuOiBcIm51bWJlci5zZW12ZXJcIiwgYnJhY2tldDogXCJAY2xvc2VcIiwgbmV4dDogXCJAcG9wXCIgfV1cbiAgICBdLFxuICAgIHdoaXRlc3BhY2U6IFtbL1sgXFx0XFxyXFxuXSsvLCBcIndoaXRlXCJdXVxuICB9XG59O1xuZXhwb3J0IHtcbiAgY29uZixcbiAgbGFuZ3VhZ2Vcbn07XG4iXSwibmFtZXMiOlsiY29uZiIsImNvbW1lbnRzIiwibGluZUNvbW1lbnQiLCJicmFja2V0cyIsImF1dG9DbG9zaW5nUGFpcnMiLCJvcGVuIiwiY2xvc2UiLCJzdXJyb3VuZGluZ1BhaXJzIiwiZm9sZGluZyIsIm1hcmtlcnMiLCJzdGFydCIsIlJlZ0V4cCIsImVuZCIsImxhbmd1YWdlIiwidG9rZW5Qb3N0Zml4IiwiaWdub3JlQ2FzZSIsImtleXdvcmRzIiwidHlwZUtleXdvcmRzIiwib3BlcmF0b3JzIiwic3ltYm9scyIsInRva2VuaXplciIsInJvb3QiLCJ0b2tlbiIsImJyYWNrZXQiLCJuZXh0IiwiY2FzZXMiLCJpbmNsdWRlIiwicXVvdGVkX2lkZW50aWZpZXIiLCJzcGFjZV9pZGVudGlmaWVyX3VudGlsX3BlcmlvZCIsImlkZW50aWZpZXJfdW50aWxfcGVyaW9kIiwiaWRlbnRpZmllcl9yZXN0Iiwic2VtdmVyIiwid2hpdGVzcGFjZSJdLCJzb3VyY2VSb290IjoiIn0=