<template>
    <Header v-if="authCheck"></Header>
    <div id="section-body">
        <NavigationComponent v-if="authCheck"></NavigationComponent>
        <router-view class="section-router"></router-view>
    </div>
    <div id="section-player" v-if="authCheck">
        <AudioPlayer/>
    </div>
</template>
<script>
import { auth } from './stores/auth';
export default {
    data: () => {
        return {
            authCheck: auth.is_authenticated
        }
    }
}
</script>
