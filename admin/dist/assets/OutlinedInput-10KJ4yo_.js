import{r,n as K,y as q,ae as ue,af as He,x as me,j as u,_ as o,i as be,k as ge,s as F,m as xe,o as ce,a8 as pe,ad as ye,p as Ce,aM as je,aH as Te,t as _e}from"./index-UxWg3ezt.js";import{u as Re,f as ve,F as Ue}from"./useFormControl-3FAv15pH.js";const Ve=["onChange","maxRows","minRows","style","value"];function D(e,t){return parseInt(e[t],10)||0}const De={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}},qe=r.forwardRef(function(t,n){const{onChange:i,maxRows:a,minRows:s=1,style:g,value:v}=t,x=K(t,Ve),{current:w}=r.useRef(v!=null),f=r.useRef(null),I=q(n,f),S=r.useRef(null),p=r.useRef(0),[z,$]=r.useState({}),y=r.useCallback(()=>{const m=f.current,c=ue(m).getComputedStyle(m);if(c.width==="0px")return;const C=S.current;C.style.width=c.width,C.value=m.value||t.placeholder||"x",C.value.slice(-1)===`
`&&(C.value+=" ");const Z=c["box-sizing"],k=D(c,"padding-bottom")+D(c,"padding-top"),j=D(c,"border-bottom-width")+D(c,"border-top-width"),N=C.scrollHeight;C.value="x";const W=C.scrollHeight;let R=N;s&&(R=Math.max(Number(s)*W,R)),a&&(R=Math.min(Number(a)*W,R)),R=Math.max(R,W);const E=R+(Z==="border-box"?k+j:0),T=Math.abs(R-N)<=1;$(L=>p.current<20&&(E>0&&Math.abs((L.outerHeightStyle||0)-E)>1||L.overflow!==T)?(p.current+=1,{overflow:T,outerHeightStyle:E}):L)},[a,s,t.placeholder]);r.useEffect(()=>{const m=He(()=>{p.current=0,y()}),M=ue(f.current);M.addEventListener("resize",m);let c;return typeof ResizeObserver<"u"&&(c=new ResizeObserver(m),c.observe(f.current)),()=>{m.clear(),M.removeEventListener("resize",m),c&&c.disconnect()}},[y]),me(()=>{y()}),r.useEffect(()=>{p.current=0},[v]);const h=m=>{p.current=0,w||y(),i&&i(m)};return u.jsxs(r.Fragment,{children:[u.jsx("textarea",o({value:v,onChange:h,ref:I,rows:s,style:o({height:z.outerHeightStyle,overflow:z.overflow?"hidden":null},g)},x)),u.jsx("textarea",{"aria-hidden":!0,className:t.className,readOnly:!0,ref:S,tabIndex:-1,style:o({},De.shadow,g,{padding:0})})]})}),Ge=qe;function fe(e){return e!=null&&!(Array.isArray(e)&&e.length===0)}function Ke(e,t=!1){return e&&(fe(e.value)&&e.value!==""||t&&fe(e.defaultValue)&&e.defaultValue!=="")}function mt(e){return e.startAdornment}function Ze(e){return ge("MuiInputBase",e)}const Je=be("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]),G=Je,Qe=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","startAdornment","type","value"],we=(e,t)=>{const{ownerState:n}=e;return[t.root,n.formControl&&t.formControl,n.startAdornment&&t.adornedStart,n.endAdornment&&t.adornedEnd,n.error&&t.error,n.size==="small"&&t.sizeSmall,n.multiline&&t.multiline,n.color&&t[`color${ye(n.color)}`],n.fullWidth&&t.fullWidth,n.hiddenLabel&&t.hiddenLabel]},Ie=(e,t)=>{const{ownerState:n}=e;return[t.input,n.size==="small"&&t.inputSizeSmall,n.multiline&&t.inputMultiline,n.type==="search"&&t.inputTypeSearch,n.startAdornment&&t.inputAdornedStart,n.endAdornment&&t.inputAdornedEnd,n.hiddenLabel&&t.inputHiddenLabel]},Xe=e=>{const{classes:t,color:n,disabled:i,error:a,endAdornment:s,focused:g,formControl:v,fullWidth:x,hiddenLabel:w,multiline:f,size:I,startAdornment:S,type:p}=e,z={root:["root",`color${ye(n)}`,i&&"disabled",a&&"error",x&&"fullWidth",g&&"focused",v&&"formControl",I==="small"&&"sizeSmall",f&&"multiline",S&&"adornedStart",s&&"adornedEnd",w&&"hiddenLabel"],input:["input",i&&"disabled",p==="search"&&"inputTypeSearch",f&&"inputMultiline",I==="small"&&"inputSizeSmall",w&&"inputHiddenLabel",S&&"inputAdornedStart",s&&"inputAdornedEnd"]};return Ce(z,Ze,t)},Se=F("div",{name:"MuiInputBase",slot:"Root",overridesResolver:we})(({theme:e,ownerState:t})=>o({},e.typography.body1,{color:(e.vars||e).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${G.disabled}`]:{color:(e.vars||e).palette.text.disabled,cursor:"default"}},t.multiline&&o({padding:"4px 0 5px"},t.size==="small"&&{paddingTop:1}),t.fullWidth&&{width:"100%"})),Oe=F("input",{name:"MuiInputBase",slot:"Input",overridesResolver:Ie})(({theme:e,ownerState:t})=>{const n=e.palette.mode==="light",i=o({color:"currentColor"},e.vars?{opacity:e.vars.opacity.placeholder}:{opacity:n?.42:.5},{transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})}),a={opacity:"0 !important"},s=e.vars?{opacity:e.vars.opacity.placeholder}:{opacity:n?.42:.5};return o({font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":i,"&::-moz-placeholder":i,"&:-ms-input-placeholder":i,"&::-ms-input-placeholder":i,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${G.formControl} &`]:{"&::-webkit-input-placeholder":a,"&::-moz-placeholder":a,"&:-ms-input-placeholder":a,"&::-ms-input-placeholder":a,"&:focus::-webkit-input-placeholder":s,"&:focus::-moz-placeholder":s,"&:focus:-ms-input-placeholder":s,"&:focus::-ms-input-placeholder":s},[`&.${G.disabled}`]:{opacity:1,WebkitTextFillColor:(e.vars||e).palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},t.size==="small"&&{paddingTop:1},t.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},t.type==="search"&&{MozAppearance:"textfield"})}),Ye=u.jsx(je,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),et=r.forwardRef(function(t,n){const i=xe({props:t,name:"MuiInputBase"}),{"aria-describedby":a,autoComplete:s,autoFocus:g,className:v,components:x={},componentsProps:w={},defaultValue:f,disabled:I,disableInjectingGlobalStyles:S,endAdornment:p,fullWidth:z=!1,id:$,inputComponent:y="input",inputProps:h={},inputRef:m,maxRows:M,minRows:c,multiline:C=!1,name:Z,onBlur:k,onChange:j,onClick:N,onFocus:W,onKeyDown:R,onKeyUp:E,placeholder:T,readOnly:L,renderSuffix:oe,rows:_,startAdornment:P,type:ie="text",value:Ae}=i,ke=K(i,Qe),U=h.value!=null?h.value:Ae,{current:J}=r.useRef(U!=null),B=r.useRef(),Fe=r.useCallback(l=>{},[]),We=q(h.ref,Fe),Be=q(m,We),$e=q(B,Be),[Q,X]=r.useState(!1),d=Re(),b=ve({props:i,muiFormControl:d,states:["color","disabled","error","hiddenLabel","size","required","filled"]});b.focused=d?d.focused:Q,r.useEffect(()=>{!d&&I&&Q&&(X(!1),k&&k())},[d,I,Q,k]);const Y=d&&d.onFilled,ee=d&&d.onEmpty,H=r.useCallback(l=>{Ke(l)?Y&&Y():ee&&ee()},[Y,ee]);me(()=>{J&&H({value:U})},[U,H,J]);const Me=l=>{if(b.disabled){l.stopPropagation();return}W&&W(l),h.onFocus&&h.onFocus(l),d&&d.onFocus?d.onFocus(l):X(!0)},Ne=l=>{k&&k(l),h.onBlur&&h.onBlur(l),d&&d.onBlur?d.onBlur(l):X(!1)},Ee=(l,...se)=>{if(!J){const de=l.target||B.current;if(de==null)throw new Error(Te(1));H({value:de.value})}h.onChange&&h.onChange(l,...se),j&&j(l,...se)};r.useEffect(()=>{H(B.current)},[]);const Le=l=>{B.current&&l.currentTarget===l.target&&B.current.focus(),N&&N(l)};let te=y,O=h;C&&te==="input"&&(_?O=o({type:void 0,minRows:_,maxRows:_},O):O=o({type:void 0,maxRows:M,minRows:c},O),te=Ge);const Pe=l=>{H(l.animationName==="mui-auto-fill-cancel"?B.current:{value:"x"})};r.useEffect(()=>{d&&d.setAdornedStart(!!P)},[d,P]);const V=o({},i,{color:b.color||"primary",disabled:b.disabled,endAdornment:p,error:b.error,focused:b.focused,formControl:d,fullWidth:z,hiddenLabel:b.hiddenLabel,multiline:C,size:b.size,startAdornment:P,type:ie}),re=Xe(V),le=x.Root||Se,ne=w.root||{},ae=x.Input||Oe;return O=o({},O,w.input),u.jsxs(r.Fragment,{children:[!S&&Ye,u.jsxs(le,o({},ne,!pe(le)&&{ownerState:o({},V,ne.ownerState)},{ref:n,onClick:Le},ke,{className:ce(re.root,ne.className,v),children:[P,u.jsx(Ue.Provider,{value:null,children:u.jsx(ae,o({ownerState:V,"aria-invalid":b.error,"aria-describedby":a,autoComplete:s,autoFocus:g,defaultValue:f,disabled:b.disabled,id:$,onAnimationStart:Pe,name:Z,placeholder:T,readOnly:L,required:b.required,rows:_,value:U,onKeyDown:R,onKeyUp:E,type:ie},O,!pe(ae)&&{as:te,ownerState:o({},V,O.ownerState)},{ref:$e,className:ce(re.input,O.className),onBlur:Ne,onChange:Ee,onFocus:Me}))}),p,oe?oe(o({},b,{startAdornment:P})):null]}))]})}),tt=et;function nt(e){return ge("MuiOutlinedInput",e)}const ot=o({},G,be("MuiOutlinedInput",["root","notchedOutline","input"])),A=ot;var he;const it=["children","classes","className","label","notched"],rt=F("fieldset")({textAlign:"left",position:"absolute",bottom:0,right:0,top:-5,left:0,margin:0,padding:"0 8px",pointerEvents:"none",borderRadius:"inherit",borderStyle:"solid",borderWidth:1,overflow:"hidden",minWidth:"0%"}),lt=F("legend")(({ownerState:e,theme:t})=>o({float:"unset",overflow:"hidden"},!e.withLabel&&{padding:0,lineHeight:"11px",transition:t.transitions.create("width",{duration:150,easing:t.transitions.easing.easeOut})},e.withLabel&&o({display:"block",width:"auto",padding:0,height:11,fontSize:"0.75em",visibility:"hidden",maxWidth:.01,transition:t.transitions.create("max-width",{duration:50,easing:t.transitions.easing.easeOut}),whiteSpace:"nowrap","& > span":{paddingLeft:5,paddingRight:5,display:"inline-block",opacity:0,visibility:"visible"}},e.notched&&{maxWidth:"100%",transition:t.transitions.create("max-width",{duration:100,easing:t.transitions.easing.easeOut,delay:50})})));function at(e){const{className:t,label:n,notched:i}=e,a=K(e,it),s=n!=null&&n!=="",g=o({},e,{notched:i,withLabel:s});return u.jsx(rt,o({"aria-hidden":!0,className:t,ownerState:g},a,{children:u.jsx(lt,{ownerState:g,children:s?u.jsx("span",{children:n}):he||(he=u.jsx("span",{className:"notranslate",children:"​"}))})}))}const st=["components","fullWidth","inputComponent","label","multiline","notched","type"],dt=e=>{const{classes:t}=e,i=Ce({root:["root"],notchedOutline:["notchedOutline"],input:["input"]},nt,t);return o({},t,i)},ut=F(Se,{shouldForwardProp:e=>_e(e)||e==="classes",name:"MuiOutlinedInput",slot:"Root",overridesResolver:we})(({theme:e,ownerState:t})=>{const n=e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return o({position:"relative",borderRadius:e.shape.borderRadius,[`&:hover .${A.notchedOutline}`]:{borderColor:e.palette.text.primary},"@media (hover: none)":{[`&:hover .${A.notchedOutline}`]:{borderColor:n}},[`&.${A.focused} .${A.notchedOutline}`]:{borderColor:e.palette[t.color].main,borderWidth:2},[`&.${A.error} .${A.notchedOutline}`]:{borderColor:e.palette.error.main},[`&.${A.disabled} .${A.notchedOutline}`]:{borderColor:e.palette.action.disabled}},t.startAdornment&&{paddingLeft:14},t.endAdornment&&{paddingRight:14},t.multiline&&o({padding:"16.5px 14px"},t.size==="small"&&{padding:"8.5px 14px"}))}),ct=F(at,{name:"MuiOutlinedInput",slot:"NotchedOutline",overridesResolver:(e,t)=>t.notchedOutline})(({theme:e})=>({borderColor:e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"})),pt=F(Oe,{name:"MuiOutlinedInput",slot:"Input",overridesResolver:Ie})(({theme:e,ownerState:t})=>o({padding:"16.5px 14px","&:-webkit-autofill":{WebkitBoxShadow:e.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:e.palette.mode==="light"?null:"#fff",caretColor:e.palette.mode==="light"?null:"#fff",borderRadius:"inherit"}},t.size==="small"&&{padding:"8.5px 14px"},t.multiline&&{padding:0},t.startAdornment&&{paddingLeft:0},t.endAdornment&&{paddingRight:0})),ze=r.forwardRef(function(t,n){var i;const a=xe({props:t,name:"MuiOutlinedInput"}),{components:s={},fullWidth:g=!1,inputComponent:v="input",label:x,multiline:w=!1,notched:f,type:I="text"}=a,S=K(a,st),p=dt(a),z=Re(),$=ve({props:a,muiFormControl:z,states:["required"]});return u.jsx(tt,o({components:o({Root:ut,Input:pt},s),renderSuffix:y=>u.jsx(ct,{className:p.notchedOutline,label:x!=null&&x!==""&&$.required?i||(i=u.jsxs(r.Fragment,{children:[x," ","*"]})):x,notched:typeof f<"u"?f:!!(y.startAdornment||y.filled||y.focused)}),fullWidth:g,inputComponent:v,multiline:w,ref:n,type:I},S,{classes:o({},p,{notchedOutline:null})}))});ze.muiName="Input";const bt=ze;export{tt as I,bt as O,Se as a,Oe as b,Ie as c,Ke as d,mt as e,G as i,we as r};
