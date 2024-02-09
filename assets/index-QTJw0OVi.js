Date.prototype.toLocalISOString=function(){const t=new Date(this.getTime()),e=t.getTimezoneOffset(),o=e<0?"+":"-",s=Math.abs(e),n=`${Math.floor(s/60)}`.padStart(2,"0"),a=`${s%60}`.padStart(2,"0"),r=`${o}${n}${a}`;t.setUTCMinutes(t.getUTCMinutes()-t.getTimezoneOffset());const c=`${t.getUTCFullYear()}`,i=`${t.getUTCMonth()+1}`.padStart(2,"0"),f=`${t.getUTCDate()}`.padStart(2,"0"),$=`${t.getUTCHours()}`.padStart(2,"0"),g=`${t.getUTCMinutes()}`.padStart(2,"0"),S=`${t.getUTCSeconds()}`.padStart(2,"0"),d=`${t.getUTCMilliseconds()}`.padStart(3,"0");return`${c}-${i}-${f}T${$}:${g}:${S}.${d}${r}`};let l=`
    declare global {
        interface Date {
            toLocalISOString(): string;
        }
    };

    export {};
`;export{l as typescriptDeclarations};
