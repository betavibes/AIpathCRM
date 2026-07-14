/**
 * Single source of truth for contact details.
 * These match the details published on https://www.aipathdiginext.com — the
 * company that builds and runs AIpath. Change them here and every page follows.
 */

export const CONTACT = {
  offices: {
    singapore: {
      label: "Singapore",
      address: "10 Ubi Crescent, #07-52, Ubi Tech Park Lobby C",
      city: "Singapore 408564",
    },
    india: {
      label: "India",
      address: "659, Ganga Vihar",
      city: "Lucknow 226101, India",
    },
  },

  phones: [
    { country: "India", display: "+91 91694 44081", tel: "+919169444081" },
    { country: "Singapore", display: "+65 8679 1448", tel: "+6586791448" },
  ],

  whatsapp: {
    display: "+65 8679 1448",
    href: "https://wa.me/6586791448",
  },

  emails: {
    general: "Contact@aipathdiginext.com",
    sales: "Sales@aipathdiginext.com",
  },

  hours: {
    weekdays: "Mon — Fri",
    weekdayTime: "9:00 AM — 6:00 PM SGT",
    weekend: "Sat — Sun",
    weekendTime: "Closed",
  },

  /** Live accounts, as linked from aipathdiginext.com. */
  social: [
    { name: "LinkedIn", href: "https://www.linkedin.com/company/107958013/" },
    { name: "X", href: "https://x.com/AIDiginext" },
    { name: "Instagram", href: "https://www.instagram.com/aidiginext" },
    { name: "YouTube", href: "https://www.youtube.com/@AIDigiNext" },
    { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61577566715005" },
  ],
} as const;
