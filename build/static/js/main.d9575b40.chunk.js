(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},19:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(13),o=t.n(c),u=(t(19),t(2)),i=t(3),l=t.n(i),m="/api/persons",f=function(){return l.a.get(m)},d=function(e){return l.a.post(m,e)},s=function(e,n){return l.a.put("".concat(m,"/").concat(n),e)},h=function(e){return l.a.delete("".concat(m,"/").concat(e))},b=function(e){var n=e.notification,t=e.error;return r.a.createElement("div",{className:"notification ".concat(t?"error":"")},n)},p=function(e){var n=e.filter,t=e.handleFilterChange;return r.a.createElement("p",null,"filter shown with",r.a.createElement("input",{className:"input filter",value:n,onChange:t}))},v=function(e){var n=e.persons,t=e.filter,a=e.handleDelete;return r.a.createElement(r.a.Fragment,null,n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).sort((function(e,n){return e.name<n.name?-1:1})).map((function(e){return r.a.createElement("div",{key:e.id},e.name," ",e.number," ",r.a.createElement("button",{name:e.id,onClick:a},"Delete"))})))},E=function(e){var n=e.handleSubmit,t=e.handleChange,a=e.newName,c=e.newNumber;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",{className:"input-container"},"name: ",r.a.createElement("input",{className:"input",value:a,name:"name",onChange:t}),"number: ",r.a.createElement("input",{className:"input",value:c,name:"number",onChange:t})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},w=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(""),i=Object(u.a)(o,2),l=i[0],m=i[1],w=Object(a.useState)(""),g=Object(u.a)(w,2),C=g[0],j=g[1],O=Object(a.useState)(""),N=Object(u.a)(O,2),S=N[0],k=N[1],D=Object(a.useState)(""),L=Object(u.a)(D,2),y=L[0],F=L[1],A=Object(a.useState)(!1),I=Object(u.a)(A,2),J=I[0],x=I[1];Object(a.useEffect)((function(){f().then((function(e){return c(e.data)}))}),[]);var B=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];F(e),n&&x(!0),setTimeout((function(){F(""),n&&x(!1)}),5e3)},P=function(){j(""),m("")};return r.a.createElement("div",null,y&&r.a.createElement(b,{notification:y,error:J}),r.a.createElement("h1",null,"Phonebook"),r.a.createElement(p,{filter:S,handleFilterChange:function(e){return k(e.target.value)}}),r.a.createElement("h2",null,"Add a new"),r.a.createElement(E,{handleSubmit:function(e){e.preventDefault();var n=t.find((function(e){return e.name.toLowerCase()===l.toLowerCase()}));if(n&&C&&window.confirm("".concat(l," is already added to phonebooke, replace the old number with a new one?"))){var a={name:l,number:C},r=n.id;s(a,r).then((function(e){B("Updated ".concat(l));var n=t.filter((function(e){return e.name.toLowerCase()!==l.toLowerCase()})).concat(e.data);c(n),P()})).catch((function(){return B("Failed to update ".concat(l,"'s information to phonebook"),!0)}))}else if(l&&C){d({name:l,number:C}).then((function(e){B("Added ".concat(l)),c(t.concat(e.data)),P()})).catch((function(e){return B(e.response.data.error,!0)}))}},handleChange:function(e){return"name"===e.target.name?m(e.target.value):j(e.target.value)},newNumber:C,newName:l}),r.a.createElement("h2",null,"Numbers"),t.length>0&&r.a.createElement(v,{persons:t,handleDelete:function(e){var n=e.target.name,a=t.find((function(e){return e.id===n}));window.confirm("Delete ".concat(a.name,"?"))&&h(n).then((function(){B("Deleted ".concat(a.name));var e=t.filter((function(e){return e.id!==n}));c(e)})).catch((function(){return B("Information of ".concat(a.name," has already been removed from server"),!0)}))},filter:S}))};o.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d9575b40.chunk.js.map