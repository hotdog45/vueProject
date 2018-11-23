/**
 * 函数描述：js调用webview事件
 *
 * jsBridge.callHandler(method, data, callBack(response));
 * @param method {string} 方法名
 * @param data {Object} 参数
 * @return {Object} 回调
 */

/**
 * 函数描述：webView调用JS事件
 *
 * jsBridge.registerHandler(method, callBack(response));
 * @param method {string} 方法名
 * @return {Object} 回调
 */

import brower from './brower';

const JsBridge = {
  init(callback) {
    if (!brower.checkIfIOS()) {
      if (window.WebViewJavascriptBridge) {
        callback(window.WebViewJavascriptBridge);
      } else {
        document.addEventListener(
          'WebViewJavascriptBridgeReady',
          () => {
            callback(window.WebViewJavascriptBridge);
          },
          false,
        );
      }
    } else {
      if (window.WebViewJavascriptBridge) {
        return callback(window.WebViewJavascriptBridge);
      }
      if (window.WVJBCallbacks) {
        return window.WVJBCallbacks.push(callback);
      }
      // console.log('call back', callback);
      window.WVJBCallbacks = [callback];

      const WVJBIframe = document.createElement('iframe');
      WVJBIframe.style.display = 'none';
      WVJBIframe.src = 'https://__bridge_loaded__';
      document.documentElement.appendChild(WVJBIframe);
      setTimeout(() => {
        document.documentElement.removeChild(WVJBIframe);
      }, 0);
    }
  },

  first() {
    if (!brower.checkIfIOS()) {
      this.init((bridge) => {
        bridge.init((data, responseCallback) => {
          responseCallback(data);
        });
      });
    }
  },

  registerHandler(name, fun) {
    this.init((bridge) => {
      bridge.registerHandler(name, fun);
    });
  },

  callHandler(name, data, fun) {
    this.init((bridge) => {
      bridge.callHandler(name, data, fun);
    });
  },
};

JsBridge.first();

export default JsBridge;
