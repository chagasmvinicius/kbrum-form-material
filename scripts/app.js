
const form = document.querySelector('#form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  
  let answers = {
    formato: document.getElementById('formato-material').value,
    e_dt_comemorativa: document.getElementById('e-dt-comemorativa').value,
    dt_comemorativa: (document.getElementById('dt-comemorativa').value).split('-').reverse().join('/'),
    titulo: document.getElementById('titulo-material').value,
    legenda: document.getElementById('legenda-material').value,
    observacoes: document.getElementById('observacoes').value,
    anexos: document.getElementById('anexo').files
  }

  console.log(answers);
});
