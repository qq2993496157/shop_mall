<template>
  <div id="swiper">
    <div id="swiper-ul" class="flex" style="left: 0">
      <div v-for="item in banners" class="swiper_item">
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
      </div>
    </div>
    <div id="swiper-ol" class="flex">
      <div v-for="item in banners" class="swiper_list"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      sss: [1, 2, 3, 4],
    };
  },
  methods: {},
  updated() {
    function animate(obj, target, callback) {
      // 调用函数时，无论当前是否有定时器的存在，都先清除定时器，防止出现定时器叠加的bug
      clearInterval(obj.timer);

      obj.timer = setInterval(function () {
        // 步长值写到定时器的里面
        // 把我们步长值改为整数 不要出现小数的问题
        // var step = Math.ceil((target - obj.offsetLeft) / 10);
        var step = (target - obj.offsetLeft) / 10; //设置动画的步长，让动画由快变慢
        step = step > 0 ? Math.ceil(step) : Math.floor(step); //三元运算判断步长向上还是向下取整

        if (obj.offsetLeft == target) {
          // 停止动画 本质是停止定时器
          clearInterval(obj.timer);
          // 回调函数写到定时器结束里面
          if (callback) {
            // 调用函数
            callback();
          }
        }
        // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
        obj.style.left = obj.offsetLeft + step + "px";
      }, 15);
    }

    let si = document.querySelectorAll(".swiper_item");
    let ul = document.querySelector("#swiper-ul");
    let olList = document.querySelector("#swiper-ol").children;
    let width = si[0].offsetWidth;
    let flag = 0;
    let num = 0;
    let flags = true;

    olList[0].classList.add("big");
    for (let i = 0; i < olList.length; i++) {
      olList[i].setAttribute("index", i);
      olList[i].addEventListener("touchend", function () {
        for (let j = 0; j < olList.length; j++) {
          olList[j].classList.remove("big");
        }
        this.classList.add("big");
        let index = this.getAttribute("index");
        animate(ul, -index * width);
      });
    }

    var first = si[0].cloneNode(true);
    ul.appendChild(first);
    function bigs(num) {
      for (let j = 0; j < olList.length; j++) {
        olList[j].classList.remove("big");
      }
      olList[num].classList.add("big");
    }

    function cltime() {
      if (flags) {
        if (flag == si.length) {
          flag = 0;
          ul.style.left = 0;
        }
        flag++;
        animate(ul, -flag * width);
        if (num == olList.length - 1) {
          num = 0;
          bigs(num);
        } else {
          num++;
          bigs(num);
        }
      }
    }

    let swiperTime = setInterval(cltime, 3000);

    let si2 = document.querySelectorAll(".swiper_item");
    for (let k = 0; k < si2.length; k++) {
      si2[k].setAttribute("index", k);
    }

    ul.addEventListener("touchstart", function (e) {
      let lastMove = null;
      flags = false;
      let left = parseInt(this.style.left);
      let xStart = e.targetTouches[0].pageX;
      ul.addEventListener("touchmove", function (e) {
        let x = e.targetTouches[0].pageX - xStart;
        let ulX = left + x;
        ul.style.left = ulX + "px";
        lastMove = x;
      });
      ul.addEventListener("touchend", function (e) {
        console.log(lastMove);
        let ll = si2[0].offsetWidth / 3;
        function leftmove() {
          if (lastMove <= -ll) {
            if (flag == si.length) {
              flag = 0;
              ul.style.left = 0;
            }
            flag++;
            animate(ul, -flag * width);
            if (num == olList.length - 1) {
              num = 0;
              bigs(num);
            } else {
              num++;
              bigs(num);
            }
          } else {
            flag;
            animate(ul, -flag * width);
          }
        }
        function rightmove() {
          if (lastMove >= ll) {
            if (flag == 0) {
              flag = si.length;
              ul.style.left = 0;
            }
            flag--;
            animate(ul, -flag * width);
            if (num == 0) {
              num = olList.length - 1;
              bigs(num);
            } else {
              num--;
              bigs(num);
            }
          } else {
            flag;
            animate(ul, -flag * width);
          }
        }
        if (lastMove > 0) {
          rightmove();
        } else {
          leftmove();
        }

        setTimeout(() => {
          flags = true;
        }, 500);
      });
    });
  },
};
</script>

<style>
img {
  width: 100%;
}
#swiper {
  position: relative;
  width: 100%;
  overflow: hidden;
}
#swiper-ul {
  position: relative;
  left: 0;
  top: 0;
  flex-wrap: nowrap;
}
.swiper_item {
  flex: 1;
  min-width: 100%;
}
#swiper-ol {
  position: absolute;
  left: 50%;
  bottom: 5px;
  transform: translate(-50%, 0);
}
.swiper_list {
  flex: 1;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: #fff;
}
.big {
  transform: scale(1.2);
  background-color: #ff8e96 !important;
}
</style>