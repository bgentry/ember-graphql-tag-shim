# ember-graphql-tag-shim

This README outlines the details of collaborating on this Ember addon.

## Installation

```
ember install ember-graphql-tag-shim
```

## Usage

```js
import gql from 'graphql-tag';

const MyQuery = gql`
  query MyQuery {
    MyQuery() {
      id
      name
    }
  }
`
```

## Developing

### Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
