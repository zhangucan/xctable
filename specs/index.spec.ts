import {assert} from 'chai';
import { getColumns } from '../src/util';
const source = [
  {
    target: 'xc.device.gps{imei=868183030470848}',
    datapoints: [
      [
        '{"hdop":"1.2200000286102295","vdop":"0.94","pdop":"1.65","inUse":"7","inView":"13","satellite":"6"}',
        1553522841000,
      ],
      [
        '{"hdop":"1.3600000143051147","vdop":"0.94","pdop":"1.65","inUse":"7","inView":"13","satellite":"5"}',
        1553522974000,
      ],
    ],
  },
];
const target = {
  columns: [{text: 'Time', type: 'date'}, {text: 'xc.device.gps{imei=868183030470848}'}],
  columnMap: {},
  rows: [
    [
      1553522841000,
      '{"hdop":"1.2200000286102295","vdop":"0.94","pdop":"1.65","inUse":"7","inView":"13","satellite":"6"}',
    ],
    [
      1553522974000,
      '{"hdop":"1.3600000143051147","vdop":"0.94","pdop":"1.65","inUse":"7","inView":"13","satellite":"5"}',
    ],
    [
      1553523102000,
      '{"hdop":"1.2100000381469727","vdop":"0.94","pdop":"1.65","inUse":"7","inView":"13","satellite":"5"}',
    ],
  ],
  type: 'table',
};
describe('plugins sample test', () => {
  it('taransfor data', () => {
    const target = getColumns(source);
    const expect = ['hdop', 'vdop', 'pdop', 'inUse', 'inView', 'satellite'].map(item => ({
      text: item
    }));
    assert.deepEqual(target, expect);
  });
});
