import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/mexican-center",
        destination: "/MEXICAN_CENTRAL_A_ST._LOUIS_RO.pdf",
        permanent: true,
      },
      {
        source: "/stl-post-dispatch",
        destination: "/St_Louis_Post_Dispatch_1895_02_20_Page_4_copy.pdf",
        permanent: true,
      },
      // Redirect old underscore URLs to new hyphenated ones
      {
        source: "/mexican_center",
        destination: "/mexican-center",
        permanent: true,
      },
      {
        source: "/stl_post_dispatch",
        destination: "/stl-post-dispatch",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
