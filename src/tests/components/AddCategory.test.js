import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en AddCategory.js', () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('Debe mostrar correctamnete', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe cambiar la caja de texto', () => {
    const input = wrapper.find('input');

    const value = 'Hola Mundo';

    input.simulate('change', { target: { value } });

    expect(wrapper.find('p').text().trim()).toBe(value);
  });

  test('No debe postear la informacion con submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
    let value = 'Hola Mundo';

    wrapper.find('input').simulate('change', { target: { value } });

    wrapper.find('form').simulate('submit', { preventDefault() {} });

    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1); // evalua el numero de veces que se hizo el llamado
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function)); //evalua si se uso una funcion
    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
