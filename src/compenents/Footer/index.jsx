import "./footer.css";

function Footer(props) {
  return (
    <footer style={{ bottom: props.position }} className="footer-area">
      <section className="footer-texts">
        <p>
          <span>Rua</span>: Rua tal, numero tal, Russas - CE
        </p>
        <p>
          <span>Email</span>:combateadengue@gmail.com
        </p>
        <p>
          <span>Telefone</span>: (88) 99876-5432
        </p>
      </section>

      <section className="footer-copy">
        <p>&copy; 2024 Minha Página.</p>
      </section>
    </footer>
  );
}

export default Footer;
