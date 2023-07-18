const results = document.getElementById('results');
const resultsBtn = document.getElementById('getData');



resultsBtn.addEventListener('click', () => {
    getAdvice();
})

window.onload = () => {
    getAdvice();
}

function getAdvice(){
    fetch(' https://api.adviceslip.com/advice').then(response => {
    return response.json();
    }).then(adviceData => {
    const adviceObj = adviceData.slip;
    results.innerHTML = `<h1>ADVICE #${adviceObj.id}</h1> <p>"${adviceObj.advice}"</p>`;
    }).catch (error => {
    console.log(error);
    });
}