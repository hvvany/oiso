"use strict";(self["webpackChunkoiso"]=self["webpackChunkoiso"]||[]).push([[387],{1387:function(t,e,o){o.r(e),o.d(e,{default:function(){return l}});var m=function(){var t=this,e=t._self._c;return e("div",[t.showModal?e("div",[e("div",{staticClass:"comment__author"},[t._v(t._s(t.author))]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment_text,expression:"comment_text"}],staticClass:"comment__text",domProps:{value:t.comment_text},on:{input:function(e){e.target.composing||(t.comment_text=e.target.value)}}}),e("div",{staticClass:"group__button"},[e("button",{on:{click:t.modifyEnd}},[t._v("완료")]),e("button",{on:{click:t.modifyStop}},[t._v("취소")])])]):e("div",{staticClass:"comment-card"},[e("div",{staticClass:"comment__author"},[e("div",[t._v(t._s(t.author))]),e("div",{staticClass:"material-symbols-outlined",on:{click:function(e){t.viewEdit=!t.viewEdit}}},[t._v(" more_vert ")])]),e("div",{staticClass:"comment__text"},[t._v(t._s(t.comment_text))]),t.viewEdit?e("div",{staticClass:"group__button"},[e("button",{on:{click:t.modifyStart}},[t._v("수정")]),e("button",{on:{click:t.deleteComment}},[t._v("삭제")])]):t._e()])])},n=[],i=o(3148),s={props:{comment:Object,type:String},data(){return{showModal:!1,commentNo:"",author:"",comment_text:"",articleNo:"",viewEdit:!1}},created(){this.commentNo=this.comment.commentNo,this.comment_text=this.comment.comment,this.author=this.comment.id},methods:{modifyStart(){this.showModal=!0},modifyStop(){this.showModal=!1},modifyEnd(){""!=this.comment_text?i.Z.put(`/comment/${this.type}/${this.commentNo}`,{commentNo:this.commentNo,comment:this.comment_text}).then((({status:t})=>{200==t&&(this.$parent.getComment(),this.modifyStop())})).catch((({response:t})=>{console.log(t)})):alert("정보를 입력해 주세요")},deleteComment(){confirm("정말 삭제하시겠습니까?")&&this.delete()},delete(){i.Z["delete"](`/comment/board/${this.commentNo}`).then((({status:t})=>{200==t&&this.$parent.getComment()}))}}},c=s,a=o(1001),d=(0,a.Z)(c,m,n,!1,null,null,null),l=d.exports}}]);
//# sourceMappingURL=387.2c834934.js.map