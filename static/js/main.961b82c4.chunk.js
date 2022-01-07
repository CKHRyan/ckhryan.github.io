(this["webpackJsonpryan's page"]=this["webpackJsonpryan's page"]||[]).push([[0],{103:function(e,t,n){},166:function(e,t,n){"use strict";n.r(t);var r=n(51),c=n(1),s=n.n(c),i=n(38),a=n.n(i),o=(n(103),n(10)),l=n(11),j=n(13),d=n(12),h=(n(104),n(96)),u=n(20),b=n(180),x=n(171),p=n(94),m=n(172),O=n.p+"static/media/banner.bced9e0d.jpeg",k=n(3),f=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(k.jsxs)(x.a,{id:"header",className:"min-vh-100 w-100 m-0",children:[Object(k.jsx)(y,{}),Object(k.jsx)(g,{})]})}}]),n}(c.Component),y=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(k.jsx)(x.a,{id:"title",className:"px-sm-5 py-3 px-4 m-0 w-100",style:{zIndex:-1,background:"#e9ecef",fontWeight:200,minHeight:"50vh"},children:Object(k.jsxs)(p.a,{className:"my-auto p-0",children:[Object(k.jsxs)(x.a,{className:"border-bottom border-dark mb-1 mx-0",style:{fontSize:35,lineHeight:1.5},children:["Mr. Chung Ka Ho Ryan ",Object(k.jsx)("br",{}),"\u937e\u5609\u6d69 ",Object(k.jsx)("br",{})]}),Object(k.jsxs)(x.a,{className:"mx-0",style:{fontSize:18},children:["B.Sc. in Computer Science",Object(k.jsx)("br",{}),"The Chinese University of Hong Kong"]})]})})}}]),n}(c.Component),g=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(k.jsx)(x.a,{id:"mybanner",className:"overflow-hidden p-0 m-0 w-100",style:{zIndex:-1,maxHeight:"60vh"},children:Object(k.jsx)(m.a,{src:O,className:"p-0",style:{minWidth:"100%",objectFit:"cover"}})})}}]),n}(c.Component),v=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.name?Object(k.jsx)(x.a,{className:"font-weight-bold mb-4 mx-0",style:{fontSize:24},children:Object(k.jsxs)("div",{className:"p-0",children:[this.props.icon&&this.props.icon," ",this.props.name]})}):Object(k.jsx)(k.Fragment,{}),t=this.props.children?Object(k.jsx)(x.a,{className:"justify-content-start mx-0",style:{textAlign:"justify"},children:this.props.children}):Object(k.jsx)(k.Fragment,{});return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(x.a,{id:this.props.id,className:"min-vh-100 p-lg-5 py-5 px-4 overflow-hidden w-100 m-0",children:Object(k.jsxs)(p.a,{className:"w-100 text-left px-lg-4 px-md-3 px-0",children:[e,t]})}),Object(k.jsx)("hr",{className:"mx-sm-5 mx-4"})]})}}]),n}(c.Component),w=n(37),M=n(173),L=n(42),E=n.n(L),F=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(k.jsx)(v,{id:"mybackground",name:"Background",icon:Object(k.jsx)(M.a,{className:"mr-1 mb-1"}),opacity:"0.1",children:Object(k.jsx)(w.a,{path:"/introduction/",limit:1,children:function(e){return e.isLoading?Object(k.jsx)(E.a,{count:10,className:"mb-3"}):e.value[0].body.map((function(e,t){return Object(k.jsx)("p",{className:"p-0",children:e},t)}))}})})}}]),n}(c.Component),N=n(174),C=n(95),S=n(175),W=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).retrieveProjectTable=function(){return Object(k.jsx)(w.a,{path:"/projects/",orderBy:[{field:"index",type:"desc"}],children:function(t){return t.isLoading?Object(k.jsx)(E.a,{count:12,className:"mb-3"}):!0===window.matchMedia("(max-width: 768px)").matches?e.largeProjectTable(t.value):e.shrinkedProjectTable(t.value)}})},e.largeProjectTable=function(e){return Object(k.jsxs)(N.a,{striped:!0,bordered:!0,variant:"light",className:"w-100 p-0 m-0",style:{background:"rgba(255, 255, 255, 0.6)"},children:[Object(k.jsx)("thead",{children:Object(k.jsx)("tr",{children:Object(k.jsxs)("th",{style:{width:200},children:["Name,",Object(k.jsx)("br",{}),"Platform,",Object(k.jsx)("br",{}),"Description, Url"]})})}),Object(k.jsx)("tbody",{children:e.map((function(e,t){return Object(k.jsx)("tr",{children:Object(k.jsxs)("td",{children:[e.name,Object(k.jsx)("br",{}),e.platform,Object(k.jsxs)("p",{style:{textAlign:"left",color:"grey",fontStyle:"italic"},children:["developed using ",e.tool]}),e.description,Object(k.jsx)("br",{}),Object(k.jsx)("p",{className:"text-right mt-3 mb-0",children:""!==e.url&&Object(k.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",className:"ml-auto text-decoration-none text-light",children:Object(k.jsx)(C.a,{variant:"secondary",size:"sm",children:e.repository})})})]})},t)}))})]})},e.shrinkedProjectTable=function(e){return Object(k.jsxs)(N.a,{striped:!0,bordered:!0,variant:"light",className:"w-100 p-0 m-0",style:{background:"rgba(255, 255, 255, 0.6)"},children:[Object(k.jsx)("thead",{children:Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{style:{width:200},children:"Name"}),Object(k.jsx)("th",{style:{width:220},children:"Platform"}),Object(k.jsx)("th",{children:"Description"}),Object(k.jsx)("th",{children:"Url"})]})}),Object(k.jsx)("tbody",{children:e.map((function(e,t){return Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{className:"text-start",children:e.name}),Object(k.jsxs)("td",{children:[e.platform,Object(k.jsxs)("p",{className:"text-start",style:{color:"grey",fontStyle:"italic"},children:["developed using ",e.tool]})]}),Object(k.jsx)("td",{children:e.description}),Object(k.jsx)("td",{children:""!==e.url&&Object(k.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",className:"text-decoration-none text-light",children:Object(k.jsx)(C.a,{variant:"dark",size:"sm",children:e.repository})})})]},t)}))})]})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(k.jsx)(v,{id:"myprojects",name:"Projects",icon:Object(k.jsx)(S.a,{className:"mr-1 mb-1"}),opacity:"0.3",children:this.retrieveProjectTable()})}}]),n}(c.Component),T=n(176),A=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).retrieveAchievementTable=function(){return Object(k.jsx)(w.a,{path:"/achievements/",orderBy:[{field:"index",type:"desc"}],children:function(t){return t.isLoading?Object(k.jsx)(E.a,{count:12,className:"mb-3"}):!0===window.matchMedia("(max-width: 768px)").matches?e.largeAchievementTable(t.value):e.shrinkedAchievementTable(t.value)}})},e.largeAchievementTable=function(e){return Object(k.jsxs)(N.a,{striped:!0,bordered:!0,variant:"light",style:{background:"rgba(255, 255, 255, 0.6)"},children:[Object(k.jsx)("thead",{children:Object(k.jsx)("tr",{children:Object(k.jsxs)("th",{style:{width:200},children:["Year,",Object(k.jsx)("br",{}),"Event,",Object(k.jsx)("br",{}),"Organization"]})})}),Object(k.jsx)("tbody",{children:e.map((function(e,t){return Object(k.jsx)("tr",{children:Object(k.jsxs)("td",{children:[e.year,Object(k.jsx)("br",{}),e.event,Object(k.jsx)("br",{}),Object(k.jsx)("i",{children:e.organization}),Object(k.jsx)("br",{})]})},t)}))})]})},e.shrinkedAchievementTable=function(e){return Object(k.jsxs)(N.a,{striped:!0,bordered:!0,variant:"light",style:{background:"rgba(255, 255, 255, 0.6)"},children:[Object(k.jsx)("thead",{children:Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{style:{width:"10%"},children:"Year"}),Object(k.jsx)("th",{style:{width:"60%"},children:"Event"}),Object(k.jsx)("th",{style:{width:"30%"},children:"Organization"})]})}),Object(k.jsx)("tbody",{children:e.map((function(e,t){return Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{children:e.year}),Object(k.jsx)("td",{children:e.event}),Object(k.jsx)("td",{children:e.organization})]},t)}))})]})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(k.jsx)(v,{id:"myachievements",name:"Achievements",icon:Object(k.jsx)(T.a,{className:"mr-1 mb-1"}),opacity:"0.3",children:this.retrieveAchievementTable()})}}]),n}(c.Component),z=n(186),P=n(177),I=n(178),B=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).retrieveCourseList=function(){return Object(k.jsx)(w.a,{path:"/courses/",orderBy:[{field:"index",type:"desc"}],children:function(t){return t.isLoading?Object(k.jsx)(E.a,{count:10,className:"mb-3"}):e.courseList(t)}})},e.courseList=function(e){return Object(k.jsx)(z.a,{variant:"flush",children:e.value&&e.value.map((function(e,t){return Object(k.jsxs)(z.a.Item,{className:"bg-transparent px-0",children:[Object(k.jsx)(P.a,{className:"mb-1"}),"\xa0",e.code," ",Object(k.jsx)("i",{children:e.title})]},t)}))})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(k.jsx)(v,{id:"mycourses",name:"Courses",icon:Object(k.jsx)(I.a,{className:"mr-1 mb-1"}),opacity:"0.3",children:this.retrieveCourseList()})}}]),n}(c.Component),D=n(179),U=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(k.jsx)(v,{id:"mycontact",name:"Contact",icon:Object(k.jsx)(D.a,{className:"mr-1 mb-1"}),opacity:"0.2",children:Object(k.jsxs)(b.a,{children:[Object(k.jsxs)(x.a,{className:"mb-3",children:["Email:",Object(k.jsx)("i",{className:"p-0",children:Object(k.jsx)("a",{href:"mailto:ckhryan6494@gmail.com",children:"ckhryan6494@gmail.com"})})]}),Object(k.jsxs)(x.a,{children:["Linkedin:\xa0",Object(k.jsx)("i",{className:"p-0",children:Object(k.jsx)("a",{href:"https://www.linkedin.com/in/ka-ho-ryan-chung-a992671a7/",children:"Ka Ho Ryan Chung"})})]})]})})}}]),n}(c.Component),H=n(184),Y=n(185),R=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).ScrollToSection=function(e){var t=window.matchMedia("(max-width: 991px)").matches?{obj:window,scrollY:window.pageYOffset}:{obj:document.getElementById("content"),scrollY:document.getElementById("content").scrollTop},n=Math.ceil(document.getElementById(e).getBoundingClientRect().top+t.scrollY);t.obj.scrollTo({top:n,behavior:"smooth"})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(k.jsx)(k.Fragment,{})}}]),n}(c.Component),G=n.p+"static/media/propic.e068d09f.jpg",J={components:[{name:"Background",sectionID:"mybackground"},{name:"Projects",sectionID:"myprojects"},{name:"Achievements",sectionID:"myachievements"},{name:"Taken Courses",sectionID:"mycourses"},{name:"Contact",sectionID:"mycontact"}]},K={apiKey:"AIzaSyAU4vhHasBcnbNhX23cU8ZZZiDRd81Se2k",authDomain:"my-web-99065.firebaseapp.com",projectId:"my-web-99065",storageBucket:"my-web-99065.appspot.com",messagingSenderId:"299856626535",appId:"1:299856626535:web:6e4af2e10fbed60542e5c2"},Z=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(k.jsx)(H.a,{className:"d-flex flex-column h-100 justify-content-start py-sm-2 py-4",children:Object(k.jsxs)(Y.a,{className:"d-flex flex-column align-items-center justify-content-start h-100",children:[Object(k.jsx)(Y.a.Item,{className:"px-lg-5 px-sm-3 px-5 bg-transparent",children:Object(k.jsx)(m.a,{src:G,roundedCircle:!0,thumbnail:!0,className:"ratio ratio-1x1"})}),Object(k.jsx)(Y.a.Link,{className:"text-dark fs-3 nav-btn pt-3 pb-2 text-center",onClick:function(){return e.ScrollToSection("title")},children:"Ryan Chung"}),J.components.map((function(t,n){return Object(k.jsx)(Y.a.Link,{className:"nav-btn pt-2 pb-1 text-center fs-5",onClick:function(){return e.ScrollToSection(t.sectionID)},children:t.name},n)}))]})})}}]),n}(R),_=n(181),X=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).collapseMenuAndScrollTo=function(e){r.setState({expand:!1}),r.ScrollToSection(e)},r.state={expand:!1},r}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(k.jsx)(x.a,{id:"horizontalNav",className:"w-100 m-0 ".concat(this.props.show?"horizontalNav-show":"horizontalNav-hide"),children:Object(k.jsxs)(H.a,{expand:"sm",bg:"light",variant:"light",expanded:this.state.expand,onToggle:function(){e.setState({expand:!e.state.expand})},className:"px-3 py-1 w-100",children:[Object(k.jsx)(H.a.Brand,{onClick:function(){return e.collapseMenuAndScrollTo("title")},style:{cursor:"pointer"},children:"Ryan's Page"}),Object(k.jsx)(H.a.Toggle,{"aria-controls":"horizontalNav-control"}),Object(k.jsx)(H.a.Collapse,{id:"horizontalNav-control",className:"py-2",children:Object(k.jsxs)(Y.a,{className:"mr-auto",children:[Object(k.jsx)(_.a.Divider,{}),J.components.map((function(t,n){return Object(k.jsx)(Y.a.Link,{onClick:function(){return e.collapseMenuAndScrollTo(t.sectionID)},children:t.name},n)}))]})})]})})}}]),n}(R),q=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={inSmallScreen:void 0,showTopNav:!1},r}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.setState({inSmallScreen:window.matchMedia("(max-width: 575px)").matches},(function(){var t;e.state.inSmallScreen&&window.addEventListener("scroll",(function(){t=document.getElementById("mainNav").offsetHeight+document.getElementById("mainNav").offsetTop,window.scrollY>t&&!e.state.showTopNav?e.setState({showTopNav:!0}):window.scrollY<=t&&e.state.showTopNav&&e.setState({showTopNav:!1})}))}))}},{key:"render",value:function(){return Object(k.jsx)(b.a,{fluid:!0,id:"main",className:"p-0",children:Object(k.jsxs)(x.a,{children:[Object(k.jsx)(p.a,{id:"mainNav",sm:3,xs:12,className:"p-0 shadow",children:Object(k.jsx)(Z,{})}),Object(k.jsxs)(p.a,{id:"content",sm:9,xs:12,className:"p-0",children:[Object(k.jsx)(X,{show:this.state.showTopNav}),Object(k.jsx)(f,{}),Object(k.jsx)(F,{}),Object(k.jsx)(W,{}),Object(k.jsx)(A,{}),Object(k.jsx)(B,{}),Object(k.jsx)(U,{})]})]})})}}]),n}(c.Component),Q=n(18),V=n.n(Q),$=n(27),ee=n(183),te=n(182),ne=n(57);ne.a.initializeApp(K);var re=ne.a.firestore(),ce=ne.a.auth(),se=function(){return void 0!==ce.currentUser&&null!==ce.currentUser},ie=function(){var e=Object($.a)(V.a.mark((function e(t,n){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ce.signInWithEmailAndPassword(t,n);case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),new Error(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}(),ae=function(){var e=Object($.a)(V.a.mark((function e(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce.signOut();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),oe=function(){var e=Object($.a)(V.a.mark((function e(t){var n,r,c;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,se();case 3:if(e.t0=e.sent,!1!==e.t0){e.next=6;break}throw new Error("Unauthorized access");case 6:return e.next=8,re.collection(t).get();case 8:for(c in n=e.sent,(r=n.docs.map((function(e){return e.data()}))).sort((function(e,t){var n=e.index,r=t.index;return n>r?-1:n<r?1:0})),r)delete r[c].index;return e.abrupt("return",r);case 15:throw e.prev=15,e.t1=e.catch(0),new Error(e.t1.message);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),le=function(){var e=Object($.a)(V.a.mark((function e(t,n){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,se();case 3:if(e.t0=e.sent,!1!==e.t0){e.next=6;break}throw new Error("Unauthorized access");case 6:return e.next=8,re.collection(t).get();case 8:return e.sent.forEach(function(){var e=Object($.a)(V.a.mark((function e(t){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.ref.delete();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),n.forEach(function(){var e=Object($.a)(V.a.mark((function e(c,s){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re.collection(t).add(Object(r.a)(Object(r.a)({},c),{},{index:n.length-s}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=13,oe(t);case 13:return e.abrupt("return",e.sent);case 16:throw e.prev=16,e.t1=e.catch(0),new Error(e.t1.message);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t,n){return e.apply(this,arguments)}}(),je=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).accessAuthentication=Object($.a)(V.a.mark((function e(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=r,e.next=3,se();case 3:e.t1=e.sent,e.t2={isAuth:e.t1},e.t0.setState.call(e.t0,e.t2);case 6:case"end":return e.stop()}}),e)}))),r.loginUser=Object($.a)(V.a.mark((function e(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ie(r.state.loginEmail,r.state.loginPassword).then((function(){r.setState({isAuth:!0})})).catch((function(e){alert(e)})).finally((function(){r.setState({loginEmail:"",loginPassword:""})}));case 1:case"end":return e.stop()}}),e)}))),r.handleCollection=function(e){r.setState({selectedCollection:e.target.value},Object($.a)(V.a.mark((function e(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.loadCollection();case 2:case"end":return e.stop()}}),e)}))))},r.updateCollection=function(){var e=Object($.a)(V.a.mark((function e(t){var n;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,oe(r.state.selectedCollection);case 3:return n=e.sent,e.prev=4,e.next=7,le(r.state.selectedCollection,JSON.parse(r.state.collectionData));case 7:r.setState({modalMessage:{title:"Collection update success",body:["The collection has been updated succesfully."],variant:"primary"}}),e.next=15;break;case 10:return e.prev=10,e.t0=e.catch(4),e.next=14,le(r.state.selectedCollection,n);case 14:r.setState({modalMessage:{title:"Collection update fail",body:["Error occurs during the collection update",e.t0.message],variant:"danger"}});case 15:return e.prev=15,r.setState({isMessageShown:!0}),e.finish(15);case 18:case 19:case"end":return e.stop()}}),e,null,[[4,10,15,18]])})));return function(t){return e.apply(this,arguments)}}(),r.loadCollection=Object($.a)(V.a.mark((function e(){var t,n;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.state.selectedCollection){e.next=8;break}return e.next=3,oe(r.state.selectedCollection);case 3:t=e.sent,n=t.length>0?Object.keys(t[0]).sort():null,r.setState({collectionData:JSON.stringify(t,n,4)}),e.next=9;break;case 8:r.setState({collectionData:""});case 9:case"end":return e.stop()}}),e)}))),r.state={isAuth:void 0,selectedCollection:"",collectionData:"",loginEmail:"",loginPassword:"",isMessageShown:!1,modalMessage:{title:"",body:[],variant:"secondary"}},r}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.accessAuthentication()}},{key:"componentWillUnmount",value:function(){ae()}},{key:"render",value:function(){var e=this;return Object(k.jsxs)(b.a,{fluid:!0,id:"admin",className:"overflow-auto px-md-5 px-3 pt-1 pb-3 vh-100 d-flex flex-column",children:[this.state.isAuth?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(x.a,{className:"w-100 mx-0 mb-2 p-0 fs-1",children:"Admin Page"}),Object(k.jsx)(x.a,{className:"w-100 mx-0 p-0 h-100 flex-grow-1",children:Object(k.jsxs)(ee.a,{className:"m-0 p-0 h-100 d-flex flex-column",onSubmit:this.updateCollection,children:[Object(k.jsxs)(ee.a.Group,{controlId:"selectedCollection",children:[Object(k.jsxs)(ee.a.Control,{as:"select",value:this.state.selectedCollection,onChange:this.handleCollection,children:[Object(k.jsx)("option",{value:"",children:"Update..."}),Object(k.jsx)("option",{value:"introduction",children:"Background"}),Object(k.jsx)("option",{value:"achievements",children:"Achievements"}),Object(k.jsx)("option",{value:"projects",children:"Projects"}),Object(k.jsx)("option",{value:"courses",children:"Courses"})]}),Object(k.jsx)(C.a,{variant:"warning",className:"mt-1",type:"button",onClick:this.loadCollection,children:"Undo"}),Object(k.jsx)(C.a,{variant:"success",className:"mt-1 mx-2",type:"submit",children:"Update"})]}),Object(k.jsxs)(ee.a.Group,{controlId:"collectionData",className:"mt-3 h-100 flex-grow-1 d-flex flex-column",children:[Object(k.jsx)(ee.a.Label,{children:"data in JSON"}),Object(k.jsx)(ee.a.Control,{as:"textarea",disabled:""===this.state.selectedCollection,value:this.state.collectionData,onChange:function(t){e.setState({collectionData:t.target.value})},className:"flex-grow-1"})]})]})})]}):Object(k.jsxs)(te.a.Dialog,{centered:!0,className:"w-100",children:[Object(k.jsx)(te.a.Header,{children:Object(k.jsx)(te.a.Title,{children:"Admin Page Access"})}),Object(k.jsx)(te.a.Body,{children:Object(k.jsxs)(ee.a,{children:[Object(k.jsxs)(ee.a.Group,{controlId:"loginEmail",className:"mt-3",children:[Object(k.jsx)(ee.a.Label,{children:"Email"}),Object(k.jsx)(ee.a.Control,{as:"input",value:this.state.loginEmail,onChange:function(t){e.setState({loginEmail:t.target.value})}})]}),Object(k.jsxs)(ee.a.Group,{controlId:"loginPassword",className:"mt-3",children:[Object(k.jsx)(ee.a.Label,{children:"Password"}),Object(k.jsx)(ee.a.Control,{as:"input",type:"password",value:this.state.loginPassword,onChange:function(t){e.setState({loginPassword:t.target.value})}})]})]})}),Object(k.jsx)(te.a.Footer,{children:Object(k.jsx)(C.a,{variant:"success",onClick:this.loginUser,children:"Submit"})})]}),Object(k.jsxs)(te.a,{centered:!0,show:this.state.isMessageShown,children:[Object(k.jsx)(te.a.Header,{children:Object(k.jsx)(te.a.Title,{children:this.state.modalMessage.title})}),Object(k.jsx)(te.a.Body,{children:this.state.modalMessage.body.length>0&&this.state.modalMessage.body.map((function(e,t){return Object(k.jsx)("p",{children:e},t)}))}),Object(k.jsx)(te.a.Footer,{children:Object(k.jsx)(C.a,{variant:this.state.modalMessage.variant,onClick:function(){e.setState({isMessageShown:!1})},children:"OK"})})]})]})}}]),n}(c.Component),de=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(k.jsx)(b.a,{fluid:!0,className:"d-flex align-items-center p-sm-0 p-3 vh-100",children:Object(k.jsxs)(x.a,{className:"w-100 h-100 p-0",children:[Object(k.jsx)(p.a,{sm:8,className:"align-self-center",children:Object(k.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 800 600",children:Object(k.jsxs)("g",{children:[Object(k.jsxs)("defs",{children:[Object(k.jsx)("clipPath",{id:"GlassClip",children:Object(k.jsx)("path",{d:"M380.857,346.164c-1.247,4.651-4.668,8.421-9.196,10.06c-9.332,3.377-26.2,7.817-42.301,3.5 s-28.485-16.599-34.877-24.192c-3.101-3.684-4.177-8.66-2.93-13.311l7.453-27.798c0.756-2.82,3.181-4.868,6.088-5.13 c6.755-0.61,20.546-0.608,41.785,5.087s33.181,12.591,38.725,16.498c2.387,1.682,3.461,4.668,2.705,7.488L380.857,346.164z"})}),Object(k.jsx)("clipPath",{id:"cordClip",children:Object(k.jsx)("rect",{width:"800",height:"600"})})]}),Object(k.jsxs)("g",{id:"planet",children:[Object(k.jsx)("circle",{fill:"none",stroke:"#0E0620",strokeWidth:"3",strokeMiterlimit:"10",cx:"572.859",cy:"108.803",r:"90.788"}),Object(k.jsx)("circle",{id:"craterBig",fill:"none",stroke:"#0E0620",strokeWidth:"3",strokeMiterlimit:"10",cx:"548.891",cy:"62.319",r:"13.074"}),Object(k.jsx)("circle",{id:"craterSmall",fill:"none",stroke:"#0E0620",strokeWidth:"3",strokeMiterlimit:"10",cx:"591.743",cy:"158.918",r:"7.989"}),Object(k.jsx)("path",{id:"ring",fill:"none",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeMiterlimit:"10",d:" M476.562,101.461c-30.404,2.164-49.691,4.221-49.691,8.007c0,6.853,63.166,12.408,141.085,12.408s141.085-5.555,141.085-12.408 c0-3.378-15.347-4.988-40.243-7.225"}),Object(k.jsx)("path",{id:"ringShadow",opacity:"0.5",fill:"none",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeMiterlimit:"10",d:" M483.985,127.43c23.462,1.531,52.515,2.436,83.972,2.436c36.069,0,68.978-1.19,93.922-3.149"})]}),Object(k.jsxs)("g",{id:"stars",children:[Object(k.jsxs)("g",{id:"starsBig",children:[Object(k.jsxs)("g",{children:[Object(k.jsx)("line",{fill:"none",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeMiterlimit:"10",x1:"518.07",y1:"245.375",x2:"518.07",y2:"266.581"}),Object(k.jsx)("line",{fill:"none",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeMiterlimit:"10",x1:"508.129",y1:"255.978",x2:"528.01",y2:"255.978"})]}),Object(k.jsxs)("g",{children:[Object(k.jsx)("line",{fill:"none",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeMiterlimit:"10",x1:"154.55",y1:"231.391",x2:"154.55",y2:"252.598"}),Object(k.jsx)("line",{fill:"none",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeMiterlimit:"10",x1:"144.609",y1:"241.995",x2:"164.49",y2:"241.995"})]}),Object(k.jsxs)("g",{children:[Object(k.jsx)("line",{fill:"none",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeMiterlimit:"10",x1:"320.135",y1:"132.746",x2:"320.135",y2:"153.952"}),Object(k.jsx)("line",{fill:"none",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeMiterlimit:"10",x1:"310.194",y1:"143.349",x2:"330.075",y2:"143.349"})]}),Object(k.jsxs)("g",{children:[Object(k.jsx)("line",{fill:"none",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeMiterlimit:"10",x1:"200.67",y1:"483.11",x2:"200.67",y2:"504.316"}),Object(k.jsx)("line",{fill:"none",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeMiterlimit:"10",x1:"210.611",y1:"493.713",x2:"190.73",y2:"493.713"})]})]}),Object(k.jsxs)("g",{id:"starsSmall",children:[Object(k.jsxs)("g",{children:[Object(k.jsx)("line",{fill:"none",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeMiterlimit:"10",x1:"432.173",y1:"380.52",x2:"432.173",y2:"391.83"}),Object(k.jsx)("line",{fill:"none",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeMiterlimit:"10",x1:"426.871",y1:"386.175",x2:"437.474",y2:"386.175"})]}),Object(k.jsxs)("g",{children:[Object(k.jsx)("line",{fill:"none",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeMiterlimit:"10",x1:"489.555",y1:"299.765",x2:"489.555",y2:"308.124"}),Object(k.jsx)("line",{fill:"none",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeMiterlimit:"10",x1:"485.636",y1:"303.945",x2:"493.473",y2:"303.945"})]}),Object(k.jsxs)("g",{children:[Object(k.jsx)("line",{fill:"none",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeMiterlimit:"10",x1:"231.468",y1:"291.009",x2:"231.468",y2:"299.369"}),Object(k.jsx)("line",{fill:"none",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeMiterlimit:"10",x1:"227.55",y1:"295.189",x2:"235.387",y2:"295.189"})]}),Object(k.jsxs)("g",{children:[Object(k.jsx)("line",{fill:"none",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeMiterlimit:"10",x1:"244.032",y1:"547.539",x2:"244.032",y2:"555.898"}),Object(k.jsx)("line",{fill:"none",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeMiterlimit:"10",x1:"247.95",y1:"551.719",x2:"240.113",y2:"551.719"})]}),Object(k.jsxs)("g",{children:[Object(k.jsx)("line",{fill:"none",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeMiterlimit:"10",x1:"186.359",y1:"406.967",x2:"186.359",y2:"415.326"}),Object(k.jsx)("line",{fill:"none",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeMiterlimit:"10",x1:"190.277",y1:"411.146",x2:"182.44",y2:"411.146"})]}),Object(k.jsxs)("g",{children:[Object(k.jsx)("line",{fill:"none",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeMiterlimit:"10",x1:"480.296",y1:"406.967",x2:"480.296",y2:"415.326"}),Object(k.jsx)("line",{fill:"none",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeMiterlimit:"10",x1:"484.215",y1:"411.146",x2:"476.378",y2:"411.146"})]})]}),Object(k.jsxs)("g",{id:"circlesBig",children:[Object(k.jsx)("circle",{fill:"none",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeMiterlimit:"10",cx:"588.977",cy:"255.978",r:"7.952"}),Object(k.jsx)("circle",{fill:"none",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeMiterlimit:"10",cx:"450.066",cy:"320.259",r:"7.952"}),Object(k.jsx)("circle",{fill:"none",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeMiterlimit:"10",cx:"168.303",cy:"353.753",r:"7.952"}),Object(k.jsx)("circle",{fill:"none",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeMiterlimit:"10",cx:"429.522",cy:"201.185",r:"7.952"}),Object(k.jsx)("circle",{fill:"none",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeMiterlimit:"10",cx:"200.67",cy:"176.313",r:"7.952"}),Object(k.jsx)("circle",{fill:"none",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeMiterlimit:"10",cx:"133.343",cy:"477.014",r:"7.952"}),Object(k.jsx)("circle",{fill:"none",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeMiterlimit:"10",cx:"283.521",cy:"568.033",r:"7.952"}),Object(k.jsx)("circle",{fill:"none",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeMiterlimit:"10",cx:"413.618",cy:"482.387",r:"7.952"})]}),Object(k.jsxs)("g",{id:"circlesSmall",children:[Object(k.jsx)("circle",{fill:"#0E0620",cx:"549.879",cy:"296.402",r:"2.651"}),Object(k.jsx)("circle",{fill:"#0E0620",cx:"253.29",cy:"229.24",r:"2.651"}),Object(k.jsx)("circle",{fill:"#0E0620",cx:"434.824",cy:"263.931",r:"2.651"}),Object(k.jsx)("circle",{fill:"#0E0620",cx:"183.708",cy:"544.176",r:"2.651"}),Object(k.jsx)("circle",{fill:"#0E0620",cx:"382.515",cy:"530.923",r:"2.651"}),Object(k.jsx)("circle",{fill:"#0E0620",cx:"130.693",cy:"305.608",r:"2.651"}),Object(k.jsx)("circle",{fill:"#0E0620",cx:"480.296",cy:"477.014",r:"2.651"})]})]}),Object(k.jsxs)("g",{id:"spaceman",clipPath:"url(cordClip)",children:[Object(k.jsx)("path",{id:"cord",fill:"none",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",d:" M273.813,410.969c0,0-54.527,39.501-115.34,38.218c-2.28-0.048-4.926-0.241-7.841-0.548 c-68.038-7.178-134.288-43.963-167.33-103.87c-0.908-1.646-1.793-3.3-2.654-4.964c-18.395-35.511-37.259-83.385-32.075-118.817"}),Object(k.jsx)("path",{id:"backpack",fill:"#FFFFFF",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",d:" M338.164,454.689l-64.726-17.353c-11.086-2.972-17.664-14.369-14.692-25.455l15.694-58.537 c3.889-14.504,18.799-23.11,33.303-19.221l52.349,14.035c14.504,3.889,23.11,18.799,19.221,33.303l-15.694,58.537 C360.647,451.083,349.251,457.661,338.164,454.689z"}),Object(k.jsxs)("g",{id:"antenna",children:[Object(k.jsx)("line",{fill:"#FFFFFF",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",x1:"323.396",y1:"236.625",x2:"295.285",y2:"353.753"}),Object(k.jsx)("circle",{fill:"#FFFFFF",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",cx:"323.666",cy:"235.617",r:"6.375"})]}),Object(k.jsxs)("g",{id:"armR",children:[Object(k.jsx)("path",{fill:"#FFFFFF",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",d:" M360.633,363.039c1.352,1.061,4.91,5.056,5.824,6.634l27.874,47.634c3.855,6.649,1.59,15.164-5.059,19.02l0,0 c-6.649,3.855-15.164,1.59-19.02-5.059l-5.603-9.663"}),Object(k.jsx)("path",{fill:"#FFFFFF",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",d:" M388.762,434.677c5.234-3.039,7.731-8.966,6.678-14.594c2.344,1.343,4.383,3.289,5.837,5.793 c4.411,7.596,1.829,17.33-5.767,21.741c-7.596,4.411-17.33,1.829-21.741-5.767c-1.754-3.021-2.817-5.818-2.484-9.046 C375.625,437.355,383.087,437.973,388.762,434.677z"})]}),Object(k.jsxs)("g",{id:"armL",children:[Object(k.jsx)("path",{fill:"#FFFFFF",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",d:" M301.301,347.66c-1.702,0.242-5.91,1.627-7.492,2.536l-47.965,27.301c-6.664,3.829-8.963,12.335-5.134,18.999h0 c3.829,6.664,12.335,8.963,18.999,5.134l9.685-5.564"}),Object(k.jsx)("path",{fill:"#FFFFFF",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",d:" M241.978,395.324c-3.012-5.25-2.209-11.631,1.518-15.977c-2.701-0.009-5.44,0.656-7.952,2.096 c-7.619,4.371-10.253,14.09-5.883,21.71c4.371,7.619,14.09,10.253,21.709,5.883c3.03-1.738,5.35-3.628,6.676-6.59 C252.013,404.214,245.243,401.017,241.978,395.324z"})]}),Object(k.jsxs)("g",{id:"body",children:[Object(k.jsx)("path",{fill:"#FFFFFF",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",d:" M353.351,365.387c-7.948,1.263-16.249,0.929-24.48-1.278c-8.232-2.207-15.586-6.07-21.836-11.14 c-17.004,4.207-31.269,17.289-36.128,35.411l-1.374,5.123c-7.112,26.525,8.617,53.791,35.13,60.899l0,0 c26.513,7.108,53.771-8.632,60.883-35.158l1.374-5.123C371.778,395.999,365.971,377.536,353.351,365.387z"}),Object(k.jsx)("path",{fill:"none",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",d:" M269.678,394.912L269.678,394.912c26.3,20.643,59.654,29.585,93.106,25.724l2.419-0.114"})]}),Object(k.jsxs)("g",{id:"legs",children:[Object(k.jsxs)("g",{id:"legR",children:[Object(k.jsx)("path",{fill:"#FFFFFF",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",d:" M312.957,456.734l-14.315,53.395c-1.896,7.07,2.299,14.338,9.37,16.234l0,0c7.07,1.896,14.338-2.299,16.234-9.37l17.838-66.534 C333.451,455.886,323.526,457.387,312.957,456.734z"}),Object(k.jsx)("line",{fill:"none",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",x1:"304.883",y1:"486.849",x2:"330.487",y2:"493.713"})]}),Object(k.jsxs)("g",{id:"legL",children:[Object(k.jsx)("path",{fill:"#FFFFFF",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",d:" M296.315,452.273L282,505.667c-1.896,7.07-9.164,11.265-16.234,9.37l0,0c-7.07-1.896-11.265-9.164-9.37-16.234l17.838-66.534 C278.993,441.286,286.836,447.55,296.315,452.273z"}),Object(k.jsx)("line",{fill:"none",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",x1:"262.638",y1:"475.522",x2:"288.241",y2:"482.387"})]})]}),Object(k.jsxs)("g",{id:"head",children:[Object(k.jsx)("ellipse",{transform:"matrix(0.259 -0.9659 0.9659 0.259 -51.5445 563.2371)",fill:"#FFFFFF",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",cx:"341.295",cy:"315.211",rx:"61.961",ry:"60.305"}),Object(k.jsx)("path",{id:"headStripe",fill:"none",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",d:" M330.868,261.338c-7.929,1.72-15.381,5.246-21.799,10.246"}),Object(k.jsx)("path",{fill:"#FFFFFF",stroke:"#0E0620",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",d:" M380.857,346.164c-1.247,4.651-4.668,8.421-9.196,10.06c-9.332,3.377-26.2,7.817-42.301,3.5s-28.485-16.599-34.877-24.192 c-3.101-3.684-4.177-8.66-2.93-13.311l7.453-27.798c0.756-2.82,3.181-4.868,6.088-5.13c6.755-0.61,20.546-0.608,41.785,5.087 s33.181,12.591,38.725,16.498c2.387,1.682,3.461,4.668,2.705,7.488L380.857,346.164z"}),Object(k.jsx)("g",{clipPath:"url(#GlassClip)",children:Object(k.jsx)("polygon",{id:"glassShine",fill:"none",stroke:"#0E0620",strokeWidth:"3",strokeMiterlimit:"10",points:" 278.436,375.599 383.003,264.076 364.393,251.618 264.807,364.928 \t\t\t\t"})})]})]})]})})}),Object(k.jsxs)(p.a,{sm:4,className:"align-self-center",children:[Object(k.jsx)("h1",{children:"404"}),Object(k.jsx)("h2",{children:"UH OH! You're lost."}),Object(k.jsx)("p",{style:{textAlign:"justify"},children:"The page you are looking for does not exist."})]})]})})}}]),n}(c.Component),he=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(k.jsx)(h.a,{children:Object(k.jsxs)(u.c,{children:[Object(k.jsx)(u.a,{exact:!0,path:["/","/index.html"],children:Object(k.jsx)(q,{})}),Object(k.jsx)(u.a,{exact:!0,path:"/admin",children:Object(k.jsx)(je,{})}),Object(k.jsx)(u.a,{path:"*",children:Object(k.jsx)(de,{})})]})})}}]),n}(c.Component),ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,187)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),s(e),i(e)}))},be=n(98);n(165);a.a.render(Object(k.jsx)(s.a.StrictMode,{children:Object(k.jsx)(w.b,Object(r.a)(Object(r.a)({},K),{},{firebase:be.a,children:Object(k.jsx)(he,{})}))}),document.getElementById("root")),ue()}},[[166,1,2]]]);
//# sourceMappingURL=main.961b82c4.chunk.js.map