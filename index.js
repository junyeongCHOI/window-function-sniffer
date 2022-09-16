function sniff(t, b, a) {
  typeof eval === 'function' && eval('(function(){if(typeof ' + t + '!=="function")return;const o=' + t + '};' + t + '=function(){typeof b==="function"&&b(arguments);const r=o.apply(this, arguments);typeof a==="function"&&a(r);}})();');
}

export default sniff;
