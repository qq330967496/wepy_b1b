'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      //      navigationBarTitleText: 'sh-ui'
    }, _this.components = {}, _this.data = {
      json_data: [{
        time: '2018-01',
        status: 1,
        goods: [{
          id: 1,
          status: 1,
          name: 'XXX笔记本',
          price: 111,
          time: '2018-01-08',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515390297897&di=89af3def057b0cad2518a608a6fb5349&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F120715%2F201659-120G521522362.jpg',
          other: [{
            platform: 'JD',
            price: 222
          }]
        }, {
          id: 2,
          status: 1,
          name: 'XXX笔记本',
          price: 111,
          time: '2018-01-08',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515390297897&di=89af3def057b0cad2518a608a6fb5349&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F120715%2F201659-120G521522362.jpg',
          other: [{
            platform: 'JD',
            price: 222
          }]
        }, {
          id: 3,
          status: 1,
          name: 'XXX笔记本',
          price: 111,
          time: '2018-01-08',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515390297897&di=89af3def057b0cad2518a608a6fb5349&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F120715%2F201659-120G521522362.jpg',
          other: [{
            platform: 'JD',
            price: 222
          }]
        }]

      }]
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwiY29tcG9uZW50cyIsImRhdGEiLCJqc29uX2RhdGEiLCJ0aW1lIiwic3RhdHVzIiwiZ29vZHMiLCJpZCIsIm5hbWUiLCJwcmljZSIsImltZyIsIm90aGVyIiwicGxhdGZvcm0iLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNiO0FBRGEsSyxRQUdUQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDTEMsaUJBQVcsQ0FDVDtBQUNFQyxjQUFNLFNBRFI7QUFFRUMsZ0JBQVEsQ0FGVjtBQUdFQyxlQUFPLENBQ0w7QUFDRUMsY0FBSSxDQUROO0FBRUVGLGtCQUFRLENBRlY7QUFHRUcsZ0JBQU0sUUFIUjtBQUlFQyxpQkFBTyxHQUpUO0FBS0VMLGdCQUFNLFlBTFI7QUFNRU0sZUFBSyx3TkFOUDtBQU9FQyxpQkFBTyxDQUNMO0FBQ0VDLHNCQUFVLElBRFo7QUFFRUgsbUJBQU87QUFGVCxXQURLO0FBUFQsU0FESyxFQWVMO0FBQ0VGLGNBQUksQ0FETjtBQUVFRixrQkFBUSxDQUZWO0FBR0VHLGdCQUFNLFFBSFI7QUFJRUMsaUJBQU8sR0FKVDtBQUtFTCxnQkFBTSxZQUxSO0FBTUVNLGVBQUssd05BTlA7QUFPRUMsaUJBQU8sQ0FDTDtBQUNFQyxzQkFBVSxJQURaO0FBRUVILG1CQUFPO0FBRlQsV0FESztBQVBULFNBZkssRUE2Qkw7QUFDRUYsY0FBSSxDQUROO0FBRUVGLGtCQUFRLENBRlY7QUFHRUcsZ0JBQU0sUUFIUjtBQUlFQyxpQkFBTyxHQUpUO0FBS0VMLGdCQUFNLFlBTFI7QUFNRU0sZUFBSyx3TkFOUDtBQU9FQyxpQkFBTyxDQUNMO0FBQ0VDLHNCQUFVLElBRFo7QUFFRUgsbUJBQU87QUFGVCxXQURLO0FBUFQsU0E3Qks7O0FBSFQsT0FEUztBQUROLEssUUFzRFBJLFEsR0FBVyxFLFFBRVhDLE8sR0FBVSxFLFFBRVZDLE0sR0FBUyxFOzs7Ozs2QkFFQyxDQUNUOzs7O0VBbkVnQyxlQUFLQyxJOztrQkFBbkJqQixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbi8vICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ3NoLXVpJ1xuICAgIH1cbiAgICBjb21wb25lbnRzID0ge31cblxuICAgIGRhdGEgPSB7XG4gICAgICBqc29uX2RhdGE6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRpbWU6ICcyMDE4LTAxJyxcbiAgICAgICAgICBzdGF0dXM6IDEsXG4gICAgICAgICAgZ29vZHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgIHN0YXR1czogMSxcbiAgICAgICAgICAgICAgbmFtZTogJ1hYWOeslOiusOacrCcsXG4gICAgICAgICAgICAgIHByaWNlOiAxMTEsXG4gICAgICAgICAgICAgIHRpbWU6ICcyMDE4LTAxLTA4JyxcbiAgICAgICAgICAgICAgaW1nOiAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTE1MzkwMjk3ODk3JmRpPTg5YWYzZGVmMDU3YjBjYWQyNTE4YTYwOGE2ZmI1MzQ5JmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRmltZy50YW9waWMuY29tJTJGdXBsb2FkcyUyRmFsbGltZyUyRjEyMDcxNSUyRjIwMTY1OS0xMjBHNTIxNTIyMzYyLmpwZycsXG4gICAgICAgICAgICAgIG90aGVyOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcGxhdGZvcm06ICdKRCcsXG4gICAgICAgICAgICAgICAgICBwcmljZTogMjIyLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICAgIHN0YXR1czogMSxcbiAgICAgICAgICAgICAgbmFtZTogJ1hYWOeslOiusOacrCcsXG4gICAgICAgICAgICAgIHByaWNlOiAxMTEsXG4gICAgICAgICAgICAgIHRpbWU6ICcyMDE4LTAxLTA4JyxcbiAgICAgICAgICAgICAgaW1nOiAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTE1MzkwMjk3ODk3JmRpPTg5YWYzZGVmMDU3YjBjYWQyNTE4YTYwOGE2ZmI1MzQ5JmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRmltZy50YW9waWMuY29tJTJGdXBsb2FkcyUyRmFsbGltZyUyRjEyMDcxNSUyRjIwMTY1OS0xMjBHNTIxNTIyMzYyLmpwZycsXG4gICAgICAgICAgICAgIG90aGVyOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcGxhdGZvcm06ICdKRCcsXG4gICAgICAgICAgICAgICAgICBwcmljZTogMjIyLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICAgIHN0YXR1czogMSxcbiAgICAgICAgICAgICAgbmFtZTogJ1hYWOeslOiusOacrCcsXG4gICAgICAgICAgICAgIHByaWNlOiAxMTEsXG4gICAgICAgICAgICAgIHRpbWU6ICcyMDE4LTAxLTA4JyxcbiAgICAgICAgICAgICAgaW1nOiAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTE1MzkwMjk3ODk3JmRpPTg5YWYzZGVmMDU3YjBjYWQyNTE4YTYwOGE2ZmI1MzQ5JmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRmltZy50YW9waWMuY29tJTJGdXBsb2FkcyUyRmFsbGltZyUyRjEyMDcxNSUyRjIwMTY1OS0xMjBHNTIxNTIyMzYyLmpwZycsXG4gICAgICAgICAgICAgIG90aGVyOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcGxhdGZvcm06ICdKRCcsXG4gICAgICAgICAgICAgICAgICBwcmljZTogMjIyLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cblxuICAgICAgICB9LFxuICAgICAgXVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge31cblxuICAgIG1ldGhvZHMgPSB7fVxuXG4gICAgZXZlbnRzID0ge31cblxuICAgIG9uTG9hZCAoKSB7XG4gICAgfVxuICB9XG4iXX0=