async function storeSearchterm(term) {

    try {
        var res = await fetch(term);
        var data = await res.json();
        return data;
    } catch (error) {
        console.log('error:', error)  
    }


}

export default storeSearchterm