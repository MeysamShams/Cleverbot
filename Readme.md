<div align="center">
  <div><img src="https://raw.githubusercontent.com/MeysamShams/Cleverbot/main/client/public/clever.png" width="70" /></div>
  <b>
    <a href="https://cleverbot.vercel.app"> Cleverbot </a> is a Chat-GPT client 
  </b>
  <br/>
  <br/>
    <img src="/client/screenshots/homepage.png" width="100%" />
</div>


## Installation
#### Client :
```bash
$ cd client && npm install
```
#### Server :
1. Install required dependencies:
```bash
$ cd server && npm install
```
2. Run database migrations :
```bash
$ npx prisma migrate dev
```

3. Create ``.env`` file in ``server`` folder with this values :
<table>
  <tr>
    <td>
      HTTP_PORT
    </td>
    <td>
      Http port (defalut: 80)
    </td>
  </tr>
  <tr>
    <td>
      HTTPS_PORT
    </td>
    <td>
      Https port (default: 443)
    </td>
  </tr>
   <tr>
    <td>
      DATABASE_URL
    </td>
    <td>
      SQLite DB path
    </td>
  </tr>
  <tr>
    <td>
      TOKEN_SECRET
    </td>
    <td>
      JWT secret code
    </td>
  </tr>
    <tr>
    <td>
      TOKEN_EXPIRE_TIME
    </td>
    <td>
      JWT expire time (default: 10d)
    </td>
  </tr>
  <tr>
    <td>
      OPENAI_TOKEN
    </td>
    <td>
      Your OpenAI token
    </td>
  </tr>
    <tr>
    <td>
      PRIVATE_KEY (Optional)
    </td>
    <td>
      Your SSL .key file path
    </td>
  </tr>
  <tr>
    <td>
      CERTIFICATE (Optional)
    </td>
    <td>
      Your SSL .cert file path
    </td>
  </tr>
</table>


## Running the app
##### Server :
```bash
$ npm run dev
```
##### Client :
```bash
$ npm run dev
```

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

