let select = document.getElementById("select");
let select2 = document.getElementById("select2");
let but = document.getElementById("button");

select.addEventListener("change", function () {
  let key = this.value;
  select2.addEventListener("change", function () {
    let key1 = this.value;
    func(key, key1);
  });
});
let arr = [];
function func(key, key1) {
  console.log(key1);
  but.onclick = function () {
    var val = document.getElementById("inp").value;
    if (key == "It") {
      let obj = {
        ekm: (val * 10) / 100,
        soc: (val * 5) / 100,
        droshm: (val * 1.5) / 100,
        ekamut: val - ((val * 10) / 100 + (val * 5) / 100 + (val * 1.5) / 100),
      };
      arr.push(obj);
    } else if (key == "other") {
      let obj = {
        ekm: (val * 20) / 100,
        soc: (val * 5) / 100,
        droshm: (val * 1.5) / 100,
        ekamut: val - ((val * 20) / 100 + (val * 5) / 100 + (val * 1.5) / 100),
      };
      arr.push(obj);
    }
    func2(arr, key1, key);
  };
}
function func2(arr, key1, key) {
  console.log(key);
  console.log(key1);
  arr.map((obj) => {
    if (key1 == "AMD") {
      document.getElementById("ekam").innerHTML = obj.ekm.toFixed(1) + "֏";
      document.getElementById("soch").innerHTML = obj.soc.toFixed(1) + "֏";
      document.getElementById("drosh").innerHTML = obj.droshm.toFixed(1) + "֏";
      document.getElementById("ekamut").innerHTML = obj.ekamut.toFixed(1) + "֏";
    } else if (key1 == "USD") {
      document.getElementById("ekam").innerHTML =
        (obj.ekm / 380).toFixed(1) + "$";
      document.getElementById("soch").innerHTML =
        (obj.soc / 380).toFixed(1) + "$";
      document.getElementById("drosh").innerHTML =
        (obj.droshm / 380).toFixed(1) + "$";
      document.getElementById("ekamut").innerHTML =
        (obj.ekamut / 380).toFixed(1) + "$";
    } else if (key1 == "EUR") {
      document.getElementById("ekam").innerHTML =
        (obj.ekm / 418).toFixed(1) + "€";
      document.getElementById("soch").innerHTML =
        (obj.soc / 418).toFixed(1) + "€";
      document.getElementById("drosh").innerHTML =
        (obj.droshm / 418).toFixed(1) + "€";
      document.getElementById("ekamut").innerHTML =
        (obj.ekamut / 418).toFixed(1) + "€";
    }
    else if (key1 == "RUB") {
      document.getElementById("ekam").innerHTML =
        (obj.ekm / 4.8).toFixed(1) + "₽";
      document.getElementById("soch").innerHTML =
        (obj.soc / 4.8).toFixed(1) + "₽";
      document.getElementById("drosh").innerHTML =
        (obj.droshm / 4.8).toFixed(1) + "₽";
      document.getElementById("ekamut").innerHTML =
        (obj.ekamut / 4.8).toFixed(1) + "₽";
    }
  });
}
