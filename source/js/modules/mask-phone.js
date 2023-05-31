function maskPhone() {
  const elems = document.querySelectorAll('input[type="tel"]');

  function mask(event) {
    const keyCode = event.keyCode;
    const template = '+7 (___) ___-__-__';
    const def = template.replace(/\D/g, '');
    const val = event.target.value.replace(/\D/g, '');

    let i = 0;
    let newValue = template.replace(/[_\d]/g, function (a) {
      return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
    });
    i = newValue.indexOf('_');
    if (i !== -1) {
      newValue = newValue.slice(0, i);
    }
    let reg = template.substr(0, event.target.value.length).replace(/_+/g,
        function (a) {
          return '\\d{1,' + a.length + '}';
        }).replace(/[+()]/g, '\\$&');
    reg = new RegExp('^' + reg + '$');
    if (!reg.test(event.target.value) || event.target.value.length < 5 || keyCode > 47 && keyCode < 58) {
      event.target.value = newValue;
    }
    if (event.type === 'blur' && event.target.value.length < 5) {
      event.target.value = ' ';
    }
  }

  for (const elem of elems) {
    elem.addEventListener('input', mask);
    elem.addEventListener('focus', mask);
    elem.addEventListener('blur', mask);
  }
}

export {maskPhone};
