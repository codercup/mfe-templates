function postData(url: string, data: Object) {
  console.log(
    'window.__POWERED_BY_QIANKUN__:',
    (window as any).__POWERED_BY_QIANKUN__,
  );
  if ((window as any).__POWERED_BY_QIANKUN__) {
    url = `/subUmiApi${url}`;
  }
  console.log('url:', url);
  // Default options are marked with *
  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json',
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  }).then(response => response.json()); // parses response to JSON
}

export const login = (data: Object) => postData('/api/loginUmi', data);
