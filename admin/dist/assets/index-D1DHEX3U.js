import{j as e,T as D,r as i,u as y,ay as l,B as C,a as b,b as _,c as S,W as I,ab as B,Q as F,R as W}from"./index-UxWg3ezt.js";import{P as w}from"./index-1cljy8ee.js";import{T as k}from"./TextField-EtPTPldC.js";import{F as P}from"./FormControlLabel-hF1JdzWz.js";import{C as L}from"./Checkbox-tc_mldm7.js";import{C as M}from"./Container-tCW55QtL.js";import{G as A}from"./Grid-7WI3L6ty.js";import{T as q,a as R,b as G,c as U,d as c,e as H}from"./TableRow-a8LrD-6U.js";import{C as E}from"./Chip-CG61bexS.js";import{E as O,D as Q,C as z,a as J,b as K,c as N}from"./Edit-vbW1gcSi.js";import{D as V,a as X}from"./DialogTitle-Lg5rTFAR.js";import"./FormControl-kAW0uwil.js";import"./OutlinedInput-10KJ4yo_.js";import"./useFormControl-3FAv15pH.js";import"./InputLabel-dtf-HdNi.js";import"./Select-Mt5imv_x.js";import"./react-is.production.min-pGgGHoNV.js";import"./FormHelperText-tsMyAYUM.js";import"./SwitchBase-IHTtuvnj.js";function Y(){return e.jsxs(e.Fragment,{children:[e.jsx(D,{variant:"h3",component:"h3",gutterBottom:!0,children:"Users"}),e.jsx(D,{variant:"subtitle2",children:"Manage Users"})]})}const Z=({callback:h,item:r})=>{const[o,g]=i.useState(""),[n,p]=i.useState(""),[a,u]=i.useState(""),[d,m]=i.useState(!1),x=y(),j=()=>{g(""),p(""),u(""),m(!1)},T=t=>{g(t.fullname),p(t.email),m(t.isAdmin)},s=i.useCallback(()=>{l.loading("saving...",{position:"top-right"});const t={fullname:o,email:n,username:n,isAdmin:d,password:a};x.createUser(t).then(()=>{h(t),j(),l.dismiss(),l.success("saved",{position:"top-right"})}).catch(v=>{console.error(v),l.dismiss(),l.error("failed",{position:"top-right"})})},[o,n,a,d]),f=i.useCallback(()=>{l.loading("saving...",{position:"top-right"});const t={fullname:o,email:n,username:n,isAdmin:d,password:void 0};a.length>0&&(t.password=a),x.updateUser(r._id,t).then(()=>{l.dismiss(),l.success("saved",{position:"top-right"}),h(t),j()}).catch(v=>{console.error(v),l.dismiss(),l.error("failed",{position:"top-right"})})},[r,o,n,a,d]);return i.useEffect(()=>{r!=null&&T(r)},[r]),e.jsxs(e.Fragment,{children:[e.jsxs(C,{component:"form",sx:{"& .MuiTextField-root":{m:1}},children:[e.jsx(k,{label:"Fullname",fullWidth:!0,required:!0,value:o,onChange:t=>{g(t.target.value)}}),e.jsx(k,{label:"email",fullWidth:!0,required:!0,value:n,onChange:t=>{p(t.target.value)}}),e.jsx(k,{label:"password",type:"password",fullWidth:!0,required:!0,value:a,onChange:t=>{u(t.target.value)}}),e.jsx(C,{marginLeft:1,marginTop:1,children:e.jsx(P,{label:"Is Admin",control:e.jsx(L,{checked:d,onChange:t=>m(t.target.checked)})})})]}),e.jsx(C,{marginLeft:1,marginTop:3,children:r?e.jsx(b,{variant:"contained",onClick:f,children:"Update"}):e.jsx(b,{variant:"contained",onClick:s,children:"Save"})})]})};function fe(){const[h,r]=i.useState(!1),[o,g]=i.useState([]),[n,p]=i.useState(null),[a,u]=i.useState(null),d=y(),m=_(S),x=i.useCallback(()=>{l.loading("loading...",{position:"top-right"}),d.getUsers().then(s=>{l.dismiss(),g(s)})},[]),j=i.useCallback(s=>o.find(f=>f._id===s),[o]),T=i.useCallback(s=>{s!=null&&(l.loading("loading...",{position:"top-right"}),d.deleteUser(s._id).then(()=>{l.dismiss(),l.success("deleted",{position:"top-right"}),x(),u(null)}).catch(f=>{l.dismiss(),l.error("failed",{position:"top-right"}),console.error(f)}))},[]);return i.useEffect(()=>{x()},[]),i.useEffect(()=>{if(n!=null){const s=j(n._id);r(!!s)}},[n]),i.useEffect(()=>{h||p(null)},[h]),e.jsxs(e.Fragment,{children:[e.jsx(I,{children:e.jsx("title",{children:"Users"})}),e.jsx(w,{children:e.jsx(Y,{})}),e.jsxs(M,{maxWidth:"lg",children:[e.jsxs(A,{container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:3,children:[e.jsx(A,{item:!0,xs:12,children:e.jsx(b,{variant:"contained",onClick:()=>r(!0),children:"Add user"})}),e.jsx(A,{item:!0,xs:12,children:e.jsx(q,{component:B,children:e.jsxs(R,{"aria-label":"simple table",children:[e.jsx(G,{children:e.jsxs(U,{children:[e.jsx(c,{children:"Full name"}),e.jsx(c,{align:"right",children:"Email"}),e.jsx(c,{align:"right",children:"Is Admin"}),e.jsx(c,{align:"right",children:"Actions"})]})}),e.jsx(H,{children:o.map(s=>e.jsxs(U,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsxs(c,{component:"th",scope:"row",children:[s.fullname," ",s._id==m._id?e.jsx(E,{label:"current user",color:"warning",sx:{marginLeft:2}}):null]}),e.jsx(c,{align:"right",children:s.email}),e.jsx(c,{align:"right",children:s.isAdmin?e.jsx(E,{label:"admin",color:"success"}):null}),e.jsxs(c,{align:"right",children:[e.jsx(F,{sx:{p:"10px"},"aria-label":"menu",onClick:()=>p(s),children:e.jsx(O,{})}),s._id!==m._id?e.jsx(F,{sx:{p:"10px"},onClick:()=>u(s),children:e.jsx(Q,{})}):null]})]},s._id))})]})})})]}),e.jsx(W,{anchor:"right",open:h,onClose:()=>{r(!1)},children:e.jsxs(C,{sx:{width:500},children:[e.jsxs(D,{id:"modal-modal-title",variant:"h2",component:"h2",align:"center",marginTop:3,children:[n?"Update a user":"Add a user",e.jsx("span",{style:{position:"absolute",top:10,right:5,cursor:"pointer"},onClick:()=>r(!1),children:e.jsx(z,{})})]}),e.jsx(C,{padding:5,children:e.jsx(Z,{callback:x,item:n?j(n._id):null})})]})}),e.jsxs(V,{open:a!=null,onClose:()=>u(null),"aria-labelledby":"delete tag group","aria-describedby":"Dialog displayed to confirm tag group delete",children:[e.jsx(X,{id:"alert-dialog-title",children:"Delete user"}),e.jsx(J,{children:e.jsxs(K,{id:"alert-dialog-description",children:["Are you sure to delete ",a==null?void 0:a.fullname," ?"]})}),e.jsxs(N,{children:[e.jsx(b,{onClick:()=>u(null),children:"Cancel"}),e.jsx(b,{onClick:()=>T(a),autoFocus:!0,children:"Delete"})]})]})]})]})}export{fe as default};
