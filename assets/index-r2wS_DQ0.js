var f=Object.defineProperty;var y=(s,t,e)=>t in s?f(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var n=(s,t,e)=>(y(s,typeof t!="symbol"?t+"":t,e),e);const w=(()=>{const s=new DOMParser().parseFromString(`<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
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
</xsl:stylesheet>`,"text/xml"),t=new XSLTProcessor;return t.importStylesheet(s),t})();function i(s){return new Proxy(s,{get:(t,e)=>{const l=parseInt(e,10);if(!isNaN(l))return s[l];if(e==="nodes")return s;if(e==="transposed")return s.map(r=>i([r]));if(e==="length")return s.length;if(e==="xpath")return(r,o)=>p(s,r,o)}})}const P=new XPathEvaluator;function p(s,t,e){const l=XPathResult.ORDERED_NODE_ITERATOR_TYPE;let r=null;typeof e=="object"?r=e.lookupNamespaceURI:typeof e=="function"&&(r=e);let o=P.createExpression(t,r);const h=s.flatMap(m=>{const c=[],x=o.evaluate(m,l);let a=x.iterateNext();for(;a;)c.push(a),a=x.iterateNext();return c});return i(h)}class u{constructor(t){n(this,"source");n(this,"document");this.source=t,this.document=new DOMParser().parseFromString(t,"application/xml")}xpath(t,e){return p([this.document],t,e)}toString(){const t=w.transformToDocument(this.document);return new XMLSerializer().serializeToString(t)}static parse(t){return new u(t)}}let g=`
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
`;export{u as default,g as typescriptDeclarations};
