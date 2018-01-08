'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _shList = require('./../components/sh-list.js');

var _shList2 = _interopRequireDefault(_shList);

var _shListItem = require('./../components/sh-list-item.js');

var _shListItem2 = _interopRequireDefault(_shListItem);

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwiY29tcG9uZW50cyIsImRhdGEiLCJqc29uX2RhdGEiLCJ0aW1lIiwic3RhdHVzIiwiZ29vZHMiLCJpZCIsIm5hbWUiLCJwcmljZSIsImltZyIsIm90aGVyIiwicGxhdGZvcm0iLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNiO0FBRGEsSyxRQUdUQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDTEMsaUJBQVcsQ0FDVDtBQUNFQyxjQUFLLFNBRFA7QUFFRUMsZ0JBQVEsQ0FGVjtBQUdFQyxlQUFPLENBQ0w7QUFDRUMsY0FBSSxDQUROO0FBRUVGLGtCQUFRLENBRlY7QUFHRUcsZ0JBQU0sUUFIUjtBQUlFQyxpQkFBTyxHQUpUO0FBS0VMLGdCQUFNLFlBTFI7QUFNRU0sZUFBSSx3TkFOTjtBQU9FQyxpQkFBTyxDQUNMO0FBQ0VDLHNCQUFVLElBRFo7QUFFRUgsbUJBQU87QUFGVCxXQURLO0FBUFQsU0FESzs7QUFIVCxPQURTO0FBRE4sSyxRQTBCUEksUSxHQUFXLEUsUUFFWEMsTyxHQUFVLEUsUUFFVkMsTSxHQUFTLEU7Ozs7OzZCQUVDLENBQ1Q7Ozs7RUF2Q2dDLGVBQUtDLEk7O2tCQUFuQmpCLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IFRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0J1xuICBpbXBvcnQgTGlzdCBmcm9tICdAL2NvbXBvbmVudHMvc2gtbGlzdCdcbiAgaW1wb3J0IExpc3RJdGVtIGZyb20gJ0AvY29tcG9uZW50cy9zaC1saXN0LWl0ZW0nXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbi8vICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ3NoLXVpJ1xuICAgIH1cbiAgICBjb21wb25lbnRzID0ge31cblxuICAgIGRhdGEgPSB7XG4gICAgICBqc29uX2RhdGE6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRpbWU6JzIwMTgtMDEnLFxuICAgICAgICAgIHN0YXR1czogMSxcbiAgICAgICAgICBnb29kczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgc3RhdHVzOiAxLFxuICAgICAgICAgICAgICBuYW1lOiAnWFhY56yU6K6w5pysJyxcbiAgICAgICAgICAgICAgcHJpY2U6IDExMSxcbiAgICAgICAgICAgICAgdGltZTogJzIwMTgtMDEtMDgnLFxuICAgICAgICAgICAgICBpbWc6J2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTUxNTM5MDI5Nzg5NyZkaT04OWFmM2RlZjA1N2IwY2FkMjUxOGE2MDhhNmZiNTM0OSZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZpbWcudGFvcGljLmNvbSUyRnVwbG9hZHMlMkZhbGxpbWclMkYxMjA3MTUlMkYyMDE2NTktMTIwRzUyMTUyMjM2Mi5qcGcnLFxuICAgICAgICAgICAgICBvdGhlcjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHBsYXRmb3JtOiAnSkQnLFxuICAgICAgICAgICAgICAgICAgcHJpY2U6IDIyMixcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG5cbiAgICAgICAgfSxcbiAgICAgIF1cbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHt9XG5cbiAgICBtZXRob2RzID0ge31cblxuICAgIGV2ZW50cyA9IHt9XG5cbiAgICBvbkxvYWQgKCkge1xuICAgIH1cbiAgfVxuIl19