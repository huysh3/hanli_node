webpackJsonp([1],{ELMr:function(t,e,a){"use strict";var s=a("mvHQ"),i=a.n(s),l=a("mtWM"),o=a.n(l),n={name:"",number:"",type:"",status:"",currentId:""};e.a={data:function(){return{tableData:[],testerDialogVisible:!1,testerDialog:n}},mounted:function(){this.getTesterList()},methods:{getTesterList:function(){var t=this;o.a.get("http://www.hanligas.com/ajax/get/tester_list").then(function(e){console.log(e),t.tableData=e.data})},addHandler:function(){this.testerDialogVisible=!0},editTesterHandler:function(t){this.testerDialogVisible=!0,this.testerDialog=JSON.parse(i()(t.row)),this.testerDialog.currentId=t.row.id},deleteTesterHandler:function(t){var e=this;this.$confirm("确认删除该测试机？").then(function(){e.axios.get("delete/delete_tester?id="+t.row.id).then(function(){e.getTesterList()})}).catch(function(){return!1})},dialogConfirm:function(){var t=this;this.axios.get("post/add_tester?name="+this.testerDialog.name+"&type="+this.testerDialog.type+"&status="+this.testerDialog.status+"&number="+this.testerDialog.number).then(function(){t.getTesterList(),t.testerDialogVisible=!1})}}}},Jyc7:function(t,e,a){var s=a("t/sV");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("cbf44d50",s,!0,{})},"deo+":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"truck-list--container"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.addHandler}},[t._v("Create +")]),t._v(" "),a("el-table",{attrs:{data:t.tableData}},[a("el-table-column",{attrs:{width:"120",prop:"id",label:"Id"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"Name"}}),t._v(" "),a("el-table-column",{attrs:{width:"120",prop:"number",label:"Number"}}),t._v(" "),a("el-table-column",{attrs:{prop:"type",label:"Type"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"Status"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:"success"}},[t._v(t._s(e.row.status))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"Operations"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){t.editTesterHandler(e)}}},[t._v("Edit")]),t._v(" "),a("el-button",{staticStyle:{color:"red"},attrs:{type:"text"},on:{click:function(a){t.deleteTesterHandler(e)}}},[t._v("Delete")])]}}])})],1),t._v(" "),a("el-dialog",{attrs:{title:"Edit Tester",visible:t.testerDialogVisible,width:"30%"},on:{"update:visible":function(e){t.testerDialogVisible=e}}},[a("div",{staticClass:"dialog--body"},[a("el-input",{staticClass:"dialog-input",attrs:{placeholder:"Name"},model:{value:t.testerDialog.name,callback:function(e){t.$set(t.testerDialog,"name",e)},expression:"testerDialog.name"}}),t._v(" "),a("el-input",{staticClass:"dialog-input",attrs:{placeholder:"Number"},model:{value:t.testerDialog.number,callback:function(e){t.$set(t.testerDialog,"number",e)},expression:"testerDialog.number"}}),t._v(" "),a("el-input",{staticClass:"dialog-input",attrs:{placeholder:"Type"},model:{value:t.testerDialog.type,callback:function(e){t.$set(t.testerDialog,"type",e)},expression:"testerDialog.type"}}),t._v(" "),a("el-input",{staticClass:"dialog-input",attrs:{placeholder:"Status"},model:{value:t.testerDialog.status,callback:function(e){t.$set(t.testerDialog,"status",e)},expression:"testerDialog.status"}})],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.testerDialogVisible=!1}}},[t._v("Cancel")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogConfirm()}}},[t._v("Confirm")])],1)])],1)},i=[],l={render:s,staticRenderFns:i};e.a=l},jPNU:function(t,e,a){"use strict";function s(t){a("Jyc7")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("ELMr"),l=a("deo+"),o=a("VU/8"),n=s,r=o(i.a,l.a,!1,n,"data-v-70f4489f",null);e.default=r.exports},"t/sV":function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".dialog-input[data-v-70f4489f]{margin-bottom:.7rem}",""])}});