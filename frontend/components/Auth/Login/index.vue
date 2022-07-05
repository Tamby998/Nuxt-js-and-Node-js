<template>
  <div id="home">
    <br/>
    <h1 id="h1">Bienvenue</h1>
    <div class="container h-100">
        <div class="row h-100 justify-content-center align-items-center">
            <form @submit.prevent="login" class="col-md-9">
                <div class="AppForm shadow-lg">
                    <div class="row">
                        <div class="col-md-6">
                          <div class="AppFormRight position-relative d-flex justify-content-center flex-column align-items-center text-center p-5 text-white">
                              <h1  class="position-relative px-4 pb-3 mb-4">Créer votre compte</h1>
                              <p>En créant votre compte, vous simplifierez vos démarches, accédez à l'historique de vos demandes et bénéficierez d'un cofrre-fort numérique permettant de stocker les piéces.</p>
                              <p>Vous pouvez également effectuer certaines démarches, sans créer de compte, en choisissant le sujet qui vous intéresse dans la liste ci-dessous.</p>
                              <NuxtLink to="/auth/register"><button class="btn btn-danger btn-block shadow border-0 py-2 text-uppercase ">
                                Je crée mon compte
                              </button></NuxtLink>
                          </div>
                        </div>
                        <div class="col-md-6 d-flex justify-content-center align-items-center">
                            <div class="AppFormLeft">
                                <h1 id="h1">Identifiez-vous</h1>
                                <div class="form-group position-relative mb-4">
                                    <input type="mail" class="form-control border-top-0 border-right-0 border-left-0 rounded-0 shadow-none" id="email"
                                    v-model="loginData.email"
                                    aria-describedby="emailHelp"
                                    placeholder="portail@portail.com"
                                    required
                                    />
                                </div>
                                <div class="form-group position-relative mb-4">
                                    <input type="password" class="form-control border-top-0 border-right-0 border-left-0 rounded-0 shadow-none" v-model="loginData.password"
                                    id="password"
                                    placeholder="Mot de passe"
                                    required
                                    />
                                </div>
                                <div class="row  mt-4 mb-4">
                                    <div class="col-md-6">

                                    </div>
                                    <div class="col-md-6 text-truncate">
                                        <NuxtLink to="/auth/forgetPassword">Mot de passe oublié?</NuxtLink>
                                    </div>
                                </div>

                                <button type="submit" class="btn btn-success btn-block shadow border-0 py-2 text-uppercase ">
                                    Je me connecte
                                </button>
                                <center>
                                  <span>ou</span>
                                </center>

                                <NuxtLink to="/auth/franceconnect" class="btn btn-success btn-block shadow border-0 py-2 text-uppercase ">
                                    France connect
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <br />

    <div id="continue">
      <h6 style="text-align: center">Contunier sans se connecter</h6>
    </div>

    <!--  Card Contact -->
    <div class="container-flude fullcardslider d-flex justify-content-center mt-5">
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <div class="card" style="max-width: 1264px">
              <div class="row g-0">
                <div class="col-md-5">
                  <img
                    src="../../../static/7260-office.gif"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h5 class="card-title fw-bold display-4">
                      Nous contacter
                    </h5>
                    <hr
                      class="fw-bold"
                      style="width: 150px; height: 3px; color: red"
                    />
                  <div class="boathead-name h4">
                    <span style="color: black"><strong>Formulaire</strong></span>
                  </div>
                  <div class="boathead-name h3 fw-bold" style="color: black">
                    <p class="card-text">Adresse</p>
                  </div>
                  <p class="card-text" style="color: black; font-size: 16px">
                    3 avenue Arséne d'Arsonval
                  </p>
                  <p class="card-text" style="color: black; font-size: 16px">
                    01000 Bourg-en-Bress
                  </p>
                  <i style="color: black; text-decoration : underline;">Du lundi au jeudi:</i> 8h30 - 12h / 14h - 17h30<br/>
                  <i style="color: black; text-decoration : underline;">Vendredi:</i>  8h30 - 12h / 14h - 16h45
                  </div>
                </div>
              </div>
              <div id="title">
                <h1 style="color: rgb(248, 8,8);">Vos démarches en ligne</h1>
                <i>Retrouvez ci-dessous les accès aux differents formulaires vous,</i>
                <p><i>permettant d'initier ou d'effectuer une démarche en ligne.</i></p>
              </div>

              <div class="container">
                <div class="item">
                  <div class="img"></div>
                  <div>
                    <h3>A bit longer title</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, consectetur quae? Autem optio assumenda vero repellendus!</p>
                    <a href="#">Learn more</a>
                  </div>
                </div>
                <div class="item">
                  <div class="img"></div>
                  <div>
                    <h3>A bit longer title</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, consectetur quae? Autem optio assumenda vero repellendus!</p>
                    <a href="#">Learn more</a>
                  </div>
                </div>
                <div class="item">
                  <div class="img"></div>
                  <div>
                    <h3>A bit longer title</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, consectetur quae? Autem optio assumenda vero repellendus!</p>
                    <a href="#">Learn more</a>
                  </div>
                </div>
              </div><br />

              <div class="container">
                <div class="item">
                  <div class="img"></div>
                  <div>
                    <h3>A bit longer title</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, consectetur quae? Autem optio assumenda vero repellendus!</p>
                    <a href="#">Learn more</a>
                  </div>
                </div>
                <div class="item">
                  <div class="img"></div>
                  <div>
                    <h3>A bit longer title</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, consectetur quae? Autem optio assumenda vero repellendus!</p>
                    <a href="#">Learn more</a>
                  </div>
                </div>
                <div class="item">
                  <div class="img"></div>
                  <div>
                    <h3>A bit longer title</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, consectetur quae? Autem optio assumenda vero repellendus!</p>
                    <a href="#">Learn more</a>
                  </div>
                </div>
              </div><br />

            </div>
          </div>
        </div>
      </div>
    </div><br/>
  </div>
</template>

<script>
import swal from 'sweetalert';

export default {
  data() {
    return {
      loginData: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async login() {
      try {
        let response = await this.$auth.loginWith("local", {
          data: this.loginData
        });
        this.$router.push("/");
        swal('Success', 'Bienvenue');
        console.log(response);
      } catch (err) {
        swal('Error', 'Vérifier votre information');
        console.log(err);
      }
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap');
  #h1 {
    text-align: center;
    color: rgb(248, 8, 8);
  }
body{
    font-family: 'Roboto', sans-serif !important;
    height:100vh;
    color: #3a3e42 !important;
}
.AppForm .AppFormLeft h1{
    font-size: 50px;
}
.AppForm .AppFormLeft input:focus{
    border-color: #ced4da;
}
.AppForm .AppFormLeft input::placeholder{
   font-size: 15px;
}
.AppForm .AppFormLeft i{
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}
.AppForm .AppFormLeft a{
    color: #3a3e42 ;
}
.AppForm .AppFormLeft button{
    background: linear-gradient(45deg,#8D334C,#CF6964);
    border-radius: 30px;
}
.AppForm .AppFormLeft p span{
  color: #007bff;
}
.AppForm .AppFormRight{
    background-image: url('https://i.ibb.co/tDLqQtj/bg.jpg');
    /* background-color: #f7010e; */
    height: 450px;
    background-size: cover;
    background-position: center;
}
.AppForm .AppFormRight:after{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg,#f50000,#fa0e01);
    opacity: 0.5;
}
.AppForm .AppFormRight h2{
    z-index: 1;
}
.AppForm .AppFormRight h1{
    z-index: 1;
}
.AppForm .AppFormRight a{
    z-index: 1;
}
.AppForm .AppFormRight h2::after{
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #fff;
  bottom: 0;
  left:50%;
  transform: translateX(-50%);
}
.AppForm .AppFormRight p{
    z-index: 1;
}

.fullcardslider .row.g-0 {
  background-color: #fdfcfc;
  color: red;
}

.fullcardslider .row.g-0 {
  max-width: 2000px;
  margin: auto;
  display: flex !important;
  align-items: center;
}

.fullcardslider .card {
  border-color: #fcfcfc;
  border: 0px;
}
h5{
  color: #CF6964;
}


.container {
  margin: 0 auto;
  width: 0 auto;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;
  text-align: center;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: .5em;
  -webkit-box-shadow: 0px 29px 38px -15px rgba(0,0,0,0.43);
  -moz-box-shadow: 0px 29px 38px -15px rgba(0,0,0,0.43);
  box-shadow: 0px 29px 38px -15px rgba(0,0,0,0.43);
}

.img {
  width: 90%;
  height: 200px;
  background-color: lightgrey;
  background-image: url(//unsplash.it/500/500);
  background-size: cover;
  background-position: center;
  margin-top: 20px;
  border-radius: .3em;;
}

a {
  display: inline-block;
  padding: 20px;
}

p {
  padding: 0 1em;
  line-height: 130%;
}


@media(max-width:840px) {
  .container {
    flex-direction: column;
    max-width: 460px;
  }

  .item {
    flex-direction: row;
    width: 100%;
  }

}

</style>
