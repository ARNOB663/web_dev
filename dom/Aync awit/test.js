
function fetchUserData(){

return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({name: 'John', age: 30});
    }, 2000);
});
}

async function getUserData(){
    try{
         console.log('Fetching data...');
         let userdata = await fetchUserData();
            console.log('Data fetched:', userdata);
    }
    catch(error){
        console.log(error);
    }
}
getUserData();