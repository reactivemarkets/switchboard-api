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

set -eu

tempdir=build/tmp

onexit()
{
    # Remove temporary directory on exit.
    rm -rf "$tempdir"
}

# Remove old build directory.
rm -fr build
mkdir -p "$tempdir"
trap onexit INT EXIT

generate()
{
    local lang=$1
    local ns=$2
    local opts="${@:3}"

    if [[ "$ns" = "" ]]; then
        # If namespace is empty, then simply copy fbs files to temporary directory.
        cp flatbuffers/*.fbs "$tempdir/"
    else
        # Substitute namespace placeholder with language-specific namespace.
        for f in flatbuffers/*.fbs; do
            sed "s|// {{namespace}}|namespace $ns;|" $f >"$tempdir/${f##*/}"
        done
    fi
    flatc "--$lang" $opts -o "build/$lang" "$tempdir/"*.fbs
}

generate cpp reactive.papi --no-prefix --scoped-enums
generate csharp ReactiveMarkets.Switchboard
generate go papi
generate java com.reactivemarkets.papi
generate python reactive.papi
generate ts Switchboard --short-names --no-fb-import
