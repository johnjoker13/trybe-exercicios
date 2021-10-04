const RIGHT_ANSWERS = ['Z', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['Z', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkScores = (template, answers) => {
    let count = 0;
    answers.forEach((c => {
        if (template.some(a => a === c)) {
            count += 1;
        } else {
            count -= 1; 
        }
    }));
    return count;
};



const scores = (template, submitted, func) => {
    return func(template, submitted);
}

console.log(scores(RIGHT_ANSWERS, STUDENT_ANSWERS, checkScores));
