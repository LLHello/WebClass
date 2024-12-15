
    // 路由配置
    const routes = {
    '/music-home': '<iframe src="../html/index/musicHome.html" width="100%" height="3000px" frameborder="0"></iframe>',
    '/my-music': '<iframe src="../html/index/myMusic.html" width="100%"  frameborder="0"></iframe>',
    '/client': '<iframe src="../html/index/client.html" width="100%"  frameborder="0"></iframe>',
    '/open' : '<iframe src="../html/index/open.html" width="100%"  frameborder="0"></iframe>',
    '/vip' : '<iframe src="../html/index/vip.html" width="100%" frameborder="0"></iframe>',
    '404': '<h2>404</h2><p>页面未找到！</p>',
};

    // 渲染函数
    function render() {
    const hash = window.location.hash.slice(1) || '/music-home';  // 获取当前路径
    const route = routes[hash] || routes['404'];  // 查找对应路由内容

    document.getElementById('app').innerHTML = route;  // 渲染内容
    updateActiveLinks(hash);  // 更新导航栏的选中状态
}

    // 更新导航栏选中状态
    function updateActiveLinks(currentHash) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${currentHash}`);
    });
}

    window.addEventListener('hashchange', render);  // 监听 URL 变化
    window.addEventListener('load', render);  // 页面加载时触发渲染

    //搜索
    const searInp = document.querySelector('.search_inp')
    const hisList = document.querySelector('.historyList')
    //导航栏
    const navItems = document.querySelectorAll('.item');
    //用户开通VIP
    const vip = document.querySelector('.vip')
    const vipBox = document.querySelector('.vipBox')

    //用户充值
    const money = document.querySelector('.money')
    const moneyBox = document.querySelector('.moneyBox')

    //用户充值，鼠标悬浮与离开
    money.addEventListener('mousemove',()=>{
    moneyBox.style.display = 'block'
})
    moneyBox.addEventListener('mouseleave',()=>{
    moneyBox.style.display= 'none';
})
    //搜索聚焦与失去焦点
    searInp.addEventListener('focus',()=>{
    hisList.style.display='block';
})
    searInp.addEventListener('blur',()=>{
    hisList.style.display='none';
})
    //开通VIP，鼠标悬浮与离开
    vip.addEventListener('mousemove',()=>{
    vipBox.style.display = 'block';
})

    vipBox.addEventListener('mouseleave',()=>{
    vipBox.style.display = 'none';
})

    // 为每个链接添加点击事件
    navItems.forEach(item => {
    item.addEventListener('click', function(e) {
        // 移除所有链接的 active 类
        navItems.forEach(i => i.classList.remove('active'));

        // 为当前点击的链接添加 active 类
        item.classList.add('active');
    });
});