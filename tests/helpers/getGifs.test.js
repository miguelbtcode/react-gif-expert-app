import { getGifs } from '../../src/helpers/getGifs';

describe('Pruebas en getGifs', () => {
  test('Debe de retornar un arreglo de gifs', async () => {
    const gifs = await getGifs('One Punch');
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0].id).toEqual(expect.any(String));
    expect(gifs[0].title).toEqual(expect.any(String));
    expect(gifs[0].url.startsWith('https://')).toBe(true);
  });
});
