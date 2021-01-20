//call back

const posts =[
    {id:1, title:"Introduction"},
    {id:2, title:"Chapter 1"}
]

const getPosts =() => {
    let lis =''
    setTimeout(()=>{
        posts.forEach(post=>{
            lis+=`<li> ${post.id} -${post.title} </li>`
        })
        document.getElementById("postlist").innerHTML=lis;
    },1000);
}


const addPost =(post)=>{
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            posts.push(post);
            let err = false;
            if(err){
                reject();
            }
            else{
                resolve();
            }
    
        },2000);
    
    })
    
}
//addPost({id:3, title:"Chapter2"})
//.then(getPosts)
//.catch(()=>{
  //  console.log("error occured")

//})
let p1= new Promise((resolve,reject)=>{
    resolve("promise1")
});
let p2=10;
let p3=Promise.resolve("another promise");
Promise.all([p1,p2,p3 ]).then((res)=>{
    console.log(res)

})

