(this["webpackJsonpblog-read"]=this["webpackJsonpblog-read"]||[]).push([[0],{109:function(e,t,n){},340:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),c=n.n(a),s=n(93),o=n.n(s),i=n(5),l=n.n(i),u=n(9),d=n(7),b=n(12),j=n(11),m=n(13),h=n(44),x=function(e){var t=e.component,n=Object(h.a)(e,["component"]);return Object(r.jsx)(j.b,Object(m.a)(Object(m.a)({},n),{},{render:function(e){return localStorage.getItem("token")?Object(r.jsx)(t,Object(m.a)({},e)):Object(r.jsx)(j.a,{to:"/login"})}}))},p=function(e){var t=e.component,n=e.appProps,a=Object(h.a)(e,["component","appProps"]);return Object(r.jsx)(j.b,Object(m.a)(Object(m.a)({},a),{},{render:function(e){return localStorage.getItem("token")?Object(r.jsx)(j.a,{to:"/"}):Object(r.jsx)(t,Object(m.a)(Object(m.a)({},e),n))}}))},O="https://clumsy-blog.herokuapp.com",v=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(O);case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(O,"/user/signup"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(O,"/auth/login"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(O,"/auth/logout"),{method:"POST",credentials:"include"});case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(O,"/blog/all"),{headers:{authorization:"Bearer ".concat(t)},credentials:"include"});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(O,"/user/me"),{headers:{authorization:"Bearer ".concat(t)},credentials:"include"});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(u.a)(l.a.mark((function e(t,n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(O,"/blog/").concat(t,"/view"),{headers:{authorization:"Bearer ".concat(n)},credentials:"include"});case 3:return r=e.sent,e.next=6,r.json();case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}(),S=function(){var e=Object(u.a)(l.a.mark((function e(t,n,r){var a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(O,"/blog/").concat(t,"/comment/new"),{method:"POST",headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(r)},credentials:"include",body:JSON.stringify(n)});case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,e.abrupt("return",c);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n,r){return e.apply(this,arguments)}}(),C=n(18),P=function(e){var t=Object(j.g)(),n=Object(C.e)({loading:!e.server,indicator:Object(r.jsx)(C.c,{width:"28"}),loaderProps:{style:{color:"#00ffff"}}}),a=n.containerProps,c=n.indicatorEl,s=function(){var n=Object(u.a)(l.a.mark((function n(){var r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,N();case 3:"Logged out successfully"===(r=n.sent).message?(localStorage.clear(),e.clearUser(),e.setAuth(!1),document.cookie="login=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",t.push("/login")):console.error(r),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();return Object(r.jsx)("div",{className:"Navbar",children:Object(r.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark mb-2",children:[Object(r.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[Object(r.jsx)(b.c,{className:"navbar-brand mr-2",to:"/",replace:!0,children:"Clumsyknight's Blog"}),!e.server&&Object(r.jsx)("div",Object(m.a)(Object(m.a)({style:{color:"#00ff80",cursor:"pointer"},title:"Connecting"},a),{},{children:c})),e.server&&Object(r.jsx)("div",{title:"Connected",children:Object(r.jsx)("svg",{height:"20",width:"20",cursor:"pointer",children:Object(r.jsx)("circle",{cx:"15",cy:"10",r:"5",fill:"#00ffbf"})})})]}),Object(r.jsx)("button",{className:"navbar-toggler ml-auto custom-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"container",children:[!e.authenticated&&Object(r.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(r.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(b.c,{activeClassName:"active",className:"nav-link",to:"/login",children:"Login"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(b.c,{activeClassName:"active",className:"nav-link",to:"/signup",children:"Signup"})})]})}),e.authenticated&&Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:[Object(r.jsx)("ul",{className:"navbar-nav",children:Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(b.c,{className:"nav-link",activeClassName:"active",to:"/blogs",children:"Blogs"})})}),Object(r.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(b.c,{activeClassName:"active",className:"nav-link",title:"".concat(e.user.firstname," ").concat(e.user.lastname),to:"/profile",children:"My Profile"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("div",{className:"nav-link",onClick:s,style:{cursor:"pointer"},children:"Logout"})})]})]})]})]})})},E=function(){return Object(r.jsx)("div",{className:"Home",children:Object(r.jsxs)("div",{className:"shadow p-4 w-75 mx-auto",style:{fontSize:18},children:[Object(r.jsx)("h3",{className:"text-center",children:"Landing Page"}),Object(r.jsxs)("div",{className:"mt-3",children:["If you see a loading animation instead of a green dot next to",Object(r.jsx)("code",{children:" Clumsyknight's Blog"}),", that means your network isn't connected to the server yet. This happens because Heroku puts the API on sleep if there's no activity in 1 hour."]}),Object(r.jsxs)("div",{className:"mt-2",children:["This site is meant for reading Blog posts and commenting on those posts. If you want to post yourself you'll have to go to",Object(r.jsx)("code",{children:Object(r.jsx)("a",{href:"https://clumsynite.github.io/blog-write",className:"link mx-1",title:"Site meant for posting yourself",children:"Blog Write"})}),"."]}),Object(r.jsxs)("div",{className:"mt-2",children:[Object(r.jsx)(b.b,{className:"link mr-2",to:"/login",children:"Login"}),"if you haven't logged in yet. You need to have an account if you want to read posts."]}),Object(r.jsxs)("div",{className:"mt-2",children:[Object(r.jsx)(b.b,{className:"link mr-2",to:"/signup",children:"Signup"}),"if you are new here. Be sure to remember you password, you can't reset it and there's nothing we can do if you forget it."]})]})})},L=function(e){return Object(r.jsx)("div",{className:"Errors mx-auto",children:Object(r.jsx)("div",{className:"alert alert-danger",children:e.error})})},T=function(e){var t=Object(j.g)(),n=Object(a.useState)(!1),c=Object(d.a)(n,2),s=c[0],o=c[1],i=Object(a.useState)(""),b=Object(d.a)(i,2),m=b[0],h=b[1],x=Object(a.useState)(""),p=Object(d.a)(x,2),O=p[0],v=p[1],f=Object(a.useState)(""),N=Object(d.a)(f,2),y=N[0],w=N[1];Object(a.useEffect)((function(){return setTimeout((function(){w("")}),5e3)}),[y,w]);var k=function(){var n=Object(u.a)(l.a.mark((function n(r){var a,c,s;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),""!==m.trim()){n.next=5;break}w("Username can't be Empty"),n.next=31;break;case 5:if(""!==O.trim()){n.next=9;break}w("Password can't be Empty"),n.next=31;break;case 9:return o(!0),n.prev=10,n.next=13,g({username:m,password:O});case 13:if(a=n.sent,o(!1),a.user){n.next=17;break}return n.abrupt("return",w("Username or Password is wrong"));case 17:c=a.token,s=a.user,localStorage.setItem("token",c),localStorage.setItem("user",s),e.setAuth(!0),e.setUser(s),document.cookie="login=true",t.push("/blogs"),n.next=31;break;case 27:n.prev=27,n.t0=n.catch(10),o(!1),w(n.t0);case 31:case"end":return n.stop()}}),n,null,[[10,27]])})));return function(e){return n.apply(this,arguments)}}();return Object(r.jsx)("div",{className:"Login",children:Object(r.jsxs)("div",{className:"card shadow mx-auto text-center",style:{width:"18rem",backgroundColor:"transparent"},children:[Object(r.jsx)("h3",{className:"card-header",children:"Please Login"}),Object(r.jsx)("div",{className:"card-body  mx-auto",children:Object(r.jsxs)("form",{method:"",action:"",children:[Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"text",placeholder:"Enter Username",name:"username",required:!0,minLength:"6",autoFocus:!0,className:"form-control form-control-lg text-center",onChange:function(e){return h(e.target.value)}})}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"password",placeholder:"Enter Password",name:"password",required:!0,minLength:"8",className:"form-control form-control-lg text-center",onChange:function(e){return v(e.target.value)}})}),Object(r.jsxs)("button",{className:"btn btn-block btn-lg ".concat(s?"btn-primary":"btn-outline-primary"),type:"submit",onClick:k,disabled:s,children:[!s&&"Login",s&&Object(r.jsx)(C.d,{width:"24"})]})]})}),y.length>0&&Object(r.jsx)(L,{error:y})]})})},B=n(31),A=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),o=Object(d.a)(s,2),i=o[0],j=o[1],m=Object(a.useState)(""),h=Object(d.a)(m,2),x=h[0],p=h[1],O=Object(a.useState)(""),v=Object(d.a)(O,2),g=v[0],N=v[1],y=Object(a.useState)(""),w=Object(d.a)(y,2),k=w[0],S=w[1],P=Object(a.useState)(""),E=Object(d.a)(P,2),T=E[0],A=E[1],I=Object(a.useState)(""),U=Object(d.a)(I,2),F=U[0],_=U[1];Object(a.useEffect)((function(){return setTimeout((function(){_("")}),5e3)}),[F,_]);var z=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==i.trim()){e.next=5;break}_("Firstname can't be Empty"),e.next=30;break;case 5:if(""!==x.trim()){e.next=9;break}_("Lastname can't be Empty"),e.next=30;break;case 9:if(""!==g.trim()){e.next=13;break}_("Username can't be Empty"),e.next=30;break;case 13:if(""!==k.trim()){e.next=17;break}_("Password can't be Empty"),e.next=30;break;case 17:return c(!0),e.prev=18,e.next=21,f({firstname:i,lastname:x,username:g,password:k});case 21:n=e.sent,c(!1),n.user&&(A('\n          <div>Successfully created new account.</div>\n          <div className="text-left>\n          <div><strong>Firstname</strong>: '.concat(n.user.firstname,"</div>\n          <div><strong>Lastname:</strong> ").concat(n.user.lastname,"</div>\n          <div><strong>Username:</strong> ").concat(n.user.username,"</div>\n          <div><strong>Password:</strong> ").concat(k,"</div>\n          </div>\n          ")),j(""),p(""),N(""),S("")),e.next=30;break;case 26:e.prev=26,e.t0=e.catch(18),c(!1),console.error(e.t0);case 30:case"end":return e.stop()}}),e,null,[[18,26]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"Signup",children:[Object(r.jsxs)("div",{className:"card shadow mx-auto text-center w-75",style:{backgroundColor:"transparent"},children:[Object(r.jsx)("h3",{className:"card-header",children:"Create new account"}),Object(r.jsx)("div",{className:"card-body mx-auto",children:Object(r.jsxs)("form",{method:"",action:"",children:[Object(r.jsxs)("div",{className:"form-row",children:[Object(r.jsx)("div",{className:"form-group col-md-6",children:Object(r.jsx)("input",{type:"text",placeholder:"Enter Firstname",name:"firstname",required:!0,minLength:"6",autoFocus:!0,className:"form-control form-control-lg text-center",onChange:function(e){return j(e.target.value)},value:i||""})}),Object(r.jsx)("div",{className:"form-group col-md-6",children:Object(r.jsx)("input",{type:"text",placeholder:"Enter Lastname",name:"lastname",required:!0,minLength:"6",className:"form-control form-control-lg text-center",onChange:function(e){return p(e.target.value)},value:x||""})})]}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"text",placeholder:"Enter Username",name:"username",required:!0,minLength:"6",className:"form-control form-control-lg text-center",onChange:function(e){return N(e.target.value)},value:g||""})}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"password",placeholder:"Enter Password",name:"password",required:!0,minLength:"8",className:"form-control form-control-lg text-center",onChange:function(e){return S(e.target.value)},value:k||""})}),Object(r.jsxs)("button",{className:"btn btn-block btn-lg ".concat(n?"btn-primary":"btn-outline-primary"),type:"submit",onClick:z,disabled:n,children:[!n&&"Signup",n&&Object(r.jsx)(C.d,{width:"24"})]})]})}),F.length>0&&Object(r.jsx)(L,{error:F})]}),T.length>0&&Object(r.jsx)("div",{className:"w-50 mx-auto shadow text-center",children:Object(r.jsxs)("div",{className:"alert bg-dark text-light mt-3",children:[Object(r.jsx)(B.a,{content:T}),Object(r.jsxs)("div",{children:["Move to",Object(r.jsx)("code",{children:Object(r.jsx)(b.b,{className:"link mx-1",to:"/login",children:"Login"})}),"Page"]})]})})]})},I=n(96),U=n.n(I),F=function(e){return U()(e).startOf("hour").fromNow()},_=function(e){var t=e.split(" ");if(t.length<30)return e;for(var n="",r=0;r<t.length&&!(r>=30);r++)n+=" ".concat(t[r]);return"".concat(n," ...")},z=function(e){return"".concat(e.firstname," ").concat(e.lastname)},q=(n(60),function(e){var t=e.blog,n=t.author,a=t.title,c=t.content,s=t.added,o=t._id;return Object(r.jsxs)("div",{className:"card text-white bg-primary shadow mb-4 bg-white rounded",children:[Object(r.jsxs)(b.b,{to:"/blog/".concat(o,"/view"),className:"link",children:[Object(r.jsx)("div",{className:"card-header text-center bg-dark",children:a}),Object(r.jsx)("div",{className:"card-body bg-light text-dark",children:Object(r.jsx)("div",{className:"card-text ",children:_(c)})})]}),Object(r.jsxs)("div",{className:"card-footer text-white bg-primary text-right d-flex justify-content-between flex-wrap",children:[Object(r.jsxs)("div",{className:"d-flex align-items-center",children:[Object(r.jsx)("i",{className:"material-icons mr-1",children:"account_circle"})," ",z(n),Object(r.jsx)("strong",{children:Object(r.jsx)("span",{className:"badge badge-pill badge-dark mx-1",children:" AKA "})}),n.username]}),Object(r.jsxs)("div",{className:"d-flex align-items-center",children:[Object(r.jsx)("i",{className:"material-icons mr-1",children:"access_time"}),F(s)]})]})]})}),J=function(){var e=Object(a.useState)(!0),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(C.e)({loading:n,indicator:Object(r.jsx)(C.a,{width:"100"}),loaderProps:{style:{color:"#007BFF"}}}),o=s.containerProps,i=s.indicatorEl,b=Object(a.useState)([]),j=Object(d.a)(b,2),h=j[0],x=j[1];Object(a.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem("token"),e.next=4,y(t);case 4:n=e.sent,x(n.reverse()),c(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),c(!1),f(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var p=Object(a.useState)(""),O=Object(d.a)(p,2),v=O[0],f=O[1],g=h.map((function(e,t){return Object(r.jsx)(q,{blog:e},t)}));return Object(r.jsxs)("div",{className:"Blog",children:[n&&Object(r.jsx)("div",Object(m.a)(Object(m.a)({className:"text-center"},o),{},{children:i})),h.length>0&&g,v.length>0&&Object(r.jsx)(L,{error:v})]})},K=function(e){var t=e.comment,n=t.author,a=t.title,c=t.content,s=t.added;return Object(r.jsxs)("div",{className:"card shadow rounder mb-3",children:[Object(r.jsxs)("div",{className:"card-body bg-light text-dark",children:[Object(r.jsx)("h4",{className:"card-title",children:a}),Object(r.jsx)("div",{className:"card-text ",children:Object(r.jsx)(B.a,{content:c})})]}),Object(r.jsxs)("div",{className:"card-footer text-white bg-secondary text-right d-flex justify-content-between flex-wrap",children:[Object(r.jsxs)("div",{className:"d-flex align-items-center",children:[Object(r.jsx)("i",{className:"material-icons mr-1",children:"account_circle"}),z(n),Object(r.jsx)("strong",{children:Object(r.jsx)("span",{className:"badge badge-pill badge-dark mx-1",children:" AKA "})}),n.username]}),Object(r.jsxs)("div",{className:"d-flex align-items-center",children:[Object(r.jsx)("i",{className:"material-icons mr-1",children:"access_time"}),F(s)]})]})]})},M=function(){var e=Object(a.useState)(!0),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(C.e)({loading:n,indicator:Object(r.jsx)(C.a,{width:"100"}),loaderProps:{style:{color:"#17A2B8"}}}),o=s.containerProps,i=s.indicatorEl,j=Object(a.useState)([]),h=Object(d.a)(j,2),x=h[0],p=h[1],O=Object(a.useState)(),v=Object(d.a)(O,2),f=v[0],g=v[1],N=Object(a.useState)({}),y=Object(d.a)(N,2),k=y[0],S=y[1];return Object(a.useEffect)((function(){var e=localStorage.getItem("token");(function(){var t=Object(u.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w(e);case 3:n=t.sent,p({user:n.user,blogs:n.blogs.reverse(),comments:n.comments.reverse()}),S(n.user),g("blogs"),c(!1),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0),c(!1);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(r.jsxs)("div",{className:"Profile",children:[n&&Object(r.jsx)("div",Object(m.a)(Object(m.a)({className:"text-center"},o),{},{children:i})),x.user&&Object(r.jsxs)("div",{className:"card mb-4 mx-auto shadow rounded",style:{width:"19rem"},children:[Object(r.jsxs)("div",{className:"card-header bg-dark text-white",children:["Joined ",F(k.added)]}),Object(r.jsxs)("div",{className:"card-body bg-light",children:[z(k)," ",Object(r.jsx)("strong",{children:Object(r.jsx)("span",{className:"badge badge-pill badge-dark mx-1",children:" AKA "})}),k.username]}),Object(r.jsxs)("div",{className:"card-footer text-white bg-info text-right d-flex justify-content-between flex-wrap",children:[Object(r.jsxs)("div",{className:"d-flex align-items-center",title:"Number of Posts",style:{cursor:"pointer"},onClick:function(){g("blogs")},children:["Post Count: ",x.blogs.length]}),Object(r.jsxs)("div",{className:"d-flex align-items-center",title:"Number of Comments",style:{cursor:"pointer"},onClick:function(){g("comments")},children:[Object(r.jsx)("i",{className:"material-icons mr-1",children:"comment"}),x.comments.length]})]})]}),"blogs"===f&&0===x.blogs.length&&Object(r.jsx)("div",{className:"alert alert-info mx-auto w-75",children:"You haven't Posted anything yet"}),"blogs"===f&&x.blogs.length>0&&x.blogs.map((function(e,t){return Object(r.jsx)(q,{blog:e},t)})),"comments"===f&&0===x.comments.length&&Object(r.jsx)("div",{className:"alert alert-info mx-auto w-75",children:"You haven't made any comments yet"}),"comments"===f&&x.comments.length>0&&x.comments.map((function(e,t){var n=e.blog;return Object(r.jsxs)(b.b,{to:"/blog/".concat(n._id,"/view"),className:"link shadow",children:[Object(r.jsxs)("div",{className:"card-header text-center bg-dark text-light align-items-center",children:["You commented on ",Object(r.jsx)("code",{children:n.title})]}),Object(r.jsx)(K,{comment:e})]},t)}))]})},Y=n(98),D=function(){var e=Object(j.h)().id,t=localStorage.getItem("token"),n=Object(a.useState)(!0),c=Object(d.a)(n,2),s=c[0],o=c[1],i=Object(C.e)({loading:s,indicator:Object(r.jsx)(C.b,{width:"100"}),loaderProps:{style:{color:"#007BFF"}}}),b=i.containerProps,h=i.indicatorEl,x=Object(a.useState)(""),p=Object(d.a)(x,2),O=p[0],v=p[1];Object(a.useEffect)((function(){return setTimeout((function(){v("")}),5e3)}),[O,v]);var f=Object(a.useState)({}),g=Object(d.a)(f,2),N=g[0],y=g[1],w=Object(a.useState)([]),P=Object(d.a)(w,2),E=P[0],T=P[1],A=Object(a.useState)(""),I=Object(d.a)(A,2),U=I[0],_=I[1],q=Object(a.useState)(""),J=Object(d.a)(q,2),M=J[0],D=J[1];Object(a.useEffect)((function(){(function(){var n=Object(u.a)(l.a.mark((function n(){var r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,k(e,t);case 3:if(!(r=n.sent).error){n.next=8;break}return o(!1),v("Blog Post not found. There's a Problem fetching Post: ".concat(e)),n.abrupt("return");case 8:y(r.blog),T(r.comment.reverse()),o(!1),n.next=17;break;case 13:n.prev=13,n.t0=n.catch(0),console.error(n.t0),o(!1);case 17:case"end":return n.stop()}}),n,null,[[0,13]])})));return function(){return n.apply(this,arguments)}})()()}),[e,t,U,_]);var G=Object(a.useState)(!1),H=Object(d.a)(G,2),R=H[0],V=H[1],W=function(){var n=Object(u.a)(l.a.mark((function n(){var r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,S(e,{title:U,content:M},t);case 3:r=n.sent,V(!1),r.error||(_(""),D("")),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),V(!1),console.error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();return Object(r.jsxs)("div",{children:[s&&Object(r.jsx)("div",Object(m.a)(Object(m.a)({className:"text-center my-5"},b),{},{children:h})),N.title&&!s&&Object(r.jsx)("div",{className:"card shadow rounded mb-5",children:Object(r.jsxs)("div",{className:"card-body",children:[Object(r.jsx)("h1",{className:"card-title text-center",children:N.title}),Object(r.jsxs)("div",{className:"card-subtitle my-3 text-muted d-flex justify-content-between flex-wrap",children:[Object(r.jsxs)("div",{className:"d-flex align-items-center",children:[Object(r.jsx)("i",{className:"material-icons mr-1",children:"account_circle"}),z(N.author),Object(r.jsx)("strong",{children:Object(r.jsx)("span",{className:"badge badge-pill badge-dark mx-1",children:"AKA"})}),N.author.username]}),Object(r.jsxs)("div",{className:"d-flex align-items-center",children:[Object(r.jsx)("i",{className:"material-icons mr-1",children:"access_time"}),F(N.added)]})]}),Object(r.jsx)("div",{className:"card-text",children:Object(r.jsx)(B.a,{content:N.content})})]})}),O.length>0>0&&Object(r.jsx)("div",{className:"w-75 mx-auto",children:Object(r.jsx)(L,{error:O})}),N.title&&Object(r.jsxs)("div",{className:"mb-4 shadow",children:[Object(r.jsx)("input",{type:"text",placeholder:"Enter Comment Title",maxLength:"40",onChange:function(e){_(e.target.value)},value:U,className:"form-control"}),Object(r.jsx)(Y.a,{apiKey:"iegn84mumhivsy1it2lvc8qjfxkaav0snoxsx4u66dxlnz3g",initialValue:"<p>Enter you comment here</p>",init:{height:160,menubar:!1,plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"],toolbar:"undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",placeholder:"Enter you comment here"},onEditorChange:function(e,t){D(e)},value:M}),Object(r.jsxs)("button",{className:"btn btn-block ".concat(R?"btn-secondary":"btn-outline-secondary"),onClick:function(e){e.preventDefault(),0!==U.trim().length?0!==M.trim().length?(V(!0),W()):v("Comment content can't be empty."):v("Comment title can't be empty")},disabled:R,children:[!R&&"Post your Comment",R&&Object(r.jsx)(C.d,{width:"20"})]})]}),E.length>0&&E.map((function(e,t){return Object(r.jsx)(K,{comment:e},t)}))]})},G=(n(109),function(){return Object(r.jsxs)("footer",{className:"Footer bg-dark text-light",children:["Made with",Object(r.jsx)("i",{className:"material-icons heart",children:"favorite"})," by",Object(r.jsx)("a",{href:"https://github.com/Clumsynite",title:"Github Profile",className:"link",target:"_blank",rel:"noreferrer",children:"Clumsyknight"})]})}),H=n(97),R=n.n(H),V={position:"absolute",height:"100vh",width:"100%",zIndex:"-1"},W=function(){return Object(r.jsx)("div",{style:V,children:Object(r.jsx)(R.a,{style:{position:"absolute"},height:"100%",width:"100%",params:{particles:{color:{value:"#000000"},line_linked:{color:{value:"#000000"}},number:{value:50},size:{value:3}}}})})},Q=function(){var e=Object(a.useState)(localStorage.getItem("user")||{}),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!!localStorage.getItem("token")),o=Object(d.a)(s,2),i=o[0],m=o[1],h=Object(a.useState)(!1),O=Object(d.a)(h,2),f=O[0],g=O[1];return Object(a.useEffect)((function(){var e=function(){var t=Object(u.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(f){t.next=5;break}return t.next=3,v();case 3:t.sent.error?(console.error("Unknown error. Reconnecting in 10sec"),g(!1),setTimeout(e,1e4)):g(!0);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();setTimeout(function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==document.cookie){e.next=11;break}return e.prev=1,e.next=4,N();case 4:"Logged out successfully"===(t=e.sent).message?(localStorage.clear(),c({}),m(!1)):console.error(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),2e3),e()}),[]),Object(r.jsxs)("div",{className:"Routes",children:[Object(r.jsx)(W,{}),Object(r.jsxs)(b.a,{children:[Object(r.jsx)(P,{authenticated:i,setAuth:m,user:n,clearUser:function(){return c({})},server:f}),Object(r.jsx)("div",{className:"container mt-3",children:Object(r.jsxs)(j.d,{children:[Object(r.jsx)(j.b,{exact:!0,path:"/",component:E}),Object(r.jsx)(p,{path:"/login",component:T,appProps:{setAuth:m,setUser:c}}),Object(r.jsx)(p,{path:"/signup",component:A}),Object(r.jsx)(x,{exact:!0,path:"/profile",component:M}),Object(r.jsx)(x,{exact:!0,path:"/blogs",component:J}),Object(r.jsx)(x,{exact:!0,path:"/blog/:id/view",component:D}),Object(r.jsx)(j.a,{to:"/"})]})})]}),Object(r.jsx)("div",{style:{marginTop:80},children:Object(r.jsx)(G,{})})]})};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(Q,{})}),document.getElementById("root"))},60:function(e,t,n){}},[[340,1,2]]]);
//# sourceMappingURL=main.3d946371.chunk.js.map