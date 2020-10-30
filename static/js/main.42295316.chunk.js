(this.webpackJsonpwattos=this.webpackJsonpwattos||[]).push([[0],{33:function(e,a,r){},34:function(e,a,r){"use strict";r.r(a);var i=r(1),t=r(0),n=r(18),s=r.n(n),d=r(9),l=r(3),c=r(2);const o=c.b.div`
  display: inline-block;
  box-shadow: 0 0 20px 5px #000000;
`,m=c.b.button`
  font-size: 1rem;
  height: 1.8rem;
  padding: 0.1rem 0.4rem;
  border: none;

  color: var(--sw-silver);
  background-color: var(--sw-blue);
  cursor: pointer;
  vertical-align: middle;
`,b=Object(c.b)(m)`
  font-family: "aurebesh";
  border-radius: 5px 0 0 5px;
  background-color: ${e=>"aurebesh"===e.current&&"var(--sw-dust)"};
  color: ${e=>"aurebesh"===e.current&&"var(--sw-space)"};
`,p=Object(c.b)(m)`
  font-family: "mandalorian";
  background-color: ${e=>"mandalorian"===e.current&&"var(--sw-dust)"};
  color: ${e=>"mandalorian"===e.current&&"var(--sw-space)"};
`,h=Object(c.b)(m)`
  font-family: "darkkatarn";
  background-color: ${e=>"darkkatarn"===e.current&&"var(--sw-dust)"};
  color: ${e=>"darkkatarn"===e.current&&"var(--sw-space)"};
`,u=Object(c.b)(m)`
  font-family: titillium;
  border-radius: 0 5px 5px 0;
  background-color: ${e=>"titillium"===e.current&&"var(--sw-dust)"};
  color: ${e=>"titillium"===e.current&&"var(--sw-space)"};
`;var g=({handleClick:e,current:a})=>Object(i.jsxs)(o,{children:[Object(i.jsx)(b,{current:a,onClick:e,"data-lang":"aurebesh",children:"Aurebesh"}),Object(i.jsx)(p,{current:a,onClick:e,"data-lang":"mandalorian",children:"Mandalorian"}),Object(i.jsx)(h,{current:a,onClick:e,"data-lang":"darkkatarn",children:"Katarn"}),Object(i.jsx)(u,{current:a,onClick:e,"data-lang":"titillium",children:"English"})]}),x={QGbBq:r.p+"static/media/QGbBq.7d247648.png",HBhDd:r.p+"static/media/HBhDd.0edd2e31.png",e1bbc:r.p+"static/media/e1bbc.ad530569.png",FLfkh:r.p+"static/media/FLfkh.aa364809.png",uksPm:r.p+"static/media/uksPm.5b974649.png",rdDEP:r.p+"static/media/rdDEP.0e5930d2.png",LaEdm:r.p+"static/media/LaEdm.db2a6197.png",yqoE0:r.p+"static/media/yqoE0.6a5a63a8.png",notfound:r.p+"static/media/notfound.6f725716.png",loading:r.p+"static/media/loading.d6367b80.png",failed:r.p+"static/media/failed.db0a3c89.png"};const j=c.b.div`
  width: 100%;
  text-align: center;
`,v=c.b.img`
  margin-top: 10%;
  max-width: 90%;
`,w=Object(c.b)(v)`
  animation: spin 5s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;var f=({type:e="notfound"})=>{let a=Object(i.jsx)(v,{src:x[e],alt:e}),r="This is not the ship you are looking for ...";return"loading"===e&&(a=Object(i.jsx)(w,{src:x[e],alt:e}),r="Loading data..."),"failed"===e&&(a=Object(i.jsx)(v,{src:x[e],alt:e}),r="Failed to load data."),Object(i.jsxs)(j,{children:[a,Object(i.jsx)("h2",{children:r}),"notfound"===e&&Object(i.jsx)("h3",{children:"... but it should be."})]})};const y=c.b.div`
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
`,O=c.b.div`
  position: relative;
  flex: 1;
  box-shadow: inset 0 0 10px 3px var(--sw-${e=>e.available?"blue":"gray"});

  &::after {
    position: absolute;
    content: '';
    background-image: url(${e=>x[e.id3d]});
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
`,k=c.b.p`
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
`,S=c.b.div`
  box-shadow: inset 0 0 10px 3px var(--sw-${e=>e.available?"blue":"gray"});
  min-height: 2.1rem;
`,A=Object(c.b)((({isAvailable:e,...a})=>Object(i.jsx)(d.b,{...a})))`
  border-radius: 5px;
  width: 100%;
  margin: 1rem 0 1rem;
  text-decoration: none;

  @media only screen and (min-width: 768px) {
    box-shadow: 2px 0 10px 3px var(--sw-${e=>e.isAvailable?"blue":"gray"});
    width: 17rem;
    margin: 0 1rem 3rem 1rem;
  }
`;var C=({ship:e})=>{const{name:a,available:r,id:t,id3d:n}=e;return Object(i.jsx)(A,{to:"/ship/"+t,isAvailable:r,children:Object(i.jsxs)(y,{available:r,children:[Object(i.jsx)(O,{available:r,id3d:n}),Object(i.jsx)(S,{available:r,children:Object(i.jsx)(k,{available:r,children:a})})]})})};const H=c.b.div`
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
`;var z=()=>{const[e]=Object(t.useContext)(re);return e.sort(((e,a)=>a.available-e.available)),Object(i.jsx)(H,{children:e&&e.map((e=>Object(i.jsx)(C,{ship:e},e.id)))})};const E=c.b.iframe`
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
`,M=({id:e,id3d:a})=>Object(i.jsx)(E,{title:e,frameBorder:"0",seamless:!0,src:`https://p3d.in/e/${a}+spin+load+bg-none+nopan+nozoom+norotate+controls,border,loader-hidden`});var $=Object(t.memo)(M);const B=c.b.div`
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
`,F=c.b.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.85);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
`,T=c.b.button`
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
`;var G=({name:e,price:a,history:r})=>Object(i.jsx)(F,{children:Object(i.jsxs)(B,{children:[Object(i.jsx)("h2",{children:"Congratulations!"}),Object(i.jsxs)("p",{children:["The",e," ","is now",a?"yours":"being held for you","!"]}),a&&Object(i.jsxs)("p",{children:[a," ","have been removed from your account."]}),Object(i.jsx)("p",{children:"Pick up your new ship at our Mos Espa location."}),!a&&Object(i.jsx)("p",{children:"(We will tell you the price when you get here.)"}),Object(i.jsx)(T,{onClick:()=>{r.push("/")},children:"OK"})]})});const L=c.b.div`
  padding: 0.5rem 0;

  @media only screen and (min-width: 768px) {
    padding: 1rem;
    margin: 0 auto;
    border-radius: 0 0 5px 5px;
  }
`,P=c.b.h2`
  text-transform: capitalize;
  height: 2rem;
  line-height: 1rem;
`,D=c.b.div`
  display: flex;
  position: relative;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`,q=c.b.div`
  position: absolute;
  width: 100%;
  height: 18rem;

  @media only screen and (min-width: 768px) {
    width: 60%;
    height: 25rem;
  }
`,K=c.b.img`
  display: none;

  @media only screen and (min-width: 768px) {
    display: block;
    width: 100%;
    margin-bottom: 1rem;
  }
`,I=c.b.div`
  flex: 1;
  padding: 0 1rem;
  color: var(--sw-silver);
  text-align: center;

  @media only screen and (min-width: 768px) {
    text-align: left;
    margin-top: 3rem;
  }
`,N=c.b.ul`
  text-align: left;
  list-style-type: none;
  padding: 0.5rem;
`,R=c.b.div`
  display: flex;
`,X=c.b.div`
  flex: 1;
  padding: 0.3rem;
  text-transform: capitalize;

  @media only screen and (min-width: 768px) {
    display: inline-block;
    padding: 0.3rem 0 0.3rem 0.4rem;
  }
`,W=c.b.div`
  flex: 2;
  padding: 0.3rem;
  text-transform: capitalize;

  @media only screen and (min-width: 768px) {
    display: inline-block;
    text-align: right;
  }
`,Q=Object(c.b)(d.b)`
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
`,Y=c.b.button`
  color: var(--sw-silver);
  background-color: var(--sw-${e=>e.available?"blue":"gray"});
  font-size: 1.2rem;
  height: 3rem;
  width: 100%;
  padding: 0.1rem 0.4rem;
  border: none;
  border-radius: 5px;
  margin-top: 1rem;
`;var Z=({match:e,history:a})=>{const[r,n]=Object(t.useState)(!1),[s,d]=Object(t.useContext)(re),l=s.find((a=>a.id===e.params.id));if(!l)return Object(i.jsx)(f,{});const{name:c,manufacturer:o,class:m,price:b,techspecs:p,available:h,id:u,id3d:g}=l,j=Object.keys(p);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(P,{children:c}),Object(i.jsxs)(L,{children:[Object(i.jsxs)(D,{children:[Object(i.jsx)(Q,{to:"/",children:"Back"}),Object(i.jsx)(q,{}),Object(i.jsx)($,{id:u,id3d:g}),Object(i.jsxs)(I,{children:[Object(i.jsx)(K,{src:x[g],alt:c}),Object(i.jsxs)("p",{children:["Manufacturer:",o]}),Object(i.jsxs)("p",{children:["Class:",m]}),Object(i.jsxs)("p",{children:["Price:",b||"Come in person for an amazing discount!"]}),Object(i.jsx)(Y,{type:"button",available:h,onClick:()=>{const e=s.map((e=>{const a=e;return a.id===u&&(a.available=!1),a}));d(e),h&&n(!0)},children:h?"Purchase":"Sold Out"})]})]}),Object(i.jsx)(N,{children:j.map((e=>Object(i.jsx)("li",{children:Object(i.jsxs)(R,{children:[Object(i.jsx)(X,{children:e+":"}),Object(i.jsx)(W,{children:p[e]})]})},e)))}),r&&Object(i.jsx)(G,{name:c,price:b,history:a})]})]})},J=r.p+"static/media/splash.04be1f85.png";var U=[{name:"Twin Ion Engine Starfighter",manufacturer:"Sienar Fleet Systems",class:"Starfighter",price:null,techspecs:{"Maximum acceleration":"4,100 G","Maneuverability rating":"96-100 DPF","Hyperdrive system":"None",Shielding:"None",Hull:"Titanium hull",Armament:"L-s1 laser cannons"},available:!0,id:"twin-ion-engine-starfighter",id3d:"QGbBq"},{name:"T-65 X-Wing Starfighter",manufacturer:"Incom Corporation",class:"Starfighter",price:"90,000 credits",techspecs:{"Maximum acceleration":"3,700 G","Maneuverability rating":"75 DPF","Hyperdrive system":"Incom GBk-585",Shielding:'Chempat "Defender" DSG',Hull:"Titanium alloy",Armament:"Taim & Bak KX9"},available:!0,id:"t-65-x-wing-starfighter",id3d:"HBhDd"},{name:"BTL Y-wing Starfighter",manufacturer:"Koensayr Manufacturing",class:"Assault starfighter / bomber",price:"65,000 credits",techspecs:{"Maximum acceleration":"2,700 G","Targeting systems":"Fabritech ANc 2.7","Hyperdrive system":"Koensayr R300-H",Shielding:"Chempat deflector shield generator","Escape craft":"Guidenhauser ejector seat",Armament:"Taim & Bak IX4 or KX5 laser cannons"},available:!0,id:"y-wing-starfighter",id3d:"e1bbc"},{name:"YT-1300 Light Freighter",manufacturer:"Corellian Engineering Corporation",class:"Light Freighter",price:"25,000 credits",techspecs:{"Cargo capacity":"25 metric tons","Engine unit":"Girodyne SRB42 sublight engines","Hyperdrive system":"Corellian Avatar-10",Shielding:"Equipped",Hull:"Durasteel plating",Armament:"Standard laser cannon"},available:!0,id:"yt-1300-light-freighter",id3d:"FLfkh"},{name:"Alpha-class Xg-1 Star Wing",manufacturer:"Cygnus Spaceworks",class:"Assault Starfighter",price:"75,000 credits",techspecs:{"Maximum acceleration":"20 MGLT/s","Maneuverability rating":"78 DPF","Hyperdrive system":"Cygnus HD7 hyperdrive motivator",Shielding:"Novaldex forward and rear",Hull:"Quadanium steel-armored titanium",Armament:"Medium Taim & Bak KX5 laser cannons"},available:!0,id:"alpha-class-xg-1-star-wing",id3d:"uksPm"},{name:"Lambda-class T-4a Shuttle",manufacturer:"Sienar Fleet Systems",class:"Armed government transport shuttle",price:"24,0000 credits",techspecs:{"Maximum acceleration":"1,400 G",Passengers:"20+ passengers","Hyperdrive system":"SFS S/ig-37",Shielding:"Multiple shield generators",Hull:"Reinforced durasteel / carbon fiber",Armament:"Aft retractable ArMek R-T0 twin blaster"},available:!0,id:"lambda-class-t-4a-shuttle",id3d:"rdDEP"},{name:"RZ-1 A-wing Interceptor",manufacturer:"Kuat Systems Engineering",class:"Starfighter",price:"90,000 credits",techspecs:{"Maximum acceleration":"5,100 G","Targeting systems":"Fabritech ANq 3.6 tracking computer","Hyperdrive system":"Incom GBk-785",Shielding:"Sirplex Z-9 deflector projector",Hull:"Lightweight durasteel plates / titanium alloy frame",Armament:"Borstel RG-9 laser cannons"},available:!0,id:"rz-1-a-wing-interceptor",id3d:"LaEdm"},{name:"A/SF-01 B-wing Starfighter",manufacturer:"Slayn & Korpil",class:"Heavy Assault Starfighter",price:"120,000 credits",techspecs:{"Maximum acceleration":"2,390 G","Sensor systems":"Fabritech ANv-9q","Hyperdrive system":"Slayn & Korpil HYd-997",Shielding:"Sirplex Zr-41","Targeting systems":"Fabritech ANq 3.6",Armament:"ArMek SW-7a ion cannons"},available:!0,id:"b-wing-heavy-assault-starfighter",id3d:"yqoE0"}];const V=c.a`
  body {
    font-family: ${e=>e.language};
  }
`,_=c.b.div`
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
  `,ee=c.b.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;
  background-image: url(${J});
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 5px;
  box-shadow: inset 0 -10px 20px 3px var(--sw-space);

  @media only screen and (min-width: 768px) {
    height: 29.7rem;
  }
`,ae=c.b.h1`
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
`,re=Object(t.createContext)([null,()=>{}]);var ie=()=>{const[e,a]=Object(t.useState)("aurebesh"),[r,n]=Object(t.useState)([]),[s,c]=Object(t.useState)("loading");Object(t.useEffect)((()=>{n(U),c("loaded")}),[]);let o=Object(i.jsx)(f,{type:s});"loaded"===s&&(o=Object(i.jsx)(re.Provider,{value:[r,()=>{}],children:Object(i.jsx)(d.a,{basename:"/wattos",children:Object(i.jsxs)(l.c,{children:[Object(i.jsx)(l.a,{exact:!0,path:"/",render:e=>Object(i.jsx)(z,{...e})}),Object(i.jsx)(l.a,{path:"/ship/:id",render:e=>Object(i.jsx)(Z,{...e})}),Object(i.jsx)(l.a,{component:f})]})})})),"failed"===s&&(o=Object(i.jsx)(f,{type:s}));return Object(i.jsxs)(_,{children:[Object(i.jsx)(V,{language:e}),Object(i.jsxs)(ee,{children:[Object(i.jsx)(ae,{children:"Watto\u2019s Spaceship Emporium"}),Object(i.jsx)(g,{handleClick:e=>{a(e.target.dataset.lang)},current:e})]}),o]})};r(33);s.a.render(Object(i.jsx)(ie,{}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.42295316.chunk.js.map