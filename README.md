# Dashboard API

Backend using NodeJS, MongoDB and Docker.

The API is [REST API](https://en.wikipedia.org/wiki/Representational_State_Transfer "RESTful").
Currently, return format for all endpoints is [JSON](https://json.org/ "JSON").

## Technologies

This project was developed with the following technologies:

- [axios](https://github.com/axios/axios)
- [mongodb](https://www.mongodb.com/)
- [mongoose](https://mongoosejs.com/)
- [docker](https://docker.com/)
- [express](https://expressjs.com/)
- [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

## How to use it?

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js][nodejs] or higher + [Yarn][yarn] or higher installed on your computer. From your command line:

``` bash
# Clone this repository
$ git clone https://github.com/saulofilho/challenge-geekhunter

# Go into the repository
$ cd challenge-geekhunter && cd api

# Install dependencies
$ npm install

# Run the app
$ npm start
```

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

## Setup for localhost

- Install Docker.
- Create a cluster at MongoDB: <https://www.mongodb.com/cloud/atlas>
- Set the variables in `.env` as `.env.example`.
- Build an image from a Dockerfile: `docker build -t food-api .`
- Run the container: `docker run -p 3333:3333 -d food-api`
- Launch api: `docker-compose up`
- That's all! Go to <http://localhost:3333/> to see live.

## API Rest

Get message and status: `GET /`
Get product by code: `GET /product/:code`
Get an array of 100 products: `GET /products`

By default the objects will be sorted by `imported_t` in order to have the most important objects first.

URL to query                   | Description
------------------------------ | ---------------------------
`GET` `/`                      | Return `200`.
`GET` `/candidate/id`          | Get a candidate by code eg. `/candidate/31562`
`GET` `/candidates`            | Return a list of `Candidates`.
`POST` `/candidates`           | Save a list of `Candidates`.
`GET` `/job/id`                | Get a job by code eg. `/job/33868`
`GET` `/jobs`                  | Return a list of `Jobs`.
`POST` `/jobs`                 | Save a list of `Jobs`.

### Example

#### Request

``` json
GET /candidate/31562
```

#### Return

``` json
  {
    "technologies": [
      {
        "name": "Java",
        "is_main_tech": true
      },
      {
        "name": "Python",
        "is_main_tech": false
      },
      {
        "name": "Java (Android)",
        "is_main_tech": false
      },
      {
        "name": "Ruby",
        "is_main_tech": false
      },
      {
        "name": "Objective-C (iOS)",
        "is_main_tech": false
      },
      {
        "name": "Ruby on Rails",
        "is_main_tech": false
      },
      {
        "name": "Hibernate",
        "is_main_tech": false
      },
      {
        "name": "Linux",
        "is_main_tech": false
      },
      {
        "name": "Web Services",
        "is_main_tech": false
      },
      {
        "name": "RESTful",
        "is_main_tech": false
      },
      {
        "name": "Docker",
        "is_main_tech": false
      },
      {
        "name": "Elasticsearch",
        "is_main_tech": false
      },
      {
        "name": "Node.js",
        "is_main_tech": true
      },
      {
        "name": "Spring",
        "is_main_tech": false
      }
    ],
    "_id": "609d647721f3844e76868816",
    "id": 31562,
    "city": "Rio de Janeiro - RJ",
    "experience": "12+ years",
    "__v": 0
  }
```

### Creator

#### Saulo Filho

- <https://github.com/saulofilho>
