/**
 * Copyright 2015 - Present, Yahoo Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

import I13nNodeLib from './dist-es/core/I13nNode';
import ReactI13nLib, { getInstance as getInstanceLib } from './dist-es/core/ReactI13n';

import createI13nNodeLib from './dist-es/core/createI13nNode';
import setupI13nLib from './dist-es/core/setupI13n';

import I13nAnchorLib from './dist-es/components/I13nAnchor';
import I13nButtonLib from './dist-es/components/I13nButton';
import I13nDivLib from './dist-es/components/I13nDiv';

// Core libraries
export var I13nNode = I13nNodeLib;
export var ReactI13n = ReactI13nLib;
export var getInstance = getInstanceLib;

// Utils
export var createI13nNode = createI13nNodeLib;
export var setupI13n = setupI13nLib;

export var I13nAnchor = I13nAnchorLib;
export var I13nButton = I13nButtonLib;
export var I13nDiv = I13nDivLib;
