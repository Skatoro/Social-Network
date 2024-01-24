"use strict";(self.webpackChunkreact_redux=self.webpackChunkreact_redux||[]).push([[842],{3842:function(e,r,n){n.r(r),n.d(r,{default:function(){return Z}});var s=n(5671),i=n(3144),t=n(136),a=n(516),c=n(8687),o=n(2791),u=n(1413),p=n(4165),l=n(5861),h=n(9195),d=n(7689),g={},m=n(184),x=function(e){var r,n,s,i=(0,h.cI)({mode:"onBlur",defaultValues:{login:"",password:"",rememberMe:!1,captcha:""}}),t=i.register,a=i.handleSubmit,c=i.clearErrors,o=i.setError,d=i.reset,x=i.formState.errors,f=function(){var r=(0,l.Z)((0,p.Z)().mark((function r(n){return(0,p.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.login(o,n.login,n.password,n.rememberMe,n.captcha),d({login:"",password:"",rememberMe:!1,captcha:""},{keepErrors:!0});case 2:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return(0,m.jsxs)("form",{onSubmit:a(f),children:[(0,m.jsx)("input",(0,u.Z)((0,u.Z)({},t("login",{required:"Login is required",minLength:{value:4,message:"Min length is ".concat(4)}})),{},{placeholder:"Login",onClick:function(){return c(["login","server"])}})),(0,m.jsx)("p",{children:null===(r=x.login)||void 0===r?void 0:r.message}),(0,m.jsx)("input",(0,u.Z)((0,u.Z)({},t("password",{required:"Password is required"})),{},{placeholder:"Password",onClick:function(){return c(["password","server"])}})),(0,m.jsx)("p",{children:null===(n=x.password)||void 0===n?void 0:n.message}),(0,m.jsx)("input",(0,u.Z)((0,u.Z)({},t("rememberMe")),{},{type:"checkbox"})),(0,m.jsx)("br",{}),e.captchaURL&&(0,m.jsxs)("div",{children:[(0,m.jsx)("img",{src:e.captchaURL}),(0,m.jsx)("br",{}),(0,m.jsx)("input",(0,u.Z)((0,u.Z)({},t("captcha",{required:"Captcha is required"})),{},{placeholder:"Captcha",onClick:function(){return c(["captcha","server"])}}))]}),(0,m.jsx)("p",{children:null===(s=x.captcha)||void 0===s?void 0:s.message}),x.server&&(0,m.jsx)("div",{className:g.errorMessage,children:(0,m.jsx)("span",{children:x.server.message})}),(0,m.jsx)("input",{type:"submit"})]})},f=function(e){return e.isAuth?(0,m.jsx)(d.Fg,{to:"/profile"}):(0,m.jsxs)("div",{children:[(0,m.jsx)("h1",{children:"Login page"}),(0,m.jsx)(x,{login:e.login,captchaURL:e.captchaURL})]})},j=n(7561),v=function(e){(0,t.Z)(n,e);var r=(0,a.Z)(n);function n(){return(0,s.Z)(this,n),r.apply(this,arguments)}return(0,i.Z)(n,[{key:"render",value:function(){return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(f,{login:this.props.login,isAuth:this.props.isAuth,captchaURL:this.props.captchaURL})})}}]),n}(o.Component),Z=(0,c.$j)((function(e){return{isAuth:e.auth.isAuth,captchaURL:e.auth.captchaURL}}),{login:j.CE})(v)}}]);
//# sourceMappingURL=842.1b421ed9.chunk.js.map