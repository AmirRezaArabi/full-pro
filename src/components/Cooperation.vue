<template>
  <div>
    <div class="contain">
      <div class="form">
        <form action="#">
          <h1 class="form-name">تقاضای همکاری</h1>
          <div class="form-name">
            <label for="name">لطفا نام خود را وارد کنید:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div class="form-name">
            <label for="education"
              >لطفا مدرک و رشته ی تحصیلی خود را وارد کنید:</label
            >
            <input type="text" id="education" name="education" />
          </div>
          <div class="work">
            <div class="text">
              دورکاری یا حضور در محل کار را ترجیح می دهید ؟
            </div>
            <div class="work-radio">
              <div class="display">
                <label for="doorKari">دورکاری</label>
                <input type="radio" id="doorKari" name="select" />
              </div>

              <div class="display">
                <label for="hozoori">حضور در محل کار</label>
                <input type="radio" id="hozoori" name="select" />
              </div>
              <div class="display">
                <label for="any">فرقی ندارد</label>
                <input type="radio" id="any" name="select" />
              </div>
            </div>
          </div>
          <div class="condition">
            <div class="st">
              <p>وضعیت تاهل:</p>
              <select name="statuse" id="" class="status">
                <option value="single">مجرد</option>
                <option value="married">تاهل</option>
              </select>
            </div>
          </div>
          <div class="picture">
            <div class="text">لطفا تصویر کارت ملی خود را وارد کنید</div>
            <div><input type="file" /></div>
          </div>
          <div class="note">
            <div><p>اگر نکته ای لازم است بگویید:</p></div>
            <textarea name="message" rows="8" cols="60"> </textarea>
          </div>
          <div class="fav">
            <div class="text">حوزه های علاقه مندی خود را مشخص کنید:</div>
            <div class="fav-radio">
              <label for="">طراحی وبسایت</label>
              <input type="checkbox" />
              <label for="">پشتیبان فروش</label>
              <input type="checkbox" />
              <label for="">خدمات پس از فروش</label>
              <input type="checkbox" />
              <label for="">انبار داری</label>
              <input type="checkbox" />
            </div>
            <input type="submit" value="تایید" class="sub" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
*::before,
*::after,
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
}

.line {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 40px;
}
.line-black {
  height: 1px;
  width: 75%;
  background-color: black;
}

.contain-click {
  margin-top: 30px;
  width: 100%;
  display: flex;
}
.contain-click .items {
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 30px;
}
.contain-click .items .item {
  width: 200px;
  height: 60px;
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  transition: 0.5s;
}
.contain-click .items .item:hover {
  border: 2px solid blue;
}
.contain-click .items .item .icon {
  margin-top: 5px;
  display: flex;
}
.contain-click .items .item .text {
  font-weight: 500;
  text-decoration: none;
  color: black;
}

.about {
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.about .text {
  width: 65%;
  border: 1px dotted black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  direction: rtl;
}
.about .text-us {
  font-size: 20px;
  width: 100%;
}
.about .text-us .we {
  margin-bottom: 20px;
}

.contain {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.contain .form {
  background-color: #d4e3e7;
  width: 70%;
  direction: rtl;
  display: flex;
  flex-direction: column;
}
.contain .form-name {
  gap: 10px;
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}
.contain .form .input-name {
  width: 250px;
}
.contain .form .work {
  display: flex;
  flex-direction: column;
}
.contain .form .work .text {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
.contain .form .work-radio {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 10px;
}
.contain .form .work-radio .display {
  display: flex;
  gap: 10px;
}
.contain .form .condition .status {
  width: 100px;
  height: 20px;
}
.contain .form .condition .st {
  margin-top: 10px;
  gap: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.contain .form .picture {
  margin-top: 20px;
  gap: 20px;
  display: flex;
  justify-content: center;
}
.contain .form .note {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.contain .form .note-text {
  width: 450px;
  height: 100px;
}
.contain .form .fav {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.contain .form .fav .sub {
  width: 60px;
  height: 30px;
}

.tag {
  direction: rtl;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.tag .a {
  text-decoration: none;
}
</style>
