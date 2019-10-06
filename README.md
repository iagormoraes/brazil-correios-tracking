# Brazil's Correios courier API

[![Version](https://img.shields.io/github/package-json/v/iagorm/brazil-correios-tracking?style=for-the-badge)](https://github.com/iagorm/brazil-correios-tracking)

An amazing API for tracking Brazil's Correios courier.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

### Prerequisites

The project recommends at time of development:

-   [`nodeJS`](https://nodejs.org/en/download/) (10.16.3)
-   [`yarn`](https://yarnpkg.com/en/docs/install) (1.17.3)

### Installing

To install the project and start running it, you must run:

```
$ yarn install
$ yarn start
```

## Built With

-   [cheerio](https://github.com/cheeriojs/cheerio) - Fast, flexible, and lean implementation of core jQuery designed specifically for the server.
-   [express](http://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
-   [request](https://github.com/request/request) - Request is designed to be the simplest way possible to make http calls.
-   [prettier](https://github.com/prettier/prettier) - Prettier is an opinionated code formatter.
-   [eslint](https://github.com/eslint/eslint) - ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.

## Examples

#### GET /v1/package -- no package/package list passed as parameters

```json
    "must receive list of packages"
```

#### GET /v1/package/OH756347841BR -- valid code

```json
    {
        "progress": 100,
        "packHistory": [...]        
    }
```
#### GET /v1/package/OH756347842BR -- invalid code

```json
    {
        "message": "code dont exist!"
    }
```

#### GET `/v1/package?id[]=OH756347841BR&id[]=OH756347841BR` -- using multiple package IDs

```json
    {
    "packList": [
            {
                "progress": 100,
                "packHistory": [...],
            },
            {
                "progress": 100,
                "packHistory": [...]
            }
        ],
        "userAgent": ...,
        "acceptLanguage": ...,
        "ip": ...,
        "requestedDate": ...
    }
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

-   **Iagor Moraes** - _Initial work_ - [Iagorm](https://github.com/iagorm)

See also the list of [contributors](https://github.com/iagorm/brazil-correios-tracking/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
