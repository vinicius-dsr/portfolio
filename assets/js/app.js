
// Email JS

function validate(){
  let nome = document.querySelector(".nome");
  let empresa = document.querySelector(".empresa");
  let email = document.querySelector(".email");
  let telefone = document.querySelector(".telefone");
  let site = document.querySelector(".site");
  let projeto = document.querySelector(".projeto");
  let orcamento = document.querySelector(".orcamento");
  let prazo = document.querySelector(".prazo");
  let sobre = document.querySelector(".sobre");
  let referencia = document.querySelector(".referencia");
  let sendBtn = document.querySelector(".send-btn");

  sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      nome.value == "" || empresa.value == "" || email.value == "" || telefone.value == "" || projeto.value == "" || orcamento.value == "" || prazo.value == "" || sobre.value == "" || referencia.value == ""
    ) {
      emptyerror();
    } else {
      sendmail(nome.value, empresa.value, email.value, telefone.value, site.value, projeto.value, orcamento.value, prazo.value, sobre.value, referencia.value);
      success();
    }
  })
}

validate();

function sendmail(nome, empresa, email, telefone, site, projeto, orcamento, prazo, sobre, referencia) {
  emailjs.send("service_76p0m0o", "template_nv97k5j", {
    from_name: nome,
    to_name: "Vinícius Reis",
    message: ["NOME ->", nome, "    ", "EMPRESA ->", empresa, "   ", "EMAIL ->", email ,"   ", "TELEFONE ->", telefone, "   ", "SITE ->", site,"    ", "PROJETO ->", projeto,"    ", "ORÇAMENTO ->", orcamento,"    ", "PRAZO ->", prazo,"    ", "SOBRE ->", sobre, "   ", "REFERÊNCIA   ->",  referencia,],
  })
}

function emptyerror() {
  swal({
    title: "Atenção",
    text: "Todos os campos deve estar preenchidos",
    icon: "error",
  });
}

function success() {
  swal({
    title: "Email enviado com sucesso",
    text: "Obrigado, entrarei em contato assim que possível",
    icon: "success",
  });
}

