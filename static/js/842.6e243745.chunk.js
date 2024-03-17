"use strict";(self.webpackChunkreact_redux=self.webpackChunkreact_redux||[]).push([[842],{3842:function(e,r,s){s.r(r),s.d(r,{default:function(){return F}});var a=s(5671),t=s(3144),i=s(136),c=s(516),n=s(8687),o=s(2791),u=s(1413),l=s(4165),p=s(5861),h=s(9195),d=s(7689),g="Login_container__3sHEk",m="Login_wrapper__wBVR+",_="Login_title__ceMYW",x="Login_form__KiMPS",L="Login_checkbox__9Oesx",f="Login_checkboxBar__a4FNU",j="Login_checkboxBarTitle__eTf33",v="Login_submitButton__ALfCg",w="Login_errorMessage__HzcuI",b="Login_captchaContainer__kybOW",N="Login_captchaImage__m0wPq",k=s(5723),U=s(184),Z=function(e){var r=(0,h.cI)({mode:"onBlur",defaultValues:{login:"",password:"",rememberMe:!1,captcha:""}}),s=r.register,a=r.handleSubmit,t=r.clearErrors,i=r.setError,c=r.reset,n=r.watch,o=r.setFocus,d=r.formState.errors,g=function(){var r=(0,p.Z)((0,l.Z)().mark((function r(s){return(0,l.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.login(i,s.login,s.password,s.rememberMe,s.captcha),c({login:"",password:"",rememberMe:!1,captcha:""},{keepErrors:!0});case 2:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return(0,U.jsxs)("form",{className:x,onSubmit:a(g),children:[(0,U.jsx)(k.Z,{inputName:"login",title:"Login",required:"Login is required",errors:d,watch:n,setFocus:o,clearErrors:t,register:s}),(0,U.jsx)(k.Z,{inputName:"password",title:"Password",secured:!0,required:"Password is required",errors:d,watch:n,setFocus:o,clearErrors:t,register:s}),e.captchaURL&&(0,U.jsx)("div",{className:b,children:(0,U.jsx)("img",{src:e.captchaURL,alt:"captcha",className:N})}),e.captchaURL&&(0,U.jsx)(k.Z,{inputName:"captcha",title:"Captcha",required:"Captcha is required",errors:d,watch:n,setFocus:o,clearErrors:t,register:s}),d.server&&(0,U.jsx)("p",{className:w,children:d.server.message.toString()}),(0,U.jsx)("div",{className:f,children:(0,U.jsxs)("label",{children:[(0,U.jsx)("input",(0,u.Z)((0,u.Z)({className:L},s("rememberMe")),{},{type:"checkbox"})),(0,U.jsx)("span",{className:j,children:"Keep me signed in"})]})}),(0,U.jsx)("input",{type:"submit",className:v,value:"Login"})]})},R=function(e){var r,s,a=(0,d.TH)();return e.isAuth?null!==a&&void 0!==a&&null!==(r=a.state)&&void 0!==r&&r.prevUrl?(0,U.jsx)(d.Fg,{to:null===a||void 0===a||null===(s=a.state)||void 0===s?void 0:s.prevUrl}):(0,U.jsx)(d.Fg,{to:"/profile"}):(0,U.jsx)("div",{className:g,children:(0,U.jsxs)("div",{className:m,children:[(0,U.jsx)("span",{className:_,children:"Login"}),(0,U.jsx)(Z,{login:e.login,captchaURL:e.captchaURL})]})})},C=s(7561),E=function(e){(0,i.Z)(s,e);var r=(0,c.Z)(s);function s(){return(0,a.Z)(this,s),r.apply(this,arguments)}return(0,t.Z)(s,[{key:"render",value:function(){return(0,U.jsx)(U.Fragment,{children:(0,U.jsx)(R,{login:this.props.login,isAuth:this.props.isAuth,captchaURL:this.props.captchaURL})})}}]),s}(o.Component),F=(0,n.$j)((function(e){return{isAuth:e.auth.isAuth,captchaURL:e.auth.captchaURL}}),{login:C.CE})(E)}}]);
//# sourceMappingURL=842.6e243745.chunk.js.map