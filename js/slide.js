const imgArr = [
  {
    url: "https://www.wdh2o.idv.tw/%E6%B7%BA%E8%AB%87-css3-transition-%E8%BD%89%E5%A0%B4%E5%8B%95%E7%95%AB%E6%95%88%E6%9E%9C.html",
    imgUrl:
      "https://www.wdh2o.idv.tw/wp-content/uploads/2012/07/css3-base-200x150.png",
  },
  {
    url: "https://www.wdh2o.idv.tw/css3-transition-%E8%BD%89%E5%A0%B4%E5%8B%95%E7%95%AB%E6%87%89%E7%94%A8%E5%AF%A6%E4%BE%8B-%E6%BB%91%E5%8B%95%E9%81%B8%E5%96%AE%E7%AF%87.html",
    imgUrl:
      "https://www.wdh2o.idv.tw/wp-content/uploads/2012/08/slide-menu-200x150.jpg",
  },
  {
    url: "https://www.wdh2o.idv.tw/css3-transition-%E8%BD%89%E5%A0%B4%E5%8B%95%E7%95%AB%E6%87%89%E7%94%A8%E5%AF%A6%E4%BE%8B-%E6%BB%91%E5%8B%95%E5%BB%A3%E5%91%8A%E7%AF%87.html",
    imgUrl:
      "https://www.wdh2o.idv.tw/wp-content/uploads/2014/05/css-slide-200x150.jpg",
  },
  {
    url: "https://www.wdh2o.idv.tw/javascript-%E8%BC%AA%E6%92%AD%E5%BC%8F%E5%BB%A3%E5%91%8A.html",
    imgUrl:
      "https://www.wdh2o.idv.tw/wp-content/uploads/2012/09/setinterval-200x150.jpg",
  },
  {
    url: "https://www.wdh2o.idv.tw/%E4%BD%BF%E7%94%A8-veiwport-%E5%B0%8D%E6%96%BC%E8%A1%8C%E5%8B%95%E8%A3%9D%E7%BD%AE%E7%9A%84%E5%BD%B1%E9%9F%BF.html",
    imgUrl:
      "https://www.wdh2o.idv.tw/wp-content/uploads/2012/08/viewport-200x150.jpg",
  },
  {
    url: "https://www.wdh2o.idv.tw/dreamweaver-%E8%A1%8C%E7%82%BA-%E4%BA%92%E5%8B%95%E5%BC%8F%E6%9B%B4%E6%94%B9%E6%96%87%E5%AD%97%E5%A4%A7%E5%B0%8F.html",
    imgUrl:
      "https://www.wdh2o.idv.tw/wp-content/uploads/2012/09/font-size-200x150.gif",
  },
  {
    url: "https://www.wdh2o.idv.tw/dreamweaver-%E8%A1%8C%E7%82%BA-%E9%A1%AF%E7%A4%BA%E9%9A%B1%E8%97%8F%E5%85%83%E7%B4%A0.html",
    imgUrl:
      "https://www.wdh2o.idv.tw/wp-content/uploads/2012/10/layer-200x150.jpg",
  },
  {
    url: "https://www.wdh2o.idv.tw/dreamweaver-%E8%A1%8C%E7%82%BA-%E8%A8%AD%E5%AE%9A%E5%AE%B9%E5%99%A8%E6%96%87%E5%AD%97.html",
    imgUrl:
      "https://www.wdh2o.idv.tw/wp-content/uploads/2012/10/inner-200x150.jpg",
  },
  {
    url: "https://www.wdh2o.idv.tw/%E4%BF%AE%E6%AD%A3-iphone-%E6%89%8B%E6%A9%9F%E6%97%8B%E8%BD%89%E5%BE%8C%E7%95%AB%E9%9D%A2%E6%9C%83%E6%94%BE%E5%A4%A7%E7%9A%84%E5%95%8F%E9%A1%8C.html",
    imgUrl:
      "https://www.wdh2o.idv.tw/wp-content/uploads/2014/04/fix-200x150.jpg",
  },
  {
    url: "https://www.wdh2o.idv.tw/illustrator-%E6%91%BA%E7%B4%99%E6%95%88%E6%9E%9C.html",
    imgUrl:
      "https://www.wdh2o.idv.tw/wp-content/uploads/2012/12/paper-200x150.jpg",
  },
  {
    url: "https://www.wdh2o.idv.tw/illustrator-cs6-%E6%96%B0%E5%8A%9F%E8%83%BD%E4%BB%8B%E7%B4%B9.html",
    imgUrl:
      "https://www.wdh2o.idv.tw/wp-content/uploads/2012/12/cs6-200x150.jpg",
  },
  {
    url: "https://www.wdh2o.idv.tw/dreamweaver-spry-%E9%81%B8%E5%96%AE%E5%88%97.html",
    imgUrl:
      "https://www.wdh2o.idv.tw/wp-content/uploads/2012/12/spry-menu-200x150.jpg",
  },
  {
    url: "https://www.wdh2o.idv.tw/%E6%B7%BA%E8%AB%87-html5.html",
    imgUrl:
      "https://www.wdh2o.idv.tw/wp-content/uploads/2013/01/html5-200x150.jpg",
  },
];

const ulTag = document.querySelector("ul");
const totalPage = Math.ceil(imgArr.length / 3);
let current = 0;
let page = 0;

produceImgs();
produceInation(0);
invisible();

function produceImgs() {
  for (let i = 0; i < imgArr.length; i += 1) {
    document.querySelector(
      ".slide"
    ).innerHTML += `<div class="img"><a href="${imgArr[i].url}" class="link">	<img src="${imgArr[i].imgUrl}" alt=""></a>
			</div>`;
  }
}

function produceInation(current) {
  let liTag = "";

  for (let index = 0; index < totalPage; index += 1) {
    if (current == index) {
      activeLi = "active";
    } else {
      activeLi = "";
    }
    liTag += `<li class="numb ${activeLi}"></li>`;
  }
  ulTag.innerHTML = liTag;
}

document.querySelector(".btn_pre").addEventListener("click", function () {
  if (page <= 0) {
    return;
  }
  document.querySelector(".slide").style.transform = `translateX(-${
    (page += -1) * 100
  }%)`;
  if (current >= 1) {
    produceInation(current - 1);
    current -= 1;
  }
  invisible();
});
document.querySelector(".btn_next").addEventListener("click", function () {
  if (page >= totalPage - 1) {
    return;
  }
  document.querySelector(".slide").style.transform = `translateX(-${
    (page += 1) * 100
  }%)`;
  if (current <= totalPage) {
    produceInation(current + 1);
    current += 1;
  }
  invisible();
});

function invisible() {
  if (page <= 0) {
    document.querySelector(".btn_pre").classList.add("invisible");
  } else if (page >= totalPage - 1) {
    document.querySelector(".btn_next").classList.add("invisible");
  } else {
    document.querySelector(".btn_pre").classList.remove("invisible");
    document.querySelector(".btn_next").classList.remove("invisible");
  }
}
