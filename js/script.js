
function mostrar_html() {

   var texto_curto = document.getElementById('texto-curto').innerHTML="HTML é uma linguagem de marcação utilizada na construção de páginas na Web.";
}
function mostrar_css() {
    var texto_curto = document.getElementById('texto-curto').innerHTML="CSS Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web.";
 }
  
 function mostrar_js() {
    var texto_curto = document.getElementById('texto-curto').innerHTML="JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.";
 }
  
 function mostrar_php() {
    var texto_curto = document.getElementById('texto-curto').innerHTML="PHP é uma linguagem interpretada livre, usada originalmente apenas para o desenvolvimento de aplicações no lado do servidor, capazes de gerar conteúdo dinâmico Web. ";
 }

 function mostrar_mysql() {
    var texto_curto = document.getElementById('texto-curto').innerHTML="O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface.";
 }

 function mostrar_sql() {
    var texto_curto = document.getElementById('texto-curto').innerHTML="Structured Query Language, ou Linguagem de Consulta Estruturada ou SQL, é a linguagem de pesquisa declarativa padrão para banco de dados relacional.";
 }

 function mostrar_python() {
    var texto_curto = document.getElementById('texto-curto').innerHTML="Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte.";
 }

 function mostrar_c() {
    var texto_curto = document.getElementById('texto-curto').innerHTML="C é uma linguagem de programação compilada de propósito geral, estruturada, imperativa, procedural.";
 }

 function mostrar_ccc() {
    var texto_curto = document.getElementById('texto-curto').innerHTML="C++ é uma linguagem de programação compilada multi-paradigma e de uso geral.";
 }

 function mostrar_delphi() {
    var texto_curto = document.getElementById('texto-curto').innerHTML="Embarcadero Delphi, anteriormente conhecido como CodeGear Delphi, Inprise Delphi e Borland Delphi, também conhecido como Delphi.";
 }

  /*function mostrar_frase(){
   var texto_curto = document.getElementById('feliz_natal').innerHTML="Feliz natal e boas<br> festas!!! 🥳"; 
 }

   function fechar_frase(){
   var texto_curto = document.getElementById('feliz_natal').innerHTML=""; 
 }
*/
  const texto = "Formando em Análise e Desenvolvimento de Sistemas";
  const velocidade = 100; // velocidade em milissegundos entre cada letra
  let animacaoIniciada = false; // variável de controle
  
  function escreverTexto() {
    if (!animacaoIniciada) { // verifica se a animação já foi iniciada
      animacaoIniciada = true; // atualiza a variável de controle
      
      const elemento = document.querySelector("#meu-texto");
      let i = 0;
      const intervalo = setInterval(function() {
        elemento.style.display = "block";
        elemento.textContent += texto.charAt(i);
        i++;
        if (i > texto.length) {
          clearInterval(intervalo);
          animacaoIniciada = false; // reinicia a variável de controle
        }
      }, velocidade);
    }
  }
