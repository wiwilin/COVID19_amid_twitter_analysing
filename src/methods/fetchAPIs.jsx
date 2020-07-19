export const fetchHospitals = () => {

    const url='http://172.26.131.49:8081/hospital/'
    fetch(url)
        .then(res => res.json())
        .then(data=>console.log(data))
        .catch(error => console.log(error))

}

