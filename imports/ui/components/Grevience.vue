<template>
  <div class="grevience">
    <h2>Student Grevience Form</h2>
    <div>
      <div>
        <form class="info-link-add">
          <input type="text" class="form1" v-model="studentRollNo" name="studentRollNo" placeholder="Student Roll Number" required>
          <br>
          <input type="text" class="form1" v-model="studentName" name="studentName" placeholder="Student Name" required>
          <br>
          <input type="text" class="form2" v-model="grevience" name="grevience" placeholder="Grevience" required>
          <br>
          <input type="submit" class="form" name="submit" @click="submit($event)" value="Submit">
        </form>
      </div>
      <!-- <div v-for="link in links">
        <div>{{link.studentRollNo}}</div>
        <div>{{link.studentName}}</div>
        <div>{{link.grevience}}</div>
      </div> -->
    </div>
  </div>
</template>

<script>
import Links from '../../api/collections/Links'

export default {
  name:'grevience',
  data() {
    return {
      studentRollNo: "",
      studentName: "",
      grevience:"",
    }
  },
  meteor: {
    $subscribe: {
      'links': [],
    },
    links () {
      return Links.find({})
    },
  },
  methods: {
    submit(event) {
      event.preventDefault()
      Meteor.call('createLink', this.studentRollNo, this.studentName,this.grevience, (error) => {
        if (error) {
          alert(error.error)
        } else {
          this.studentRollNo = ''
          this.studentName = ''
          this.grevience = ''
          alert("your grevience has been submitted")
        }
      })
    }
  },
}
</script>