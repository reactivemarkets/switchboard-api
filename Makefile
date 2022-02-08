# Usage:
# make        # generate all source code
# make clean  # remove ALL generated code

SRC := flatbuffers/*.fbs
DEST := build

.PHONY: all
all: clean generate

.PHONY: generate
generate: generate-cpp generate-go generate-python generate-rust generate-ts
	@echo "Done."

.PHONY: generate-cpp
generate-cpp:
	@echo "Generating cpp files..."
	@flatc --cpp --no-prefix --scoped-enums -o ${DEST}/cpp ${SRC}

.PHONY: generate-go
generate-go:
	@echo "Generating go files..."
	@flatc --go -o ${DEST}/go ${SRC}

.PHONY: generate-python
generate-python:
	@echo "Generating python files..."
	@flatc --python -o ${DEST}/python ${SRC}

.PHONY: generate-rust
generate-rust:
	@echo "Generating rust files..."
	@flatc --rust -o ${DEST}/rust ${SRC}

.PHONY: generate-ts
generate-ts:
	@echo "Generating typescript files..."
	@flatc --ts --short-names --no-fb-import -o ${DEST}/typescript ${SRC}

.PHONY: clean
clean:
	@echo "Removing ${DEST} folder..."
	@rm -rf ${DEST}
