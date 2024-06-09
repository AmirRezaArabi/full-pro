<template>
  <div>
    <div class="about">
      <div class="text">
        <div class="text-us">
          <h2 class="we">درباره ما</h2>
          <p class="text-us-font">متن دلخواه خود را در این قسمت بنویسید</p>
          <p class="text-us-font">فروشگاه مارا به چه می شناسید؟</p>
          <p class="text-us-font">
            اگر بخواهید یک خرید آنلاین انجام دهید اول از همه به کجا سر می زنید؟
          </p>
          <p class="text-us-font">
            ما کارمان را از فروش ساده کالاهای الکترونیک و دیجیتال شروع کردیم اما
            حالا بعد از 15 سال و اضافه شدن بازوهای جدید به گروهمان تلاش میکنیم
            با همراهی شما بهترین پلتفرم تجارت الکترونیک در خاورمیانه باشیم. برای
            تحقق این ماموریت به لبخند شما و ارزش هایی الهام بخش باور داریم
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
*::before,
*::after,
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
}

.header {
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: center;
}
.header .center {
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.header .center .menu {
  display: flex;
  gap: 50px;
}
.header .center .menu-item {
  transition: 0.5s;
  cursor: pointer;
  text-decoration: none;
  color: black;
}
.header .center .menu-item:hover {
  color: blue;
}
.header .right {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 520px;
  gap: 10px;
}
.header .right .log-reg {
  display: flex;
  align-items: center;
  gap: 10px;
}
.header .right .log-reg .register {
  transition: 0.5s;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  width: 80px;
  height: 20px;
  border: 2px solid rgba(52, 51, 51, 0.766);
  border-radius: 30px;
  text-align: center;
  color: black;
}
.header .right .log-reg .register:hover {
  background-color: blue;
}
.header .right .log-reg .login {
  cursor: pointer;
  text-decoration: none;
  font-size: 14px;
  color: white;
  width: 80px;
  height: 20px;
  border: 2px solid rgba(52, 51, 51, 0.766);
  transition: 0.5s;
  background-color: rgba(52, 51, 51, 0.766);
  border-radius: 30px;
  text-align: center;
}
.header .right .log-reg .login:hover {
  background-color: blue;
}
.header .left {
  display: flex;
  width: 520px;
  align-items: center;
  justify-content: center;
}
.header .left .search {
  display: flex;
  align-items: center;
}
.header .left .search .icon {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  border-radius: 30px;
  height: 25px;
  width: 200px;
}
.header .left .search .icon .ser {
  margin-left: 5px;
}
.header .left .search .icon-input {
  margin-left: 5px;
  border: none;
  width: 210px;
  border-radius: 30px;
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

</style>
