import axios from 'axios';
import { backend } from '../datasource';

// export const getCall: <T>(path: string, data: any, authorized: boolean) => Promise<T> = async <T>(
export const getCall = async (path: string, data: any = {}, authorized: boolean = true) => {
  const authorization = localStorage.getItem('authorization');
  const resp = await axios.get(`${backend}${path}`, {
    ...(authorized
      ? {
          headers: {
            authorization: `Bearer ${authorization}`,
          },
        }
      : {}),
    params: {
      ...data,
    },
  });
  return resp.data;
};

export const putCall = async (path: string, data: any, authorized: boolean = true) => {
  const authorization = localStorage.getItem('authorization');
  const resp = await axios.put(
    `${backend}${path}`,
    {
      ...data,
    },
    authorized
      ? {
          headers: {
            authorization: `Bearer ${authorization}`,
          },
        }
      : {}
  );
  return resp.data;
};

export const postCall = async (path: string, data: any, authorized: boolean = true) => {
  const authorization = localStorage.getItem('authorization');
  const resp = await axios.post(
    `${backend}${path}`,
    {
      ...data,
    },
    authorized
      ? {
          headers: {
            authorization: `Bearer ${authorization}`,
          },
        }
      : {}
  );
  return resp.data;
};

export const deleteCall = async (path: string, data: any, authorized: boolean = true) => {
  const authorization = localStorage.getItem('authorization');
  const resp = await axios.delete(`${backend}${path}`, {
    ...(authorized
      ? {
          headers: {
            authorization: `Bearer ${authorization}`,
          },
        }
      : {}),
    data: {
      ...data,
    },
  });
  return resp.data;
};
