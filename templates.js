const envelopeTemplates = [
  // 7×5 inch templates (A7)
  {
    id: "defc64a17de41a7e03fbfddfa23e1463bc",
    title: "Editable Wedding Envelope Template — Script Font (5×7)",
    image: "/images/template1-5x7.jpg",
    description: "Printable wedding envelope address template with elegant script typography. Fully editable layout for invitations or RSVP cards.",
    size: "7x5",
    sizeText: "5×7 in",
    tag: "Popular",
    tags: ["Popular", "Minimalist"],
    slug: "editable-wedding-envelope-template-script-5x7",
    seoTitle: "Editable Wedding Envelope Template (5×7) — Script Font | Envelo.love",
    seoDescription: "Elegant 5×7 wedding envelope template with script font. Personalize names & addresses and download print-ready PDFs. Perfect for invitations and RSVP."
  },
  {
    id: "b6b43f09460ce3d3eca5e3b27e06db60",
    title: "Minimalist Wedding Envelope — Clean & Modern (5×7)",
    image: "/images/template2-5x7.jpg",
    description: "Modern envelope address template with clean lines and serif font. Ideal for DIY weddings, showers, or formal mailings.",
    size: "7x5",
    sizeText: "5×7 in",
    tag: "Minimalist",
    tags: ["Minimalist"],
    slug: "minimalist-wedding-envelope-clean-modern-5x7",
    seoTitle: "Minimalist Wedding Envelope (5×7) — Clean & Modern | Envelo.love",
    seoDescription: "Clean, modern 5×7 wedding envelope template with elegant serif typography. Personalize addresses and export print-ready PDFs in minutes."
  },
  {
    id: "3bc48c9deef234ae9bbfaeb8dc7f4ef2",
    title: "Printable Wedding Envelope Template — Simple Layout (5×7)",
    image: "/images/template3-5x7.jpg",
    description: "Minimalist printable envelope design for custom addresses. Great for personalized wedding stationery and home printing.",
    size: "7x5",
    sizeText: "5×7 in",
    tag: "Minimalist",
    tags: ["Minimalist"],
    slug: "printable-wedding-envelope-simple-layout-5x7",
    seoTitle: "Printable Wedding Envelope (5×7) — Simple Layout | Envelo.love",
    seoDescription: "Simple 5×7 printable wedding envelope template. Add names & addresses, then download a high-quality, print-ready PDF for your invitations."
  },
  {
    id: "d39c9c520e225dbbe962e3b504f95972",
    title: "Custom Wedding Envelope Address Template (5×7)",
    image: "/images/template4-5x7.jpg",
    description: "Romantic and modern printable envelope with editable fields. Perfect for wedding invitations and personalized mail merge.",
    size: "7x5",
    sizeText: "5×7 in",
    tag: "Popular",
    tags: ["Popular"],
    slug: "custom-wedding-envelope-address-template-5x7",
    seoTitle: "Custom Wedding Envelope Address Template (5×7) | Envelo.love",
    seoDescription: "Personalize a 5×7 wedding envelope with names & addresses. Ideal for mail merge and quick PDF export for professional printing."
  },
  {
    id: "969f0ef2e6709d40fc78abe830765c47",
    title: "Script Wedding Envelope Template — Editable PDF (5×7)",
    image: "/images/template5-5x7.jpg",
    description: "Editable wedding envelope address template with flowing script font. Ideal for custom RSVP or invitation envelopes.",
    size: "7x5",
    sizeText: "5×7 in",
    tag: "Floral",
    tags: ["Floral", "Popular"],
    slug: "script-wedding-envelope-editable-pdf-5x7",
    seoTitle: "Script Wedding Envelope Template (5×7) — Editable PDF | Envelo.love",
    seoDescription: "Chic 5×7 wedding envelope template with script font. Edit recipient addresses and export a print-ready PDF. Great for invitations & RSVP."
  },
  {
    id: "c811a6d6c0e5dfba458569c2b74f2305",
    title: "Modern Printable Envelope Template for Weddings (5×7)",
    image: "/images/template6-5x7.jpg",
    description: "Clean and customizable envelope design for wedding invitations. Fully printable and editable with modern style.",
    size: "7x5",
    sizeText: "5×7 in",
    tag: "Minimalist",
    tags: ["Minimalist"],
    slug: "modern-printable-envelope-template-weddings-5x7",
    seoTitle: "Modern Printable Wedding Envelope (5×7) — Minimal Style | Envelo.love",
    seoDescription: "Modern 5×7 wedding envelope template. Customize names & addresses and download a professional, print-ready PDF in seconds."
  },

  // NEW Floral A7 (5×7)
  {
    id: "619d3339775e6e17b91a459121ab53ac",
    title: "Floral Wedding Envelope Template — 5×7 A7 (Editable PDF)",
    image: "/images/floral-rose-5x7.jpg",
    description: "Romantic floral wedding envelope template for A7 (5×7 in). Fully editable online — upload your CSV guest list and export a print-ready PDF.",
    size: "7x5",
    sizeText: "5×7 in",
    tag: "Floral",
    tags: ["Floral"],
    slug: "floral-wedding-envelope-template-5x7-rose",
    seoTitle: "Floral Wedding Envelope Template (A7 5×7) — Editable & Printable | Envelo.love",
    seoDescription: "Create beautiful floral wedding envelopes: edit online, mail-merge your CSV addresses, and download a high-resolution, print-ready PDF. Perfect for invitations.",
    priceUSD: 9.99
  },
  {
    id: "dd964e1ecf21503167d1c4da0e1082e9",
    title: "Floral Wedding Envelope — Peony Style (5×7 A7, Editable PDF)",
    image: "/images/floral-peony-5x7.jpg",
    description: "Soft peony floral envelope template for A7 (5×7 in). Customize typography and layout online, merge CSV addresses, and export a print-ready PDF.",
    size: "7x5",
    sizeText: "5×7 in",
    tag: "Floral",
    tags: ["Floral"],
    slug: "floral-wedding-envelope-template-5x7-peony",
    seoTitle: "Floral Wedding Envelope (A7 5×7) — Peony, Editable & Printable | Envelo.love",
    seoDescription: "Design romantic peony-floral wedding envelopes in A7 (5×7). Edit online, mail-merge your guest list from CSV, and download a professional print-ready PDF.",
    priceUSD: 9.99
  },

  // NEW All-Occasions A7 (5×7)
  {
    id: "a556880a80ff29ff826e87ce8697a13c",
    title: "All-Occasions Envelope Template — For Any Occasion (5×7)",
    image: "/images/for-any-occasion-5x7.jpg",
    description: "Versatile 5×7 envelope template designed for any occasion — weddings, birthdays, baby showers, holidays, and business mailings. Edit names and addresses online, import a CSV guest list for fast mail merge, and download a crisp, print-ready PDF compatible with home or professional printing.",
    size: "7x5",
    sizeText: "5×7 in",
    tag: "All-Occasions",
    tags: ["All-Occasions", "Versatile", "Popular"],
    slug: "all-occasions-envelope-template-for-any-occasion-5x7",
    seoTitle: "All-Occasions Envelope (5×7) — For Any Occasion | Envelo.love",
    seoDescription: "A flexible 5×7 envelope template for any occasion. Personalize addresses, mail-merge a CSV guest list, and export a high-resolution, print-ready PDF in minutes.",
    priceUSD: 8.99
  },

  // 6×4 inch templates (A6)
  {
    id: "dcc7d8911bd398e3e531772137fbcfb3",
    title: "Minimalist Wedding Envelope — 6×4 Design",
    image: "/images/template1-6x4.jpg",
    description: "Clean and elegant wedding envelope design for smaller formats. Fully editable with serif font and layout options.",
    size: "6x4",
    sizeText: "6×4 in",
    tag: "Minimalist",
    tags: ["Minimalist"],
    slug: "minimalist-wedding-envelope-6x4",
    seoTitle: "Minimalist Wedding Envelope (6×4) — Clean Design | Envelo.love",
    seoDescription: "Elegant 6×4 wedding envelope template with minimalist styling. Personalize recipient names & addresses and export a print-ready PDF."
  },
  {
    id: "3860f9dc490519af40b1ab9c9cf2a5d3",
    title: "Floral Wedding Envelope Template — 6×4 Format",
    image: "/images/template2-6x4.jpg",
    description: "Romantic floral design envelope for weddings or RSVP. Ideal for intimate events and personalized mailings.",
    size: "6x4",
    sizeText: "6×4 in",
    tag: "Floral",
    tags: ["Floral"],
    slug: "floral-wedding-envelope-template-6x4",
    seoTitle: "Floral Wedding Envelope (6×4) — Romantic Design | Envelo.love",
    seoDescription: "Romantic 6×4 floral wedding envelope template. Edit addresses, then download a crisp, print-ready PDF for your invitations or RSVP."
  },
  {
    id: "98784b5c6f66cf95fac7390a35b691f9",
    title: "Classic Wedding Envelope Layout — 6×4 Size",
    image: "/images/template3-6x4.jpg",
    description: "Timeless envelope layout for wedding invitations and thank-you cards. Easy to edit and print.",
    size: "6x4",
    sizeText: "6×4 in",
    tag: "Popular",
    tags: ["Popular"],
    slug: "classic-wedding-envelope-layout-6x4",
    seoTitle: "Classic Wedding Envelope (6×4) — Timeless Layout | Envelo.love",
    seoDescription: "Classic 6×4 wedding envelope layout. Quickly personalize names & addresses and export a high-quality, print-ready PDF."
  },
  {
    id: "ad88d54395bfbe06799339847c470862",
    title: "Editable RSVP Envelope Template — 6×4 Inches",
    image: "/images/template4-6x4.jpg",
    description: "Perfect for RSVP cards or smaller wedding invitations. Printable and fully customizable in just a few clicks.",
    size: "6x4",
    sizeText: "6×4 in",
    tag: "Minimalist",
    tags: ["Minimalist"],
    slug: "editable-rsvp-envelope-template-6x4",
    seoTitle: "Editable RSVP Envelope (6×4) — Wedding Template | Envelo.love",
    seoDescription: "Editable 6×4 RSVP/wedding envelope template. Add addresses and download a print-ready PDF — fast and simple."
  },
  {
    id: "aa4376f7af5ce2ba67801f94c6dc1bcc",
    title: "Simple Wedding Envelope Template — 6×4 Format",
    image: "/images/template5-6x4.jpg",
    description: "Minimal and clean envelope design suitable for modern couples and small event mailings.",
    size: "6x4",
    sizeText: "6×4 in",
    tag: "Minimalist",
    tags: ["Minimalist"],
    slug: "simple-wedding-envelope-template-6x4",
    seoTitle: "Simple Wedding Envelope (6×4) — Minimal Design | Envelo.love",
    seoDescription: "Simple, minimal 6×4 wedding envelope template. Personalize recipient details and export as a sharp, print-ready PDF."
  },
  {
    id: "afeed7cbe3789bb3241292182fe82aa4",
    title: "Modern Wedding Envelope — 6×4 Layout",
    image: "/images/template6-6x4.jpg",
    description: "Stylish and contemporary layout for small-format envelopes. Editable PDF and print-ready design.",
    size: "6x4",
    sizeText: "6×4 in",
    tag: "Popular",
    tags: ["Popular"],
    slug: "modern-wedding-envelope-6x4",
    seoTitle: "Modern Wedding Envelope (6×4) — Contemporary Layout | Envelo.love",
    seoDescription: "Contemporary 6×4 wedding envelope template. Customize names & addresses and download an instantly print-ready PDF."
  },

  // NEW Floral A6 (6×4)
  {
    id: "304396c4626a707b6d4815e392a575d5",
    title: "Floral Wedding Envelope Template — 6×4 A6 (Editable PDF)",
    image: "/images/floral-lilac-6x4.jpg",
    description: "Elegant floral wedding envelope template for A6 (6×4 in). Customize fonts, colors, and layout online — upload your guest list and download a print-ready PDF.",
    size: "6x4",
    sizeText: "6×4 in",
    tag: "Floral",
    tags: ["Floral"],
    slug: "floral-wedding-envelope-template-6x4-lilac",
    seoTitle: "Floral Wedding Envelope Template (A6 6×4) — Editable & Printable | Envelo.love",
    seoDescription: "Design elegant floral wedding envelopes in A6 (6×4). Edit online, merge addresses from CSV, and export a professional print-ready PDF in minutes.",
    priceUSD: 8.99
  },
  {
    id: "8e2c2cd90717d0dab6fb92c309f3bfb4",
    title: "Floral Wedding Envelope — Eucalyptus Style (6×4 A6, Editable PDF)",
    image: "/images/floral-eucalyptus-6x4.jpg",
    description: "Fresh eucalyptus floral envelope template for A6 (6×4 in). Personalize typography, merge CSV addresses online, and download a print-ready PDF.",
    size: "6x4",
    sizeText: "6×4 in",
    tag: "Floral",
    tags: ["Floral"],
    slug: "floral-wedding-envelope-template-6x4-eucalyptus",
    seoTitle: "Floral Wedding Envelope (A6 6×4) — Eucalyptus, Editable & Printable | Envelo.love",
    seoDescription: "Create elegant eucalyptus-floral wedding envelopes in A6 (6×4). Edit online, mail-merge CSV guest addresses, and export a high-resolution print-ready PDF.",
    priceUSD: 8.99
  },

  // NEW All-Occasions A6 (6×4)
  {
    id: "f64f8b5166f8e5391bd70ca8f2f3b754",
    title: "All-Occasions Envelope Template — For Any Occasion (6×4)",
    image: "/images/for-any-occasion-6x4.jpg",
    description: "Compact 6×4 envelope template that fits any occasion — from party invites and thank-you notes to seasonal cards and business mail. Edit online, bulk-import addresses via CSV, and export a sharp, print-ready PDF that works with standard A6 envelopes.",
    size: "6x4",
    sizeText: "6×4 in",
    tag: "All-Occasions",
    tags: ["All-Occasions", "Versatile"],
    slug: "all-occasions-envelope-template-for-any-occasion-6x4",
    seoTitle: "All-Occasions Envelope (6×4) — For Any Occasion | Envelo.love",
    seoDescription: "A versatile 6×4 envelope template for invitations, thank-you notes, holidays, and more. Personalize, mail-merge CSV addresses, and download a print-ready PDF.",
    priceUSD: 7.99
  }
];

// Default price for JSON-LD if not set
envelopeTemplates.forEach(t => {
  t.priceUSD = t.priceUSD ?? 0;
});
