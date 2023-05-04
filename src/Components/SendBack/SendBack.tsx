async function SendBack(topic : any) {
    try {
        const response : any = await fetch(`${process.env.REACT_APP_URL_BACK}/api/post`, 
            {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(topic),}
        )

        const result = await response.json()
        return result;
    } 
    catch (error) {
        return null;
    }
}

export default SendBack;