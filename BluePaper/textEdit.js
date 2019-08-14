function replaceText() {
  var title = document.getElementById("title");
  var body = document.getElementById("body");
  title.innerHTML = "About";
  body.innerHTML = "About";
}

var elem = document.getElementById("About");
elem.addEventListener("click", replaceText, false);
