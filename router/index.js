/* 页面跳转 */
window.onload = () => {
  // 路由
  const routerData = [
    {
      path: '/home',
      component: '<p>HTML</p>',
      color: 'rgb(78, 110, 242)'
    },
    {
      path: '/css',
      component: '<p>CSS</p>',
      color: '#FFD306'
    },
    {
      path: '/javascript',
      component: '<p>JAVASCRIPT</p>',
      color: 'rgb(138, 0, 0)'
    },
    {
      path: '*',
      redirect: '/home'
    }
  ];
  const ROUTER = new Router(routerData); // 路由实例
  // 初始化
  ROUTER.init();
  // 设置路由参数
  ROUTER.setPage('/home', () => {
    return '这是HTML页面';
  });
  ROUTER.setPage('/css', () => {
    return '这是CSS页面';
  });
  ROUTER.setPage('/javaScript', () => {
    return '这是JAVASCRIPT页面';
  });
  // 获取路由参数
  ROUTER.getPage('/home');
  ROUTER.getPage('/css');
  ROUTER.getPage('/javaScript');
}
