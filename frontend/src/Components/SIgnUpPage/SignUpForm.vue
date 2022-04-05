<template>
    <form id="signup-form" v-on:submit.prevent="submit">
        <div class="row">
            <div class="col-12 form-group">
                <label class="col-form-label">Nom d'utilisateur <span class="text-danger">*</span></label>
                <input type="text" v-model.trim="$v.username.$model" :class="{'is-invalid': validationStatus($v.username)}" class="form-control">
                <div v-if="!$v.username.required" class="invalid-feedback">Le nom d'utilisateur est obligatoire.</div>
            </div>
            <div class="col-12 form-group">
                <label class="col-form-label">Email <span class="text-danger">*</span></label>
                <input type="email" v-model.trim="email" :class="{'is-invalid': validationStatus($v.email)}" class="form-control">
                <div v-if="!$v.email.required" class="invalid-feedback">L'email est obligatoire.</div>
                <div v-if="!$v.email.email" class="invalid-feedback">L'email n'est pas valide.</div>
            </div>
            <div class="col-12 form-group">
                <label class="col-form-label">Mot de passe <span class="text-danger">*</span></label>
                <input type="password" v-model.trim="password" :class="{'is-invalid': validationStatus($v.password)}" class="form-control">
                <div v-if="!$v.password.required" class="invalid-feedback">Le mot de passe est obligatoire.</div>
                <div v-if="!$v.password.minLength" class="invalid-feedback">Le mot de passe doit contenir au moins {{ $v.password.$params.minLength.min }} caractères.</div>
            </div>
            <div class="col-12 form-group text-center">
                <button class="btn btn-primary btn-vue col-4">S'abonner</button>
            </div>
        </div>
    </form>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'
import axios from 'axios'

export default {
    name: 'SignupForm',
    data(){
        return {
            username: '',
            email: '',
            password: ''
        }
    },
    validations: {
        username: {required},
        email: {required, email},
        password: {required, minLength: minLength(8)},
    },
    methods: {

        resetData: function() {
            this.username = '';
            this.email = '';
            this.password = '';
        },

        validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error : false;
        },

        submit(){
            this.$v.$touch();
            if (this.$v.$pendding || this.$v.$error)
            return
                axios.post('http://localhost:3000/api/auth/register', 
                {
                    "username": this.username,
                    "email": this.email,
                    "password": this.password
                })

                alert('Données enregistrées !')
                 this.$v.$reset();
                 this.resetData();
                this.$router.push('/')
        },

    }
}
</script>

<style>
.btn-vue{
    background: #53B985;
    color: #31485D;
    font-weight: bold;
}
</style>