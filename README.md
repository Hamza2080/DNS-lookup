# DNS checker example Full-Stack

## Overview

DNS checker is sample node express (ejs) full stack example to check whether a dns is valid or not.


## Installation & Local Run
Ensure you have node 10 or higher.

1. Clone the code
2. `npm install`
3. `npm start`

To  start server in dev mode 
1. `npm run dev` or `npm run dev:watch` 

## Usage
Front end
```
http://localhost:3000
```

### API Call
Local:
```
curl -X GET http://localhost:3000/api
```


### Response
```json
{
  "success": true,
  "addresses" : ["192.123.123.55"]
}
``` 
