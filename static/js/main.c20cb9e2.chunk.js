(this.webpackJsonptodolistapi=this.webpackJsonptodolistapi||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function i(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var l=a(22),s=a(11),u=a(31),m=a(40),d=a.n(m),p=a(129),f=a(127),E=Object(f.a)({link:{"&:hover":{textDecoration:"none"}}}),h=function(e){var t=e.children,a=e.href,n=e.color,c=e.className,o=Object(u.a)(e,["children","href","color","className"]),i=E(),s=d()(i.link,c);return r.a.createElement(p.a,Object.assign({},o,{component:l.b,to:a,color:n,className:s}),t)};h.defaultProps={color:"inherit",className:""};var g=h,b=a(130),v=Object(f.a)({button:{margin:"1rem 0"}}),O=function(e){var t=e.children,a=e.color,n=e.className,c=e.onClick,o=Object(u.a)(e,["children","color","className","onClick"]),i=v(),l=d()(i.button,n);return r.a.createElement(b.a,Object.assign({},o,{color:a,className:l,onClick:c,variant:"contained",fullWidth:!0}),t)};O.defaultProps={color:"primary",className:"",onClick:function(){}};var j=O,k=function(){return r.a.createElement(g,{href:"/tasks"},r.a.createElement(j,null,"Go to the todo list"))},S=a(104),T=a(135),A=a(136),x=a(16),w=a(19),C=a.n(w),y=a(28),I={KEY:"tasks"},_=a(14),N={getDataById:function(e,t){return e.filter((function(e){return e.id===t}))[0]||{}},sortById:function(e){return e.sort((function(e,t){return e.id-t.id}))},addToLocalStorage:function(e,t){return window.localStorage.setItem(e,JSON.stringify(t))},getFromLocalStorage:function(e){return window.localStorage.getItem(e)},getApiInstance:function(){var e=Object(y.a)(C.a.mark((function e(t,a,n){var r,c,o;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:t},c={headers:{"Content-Type":"application/json"},body:JSON.stringify(n)},r=n?Object(_.a)(Object(_.a)({},r),c):r,e.prev=3,e.next=6,fetch(a,r);case 6:return o=e.sent,e.next=9,o.json();case 9:return e.abrupt("return",e.sent);case 12:throw e.prev=12,e.t0=e.catch(3),new Error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t,a,n){return e.apply(this,arguments)}}()},L={BASE_PATH:"https://5ee4fc53ddcea00016a37177.mockapi.io/api/v1",TASKS_PATH:"/tasks"},D={getTasks:function(){return N.getApiInstance("GET","".concat(L.BASE_PATH).concat(L.TASKS_PATH))},deleteTask:function(e){return N.getApiInstance("DELETE","".concat(L.BASE_PATH).concat(L.TASKS_PATH,"/").concat(e))},createTask:function(e){return N.getApiInstance("POST","".concat(L.BASE_PATH).concat(L.TASKS_PATH),{text:e})},changeTask:function(e,t){return N.getApiInstance("PUT","".concat(L.BASE_PATH).concat(L.TASKS_PATH,"/").concat(t),{id:t,text:e})}},P=function(e,t,a){var r=Object(n.useReducer)(a,t,(function(){var a;try{var n=N.getFromLocalStorage(e)||"".concat(t);a=JSON.parse(n)}catch(r){a=t}return a})),c=Object(x.a)(r,2),o=c[0],i=c[1];return Object(n.useEffect)((function(){N.addToLocalStorage(e,o)}),[e,o]),[o,i]},F=a(58),H={FETCH_INIT:"FETCH_INIT",FETCH_SUCCESS:"FETCH_SUCCESS",FETCH_FAILURE:"FETCH_FAILURE",ADD_TASK:"ADD_TASK",REMOVE_TASK:"REMOVE_TASK",EDIT_TASK:"EDIT_TASK"},K={isLoading:!0,isError:!1,tasks:[]},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.tasks,r=t.id,c=t.text;switch(a){case H.FETCH_INIT:return Object(_.a)(Object(_.a)({},e),{},{isLoading:!0,isError:!1});case H.FETCH_SUCCESS:return Object(_.a)(Object(_.a)({},e),{},{isLoading:!1,isError:!1,tasks:n});case H.FETCH_FAILURE:return Object(_.a)(Object(_.a)({},e),{},{isLoading:!1,isError:!0});case H.ADD_TASK:return Object(_.a)(Object(_.a)({},e),{},{tasks:[].concat(Object(F.a)(e.tasks),[{id:r,text:c}])});case H.REMOVE_TASK:return Object(_.a)(Object(_.a)({},e),{},{tasks:Object(F.a)(e.tasks).filter((function(e){return e.id!==r}))});case H.EDIT_TASK:return Object(_.a)(Object(_.a)({},e),{},{tasks:Object(F.a)(e.tasks).map((function(e){return e.id===r?Object(_.a)(Object(_.a)({},e),{},{text:c}):e}))});default:return e}},B=function(e,t){return{type:H.ADD_TASK,id:e,text:t}},U=function(e,t){return{type:H.EDIT_TASK,id:e,text:t}},M=function(e){return{type:H.REMOVE_TASK,id:e}},W=function(){var e=P(I.KEY,K,R),t=Object(x.a)(e,2),a=t[0],r=t[1],c=Object(n.useCallback)(Object(y.a)(C.a.mark((function e(){var t,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r({type:H.FETCH_INIT}),e.prev=1,e.next=4,D.getTasks();case 4:t=e.sent,a=N.sortById(t),r({type:H.FETCH_SUCCESS,tasks:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),r({type:H.FETCH_FAILURE});case 12:case"end":return e.stop()}}),e,null,[[1,9]])}))),[r]);return Object(n.useEffect)((function(){c()}),[c]),[a,r,c]},G=a(38),J=Object(f.a)({paper:{margin:"1rem 0",padding:function(e){return e?"1rem 1rem 0":"1rem"}}}),z=function(e){var t=e.children,a=J(!!t);return r.a.createElement(S.a,{className:a.paper},r.a.createElement(G.a,{color:"inherit",align:"center"},"Something went wrong!"),t)};z.defaultProps={children:null};var V=z,Y=a(131),X=a(132),$=Object(f.a)({loader:{height:function(e){return"calc(100vh - ".concat(e,"px)")}}}),q=function(e){var t=e.size,a=e.color,n=e.className,c=Object(u.a)(e,["size","color","className"]),o=$(t),i=d()(o.loader,n);return r.a.createElement(Y.a,{className:i,justify:"center",alignItems:"center",container:!0},r.a.createElement(X.a,Object.assign({},c,{size:t,color:a})))};q.defaultProps={size:100,color:"primary",className:""};var Q=q,Z=Object(n.createContext)(K.tasks),ee=Object(n.createContext)((function(){})),te=function(e){var t=e.children,a=W(),n=Object(x.a)(a,3),c=n[0],o=n[1],i=n[2],l=c.isLoading,s=c.isError,u=c.tasks;return s?r.a.createElement(V,null,r.a.createElement(j,{onClick:i},"Try again")):l?r.a.createElement(Q,null):r.a.createElement(Z.Provider,{value:u},r.a.createElement(ee.Provider,{value:o},t))},ae=a(133),ne=a(134),re=Object(f.a)({listItem:{height:"64px"},listItemText:{color:"#000",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",marginRight:"7rem"}}),ce=function(e){var t=e.text,a=e.id,n=Object(s.i)().url,c=re();return r.a.createElement(ae.a,{className:c.listItem,component:l.b,to:"".concat(n,"/").concat(a),button:!0},r.a.createElement(ne.a,{className:c.listItemText},t))};ce.defaultProps={text:"Simple todo"};var oe=Object(n.memo)(ce),ie=function(){var e=Object(n.useContext)(Z),t=e.length-1;return e.length?r.a.createElement(T.a,null,e.map((function(e,a){return r.a.createElement("li",{key:e.id},r.a.createElement(oe,e),a<t&&r.a.createElement(A.a,null))}))):null},le=function(){var e=Object(s.i)().url;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{href:"".concat(e,"/new")},r.a.createElement(j,null,"Create a new todo")),r.a.createElement(S.a,null,r.a.createElement(ie,null)))},se=a(150),ue={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(n.useState)(e),a=Object(x.a)(t,2),r=a[0],c=a[1],o=function(e){var t=e.target.value;c(t)},i=function(){c("")};return[r,o,i]},de=function(e){var t=Object(n.useState)(e),a=Object(x.a)(t,2),r=a[0],c=a[1];return[r,function(){c(!0)},function(){c(!1)}]},pe=a(29),fe=a(137),Ee=function(e){var t=Object(pe.a)().breakpoints;return Object(fe.a)(t.down(e))},he=a(153),ge=a(138),be=a(139),ve=a(140),Oe=a(141),je=function(e){var t=e.children,a=e.title,n=e.fullScreen,c=e.open,o=e.handleClose,i=Object(u.a)(e,["children","title","fullScreen","open","handleClose"]);return r.a.createElement(he.a,Object.assign({},i,{fullScreen:n,open:c,onClose:o,"aria-labelledby":"responsive-dialog-title"}),r.a.createElement(ge.a,{id:"responsive-dialog-title"},a),r.a.createElement(be.a,null,r.a.createElement(ve.a,null,t)),r.a.createElement(Oe.a,null,r.a.createElement(b.a,{onClick:o,color:"primary",autoFocus:!0},"OK")))};je.defaultProps={children:null,title:"Dialog title",fullScreen:!1,open:!1,handleClose:function(){}};var ke=je,Se=Object(f.a)({paper:{margin:"1rem 0",padding:"0 1rem"}}),Te=function(){var e=Object(s.f)(),t=Object(s.h)().id,a=Object(n.useContext)(ee),c=Object(n.useContext)(Z),o=de(!1),i=Object(x.a)(o,3),l=i[0],u=i[1],m=i[2],d=Ee(ue.SMALL),p=N.getDataById(c,t),f=me(p.text),E=Object(x.a)(f,3),h=E[0],g=E[1],b=E[2],v=Se(),O=p.id?"Edit the todo":"Add a new todo",j=function(){var t=Object(y.a)(C.a.mark((function t(n){var r,c,o,i,l;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),r=p.id?U:B,c=p.id?D.changeTask:D.createTask,t.prev=3,t.next=6,c(h,p.id);case 6:o=t.sent,i=o.id,l=o.text,a(r(i,l)),b(),e.push("/tasks/".concat(i)),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(3),u();case 16:case"end":return t.stop()}}),t,null,[[3,13]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{className:v.paper},r.a.createElement("form",{onSubmit:j},r.a.createElement(se.a,{value:h,onChange:g,label:O,margin:"normal",fullWidth:!0,autoFocus:!0}))),r.a.createElement(ke,{open:l,handleClose:m,fullScreen:d,title:"Something went wrong..."},"Error, please try again later."))},Ae=a(142),xe=a(151),we=a(143),Ce=a(144),ye=a(145),Ie=Object(f.a)({container:{height:"64px",display:"flex",position:"relative",textAlign:"left",alignItems:"center",padding:"8px 16px",justifyContent:"flex-start",textDecoration:"none",backgroundColor:"#fff"},textBox:{flex:"1 1 auto",minWidth:0,margin:"4px 0"},typography:{color:"#000",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",marginRight:"7rem"},secondaryAction:{top:"50%",right:"16px",position:"absolute",transform:"translateY(-50%)"}}),_e=[{id:"home",exact:!0,path:"/",component:k},{id:"tasks",exact:!0,path:"/tasks",component:le},{id:"newTask",path:"/tasks/new",component:Te},{id:"task",exact:!0,path:"/tasks/:id",component:function(){var e=Object(s.i)().url,t=Object(s.f)(),a=Object(s.h)().id,c=Object(n.useContext)(ee),o=Object(n.useContext)(Z),i=de(!1),l=Object(x.a)(i,3),u=l[0],m=l[1],d=l[2],p=Ee(ue.SMALL),f=Ie(),E=N.getDataById(o,a),h=function(){var e=Object(y.a)(C.a.mark((function e(a){var n,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,D.deleteTask(E.id);case 4:n=e.sent,r=n.id,c(M(r)),t.push("/tasks"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),m();case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{href:"/tasks"},r.a.createElement(j,null,"Go back to the todo list")),r.a.createElement(S.a,null,r.a.createElement(Ae.a,{className:f.container},r.a.createElement(xe.a,{className:f.textBox},r.a.createElement(G.a,{className:f.typography,component:"span"},E.text)),r.a.createElement(xe.a,{className:f.secondaryAction},r.a.createElement(we.a,{onClick:h,"aria-label":"delete"},r.a.createElement(Ce.a,null)),r.a.createElement(we.a,{onClick:function(a){a.preventDefault(),t.push("".concat(e,"/edit"))},"aria-label":"edit"},r.a.createElement(ye.a,null))))),r.a.createElement(ke,{open:u,handleClose:d,fullScreen:p,title:"Something went wrong..."},"Error, please try again later."))}},{id:"editTask",path:"/tasks/:id/edit",component:Te},{id:"NoMatch",component:function(){return r.a.createElement(V,null,r.a.createElement(g,{href:"/"},r.a.createElement(j,null,"Go to the home page")))}}],Ne=a(146),Le=a(147),De=a(148),Pe=a(149),Fe=Object(f.a)({paper:{padding:0,margin:0,height:"100vh",backgroundColor:"#fafafa"},appBar:{height:"64px"},grid:{margin:"1rem 0"},fab:{margin:"1rem",position:"fixed",bottom:0,right:0}}),He=function(e){var t=e.children,a=Object(s.f)(),n=Object(s.g)().pathname,c=Fe(),o=n.includes("tasks");return r.a.createElement(S.a,{className:c.paper,elevation:0},r.a.createElement(Ne.a,{className:c.appBar,color:"primary",position:"static"},r.a.createElement(Le.a,null,r.a.createElement(g,{href:"/"},"ToDo List API"))),r.a.createElement(Y.a,{className:c.grid,justify:"center",container:!0},r.a.createElement(Y.a,{xs:11,md:8,lg:4,item:!0},r.a.createElement(te,null,t))),o&&r.a.createElement(De.a,{className:c.fab,onClick:a.goBack,color:"primary","aria-label":"back"},r.a.createElement(Pe.a,null)))},Ke=a(72),Re=a(73),Be=a(75),Ue=a(74),Me=function(e){Object(Be.a)(a,e);var t=Object(Ue.a)(a);function a(){var e;Object(Ke.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isError:!1},e.reload=function(){return window.location.reload()},e}return Object(Re.a)(a,[{key:"render",value:function(){var e=this.state.isError,t=this.props.children;return e?r.a.createElement(V,null,r.a.createElement(j,{onClick:this.reload},"Reload the page")):t}}],[{key:"getDerivedStateFromError",value:function(){return{isError:!0}}}]),a}(n.Component),We=function(){return r.a.createElement(n.StrictMode,null,r.a.createElement(Me,null,r.a.createElement(l.a,null,r.a.createElement(He,null,r.a.createElement(s.c,null,_e.map((function(e){var t=e.id,a=e.exact,n=e.path,c=e.component;return r.a.createElement(s.a,{key:t,exact:a,path:n},r.a.createElement(c,null))})))))))};a(100);Object(c.render)(r.a.createElement(We,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/ToDoListAPI",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/ToDoListAPI","/service-worker.js");o?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):i(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):i(t,e)}))}}()},89:function(e,t,a){e.exports=a(101)}},[[89,1,2]]]);
//# sourceMappingURL=main.c20cb9e2.chunk.js.map