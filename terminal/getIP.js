$.getJSON("https://api.ipify.org?format=json",

  function (data) {
  $("#gfg").html("Your IP adress: " + data.ip);
})