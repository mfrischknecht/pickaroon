/*! For license information please see 5062.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunklogs=self.webpackChunklogs||[]).push([[5062],{95062:(e,o,n)=>{n.r(o),n.d(o,{conf:()=>t,language:()=>r});var t={comments:{lineComment:"'"},brackets:[["(",")"],["[","]"],["If","EndIf"],["While","EndWhile"],["For","EndFor"],["Sub","EndSub"]],autoClosingPairs:[{open:'"',close:'"',notIn:["string","comment"]},{open:"(",close:")",notIn:["string","comment"]},{open:"[",close:"]",notIn:["string","comment"]}]},r={defaultToken:"",tokenPostfix:".sb",ignoreCase:!0,brackets:[{token:"delimiter.array",open:"[",close:"]"},{token:"delimiter.parenthesis",open:"(",close:")"},{token:"keyword.tag-if",open:"If",close:"EndIf"},{token:"keyword.tag-while",open:"While",close:"EndWhile"},{token:"keyword.tag-for",open:"For",close:"EndFor"},{token:"keyword.tag-sub",open:"Sub",close:"EndSub"}],keywords:["Else","ElseIf","EndFor","EndIf","EndSub","EndWhile","For","Goto","If","Step","Sub","Then","To","While"],tagwords:["If","Sub","While","For"],operators:[">","<","<>","<=",">=","And","Or","+","-","*","/","="],identifier:/[a-zA-Z_][\w]*/,symbols:/[=><:+\-*\/%\.,]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,tokenizer:{root:[{include:"@whitespace"},[/(@identifier)(?=[.])/,"type"],[/@identifier/,{cases:{"@keywords":{token:"keyword.$0"},"@operators":"operator","@default":"variable.name"}}],[/([.])(@identifier)/,{cases:{$2:["delimiter","type.member"],"@default":""}}],[/\d*\.\d+/,"number.float"],[/\d+/,"number"],[/[()\[\]]/,"@brackets"],[/@symbols/,{cases:{"@operators":"operator","@default":"delimiter"}}],[/"([^"\\]|\\.)*$/,"string.invalid"],[/"/,"string","@string"]],whitespace:[[/[ \t\r\n]+/,""],[/(\').*$/,"comment"]],string:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"C?/,"string","@pop"]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTA2Mi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijt1SUFRQSxJQUFJQSxFQUFPLENBQ1RDLFNBQVUsQ0FDUkMsWUFBYSxLQUVmQyxTQUFVLENBQ1IsQ0FBQyxJQUFLLEtBQ04sQ0FBQyxJQUFLLEtBQ04sQ0FBQyxLQUFNLFNBQ1AsQ0FBQyxRQUFTLFlBQ1YsQ0FBQyxNQUFPLFVBQ1IsQ0FBQyxNQUFPLFdBRVZDLGlCQUFrQixDQUNoQixDQUFFQyxLQUFNLElBQUtDLE1BQU8sSUFBS0MsTUFBTyxDQUFDLFNBQVUsWUFDM0MsQ0FBRUYsS0FBTSxJQUFLQyxNQUFPLElBQUtDLE1BQU8sQ0FBQyxTQUFVLFlBQzNDLENBQUVGLEtBQU0sSUFBS0MsTUFBTyxJQUFLQyxNQUFPLENBQUMsU0FBVSxjQUczQ0MsRUFBVyxDQUNiQyxhQUFjLEdBQ2RDLGFBQWMsTUFDZEMsWUFBWSxFQUNaUixTQUFVLENBQ1IsQ0FBRVMsTUFBTyxrQkFBbUJQLEtBQU0sSUFBS0MsTUFBTyxLQUM5QyxDQUFFTSxNQUFPLHdCQUF5QlAsS0FBTSxJQUFLQyxNQUFPLEtBQ3BELENBQUVNLE1BQU8saUJBQWtCUCxLQUFNLEtBQU1DLE1BQU8sU0FDOUMsQ0FBRU0sTUFBTyxvQkFBcUJQLEtBQU0sUUFBU0MsTUFBTyxZQUNwRCxDQUFFTSxNQUFPLGtCQUFtQlAsS0FBTSxNQUFPQyxNQUFPLFVBQ2hELENBQUVNLE1BQU8sa0JBQW1CUCxLQUFNLE1BQU9DLE1BQU8sV0FFbERPLFNBQVUsQ0FDUixPQUNBLFNBQ0EsU0FDQSxRQUNBLFNBQ0EsV0FDQSxNQUNBLE9BQ0EsS0FDQSxPQUNBLE1BQ0EsT0FDQSxLQUNBLFNBRUZDLFNBQVUsQ0FBQyxLQUFNLE1BQU8sUUFBUyxPQUNqQ0MsVUFBVyxDQUFDLElBQUssSUFBSyxLQUFNLEtBQU0sS0FBTSxNQUFPLEtBQU0sSUFBSyxJQUFLLElBQUssSUFBSyxLQUN6RUMsV0FBWSxpQkFDWkMsUUFBUyxvQkFDVEMsUUFBUyx3RUFDVEMsVUFBVyxDQUNUQyxLQUFNLENBQ0osQ0FBRUMsUUFBUyxlQUNYLENBQUMsdUJBQXdCLFFBQ3pCLENBQ0UsY0FDQSxDQUNFQyxNQUFPLENBQ0wsWUFBYSxDQUFFVixNQUFPLGNBQ3RCLGFBQWMsV0FDZCxXQUFZLG1CQUlsQixDQUNFLHFCQUNBLENBQ0VVLE1BQU8sQ0FDTEMsR0FBSSxDQUFDLFlBQWEsZUFDbEIsV0FBWSxNQUlsQixDQUFDLFdBQVksZ0JBQ2IsQ0FBQyxNQUFPLFVBQ1IsQ0FBQyxXQUFZLGFBQ2IsQ0FDRSxXQUNBLENBQ0VELE1BQU8sQ0FDTCxhQUFjLFdBQ2QsV0FBWSxlQUlsQixDQUFDLGtCQUFtQixrQkFDcEIsQ0FBQyxJQUFLLFNBQVUsWUFFbEJFLFdBQVksQ0FDVixDQUFDLGFBQWMsSUFDZixDQUFDLFVBQVcsWUFFZEMsT0FBUSxDQUNOLENBQUMsVUFBVyxVQUNaLENBQUMsV0FBWSxpQkFDYixDQUFDLE1BQU8seUJBQ1IsQ0FBQyxNQUFPLFNBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sb2dzLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy9zYi9zYi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBWZXJzaW9uOiAwLjMzLjAoNGIxYWJhZDQyN2U1OGRiZWRjMTIxNWQ5OWEwOTAyZmZjODg1ZmNkNClcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9tb25hY28tZWRpdG9yL2Jsb2IvbWFpbi9MSUNFTlNFLnR4dFxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi8vIHNyYy9iYXNpYy1sYW5ndWFnZXMvc2Ivc2IudHNcbnZhciBjb25mID0ge1xuICBjb21tZW50czoge1xuICAgIGxpbmVDb21tZW50OiBcIidcIlxuICB9LFxuICBicmFja2V0czogW1xuICAgIFtcIihcIiwgXCIpXCJdLFxuICAgIFtcIltcIiwgXCJdXCJdLFxuICAgIFtcIklmXCIsIFwiRW5kSWZcIl0sXG4gICAgW1wiV2hpbGVcIiwgXCJFbmRXaGlsZVwiXSxcbiAgICBbXCJGb3JcIiwgXCJFbmRGb3JcIl0sXG4gICAgW1wiU3ViXCIsIFwiRW5kU3ViXCJdXG4gIF0sXG4gIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInLCBub3RJbjogW1wic3RyaW5nXCIsIFwiY29tbWVudFwiXSB9LFxuICAgIHsgb3BlbjogXCIoXCIsIGNsb3NlOiBcIilcIiwgbm90SW46IFtcInN0cmluZ1wiLCBcImNvbW1lbnRcIl0gfSxcbiAgICB7IG9wZW46IFwiW1wiLCBjbG9zZTogXCJdXCIsIG5vdEluOiBbXCJzdHJpbmdcIiwgXCJjb21tZW50XCJdIH1cbiAgXVxufTtcbnZhciBsYW5ndWFnZSA9IHtcbiAgZGVmYXVsdFRva2VuOiBcIlwiLFxuICB0b2tlblBvc3RmaXg6IFwiLnNiXCIsXG4gIGlnbm9yZUNhc2U6IHRydWUsXG4gIGJyYWNrZXRzOiBbXG4gICAgeyB0b2tlbjogXCJkZWxpbWl0ZXIuYXJyYXlcIiwgb3BlbjogXCJbXCIsIGNsb3NlOiBcIl1cIiB9LFxuICAgIHsgdG9rZW46IFwiZGVsaW1pdGVyLnBhcmVudGhlc2lzXCIsIG9wZW46IFwiKFwiLCBjbG9zZTogXCIpXCIgfSxcbiAgICB7IHRva2VuOiBcImtleXdvcmQudGFnLWlmXCIsIG9wZW46IFwiSWZcIiwgY2xvc2U6IFwiRW5kSWZcIiB9LFxuICAgIHsgdG9rZW46IFwia2V5d29yZC50YWctd2hpbGVcIiwgb3BlbjogXCJXaGlsZVwiLCBjbG9zZTogXCJFbmRXaGlsZVwiIH0sXG4gICAgeyB0b2tlbjogXCJrZXl3b3JkLnRhZy1mb3JcIiwgb3BlbjogXCJGb3JcIiwgY2xvc2U6IFwiRW5kRm9yXCIgfSxcbiAgICB7IHRva2VuOiBcImtleXdvcmQudGFnLXN1YlwiLCBvcGVuOiBcIlN1YlwiLCBjbG9zZTogXCJFbmRTdWJcIiB9XG4gIF0sXG4gIGtleXdvcmRzOiBbXG4gICAgXCJFbHNlXCIsXG4gICAgXCJFbHNlSWZcIixcbiAgICBcIkVuZEZvclwiLFxuICAgIFwiRW5kSWZcIixcbiAgICBcIkVuZFN1YlwiLFxuICAgIFwiRW5kV2hpbGVcIixcbiAgICBcIkZvclwiLFxuICAgIFwiR290b1wiLFxuICAgIFwiSWZcIixcbiAgICBcIlN0ZXBcIixcbiAgICBcIlN1YlwiLFxuICAgIFwiVGhlblwiLFxuICAgIFwiVG9cIixcbiAgICBcIldoaWxlXCJcbiAgXSxcbiAgdGFnd29yZHM6IFtcIklmXCIsIFwiU3ViXCIsIFwiV2hpbGVcIiwgXCJGb3JcIl0sXG4gIG9wZXJhdG9yczogW1wiPlwiLCBcIjxcIiwgXCI8PlwiLCBcIjw9XCIsIFwiPj1cIiwgXCJBbmRcIiwgXCJPclwiLCBcIitcIiwgXCItXCIsIFwiKlwiLCBcIi9cIiwgXCI9XCJdLFxuICBpZGVudGlmaWVyOiAvW2EtekEtWl9dW1xcd10qLyxcbiAgc3ltYm9sczogL1s9Pjw6K1xcLSpcXC8lXFwuLF0rLyxcbiAgZXNjYXBlczogL1xcXFwoPzpbYWJmbnJ0dlxcXFxcIiddfHhbMC05QS1GYS1mXXsxLDR9fHVbMC05QS1GYS1mXXs0fXxVWzAtOUEtRmEtZl17OH0pLyxcbiAgdG9rZW5pemVyOiB7XG4gICAgcm9vdDogW1xuICAgICAgeyBpbmNsdWRlOiBcIkB3aGl0ZXNwYWNlXCIgfSxcbiAgICAgIFsvKEBpZGVudGlmaWVyKSg/PVsuXSkvLCBcInR5cGVcIl0sXG4gICAgICBbXG4gICAgICAgIC9AaWRlbnRpZmllci8sXG4gICAgICAgIHtcbiAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgXCJAa2V5d29yZHNcIjogeyB0b2tlbjogXCJrZXl3b3JkLiQwXCIgfSxcbiAgICAgICAgICAgIFwiQG9wZXJhdG9yc1wiOiBcIm9wZXJhdG9yXCIsXG4gICAgICAgICAgICBcIkBkZWZhdWx0XCI6IFwidmFyaWFibGUubmFtZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAvKFsuXSkoQGlkZW50aWZpZXIpLyxcbiAgICAgICAge1xuICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAkMjogW1wiZGVsaW1pdGVyXCIsIFwidHlwZS5tZW1iZXJcIl0sXG4gICAgICAgICAgICBcIkBkZWZhdWx0XCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBbL1xcZCpcXC5cXGQrLywgXCJudW1iZXIuZmxvYXRcIl0sXG4gICAgICBbL1xcZCsvLCBcIm51bWJlclwiXSxcbiAgICAgIFsvWygpXFxbXFxdXS8sIFwiQGJyYWNrZXRzXCJdLFxuICAgICAgW1xuICAgICAgICAvQHN5bWJvbHMvLFxuICAgICAgICB7XG4gICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgIFwiQG9wZXJhdG9yc1wiOiBcIm9wZXJhdG9yXCIsXG4gICAgICAgICAgICBcIkBkZWZhdWx0XCI6IFwiZGVsaW1pdGVyXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBbL1wiKFteXCJcXFxcXXxcXFxcLikqJC8sIFwic3RyaW5nLmludmFsaWRcIl0sXG4gICAgICBbL1wiLywgXCJzdHJpbmdcIiwgXCJAc3RyaW5nXCJdXG4gICAgXSxcbiAgICB3aGl0ZXNwYWNlOiBbXG4gICAgICBbL1sgXFx0XFxyXFxuXSsvLCBcIlwiXSxcbiAgICAgIFsvKFxcJykuKiQvLCBcImNvbW1lbnRcIl1cbiAgICBdLFxuICAgIHN0cmluZzogW1xuICAgICAgWy9bXlxcXFxcIl0rLywgXCJzdHJpbmdcIl0sXG4gICAgICBbL0Blc2NhcGVzLywgXCJzdHJpbmcuZXNjYXBlXCJdLFxuICAgICAgWy9cXFxcLi8sIFwic3RyaW5nLmVzY2FwZS5pbnZhbGlkXCJdLFxuICAgICAgWy9cIkM/LywgXCJzdHJpbmdcIiwgXCJAcG9wXCJdXG4gICAgXVxuICB9XG59O1xuZXhwb3J0IHtcbiAgY29uZixcbiAgbGFuZ3VhZ2Vcbn07XG4iXSwibmFtZXMiOlsiY29uZiIsImNvbW1lbnRzIiwibGluZUNvbW1lbnQiLCJicmFja2V0cyIsImF1dG9DbG9zaW5nUGFpcnMiLCJvcGVuIiwiY2xvc2UiLCJub3RJbiIsImxhbmd1YWdlIiwiZGVmYXVsdFRva2VuIiwidG9rZW5Qb3N0Zml4IiwiaWdub3JlQ2FzZSIsInRva2VuIiwia2V5d29yZHMiLCJ0YWd3b3JkcyIsIm9wZXJhdG9ycyIsImlkZW50aWZpZXIiLCJzeW1ib2xzIiwiZXNjYXBlcyIsInRva2VuaXplciIsInJvb3QiLCJpbmNsdWRlIiwiY2FzZXMiLCIkMiIsIndoaXRlc3BhY2UiLCJzdHJpbmciXSwic291cmNlUm9vdCI6IiJ9