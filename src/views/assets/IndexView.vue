<template>
<div class="content">
        <table class="table">
            <thead>
                <tr class="table_header">
                    <th>No</th>
                    <th>Code</th>
                    <th>name</th>
                    <th>serialnum</th>
                    <th>status</th>
                    <th>keeper</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="asset in assets" :key="asset.asset_code">
                     <td><input type="checkbox"></td>
                    <td>{{asset.asset_code}}</td>
                    <td>{{asset.asset_name}}</td>
                    <td>{{asset.serial_num}}</td>
                    <td>{{asset.status}}</td>
                    <td>{{asset.keeper}}</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            assets:[],
        };
    },mounted() {
       this.all();
    },
    methods:{
        all() {
            axios.get("http://localhost:3000/trd/all")
            .then(response => {		
                this.assets = response.data;              
            })
            .catch(error => {
                alert(error);
            });
        },
    },
};
</script>
<style scoped>
@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: 100vh;
    position: relative;
  }
  .sidebar a {float: left;}
  div.content {margin-left: 0;}
}

@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
   div.content {margin-left: 0;}
}

div.content {
  margin-left:230px;
  margin-right:20px;
  margin-top:10px;
  padding:2em;
  height:100vh;
  background-color:white;
}

.row{
      border: dashed black 1px;
      width:100%;
      padding: 10px;
      text-align:left;
      margin:10px;
      font-family: 'Mitr', sans-serif;
      font-family: 'Noto Serif Thai', serif;
      font-family: 'Prompt', sans-serif;
  }
  
  input{
    width:75%;
    margin-top:5px;
  }

  label{
    width:90px;
    font-size:16px;
  }
  .w-90{
    width:90px;
  }

  .w-100{
    width:100px;
  }



.powder-blue{
  background-color:#ADD8E6;
}


.table_header th{
  background-color:#708090;
  color:white;
}



</style>