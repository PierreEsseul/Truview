async function SendBack(topic : any) {
    try {
        const response : any = await fetch(`http://localhost:5002/api/post`, 
            {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(topic),}
        )

        const result = await response.json()
        console.log('😊',result);
        return result;
    } 
    catch (error) {
        return null;
    }
}

export default SendBack;