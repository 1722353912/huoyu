// 后端账号密码，前端看不到
function checkUser(account, password) {
    const users = [
        { user: "15523831532", pwd: "123456", name: "管理员" },
        { user: "user", pwd: "123456", name: "会员" }
    ];
    return users.find(u => u.user === account && u.pwd === password) || null;
}