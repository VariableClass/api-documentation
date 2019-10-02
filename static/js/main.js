var tests = document.getElementsByClassName("json");
var obj = [];

for (var i = 0; i < tests.length; i++){
  tests[i].innerHtml = "";
  tests[i].appendChild(document.createTextNode(JSON.stringify(obj, null, 4)))
}
