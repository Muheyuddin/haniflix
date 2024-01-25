import{i as q,k as U,s as A,_ as n,h as J,r as v,m as K,n as Q,j as r,ai as X,o as Y,ad as e,p as Z,N as L,O,B as G,W as S,S as B,aj as P,a as E}from"./index-UxWg3ezt.js";import{P as w}from"./index-nDWScfRY.js";import{P as oo}from"./index-1cljy8ee.js";import{C as y,F as ro}from"./index-w_IxFKN9.js";import{d as io}from"./Add-PrncZwWW.js";import{C as ao}from"./Container-tCW55QtL.js";import{G as x}from"./Grid-7WI3L6ty.js";import{C as z}from"./Card-0rpxK5Ba.js";import{C as _}from"./CardContent-6S8HbQZe.js";import{B as t}from"./Badge-Mb8gwbwj.js";import{F as eo}from"./FormControlLabel-hF1JdzWz.js";import{S as to}from"./Switch-p5Zf_iZz.js";import"./AddTwoTone-9e9zgFmd.js";import"./shouldSpreadAdditionalProps-f6TODkkP.js";import"./useFormControl-3FAv15pH.js";import"./SwitchBase-IHTtuvnj.js";function no(i){return U("MuiButtonGroup",i)}const s=q("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary"]),so=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],lo=(i,o)=>{const{ownerState:a}=i;return[{[`& .${s.grouped}`]:o.grouped},{[`& .${s.grouped}`]:o[`grouped${e(a.orientation)}`]},{[`& .${s.grouped}`]:o[`grouped${e(a.variant)}`]},{[`& .${s.grouped}`]:o[`grouped${e(a.variant)}${e(a.orientation)}`]},{[`& .${s.grouped}`]:o[`grouped${e(a.variant)}${e(a.color)}`]},o.root,o[a.variant],a.disableElevation===!0&&o.disableElevation,a.fullWidth&&o.fullWidth,a.orientation==="vertical"&&o.vertical]},co=i=>{const{classes:o,color:a,disabled:l,disableElevation:u,fullWidth:h,orientation:d,variant:c}=i,p={root:["root",c,d==="vertical"&&"vertical",h&&"fullWidth",u&&"disableElevation"],grouped:["grouped",`grouped${e(d)}`,`grouped${e(c)}`,`grouped${e(c)}${e(d)}`,`grouped${e(c)}${e(a)}`,l&&"disabled"]};return Z(p,no,o)},uo=A("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:lo})(({theme:i,ownerState:o})=>n({display:"inline-flex",borderRadius:(i.vars||i).shape.borderRadius},o.variant==="contained"&&{boxShadow:(i.vars||i).shadows[2]},o.disableElevation&&{boxShadow:"none"},o.fullWidth&&{width:"100%"},o.orientation==="vertical"&&{flexDirection:"column"},{[`& .${s.grouped}`]:n({minWidth:40,"&:not(:first-of-type)":n({},o.orientation==="horizontal"&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},o.orientation==="vertical"&&{borderTopRightRadius:0,borderTopLeftRadius:0},o.variant==="outlined"&&o.orientation==="horizontal"&&{marginLeft:-1},o.variant==="outlined"&&o.orientation==="vertical"&&{marginTop:-1}),"&:not(:last-of-type)":n({},o.orientation==="horizontal"&&{borderTopRightRadius:0,borderBottomRightRadius:0},o.orientation==="vertical"&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},o.variant==="text"&&o.orientation==="horizontal"&&{borderRight:i.vars?`1px solid rgba(${i.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${i.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`},o.variant==="text"&&o.orientation==="vertical"&&{borderBottom:i.vars?`1px solid rgba(${i.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${i.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`},o.variant==="text"&&o.color!=="inherit"&&{borderColor:i.vars?`rgba(${i.vars.palette[o.color].mainChannel} / 0.5)`:J(i.palette[o.color].main,.5)},o.variant==="outlined"&&o.orientation==="horizontal"&&{borderRightColor:"transparent"},o.variant==="outlined"&&o.orientation==="vertical"&&{borderBottomColor:"transparent"},o.variant==="contained"&&o.orientation==="horizontal"&&{borderRight:`1px solid ${(i.vars||i).palette.grey[400]}`,[`&.${s.disabled}`]:{borderRight:`1px solid ${(i.vars||i).palette.action.disabled}`}},o.variant==="contained"&&o.orientation==="vertical"&&{borderBottom:`1px solid ${(i.vars||i).palette.grey[400]}`,[`&.${s.disabled}`]:{borderBottom:`1px solid ${(i.vars||i).palette.action.disabled}`}},o.variant==="contained"&&o.color!=="inherit"&&{borderColor:(i.vars||i).palette[o.color].dark},{"&:hover":n({},o.variant==="outlined"&&o.orientation==="horizontal"&&{borderRightColor:"currentColor"},o.variant==="outlined"&&o.orientation==="vertical"&&{borderBottomColor:"currentColor"})}),"&:hover":n({},o.variant==="contained"&&{boxShadow:"none"})},o.variant==="contained"&&{boxShadow:"none"})})),po=v.forwardRef(function(o,a){const l=K({props:o,name:"MuiButtonGroup"}),{children:u,className:h,color:d="primary",component:c="div",disabled:p=!1,disableElevation:b=!1,disableFocusRipple:m=!1,disableRipple:f=!1,fullWidth:j=!1,orientation:D="horizontal",size:C="medium",variant:R="outlined"}=l,I=Q(l,so),W=n({},l,{color:d,component:c,disabled:p,disableElevation:b,disableFocusRipple:m,disableRipple:f,fullWidth:j,orientation:D,size:C,variant:R}),$=co(W),N=v.useMemo(()=>({className:$.grouped,color:d,disabled:p,disableElevation:b,disableFocusRipple:m,disableRipple:f,fullWidth:j,size:C,variant:R}),[d,p,b,m,f,j,C,R,$.grouped]);return r.jsx(uo,n({as:c,role:"group",className:Y($.root,h),ref:a,ownerState:W},I,{children:r.jsx(X.Provider,{value:N,children:u})}))}),go=po;var M={},xo=O;Object.defineProperty(M,"__esModule",{value:!0});var V=M.default=void 0,vo=xo(L()),ho=r,bo=(0,vo.default)((0,ho.jsx)("path",{d:"M19 13H5v-2h14v2z"}),"Remove");V=M.default=bo;var T={},mo=O;Object.defineProperty(T,"__esModule",{value:!0});var g=T.default=void 0,fo=mo(L()),jo=r,Co=(0,fo.default)((0,jo.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"}),"Mail");g=T.default=Co;const F={bgcolor:"primary.main",width:40,height:40},Ro={borderRadius:"50%"},k=r.jsx(G,{component:"span",sx:F}),H=r.jsx(G,{component:"span",sx:{...F,...Ro}});function Fo(){const[i,o]=v.useState(1),[a,l]=v.useState(!1),u=()=>{l(!a)};return r.jsxs(r.Fragment,{children:[r.jsx(S,{children:r.jsx("title",{children:"Badges - Components"})}),r.jsx(oo,{children:r.jsx(w,{heading:"Badges",subHeading:"Badge generates a small badge to the top-right of its child(ren).",docs:"https://material-ui.com/components/badges/"})}),r.jsx(ao,{maxWidth:"lg",children:r.jsxs(x,{container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:3,children:[r.jsx(x,{item:!0,xs:12,children:r.jsxs(z,{children:[r.jsx(y,{title:"Shapes"}),r.jsx(B,{}),r.jsx(_,{children:r.jsxs(P,{spacing:3,direction:"row",children:[r.jsx(t,{color:"secondary",badgeContent:" ",children:k}),r.jsx(t,{color:"secondary",badgeContent:" ",variant:"dot",children:k}),r.jsx(t,{color:"secondary",overlap:"circular",badgeContent:" ",children:H}),r.jsx(t,{color:"secondary",overlap:"circular",badgeContent:" ",variant:"dot",children:H})]})})]})}),r.jsx(x,{item:!0,xs:12,children:r.jsxs(z,{children:[r.jsx(y,{title:"Badges Visibility"}),r.jsx(B,{}),r.jsx(_,{children:r.jsxs(G,{sx:{color:"action.active",display:"flex",flexDirection:"column","& > *":{marginBottom:2},"& .MuiBadge-root":{marginRight:4}},children:[r.jsxs("div",{children:[r.jsx(t,{color:"secondary",badgeContent:i,children:r.jsx(g,{})}),r.jsxs(go,{children:[r.jsx(E,{"aria-label":"reduce",onClick:()=>{o(Math.max(i-1,0))},children:r.jsx(V,{fontSize:"small"})}),r.jsx(E,{"aria-label":"increase",onClick:()=>{o(i+1)},children:r.jsx(io,{fontSize:"small"})})]})]}),r.jsxs("div",{children:[r.jsx(t,{color:"secondary",variant:"dot",invisible:a,children:r.jsx(g,{})}),r.jsx(eo,{sx:{color:"text.primary"},control:r.jsx(to,{checked:!a,onChange:u}),label:"Show Badge"})]})]})})]})}),r.jsx(x,{item:!0,xs:12,children:r.jsxs(z,{children:[r.jsx(y,{title:"Colors"}),r.jsx(B,{}),r.jsx(_,{children:r.jsxs(P,{spacing:2,direction:"row",children:[r.jsx(t,{badgeContent:4,color:"secondary",children:r.jsx(g,{color:"action"})}),r.jsx(t,{badgeContent:4,color:"success",children:r.jsx(g,{color:"action"})})]})})]})})]})}),r.jsx(ro,{})]})}export{Fo as default};
