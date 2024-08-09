MathJax = {
    loader: { load: ['[tex]/physics', '[tex]/boldsymbol'] },
    tex: {
        packages: { '[+]': ['physics', 'boldsymbol'] },
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        macros: {
            Res: "{\\operatorname{\\mathrm{Res}}}",
            Re: "{\\operatorname{\\mathrm{Re}}}",
            Im: "{\\operatorname{\\mathrm{Im}}}",
            im: "{\\operatorname{\\mathrm{im}}}",
            gcd: "{\\operatorname{\\mathrm{gcd}}}",
            id: "{\\operatorname{\\mathrm{id}}}",
            tgrad: "{\\operatorname{\\mathrm{grad}}}",
            tdiv: "{\\operatorname{\\mathrm{div}}}",
            tcurl: "{\\operatorname{\\mathrm{curl}}}",
            tlap: "{\\operatorname{\\mathrm{lap}}}",
            d: ["{\\operatorname{\\mathrm{d} #1}}", 1],
            boundary: ["{\\partial #1}", 1],
            abs: ["{\\left|#1 \\right|}", 1],
            floor: ["{\\left\\lfloor{#1}\\right\\rfloor}", 1],
            ceil: ["{\\left\\lceil{#1}\\right\\rceil}", 1],
            hodgedual: ["{\\mathord{\\star}#1}", 1],
            ab: ["{ {#1}\_{\\text{ab}} }", 1],
            prn: ["{\\left(#1 \\right)}", 1],
            bvec: ["{\\boldsymbol{\\mathrm{#1}}}", 1],
            grad: ["{\\nabla {#1}}", 1],
            div: ["{\\nabla \\cdot {#1}}", 1],
            curl: ["{\\nabla \\times {#1}}", 1],
            lap: ["{\\nabla^2 {#1}}", 1],
            dal: ["{\\Box {#1}}", 1],
            ito: ["{\\stackrel{\\sim}{\\to}}"],
            lito: ["{\\stackrel{\\sim}{\\longrightarrow}}"],
            lto: ["{\\longrightarrow}"],
            injto: ["{\\hookrightarrow}"],
            scl: ["{\\ell}"],
            closure: ["{\\overline{#1}}", 1],
            divides: ["{\\mid}"],
        }
    },
    svg: {
        fontCache: 'global'
    },
};

// Add blackboard bold, calligraphic and fraktur letters 
// as \A, \scA and \frA, \fra respectively
const A_offset = 'A'.codePointAt()
const a_offset = 'a'.codePointAt()
for (i = 0; i < 26; i++)
{
    big_letter = String.fromCodePoint(A_offset + i);
    small_letter = String.fromCodePoint(a_offset + i);

    MathJax['tex']['macros'][big_letter] = "{\\mathbb " + big_letter + "}";
    MathJax['tex']['macros']['sc' + big_letter] = "{\\mathcal " + big_letter + "}";
    MathJax['tex']['macros']['fr' + big_letter] = "{\\mathfrak " + big_letter + "}";
    MathJax['tex']['macros']['fr' + small_letter] = "{\\mathfrak " + small_letter + "}";
}
