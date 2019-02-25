<template>
       
   <!-- Wraper -->
    <main class="wrap">
        <!-- ALL COMMENTS GOES HERE -->
              <!-- 'earlier' comments -->
              <p v-if='comments.length > 4'> {{comments.length- 4}} earlier comments</p>
             <div v-for="(comment,index) in comments.slice(-4)" class="commentsArea"> 
             <!-- DELETE BUTTON --> 
              <button type='button' class='btn-danger delete-button rounded-left' v-on:click='deleteComment(index)'><i class="icon ion-ios-trash"></i> </button>
              <!-- COMMENTS: NAME,COMMENT --> 
              <h6> <span class='avatar' v-html='avatar'></span>  {{comment.name}} <span class='span-date'> {{new Date(comment.commentTime).toLocaleTimeString('en-US')}} </span></h6>
              <p class='comment'> {{comment.comment}} </p>
            </div>
            
        <section class="input-wraper rounded-bottom">
            <form>
                <!-- INPUTS: --> 
                <!-- name --> 
                <input type="text" placeholder="Add a name" class="name-input" v-model="newName" autofocus>
                  <!-- comment --> 
               <input v-on:keyup.enter='postComment' type="text" placeholder="Add a comment" class="main-input" v-model="newComment">  <br>
               <!-- BUTTONS: Post and cancel --> 
                <button type="button" v-on:click='postComment' class="btn-success base-style"><i class="icon ion-ios-paper-plane"></i> Post</button>
                <button type="button" v-on:click='cancelComment' class="btn-secondary base-style"> Cancel</button>
            </form>
        </section>
  </main> 
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'

var moment = require('moment');
export default {
   data() {
    return {
      avatar: "<img src='../avatar/robot.png'>",   // avatar from https://www.iconfinder.com for learning purpose and not for comercial usage.
      moment:moment,
      newName: '',
      newComment: '',
      comments: [],

    }  
},

methods: {

  // Post comment
  postComment: function(){
    this.comments.push({
        name: this.newName,
        comment: this.newComment,
        id: this.comments.length,
        commentTime: new Date   
        }),
    this.newName = '';
    this.newComment = '';

  },
  // cancell comment
  cancelComment: function() {
    this.newName = '';
    this.newComment = '';
  },
  // delete comment
  deleteComment: function(index) {
    this.$delete(this.comments,index);
 
  }
},
// local storage
watch: {
  comments: {
    handler() {
      localStorage.setItem('comments', JSON.stringify(this.comments));
    },
    deep: true,
  },
},
mounted() {
  if (localStorage.getItem('comments')) this.comments = JSON.parse(localStorage.getItem('comments'));
},

}
</script>

<style>
/* wraper */
.wrap {
  width: 500px;
  height: 560px;
  margin-top: 3rem;
  border-radius: 1%;
  background-color: #F0F0F0;
  box-shadow: 0 0 0 1px #D8D8D8;
  position: relative;
  margin: 0 auto;
}
.wrap p:nth-child(1) {
  padding-left:1rem;
  padding-top:.5rem;

}
/*main wraper */
.main-wraper {
  width: 600px;
  height: 700px;
  background-color: #E8E8E8;
  padding-top: 0.5rem;
  margin-bottom: 2rem;
}

/* Titlai, subtitlai (BitDegree-frontend uzduotis) */
.title {
  padding-left: 3.2rem;
  padding-bottom: .7rem;
}
.subtitle {
  color: #787878;
  font-weight: 300;
  font-size: 1rem;
}

/* =-=--==   Mygtukai  =-=-=-==-  */
.base-style {
  padding: .5rem;
  border-radius: 5%;
  margin-top: .8rem;
}
.add-name {
  margin-left:8.2rem;
  padding: .3rem;
}
.delete-button {
  width: 40px;
  height:auto;
  padding:0;
  position:absolute;
  right:0px;
  opacity:0.09;
  border-radius: 5%;
}
.delete-button:hover {
  opacity:1;
  transition:1s;
}
.delete-button i {font-size:1.6rem;}

/* -=-=-==-=-=-=  COMMENT AREA -=-=-=-=-==-=-   */
.commentsArea {padding:.1rem;}
.commentsArea:hover {
 background-color:#E8E8E8;
  transition:.5s;
}
/* data */
.span-date {
  font-weight:100;
  padding-left:.8rem;
  color:#A0A0A0;
  font-size:.8rem;
}

/* AVATARAS */
.avatar {
  padding-right:.5rem;
  padding-left:.5rem;
}
.avatar img {
  margin-bottom:.6rem;
  width:40px;
  height:40px;
}
/* SINGLE COMMENT */
.comment {
  padding-left:3.7rem;
  padding-right: 1.7rem;
}
.commentsArea {
  padding-left:.7rem;
}
.commentsArea p {
  margin-bottom:.1rem;
  margin-top:-0.3rem; 
}

h6 {margin:0;}

/* =-=-=-==- MAIN INPUTAI ir wraperis */
.main-input {
  border: none;
  border-bottom: 0.5px solid #C0C0C0;
  padding: .7rem;
  padding-left:.4rem;
  margin-bottom: .4rem;
  width: 420px;
}
.name-input {
   border: none;
   padding: .2rem;
   padding-left:.4rem;
   border-bottom: 0.5px solid #C0C0C0;
   width: 340px;
}
input:focus {background-color:#F0F0F0;}

.input-wraper {
  width: 100%;
  height: 180px;
  background-color: #fff;
  padding: .9rem;
  position: absolute;
  bottom: 0;
}

/*  =-=--=--=-=-=   MEDIA 0-767 =-=-=-=-=-=-  */

@media(max-width:767px) {
/* wraper */
.wrap {
  width: 400px;
  height: 500px;
  margin-top: 3rem;
  margin: 0 auto;
}

/*main wraper */
.main-wraper {
  width: 500px;
  height: 600px;
  background-color: #E8E8E8;
  padding-top: 0.5rem;
  margin-bottom: 2rem;
}

/*INPUTS */
.main-input {width: 300px;}

.name-input {width: 170px;}
 /*BUTTONS */
.delete-button {width: 25px;}

.delete-button i {font-size:1rem;}

.base-style {
padding: .2rem;
margin-top: .8rem;
}
}

/*  MEDIA 0-485  */

@media(max-width:486px) {
/* wraper */
.wrap {
  width: 300px;
  height: 400px;
  margin-top: 3rem;
  margin: 0 auto;
}

/*main wraper */
.main-wraper {
  width: 400px;
  height: 500px;
  background-color: #E8E8E8;
  padding-top: 0.5rem;
  margin-bottom: 2rem;
}
/* main inputs */
.main-input {width: 200px;}

.name-input {width: 100px;}

/* buttons */
.base-style {
  padding: .1rem;
  padding-right:.2rem;
  margin-top: .8rem;
}
/* avatar */
.avatar img {
  margin-bottom:.6rem;
  width:30px;
  height:30px;
}
/* TITLE SUBTITLE */
.title {font-size:1rem;}

.subtitle {font-size:.8rem;}

}

</style>
