(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"2OT0":function(e,t,a){"use strict";a.d(t,"a",function(){return g});a("Awhp");var n=a("KrTs"),l=(a("+L6B"),a("2/Rp")),o=(a("/zsF"),a("PArb")),r=(a("5Dmo"),a("3S7+")),p=(a("Pwec"),a("CtXQ")),c=(a("2qtc"),a("kLXV")),i=(a("tU7J"),a("wFql")),s=a("q1tI"),m=a.n(s),h=a("cD+T"),d=a.n(h),y=a("3a4m"),u=a.n(y),E=i["a"].Text;class g extends m.a.Component{proceed(){var e=this.props.id;-1!==this.props.name.indexOf("\u6d41\u91cf")?c["a"].confirm({title:"\u786e\u8ba4\u8d2d\u4e70",content:"\u6b64\u53e0\u52a0\u5305\u4ec5\u4f9b\u5957\u9910\u671f\u9650\u5185\u6d41\u91cf\u4e0d\u8db3\u7684\u7528\u6237\u4f7f\u7528\uff0c\u8bf7\u4ed4\u7ec6\u6838\u5b9e\uff0c\u786e\u8ba4\u4e0b\u5355\u540e\u5c06\u4e0d\u4e88\u9000\u6b3e\u3002",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk(){u.a.push("/user/shop/buy/"+e)},onCancel(){}}):u.a.push("/user/shop/buy/"+e)}render(){return m.a.createElement("div",{className:d.a.container,style:this.props.style},m.a.createElement("div",{className:d.a.cardBanner},m.a.createElement("p",{style:{fontSize:"36px",marginBottom:"10px",color:"#f5f5f5"}},this.props.price,m.a.createElement("small",null," \u5143")),m.a.createElement("p",{style:{fontSize:"18px",color:"#f5f5f5"}},this.props.name)),m.a.createElement("div",{className:d.a.cardContent},m.a.createElement("p",null,m.a.createElement(p["a"],{type:"cloud",theme:"twoTone"})," ",m.a.createElement(E,{style:{fontWeight:"bold"}},"\u53ef\u7528\u6d41\u91cf")," \u6700\u9ad8\u8fbe ",this.props.traffic," Gib / \u6708"),m.a.createElement("p",null,m.a.createElement(p["a"],{type:"hdd",theme:"twoTone"})," ",m.a.createElement(E,{style:{fontWeight:"bold"}},"\u8282\u70b9\u6570\u91cf")," ",this.props.nodes," \u4e2a"),m.a.createElement("p",null,m.a.createElement(p["a"],{type:"dashboard",theme:"twoTone"})," ",m.a.createElement(E,{style:{fontWeight:"bold"}},"\u6700\u9ad8\u901f\u7387")," ",this.props.speed>0?this.props.speed+" Mbps":"\u4e0d\u9650\u901f"),m.a.createElement("p",null,m.a.createElement(p["a"],{type:"tablet",theme:"twoTone"})," ",m.a.createElement(E,{style:{fontWeight:"bold"}},"\u53ef\u7528\u8bbe\u5907")," ",0!=this.props.connector?this.props.connector+" \u4e2a":"\u65e0\u9650\u5236"),m.a.createElement("p",null,m.a.createElement(p["a"],{type:"unlock",theme:"twoTone"})," ",m.a.createElement(E,{style:{fontWeight:"bold"}},"\u89e3\u9501\u5a92\u4f53")," 6+ \u4e2a\xa0",m.a.createElement(r["a"],{placement:"left",title:"Netflix, Abema, HBO, Hulu, DMM, Fanza \u7b49"},m.a.createElement(p["a"],{type:"question-circle"}))),-1!==this.props.name.indexOf("Ultimate")||-1!==this.props.name.indexOf("Business Premium")?m.a.createElement("p",null,m.a.createElement(p["a"],{type:"fire",theme:"twoTone"})," ",m.a.createElement(E,{style:{fontWeight:"bold"}},"\u7279\u522b\u63d0\u4f9b")," \u6570\u6761 IPLC \u53ca BGP \u4e13\u7ebf"):null),this.props.displayAction?m.a.createElement("div",null,m.a.createElement(o["a"],{style:{marginBottom:"14px"},dashed:!0}),m.a.createElement(l["a"],{onClick:()=>{this.proceed()},style:{marginRight:"12px"}},m.a.createElement(p["a"],{type:"shopping-cart"})," \u4e0b\u5355"),this.props.canGroup?m.a.createElement(n["a"],{count:"\u6298"},m.a.createElement(l["a"],{type:"primary",style:{boxShadow:0,height:"32px"},onClick:()=>{this.props.create(this.props.id)}},m.a.createElement(p["a"],{type:"team"})," \u62fc\u56e2\u4e0b\u5355")):""):"")}}},"3EOA":function(e,t,a){"use strict";a.r(t);a("FJo9");var n=a("L41K"),l=(a("Q9mQ"),a("diRs")),o=(a("Awhp"),a("KrTs")),r=(a("+L6B"),a("2/Rp")),p=(a("5NDa"),a("5rEg")),c=(a("y8nQ"),a("Vl3Y")),i=(a("7Kak"),a("9yH6")),s=(a("/zsF"),a("PArb")),m=(a("14J3"),a("BMrR")),h=(a("jCWc"),a("kPKH")),d=(a("T2oS"),a("W9HT")),y=(a("2qtc"),a("kLXV")),u=(a("miYZ"),a("tsqr")),E=(a("Pwec"),a("CtXQ")),g=a("q1tI"),x=a.n(g),f=a("MuoO"),w=a("GNA+"),b=a.n(w),A=a("gZfH"),k=a.n(A),v=a("2OT0"),T=E["a"].createFromIconfontCN({scriptUrl:"//at.alicdn.com/t/font_1380475_mv2qlmk9qwb.js"}),S="shop",_=e=>{var t=e[S],a=e["loading"];return{shop:t,loading:a}},C=e=>{return{onDidMount:t=>{e({type:"".concat(S,"/initQuery"),payload:{id:t}})},updateStep:()=>{e({type:"".concat(S,"/updateStep")})},checkOut:t=>{e({type:"".concat(S,"/purchase"),payload:t})},checkStatus:t=>{e({type:"".concat(S,"/checkStatus"),payload:t,callback:e=>{0===e&&u["a"].warning("\u6682\u672a\u6536\u5230\u60a8\u7684\u4ed8\u6b3e\u3002\u5982\u60a8\u5df2\u4ed8\u6b3e\u6210\u529f\uff0c\u8bf7\u5728\u4e00\u5206\u949f\u540e\u5c1d\u8bd5\uff0c\u8fd9\u53ef\u80fd\u662f\u56e0\u4e3a\u7cfb\u7edf\u5ef6\u8fdf\u3002")}})},create:t=>{e({type:"".concat(S,"/createGroup"),payload:t})},onUnmount:()=>{e({type:"".concat(S,"/clearState")})}}};class B extends x.a.Component{componentDidMount(){this.props.onDidMount(this.props.match.params.id)}componentWillUnmount(){this.props.onUnmount()}updateStep(e){var t=this;this.props.form.validateFields((a,n)=>{a||(n["id"]=e,this.props.shop.userInfo.expired||-1!==this.props.shop.items[0].name.indexOf("\u6d41\u91cf")?(n["activate"]=1,t.props.checkOut(n)):y["a"].confirm({title:"\u5957\u9910\u6fc0\u6d3b\u9009\u9879",content:x.a.createElement("span",null,x.a.createElement("p",null,"\u6211\u4eec\u6ce8\u610f\u5230\u60a8\u7684\u8d26\u6237\u4e2d\u7684\u5957\u9910\u8fd8\u672a\u8fc7\u671f\uff0c\u8bf7\u95ee\u662f\u7acb\u5373\u8865\u507f\u5dee\u4ef7\u5347\u7ea7\u5957\u9910\u8fd8\u662f\u5f85\u5f53\u524d\u5957\u9910\u7ed3\u675f\u540e\u542f\u7528\uff1f"),x.a.createElement("small",null,"*\u5dee\u4ef7\u8ba1\u7b97\u516c\u5f0f\u4e3a: \u65b0\u5957\u9910\u4ef7\u683c - (\u8001\u5957\u9910\u603b\u5929\u6570 - \u8001\u5957\u9910\u5df2\u7528\u5929\u6570) / \u8001\u5957\u9910\u603b\u5929\u6570 * \u8001\u5957\u9910\u4ef7\u683c")),okText:"\u5230\u671f\u6fc0\u6d3b",cancelText:"\u5dee\u4ef7\u5347\u7ea7",closable:!0,onOk(){n["activate"]=0,t.props.checkOut(n)},onCancel(){n["activate"]=1,t.props.checkOut(n)}}))})}render(){var e=this.props.shop.items?this.props.shop.items[0]:null,t="",a=this.props.shop.step,y=this.props.form,u=y.getFieldDecorator,g=(y.getFieldValue,navigator.userAgent),f=g.match(/(iPhone\sOS)\s([\d_]+)/)||g.match(/(Android)\s+([\d.]+)/),w=this.props.shop.payInfo.type,A=[this.props.shop.loading.shopCard?x.a.createElement("div",{style:{textAlign:"center",marginTop:"44px"}},x.a.createElement(d["a"],null)):x.a.createElement("div",{style:{maxWidth:"428px",marginLeft:"auto",marginRight:"auto",boxShadow:0}},x.a.createElement(v["a"],{id:e.id,name:e.name,connector:e.connector,traffic:e.traffic,nodes:e.nodeCount,speed:e.speed,price:e.price,displayAction:!1,style:{maxWidth:"312px"}})),x.a.createElement("div",{style:{textAlign:"center",marginBottom:"24px"}},x.a.createElement(E["a"],{type:"loading",spin:!0,style:{color:"#1890ff",fontSize:"64px"}}),x.a.createElement("p",{style:{fontSize:"24px",marginTop:"24px",color:"rgba(0,0,0,0.85)"}},"\u6b63\u5728\u7b49\u5f85\u652f\u4ed8"),x.a.createElement("div",{style:{backgroundColor:"#fafafa",maxWidth:"70%",marginLeft:"auto",marginRight:"auto",paddingLeft:"22px",paddingTop:"14px"}},x.a.createElement(m["a"],{gutter:24,className:b.a.row},x.a.createElement(h["a"],{xs:24,sm:8,className:b.a.label},"\u4ea7\u54c1:"),x.a.createElement(h["a"],{xs:24,sm:16,style:{textAlign:"left"}},e.name)),x.a.createElement(m["a"],{gutter:24,className:b.a.row},x.a.createElement(h["a"],{xs:24,sm:8,className:b.a.label},"\u4ef7\u683c:"),x.a.createElement(h["a"],{xs:24,sm:16,style:{textAlign:"left"}},this.props.shop.payInfo.price," \u5143")))),x.a.createElement("div",{style:{textAlign:"center",marginBottom:"24px"}},x.a.createElement(E["a"],{type:"check-circle",theme:"twoTone",twoToneColor:"#52c41a",style:{fontSize:"64px"}}),x.a.createElement("p",{style:{fontSize:"24px",marginTop:"24px",color:"rgba(0,0,0,0.85)"}},"\u652f\u4ed8\u6210\u529f"),x.a.createElement("div",{style:{backgroundColor:"#fafafa",maxWidth:"60%",marginLeft:"auto",marginRight:"auto",paddingLeft:"22px",paddingTop:"14px"}},x.a.createElement(m["a"],{gutter:24,className:b.a.row},x.a.createElement(h["a"],{xs:24,sm:8,className:b.a.label},"\u4ea7\u54c1:"),x.a.createElement(h["a"],{xs:24,sm:16,style:{textAlign:"left"}},e.name)),x.a.createElement(m["a"],{gutter:24,className:b.a.row},x.a.createElement(h["a"],{xs:24,sm:8,className:b.a.label},"\u4ef7\u683c:"),x.a.createElement(h["a"],{xs:24,sm:16,style:{textAlign:"left"}},this.props.shop.payInfo.price," \u5143"))))],S=[x.a.createElement(c["a"],{style:{marginBottom:"-8px",textAlign:"right"},layout:"inline"},x.a.createElement(s["a"],{dashed:!0}),x.a.createElement(c["a"].Item,null,u("type",{rules:[{required:!0,message:"\u8bf7\u60a8\u9009\u62e9\u4ed8\u6b3e\u65b9\u5f0f"}]})(x.a.createElement(i["a"].Group,null,x.a.createElement(i["a"],{style:{height:"30px",lineHeight:"30px"},value:"BALANCE"},x.a.createElement(E["a"],{type:"dollar-circle",theme:"filled"})," \u4f59\u989d"),x.a.createElement(i["a"],{style:{height:"30px",lineHeight:"30px"},value:"PAYPAL"},x.a.createElement(T,{type:"icon-paypal"})," Paypal"),x.a.createElement(i["a"],{style:{height:"30px",lineHeight:"30px"},value:"ALIPAY_QR"},x.a.createElement(E["a"],{type:"alipay-circle"})," \u652f\u4ed8\u5b9d"),x.a.createElement(i["a"],{disabled:!0,style:{height:"30px",lineHeight:"30px"},value:"WEPAY_QR"},x.a.createElement(E["a"],{type:"wechat"})," \u5fae\u4fe1")))),x.a.createElement(c["a"].Item,null,u("coupon",{rules:[{required:!1}]})(x.a.createElement(p["a"],{placeholder:"\u8bf7\u8f93\u5165\u4f18\u60e0\u7801",style:{inline:"display",width:"128px",marginRight:"10px",height:"32px"}})),x.a.createElement(r["a"],{loading:this.props.shop.loading.purchasing,style:{boxShadow:0,height:"32px",marginRight:"12px"},onClick:()=>{this.updateStep(e.id)},icon:"shopping-cart"},"\u4e0b\u5355"),x.a.createElement(o["a"],{count:"\u6298"},x.a.createElement(r["a"],{loading:this.props.shop.loading.purchasing,type:"primary",style:{boxShadow:0,height:"32px"},onClick:()=>{this.props.create(e.id)},icon:"team"},"\u62fc\u56e2\u4e0b\u5355")))),x.a.createElement("div",{style:{marginBottom:"-8px",textAlign:"center"}},x.a.createElement(s["a"],{style:{marginBottom:"14px"},dashed:!0}),console.log(t),f?x.a.createElement(r["a"],{loading:this.props.shop.loading.purchasing,type:"primary",disabled:"WEPAY_QR"===this.props.shop.payInfo.type,style:{boxShadow:0,height:"32px"},onClick:()=>{window.open(this.props.shop.payInfo.url)}},x.a.createElement(E["a"],{type:"pay-circle"})," ","WEPAY_QR"===this.props.shop.payInfo.type?"\u8bf7\u4f7f\u7528\u7535\u8111\u4ed8\u6b3e":"\u70b9\u6b64\u4ed8\u6b3e"):"PAYPAL"===w?x.a.createElement(r["a"],{loading:this.props.shop.loading.purchasing,type:"primary",style:{boxShadow:0,height:"32px"},onClick:()=>{window.open(this.props.shop.payInfo.url)}},x.a.createElement(E["a"],{type:"pay-circle"})," \u70b9\u6b64\u4ed8\u6b3e"):x.a.createElement(l["a"],{content:x.a.createElement(k.a,{value:this.props.shop.payInfo.url}),trigger:"click"},x.a.createElement(r["a"],{loading:this.props.shop.loading.purchasing,type:"primary",style:{boxShadow:0,height:"32px"}},x.a.createElement(E["a"],{type:"pay-circle"})," \u626b\u7801\u4ed8\u6b3e")),x.a.createElement(r["a"],{onClick:()=>{this.props.checkStatus(this.props.shop.payInfo.pid)},style:{marginLeft:"20px",boxShadow:0,height:"32px"}},"\u5b8c\u6210\u652f\u4ed8")),""];return x.a.createElement("div",{className:b.a.container},x.a.createElement(n["a"],{current:a,style:{marginBottom:"44px"}},x.a.createElement(n["a"].Step,{title:"\u786e\u8ba4",icon:x.a.createElement(E["a"],{type:"profile",theme:"twoTone"})}),x.a.createElement(n["a"].Step,{title:"\u652f\u4ed8",icon:x.a.createElement(E["a"],{type:"credit-card",theme:"twoTone"})}),x.a.createElement(n["a"].Step,{title:"\u5b8c\u6210",icon:x.a.createElement(E["a"],{type:"check-circle",theme:"twoTone"})})),x.a.createElement("div",null,A[a]),x.a.createElement("div",null,S[a]))}}var N=c["a"].create()(B);t["default"]=Object(f["connect"])(_,C)(N)},"GNA+":function(e,t,a){e.exports={container:"container____5cwH",label:"label___3AYVZ",row:"row___axnhd"}},"cD+T":function(e,t,a){e.exports={cardBanner:"cardBanner___fiu8m",cardContent:"cardContent___3ZDBw",container:"container___1l1_D"}}}]);