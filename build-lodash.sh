#!/usr/bin/env bash

FUNCTIONS=chunk,flatten,flattenDeep,uniq,uniqBy,groupBy,orderBy,random,get,has,set,unset,invert,merge,omit,omitBy,pick,pickBy,capitalize,upperFirst,startCase,split,range,toPath
yarn lodash include=$FUNCTIONS strict exports=node -d -o ./src/lodash.custom.js
