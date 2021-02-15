import { statement, htmlStatement } from './statement';
import { expect } from 'chai';
describe('chapter1', function () {
  it('statement(invoice, plays)', function () {
    const invoices = require('./invoices.json')
    const plays = require('./plays.json')
    const expectResult = 'Statement for BigCo\n'
      + ' Hamlet: $650.00 (55 seats)\n'
      + ' As You Like It: $580.00 (35 seats)\n'
      + ' Othello: $500.00 (40 seats)\n'
      + 'Amount owed is $1,730.00\n'
      + 'You earned 47 credits\n';
    expect(statement(invoices[0], plays)).to.be.equal(expectResult);
  });

  it('htmlStatement(invoice, plays)', function () {
    const invoices = require('./invoices.json')
    const plays = require('./plays.json')
    const expectResult = '<h1>Statement for BigCo</h1>\n'
      + '<table>\n'
      + '<tr><th>play</th><th>seats</th><th>cost</th></tr>'
      + ' <tr><td>Hamlet</td><td>55</td><td>$65,000.00</td></tr>\n'
      + ' <tr><td>As You Like It</td><td>35</td><td>$58,000.00</td></tr>\n'
      + ' <tr><td>Othello</td><td>40</td><td>$50,000.00</td></tr>\n'
      + '</table>\n'
      + '<p>Amount owed is <em>$173,000.00</em></p>\n'
      + '<p>You earned <em>47</em> credits</p>\n';
    expect(htmlStatement(invoices[0], plays)).to.be.equal(expectResult);
  });
});

