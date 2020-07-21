

//正确写法
{
(isEdit === true) && (
    <View style={styles.title_row}>
    </View>
)
}

//错误写法
{
    isEdit && (
        <View style={styles.title_row}>
        </View>
    )
}



//发送通知
DeviceEventEmitter.emit('loginUpdate')

// 监听通知
this.lister = DeviceEventEmitter.addListener('loginUpdate', () => {
    this.setState({

    })
})

// 移除通知
this.lister.remove();




//TouchableOpacity 覆盖冲突问题用此方式引入
import { TouchableOpacity } from 'react-native-gesture-handler'



reduce //数组为0 崩溃， 为1 返回元素本身
