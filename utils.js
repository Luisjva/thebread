export const colors = {
  negro: "#1b1b1b",
  vino: "#af1350",
  naranja: "#fd884f",
  blanco: "#ebebeb",
};

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
}
