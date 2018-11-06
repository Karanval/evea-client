import Mixin from '@ember/object/mixin';
import ENV from 'evea-client/config/environment';
import {
  inject as service
} from '@ember/service';
import $ from 'jquery';

export default Mixin.create({
  session: service(),

  buildURL: function(path) {
    return `${ENV.APP.API_HOST}${path}`;
  },

  buildHeaders: function(headers = {}) {
    let commonHeaders = {};
    let user = this.get('session.user');

    if (user && user.access_token) {
      commonHeaders.Authorization = `Bearer ${user.access_token}`;
    }

    return Object.assign(commonHeaders, headers);
  },

  post: function(path = '/', payload = {}, headers = {}) {
    return this._sendJSONRequest('POST', path, payload, headers);
  },

  patch: function(path = '/', payload = {}, headers = {}) {
    return this._sendJSONRequest('PATCH', path, payload, headers);
  },

  _sendJSONRequest: function(type, path = '/', payload = {}, headers = {}) {
    let url = this.buildURL(path);

    return Promise.resolve($.ajax({
      type: type,
      url: url,
      dataType: 'json',
      contentType: 'application/json',
      processData: false,
      data: JSON.stringify(payload),
      headers: this.buildHeaders(headers)
    }));
  },

  getRequest: function(path = '/', queryParams = {}, headers = {}) {
    let url = this.buildURL(path);

    return Promise.resolve($.ajax({
      type: 'GET',
      url: url,
      data: queryParams,
      headers: this.buildHeaders(headers)
    }));
  }
});
