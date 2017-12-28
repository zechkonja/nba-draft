<template>
<div id="player">
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-12">
        <h1>Nba draft - 2017</h1>
        <div :class="{'is-waiting': !dataReady}">
          <table class="table table-responsive-sm">
            <thead>
              <tr>
                <th scope="col">Ime i prezime igraca</th>
                <th scope="col">Datum rodjenja</th>
                <th scope="col">Zemlja rodjenja</th>
                <th scope="col">Skola</th>
                <th scope="col">Visina</th>
                <th scope="col">Tezina</th>
                <th scope="col">Nba tim</th>
                <th scope="col">Pozicija</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{player[3]}}</td>
                <td>{{player[6] | moment("d/MM/YYYY")}}</td>
                <td>{{player[8]}}</td>
                <td>{{player[7]}}</td>
                <td>{{player[10]}}</td>
                <td>{{player[11]}} lbs</td>
                <td>{{player[20]}}</td>
                <td>{{player[14]}}</td>
              </tr>
            </tbody>
          </table>
          <router-link class="btn btn-outline-info back-btn" to="/">Back</router-link>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'player',
  data() {
    return {
      dataReady: false,
      player: {}
    }
  },
  created: function() {
    this.getPlayer(this.$route.params.id);
  },
  methods: {
    getPlayer: function(id) {
      this.$http.get("http://stats.nba.com/stats/commonplayerinfo?LeagueID=00&PlayerID=" + id).then((response) => {
        this.player = response.body.resultSets["0"].rowSet["0"];
        //this also should be done in method
        let height = this.player[10].split("-");
        this.player[10] = height[0] + "'" + height[1] + "''";
        this.dataReady = true;
      }, () => {

      })
    },
  }
}
</script>

<style scoped>
.heading {
  display: inline-block;
}

.back-btn {
  float: right;
  display: inline-block;
  margin-bottom: 20px;
}
</style>
