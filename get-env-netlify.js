#! /usr/bin/env node

let envName = "main";

require('fs')
    .writeFileSync(".config-env", `REACT_APP_CONFIG_ENV=environments/${envName}`);
