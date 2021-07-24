import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('pruebas en GifGridItem.js', () => {
  const title = 'Un titulo';
  const url = 'https://localhost/algo.jpg';
  let wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('Debe mostrar GifGridItem correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe tener la imagen igual al url y alt de los porps', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('Debe tener animate__fadeIn', () => {
    const div = wrapper.find('div');
    const className = div.prop('className');

    expect(className.includes('animate__fadeIn')).toBe(true);
  });
});
