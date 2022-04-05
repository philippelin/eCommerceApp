<template>
    <div id="sign-up" class="h-100">
        <div class="container-fluid h-100" >
            <div class="row h-100">
                <div class="col-md-12 h-100 h-100 d-flex justify-content-center align-items-center">
                    <div class="col-md-8 rounded shadow bg-white" style="padding:20px">
                        <SignupForm />
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import SignupForm from '../Components/SIgnUpPage/SignUpForm.vue'
export default {
    name: 'SignUp',
    components: {
        SignupForm
    },
    data(){
        return {

        }
    }
}
</script>

<style>
#sign-up {
    background-color: #F8F8F8 !important;
    font-family: 'Avenir', sans-serif !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    /* min-height: 30rem; */
    margin-top: 70px;
    margin-bottom: 70px;
    vertical-align: middle;
}
.logo-bg {
    background: #bce5d0;
}
</style>