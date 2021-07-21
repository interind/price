function api(url: string) {
  function getResponse(res: any) {
    const status = [200, 400, 401, 409];
    if (status.includes(res.status)) {
     return res.json();
    }
    return Promise.reject(new Error(`Ошибка api: ${res.status}`));
  }

  return fetch(`${url}`, {
    method: 'GET',
  }).then(getResponse);
}

export default api;
