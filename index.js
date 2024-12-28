require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData ={
  "login": "sheemasaba24",
  "id": 177601585,
  "node_id": "U_kgDOCpX8MQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/177601585?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/sheemasaba24",
  "html_url": "https://github.com/sheemasaba24",
  "followers_url": "https://api.github.com/users/sheemasaba24/followers",
  "following_url": "https://api.github.com/users/sheemasaba24/following{/other_user}",
  "gists_url": "https://api.github.com/users/sheemasaba24/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/sheemasaba24/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/sheemasaba24/subscriptions",
  "organizations_url": "https://api.github.com/users/sheemasaba24/orgs",
  "repos_url": "https://api.github.com/users/sheemasaba24/repos",
  "events_url": "https://api.github.com/users/sheemasaba24/events{/privacy}",
  "received_events_url": "https://api.github.com/users/sheemasaba24/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 2,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-08-06T04:54:51Z",
  "updated_at": "2024-12-25T05:31:09Z"
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('Sheema!')
  })
  app.get('/msg', (req, res) => {
    res.send('<h1>WELCOME SHEEMS</h1>')
  })
app.get('/sheems',(req,res)=>{
    res.send('<h2>Hello sheema</h2>')
})
app.get('/github',(req,res)=>
{
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})