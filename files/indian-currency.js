(function () {
  'use strict';

  function formatIndianDigits(value) {
    const digits = String(value).replace(/\D/g, '');
    if (!digits) return '';
    const normalized = digits.replace(/^0+(?=\d)/, '');
    const lastThree = normalized.slice(-3);
    const leading = normalized.slice(0, -3);
    return leading ? leading.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + lastThree : lastThree;
  }

  window.parseIndianNumber = function (value) {
    return parseFloat(String(value).replace(/,/g, '')) || 0;
  };

  function formatField(field) {
    if (field.matches && field.matches('[data-indian-currency]')) {
      field.value = formatIndianDigits(field.value);
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-indian-currency]').forEach(formatField);
  });
  document.addEventListener('input', function (event) {
    formatField(event.target);
  }, true);
})();
