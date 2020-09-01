<template>
<div>
  <b-form @submit="onSubmit" v-if="show">
  <b-container>
    <b-row>
      <b-container>
        <b-form-group
          id="team name"
          label="Team Name:"
          label-for="team_name"
          description=""
        >
          <b-form-input
            id="team_name"
            v-model="team.name"
            type="text"
            required
            placeholder="Enter Team Name"
          />
        </b-form-group>

      </b-container>
    </b-row>


  <b-row>
    <b-container>
          <b-button @click="modalShow = !modalShow">Add User</b-button>
      <b-modal v-model="modalShow" :hide-footer="true" ref="usermodal"
              size="lg">
              <template v-slot:modal-title>
                Select Users
              </template>
              <UserSearch @userAdded="userAddedModal"/>
      </b-modal>

      <b-table
            ref="selectableTable"
            selectable
            :items="users"
            :fields="fields"
            responsive="sm">

          <template v-slot:cell(selected)="{ rowSelected }">
            <template v-if="rowSelected">
              <span aria-hidden="true">&check;</span>
              <span class="sr-only">Selected</span>
            </template>
            <template v-else>
              <span aria-hidden="true">&nbsp;</span>
              <span class="sr-only">Not selected</span>
            </template>
          </template> 
      </b-table>
    </b-container>
  </b-row>
  <b-row/>

  <b-row>
    <div>
        <b-button type="submit" variant="primary" @click.prevent="onSubmit" >Create Team</b-button>
        <b-button variant="regular" @click.prevent="onCancel" >Cancel</b-button>
    </div>

  </b-row>

  </b-container>
  </b-form>
    <b-alert
    v-model="showAlert"
    class="position-fixed fixed-bottom m-0 rounded-0"
    style="z-index: 2000;"
    variant="danger"
    dismissible
  >
    Fixed position (top) alert!
  </b-alert>
 
</div>
   
</template>

<script>
  import UserSearch from '@/components/UserSearch.vue';
  export default {
    data() {
      return {
        mode: 'create',
        modalShow: false,
        fields: ['given_name', 'family_name'],
        team: {},
        users: [], // store users separately to dipslay a list instead of object in the table
        show: true,
        showAlert: false
      }
    },

    async created(){
      if (this.$route.params.uid){
        this.mode = 'edit';
        try{
          let team_query = await this.$api.get(`${this.$teams_url}/${this.$route.params.uid}`);
          if (team_query.status != 200){
            this.showAlert = true;
          }
          this.team = team_query.data;
          // this kind of sucks, but without graphql there's not a great
          // way to get user names out of the original request, so go get them one
          // at a time
          for (const uid in this.team.members){
            let user_query = await this.$api.get(`${this.$users_url}/` + uid);
            this.users.push(user_query.data)
          }
        }
        catch(e){
          this.showAlert = true;
          console.error(e);
        }
      }
    },

    components: {
        UserSearch
    },

    methods: {
      async onSubmit(evt) {

        // prepare the team object
        this.users.forEach((user) =>{
          this.team.members[user.uid] = ['member'];  
        });

        const config = { headers: { 'Content-Type': 'application/json' } };
        try{
          if (this.mode === 'create'){
            let response = await this.$api.post(this.$teams_url, this.team, config)
          }
          else{
            let response = await this.$api.put(this.$teams_url, this.team, config)
          }
            
            this.$router.go(-1)
        }
        catch(e){
            console.error(e)
        }
      },

      onCancel(evt){
        this.$router.go(-1)
      },
    
      userAddedModal(user, evt){
        console.log(user)
        this.users.push(user);
        this.$refs.usermodal.hide()
      }
    }
  }
</script>