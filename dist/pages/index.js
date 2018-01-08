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
          id: 5,
          status: 1,
          name: '华硕 FX63VD 7700 i7H/8G+8G/1T+128G/1050-4G/高分/黑/IPS屏',
          price: 111,
          time: '2018-01-08',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515390297897&di=89af3def057b0cad2518a608a6fb5349&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F120715%2F201659-120G521522362.jpg'
        }, {
          id: 4,
          status: 1,
          name: 'XXX笔记本',
          price: 111,
          time: '2018-01-08',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515390297897&di=89af3def057b0cad2518a608a6fb5349&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F120715%2F201659-120G521522362.jpg'
        }, {
          id: 3,
          status: 1,
          name: 'XXX笔记本',
          price: 111,
          time: '2018-01-08',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515390297897&di=89af3def057b0cad2518a608a6fb5349&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F120715%2F201659-120G521522362.jpg'
        }]
      }, {
        time: '2017-01',
        status: 1,
        goods: [{
          id: 2,
          status: 1,
          name: 'XXX笔记本',
          price: 111,
          time: '2018-01-08',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515390297897&di=89af3def057b0cad2518a608a6fb5349&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F120715%2F201659-120G521522362.jpg'
        }, {
          id: 1,
          status: 1,
          name: 'XXX笔记本',
          price: 111,
          time: '2018-01-08',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515390297897&di=89af3def057b0cad2518a608a6fb5349&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F120715%2F201659-120G521522362.jpg'
        }]
      }]
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(params, data) {
      this.dataFilter();
    }
  }, {
    key: 'dataFilter',
    value: function dataFilter() {
      for (var i = 0; i < this.json_data.length; i++) {
        var item = this.json_data[i];
        for (var j = 0; j < item.goods.length; j++) {
          var good = item.goods[j];
          good.priceStr = good.price.toFixed(2);
          this.$apply();
        }
      }
      this.$apply();
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwiY29tcG9uZW50cyIsImRhdGEiLCJqc29uX2RhdGEiLCJ0aW1lIiwic3RhdHVzIiwiZ29vZHMiLCJpZCIsIm5hbWUiLCJwcmljZSIsImltZyIsImNvbXB1dGVkIiwibWV0aG9kcyIsImV2ZW50cyIsInBhcmFtcyIsImRhdGFGaWx0ZXIiLCJpIiwibGVuZ3RoIiwiaXRlbSIsImoiLCJnb29kIiwicHJpY2VTdHIiLCJ0b0ZpeGVkIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDYjtBQURhLEssUUFHVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0xDLGlCQUFXLENBQ1Q7QUFDRUMsY0FBTSxTQURSO0FBRUVDLGdCQUFRLENBRlY7QUFHRUMsZUFBTyxDQUNMO0FBQ0VDLGNBQUksQ0FETjtBQUVFRixrQkFBUSxDQUZWO0FBR0VHLGdCQUFNLG9EQUhSO0FBSUVDLGlCQUFPLEdBSlQ7QUFLRUwsZ0JBQU0sWUFMUjtBQU1FTSxlQUFLO0FBTlAsU0FESyxFQVNMO0FBQ0VILGNBQUksQ0FETjtBQUVFRixrQkFBUSxDQUZWO0FBR0VHLGdCQUFNLFFBSFI7QUFJRUMsaUJBQU8sR0FKVDtBQUtFTCxnQkFBTSxZQUxSO0FBTUVNLGVBQUs7QUFOUCxTQVRLLEVBaUJMO0FBQ0VILGNBQUksQ0FETjtBQUVFRixrQkFBUSxDQUZWO0FBR0VHLGdCQUFNLFFBSFI7QUFJRUMsaUJBQU8sR0FKVDtBQUtFTCxnQkFBTSxZQUxSO0FBTUVNLGVBQUs7QUFOUCxTQWpCSztBQUhULE9BRFMsRUErQlQ7QUFDRU4sY0FBTSxTQURSO0FBRUVDLGdCQUFRLENBRlY7QUFHRUMsZUFBTyxDQUNMO0FBQ0VDLGNBQUksQ0FETjtBQUVFRixrQkFBUSxDQUZWO0FBR0VHLGdCQUFNLFFBSFI7QUFJRUMsaUJBQU8sR0FKVDtBQUtFTCxnQkFBTSxZQUxSO0FBTUVNLGVBQUs7QUFOUCxTQURLLEVBU0w7QUFDRUgsY0FBSSxDQUROO0FBRUVGLGtCQUFRLENBRlY7QUFHRUcsZ0JBQU0sUUFIUjtBQUlFQyxpQkFBTyxHQUpUO0FBS0VMLGdCQUFNLFlBTFI7QUFNRU0sZUFBSztBQU5QLFNBVEs7QUFIVCxPQS9CUztBQUROLEssUUF5RFBDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVSxFLFFBSVZDLE0sR0FBUyxFOzs7OzsyQkFJREMsTSxFQUFRWixJLEVBQU07QUFDcEIsV0FBS2EsVUFBTDtBQUNEOzs7aUNBRVc7QUFDVixXQUFJLElBQUlDLElBQUksQ0FBWixFQUFjQSxJQUFFLEtBQUtiLFNBQUwsQ0FBZWMsTUFBL0IsRUFBc0NELEdBQXRDLEVBQTBDO0FBQ3hDLFlBQUlFLE9BQU8sS0FBS2YsU0FBTCxDQUFlYSxDQUFmLENBQVg7QUFDQSxhQUFJLElBQUlHLElBQUksQ0FBWixFQUFjQSxJQUFFRCxLQUFLWixLQUFMLENBQVdXLE1BQTNCLEVBQWtDRSxHQUFsQyxFQUFzQztBQUNwQyxjQUFJQyxPQUFPRixLQUFLWixLQUFMLENBQVdhLENBQVgsQ0FBWDtBQUNBQyxlQUFLQyxRQUFMLEdBQWdCRCxLQUFLWCxLQUFMLENBQVdhLE9BQVgsQ0FBbUIsQ0FBbkIsQ0FBaEI7QUFDQSxlQUFLQyxNQUFMO0FBQ0Q7QUFDRjtBQUNELFdBQUtBLE1BQUw7QUFDRDs7OztFQXZGZ0MsZUFBS0MsSTs7a0JBQW5CekIsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4vLyAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdzaC11aSdcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHt9XG5cbiAgICBkYXRhID0ge1xuICAgICAganNvbl9kYXRhOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0aW1lOiAnMjAxOC0wMScsXG4gICAgICAgICAgc3RhdHVzOiAxLFxuICAgICAgICAgIGdvb2RzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiA1LFxuICAgICAgICAgICAgICBzdGF0dXM6IDEsXG4gICAgICAgICAgICAgIG5hbWU6ICfljY7noZUgRlg2M1ZEIDc3MDAgaTdILzhHKzhHLzFUKzEyOEcvMTA1MC00Ry/pq5jliIYv6buRL0lQU+WxjycsXG4gICAgICAgICAgICAgIHByaWNlOiAxMTEsXG4gICAgICAgICAgICAgIHRpbWU6ICcyMDE4LTAxLTA4JyxcbiAgICAgICAgICAgICAgaW1nOiAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTE1MzkwMjk3ODk3JmRpPTg5YWYzZGVmMDU3YjBjYWQyNTE4YTYwOGE2ZmI1MzQ5JmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRmltZy50YW9waWMuY29tJTJGdXBsb2FkcyUyRmFsbGltZyUyRjEyMDcxNSUyRjIwMTY1OS0xMjBHNTIxNTIyMzYyLmpwZycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgICAgc3RhdHVzOiAxLFxuICAgICAgICAgICAgICBuYW1lOiAnWFhY56yU6K6w5pysJyxcbiAgICAgICAgICAgICAgcHJpY2U6IDExMSxcbiAgICAgICAgICAgICAgdGltZTogJzIwMTgtMDEtMDgnLFxuICAgICAgICAgICAgICBpbWc6ICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1MTUzOTAyOTc4OTcmZGk9ODlhZjNkZWYwNTdiMGNhZDI1MThhNjA4YTZmYjUzNDkmaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGaW1nLnRhb3BpYy5jb20lMkZ1cGxvYWRzJTJGYWxsaW1nJTJGMTIwNzE1JTJGMjAxNjU5LTEyMEc1MjE1MjIzNjIuanBnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgICBzdGF0dXM6IDEsXG4gICAgICAgICAgICAgIG5hbWU6ICdYWFjnrJTorrDmnKwnLFxuICAgICAgICAgICAgICBwcmljZTogMTExLFxuICAgICAgICAgICAgICB0aW1lOiAnMjAxOC0wMS0wOCcsXG4gICAgICAgICAgICAgIGltZzogJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTUxNTM5MDI5Nzg5NyZkaT04OWFmM2RlZjA1N2IwY2FkMjUxOGE2MDhhNmZiNTM0OSZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZpbWcudGFvcGljLmNvbSUyRnVwbG9hZHMlMkZhbGxpbWclMkYxMjA3MTUlMkYyMDE2NTktMTIwRzUyMTUyMjM2Mi5qcGcnLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpbWU6ICcyMDE3LTAxJyxcbiAgICAgICAgICBzdGF0dXM6IDEsXG4gICAgICAgICAgZ29vZHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICAgIHN0YXR1czogMSxcbiAgICAgICAgICAgICAgbmFtZTogJ1hYWOeslOiusOacrCcsXG4gICAgICAgICAgICAgIHByaWNlOiAxMTEsXG4gICAgICAgICAgICAgIHRpbWU6ICcyMDE4LTAxLTA4JyxcbiAgICAgICAgICAgICAgaW1nOiAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTE1MzkwMjk3ODk3JmRpPTg5YWYzZGVmMDU3YjBjYWQyNTE4YTYwOGE2ZmI1MzQ5JmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRmltZy50YW9waWMuY29tJTJGdXBsb2FkcyUyRmFsbGltZyUyRjEyMDcxNSUyRjIwMTY1OS0xMjBHNTIxNTIyMzYyLmpwZycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgc3RhdHVzOiAxLFxuICAgICAgICAgICAgICBuYW1lOiAnWFhY56yU6K6w5pysJyxcbiAgICAgICAgICAgICAgcHJpY2U6IDExMSxcbiAgICAgICAgICAgICAgdGltZTogJzIwMTgtMDEtMDgnLFxuICAgICAgICAgICAgICBpbWc6ICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1MTUzOTAyOTc4OTcmZGk9ODlhZjNkZWYwNTdiMGNhZDI1MThhNjA4YTZmYjUzNDkmaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGaW1nLnRhb3BpYy5jb20lMkZ1cGxvYWRzJTJGYWxsaW1nJTJGMTIwNzE1JTJGMjAxNjU5LTEyMEc1MjE1MjIzNjIuanBnJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICBdXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7fVxuXG4gICAgbWV0aG9kcyA9IHtcblxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcblxuICAgIH1cblxuICAgIG9uTG9hZCAocGFyYW1zLCBkYXRhKSB7XG4gICAgICB0aGlzLmRhdGFGaWx0ZXIoKTtcbiAgICB9XG5cbiAgICBkYXRhRmlsdGVyKCl7XG4gICAgICBmb3IobGV0IGkgPSAwO2k8dGhpcy5qc29uX2RhdGEubGVuZ3RoO2krKyl7XG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5qc29uX2RhdGFbaV07XG4gICAgICAgIGZvcihsZXQgaiA9IDA7ajxpdGVtLmdvb2RzLmxlbmd0aDtqKyspe1xuICAgICAgICAgIGxldCBnb29kID0gaXRlbS5nb29kc1tqXTtcbiAgICAgICAgICBnb29kLnByaWNlU3RyID0gZ29vZC5wcmljZS50b0ZpeGVkKDIpO1xuICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfVxuICB9XG4iXX0=