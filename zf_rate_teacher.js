var iframe = document.getElementById('iframeautoheight');
var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
var selects = innerDoc.getElementsByTagName('select');
var scorelist = [];

// 找到下拉菜单列表
for (var i = 0; i < selects.length; i++) {
    if (selects[i].id.indexOf("DataGrid1__") > -1) {
        scorelist.push(selects[i]);
    }
}

// 选取下拉菜单项
for (var i = 0; i < scorelist.length; i++) {
    var ops = scorelist[i].options;
    var rid = Math.floor(Math.random()*scorelist.length);
    for (var j = 0; j < ops.length; j++) {
        var tempValue = ops[j].value;
        if (i == rid) {
            if (tempValue == '4(良好)') {
                ops[j].selected = true;
            }
        } else {
            if (tempValue == '5(优秀)') {
                ops[j].selected = true;
            }
        }
    }
}

var btn_save = innerDoc.getElementById('Button1');
btn_save.click();
