<template>
  <div class="container py-5" id="update">
    <div class="row">
      <div class="col">
        <nav aria-label="breadcrumb" class="bg-light rounded-3 p-3 mb-4">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item active" aria-current="page"><b><i>Modifier Profile</i></b></li>
          </ol>
        </nav>
      </div>
    </div>
        <form @submit.prevent="update">
            <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="mail">Votre adresse e-mail</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    v-model="updateData.email"
                    aria-describedby="emailHelp"
                    required
                  />
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="confirmail">Username</label>
                  <input
                  type="text"
                  v-model="updateData.username"
                  class="form-control"
                  id="username"
                  required
                  />
                </div>
              </div>
            </div>
            <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="mail">Votre Nom</label>
                  <input
                    type="text"
                    class="form-control"
                    id="nom"
                    v-model="updateData.lastName"
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
                  v-model="updateData.firstName"
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
                  <label class="form-label" for="mail">Votre Bio</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="bio"
                    v-model="updateData.bio"
                    aria-describedby="bio"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                  <nuxt-link to="/profile" class="btn btn-secondary btn-lg btn-block" type="submit">
                    Annuler
                  </nuxt-link>
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                  <button class="btn btn-danger btn-lg btn-block" type="submit">
                      Modifier
                  </button>
                </div>
              </div>
            </div>
          </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      updateData: {
        username: "",
        lastName: "",
        firstName: "",
        bio: "",
        email: ""
      }
    };
  },
  methods: {
    async update() {
      try {
        const user = await this.$axios.$put(`/api/user/${this.getUserInfo.id}`, {
          username: this.updateData.username,
          email: this.updateData.email,
          lastName: this.updateData.lastName,
          firstName: this.updateData.firstName,
          bio: this.updateData.bio
        });
        console.log(user);
      } catch (err) {
        console.log(err);
      }
    }
  },
  computed: {
    getUserInfo() {
      return this.$store.getters.getUserInfo;
    }
  },
  created() {
    this.updateData = { ...this.getUserInfo };
  }
}
</script>

<style>

</style>
