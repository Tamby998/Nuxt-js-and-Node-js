<template>
  <section class="mt-5">
    <div class="container mb-4">
      <div class="row">
        <div class="col-md-12">
          <div class="card" v-if="addState">
            <div class="card-body">
              <div class="card-title mb-4">
                <h4>Add File</h4>
              </div>
              <form @submit.prevent="addNewFile" enctype="multipart/form-data">
                <div class="form-group">
                  <label for="title">Name</label>
                  <input type="text" v-model="filesDetails.title" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="desc">Description</label>
                  <input type="text" v-model="filesDetails.desc" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="file">File</label>
                  <div class="custom-file">
                    <input
                      type="file"
                      id="customFile"
                      ref="file"
                      v-on:change="handleFileUpload()"
                      class="custom-file-input"
                    />
                    <label class="custom-file-label" for="customFile">Choose file</label>
                  </div>
                </div>
                <div class="form-group">
                  <button class="btn btn-primary" :disabled="isDisabled">
                    <span
                      class="spinner-border spinner-border-sm"
                      v-if="addLoading"
                      role="status"
                      aria-hidden="true"
                    ></span>Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="card bg-light p-1 showdow-sm">
            <div class="card-title">
              <button
                class="btn btn-info m-3"
                @click="initForm"
              >{{addState?"Cancel":"Add New File"}}</button>
            </div>
            <div class="card-body">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Desc</th>
                    <th scope="col">Date created</th>
                    <th scope="col">Action</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <div
                  v-if="fileLoading"
                  class="spinner-border"
                  style="width: 3rem; height: 3rem;"
                  role="status"
                >
                  <span class="sr-only">Loading...</span>
                </div>
                <tbody v-else>
                  <tr v-for="(file, index) in allfile" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ file.title }}</td>
                    <td>{{ file.desc }}</td>
                    <td>{{ file.created }}</td>
                    <td>
                      <button class="btn btn-danger" @click="deleteFile(file._id)">Delete</button>
                    </td>
                    <td>
                      <nuxt-link to="" class="btn btn-primary" >Download</nuxt-link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      filesDetails: {
        title: '',
        desc: '',
        file: ''
      },
      allfile: [],
      addState: false,
      addLoading: false,
      fileLoading: false,
      isValid: false,
    }
  },
  computed: {
    isDisabled: function() {
      if (
        this.filesDetails.title === '' ||
        this.filesDetails.desc === '' ||
        this.filesDetails.file === ''
      ) {
        return !this.isValid
      }
    }
  },
  methods: {
    initForm() {
      this.addState = !this.addState
    },
    handleFileUpload() {
      this.filesDetails.file = this.$refs.file.files[0]

      console.log(this.filesDetails.file.type)
    },
    async getAllFiles() {
      this.fileLoading = true
      try {
        let data = await this.$axios.$get('/mesdocuments')
        console.log(data);
        this.allfile = data
        this.fileLoading = false
      } catch (err) {
        this.fileLoading = false
        swal('Error', 'Error Fetting Files', 'error')
      }
    },
    addNewFile() {
      let types = /(\.|\/)(mp3|mp4)$/i
      // let types = /(\.|\/)(pdf|csv)$/i
      if (
        types.test(this.filesDetails.file.type) ||
        types.test(this.filesDetails.file.name)
      ) {
        let formData = new FormData()

        formData.append('title', this.filesDetails.title)
        formData.append('desc', this.filesDetails.desc)
        formData.append('file', this.filesDetails.file)
        this.addLoading = true
        this.$axios
          .$post('/document', formData)
          .then(response => {
            console.log(response)
            this.addLoading = false
            this.filesDetails = {}
            this.getAllFiles() // we will create this function later
            swal('Success', 'New File Added', 'success')
          })
          .catch(err => {
            this.addLoading = false
            swal('Error', 'Something Went wrong', 'error')
            console.log(err)
          })
      } else {
        swal('Error', 'Invalid file type', 'error')

        return !this.isValid
      }
    },

    deleteFile(id) {
      swal({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover this File!',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          this.$axios
            .$delete('/document/' + id)
            .then(response => {
              this.getAllFiles()
              swal('Poof! Your Files file has been deleted!', {
                icon: 'success'
              })
            })
            .catch(err => {
              swal('Error', 'Somethimg went wrong', 'error')
            })
        } else {
          swal('Annulé!')
        }
      })
    }
  },
  created() {
    this.getAllFiles()
  }
}
</script>
