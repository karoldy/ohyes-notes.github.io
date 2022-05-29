[首页](/) / [html5](/html5/) / [地理位置](/html5/geographic)

# 地理位置

使用`getCurrentPosition()`方法来获取用户的位置。以实现"LBS服务"

```html
<script>
  var x=document.getElementById("demo");

  function getLocation () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML="Geolocation is not supported by this browser.";
    }
  }

  function showPosition (position) {
    x.innerHTML="Latitude: " + position.coords.latitude +
    "<br />Longitude: " + position.coords.longitude;
  }
</script>
```
