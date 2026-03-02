/* ═══════════════════════════════════════════════════════════════════
   COSMODONT DENTAL CLINIC — config.js
   ═══════════════════════════════════════════════════════════════════

   THIS IS THE ONLY FILE YOU NEED TO EDIT FOR CONTENT CHANGES.

   Non-developers: edit only the values inside quotes and numbers.
   Do not remove commas, brackets, or quotes around text.
   ═══════════════════════════════════════════════════════════════════ */

const CONFIG = {

  /* ── Clinic details ──────────────────────────────────────────── */
  clinic: {
    name:      'Cosmodont Dental Clinic',
    tagline:   'Where Smiles Are Crafted With Care',
    address:   '1/246, Viram Khand 1, Gomti Nagar, Lucknow',
    phones:    ['01206852683', '07992074028'],
    whatsapp:  '917992074028',
    email:     '',                          // Add email when available
    instagram: 'https://www.instagram.com/cosmodont.dentalclinic/',
    facebook:  'https://facebook.com',      // Update with real page URL
    iso:       'ISO 9001:2015 Certified',
  },

  /* ── Clinic hours ────────────────────────────────────────────── */
  hours: [
    { days: 'Mon – Thu', time: '11:00 AM – 9:00 PM' },
    { days: 'Fri – Sun', time: 'By Appointment'      },
  ],

  /* ── Services (shown in services grid and footer) ────────────── */
  services: [
    {
      icon: '✦',
      name: 'Clear Aligners',
      desc: "Straighten your teeth without anyone noticing. Lucknow's #1 aligner provider — 20+ cases every month.",
    },
    {
      icon: '✦',
      name: 'Dental Implants',
      desc: 'Permanent. Natural-looking. Life-changing. Replace missing teeth with results that last decades.',
    },
    {
      icon: '✦',
      name: 'Crowns & Caps',
      desc: 'Zirconia and 3M crowns crafted to match your natural teeth so precisely, nobody will know.',
    },
    {
      icon: '✦',
      name: 'Painless Dentistry',
      desc: 'Conscious sedation so you feel calm, comfortable — not scared. Dentistry the way it should be.',
    },
    {
      icon: '✦',
      name: 'Orthodontics',
      desc: 'Braces, aligners, retainers — tailored precisely to your bite and your lifestyle.',
    },
    {
      icon: '✦',
      name: 'Smile Makeover',
      desc: 'Combine treatments for a complete transformation. See the smile you always imagined.',
    },
  ],

  /* ── Doctors ─────────────────────────────────────────────────── */
  /* To add a real photo: replace the `initials` with an empty string
     and add an `image` field with the path, e.g. image: 'images/dr-utkarsh.jpg'
     Then update the renderSite() function in app.js accordingly.       */
  doctors: [
    {
      initials:  'US',
      image:     'Dr.-Utkarsh-Singh.jpg',
      name:      'Dr. Utkarsh Singh',
      role:      'Co-Founder & Chief Dental Surgeon',
      specialty: 'Periodontics & Implantology',
      tags:      ['Periodontics', 'Implantology'],
      quote:     'I believe in explaining everything first. A patient who understands their treatment trusts the process.',
    },
    {
      initials:  'AS',
      image:     'Ananya.jpg',
      name:      'Dr. Ananya Sharma',
      role:      'Co-Founder & Chief Implant Surgeon',
      specialty: 'Periodontology, Implantology & Dental Surgery',
      tags:      ['Implantology', 'Dental Surgery', 'Periodontology'],
      quote:     'Every smile we restore changes how someone sees themselves.',
    },
    {
      initials:  'AbS',
      image:     'Abhinav.jpg',
      name:      'Dr. Abhinav Srivastav',
      role:      'Cosmetic Dentist & Aligner Consultant',
      specialty: 'Cosmetic Dentistry, Aligners & Restorations',
      tags:      ['Cosmetic Dentistry', 'Aligners', 'Restorations'],
      quote:     'The best dental work is the kind nobody can tell you had done.',
    },
  ],

  /* ── Patient testimonials (Google reviews) ───────────────────── */
  testimonials: [
    {
      name:  'Aakash Pathak',
      stars: 5,
      text:  "Gem of a doctor, explained things, didn't recommend unnecessary procedures.",
    },
    {
      name:  'Bharat Bhushan',
      stars: 5,
      text:  'The clinic is clean, hygienic, and well organized. Dr. Utkarsh is highly professional, skilled, and patient-friendly.',
    },
    {
      name:  'Kushal Gupta',
      stars: 5,
      text:  'Treatment was painless and effective. Proper hygiene is maintained and appointments are well managed.',
    },
    {
      name:  'Arnav Yadav',
      stars: 5,
      text:  'The reception is always tidy. Laxmi manages the phone and visitors seamlessly and with a wonderful attitude.',
    },
    {
      name:  'Parikshit Pande',
      stars: 5,
      text:  'They care about their patients in an excellent way.',
    },
    {
      name:  'Zapan Chawla',
      stars: 5,
      text:  'Cosmodont is my go-to clinic for any minor to major dental emergency. Doctors here provide the kind of assurance that every patient needs.',
    },
  ],

  /* ── Smile gallery (before/after cases) ─────────────────────── */
  /* To add real photos: drop images into an /images/ folder and
     set image paths like: beforeImage: 'images/case1-before.jpg'
     Then update the gallery render in app.js to use <img> tags.   */
  gallery: [
    {
      treatment: 'Clear Aligner Transformation',
      type:      'Cosmetic · Aligners',
      image:     'transformation1.jpg',
    },
    {
      treatment: 'Smile Makeover',
      type:      'Crowns · Veneers',
      image:     'transformation2.jpg',
    },
    {
      treatment: 'Dental Implant',
      type:      'Implantology · Restorations',
      image:     'transformation3.jpg',
    },
  ],

  /* ── Trust credentials (horizontal bar) ─────────────────────── */
  credentials: [
    { icon: '🏅', stat: 'ISO 9001:2015', label: 'Certified Clinic'          },
    { icon: '⭐', stat: '5-Star',         label: 'Google Rating'              },
    { icon: '🦷', stat: 'Largest in UP',  label: 'Clear Aligner Provider'    },
    { icon: '🏥', stat: '3-Month',        label: 'Hygiene Audits'            },
    { icon: '💳', stat: 'Zero Cost',      label: 'EMI Available'             },
  ],

  /* ── Financing section ───────────────────────────────────────── */
  financing: {
    items: [
      { icon: '📋', text: 'Flexible monthly payment plans tailored to your budget' },
      { icon: '💳', text: 'Zero cost EMIs on all major credit cards'              },
      { icon: '🤝', text: 'Insurance accepted — Mediassist, Medibuddy & Magma Health' },
    ],
    partners: [
      { name: 'Bajaj Finserv', logo: 'bajaj-fin-logo.jpg' },
      { name: 'Fibe',          logo: 'fibe-logo.jpg'      },
      { name: 'Savein',        logo: 'save-in-logo.jpg'   },
    ],
    insurance: ['Mediassist', 'Medibuddy', 'Magma Health'],
  },

  /* ── Form submission handler ─────────────────────────────────── */
  /*
     OPTION A (current default) — WhatsApp redirect:
       Sends form data as a pre-filled WhatsApp message. No backend needed.

     OPTION B — POST to a form endpoint:
       Comment out OPTION A and uncomment OPTION B below.
       Replace the URL with your Formspree/Netlify/backend endpoint.

     OPTION C — GrahakBot / CRM integration:
       Replace the whole function body with your GrahakBot SDK call.
  */
  formSubmitHandler: function(data) {

    /* OPTION A — WhatsApp (active) */
    const msg = encodeURIComponent(
      `Hello Cosmodont! I'd like to book a consultation.\n` +
      `Name: ${data.name}\nPhone: ${data.phone}\nService: ${data.service}`
    );
    window.open(`https://wa.me/917992074028?text=${msg}`, '_blank');

    /* OPTION B — Form endpoint (inactive, uncomment to use)
    fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(data),
    }).then(() => {
      alert('Thank you! We will call you back shortly.');
    }).catch(() => {
      alert('Something went wrong. Please call us directly.');
    });
    */
  },

};
