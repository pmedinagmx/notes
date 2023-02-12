const Footer = () => (
  <footer className="bg-slate-800 text-white p-4 fixed bottom-0 w-full">
    <div className="container mx-auto">
      <p className="text-center">
        &copy; {new Date().getFullYear()}{" "}
        <a href="http://instagram.com/yipolmx" target="_blank">
          YIPOL 梅宝
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
