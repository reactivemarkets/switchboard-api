# Reactive Switchboard API

The Switchboard network provides a FIX API, REST API, and a WebSocket API.

## FIX API

Please contact support@reactivemarkets.com for the latest FIX specification.

## REST API

See the [openapi](openapi/) directory for the latest OpenAPI 3.0 definition of our REST API.

See our [Developer Docs](https://developer.reactivemarkets.com) for full documentation.

## WebSocket API

The WebSocket API uses [Google Flatbuffers](https://google.github.io/flatbuffers/) to binary-encode application messages trasmitted over WebSockets.
Flatbuffers provides an efficient serialisation/deserialisaton mechanism in terms of both processing
and space requirements.

See our [Developer Docs](https://developer.reactivemarkets.com) for full documentation.

### Getting Started

The Flatbuffers schema files are located in the [flatbuffers](flatbuffers/) directory.

Code can be generated for all languages supported by Flatbuffers using the `flatc` (>= v22.11.23) compiler:

```bash
flatc --rust flatbuffers/*.fbs
```

If you don't want to install flatc, you can use a docker container as a build tool.

```bash
docker run --rm -v $(pwd):/api neomantra/flatbuffers:v22.11.23 bash -c "flatc --rust -o /api/build/rust /api/flatbuffers/*.fbs"
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details
on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](https://semver.org/) for versioning. For the versions available, see the [releases
page](https://github.com/reactivemarkets/switchboard-api/releases).

## License

This project is licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0).
A copy of the license is available in the [LICENSE](LICENSE) file.
