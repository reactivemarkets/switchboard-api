# Reactive Platform API

The Reactive Platform provides a API for subscribing to streaming market-data over WebSockets.

The API uses [Google Flatbuffers](https://google.github.io/flatbuffers/) to binary-encode
application messages trasmitted over WebSockets.
Flatbuffers provides an efficient serialisation/deserialisaton mechanism in terms of both processing
and space requirements.

See our [Developer Docs](https://developer.reactivemarkets.com) for full documentation.

## Getting Started

Generated code for the following languages is available on the
[latest](https://github.com/reactivemarkets/platform-api/tree/latest) branch and
[releases](https://github.com/reactivemarkets/platform-api/releases):

- C++
- C#
- Go
- Java
- Python
- TypeScript

The Flatbuffers schema files are located in the [flatbuffers](flatbuffers/) directory.

Code can be generated for additional languages supported by Flatbuffers using the `flatc` compiler:

```bash
$ flatc --rust *.fbs
```

### Installing

Build artefacts are available for several languages:

- Go: `go get github.com/reactivemarkets/platform-api@latest`
- Java: [Maven Package](https://search.maven.org/artifact/com.reactivemarkets/papi)
- Python: [PyPi Package](https://pypi.org/project/reactive-papi)
- JavaScript: [NPM Package](https://www.npmjs.com/package/@reactivemarkets/platform-api)

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details
on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](https://semver.org/) for versioning. For the versions available, see the [releases
page](https://github.com/reactivemarkets/platform-api/releases).

## License

This project is Licensed under the
[Apache License, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0)
(the "License") modified with [Commons Clause Restriction](https://commonsclause.com).
See the [LICENSE](LICENSE) file for details.
