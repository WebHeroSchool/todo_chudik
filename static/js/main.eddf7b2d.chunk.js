(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{22:function(e,t,a){e.exports={btn:"Sort_btn__2fhFp",btn_active:"Sort_btn_active__2fQT1",items_count:"Sort_items_count__2LsrF",flex:"Sort_flex__2s-Ry"}},23:function(e,t,a){e.exports={wrap:"App_wrap__3xyBa",header:"App_header__1pUWN",school_link:"App_school_link__2csPr",school_logo:"App_school_logo__1kIO7",header__link:"App_header__link__2l8jl",header__link_active:"App_header__link_active__2l9qY"}},29:function(e,t,a){e.exports={wrap:"Item_wrap__2iq0N",input:"Item_input__1jjfv",item:"Item_item__1aMAK",done:"Item_done__ld5b0",checkbox:"Item_checkbox__3QSu_",checkbox_label:"Item_checkbox_label__3dp3r",btn_delete:"Item_btn_delete__2hMv8"}},34:function(e,t,a){e.exports={form:"InputItem_form__3SVzu",error:"InputItem_error__wSz8f",repeat:"InputItem_repeat__2cZ_W",input:"InputItem_input__iqOez",btn:"InputItem_btn__1AKrQ"}},38:function(e,t,a){e.exports={wrap:"Todo_wrap__nyKiw",header:"Todo_header__3vPgE",title:"Todo_title__-ZJKG",items_section:"Todo_items_section__25jiu"}},4:function(e,t,a){e.exports={wrap:"Repositories_wrap__2nYnz",title:"Repositories_title__1plxQ",inner:"Repositories_inner__2HSWE",error_container:"Repositories_error_container__3-D3y",error_img:"Repositories_error_img__1bQjg",error_subtitle:"Repositories_error_subtitle__3NSaZ",error_text:"Repositories_error_text__3laOO",error_link:"Repositories_error_link__Th57m",list:"Repositories_list__1gP4b",list__item:"Repositories_list__item__3ifEQ",name:"Repositories_name__1KitT",info:"Repositories_info__3SafV",circle:"Repositories_circle__3c-vC",html:"Repositories_html__eGTF3",css:"Repositories_css__3qaA4",js:"Repositories_js__3gykk",language:"Repositories_language__1WHWn",star:"Repositories_star__2WLlD",forks:"Repositories_forks__SrwtF",update:"Repositories_update__2Fpqa",pagination:"Repositories_pagination__3FM-v",button:"Repositories_button__lxrzj",disabled:"Repositories_disabled__oJzSL"}},46:function(e,t,a){e.exports={wrap:"ItemList_wrap__yUbpU",noItem:"ItemList_noItem__1xvuN"}},7:function(e,t,a){e.exports={wrap:"About_wrap__1YmG3",user_card:"About_user_card__2nCtC",preloader:"About_preloader__1jbfH",error:"About_error__yfvV6",inner:"About_inner__2QlEt",avatar:"About_avatar__7ZVlG",info:"About_info__1Rbfn",description:"About_description__1Q9Oz",name:"About_name__Og1e4",bio:"About_bio__1BdGk",contact:"About_contact__37vfx",contact__img:"About_contact__img__28-fm",social_networks:"About_social_networks__3nRkI",social_networks__img:"About_social_networks__img__16nnB"}},74:function(e,t,a){"use strict";a.r(t);var r=a(2),s=a(0),n=a.n(s),i=a(30),c=a.n(i),o=a(43),l=a(6),_=a(44),b=a(26),j=a(14),d=a(87),u=a(3),m=a(9),p=a(21),h=a(11),O=a(12),f=a(17),x=a.n(f),v=a(34),g=a.n(v),k=a.p+"static/media/add.18e1da29.svg",N=function(e){Object(h.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(m.a)(this,a);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={inputValue:"",error:!1,repeat:!1},e.onSubmit=function(t){t.preventDefault(),""===e.state.inputValue?e.setState({error:!0,repeat:!1}):e.props.items.find((function(t){return t.value===e.state.inputValue}))?e.setState({repeat:!0}):(e.setState({inputValue:"",error:!1,repeat:!1}),e.props.onClickAdd(e.state.inputValue))},e}return Object(p.a)(a,[{key:"render",value:function(){var e,t=this,a=this.props;a.onClickAdd,a.items;return Object(r.jsxs)("form",{onSubmit:this.onSubmit,className:x()((e={},Object(u.a)(e,g.a.form,!0),Object(u.a)(e,g.a.error,this.state.error),Object(u.a)(e,g.a.repeat,this.state.repeat),e)),children:[Object(r.jsx)("input",{type:"text",placeholder:"\u041f\u0440\u043e\u0441\u0442\u043e \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u044e\u0434\u0430 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u0435\u043b\u0430...",value:this.state.inputValue,onChange:function(e){return t.setState({inputValue:e.target.value})},className:g.a.input}),Object(r.jsx)("button",{className:g.a.btn,children:Object(r.jsx)("img",{src:k,alt:"Button"})})]})}}]),a}(n.a.Component),w=a(37),R=a(29),S=a.n(R),C=a.p+"static/media/delete.7550d8aa.svg",I=function(e){Object(h.a)(a,e);var t=Object(O.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e,t=this.props,a=t.value,s=t.isDone,n=t.id,i=t.onClickDone,c=t.onClickDelete;return Object(r.jsxs)("div",{className:S.a.wrap,children:[Object(r.jsx)("input",{type:"checkbox",checked:s,className:S.a.checkbox}),Object(r.jsx)("label",{htmlFor:"checkbox",onClick:function(){return i(n)},className:S.a.checkbox_label,children:Object(r.jsx)("div",{className:x()((e={},Object(u.a)(e,S.a.item,!0),Object(u.a)(e,S.a.done,s),e)),children:a})}),Object(r.jsx)("button",{className:S.a.btn_delete,onClick:function(){return c(n)},children:Object(r.jsx)("img",{src:C,alt:"Delete"})})]})}}]),a}(n.a.Component),A=a(46),y=a.n(A),D=function(e){var t=e.items,a=e.onClickDone,s=e.onClickDelete;return 0===t.length?Object(r.jsx)("div",{className:y.a.noItem}):Object(r.jsx)(w.c,{droppableId:"itemlist",children:function(e){return Object(r.jsxs)("ul",Object(b.a)(Object(b.a)({className:y.a.wrap,ref:e.innerRef},e.droppableProps),{},{children:[t.map((function(e,t){return Object(r.jsx)(w.b,{draggableId:"item-"+e.id,index:t,children:function(t){return Object(r.jsx)("li",Object(b.a)(Object(b.a)(Object(b.a)({},t.draggableProps),t.dragHandleProps),{},{ref:t.innerRef,children:Object(r.jsx)(I,{value:e.value,isDone:e.isDone,id:e.id,onClickDone:a,onClickDelete:s})}))}},e.id)})),e.placeholder]}))}})},L=a(22),E=a.n(L),B=function(e){var t,a,s,n=e.items,i=e.filter,c=e.onClickFilter,o=n.filter((function(e){return!e.isDone})).length,l=n.filter((function(e){return e.isDone})).length;return Object(r.jsxs)("div",{className:E.a.flex,children:[Object(r.jsxs)("button",{className:x()((t={},Object(u.a)(t,E.a.btn,!0),Object(u.a)(t,E.a.btn_active,"done"===i),t)),onClick:function(){return c("done")},children:["\u0417\u0430\u0432\u0435\u0440\u0448\u0451\u043d\u043d\u044b\u0435:",Object(r.jsx)("span",{className:E.a.items_count,children:l})]}),Object(r.jsxs)("button",{className:x()((a={},Object(u.a)(a,E.a.btn,!0),Object(u.a)(a,E.a.btn_active,"active"===i),a)),onClick:function(){return c("active")},children:["\u041d\u0435\u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043d\u043d\u044b\u0435:",Object(r.jsx)("span",{className:E.a.items_count,children:o})]}),Object(r.jsx)("button",{className:x()((s={},Object(u.a)(s,E.a.btn,!0),Object(u.a)(s,E.a.btn_active,"all"===i),s)),onClick:function(){return c("all")},children:"\u0412\u0441\u0435"})]})},V=a(38),F=a.n(V),T=function(){var e={items:JSON.parse(localStorage.getItem("items"))||[],filter:"all"},t=Object(s.useState)(e.items),a=Object(j.a)(t,2),n=a[0],i=a[1],c=Object(s.useState)(e.filter),o=Object(j.a)(c,2),l=o[0],u=o[1];Object(s.useEffect)((function(){localStorage.setItem("items",JSON.stringify(n))}));var m=[];switch(l){case"active":m=n.filter((function(e){return!e.isDone}));break;case"done":m=n.filter((function(e){return e.isDone}));break;case"all":m=n;break;default:m=n}return Object(r.jsx)(d.a,{className:F.a.wrap,children:Object(r.jsxs)(w.a,{onDragEnd:function(e){var t=e.destination,a=e.source;if(t){var r=Object(_.a)(n),s=r.splice(a.index,1),c=Object(j.a)(s,1)[0];r.splice(t.index,0,c),i(Object(_.a)(r))}},children:[Object(r.jsxs)("header",{className:F.a.header,children:[Object(r.jsx)("h1",{className:F.a.title,children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043c\u043e\u0438\u0445 \u0434\u0435\u043b"}),Object(r.jsx)(B,{items:n,filter:l,onClickFilter:function(e){u(e)}})]}),Object(r.jsxs)("div",{className:F.a.items_section,children:[Object(r.jsx)(D,{items:m,onClickDone:function(e){var t=n.map((function(t){var a=Object(b.a)({},t);return t.id===e&&(a.isDone=!t.isDone),a}));i(t)},onClickDelete:function(e){var t=n.filter((function(t){return t.id!==e}));i(t)}}),Object(r.jsx)(N,{items:n,onClickAdd:function(e){i([].concat(Object(_.a)(n),[{value:e,isDone:!1,id:Date.now()}]))}})]})]})})},z=a(88),Q=a(41),G=a(4),J=a.n(G),K=a.p+"static/media/Star.66a6657c.svg",M=a.p+"static/media/Stroke.a232545d.svg",P=a.p+"static/media/Error.09d96759.svg",U=new Q.a,W=function(e){Object(h.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(m.a)(this,a);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,isError:!1,repoList:[],firstRepo:0,lastRepo:5},e.onClickBack=function(){e.setState({firstRepo:e.state.firstRepo-5,lastRepo:e.state.lastRepo-5})},e.onClickNext=function(){e.setState({firstRepo:e.state.firstRepo+5,lastRepo:e.state.lastRepo+5})},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;U.repos.listForUser({username:"IvanBurovkin"}).then((function(t){var a=t.data;e.setState({repoList:a,isLoading:!1})})).catch((function(){e.setState({isLoading:!1,isError:!0})}))}},{key:"render",value:function(){var e,t,a=this,s=this.state,n=s.isLoading,i=s.isError,c=s.repoList,o=s.firstRepo,l=s.lastRepo;return Object(r.jsx)(d.a,{children:Object(r.jsxs)("div",{className:J.a.wrap,children:[Object(r.jsx)("h1",{className:J.a.title,children:"\u0420\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0438 \u043d\u0430 github.com"}),n?Object(r.jsx)(z.a,{className:J.a.preloader}):Object(r.jsx)("div",{className:J.a.inner,children:i?Object(r.jsxs)("div",{className:J.a.error_container,children:[Object(r.jsx)("img",{src:P,alt:"Error",className:J.a.error_img}),Object(r.jsx)("h2",{className:J.a.error_subtitle,children:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a..."}),Object(r.jsxs)("p",{className:J.a.error_text,children:["\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435",Object(r.jsx)("a",{href:"",onClick:function(){return window.location.reload()},className:J.a.error_link,children:" \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c "}),"\u0435\u0449\u0435 \u0440\u0430\u0437"]})]}):Object(r.jsx)("div",{children:0===c.length?Object(r.jsxs)("div",{className:J.a.error_container,children:[Object(r.jsx)("img",{src:P,alt:"Error",className:J.a.error_img}),Object(r.jsx)("h2",{className:J.a.error_subtitle,children:"\u0420\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0438 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442"}),Object(r.jsxs)("p",{className:J.a.error_text,children:["\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043a\u0430\u043a \u043c\u0438\u043d\u0438\u043c\u0443\u043c \u043e\u0434\u0438\u043d \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 \u043d\u0430\u2002",Object(r.jsx)("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",className:J.a.error_link,children:"github.com"})]})]}):Object(r.jsxs)("div",{children:[!n&&Object(r.jsx)("ol",{className:J.a.list,children:c.slice(o,l).map((function(e){var t;return Object(r.jsxs)("li",{className:J.a.list__item,children:[Object(r.jsx)("a",{href:e.html_url,target:"_blank",rel:"noopener noreferrer",className:J.a.name,children:e.name}),Object(r.jsxs)("div",{className:J.a.info,children:[Object(r.jsx)("div",{className:x()((t={},Object(u.a)(t,J.a.circle,!0),Object(u.a)(t,J.a.html,"HTML"===e.language),Object(u.a)(t,J.a.css,"CSS"===e.language),Object(u.a)(t,J.a.js,"JavaScript"===e.language),t))}),Object(r.jsx)("p",{className:J.a.language,children:e.language}),Object(r.jsxs)("div",{className:J.a.star,children:[Object(r.jsx)("img",{src:K,alt:"Star"}),Object(r.jsx)("p",{children:e.stargazers_count})]}),Object(r.jsxs)("div",{className:J.a.forks,children:[Object(r.jsx)("img",{src:M,alt:"Stroke"}),Object(r.jsx)("p",{children:e.forks})]}),Object(r.jsxs)("p",{className:J.a.update,children:["Updated on ",new Date(e.updated_at).toLocaleString("en-GB",{day:"numeric",month:"short",year:"numeric"})]})]})]},e.id)}))}),Object(r.jsxs)("div",{className:J.a.pagination,children:[Object(r.jsx)("button",{className:x()((e={},Object(u.a)(e,J.a.button,!0),Object(u.a)(e,J.a.disabled,0===o),e)),onClick:function(){return a.onClickBack()},disabled:0===o,children:"\u041d\u0430\u0437\u0430\u0434"}),Object(r.jsx)("button",{className:x()((t={},Object(u.a)(t,J.a.button,!0),Object(u.a)(t,J.a.disabled,c.length<=l),t)),onClick:function(){return a.onClickNext()},disabled:c.length<=l,children:"\u0414\u0430\u043b\u0435\u0435"})]})]})})})]})})}}]),a}(n.a.Component),q=a(7),H=a.n(q),Z=a.p+"static/media/email.f4eb023e.svg",Y=a.p+"static/media/telegram.e3f0d75e.svg",X=a.p+"static/media/github.263c290c.svg",$=a.p+"static/media/vk.69d0b8ef.svg",ee=a.p+"static/media/LinkedIn.9a8d66dd.svg",te=a.p+"static/media/facebook.dde64411.svg",ae=new Q.a,re=function(e){Object(h.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(m.a)(this,a);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,isError:!1,error:"\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445",user:[]},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;ae.users.getByUsername({username:"IvanBurovkin"}).then((function(t){var a=t.data;e.setState({user:a,isLoading:!1})})).catch((function(t){e.setState({err:e.state.error,isError:!0,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.isError,s=e.error,n=e.user;return Object(r.jsxs)("div",{className:H.a.wrap,children:[Object(r.jsx)(d.a,{className:H.a.user_card,children:t?Object(r.jsx)(z.a,{className:H.a.preloader}):Object(r.jsx)("div",{children:a?Object(r.jsx)("div",{className:H.a.error,children:s}):Object(r.jsxs)("div",{className:H.a.inner,children:[Object(r.jsx)("img",{src:n.avatar_url,className:H.a.avatar,alt:"Avatar"}),Object(r.jsxs)("div",{className:H.a.info,children:[Object(r.jsxs)("div",{className:H.a.description,children:[Object(r.jsx)("p",{className:H.a.name,children:n.login}),Object(r.jsx)("p",{className:H.a.bio,children:n.bio}),Object(r.jsxs)("a",{className:H.a.contact,href:"mailto: ivan.burovkin@gmail.com",children:[Object(r.jsx)("img",{className:H.a.contact__img,src:Z,alt:"Email"}),"ivan.burovkin@gmail.com"]}),Object(r.jsxs)("a",{className:H.a.contact,href:"tg://resolve?domain=",children:[Object(r.jsx)("img",{className:H.a.contact__img,src:Y,alt:"Telegram"}),"@chudik_63"]})]}),Object(r.jsxs)("div",{className:H.a.social_networks,children:[Object(r.jsx)("a",{href:"https://github.com/IvanBurovkin",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)("img",{src:X,alt:"Github",className:H.a.social_networks__img})}),Object(r.jsx)("a",{href:"https://vk.com/chudik_63",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)("img",{src:$,alt:"VK",className:H.a.social_networks__img})}),Object(r.jsx)("a",{href:"https://www.linkedin.com/in/ivan-burovkin-75287b1b2/",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)("img",{src:ee,alt:"Linkedin",className:H.a.social_networks__img})}),Object(r.jsx)("a",{href:"https://facebook.com/",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)("img",{src:te,alt:"Facebook",className:H.a.social_networks__img})})]})]})]})})}),Object(r.jsx)(W,{})]})}}]),a}(n.a.Component),se=a(23),ne=a.n(se),ie=function(){return Object(r.jsx)(o.a,{children:Object(r.jsxs)("div",{className:ne.a.wrap,children:[Object(r.jsxs)("header",{className:ne.a.header,children:[Object(r.jsx)("a",{href:"https://webheroschool.ru/",target:"_blank",rel:"noopener noreferrer",className:ne.a.school_link,children:Object(r.jsx)("div",{className:ne.a.school_logo})}),Object(r.jsx)(o.b,{to:"/",exact:!0,className:ne.a.header__link,activeClassName:ne.a.header__link_active,children:"\u041e\u0431\u043e \u043c\u043d\u0435"}),Object(r.jsx)(o.b,{to:"/todo",exact:!0,className:ne.a.header__link,activeClassName:ne.a.header__link_active,children:"\u0414\u0435\u043b\u0430"})]}),Object(r.jsxs)("div",{className:ne.a.content,children:[Object(r.jsx)(l.a,{path:"/",exact:!0,component:re}),Object(r.jsx)(l.a,{path:"/todo",component:T})]})]})})};c.a.render(Object(r.jsx)(ie,{}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.eddf7b2d.chunk.js.map