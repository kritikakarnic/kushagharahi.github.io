webpackJsonp([0],Array(45).concat([function(e,t,r){function n(e){return r(s(e))}function s(e){var t=i[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var i={"./BlogComponent.vue":70,"./BlogPostComponent.vue":71,"./ContactComponent.vue":72,"./HomeComponent.vue":73,"./NavComponent.vue":5,"./NotFoundComponent.vue":74,"./ProjectsComponent.vue":75,"./ResumeComponent.vue":76,"./SocialIconComponent.vue":16};n.keys=function(){return Object.keys(i)},n.resolve=s,e.exports=n,n.id=45},,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(92),s=r.n(n);t.default={data:function(){return{posts:s.a}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(68),s=r.n(n),i=r(91);t.default={data:function(){return{compiledMarkdown:""}},created:function(){var e=i("./"+this.$route.query.name+".md");this.$route.meta.title=this.$route.query.title,this.compiledMarkdown=s()(e,{sanitize:!0})}}},function(e,t){e.exports={data:function(){return{message:"",formData:{fName:"",lName:"",_replyto:"",body:"",validation:""},formDisabled:!1,error:!1,submit:function(){var e=this;if("blue"!==this.formData.validation.toLowerCase())this.error=!0,this.message="Invalid answer to spam dectection message.";else{this.message="",this.error=!1;var t={Email:this.formData._replyto,Message:this.formData.body,Name:this.formData.fName+" "+this.formData.lName};this.$http.post("https://formspree.io/kushagharahi@gmail.com",t,{"Access-Control-Allow-Origin":!0}).then(function(t){e.message="Form submitted. I look forward to connecting with you!",e.formDisabled=!0},function(t){e.error=!0,e.message="There was an error processing the form, please try again or contact the webmaster @ kushagharahi(dot)gmail.com. Error: ",e.message+=t})}}}}}},function(e,t){},function(e,t){},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(93),s=r.n(n),i=r(94);t.default={data:function(){return{projects:s.a,noPictureRes:i("./somecode.png"),pictureDir:function(e){return i("./"+e)}}}}},function(e,t){e.exports={data:function(){return{resumeUrl:"https://docs.google.com/document/d/1vnGrGLXtvXVZ9E_Ih02o7cxjp1oxX_wi3Vg2n-m7aXs/pub?embedded=true"}}}},function(e,t,r){t=e.exports=r(0)(void 0),t.push([e.i,".project{display:inline-block;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);width:100%;margin-bottom:20px;padding-top:10px}.projectContent,.projectPreview{display:inline-block;vertical-align:middle}.projectPreview{padding:10px}.projectImg{width:210px;height:105px}.projectContent{padding:10px;max-width:595px}",""])},function(e,t,r){t=e.exports=r(0)(void 0),t.push([e.i,"",""])},function(e,t,r){t=e.exports=r(0)(void 0),t.push([e.i,"",""])},function(e,t,r){t=e.exports=r(0)(void 0),t.push([e.i,".docIFrame{width:100%;height:1066px;margin:auto;border:1px solid #d3d3d3}@media screen and (max-width:850px){.docIFrame{display:none}}",""])},function(e,t,r){t=e.exports=r(0)(void 0),t.push([e.i,"",""])},function(e,t,r){t=e.exports=r(0)(void 0),t.push([e.i,"",""])},function(e,t,r){t=e.exports=r(0)(void 0),t.push([e.i,".form-group{padding:5px}.form-message{width:100%;height:200px}.form-input{width:200px;height:20px}.form-email{width:300px;height:20px}",""])},function(e,t){e.exports="imgs/dmsaddtocal.png?30cee5d9f7c492b5d2ab344067685478"},function(e,t){e.exports="imgs/kinectv2.jpg?d050ae654124f6adfee38d56efca6455"},function(e,t){e.exports="imgs/kushame.png?de7383ae223ad48f3e9e0ef95d77447c"},function(e,t){e.exports="imgs/luckyse7ens.png?72ed374ef05577c332d59fec2ff45d49"},function(e,t){e.exports="imgs/somecode.png?3ac7ed970e773b1bdb5fdc9f1df85cc1"},function(e,t){e.exports="imgs/youtubenotgif.png?4a588c13f6efd4221f70c1788fe10d89"},function(e,t,r){(function(t){(function(){function t(e){this.tokens=[],this.tokens.links={},this.options=e||h.defaults,this.rules=c.normal,this.options.gfm&&(this.options.tables?this.rules=c.tables:this.rules=c.gfm)}function r(e,t){if(this.options=t||h.defaults,this.links=e,this.rules=p.normal,this.renderer=this.options.renderer||new n,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.options.breaks?this.rules=p.breaks:this.rules=p.gfm:this.options.pedantic&&(this.rules=p.pedantic)}function n(e){this.options=e||{}}function s(e){this.tokens=[],this.token=null,this.options=e||h.defaults,this.options.renderer=this.options.renderer||new n,this.renderer=this.options.renderer,this.renderer.options=this.options}function i(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function o(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g,function(e,t){return t=t.toLowerCase(),"colon"===t?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}function a(e,t){return e=e.source,t=t||"",function r(n,s){return n?(s=s.source||s,s=s.replace(/(^|[^\[])\^/g,"$1"),e=e.replace(n,s),r):new RegExp(e,t)}}function l(){}function u(e){for(var t,r,n=1;n<arguments.length;n++){t=arguments[n];for(r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}function h(e,r,n){if(n||"function"==typeof r){n||(n=r,r=null),r=u({},h.defaults,r||{});var o,a,l=r.highlight,c=0;try{o=t.lex(e,r)}catch(e){return n(e)}a=o.length;var p=function(e){if(e)return r.highlight=l,n(e);var t;try{t=s.parse(o,r)}catch(t){e=t}return r.highlight=l,e?n(e):n(null,t)};if(!l||l.length<3)return p();if(delete r.highlight,!a)return p();for(;c<o.length;c++)!function(e){"code"!==e.type?--a||p():l(e.text,e.lang,function(t,r){return t?p(t):null==r||r===e.text?--a||p():(e.text=r,e.escaped=!0,void(--a||p()))})}(o[c])}else try{return r&&(r=u({},h.defaults,r)),s.parse(t.lex(e,r),r)}catch(e){if(e.message+="\nPlease report this to https://github.com/chjj/marked.",(r||h.defaults).silent)return"<p>An error occured:</p><pre>"+i(e.message+"",!0)+"</pre>";throw e}}var c={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:l,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:l,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:l,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};c.bullet=/(?:[*+-]|\d+\.)/,c.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,c.item=a(c.item,"gm")(/bull/g,c.bullet)(),c.list=a(c.list)(/bull/g,c.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+c.def.source+")")(),c.blockquote=a(c.blockquote)("def",c.def)(),c._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b",c.html=a(c.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,c._tag)(),c.paragraph=a(c.paragraph)("hr",c.hr)("heading",c.heading)("lheading",c.lheading)("blockquote",c.blockquote)("tag","<"+c._tag)("def",c.def)(),c.normal=u({},c),c.gfm=u({},c.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),c.gfm.paragraph=a(c.paragraph)("(?!","(?!"+c.gfm.fences.source.replace("\\1","\\2")+"|"+c.list.source.replace("\\1","\\3")+"|")(),c.tables=u({},c.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),t.rules=c,t.lex=function(e,r){return new t(r).lex(e)},t.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},t.prototype.token=function(e,t,r){for(var n,s,i,o,a,l,u,h,p,e=e.replace(/^ +$/gm,"");e;)if((i=this.rules.newline.exec(e))&&(e=e.substring(i[0].length),i[0].length>1&&this.tokens.push({type:"space"})),i=this.rules.code.exec(e))e=e.substring(i[0].length),i=i[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?i:i.replace(/\n+$/,"")});else if(i=this.rules.fences.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"code",lang:i[2],text:i[3]||""});else if(i=this.rules.heading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:i[1].length,text:i[2]});else if(t&&(i=this.rules.nptable.exec(e))){for(e=e.substring(i[0].length),l={type:"table",header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3].replace(/\n$/,"").split("\n")},h=0;h<l.align.length;h++)/^ *-+: *$/.test(l.align[h])?l.align[h]="right":/^ *:-+: *$/.test(l.align[h])?l.align[h]="center":/^ *:-+ *$/.test(l.align[h])?l.align[h]="left":l.align[h]=null;for(h=0;h<l.cells.length;h++)l.cells[h]=l.cells[h].split(/ *\| */);this.tokens.push(l)}else if(i=this.rules.lheading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:"="===i[2]?1:2,text:i[1]});else if(i=this.rules.hr.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"hr"});else if(i=this.rules.blockquote.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"blockquote_start"}),i=i[0].replace(/^ *> ?/gm,""),this.token(i,t,!0),this.tokens.push({type:"blockquote_end"});else if(i=this.rules.list.exec(e)){for(e=e.substring(i[0].length),o=i[2],this.tokens.push({type:"list_start",ordered:o.length>1}),i=i[0].match(this.rules.item),n=!1,p=i.length,h=0;h<p;h++)l=i[h],u=l.length,l=l.replace(/^ *([*+-]|\d+\.) +/,""),~l.indexOf("\n ")&&(u-=l.length,l=this.options.pedantic?l.replace(/^ {1,4}/gm,""):l.replace(new RegExp("^ {1,"+u+"}","gm"),"")),this.options.smartLists&&h!==p-1&&(a=c.bullet.exec(i[h+1])[0],o===a||o.length>1&&a.length>1||(e=i.slice(h+1).join("\n")+e,h=p-1)),s=n||/\n\n(?!\s*$)/.test(l),h!==p-1&&(n="\n"===l.charAt(l.length-1),s||(s=n)),this.tokens.push({type:s?"loose_item_start":"list_item_start"}),this.token(l,!1,r),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"})}else if(i=this.rules.html.exec(e))e=e.substring(i[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===i[1]||"script"===i[1]||"style"===i[1]),text:i[0]});else if(!r&&t&&(i=this.rules.def.exec(e)))e=e.substring(i[0].length),this.tokens.links[i[1].toLowerCase()]={href:i[2],title:i[3]};else if(t&&(i=this.rules.table.exec(e))){for(e=e.substring(i[0].length),l={type:"table",header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3].replace(/(?: *\| *)?\n$/,"").split("\n")},h=0;h<l.align.length;h++)/^ *-+: *$/.test(l.align[h])?l.align[h]="right":/^ *:-+: *$/.test(l.align[h])?l.align[h]="center":/^ *:-+ *$/.test(l.align[h])?l.align[h]="left":l.align[h]=null;for(h=0;h<l.cells.length;h++)l.cells[h]=l.cells[h].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(l)}else if(t&&(i=this.rules.paragraph.exec(e)))e=e.substring(i[0].length),this.tokens.push({type:"paragraph",text:"\n"===i[1].charAt(i[1].length-1)?i[1].slice(0,-1):i[1]});else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"text",text:i[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var p={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:l,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:l,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};p._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,p._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,p.link=a(p.link)("inside",p._inside)("href",p._href)(),p.reflink=a(p.reflink)("inside",p._inside)(),p.normal=u({},p),p.pedantic=u({},p.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),p.gfm=u({},p.normal,{escape:a(p.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:a(p.text)("]|","~]|")("|","|https?://|")()}),p.breaks=u({},p.gfm,{br:a(p.br)("{2,}","*")(),text:a(p.gfm.text)("{2,}","*")()}),r.rules=p,r.output=function(e,t,n){return new r(t,n).output(e)},r.prototype.output=function(e){for(var t,r,n,s,o="";e;)if(s=this.rules.escape.exec(e))e=e.substring(s[0].length),o+=s[1];else if(s=this.rules.autolink.exec(e))e=e.substring(s[0].length),"@"===s[2]?(r=":"===s[1].charAt(6)?this.mangle(s[1].substring(7)):this.mangle(s[1]),n=this.mangle("mailto:")+r):(r=i(s[1]),n=r),o+=this.renderer.link(n,null,r);else if(this.inLink||!(s=this.rules.url.exec(e))){if(s=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(s[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(s[0])&&(this.inLink=!1),e=e.substring(s[0].length),o+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):i(s[0]):s[0];else if(s=this.rules.link.exec(e))e=e.substring(s[0].length),this.inLink=!0,o+=this.outputLink(s,{href:s[2],title:s[3]}),this.inLink=!1;else if((s=this.rules.reflink.exec(e))||(s=this.rules.nolink.exec(e))){if(e=e.substring(s[0].length),t=(s[2]||s[1]).replace(/\s+/g," "),!(t=this.links[t.toLowerCase()])||!t.href){o+=s[0].charAt(0),e=s[0].substring(1)+e;continue}this.inLink=!0,o+=this.outputLink(s,t),this.inLink=!1}else if(s=this.rules.strong.exec(e))e=e.substring(s[0].length),o+=this.renderer.strong(this.output(s[2]||s[1]));else if(s=this.rules.em.exec(e))e=e.substring(s[0].length),o+=this.renderer.em(this.output(s[2]||s[1]));else if(s=this.rules.code.exec(e))e=e.substring(s[0].length),o+=this.renderer.codespan(i(s[2],!0));else if(s=this.rules.br.exec(e))e=e.substring(s[0].length),o+=this.renderer.br();else if(s=this.rules.del.exec(e))e=e.substring(s[0].length),o+=this.renderer.del(this.output(s[1]));else if(s=this.rules.text.exec(e))e=e.substring(s[0].length),o+=this.renderer.text(i(this.smartypants(s[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else e=e.substring(s[0].length),r=i(s[1]),n=r,o+=this.renderer.link(n,null,r);return o},r.prototype.outputLink=function(e,t){var r=i(t.href),n=t.title?i(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(r,n,this.output(e[1])):this.renderer.image(r,n,i(e[1]))},r.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},r.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,r="",n=e.length,s=0;s<n;s++)t=e.charCodeAt(s),Math.random()>.5&&(t="x"+t.toString(16)),r+="&#"+t+";";return r},n.prototype.code=function(e,t,r){if(this.options.highlight){var n=this.options.highlight(e,t);null!=n&&n!==e&&(r=!0,e=n)}return t?'<pre><code class="'+this.options.langPrefix+i(t,!0)+'">'+(r?e:i(e,!0))+"\n</code></pre>\n":"<pre><code>"+(r?e:i(e,!0))+"\n</code></pre>"},n.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},n.prototype.html=function(e){return e},n.prototype.heading=function(e,t,r){return"<h"+t+' id="'+this.options.headerPrefix+r.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n"},n.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},n.prototype.list=function(e,t){var r=t?"ol":"ul";return"<"+r+">\n"+e+"</"+r+">\n"},n.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},n.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},n.prototype.table=function(e,t){return"<table>\n<thead>\n"+e+"</thead>\n<tbody>\n"+t+"</tbody>\n</table>\n"},n.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},n.prototype.tablecell=function(e,t){var r=t.header?"th":"td";return(t.align?"<"+r+' style="text-align:'+t.align+'">':"<"+r+">")+e+"</"+r+">\n"},n.prototype.strong=function(e){return"<strong>"+e+"</strong>"},n.prototype.em=function(e){return"<em>"+e+"</em>"},n.prototype.codespan=function(e){return"<code>"+e+"</code>"},n.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},n.prototype.del=function(e){return"<del>"+e+"</del>"},n.prototype.link=function(e,t,r){if(this.options.sanitize){try{var n=decodeURIComponent(o(e)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return""}if(0===n.indexOf("javascript:")||0===n.indexOf("vbscript:"))return""}var s='<a href="'+e+'"';return t&&(s+=' title="'+t+'"'),s+=">"+r+"</a>"},n.prototype.image=function(e,t,r){var n='<img src="'+e+'" alt="'+r+'"';return t&&(n+=' title="'+t+'"'),n+=this.options.xhtml?"/>":">"},n.prototype.text=function(e){return e},s.parse=function(e,t,r){return new s(t,r).parse(e)},s.prototype.parse=function(e){this.inline=new r(e.links,this.options,this.renderer),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},s.prototype.next=function(){return this.token=this.tokens.pop()},s.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},s.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},s.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,r,n,s="",i="";for(r="",e=0;e<this.token.header.length;e++)({header:!0,align:this.token.align[e]}),r+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(s+=this.renderer.tablerow(r),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],r="",n=0;n<t.length;n++)r+=this.renderer.tablecell(this.inline.output(t[n]),{header:!1,align:this.token.align[n]});i+=this.renderer.tablerow(r)}return this.renderer.table(s,i);case"blockquote_start":for(var i="";"blockquote_end"!==this.next().type;)i+=this.tok();return this.renderer.blockquote(i);case"list_start":for(var i="",o=this.token.ordered;"list_end"!==this.next().type;)i+=this.tok();return this.renderer.list(i,o);case"list_item_start":for(var i="";"list_item_end"!==this.next().type;)i+="text"===this.token.type?this.parseText():this.tok();return this.renderer.listitem(i);case"loose_item_start":for(var i="";"list_item_end"!==this.next().type;)i+=this.tok();return this.renderer.listitem(i);case"html":var a=this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text);return this.renderer.html(a);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}},l.exec=l,h.options=h.setOptions=function(e){return u(h.defaults,e),h},h.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,sanitizer:null,mangle:!0,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",renderer:new n,xhtml:!1},h.Parser=s,h.parser=s.parse,h.Renderer=n,h.Lexer=t,h.lexer=t.lex,h.InlineLexer=r,h.inlineLexer=r.output,h.parse=h,e.exports=h}).call(function(){return this||("undefined"!=typeof window?window:t)}())}).call(t,r(3))},function(e,t){e.exports="## Hello World\r\n\r\nThis is my first blog post. \r\n\r\n\r\n\r\n--Kusha\r\n"},function(e,t,r){r(88);var n=r(1)(r(48),r(81),null,null);e.exports=n.exports},function(e,t,r){r(85);var n=r(1)(r(49),r(78),null,null);e.exports=n.exports},function(e,t,r){r(90);var n=r(1)(r(50),r(83),null,null);e.exports=n.exports},function(e,t,r){r(89);var n=r(1)(r(51),r(82),null,null);e.exports=n.exports},function(e,t,r){r(86);var n=r(1)(r(52),r(79),null,null);e.exports=n.exports},function(e,t,r){r(84);var n=r(1)(r(53),r(77),null,null);e.exports=n.exports},function(e,t,r){r(87);var n=r(1)(r(54),r(80),null,null);e.exports=n.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",e._l(e.projects,function(t){return t.hide?e._e():r("div",{staticClass:"project",staticStyle:{"background-color":"#FFFFFF"}},[r("div",{staticClass:"projectPreview",staticStyle:{"background-color":"#FFFFFF"}},[""!=t.imgPreview?r("img",{staticClass:"projectImg",attrs:{src:e.pictureDir(t.imgPreview)}}):e._e(),e._v(" "),""==t.imgPreview?r("img",{staticClass:"projectImg",attrs:{src:e.noPictureRes}}):e._e()]),e._v(" "),r("div",{staticClass:"projectContent",staticStyle:{"background-color":"#FFFFFF"}},[r("h2",[r("strong",[e._v(e._s(t.title))])]),e._v(" "),e._l(t.urls,function(n,s){return r("span",[r("a",{attrs:{target:"_blank",rel:"noopener",href:n.url}},[e._v(e._s(n.desc))]),t.urls.length>1&&s!=t.urls.length-1?r("span",[e._v(" | ")]):e._e()])}),e._v(" "),r("p",[e._v(e._s(t.blurb))]),e._v(" "),r("p",[e._v("Tech used: "),e._l(t.techUsed,function(n,s){return r("span",[e._v(e._s(n.name)),t.techUsed.length>1&&s!=t.techUsed.length-1?r("span",[e._v(" | ")]):e._e()])})],2)],2)])}))},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{domProps:{innerHTML:e._s(e.compiledMarkdown)}}),e._v(" "),r("a",{attrs:{target:"_blank",rel:"noopener",href:"https://github.com/kushagharahi/kushagharahi.github.io/blob/dev/src/models/blog/posts/"+e.$route.query.name+".md"}},[e._v("Suggest a change to this post here! (requires a GitHub account)")])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("404 not found")]),e._v(" "),r("router-link",{attrs:{to:"/",exact:""}},[e._v("Go to home?")])],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("p",[e._v("I work full time currently at "),r("a",{attrs:{href:"http://cagene.com",target:"_blank",rel:"noopener"}},[e._v("CancerGene Connect")]),e._v(" but am always interested in hearing what offers are available. Feel free to send inquiries "),r("router-link",{attrs:{to:"contact"}},[e._v("here.")])],1),e._v(" "),r("iframe",{staticClass:"docIFrame",attrs:{frameborder:"0",src:e.resumeUrl}},[e._v("Your browser does not support inline frames. Download the PDF down below.")]),e._v(" "),r("div",{staticClass:"clearfix"}),e._v(" "),r("br"),e._v(" "),r("a",{attrs:{href:"https://docs.google.com/document/d/1vnGrGLXtvXVZ9E_Ih02o7cxjp1oxX_wi3Vg2n-m7aXs/export?format=pdf"}},[e._v("Download as PDF")])],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Blog")]),e._v(" "),e._l(e.posts,function(t){return r("div",[r("h2",[r("router-link",{attrs:{to:"/blog/post?name="+t.name+"&title="+t.title}},[e._v(e._s(t.title))])],1),e._v(" "),r("p",[e._v(e._s(t.subtitle))]),e._v(" "),r("p",[e._v("Date Posted: "+e._s(t.date_posted)+" ")])])})],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("Kusha Gharahi")]),e._v(" "),r("p",[e._v("Full Time - Full Stack Developer "),r("br"),e._v(" Full Time Student Pursuing Computer Science Degree at UT Dallas "),r("br"),e._v(" Dallas,\r\n        TX\r\n    ")]),e._v(" "),r("p",[e._v("Hi, I'm Kusha, a developer building "),r("a",{attrs:{href:"/projects"}},[e._v("really cool stuff.")]),e._v(" You can check out my "),r("a",{attrs:{href:"/resume"}},[e._v("resume")]),e._v("        or "),r("a",{attrs:{href:"/contact/"}},[e._v("contact me")]),e._v(" as well.")]),e._v(" "),r("hr"),e._v(" "),r("h2",[e._v("Skill Set")]),e._v(" "),r("span",[e._v("Languages:    C# | Java | JavaScript | CSS/HTML | Sass ")]),e._v(" "),r("br"),e._v(" "),r("span",[e._v("Frameworks:   AngularJS | ASP.NET MVC | WebAPI | VueJs | NodeJS")]),e._v(" "),r("br"),e._v(" "),r("span",[e._v("Tools:        Git | Team Foundation Server (TFS) | npm | Gulp | Webpack")]),e._v(" "),r("br"),e._v(" "),r("hr"),e._v(" "),r("h2",[e._v("About this website")]),e._v(" "),r("p",[e._v("Built with VueJs 2.0, my goal was to keep the site completely static and hosted on GitHub pages")]),e._v(" "),r("a",{attrs:{target:"_blank",rel:"noopener",href:"https://github.com/kushagharahi/kushagharahi.github.io"}},[e._v("GitHub repo")]),e._v(" |\r\n    "),r("a",{attrs:{target:"_blank",rel:"noopener",href:"https://trello.com/b/kTT3uS5b/kusha-me"}},[e._v("Trello board/backlog")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("p",[e._v("Feel free to drop me a line using the form below! I generally will reply within 2 business days. I look forward to connecting with you.")]),e._v(" "),r("form",{attrs:{name:"contactForm"},on:{submit:function(t){t.preventDefault(),e.submit()}}},[e._m(0),e._v(" "),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.fName,expression:"formData.fName"}],staticClass:"form-input",attrs:{name:"fName",disabled:e.formDisabled,required:""},domProps:{value:e.formData.fName},on:{input:function(t){t.target.composing||(e.formData.fName=t.target.value)}}})]),e._v(" "),e._m(1),e._v(" "),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.lName,expression:"formData.lName"}],staticClass:"form-input",attrs:{name:"lName",disabled:e.formDisabled,required:""},domProps:{value:e.formData.lName},on:{input:function(t){t.target.composing||(e.formData.lName=t.target.value)}}})]),e._v(" "),e._m(2),e._v(" "),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.formData._replyto,expression:"formData._replyto"}],staticClass:"form-email",attrs:{type:"email",disabled:e.formDisabled,required:"",name:"_replyto"},domProps:{value:e.formData._replyto},on:{input:function(t){t.target.composing||(e.formData._replyto=t.target.value)}}})]),e._v(" "),e._m(3),e._v(" "),r("div",{staticClass:"form-group"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.formData.body,expression:"formData.body"}],staticClass:"form-message",attrs:{name:"body",disabled:e.formDisabled,required:""},domProps:{value:e.formData.body},on:{input:function(t){t.target.composing||(e.formData.body=t.target.value)}}})]),e._v(" "),e._m(4),e._v(" "),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.validation,expression:"formData.validation"}],staticClass:"form-input",attrs:{name:"validation",disabled:e.formDisabled,required:""},domProps:{value:e.formData.validation},on:{input:function(t){t.target.composing||(e.formData.validation=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"form-group"},[r("input",{attrs:{type:"submit",value:"Send",disabled:e.formDisabled}})])]),e._v(" "),r("p",{class:{errorText:e.error}},[e._v(e._s(e.message))])])},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"fName"}},[e._v("First Name:")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"lName"}},[e._v("Last Name:")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"_replyto"}},[e._v("Email:")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"body"}},[e._v("Message:")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"validation"}},[e._v("What color is the sky on a clear day?")])])}]}},function(e,t,r){var n=r(55);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(2)("0b1472aa",n,!0)},function(e,t,r){var n=r(56);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(2)("7662a236",n,!0)},function(e,t,r){var n=r(57);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(2)("28dc3f09",n,!0)},function(e,t,r){var n=r(58);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(2)("633da5d7",n,!0)},function(e,t,r){var n=r(59);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(2)("6cd7c22f",n,!0)},function(e,t,r){var n=r(60);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(2)("33861d04",n,!0)},function(e,t,r){var n=r(61);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(2)("7329bb91",n,!0)},function(e,t,r){function n(e){return r(s(e))}function s(e){var t=i[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var i={"./hello_world.md":69};n.keys=function(){return Object.keys(i)},n.resolve=s,e.exports=n,n.id=91},function(e,t){e.exports=[{title:"First Blog Post",subtitle:"My 'Hello World' post",name:"hello_world",date_posted:"April 2nd 2016"}]},function(e,t){e.exports=[{title:"kusha.me - My Portfolio Website",blurb:"The website you are currently on.",imgPreview:"kushame.png",urls:[{url:"https://github.com/kushagharahi/kushagharahi.github.io",desc:"GitHub"},{url:"http://kusha.me/",desc:"kusha.me (recursive loop! don't press!)"}],techUsed:[{name:"VueJs 2.0"},{name:"Vue Router"},{name:"Vue Resource"},{name:"JavaScript/Es5"},{name:"HTML/CSS3"},{name:"Sass"},{name:"Webpack"}]},{title:"MoodMusic - Built with IBM Watson",blurb:"A mood analyzing chatbot that uses IBM Watson's Natural Language Classifier to figure out a user's mood and searches our database of music classified by mood using IBM Watson's tone analyzer to generate a playlist of music of mood.",imgPreview:"",urls:[{url:"https://github.com/kushagharahi/MoodMusic",desc:"GitHub"}],techUsed:[{name:"NodeJS"},{name:"PostgreSQL"},{name:"IBM Watson APIs"},{name:"Twitter's Bootstrap"}]},{title:"DMSAddToCal - Chrome Extention",blurb:"A little extension to add a add to calendar button on the individual http://dallasmakerspace.org/ event pages.",imgPreview:"dmsaddtocal.png",urls:[{url:"https://github.com/kushagharahi/DMSAddToCal",desc:"GitHub"},{url:"https://chrome.google.com/webstore/detail/add-dallas-makerspace-eve/ggamfjdgahgfkfdfjcoajoflbefhlbga",desc:"Chrome Web Store"}],techUsed:[{name:"JavaScript"}]},{title:"YoutubeNotGif - Chrome Extention",blurb:"Chrome extention that marks all youtube links as [YOUTUBE] in bold and hot pink on Reddit.",imgPreview:"youtubenotgif.png",urls:[{url:"https://github.com/kushagharahi/YoutubeNotGif",desc:"GitHub"},{url:"https://chrome.google.com/webstore/detail/youtube-not-gif/aadpjpjgnjejmneflbdcckablmkjgken",desc:"Chrome Web Store"}],techUsed:[{name:"JavaScript"}]},{title:"[OLD][v1]kusha.me - My Portfolio Website",blurb:"v1 of kusha.me",imgPreview:"kushame.png",urls:[{url:"https://github.com/kushagharahi/kushagharahi.github.io/tree/AngularTS",desc:"GitHub"}],techUsed:[{name:"AngularJS 1"},{name:"TypeScript"},{name:"JavaScript"},{name:"HTML/CSS3"},{name:"Sass"},{name:"Bower/NPM"},{name:"Gulp"}]},{title:"A Project Management App",blurb:"A project management application which allows you to create boards for projects, tasks within those boards, and move tasks to different stages of development. Made for my Human Computer Interactions as final project.",imgPreview:"",urls:[{url:"https://github.com/kushagharahi/ProjectManagement",desc:"GitHub"},{url:"http://taskerhci.azurewebsites.net",desc:"Azure Live Demo Link"}],techUsed:[{name:"ASP.Net MVC 5"},{name:"SQL Server 2013"},{name:"Razor/HTML/CSS"},{name:"JavaScript"}]},{title:"Kinect-v2 Test Application",blurb:"This program was built to familiarize myself with the Kinect v2 C# SDK. The program dectects your palms and adds a ball with collisons ablities. Realistic 2D ball physics ported from 'Super Fill Up' game.",imgPreview:"kinectv2.jpg",urls:[{url:"https://github.com/kushagharahi/Kinect-v2-Testing",desc:"GitHub"}],techUsed:[{name:"C#"},{name:"Kinect v2 SDK"},{name:"WPF/XAML"}]},{title:"Vectors Library in Java",blurb:"Just a simple vector math library for reference and easy porting.",imgPreview:"",urls:[{url:"https://github.com/kushagharahi/Vectors",desc:"GitHub"}],techUsed:[{name:"Java"}]},{title:"Super Fill Up - 2D Ball physics simulation",blurb:"Classic Super Fill Up game written in Java for project in high school senior computer science. Notable features: realistic ball physics and collisions.",imgPreview:"",urls:[{url:"https://github.com/kushagharahi/Super-Fill-up",desc:"GitHub"}],techUsed:[{name:"Java"}]},{title:"Speed Card Game",hide:!0,blurb:"Speed is a game for two or more players of the shedding family of card games, in which each player tries to get rid of all of his or her cards. Local Multiplayer only, developed in java. Junior year of high school Computer Science project.",imgPreview:"",urls:[{url:"https://github.com/kushagharahi/Speed",desc:"GitHub"}],techUsed:[{name:"Java"}]},{title:"LuckySe7ens - Dice Game",blurb:"Under Over 7 dice game created for probability project in high school sophomore math class. Features simple animations using Java. The object of the game is to predict whether the dice will roll to a total of under 7 or over 7 or at 7.",imgPreview:"luckyse7ens.png",urls:[{url:"https://github.com/kushagharahi/LuckySe7ens",desc:"GitHub"}],techUsed:[{name:"Java"}]}]},function(e,t,r){function n(e){return r(s(e))}function s(e){var t=i[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var i={"./dmsaddtocal.png":62,"./kinectv2.jpg":63,"./kushame.png":64,"./luckyse7ens.png":65,"./somecode.png":66,"./youtubenotgif.png":67};n.keys=function(){return Object.keys(i)},n.resolve=s,e.exports=n,n.id=94}]));