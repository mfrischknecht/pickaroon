var m=Object.defineProperty;var f=(e,t,s)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var n=(e,t,s)=>(f(e,typeof t!="symbol"?t+"":t,s),s);const d=(()=>{const e=new DOMParser().parseFromString(`<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="*">
        <xsl:copy>
            <xsl:copy-of select="./@*"/>
            <xsl:choose>
                <xsl:when test="*">
                    <xsl:for-each select="*|text()[normalize-space()]|comment()">
                        <xsl:text>&#xA;</xsl:text>
                        <xsl:for-each select="ancestor::*"><xsl:text>  </xsl:text></xsl:for-each>
                        <xsl:apply-templates select="."/>
                    </xsl:for-each>
                    <xsl:text>&#xA;</xsl:text>
                    <xsl:for-each select="ancestor::*"><xsl:text>  </xsl:text></xsl:for-each>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:for-each select="text()">
                        <xsl:apply-templates select="."/>
                    </xsl:for-each>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:copy>
    </xsl:template>

    <xsl:template match="comment()">
        <xsl:copy/>
    </xsl:template>

    <xsl:template match="text()">
        <xsl:value-of select="normalize-space()"/>
    </xsl:template>
</xsl:stylesheet>`,"text/xml"),t=new XSLTProcessor;return t.importStylesheet(e),t})();function i(e){return new Proxy(e,{get:(t,s)=>{const l=parseInt(s,10);if(!isNaN(l))return e[l];if(s==="nodes")return e;if(s==="transposed")return e.map(r=>i([r]));if(s==="length")return e.length;if(s==="xpath")return(r,o)=>p(e,r,o)}})}function p(e,t,s){const l=XPathResult.ORDERED_NODE_ITERATOR_TYPE,r=s??null,o=e.flatMap(h=>{const c=[],x=document.evaluate(t,h,r,l,null);let a=x.iterateNext();for(;a;)c.push(a),a=x.iterateNext();return c});return i(o)}class u{constructor(t){n(this,"source");n(this,"document");this.source=t,this.document=new DOMParser().parseFromString(t,"application/xml")}xpath(t,s){return p([this.document],t,s)}toString(){const t=d.transformToDocument(this.document);return new XMLSerializer().serializeToString(t)}static parse(t){return new u(t)}}let w=`
    export interface XPathResult {
        [index: number]: Node;
        nodes: Node[];
        transposed: XPathResult[],
        length: number;
        xpath(xpath: string, namespaceResolver?: XPathNSResolver): XPathResult;
    }

    export default class Xml {
        public readonly source:   string;
        public readonly document: Document;

        public xpath(path: string): XPathResult;
        public toString(): string;
        public static parse(source: string): Xml;
    }
`;export{u as default,w as typescriptDeclarations};
