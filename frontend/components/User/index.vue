<template>
   <div class="container py-5">
      <div class="row">
      <div class="col">
        <nav aria-label="breadcrumb" class="bg-light rounded-3 p-3 mb-4">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item active" aria-current="page"><b><i>Votre Profile</i></b></li>
          </ol>
        </nav>
      </div>
    </div>
    <div class="row">
        <div class="col-lg-4">
          <div class="card mb-4">
            <div class="card-body text-center">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                class="rounded-circle img-fluid" style="width: 150px;">
              <h5 class="my-3">{{ getUserInfo.username}}</h5>
              <p class="text-muted mb-1">{{ getUserInfo.bio}}</p><br/>
              <!-- <p class="text-muted mb-4">{{ getUserInfo.id}}</p> -->
              <div class="d-flex justify-content-center mb-2">
                <nuxt-link to="/update"  class="btn btn-outline-primary ms-1">Modifier Profile</nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="card mb-4">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Nome Prénom</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ getUserInfo.lastName}} {{ getUserInfo.firstName}}</p>
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Email</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ getUserInfo.email}} (Vérifier)</p>
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Téléphone</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0"> None </p>
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Mobile</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">None</p>
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Addresse</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">None</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  computed: {
    getUserInfo() {
      return this.$store.getters.getUserInfo;
    }
  }
};
</script>

<style></style>
