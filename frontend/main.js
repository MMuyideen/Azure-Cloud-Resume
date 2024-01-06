window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl = 'https://deengetresumecounter.azurewebsites.net/api/getresumecounter?code=MYV3LboAiV8X2cL_UvlzFuDgT-mnVlx9w0HyB4YklfJbAzFuttc1lw=='
const localfunctionApi = 'http://localhost:7071/api/getresumecounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error) {
        console.log(error);
    });
    return count;
}
