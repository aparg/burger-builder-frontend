(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],[,,,function(e,t,n){e.exports={main:"OrderSummary_main__2nrUl",title:"OrderSummary_title__1SDYF",data:"OrderSummary_data__CoNnT",item:"OrderSummary_item__3Xi5D",titleItem:"OrderSummary_titleItem__1HiE5",quantity:"OrderSummary_quantity__Khbrt",titleQuantity:"OrderSummary_titleQuantity__3lmw-",listStyle:"OrderSummary_listStyle__1OURn",order:"OrderSummary_order__3dwg4"}},function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2US69",BreadTop:"BurgerIngredient_BreadTop__3Y4-R",Seeds1:"BurgerIngredient_Seeds1__J6vUJ",Seeds2:"BurgerIngredient_Seeds2__2Ylex",Meat:"BurgerIngredient_Meat__3flwI",Cheese:"BurgerIngredient_Cheese__3rOTJ",Salad:"BurgerIngredient_Salad__KLnhy",Bacon:"BurgerIngredient_Bacon__1KK6n"}},,,,,,function(e,t,n){e.exports={main:"BuildControl_main__2Jenx",val:"BuildControl_val__1CgyT",btn:"BuildControl_btn__hyZ7H"}},function(e,t,n){e.exports={main:"BuildControls_main__2u6Um",costDisplayer:"BuildControls_costDisplayer__394wA",active:"BuildControls_active__3aMRf",orderBtn:"BuildControls_orderBtn__i03Hd"}},,function(e,t,n){e.exports={Navbar:"NavigationElements_Navbar__2v_wr",main:"NavigationElements_main__VGXds",SideDrawer:"NavigationElements_SideDrawer__2nzMe"}},function(e,t,n){e.exports={disappear:"Modal_disappear__3qUpC",appear:"Modal_appear__1qRvW",get:"Modal_get__35PFZ"}},,,,,,,,,,function(e,t,n){e.exports={main:"NavigationContainerStyle_main__20lDf",image:"NavigationContainerStyle_image__oS2_w"}},function(e,t,n){e.exports={nav:"NavbarStyle_nav__3Q042"}},function(e,t,n){e.exports={image:"Logo_image__Je-Vu"}},function(e,t,n){e.exports={main:"ToggleStyle_main__vJsrQ"}},function(e,t,n){e.exports={main:"SideDrawerStyle_main__3U7rw",appear:"SideDrawerStyle_appear__3CUrR"}},function(e,t,n){e.exports={main:"Backdrop_main__3sJ_F"}},function(e,t,n){e.exports={Burger:"Burger_Burger__10T8F"}},function(e,t,n){e.exports={ldsheart:"Spinner_ldsheart__O4zND"}},,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(23),i=n.n(s),c=(n(38),n(5)),o=n(6),l=n(8),d=n(7),u=n(0),j=function(e){return Object(u.jsx)("div",{className:e.cl,children:e.children})},b=n(24),h=n.n(b),m=n(25),g=n.n(m),_=n.p+"static/media/burgerLogo.d8cfa159.png",O=n(26),p=n.n(O),v=function(e){return Object(u.jsx)("img",{src:_,className:p.a.image,style:e.size,alt:"Logo"})},x=n(13),f=n.n(x),C=function(e){var t=[f.a.main];return t.push(f.a[e.type]),console.log(t),Object(u.jsx)("span",{className:t.join(" "),children:e.element})},S=n(27),w=n.n(S),N=function(e){return Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPYAAABnCAYAAAAzKL8uAAABVklEQVR4nO3awQkDMRAEwZFR/inrcBpNVQpDs5897703IOVnTugRNgQJG4KEDUHChiBhQ5CwIUjYEHS3HcNCi4sNQcKGIGFDkLAhSNgQJGwIEjYECRuChA1BwoYgYUOQsCFI2BAkbAgSNgQJG4KEDUHChiBhQ5CwIUjYECRsCBI2BAkbgoQNQcKGIGFDkLAhSNgQJGwIEjYECRuChA1BwoYgYUOQsCFI2BB0tz3DQouLDUHChiBhQ5CwIUjYECRsCBI2BAkbgv4PKsew0OJiQ5CwIUjYECRsCBI2BAkbgoQNQcKGIGFDkLAhSNgQJGwIEjYECRuChA1BwoYgYUOQsCFI2BAkbAgSNgQJG4KEDUHChiBhQ5CwIUjYECRsCBI2BAkbgoQNQcKGIGFDkLAhSNgQJGwIEjYE3W3PsNDiYkOQsCFI2BAkbAgSNgQJG4KEDUHChpptH9yRBtL7RVSyAAAAAElFTkSuQmCC",className:w.a.main,onClick:e.onClick,alt:"toggle"})},y=function(e){return Object(u.jsxs)("div",{className:g.a.nav,children:[Object(u.jsx)(N,{onClick:e.switched}),Object(u.jsx)(v,{}),e.elements.map((function(e){return Object(u.jsx)(C,{element:e,type:"Navbar"},e)})),console.log(window.innerWidth)]})},B=n(28),k=n.n(B),A=n(29),I=n.n(A),D=function(e){var t=[];return e.show&&t.push(I.a.main),Object(u.jsx)("div",{className:t.join(" "),onClick:e.back})},Q=function(e){return Object(u.jsxs)(j,{children:[Object(u.jsx)(D,{show:!0,back:e.switched}),Object(u.jsxs)("div",{className:k.a.main,children:[Object(u.jsx)(N,{onClick:e.switched}),Object(u.jsx)(v,{size:{height:"5%",width:"90%"}}),e.elements.map((function(e){return Object(u.jsx)(C,{element:e,type:"SideDrawer"},e)}))]})]})},E=function(e){return Object(a.useEffect)((function(){function t(){!0===e.sideDrawer&&window.innerWidth>500&&e.setNavbar()}return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[e]),Object(u.jsx)("div",{className:h.a.main,children:e.sideDrawer?Object(u.jsx)(Q,{elements:Object.keys(e.elements),switched:e.switched}):Object(u.jsx)(y,{elements:Object.keys(e.elements),switched:e.switched})})},U=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={sideDrawer:!1},e.switched=function(){var t=e.state.sideDrawer;e.setState({sideDrawer:!t})},e.setNavbar=function(){e.setState({sideDrawer:!1})},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsxs)(j,{children:[Object(u.jsx)(E,{elements:{Home:0,About:0},sideDrawer:this.state.sideDrawer,switched:this.switched,setNavbar:this.setNavbar}),this.props.children]})}}]),n}(a.Component),Y=n(9),F=n(33),R=n(30),H=n.n(R),G=n(4),J=n.n(G),L=function(e){var t=null;switch(e.ingredient){case"bread-bottom":t=Object(u.jsx)("div",{className:J.a.BreadBottom});break;case"bread-top":t=Object(u.jsxs)("div",{className:J.a.BreadTop,children:[Object(u.jsx)("div",{className:J.a.Seeds1}),Object(u.jsx)("div",{className:J.a.Seeds2})]});break;case"meat":t=Object(u.jsx)("div",{className:J.a.Meat});break;case"bacon":t=Object(u.jsx)("div",{className:J.a.Bacon});break;case"cheese":t=Object(u.jsx)("div",{className:J.a.Cheese});break;case"salad":t=Object(u.jsx)("div",{className:J.a.Salad});break;default:t=null}return t},K=function(e){console.log(e.ingredients);var t=null,n=Object.keys(e.ingredients).map((function(t){return Object(F.a)(Array(e.ingredients[t])).map((function(e,n){return Object(u.jsx)(L,{ingredient:t},t+n)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===n.length&&(t=Object(u.jsx)("div",{children:"Start adding ingredients"})),Object(u.jsxs)("div",{className:H.a.Burger,children:[Object(u.jsx)(L,{ingredient:"bread-top"}),n,t,Object(u.jsx)(L,{ingredient:"bread-bottom"})]})},M=n(10),T=n.n(M),P=function(e){return Object(u.jsxs)("div",{className:T.a.main,children:[Object(u.jsx)("p",{className:T.a.val,children:e.type}),Object(u.jsx)("button",{className:T.a.btn,onClick:e.add,children:"+"}),Object(u.jsx)("button",{className:T.a.btn,onClick:e.remove,disabled:e.disabling,children:"-"})]})},z=n(11),V=n.n(z),q=r.a.createContext({purchaseHandler:null}),W=function(e){var t=[V.a.costDisplayer];e.totalCost>0&&t.push(V.a.active);var n=Object(a.useContext)(q);return Object(u.jsxs)("div",{className:V.a.main,children:[[{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"},{label:"Bacon",type:"bacon"},{label:"Salad",type:"salad"}].map((function(t,n){var a=0===e.ingredients[t.type];return Object(u.jsx)(P,{type:t.label,add:function(){return e.addIng(t.type)},remove:function(){return e.removeIng(t.type)},disabling:a},t+n)})),Object(u.jsxs)("div",{className:t.join(" "),children:[Object(u.jsx)("strong",{children:"Total Cost : "}),e.totalCost]}),Object(u.jsx)("button",{className:V.a.orderBtn,onClick:n.purchaseHandler,children:"Order!"})]})},Z=n(3),X=n.n(Z),$=n(31),ee=n.n($),te=function(e){return Object(u.jsx)("div",{className:ee.a.ldsheart,children:Object(u.jsx)("div",{})})},ne=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(u.jsxs)("div",{className:X.a.data,children:[Object(u.jsx)("div",{className:X.a.item,children:t}),Object(u.jsx)("div",{className:X.a.quantity,children:e.ingredients[t]})]},t)}));return t.splice(0,0,Object(u.jsxs)("div",{className:X.a.data,children:[Object(u.jsx)("div",{className:X.a.titleItem,children:Object(u.jsx)("strong",{children:"Ingredients"})}),Object(u.jsx)("div",{className:X.a.titleQuantity,children:Object(u.jsx)("strong",{children:"Quantity"})})]},"titles")),e.loading?Object(u.jsx)(te,{}):Object(u.jsxs)(j,{cl:X.a.main,children:[Object(u.jsx)("strong",{className:X.a.title,children:"Order Summary"}),Object(u.jsx)("ul",{className:X.a.listStyle,children:t}),Object(u.jsx)("button",{onClick:e.purchase,className:X.a.order,children:"Purchase"})]})},ae=n(14),re=n.n(ae),se=function(e){var t=[re.a.disappear];return e.show&&(t.splice(0,1),t.push(re.a.appear)),Object(u.jsxs)(j,{children:[Object(u.jsx)(D,{show:e.show,back:e.back}),Object(u.jsx)("div",{className:t.join(" "),children:e.children})]})},ie=n(32),ce=n.n(ie).a.create({baseURL:"/"}),oe=function(e,t){return function(n){Object(l.a)(r,n);var a=Object(d.a)(r);function r(){var e;Object(c.a)(this,r);for(var t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return(e=a.call.apply(a,[this].concat(n))).state={error:null},e.errorSeen=function(){e.setState({error:null})},e}return Object(o.a)(r,[{key:"componentDidMount",value:function(){var e=this;t.interceptors.request.use((function(t){return e.setState({error:null}),t})),t.interceptors.response.use(null,(function(t){e.setState({error:t})}))}},{key:"render",value:function(){return Object(u.jsxs)(j,{children:[Object(u.jsx)(se,{show:this.state.error,back:this.errorSeen,children:this.state.error?"OOPS!"+this.state.error.message:console.log("noerror")}),Object(u.jsx)(e,Object(Y.a)({},this.props))]})}}]),r}(r.a.Component)}(function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={ingredients:{cheese:0,bacon:0,meat:0,salad:0},totalCost:20,purchased:!1,loading:!1},e.price={cheese:20,meat:30,bacon:25,salad:15},e.addIngredients=function(t){var n=Object(Y.a)({},e.state.ingredients);n[t]=e.state.ingredients[t]+1,console.log(e.state.ingredients);var a=e.state.totalCost+e.price[t];e.setState({ingredients:n,totalCost:a})},e.removeIngredients=function(t){if(e.state.ingredients[t]>0){console.log("run");var n=Object(Y.a)({},e.state.ingredients);n[t]=e.state.ingredients[t]-1,e.setState({ingredients:n});var a=e.state.totalCost-e.price[t];e.setState({ingredients:n,totalCost:a}),e.costCalculator()}},e.costCalculator=function(){},e.purchaseHandler=function(){e.setState({purchased:!0})},e.backFromPurchasingState=function(){e.setState({purchased:!1})},e.orderHandler=function(){e.setState({loading:!0}),ce.post("/orders",e.state.ingredients).then(e.setState({loading:!1,purchased:!1}))},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(u.jsxs)(j,{children:[Object(u.jsx)(K,{ingredients:this.state.ingredients}),Object(u.jsx)(q.Provider,{value:{purchaseHandler:this.purchaseHandler},children:Object(u.jsx)(W,{ingredients:this.state.ingredients,addIng:this.addIngredients,removeIng:this.removeIngredients,totalCost:this.state.totalCost})}),Object(u.jsx)(se,{show:this.state.purchased,back:this.backFromPurchasingState,children:Object(u.jsx)(ne,{ingredients:this.state.ingredients,total:this.state.totalCost,purchase:this.orderHandler,loading:this.state.loading})})]})}}]),n}(a.Component),ce);n(58);var le=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(U,{children:Object(u.jsx)(oe,{})})})},de=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,60)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),s(e),i(e)}))};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(le,{})}),document.getElementById("root")),de()}],[[59,1,2]]]);
//# sourceMappingURL=main.a2b815d0.chunk.js.map