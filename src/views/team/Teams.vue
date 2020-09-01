<template>
  <div>

    <!-- <b-container id="edit-container">
       <b-button v-b-modal.modal1 class="float-right" variant="info">Add Compound</b-button>

        <b-modal id="modal1" title="Create Compound" @ok="createCompoundHandler">
             <b-form-input v-model="new_compound_name" type="text" placeholder="Enter compound name" />
        </b-modal>

    </b-container>
    -->

      <b-row>
        <b-col><h1>Teams</h1></b-col>
      </b-row>
      <b-row>
        <b-container>
          <b-button v-bind:to="'/teams/details'">Add Team</b-button>
        </b-container>
      </b-row>
      <b-row>
        <b-container>
          <b-table striped hover  :items="teams" :fields="fields" responsive="true" @row-clicked="rowClickHandler">
            
            <template v-slot:cell(details)="row">
              <b-button size="sm" @click="row.toggleDetails" class="mr-2">
                {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
              </b-button>
            </template>

            <template v-slot:cell(actions)="row">
              <b-button size="sm" @click="rowClickHandler(row.item)" class="mr-2">
                Edit
              </b-button>

            </template>

            <template v-slot:row-details="row">
              <b-card>
                <b-row class="mb-2">
                  <b-col sm="3" class="text-sm-right"><b>Name:</b></b-col>
                  <b-col>{{ row.item.name }}</b-col>
                </b-row>

                <b-row class="mb-2">
                  <b-col sm="3" class="text-sm-right"><b>Members:</b></b-col>
                  <b-col>Not Implemented</b-col>
                </b-row>

                <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
              </b-card>
            </template>
          </b-table>
        </b-container>
      </b-row>

  </div>
</template>

<script>

// import axios from 'axios';
export default {

  data() {
    return {
      fields: ['scope', 'name', 'details', 'actions'],
      teams: [],
      errors: [],

    };
  },

  async created() {
    const config = { headers: { 'Content-Type': 'application/json' } };
        try{
            let response = await this.$api.get(this.$teams_url, config);
            this.teams = response.data;
        }
        catch(e){
            console.error(e)
        }
  },

  // created(){

  // },
  methods: {
   
    rowClickHandler(team) {
      this.$router.push({ path: `teams/details/${team.uid}` });
    },

  },
};

</script>

<style>
#edit-container {
  margin: 5px;
  height: 40px
}
#mfp_main{
    font-size: 0.7em;
}
</style>
