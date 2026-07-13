import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // Pricing is hidden for now — the page source is kept intact under app/pricing/.
  // To bring it back: delete this redirects() block and restore the nav/footer links.
  async redirects() {
    return [
      {
        source: "/pricing",
        destination: "/contact",
        permanent: false,
      },
      // The Company (/about) page was removed. Old links land on Why AIpath.
      {
        source: "/about",
        destination: "/why-aipath",
        permanent: false,
      },
      // The Book-a-Demo page was removed; demo requests go through Contact.
      {
        source: "/demo",
        destination: "/contact",
        permanent: false,
      },
      // The blog was removed — every post was fabricated. Restore real posts
      // under app/resources/ and delete these two rules to bring it back.
      {
        source: "/resources",
        destination: "/case-studies",
        permanent: false,
      },
      {
        source: "/resources/:slug*",
        destination: "/case-studies",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
