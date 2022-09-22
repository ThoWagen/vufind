/*!
* CookieConsent 3.0.0-rc.5
* https://github.com/orestbida/cookieconsent
* Author Orest Bida
* Released under the MIT License
*/
var e,t;e=this,t=function(e){'use strict';const t='opt-in',n='opt-out',o='show--consent',a='show--preferences',r='disable--interaction',i='data-category',c='div',s='button',l='consentModal',d='preferencesModal',f=e=>'function'==typeof e,_=e=>JSON.parse(JSON.stringify(e)),u=(e,t)=>{window.dispatchEvent(new CustomEvent(e,{detail:_(t)}))},p=(e,t)=>{const n=m.t,o=m.o,a={cookie:m.l.i};if(t){const a={modalName:t};return e===o._?f(n._)&&n._(a):e===o.u?f(n.u)&&n.u(a):f(n.p)&&n.p(a),u(e,a)}e===o.v?f(n.v)&&n.v(_(a)):e===o.m?f(n.m)&&n.m(_(a)):e===o.g&&(a.changedCategories=m.l.h,a.changedServices=m.l.C,f(n.g)&&n.g(_(a))),u(e,a)};class v{constructor(){this.M={mode:t,revision:0,autoShow:!0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,lazyHtmlGeneration:!0,cookie:{name:'cc_cookie',expiresAfterDays:182,domain:'',path:'/',sameSite:'Lax'}},this.l={k:null,S:'',T:{},A:null,i:null,B:[],D:null,H:null,N:null,V:'',F:!0,j:!1,I:!1,O:!1,P:!1,G:!1,J:!1,R:[],L:!1,U:!0,h:[],q:!1,K:'',W:!1,X:[],Y:[],Z:[],$:[],ee:!1,te:!1,ne:!1,oe:[],ae:[],re:[],ie:{},ce:{},se:{},C:{},le:{},de:[],fe:[]},this._e={ue:0,pe:0,ve:0,me:0,ge:0,be:0,ye:0,he:0,we:0,Ce:0,Me:0,ke:0,Se:0,xe:0,Te:0,Ae:0,Be:0,De:0,He:0,Ne:0,Ee:0,Ve:0,Fe:0,je:0,Ie:0,Oe:0,Pe:0,Ge:0,Je:0,Re:{},Le:{}},this.t={v:0,m:0,g:0,_:0,u:0,p:0},this.o={v:'cc:onFirstConsent',m:'cc:onConsent',g:'cc:onChange',_:'cc:onModalShow',u:'cc:onModalHide',p:'cc:onModalReady'}}}const m=new v,g=e=>!!e&&'object'==typeof e&&!Array.isArray(e),b=(e,t)=>-1!==e.indexOf(t),y=e=>{const t=document.createElement(e);return e===s&&h(t,'type',e),t},h=(e,t,n)=>{e.setAttribute(t,n)},w=(e,t)=>{e.appendChild(t)},C=(e,t,n,o)=>{e.addEventListener(t,n),o&&m.l.B.push({Ue:e,ze:t,qe:n})},M=e=>{if('object'==typeof e)return Object.keys(e)},k=(e,t)=>{e.classList.add(t)},S=(e,t)=>{k(e,'cm__'+t)},x=(e,t)=>{k(e,'pm__'+t)},T=(e,t)=>{e.classList.remove(t)},A=()=>{const e=m.M.cookie.expiresAfterDays;return f(e)?e(m.l.K):e},B=(e,t)=>e.filter((e=>!b(t,e))).concat(t.filter((t=>!b(e,t)))),D=e=>{var t='custom';return e.accepted.length===m.l.X.length?t='all':e.accepted.length===m.l.Z.length&&(t='necessary'),t},H=()=>{m.l.K=D(E())},N=(e,t,n)=>{const o='accept-',a=f('show-preferencesModal'),r=f('show-consentModal'),i=f(o+'all'),c=f(o+'necessary'),s=f(o+'custom'),l=!0===m.M.lazyHtmlGeneration;for(var d=0;d<a.length;d++)h(a[d],'aria-haspopup','dialog'),C(a[d],'click',(e=>{e.preventDefault(),t.showPreferences()}),!0),l&&C(a[d],'mouseover',(e=>{e.preventDefault(),m.l.P||n(t)}),!0);for(d=0;d<r.length;d++)h(r[d],'aria-haspopup','dialog'),C(r[d],'click',(e=>{e.preventDefault(),t.show(!0)}),!0);for(d=0;d<i.length;d++)C(i[d],'click',(e=>{_(e,'all')}),!0);for(d=0;d<s.length;d++)C(s[d],'click',(e=>{_(e)}),!0);for(d=0;d<c.length;d++)C(c[d],'click',(e=>{_(e,[])}),!0);function f(t){return(e||document).querySelectorAll('[data-cc="'+t+'"]')}function _(e,n){e.preventDefault(),t.acceptCategory(n),t.hidePreferences(),t.hide()}},E=()=>{const e=m.l.X.filter((e=>!b(m.l.Y,e)));return{accepted:m.l.Y,rejected:e}},V=()=>{const e=m.l,t=['[href]',s,'input','details','[tabindex="0"]'].join(':not([tabindex="-1"]), '),n=(e,n)=>{const o=e&&e.querySelectorAll(t);n[0]=o[0],n[1]=o[o.length-1]};e.j&&n(m._e.be,e.oe),e.P&&n(m._e.He,e.ae)},F=e=>{const t=m.l,n=t.ce;if(t.X.forEach((e=>{(t.C[e]||t.ce[e]||[]).forEach((n=>{const o=t.ie[e][n];!o.enabled&&b(t.ce[e],n)&&f(o.onAccept)?(o.enabled=!0,o.onAccept()):o.enabled&&!b(t.ce[e],n)&&f(o.onReject)&&(o.enabled=!1,o.onReject())}))})),m.M.manageScriptTags){var o=t.de,a=e||t.i.categories||[],r=(e,o)=>{if(o<e.length){var c=e[o],s=t.fe[o],l=s.Ke,d=s.Qe,f=b(a,l),_=!!d&&b(n[l],d);if(!s.We){var u=!d&&!s.Xe&&f,p=d&&!s.Xe&&_,v=!d&&s.Xe&&!f&&b(t.h,l),m=d&&s.Xe&&!_&&b(t.C[l]||[],d);if(u||v||p||m){s.We=!0,c.removeAttribute('type'),c.removeAttribute(i);var g=c.getAttribute('data-src');g&&c.removeAttribute('data-src');var w=y('script');if(w.textContent=c.innerHTML,((e,t)=>{for(var n=t.attributes,o=n.length,a=0;a<o;a++){var r=n[a].nodeName;h(e,r,t[r]||t.getAttribute(r))}})(w,c),g?w.src=g:g=c.src,g&&(w.onload=w.onerror=()=>{r(e,++o)}),c.replaceWith(w),g)return}}r(e,++o)}};r(o,0)}},j=e=>{const t=m.l.k.guiOptions,n=t&&t.consentModal,o=t&&t.preferencesModal,a=(e,t,n,o,a,r)=>{var i=n&&n.layout,c=n&&n.position,s=n&&!0===n.flipButtons,l=n&&!1===n.equalWeightButtons,d=i&&i.split(' ')||[],f=c&&c.split(' ')||[],_=d[0],u=d[1],p=f[0],v='pm--'===o?f[0]:f[1],g=_,y=t[_];y||(y=t[a],g=a);var h=b(y.Ye,u)&&u,w=b(y.Ze,p)?p:y.$e,C=b(y.et,v)?v:y.tt;e.className=r,k(e,o+g),h&&k(e,o+h),w&&k(e,o+w),C&&k(e,o+C),s&&k(e,o+'flip');const M='btn--secondary',S=r+'__';if('cm'===r){const{Te:e,De:t}=m._e;e&&T(e,S+M),t&&T(t,S+M),l&&(e&&k(e,S+M),t&&k(t,S+M))}else{const{Ge:e}=m._e;e&&T(e,S+M),l&&e&&k(e,S+M)}};if(0===e){const e=['middle','top','bottom'],t=['left','center','right'],o={box:{Ye:['wide','inline'],Ze:e,et:t,$e:'bottom',tt:'right'},cloud:{Ye:['inline'],Ze:e,et:t,$e:'bottom',tt:'center'},bar:{Ye:['inline'],Ze:e.slice(1),et:[],$e:'bottom',tt:''}};a(m._e.be,o,n,'cm--','box','cm')}if(1===e){const e={box:{Ye:[],Ze:[],et:[],$e:'',tt:''},bar:{Ye:['wide'],Ze:[],et:['left','right'],$e:'',tt:'left'}};a(m._e.He,e,o,'pm--','box','pm')}},I=e=>{const t=m.l,n=m._e,o=t.A&&t.A.preferencesModal;if(o){var a=o.title,r=o.closeIconLabel,i=o.acceptAllBtn,l=o.acceptNecessaryBtn,f=o.savePreferencesBtn,_=o.sections;if(n.ge)n.je=y(c),x(n.je,'body');else{n.ge=y(c),k(n.ge,'pm-wrapper'),n.He=y(c),n.He.style.visibility='hidden',k(n.He,'pm'),h(n.He,'role','dialog'),h(n.He,'aria-hidden',!0),h(n.He,'aria-modal',!0),C(n.pe,'keydown',(t=>{27===t.keyCode&&e.hidePreferences()}),!0),n.Ne=y(c),x(n.Ne,'header'),n.Ee=y(c),x(n.Ee,'title'),h(n.Ee,'role','heading'),n.Ve=y(s),x(n.Ve,'close-btn'),h(n.Ve,'aria-label',o.closeIconLabel||''),C(n.Ve,'click',e.hidePreferences),n.Fe=y(c),x(n.Fe,'body'),n.Oe=y(c),x(n.Oe,'footer');var u=y(c);k(u,'btns');var v=y(c),g=y(c);x(v,'btn-group'),x(g,'btn-group'),w(n.Oe,g),w(n.Oe,v),w(n.Ne,n.Ee),w(n.Ne,n.Ve),w(n.He,n.Ne),w(n.He,n.Fe),w(n.He,n.Oe),w(n.ge,n.He)}a&&(n.Ee.innerHTML=a,r&&h(n.Ve,'aria-label',r)),_&&_.forEach((e=>{var a=e.title,r=e.description,i=e.linkedCategory,l=i&&t.W[i],d=e.cookieTable,f=d&&d.body,_=f&&f.length>0,u=!!l,p=u&&t.ie[i]||!1,v=p&&M(p)||[],m=u&&(!!r||!!_||M(p).length>0),g=y(c);if(x(g,'section'),m||r){var b=y(c);x(b,'section-desc-wrapper')}if(m&&v.length>0){var S=y(c);x(S,'section-services'),v.forEach((e=>{var t=p[e].label||e,n=y(c),o=y(c),a=y(c),r=y('span'),s=y(c);x(n,'service'),x(s,'service-title'),x(r,'code-icon'),x(o,'service-header'),x(a,'service-icon');var d=O(t,e,l,0,!0,i);s.innerHTML=t,w(a,r),w(o,a),w(o,s),w(n,o),w(n,d),w(S,n)})),w(b,S)}if(a){var A=y(c),B=y(u?s:c);if(x(A,'section-title-wrapper'),x(B,'section-title'),B.innerHTML=a,w(A,B),u){var D=y('span');x(D,'section-arrow'),w(A,D),g.className+='--toggle';var H=O(a,i,l);if(v.length>0){var N=y('span');x(N,'badge'),x(N,'service-counter'),h(N,'aria-hidden',!0),h(N,'data-servicecounter',v.length);var E=o.serviceCounterLabel;E&&'string'==typeof E&&h(N,'data-counterlabel',E),w(B,N)}if(m){x(g,'section--expandable');var V=i+'-desc';h(B,'aria-expanded',!1),h(B,'aria-controls',V)}w(A,H)}else h(B,'role','heading'),h(B,'aria-level','3');w(g,A)}if(r){var F=y(c);x(F,'section-desc'),F.innerHTML=r,w(b,F)}if(m&&(h(b,'aria-hidden','true'),b.id=V,((e,t,n)=>{C(B,'click',(()=>{t.classList.contains('is-expanded')?(T(t,'is-expanded'),h(n,'aria-expanded','false'),h(e,'aria-hidden','true')):(k(t,'is-expanded'),h(n,'aria-expanded','true'),h(e,'aria-hidden','false'))}))})(b,g,B),_)){var j=y('table'),I=y('thead'),P=y('tbody');x(j,'section-table'),x(I,'table-head'),x(P,'table-body');var G=d.headers,J=M(G),R=n.ue.createDocumentFragment(),L=y('tr');h(L,'role','row');for(var U=0;U<J.length;U++){var z=G[J[U]],q=y('th');q.id='cc__row-'+z,h(q,'role','columnheader'),h(q,'scope','col'),x(q,'table-th'),q.innerHTML=z,w(R,q)}w(L,R),w(I,L);var K=n.ue.createDocumentFragment();for(U=0;U<f.length;U++){var Q=f[U],W=y('tr');h(W,'role','row'),x(W,'table-tr');for(var X=0;X<J.length;X++){var Y=J[X],Z=G[Y],$=Q[Y],ee=y('td'),te=y(c);x(ee,'table-td'),h(ee,'data-column',Z),h(ee,'headers','cc__row-'+Z),te.insertAdjacentHTML('beforeend',$),w(ee,te),w(W,ee)}w(K,W)}w(P,K),w(j,I),w(j,P),w(b,j)}(m||r)&&w(g,b),w(n.Fe,g),n.je?w(n.je,g):w(n.Fe,g)})),(i||l)&&(l&&(n.Ge||(n.Ge=y(s),x(n.Ge,'btn'),w(v,n.Ge),C(n.Ge,'click',(()=>{b([])}))),n.Ge.innerHTML=l),i&&(n.Pe||(n.Pe=y(s),x(n.Pe,'btn'),w(v,n.Pe),C(n.Pe,'click',(()=>{b('all')}))),n.Pe.innerHTML=i)),f&&(n.Je||(n.Je=y(s),x(n.Je,'btn'),x(n.Je,'btn--secondary'),w(g,n.Je),C(n.Je,'click',(()=>{b()}))),n.Je.innerHTML=f),n.je&&(n.He.replaceChild(n.je,n.Fe),n.Fe=n.je),j(1),t.P||(t.P=!0,w(n.ve,n.ge),V(),p(m.o.p,d),setTimeout((()=>k(n.ge,'c--anim')),100))}function b(t){e.acceptCategory(t),e.hidePreferences(),e.hide()}};function O(e,t,n,o,a,r){const c=m.l,s=m._e;var l=y('label'),d=y('input'),f=y('span'),_=y('span'),u=y('span'),p=y('span');if(d.type='checkbox',k(l,'section__toggle-wrapper'),k(d,'section__toggle'),k(u,'toggle__icon-on'),k(p,'toggle__icon-off'),k(f,'toggle__icon'),k(_,'toggle__label'),h(f,'aria-hidden','true'),a?(k(l,'toggle-service'),k(d,'toggle-service'),h(d,i,r),s.Le[r][t]=d):s.Re[t]=d,a?(e=>{C(d,'change',(()=>{var t=s.Le[e],n=s.Re[e];for(var o in c.se[e]=[],t){const n=t[o];n.checked&&c.se[e].push(n.value)}c.se[e].length>0?n.checked=!0:n.checked=!1}))})(r):(e=>{C(d,'click',(()=>{var t=s.Le[e];if(c.se[e]=[],d.checked)for(var n in t)t[n].checked=!0;else for(n in t)t[n].checked=!1}))})(t),d.value=t,_.textContent=e,w(f,p),w(f,u),c.F)(n.enabled||n.readOnly)&&(d.checked=!0);else if(a){var v=c.ce[r];v&&b(v,t)&&(d.checked=!0)}else b(c.i.categories,t)&&(d.checked=!0);return n.readOnly&&(d.disabled=!0),w(l,d),w(l,f),w(l,_),l}const P=e=>{const t=m.l,n=m._e,o=t.A&&t.A.consentModal;if(o){!0===t.k.disablePageInteraction&&k(n.pe,r);var a=o.acceptAllBtn,i=o.acceptNecessaryBtn,d=o.showPreferencesBtn,f=o.closeIconLabel,_=o.footer;if(!n.me){n.me=y(c),n.be=y(c),n.ye=y(c),n.he=y(c),n.Me=y(c),k(n.me,'cm-wrapper'),k(n.be,'cm'),S(n.ye,'body'),S(n.he,'texts'),S(n.Me,'btns'),h(n.be,'role','dialog'),h(n.be,'aria-modal','true'),h(n.be,'aria-hidden','false'),h(n.be,'aria-labelledby','cm__title'),h(n.be,'aria-describedby','cm__desc'),n.be.style.visibility='hidden';const o='box',r=t.k.guiOptions,l=r&&r.consentModal,_=(l&&l.layout||o).split(' ')[0]===o;f&&_&&(n.De||(n.De=y(s),S(n.De,'btn'),S(n.De,'btn--close'),C(n.De,'click',(()=>{e.hide(),e.acceptCategory([])})),w(n.ye,n.De)),h(n.De,'aria-label',f)),w(n.ye,n.he),(a||i||d)&&w(n.ye,n.Me),w(n.be,n.ye),w(n.me,n.be)}var u=o.title;u&&(n.we||(n.we=y(c),n.we.className=n.we.id='cm__title',h(n.we,'role','heading'),h(n.we,'aria-level','2'),w(n.he,n.we)),n.we.innerHTML=u);var v=o.description;if(v&&(t.L&&(v=v.replace('{{revisionMessage}}',t.U?'':o.revisionMessage||'')),n.Ce||(n.Ce=y(c),n.Ce.className=n.Ce.id='cm__desc',w(n.he,n.Ce)),n.Ce.innerHTML=v),a&&(n.xe||(n.xe=y(s),S(n.xe,'btn'),C(n.xe,'click',(()=>{e.hide(),e.acceptCategory('all')}))),n.xe.innerHTML=a),i&&(n.Te||(n.Te=y(s),S(n.Te,'btn'),C(n.Te,'click',(()=>{e.hide(),e.acceptCategory([])}))),n.Te.innerHTML=i),d&&(n.Ae||(n.Ae=y(s),S(n.Ae,'btn'),S(n.Ae,'btn--secondary'),C(n.Ae,'mouseover',(()=>{I(e)})),C(n.Ae,'click',e.showPreferences)),n.Ae.innerHTML=d),!n.Se&&d&&(n.Se=y(c),S(n.Se,'btn-group'),w(n.Se,n.Ae),w(n.Me,n.Se)),n.ke||(n.ke=y(c),S(n.ke,'btn-group'),i&&w(n.ke,n.Te),a&&w(n.ke,n.xe),(a||i)&&w(n.ye,n.ke),w(n.Me,n.ke)),_){if(!n.Be){var g=y(c),b=y(c);n.Be=y(c),S(g,'footer'),S(b,'links'),S(n.Be,'link-group'),w(b,n.Be),w(g,b),w(n.be,g)}n.Be.innerHTML=_}j(0),t.j||(t.j=!0,w(n.ve,n.me),V(),p(m.o.p,l),setTimeout((()=>k(n.me,'c--anim')),100)),N(n.ye,e,I)}},G=e=>!!e&&b(M(m.l.T),e),J=()=>{const e=m.l;return e.S||e.k.language.default},R=e=>{e&&(m.l.S=e)},L=async e=>{const t=m.l;let n;n=e&&G(e)?e:J();let o=t.T[n];if(!o)return!1;if('string'==typeof o){const e=await(async e=>{try{const t=await fetch(e,{method:'GET'});return!!t.ok&&await t.json()}catch(e){return!1}})(o);if(!e)return!1;o=e}return t.A=o,R(n),!0},U=(e,t,n)=>{var o=encodeURIComponent(t),a=n?(()=>{const e=m.l.N,t=e?new Date-e:0;return 864e5*A()-t})():864e5*A(),r=new Date;r.setTime(r.getTime()+a);var i=e+'='+(o||'')+(0!==a?'; expires='+r.toUTCString():'')+'; Path='+m.M.cookie.path+';';i+=' SameSite='+m.M.cookie.sameSite+';',b(window.location.hostname,'.')&&(i+=' Domain='+m.M.cookie.domain+';'),'https:'===window.location.protocol&&(i+=' Secure;'),document.cookie=i,JSON.parse(decodeURIComponent(o))},z=e=>{let t;try{t=JSON.parse(decodeURIComponent(e))}catch(e){t={}}return t},q=(e,t,n)=>{const o=n||m.M.cookie.domain,a=t||m.M.cookie.path,r='www.'===o.slice(0,4),i=r&&o.substring(4),c=(e,t)=>{document.cookie=e+'=; path='+a+(t?'; domain=.'+t:'')+'; expires=Thu, 01 Jan 1970 00:00:01 GMT;'};e.forEach((e=>{c(e),c(e,o),r&&c(e,i)}))},K=(e,t)=>{const n=document.cookie.match('(^|;)\\s*'+e+'\\s*=\\s*([^;]+)');return n?t?n.pop():e:''},Q=e=>{const t=document.cookie.split(/;\s*/),n=[];for(var o=0;o<t.length;o++){let a=t[o].split('=')[0];if(e)try{e.test(a)&&n.push(a)}catch(e){}else n.push(a)}return n},W=e=>{e.dispatchEvent(new Event('change'))},X=(e,o)=>{const a=m.l;var r=e||void 0,i=o||[],c=!1,s=[];if(r)if('object'==typeof r&&'number'==typeof r.length)for(var l=0;l<r.length;l++)b(a.X,r[l])&&s.push(r[l]);else'string'==typeof r&&('all'===r?s=a.X.slice():b(a.X,r)&&s.push(r));else s=(()=>{var e=m._e.Re,t=[];if(e)for(var n in e)e[n].checked&&t.push(e[n].value);else a.F||(t=a.i.categories);return t})(),c=!0;if(i.length>=1)for(l=0;l<i.length;l++)s=s.filter((e=>e!==i[l]));for(l=0;l<a.Z.length;l++)b(s,a.Z[l])||s.push(a.Z[l]);a.Y=s,H(),c||(a.se={}),a.le=_(a.ce),a.X.forEach((e=>{var t=m._e.Le[e];if(0===M(t).length)return;const n=a.ie[e],o=M(n);if(a.ce[e]=[],b(a.Z,e))o.forEach((t=>{a.ce[e].push(t)}));else if('all'===m.l.K)c&&a.se[e]&&a.se[e].length>0?a.se[e].forEach((t=>{a.ce[e].push(t)})):o.forEach((t=>{a.ce[e].push(t)}));else if('necessary'===a.K)a.ce[e]=[];else if(c&&a.se[e]&&a.se[e].length>0)a.se[e].forEach((t=>{a.ce[e].push(t)}));else for(let n in t){const o=t[n];o.checked&&a.ce[e].push(o.value)}})),(()=>{m.M.mode===n&&m.l.F?m.l.h=B(m.l.$,m.l.Y):m.l.h=B(m.l.Y,m.l.i.categories||[]);var e=m.l.h.length>0,o=!1;m.l.X.forEach((e=>{m.l.C[e]=B(m.l.ce[e],m.l.le[e]||[]),m.l.C[e].length>0&&(o=!0)}));var a=m._e.Re;for(var r in a)b(m.l.Y,r)?a[r].checked=!0:a[r].checked=!1;m.l.X.forEach((e=>{var t=m._e.Le[e],n=m.l.ce[e];for(var o in t){const e=t[o];b(n,o)?e.checked=!0:e.checked=!1}})),m.l.H||(m.l.H=new Date),m.l.V||(m.l.V=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^window.crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))),m.l.i={categories:_(m.l.Y),revision:m.M.revision,data:m.l.D,consentTimestamp:m.l.H.toISOString(),consentId:m.l.V,services:_(m.l.ce)};var i=!1;(m.l.F||e||o)&&(m.l.F&&(m.l.F=!1,i=!0),H(),m.l.N?m.l.N=new Date:m.l.N=m.l.H,m.l.i.lastConsentTimestamp=m.l.N.toISOString(),U(m.M.cookie.name,JSON.stringify(m.l.i)),m.M.autoClearCookies&&(i||!m.l.F&&e)&&(e=>{var t='';m.l.q=!1;var n,o=Q(),a=e?m.l.X:m.l.h;a=a.filter((e=>{var t=m.l.W[e];return!!t&&!t.readOnly&&!!t.autoClear}));for(var r=0;r<a.length;r++){var i=a[r],c=m.l.W[i].autoClear,s=c&&c.cookies||[],l=b(m.l.h,i),d=!b(m.l.Y,i),f=l&&d;if(e&&d||!e&&f){var _=s.length;!0===c.reloadPage&&f&&(m.l.q=!0);for(var u=0;u<_;u++){var p=[],v=s[u].name,g=!!v&&'string'!=typeof v,y=s[u].domain||null,h=s[u].path||!1;if(y&&(t=y),g)for(var w=0;w<o.length;w++)v.test(o[w])&&p.push(o[w]);else{var C=(n=v,o.indexOf(n));C>-1&&p.push(o[C])}p.length>0&&q(p,h,t)}}}})(i),F()),i&&(p(m.o.v),p(m.o.m),m.M.mode===t)||((e||o)&&p(m.o.g),m.l.q&&window.location.reload())})()},Y=(e,t,n)=>{let o=[];const a=e=>{if('string'==typeof e){let t=K(e);''!==t&&o.push(t)}else o=o.concat(Q(e))};if(Array.isArray(e))for(var r=0;r<e.length;r++)a(e[r]);else a(e);q(o,t,n)},Z=e=>{e&&!m.l.j&&P(ne),m.l.j&&(k(m._e.pe,o),h(m._e.be,'aria-hidden','false'),m.l.I=!0,setTimeout((()=>{m.l.te=m._e.ue.activeElement,m.l.R=m.l.oe}),200),p(m.o._,l))},$=()=>{m.l.j&&m.l.I&&(T(m._e.pe,o),h(m._e.be,'aria-hidden','true'),m.l.I=!1,setTimeout((()=>{m.l.te.focus(),m.l.R=[]}),200),p(m.o.u,l))},ee=()=>{const e=m.l;e.P&&e.O||(e.P||I(ne),k(m._e.pe,a),h(m._e.He,'aria-hidden','false'),e.O=!0,setTimeout((()=>{e.J=!0}),1),setTimeout((()=>{e.I?e.ne=m._e.ue.activeElement:e.te=m._e.ue.activeElement,0!==e.ae.length&&(e.ae[0].focus(),e.R=e.ae)}),200),p(m.o._,d))},te=()=>{const e=m.l;e.O&&(T(m._e.pe,a),h(m._e.He,'aria-hidden','true'),e.O=!1,setTimeout((()=>{e.J=!1}),1),e.I?(e.ne&&e.ne.focus(),e.R=e.oe):(e.te&&e.te.focus(),e.R=[]),e.G=!1,p(m.o.u,d))};var ne={show:Z,hide:$,showPreferences:ee,hidePreferences:te,acceptCategory:X};const oe=(e,t)=>{const n=z(K(t||m.M.cookie.name,!0));return e?n[e]:n};e.acceptCategory=X,e.acceptService=(e,t)=>{if(!e||!t||'string'!=typeof t||!b(m.l.X,t))return!1;const n=m._e.Le[t]||{};if(m.l.se[t]=[],'string'==typeof e)if('all'===e)for(var o in n)n[o].checked=!0,W(n[o]);else for(o in n)n[o].checked=e===o,W(n[o]);else if('object'==typeof e&&Array.isArray(e))for(o in n)b(e,o)?n[o].checked=!0:n[o].checked=!1,W(n[o]);X()},e.acceptedCategory=e=>{var n;return n=m.l.F&&m.M.mode!==t?m.l.$:E().accepted||[],b(n,e)},e.acceptedService=(e,t)=>b(m.l.ce[t]||[],e),e.eraseCookies=Y,e.getConfig=e=>{const t=m.M,n=m.l.k;return e?t[e]||n[e]:{...t,...n,cookie:{...t.cookie}}},e.getCookie=oe,e.getUserPreferences=()=>{const e=!m.l.F;var t,n=e&&E();return{acceptType:m.l.K,acceptedCategories:e?n.accepted:[],rejectedCategories:e?n.rejected:[],acceptedServices:e?m.l.ce:{},rejectedServices:e?(t={},m.l.X.forEach((e=>{t[e]=B(m.l.ce[e]||[],M(m.l.ie[e])||[])})),t):{}}},e.hide=$,e.hidePreferences=te,e.loadScript=(e,t)=>{let n=document.querySelector('script[src="'+e+'"]');return new Promise(((o,a)=>{if(n)return o(!0);n=y('script'),Array.isArray(t)&&t.forEach((e=>{h(n,e.name,e.value)})),n.onload=()=>o(!0),n.onerror=()=>{n.remove(),a(!1)},n.src=e,w(document.head,n)}))},e.reset=e=>{const t=m._e,n=m.M.cookie;!0===e&&Y(n.name,n.path,n.domain),m.l.B.forEach((e=>{e.Ue.removeEventListener(e.ze,e.qe)})),t.ve&&t.ve.remove(),t.pe&&(T(t.pe,r),T(t.pe,a),T(t.pe,o));const i=new v;m.l=i.l,m._e=i._e,m.M=i.M,m.t=i.t,m.o=i.o},e.run=async e=>{const t=m.l,o=m.M;if(!m._e.ve){if((e=>{!function(){const e=document;m._e.ue=e,m._e.pe=e.documentElement,m.M.cookie.domain=window.location.hostname}();const t=m.M,o=m.l,a=t.cookie,r=m.t,c=e.cookie,s=e.categories,l=M(s)||[],d=navigator;o.k=e,o.T=e.language.translations,o.W=s,o.X=l,r.v=e.onFirstConsent,r.m=e.onConsent,r.g=e.onChange,r.u=e.onModalHide,r._=e.onModalShow,r.p=e.onModalReady;const{mode:f,autoShow:_,autoClearCookies:u,revision:p,manageScriptTags:v,hideFromBots:y,lazyHtmlGeneration:h}=e;f===n&&(t.mode=f),'boolean'==typeof _&&(t.autoShow=_),'boolean'==typeof u&&(t.autoClearCookies=u),'boolean'==typeof v&&(t.manageScriptTags=v),'number'==typeof p&&p>=0&&(t.revision=p,o.L=!0),'boolean'==typeof h&&(t.lazyHtmlGeneration=h),!1===y&&(t.hideFromBots=!1),!0===t.hideFromBots&&d&&(o.ee=d.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(d.userAgent)||d.webdriver),g(c)&&(t.cookie={...a,...c}),t.autoClearCookies,o.L,t.manageScriptTags,function(e){const t=m.l;e.forEach((e=>{const n=t.W[e],o=n.services||{},a=o&&g(o)&&M(o)||[];n.readOnly&&t.Z.push(e),t.ie[e]={},t.ce[e]=[],m._e.Le[e]={},a.forEach((n=>{const a=o[n];a.enabled=!1,t.ie[e][n]=a}))}))}(l),(()=>{if(!m.M.manageScriptTags)return;const e=m.l;e.de=m._e.ue.querySelectorAll('script[data-category]'),e.fe=[],e.de.forEach((t=>{let n=t.getAttribute(i),o=t.dataset.service||'',a=!1;if(n&&'!'===n.charAt(0)&&(n=n.slice(1),a=!0),'!'===o.charAt(0)&&(o=o.slice(1),a=!0),b(e.X,n)&&(e.fe.push({We:!1,Xe:a,Ke:n,Qe:o}),o)){const t=e.ie[n];t[o]||(t[o]={enabled:!1})}}))})(),R((()=>{const e=m.l.k.language.autoDetect;if(e){let t;if('browser'===e?t=navigator.language.slice(0,2).toLowerCase():'document'===e&&(t=document.documentElement.lang),G(t))return t}return J()})())})(e),t.ee)return;const a=z(K(o.cookie.name,!0)),r=a.categories,s=Array.isArray(r)&&r.length>0;t.i=a,t.V=a.consentId;const l=!!t.V&&'string'==typeof t.V;t.H=a.consentTimestamp,t.H&&(t.H=new Date(t.H)),t.N=a.lastConsentTimestamp,t.N&&(t.N=new Date(t.N));const d=a.data;if(t.D=void 0!==d?d:null,t.L&&l&&a.revision!==o.revision&&(t.U=!1),t.F=!(l&&t.U&&t.H&&t.N&&s),t.F,t.F?o.mode===n&&(()=>{const e=m.l;e.X.forEach((t=>{if(e.W[t].enabled){e.$.push(t);const o=e.ie[t]||{};for(var n in o)e.ce[t].push(n)}}))})():(t.Y=a.categories,t.K=D(E()),t.ce=a.services||{}),!await L())return;(e=>{const t=m._e,n=m.l;t.ve=y(c),t.ve.id='cc-main',t.ve.style.position='fixed',t.ve.style.zIndex='2147483647',n.F&&P(e),m.M.lazyHtmlGeneration||I(e),N(null,e,I),w(n.k.root||t.ue.body,t.ve)})(ne),o.autoShow&&t.F&&Z(!0),(e=>{const t=m._e;var n=!1,o=!1;C(t.pe,'keydown',(e=>{if('Tab'!==e.key)return;const a=m.l.R;if(a.length>0){const r=t.ue.activeElement;e.shiftKey?r===a[0]&&(a[1].focus(),e.preventDefault()):r===a[1]&&(a[0].focus(),e.preventDefault()),o||m.l.G||(o=!0,!n&&e.preventDefault(),e.shiftKey?a[1].focus():a[0].focus())}!o&&(n=!0)}),!0),C(t.ve,'click',(n=>{const o=m.l;o.J?t.He.contains(n.target)?o.G=!0:(e.hidePreferences(0),o.G=!1):o.I&&t.be.contains(n.target)&&(o.G=!0)}))})({hidePreferences:te}),t.F?o.mode===n&&(o.mode,t.$,F(t.$)):(F(),p(m.o.m))}},e.setCookieData=e=>{let t,n=e.value,o=e.mode,a=!1;const r=m.l;if('update'===o){r.D=oe('data'),t=oe('data');const e=typeof t==typeof n;if(e&&'object'==typeof t)for(var i in!t&&(t={}),n)t[i]!==n[i]&&(t[i]=n[i],a=!0);else!e&&t||t===n||(t=n,a=!0)}else t=n,a=!0;return a&&(r.D=t,r.i.data=t,U(m.M.cookie.name,JSON.stringify(r.i),!0)),a},e.setLanguage=async(e,t)=>!(!G(e)||e===J()&&!0!==t||!await L(e)||(R(e),m.l.j&&P(ne),m.l.P&&I(ne),0)),e.show=Z,e.showPreferences=ee,e.validConsent=()=>!m.l.F,e.validCookie=e=>''!==K(e,!0),Object.defineProperty(e,'__esModule',{value:!0})},'object'==typeof exports&&'undefined'!=typeof module?t(exports):'function'==typeof define&&define.amd?define(['exports'],t):t((e='undefined'!=typeof globalThis?globalThis:e||self).CookieConsent={});
