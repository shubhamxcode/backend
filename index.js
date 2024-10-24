require('dotenv').config()
const express=require('express')
const app=express()
const port=5000
const gitdata=
{
    "login": "shubhamxcode",
    "id": 148454772,
    "node_id": "U_kgDOCNk9dA",
    "avatar_url": "https://avatars.githubusercontent.com/u/148454772?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/shubhamxcode",
    "html_url": "https://github.com/shubhamxcode",
    "followers_url": "https://api.github.com/users/shubhamxcode/followers",
    "following_url": "https://api.github.com/users/shubhamxcode/following{/other_user}",
    "gists_url": "https://api.github.com/users/shubhamxcode/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/shubhamxcode/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/shubhamxcode/subscriptions",
    "organizations_url": "https://api.github.com/users/shubhamxcode/orgs",
    "repos_url": "https://api.github.com/users/shubhamxcode/repos",
    "events_url": "https://api.github.com/users/shubhamxcode/events{/privacy}",
    "received_events_url": "https://api.github.com/users/shubhamxcode/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Shubham Varshney ",
    "company": null,
    "blog": "",
    "location": "knowledge park 2",
    "email": null,
    "hireable": null,
    "bio": "Hi i am a web developer",
    "twitter_username": "shubhamXcode",
    "public_repos": 27,
    "public_gists": 0,
    "followers": 1,
    "following": 4,
    "created_at": "2023-10-19T12:03:22Z",
    "updated_at": "2024-10-24T19:31:25Z"
  }
  
app.get('/',(req,res)=>{
    res.send("hello world")
})
app.get('/insta',(req,res)=>{
    res.send("this is insta url")
})
app.get('/code',(req,res)=>{
    res.send("<h1>this is h1 code</h1>")
})
app.get('/getit',(req,res)=>{
    res.send("this is get")
})
app.get('/github',(req,res)=>{
    res.json(gitdata)
})
app.listen(process.env.PORT,()=>{
    console.log(`example app litsning on port ${port}`);
})