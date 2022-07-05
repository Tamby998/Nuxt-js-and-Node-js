<template>
  <div>
    <div class="card text-center">
  <div class="card-header">
    Récupation mot de passe
  </div>
  <div class="card-body">
    <form @submit.prevent="forget">
      <h5 class="card-title">Email</h5>
      <p class="card-text">Veuillez entrer votre adresse e-mail ou votre numéro de mobile pour rechercher votre compte.</p>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">@</span>
        <input type="email" class="form-control"
        id="email"
        placeholder="example@example.com"
        aria-label="email"
        v-model="forgetData.email"
        required
        />
      </div>
      <button type="submit" class="btn btn-primary">Envoyer</button>
    </form>
  </div>
</div>
  </div>
</template>

<script>
export default {
    data() {
    return {
      forgetData: {
        email: ""
      }
    };
  },
  methods: {
    async forget() {
      try {
        const email = await this.$axios.$post("/api/auth/recover", {
          email: this.forgetData.email
        });
        swal('Success', 'Un mail a été envoi vers votre adresse email');
      } catch (err) {
        swal('Error', 'Erreur');
      }
    }
  }
}
</script>

<style>
#footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
