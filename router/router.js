// 路由实现
class Router {
  constructor(props) {
    this.props = props; // 路由参数
    this.routers = {}; // 保存路由参数
  }
  // 初始
  init = () => {
    document.querySelectorAll('routerView').forEach((item, index) => {
      item.addEventListener('click', function(e) {
        const event = e || window.event;
        event.preventDefault();
        window.location.hash = this.getAttribute('href');
      }, false);
    });
    window.addEventListener('hashchange', () => {
      this.routerChange();
    });
    this.routerChange();
  }
  // 设置路由传参
  setPage = (hashName, callback) => {
    this.routers[hashName] = callback;
  }
  // 获取路由传参
  getPage = (hashName) => {
    this.routers[hashName]();
  }
  // 改变时
  routerChange = () => {
    const BOX = document.getElementById('box');
    const ROUTERVIEW = document.getElementsByClassName('routerView');
    const CONTENT = document.getElementById('content');
    let newHash = window.location.hash;
    let i = this.props.findIndex((item, index) => {
      return newHash === ('#' + item.path);
    });
    if (i >= 0) {
      document.getElementById('content').innerHTML = this.props[i].component;
      BOX.style.backgroundColor = this.props[i].color;
      for (let ii = 0; ii < ROUTERVIEW.length; ii++) {
        ROUTERVIEW[ii].style.color = this.props[i].color;
        if (ii !== ROUTERVIEW.length) {
          ROUTERVIEW[ii].style.borderRightColor = this.props[i].color;
        }
      }
      CONTENT.style.backgroundColor = this.props[i].color;
    } else {
      let defaultI = this.props.findIndex((item, index) => {
        return item.path === '*';
      });
      if (defaultI >= 0) {
        window.location.hash = this.props[defaultI].redirect;
      }
    }
  }
}
