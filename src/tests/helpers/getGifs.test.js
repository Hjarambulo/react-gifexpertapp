import '@testing-library/jest-dom';
import { getGifs } from '../../helpers/getGifs';

describe('Pruebas en getGifs', () => {
  test('Debe de traer 10 elementos', async () => {
    const gifs = await getGifs('One Punch');

    expect(gifs.length).toBe(10);
  });

  test('Debe retornar 0 elementos al no enviar la categoria', async () => {
    const gifs = await getGifs('');

    expect(gifs.length).toBe(0);
  });
});
