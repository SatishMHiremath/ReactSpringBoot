(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{33:function(e,a,t){e.exports=t(62)},38:function(e,a,t){},39:function(e,a,t){},62:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(29),l=t.n(s),c=(t(38),t(39),t(30)),o=t(9),m=t(7),u=t(8),i=t(4),d=t(11),h=t(12),p=t(13),f=t.n(p),N="http://localhost:8080/users",E=new(function(){function e(){Object(m.a)(this,e)}return Object(u.a)(e,[{key:"fetchUsers",value:function(){return f.a.get(N)}},{key:"fetchUserById",value:function(e){return f.a.get(N+"/"+e)}},{key:"deleteUser",value:function(e){return f.a.delete(N+"/"+e)}},{key:"addUser",value:function(e){return f.a.post(""+N,e)}},{key:"editUser",value:function(e){return f.a.put(N+"/"+e.id,e)}}]),e}()),v=function(e){Object(h.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).state={users:[],message:null},n.deleteUser=n.deleteUser.bind(Object(i.a)(n)),n.editUser=n.editUser.bind(Object(i.a)(n)),n.addUser=n.addUser.bind(Object(i.a)(n)),n.reloadUserList=n.reloadUserList.bind(Object(i.a)(n)),n}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.reloadUserList()}},{key:"reloadUserList",value:function(){var e=this;E.fetchUsers().then((function(a){e.setState({users:a.data.result})}))}},{key:"deleteUser",value:function(e){var a=this;E.deleteUser(e).then((function(t){a.setState({message:"User deleted successfully."}),a.setState({users:a.state.users.filter((function(a){return a.id!==e}))})}))}},{key:"editUser",value:function(e){window.localStorage.setItem("userId",e),this.props.history.push("/edit-user")}},{key:"addUser",value:function(){window.localStorage.removeItem("userId"),this.props.history.push("/add-user")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h2",{className:"text-center"},"User Details"),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.addUser()}}," Add User"),r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"hidden"},"Id"),r.a.createElement("th",null,"FirstName"),r.a.createElement("th",null,"LastName"),r.a.createElement("th",null,"UserName"),r.a.createElement("th",null,"Age"),r.a.createElement("th",null,"Salary"))),r.a.createElement("tbody",null,this.state.users.map((function(a){return r.a.createElement("tr",{key:a.id},r.a.createElement("td",null,a.firstName),r.a.createElement("td",null,a.lastName),r.a.createElement("td",null,a.userName),r.a.createElement("td",null,a.age),r.a.createElement("td",null,a.salary),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-success",onClick:function(){return e.deleteUser(a.id)}}," Delete"),r.a.createElement("button",{className:"btn btn-success",onClick:function(){return e.editUser(a.id)}}," Edit")))})))))}}]),t}(n.Component),g=t(15),b=function(e){Object(h.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).saveUser=function(e){e.preventDefault();var a={userName:n.state.userName,password:n.state.password,firstName:n.state.firstName,lastName:n.state.lastName,age:n.state.age,salary:n.state.salary};E.addUser(a).then((function(e){n.setState({message:"User added successfully."}),n.props.history.push("/users")}))},n.onChange=function(e){return n.setState(Object(g.a)({},e.target.name,e.target.value))},n.state={userName:"",password:"",firstName:"",lastName:"",age:"",salary:"",message:null},n.saveUser=n.saveUser.bind(Object(i.a)(n)),n}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",{className:"text-center"},"Add User"),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"User Name:"),r.a.createElement("input",{type:"text",placeholder:"userName",name:"userName",className:"form-control",value:this.state.userName,onChange:this.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",placeholder:"password",name:"password",className:"form-control",value:this.state.password,onChange:this.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"First Name:"),r.a.createElement("input",{placeholder:"First Name",name:"firstName",className:"form-control",value:this.state.firstName,onChange:this.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Last Name:"),r.a.createElement("input",{placeholder:"Last name",name:"lastName",className:"form-control",value:this.state.lastName,onChange:this.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Age:"),r.a.createElement("input",{type:"number",placeholder:"age",name:"age",className:"form-control",value:this.state.age,onChange:this.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Salary:"),r.a.createElement("input",{type:"number",placeholder:"salary",name:"salary",className:"form-control",value:this.state.salary,onChange:this.onChange})),r.a.createElement("button",{className:"btn btn-success",onClick:this.saveUser},"Save")))}}]),t}(n.Component),y=function(e){Object(h.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).onChange=function(e){return n.setState(Object(g.a)({},e.target.name,e.target.value))},n.saveUser=function(e){e.preventDefault();var a={id:n.state.id,password:n.state.password,firstName:n.state.firstName,lastName:n.state.lastName,age:n.state.age,salary:n.state.salary};E.editUser(a).then((function(e){n.setState({message:"User added successfully."}),n.props.history.push("/users")}))},n.state={id:"",firstName:"",lastName:"",age:"",salary:""},n.saveUser=n.saveUser.bind(Object(i.a)(n)),n.loadUser=n.loadUser.bind(Object(i.a)(n)),n}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.loadUser()}},{key:"loadUser",value:function(){var e=this;E.fetchUserById(window.localStorage.getItem("userId")).then((function(a){var t=a.data.result;e.setState({id:t.id,userName:t.userName,firstName:t.firstName,lastName:t.lastName,age:t.age,salary:t.salary})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",{className:"text-center"},"Edit User"),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"User Name:"),r.a.createElement("input",{type:"text",placeholder:"userName",name:"userName",className:"form-control",readonly:"true",defaultValue:this.state.userName})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"First Name:"),r.a.createElement("input",{placeholder:"First Name",name:"firstName",className:"form-control",value:this.state.firstName,onChange:this.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Last Name:"),r.a.createElement("input",{placeholder:"Last name",name:"lastName",className:"form-control",value:this.state.lastName,onChange:this.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Age:"),r.a.createElement("input",{type:"number",placeholder:"age",name:"age",className:"form-control",value:this.state.age,onChange:this.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Salary:"),r.a.createElement("input",{type:"number",placeholder:"salary",name:"salary",className:"form-control",value:this.state.salary,onChange:this.onChange})),r.a.createElement("button",{className:"btn btn-success",onClick:this.saveUser},"Save")))}}]),t}(n.Component),U={color:"red",margin:"10px"},C=function(){return r.a.createElement("div",null,r.a.createElement(c.a,null,r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h1",{className:"text-center",style:U},"React User Application"),r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",exact:!0,component:v}),r.a.createElement(o.a,{path:"/users",component:v}),r.a.createElement(o.a,{path:"/add-user",component:b}),r.a.createElement(o.a,{path:"/edit-user",component:y})))))};var k=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.493a94ec.chunk.js.map