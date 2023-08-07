const Layout = ({ children, className = "" }) => {
  return (
    // xl:p-24
    <div
      className={`w-full h-full dark:bg-dark inline-block z-0 bg-light ${className} lg:p-32 md:p-16 sm:p-12 p-8`}
    >
      {children}
    </div>
  );
};

export default Layout;
