<template>
    <div id="login-view">
        <form class="login-form">
            <div class="wrapper-logo">
                <img src="@/assets/logo.svg" />
                <div>KRAKEN.FM</div>
            </div>
            <input id="input-email" v-model="email" placeholder="E-mail" />
            <input id="input-password" v-model="password" placeholder="Password" />
            <button id="btn-submit" :disabled="isDisable" @click="login">LOGIN</button>
        </form> 
    </div>
</template>
<script>
import { auth } from '../stores/auth';
export default {                        
    data:() => {
        return {
            email:'',
            password:'' 
        }
    },
    computed: {
        isDisable() {
            if(this.email.length ==0 && this.password.length ==0 || this.password.length<6) {
                return true;
            } else {
                return false;
            }
        }
    },
    methods: {
        login(event) {
                auth.authenticate(this.email, this.password);
        }
    },
}
</script>