function fetchPostData(){

return new Promise((resolve, reject) => {
    setTimeout(() => {
         resolve("post fetched successfully")
    },  1000);
});
}
function fetchCommentsData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
             resolve("comments fetched successfully")
        },  1000);
    });

}


async function getBlogData(){
try {
     console.log("fetching  blog data ");
    //  let blogData=await fetchPostData();
    //  let commentsData=await fetchCommentsData();
     const [PostData,commentsData] = await Promise.all([fetchPostData(),fetchCommentsData()])
        console.log("blog data",PostData);
        console.log("comments data",commentsData);
} catch (error) {
    console.log("error fetching data",error);
}

}
getBlogData();