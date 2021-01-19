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


const addpost=(post,callback) =>{
    setTimeout(()=>{
        posts.push(post);
        callback();

    },2000);

}
addpost({id:3, title:"Chapter2"},getPosts);
