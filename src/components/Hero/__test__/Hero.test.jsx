import renderer from 'react-test-renderer';
import Hero from '../Hero';


jest.mock('react-router-dom', () => ({
    Link: 'Link',
  }));
  describe('Hero', () => {
    it('renders correctly', () => {
      const tree = renderer.create(<Hero/>).toJSON();
      expect(tree).toMatchSnapshot();
    });
  })
