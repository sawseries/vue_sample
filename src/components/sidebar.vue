<prismic-rich-text :field="description_text" />
<template>

<div class="topnav">
  <a class="brand" href="#home"><b>K2M ASSET</b></a>
  <a class="topnav_right" href="#"><b>logout</b></a>
</div>

<div class="sidebar">
  
  <router-link class="active" to="/">ทรัพย์สิน </router-link>
  <router-link to="/create/assets"><font-awesome-icon icon="phone" /> แผนก</router-link>
  <router-link to="/Master"><font-awesome-icon icon="fa-solid fa-user-secret" />พนักงาน</router-link>
  <router-link to="/login"><font-awesome-icon icon="js" />กลุ่มบัญชี</router-link>
  <router-link to="/contact"><font-awesome-icon icon="js" />รายการทรัพย์สิน</router-link>
</div>
</template>

<script>
export default {
    data() {
        return {
        };
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mitr:wght@300&family=Noto+Serif+Thai:wght@600&family=Prompt&display=swap');

body {
  margin: 0;
 font-family: 'Mitr', sans-serif;
font-family: 'Arial', sans-serif;
font-family: 'Prompt', sans-serif;
font-size:14px;
}





.topnav {
  overflow: hidden;
  background-color: #425f9c;
 
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 10px;
  text-decoration: none;
  font-size: 12px;
}

.topnav .topnav_right{
    float:right;
    color:#fff;
    background-color:#4169E1;
    font-size:10pt;
  
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.brand {
  color: white;
  width:200px;
   font-size:10pt;
}

.table td,th{
    font-size:12pt;
}

.sidebar {
  margin: 0;
  padding: 0;
  width: 200px;
  background-color:#FFF;
  height:100vh;
  overflow: auto;
  float:left;
  border-right:1px solid #778899;
  position:relative;
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
 
.sidebar .active {
  background-color:#4169E1;
  color: white;
}

.sidebar a:hover:not(.active) {
  background-color: #F5F5F5;
  color:#1E90FF;
  border-radius:10px;
  margin:5px;
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
  background-color:#FFEBCD;
}

.table_header th{
  background-color:#778899;
  color:white;
}




</style>