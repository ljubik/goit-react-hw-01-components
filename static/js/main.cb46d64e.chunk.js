(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(a,e,t){a.exports={profile:"Profile_profile__3dzvr",description:"Profile_description__2GJPq",avatar:"Profile_avatar__aV4u5",name:"Profile_name__2Psdw",tag:"Profile_tag__20iCl",location:"Profile_location__3GRdm",stats:"Profile_stats__25zJx",list:"Profile_list__2WPV4",label:"Profile_label__3Zjy8",quantity:"Profile_quantity__1zFQ4"}},,function(a,e,t){a.exports={statistics:"Statistics_statistics__2QFok",title:"Statistics_title__3PVIg",statlist:"Statistics_statlist__2lYST",item:"Statistics_item__1vE2T",label:"Statistics_label__227YU",percentage:"Statistics_percentage__3inQt"}},function(a){a.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg","stats":{"followers":5603,"views":4827,"likes":1308}}')},,,function(a){a.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(a){a.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,function(a,e,t){},function(a,e,t){},,function(a,e,t){"use strict";t.r(e);var c=t(2),s=t.n(c),i=t(6),n=t.n(i),r=(t(13),t(14),t(1)),l=t.n(r),o=t(0);function d(a){var e=a.name,t=a.tag,c=a.location,s=a.avatar,i=a.stats;return Object(o.jsxs)("div",{className:l.a.profile,children:[Object(o.jsxs)("div",{className:l.a.description,children:[Object(o.jsx)("img",{src:s,alt:"user avatar",className:l.a.avatar}),Object(o.jsx)("p",{className:l.a.name,children:e}),Object(o.jsxs)("p",{className:l.a.tag,children:["@",t]}),Object(o.jsx)("p",{className:l.a.location,children:c})]}),Object(o.jsxs)("ul",{className:l.a.stats,children:[Object(o.jsxs)("li",{className:l.a.list,children:[Object(o.jsx)("span",{className:l.a.label,children:"Followers"}),Object(o.jsx)("span",{className:l.a.quantity,children:i.followers})]}),Object(o.jsxs)("li",{className:l.a.list,children:[Object(o.jsx)("span",{className:l.a.label,children:"Views"}),Object(o.jsx)("span",{className:l.a.quantity,children:i.views})]}),Object(o.jsxs)("li",{className:l.a.list,children:[Object(o.jsx)("span",{className:l.a.label,children:"Likes"}),Object(o.jsx)("span",{className:l.a.quantity,children:i.likes})]})]})]})}d.defaultProps={name:"Anonymus",tag:"unique",location:"Erth",avatar:"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg",stats:{followers:0,views:0,likes:0}};var b=d,u=t(3),p=t.n(u);function m(a){var e=a.title,t=a.stats;return console.log(e,t),Object(o.jsxs)("section",{className:p.a.statistics,children:[e&&Object(o.jsx)("h2",{className:p.a.title,children:e}),Object(o.jsx)("ul",{className:"statlist",children:t.map((function(a){return Object(o.jsxs)("li",{className:p.a.item,style:{backgroundColor:"#"+Math.floor(16777215*Math.random()).toString(16)},children:[Object(o.jsx)("span",{className:p.a.label,children:a.label}),Object(o.jsxs)("span",{className:p.a.percentage,children:[a.percentage,"%"]})]},a.id)}))})]})}m.defaultProps={title:""};var f=m,j=function(){return Object(o.jsx)("div",{children:"TransactionHistory"})},y=t(4),_=t(7),h=t(8);var v=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(b,{name:y.name,tag:y.tag,location:y.location,avatar:y.avatar,stats:y.stats}),Object(o.jsx)(f,{stats:_,title:"Upload stats"}),Object(o.jsx)(j,{transaction:h})]})};n.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.cb46d64e.chunk.js.map