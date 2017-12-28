<template>
<div id="players">
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-12">
        <h1>Nba draft - 2017</h1>
        <div :class="{'is-waiting': !dataReady}">
          <table class="table table-responsive-sm">
            <thead>
              <tr>
                <th scope="col">Ime i prezime</th>
                <th scope="col">Pozicija na draftu</th>
                <th scope="col">Klub (Grad i naziv kluba)</th>
                <th scope="col">Koledz</th>
                <th scope="col">Pregled</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="player in players">
                <td>{{player[1]}}</td>
                <td>{{player[5]}}</td>
                <td>{{player[7]}}, {{player[8]}}</td>
                <td>{{player[10]}}</td>
                <td><router-link class="btn btn-info" v-bind:to="'/profile/'+ player[0]">View</router-link>
                  </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import router from '@/router'

export default {
  name: 'players',
  created: function() {
    this.getPlayers();
  },
  data() {
    return {
      dataReady: false,
      players: []
    }
  },
  methods: {
    getPlayers() {
      this.$http.get("http://stats.nba.com/stats/drafthistory?LeagueID=00").then(response => {
        let players = response.body.resultSets["0"].rowSet;
        //this should be done in method
        this.players = players.filter(player => player[5] <= 20 && player[2] == 2017);
        this.dataReady = true;
        // success callback
      }, response => {
        // error callback
      });

    }
  }
}
</script>

<style scoped>

</style>
