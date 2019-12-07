(function() {
  console.log('这是 simple-chrdome-plugin-demo 的content-script！');
  var test = window.location.href;
  url = getQueryString('url');
  // alert(url);
  window.location.href = url;
})();

function getQueryString(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}
