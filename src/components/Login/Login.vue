<template>
<div id="login-page">
  <div class="row" id="pwd-container">
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <section class="login-form">
        <form @submit.prevent="loginProcess" role="login" >
          <img src="http://i.imgur.com/RcmcLv4.png" class="img-responsive" alt="" />
          <input type="email" v-model="email" name="email" placeholder="Email" required class="form-control input-lg" />
          <input type="password" v-model="password" class="form-control input-lg" id="password" placeholder="Password" required="" />
          <div class="pwstrength_viewport_progress"></div>
          <button type="submit" name="go" class="btn btn-lg btn-primary btn-block">Sign in</button>
          <div>
            <a href="#">Create account</a> or <a href="#">reset password</a>
          </div>

        </form>
      </section>
    </div>
  </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapState('auth', [
      'loggingIn',
      'loginError',
      'loginSuccessful'
    ]),
  },
  methods: {
    // ...mapActions([
    //   'auth/doLogin'
    // ]),
    loginProcess() {
      const auth = this.$store.dispatch('auth/doLogin', {email: this.email, password: this.password});
      const that = this;
      auth.then(result => {
        console.log(result);
      })
      .catch(err => console.log(err));
    },
  }
};
</script>

<style>

.progress-bar {
    color: #333;
}

/*
Reference:
http://www.bootstrapzen.com/item/135/simple-login-form-logo/
*/

* {
  -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
        box-sizing: border-box;
  outline: none;
}

.form-control {
  position: relative;
  font-size: 16px;
  height: auto;
  padding: 10px;
  @include box-sizing(border-box);

  &:focus {
    z-index: 2;
  }
}

#login-page {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
	background: url(http://i.imgur.com/GHr12sH.jpg) no-repeat center center;
   -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

.login-form {
	margin-top: 60px;
}

form[role=login] {
	color: #5d5d5d;
	background: #f2f2f2;
	padding: 26px;
	border-radius: 10px;
	-moz-border-radius: 10px;
	-webkit-border-radius: 10px;
}
form[role=login] img {
  display: block;
  margin: 0 auto;
  margin-bottom: 35px;
}
form[role=login] input,
form[role=login] button {
  font-size: 18px;
  margin: 16px 0;
}
form[role=login] > div {
  text-align: center;
}

.form-links {
	text-align: center;
	margin-top: 1em;
	margin-bottom: 50px;
}
.form-links a {
  color: #fff;
}
</style>
