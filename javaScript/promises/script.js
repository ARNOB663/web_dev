function fetchData(){

 return Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched')
      if(`Data fetched`){
        console.log('Data fetched');
      }else{
        console.log('Data not fetched');
        }
    }, 2000);
 });
}

fetchData();