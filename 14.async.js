(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{pKJP:function(e,t,a){"use strict";a.r(t);a("5NDa");var o=a("5rEg"),r=(a("y8nQ"),a("Vl3Y")),l=(a("OaEy"),a("2fM7")),n=(a("/zsF"),a("PArb")),m=(a("14J3"),a("BMrR")),s=(a("jCWc"),a("kPKH")),p=(a("+L6B"),a("2/Rp")),i=(a("2qtc"),a("kLXV")),c=(a("tU7J"),a("wFql")),d=a("q1tI"),h=a.n(d),u=a("MuoO"),f=a("wZAj"),b=c["a"].Text,E="index",g={"Shadowsocks (Surge / Clash)":{protocol:"origin",protocol_param:"",obfs:"simple_obfs_http",obfs_param:"i0.hdslb.com",method:"chacha20-itef-poly1305"},ShadowsocksR:{protocol:"auth_aes128_sha1",protocol_param:"",obfs:"http_post_compatible",obfs_param:"i0.hdslb.com",method:"rc4-md5-6"},"Blinkload \u5b98\u65b9\u5ba2\u6237\u7aef":{protocol:"origin",protocol_param:"",obfs:"tls1.2_ticket_auth",obfs_param:"static.hdslb.com.w.kunlunhuf.com",method:"chacha20-ietf"},"\u901a\u7528 (\u4e0d\u5efa\u8bae)":{protocol:"auth_sha1_v4_compatible",protocol_param:"",obfs:"http_post_compatible",obfs_param:"i0.hdslb.com",method:"rc4-md5"}},y=e=>{return e[E]},_=e=>{return{fetch:()=>{e({type:"".concat(E,"/queryUserInfo")}),e({type:"".concat(E,"/getMethods")})},updateProtocol:t=>{e({type:"".concat(E,"/updateInfo"),payload:t})}}};class x extends h.a.Component{showConfirm(e){var t=this.props.form,a=t.validateFields,o=t.setFieldsValue;i["a"].confirm({title:"\u786e\u8ba4\u4fee\u6539",content:h.a.createElement("div",null,h.a.createElement("span",null,h.a.createElement("p",{style:{marginBottom:"2px"}},h.a.createElement("span",{style:{fontWeight:"bold"}}," \u6df7\u6dc6")," ",e.obfs),h.a.createElement("p",{style:{marginBottom:"2px"}},h.a.createElement("span",{style:{fontWeight:"bold"}}," \u534f\u8bae")," ",e.protocol),h.a.createElement("p",{style:{marginBottom:"2px"}},h.a.createElement("span",{style:{fontWeight:"bold"}}," \u52a0\u5bc6")," ",e.method),h.a.createElement("p",{style:{marginBottom:"2px"}},h.a.createElement("span",{style:{fontWeight:"bold"}}," \u6df7\u6dc6\u53c2\u6570")," ",e.obfs_param),e.protocol_param?h.a.createElement("p",{style:{marginBottom:"2px"}},h.a.createElement("span",{style:{fontWeight:"bold"}}," \u534f\u8bae\u53c2\u6570")," ",e.protocol_param):"")),okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk(){o(e),a((e,t)=>{e||this.props.updateProtocol(t)})}})}componentDidMount(){this.props.fetch()}submit(){this.props.form.validateFields((e,t)=>{e||this.props.updateProtocol(t)})}render(){var e=this.props.form,t=e.getFieldDecorator;e.setFieldsValue;return h.a.createElement("div",{className:f["container"]},h.a.createElement(b,{style:{fontWeight:"bold",marginBottom:"12px",fontSize:"16px"}}," \u534f\u8bae\u4fee\u6539 "),h.a.createElement("div",{style:{inline:"block"}},h.a.createElement(m["a"],{gutter:24,style:{marginTop:"18px"}},Object.keys(g).map(e=>{return h.a.createElement(s["a"],{key:1,lg:12,sm:24},h.a.createElement(p["a"],{style:{marginBottom:"10px"},onClick:()=>this.showConfirm(g[e]),block:!0},e))}))),h.a.createElement(n["a"],null," or "),h.a.createElement(b,{style:{fontWeight:"bold",marginBottom:"12px",fontSize:"14px"}}," \u624b\u52a8\u4fee\u6539 "),h.a.createElement(r["a"],{style:{inline:"block",marginLeft:"auto",marginRight:"auto",marginTop:"8px",marginBottom:"24px"}},h.a.createElement(m["a"],{gutter:24},h.a.createElement(s["a"],{md:12},h.a.createElement(r["a"].Item,{label:"\u534f\u8bae",style:{marginBottom:"4px"}},t("protocol",{initialValue:this.props.userInfo.protocol,rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u534f\u8bae"}]})(h.a.createElement(l["a"],{loading:this.props.loading},this.props.methods.protocol.map(e=>{return h.a.createElement(l["a"].Option,{value:e},e)}))))),h.a.createElement(s["a"],{md:12},h.a.createElement(r["a"].Item,{label:"\u534f\u8bae\u53c2\u6570",style:{marginBottom:"4px"}},t("protocol_param",{initialValue:this.props.userInfo.protocol_param,rules:[{required:!1}]})(h.a.createElement(o["a"],null)))),h.a.createElement(s["a"],{md:12},h.a.createElement(r["a"].Item,{label:"\u6df7\u6dc6",style:{marginBottom:"4px"}},t("obfs",{initialValue:this.props.userInfo.obfs,rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u6df7\u6dc6"}]})(h.a.createElement(l["a"],{loading:this.props.loading},this.props.methods.obfs.map(e=>{return h.a.createElement(l["a"].Option,{value:e},e)}))))),h.a.createElement(s["a"],{md:12},h.a.createElement(r["a"].Item,{label:"\u52a0\u5bc6\u65b9\u5f0f",style:{marginBottom:"4px"}},t("method",{initialValue:this.props.userInfo.method,rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u52a0\u5bc6\u65b9\u5f0f"}]})(h.a.createElement(l["a"],null,this.props.methods.method.map(e=>{return h.a.createElement(l["a"].Option,{value:e},e)}))))),h.a.createElement(s["a"],{md:24},h.a.createElement(r["a"].Item,{label:"\u6df7\u6dc6\u53c2\u6570",style:{marginBottom:"24px"}},t("obfs_param",{initialValue:this.props.userInfo.obfs_param,rules:[{required:!1}]})(h.a.createElement(o["a"],null)))),h.a.createElement(s["a"],{md:24,style:{textAlign:"center"}},h.a.createElement(p["a"],{type:"primary",htmlType:"submit",style:{width:"33%",inline:"block"},onClick:()=>this.submit()},"\u63d0\u4ea4")))))}}t["default"]=Object(u["connect"])(y,_)(r["a"].create()(x))},wZAj:function(e,t,a){e.exports={container:"container___37s0N"}}}]);