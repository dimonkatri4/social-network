"use strict";(self.webpackChunkreact_1=self.webpackChunkreact_1||[]).push([[184],{184:function(e,t,a){a.r(t),a.d(t,{default:function(){return T}});var n=a(2791),l=a(4233),r=a(9271),i=a(1523),s="dialogItem_dialog__1tEA7",m="dialogItem_photo_user__JvPvY",c="dialogItem_active__2jjgV",o=function(e){var t="/dialog/"+e.id;return n.createElement("div",{className:s},n.createElement(i.OL,{to:t,activeClassName:c},n.createElement("div",{className:m},n.createElement("img",{src:e.img,alt:""})),e.name))},u="dialogs_dialogs__Gmtur",g="dialogs_dialogsItem__XX2LK",d="dialogs_caption__SmZ1G",_="dialogs_messages__vJbx4",E="message_text__QaJRh",f="message_user_photo__6bSzi",v="message_message__2lK3f",p="message_triangle__56GP2",h=a(4764),N=function(e){return n.createElement("div",{className:v},n.createElement("div",{className:f},n.createElement("img",{src:h,alt:""})),n.createElement("div",{className:p}),n.createElement("div",{className:E},e.message))},b="nameDialog_name_dialog__tA0LN",k="nameDialog_status__OGyGy",A="nameDialog_name__9wQwi",S=function(e){return n.createElement("div",{className:b},n.createElement("div",null,n.createElement("img",{src:e.img,alt:""})),n.createElement("div",{className:A},e.name,n.createElement("div",{className:k},"online")))},y="selectDialog_select_dialog__hKE-G",x=function(e){return n.createElement("div",{className:y},n.createElement("h2",null,"Select dialog"))},P=a(2845),w="inputMessage_input_text__z7afw",G="inputMessage_submitButton__KnB7J",j=a(1074),M=a(5304),Z=a(3720),C=((0,M.BS)(30),function(e){return n.createElement(Z.l0,{onSubmit:e.onSubmit},(function(e){var t=e.handleSubmit;return n.createElement("form",{onSubmit:t},n.createElement("div",{className:w},n.createElement(Z.gN,{component:j.g,name:"messageText",placeholder:"write message"}),n.createElement("button",{className:"button ".concat(G)},"Send")))}))}),D=function(e){return n.createElement(C,{onSubmit:function(t){e.addMessage(t.messageText),t.messageText=""}})},I=(0,l.$j)(null,{addMessage:P.H})(D),J=a(5671),K=a(3144),W=a(136),B=a(2882),L=function(e){var t=function(t){(0,W.Z)(l,t);var a=(0,B.Z)(l);function l(){return(0,J.Z)(this,l),a.apply(this,arguments)}return(0,K.Z)(l,[{key:"render",value:function(){return this.props.isAuth?n.createElement(e,this.props):n.createElement(r.l_,{to:"/login"})}}]),l}(n.Component);return(0,l.$j)((function(e){return{isAuth:e.auth.isAuth}}))(t)}((function(e){var t=e.dialogsPage.dialogs.map((function(e){return n.createElement(r.AW,{path:"/dialog/".concat(e.id),key:e.id,render:function(){return n.createElement(S,{img:e.img,name:e.name,key:e.id})}})})),a=e.dialogsPage.dialogs.map((function(e){return n.createElement(o,{name:e.name,id:e.id,img:e.img,key:e.id})})),l=e.dialogsPage.messages.map((function(e){return n.createElement(r.AW,{path:"/dialog/:numder",key:e.id,render:function(){return n.createElement(N,{message:e.message,key:e.id})}})}));return n.createElement("div",{className:"".concat(u," profile_block")},n.createElement("div",{className:"".concat(d," caption")},n.createElement("h3",{className:"title"},"All Messages")),n.createElement("div",{className:g},a),n.createElement("div",{className:_},t,l,n.createElement(r.AW,{path:"/dialog/:number",render:function(){return n.createElement(I,null)}}),n.createElement(r.AW,{exact:!0,path:"/dialog",render:function(){return n.createElement(x,null)}})))})),T=(0,l.$j)((function(e){return{dialogsPage:e.dialogsPage}}))(L)}}]);
//# sourceMappingURL=184.78bae3c2.chunk.js.map