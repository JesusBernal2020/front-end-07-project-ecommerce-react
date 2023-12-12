const Footer = () => {
  return (
    <section className="h-44 bg-[#3c3c3b] flex flex-col items-center justify-center gap-5">
      <h3 className="font-semibold text-white">© Academlo 2022</h3>
      <article className="py-5">
        <span className="text-white bg-[#50504f] px-[14px] mx-3 py-3  rounded-full aspect-square text-2xl">
          <i className="bx bxl-instagram"></i>
        </span>
        <span className="text-white bg-[#50504f] px-[14px] mx-3 py-3  rounded-full aspect-square text-2xl">
          <i className="bx bxl-linkedin"></i>
        </span>
        <span className="text-white bg-[#50504f] px-[14px] mx-3 py-3  rounded-full aspect-square text-2xl">
          <i className="bx bxl-youtube"></i>
        </span>
      </article>
    </section>
  );
};

export default Footer;
