# Execution
: Just Open Terminal and Issue `meteor` and then open an Internet browser and type `localhost:3000' on address bar.

# Todo
- update, delete(current only post insert feature works)
- ReactRouter SSR(Now, there are some bugs.)
(from https://github.com/thereactivestack/meteor-react-router-ssr/)

## Reference - How to install
: https://forums.meteor.com/t/how-to-setup-meteor-1-3beta-react-react-router-via-npm/16013/16

## Reference - backwards compatibility
: https://forums.meteor.com/t/solved-meteor-1-3-not-strictly-enforcing-import-export/16312

## Description about backwards compatibility from Meteor docs
> If you are familiar with modules in Node, you might expect modules not to be evaluated until the first time you import them. However, because earlier versions of Meteor evaluated all of your code when the application started, and we care about backwards compatibility, eager evaluation is still the default behavior. If you would like a module to be evaluated lazily(in other words: on demand, the first time you import it,just like Node does it), then you should put that module
in an imports/ directory (anywhere in your app, not just the root directory), and include that directory when you import the module: import {stuff} from "./imports/lazy".

## Reference - Meteor 1.3
: https://github.com/meteor/meteor/blob/release-1.3/packages/modules/README.md

## Reference - ReactRouter 2.0
: https://github.com/rackt/react-router/blob/master/upgrade-guides/v2.0.0.md#history-mixin

