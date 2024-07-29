import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookies = (name: string, value: string) =>
  cookies.set(name, value);
export const getCookies = (name: string) => cookies.get(name);
export const deleteCookie = (name: string) =>
  cookies.remove(name, { path: '/' });
