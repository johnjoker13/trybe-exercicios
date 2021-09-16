const insertStates = document.getElementById('estado');
const buttonForm = document.getElementById('btn-submit');
const inputValues = document.getElementById('formulario').children;
const textArea = document.getElementById('resumo');

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

function generateStates(arr) {
    const option = document.createElement('option');
    for (const i of arr) {
        const option = document.createElement('option');
        option.appendChild(document.createTextNode(i));
        insertStates.appendChild(option);
    }
}


function submitForm (e) {
    e.preventDefault();
    for(let i = 0; i<inputValues.length; i += 1) {
        if(inputValues[i].value == undefined) {
            inputValues[i].innerText = '';
        } else {
        const passingValue = inputValues[i].value;  
        const div = document.createElement('div');
        const p = document.createElement('p');
        p.appendChild(document.createTextNode(passingValue));
        div.appendChild(p);
        document.body.appendChild(div);
    }
    }
}


buttonForm.addEventListener('click', submitForm);
generateStates(brazilianStates);