import Mailgun from "mailgun-js";
import FormData from "form-data";

function formSubmit(event) {
  event.preventDefault();

  const form = document.querySelector("form");
  const formData = new FormData(form);

  const MAILGUN_INFOS = {
    API_KEY: "9f4d826d8286642f5ff558fd948100da-102c75d8-17b9e608",
    DOMAIN: "sandbox6bc7fff843684777a3d6391c5ea5da60.mailgun.org",
    FROM: "postmaster@sandbox6bc7fff843684777a3d6391c5ea5da60.mailgun.org",
    TO: "vmc.mart@gmail.com",
  };

  const mailgun = Mailgun({
    apiKey: MAILGUN_INFOS.API_KEY,
    domain: MAILGUN_INFOS.DOMAIN,
  });

  var data = {
    from: MAILGUN_INFOS.FROM,
    to: MAILGUN_INFOS.TO,
    subject: "Material para o Marketing Digital",
    text: formData,
  };

  mailgun.messages().send(data, function (error, body) {
    console.log(body);
  });
}

/*
curl -s --user 'api:9f4d826d8286642f5ff558fd948100da-102c75d8-17b9e608' \
https://api.mailgun.net/v3/sandbox6bc7fff843684777a3d6391c5ea5da60.mailgun.org/messages \
-F from=postmaster@sandbox6bc7fff843684777a3d6391c5ea5da60.mailgun.org \
-F to=vmc.mart@gmail.com \
-F subject='Hello' \
-F text='Titulo: ABC\nTitulo2: ABC2\nTitulo3: ABC3\nTitulo4: ABC4\n'
*/
