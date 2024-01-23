<template>
<div class="sidebar">
  <a class="active"><router-link to="/"> <font-awesome-icon icon="js" /> ทรัพย์สิน </router-link></a>
  <a href="#news"><router-link to="/about"><font-awesome-icon icon="phone" /> แผนก</router-link></a>
  <a href="#contact"><router-link to="/contact"><font-awesome-icon icon="fa-solid fa-user-secret" />พนักงาน</router-link></a>
  <a href="#about"><router-link to="/contact"><font-awesome-icon icon="js" />กลุ่มบัญชี</router-link></a>
  <a href="#about"><router-link to="/contact"><font-awesome-icon icon="js" />รายการทรัพย์สิน</router-link></a>
</div>

<div class="content">
 <h3>รายการทรัพย์สิน</h3>
  <form v-on:submit.prevent="addItem">
   <div class="row powder-blue">
    <div class="form-group col-md-5">
       <label>รหัส</label> <input type="text"  id="input">
    </div>
    <div class="form-group col-md-7">
      <label>ชื่อไทย</label> <input type="text"  id="input">
    </div> 
    <div class="form-group col-md-5">      
    </div>
    <div class="form-group col-md-7">
      <label>อังกฤษ</label> <input type="text"  id="input">
    </div>
  </div>

  <div class="row">
    <div class="form-group col-md-6">
       <label>หมวด</label> <input type="text"  id="input">
    </div>
    <div class="form-group col-md-6">
      <label>กลุ่มบัญชี</label> <input type="text"  id="input">
    </div>
    <div class="form-group col-md-6">
       <label>เลขทะเบียน</label> <input type="text"  id="input">
    </div>
    <div class="form-group col-md-6">
      <label>แผนก</label> <input type="text"  id="input">
    </div>
  </div>
  <div class="row">
    <div class="form-group col-md-5">
       <label>คิดค่าเสื่อม</label> <input type="text"  id="input">
    </div>
    <div class="form-group col-md-7">
      <label class="w-90">วิธีคิดค่าเสื่อม</label> <input type="text"  id="input">
    </div> 
    <div class="form-group col-md-5">
       <label>วันที่ซื้อ</label> <input type="date"  id="input">
    </div>
    <div class="form-group col-md-7">
      <label class="w-90">วันที่เริ่มใช้</label> <input type="date"  id="input">
    </div>
    <div class="form-group col-md-5">
       <label>ราคาทุน</label> <input type="text"  id="input">
    </div>
    <div class="form-group col-md-7">
      <label class="w-90">อายุการใช้</label> <input type="text"  id="input">
    </div>
    <div class="form-group col-md-5">
       <label>ราคาซาก</label> <input type="text"  id="input">
    </div>
    <div class="form-group col-md-7">
      <label class="w-90">อัตรา</label> <input type="text"  id="input">
    </div>
  </div>
   <div class="row">
    <div class="form-group col-md-6">
       <label>คิดค่าเสื่อม</label> <input type="text"  id="input">
    </div>
    <div class="form-group col-md-6">      
    </div> 
    <div class="form-group col-md-6">
       <label>ค่าเสื่อมยกมา</label> <input type="text"  id="input">
    </div>
    <div class="form-group col-md-6">
      <label class="w-90">วันที่ขาย</label> <input type="date"  id="input">
    </div>

      <div class="form-group col-md-6">
       <label>ค่าเสื่อมคำนวณเอง</label> <input type="text"  id="input">
    </div>
    <div class="form-group col-md-6">
      <label class="w-90">ราคาขาย</label> <input type="text"  id="input">
    </div>
      <div class="form-group col-md-6">
       <label>คำนวณเองถึงวันที่</label> <input type="text"  id="input">
    </div>
    <div class="form-group col-md-6">
      <label class="w-90">กำไร/ขาดทุน</label> <input type="text"  id="input">
    </div>
    <div class="form-group col-md-6">
       <label>ค่าเสื่อมเบื้องต้น</label> <input type="text"  id="input">
    </div>
    <div class="form-group col-md-6">
     
    </div>
  </div>


  </form>
</div>
</template>

<script>
export default {
  data() {
    return {
      isResponsive: false,
    };
  },
  mounted() {
    // Check the window width on component mount
    this.checkResponsive();
    // Add event listener for window resize
    window.addEventListener('resize', this.checkResponsive);
  },
  methods: {
    checkResponsive() {
      // Toggle the 'responsive' class based on window width
      this.isResponsive = window.innerWidth < 768;
    },
  },
  beforeUnmount() {
    // Remove the event listener to avoid memory leaks
    window.removeEventListener('resize', this.checkResponsive);
  },
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
  padding:1em;
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
</style>