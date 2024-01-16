

<template>
<div class="container">
   
<h3>รายการทรัพย์สิน</h3>
 
  <form v-on:submit.prevent="addItem">
   <div class="row">
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
    <div class="form-group col-md-5">
       <label>คิดค่าเสื่อม</label> <input type="text"  id="input">
    </div>
    <div class="form-group col-md-7">
      
    </div>
 
    <div class="form-group col-md-5">
       <label>ค่าเสื่อมยกมา</label> <input type="date"  id="input">
    </div>
    <div class="form-group col-md-7">
      <label class="w-90">วันที่ขาย</label> <input type="date"  id="input">
    </div>

      <div class="form-group col-md-5">
       <label>ค่าเสื่อมคำนวณเอง</label> <input type="text"  id="input">
    </div>
    <div class="form-group col-md-7">
      <label class="w-90">ราคาขาย</label> <input type="text"  id="input">
    </div>
      <div class="form-group col-md-5">
       <label>คำนวณเองถึงวันที่</label> <input type="text"  id="input">
    </div>
    <div class="form-group col-md-7">
      <label class="w-90">กำไร/ขาดทุน</label> <input type="text"  id="input">
    </div>
    <div class="form-group col-md-5">
       <label>ค่าเสื่อมเบื้องต้น</label> <input type="text"  id="input">
    </div>
    <div class="form-group col-md-7">
     
    </div>
  </div>


  </form>

 
</div>

</template>

<script>
export default {
  data() {
      return {
         itemName: null,
        itemNumber: null,
        shoppingList: [
          { name: 'Tomatoes', number: 5 }
        ]
      }
    },
    methods: {
      addItem(){
        let item = {
          name: this.itemName,
          number: this.itemNumber
        }
        this.shoppingList.push(item)
        this.itemName = null
        this.itemNumber = null  
      }
    }
}
</script>


<style scoped>

 .row{
      border: dashed black 1px;
      width:100%;
      padding: 10px;
      text-align:left;
      margin-top:10px;
      margin-right:10px;
  }
  
  input{
    width:80%;
    margin-top:5px;
  }

  label{
    width:80px;
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
    padding-right:10px;
  }

</style>
