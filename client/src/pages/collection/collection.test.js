import React from 'react';
import { shallow } from 'enzyme';
import { CollectionPage } from './collectionpreview';

it('should render CollectionsOverview component', () => {
  expect(shallow(<CollectionPage collection={[]} />)).toMatchSnapshot();
});