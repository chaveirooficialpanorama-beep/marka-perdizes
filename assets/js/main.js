/* assets/js/main.js
   Arquivo local de customizações limpas.
   Mantém apenas o redirecionamento de compatibilidade do IE, quando necessário.
*/

if (navigator.userAgent.match(/MSIE|Internet Explorer/i) || navigator.userAgent.match(/Trident\/7\..*?rv:11/i)) {
  var href = document.location.href;
  if (!href.match(/[?&]nowprocket/)) {
    if (href.indexOf("?") === -1) {
      if (href.indexOf("#") === -1) {
        document.location.href = href + "?nowprocket=1";
      } else {
        document.location.href = href.replace("#", "?nowprocket=1#");
      }
    } else {
      if (href.indexOf("#") === -1) {
        document.location.href = href + "&nowprocket=1";
      } else {
        document.location.href = href.replace("#", "&nowprocket=1#");
      }
    }
  }
}
