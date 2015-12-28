# ZFRateTeacher
正方教务系统一键评教脚本（JS）
此版本是纯JavaScript版本

也可以参考KK的[JQuery版本](https://ikk.me/archives/default/javascript_autocomplete_jwxt.html)





### 使用说明


zf_rate_teacher.js 的用法是把里面的全部内容复制进浏览器的控制台里面，接着回车


zf_rate_teacher_min.js 只是用function把原来的代码给包了起来，可以像KK的那个脚本一样存进书签里用

[把我拖入书签栏](javascript:(function(){var e,f,g,h,i,j,a=document.getElementById("iframeautoheight"),b=a.contentDocument||a.contentWindow.document,c=b.getElementsByTagName("select"),d=[];for(e=0;e<c.length;e++)c[e].id.indexOf("DataGrid1__")>-1&&d.push(c[e]);for(e=0;e<d.length;e++)for(f=d[e].options,g=Math.floor(Math.random()*d.length),h=0;h<f.length;h++)i=f[h].value,e==g?"4(良好)"==i&&(f[h].selected=!0):"5(优秀)"==i&&(f[h].selected=!0);j=b.getElementById("Button1"),j.click()})())