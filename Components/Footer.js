// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a
        href="https://www.linkedin.com/in/madhumitajadhav/"
        target="_blank"
        title="Madhumita Jadhav's Linkedin Profile"
      >
        Madhumita Jadhav
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year}
      <a
        href="https://github.com/madhumita68"
        target="_blank"
        title="Food Fire Github Repository"
      >
        <strong>
          Namste Food
        </strong>
      </a>
    </div>
  );
};

export default Footer;
