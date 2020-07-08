const GlobalModel = {
  namespace: 'global',

  state: {},

  effects: {},

  reducers: {},

  subscriptions: {
    setup({ history }) {
      return history.listen(({ pathname }) => {
        console.log(pathname);
      });
    },
  }
};

export default GlobalModel;
