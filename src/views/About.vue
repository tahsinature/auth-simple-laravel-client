<template>
  <div class="about">
    <div class="container">
      <div class="img-box m-auto">
        <img class="img-thumbnail" src="../assets/author-photo.jpg" alt>
      </div>
      <div class="text-box">
        <h3 class="text-center">Mohammad Tahsin</h3>
        <hr>
        <p>
          Hi, this is just a simple authentication project with laravel & Vue.js. In a job interview, I've got a task to make an auth project with something that unknown to me. They gave me this task on Laravel. Laravel is something I had no idea about at that time. Deadline was 1 week. Somehow I did this with some basic implementation.
          <a
            href="https://github.com/tahsinature/auth-simple-laravel-server"
            class="here-link"
          >Here</a> is my code incase if you're interested to have a look on.
          <br>And
          <a
            href="https://vue-store-tahsin.firebaseapp.com"
            target="_blank"
            class="here-link"
          >here</a> is my another project with Node.js on the Server and Vue on the Client.
        </p>
        <div class="icon-box">
          <div class="single-icon-box">
            <a href="https://github.com/tahsinature">
              <i class="fab fa-github"></i>
            </a>
          </div>
          <div class="single-icon-box">
            <a href="http://instagram.com/t4h51n">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
          <div class="single-icon-box">
            <a href="https://www.linkedin.com/in/mohammad-tahsin/s">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/sass/main.scss";

.about {
  background: #6a69afa6;
  min-height: calc(100vh - 56px);
  padding: 3rem 0;
}
.img-box {
  width: 200px;
  img {
    width: 100%;
  }
}
.text-box {
  color: #fff;
  border: 3px solid rgba(255, 255, 255, 0.37);
  border-radius: 10px;
  padding: 1rem;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  @include respond(df, tab-l) {
    width: 100%;
  }
  .here-link {
    color: #ffe000;
  }
}
.icon-box {
  background: #ffffff7a;
  height: 55px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  .single-icon-box {
    width: 40px;
    height: 80%;
    margin: 0 0.4rem;
    // background: #4d58e259;
    background: #ffffffba;
    color: #156d66c7;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
      color: #fff;
      background: rgba(0, 0, 0, 0.589);
    }
    a {
      color: inherit;
      i {
        font-size: 2rem;
      }
    }
  }
}
</style>
