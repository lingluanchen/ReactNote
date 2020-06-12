// React Native--使用React Navigation实现界面导航与跳转
// 参考：https://blog.csdn.net/theVicTory/java/article/details/80059632

待整理

const Navigator = StackNavigator(
    {

        HotelTab: {
            screen: HotelTab,
            navigationOptions: {
                tabBarVisible: false,
                header: null,
                gesturesEnabled: false,
            },
        },
        ...tsRouter,  //推手
        ...Svideo,   // 短视频
        ...Ldj,   // 联到家
        ...Live,   // 直播

    },

    {
        navigationOptions: {
            // headerStyle: { backgroundColor: color.primary }
            headerBackTitle: null,
            headerTintColor: '#333333',
            showIcon: true,
        },
    },
);