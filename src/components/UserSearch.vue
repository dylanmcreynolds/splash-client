<template>
  <!--I got some of the search code from here https://alligator.io/vuejs/vue-autocomplete-component/ -->
  <div class="search-component col-lg-5 mx-auto" v-if=isLoggedIn>
    <div class="search-bar-pink">
      <b-input-group>
        <b-form-input
          v-model="userQuery"
          placeholder="Search"
          class="form-control search-bar"
          type="text"
           @keydown.enter="search"
        ></b-form-input>
      
        <b-input-group-append>
          <b-button class="search-button" size="sm" text="Button" @click="search">Find User</b-button>
        </b-input-group-append>
      </b-input-group>
          <b-table striped hover  :items="foundUsers" :fields="fields" responsive="true" >
              <template v-slot:cell(select)="row">
                <b-button
            
                  value="accepted"
                  unchecked-value="not_accepted"
                  @click="select(row.item, row.index, $event.target)"
                >
                 Add
                </b-button>
              </template>
          </b-table>

    </div>
  </div>
</template>

<script>
export default {
  name: 'UserSearch',
  data() {
    return {
      fields: ['given_name', 'family_name', 'Select'],
      foundUsers: [],
      userQuery: "",
      arrowCounter: -1,
      displayedSearchInput: '',
      selectedUsers: []
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters['login/isLoggedIn'];
    },
  },
  methods: {
    async search() {


      const config = { 
          headers: { 'Content-Type': 'application/json' },
          params: {
              user: this.userQuery
          } };
      let response = await this.$api.get(this.$users_url, config);
      this.foundUsers = response.data;  
    },
    select(user) {

      this.$emit('userAdded', user)
    }
  },

};
</script>

