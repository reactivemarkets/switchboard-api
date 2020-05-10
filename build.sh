#!/bin/bash
# Copyright (C) 2020 Reactive Markets Limited
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http:#www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

set -euo pipefail

# Remove old build directory.
rm -fr build

# Generate for languages that do not require additional options.
for lang in java js python ts; do
    flatc --$lang -o build/$lang flatbuffers/*.fbs
done

# Generate for C++ with additional options.
flatc --cpp --no-prefix --scoped-enums \
      -o build/cpp flatbuffers/*.fbs

# Generate for Go with overridden namespace.
flatc --go --go-namespace papi \
      -o build/go flatbuffers/*.fbs

# Update Java package name to: com.reactivemarkets.papi
# N.B. the flatc code-generator for Java does not support an option
# for overriding the namespace.

sed -i 's/package reactivemarkets.papi;/package com.reactivemarkets.papi;/' \
    build/java/reactivemarkets/papi/*.java
mkdir build/java/com
mv build/java/reactivemarkets build/java/com/
