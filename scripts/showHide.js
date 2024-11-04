function showHideDiv(name) {
  var x = document.getElementById("show_hide" + "_" + name);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}