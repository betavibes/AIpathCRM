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
    ];
  },
};

export default nextConfig;
