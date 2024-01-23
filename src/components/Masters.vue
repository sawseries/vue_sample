<template>
<div class="content">
        <table class="table table-bordered">
            <thead>
                <tr class="table_header">
                    <th>No</th>
                    <th>Code</th>
                    <th>name</th>
                    <th>status</th>
                    <th>keeper</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="asset in assets" :key="asset.id">
                     <td><input type="checkbox"></td>
                    <td>{{asset.code}}</td>
                    <td>{{asset.name}}</td>
                    <td>{{asset.status}}</td>
                    <td>{{asset.keeper}}</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
</div>
</template>

<script>
export default {
    data() {
        return {
            assets:[
              { id:'1',code: 'B748596', name: 'Computer DELL', status: 'available', keeper: 'นางยุพิน ดอนวิชัย' },
              { id:'2',code: 'B748596', name: 'Computer DELL', status: 'available', keeper: 'นางยุพิน ดอนวิชัย' },
              { id:'3',code: 'B748596', name: 'Computer DELL', status: 'available', keeper: 'นางยุพิน ดอนวิชัย' },
              { id:'4',code: 'B748596', name: 'Computer DELL', status: 'available', keeper: 'นางยุพิน ดอนวิชัย' },
              { id:'5',code: 'B748596', name: 'Computer DELL', status: 'available', keeper: 'นางยุพิน ดอนวิชัย' }
            ],
        };
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mitr:wght@300&family=Noto+Serif+Thai:wght@600&family=Prompt&display=swap');

body {
  margin: 0;
 font-family: 'Mitr', sans-serif;
font-family: 'Noto Serif Thai', serif;
font-family: 'Prompt', sans-serif;
}



.sidebar {
  margin: 0;
  padding: 0;
  width: 200px;
  background-color:#FFF;
  position: fixed;
  height: 100%;
  overflow: auto;
  border-right:1px solid #C0C0C0;
}

.sidebar a{
  display: block;
  color: black;
  padding: 10px;
  text-decoration: none;
  text-align:left;
  font-size:12pt;
  font-family: 'Mitr', sans-serif;
  font-family: 'Noto Serif Thai', serif;
  font-family: 'Prompt', sans-serif;
  margin:5px;
}
 
.sidebar a.active {
  background-color:#4169E1;
  color: white;
}

.sidebar a:hover:not(.active) {
  background-color: #F5F5F5;
  color:#1E90FF;
  border-radius:10px;
  margin:5px;
}

div.content {
  margin-left:230px;
  margin-right:40px;
  margin-top:10px;
  padding:0.5em;
  padding-top:20px;
  height: 100%;
}

@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
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

  .container{
    border:1px solid gray;
    padding-right:30px;
    background-color:#F8F8FF;
  }

.powder-blue{
  background-color:#ADD8E6;
}
body{
 
}
.container-fluid{
   background-color:#FFEBCD;
}
.table_header th{
  background-color:#708090;
  color:white;
}



</style>