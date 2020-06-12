


// 事件的监听
const EventEmitter = require('events');
class CountEmitter extends EventEmitter { }
export default class HotelDiyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: props.info,
        }
    }
    componentDidMount() {
        this.getRedList();
        //监听领取优惠券事件
        CountEmitter.addListener('gainvoucher', () => {
            //do somethings
        });
    }
    componentWillUnmount() {
        //卸载监听
        CountEmitter.removeListener('gainvoucher', () => { });
    }
    // 发出信号
    postNotice() {
        CountEmitter.emit('gainvoucher');
    }
    render() {
        return (
            <View>时间监听</View>
        )
    }
}
