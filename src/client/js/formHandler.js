function handleSubmit(event) {
    event.preventDefault()

    let website = document.getElementById('website').value;

    if(Client.urlValidator(website)){
        fetch('http://localhost:8081/api', {
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({articleUrl: `${website}`})
        })
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('resultWrapper').style.display = 'block';
            document.getElementById('resultText').innerHTML = `That news article is <strong>${res.polarity}</strong> and <strong>${res.subjectivity}</strong>.`;
            document.getElementById('extract').innerHTML = res.text;
        })
    }
}

export { handleSubmit }
