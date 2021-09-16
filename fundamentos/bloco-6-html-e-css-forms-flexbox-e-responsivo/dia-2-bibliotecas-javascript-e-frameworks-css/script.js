const insertStates = $('#estados');

$("input:text").addClass("form-control");
$("input:email").addClass("form-control");

$("select").addClass("default");

$("input:checkbox").addClass("form-check-input");

const brazilianStates = ['Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espirito Santo',
    'Goiás',
    'Maranhão',
    'Mato Grosso do Sul',
    'Mato Grosso',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraima',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins'];


   brazilianStates.forEach(value => {
      let $option = $("<option></option>");
      $option.append(value);
       $("select").append($option);
    });
  
    
