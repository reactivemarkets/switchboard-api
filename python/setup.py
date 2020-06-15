# -*- coding: utf-8 -*-
# Reactive Markets Platform API
# Copyright (C) 2020 Reactive Markets Limited
#
# Licensed under the Apache License, Version 2.0 (the "License") modified
# with Commons Clause Restriction; you may not use this file except in
# compliance with the License. See the LICENSE file for details.
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

""""
Setup file.
"""

from setuptools import setup, find_packages

setup(
    use_scm_version={
        "root": "..",
    },
    setup_requires=['setuptools_scm'],
    packages=find_packages(),
    package_dir={"reactive": "reactive"},
    namespace_packages=['reactive'],
)
