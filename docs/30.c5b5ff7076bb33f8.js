"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[30],{9030:(U,d,a)=>{a.r(d),a.d(d,{BlogModule:()=>S});var g=a(6814),r=a(151),p=a(772),t=a(5879),m=a(7992),u=a(1818),h=a(4347);const f=function(e){return{active:e}};function b(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"li",2),t.NdJ("click",function(){const l=t.CHM(n).$implicit,c=t.oxw();return t.KtG(c.navigate(l))}),t._uU(1),t.qZA()}if(2&e){const n=s.$implicit,o=t.oxw();t.Q6J("ngClass",t.VKq(2,f,n.route===o.active)),t.xp6(1),t.hij(" ",n.name," ")}}let _=(()=>{class e{constructor(n,o){this.router=n,this.activatedRoute=o,this.navs=h.q,this.active=""}ngOnInit(){this.activatedRoute.queryParams.subscribe(n=>{this.active=n&&n.category?n.category:""})}navigate(n){n&&n.route?this.router.navigate(["/blogs"],{queryParams:{category:n.route}}):this.router.navigate(["/blogs"])}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(r.F0),t.Y36(r.gz))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-blog-side-navigation"]],decls:2,vars:1,consts:[[1,"side-navs"],[3,"ngClass","click",4,"ngFor","ngForOf"],[3,"ngClass","click"]],template:function(o,i){1&o&&(t.TgZ(0,"ul",0),t.YNc(1,b,2,4,"li",1),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngForOf",i.navs))},dependencies:[g.mk,g.sg],styles:["ul.side-navs[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}ul.side-navs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:10px 0;padding:10px 15px;background-color:#fff;font-size:14px;font-weight:700;cursor:pointer;border-radius:4px;box-shadow:0 3px 10px #0003;transform:perspective(1px) translateZ(0);transition-duration:.3s;transition-property:box-shadow,transform}ul.side-navs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child{margin-top:0}ul.side-navs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, ul.side-navs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:focus, ul.side-navs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:active{box-shadow:0 3px 10px -7px #000;transform:scale(1.03)}ul.side-navs[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background-color:#9400d3;color:#fff}"]})}return e})();function v(e,s){1&e&&t._UZ(0,"app-single-blog",9),2&e&&t.Q6J("content",s.$implicit)}function x(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"div",10)(1,"app-pagination",11),t.NdJ("selectedPage",function(i){t.CHM(n);const l=t.oxw(2);return t.KtG(l.getFilteredBlog(i))}),t.qZA()()}if(2&e){const n=t.oxw(2);t.xp6(1),t.Q6J("total",n.blogs.length)("pageSize",n.pageSize)}}function C(e,s){if(1&e&&(t.TgZ(0,"div",6),t.YNc(1,v,1,1,"app-single-blog",7),t.YNc(2,x,2,2,"div",8),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.filteredBlogs),t.xp6(1),t.Q6J("ngIf",n.blogs&&n.blogs.length>n.pageSize)}}function O(e,s){1&e&&(t.TgZ(0,"div",12)(1,"h4"),t._uU(2,"No data available for this section."),t.qZA(),t.TgZ(3,"p"),t._uU(4,"Please check other sections."),t.qZA()())}let M=(()=>{class e{constructor(n){this.activatedRoute=n,this.blogs=p.Z.sort((o,i)=>+new Date(i.publishDate)-+new Date(o.publishDate)),this.filteredBlogs=[],this.pageSize=5,this.pageNumber=1}ngOnInit(){this.activatedRoute.queryParams.subscribe(n=>{const o=n.category,i=n.tag;let l={};switch(l=o?{filter:"category",value:o}:i?{filter:"tag",value:i}:{filter:"",value:""},l.filter){case"category":this.blogs=p.Z.filter(c=>c.category===o);break;case"tag":this.blogs=p.Z.filter(c=>c.tags.includes(i));break;default:this.blogs=p.Z}this.getFilteredBlog(this.pageNumber)})}getFilteredBlog(n){this.pageNumber=n;const o=(this.pageNumber-1)*this.pageSize;this.filteredBlogs=this.blogs.slice(o,o+this.pageSize)}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(r.gz))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-blog"]],decls:8,vars:2,consts:[[1,"bg-1","blog-container"],[1,"container"],[1,"row"],[1,"col-md-3","my-5","side-nav"],["class","col-md-9 my-5 blogs",4,"ngIf","ngIfElse"],["other_content",""],[1,"col-md-9","my-5","blogs"],[3,"content",4,"ngFor","ngForOf"],["class","mt-5",4,"ngIf"],[3,"content"],[1,"mt-5"],[3,"total","pageSize","selectedPage"],[1,"col-md-9","my-5","d-flex","justify-content-center","align-items-center","flex-column","no-data"]],template:function(o,i){if(1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"app-blog-side-navigation"),t.qZA(),t.YNc(5,C,3,2,"div",4),t.qZA()()(),t.YNc(6,O,5,0,"ng-template",null,5,t.W1O)),2&o){const l=t.MAs(7);t.xp6(5),t.Q6J("ngIf",i.filteredBlogs&&i.filteredBlogs.length)("ngIfElse",l)}},dependencies:[g.sg,g.O5,m.N,u.Q,_],styles:[".blog-container[_ngcontent-%COMP%]{min-height:90vh}.blog-container[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]{background:#FFFFFF;margin:0 0 1rem;position:relative;border-radius:7px;padding:1.25rem;box-shadow:0 3px 10px #0000001a}@media only screen and (max-width: 768px){.blog-container[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]{margin:40px 0 20px!important}.blog-container[_ngcontent-%COMP%]   .blogs[_ngcontent-%COMP%]{margin:10px 0 20px!important;border-top:1px dashed #000000;padding-top:30px}}"]})}return e})();var P=a(9333),Z=a(9547),B=a(741),y=a(3453);function T(e,s){if(1&e&&(t.TgZ(0,"li")(1,"a",19),t._uU(2),t.qZA()()),2&e){const n=s.$implicit;t.xp6(1),t.Q6J("routerLink","/blogs/"+n.slug)("title",n.title),t.xp6(1),t.hij(" ",n.title," ")}}function F(e,s){if(1&e&&(t.TgZ(0,"div",17),t._UZ(1,"hr"),t.TgZ(2,"h6"),t._uU(3,"Related Blogs:"),t.qZA(),t.TgZ(4,"ol"),t.YNc(5,T,3,3,"li",18),t.qZA()()),2&e){const n=t.oxw(2);t.xp6(5),t.Q6J("ngForOf",n.relatedBlogs)}}function A(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5)(4,"h1"),t._uU(5),t.qZA(),t.TgZ(6,"button",6),t._uU(7," all blogs "),t.qZA(),t.TgZ(8,"button",7),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.navigateBack())}),t._uU(9," Go back "),t.qZA()(),t.TgZ(10,"div",8),t._UZ(11,"app-category",9)(12,"app-tags",10),t.qZA(),t.TgZ(13,"div",11),t._UZ(14,"app-author",12),t.qZA()()(),t.TgZ(15,"div",13)(16,"div",14)(17,"div",4),t._UZ(18,"app-preview-markdown",15),t.qZA(),t.YNc(19,F,6,1,"div",16),t.qZA()()()}if(2&e){const n=t.oxw();t.xp6(5),t.Oqu(n.blog.title),t.xp6(6),t.Q6J("category",n.blog.category),t.xp6(1),t.Q6J("tags",n.blog.tags),t.xp6(2),t.Q6J("content",n.blog.author),t.xp6(4),t.Q6J("path","assets/blogs/"+n.blog.URL),t.xp6(1),t.Q6J("ngIf",n.relatedBlogs&&n.relatedBlogs.length)}}function w(e,s){1&e&&(t.TgZ(0,"div",2)(1,"div",20)(2,"div",4)(3,"div",5)(4,"h1"),t._uU(5,"Look like you're lost"),t.qZA(),t.TgZ(6,"p",21),t._uU(7,"The page you are looking for is not available!"),t.qZA(),t.TgZ(8,"button",6),t._uU(9," all blogs "),t.qZA()()()()())}const N=[{path:"",component:M},{path:":slug",component:(()=>{class e{constructor(n,o){this.activatedRoute=n,this.location=o,this.blog={},this.inValidBlogSlug=!1,this.relatedBlogs=[]}ngOnInit(){this.activatedRoute.params.subscribe(n=>{const o=n.slug,i=p.Z.find(l=>l.slug===o);if(i)if(this.inValidBlogSlug=!1,this.blog=i,i&&i.related&&i.related.length){const l=i.related;this.relatedBlogs=p.Z.filter(c=>o!==c.slug&&l.includes(c.slug))}else this.relatedBlogs=[];else this.inValidBlogSlug=!0})}navigateBack(){this.location.back()}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(r.gz),t.Y36(g.Ye))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-blog-details"]],decls:3,vars:2,consts:[["class","container-fluid",4,"ngIf","ngIfElse"],["other_content",""],[1,"container-fluid"],[1,"row","blog-details","bg"],[1,"col-12"],[1,"blog-heading"],["type","button","routerLink","/blogs",1,"btn","custom-btn","action-btn"],["type","button",1,"btn","btn-outline-primary","btn-outline-theme","action-btn",3,"click"],[1,"tag","d-flex","align-items-center"],[3,"category"],[3,"tags"],[1,"author"],[3,"content"],[1,"blog-content"],[1,"row","my-5"],[3,"path"],["class","col-12 mt-4 related-blogs",4,"ngIf"],[1,"col-12","mt-4","related-blogs"],[4,"ngFor","ngForOf"],["rel","noopener noreferrer",3,"routerLink","title"],[1,"row","blog-details","bg-2"],[1,"mt-3"]],template:function(o,i){if(1&o&&(t.YNc(0,A,20,6,"div",0),t.YNc(1,w,10,0,"ng-template",null,1,t.W1O)),2&o){const l=t.MAs(2);t.Q6J("ngIf",!i.inValidBlogSlug)("ngIfElse",l)}},dependencies:[g.sg,g.O5,r.rH,P.J,Z.T,B.o,y.m],styles:[".blog-content[_ngcontent-%COMP%]{margin:0 40px}.blog-content[_ngcontent-%COMP%]   .related-blogs[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{padding-left:1rem}.blog-content[_ngcontent-%COMP%]   .related-blogs[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.blog-details[_ngcontent-%COMP%]{height:50vh;min-height:360px;position:relative}.blog-details[_ngcontent-%COMP%]   .blog-heading[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:800px;width:92%;text-align:center}.blog-details[_ngcontent-%COMP%]   .blog-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3rem!important;letter-spacing:3px;color:#000;font-weight:800;font-family:Open Sans,sans-serif;margin:0!important;line-height:1.25}.blog-details[_ngcontent-%COMP%]   .blog-heading[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]{margin:48px 16px 8px}.blog-details[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]{position:absolute;bottom:5px;left:30px}.blog-details[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]{position:absolute;bottom:5px;right:30px}@media only screen and (max-width: 710px){.blog-details[_ngcontent-%COMP%]{min-height:300px;height:30vh}.blog-details[_ngcontent-%COMP%]   .blog-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px!important}.blog-details[_ngcontent-%COMP%]   .blog-heading[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]{margin:30px 16px 0;font-size:12px;padding:7px 16px}}@media only screen and (max-width: 820px){.blog-content[_ngcontent-%COMP%]{margin:0 20px}}"]})}return e})()}];let J=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#n=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[r.Bz.forChild(N),r.Bz]})}return e})();var k=a(6208);let S=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#n=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[g.ez,J,k.m]})}return e})()}}]);