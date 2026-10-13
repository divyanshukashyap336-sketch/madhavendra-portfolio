/* ==========================================================================
   PORTFOLIO SCRIPTS - MADHAVENDRA PRATAP SINGH GAUTAM
   Responsive Navigation, Active Links, Clipboard & Form Handling
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* --- 1. Mobile Menu Toggle --- */
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');
  const navLinks = document.querySelectorAll('.nav-link');

  // Open mobile menu
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
    });
  }

  // Close mobile menu
  if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  }

  // Close mobile menu when clicking any nav link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  });

  // Close mobile menu if clicked outside
  document.addEventListener('click', (event) => {
    if (navMenu.classList.contains('show-menu') && 
        !navMenu.contains(event.target) && 
        !navToggle.contains(event.target)) {
      navMenu.classList.remove('show-menu');
    }
  });


  /* --- 2. Sticky Header on Scroll --- */
  const header = document.getElementById('header');
  const handleScrollHeader = () => {
    if (window.scrollY >= 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScrollHeader);


  /* --- 3. Active Nav Link on Scroll --- */
  const sections = document.querySelectorAll('section[id]');
  
  const scrollActive = () => {
    const scrollY = window.pageYOffset || window.scrollY;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetNavLink = document.querySelector(`.nav-menu a[href*='${sectionId}']`);

      if (targetNavLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetNavLink.classList.add('active-link');
        } else {
          targetNavLink.classList.remove('active-link');
        }
      }
    });
  };
  window.addEventListener('scroll', scrollActive);


  /* --- 4. Copy Email to Clipboard --- */
  const copyBtn = document.getElementById('copy-email-btn');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  let toastTimeout;

  const showToast = (message) => {
    if (!toast) return;
    toastMessage.textContent = message;
    toast.classList.add('show');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  };

  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const email = 'madhavendra26@jecrcu.edu.in';
      try {
        await navigator.clipboard.writeText(email);
        showToast('Email copied to clipboard!');
      } catch (err) {
        // Fallback for older browsers
        const tempInput = document.createElement('input');
        tempInput.value = email;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        showToast('Email copied to clipboard!');
      }
    });
  }


  /* --- 5. Contact Form Handler (Opens Default Mail Client) --- */
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();

      const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject}`);
      const mailtoBody = encodeURIComponent(`Hi Madhavendra,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`);

      // Open email client
      window.location.href = `mailto:madhavendra26@jecrcu.edu.in?subject=${mailtoSubject}&body=${mailtoBody}`;

      showToast('Opening your email app to send message...');
      contactForm.reset();
    });
  }


  /* --- 6. Dynamic Year in Footer --- */
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

});
