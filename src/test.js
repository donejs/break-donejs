import F from 'funcunit';
import QUnit from 'steal-qunit';

import 'break-donejs/models/test';

F.attach(QUnit);

QUnit.module('break-donejs functional smoke test', {
  beforeEach() {
    F.open('./development.html');
  }
});

QUnit.test('break-donejs main page shows up', function() {
  F('title').text('break-donejs', 'Title is set');
});
