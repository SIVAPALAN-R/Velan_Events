
  // ✅ Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.querySelector('.menu');

  if (menuToggle && menu) {
    menuToggle.addEventListener('change', function () {
      if (this.checked) {
        menu.style.display = 'flex';
      } else {
        menu.style.display = 'none';
      }
    });
  }

  // ✅ Google Sheets Form Submission
  const scriptURL = 'https://script.google.com/macros/s/AKfycbygj7zzI3ZFFJexSDxkuSqoUtrN6eDGh4vJICcx7ubNoBRAC05gGlFU9avQL4Evw0_R/exec'; // Replace with actual script ID
  const form = document.forms['submit-to-google-sheet'];
  const msg = document.getElementById('msg');

  if (form && msg) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
          msg.innerHTML = "✅ Booking Sent Successfully!";
          setTimeout(() => {
            msg.innerHTML = "";
          }, 3000);
          form.reset();
        })
        .catch(error => {
          console.error('Error!', error.message);
          msg.innerHTML = "❌ Something went wrong!";
        });
    });
  }

  // ✅ Tab switching logic (optional)
  function opentab(tabname) {
    const tablinks = document.getElementsByClassName("tab-links");
    const tabcontents = document.getElementsByClassName("tab-contents");

    for (let tablink of tablinks) {
      tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
      tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  }

  // ✅ Show selected date
  const dateInput = document.getElementById('booking-date');
  const display = document.getElementById('selected-date');

  if (dateInput && display) {
    dateInput.addEventListener('change', () => {
      const dateValue = new Date(dateInput.value);
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      display.textContent = `📅 You selected: ${dateValue.toLocaleDateString('en-US', options)}`;
    });
  }

