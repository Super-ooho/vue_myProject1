<template>
    <div class="login_container">
        <div class="login_box">
            <!-- 头像区域 -->
            <div class="avatar_box">
                <img src="../assets/logo.png" alt="">
            </div>
            <!-- 登录表单区域 -->
            <el-form ref="loginFormRef" label-width="0px" class="login_form" :model="loginForm" :rules="rules">
                <!-- 用户名input -->
                <el-form-item prop="username">
                    <el-input prefix-icon="el-icon-user-solid" v-model="loginForm.username"></el-input>
                </el-form-item>
                <!-- 密码input -->
                <el-form-item prop="password">
                    <el-input type="password" prefix-icon="el-icon-phone" v-model="loginForm.password"></el-input>
                </el-form-item>
                <!-- 按钮区域 -->
                <el-form-item class="btns">
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="info" @click="resetLoginForm">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data: function(){
        return{
            loginForm:{
                username:'',
                password:''
            },
            // 实现表单验证三步走：
            // 1.给form添加:rules:"rules"绑定data中rules对象
            // 2.在data中定义rules对象rules: {
            //     username:{
            //         [],
            //         []
            //     }
            // }
            // 3.将验证规则绑定到相应的item上 prop="username"
            rules:{
                username:[
                    { required: true, message: '请填写用户名', trigger: 'blur'}
                ],
                password:[
                    { required: true, message: '请输入密码', trigger: 'blur'},
                    { min: 6, max: 15, message: '密码长度6到15位', trigger: 'blur'}
                ]
            }
        }
    },
    methods:{
        resetLoginForm: function(){
            // console.log(this);
            //this指向当前登陆组件实例对象
            //这个对象中有一个属性为$refs
            this.$refs.loginFormRef.resetFields();
        },
        login: function(){
            //进行表单预验证，验证通过才能发起网络请求
            //验证通过则valid为true
            this.$refs.loginFormRef.validate((valid) => {
                // console.log(valid);
                if(!valid)
                    return;
                let result = this.$http.post('login', this.loginForm)
                console.log(result);
            })
        }
    }
}
</script>

<style lang="less" scoped>
.login_container{
    background-color: #2b4b6b;
    height: 100%;
}
.login_box{
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    .avatar_box{
        height: 130px;
        width: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0 0 10px #ddd;
        position: absolute;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: #fff;
        img{
            height: 100%;
            width: 100%;
            border-radius: 50%;
            background-color: #eee;
        }
    }
}
.btns{
    display: flex;
    justify-content: flex-end;
}
.login_form{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
}
</style>>

