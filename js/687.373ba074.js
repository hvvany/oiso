"use strict";(self["webpackChunkoiso"]=self["webpackChunkoiso"]||[]).push([[687],{5687:function(e,s,r){r.r(s),r.d(s,{default:function(){return c}});var t=function(){var e=this,s=e._self._c;return s("div",[s("h1",[e._v("Login View")]),s("div",{staticClass:"login"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.userId,expression:"userId"}],staticClass:"login__input",attrs:{type:"text",placeholder:"아이디 입력"},domProps:{value:e.userId},on:{input:function(s){s.target.composing||(e.userId=s.target.value)}}}),s("p",{directives:[{name:"show",rawName:"v-show",value:1===e.err,expression:"err === 1"}]},[e._v(e._s(e.errMsg))]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userPw,expression:"userPw"}],staticClass:"login__input",attrs:{type:"text",placeholder:"비밀번호 입력"},domProps:{value:e.userPw},on:{input:function(s){s.target.composing||(e.userPw=s.target.value)}}}),s("p",{directives:[{name:"show",rawName:"v-show",value:2===e.err,expression:"err === 2"}]},[e._v(e._s(e.errMsg))]),s("button",{staticClass:"login__btn",attrs:{type:"button"},on:{click:e.validate}},[e._v("로그인")]),s("router-link",{attrs:{to:"/user/signup"}},[e._v("회원가입")])],1)])},i=[],n=(r(7658),r(629)),o={name:"LoginView",components:{},data(){return{errMsg:"",err:0,userId:"",userPw:""}},methods:{...(0,n.nv)(["userLogin"]),validate(){this.err=0;let e=!0;this.userId?this.userPw?e=!0:(e=!1,this.err=2,this.errMsg="비밀번호를 입력해주세요",this.$refs.pw1.focus()):(e=!1,this.err=1,this.errMsg="ID를 입력해주세요",this.$refs.id.focus()),e&&this.login()},login(){const e=this;this.userLogin({userId:this.userId,userPwd:this.userPw,callback:function(s){200==s?e.$router.push({name:"tripmain"}):500==s&&alert("서버 오류 입니다.")}})}}},u=o,a=r(1001),l=(0,a.Z)(u,t,i,!1,null,"7ffc1203",null),c=l.exports}}]);
//# sourceMappingURL=687.373ba074.js.map