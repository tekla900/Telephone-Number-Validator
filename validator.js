function telephoneCheck(str) {
  let exp = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/im;

  return exp.test(str);
}

telephoneCheck("555-555-5555");
