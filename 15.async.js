(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{c7Lt:function(e,t,a){"use strict";a.r(t);a("IzEo");var n=a("bx4M"),r=(a("T2oS"),a("W9HT")),i=(a("i5XK"),a("jq9l")),o=(a("5Dmo"),a("3S7+")),l=(a("Telt"),a("Tckk")),s=(a("RC8p"),a("rgW5")),c=(a("+L6B"),a("2/Rp")),p=(a("y8nQ"),a("Vl3Y")),m=(a("/zsF"),a("PArb")),d=(a("Pwec"),a("CtXQ")),u=a("p0pE"),h=a.n(u),y=a("q1tI"),g=a.n(y),E=a("MuoO"),k=a("u3sk"),f=a.n(k),x=a("wd/R"),_=a.n(x),w=a("yEr3"),Y=a.n(w),v=a("0Xwh"),b="ticket",T=["bold","italic","underline","text-color","media"],C=e=>{return h()({},e[b],{loading:e["loading"]})},H=e=>{return{fetch:t=>{e({type:"".concat(b,"/query"),payload:{id:t}})},update:t=>{e({type:"".concat(b,"/update"),payload:t})}}};class M extends g.a.Component{componentDidMount(){this.props.fetch(this.props.match.params.id)}update(e){0!==e?this.props.form.validateFields((t,a)=>{if(!t){var n={id:this.props.tickets[0].id,status:e,content:a.content.toHTML()};this.props.update(n)}}):this.props.update({id:this.props.tickets[0].id,status:0})}render(){var e=this.props.form.getFieldDecorator;return g.a.createElement("div",{className:f.a.container},g.a.createElement(v["a"],{delay:500,animConfig:[{opacity:[1,0],translateY:[0,50]},{opacity:[1,0],translateY:[0,-50]}]},g.a.createElement(n["a"],{key:0,title:g.a.createElement("span",null,g.a.createElement(d["a"],{type:"book"})," \u6d88\u606f\u8bb0\u5f55")},g.a.createElement(r["a"],{spinning:this.props.loading.models.ticket,style:{marginLeft:"auto",marginRight:"auto",minWidth:"100%",minHeight:"128px"}},0===this.props.tickets.length?"":g.a.createElement(s["a"],{pending:0===this.props.tickets[0].status?"":g.a.createElement(p["a"],{style:{paddingTop:"0px"}},g.a.createElement("p",null,"\u6dfb\u52a0\u5185\u5bb9"),g.a.createElement(p["a"].Item,{style:{marginBottom:"0px"}},e("content",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5de5\u5355\u6b63\u6587"}]})(g.a.createElement(Y.a,{className:f.a.editor,controls:T,placeholder:"\u8bf7\u8f93\u5165\u6b63\u6587\u5185\u5bb9",contentStyle:{maxHeight:"212px"}})),g.a.createElement(m["a"],{style:{marginTop:"12px",marginBottom:"12px"},dashed:!0})),g.a.createElement(c["a"],{type:"primary",style:{float:"right"},onClick:()=>{this.update(-1)}}," \u63d0\u4ea4\u5de5\u5355 "),g.a.createElement(c["a"],{style:{marginRight:"12px",float:"right"},onClick:()=>{this.update(0)}}," \u76f4\u63a5\u5173\u95ed ")),pendingDot:g.a.createElement(d["a"],{type:"form"}),style:{maxWidth:"784px",marginLeft:"auto",marginRight:"auto"}},g.a.createElement(s["a"].Item,null," \u5de5\u5355\u5f00\u542f "),g.a.createElement(v["a"],{delay:500,animConfig:[{opacity:[1,0],translateY:[0,50]},{opacity:[1,0],translateY:[0,-50]}]},this.props.tickets.map(e=>{return g.a.createElement(s["a"].Item,{key:e.id,color:"\u8fd9\u6761\u5de5\u5355\u5df2\u88ab\u5173\u95ed"===e.content?"grey":"blue"},g.a.createElement("div",{className:f.a.card,key:e.id},g.a.createElement(i["a"],{author:g.a.createElement("span",null,e.user.user_name),avatar:g.a.createElement(l["a"],{icon:"user"}),content:g.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.content}}),datetime:g.a.createElement("div",null,g.a.createElement(o["a"],{title:g.a.createElement("span",{style:{fontSize:"12px"}},_()(1e3*e.datetime).format("YYYY-MM-DD HH:mm:ss"))},g.a.createElement("span",null,_()(1e3*e.datetime).fromNow())))})))})))))))}}t["default"]=Object(E["connect"])(C,H)(p["a"].create()(M))},u3sk:function(e,t,a){e.exports={container:"container___109aY",card:"card___386Nt",editor:"editor___1x5Jr"}}}]);