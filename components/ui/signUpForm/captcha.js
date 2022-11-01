import html from "../../../public/captcha.html";

export default function Captcha() {
  return (
    <div>
      <div>
        <div style={{ width: "304px", height: "78px" }}>
          <div>
            <iframe
              title="reCAPTCHA"
              src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI&amp;co=aHR0cDovL2xvY2FsaG9zdDozMDAw&amp;hl=uk&amp;type=image&amp;v=NJPGLzpIZgjszqyOymHUP0XR&amp;theme=dark&amp;size=normal&amp;badge=bottomright&amp;cb=1io6rjpuxzw9"
              width="304"
              height="78"
              role="presentation"
              name="a-u8b77otcg26i"
              frameBorder="0"
              scrolling="no"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
            >
              <iframe src="./captcha.html"></iframe>
            </iframe>
          </div>
          <textarea
            id="g-recaptcha-response"
            name="g-recaptcha-response"
            className="g-recaptcha-response"
            style={{
              width: "250px",
              height: "40px",
              border: "1px solid rgb(193, 193, 193)",
              margin: "10px 25px",
              padding: "0px",
              resize: "none",
              display: "none",
            }}
          ></textarea>
        </div>
        <iframe style={{ display: "none" }}></iframe>
      </div>
    </div>
  );
}
