import CardNav from "./CardNav";
import NavHeader from "./NavHeader";
// import logo from "/logo_white_main.png";

const Navbar = () => {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        {
          label: "Company",
          href: "/about/company",
          ariaLabel: "About Company",
        },
        {
          label: "Products",
          href: "/about/products",
          ariaLabel: "About Products",
        },
      ],
    },
    {
      label: "Categories",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        {
          label: "Menswear",
          href: "/category/menswear",
          ariaLabel: "Menswear Category",
        },
        {
          label: "Womenswear",
          href: "/category/womenswear",
          ariaLabel: "Womenswear Category",
        },
        {
          label: "Trending",
          href: "/category/trending",
          ariaLabel: "Trending Category",
        },
      ],
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        {
          label: "Email",
          href: "mailto:hello@example.com",
          ariaLabel: "Email us",
        },
        {
          label: "Twitter",
          href: "https://twitter.com/yourhandle",
          ariaLabel: "Twitter",
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/company/yourcompany",
          ariaLabel: "LinkedIn",
        },
      ],
    },
  ];
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white">
      <NavHeader />
      <div>
        <CardNav
          logo={"/logo_black.png"}
          logoAlt="Company Logo"
          items={items}
          baseColor="#fff"
          menuColor="#000"
          buttonBgColor="#111"
          buttonTextColor="#fff"
          ease="power3.out"
        />
      </div>
    </div>
  );
};
export default Navbar;
