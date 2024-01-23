<template>

<div class="topnav">
  <a class="active" href="#home">K2M ASSET</a>
</div>

<div class="sidebar">
  <a class="active"><router-link to="/"> <font-awesome-icon icon="js" /> ทรัพย์สิน </router-link></a>
  <a href="#news"><router-link to="/about"><font-awesome-icon icon="phone" /> แผนก</router-link></a>
  <a href="#contact"><router-link to="/contact"><font-awesome-icon icon="fa-solid fa-user-secret" />พนักงาน</router-link></a>
  <a href="#about"><router-link to="/contact"><font-awesome-icon icon="js" />กลุ่มบัญชี</router-link></a>
  <a href="#about"><router-link to="/contact"><font-awesome-icon icon="js" />รายการทรัพย์สิน</router-link></a>
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
font-family: 'Noto Serif Thai', serif;
font-family: 'Prompt', sans-serif;
}



.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04AA6D;
  color: white;
  width:200px;
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
  background-color:#FFEBCD;
}

.table_header th{
  background-color:#778899;
  color:white;
}

$breakpoint: 480px;
#table-demo {
  margin: 20px 0;
  table{
    min-width: 300px;
    width: 100%;
    height: fit-content;
    overflow-y: scroll;
    border-collapse: collapse;
    border: 1px solid #000;
    tr {
      td {
        border: 1px solid #000;
        padding: 10px;
      }
    }
    .bold {
      border-right: none;
      border-left: none;
      background: #ddd;
      border-bottom: 1px solid #c2c2c2;
      border: none;
      td {
        border: none;
        background: #000;
        color: #fff;
        border: none;
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
  .with-header {
    tr:first-of-type {
      td {
        border: none;
      }
    }
    @media (max-width: $breakpoint) {
      tr:first-of-type {
        display: none;
      }
      tr {
        border: 1px solid #000;
        td {
          display: block;
          border: none;
          &:first-child {
            padding-top: .5em;
          }
          &:last-child {
            padding-bottom: .5em;
          }
          &:before {
            content: attr(data-th)": ";
            font-weight: bold;
            display: inline-block;
            @media (min-width: $breakpoint) {
              display: none;
            }
          }
        }
      }
    }
  }
}


</style>