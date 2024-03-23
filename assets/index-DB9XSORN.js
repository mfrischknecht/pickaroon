String.prototype.setWidth=function(t){return t<1?"":this.length<=t?this.padEnd(t):this.substr(0,t-1)+"…"};String.prototype.format=function(t){const r=JSON.parse(JSON.stringify(t));return r.content=this,r};let e=`
    declare global {
        interface String {
            setWidth(width: number): string;
            format(format: Omit<FormattedText, 'content'>): FormattedText;
        }
    };

    export {};
`;export{e as typescriptDeclarations};
