// ─── Mobile menu ───
function toggleMenu(btn) {
  var links = document.getElementById('nav-links');
  var open = links.classList.toggle('open');
  btn.setAttribute('aria-expanded', open ? 'true' : 'false');
}
function closeMenu() {
  var links = document.getElementById('nav-links');
  links.classList.remove('open');
  var btn = document.querySelector('.nav-toggle');
  if (btn) btn.setAttribute('aria-expanded', 'false');
}

// ─── Scroll reveal ───
(function () {
  var els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  els.forEach(function (el) { io.observe(el); });
})();

// ─── Enquiry form → WhatsApp ───
(function () {
  var WA_NUMBER = '263785378523';
  var EMAIL = '7seasmotormechanics@gmail.com';
  var form = document.getElementById('enquiry-form');
  if (!form) return;

  var fieldIds = ['f-name', 'f-phone', 'f-email', 'f-reg', 'f-make', 'f-model', 'f-date', 'f-work'];
  var required = ['f-name', 'f-phone', 'f-work'];
  var errorMsg = document.getElementById('form-error');

  function val(id) { var el = document.getElementById(id); return el ? el.value.trim() : ''; }

  function clearErrors() {
    required.forEach(function (id) { document.getElementById(id).classList.remove('error'); });
    errorMsg.classList.remove('show');
  }

  function validate() {
    var ok = true;
    required.forEach(function (id) {
      var el = document.getElementById(id);
      if (!el.value.trim()) { el.classList.add('error'); ok = false; }
      else { el.classList.remove('error'); }
    });
    errorMsg.classList.toggle('show', !ok);
    return ok;
  }

  function buildMessage() {
    var labels = {
      'f-name': 'Name', 'f-phone': 'Phone', 'f-email': 'Email', 'f-reg': 'Car Reg',
      'f-make': 'Make', 'f-model': 'Model', 'f-date': 'Preferred date', 'f-work': 'Work required'
    };
    var msg = 'Hi 7 Seas Motor Mechanics, I would like to enquire about a service.';
    fieldIds.forEach(function (id) {
      var v = val(id);
      if (v) msg += '\n' + labels[id] + ': ' + v;
    });
    return msg;
  }

  // Keep the "email instead" link in sync with what's typed
  function syncEmailLink() {
    var emailLink = document.getElementById('email-link');
    if (!emailLink) return;
    var subject = 'Service Enquiry' + (val('f-make') || val('f-model') ? ' - ' + (val('f-make') + ' ' + val('f-model')).trim() : '');
    emailLink.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(buildMessage());
  }
  form.addEventListener('input', function () { clearErrors(); syncEmailLink(); });

  var lastWaUrl = '';
  function openWhatsApp() {
    lastWaUrl = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(buildMessage());
    window.open(lastWaUrl, '_blank', 'noopener');
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validate()) {
      var firstEmpty = required.find(function (id) { return !val(id); });
      if (firstEmpty) document.getElementById(firstEmpty).focus();
      return;
    }
    openWhatsApp();
    form.style.display = 'none';
    document.getElementById('form-success').classList.add('show');
  });

  var retry = document.getElementById('success-retry');
  if (retry) retry.addEventListener('click', function (e) { e.preventDefault(); if (lastWaUrl) window.open(lastWaUrl, '_blank', 'noopener'); });
})();
