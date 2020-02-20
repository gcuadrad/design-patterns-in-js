const Users2 = (() => {
  const resource = 'https://jsonplaceholder.typicode.com/users';

  return {
    list: async () => {
      await fetch(resource).then((x) => x.json());
    },
    create: async (data) => {
      await fetch(resource, { type: 'POST', body: JSON.stringify(data) })
            .then((x) => x.json);
    }
  }
})()
