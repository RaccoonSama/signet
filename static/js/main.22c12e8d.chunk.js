(this.webpackJsonpsignets=this.webpackJsonpsignets||[]).push([[0],{57:function(e,a,c){},58:function(e,a,c){},59:function(e,a,c){},65:function(e,a,c){},66:function(e,a,c){},77:function(e,a,c){},79:function(e,a,c){"use strict";c.r(a);var t=c(1),s=c.n(t),i=c(20),n=c.n(i),r=(c(57),c(24)),j=(c(58),c(59),c(96)),l=c.p+"static/media/avatar.0486c3da.png",o=c(5);function b(){return Object(o.jsxs)("header",{className:"Entete",children:[Object(o.jsx)("div",{className:"logo",children:"Signets"}),Object(o.jsxs)("div",{className:"utilisateur",children:["Camille Semaan ",Object(o.jsx)(j.a,{className:"avatar",alt:"Camille Semaan",src:l})]})]})}var u=c(38),d=(c(65),c(66),c(94)),m=c(43),O=c.n(m),p=c(44),h=c.n(p);function f(e){var a=e.nom,c=e.couleur,t=e.modification,s=e.image;return Object(o.jsxs)("article",{className:"Dossier",style:{backgroundColor:c},children:[Object(o.jsxs)("div",{className:"couverture",children:[Object(o.jsx)(d.a,{className:"deplacer","aria-label":"d\xe9placer",disableRipple:!0,children:Object(o.jsx)(O.a,{})}),Object(o.jsx)("img",{src:s,alt:a})]}),Object(o.jsxs)("div",{className:"info",children:[Object(o.jsx)("h2",{children:a}),Object(o.jsxs)("p",{children:["Modifi\xe9 : ",x(t)]})]}),Object(o.jsx)(d.a,{className:"modifier","aria-label":"modifier",size:"small",children:Object(o.jsx)(h.a,{})})]})}function x(e){var a=e?new Date(1e3*e.seconds):new Date,c=a.getDate(),t=["janvier","f\xe9vrier","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","d\xe9cembre"][a.getMonth()],s=a.getFullYear();return"".concat(c," ").concat(t," ").concat(s)}var v=c(3),g=(c(80),c(45));0===v.a.apps.length&&v.a.initializeApp({apiKey:"AIzaSyAmtX_Q-C-aU64ZGfDxu90myW6qppWbHLI",authDomain:"cours-react-firebase.firebaseapp.com",projectId:"cours-react-firebase",storageBucket:"cours-react-firebase.appspot.com",messagingSenderId:"752948488573",appId:"1:752948488573:web:6720b2db593f3e96c24414"});var N=v.a.firestore();new g.a.AuthUI(v.a.auth());function S(){var e=Object(t.useState)([]),a=Object(r.a)(e,2),c=a[0],s=a[1];return Object(t.useEffect)((function(){return N.collection("dossier-temp").get().then((function(e){var a=[];e.forEach((function(e){return a.push(Object(u.a)({id:e.id},e.data()))})),s(a)}))}),[]),Object(o.jsx)("ul",{className:"ListeDossiers",children:c.map((function(e){return Object(o.jsx)("li",{children:Object(o.jsx)(f,Object(u.a)({},e))},e.id)}))})}var w=c(95),A=c(47),D=c.n(A);c(77);function I(e){return Object(o.jsxs)("div",{className:"Acceuil",children:[Object(o.jsxs)("h3",{className:"logo",children:["Signets ",Object(o.jsx)("span",{children:"beta"})]}),Object(o.jsxs)("h2",{className:"amorce",children:["Organisez vos signets web, ",Object(o.jsx)("br",{})," unn jeu d'enfant"]}),Object(o.jsx)("div",{id:"fbui"})]})}function y(){var e=Object(t.useState)(),a=Object(r.a)(e,2),c=a[0];a[1];return Object(o.jsx)("div",{className:"Appli",children:c?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(b,{}),Object(o.jsxs)("section",{className:"contenu-principal",children:[Object(o.jsx)(S,{}),Object(o.jsx)(w.a,{className:"ajoutRessource",color:"primary","aria-label":"Ajouter dossier",children:Object(o.jsx)(D.a,{})})]})]}):Object(o.jsx)(I,{})})}n.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(y,{})}),document.getElementById("racine"))}},[[79,1,2]]]);
//# sourceMappingURL=main.22c12e8d.chunk.js.map