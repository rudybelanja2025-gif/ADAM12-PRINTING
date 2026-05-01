```javascript
// ============================================================
// DATA.JS — Sumber data utama website Adam12 Printing
// ============================================================

const SITE_DATA = {
  "profile": {
    "name": "Adam12 Printing",
    "tagline": "Printing & Visual Design",
    "bio": "Jasa printing dan desain visual untuk kebutuhan bisnis dan kreatif. Membantu brand tampil profesional lewat hasil cetak berkualitas.",
    "email": "adam12printing@gmail.com",
    "instagram": "",
    "youtube": "",
    "tiktok": "",
    "behance": "",
    "location": "Indonesia"
  },

  "services": [
    {
      "id": "s1",
      "icon": "🖨️",
      "title": "Printing",
      "desc": "Cetak banner, spanduk, stiker, dan kebutuhan promosi lainnya.",
      "label": "Order"
    },
    {
      "id": "s2",
      "icon": "🎨",
      "title": "Desain Grafis",
      "desc": "Desain poster, banner, feed sosial media, dan kebutuhan branding.",
      "label": "Design"
    },
    {
      "id": "s3",
      "icon": "📦",
      "title": "Custom Order",
      "desc": "Pesanan custom sesuai kebutuhan bisnis dan personal.",
      "label": "Custom"
    }
  ],

  "projects": [
    {
      "id": "p1",
      "title": "Banner Promosi",
      "category": "Printing",
      "desc": "Cetak banner promosi dengan kualitas tinggi dan warna tajam.",
      "image": "assets/images/project-1.jpg",
      "link": "#",
      "featured": true,
      "year": "2026"
    },
    {
      "id": "p2",
      "title": "Desain Spanduk",
      "category": "Desain",
      "desc": "Desain spanduk untuk usaha lokal dengan tampilan profesional.",
      "image": "assets/images/project-2.jpg",
      "link": "#",
      "featured": true,
      "year": "2026"
    },
    {
      "id": "p3",
      "title": "Sticker Custom",
      "category": "Printing",
      "desc": "Cetak stiker custom untuk branding dan kebutuhan personal.",
      "image": "",
      "link": "#",
      "featured": true,
      "year": "2026"
    }
  ],

  "galleryprompt": [
    {
      "id": "g1",
      "title": "Poster Promosi",
      "category": "Design",
      "prompt": "Contoh desain poster promosi modern untuk kebutuhan bisnis.",
      "image": "",
      "link": "#"
    },
    {
      "id": "g2",
      "title": "Banner Event",
      "category": "Design",
      "prompt": "Desain banner untuk event dengan layout profesional.",
      "image": "",
      "link": "#"
    },
    {
      "id": "g3",
      "title": "Feed Instagram",
      "category": "Social Media",
      "prompt": "Desain feed instagram untuk branding bisnis.",
      "image": "",
      "link": "#"
    }
  ]
};

if (typeof module !== 'undefined') module.exports = SITE_DATA;
```
