"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[989],{5989:(F,p,a)=>{a.r(p),a.d(p,{BlogModule:()=>A});var s=a(6814),l=a(151),r=a(772),t=a(5879),d=a(7992),m=a(4347);const u=function(n){return{active:n}};function h(n,c){if(1&n){const o=t.EpF();t.TgZ(0,"li",2),t.NdJ("click",function(){const g=t.CHM(o).$implicit,k=t.oxw();return t.KtG(k.navigate(g))}),t._uU(1),t.qZA()}if(2&n){const o=c.$implicit,e=t.oxw();t.Q6J("ngClass",t.VKq(2,u,o.route===e.active)),t.xp6(1),t.hij(" ",o.name," ")}}let b=(()=>{class n{constructor(o,e){this.router=o,this.activatedRoute=e,this.navs=m.q,this.active=""}ngOnInit(){this.activatedRoute.queryParams.subscribe(o=>{this.active=o&&o.tag?o.tag:""})}navigate(o){o&&o.route?this.router.navigate(["/blogs"],{queryParams:{tag:o.route}}):this.router.navigate(["/blogs"])}static#t=this.\u0275fac=function(e){return new(e||n)(t.Y36(l.F0),t.Y36(l.gz))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-blog-side-navigation"]],decls:2,vars:1,consts:[[1,"side-navs"],[3,"ngClass","click",4,"ngFor","ngForOf"],[3,"ngClass","click"]],template:function(e,i){1&e&&(t.TgZ(0,"ul",0),t.YNc(1,h,2,4,"li",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",i.navs))},dependencies:[s.mk,s.sg],styles:["ul.side-navs[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}ul.side-navs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:10px 0;padding:10px 15px;background-color:#fff;font-size:14px;font-weight:700;cursor:pointer;border-radius:4px;box-shadow:0 3px 10px #0003;transform:perspective(1px) translateZ(0);transition-duration:.3s;transition-property:box-shadow,transform}ul.side-navs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child{margin-top:0}ul.side-navs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, ul.side-navs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:focus, ul.side-navs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:active{box-shadow:0 3px 10px -7px #00001880;transform:scale(1.03)}ul.side-navs[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background-color:#8b3dff;color:#fff}"]})}return n})();function f(n,c){1&n&&t._UZ(0,"app-single-blog",8),2&n&&t.Q6J("content",c.$implicit)}function v(n,c){if(1&n&&(t.TgZ(0,"div",6),t.YNc(1,f,1,1,"app-single-blog",7),t.qZA()),2&n){const o=t.oxw();t.xp6(1),t.Q6J("ngForOf",o.blogs)}}function x(n,c){1&n&&(t.TgZ(0,"div",9)(1,"h4"),t._uU(2,"No data available for this section."),t.qZA(),t.TgZ(3,"p"),t._uU(4,"Please check other sections."),t.qZA()())}let _=(()=>{class n{constructor(o){this.activatedRoute=o,this.blogs=r.Z.sort((e,i)=>+new Date(i.publishDate)-+new Date(e.publishDate))}ngOnInit(){this.activatedRoute.queryParams.subscribe(o=>{const e=o.tag;this.blogs=e?r.Z.filter(i=>i.tags.includes(e)):r.Z})}static#t=this.\u0275fac=function(e){return new(e||n)(t.Y36(l.gz))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-blog"]],decls:8,vars:2,consts:[[1,"bg-1","blog-container"],[1,"container"],[1,"row"],[1,"col-md-3","my-5","side-nav"],["class","col-md-9 my-5 blogs",4,"ngIf","ngIfElse"],["other_content",""],[1,"col-md-9","my-5","blogs"],[3,"content",4,"ngFor","ngForOf"],[3,"content"],[1,"col-md-9","my-5","d-flex","justify-content-center","align-items-center","flex-column","no-data"]],template:function(e,i){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"app-blog-side-navigation"),t.qZA(),t.YNc(5,v,2,1,"div",4),t.qZA()()(),t.YNc(6,x,5,0,"ng-template",null,5,t.W1O)),2&e){const g=t.MAs(7);t.xp6(5),t.Q6J("ngIf",i.blogs&&i.blogs.length)("ngIfElse",g)}},dependencies:[s.sg,s.O5,d.N,b],styles:[".blog-container[_ngcontent-%COMP%]{min-height:90vh}.blog-container[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]{background:#fff;margin:0 0 1rem;position:relative;border-radius:7px;padding:1.25rem;box-shadow:0 3px 10px #0003}@media only screen and (max-width: 768px){.blog-container[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]{margin:40px 0 20px!important}.blog-container[_ngcontent-%COMP%]   .blogs[_ngcontent-%COMP%]{margin:10px 0 20px!important;border-top:1px dashed #000;padding-top:30px}}"]})}return n})();var C=a(9333),O=a(9813);let M=(()=>{class n{constructor(){this.path=""}static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-preview-markdown"]],inputs:{path:"path"},decls:1,vars:1,consts:[["lineNumbers","","emoji","","clipboard","",3,"src"]],template:function(e,i){1&e&&t._UZ(0,"markdown",0),2&e&&t.Q6J("src",i.path)},dependencies:[O.lF]})}return n})();var P=a(741);function Z(n,c){if(1&n){const o=t.EpF();t.TgZ(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5)(4,"h1"),t._uU(5),t.qZA(),t.TgZ(6,"button",6),t._uU(7," all blogs "),t.qZA(),t.TgZ(8,"button",7),t.NdJ("click",function(){t.CHM(o);const i=t.oxw();return t.KtG(i.navigateBack())}),t._uU(9," Go back "),t.qZA()(),t.TgZ(10,"div",8),t._UZ(11,"app-tags",9),t.qZA(),t.TgZ(12,"div",10),t._UZ(13,"app-author",11),t.qZA()()(),t.TgZ(14,"div",12)(15,"div",13)(16,"div",4),t._UZ(17,"app-preview-markdown",14),t.qZA()()()()}if(2&n){const o=t.oxw();t.xp6(5),t.Oqu(o.blog.title),t.xp6(6),t.Q6J("tags",o.blog.tags),t.xp6(2),t.Q6J("content",o.blog.author),t.xp6(4),t.Q6J("path","assets/blogs/"+o.blog.URL)}}function y(n,c){1&n&&(t.TgZ(0,"div",2)(1,"div",15)(2,"div",4)(3,"div",5)(4,"h1"),t._uU(5,"Look like you're lost"),t.qZA(),t.TgZ(6,"p",16),t._uU(7,"The page you are looking for is not available!"),t.qZA(),t.TgZ(8,"button",6),t._uU(9," all blogs "),t.qZA()()()()())}const w=[{path:"",component:_},{path:":slug",component:(()=>{class n{constructor(o,e){this.activatedRoute=o,this.location=e,this.blog={},this.inValidBlogSlug=!1}ngOnInit(){this.activatedRoute.params.subscribe(o=>{const e=o.slug,i=r.Z.find(g=>g.slug===e);i?(this.inValidBlogSlug=!1,this.blog=i):this.inValidBlogSlug=!0})}navigateBack(){this.location.back()}static#t=this.\u0275fac=function(e){return new(e||n)(t.Y36(l.gz),t.Y36(s.Ye))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-blog-details"]],decls:3,vars:2,consts:[["class","container-fluid",4,"ngIf","ngIfElse"],["other_content",""],[1,"container-fluid"],[1,"row","blog-details","bg"],[1,"col-12"],[1,"blog-heading"],["type","button","routerLink","/blogs",1,"btn","custom-btn","action-btn"],["type","button",1,"btn","btn-outline-primary","btn-outline-theme","action-btn",3,"click"],[1,"tag"],[3,"tags"],[1,"author"],[3,"content"],[1,"blog-content"],[1,"row","my-5"],[3,"path"],[1,"row","blog-details","bg-2"],[1,"mt-3"]],template:function(e,i){if(1&e&&(t.YNc(0,Z,18,4,"div",0),t.YNc(1,y,10,0,"ng-template",null,1,t.W1O)),2&e){const g=t.MAs(2);t.Q6J("ngIf",!i.inValidBlogSlug)("ngIfElse",g)}},dependencies:[s.O5,l.rH,C.J,M,P.o],styles:[".blog-content[_ngcontent-%COMP%]{margin:0 40px}.blog-details[_ngcontent-%COMP%]{height:50vh;min-height:360px;position:relative}.blog-details[_ngcontent-%COMP%]   .blog-heading[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:800px;width:92%;text-align:center}.blog-details[_ngcontent-%COMP%]   .blog-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3rem!important;letter-spacing:3px;color:#000;font-weight:800;font-family:Open Sans,sans-serif;margin:0!important;line-height:1.25}.blog-details[_ngcontent-%COMP%]   .blog-heading[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]{margin:48px 16px 8px}.blog-details[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]{position:absolute;bottom:5px;left:30px}.blog-details[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]{position:absolute;bottom:5px;right:30px}@media only screen and (max-width: 710px){.blog-details[_ngcontent-%COMP%]{min-height:300px;height:30vh}.blog-details[_ngcontent-%COMP%]   .blog-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px!important}.blog-details[_ngcontent-%COMP%]   .blog-heading[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]{margin:30px 16px 0;font-size:12px;padding:7px 16px}}@media only screen and (max-width: 820px){.blog-content[_ngcontent-%COMP%]{margin:0 20px}}"]})}return n})()}];let B=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275mod=t.oAB({type:n});static#o=this.\u0275inj=t.cJS({imports:[l.Bz.forChild(w),l.Bz]})}return n})();var T=a(6208);let A=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275mod=t.oAB({type:n});static#o=this.\u0275inj=t.cJS({imports:[s.ez,B,T.m]})}return n})()}}]);