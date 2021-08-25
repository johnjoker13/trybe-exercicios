let estadoCandidato = 'reprovado';

switch (estadoCandidato) {
    case "aprovada":
        console.log("Parabéns, você foi aprovado(a)");
        break;
    case "lista":
        console.log("Você está na lista de espera");
        break;
    case "reprovado":
        console.log("Você foi reprovado(a)");
        break;
    default:
        console.log("não se aplica")
}