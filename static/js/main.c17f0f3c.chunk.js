(this.webpackJsonpwattos=this.webpackJsonpwattos||[]).push([[0],{21:function(e,a,t){e.exports=t.p+"static/media/QGbBq.6caa575a.png"},22:function(e,a,t){e.exports=t.p+"static/media/HBhDd.2f485177.png"},23:function(e,a,t){e.exports=t.p+"static/media/e1bbc.ae7d404a.png"},24:function(e,a,t){e.exports=t.p+"static/media/FLfkh.6737486c.png"},25:function(e,a,t){e.exports=t.p+"static/media/uksPm.1271ddfb.png"},26:function(e,a,t){e.exports=t.p+"static/media/rdDEP.555a315a.png"},27:function(e,a,t){e.exports=t.p+"static/media/LaEdm.eb94be9d.png"},28:function(e,a,t){e.exports=t.p+"static/media/yqoE0.0166caf1.png"},29:function(e,a,t){e.exports=t.p+"static/media/notfound.93f5c834.png"},30:function(e,a,t){e.exports=t.p+"static/media/loading.2e60bb7d.png"},31:function(e,a,t){e.exports=t.p+"static/media/failed.2e45e142.png"},34:function(e,a,t){e.exports=t.p+"static/media/splash.0c324418.png"},38:function(e,a,t){e.exports=t(50)},49:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),i=t(18),l=t.n(i),o=t(6),s=t(10),d=t(7),c=t(1);const m=c.b.div`
  display: inline-block;
  box-shadow: 0 0 20px 5px #000000;
`,p=c.b.button`
  font-size: 1rem;
  height: 1.8rem;
  padding: 0.1rem 0.4rem;
  border: none;

  color: var(--sw-silver);
  background-color: var(--sw-blue);
  cursor: pointer;
  vertical-align: middle;
`,u=Object(c.b)(p)`
  font-family: "aurebesh";
  border-radius: 5px 0 0 5px;
  background-color: ${e=>"aurebesh"===e.current&&"var(--sw-dust)"};
  color: ${e=>"aurebesh"===e.current&&"var(--sw-space)"};
`,b=Object(c.b)(p)`
  font-family: "mandalorian";
  background-color: ${e=>"mandalorian"===e.current&&"var(--sw-dust)"};
  color: ${e=>"mandalorian"===e.current&&"var(--sw-space)"};
`,g=Object(c.b)(p)`
  font-family: "darkkatarn";
  background-color: ${e=>"darkkatarn"===e.current&&"var(--sw-dust)"};
  color: ${e=>"darkkatarn"===e.current&&"var(--sw-space)"};
`,h=Object(c.b)(p)`
  font-family: titillium;
  border-radius: 0 5px 5px 0;
  background-color: ${e=>"titillium"===e.current&&"var(--sw-dust)"};
  color: ${e=>"titillium"===e.current&&"var(--sw-space)"};
`;var x=({handleClick:e,current:a})=>n.a.createElement(m,null,n.a.createElement(u,{current:a,onClick:e,"data-lang":"aurebesh"},"Aurebesh"),n.a.createElement(b,{current:a,onClick:e,"data-lang":"mandalorian"},"Mandalorian"),n.a.createElement(g,{current:a,onClick:e,"data-lang":"darkkatarn"},"Katarn"),n.a.createElement(h,{current:a,onClick:e,"data-lang":"titillium"},"English")),f=t(21),v=t.n(f),w=t(22),y=t.n(w),E=t(23),k=t.n(E),S=t(24),j=t.n(S),A=t(25),O=t.n(A),C=t(26),H=t.n(C),$=t(27),z=t.n($),M=t(28),B=t.n(M),F=t(29),T=t.n(F),G=t(30),L=t.n(G),P=t(31),D=t.n(P),q={QGbBq:v.a,HBhDd:y.a,e1bbc:k.a,FLfkh:j.a,uksPm:O.a,rdDEP:H.a,LaEdm:z.a,yqoE0:B.a,notfound:T.a,loading:L.a,failed:D.a};const K=c.b.div`
  width: 100%;
  text-align: center;
`,I=c.b.img`
  margin-top: 10%;
  max-width: 90%;
`,N=Object(c.b)(I)`
  animation: spin 5s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;var R=({type:e="notfound"})=>{let a=n.a.createElement(I,{src:q[e],alt:e}),t="This is not the ship you are looking for ...";return"loading"===e&&(a=n.a.createElement(N,{src:q[e],alt:e}),t="Loading data..."),"failed"===e&&(a=n.a.createElement(I,{src:q[e],alt:e}),t="Failed to load data."),n.a.createElement(K,null,a,n.a.createElement("h2",null,t),"notfound"===e&&n.a.createElement("h3",null,"... but it should be."))},X=t(37);const W=c.b.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--sw-${e=>e.available?"blue":"gray"});
  border-radius: 5px;
  height: 66vw;
  text-align: center;

  @media only screen and (min-width: 768px) {
    width: 100%;
    height: 11rem;
  }
`,Q=c.b.div`
  position: relative;
  flex: 1;
  box-shadow: inset 0 0 10px 3px var(--sw-${e=>e.available?"blue":"gray"});

  &::after {
    position: absolute;
    content: '';
    background-image: url(${e=>q[e.id3d]});
    background-position: center;
    background-size: cover;
    opacity: ${e=>e.available?"1":"0.25"};
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  @media only screen and (min-width: 768px) {
    background-size: contain;
  }
`,Y=c.b.p`
  white-space: nowrap;
  overflow: hidden;
  color: var(--sw-${e=>e.available?"dust":"gray"});
  margin: 0.5rem auto;
  text-transform: capitalize;
  line-height: 1rem;
  width: 95%;

  @media only screen and (min-width: 768px) {
    height: 1.3rem;
    font-size: 1rem;
  }
`,Z=c.b.div`
  box-shadow: inset 0 0 10px 3px var(--sw-${e=>e.available?"blue":"gray"});
  min-height: 2.1rem;
`,J=Object(c.b)(e=>{e.isAvailable;let a=Object(X.a)(e,["isAvailable"]);return n.a.createElement(s.b,a)})`
  border-radius: 5px;
  width: 100%;
  margin: 1rem 0 1rem;
  text-decoration: none;

  @media only screen and (min-width: 768px) {
    box-shadow: 2px 0 10px 3px var(--sw-${e=>e.isAvailable?"blue":"gray"});
    width: 17rem;
    margin: 0 1rem 3rem 1rem;
  }
`;var U=({ship:e})=>{const a=e.name,t=e.available,r=e.id,i=e.id3d;return n.a.createElement(J,{to:`/ship/${r}`,isAvailable:t},n.a.createElement(W,{available:t},n.a.createElement(Q,{available:t,id3d:i}),n.a.createElement(Z,{available:t},n.a.createElement(Y,{available:t},a))))};const V=c.b.div`
  display: flex;
  box-sizing: border-box;
  flex-flow: row wrap;
  justify-content: center;
  background-color: var(--sw-space);
  padding: 1rem 0 0 0;

  @media only screen and (min-width: 768px) {
    padding: 3rem 1rem 0 1rem;
    width: 100%;
    max-width: 60rem;
    margin: 0 auto;
    border-radius: 0 0 5px 5px;
  }
`;var _=()=>{const e=Object(r.useContext)(Ae),a=Object(o.a)(e,1)[0];return a.sort((e,a)=>a.available-e.available),n.a.createElement(V,null,a&&a.map(e=>n.a.createElement(U,{ship:e,key:e.id})))};const ee=c.b.iframe`
  display: block;
  background-size: cover;
  width: 100%;
  height: 18rem;
  background-image: radial-gradient(var(--sw-blue) 1%, var(--sw-space) 40%, transparent 55%);

  @media only screen and (min-width: 768px) {
    width: 60%;
    height: 25rem;
    border-radius: 5px;
  }
`;var ae=Object(r.memo)(({id:e,id3d:a})=>n.a.createElement(ee,{title:e,frameBorder:"0",seamless:!0,src:`https://p3d.in/e/${a}+spin+load+bg-none+nopan+nozoom+norotate+controls,border,loader-hidden`}));const te=c.b.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 200;
  color: var(--sw-silver);
  background-color: var(--sw-space);
  border: 1px solid var(--sw-blue);
  border-radius: 5px;
  padding: 0 0.5rem 1rem 0.5rem;
  top 2rem;
  width: 92%;
  left: 50%;
  transform: translate(-50%, 0);

  @media only screen and (min-width: 768px) {
    top: 25%;
    padding: 2rem;
    width: 40rem;
  }
`,re=c.b.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.85);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
`,ne=c.b.button`
  color: var(--sw-silver);
  background-color: var(--sw-blue);
  font-size: 1.2rem;
  height: 3rem;
  padding: 0.1rem 0.4rem;
  border: none;
  border-radius: 5px;
  margin-top: 1rem;
  width: 100%;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    max-width: 20rem;
    margin-top: 2rem;
  }
`;var ie=({name:e,price:a,history:t})=>n.a.createElement(re,null,n.a.createElement(te,null,n.a.createElement("h2",null,"Congratulations!"),n.a.createElement("p",null,"The ",e," is now ",a?"yours":"being held for you","!"),a&&n.a.createElement("p",null,a," have been removed from your account."),n.a.createElement("p",null,"Pick up your new ship at our Mos Espa location."),!a&&n.a.createElement("p",null,"(We will tell you the price when you get here.)"),n.a.createElement(ne,{onClick:()=>{t.push("/")}},"OK")));const le=c.b.div`
  padding: 0.5rem 0;

  @media only screen and (min-width: 768px) {
    padding: 1rem;
    margin: 0 auto;
    border-radius: 0 0 5px 5px;
  }
`,oe=c.b.h2`
  text-transform: capitalize;
  height: 2rem;
  line-height: 1rem;
`,se=c.b.div`
  display: flex;
  position: relative;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`,de=c.b.div`
  position: absolute;
  width: 100%;
  height: 18rem;

  @media only screen and (min-width: 768px) {
    width: 60%;
    height: 25rem;
  }
`,ce=c.b.img`
  display: none;

  @media only screen and (min-width: 768px) {
    display: block;
    width: 100%;
    margin-bottom: 1rem;
  }
`,me=c.b.div`
  flex: 1;
  padding: 0 1rem;
  color: var(--sw-silver);
  text-align: center;

  @media only screen and (min-width: 768px) {
    text-align: left;
    margin-top: 3rem;
  }
`,pe=c.b.ul`
  text-align: left;
  list-style-type: none;
  padding: 0.5rem;
`,ue=c.b.div`
  display: flex;
`,be=c.b.div`
  flex: 1;
  padding: 0.3rem;
  text-transform: capitalize;

  @media only screen and (min-width: 768px) {
    display: inline-block;
    padding: 0.3rem 0 0.3rem 0.4rem;
  }
`,ge=c.b.div`
  flex: 2;
  padding: 0.3rem;
  text-transform: capitalize;

  @media only screen and (min-width: 768px) {
    display: inline-block;
    text-align: right;
  }
`,he=Object(c.b)(s.b)`
  position: fixed;
  left: 0.1rem;
  top: 0.1rem;
  display: inline-block;
  text-decoration: none;
  background-color: var(--sw-blue);
  color: var(--sw-silver);
  border: 1px solid var(--sw-space);
  border-radius: 50px;
  height: 2.2rem;
  width: 3.2rem;
  padding-top: 1rem;
  line-height: 1rem;

  @media only screen and (min-width: 768px) {
    position: absolute;
    left: 0;
    top: -5.2rem;
  }
`,xe=c.b.button`
  color: var(--sw-silver);
  background-color: var(--sw-${e=>e.available?"blue":"gray"});
  font-size: 1.2rem;
  height: 3rem;
  width: 100%;
  padding: 0.1rem 0.4rem;
  border: none;
  border-radius: 5px;
  margin-top: 1rem;
`;var fe=({match:e,history:a})=>{const t=Object(r.useState)(!1),i=Object(o.a)(t,2),l=i[0],s=i[1],d=Object(r.useContext)(Ae),c=Object(o.a)(d,2),m=c[0],p=c[1],u=m.find(a=>a.id===e.params.id);if(!u)return n.a.createElement(R,null);const b=u.name,g=u.manufacturer,h=u.class,x=u.price,f=u.techspecs,v=u.available,w=u.id,y=u.id3d,E=Object.keys(f);return n.a.createElement(r.Fragment,null,n.a.createElement(oe,null,b),n.a.createElement(le,null,n.a.createElement(se,null,n.a.createElement(he,{to:"/"},"Back"),n.a.createElement(de,null),n.a.createElement(ae,{id:w,id3d:y}),n.a.createElement(me,null,n.a.createElement(ce,{src:q[y],alt:b}),n.a.createElement("p",null,"Manufacturer: ",g),n.a.createElement("p",null,"Class: ",h),n.a.createElement("p",null,"Price: ",x||"Come in person for an amazing discount!"),n.a.createElement(xe,{type:"button",available:v,onClick:()=>{const e=m.map(e=>{const a=e;return a.id===w&&(a.available=!1),a});p(e),v&&s(!0)}},v?"Purchase":"Sold Out"))),n.a.createElement(pe,null,E.map(e=>n.a.createElement("li",{key:e},n.a.createElement(ue,null,n.a.createElement(be,null,`${e}:`),n.a.createElement(ge,null,f[e]))))),l&&n.a.createElement(ie,{name:b,price:x,history:a})))},ve=t(34),we=t.n(ve);var ye=[{name:"Twin Ion Engine Starfighter",manufacturer:"Sienar Fleet Systems",class:"Starfighter",price:null,techspecs:{"Maximum acceleration":"4,100 G","Maneuverability rating":"96-100 DPF","Hyperdrive system":"None",Shielding:"None",Hull:"Titanium hull",Armament:"L-s1 laser cannons"},available:!0,id:"twin-ion-engine-starfighter",id3d:"QGbBq"},{name:"T-65 X-Wing Starfighter",manufacturer:"Incom Corporation",class:"Starfighter",price:"90,000 credits",techspecs:{"Maximum acceleration":"3,700 G","Maneuverability rating":"75 DPF","Hyperdrive system":"Incom GBk-585",Shielding:'Chempat "Defender" DSG',Hull:"Titanium alloy",Armament:"Taim & Bak KX9"},available:!0,id:"t-65-x-wing-starfighter",id3d:"HBhDd"},{name:"BTL Y-wing Starfighter",manufacturer:"Koensayr Manufacturing",class:"Assault starfighter / bomber",price:"65,000 credits",techspecs:{"Maximum acceleration":"2,700 G","Targeting systems":"Fabritech ANc 2.7","Hyperdrive system":"Koensayr R300-H",Shielding:"Chempat deflector shield generator","Escape craft":"Guidenhauser ejector seat",Armament:"Taim & Bak IX4 or KX5 laser cannons"},available:!0,id:"y-wing-starfighter",id3d:"e1bbc"},{name:"YT-1300 Light Freighter",manufacturer:"Corellian Engineering Corporation",class:"Light Freighter",price:"25,000 credits",techspecs:{"Cargo capacity":"25 metric tons","Engine unit":"Girodyne SRB42 sublight engines","Hyperdrive system":"Corellian Avatar-10",Shielding:"Equipped",Hull:"Durasteel plating",Armament:"Standard laser cannon"},available:!0,id:"yt-1300-light-freighter",id3d:"FLfkh"},{name:"Alpha-class Xg-1 Star Wing",manufacturer:"Cygnus Spaceworks",class:"Assault Starfighter",price:"75,000 credits",techspecs:{"Maximum acceleration":"20 MGLT/s","Maneuverability rating":"78 DPF","Hyperdrive system":"Cygnus HD7 hyperdrive motivator",Shielding:"Novaldex forward and rear",Hull:"Quadanium steel-armored titanium",Armament:"Medium Taim & Bak KX5 laser cannons"},available:!0,id:"alpha-class-xg-1-star-wing",id3d:"uksPm"},{name:"Lambda-class T-4a Shuttle",manufacturer:"Sienar Fleet Systems",class:"Armed government transport shuttle",price:"24,0000 credits",techspecs:{"Maximum acceleration":"1,400 G",Passengers:"20+ passengers","Hyperdrive system":"SFS S/ig-37",Shielding:"Multiple shield generators",Hull:"Reinforced durasteel / carbon fiber",Armament:"Aft retractable ArMek R-T0 twin blaster"},available:!0,id:"lambda-class-t-4a-shuttle",id3d:"rdDEP"},{name:"RZ-1 A-wing Interceptor",manufacturer:"Kuat Systems Engineering",class:"Starfighter",price:"90,000 credits",techspecs:{"Maximum acceleration":"5,100 G","Targeting systems":"Fabritech ANq 3.6 tracking computer","Hyperdrive system":"Incom GBk-785",Shielding:"Sirplex Z-9 deflector projector",Hull:"Lightweight durasteel plates / titanium alloy frame",Armament:"Borstel RG-9 laser cannons"},available:!0,id:"rz-1-a-wing-interceptor",id3d:"LaEdm"},{name:"A/SF-01 B-wing Starfighter",manufacturer:"Slayn & Korpil",class:"Heavy Assault Starfighter",price:"120,000 credits",techspecs:{"Maximum acceleration":"2,390 G","Sensor systems":"Fabritech ANv-9q","Hyperdrive system":"Slayn & Korpil HYd-997",Shielding:"Sirplex Zr-41","Targeting systems":"Fabritech ANq 3.6",Armament:"ArMek SW-7a ion cannons"},available:!0,id:"b-wing-heavy-assault-starfighter",id3d:"yqoE0"}];const Ee=c.a`
  body {
    font-family: ${e=>e.language};
  }
`,ke=c.b.div`
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  background-color: var(--sw-space);
  width: 100%;
  min-height: 90vh;

  @media only screen and (min-width: 768px) {
    max-width: 60rem;
    margin-top: 2rem;
    border: 1px solid var(--sw-blue);
    border-radius: 5px;
  }
  `,Se=c.b.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;
  background-image: url(${we.a});
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 5px;
  box-shadow: inset 0 -10px 20px 3px var(--sw-space);

  @media only screen and (min-width: 768px) {
    height: 29.7rem;
  }
`,je=c.b.h1`
  font-size: 2rem;
  padding: 2rem 0;
  color: var(--sw-silver);
  background-color: rgba(0, 0, 0, 0.5);
  margin: 0;
  box-shadow: 0 0 20px 0 #000000;
  text-shadow:
    -1px 0 var(--sw-blue),
    0 1px var(--sw-blue),
    1px 0 var(--sw-blue),
    0 -1px var(--sw-blue);

  @media only screen and (min-width: 768px) {
    font-size: 4rem;
    height: 4rem;
    padding: 2rem 0;
    line-height: 3rem;
    width: 98%;
  }
`,Ae=Object(r.createContext)([null,()=>{}]);var Oe=()=>{const e=Object(r.useState)("aurebesh"),a=Object(o.a)(e,2),t=a[0],i=a[1],l=Object(r.useState)([]),c=Object(o.a)(l,2),m=c[0],p=c[1],u=Object(r.useState)("loading"),b=Object(o.a)(u,2),g=b[0],h=b[1];Object(r.useEffect)(()=>{p(ye),h("loaded")},[]);let f=n.a.createElement(R,{type:g});"loaded"===g&&(f=n.a.createElement(Ae.Provider,{value:[m,()=>{}]},n.a.createElement(s.a,{basename:"/wattos"},n.a.createElement(d.c,null,n.a.createElement(d.a,{exact:!0,path:"/",render:e=>n.a.createElement(_,e)}),n.a.createElement(d.a,{path:"/ship/:id",render:e=>n.a.createElement(fe,e)}),n.a.createElement(d.a,{component:R}))))),"failed"===g&&(f=n.a.createElement(R,{type:g}));return n.a.createElement(ke,null,n.a.createElement(Ee,{language:t}),n.a.createElement(Se,null,n.a.createElement(je,null,"Watto\u2019s Spaceship Emporium"),n.a.createElement(x,{handleClick:e=>{i(e.target.dataset.lang)},current:t})),f)};t(49);l.a.render(n.a.createElement(Oe,null),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.c17f0f3c.chunk.js.map