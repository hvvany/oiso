"use strict";(self["webpackChunkoiso"]=self["webpackChunkoiso"]||[]).push([[289,850,720],{7720:function(t,e,s){s.r(e),s.d(e,{default:function(){return d}});s(7658);var r=function(){var t=this,e=t._self._c;return e("div",[e("nav",[e("ul",{staticClass:"nav-group"},[e("li",{staticClass:"nav-group__btn"},["home"===t.navmode?e("a",{staticClass:"material-symbols-outlined",staticStyle:{color:"red"},on:{click:function(e){return t.$router.push("/trip")}}},[t._v(" home ")]):e("a",{staticClass:"material-symbols-outlined",on:{click:function(e){return t.$router.push("/trip")}}},[t._v(" home ")]),e("div",[t._v("Home")])]),e("li",{staticClass:"nav-group__btn"},["board"===t.navmode?e("a",{staticClass:"material-symbols-outlined",staticStyle:{color:"red"},on:{click:function(e){return t.$router.push("/article/board")}}},[t._v(" note_alt ")]):e("a",{staticClass:"material-symbols-outlined",on:{click:function(e){return t.$router.push("/article/board")}}},[t._v(" note_alt ")]),e("div",[t._v("게시판")])]),e("li",{staticClass:"nav-group__btn"},["hotplace"===t.navmode?e("a",{staticClass:"material-symbols-outlined",staticStyle:{color:"red"},on:{click:function(e){return t.$router.push("/article/hotplace")}}},[t._v(" dashboard ")]):e("a",{staticClass:"material-symbols-outlined",on:{click:function(e){return t.$router.push("/article/hotplace")}}},[t._v(" dashboard ")]),e("div",[t._v("핫플")])]),e("li",{staticClass:"nav-group__btn"},["mytrip"===t.navmode?e("a",{staticClass:"material-symbols-outlined",staticStyle:{color:"red"},on:{click:function(e){return t.$router.push("/mytrip/")}}},[t._v(" luggage ")]):e("a",{staticClass:"material-symbols-outlined",on:{click:function(e){return t.$router.push("/mytrip/")}}},[t._v(" luggage ")]),e("div",[t._v("My Trip")])])])])])},a=[],i={name:"AppNav",components:{},props:{navmode:String},data(){return{message:""}},created(){},methods:{}},o=i,n=s(1001),l=(0,n.Z)(o,r,a,!1,null,"31687af9",null),d=l.exports},3850:function(t,e,s){s.r(e),s.d(e,{default:function(){return d}});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-back"},[e("a",{staticClass:"top-back__arrow material-symbols-outlined",on:{click:function(e){return t.$router.go(-1)}}},[t._v("arrow_back")]),e("div",{staticClass:"top-back__title"},[t._v(t._s(t.title))])])},a=[],i={name:"TopBackNav",components:{},props:{title:String},data(){return{message:""}},created(){},methods:{}},o=i,n=s(1001),l=(0,n.Z)(o,r,a,!1,null,"9edcee30",null),d=l.exports},6289:function(t,e,s){s.r(e),s.d(e,{default:function(){return v}});var r=function(){var t=this,e=t._self._c;return e("div",[e("top-back-nav",{attrs:{title:"새 계획 생성"}}),e("div",{staticClass:"plan"},[e("label",{attrs:{for:"sido_code"}},[t._v("지역 선택 ")]),e("div",{staticClass:"selectBox"},[e("div",{staticClass:"select__div"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.sido_code,expression:"sido_code"}],staticClass:"select",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.sido_code=e.target.multiple?s:s[0]}}},[e("option",{attrs:{value:""}},[t._v("선택")]),t._l(t.sidos,(function(s,r){return e("option",{key:r,domProps:{value:s}},[t._v(" "+t._s(r)+" ")])}))],2),e("link",{attrs:{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"}})])]),e("p",{directives:[{name:"show",rawName:"v-show",value:1===t.err,expression:"err === 1"}]},[t._v(t._s(t.errMsg))]),e("label",{attrs:{for:"title"}},[t._v("계획 제목 ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],ref:"title",staticClass:"plan__input",attrs:{type:"text",placeholder:"계획 제목 입력"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),e("p",{directives:[{name:"show",rawName:"v-show",value:2===t.err,expression:"err === 2"}]},[t._v(t._s(t.errMsg))]),e("label",{attrs:{for:"startPeriod"}},[t._v("시작일")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.startPeriod,expression:"startPeriod"}],ref:"startPeriod",staticClass:"plan__input",attrs:{type:"date",placeholder:"시작일 확인",id:"startDate"},domProps:{value:t.startPeriod},on:{input:function(e){e.target.composing||(t.startPeriod=e.target.value)}}}),e("p",{directives:[{name:"show",rawName:"v-show",value:3===t.err,expression:"err === 3"}]},[t._v(t._s(t.errMsg))]),e("label",{attrs:{for:"endPeriod"}},[t._v("종료일")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.endPeriod,expression:"endPeriod"}],ref:"endPeriod",staticClass:"plan__input",attrs:{type:"date",placeholder:"종료일 입력",id:"endDate"},domProps:{value:t.endPeriod},on:{input:function(e){e.target.composing||(t.endPeriod=e.target.value)}}}),e("p",{directives:[{name:"show",rawName:"v-show",value:4===t.err,expression:"err === 4"}]},[t._v(t._s(t.errMsg))]),e("button",{staticClass:"plan__btn",attrs:{type:"button"},on:{click:t.validate}},[t._v(" 계획 생성 ")])]),e("app-nav",{attrs:{navmode:"mytrip"}})],1)},a=[],i=(s(7658),s(629)),o=s(3148),n=s(3850),l=s(7720),d={name:"mytripNew",components:{AppNav:l["default"],TopBackNav:n["default"]},data:function(){return{message:"",errMsg:"",err:0,userId:"",sido_code:"",title:"",startPeriod:"",endPeriod:"",sidos:{"서울":1,"인천":2,"대전":3,"대구":4,"광주":5,"부산":6,"울산":7,"세종":8,"경기도":31,"강원도":32,"충청북도":33,"충청남도":34,"경상북도":35,"경상남도":36,"전라북도":37,"전라남도":38,"제주도":39}}},mounted(){var t=Date.now(),e=new Date(t).toISOString().split("T")[0];let s=document.getElementById("startDate");s.setAttribute("min",e);let r=document.getElementById("endDate");r.setAttribute("min",e),s.addEventListener("input",(function(){r.setAttribute("min",this.value)}))},methods:{validate(){this.err=0;let t=!0;this.sido_code?this.title?this.startPeriod?this.endPeriod?t=!0:(t=!1,this.err=3,this.errMsg="종료일을 입력해주세요",this.$refs.endPeriod.focus()):(t=!1,this.err=3,this.errMsg="시작일을 입력해주세요",this.$refs.startPeriod.focus()):(t=!1,this.err=2,this.errMsg="계획 제목을 입력해주세요",this.$refs.title.focus()):(t=!1,this.err=1,this.errMsg="시도코드를 입력해주세요",this.$refs.sido_code.focus()),t&&this.sendPlan()},sendPlan(){console.log(this.sido_code,this.title,this.startPeriod,this.endPeriod),this.userId=this.userInfo.userId,o.Z.post(`/mytrip/plan/${this.userId}`,{id:this.userId,sido_code:this.sido_code,title:this.title,startPeriod:this.startPeriod,endPeriod:this.endPeriod}).then((({status:t})=>{200==t&&this.$router.push({name:"mytrip"})}))}},computed:{...(0,i.Se)({userInfo:"userInfo"})}},u=d,c=s(1001),p=(0,c.Z)(u,r,a,!1,null,"006adc3c",null),v=p.exports}}]);
//# sourceMappingURL=289.93504641.js.map