import test from 'tape'

import leitmotiv from '../../lib/leitmotiv.mjs'

test('timing test', function (t) {
  t.plan(1)

  t.equal(typeof leitmotiv, 'function')
})
