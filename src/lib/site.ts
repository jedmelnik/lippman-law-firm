export const site = {
  name: "Law Offices of Eliot M. Lippman",
  shortName: "Eliot M. Lippman",
  tagline: "Protecting Your Loved Ones",
  phone: "(415) 457-8898",
  phoneHref: "tel:+14154578898",
  address: {
    street: "1000 5th Avenue",
    suite: "Suite 1",
    city: "San Rafael",
    state: "CA",
    zip: "94901-6103",
    full: "1000 5th Avenue, Suite 1, San Rafael, CA 94901-6103",
  },
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=1000+5th+Avenue,+Suite+1,+San+Rafael,+CA+94901",
  mapsEmbed:
    "https://www.google.com/maps?q=1000+5th+Avenue,+Suite+1,+San+Rafael,+CA+94901&output=embed",
  serviceArea: "Marin County and San Francisco",
  attorney: "Eliot M. Lippman",
  yearsPracticing: "20+",
  sourceUrl: "https://www.lippmanlawfirm.com/",
} as const;

export const navLinks = [
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Conservatorship", href: "/conservatorship" },
  { label: "Estate Planning", href: "/estate-planning" },
  { label: "Probate & Trust", href: "/probate-trust" },
  { label: "Attorney", href: "/attorney" },
  { label: "Contact", href: "/contact" },
] as const;

export const practiceAreas = [
  {
    slug: "conservatorship",
    href: "/conservatorship",
    title: "Conservatorship",
    summary:
      "Petitioning for and administering conservatorships of the person and estate when capacity declines, including elder abuse protective orders when needed.",
    image: "/images/hero-hands.jpg",
    imageAlt:
      "Hands joined together in a huddle, symbolizing family support and care",
  },
  {
    slug: "probate-trust",
    href: "/probate-trust",
    title: "Probate & Trust Administration",
    summary:
      "Guiding executors and beneficiaries through California probate and trust administration with care, precision, and courtroom experience when disputes arise.",
    image: "/images/hero-handshake.jpg",
    imageAlt: "Two people shaking hands across a desk after reaching agreement",
  },
  {
    slug: "estate-planning",
    href: "/estate-planning",
    title: "Estate Planning",
    summary:
      "Wills, trusts, powers of attorney, and advance health care directives that protect your family and honor your wishes - with a free initial consultation.",
    image: "/images/hero-documents.jpg",
    imageAlt: "Hands signing estate planning documents with a pen",
  },
] as const;

export const attorneyProfile = {
  name: "Eliot M. Lippman",
  admitted: "State Bar of California, 1992",
  education: [
    {
      school: "University of California, Hastings College of the Law",
      degree: "J.D., 1992",
      notes: [
        'Recipient: "Outstanding Student Leader," UC Board of Governors, 1992',
        "President, Hastings International Law Society, 1990-1991",
      ],
    },
    {
      school: "University of Arizona",
      degree: "B.S., 1979",
      notes: [] as string[],
    },
  ],
  associations: [
    "State Bar of California",
    "Marin County Bar Association (Board of Directors, 2000-2005)",
    "Marin County Estate Planning Council",
    "Senior Access, Board of Directors (2002-2005)",
  ],
  bio: [
    "Born in New York, raised in Connecticut, and a Marin County resident since 1980. Prior to attending law school, Mr. Lippman served as a Public Information Officer for The Hunger Project, a non-profit organization, and then as Director of Trackdown Research Services, a Bay Area online information brokerage firm serving attorneys, publishers, and the business community.",
    "Mr. Lippman was an Associate Attorney at the Law Offices of Silen & Flaxman, Mill Valley, California, from 1992 to 1998, and has been in private practice from 1998 to present.",
  ],
  practiceAreas: [
    "Conservatorship",
    "Estate planning",
    "Probate & Trust administration",
  ],
} as const;
