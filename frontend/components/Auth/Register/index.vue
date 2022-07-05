<template>
<div>
<section>
<br>

<center>
<div class="col-md-8 mb-4">
      <div class="card mb-4">
        <div class="card-header py-3">
          <h5 class="mb-0">Création de votre compte</h5>
          <p>En quelques secondes, créez votre compte.</p>
          <p>Vous pouvez plus tard modifier ces informations dans la gestion de votre profil</p>
        </div>
        <div class="card-body">
          <h2>Vos données de connexion</h2>
          <form @submit.prevent="register">
            <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="mail">Nom de Famille</label>
                  <input
                    type="text"
                    class="form-control"
                    id="lastName"
                    v-model="registerData.lastName"
                    aria-describedby="lastName"
                    required
                  />
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="confirmail">Prénom</label>
                  <input
                  type="text"
                  v-model="registerData.firstName"
                  class="form-control"
                  id="firstName"
                  required
                  />
                </div>
              </div>
            </div>
            <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="password">Choisissez un mot de passe</label>
                  <input
                  type="password"
                  v-model="registerData.password"
                  class="form-control"
                  id="password"
                  required
                  />
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="passwordconf">Entrer votre Email</label>
                  <input
                  type="email"
                  v-model="registerData.email"
                  class="form-control"
                  id="emailHelp"
                  required
                  />
                </div>
              </div>
            </div>
            <hr class="my-4" >

            <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="form6Example1">Vous créer ce compte en tant que</label>
                  <select class="form-control" aria-label="Default select example">
                    <option selected>Sélectionner</option>
                    <option value="1">Association</option>
                    <option value="2">Association</option>
                    <option value="3">Association</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                  <nuxt-link to="/auth/login" class="btn btn-secondary btn-lg btn-block" type="submit">
                    Annuler
                  </nuxt-link>
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                  <button class="btn btn-danger btn-lg btn-block" type="submit">
                    Suivant
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
</center>
</section>
</div>
</template>

<script>
import swal from 'sweetalert';
export default {
  data() {
    return {
      registerData: {
        lastName: "",
        firstName: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async register() {
      try {
        const user = await this.$axios.$post("/api/auth/register", {
          lastName: this.registerData.lastName,
          firstName: this.registerData.firstName,
          email: this.registerData.email,
          password: this.registerData.password
        });
        swal('Success', 'Un mail a été envoi vers votre email');
        console.log(user);
      } catch (err) {
        swal('Error', 'Verifier votre information');
        console.log(err);
      }
    }
  }
};
</script>


<style>

</style>

