import{_ as k}from"./gallery-lazy.dcc828f3.js";import{a as v}from"./gallery-search.7e45290f.js";import{c as S}from"./gallery.8ae07be6.js";import{f as x}from"./gallery-findSubPageSource.13590a77.js";import{_ as w,r as N,b as O,c,d as u,a as p,F as $,j as C,n as m,e as d,o as i,i as R,k as h,t as y,w as B,x as T}from"./lodash.5e8f7418.js";import"./gallery-secondsToTimeString.bf50597f.js";import"./gallery-page-title.d18613c6.js";import"./content-script-helpers.6070c5ad.js";import"./jquery.1c267695.js";import"./gallery-makeCoverUrl.8378190f.js";import"./index.5325f6be.js";import"./howler.f2d1c5e3.js";import"./tippy.95dc4639.js";const z={name:"aleNarrators",mixins:[S,x],data:function(){return{collectionSource:"pageCollection",listReady:!1,pageTitle:"Narrators",pageSubTitle:null}},computed:{optionsOpenMargin:function(){return this.$store.state.searchOptOpenHeight?{marginBottom:0}:!1},galleryStyle:function(){return this.$store.state.searchOptOpenHeight?{overflow:"hidden",height:this.$store.state.searchOptOpenHeight-this.$refs.wrapper.offsetTop*2+"px"}:!1}},methods:{makeCollection:function(){const r=this;let s=[],a=1;_.eachRight(r.subPageSource.collection,function(e){e.narrators&&_.each(e.narrators,function(t){if(t.name){let n=_.find(s,{name:t.name});if(n)return n.books.push(e.title||e.shortTitle),!1;{const l={name:t.name,url:r.slugify(t.name),added:a,books:[e.title||e.shortTitle],authors:e.authors,publishers:e.publishers,series:e.series};s.push(l),++a}}})}),_.reverse(s),this.$store.commit("prop",{key:"pageCollection",value:s}),this.updateListRenderingOptions(),this.listReady=!0},updateListRenderingOptions:function(){let r=this;const s={scope:[{active:!0,key:"name",tippy:"Search narrators by name",weight:5},{active:!0,key:"books",tippy:"Search narrators by book titles",weight:1},{active:!0,key:"authors.name",tippy:"Search narrators by authors",weight:1},{active:!0,key:"publishers.name",tippy:"Search narrators by publishers",weight:1},{active:!0,key:"series.name",tippy:"Search narrators by series",weight:1}],filter:[{active:!1,type:"filterExtras",label:"Number of books",key:"books",range:[1,function(){let a=_.get(r.$store.state,r.collectionSource),e=_.maxBy(a,function(t){if(t.books)return t.books.length});return e?e.books.length:1}()],rangeMinDist:0,rangeSuffix:"",rangeMin:function(){return 1},rangeMax:function(){let a=_.get(r.$store.state,r.collectionSource),e=_.maxBy(a,function(t){if(t.books)return t.books.length});return e?e.books.length:1},condition:function(a){if(a.books){let e=this.range[0],t=this.range[1];return a.books.length>=e&&a.books.length<=t}}}],sort:[{active:!1,key:"randomize",label:"Randomize",type:"sortExtras",tippy:"Ignores sorting and randomizes instead unless there's an active search."},{type:"divider",key:"divider1"},{active:!0,current:!0,key:"added",label:"Added",type:"sort",tippy:'<div style="text-align: left;"><small>&#9650;</small> Old at the top <br><small style="display: inline-block; transform: rotate(180deg);">&#9650;</small> New at the top</div>'},{active:!0,current:!1,key:"name",label:"Name",type:"sort",tippy:"Sort by narrator's name"},{active:!1,current:!1,key:"amount",label:"Number of books",type:"sort"}]};this.$setListRenderingOpts(s)}}},M={key:0,class:"books-total",content:"Total number of books with this narrator."};function D(r,s,a,e,t,n){const l=v,f=N("router-link"),g=k,b=O("tippy");return r.listReady?(i(),c("div",{key:0,id:"ale-narrators",class:"box-layout-wrapper",style:m(n.optionsOpenMargin),ref:"wrapper"},[u(l,{collectionSource:r.collectionSource},null,8,["collectionSource"]),p("div",{style:m(n.galleryStyle),class:"page-content"},[(i(!0),c($,null,C(r.$store.getters.collection,(o,L)=>(i(),R(g,{class:"single-box","data-name":o.name,key:"narrators:"+o.name},{default:h(()=>[u(f,{to:{name:"narrator",params:{narrator:o.url},query:{subPageSource:r.subPageSource.name}}},{default:h(()=>[p("h2",null,y(o.name),1),o.books&&o.books.length?B((i(),c("div",M,[T(y(o.books.length),1)])),[[b,{placement:"right"}]]):d("",!0)]),_:2},1032,["to"])]),_:2},1032,["data-name"]))),128))],4)],4)):d("",!0)}var U=w(z,[["render",D],["__scopeId","data-v-30acef0c"]]);export{U as default};
