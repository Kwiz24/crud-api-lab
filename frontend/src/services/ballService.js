
const fetchBalls = async() => {
    try {
        const res = await fetch('http://localhost:3000/balls');
        const data = await res.json()
        return data;
    } catch (error) {
        console.log(error);
    }
}

const createBall = async (formData) => {
    try {
        const res = await fetch('http://localhost:3000/balls', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

const updateBall = async (formData, _id) => {
    try {
        const res = await fetch('http://localhost:3000/balls/' + _id, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}


export { fetchBalls, createBall, updateBall };