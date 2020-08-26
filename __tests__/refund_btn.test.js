import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import RefundButton from '../src/feature/main/element/refund_btn';

Enzyme.configure({adapter: new Adapter()});
describe('Button', () => {
  describe('Rendering', () => {
    it('should match to snapshot - Origin State State', () => {
      const component = shallow(<RefundButton isRefunded={false} />);
      expect(component).toMatchSnapshot('Origin State button snapshot');
    });
    it('should match to snapshot - Refunded State', () => {
      const component = shallow(<RefundButton isRefunded={true} />);
      expect(component).toMatchSnapshot('Refunded button snapshot');
    });
  });
});
